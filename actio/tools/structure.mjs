/**
 * Actio — contrôle statique de structure HTML.
 *
 * Un navigateur répare silencieusement un balisage déséquilibré : la page
 * s'affiche, et le défaut ne se voit jamais. Un client de messagerie, lui, ne
 * répare rien de la même façon — et un gabarit dont une balise ferme au mauvais
 * endroit se disloque chez la moitié des destinataires.
 *
 * Ce contrôle lit le balisage tel qu'il est écrit, sans moteur de rendu :
 *   A. équilibre des balises ;
 *   B. attribut répété sur une même balise (le second est perdu en silence) ;
 *   C. identifiant en double dans un document (une ancre y devient ambiguë).
 *
 * Usage :  node actio/tools/structure.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ICI = dirname(fileURLToPath(import.meta.url));
const RACINE = resolve(ICI, '..');

const VIDES = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'source', 'track', 'wbr', 'path', 'rect', 'line', 'use', 'circle', 'stop',
  'polygon', 'polyline', 'ellipse']);

function parcourir(rep, acc = []) {
  for (const e of readdirSync(rep)) {
    if (e === 'node_modules' || e.startsWith('.')) continue;
    const p = join(rep, e);
    if (statSync(p).isDirectory()) parcourir(p, acc);
    else if (extname(p) === '.html') acc.push(p);
  }
  return acc;
}

let echecs = 0;
const fichiers = parcourir(RACINE);

for (const f of fichiers) {
  const nom = relative(RACINE, f);
  const src = readFileSync(f, 'utf8');
  const pbs = [];

  // Les commentaires et le contenu de <script>/<style> ne sont pas du balisage.
  const propre = src
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');

  const pile = [];
  for (const m of propre.matchAll(/<\/?([a-zA-Z][\w:-]*)\b([^>]*)>/g)) {
    const [balise, tag, attrs] = m;
    const nomBalise = tag.toLowerCase();
    const ligne = propre.slice(0, m.index).split('\n').length;

    if (balise.startsWith('</')) {
      if (VIDES.has(nomBalise)) continue;
      if (!pile.length) { pbs.push(`ligne ${ligne} : </${nomBalise}> sans ouverture`); continue; }
      if (pile[pile.length - 1].tag !== nomBalise) {
        pbs.push(`ligne ${ligne} : </${nomBalise}> ferme alors que <${pile[pile.length - 1].tag}> ` +
                 `(ligne ${pile[pile.length - 1].ligne}) est encore ouvert`);
        while (pile.length && pile[pile.length - 1].tag !== nomBalise) pile.pop();
      }
      pile.pop();
      continue;
    }
    if (attrs.trimEnd().endsWith('/')) continue;

    // B. Attribut répété — les valeurs entre guillemets sont vidées d'abord :
    //    une URI de données SVG dans un href porte ses propres width= et ne
    //    doit pas compter comme un attribut de la balise.
    const attrsSansValeurs = attrs.replace(/="[^"]*"/g, '=""');
    for (const a of ['class', 'style', 'id', 'href', 'src', 'width', 'align']) {
      if ((attrsSansValeurs.match(new RegExp(`\\s${a}\\s*=`, 'gi')) || []).length > 1) {
        pbs.push(`ligne ${ligne} : <${nomBalise}> porte deux fois l’attribut ${a}`);
      }
    }
    if (!VIDES.has(nomBalise)) pile.push({ tag: nomBalise, ligne });
  }
  pile.forEach((o) => pbs.push(`ligne ${o.ligne} : <${o.tag}> jamais fermé`));

  // C. Identifiants en double
  const ids = [...propre.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const doubles = ids.filter((v, i) => ids.indexOf(v) !== i);
  [...new Set(doubles)].forEach((d) => pbs.push(`identifiant en double : « ${d} »`));

  if (pbs.length) {
    console.error(`  ${nom}`);
    pbs.slice(0, 6).forEach((p) => console.error(`      ${p}`));
    if (pbs.length > 6) console.error(`      … et ${pbs.length - 6} autre(s)`);
    echecs += pbs.length;
  } else {
    console.log(`  ${nom.padEnd(40)} OK`);
  }
}

console.log(`\n${fichiers.length} fichier(s) HTML contrôlé(s).`);
if (echecs) { console.error(`${echecs} défaut(s) de structure.`); process.exit(1); }
console.log('Balisage équilibré, aucun attribut répété, aucun identifiant en double.');
