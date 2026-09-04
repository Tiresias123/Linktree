/**
 * Actio — suite de vérification.
 *
 * Trois familles de contrôles, exécutées sur les pages réellement rendues :
 *   A. Liens — tout lien interne doit aboutir ; tout lien externe doit être
 *      absolu, en HTTPS, et porter rel="noopener" quand il ouvre un tiers.
 *   B. Accessibilité — les invariants qu'on ne peut pas se permettre de rater
 *      sur un média qui vise WCAG 2.1 AA : un seul h1, pas de saut de niveau
 *      de titre, toute image légendée, tout champ étiqueté, langue déclarée,
 *      points de repère présents.
 *   C. Contraste — rapport calculé entre la couleur du texte et la couleur de
 *      fond effectivement peinte derrière lui, dans les deux thèmes. C'est le
 *      seul contrôle qui attrape une régression de jeton.
 *
 * Usage :  node actio/tools/verifier.mjs
 * Code de sortie non nul si un contrôle échoue.
 */
import { chromium } from 'playwright-core';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ICI = dirname(fileURLToPath(import.meta.url));
const PROTO = resolve(ICI, '..', 'prototype');
const CHROME = process.env.ACTIO_CHROME ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const PAGES = ['index.html', 'fr/index.html', 'fr/article.html', 'fr/registre.html', 'en/index.html'];

/* --- Calcul du rapport de contraste WCAG ------------------------------- */
function canal(v) { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }
function luminance([r, g, b]) { return 0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b); }
function rapport(a, b) {
  const la = luminance(a), lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}
function versRGB(css) {
  const m = css.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
  if (p.length >= 4 && p[3] === 0) return null;      // transparent : on remonte
  return [p[0], p[1], p[2]];
}

const echecs = [];
const note = (page, famille, message) => echecs.push({ page, famille, message });

const navigateur = await chromium.launch({
  executablePath: CHROME, args: ['--no-sandbox', '--disable-gpu'],
});

for (const fichier of PAGES) {
  for (const theme of ['light', 'dark']) {
    const ctx = await navigateur.newContext({
      viewport: { width: 1280, height: 900 }, colorScheme: theme, locale: 'fr-CA',
    });
    const p = await ctx.newPage();
    await p.addInitScript((t) => { try { localStorage.setItem('actio.theme', t); } catch (e) {} }, theme);
    await p.goto(pathToFileURL(join(PROTO, fichier)).href, { waitUntil: 'load' });
    await p.waitForTimeout(250);
    const etiquette = `${fichier} [${theme}]`;

    /* ---------- A. Liens (une seule fois par page) ---------- */
    if (theme === 'light') {
      const liens = await p.$$eval('a[href]', (as) => as.map((a) => ({
        href: a.getAttribute('href'),
        rel: a.getAttribute('rel') || '',
        texte: (a.textContent || '').trim().slice(0, 40),
      })));
      for (const l of liens) {
        if (!l.href || l.href.startsWith('#') || l.href.startsWith('mailto:') || l.href.startsWith('tel:')) continue;
        if (/^https?:\/\//.test(l.href)) {
          if (l.href.startsWith('http://')) note(etiquette, 'liens', `lien externe non chiffré : ${l.href}`);
          if (!/noopener/.test(l.rel)) note(etiquette, 'liens', `lien externe sans rel="noopener" : ${l.href}`);
          continue;
        }
        const cible = l.href.split('#')[0];
        if (!cible) continue;
        const chemin = resolve(dirname(join(PROTO, fichier)), cible);
        if (!existsSync(chemin)) note(etiquette, 'liens', `lien interne cassé : ${cible} (« ${l.texte} »)`);
      }

      // Ancres internes : toute cible #id doit exister.
      const ancresMortes = await p.evaluate(() =>
        [...document.querySelectorAll('a[href^="#"]')]
          .map((a) => a.getAttribute('href'))
          .filter((h) => h && h !== '#' && !document.getElementById(h.slice(1)))
      );
      ancresMortes.forEach((h) => note(etiquette, 'liens', `ancre inexistante : ${h}`));
    }

    /* ---------- B. Accessibilité ---------- */
    if (theme === 'light') {
      const a11y = await p.evaluate(() => {
        const r = { h1: 0, sauts: [], imagesSansAlt: 0, champsSansEtiquette: [], lang: document.documentElement.lang,
                    reperes: {}, boutonsSansNom: 0 };
        r.h1 = document.querySelectorAll('h1').length;
        let precedent = 0;
        document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((h) => {
          const n = +h.tagName[1];
          if (precedent && n > precedent + 1) r.sauts.push(`h${precedent} → h${n} : « ${h.textContent.trim().slice(0, 45)} »`);
          precedent = n;
        });
        document.querySelectorAll('img').forEach((i) => { if (!i.hasAttribute('alt')) r.imagesSansAlt++; });
        document.querySelectorAll('input, select, textarea').forEach((c) => {
          if (c.type === 'hidden' || c.type === 'submit' || c.type === 'reset') return;
          const parEtiquette = c.id && document.querySelector(`label[for="${CSS.escape(c.id)}"]`);
          const englobe = c.closest('label');
          if (!parEtiquette && !englobe && !c.getAttribute('aria-label') && !c.getAttribute('aria-labelledby')) {
            r.champsSansEtiquette.push(c.name || c.type);
          }
        });
        document.querySelectorAll('button').forEach((b) => {
          const nom = (b.textContent || '').trim() || b.getAttribute('aria-label') || b.getAttribute('title');
          if (!nom) r.boutonsSansNom++;
        });
        r.reperes = {
          main: document.querySelectorAll('main').length,
          header: document.querySelectorAll('header').length,
          footer: document.querySelectorAll('footer').length,
          nav: document.querySelectorAll('nav').length,
        };
        // Deux repères de même rôle doivent être distingués par un nom.
        r.navSansNom = [...document.querySelectorAll('nav')]
          .filter((n) => !n.getAttribute('aria-label') && !n.getAttribute('aria-labelledby')).length;
        return r;
      });

      if (a11y.h1 !== 1) note(etiquette, 'a11y', `${a11y.h1} élément(s) h1 — il en faut exactement un`);
      a11y.sauts.forEach((s) => note(etiquette, 'a11y', `saut de niveau de titre : ${s}`));
      if (a11y.imagesSansAlt) note(etiquette, 'a11y', `${a11y.imagesSansAlt} image(s) sans attribut alt`);
      a11y.champsSansEtiquette.forEach((c) => note(etiquette, 'a11y', `champ sans étiquette : ${c}`));
      if (a11y.boutonsSansNom) note(etiquette, 'a11y', `${a11y.boutonsSansNom} bouton(s) sans nom accessible`);
      if (!a11y.lang) note(etiquette, 'a11y', 'attribut lang absent sur <html>');
      if (a11y.reperes.main !== 1) note(etiquette, 'a11y', `${a11y.reperes.main} repère <main> — il en faut un`);
      if (a11y.navSansNom) note(etiquette, 'a11y', `${a11y.navSansNom} élément(s) <nav> sans nom accessible`);
    }

    /* ---------- C. Contraste sur le DOM rendu ---------- */
    const contrastes = await p.evaluate(() => {
      const lire = (c) => {
        const m = c.match(/rgba?\(([^)]+)\)/);
        if (!m) return null;
        const v = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
        return { r: v[0], v: v[1], b: v[2], a: v.length >= 4 ? v[3] : 1 };
      };
      // Compose les couches de fond de bas en haut, en tenant compte de l'alpha.
      // Un fond semi-transparent ne « remplace » pas le fond du parent : il s'y
      // mélange. Sans cela la sonde produit des rapports faux.
      const fondEffectif = (el) => {
        const couches = [];
        let n = el;
        while (n && n !== document.documentElement) {
          const st = getComputedStyle(n);
          // Un dégradé n'est pas mesurable en une couleur : on abandonne.
          if (st.backgroundImage && st.backgroundImage.includes('gradient')) return null;
          const c = lire(st.backgroundColor);
          if (c && c.a > 0) {
            couches.unshift(c);
            if (c.a >= 1) break;
          }
          n = n.parentElement;
        }
        const rac = lire(getComputedStyle(document.documentElement).backgroundColor)
                 || lire(getComputedStyle(document.body).backgroundColor)
                 || { r: 255, v: 255, b: 255, a: 1 };
        let acc = rac.a >= 1 ? rac : { r: 255, v: 255, b: 255, a: 1 };
        for (const c of couches) {
          acc = {
            r: c.r * c.a + acc.r * (1 - c.a),
            v: c.v * c.a + acc.v * (1 - c.a),
            b: c.b * c.a + acc.b * (1 - c.a),
            a: 1,
          };
        }
        return `rgb(${Math.round(acc.r)}, ${Math.round(acc.v)}, ${Math.round(acc.b)})`;
      };
      const vus = new Set(), sortie = [];
      let st_color_effective;
      const noeuds = document.querySelectorAll(
        'p, li, a, span, h1, h2, h3, h4, h5, h6, td, th, label, button, .badge, .juridiction, .carte__pied, .filtres__compte'
      );
      for (const el of noeuds) {
        const t = (el.textContent || '').trim();
        if (!t || el.children.length > 0 && !/\S/.test(el.childNodes[0]?.textContent || '')) continue;
        const st = getComputedStyle(el);
        if (st.visibility === 'hidden' || st.display === 'none' || +st.opacity === 0) continue;
        // L'opacité d'un ancêtre atténue le texte sans changer sa couleur
        // calculée : sans ce cumul, un bloc à opacity:.72 passe inaperçu.
        let opacite = 1;
        for (let a = el; a && a !== document.documentElement; a = a.parentElement) {
          opacite *= parseFloat(getComputedStyle(a).opacity || '1');
        }
        if (opacite < 0.999) {
          const t = lire(st.color), f = lire(fondEffectif(el) || 'rgb(255,255,255)');
          if (t && f) {
            st_color_effective = `rgb(${Math.round(t.r * opacite + f.r * (1 - opacite))}, ` +
              `${Math.round(t.v * opacite + f.v * (1 - opacite))}, ` +
              `${Math.round(t.b * opacite + f.b * (1 - opacite))})`;
          }
        } else { st_color_effective = st.color; }
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        const fond = fondEffectif(el);
        if (fond === null) continue;   // fond en dégradé : non mesurable
        const cle = `${st_color_effective}|${fond}|${st.fontSize}|${st.fontWeight}`;
        if (vus.has(cle)) continue;
        vus.add(cle);
        sortie.push({
          couleur: st_color_effective, fond,
          px: parseFloat(st.fontSize), graisse: +st.fontWeight,
          selecteur: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : ''),
          extrait: t.slice(0, 40),
        });
      }
      return sortie;
    });

    for (const c of contrastes) {
      const av = versRGB(c.couleur), ar = versRGB(c.fond);
      if (!av || !ar) continue;
      const grand = c.px >= 24 || (c.px >= 18.66 && c.graisse >= 700);
      const seuil = grand ? 3 : 4.5;
      const r = rapport(av, ar);
      if (r < seuil - 0.01) {
        note(etiquette, 'contraste',
          `${r.toFixed(2)}:1 < ${seuil} — ${c.selecteur} (${c.px}px/${c.graisse}) « ${c.extrait} »`);
      }
    }

    await ctx.close();
  }
  console.log(`  ${fichier.padEnd(16)} vérifié (liens, accessibilité, contraste × 2 thèmes)`);
}

await navigateur.close();

if (!echecs.length) {
  console.log('\nAucun défaut. Liens, accessibilité et contrastes conformes sur les trois pages.');
  process.exit(0);
}

console.error(`\n${echecs.length} défaut(s) :\n`);
for (const f of ['liens', 'a11y', 'contraste']) {
  const lot = echecs.filter((e) => e.famille === f);
  if (!lot.length) continue;
  console.error(`  ── ${f.toUpperCase()} (${lot.length})`);
  lot.forEach((e) => console.error(`     ${e.page.padEnd(24)} ${e.message}`));
}
process.exit(1);
