/**
 * Actio — contrôle de cohérence des livrables avec le code.
 *
 * Les trois livrables ne décrivent pas une intention : ils spécifient des
 * fichiers qui existent. Ce script vérifie que la spécification et le code
 * n'ont pas divergé, sur trois points mesurables :
 *
 *   A. Tout chemin de fichier cité entre accents graves existe réellement.
 *   B. Toute classe CSS citée est définie dans une feuille de style.
 *   C. Tout jeton --xxx cité est déclaré dans tokens.css.
 *
 * Un document qui cite une classe inexistante n'est pas une erreur de style :
 * c'est une instruction que personne ne pourra exécuter.
 *
 * Usage :  node actio/tools/docs.mjs
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ICI = dirname(fileURLToPath(import.meta.url));
const RACINE = resolve(ICI, '..');

function parcourir(rep, acc = []) {
  for (const e of readdirSync(rep)) {
    if (e === 'node_modules' || e === 'dist' || e.startsWith('.')) continue;
    const p = join(rep, e);
    if (statSync(p).isDirectory()) parcourir(p, acc);
    else acc.push(p);
  }
  return acc;
}

const tousFichiers = parcourir(RACINE);
const docs = tousFichiers.filter((f) => f.includes('/docs/') && extname(f) === '.md');
// Les feuilles autonomes, PLUS les blocs <style> en ligne : le portail de
// langue et le gabarit de courriel définissent leurs classes sur place, faute
// de pouvoir charger une feuille externe.
const css = [
  ...tousFichiers.filter((f) => extname(f) === '.css').map((f) => readFileSync(f, 'utf8')),
  ...tousFichiers.filter((f) => extname(f) === '.html')
    .flatMap((f) => [...readFileSync(f, 'utf8').matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)]
      .map((m) => m[1])),
].join('\n');

const classesDefinies = new Set((css.match(/\.[a-zA-Z][\w-]*/g) || []).map((c) => c.slice(1)));
const jetonsDefinis = new Set((css.match(/--[a-z0-9-]+(?=\s*:)/g) || []));

// Fragments qui ressemblent à une classe ou à un jeton sans en être :
// modificateurs BEM cités seuls, séparateurs markdown, unités.
const IGNORER_CLASSE = /^(md|html|css|js|mjs|json|ca|qc|com|fr|en|xml|txt|pdf|png|svg|0|[0-9])$/i;

let echecs = 0;
const note = (doc, message) => { console.error(`  ${doc.padEnd(34)} ${message}`); echecs++; };

for (const d of docs) {
  const nom = d.replace(RACINE + '/', '');
  const texte = readFileSync(d, 'utf8');

  // --- A. Chemins de fichiers cités ---
  const chemins = new Set(
    (texte.match(/`([\w./-]+\/[\w./-]+\.(?:html|css|js|mjs|json|md))`/g) || [])
      .map((m) => m.replace(/`/g, ''))
  );
  for (const c of chemins) {
    const candidats = [
      resolve(RACINE, c),
      resolve(RACINE, c.replace(/^actio\//, '')),
      resolve(RACINE, '..', c),
      resolve(RACINE, 'prototype', c),
      resolve(RACINE, 'newsletter', c),
    ];
    if (!candidats.some(existsSync)) note(nom, `chemin cité inexistant : ${c}`);
  }

  // --- B. Classes CSS citées ---
  const classes = new Set(
    (texte.match(/`\.([a-zA-Z][\w-]*)`/g) || []).map((m) => m.slice(2, -1))
  );
  for (const c of classes) {
    if (IGNORER_CLASSE.test(c)) continue;
    if (!classesDefinies.has(c)) note(nom, `classe CSS citée mais non définie : .${c}`);
  }

  // --- C. Jetons cités ---
  const jetons = new Set(
    (texte.match(/`(--[a-z0-9-]+)`/g) || []).map((m) => m.slice(1, -1))
  );
  for (const j of jetons) {
    if (jetonsDefinis.has(j)) continue;
    // « --info », « --actuel » : ce ne sont pas des jetons mais des suffixes de
    // modificateur cités seuls. On ne les signale que si aucune classe ne les porte.
    const suffixe = j.slice(2);
    if ([...classesDefinies].some((c) => c.endsWith('--' + suffixe))) continue;
    note(nom, `jeton cité mais non déclaré : ${j}`);
  }
}

console.log(`\n${docs.length} document(s) contrôlé(s) contre ${classesDefinies.size} classes ` +
            `et ${jetonsDefinis.size} jetons définis.`);
if (echecs) { console.error(`${echecs} référence(s) rompue(s) entre les livrables et le code.`); process.exit(1); }
console.log('Toutes les références des livrables au code sont valides.');
