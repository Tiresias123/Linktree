/**
 * Actio — harnais de capture visuelle.
 *
 * Rend chaque écran du prototype dans les deux thèmes et trois largeurs, et
 * vérifie au passage deux invariants tenus pour non négociables :
 *   1. aucun débordement horizontal du document (le corps ne défile jamais
 *      latéralement, quelle que soit la largeur) ;
 *   2. tout texte reste dans la mesure de lecture définie par les jetons.
 *
 * Usage :  node actio/tools/captures.mjs [répertoire-de-sortie]
 * Le binaire Chromium est celui préinstallé ; aucun téléchargement.
 */
import { chromium } from 'playwright-core';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const ICI = dirname(fileURLToPath(import.meta.url));
const PROTO = resolve(ICI, '..', 'prototype');
const SORTIE = resolve(process.argv[2] ?? join(ICI, '..', '..', '.captures'));
const CHROME = process.env.ACTIO_CHROME
  ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const PAGES = [
  { nom: 'accueil', fichier: 'index.html' },
  { nom: 'article', fichier: 'article.html' },
];
const LARGEURS = [
  { nom: 'bureau', w: 1440, h: 900 },
  { nom: 'tablette', w: 834, h: 1000 },
  { nom: 'mobile', w: 390, h: 844 },
];
const THEMES = ['light', 'dark'];

mkdirSync(SORTIE, { recursive: true });

const navigateur = await chromium.launch({
  executablePath: CHROME,
  args: ['--no-sandbox', '--disable-gpu'],
});

let echecs = 0;

for (const page of PAGES) {
  for (const t of THEMES) {
    for (const l of LARGEURS) {
      const ctx = await navigateur.newContext({
        viewport: { width: l.w, height: l.h },
        deviceScaleFactor: 1,
        colorScheme: t,
        locale: 'fr-CA',
        reducedMotion: 'reduce',
      });
      const p = await ctx.newPage();
      // Le thème est fixé avant le premier rendu, comme le fait le script
      // anti-scintillement en production.
      await p.addInitScript((theme) => {
        try { localStorage.setItem('actio.theme', theme); } catch (e) {}
      }, t);

      const url = pathToFileURL(join(PROTO, page.fichier)).href;
      await p.goto(url, { waitUntil: 'load' });
      // Les polices distantes peuvent être injoignables hors ligne : on ne
      // bloque pas dessus, on laisse simplement la pile de repli s'appliquer.
      await p.waitForTimeout(400);

      const nom = `${page.nom}-${t}-${l.nom}`;
      await p.screenshot({ path: join(SORTIE, `${nom}.png`), fullPage: true });

      // --- Invariant 1 : pas de défilement horizontal -------------------
      const debord = await p.evaluate(() => {
        const d = document.documentElement;
        return { scroll: d.scrollWidth, client: d.clientWidth };
      });
      if (debord.scroll > debord.client + 1) {
        console.error(
          `  ÉCHEC ${nom} : débordement horizontal ` +
          `(${debord.scroll} px pour ${debord.client} px de fenêtre)`
        );
        // Identifier les coupables aide plus qu'un simple constat.
        const coupables = await p.evaluate((limite) =>
          [...document.querySelectorAll('body *')]
            .filter((el) => {
              const r = el.getBoundingClientRect();
              return r.width > 0 && r.right > limite + 1 &&
                     getComputedStyle(el).overflowX !== 'auto' &&
                     !el.closest('[style*="overflow"], .tableau, .schema__corps, .cotations__piste');
            })
            .slice(0, 6)
            .map((el) => `${el.tagName.toLowerCase()}.${[...el.classList].join('.')} → ${Math.round(el.getBoundingClientRect().right)} px`),
          debord.client
        );
        coupables.forEach((c) => console.error(`         ${c}`));
        echecs++;
      }

      // --- Invariant 2 : mesure de lecture respectée --------------------
      const prose = await p.evaluate(() => {
        const el = document.querySelector('.prose');
        return el ? Math.round(el.getBoundingClientRect().width) : null;
      });
      if (prose !== null && prose > 800) {
        console.error(`  ÉCHEC ${nom} : colonne de prose à ${prose} px (mesure maximale 800 px)`);
        echecs++;
      }

      const hauteur = await p.evaluate(() => document.documentElement.scrollHeight);
      console.log(`  ${nom.padEnd(28)} ${l.w}×${hauteur} px${prose ? ` · prose ${prose} px` : ''}`);

      await ctx.close();
    }
  }
}

await navigateur.close();

console.log(`\nCaptures écrites dans ${SORTIE}`);
if (echecs > 0) {
  console.error(`${echecs} invariant(s) de mise en page en échec.`);
  process.exit(1);
}
console.log('Tous les invariants de mise en page sont respectés.');
