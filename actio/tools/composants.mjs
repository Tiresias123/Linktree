/**
 * Actio — galerie des composants Tailwind (Module 3).
 *
 * Les trois composants vivent chacun dans un fragment HTML autonome
 * (prototype/composants/*.html, hors index.html). La galerie index.html les
 * montre rendus ET en source. Pour que le rendu et la source ne divergent
 * jamais du fragment, ce script :
 *   1. injecte chaque fragment entre ses marqueurs <!--RENDU:clé--> … dans
 *      la galerie, et sa version échappée entre <!--SOURCE:clé--> … ;
 *   2. vérifie que chaque classe utilitaire employée par un fragment existe
 *      dans composants.css compilé — sinon la feuille est périmée
 *      (relancer `npm run tailwind`) ;
 *   3. vérifie qu'aucune couleur hexadécimale n'est écrite en dur dans un
 *      fragment : toute couleur vient d'un jeton, via @theme inline.
 *
 * Usage :  node actio/tools/composants.mjs
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ICI = dirname(fileURLToPath(import.meta.url));
const REP = resolve(ICI, '..', 'prototype', 'composants');
const GALERIE = join(REP, 'index.html');
const CSS = join(REP, 'composants.css');

let echecs = 0;
const note = (m) => { console.error(`  ÉCHEC ${m}`); echecs++; };

if (!existsSync(CSS)) { note('composants.css absent — lancer `npm run tailwind`'); process.exit(1); }
const css = readFileSync(CSS, 'utf8');
let galerie = readFileSync(GALERIE, 'utf8');

// Les guillemets aussi : sinon un `id="…"` affiché en source est compté deux
// fois par tools/structure.mjs, qui lit le fichier et non le DOM.
const echapper = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Tailwind échappe les caractères spéciaux des classes dans les sélecteurs :
// « border-alerte/30 » devient « .border-alerte\/30 », « py-[3px] » « .py-\[3px\] ».
const selecteur = (c) => '.' + c.replace(/([^a-zA-Z0-9_-])/g, '\\$1');

const fragments = readdirSync(REP)
  .filter((f) => f.endsWith('.html') && f !== 'index.html')
  .sort();

for (const f of fragments) {
  const cle = f.replace(/\.html$/, '');
  const html = readFileSync(join(REP, f), 'utf8').trimEnd();

  // --- 3. Aucune couleur en dur ---
  const hex = html.match(/#[0-9A-Fa-f]{3,8}\b/g);
  if (hex) note(`${f} — couleur(s) écrite(s) en dur : ${[...new Set(hex)].join(', ')} (employer un jeton via @theme)`);

  // --- 2. Chaque classe est compilée ---
  const classes = new Set(
    [...html.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].trim().split(/\s+/)).filter(Boolean)
  );
  const manquantes = [...classes].filter((c) => !css.includes(selecteur(c)));
  if (manquantes.length) note(`${f} — classe(s) absente(s) de composants.css : ${manquantes.join(', ')} — relancer \`npm run tailwind\``);

  // --- 1. Injection dans la galerie ---
  const rendu = new RegExp(`(<!--RENDU:${cle}-->)[\\s\\S]*?(<!--FIN-RENDU:${cle}-->)`);
  const source = new RegExp(`(<!--SOURCE:${cle}-->)[\\s\\S]*?(<!--FIN-SOURCE:${cle}-->)`);
  if (!rendu.test(galerie)) note(`index.html — marqueurs RENDU absents pour « ${cle} »`);
  if (!source.test(galerie)) note(`index.html — marqueurs SOURCE absents pour « ${cle} »`);
  galerie = galerie
    .replace(rendu, `$1\n${html}\n$2`)
    .replace(source, `$1${echapper(html)}$2`);
  console.log(`  ${f.padEnd(26)} ${String(classes.size).padStart(3)} classes · ${String(Buffer.byteLength(html)).padStart(5)} octets`);
}

writeFileSync(GALERIE, galerie, 'utf8');
console.log(`\n${fragments.length} composant(s) injecté(s) dans prototype/composants/index.html (rendu + source).`);
if (echecs) { console.error(`${echecs} contrôle(s) en échec.`); process.exit(1); }
console.log('Toutes les classes des composants sont compilées ; aucune couleur hors jetons.');
