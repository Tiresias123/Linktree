## 3. Gabarit « Article d'analyse / Décryptage réglementaire »

Ce format est la production principale d'Actio : c'est lui qui est cité, imprimé, transmis à un client et opposé en réunion. Sa spécification est donc à la fois rédactionnelle et technique. Elle décrit le gabarit tel qu'il est codé dans `/home/user/Linktree/actio/prototype/article.html` et `/home/user/Linktree/actio/prototype/assets/article.css`, et n'admet aucune valeur qui ne provienne de `/home/user/Linktree/actio/prototype/assets/tokens.css`.

Deux mesures gouvernent toute la page : le conteneur d'article est réduit à `1160px` (`[data-page="article"] .contenant`) alors que le conteneur général vaut `--grille-max: 1320px` ; la colonne de lecture vaut `--mesure-lecture: 760px`, valeur identique à `--grille-max-etroit`. Tout bloc de texte suivi — prose, `.retenir`, `.maj` — partage cette mesure de 760 px, soit environ 72 signes par ligne à `--t-base: 1.0625rem` (17 px) et `--lh-texte: 1.68`.

### 3.1 Fil d'Ariane

Le fil est un `<nav class="ariane" aria-label="Fil d'Ariane">` contenant un `<ol>`, placé dans `.contenant` en tête de `<main>`, avec `padding-block: var(--e-5) var(--e-3)` (20 px / 12 px). Typographie : `--police-donnee` (IBM Plex Mono), `--t-micro` (11 px), `--texte-tertiaire` (`#5A6B7E`, rapport calculé ≈ 5,2:1 sur `--fond-page: #FAF8F4`). Le séparateur est produit par `.ariane li + li::before { content: "/" }` en `--bordure-forte` (`#C3BCAD`), espacement `--e-2` (8 px).

| Niveau | Contenu | Champ source (§ 1.5) | Lien |
|---|---|---|---|
| 1 | Accueil | fixe | index de langue (`/fr/`) |
| 2 | Rubrique | `rubrique` | index de rubrique |
| 3 | Juridiction · autorité | `juridiction[]` + `autorite[]` | index d'autorité |
| 4 | Sous-rubrique ou type d'acte | taxonomie du § 1.4 | index de sous-rubrique |
| 5 | Titre courant | titre écourté | **aucun** — `<span aria-current="page">` |

Règles opposables :

- Le niveau 5 n'est **jamais** un `<a>`. Le prototype emploie `<span aria-current="page">`, coloré en `--texte-tertiaire` : c'est la position, pas une destination.
- **Niveau manquant : on supprime le `<li>`, on n'insère jamais de substitut.** Le séparateur étant produit par le sélecteur d'adjacence `li + li`, la suppression se répare seule. Un article de portée pancanadienne n'a pas de niveau 3 ; un article qui ne relève d'aucun type d'acte n'a pas de niveau 4. Un fil à trois niveaux (Accueil / Rubrique / Titre) est valide ; un fil à six ne l'est pas.
- Le niveau 5 est écourté à **60 signes maximum**, coupé sur un mot, sans caractère de troncature, et ne reprend jamais le `h1` mot pour mot.
- Le fil ne doit pas rester la seule expression de la hiérarchie : le prototype ne porte **aucun** balisage `BreadcrumbList` en JSON-LD. À ajouter avant mise en production, aligné niveau par niveau sur le `<ol>`.

### 3.2 Bloc-titre

`<header class="article__entete">`, fermé par `border-bottom: var(--trait) solid var(--bordure)` et `padding-bottom: var(--e-8)` (32 px).

**Étiquettes** (`.article__etiquettes`, flex, `gap: var(--e-3)`, marge basse `--e-5`). Quatre éléments, dans cet ordre, jamais davantage : `.rubrique` (lien vers l'index de rubrique, filet `--trait-editorial` 3 px), `.badge--*` du type d'acte, `.juridiction--*`, puis `.badge--neutre` portant format et durée. Le badge de type reprend la charte de statut : `--statut-alerte` pour une décision ou une sanction, `--statut-consultation` pour un projet ou une consultation, `--statut-conforme` pour une inscription ou une entrée en vigueur, `--statut-info` pour un avis ou un bulletin, `--statut-neutre` pour un contenu archivé. La pastille de juridiction porte un losange coloré de 8 px en `::before` : **la couleur ne dit jamais rien seule**, le libellé textuel (« Québec · Tribunal administratif des marchés financiers ») porte l'information.

**Titre.** `.article__titre` en `--t-h1` (`clamp(2.125rem, 1.62rem + 2.2vw, 3.375rem)`, soit 34 → 54 px), `max-width: 20ch`, porté à `24ch` au-delà de 900 px, avec `text-wrap: balance` hérité de `actio.css`. Mesure cible : **70 à 95 signes, quatre lignes au maximum en 1440 px**. Le titre nomme la question de droit, pas le sujet : « Après *Gagnon*, où s'arrête le contrat d'investissement pour les "finfluenceurs" québécois ? » (92 signes) est la forme de référence. Sont proscrits le millésime dans le titre, le superlatif et le listicle prescriptif (fiche 08).

**Chapeau.** `.article__chapeau` en `--t-lead` (18 → 21 px), `line-height: 1.55`, `--texte-secondaire`, `max-width: 62ch`, graisse 400. Cible : **400 à 550 signes, deux ou trois phrases**. Le chapeau énonce la décision ou la règle, puis sa conséquence — jamais une mise en scène.

**Signature.** `.article__signature` (flex, `gap: var(--e-4)`, `--t-petit`). `.article__portrait` 40 × 40 px, `--rayon-plein`, dégradé `--actio-bleu-palais` → `--actio-turquoise-fonce`, initiales `aria-hidden="true"`. **Défaut à corriger** : ce dégradé porte du blanc alors qu'en mode sombre `--actio-turquoise-fonce` vaut `#3FD8C7` ; il faut basculer sur `--fill-primaire` / `--fill-primaire-texte`, jeu introduit dans `tokens.css` § 2 bis précisément pour les aplats sous texte blanc. Même correction pour `.bio__portrait` (72 × 72 px).

**Dates.** `.article__dates` en `--police-donnee`, `--t-micro`, deux lignes de 2 px d'écart : « Publié le … » et « Mis à jour le … ». La seconde ligne n'apparaît que si une mise à jour a eu lieu ; elle n'est jamais rafraîchie par un redéploiement technique. Les deux dates sont doublées en `<time datetime>` machine — absent du prototype, à ajouter.

**Outils.** `.article__outils` (`margin-left: auto`, `gap: var(--e-2)`), trois `.btn.btn--discret`. Seul « Imprimer » est câblé (`onclick="window.print()"`). À implanter : « Partager » ouvre un menu de copie d'URL canonique **sans pixel de suivi ni bouton de réseau social tiers** (aucun tiers ne doit être chargé depuis une page d'article) ; « Citer » produit trois formats copiables — citation Actio, citation McGill abrégée, et BibTeX — chacun horodaté à la date de mise à jour, pas à la date de consultation.

### 3.3 Bandeau de mise à jour et de correction

`.maj` : flex, `gap: var(--e-3)`, `padding: var(--e-4) var(--e-5)`, `margin-block: var(--e-6)`, fond `--statut-consultation-pale` (`#FBF0E0`), bordure `color-mix(in srgb, var(--statut-consultation) 32%, transparent)`, `--rayon-2` (6 px), `--t-petit`, `max-width: var(--mesure-lecture)`. L'étiquette `.maj__etiq` est en `--police-donnee`, `--t-micro`, capitales, `--statut-consultation` (`#965800`) — combinaison couverte par la règle d'accessibilité de `tokens.css` (« textes de statut sur fond pâle : employer le jeton plein correspondant — tous ≥ 4,5:1 »). Position : entre `.article__entete` et `.retenir`, jamais ailleurs.

Trois événements, un seul composant :

| Événement | Étiquette | Ce que le bandeau doit dire | Effets |
|---|---|---|---|
| **Mise à jour** — ajout d'un fait nouveau, le texte antérieur restait exact | « Mise à jour » | date, ce qui a été ajouté, pourquoi | 2ᵉ ligne de `.article__dates` |
| **Correction** — une affirmation était fausse | « Correction » | date, **ce que la version précédente affirmait**, ce qui est désormais écrit, l'origine de l'erreur | idem + inscription au registre public des corrections |
| **Rectification substantielle** — le sens de l'analyse change | « Rectification » | idem, plus la portée du changement | idem + `.badge--alerte` dans `.article__etiquettes` + avis aux abonnés de l'infolettre |

La variante rouge n'existe pas encore : `article.css` ne définit que `.maj`. **Ajout à faire** : `.maj--correction` reprenant `--statut-alerte-pale` et `--statut-alerte`, sur le modèle exact de `.avertissement` dans `actio.css`.

**Pourquoi dire ce qui était faux.** Un lectorat de juristes ne lit pas pour s'informer, il lit pour agir : rédiger un avis, conseiller un inscrit, arbitrer un dossier. Celui qui a lu la version antérieure et s'y est fié a besoin de savoir non pas que l'article est désormais exact — il le présume — mais **si ce sur quoi il s'est appuyé était faux**. Une correction silencieuse rend l'archive inexploitable : l'article est cité avec sa date, et rien ne permet plus de savoir quel texte portait cette date. Le bandeau du prototype est la formulation de référence : « La précédente version indiquait que la décision était définitive ; l'état de la contestation n'a pas pu être vérifié et la formulation a été corrigée en conséquence. » Elle nomme l'affirmation retirée, la raison du retrait, et ne se réfugie pas dans le passif.

Délais opposables : correction publiée **dans les 24 heures** suivant la confirmation de l'erreur ; signalement reçu par le lien « Nous signaler une erreur » du `.pied__legal` accusé réception **dans les 2 jours ouvrables**. Le bandeau de correction n'est **jamais** retiré ; le bandeau de simple mise à jour peut être replié après 90 jours dans une page d'historique des versions, qui reste à créer et à raccorder au lien « Politique de correction » du pied de page et à la variable `{{lien_corrections}}` de `newsletter/actio-dispatch-001.html`.

### 3.4 Fiche synthétique « À retenir »

`<aside class="retenir" aria-labelledby="retenir-titre">` : fond `--actio-bleu-palais-pale` (`#E7EFF7`), bordure gauche `5px solid var(--actio-bleu-palais)`, `border-radius: 0 var(--rayon-3) var(--rayon-3) 0`, `padding: var(--e-6)`, `margin-block: var(--e-8)`, `max-width: var(--mesure-lecture)`. Le titre est un `<p class="retenir__titre">` et non un `<h*>` : il ne doit pas polluer le plan du document, d'où le rattachement par `aria-labelledby`. La liste est un `<ol class="retenir__liste">` en grille `28px 1fr`, `gap: var(--e-4)`, numérotée par compteur CSS dans une pastille ronde de 24 px.

**Défaut à corriger** : `.retenir__liste li::before` pose `background: var(--actio-bleu-palais); color: #fff`. En mode sombre `--actio-bleu-palais` devient `#4E9BE0`, et le blanc y tombe à environ 3,0:1 — sous le seuil AA. Basculer sur `--fill-primaire` / `--fill-primaire-texte`. Même vérification à faire sur `.evitement` dans `actio.css`.

**Pourquoi exactement trois.** Trois est le nombre de propositions qu'un lecteur restitue sans relire, et surtout le nombre qui **force l'arbitrage** : à quatre, on cesse de hiérarchiser et la fiche redevient un résumé. Trois impose aussi une architecture stable, qui est celle du raisonnement juridique : (1) la règle ou le critère dégagé ; (2) ce que la décision ne dit **pas**, c'est-à-dire la limite de sa portée ; (3) le régime résiduel qui continue de s'appliquer hors du champ examiné.

**Comment on les écrit.** Un point = une phrase affirmative en `<strong>` (60 à 110 signes), puis sa justification en texte courant (140 à 230 signes), le tout dans un unique `<p>`. Le `<strong>` passe en `--texte-primaire`, le reste en `--texte-secondaire` à `--t-petit` / 1,6.

Ce qu'un point à retenir n'est **jamais** : un teaser (« Ce que change vraiment cette décision »), une question, un chiffre isolé sans sa règle, une recommandation d'investissement ou d'action, ni la reprise textuelle du chapeau. S'il peut être écrit sans avoir lu l'article, il est mauvais.

**Dépendance vers § 1.5** : la section 1 impose une ligne « Portée » obligatoire dans `.retenir`. Elle ne figure pas dans le prototype. Arbitrage retenu ici : la portée s'écrit comme un `<p>` supplémentaire **hors** du `<ol>`, en fin de bloc, pour ne pas consommer l'un des trois points numérotés ; il faudra lui ajouter une classe dans `article.css`.

### 3.5 Sommaire interactif collant

`.article__corps` est une grille `minmax(0, 1fr) 260px`, `gap: var(--e-12)` (48 px), `align-items: start`, `padding-block: var(--e-8) var(--e-16)`. Le sommaire occupe la colonne de 260 px.

`.sommaire` : `position: sticky; top: 96px`, `max-height: calc(100vh - 128px)`, `overflow-y: auto`, filet gauche `--bordure`, `padding-left: var(--e-5)`, `--t-petit`. La valeur 96 px n'est pas arbitraire : `.entete` est collant avec `min-height: 64px`, ce qui laisse 32 px de dégagement ; la même valeur est reprise en `scroll-margin-top: 96px` sur `.prose h2` et `.prose h3`, et dans le `rootMargin: '-96px 0px -65% 0px'` de l'`IntersectionObserver` d'`actio.js`. **Toute modification de la hauteur d'en-tête doit être répercutée aux quatre endroits.**

Surlignage : `actio.js` pose `aria-current="true"` sur le lien de la section courante ; `.sommaire a[aria-current="true"]` prend `--actio-bleu-palais`, `--graisse-demi` (600) et un filet gauche de `--trait-fort` (2 px). Le marqueur est donc porté par un attribut ARIA lu par les technologies d'assistance, et non par une classe purement visuelle — c'est la bonne dépendance.

Progression : `.sommaire__barre` haute de 3 px, fond `--bordure`, remplissage `--actio-turquoise-fonce` (`#096B61` en clair, `#3FD8C7` en sombre), `transition: width var(--mvt-rapide)` (120 ms). Le pourcentage est calculé sur la hauteur de `.prose` moins une hauteur de fenêtre, arrondi à l'entier, et doublé en texte dans `[data-progression-texte]` — un pourcentage doit être lisible, pas seulement visible. La règle `@media (prefers-reduced-motion: reduce)` d'`actio.css` ramène la transition à 0,01 ms et neutralise le défilement doux.

**Seuil de bascule : 1080 px.** Sous ce seuil, `.article__corps` passe à une colonne, `gap` tombe à `--e-8`, et `.sommaire` reçoit `position: static !important; max-height: none !important; order: -1` : il remonte **au-dessus** de la prose. Conséquence assumée et à documenter : en dessous de 1080 px, la barre de progression défile hors de l'écran avec le sommaire et cesse d'accompagner la lecture. Elle devient un simple indicateur de longueur au chargement. On ne compense pas par une barre fixe en haut d'écran : elle mangerait la surface utile sur mobile et doublerait l'en-tête déjà collant.

Le sommaire du prototype est saisi à la main. En production, il est **généré** à partir des `h2` porteurs d'un `id` de la forme `s1`…`sN` ; les `h2` de `.sources__titre` et `.bio__nom` en sont exclus faute d'`id`. Un `h2` sans `id` est un défaut de saisie, pas une option.

### 3.6 Corps d'article et les trois boîtes de synthèse juridique

`.prose` : `max-width: var(--mesure-lecture)`, `--t-base`, `--lh-texte: 1.68`, rythme vertical par `> * + * { margin-top: var(--e-5) }`. Les `h2` sont en `--t-h3` (24 → 29 px) avec `margin-top: var(--e-12)` et un filet haut `--bordure` : le titre de section est une césure, pas une décoration. Les `h3` sont en `--t-h4`, `margin-top: var(--e-8)` ; les `h4` basculent en `--police-texte` grasse, ce qui les distingue nettement de la série sérif.

`blockquote` : filet gauche `--trait-editorial` (3 px) en `--actio-turquoise-fonce`, `--police-titre` italique, `--t-h5`, `line-height: 1.45`. **Règle absolue** : une citation est soit textuelle et sourcée au renvoi près, soit reformulée — et le `<cite>` doit alors le dire, comme dans le prototype : « Synthèse Actio du raisonnement du tribunal — reformulation, non citation textuelle. » Aucun `blockquote` ne peut rester sans `<cite>`.

Renvois : `.renvoi` en `--police-donnee`, `.7em`, exposant, `--actio-bleu-palais`, pointant vers `#src1`…`#srcN`. `actio.js` intercepte tout `a[href^="#"]`, défile en douceur et **pose le focus** sur la cible — comportement à conserver. Manque : aucun lien de retour depuis la source vers l'appel de note. À ajouter.

Les trois boîtes partagent `.boite` (fond `--fond-surface` `#FFFFFF`, donc en relief sur le vélin `#FAF8F4`, `--rayon-3`, `overflow: hidden`), un en-tête `.boite__entete` en capitales `--t-micro` avec `--interlettre-etiq` (0,085em), un corps `.boite__corps` en `--t-petit` / 1,62, et une ligne d'état `.boite__ref` en monospace séparée par un filet `--bordure-douce`.

| Classe | Vocation exacte | On y met | On n'y met **jamais** | Couleur d'en-tête | Marqueur |
|---|---|---|---|---|---|
| `.boite--texte` | Les textes applicables, cités et datés | loi, règlement, avis du personnel, bulletin d'OAR ; date ; objet en une phrase | l'interprétation, l'opinion d'Actio, un commentaire de cabinet | fond `--actio-bleu-palais-pale`, texte `--actio-bleu-palais` (`#0F3D68`) | `§` |
| `.boite--impact` | La conséquence concrète pour l'investisseur ou l'assujetti | ce qui change en pratique, pour qui, à partir de quand ; le réflexe de vérification | la sanction, la pénalité, l'exhortation à investir ou à se retirer | fond `--actio-turquoise-pale`, texte `--actio-turquoise-fonce` (`#096B61`, ≈ 5,7:1) | `◈` |
| `.boite--risque` | Le risque de non-conformité et la mesure encourue | manquement par manquement : le fait générateur, l'autorité, la mesure | l'impact pour l'investisseur, le rappel du droit applicable, un montant non vérifié | fond `--statut-alerte-pale`, texte `--statut-alerte` (`#C8102E`) | `⚠` |

**Gabarit rédactionnel commun** : chaque paragraphe d'une boîte s'ouvre par un `<strong>` qui nomme le cas (« Exercice sans inscription. », « Pour l'investisseur de détail. »), suivi de deux à quatre phrases. Trois paragraphes au plus par boîte.

**Règle d'incompatibilité.** `tokens.css` pose que « la couleur ne sert jamais à décorer : elle est porteuse d'un statut réglementaire, et d'un seul ». Il en découle quatre interdits : une boîte ne porte jamais deux vocations ; le rouge `--statut-alerte` est réservé à la sanction et à la mise en garde, si bien qu'une conséquence pour l'investisseur exprimée en rouge devient de fait une boîte de risque et doit être déplacée ; on ne publie **pas plus d'une boîte de chaque type** par article ; et l'ordre d'apparition suit l'argumentation — dans le prototype, `.boite--texte` en section 1 (le droit applicable), `.boite--impact` en section 2 (ce que la ligne de partage produit), `.boite--risque` en section 3 (le double régime et ses suites). Une boîte placée avant que son objet ne soit exposé est un défaut de plan.

`.boite__ref` sert exclusivement à l'état de vérification, jamais à une source. Deux mentions normées, non interchangeables : **[À VÉRIFIER]** — l'affirmation est formulée mais sa source doit être lue ; **[À COMPLÉTER AVANT PUBLICATION]** — l'information manque et aucune valeur n'est avancée, comme pour les montants de pénalité du prototype. Aucune des deux ne survit à la publication (§ 3.14).

### 3.7 Tableaux comparatifs

`.tableau` : conteneur à `overflow-x: auto`, bordure `--bordure`, `--rayon-2`, `margin-block: var(--e-8)`. La table porte `min-width: 560px`, `--t-petit`, `--lh-dense: 1.45`.

- **`<caption>` obligatoire**, `caption-side: top`, sur fond `--fond-surface-2`, en capitales `--t-micro`. Elle énonce l'objet **et la date d'arrêté des données** — en tête, jamais en pied (fiche 08).
- **Colonne « Juridiction » obligatoire** dans tout tableau comparatif d'entités ou de régimes : un tableau pancanadien sans cette colonne est structurellement trompeur, l'inscription variant par autorité (fiches 01 et 08).
- Alignement : `th`/`td` alignés à gauche, `vertical-align: top`, `padding: var(--e-3) var(--e-4)`. **Toute donnée chiffrée porte `data-num`**, qui applique `--police-donnee`, `font-variant-numeric: tabular-nums`, alignement à droite et `white-space: nowrap` — c'est la seule façon de comparer des montants et des dates en colonne. Une date au format `AAAA-MM-JJ` compte comme une donnée chiffrée.
- La première cellule de chaque ligne est un `th[scope="row"]` (graisse 600, `--texte-primaire`) ; les cellules d'en-tête de colonne sont des `th[scope="col"]`.
- En-têtes collants : `.tableau thead th` porte `position: sticky; top: 0` avec fond `--fond-surface-2` et filet bas `--trait-fort` en `--bordure-forte`. Le conteneur n'ayant qu'un défilement horizontal, la fixation joue contre la fenêtre lors du défilement vertical : elle n'a d'effet utile que pour les tableaux plus hauts que l'écran. Au-delà de **12 lignes**, on scinde en deux tableaux plutôt que d'allonger.
- Défilement horizontal : sous une fenêtre d'environ 600 px, la contrainte `min-width: 560px` déclenche le défilement latéral à l'intérieur de `.tableau` seul — le corps de page ne défile jamais horizontalement. **Défaut d'accessibilité à corriger** : une zone défilante doit être atteignable au clavier ; ajouter `tabindex="0"`, `role="region"` et un `aria-label` reprenant le `<caption>` sur `.tableau` (WCAG 2.1 AA, critère 2.1.1). La norme visée est WCAG 2.1 AA **à titre de norme éditoriale volontaire** : la Loi canadienne sur l'accessibilité ne vise que les entités sous réglementation fédérale, et la LAPHO ontarienne exige WCAG 2.0 AA au-delà de 50 employés (fiche 06).

### 3.8 Sources primaires citées

`<section class="sources">` en fin de `.prose` : fond `--fond-surface-2`, `padding: var(--e-6)`, `--rayon-3`. La liste `.sources__liste` est numérotée par `counter(src)` affiché sous la forme `[n]` en `--actio-bleu-palais`.

**Système de renvois.** Le numéro affiché en regard de la source est calculé par le compteur CSS depuis l'ordre du DOM, alors que le libellé de `.renvoi` dans le corps est saisi en dur (`[1]`, `[2]`, `[3]`). Insérer une source en cours de liste renumérote les entrées sans toucher aux appels : **les renvois doivent être générés par le système de publication, jamais tapés**, et chaque `<li id="srcN">` doit être appelé au moins une fois. Le prototype enfreint sa propre règle : les sources 4 (Avis 21-330) et 5 (LVM et LESM) n'ont aucun appel dans le corps. Correction : les appeler, ou les déplacer hors de la liste des sources citées.

**Typologie.** `.sources__type` est une pastille monospace bordée de `--bordure-forte`. Liste **fermée** de cinq valeurs :

| Valeur | Ce qu'elle couvre | Exemple (fiches 01 et 02) |
|---|---|---|
| Avis | avis du personnel, avis conjoint, bulletin ou note d'orientation d'un OAR | Avis 21-327 du personnel des ACVM, 16 janvier 2020 |
| Décision | décision d'un tribunal administratif ou judiciaire, ordonnance, homologation | TMF, *AMF c. Gagnon*, 22 août 2025 |
| Loi | loi fédérale ou provinciale, avec sa citation officielle | Loi sur les valeurs mobilières, RLRQ, c. V-1.1 |
| Règlement | règlement, norme canadienne, règlement d'application | Règlement 31-103 sur les obligations et dispenses d'inscription |
| Communiqué | communiqué, mise à jour, mise en garde d'une autorité | communiqué conjoint ACVM–OCRI, 6 août 2024 |

Un bulletin d'OAR — le bulletin 26-0033 de l'OCRI sur la garde d'actifs numériques, par exemple — est typé « Avis », et sa nature exacte est écrite en toutes lettres dans la citation. On n'ajoute pas de sixième valeur sans modifier cette section.

**Lien vers la source primaire, jamais vers un commentaire.** Le `<a>` d'une entrée de `.sources__liste` pointe vers le texte de l'autorité qui l'a édicté : la page ou le PDF de l'ACVM, de l'AMF, de la CVMO, de l'OCRI, du CANAFE, de LégisQuébec, de la Gazette du Canada, de CanLII. Ne sont **jamais** la cible d'un lien de source : la note d'un cabinet, un article de presse, un agrégateur, une page de synthèse d'Actio. Quand seul un commentaire existe, le fait reste dans le corps de l'article, le cabinet y est nommé, et l'entrée n'entre pas dans la liste des sources primaires. Le lien est **profond** — le prototype pointe aujourd'hui vers les racines `autorites-valeurs-mobilieres.ca` et `legisquebec.gouv.qc.ca`, ce qui n'est pas une source : à remplacer par l'URL du document.

**Sources non vérifiées.** L'état de vérification s'écrit dans l'entrée elle-même, en `<em>` suivi de la mention en `<strong>`, exactement comme dans le prototype (« Référence de dossier et texte intégral à confirmer sur le site de l'AMF et sur CanLII avant publication. **[À VÉRIFIER]** »). Cette écriture est un **état de fabrication**, pas un état publiable. Les fiches 01 à 09 rappellent qu'aucune source primaire n'a pu être lue dans l'environnement de veille — accès sortant bloqué — et que chaque numéro, date et montant doit être recontrôlé. Deux conséquences opposables : aucune phrase reposant sur une entrée marquée [À VÉRIFIER] ne part en publication ; et lorsque l'incertitude est elle-même le sujet, elle s'écrit dans le corps sous forme prudente et datée (« l'état de la contestation n'a pas pu être vérifié à la date de mise à jour de cet article »), jamais sous forme d'affirmation atténuée.

### 3.9 Bio d'expert et déclaration d'intérêts

`.bio` : grille `72px 1fr`, `gap: var(--e-5)`, `padding: var(--e-6)`, filet gauche `--trait-editorial` en `--actio-bleu-palais`, `border-radius: 0 var(--rayon-3) var(--rayon-3) 0`, fond `--fond-surface` ; passage à une colonne sous **560 px**. Le nom est un `h2` (`.bio__nom`, `--t-h5`), la fonction en `--actio-bleu-palais` graisse 600, le texte biographique en `--t-petit` / 1,6 (200 à 320 signes), les liens en monospace `--t-micro`.

La déclaration `.bio__declaration` (`--t-micro`, `--texte-tertiaire`, filet haut `--bordure-douce`) est **obligatoire dans chaque article**, y compris — et surtout — lorsqu'elle est négative. Elle couvre sept points, sans exception :

1. Positions détenues dans les cryptoactifs, émetteurs ou plateformes nommés dans l'article, à la date de publication.
2. Toute rémunération reçue, dans les **24 mois**, d'une personne inscrite, d'une plateforme, d'un émetteur ou d'un cabinet cité.
3. Toute relation de conseil, présente ou passée, avec une partie à la décision commentée.
4. Le financement externe de l'article — commandite, subvention, bourse — ou son absence.
5. Les liens familiaux ou professionnels avec une partie citée.
6. Les intérêts détenus dans un partenaire commercial d'Actio.
7. Le rappel de la séparation entre la rédaction et les activités commerciales, avec lien vers la charte d'indépendance.

`.bio__liens` propose « Contact sécurisé » et « Clé publique » : ce sont des promesses de protection des sources. Elles doivent pointer vers une boîte réelle et une clé publiée, ou disparaître du gabarit. Un lien mort à cet endroit vaut fausse déclaration.

**Dette technique** : `.sources__titre` et `.bio__nom` portent des styles en ligne (`style="border:0;margin-top:0;padding-top:0"`) pour neutraliser le filet haut appliqué par `.prose h2`. À remplacer par une règle dans `article.css` avant production.

### 3.10 Avertissement d'absence de conseil

`.avertissement` (défini dans `actio.css`) : bordure `--statut-alerte`, filet gauche `--trait-editorial`, fond `--statut-alerte-pale`, `--rayon-2`, `padding: var(--e-5) var(--e-6)`, `role="note"`, titre en capitales `--t-micro` sur `--statut-alerte`.

**Position, non négociable** : dernier bloc de `.prose`, après `.sources` et après `.bio`, avant la fermeture de la colonne de lecture. Il est ainsi le dernier texte lu, et il partage la mesure de 760 px du corps — il n'est pas relégué dans un pied de page où il ne serait plus attribuable à l'article.

**Caractère non négociable** : présent dans **tous** les articles du format, y compris les plus courts ; jamais replié, jamais derrière un « lire la suite », jamais réduit à une ligne ; jamais reformulé au cas par cas — c'est un texte figé, révisé par la rédactrice en chef et versionné. Il est délibérément **absent de la liste des blocs masqués à l'impression** (`@media print` masque `.entete`, `.cotations`, `.sommaire`, `.infolettre`, `.demo`, `.article__outils` et `.suite`) : la version papier ou PDF d'un article d'Actio circule sans son contexte, c'est précisément là qu'il doit rester.

Le texte du prototype pose les trois éléments requis : Actio n'est inscrite à aucun titre auprès des autorités canadiennes en valeurs mobilières ; elle ne fournit ni conseil juridique, ni conseil en placement, ni conseil fiscal ; l'analyse décrit un état du droit **à sa date de mise à jour** et ne tient pas compte de la situation du lecteur. L'infolettre porte la formule miroir (« ne constitue pas un avis juridique ») : les deux doivent rester alignées.

### 3.11 Suite de lecture

`.suite` : filet haut `--trait-fort` (2 px) en `--texte-primaire` — le seul de la page en pleine encre, qui marque la sortie de l'article — `padding-top: var(--e-6)`, `margin-top: var(--e-12)`, titre en `--t-h4`. Trois `.carte.col-4` dans une `.grille` de 12 colonnes : **toujours trois, jamais deux ni quatre**, puisque `col-4 × 3 = 12`. Repli : `span 6` sous 1024 px (une carte passe seule sur la seconde ligne), `span 12` sous 640 px.

Sélection éditoriale, pas algorithmique : une carte de la même sous-rubrique, une carte de la même juridiction dans une autre rubrique, une carte pédagogique de niveau 1. Chaque carte porte `.carte__meta` (badge de type + pastille de juridiction), un titre de 60 à 90 signes, un `.carte__resume` de 60 à 110 signes énonçant la thèse et non le sujet, et un `.carte__pied` format + durée. Aucune carte ne renvoie vers une page commerciale, un comparatif affilié ou une offre d'abonnement : `.suite` est une continuation de lecture, pas un tunnel de conversion (fiche 08).

### 3.12 Feuille d'impression

Le bloc `@media print` d'`article.css` est court et volontairement brutal.

| Disparaît | Reste | Apparaît |
|---|---|---|
| `.entete`, `.cotations`, `.sommaire`, `.infolettre`, `.demo`, `.article__outils`, `.suite` | fil d'Ariane, bloc-titre, `.maj`, `.retenir`, prose, boîtes, tableaux, `.sources`, `.bio`, `.avertissement` | l'**URL de chaque lien externe**, via `a[href^="http"]::after { content: " (" attr(href) ")" }` en 8 pt `#555` |

Le corps passe en `#fff` sur `#000` à 11 pt, `.article__corps` repasse à une colonne, `.prose` perd sa limite de 760 px, et `.boite`, `.retenir`, `.sources` et `.tableau` reçoivent `break-inside: avoid` avec une bordure `#999` — une boîte de risque coupée entre deux pages est illisible et juridiquement dangereuse.

Le sélecteur `a[href^="http"]` exclut délibérément les ancres internes : imprimer « (#src1) » derrière chaque renvoi de note serait du bruit. À ajouter avant production, et absent aujourd'hui : une règle `@page` avec l'URL canonique et la date de mise à jour en pied de chaque feuille, ainsi qu'un `orphans`/`widows` à 3.

### 3.13 Gabarit rédactionnel type

Ordre de saisie, dans l'ordre du DOM. Les signes s'entendent espaces comprises.

| # | Bloc | Classe | Signes cible | Contrainte dure |
|---|---|---|---|---|
| 1 | Fil d'Ariane | `.ariane` | ≤ 60 (niveau 5) | 3 à 5 niveaux ; le dernier n'est pas un lien |
| 2 | Étiquettes | `.article__etiquettes` | — | 4 éléments, dans l'ordre imposé |
| 3 | Titre | `.article__titre` | 70 – 95 | ≤ 4 lignes ; pose une question de droit |
| 4 | Chapeau | `.article__chapeau` | 400 – 550 | 2 à 3 phrases ; règle puis conséquence |
| 5 | Bandeau | `.maj` | 180 – 320 | conditionnel ; nomme l'affirmation retirée |
| 6 | À retenir ×3 | `.retenir__liste li` | 220 – 320 chacun | `<strong>` 60 – 110 + justification 140 – 230 |
| 7 | Attaque | `.prose p` ×2 | 700 – 1 100 | avant le premier `h2` ; le fait, puis l'enjeu |
| 8 | Sections | `.prose h2` ×4 | 1 800 – 3 000 chacune | `id="s1"`…`s4` obligatoire |
| 9 | Textes applicables | `.boite--texte` | 600 – 900 | ≤ 3 paragraphes ouverts par `<strong>` |
| 10 | Impact | `.boite--impact` | 700 – 1 000 | aucune sanction, aucun montant |
| 11 | Risque | `.boite--risque` | 600 – 900 | un manquement par paragraphe |
| 12 | Tableau | `.tableau` | 3 – 12 lignes | `<caption>` daté + colonne Juridiction + `data-num` |
| 13 | Citation | `blockquote` | 180 – 300 | `<cite>` obligatoire |
| 14 | Sources | `.sources__liste` | 5 – 9 entrées, 120 – 220 chacune | type + lien profond + appel dans le corps |
| 15 | Bio | `.bio__texte` | 200 – 320 | — |
| 16 | Déclaration | `.bio__declaration` | 300 – 500 | les 7 points du § 3.9 |
| 17 | Avertissement | `.avertissement` | texte figé | ni réécrit, ni déplacé |
| 18 | Suite | `.carte` ×3 | titre 60 – 90, résumé 60 – 110 | 3 cartes, aucune destination commerciale |

Volume total de `.prose` : **9 000 à 15 000 signes**. Durée affichée dans le `.badge--neutre` du bloc-titre : `arrondi(signes de .prose ÷ 1 300) + 1 minute par tableau`, calculée à la publication et **jamais saisie à la main** — le prototype affiche « Analyse — 11 min », valeur à recalculer.

Rôles et délais : le rédacteur livre les blocs 1 à 18 ; le chef de pupitre contrôle plan, mesures et taxonomie ; le réviseur juridique contrôle les blocs 9 à 14 et signe la levée des mentions [À VÉRIFIER] ; la rédactrice en chef adjointe autorise la publication. La version anglaise est livrée par le traducteur juridique externe à **J-1, 12 h HE**, pour une parution à J-0 (§ 1.5) ; aucun article ne paraît en anglais avant sa version française.

### 3.14 Contrôles avant publication

Liste opposable. Un seul point non coché bloque la mise en ligne. Le contrôleur inscrit ses initiales et la date.

- [ ] **1.** Chaque affirmation juridique porte sa source primaire ou la mention prudente et datée prévue au § 3.8. *(réviseur juridique)*
- [ ] **2.** Aucune mention **[À VÉRIFIER]** ni **[À COMPLÉTER AVANT PUBLICATION]** ne subsiste dans `.boite__ref`, `.sources__liste` ou le corps. *(réviseur juridique)*
- [ ] **3.** Chaque `<li id="srcN">` est appelé au moins une fois par un `.renvoi`, et chaque `.renvoi` pointe vers un `id` existant. *(chef de pupitre)*
- [ ] **4.** Chaque lien de `.sources__liste` vise le document de l'autorité — jamais une note de cabinet, un article de presse ou une racine de site. *(réviseur juridique)*
- [ ] **5.** Terminologie : « cryptoactifs » et non « crypto-monnaies » ; « OCRI » et non « OCRCVM » ni « CIRO » en français ; « inscription » et non « licence » ni « agrément » ; « courtier restreint », « engagement préalable », « cryptoactif arrimé à une valeur ». Rejet automatique en cas de manquement (§ 1.5). *(réviseur terminologique)*
- [ ] **6.** Aucune phrase n'écrit que « les cryptoactifs sont des valeurs mobilières » : c'est le contrat qui l'est (fiche 01). Aucun avis du personnel n'est présenté comme un règlement. *(réviseur juridique)*
- [ ] **7.** Aucune confusion entre l'inscription en valeurs mobilières (AMF / ACVM / OCRI), le permis d'ESM (Revenu Québec depuis le 13 septembre 2021) et l'inscription d'ESM auprès du CANAFE (fiche 02). *(réviseur juridique)*
- [ ] **8.** La fiche `.retenir` compte exactement trois points, chacun ouvert par une affirmation en `<strong>`, plus la ligne « Portée ». *(chef de pupitre)*
- [ ] **9.** Une seule `.boite` de chaque type, dans l'ordre texte → impact → risque, aucune n'empiétant sur la vocation d'une autre. *(chef de pupitre)*
- [ ] **10.** Chaque `.tableau` porte un `<caption>` avec sa date d'arrêté, une colonne Juridiction lorsqu'il compare des entités ou des régimes, et `data-num` sur toute cellule chiffrée. *(chef de pupitre)*
- [ ] **11.** Chaque `blockquote` porte un `<cite>` indiquant s'il s'agit d'une citation textuelle ou d'une reformulation. *(réviseur juridique)*
- [ ] **12.** `.bio__declaration` couvre les sept points du § 3.9, y compris à l'état négatif, et les liens « Contact sécurisé » et « Clé publique » résolvent. *(rédactrice en chef adjointe)*
- [ ] **13.** `.avertissement` est présent, non modifié, en dernier bloc de `.prose`. *(rédactrice en chef adjointe)*
- [ ] **14.** Tous les `h2` argumentatifs portent un `id` `s1`…`sN` et apparaissent dans `.sommaire` ; aucun `h2` orphelin. *(intégrateur)*
- [ ] **15.** Rendu vérifié à 1440, 1080, 900, 640 et 360 px : bascule du sommaire à 1080 px, `.bio` à 560 px, aucun défilement horizontal du corps de page. *(intégrateur)*
- [ ] **16.** Rendu vérifié en mode clair et en mode sombre : aucun texte sous 4,5:1, aplats sous texte blanc en `--fill-primaire`. *(intégrateur)*
- [ ] **17.** Parcours clavier complet : `.evitement`, fil d'Ariane, sommaire, renvois, retours, zones de tableau défilantes, outils — anneau de focus `3px --actio-turquoise` visible partout. *(intégrateur)*
- [ ] **18.** Aperçu d'impression contrôlé : aucune boîte coupée, URL externes affichées, `.avertissement` présent. *(chef de pupitre)*
- [ ] **19.** Durée de lecture recalculée par la formule du § 3.13 ; dates de publication et de mise à jour exactes et doublées en `<time datetime>`. *(intégrateur)*
- [ ] **20.** Version anglaise livrée et révisée, ou absence assumée avec `hreflang="fr-CA"` seul et `/en/…` en 404 (§ 1.5). *(rédactrice en chef adjointe)*

### Ce qui reste à trancher

1. **La variante `.maj--correction`.** Elle n'existe pas dans `article.css`. Retenir le rouge `--statut-alerte` distingue la correction de la simple mise à jour, mais met deux blocs rouges sur la même page (`.maj` en tête, `.avertissement` en pied). Alternative : conserver l'ambre et ne changer que l'étiquette. Décision avant intégration.
2. **La ligne « Portée » dans `.retenir`.** Le § 1.5 la rend obligatoire, le gabarit ne la prévoit pas. Il faut choisir entre un quatrième élément hors liste — solution retenue ici — et une ligne de méta intégrée au bloc-titre, aux côtés des pastilles de juridiction.
3. **Le nombre de sections `h2`.** Le gabarit en pose quatre et le sommaire en vit. Un décryptage de brève actualité n'en justifie pas quatre : faut-il un seuil (pas de `.sommaire` sous trois `h2`) ou un second gabarit plus court, distinct de celui-ci ?
4. **La barre de progression sous 1080 px.** Elle sort de l'écran avec le sommaire. Trois options : l'accepter, la déplacer en filet de 3 px sous `.entete` en position collante, ou la supprimer sur petit écran. Aucune n'est neutre pour la hauteur d'en-tête, qui est câblée en dur à 96 px en quatre endroits.
5. **La sixième valeur de `.sources__type`.** Les bulletins d'OAR sont typés « Avis » par défaut. Si l'OCRI devient une source régulière — le bulletin 26-0033 du 3 février 2026 le laisse penser (fiche 01) —, une valeur « Bulletin » deviendra nécessaire.
6. **Le commentaire d'accessibilité de `tokens.css`.** Il annonce 4,9:1 pour le blanc sur turquoise foncé, valeur établie pour la valeur antérieure du jeton ; `--actio-turquoise-fonce` vaut désormais `#096B61`. Les ratios du bloc doivent être recalculés et le commentaire mis à jour, faute de quoi la règle opposable cesse d'être opposable.
7. **La date d'arrêté du gabarit lui-même.** Toutes les références employées ici proviennent des fiches 01 à 09, constituées le 4 septembre 2026 alors que l'accès sortant aux sites des régulateurs était bloqué. Aucune n'a été lue à la source. Le gabarit est donc spécifié ; les exemples qu'il contient ne sont pas publiables en l'état.
