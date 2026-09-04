/* ==========================================================================
   ACTIO — Comportements d'interface
   Aucune dépendance externe. Progressive enhancement : la page reste
   entièrement lisible et navigable si ce script ne s'exécute pas.
   ========================================================================== */
(function () {
  'use strict';

  var STOCKAGE = {
    theme:  'actio.theme',
    langue: 'actio.langue'
  };

  /* --- Utilitaires de stockage tolérants aux pannes ---------------------- */
  function lire(cle) {
    try { return window.localStorage.getItem(cle); } catch (e) { return null; }
  }
  function ecrire(cle, valeur) {
    try { window.localStorage.setItem(cle, valeur); } catch (e) { /* navigation privée */ }
  }

  /* ======================================================================
     1. Thème clair / sombre
     Trois états : « auto » (aucun attribut, on suit le système), « light »,
     « dark ». Le choix explicite prime dans les deux sens.
     ====================================================================== */
  function appliquerTheme(theme) {
    var racine = document.documentElement;
    if (theme === 'light' || theme === 'dark') {
      racine.setAttribute('data-theme', theme);
    } else {
      racine.removeAttribute('data-theme');
    }
    document.querySelectorAll('[data-action="theme"]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.theme === theme));
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      var sombre = theme === 'dark' ||
        (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      meta.setAttribute('content', sombre ? '#0B1420' : '#FAF8F4');
    }
  }

  // Le choix stocké prime ; à défaut, on respecte un data-theme déjà posé dans le HTML
  // (rendu côté serveur ou script anti-scintillement), et seulement ensuite « auto ».
  appliquerTheme(lire(STOCKAGE.theme) ||
                 document.documentElement.getAttribute('data-theme') || 'auto');

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-action="theme"]');
    if (!b) return;
    var t = b.dataset.theme;
    ecrire(STOCKAGE.theme, t);
    appliquerTheme(t);
  });

  /* ======================================================================
     2. Bilinguisme FR / EN canadien
     Chaque nœud traduisible porte data-fr et data-en. On bascule le texte,
     l'attribut lang du document et les libellés d'accessibilité.
     ====================================================================== */
  function appliquerLangue(langue) {
    var lang = langue === 'en' ? 'en-CA' : 'fr-CA';
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-fr]').forEach(function (n) {
      var v = langue === 'en' ? n.getAttribute('data-en') : n.getAttribute('data-fr');
      if (v !== null) n.textContent = v;
    });
    document.querySelectorAll('[data-fr-aria]').forEach(function (n) {
      var v = langue === 'en' ? n.getAttribute('data-en-aria') : n.getAttribute('data-fr-aria');
      if (v !== null) n.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-fr-placeholder]').forEach(function (n) {
      var v = langue === 'en' ? n.getAttribute('data-en-placeholder') : n.getAttribute('data-fr-placeholder');
      if (v !== null) n.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-action="langue"]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.langue === langue));
    });
    // Lien alternatif hreflang mis à jour pour le référencement.
    var alt = document.querySelector('link[rel="alternate"][data-bascule]');
    if (alt) alt.setAttribute('hreflang', langue === 'en' ? 'fr-CA' : 'en-CA');
  }

  appliquerLangue(lire(STOCKAGE.langue) ||
                  (document.documentElement.lang.indexOf('en') === 0 ? 'en' : 'fr'));

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-action="langue"]');
    if (!b) return;
    ecrire(STOCKAGE.langue, b.dataset.langue);
    appliquerLangue(b.dataset.langue);
  });

  /* ======================================================================
     3. Mega-menu accessible (clavier + souris + Échap + clic extérieur)
     ====================================================================== */
  function fermerMenus(sauf) {
    document.querySelectorAll('[data-menu-declencheur]').forEach(function (d) {
      if (d === sauf) return;
      d.setAttribute('aria-expanded', 'false');
      var p = document.getElementById(d.getAttribute('aria-controls'));
      if (p) p.hidden = true;
    });
  }

  document.querySelectorAll('[data-menu-declencheur]').forEach(function (d) {
    d.addEventListener('click', function (e) {
      e.preventDefault();
      var ouvert = d.getAttribute('aria-expanded') === 'true';
      fermerMenus(d);
      d.setAttribute('aria-expanded', String(!ouvert));
      var p = document.getElementById(d.getAttribute('aria-controls'));
      if (p) p.hidden = ouvert;
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var actif = document.querySelector('[data-menu-declencheur][aria-expanded="true"]');
    if (actif) { fermerMenus(); actif.focus(); }
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-menu-declencheur]') || e.target.closest('.megamenu')) return;
    fermerMenus();
  });

  /* ======================================================================
     3 bis. En-tête repliable sous 1100 px
     Le même balisage sert aux deux dispositions ; seul un attribut bascule.
     ====================================================================== */
  document.querySelectorAll('[data-menu-mobile]').forEach(function (b) {
    var entete = b.closest('.entete');
    b.addEventListener('click', function () {
      var ouvert = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!ouvert));
      if (entete) entete.setAttribute('data-ouvert', String(!ouvert));
      if (ouvert) fermerMenus();
    });
  });

  // Repasser en disposition large referme le panneau, sinon il reste ouvert
  // et masqué, ce qui piège le focus au clavier.
  var large = window.matchMedia('(min-width: 1101px)');
  var surChangement = function (e) {
    if (!e.matches) return;
    document.querySelectorAll('[data-menu-mobile]').forEach(function (b) {
      b.setAttribute('aria-expanded', 'false');
      var entete = b.closest('.entete');
      if (entete) entete.setAttribute('data-ouvert', 'false');
    });
  };
  if (large.addEventListener) large.addEventListener('change', surChangement);
  else if (large.addListener) large.addListener(surChangement);

  /* ======================================================================
     4. Sommaire collant : surlignage de la section courante + progression
     ====================================================================== */
  var sommaire = document.querySelector('[data-sommaire]');
  if (sommaire) {
    var liens = Array.prototype.slice.call(sommaire.querySelectorAll('a[href^="#"]'));
    var cibles = liens
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);

    if ('IntersectionObserver' in window && cibles.length) {
      var visible = new Set();
      var obs = new IntersectionObserver(function (entrees) {
        entrees.forEach(function (en) {
          if (en.isIntersecting) visible.add(en.target.id); else visible.delete(en.target.id);
        });
        var courant = cibles.filter(function (c) { return visible.has(c.id); })[0];
        if (!courant) return;
        liens.forEach(function (a) {
          a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + courant.id));
        });
      }, { rootMargin: '-96px 0px -65% 0px', threshold: 0 });
      cibles.forEach(function (c) { obs.observe(c); });
    }

    var barre = sommaire.querySelector('[data-progression]');
    var etiq  = sommaire.querySelector('[data-progression-texte]');
    if (barre) {
      var corps = document.querySelector('.prose');
      var majProgression = function () {
        if (!corps) return;
        var r = corps.getBoundingClientRect();
        var total = r.height - window.innerHeight;
        var lu = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : (r.top < 0 ? 1 : 0);
        var pct = Math.round(lu * 100);
        barre.style.width = pct + '%';
        if (etiq) etiq.textContent = pct + ' %';
      };
      window.addEventListener('scroll', majProgression, { passive: true });
      window.addEventListener('resize', majProgression);
      majProgression();
    }
  }

  /* ======================================================================
     5. Formulaire d'inscription à l'infolettre
     Conformité LCAP : le consentement doit être un geste positif et distinct.
     La case n'est jamais pré-cochée ; l'envoi est bloqué sans consentement.
     ====================================================================== */
  document.querySelectorAll('[data-formulaire="infolettre"]').forEach(function (f) {
    var etat = f.querySelector('[data-etat]');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var courriel = f.querySelector('input[type="email"]');
      var consent  = f.querySelector('input[type="checkbox"][name="consentement"]');

      if (!courriel || !courriel.value || !courriel.checkValidity()) {
        if (etat) { etat.textContent = 'Adresse de courriel non valide.'; etat.dataset.ton = 'erreur'; }
        if (courriel) courriel.focus();
        return;
      }
      if (consent && !consent.checked) {
        if (etat) {
          etat.textContent = 'Le consentement exprès est requis par la Loi canadienne anti-pourriel (LCAP).';
          etat.dataset.ton = 'erreur';
        }
        consent.focus();
        return;
      }
      if (etat) {
        etat.textContent = 'Prototype — aucune donnée n’est transmise. En production : double opt-in, ' +
          'horodatage du consentement et journalisation de la preuve (art. 13 LCAP).';
        etat.dataset.ton = 'succes';
      }
      f.querySelectorAll('input').forEach(function (i) {
        if (i.type === 'checkbox') i.checked = false; else i.value = '';
      });
    });
  });

  /* ======================================================================
     6. Bandeau de cotations — valeurs figées et horodatées.
     Le prototype n'appelle aucune API : afficher un cours faux comme s'il
     était réel serait trompeur. On expose donc l'heure d'arrêté des données.
     ====================================================================== */
  document.querySelectorAll('[data-arrete]').forEach(function (n) {
    n.setAttribute('title', 'Données figées — prototype hors ligne. En production : ' +
      'flux de marché sous licence, rafraîchi toutes les 60 secondes.');
  });

  /* ======================================================================
     7. Ancres : compensation de l'en-tête collant au clavier
     ====================================================================== */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]:not([href="#"])');
    if (!a) return;
    var cible = document.getElementById(a.getAttribute('href').slice(1));
    if (!cible) return;
    e.preventDefault();
    cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
    cible.setAttribute('tabindex', '-1');
    cible.focus({ preventScroll: true });
    history.replaceState(null, '', a.getAttribute('href'));
  });
})();
