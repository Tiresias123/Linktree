## 2. Wireframe haute fidélité de la page d'accueil

Cette section spécifie `prototype/index.html` (907 lignes) tel qu'il est écrit. Elle est opposable à l'intégration : toute divergence entre le code et ce document est un défaut, et les défauts déjà présents sont recensés au § 2.13 avec leur correction chiffrée. Tous les jetons cités existent dans `tokens.css`, toutes les classes dans `actio.css` ; **aucune correction proposée n'introduit de couleur nouvelle** — toutes recomposent des jetons existants. Les contrastes sont calculés selon la formule de luminance relative de la WCAG 2.1 et recoupés avec les valeurs attestées dans l'en-tête d'accessibilité de `tokens.css` (bleu-palais 11,1 ; alerte 5,9 ; consultation 5,7 ; conforme 5,2 ; turquoise en encre 6,8).

### 2.0 Géométrie de la grille

`.contenant` : `max-width: var(--grille-max)` = 1320 px, `padding-inline: var(--grille-marge)` = `clamp(16px, 4vw, 48px)` — saturé à 48 px dès 1200 px de fenêtre. `.grille` : `repeat(12, minmax(0,1fr))`, `gap: var(--grille-gouttiere)` = 24 px, ramené à 16 px sous 900 px. Largeur utile : 1320 − 96 = **1224 px** ; colonne unitaire (1224 − 11 × 24) / 12 = **80 px exactement**. Ce nombre rond est la raison d'être du couple 1320 / 24 : il doit survivre à toute modification de l'un des deux.

| Portée | 1320 px | ≤ 1024 px | ≤ 640 px | | Portée | 1320 px | ≤ 1024 px | ≤ 640 px |
|---|---|---|---|---|---|---|---|---|
| `.col-8` | 664 px | 12 | 12 | | `.col-4` | 392 px | **6** | **12** |
| `.col-7` | 704 px | 12 | 12 | | `.col-3` | 288 px | **6** | **12** |
| `.col-6` | 600 px | 12 | 12 | | `.col-2` | *non défini* | — | — |
| `.col-5` | 496 px | 12 | 12 | | gouttière | 24 px | 24 px (16 px ≤ 900) | 16 px |

Le point de rupture **1100 px** ne touche que l'en-tête ; **900 px**, la gouttière et le bloc `.pro`. Les deux ruptures structurantes sont **1024 px** et **640 px**.

### 2.1 Bandeau de probité

**Rôle et décision.** Déclarer, avant tout contenu, que les articles sont des maquettes non vérifiées par un juriste. L'aveu est placé **au-dessus de tout**, y compris du bandeau de cotations et du logo : un média de conformité qui laisserait croire à une publication réelle perdrait l'actif qu'il vend. Dispositif de prototype, à retirer au lancement et à ne remplacer par rien.

| Attribut | Spécification |
|---|---|
| Grille | Hors grille et hors conteneur ; enfant direct de `<body>`, pleine largeur de fenêtre, `text-align: center`. Aucune rupture : le texte se replie, la hauteur croît. |
| Espacements | `padding: var(--e-2) var(--e-4)` = 8 / 16 px. Aucune marge. |
| Typographie | `var(--t-micro)` 11 px, `var(--police-texte)`, graisse 400, interlignage hérité `var(--lh-texte)` 1,68, `letter-spacing: .03em` ; le `<strong>` d'ouverture en majuscules à `var(--interlettre-etiq)` 0,085 em. |
| Couleurs | `var(--demo-fond)` #8A5300 et `var(--demo-texte)` #FFFFFF, **invariants par thème** — redéfinis dans aucun bloc sombre, donc rendu identique en clair et en sombre. |
| Contenu | « **Prototype éditorial** — Les articles ci-dessous sont des *maquettes de démonstration* rédigées à partir de faits réglementaires réels arrêtés au 4 septembre 2026. Aucune de ces pages n'a été vérifiée par un juriste ni publiée. Voir le registre de vérification. » |
| États | Lien à `text-decoration-thickness: 1px`, porté à 2 px au survol ; focus par la règle globale. Aucun état vide, de chargement ou d'erreur. |
| Accessibilité | `role="note"` ; deuxième arrêt de tabulation. Contraste **6,3:1**, valeur confirmée par le commentaire de `tokens.css`. |

### 2.2 Bandeau de cotations et indicateur de conformité

**Rôle et décision.** Fournir le repère de marché minimal attendu d'un lecteur venu de l'écosystème cryptoactif, **et lui refuser la place de choix**. Sur un média grand public, l'extrémité droite d'un bandeau de cours est vendue : indice de peur, promotion de plateforme, lien affilié. Ici elle porte un lien vers `registre.html`, qui donne par plateforme le statut d'inscription, l'autorité principale, les provinces couvertes, le régime LBC/FT, la dernière décision et le lien vers la fiche officielle. C'est **le seul emplacement monétisable au-dessus de la ligne de flottaison, et l'arbitrage est fait contre la monétisation**. Il traduit en interface l'avertissement du pied de page : « Vérifiez toujours l'inscription d'une plateforme dans le registre de votre autorité provinciale avant d'y déposer des fonds. » Un avertissement en pied se lit une fois ; un lien en tête se lit à chaque visite.

| Attribut | Spécification |
|---|---|
| Grille | Piste flex unique dans `.contenant`, `gap: var(--e-6)` 24 px, `overflow-x: auto` avec ascenseur masqué. **Ne se replie jamais** : sous 640 px elle défile. `.conformite` porte `margin-left: auto` : poussé au bord droit tant que la piste tient, dernier élément atteignable au défilement au-delà. |
| Espacements | `padding-block: var(--e-2)` 8 px ; `.conformite` : `padding-left: var(--e-6)` 24 px et filet `color-mix(in srgb, var(--encre-texte) 25%, transparent)`. Aucune hauteur fixée : elle résulte du contenu, l'élément le plus haut étant le badge « Démo » (≈ 24,5 px), soit **≈ 40 px** au total. |
| Typographie | `var(--police-donnee)` pour tout le bandeau — un cours est une donnée, pas de la prose. Corps `var(--t-petit)` 13 px ; `.cours__sym` graisse 700 à `.04em` ; `.cours__val` en `tabular-nums`, obligatoire sans quoi les chiffres sautent au rafraîchissement ; `.cours__var` et `.conformite` `var(--t-micro)` 11 px, la seconde en majuscules. |
| Couleurs | Famille « bandes d'encre », **invariante** : `--encre-fond` #0E1A2B clair / #16263A sombre, `--encre-texte` #F4F7FA dans les deux. La bande reste sombre en mode clair **comme en mode sombre** : elle ne s'inverse pas. Variation : `--encre-hausse` #3FCB96, `--encre-baisse` #FF6B7F, `--encre-stable` #8FA0B2. |
| Contenu | Badge « Démo », puis `BTC/CAD`, `ETH/CAD`, `SOL/CAD`, `CAD/USD` — valeur « — », variation « n. d. » —, puis « Flux de marché · non branché », puis « **Registre des plateformes autorisées** » (`data-en="Authorized platform register"`). |
| États | Survol : soulignement. Vide : c'est l'état par défaut du prototype. Erreur en production : non spécifié (§ 2.13). |
| Accessibilité | `role="region"`, `aria-label="Cours des principaux actifs et statut réglementaire"`. **Troisième arrêt de tabulation.** Texte **16,3:1** clair / **14,2:1** sombre ; pastille (règle 1.4.11, seuil 3:1) **8,5:1** et **7,4:1** — l'invariance de la bande est ce qui garantit cette marge. |

`CAD/USD` est le quatrième symbole et n'est pas un actif : il rappelle que le lectorat compte en dollars canadiens et que toute conversion est un fait générateur. Les valeurs sont figées ; `actio.js` (l. 244-247) pose sur chaque `[data-arrete]` le titre « Données figées — prototype hors ligne. En production : flux de marché sous licence, rafraîchi toutes les 60 secondes. » Afficher un cours faux comme s'il était réel serait une indication trompeuse.

**Indicateur de conformité — charte opposable.** `.conformite__pastille` : disque de 8 px, `background: var(--encre-hausse)`, halo `box-shadow: 0 0 0 3px color-mix(in srgb, var(--encre-hausse) 25%, transparent)`.

| Règle | Énoncé |
|---|---|
| Signification | La pastille qualifie **la nature de la destination** — un registre d'entités inscrites — jamais l'état du marché ni celui d'une plateforme. |
| Interdiction | Elle ne change jamais de couleur selon une condition de marché, un incident ou un cours : une pastille virant à `--encre-baisse` ferait d'Actio une agence de notation de fait. |
| Interdiction | Aucun logo, aucune marque de plateforme, aucun lien affilié dans cet emplacement. |
| Autorité | Seule la direction de la rédaction modifie la cible du lien ; le libellé est bilingué par `data-fr` / `data-en`. |
| Libellés proscrits | « liste noire », « liste blanche », « plateformes approuvées ». L'AMF publie des « mises en garde » et une « liste des entreprises non autorisées » ; les ACVM tiennent une liste de plateformes autorisées et une liste de plateformes **proscrites** (fiche 01, point 10 — source secondaire, **[À VÉRIFIER]**). |

**Arbitrage à assumer ou corriger.** Seul `.entete` est `sticky` : l'indicateur disparaît au premier défilement, alors que « S'abonner » reste visible en permanence.

### 2.3 En-tête principal et mega-menu

**Rôle et décision.** Montrer en une ligne que le site est bilingue, organisé par **autorité** et non par format, et qu'il propose un abonnement. Seule l'entrée pédagogique reste un format.

| Attribut | Spécification |
|---|---|
| Grille | `position: sticky; top: 0; z-index: var(--z-entete)` 200 ; fond `color-mix(in srgb, var(--fond-page) 92%, transparent)` avec `backdrop-filter: saturate(160%) blur(12px)` — le contenu défilant transparaît à 8 %. `.entete__barre` : flex, `gap: var(--e-6)`, `min-height: 64px`. |
| Ruptures | **> 1100 px** : logo, nav 5 entrées, deux sélecteurs, bouton sur une ligne ; `.burger` en `display: none`, donc hors tabulation. **≤ 1100 px** : burger 42 × 42 px ; `.nav` et `.entete__actions` masqués, rétablis sous `.entete[data-ouvert="true"]` ; nav en colonne, `.nav__lien` à `var(--e-4) var(--e-2)` et `var(--t-base)`, filets `--bordure-douce` ; `.btn--pro` en `flex: 1 1 100%` ; le mega-menu devient `static` et se déplie sur place, `padding-block: var(--e-5)`. **≤ 1024 px** : les quatre `col-3` du menu passent à `span 6` (2 × 2). **≤ 640 px** : `span 12`. |
| Espacements | `.nav { gap: var(--e-1) }` ; `.nav__lien { padding: var(--e-2) var(--e-3) }` ; `.entete__actions { gap: var(--e-2) }` ; `.megamenu__grille { padding-block: var(--e-8) }` 32 px ; `.megamenu__vedette { padding: var(--e-5) }`. |
| Typographie | `.logo` `var(--police-titre)` 1,5 rem, 700, `-.03em` ; `.nav__lien` 13 px graisse 600 ; `.megamenu__colonne h3` 11 px majuscules 0,085 em ; `.selecteur button` 11 px, 600, `.06em`. |
| Couleurs | Nav `var(--texte-primaire)` sur `var(--fond-page)` : **16,5:1** dans les deux modes ; survol `--fond-surface-2` ; page courante `--actio-bleu-palais` (**10,5:1**) plus soulignement `::after` de 2 px. `.logo__point` en `var(--actio-turquoise-fonce)` #096B61 (**6,0:1**) / #3FD8C7 (**10,5:1**). `.btn--pro` : encre sur vélin **16,5:1**, survol `var(--fill-primaire)` + `var(--fill-primaire-texte)` **11,1:1** clair / **7,1:1** sombre. |
| États | `aria-expanded="true"` : fond `--fond-surface-2`, chevron pivoté de 180° en `var(--mvt-rapide)` 120 ms. Burger ouvert : croix (translations ±6 px, rotations ±45°). Fermeture par clic sur le déclencheur, clic extérieur ou `Échap`, laquelle **rend le focus au déclencheur** (`actio.js` l. 120-124). Sélecteurs : `aria-pressed`. |
| Accessibilité | `<nav aria-label="Navigation principale">` ; burger avec `aria-expanded`, `aria-controls` et `aria-label` bilingue ; sélecteurs en `role="group"` nommés « Langue du site » et « Thème d'affichage » ; `#mm-regulation` `hidden`, donc hors tabulation quand fermé. |

**Contenu.** Nav : « Régulation & ACVM », « Marchés & Macro », « Guides & Éducation », « Fiscalité canadienne », « Actio Pro ». Mega-menu à trois axes de tri croisé — **Par autorité** (ACVM, AMF, CVMO, OCRI, CANAFE, Banque du Canada), **Par type d'acte** (avis du personnel, consultation publique, décision et sanction, mise en garde, règlement et modification, dispense discrétionnaire), **Par juridiction** (fédéral, Québec, Ontario, harmonisé ACVM, international) — puis une colonne vedette : badge « Dossier permanent », titre « La sortie du régime de courtier restreint », et « Suivi continu de la migration des plateformes vers l'inscription de courtier en placement et l'adhésion à l'OCRI, annoncée par les ACVM le 6 août 2024. »

Les trois axes ne sont pas décoratifs : ils reproduisent la manière dont le droit applicable est réellement indexé — par l'autorité qui agit, par l'instrument employé, par le territoire visé. La date du 6 août 2024 est **[À VÉRIFIER]** (fiche 02, incertitude 12 : des communiqués ultérieurs ont pu la remplacer).

### 2.4 À la une — agencement asymétrique 7 / 5

**Rôle et décision.** Opposer une analyse longue à un fil de brèves dans le même écran. Le rapport **7 / 5** est préféré à 8 / 4 : à 8 / 4 la colonne de brèves tombe à 320 px et un titre sur deux lignes en devient un sur quatre. À 704 px / 496 px, la brève garde une amplitude de titre confortable tout en restant subordonnée. Le filet vertical `border-right` sur `.une__principal`, doublé de `padding-right: var(--e-8)` 32 px, rend la subordination lisible sans hiérarchie de taille supplémentaire.

| Attribut | Spécification |
|---|---|
| Grille | `.col-7` + `.col-5` = 1224 px. À **1024 px** les deux passent à `span 12` : le filet vertical devient horizontal et le rembourrage bascule en `padding-bottom: var(--e-8)`. Le DOM est déjà dans l'ordre de lecture voulu. |
| Espacements | `.une { padding-block: var(--e-10) var(--e-12) }` 40 / 48 px ; `.une__principal { gap: var(--e-4) }` ; `.breves { gap: var(--e-5) }` ; `.breve { gap: var(--e-2); padding-bottom: var(--e-5) }`, filets `--bordure-douce`, la dernière sans filet ni rembourrage. |
| Typographie | `.une__titre` `--t-h1` = `clamp(2,125rem, 1,62rem + 2,2vw, 3,375rem)` → 34 à 54 px, Source Serif 4, 700, `--lh-serre` 1,15. `.une__chapeau` `--t-lead` → 18 à 21 px, Inter 400, `--lh-moyen` 1,35. `.une__signature` 13 px (nom en 600) ; `time` et `.lecture` 11 px en `--police-donnee`. `.breves__titre` 11 px majuscules 0,085 em. `.breve__titre` `--t-h6` 17 px, Source Serif 4, 700. |
| Couleurs | Titre **16,5:1**, survol `--actio-bleu-palais` **10,5:1** ; chapeau `--texte-secondaire` **7,1:1** ; signature `--texte-tertiaire` **5,2:1**. `.une__visuel` : `aspect-ratio: 16 / 9`, `border-radius: var(--rayon-3)` 10 px, dégradé à 135°. |
| États | `.breve__titre a::after { inset: 0 }` rend toute la brève cliquable (`.breve` en `position: relative`, une seule ancre : aucun conflit de zone). Le survol de la zone étendue **ne produit aucun retour visuel** : à corriger par `.breve:hover .breve__titre { color: var(--texte-lien) }`. Vide : plancher de trois brèves à poser en règle éditoriale, sans quoi le `.col-5` devient très court face à un `.col-7` de 900 px. |
| Accessibilité | Hiérarchie `h1.vh` (l. 177) → `h2.vh` « À la une » → `h3` titre majeur / `h3` « Le fil réglementaire » → `h4` titres de brèves. Le visuel est un `role="img"` porteur de l'`aria-label` « Schéma : ligne de partage tracée par le TMF entre gestion de fonds d'autrui et vente d'information. », le `<svg>` intérieur étant `aria-hidden` : le texte alternatif énonce la démonstration, pas la forme. |

**Contenu réel.** Métadonnées : `.rubrique` « Régulation & ACVM » — `badge--alerte` « Décision » — `juridiction--quebec` « Québec · TMF ». Titre : « Après *Gagnon*, où s'arrête le contrat d'investissement pour les « finfluenceurs » québécois ? » Chapeau : « Le Tribunal administratif des marchés financiers a jugé, le 22 août 2025, que gérer les éthers d'investisseurs contre 20 % des profits constitue un contrat d'investissement — mais que vendre un abonnement à des signaux de négociation n'en est pas un. » Signature : « **Marie-Claude Fortin**, juriste en valeurs mobilières » — « AMF / Québec » — `<time datetime="2026-09-03">3 septembre 2026</time>` — « 11 min ».

| Métadonnée | Règle de composition opposable |
|---|---|
| Rubrique | Une seule, jamais deux, correspondant à une entrée réelle de la navigation. Filet de 3 px (`--trait-editorial`) ; couleur variable : `--marches` en `--actio-turquoise-fonce`, `--fiscalite` en `--statut-consultation`, `--guides` en `--jur-ontario`, `--pro` en `--texte-primaire`. |
| Badge statutaire | Un seul, obligatoire, choisi dans la charte du § 2.5. Il désigne l'**acte** commenté, jamais le ton ni le sujet. |
| Juridiction | Losange de 8 px pivoté à 45°, couleur `--jur-*`. Nomme le territoire, éventuellement suivi de l'organe (« Québec · TMF »). Un acte harmonisé prend `--multi`, jamais la province de rédaction. |
| Auteur | Prénom, nom, virgule, qualité en minuscules. La qualité est une allégation vérifiable : « juriste en valeurs mobilières » engage la rédaction. Signature **fictive** ici, couverte par le bandeau de probité. |
| Juridiction de signature | Répétée après l'auteur en « autorité / province » : périmètre de compétence de l'analyse, non de l'auteur. |
| Date | `datetime="AAAA-MM-JJ"` = **date de publication**, jamais date de l'acte. La date de l'acte vit dans le corps et dans la légende du visuel (« TMF · 22 août 2025 »). Les deux ne sont jamais fusionnées. |
| Temps de lecture | Entier suivi de « min », en `--police-donnee`, sans « ~ » ni fourchette. Méthode de calcul non arrêtée (§ 2.13). |

| Brève | Badge | Juridiction | Titre (extrait) | Date · durée |
|---|---|---|---|---|
| 1 | `--consultation` « Consultation » | `--federal` | « Stablecoins : la Banque du Canada ouvre les consultations sur les règlements d'application de la loi adoptée en mars » | 4 sept. · 4 min |
| 2 | `--info` « Avis » | `--multi` | « Garde des actifs numériques : ce que le cadre de l'OCRI change pour les courtiers de taille moyenne » | 2 sept. · 6 min |
| 3 | `--alerte` « Mise en garde » | `--quebec` | « Blocage d'accès aux plateformes non inscrites : l'outil monte en puissance, ses limites juridiques aussi » | 31 août · 5 min |

### 2.5 Régulation & décryptages institutionnels — charte des badges

**Rôle et décision.** Prouver que le média lit les sources primaires. Chaque carte porte un **résumé exécutif** encarté — objet éditorial que la presse cryptoactif n'a pas — qui livre l'analyse avant le clic. Décision assumée : des cartes longues plutôt que des accroches tronquées, parce qu'un directeur de la conformité doit décider en dix secondes si l'article le concerne.

| Attribut | Spécification |
|---|---|
| Grille | Trois `.carte.col-4` de 392 px ; `span 6` à 1024 px, `span 12` à 640 px. `height: 100%` avec `align-items: stretch` : hauteurs égales sur une ligne ; `.carte__pied { margin-top: auto }` colle les métadonnées au bas. |
| Espacements | `.section { padding-block: var(--e-16) }` 64 px avec `.section + .section { padding-top: 0 }` — règle qui **ne s'applique pas** ici, le frère précédent étant `.une.grille` : cette section conserve 64 px en haut, toutes les suivantes du `.contenant` n'en ont aucun. `.section__entete` : `padding-bottom: var(--e-4)`, `margin-bottom: var(--e-8)`, filet bas de 2 px en `--texte-primaire`. `.carte { padding: var(--e-5); gap: var(--e-3) }` ; `.carte__synthese { padding: var(--e-3) var(--e-4) }`. |
| Typographie | `.section__sur` 11 px majuscules ; `.section__titre` `--t-h2` = `clamp(1,75rem, 1,52rem + 1,0vw, 2,375rem)` → 28 à 38 px ; `.carte__titre` `--t-h5` → 18 à 20 px ; `.carte__resume` 13 px `--lh-moyen` ; `.carte__synthese` 13 px `--lh-dense` 1,45 ; `.carte__pied` 11 px en `--police-donnee`, points médians générés. |
| Couleurs | Carte `--fond-surface` / `--bordure`, rayon 6 px. `.carte__synthese` : `--fond-surface-2` avec **filet gauche de 3 px** en `--actio-bleu-palais`, rayon `0 3px 3px 0`. Contrastes : résumé **7,5:1**, synthèse **6,6:1**, « Résumé exécutif. » **15,7:1**, pied **5,5:1**. |
| États | `:hover, :focus-within` : `--bordure-forte`, `var(--ombre-2)`, `translateY(-2px)` en `var(--mvt-moyen)` 220 ms, neutralisé sous `prefers-reduced-motion`. `.carte__titre a::after { inset: 0 }` : carte entièrement cliquable, `:focus-within` rendant l'état au clavier. Vide : publier par multiples de trois. |
| Accessibilité | `<section aria-labelledby>` ; chaque carte est un `<article>` ; le `h3` contient l'unique lien. |

**Contenu.** Surtitre « Sources primaires décryptées » ; titre « Régulation & décryptages institutionnels » ; lien « Toutes les analyses ». Cartes : *Consultation publique* / ACVM, régime permanent succédant aux avis du personnel (Analyse, 9 min, 2 sept. 2026) ; *Sanction OCRI* / Ontario, Avis 21-330 sur la publicité et le marketing d'influence (Décryptage, 7 min, 29 août 2026) ; *Avis du personnel* / ACVM, prêts adossés à des cryptoactifs et rendement passif (Analyse, 8 min, 26 août 2026).

**Charte d'emploi opposable.** Un badge est une qualification juridique affichée. Il est faux ou il est juste ; il n'est jamais joli.

| Badge | Classe | Jeton clair / sombre | Seul emploi admis | Interdits |
|---|---|---|---|---|
| Consultation publique | `badge--consultation` | #965800 sur #FBF0E0 (**5,0:1**) / #E8A93C sur rgba(232,169,60,.14) | Appel à commentaires ouvert et **non clos** : consultation d'une autorité, avant-projet, projet de règlement publié à la *Gazette, Partie I*. | Interdit dès la clôture des commentaires ; interdit pour une position administrative en vigueur. |
| Avis du personnel | `badge--info` | #0F3D68 sur #E7EFF7 (**9,6:1**) / #7FB6EA sur rgba(127,182,234,.14) | Avis du personnel des ACVM, bulletin ou note d'orientation de l'OCRI, position administrative. **Jamais présenté comme un règlement** : ni texte adopté, ni texte publié à la Gazette. | Interdit pour un règlement, une loi, une décision. |
| Sanction OCRI | `badge--alerte` | #C8102E sur #FBE9EC (**5,0:1**) / #FF6B7F sur rgba(255,107,127,.14) | Décision disciplinaire **de l'OCRI**, identifiée par ses parties et sa date. Le libellé nomme l'organisme : « Sanction OCRI », « Sanction CVMO », « Pénalité TMF ». | Interdit pour l'acte d'une autre autorité, pour une mise en garde, pour un article traitant des sanctions en général. |
| Mise en garde | `badge--alerte` | id. | Publication qualifiée de « mise en garde » par l'autorité, ou inscription sur une liste d'entreprises non autorisées ou de plateformes proscrites. | Interdit comme synonyme d'alerte éditoriale ; « liste noire » est proscrit. |
| Décision | `badge--alerte` | id. | Décision d'un tribunal ou d'une autorité **imposant** une interdiction, une pénalité, une radiation ou un blocage. Décision déclaratoire ou favorable au mis en cause : employer `badge--info`. | Interdit pour une ordonnance de procédure ou une décision non publiée. |
| *(réservé)* Inscrit / En vigueur | `badge--conforme` | #0E7C5A sur #E3F4EE / #3FCB96 | Statut d'inscription confirmé au registre ; texte entré en vigueur. Employé dans `registre.html`. | Interdit comme label de recommandation ou de qualité. |
| *(réservé)* Archivé / Abrogé | `badge--neutre` | #5B6B7C sur #EDF0F3 / #8FA0B2 | Acte abrogé, remplacé ou sans objet. | Interdit comme étiquette de format. |

**Règles transversales.** Un seul badge par objet. Il est posé par le rédacteur et validé par le responsable de la vérification, **jamais par l'intégration ni par le marketing**. Il ne peut être ajouté pour équilibrer visuellement une ligne. Il est reproduit à l'identique dans l'infolettre. En cas de doute entre deux badges, on retient le moins grave.

### 2.6 Les trois sections intercalaires : Marchés, Fiscalité, Actio Pro

Elles s'intercalent entre le schéma et les guides (Marchés) puis entre les guides et l'infolettre (Fiscalité, Pro). Elles ne modifient pas la hiérarchie posée plus haut, mais l'intégration doit les traiter.

| Section | Grille à 1320 px | Ruptures | Point de conception |
|---|---|---|---|
| Marchés & macro (`.depeche`) | `76px 1fr auto`, `gap: var(--e-4)`, `padding: var(--e-4) 0`, filet bas `--bordure-douce`, filet haut sur la première | `1fr` à **640 px** | Une dépêche n'est pas une analyse : ni carte, ni ombre — balayage vertical. Heure en `--police-donnee` avec `tabular-nums`, horodatée à la minute (« 4 sept. · 14 h 05 »). Survol : `--fond-surface-2` sur toute la ligne. |
| Fiscalité (`.carte` × 4 dans `.col-8.grille` + `.echeancier` en `.col-4`) | grille imbriquée : quatre `.col-6` de **320 px** (2 × 2) ; échéancier 392 px | voir D14 | Échéancier en `<aside aria-labelledby>`, filet supérieur de 3 px en `--statut-consultation` ; titre **5,7:1** clair / **8,1:1** sombre ; lignes en `58px 1fr`. |
| Actio Pro (`.pro`) | `1.15fr 1fr`, `gap` et `padding` à `var(--e-12)` 48 px, cadre `var(--trait-fort)` en `--texte-primaire` | `1fr`, gap 32 px, padding 24 px à **900 px** | Seul bloc cerné d'un filet d'encre de 2 px. Six bénéfices préfixés d'une flèche en `--actio-turquoise-fonce`. Mention obligatoire : « Aucun contenu commandité dans l'offre Pro. » |

La dernière ligne de l'échéancier est le patron à suivre : date « — », objet « Cadre de déclaration des crypto-actifs », précision « le calendrier canadien reste à confirmer sur les textes officiels ». C'est la traduction correcte d'une incertitude documentée : la fiche 05 (incertitude 2) recense **trois dates concurrentes** d'entrée en vigueur du cadre (1er janvier 2026, 1er janvier 2027, « années civiles 2027 et suivantes »). Les trois autres lignes (30 avril, 15 juin, 15 mars) ne sont établies par **aucune** fiche de veille : à marquer **[À VÉRIFIER]** ou à retirer, la mention « Dates de principe » n'y suffisant pas. De même, la première dépêche — les FNB cotés comme seul véhicule admissible aux régimes enregistrés — est appuyée par les fiches 03 et 05, mais la fiche 03 précise que la refonte du régime des placements admissibles lancée au Budget de 2025 n'a **pas** tranché le sort des cryptoactifs et des FNB adossés : le mot « restent » doit être daté dans le corps.

### 2.7 Bloc schéma — le cheminement de conformité

**Rôle et décision.** Rendre visible en un objet ce qu'aucun texte unique ne dit : le parcours d'inscription d'une plateforme n'existe qu'en creux, reconstitué à partir d'avis du personnel, de conditions d'inscription et de dispenses. Format signature d'Actio.

| Attribut | Spécification |
|---|---|
| Grille | `.schema` en pleine largeur du conteneur (1224 px), hors grille à 12 colonnes. `.flux { display: flex; gap: var(--e-3); min-width: 720px }` dans `.schema__corps { overflow-x: auto }`. Cinq étapes en `flex: 1` : **225,6 px** à 1320 px, **134,4 px** au plancher de 720 px, sous lequel le bloc **défile horizontalement** au lieu de s'empiler — un cheminement séquentiel perd son sens en pile verticale. |
| Espacements | `.schema__entete { padding: var(--e-5) var(--e-6) }` sur `--fond-surface-2` ; `.schema__corps { padding: var(--e-6) }` ; `.flux__etape { padding: var(--e-4); gap: var(--e-2) }`, rayon 6 px ; `.schema__pied { padding: var(--e-3) var(--e-6) }`. |
| Typographie | `.schema__titre` `--t-h4` → 21 à 24 px ; `.schema__sous` 13 px, **`max-width: 62ch`** — mesure imposée, à ne pas élargir ; `.flux__num` 11 px `--police-donnee` 700 à `.08em` ; `.flux__nom` 17 px Source Serif 4 700 ; `.flux__detail` 11 px `--lh-dense`. |
| Couleurs | Cadre `--fond-surface` / `--bordure`, rayon `var(--rayon-3)` 10 px. Étape ordinaire : `--fond-surface-2` sur `--bordure-douce`. Bascule : `border-color: var(--actio-turquoise)`, fond `var(--actio-turquoise-pale)`, numéro en `--actio-turquoise-fonce`. Contrastes sur la bascule : nom **15,6:1**, détail **6,7:1**, numéro **5,7:1** clair / **7,1:1** sombre. |
| États | Aucun état interactif hormis le bouton « Version imprimable » (`.btn--secondaire`, survol `--fond-surface-2` et `--texte-tertiaire`). |
| Accessibilité | `<section aria-labelledby="titre-schema">` ; `<ol>` conservé, donc lu comme une séquence numérotée. |

| Étape | Libellé | Contenu essentiel |
|---|---|---|
| ÉTAPE 01 | Engagement préalable | Dépôt de l'engagement préalable à l'inscription (EPI) auprès de l'autorité principale ; conditions d'exploitation immédiatement opposables. |
| ÉTAPE 02 | Courtier restreint | Inscription transitoire assortie de conditions et de dispenses : plafonds d'achat pour les investisseurs de détail, actifs négociables limités, obligations de garde. |
| **ÉTAPE 03 · POINT DE BASCULE** | Demande de courtier en placement | « Depuis le 6 août 2024, c'est la seule trajectoire ouverte : capital réglementaire, gouvernance, personnes désignées responsables, contrôle interne. » |
| ÉTAPE 04 | Adhésion à l'OCRI | Application des règles de l'organisme, dont le cadre de garde des actifs numériques et le classement des dépositaires par paliers. |
| EN PARALLÈLE | Guichet LBC/FT | Inscription d'ESM auprès du CANAFE (fédéral) et, au Québec, permis d'entreprise de services monétaires délivré par **Revenu Québec** — et non par l'AMF. |

**Pourquoi l'étape 03 est le point de bascule.** C'est la seule étape où le régime change de nature. Les étapes 01 et 02 relèvent d'un dispositif transitoire bâti par avis du personnel ; l'étape 03 fait entrer la plateforme dans une catégorie d'inscription de droit commun, avec exigences de capital réglementaire, de gouvernance et de contrôle interne. C'est aussi le point de non-retour : depuis le communiqué du 6 août 2024, la porte d'entrée n'est plus l'engagement préalable. La mise en évidence turquoise ne signale donc pas « où l'on en est », mais **l'étape où le régime cesse d'être intérimaire**. Le cinquième bloc porte « EN PARALLÈLE » et non « ÉTAPE 05 » : le guichet LBC/FT n'est pas une suite chronologique mais une filière distincte, fédérale et provinciale, qui court pendant tout le parcours. La mention « Revenu Québec — et non par l'AMF » corrige l'erreur la plus fréquente de la presse spécialisée (fiche 02, point 3 : la LESM est administrée par Revenu Québec depuis le 13 septembre 2021).

**Règles de mise en page des schémas d'Actio.** (1) Tout schéma est encadré dans `.schema`, jamais posé nu dans le flux d'un article. (2) `.schema__pied` porte **trois mentions obligatoires**, dans cet ordre : la source (« Source : reconstitution Actio d'après les avis du personnel des ACVM et le cadre de l'OCRI »), la date d'arrêté (« Arrêté au 4 septembre 2026 »), la portée (« Schéma pédagogique — ne constitue pas un avis juridique ») ; aucun schéma ne se publie sans elles. (3) Dans un tableau comparatif, la date d'arrêté est **répétée en tête**. (4) Le mot « reconstitution » est obligatoire dès que le schéma agrège plusieurs instruments : il signale que la séquence n'est écrite nulle part telle quelle. (5) Un schéma d'Actio doit s'imprimer en A4 paysage sans perte — d'où le bouton « Version imprimable » —, parce qu'il finit en pièce jointe de note interne. (6) Une seule étape peut porter `--actuel` ; les étapes conditionnelles portent `--futur`.

### 2.8 Guides pédagogiques — trois paliers et jauge de niveau

**Rôle et décision.** Constituer le socle permanent qui capte la recherche organique sans reprendre le modèle dominant (guides de trading, analyse technique sérialisée). La progression n'est pas « débutant → trader » mais « contribuable → conformité ». Le palier 3 vise les directions de la conformité, les cabinets et les administrateurs : c'est l'entonnoir vers l'offre payante, nommé en pied de carte à 11 px et nulle part ailleurs.

| Attribut | Spécification |
|---|---|
| Grille et espacements | Trois `.palier.col-4` de 392 px ; 6 colonnes à 1024 px, 12 à 640 px. `display: grid; gap: var(--e-4); padding: var(--e-6); height: 100%` ; `.palier__pied { margin-top: auto }` aligne les pieds. |
| Typographie | `.palier__niveau` 11 px `--police-donnee`, majuscules, `.08em`, `--texte-tertiaire` (**5,5:1**) ; `.palier__titre` `--t-h5` → 18 à 20 px ; `.palier__desc` 13 px `--lh-moyen` ; `.palier__liste li` 13 px, `padding-left: var(--e-5)` 20 px, puce remplacée par un tiret de 10 × 2 px en `--bordure-forte` posé à `top: .62em`. |
| Jauge | `.palier__jauge` contient exactement **trois `<i>`** de 16 × 4 px, rayon 2 px, `gap: 3px`, en `--bordure-forte` par défaut. Coloration purement sélectorielle (`i:nth-child(-n+1)`, `(-n+2)`, `(-n+3)`) : **le nombre de segments allumés est le niveau**, aucun attribut à saisir. Le filet supérieur de 3 px de la carte reprend la même couleur : jauge et filet forment un seul signal. |
| États et accessibilité | `.palier__liste a:hover` : `--texte-lien` et soulignement. Aucune zone cliquable étendue — quatre liens distincts, un `::after { inset: 0 }` les rendrait inatteignables. `.palier__jauge` est `aria-hidden="true"` : le niveau est déjà porté par le texte adjacent. |

| Palier | Segments | Jeton clair / sombre | Titre | Volume |
|---|---|---|---|---|
| Niveau 1 · Débutant | 1 | `--statut-conforme` #0E7C5A / #3FCB96 | « Déclarer ses cryptoactifs au Canada » | 4 guides · ~45 min |
| Niveau 2 · Intermédiaire | 2 | `--actio-bleu-palais` #0F3D68 / #4E9BE0 | « Régimes enregistrés, jalonnement et revenus étrangers » | 4 guides · ~1 h 10 |
| Niveau 3 · Professionnel | 3 | `--jur-ontario` #6B4FA8 / #A991E8 | « Conformité des plateformes et garde d'actifs » | 4 guides · ~2 h · **Actio Pro** |

Le titre « Jalonnement : revenu au moment de la réception, ou à la disposition ? » est **correctement formulé en question** et doit le rester : la fiche 05 (incertitude 6) interdit d'attribuer à l'ARC une position formelle sur le jalonnement, faute d'interprétation technique identifiée. Un titre affirmatif serait fautif.

### 2.9 Appel à l'abonnement — conversion et conformité LCAP

**Rôle et décision.** Convertir sans franchir la frontière entre information et sollicitation, et surtout **démontrer la conformité en l'exécutant**. Un média de conformité qui pré-cocherait une case de consentement serait inaudible : le bloc est autant une pièce de démonstration qu'un formulaire.

| Attribut | Spécification |
|---|---|
| Grille | La section est **hors du `.contenant` principal** — frère du `div.contenant` de `<main>` —, d'où son propre conteneur et un rembourrage plein de `var(--e-16)` 64 px haut et bas (`.section + .section` ne s'y applique pas). `.infolettre` : rayon `var(--rayon-4)` 16 px. `.infolettre__inner { padding: var(--e-12) var(--e-10) }` 48 / 40 px, ramené à `var(--e-8) var(--e-5)` 32 / 20 px sous **640 px**. `.infolettre__form { max-width: 620px }` et `.champ { flex: 1 1 260px }` : champ et bouton se replient sous environ 420 px. |
| Typographie | `.infolettre__sur` 11 px majuscules en `--encre-accent` #35D6C4 ; `.infolettre__titre` `--t-h2`, **`max-width: 22ch`** — mesure courte volontaire, deux lignes ; `.infolettre__promesse` `--t-lead`, `--encre-texte-2`, `56ch` ; `.infolettre__chiffre` `--t-h4` en `--police-donnee` 700. |
| Couleurs | Même famille invariante que le bandeau de cotations : `--encre-fond` / `--encre-texte`, plus deux dégradés radiaux en `::before` (turquoise 26 % en haut à droite, `--actio-bleu-palais-clair` 24 % en bas à gauche), `pointer-events: none`. |
| Contrastes | `--encre-texte` **16,3:1** clair / **14,2:1** sombre ; `--encre-texte-2` **8,6:1** et **7,6:1** sur l'aplat, **5,8:1** au point le plus clair du halo en clair. En sombre ce même point tombe à **4,2:1** : la géométrie actuelle maintient tout texte hors du rayon le plus lumineux (centré à 88 % / 8 %), mais rien ne le garantit après réécriture — à mesurer sur capture au gel de la maquette ; correctif, ramener la teinte de 26 % à 18 % en sombre, ce qui rétablit **5,1:1**. |
| États | Champ : fond à 8 % de `--encre-texte`, filet à 45 % → contraste de bordure **3,9:1** ; placeholder à 68 % → **6,9:1** ; focus `border-color: var(--encre-accent)` et fond porté à 12 %. Erreur d'adresse : « Adresse de courriel non valide. » avec focus rendu au champ. Erreur de consentement : voir tableau ci-dessous. Conteneur d'état `<p role="status" aria-live="polite">` avec `min-height: 1.4em` — la réserve de hauteur évite le saut de mise en page. Après succès, `actio.js` vide le champ et **décoche** la case (l. 233-236). |

**Promesse de valeur.** Surtitre « Actio Dispatch · l'infolettre ». Titre : « Le mardi matin, ce qui a changé dans le droit canadien des cryptoactifs. » Promesse : « Une édition par semaine : le décryptage d'un acte réglementaire, le radar des juridictions (Ottawa, Québec, Ontario, international) avec son niveau d'impact, et un point de fiscalité appliqué à un cas réel. Lu en huit minutes. Sourcé, daté, sans conseil d'achat. » Elle énonce une structure (trois rubriques nommées), une durée, une fréquence et une **exclusion** — « sans conseil d'achat » —, cette dernière étant la plus importante : elle est cohérente avec l'avertissement du pied de page selon lequel Actio n'est inscrite à aucun titre.

**Preuves affichées** — trois blocs séparés de 24 px, encadrés par `border-block` à 18 % de `--encre-texte` : « Mardi · 6 h 30 / Heure de l'Est » (ponctualité vérifiable dès la première semaine), « 8 min / Temps de lecture » (coût d'attention borné), « 100 % / Sources primaires citées » (le seul engagement qui distingue Actio d'un agrégateur). **Aucun chiffre d'audience n'est affiché** : le benchmark montre que les chiffres auto-déclarés et non audités sont l'argument d'autorité standard du secteur, et qu'ils sont sans valeur devant un lectorat juriste.

| Exigence LCAP | Implémentation | Emplacement |
|---|---|---|
| Consentement exprès, **jamais pré-coché** | `<input type="checkbox" name="consentement">` sans attribut `checked` | `index.html` l. 774 |
| Case distincte de l'envoi | `<label class="infolettre__consentement">` séparé du `div.infolettre__form` | l. 773-782 |
| Finalités énoncées à la collecte | « Je consens expressément à recevoir l'infolettre *Actio Dispatch* et les communications électroniques commerciales d'Actio, conformément à la **Loi canadienne anti-pourriel (LCAP)**. » | l. 776-778 |
| Droit de retrait | « Ce consentement peut être retiré en tout temps par le lien de désabonnement présent dans chaque message. » | l. 778-779 |
| Renvoi aux politiques | Liens « politique de confidentialité » et « conditions d'utilisation » en `--encre-accent` | l. 779-780 |
| Blocage sans consentement | « Le consentement exprès est requis par la Loi canadienne anti-pourriel (LCAP). » puis `consent.focus()` | `actio.js` l. 220-227 |
| Preuve du consentement | « En production : double opt-in, horodatage du consentement et journalisation de la preuve (art. 13 LCAP). » | `actio.js` l. 229-231 |

Le renvoi à l'art. 13 est **[À VÉRIFIER]** : la fiche 06 indique que seul l'art. 33 a pu être confirmé sur source. Jusqu'à vérification, le message doit énoncer l'obligation — le fardeau de la preuve du consentement pèse sur l'expéditeur — **sans le numéro d'article**.

**Bandeau de réassurance.** Placé **après** la case de consentement (`margin-top: var(--e-5)` 20 px, 11 px, `--encre-texte-2`, « ✓ » en `--encre-accent`) : « Une seule édition par semaine » — « Désabonnement en un clic, traité sous 10 jours ouvrables » — « Aucune revente ni cession de vos renseignements » — « Données hébergées au Canada ». La position est un arbitrage : la réassurance suit le consentement pour que le geste positif du lecteur ne soit pas noyé sous quatre promesses. Le délai de **10 jours ouvrables** est celui de la fiche 06 (point 2), repris à l'identique dans le pied de `newsletter/actio-dispatch-001.html`. « Données hébergées au Canada » est un engagement lourd : la fiche 06 (§ 6) rappelle qu'une communication de renseignements personnels hors Québec impose une évaluation des facteurs relatifs à la vie privée préalable et documentée — mention à ne pas publier avant que le prestataire d'envoi soit choisi et l'EFVP conclue. Ce bandeau ne remplace pas les mentions obligatoires par envoi (identification de l'expéditeur, adresse postale valide 60 jours, mécanisme d'exclusion fonctionnel 60 jours), qui vivent dans le pied de l'infolettre.

### 2.10 Pied de page institutionnel

**Rôle et décision.** Porter la charge légale que la page ne peut assumer plus haut sans devenir illisible. C'est la contrepartie du refus de monétisation en tête : la crédibilité se paie ici, en densité.

| Attribut | Spécification |
|---|---|
| Grille et espacements | `.pied { margin-top: var(--e-20) }` 80 px, fond `--fond-surface-2`, filet supérieur de 2 px en `--texte-primaire`. `.pied__principal { padding-block: var(--e-12) var(--e-10) }` 48 / 40 px. Quatre colonnes : `col-4` (identité, adresse) + `col-2` (**défectueuse**) + `col-3` + `col-3`. |
| Typographie et couleurs | `.pied__colonne h3` 11 px majuscules `--texte-tertiaire` = **4,8:1** sur `--fond-surface-2`, valeur textuelle la plus serrée de la page et limite fixée par `tokens.css`. `.pied__liste a` 13 px `--texte-secondaire` = **6,6:1**, passage à `--texte-primaire` et soulignement au survol ; liens externes en `rel="external noopener"` avec flèche « ↗ » générée à 0,85 em — signal de sortie de site indispensable quand la destination est un régulateur. Adresse en `--police-donnee` à 11 px, identique à celle du pied de l'infolettre, conformément à l'obligation LCAP d'adresse postale valide. |
| Encadré | `.avertissement` : filet complet et filet gauche de 3 px en `--statut-alerte`, fond `--statut-alerte-pale`, `padding: var(--e-5) var(--e-6)`, `margin-block: var(--e-8)` ; titre 11 px majuscules précédé d'un « ⚠ » en `aria-hidden` ; trois paragraphes de 13 px à interlignage 1,62. `role="note"`. |
| Bande légale | `.pied__legal` : filet haut, `padding-block: var(--e-6)`, 11 px `--texte-tertiaire`, six liens sous `<nav aria-label="Liens légaux">`. |

Les trois paragraphes de l'encadré ne sont pas interchangeables. Le premier — « Actio ne fournit ni conseil en placement, ni conseil juridique, ni conseil fiscal. Actio n'est inscrite à aucun titre auprès des ACVM, de l'AMF, de la CVMO ou de l'OCRI » — écarte la qualification d'activité inscrite. Le second — « Ils décrivent un état du droit à une date donnée ; le droit évolue, et une analyse exacte à sa date de publication peut cesser de l'être » — écarte la responsabilité liée à l'obsolescence. Le troisième, sur le risque de perte totale et l'absence de protection en cas d'insolvabilité d'une plateforme non inscrite, referme la boucle ouverte par l'indicateur de conformité du § 2.2.

La colonne « Registres et sources officielles » compte sept liens sortants, dont **« Revenu Québec — permis d'ESM »** : l'intitulé est délibéré, il corrige dans le pied de page lui-même la confusion AMF / Revenu Québec. La colonne « Transparence » en compte sept autres — charte éditoriale et indépendance, partenariats rémunérés, affiliation et divulgation, méthode de vérification des sources, politique de correction, conflits d'intérêts, signalement d'erreur : **aucune n'est écrite**. Enfin, « Accessibilité (WCAG 2.1 AA) » est un **engagement volontaire** : la fiche 06 (points 9-10) établit que la Loi canadienne sur l'accessibilité ne vise que les entités sous réglementation fédérale et que la LAPHO ontarienne exige WCAG 2.0 AA au-delà de 50 employés. La page correspondante devra présenter la norme comme un choix éditorial, jamais comme une obligation légale invoquée.

### 2.11 Ordre de lecture et hiérarchie visuelle

La page compte **79 arrêts de tabulation** en disposition large — le `.burger` étant en `display: none`, donc hors séquence : 15 avant `<main>`, 4 à la une, 4 en Régulation, 1 au schéma, 5 en Marchés, 13 aux guides, 5 en Fiscalité, 1 en Actio Pro, 5 à l'infolettre, 26 au pied de page. L'ordre d'apparition est : probité → conformité → identité → analyse longue → sources primaires → mécanisme → fil de marché → pédagogie → fiscalité → offre professionnelle → abonnement → charge légale. Un média cryptoactif grand public ordonne l'inverse.

| Média cryptoactif grand public | Cette page | Justification |
|---|---|---|
| Cotations animées en position dominante | Bandeau à 8 px de rembourrage, valeurs figées, non collant | Le cours n'est pas l'information ; c'est le prétexte de la visite. |
| Extrémité droite du bandeau vendue | Lien vers le registre des plateformes | Seul emplacement rentable au-dessus de la ligne de flottaison, cédé à l'intérêt du lecteur. |
| Actualité chaude en tête | Analyse de 11 min sur une décision de 2025 | La valeur d'Actio est la profondeur, non la fraîcheur. |
| Accroches tronquées | Résumé exécutif encarté dans chaque carte | Le lecteur doit pouvoir décider sans cliquer. |
| Listicle prescriptif (« Top 7 des cryptos ») | Cheminement de conformité, échéancier fiscal | Un média de réglementation ne classe pas des actifs ; il date des obligations. |
| Guides « débutant → trading » | Paliers « contribuable → conformité » | La progression suit une charge d'obligation, non un appétit de risque. |
| Avertissement de risque en pied, une ligne | Encadré de trois paragraphes en `--statut-alerte` | L'avertissement est un contenu, pas une formalité. |

Trois dispositifs typographiques portent seuls la hiérarchie, sans recours à la couleur. La **mesure** : 18ch (titre Pro), 22ch (titre infolettre), 36ch (présentation en pied), 46ch (texte Pro), 56ch (promesse), 62ch (sous-titre de schéma). Le **contraste de famille** : Source Serif 4 pour l'éditorial, Inter pour l'étiquette, IBM Plex Mono pour la donnée. Le **filet** : 2 px sous chaque titre de section et autour du bloc Pro, 3 px pour les rubriques, les résumés exécutifs et les entêtes de palier, 1 px pour les séparations internes. La règle de famille est opposable et vérifiable mécaniquement : **toute date, toute durée, tout symbole de cotation et toute adresse doivent être en `var(--police-donnee)`**. C'est ce qui permet à l'œil de distinguer, dans une même ligne de métadonnées, l'affirmation éditoriale du fait daté.

### 2.12 Ce que la page ne fait pas, et pourquoi

**Pas de compteur de peur ni d'indice de sentiment.** Un indice de peur et d'avidité est une opinion présentée comme une mesure. Sur une page dont l'avertissement affirme ne fournir « ni conseil en placement, ni conseil juridique, ni conseil fiscal », afficher un curseur indiquant s'il faut acheter ou vendre serait contradictoire dans le même écran.

**Pas de classement de plateformes monétisé.** Trois raisons. L'inscription varie par province, ce qui rend structurellement trompeur tout tableau unique « meilleures plateformes au Canada » sans colonne juridiction. Un comparatif mettant en avant une plateforme inscrite peut s'analyser comme du matériel de marketing diffusé pour son compte, hypothèse que l'Avis 21-330 rend non théorique **[À VÉRIFIER sur le texte de l'avis]**. Le millésime dans le titre force enfin une réécriture annuelle qui vieillit mal en droit. `registre.html` remplace le comparatif : mêmes colonnes utiles — statut d'inscription, autorité principale, provinces couvertes, régime LBC/FT, dernière décision, fiche officielle — sans classement, sans note, sans recommandation.

**Pas de widget de prix clignotant.** Aucune animation hors les 120 à 220 ms de transition des états de survol, neutralisées sous `prefers-reduced-motion` (`actio.css` l. 10-16). Un cours qui clignote fabrique de l'urgence ; l'urgence est l'outil du vendeur.

**Pas de promotion publiée comme article.** Les deux seuls appels à l'action commerciaux — `#infolettre` et `#pro` — sont identifiés comme tels et exclus du fil éditorial ; la section Pro porte de surcroît sa propre limite : « Aucun contenu commandité dans l'offre Pro. » **Pas de chiffre d'audience auto-déclaré, pas de compte à rebours, pas de rareté** : aucun mécanisme de pression temporelle n'existe dans le balisage.

### 2.13 Défauts recensés et arbitrages à trancher

| # | Défaut | Correction, à jeton constant |
|---|---|---|
| D1 | `.col-2` n'est **pas défini** dans `actio.css` ; la colonne « Rubriques » (l. 824) est placée sur une piste de 80 px et ses cinq intitulés se replient sur trois à cinq lignes | Ajouter `.col-2 { grid-column: span 2 }` après `.col-3`, puis `span 6` à 1024 px et `span 12` à 640 px |
| D2 | `docs/annexes/registre-de-verification.md` n'existe pas : le lien du bandeau de probité est brisé | Écrire le registre — livrable bloquant, c'est la pièce qui rend le bandeau crédible |
| D3 | `.demo a { color: #fff }` (l. 659) : valeur brute | `var(--demo-texte)` |
| D4 | Hausse et baisse portées par la seule couleur et par des glyphes `::before` (règle 1.4.1) | Le texte de `.cours__var` porte toujours le signe (`+2,4 %`, `−1,8 %`) ; `.cours__val` doublé d'un `<span class="vh">` « valeur non disponible » plutôt que « — » |
| D5 | `--cours-hausse`, `--cours-baisse`, `--cours-stable` orphelins depuis le passage à `--encre-*`, avec un appel résiduel en style en ligne (l. 64) | Supprimer la section 10 de `tokens.css` et corriger la l. 64, ou rétablir l'usage |
| D6 | Le déclencheur du mega-menu est un `<a>` porteur d'`aria-expanded` dont le clic est annulé : ni lien, ni bouton | Scinder en un `<a href="#regulation">` et un `<button aria-expanded>` adjacent portant le chevron |
| D7 | `aria-current="page"` stylé (l. 303-307) mais jamais posé | À poser côté gabarit |
| **D8** | `:focus-visible` en `var(--actio-turquoise)` : **2,4:1** sur le vélin, sous le seuil de 3:1 (1.4.11) | `var(--actio-turquoise-fonce)` → **6,0:1** clair, **10,5:1** sombre |
| D9 | Brève 1 : « Stablecoins » contredit la terminologie maison, et l'ouverture d'une consultation de la Banque du Canada est **[À VÉRIFIER]** (fiche 07, incertitudes 2 et 7 : aucune trace d'un projet à la *Gazette, Partie I*, règlements attendus vers 2027) | Retitrer en « cryptoactifs arrimés à une monnaie fiduciaire » et ne pas publier avant vérification |
| **D10** | `.une__visuel` : dégradé bâti sur `--actio-bleu-palais` (#4E9BE0) et `--actio-turquoise-fonce` (#3FD8C7) en sombre → libellés blancs de 21 px à **3,0:1** et **1,8:1** | Reconstruire sur `var(--fill-primaire-survol)` → `var(--fill-primaire)`, jeu réglé pour porter `--fill-primaire-texte` dans les deux thèmes : **14,4** et **11,1:1** clair, **8,3** et **7,1:1** sombre |
| D11 | Valeurs brutes dans le SVG de la une (`#C8102E`, `#12B5A6`, `#06231F`, `#fff`, l. 212-221) et `#000` dans le dégradé (`actio.css` l. 451) | `var(--statut-alerte)`, `var(--actio-turquoise)`, `var(--encre-fond)`, `var(--fill-primaire-texte)` |
| D12 | Carte 2 : l'Avis 21-330 est un avis **conjoint ACVM / OCRCVM**, la juridiction n'est pas ontarienne, et le corps n'établit **aucune** décision disciplinaire de l'OCRI | `badge--info` « Avis du personnel » et `juridiction--multi` « ACVM ». Date de 2021 (fiche 01) contre 2022 (fiche 08) : **[À VÉRIFIER]** |
| **D13** | `.badge` employé pour deux fonctions incompatibles : les sections Marchés et Fiscalité posent « Analyse », « Dossier », « Biens étrangers », « TPS / TVH », « Position administrative », « Obligation déclarative » — des sujets et des formats, pas des statuts. Deux contredisent leur jeton : une position administrative de l'ARC n'est pas une consultation ouverte, une obligation en vigueur n'est ni une sanction ni une mise en garde. **Défaut le plus grave** : il vide la charte du § 2.5, puisqu'un aplat rouge ne permet plus de déduire l'existence d'un acte coercitif | Créer `.etiquette` — sans pastille, en `--bordure-forte` et `--texte-secondaire`, sur le modèle de `.juridiction` — et réserver `.badge` aux sept emplois de la charte |
| D14 | À 1024 px, `.col-8` passe à `span 12` et `.col-4` à `span 6` : les quatre cartes s'empilent en pleine largeur puis l'échéancier apparaît seul sur une demi-colonne | Retirer `col-4` du balisage, donner `grid-column: span 4` à `.echeancier` et `span 12` sous 1024 px |
| **D15** | `.flux__etape--futur { opacity: .72 }` s'applique au texte : `.flux__detail` (11 px) tombe à **3,5:1** sur `--fond-surface-2` | Supprimer l'`opacity` ; exprimer la futurité par `border-style: dashed` et `.flux__etape--futur .flux__num { color: var(--statut-neutre) }` = **4,8:1** |
| D16 | `.flux__etape::after` posée à `right: calc(var(--e-3) * -1 - 5px)` = −17 px pour une gouttière de 12 px : la flèche déborde de 5 px et le fond opaque de l'étape suivante la recouvre | `left: 100%; right: auto; transform: translate(-50%, -50%)` |
| **D17** | Ordre de tabulation contraire à la logique du consentement : la case suit le bouton d'envoi, l'usager au clavier atteint « Recevoir Actio Dispatch » **avant** de rencontrer la case. Le script bloque l'envoi, mais un blocage n'est pas un parcours | Déplacer le `<label class="infolettre__consentement">` **avant** le `div.infolettre__form` dans le DOM ; l'ordre visuel se rétablit par `order`, l'ordre de tabulation suit le DOM |
| D18 | `.infolettre .btn--primaire { color: #06231F }` (l. 594) et son survol `#fff` (l. 595) : valeurs brutes | `var(--encre-fond)` (**9,6:1** clair, **8,4:1** sombre) et `var(--fill-primaire-texte)` |

**Arbitrages ouverts.** (1) **L'indicateur de conformité doit-il survivre au défilement ?** Trois options : dupliquer une pastille compacte dans `.entete__actions` ; rendre `.cotations` collant sous `.entete`, au prix d'environ 40 px de hauteur permanente ; assumer la disparition. À trancher avant le gel de la maquette. (2) **Méthode de calcul du temps de lecture** : aucune formule n'est fixée — mots par minute, traitement des tableaux et des schémas, arrondi —, de sorte que « 11 min » reste un chiffre sans auteur. (3) **État d'erreur du flux de cotations en production** : dernière valeur horodatée, tiret, ou disparition du bandeau ? (4) **Sort du lien « registre de vérification »** quand le bandeau de probité disparaîtra au lancement ; proposition : huitième entrée de la colonne Transparence. (5) **Le commentaire « Hauteur fixe 36 px »** de `index.html` l. 41 est inexact — la hauteur mesurée est d'environ 40 px et n'est fixée nulle part : corriger le commentaire ou poser un `min-height`. (6) **Le composant `.etiquette`** appelé par D13 n'existe pas : tant qu'il manque, chaque nouvelle section publiée détournera le badge statutaire et la charte restera déclarative. (7) **Les sept pages de gouvernance et le registre de vérification n'existent pas** : le pied de page promet une transparence qu'il ne livre pas — le seul reproche auquel ce projet ne peut pas survivre.
