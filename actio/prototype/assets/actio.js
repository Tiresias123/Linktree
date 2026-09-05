/* ==========================================================================
   ACTIO — Comportements d'interface
   Aucune dépendance externe. Progressive enhancement : la page reste
   entièrement lisible et navigable si ce script ne s'exécute pas.
   ========================================================================== */
(function () {
  'use strict';

  var STOCKAGE = { theme: 'actio.theme' };

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
     2. Bilinguisme
     Aucune bascule d'attribut ici, volontairement. Chaque langue est servie
     comme un document distinct sous sa propre URL (/fr/… et /en/…), ce que
     le sélecteur du gabarit traduit par deux liens et non deux boutons.
     Motif : la Charte de la langue française impose une version française
     d'une qualité et d'une accessibilité au moins égales — une équivalence
     qu'on ne peut pas démontrer si les deux langues partagent une URL. Le
     lecteur doit pouvoir partager le lien de la version qu'il lit.
     La langue du document est déclarée par l'attribut lang de <html>.
     ====================================================================== */

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
     8. Recherche universelle — combobox avec suggestions groupées
     L'index embarqué est celui du prototype : lois, avis, autorités,
     cryptoactifs. En production, il est servi par l'API du CMS.
     ====================================================================== */
  var INDEX = [
    { g: 'Textes et avis', t: 'Avis 21-327 du personnel des ACVM', s: 'Contrat de cryptoactif — absence de livraison immédiate', h: '#' },
    { g: 'Textes et avis', t: 'Avis conjoint 21-329 ACVM / OCRCVM', s: 'Courtier restreint, engagement préalable', h: '#' },
    { g: 'Textes et avis', t: 'Avis conjoint 21-330', s: 'Publicité, marketing et médias sociaux des plateformes', h: '#' },
    { g: 'Textes et avis', t: 'Avis 21-332 du personnel des ACVM', s: 'Engagement préalable renforcé (2023)', h: '#' },
    { g: 'Textes et avis', t: 'Avis 21-333 du personnel des ACVM', s: 'Cryptoactifs arrimés à une valeur (« stablecoins »)', h: '#' },
    { g: 'Textes et avis', t: 'Règlement 31-103', s: 'Obligations et dispenses d’inscription', h: '#' },
    { g: 'Textes et avis', t: 'Règlement 21-101', s: 'Fonctionnement du marché', h: '#' },
    { g: 'Textes et avis', t: 'Règlement 81-102', s: 'Fonds d’investissement — FNB de cryptoactifs', h: '#' },
    { g: 'Textes et avis', t: 'LRPCFAT', s: 'Loi sur le recyclage des produits de la criminalité et le financement des activités terroristes', h: '#' },
    { g: 'Textes et avis', t: 'Loi sur les entreprises de services monétaires (Québec)', s: 'Permis d’ESM — administrée par Revenu Québec [à vérifier]', h: '#' },
    { g: 'Textes et avis', t: 'Bulletin IT-479R', s: 'Transactions de valeurs mobilières — capital ou revenu', h: '#' },
    { g: 'Textes et avis', t: 'Formulaire T1135', s: 'Bilan de vérification du revenu étranger', h: '#' },
    { g: 'Autorités', t: 'ACVM — Autorités canadiennes en valeurs mobilières', s: 'Forum de coordination des régulateurs provinciaux', h: '#' },
    { g: 'Autorités', t: 'AMF — Autorité des marchés financiers', s: 'Québec', h: '#' },
    { g: 'Autorités', t: 'CVMO / OSC — Commission des valeurs mobilières de l’Ontario', s: 'Ontario', h: '#' },
    { g: 'Autorités', t: 'OCRI / CIRO', s: 'Organisme canadien de réglementation des investissements', h: '#' },
    { g: 'Autorités', t: 'CANAFE / FINTRAC', s: 'Lutte contre le blanchiment — inscription des ESM', h: '#' },
    { g: 'Autorités', t: 'ARC — Agence du revenu du Canada', s: 'Fiscalité fédérale', h: '#' },
    { g: 'Autorités', t: 'Revenu Québec', s: 'Fiscalité québécoise — TP-21.4.39', h: '#' },
    { g: 'Cryptoactifs', t: 'Bitcoin (BTC)', s: 'Cours CAD, FNB cotés au Canada, fiscalité', h: '#' },
    { g: 'Cryptoactifs', t: 'Ether (ETH)', s: 'Jalonnement, FNB, qualification fiscale', h: '#' },
    { g: 'Cryptoactifs', t: 'Solana (SOL)', s: 'Cours CAD, validateurs', h: '#' },
    { g: 'Cryptoactifs', t: 'Cryptoactifs arrimés à une valeur (USDC, USDT)', s: 'Avis 21-333, loi fédérale sur les stablecoins', h: '#' },
    { g: 'Plateformes', t: 'Shakepay', s: 'Fiche d’évaluation — statut d’inscription', h: '#' },
    { g: 'Plateformes', t: 'Newton', s: 'Fiche d’évaluation — statut d’inscription', h: '#' },
    { g: 'Plateformes', t: 'Wealthsimple Crypto', s: 'Fiche d’évaluation — statut d’inscription', h: '#' },
    { g: 'Plateformes', t: 'Bitbuy', s: 'Fiche d’évaluation — statut d’inscription', h: '#' },
    { g: 'Plateformes', t: 'VirgoCX', s: 'Fiche d’évaluation — statut d’inscription', h: '#' }
  ];

  function normaliser(t) {
    return (t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  document.querySelectorAll('[data-recherche]').forEach(function (bloc) {
    var champ = bloc.querySelector('input');
    var liste = bloc.querySelector('[role="listbox"]');
    if (!champ || !liste) return;
    var actif = -1, items = [];

    function fermer() { liste.hidden = true; champ.setAttribute('aria-expanded', 'false'); actif = -1; }
    function rendre(q) {
      var nq = normaliser(q).trim();
      liste.innerHTML = '';
      items = [];
      if (nq.length < 2) { fermer(); return; }
      var trouves = INDEX.filter(function (e) {
        return normaliser(e.t + ' ' + e.s).indexOf(nq) !== -1;
      }).slice(0, 9);
      if (!trouves.length) {
        var v = document.createElement('li'); v.className = 'recherche__vide';
        v.textContent = 'Aucun résultat pour « ' + q + ' ». Essayez un numéro d’avis, une autorité ou un cryptoactif.';
        liste.appendChild(v);
      } else {
        var groupe = null;
        trouves.forEach(function (e, i) {
          if (e.g !== groupe) {
            groupe = e.g;
            var g = document.createElement('li'); g.className = 'recherche__groupe'; g.setAttribute('role', 'presentation');
            g.textContent = groupe; liste.appendChild(g);
          }
          var li = document.createElement('li');
          li.className = 'recherche__item'; li.setAttribute('role', 'option'); li.id = champ.id + '-opt-' + i;
          li.innerHTML = '<span><strong></strong><span></span></span><kbd>↵</kbd>';
          li.querySelector('strong').textContent = e.t;
          li.querySelector('span span').textContent = e.s;
          li.addEventListener('mousedown', function (ev) { ev.preventDefault(); champ.value = e.t; fermer(); });
          liste.appendChild(li); items.push(li);
        });
      }
      liste.hidden = false; champ.setAttribute('aria-expanded', 'true');
    }
    function surligner(i) {
      items.forEach(function (li, k) { li.setAttribute('aria-selected', String(k === i)); });
      actif = i;
      champ.setAttribute('aria-activedescendant', i >= 0 && items[i] ? items[i].id : '');
      if (items[i]) items[i].scrollIntoView({ block: 'nearest' });
    }
    champ.addEventListener('input', function () { rendre(champ.value); });
    champ.addEventListener('focus', function () { if (champ.value.length >= 2) rendre(champ.value); });
    champ.addEventListener('blur', function () { setTimeout(fermer, 120); });
    champ.addEventListener('keydown', function (e) {
      if (liste.hidden) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); surligner(Math.min(actif + 1, items.length - 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); surligner(Math.max(actif - 1, 0)); }
      else if (e.key === 'Enter' && actif >= 0) { e.preventDefault(); champ.value = items[actif].querySelector('strong').textContent; fermer(); }
      else if (e.key === 'Escape') { fermer(); }
    });
  });

  /* ======================================================================
     9. Commutateur de juridiction
     Pose data-juridiction sur <html> ; la feuille masque ce qui ne concerne
     pas le lecteur. Le choix est mémorisé : un Québécois ne le refait pas à
     chaque visite.
     ====================================================================== */
  var STOCKAGE_JUR = 'actio.juridiction';
  function appliquerJuridiction(j) {
    document.documentElement.setAttribute('data-juridiction', j);
    document.querySelectorAll('[data-action="juridiction"]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.juridiction === j));
    });
    document.querySelectorAll('[data-juridiction-compte]').forEach(function (n) {
      var visibles = Array.prototype.filter.call(document.querySelectorAll('[data-jur]'), function (el) {
        return el.offsetParent !== null;
      }).length;
      n.textContent = visibles;
    });
  }
  if (document.querySelector('[data-action="juridiction"]')) {
    appliquerJuridiction(lire(STOCKAGE_JUR) || 'canada');
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-action="juridiction"]');
      if (!b) return;
      ecrire(STOCKAGE_JUR, b.dataset.juridiction);
      appliquerJuridiction(b.dataset.juridiction);
    });
  }

  /* ======================================================================
     10. Horodatage relatif — « Il y a 18 min »
     Calculé depuis l'attribut datetime, jamais écrit en dur : un « il y a
     18 min » figé dans le HTML ment dès la 19e minute.
     ====================================================================== */
  function relatif(date) {
    var d = (Date.now() - date.getTime()) / 1000;
    if (d < 60) return 'À l’instant';
    if (d < 3600) return 'Il y a ' + Math.round(d / 60) + ' min';
    if (d < 86400) { var h = Math.round(d / 3600); return 'Il y a ' + h + ' h'; }
    var j = Math.round(d / 86400);
    return 'Il y a ' + j + (j > 1 ? ' jours' : ' jour');
  }
  function majRelatifs() {
    document.querySelectorAll('time[data-relatif]').forEach(function (t) {
      var d = new Date(t.getAttribute('datetime'));
      if (!isNaN(d)) { t.textContent = relatif(d); t.setAttribute('title', d.toLocaleString('fr-CA')); }
    });
  }
  majRelatifs();
  setInterval(majRelatifs, 60000);

  /* ======================================================================
     11. Étoiles du score — dessinées depuis la valeur, jamais à la main
     ====================================================================== */
  document.querySelectorAll('[data-score]').forEach(function (n) {
    var v = parseFloat(n.dataset.score); if (isNaN(v)) return;
    var etoile = '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.8 1.1-5.9L1.5 7.7l5.9-.8z"/></svg>';
    var html = '';
    for (var i = 1; i <= 5; i++) {
      html += etoile.replace('<svg', i <= Math.round(v) ? '<svg' : '<svg class="vide"');
    }
    var cible = n.querySelector('.score__etoiles');
    if (cible) cible.innerHTML = html;
    n.setAttribute('aria-label', 'Score Actio : ' + v.toFixed(1).replace('.', ',') + ' sur 5');
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
