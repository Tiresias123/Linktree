## Annexe B — Rapport de cohérence croisée des modules (v2)

Relecture croisée des quatre modules (`docs/M1-architecture-wireframes.md`,
`docs/M2-newsletter-actio-dispatch.md`, `docs/M3-direction-artistique-design-system.md`,
`docs/M4-prd-seo-conformite-monetisation.md`), du registre de vérification
(`docs/annexes/registre-de-verification.md`), du prototype (`prototype/index.html`,
`prototype/fr/index.html`, `prototype/fr/article.html`, `prototype/fr/registre.html`,
`prototype/en/index.html`, `prototype/composants/index.html` et ses trois fragments,
`prototype/assets/tokens.css`, `prototype/assets/actio.css`, `prototype/assets/article.css`,
`prototype/assets/actio.js`), du système de mailing (`newsletter/chassis.html`,
`newsletter/contenus/dispatch-042.html`, les trois `bienvenue-*.html`, `newsletter/manifeste.json`,
`newsletter/actio-dispatch-042.html`) et de l'outillage (`tools/structure.mjs`, `tools/docs.mjs`,
`tools/emails.mjs`, `tools/composants.mjs`, `tools/verifier.mjs`, `tools/captures.mjs`,
`tools/artefact.mjs`). Arrêté au 4 septembre 2026. Il remplace
`docs/v1/annexes/rapport-de-coherence.md`.

**Verdict.** Les quatre modules partagent une doctrine — un statut par couleur, une source primaire
par affirmation, le français d'abord, aucune recommandation d'actif, aucune promotion sans
autorisation des ACVM — et cette doctrine est exécutée par le code et par l'outillage :
`npm run tout` (structure → docs → courriels → composants → vérificateur) passe au vert sur 25
fichiers HTML, 5 documents, 4 courriels, 3 composants et 6 pages rendues dans deux thèmes. La
cohérence se rompt sur trois plans, tous documentés ci-dessous. **Premier :** le cahier des
charges impose des contenus que la charte de vérification interdit de publier en l'état
(plateformes nommées avec statut et score, preuve sociale « 15 000 », compteur « 12 autorisées »,
signature qualifiée) ; le prototype les affiche parce qu'ils sont exigés, et le registre les bloque
parce qu'ils ne sont pas vérifiés. Ce n'est pas une incohérence de conception : c'est le conflit
entre une maquette et un média, et il est tranché par la règle A.4-1 du registre — rien ne sort
tant qu'une ligne « NON VÉRIFIÉ » subsiste. **Deuxième :** la v2 admet l'affiliation que la v1
refusait absolument ; les deux positions sont écrites, la v2 prévaut, et ses douze garde-fous sont
codés ou spécifiés. **Troisième :** quelques valeurs de la v1 subsistent dans des documents
archivés que le code ne porte plus ; `docs/v1/` est exclu des contrôles et son `README.md` le dit.

---

### B.1 Ce qui a été corrigé pendant la relecture

| # | Où | Était | Est |
|---|---|---|---|
| C-01 | `prototype/assets/tokens.css`, bloc sombre | `--fill-primaire: #3B82F6` — 3,68:1 sous du blanc | `#2563EB` (5,2:1) ; `tools/verifier.mjs` signalait 9 défauts, il n'en signale plus |
| C-02 | `prototype/fr/article.html`, tableau et « En bref » | « Règle de conflit : aucune publiée » — affirmation d'absence | « Aucune identifiée par la rédaction au 4 septembre 2026 » (registre V-31) |
| C-03 | `prototype/fr/article.html`, mise en garde | « aucune autorité canadienne ne supervise ces réserves » — contredisait le § 1 du même article (engagements pris envers les ACVM) | « aucune supervision prudentielle fédérale ; seuls les engagements pris envers les ACVM s'appliquent » (V-32) |
| C-04 | `prototype/fr/index.html`, `prototype/en/index.html`, pied | « Registres officiels **partenaires** » — aucun partenariat n'existe | « Registres officiels » (V-41) |
| C-05 | `prototype/fr/index.html`, `prototype/en/index.html`, bloc infolettre | « Données hébergées au Canada, jamais cédées » — faux pour les métadonnées du réseau de diffusion (`docs/M4-prd-seo-conformite-monetisation.md` § 2.2) | « Preuve de consentement conservée chez Actio, jamais cédée » (V-24) |
| C-06 | `newsletter/contenus/bienvenue-2.html` | « Le bitcoin n'a jamais été qualifié de valeur mobilière au Canada » — affirmation d'absence | « Les ACVM n'ont pas qualifié le bitcoin lui-même de valeur mobilière ; c'est la relation avec la plateforme qui l'est » (N-16) |
| C-07 | `newsletter/chassis.html`, pied | Adresse IP de dépôt affichée dans chaque courriel (v1 V-35 : preuve LCAP contre minimisation Loi 25) | IP conservée au journal, chiffrée, jamais affichée ; `obligatoires_lcap` réduit à `date_consentement` et `source_consentement` (N-25) |
| C-08 | `newsletter/chassis.html`, pied | Téléphone fictif `514 555-0142` | Retiré (v1 V-38 clos pour cette part) |
| C-09 | `prototype/fr/article.html`, `prototype/en/index.html`, `prototype/fr/registre.html`, bandeau `.demo` | Aucun lien vers le registre de vérification (v1 V-43 : « à poser ») | Lien posé sur les quatre pages (V-42) |
| C-10 | `prototype/assets/actio.css` | Le comparateur faisait déborder la page sous 760 px : les `.vh` du tableau (légende, en-têtes lus par les lecteurs d'écran) sont en position absolue et, faute d'ancêtre positionné dans le conteneur défilant, se plaçaient hors de lui à la position du tableau — le piège que le commentaire de `.vh` décrit ; l'en-tête débordait entre 1100 et 1200 px | `.comparateur__defilement { position: relative; min-width: 0 }`, `.recherche { min-width: 0 }`, `.entete__actions { min-width: 0 }` ; `tools/captures.mjs` ne signale plus de débordement |
| C-11 | `prototype/composants/index.html` | La source affichée des fragments contenait `id="…"` en clair, compté comme identifiant en double par `tools/structure.mjs` | `tools/composants.mjs` échappe aussi les guillemets |
| C-12 | `tools/artefact.mjs` | Polices de la v1 (Source Serif 4, Inter, IBM Plex Mono) et un jeton d’encre ambre de la v1 qui n’existe plus | Newsreader, Plus Jakarta Sans, JetBrains Mono ; `--encre-accent` |
| C-13 | `tools/structure.mjs` | Faux positif : un URI de données contenant deux fois `width=` était compté comme attribut répété | Les valeurs entre guillemets sont retirées avant le comptage |
| C-14 | `docs/annexes/registre-de-verification.md` (v1) | 17 références rompues vers des classes et des chemins v1 | Annexes v1 déplacées sous `docs/v1/annexes/` ; registre v2 réécrit (45 + 28 lignes) |
| C-15 | `newsletter/manifeste.json` | Pré-en-tête de `bienvenue-3` à 134 caractères | 130 — borne haute contrôlée par `tools/emails.mjs` |
| C-16 | `prototype/fr/article.html` | JSON-LD `NewsArticle` seul, alors que le fil d'Ariane est visible | `BreadcrumbList` ajouté, conforme au fil `.ariane` |

---

### B.2 Valeurs structurantes : une seule source, reprise partout

| Valeur | Source de vérité | Reprise conforme dans | Divergence |
|---|---|---|---|
| Cadence : **mardi 7 h HE**, **vendredi 12 h HE** | `newsletter/manifeste.json` (`cadence`) | `prototype/fr/index.html` (`.infolettre__promesse`, `.infolettre__preuve-sociale`), `prototype/en/index.html` (« 7:00 a.m. ET », « 12:00 p.m. ET »), `newsletter/contenus/bienvenue-1.html`, `bienvenue-3.html`, `docs/M1-architecture-wireframes.md` § 2.10, `docs/M2-newsletter-actio-dispatch.md` § 1.2, `docs/M4-prd-seo-conformite-monetisation.md` | Aucune. L'heure de publication de l'article (« 6 h 30 HE ») est antérieure de 30 minutes à l'envoi du mardi : voulu, l'infolettre renvoie vers un article déjà en ligne |
| Abréviation de fuseau : **HE**, jamais EST/EDT | `tools/emails.mjs` (contrôle bloquant) | Tous les courriels ; pages du site | Le cahier des charges écrivait « EST » ; le module 2 § 1.2 explique pourquoi c'est faux six mois par an |
| Palette : navy `#0F172A` / `#0A1128`, bleu `#2563EB` / `#1E40AF`, ambre `#F59E0B` / `#B45309`, conforme `#047857`, alerte `#B91C1C`, fonds `#F8FAFC` / `#020617` | `prototype/assets/tokens.css` | `actio.css`, `article.css`, `registre.css` (par variables) ; `newsletter/chassis.html` et fragments (en clair, contrôlés par `tools/emails.mjs`) ; `composants.tw.css` (par `@theme inline`) ; `docs/M3-…` § 2 | `#D97706` (ambre foncé du cahier des charges) n'est pas retenu (3,2:1) — décision écrite au module 3 ; `#EF4444` remplacé par `#DC2626` comme aplat |
| Polices : Newsreader, Plus Jakarta Sans, JetBrains Mono | `tokens.css` (`--police-*`) | Pages du site (Google Fonts, démonstration) ; courriels (piles de repli, aucune police web) ; galerie de composants (héritée de `tokens.css`) ; `tools/artefact.mjs` | Aucune |
| Points de rupture : 560, 760, 900, 1100 px | `actio.css` | `docs/M1-…` § 2 ; `docs/M3-…` | `newsletter/chassis.html` emploie 620 px : un courriel a sa propre contrainte (conteneur de 600 px), documentée au module 2 § 2.2.2 |
| Pré-en-tête 90–130 caractères ; objet 28–60 | `tools/emails.mjs` | `manifeste.json` (4 envois) ; `docs/M2-…` § 1.3 | Aucune |
| Pondération du score : garde 40 %, frais 30 %, service 20 %, conformité 10 % | `prototype/fr/index.html` (`.comparateur__methode`) | `prototype/composants/carte-plateforme.html`, `docs/M1-…` § 2.9, `docs/M3-…` § 5.4, `docs/M4-…` § 1.2 (`releve.score_total`) et § 5.2 | Aucune |
| Trois parcours : « Je débute au Canada », « Je déclare mes cryptos », « Je comprends la régulation des CTPs » | `prototype/fr/index.html` (`.parcours`) | `newsletter/contenus/bienvenue-3.html`, `docs/M2-…`, `docs/M4-…` § 4.1 et § 7 | `bienvenue-3.html` écrit « Je comprends la régulation des plateformes » — le sigle « CTP » n'a pas sa place dans un courriel grand public ; les deux libellés désignent le même parcours, le CMS portera l'un comme nom court et l'autre comme nom long |
| Taxonomies fermées : 5 piliers, 5 statuts, 5 juridictions, 3 niveaux | `docs/M1-…` § 1.3 ; `tokens.css` | `actio.css` (`.badge--*`, `.juridiction--*`, `.niveau--*`), `composants.tw.css`, `docs/M4-…` § 1.2 (énumérations Strapi) | Aucune |
| Preuve du consentement : date, page, confirmation ; IP au journal | `manifeste.json` (`preuve_du_consentement`) | `chassis.html`, `docs/M2-…` § 3.1.1, `docs/M4-…` § 1.2 (`consentement`) et § 5.4 | Aucune |
| Affiliation : admise pour courtiers inscrits, jamais dans un tableau ni un courriel, divulguée dans la carte | `docs/M4-…` § 5.1–5.2 | `prototype/fr/index.html` (`.comparateur__pied`), `prototype/composants/carte-plateforme.html`, `newsletter/contenus/bienvenue-1.html` (« divulgué dans le corps du texte, jamais caché dans un tableau ») | `docs/v1/L3-3-…` refusait toute affiliation ; archivé, remplacé. Le contrôle « aucun `rel="sponsored"` dans un courriel » de `tools/emails.mjs` est **spécifié, non écrit** (module 4, phase 3) |

---

### B.3 Ce que le cahier des charges impose et que la charte interdit de publier

Le prototype affiche ces éléments parce que le cahier des charges les exige ; le registre de
vérification les bloque parce qu'ils ne sont pas vérifiés. La règle A.4-1 tranche : aucun ne sort
en l'état. La colonne « Issue » est celle que le module concerné recommande.

| Élément imposé | Où | Ligne du registre | Issue recommandée |
|---|---|---|---|
| Trois plateformes nommées avec statut « Inscrite », score et mesures | `prototype/fr/index.html` `#comparateur` | V-15, V-16 | Afficher le statut lu et daté, sans score ni écart (« relevé en cours ») jusqu'au premier relevé du mois 4 (`docs/M4-…` § 7, « reste à trancher » 4) |
| Badge « Plateformes inscrites ACVM : 12 autorisées à ce jour » | `.conformite__compte` | V-12 | Compteur dynamique, « — » tant que la synchronisation n'a pas eu lieu ; le « 12 » n'entre jamais en dur — **déjà fait** |
| Preuve sociale « Rejoint par 15 000 juristes… » | `.infolettre__preuve-sociale` | V-25 | Retirer jusqu'à 1 000 abonnés, calculer depuis la liste ensuite |
| Fiche auteur avec qualifications (Barreau, LL.M.) | `prototype/fr/article.html` `.bio__qualifs` | V-30 | Attribuer à la rédaction (fait dans l'infolettre : N-28) ou recruter la signataire ; `auteur.qualifications[].verifiee` au schéma |
| Baromètre avec quatre statuts dont « En consultation publique » | `#barometre` | V-07 à V-10 | Cartes alimentées par la collection `instrument` (`barometre` énum), jamais par le gabarit |
| « Édition nº 042 » | `newsletter/manifeste.json` | — | Deux séries (mardi nº, vendredi V-nº) ou nº 001 réel : `docs/M2-…`, « reste à trancher » 1 |
| Cours BTC/ETH/SOL et Chiffre de la semaine | `.cotations`, section 04 de nº 042 | V-11, N-11, N-12 | Champs de fusion et route interne, source à contracter (`docs/M4-…` § 1.4) — **déjà fait** côté gabarit |
| Guide de survie en huit chapitres | `newsletter/contenus/bienvenue-1.html` | N-14 | Écrit en phase 1 ; C1 ne part pas sans `{{date_arret_guide}}` |

---

### B.4 Ce que chaque outil garantit, et ce qu'il laisse passer

| Outil | Garantit | Ne garantit pas |
|---|---|---|
| `tools/structure.mjs` | Balisage équilibré, aucun attribut répété, aucun identifiant en double, sur les 25 fichiers HTML (v1 comprise) | La validité HTML au sens du validateur du W3C |
| `tools/docs.mjs` | Tout chemin, toute classe, tout jeton cité entre accents graves dans `docs/*.md` et `docs/annexes/*.md` existe | Les classes Tailwind (non précédées d'un point : voulu) ; le sens d'une citation |
| `tools/emails.mjs` | Mentions LCAP, champs de fusion déclarés, couleurs dans `tokens.css`, objet et pré-en-tête bornés, pas d'émoji, pas de « EST », poids < 102 Ko, assemblage identique à la référence | Le rendu réel sur six clients ; le fond juridique ; le contrôle `rel="sponsored"` (à écrire) ; le plafond de 55 mots d'un encart de commandite (à écrire) |
| `tools/composants.mjs` | Rendu et source identiques au fragment ; chaque classe compilée ; aucune couleur en dur | Le portage React ; le comportement à l'exécution |
| `tools/verifier.mjs` | Liens, ancres, `noopener`, `h1`, ordre des titres, étiquettes, repères, sommaire, contraste AA sur le DOM rendu, deux thèmes, six pages | Le clavier, le lecteur d'écran, le mouvement — l'audit externe reste dû (V-28) |
| `tools/captures.mjs` | Aucun débordement horizontal sur 22 largeurs de 320 à 1440 px ; mesure de lecture tenue ; 36 rendus archivés | Le rendu sur un appareil réel |
| `tools/artefact.mjs` | Document unique fidèle aux cinq pages | La galerie de composants (feuille Tailwind à part) |

---

### B.5 Arbitrages ouverts, par module

| # | Question | Module | Ce qui en dépend |
|---|---|---|---|
| A-01 | Signature nominative ou « La rédaction » | M1, M4 | `author` JSON-LD ; `.bio` ; `auteur.qualifications` |
| A-02 | Comparateur au lancement : statut seul, ou absent jusqu'au mois 4 | M1, M4 | Page d'accueil ; ligne V-15 |
| A-03 | Preuve sociale : retrait ou preuve vraie | M1, M2 | `.infolettre__preuve-sociale` |
| A-04 | Numérotation des éditions (042, deux séries, 001) | M2 | Manifeste, archives |
| A-05 | Édition du vendredi : gabarit de fragment à écrire | M2 | `newsletter/contenus/` |
| A-06 | Prestataire d'envoi : Resend sous EFVP, ou SES d'emblée | M2, M4 | Chaîne d'envoi ; EFVP |
| A-07 | `#D97706` : aplat ou abandon | M3 | `tokens.css` |
| A-08 | Newsreader ou Merriweather sur anciens écrans Windows | M3 | Captures à 360 px |
| A-09 | Strapi auto-hébergé ou Strapi Cloud (région) | M4 | Résidence |
| A-10 | Rémunération d'affiliation : CPA seulement | M4 | Contrats |
| A-11 | Source de cours et de flux de FNB | M4 | `.cotations`, Chiffre de la semaine |
| A-12 | Adresse, personne morale, assurance | M2, M4 | Tout envoi, toute mise en ligne |
| A-13 | Conditions d'utilisation des sites des autorités | M4 | Veille automatisée ; signal N0 |
| A-14 | Ordre de réouverture des sources primaires | Registre | 34 lignes « À VÉRIFIER » |

**État du dépôt à la clôture.** `npm run tout` : vert. `npm run captures` : aucun débordement sur
22 largeurs × 5 écrans. Registre de vérification : 45 lignes site (11 vérifiées, 17 à vérifier,
17 bloquantes) et 28 lignes infolettre (9, 15, 4). Aucune page ni aucun courriel n'est publiable
au sens de la règle A.4-1 ; tout est prêt à l'être dès que les lignes bloquantes seront levées —
et chacune dit comment.
