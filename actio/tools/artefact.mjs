/**
 * Actio — fusion du prototype en un document unique consultable.
 *
 * Le prototype est fait de cinq pages (la galerie de composants Tailwind,
 * prototype/composants/index.html, a sa propre feuille et reste à part) qui partagent des feuilles de style et un
 * script externes. Un artefact publié est un document unique : il faut donc
 * tout replier dedans, sans réécrire une ligne du système de design.
 *
 * Deux difficultés, et leur traitement :
 *   — les identifiants se répètent d'une page à l'autre (#principal, #courriel,
 *     #regulation…). Réunis dans un même document ils deviennent ambigus, et
 *     getElementById comme les ancres cessent de fonctionner. Chaque page reçoit
 *     donc son préfixe.
 *   — les liens entre pages pointent vers des fichiers qui n'existent plus. Ils
 *     deviennent des changements d'écran, en conservant l'ancre visée.
 *
 * Ce qui n'est PAS modifié : le balisage, les feuilles de style, le script. Ce
 * que l'artefact montre est exactement ce que le prototype rend.
 *
 * Usage :  node actio/tools/artefact.mjs [fichier-de-sortie]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ICI = dirname(fileURLToPath(import.meta.url));
const RACINE = resolve(ICI, '..');
const PROTO = join(RACINE, 'prototype');
const SORTIE = resolve(process.argv[2] ?? join(RACINE, '..', '.artefact-actio.html'));

const DEPOT = 'https://github.com/Tiresias123/Linktree/blob/claude/systeme-complet-livrable-1-ptyi2x/actio';

const ECRANS = [
  { cle: 'fr',          fichier: 'fr/index.html',    nom: 'Accueil',  langue: 'fr-CA', defaut: true },
  { cle: 'fr-article',  fichier: 'fr/article.html',  nom: 'Article',  langue: 'fr-CA' },
  { cle: 'fr-registre', fichier: 'fr/registre.html', nom: 'Registre', langue: 'fr-CA' },
  { cle: 'en',          fichier: 'en/index.html',    nom: 'English',  langue: 'en-CA' },
  { cle: 'portail',     fichier: 'index.html',       nom: 'Portail',  langue: 'fr-CA' },
];

/* Correspondance des liens entre fichiers → changements d'écran. */
const LIENS = {
  'fr':          { 'index.html': 'fr', 'article.html': 'fr-article', 'registre.html': 'fr-registre',
                   '../en/index.html': 'en' },
  'fr-article':  { 'index.html': 'fr', 'article.html': 'fr-article', 'registre.html': 'fr-registre',
                   '../en/index.html': 'en' },
  'fr-registre': { 'index.html': 'fr', 'article.html': 'fr-article', 'registre.html': 'fr-registre',
                   '../en/index.html': 'en' },
  'en':          { 'index.html': 'en', '../fr/index.html': 'fr', '../fr/article.html': 'fr-article',
                   '../fr/registre.html': 'fr-registre' },
  'portail':     { 'fr/index.html': 'fr', 'en/index.html': 'en' },
};

const ATTRS_ID = ['id', 'for', 'aria-controls', 'aria-labelledby', 'aria-describedby'];

function preparer(ecran) {
  const brut = readFileSync(join(PROTO, ecran.fichier), 'utf8');

  // Le style en ligne du portail voyage avec lui.
  const styles = [...brut.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');

  let corps = brut.match(/<body[^>]*>([\s\S]*)<\/body>/)[1];
  corps = corps.replace(/<script[\s\S]*?<\/script>/g, '');

  // --- Liens entre écrans, ancre conservée -----------------------------------
  for (const [cible, vers] of Object.entries(LIENS[ecran.cle])) {
    const echappe = cible.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    corps = corps.replace(
      new RegExp(`href="${echappe}(#[\\w-]+)?"`, 'g'),
      (_, ancre) => `href="#" data-vers="${vers}"${ancre ? ` data-ancre="${vers}-${ancre.slice(1)}"` : ''}`
    );
  }
  // Le lien du bandeau de probité mène au registre de vérification, sur le dépôt.
  corps = corps.replace(/href="\.\.\/\.\.\/docs\/annexes\/registre-de-verification\.md"/g,
    `href="${DEPOT}/docs/annexes/registre-de-verification.md" rel="external noopener" target="_blank"`);

  // --- Espacement des identifiants -------------------------------------------
  const p = (v) => v.split(/\s+/).filter(Boolean).map((x) => `${ecran.cle}-${x}`).join(' ');
  for (const attr of ATTRS_ID) {
    corps = corps.replace(new RegExp(`\\s${attr}="([^"]+)"`, 'g'), (_, v) => ` ${attr}="${p(v)}"`);
  }
  corps = corps.replace(/href="#([\w-]+)"/g, (_, v) => `href="#${ecran.cle}-${v}"`);
  corps = corps.replace(/url\(#([\w-]+)\)/g, (_, v) => `url(#${ecran.cle}-${v})`);

  return {
    styles,
    html: `<div class="ecran" id="ecran-${ecran.cle}" lang="${ecran.langue}"${ecran.defaut ? '' : ' hidden'}>\n${corps}\n</div>`,
  };
}

const prepares = ECRANS.map(preparer);

const css = ['tokens.css', 'actio.css', 'article.css', 'registre.css']
  .map((f) => `/* ===== ${f} ===== */\n${readFileSync(join(PROTO, 'assets', f), 'utf8')}`)
  .join('\n\n');

const js = readFileSync(join(PROTO, 'assets', 'actio.js'), 'utf8');

const barre = ECRANS.map((e) =>
  `<button type="button" class="ecrans__lien" data-vers="${e.cle}"${e.defaut ? ' aria-current="true"' : ''}>${e.nom}</button>`
).join('\n      ');

const sortie = `<title>Actio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap">

<style>
${css}

/* ==========================================================================
   Ajouts propres à l'artefact — sélecteur d'écran.
   Le prototype est fait de cinq pages ; réunies dans un document unique, elles
   ont besoin d'un moyen d'être atteintes autrement qu'en devinant. La barre
   reprend les jetons du système : elle n'introduit aucune couleur nouvelle.
   ========================================================================== */
.ecrans {
  position: sticky; top: 0; z-index: 400;
  display: flex; align-items: center; gap: var(--e-4); flex-wrap: wrap;
  padding: var(--e-3) var(--grille-marge);
  background: var(--encre-fond);
  border-bottom: var(--trait) solid color-mix(in srgb, var(--encre-texte) 18%, transparent);
}
.ecrans__titre {
  font-family: var(--police-texte); font-size: var(--t-micro);
  font-weight: var(--graisse-grasse); letter-spacing: var(--interlettre-etiq);
  text-transform: uppercase; color: var(--encre-accent); margin-right: var(--e-2);
}
.ecrans__lien {
  background: transparent; border: var(--trait) solid transparent;
  border-radius: var(--rayon-2); cursor: pointer;
  padding: 5px var(--e-3);
  font-family: var(--police-texte); font-size: var(--t-petit);
  font-weight: var(--graisse-demi); color: var(--encre-texte-2);
}
.ecrans__lien:hover { color: var(--encre-texte); border-color: color-mix(in srgb, var(--encre-texte) 28%, transparent); }
.ecrans__lien[aria-current="true"] { background: var(--encre-texte); color: var(--encre-fond); }
.ecrans__depot {
  margin-left: auto; font-family: var(--police-donnee); font-size: var(--t-micro);
  color: var(--encre-texte-2); text-decoration: none; white-space: nowrap;
}
.ecrans__depot:hover { color: var(--encre-texte); text-decoration: underline; }
.ecran[hidden] { display: none !important; }

/* La barre d'écrans est collante, comme l'en-tête du site : sans décalage, le
   second passerait sous la première au défilement. La hauteur de la barre est
   mesurée à l'exécution — elle se replie sur deux lignes en dessous d'environ
   700 px — et le sommaire collant de l'article suit le même décalage. */
.entete { top: var(--decalage-artefact, 0px); }
.sommaire { top: calc(96px + var(--decalage-artefact, 0px)); }
.prose h2, .prose h3 { scroll-margin-top: calc(96px + var(--decalage-artefact, 0px)); }
</style>

<nav class="ecrans" aria-label="Écrans du prototype">
      <span class="ecrans__titre">Prototype Actio</span>
      ${barre}
      <a class="ecrans__depot" href="${DEPOT}" rel="external noopener" target="_blank">Dépôt et livrables ↗</a>
</nav>

${prepares.map((x) => x.html).join('\n\n')}

<style>
${prepares.map((x) => x.styles).filter(Boolean).join('\n')}
</style>

<script>
/* Anti-scintillement : reprend le thème stocké avant le premier rendu. */
(function(){try{var t=localStorage.getItem('actio.theme');
if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
</script>

<script>
${js}
</script>

<script>
/* ==========================================================================
   Routeur d'écrans. Les cinq pages du prototype vivent dans un même document ;
   le passage de l'une à l'autre remplace la navigation entre fichiers, en
   conservant l'ancre visée par le lien d'origine.
   ========================================================================== */
(function () {
  'use strict';
  var CLES = ${JSON.stringify(ECRANS.map((e) => e.cle))};
  var DEFAUT = ${JSON.stringify(ECRANS.find((e) => e.defaut).cle)};

  function afficher(cle, ancre) {
    if (CLES.indexOf(cle) === -1) cle = DEFAUT;
    CLES.forEach(function (k) {
      var el = document.getElementById('ecran-' + k);
      if (el) el.hidden = (k !== cle);
    });
    document.querySelectorAll('.ecrans__lien').forEach(function (b) {
      b.setAttribute('aria-current', String(b.dataset.vers === cle));
    });
    // La langue du document suit l'écran affiché : un lecteur d'écran doit
    // changer de voix en passant à l'édition anglaise.
    var ecran = document.getElementById('ecran-' + cle);
    if (ecran) document.documentElement.lang = ecran.getAttribute('lang') || 'fr-CA';

    var cible = ancre && document.getElementById(ancre);
    if (cible) cible.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);

    try { history.replaceState(null, '', '#' + cle + (ancre ? '/' + ancre : '')); } catch (e) {}
  }

  document.addEventListener('click', function (e) {
    var d = e.target.closest('[data-vers]');
    if (!d) return;
    e.preventDefault();
    afficher(d.dataset.vers, d.dataset.ancre);
  }, true);

  // Hauteur réelle de la barre d'écrans, reportée sur les éléments collants.
  var barre = document.querySelector('.ecrans');
  function mesurer() {
    if (!barre) return;
    document.documentElement.style.setProperty('--decalage-artefact', barre.offsetHeight + 'px');
  }
  mesurer();
  window.addEventListener('resize', mesurer);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(mesurer);

  var h = (location.hash || '').replace(/^#/, '').split('/');
  afficher(h[0] || DEFAUT, h[1]);
})();
</script>
`;

writeFileSync(SORTIE, sortie, 'utf8');
console.log(`Artefact écrit : ${SORTIE}`);
console.log(`  ${ECRANS.length} écrans · ${Math.round(sortie.length / 1024)} Ko`);
