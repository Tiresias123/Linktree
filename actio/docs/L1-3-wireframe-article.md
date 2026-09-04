## 3. Gabarit « Article d'analyse / Décryptage réglementaire »

Format principal d'Actio : celui qui est cité, imprimé et transmis à un client. Cette section spécifie le gabarit tel qu'il est codé dans `prototype/article.html` et `prototype/assets/article.css` ; aucune valeur n'y figure qui ne provienne de `prototype/assets/tokens.css`.

Deux mesures gouvernent la page : le conteneur d'article est réduit à `1160px` (`[data-page="article"] .contenant`), contre `--grille-max: 1320px` ailleurs ; la colonne de lecture vaut `--mesure-lecture: 760px` (identique à `--grille-max-etroit`), soit environ 72 signes par ligne à `--t-base` (17 px) et `--lh-texte: 1.68`. Tout bloc de texte suivi — `.prose`, `.retenir`, `.maj` — partage cette mesure.

### 3.1 Fil d'Ariane

`<nav class="ariane" aria-label="Fil d'Ariane">` + `<ol>`, en tête de `<main>`, `padding-block: var(--e-5) var(--e-3)` (20 / 12 px), `--police-donnee`, `--t-micro` (11 px), `--texte-tertiaire` (`#5A6B7E`, rapport calculé ≈ 5,2:1 sur `--fond-page: #FAF8F4`). Séparateur par `.ariane li + li::before { content: "/" }` en `--bordure-forte`, espacement `--e-2`.

| Niveau | Contenu | Champ source (§ 1.5) | Lien |
|---|---|---|---|
| 1 | Accueil | fixe | index de langue (`/fr/`) |
| 2 | Rubrique | `rubrique` | index de rubrique |
| 3 | Juridiction · autorité | `juridiction[]` + `autorite[]` | index d'autorité |
| 4 | Sous-rubrique ou type d'acte | taxonomie du § 1.4 | index de sous-rubrique |
| 5 | Titre courant | titre écourté ≤ 60 signes | **aucun** — `<span aria-current="page">` |

- Le niveau 5 n'est jamais un `<a>` : c'est une position, pas une destination. Il ne reprend pas le `h1` mot pour mot et ne porte aucun caractère de troncature.
- **Niveau manquant : on supprime le `<li>`, jamais de substitut.** Le séparateur venant de l'adjacence `li + li`, la suppression se répare seule. Un article de portée pancanadienne n'a pas de niveau 3. Trois niveaux (Accueil / Rubrique / Titre) est le plancher ; six est interdit.
- Aucun balisage `BreadcrumbList` JSON-LD dans le prototype. À ajouter, aligné niveau par niveau sur le `<ol>`.

### 3.2 Bloc-titre

`.article__entete`, fermé par `border-bottom: var(--trait) solid var(--bordure)` et `padding-bottom: var(--e-8)`.

**Étiquettes** (`.article__etiquettes`, flex, `gap: var(--e-3)`, marge basse `--e-5`) : quatre éléments, dans cet ordre, jamais plus — `.rubrique` (filet `--trait-editorial` 3 px), `.badge--*` du type d'acte, `.juridiction--*`, `.badge--neutre` (format + durée). Charte du badge : `--statut-alerte` pour une décision ou une sanction, `--statut-consultation` pour un projet ou une consultation, `--statut-conforme` pour une inscription ou une entrée en vigueur, `--statut-info` pour un avis ou un bulletin, `--statut-neutre` pour un contenu archivé. Le losange de 8 px de `.juridiction::before` ne dit jamais rien seul : le libellé porte l'information.

**Titre.** `--t-h1` (`clamp(2.125rem, 1.62rem + 2.2vw, 3.375rem)` = 34 → 54 px), `max-width: 20ch`, porté à `24ch` au-delà de 900 px, `text-wrap: balance`. Cible : **70 à 95 signes, quatre lignes au maximum en 1440 px**. Le titre pose une question de droit, pas un sujet. Proscrits : le millésime, le superlatif, le listicle prescriptif (fiche 08).

**Chapeau.** `--t-lead` (18 → 21 px), `line-height: 1.55`, `--texte-secondaire`, `max-width: 62ch`, graisse 400. Cible : **400 à 550 signes, deux ou trois phrases** — la règle, puis sa conséquence.

**Signature.** `.article__signature` (flex, `gap: var(--e-4)`, `--t-petit`). `.article__portrait` 40 × 40 px, `--rayon-plein`, dégradé `--actio-bleu-palais` → `--actio-turquoise-fonce`, initiales `aria-hidden="true"`. **Défaut à corriger** : ce dégradé porte du blanc alors qu'en mode sombre `--actio-turquoise-fonce` vaut `#3FD8C7` ; basculer sur `--fill-primaire` / `--fill-primaire-texte`, jeu introduit dans `tokens.css` § 2 bis pour les aplats sous texte blanc. Même correction sur `.bio__portrait` (72 px).

**Dates.** `.article__dates`, `--police-donnee`, `--t-micro`, deux lignes à 2 px d'écart. La seconde n'apparaît qu'après une mise à jour éditoriale, jamais après un redéploiement technique. Doubler les deux en `<time datetime>` : absent du prototype.

**Outils.** `.article__outils` (`margin-left: auto`, `gap: var(--e-2)`), trois `.btn.btn--discret`. Seul « Imprimer » est câblé (`window.print()`). À implanter : « Partager » copie l'URL canonique sans pixel de suivi ni script tiers ; « Citer » produit trois formats copiables (citation Actio, McGill abrégée, BibTeX), horodatés à la date de mise à jour et non à celle de la consultation.

### 3.3 Bandeau de mise à jour et de correction

`.maj` : flex, `gap: var(--e-3)`, `padding: var(--e-4) var(--e-5)`, `margin-block: var(--e-6)`, fond `--statut-consultation-pale` (`#FBF0E0`), bordure `color-mix(in srgb, var(--statut-consultation) 32%, transparent)`, `--rayon-2`, `--t-petit`, `max-width: var(--mesure-lecture)`. `.maj__etiq` en `--police-donnee`, `--t-micro`, capitales, `--statut-consultation` (`#965800`) — couvert par la règle de `tokens.css` (« textes de statut sur fond pâle : employer le jeton plein correspondant — tous ≥ 4,5:1 »). Position : entre `.article__entete` et `.retenir`, jamais ailleurs.

| Événement | Étiquette | Ce que le bandeau doit dire | Effets |
|---|---|---|---|
| **Mise à jour** — fait nouveau, texte antérieur exact | « Mise à jour » | date, ce qui est ajouté, pourquoi | 2ᵉ ligne de `.article__dates` |
| **Correction** — une affirmation était fausse | « Correction » | date, **ce qu'affirmait la version précédente**, ce qui est désormais écrit, l'origine de l'erreur | idem + registre public des corrections |
| **Rectification** — le sens de l'analyse change | « Rectification » | idem + portée du changement | idem + `.badge--alerte` dans `.article__etiquettes` + avis aux abonnés |

La variante rouge n'existe pas : `article.css` ne définit que `.maj`. **Ajout à faire** : `.maj--correction` reprenant `--statut-alerte-pale` et `--statut-alerte`, sur le modèle de `.avertissement`.

**Pourquoi dire ce qui était faux.** Un lectorat de juristes ne lit pas pour s'informer mais pour agir : rédiger un avis, conseiller un inscrit, arbitrer un dossier. Celui qui s'est fié à la version antérieure n'a pas besoin d'apprendre que l'article est désormais exact — il le présume — mais **de savoir si ce sur quoi il s'est appuyé était faux**. Une correction silencieuse rend l'archive inexploitable : l'article est cité avec sa date, et plus rien ne dit quel texte portait cette date. Le prototype donne la formulation de référence : « La précédente version indiquait que la décision était définitive ; l'état de la contestation n'a pas pu être vérifié et la formulation a été corrigée en conséquence. » Elle nomme l'affirmation retirée et la raison du retrait.

Délais : correction publiée **sous 24 heures** après confirmation de l'erreur ; signalement reçu par « Nous signaler une erreur » (`.pied__legal`) accusé réception **sous 2 jours ouvrables**. Un bandeau de correction n'est jamais retiré ; un bandeau de mise à jour peut être replié après 90 jours dans une page d'historique des versions, à créer et à raccorder au lien « Politique de correction » du pied de page et à `{{lien_corrections}}` de l'infolettre.

### 3.4 Fiche synthétique « À retenir »

`<aside class="retenir" aria-labelledby="retenir-titre">` : fond `--actio-bleu-palais-pale` (`#E7EFF7`), filet gauche `5px solid var(--actio-bleu-palais)`, `border-radius: 0 var(--rayon-3) var(--rayon-3) 0`, `padding: var(--e-6)`, `margin-block: var(--e-8)`, `max-width: var(--mesure-lecture)`. Le titre est un `<p class="retenir__titre">`, non un `<h*>` : il ne doit pas polluer le plan du document, d'où `aria-labelledby`. Liste `<ol>` en grille `28px 1fr`, `gap: var(--e-4)`, numérotée par compteur CSS dans une pastille ronde de 24 px.

**Défaut à corriger** : `.retenir__liste li::before` pose `background: var(--actio-bleu-palais); color: #fff`. En mode sombre le jeton devient `#4E9BE0` et le blanc y tombe à environ 3,0:1, sous le seuil AA. Basculer sur `--fill-primaire` / `--fill-primaire-texte` ; même vérification sur `.evitement` dans `actio.css`.

**Pourquoi exactement trois.** Trois est le nombre qu'un lecteur restitue sans relire, et surtout celui qui **force l'arbitrage** : à quatre, on cesse de hiérarchiser et la fiche redevient un résumé. Trois impose l'architecture du raisonnement juridique : (1) la règle ou le critère dégagé ; (2) ce que la décision ne dit **pas**, donc la limite de sa portée ; (3) le régime résiduel qui s'applique hors du champ examiné.

**Écriture.** Un point = une affirmation en `<strong>` (60 à 110 signes) suivie de sa justification (140 à 230 signes), dans un unique `<p>` ; `<strong>` en `--texte-primaire`, le reste en `--texte-secondaire`, `--t-petit` / 1,6. Jamais : un teaser, une question, un chiffre isolé sans sa règle, une recommandation d'action, ni la reprise du chapeau. Un point rédigeable sans avoir lu l'article est mauvais.

**Dépendance § 1.5** : la section 1 impose une ligne « Portée » dans `.retenir`, absente du prototype. Arbitrage retenu : un `<p>` hors du `<ol>`, en fin de bloc, pour ne pas consommer l'un des trois points ; classe à créer dans `article.css`.

### 3.5 Sommaire interactif collant

`.article__corps` : grille `minmax(0, 1fr) 260px`, `gap: var(--e-12)` (48 px), `align-items: start`, `padding-block: var(--e-8) var(--e-16)`.

`.sommaire` : `position: sticky; top: 96px`, `max-height: calc(100vh - 128px)`, `overflow-y: auto`, filet gauche `--bordure`, `padding-left: var(--e-5)`, `--t-petit`. La valeur 96 px découle de `.entete` collant à `min-height: 64px` plus 32 px de dégagement ; elle est reprise en `scroll-margin-top: 96px` sur `.prose h2` et `.prose h3` et dans le `rootMargin: '-96px 0px -65% 0px'` de l'`IntersectionObserver` d'`actio.js`. **Toute modification de la hauteur d'en-tête se répercute aux quatre endroits.**

Surlignage : `actio.js` pose `aria-current="true"` sur le lien courant ; `.sommaire a[aria-current="true"]` prend `--actio-bleu-palais`, `--graisse-demi` (600) et un filet gauche `--trait-fort` (2 px). Le marqueur est un attribut ARIA lu par les technologies d'assistance, non une classe décorative.

Progression : `.sommaire__barre` de 3 px, fond `--bordure`, remplissage `--actio-turquoise-fonce` (`#096B61` en clair, `#3FD8C7` en sombre), `transition: width var(--mvt-rapide)` (120 ms). Le pourcentage se calcule sur la hauteur de `.prose` moins une hauteur de fenêtre et est **doublé en texte** dans `[data-progression-texte]`. `@media (prefers-reduced-motion: reduce)` ramène la transition à 0,01 ms.

**Seuil de bascule : 1080 px.** En dessous, `.article__corps` passe à une colonne, `gap` tombe à `--e-8`, et `.sommaire` reçoit `position: static !important; max-height: none !important; order: -1` — il remonte au-dessus de la prose. Conséquence assumée : la barre de progression sort de l'écran avec lui et devient un indicateur de longueur au chargement. On ne compense pas par une barre fixe en haut d'écran, qui doublerait l'en-tête déjà collant.

Le sommaire du prototype est saisi à la main ; en production il est **généré** depuis les `h2` porteurs d'un `id` `s1`…`sN`. Un `h2` argumentatif sans `id` est un défaut de saisie.

### 3.6 Corps d'article et les trois boîtes de synthèse juridique

`.prose` : `max-width: var(--mesure-lecture)`, `--t-base`, `--lh-texte`, rythme par `> * + * { margin-top: var(--e-5) }`. Les `h2` sont en `--t-h3` (24 → 29 px) avec `margin-top: var(--e-12)` et un filet haut `--bordure` : une césure, pas une décoration. `h3` en `--t-h4`, `margin-top: var(--e-8)` ; `h4` bascule en `--police-texte` grasse.

`blockquote` : filet gauche `--trait-editorial` en `--actio-turquoise-fonce`, `--police-titre` italique, `--t-h5`, `line-height: 1.45`. **Règle absolue** : une citation est soit textuelle et sourcée au renvoi près, soit reformulée — et le `<cite>` doit alors le dire, comme dans le prototype (« Synthèse Actio du raisonnement du tribunal — reformulation, non citation textuelle »). Aucun `blockquote` sans `<cite>`.

Renvois : `.renvoi` en `--police-donnee`, `.7em`, exposant, `--actio-bleu-palais`, vers `#src1`…`#srcN`. `actio.js` intercepte tout `a[href^="#"]`, défile et **pose le focus** sur la cible. Manque un lien de retour de la source vers l'appel de note : à ajouter.

Les trois boîtes partagent `.boite` (fond `--fond-surface` `#FFFFFF`, en relief sur le vélin `#FAF8F4`, `--rayon-3`, `overflow: hidden`), un `.boite__entete` en capitales `--t-micro` avec `--interlettre-etiq` (0,085em), un `.boite__corps` en `--t-petit` / 1,62, et une ligne `.boite__ref` monospace séparée par un filet `--bordure-douce`.

| Classe | Vocation | On y met | On n'y met **jamais** | En-tête | Marqueur |
|---|---|---|---|---|---|
| `.boite--texte` | les textes applicables, cités et datés | loi, règlement, avis du personnel, bulletin d'OAR ; date ; objet en une phrase | l'interprétation, l'opinion d'Actio, un commentaire de cabinet | `--actio-bleu-palais-pale` / `--actio-bleu-palais` (`#0F3D68`) | `§` |
| `.boite--impact` | la conséquence concrète pour l'investisseur ou l'assujetti | ce qui change en pratique, pour qui, à partir de quand ; le réflexe de vérification | la sanction, la pénalité, l'incitation à investir ou à se retirer | `--actio-turquoise-pale` / `--actio-turquoise-fonce` (`#096B61`, ≈ 5,7:1) | `◈` |
| `.boite--risque` | le risque de non-conformité et la mesure encourue | manquement par manquement : fait générateur, autorité, mesure | l'impact pour l'investisseur, le rappel du droit applicable, un montant non vérifié | `--statut-alerte-pale` / `--statut-alerte` (`#C8102E`) | `⚠` |

**Gabarit commun** : chaque paragraphe s'ouvre par un `<strong>` qui nomme le cas (« Exercice sans inscription. », « Pour l'investisseur de détail. ») suivi de deux à quatre phrases. Trois paragraphes au plus par boîte.

**Interdiction de mélanger.** `tokens.css` pose que « la couleur ne sert jamais à décorer : elle est porteuse d'un statut réglementaire, et d'un seul ». D'où quatre interdits : une boîte ne porte jamais deux vocations ; le rouge `--statut-alerte` est réservé à la sanction, si bien qu'une conséquence pour l'investisseur écrite en rouge devient une boîte de risque et doit être déplacée ; **pas plus d'une boîte de chaque type par article** ; l'ordre suit l'argumentation — dans le prototype `.boite--texte` en section 1 (le droit applicable), `.boite--impact` en section 2 (ce que la ligne de partage produit), `.boite--risque` en section 3 (le double régime et ses suites). Une boîte placée avant que son objet ne soit exposé est un défaut de plan.

`.boite__ref` sert exclusivement à l'état de vérification, jamais à une source. Deux mentions normées, non interchangeables : **[À VÉRIFIER]** — l'affirmation est formulée, sa source doit être lue ; **[À COMPLÉTER AVANT PUBLICATION]** — l'information manque et aucune valeur n'est avancée, comme pour les montants de pénalité du prototype. Ni l'une ni l'autre ne survit à la publication (§ 3.14).

### 3.7 Tableaux comparatifs

`.tableau` : conteneur `overflow-x: auto`, bordure `--bordure`, `--rayon-2`, `margin-block: var(--e-8)` ; table à `min-width: 560px`, `--t-petit`, `--lh-dense: 1.45`.

- **`<caption>` obligatoire**, `caption-side: top`, fond `--fond-surface-2`, capitales `--t-micro` : il énonce l'objet **et la date d'arrêté des données**, en tête et non en pied (fiche 08).
- **Colonne « Juridiction » obligatoire** dès qu'on compare des entités ou des régimes : un tableau pancanadien sans elle est structurellement trompeur, l'inscription variant par autorité (fiches 01 et 08).
- Alignement : `th`/`td` à gauche, `vertical-align: top`, `padding: var(--e-3) var(--e-4)`. **Toute donnée chiffrée porte `data-num`**, qui applique `--police-donnee`, `font-variant-numeric: tabular-nums`, alignement à droite et `white-space: nowrap` — seule façon de comparer des montants en colonne ; une date `AAAA-MM-JJ` en relève. Première cellule de ligne en `th[scope="row"]`, en-têtes de colonne en `th[scope="col"]`.
- En-têtes collants : `.tableau thead th` porte `position: sticky; top: 0`, fond `--fond-surface-2`, filet bas `--trait-fort` en `--bordure-forte`. Le conteneur n'ayant qu'un défilement horizontal, la fixation joue contre la fenêtre au défilement vertical : effet utile seulement pour un tableau plus haut que l'écran. Au-delà de **12 lignes**, on scinde.
- Défilement horizontal : sous une fenêtre d'environ 600 px, `min-width: 560px` déclenche le défilement latéral **à l'intérieur de `.tableau` seul** ; le corps de page ne défile jamais horizontalement. **Défaut d'accessibilité** : une zone défilante doit être atteignable au clavier — ajouter `tabindex="0"`, `role="region"` et un `aria-label` reprenant le `<caption>` (WCAG 2.1 AA, critère 2.1.1). WCAG 2.1 AA est visée **à titre de norme éditoriale volontaire** : la Loi canadienne sur l'accessibilité ne vise que les entités sous réglementation fédérale et la LAPHO ontarienne exige WCAG 2.0 AA au-delà de 50 employés (fiche 06).

### 3.8 Sources primaires citées

`<section class="sources">` en fin de `.prose` : fond `--fond-surface-2`, `padding: var(--e-6)`, `--rayon-3`, numérotation `[n]` par `counter(src)` en `--actio-bleu-palais`.

**Renvois.** Le numéro affiché vient du compteur CSS, donc de l'ordre du DOM, alors que le libellé de `.renvoi` est saisi en dur. Insérer une source renumérote la liste sans toucher aux appels : **les renvois sont générés par le système de publication, jamais tapés**, et chaque `<li id="srcN">` doit être appelé au moins une fois. Le prototype enfreint sa propre règle — les sources 4 (Avis 21-330) et 5 (LVM et LESM) n'ont aucun appel : les appeler, ou les sortir de la liste.

**Typologie.** `.sources__type`, pastille monospace bordée de `--bordure-forte`. Liste **fermée** de cinq valeurs :

| Valeur | Couvre | Exemple (fiches 01 et 02) |
|---|---|---|
| Avis | avis du personnel, avis conjoint, bulletin ou note d'orientation d'un OAR | Avis 21-327 du personnel des ACVM, 16 janvier 2020 |
| Décision | décision d'un tribunal, ordonnance, homologation d'entente | TMF, *AMF c. Gagnon*, 22 août 2025 |
| Loi | loi fédérale ou provinciale, avec citation officielle | Loi sur les valeurs mobilières, RLRQ, c. V-1.1 |
| Règlement | règlement, norme canadienne, règlement d'application | Règlement 31-103 sur les obligations et dispenses d'inscription |
| Communiqué | communiqué, mise à jour, mise en garde d'une autorité | communiqué conjoint ACVM–OCRI, 6 août 2024 |

Un bulletin d'OAR — ainsi le bulletin 26-0033 de l'OCRI sur la garde d'actifs numériques — est typé « Avis », sa nature exacte étant écrite dans la citation. Pas de sixième valeur sans modifier la présente section.

**Lien vers la source primaire, jamais vers un commentaire.** Le `<a>` d'une entrée vise le texte de l'autorité qui l'a édicté : ACVM, AMF, CVMO, OCRI, CANAFE, LégisQuébec, Gazette du Canada, CanLII. Ne sont jamais la cible : la note d'un cabinet, un article de presse, un agrégateur, une page de synthèse d'Actio. Quand seul un commentaire existe, le fait reste dans le corps, le cabinet y est nommé, et l'entrée n'entre pas dans les sources primaires. Le lien est **profond** : le prototype pointe vers les racines `autorites-valeurs-mobilieres.ca` et `legisquebec.gouv.qc.ca`, ce qui n'est pas une source.

**Sources non vérifiées.** L'état s'écrit dans l'entrée, en `<em>` puis mention en `<strong>` (« Référence de dossier et texte intégral à confirmer sur le site de l'AMF et sur CanLII avant publication. **[À VÉRIFIER]** »). C'est un **état de fabrication, pas un état publiable** : les fiches 01 à 09 rappellent qu'aucune source primaire n'a pu être lue en veille, l'accès sortant étant bloqué. Deux conséquences : aucune phrase reposant sur une entrée [À VÉRIFIER] ne part en publication ; et lorsque l'incertitude est elle-même le sujet, elle s'écrit dans le corps sous forme prudente et datée (« l'état de la contestation n'a pas pu être vérifié à la date de mise à jour de cet article »), jamais comme une affirmation atténuée.

### 3.9 Bio d'expert et déclaration d'intérêts

`.bio` : grille `72px 1fr`, `gap: var(--e-5)`, `padding: var(--e-6)`, filet gauche `--trait-editorial` en `--actio-bleu-palais`, `border-radius: 0 var(--rayon-3) var(--rayon-3) 0`, fond `--fond-surface` ; une colonne sous **560 px**. Nom en `h2` (`--t-h5`), fonction en `--actio-bleu-palais` graisse 600, texte en `--t-petit` / 1,6 (200 à 320 signes), liens en monospace `--t-micro`.

`.bio__declaration` (`--t-micro`, `--texte-tertiaire`, filet haut `--bordure-douce`) est **obligatoire dans chaque article**, y compris — et surtout — à l'état négatif. Sept points, sans exception : (1) positions détenues dans les cryptoactifs, émetteurs ou plateformes nommés, à la date de publication ; (2) toute rémunération reçue dans les **24 mois** d'une personne inscrite, d'une plateforme, d'un émetteur ou d'un cabinet cité ; (3) toute relation de conseil, présente ou passée, avec une partie à la décision commentée ; (4) le financement externe de l'article — commandite, subvention, bourse — ou son absence ; (5) les liens familiaux ou professionnels avec une partie citée ; (6) les intérêts détenus dans un partenaire commercial d'Actio ; (7) le rappel de la séparation entre rédaction et activités commerciales, avec lien vers la charte d'indépendance.

`.bio__liens` promet « Contact sécurisé » et « Clé publique » : ce sont des engagements de protection des sources. Ils pointent vers une boîte réelle et une clé publiée, ou disparaissent du gabarit — un lien mort à cet endroit vaut fausse déclaration.

**Dette technique** : `.sources__titre` et `.bio__nom` portent des styles en ligne (`style="border:0;margin-top:0;padding-top:0"`) neutralisant le filet de `.prose h2`. À remplacer par une règle dans `article.css`.

### 3.10 Avertissement d'absence de conseil

`.avertissement` (dans `actio.css`) : bordure `--statut-alerte`, filet gauche `--trait-editorial`, fond `--statut-alerte-pale`, `--rayon-2`, `padding: var(--e-5) var(--e-6)`, `role="note"`, titre en capitales `--t-micro`.

**Position, non négociable** : dernier bloc de `.prose`, après `.sources` et `.bio` — dernier texte lu, à la mesure de 760 px du corps, jamais relégué au pied de page où il cesserait d'être attribuable à l'article. Présent dans tous les articles du format, y compris les plus courts ; jamais replié, jamais derrière un « lire la suite », jamais réduit à une ligne, jamais reformulé au cas par cas : texte figé, révisé par la rédactrice en chef et versionné. Il est délibérément **absent de la liste des blocs masqués à l'impression** (`@media print` masque `.entete`, `.cotations`, `.sommaire`, `.infolettre`, `.demo`, `.article__outils`, `.suite`) : la version papier circule sans son contexte, c'est là qu'il doit rester.

Trois éléments requis, tels que posés dans le prototype : Actio n'est inscrite à aucun titre auprès des autorités canadiennes en valeurs mobilières ; elle ne fournit ni conseil juridique, ni conseil en placement, ni conseil fiscal ; l'analyse décrit un état du droit **à sa date de mise à jour**. L'infolettre porte la formule miroir (« ne constitue pas un avis juridique ») ; les deux restent alignées.

### 3.11 Suite de lecture

`.suite` : filet haut `--trait-fort` en `--texte-primaire` — le seul en pleine encre de la page, qui marque la sortie de l'article — `padding-top: var(--e-6)`, `margin-top: var(--e-12)`, titre en `--t-h4`. Trois `.carte.col-4` dans une `.grille` de 12 colonnes : **toujours trois, jamais deux ni quatre**, puisque `col-4 × 3 = 12`. Repli `span 6` sous 1024 px, `span 12` sous 640 px.

Sélection éditoriale, jamais algorithmique : une carte de la même sous-rubrique, une de la même juridiction dans une autre rubrique, une pédagogique de niveau 1. Chaque carte porte `.carte__meta` (badge de type + pastille de juridiction), un titre de 60 à 90 signes, un `.carte__resume` de 60 à 110 signes énonçant la thèse et non le sujet, et un `.carte__pied` format + durée. Aucune ne renvoie vers un comparatif affilié ni une offre d'abonnement : `.suite` est une continuation de lecture, pas un tunnel de conversion (fiche 08).

### 3.12 Feuille d'impression

| Disparaît | Reste | Apparaît |
|---|---|---|
| `.entete`, `.cotations`, `.sommaire`, `.infolettre`, `.demo`, `.article__outils`, `.suite` | fil d'Ariane, bloc-titre, `.maj`, `.retenir`, prose, boîtes, tableaux, `.sources`, `.bio`, `.avertissement` | l'**URL de chaque lien externe** : `a[href^="http"]::after { content: " (" attr(href) ")" }`, 8 pt, `#555` |

Le corps passe en `#fff` sur `#000` à 11 pt, `.article__corps` repasse à une colonne, `.prose` perd sa limite de 760 px, et `.boite`, `.retenir`, `.sources`, `.tableau` reçoivent `break-inside: avoid` avec bordure `#999` — une boîte de risque coupée entre deux pages est illisible et juridiquement dangereuse. Le sélecteur exclut les ancres internes : imprimer « (#src1) » derrière chaque renvoi serait du bruit. À ajouter : une règle `@page` portant l'URL canonique et la date de mise à jour en pied de feuille, plus `orphans`/`widows: 3`.

### 3.13 Gabarit rédactionnel type

Ordre de saisie, dans l'ordre du DOM. Signes espaces comprises.

| # | Bloc | Classe | Signes cible | Contrainte dure |
|---|---|---|---|---|
| 1 | Fil d'Ariane | `.ariane` | ≤ 60 (niveau 5) | 3 à 5 niveaux ; le dernier n'est pas un lien |
| 2 | Étiquettes | `.article__etiquettes` | — | 4 éléments, ordre imposé |
| 3 | Titre | `.article__titre` | 70 – 95 | ≤ 4 lignes ; pose une question de droit |
| 4 | Chapeau | `.article__chapeau` | 400 – 550 | 2 à 3 phrases ; règle puis conséquence |
| 5 | Bandeau | `.maj` | 180 – 320 | conditionnel ; nomme l'affirmation retirée |
| 6 | À retenir ×3 | `.retenir__liste li` | 220 – 320 chacun | `<strong>` 60 – 110 + justification 140 – 230 |
| 7 | Attaque | `.prose p` ×2 | 700 – 1 100 | avant le premier `h2` : le fait, puis l'enjeu |
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

Volume total de `.prose` : **9 000 à 15 000 signes**. Durée affichée dans le `.badge--neutre` : `arrondi(signes de .prose ÷ 1 300) + 1 minute par tableau`, calculée à la publication et **jamais saisie à la main** — le « Analyse — 11 min » du prototype est à recalculer.

Rôles : le rédacteur livre les blocs 1 à 18 ; le chef de pupitre contrôle plan, mesures et taxonomie ; le réviseur juridique contrôle les blocs 9 à 14 et signe la levée des mentions [À VÉRIFIER] ; la rédactrice en chef adjointe autorise la publication. Version anglaise livrée par le traducteur juridique externe à **J-1, 12 h HE**, pour parution à J-0 (§ 1.5) ; aucun article ne paraît en anglais avant sa version française.

### 3.14 Contrôles avant publication

Liste opposable : un seul point non coché bloque la mise en ligne. Le contrôleur inscrit ses initiales et la date.

- [ ] **1.** Chaque affirmation juridique porte sa source primaire ou la formulation prudente et datée du § 3.8. *(réviseur juridique)*
- [ ] **2.** Aucune mention **[À VÉRIFIER]** ni **[À COMPLÉTER AVANT PUBLICATION]** ne subsiste. *(réviseur juridique)*
- [ ] **3.** Chaque `<li id="srcN">` est appelé au moins une fois ; chaque `.renvoi` pointe vers un `id` existant. *(chef de pupitre)*
- [ ] **4.** Chaque lien de `.sources__liste` vise le document de l'autorité, jamais un commentaire ni une racine de site. *(réviseur juridique)*
- [ ] **5.** Terminologie : « cryptoactifs » et non « crypto-monnaies » ; « OCRI » et non « OCRCVM » ni « CIRO » en français ; « inscription » et non « licence » ni « agrément » ; « courtier restreint », « engagement préalable », « cryptoactif arrimé à une valeur ». Rejet automatique (§ 1.5). *(réviseur terminologique)*
- [ ] **6.** Aucune phrase n'écrit que « les cryptoactifs sont des valeurs mobilières » — c'est le contrat qui l'est ; aucun avis du personnel n'est présenté comme un règlement (fiche 01). *(réviseur juridique)*
- [ ] **7.** Aucune confusion entre inscription en valeurs mobilières (AMF / ACVM / OCRI), permis d'ESM (Revenu Québec depuis le 13 septembre 2021) et inscription d'ESM auprès du CANAFE (fiche 02). *(réviseur juridique)*
- [ ] **8.** `.retenir` compte exactement trois points ouverts par une affirmation en `<strong>`, plus la ligne « Portée ». *(chef de pupitre)*
- [ ] **9.** Une seule `.boite` de chaque type, ordre texte → impact → risque, sans empiétement de vocation. *(chef de pupitre)*
- [ ] **10.** Chaque `.tableau` porte un `<caption>` daté, la colonne Juridiction s'il compare des entités ou des régimes, et `data-num` sur toute cellule chiffrée. *(chef de pupitre)*
- [ ] **11.** Chaque `blockquote` porte un `<cite>` disant s'il s'agit d'une citation textuelle ou d'une reformulation. *(réviseur juridique)*
- [ ] **12.** `.bio__declaration` couvre les sept points du § 3.9, même à l'état négatif ; « Contact sécurisé » et « Clé publique » résolvent. *(rédactrice en chef adjointe)*
- [ ] **13.** `.avertissement` est présent, non modifié, en dernier bloc de `.prose`. *(rédactrice en chef adjointe)*
- [ ] **14.** Tous les `h2` argumentatifs portent un `id` `s1`…`sN` et figurent dans `.sommaire`. *(intégrateur)*
- [ ] **15.** Rendu contrôlé à 1440, 1080, 900, 640 et 360 px : bascule du sommaire à 1080 px, `.bio` à 560 px, aucun défilement horizontal du corps de page. *(intégrateur)*
- [ ] **16.** Rendu contrôlé en modes clair et sombre : aucun texte sous 4,5:1, tout aplat sous texte blanc en `--fill-primaire`. *(intégrateur)*
- [ ] **17.** Parcours clavier complet — `.evitement`, fil, sommaire, renvois, zones de tableau défilantes, outils — anneau `3px --actio-turquoise` visible partout. *(intégrateur)*
- [ ] **18.** Aperçu d'impression : aucune boîte coupée, URL externes affichées, `.avertissement` présent. *(chef de pupitre)*
- [ ] **19.** Durée de lecture recalculée par la formule du § 3.13 ; dates exactes et doublées en `<time datetime>`. *(intégrateur)*
- [ ] **20.** Version anglaise livrée et révisée, ou absence assumée avec `hreflang="fr-CA"` seul et `/en/…` en 404 (§ 1.5). *(rédactrice en chef adjointe)*

### Ce qui reste à trancher

1. **La variante `.maj--correction`.** Le rouge `--statut-alerte` distingue la correction de la mise à jour, mais met deux blocs rouges sur la même page (`.maj` en tête, `.avertissement` en pied). Alternative : garder l'ambre et ne changer que l'étiquette.
2. **La ligne « Portée » dans `.retenir`.** Le § 1.5 la rend obligatoire, le gabarit ne la prévoit pas. Choisir entre un quatrième élément hors liste — retenu ici — et une ligne de méta dans le bloc-titre.
3. **Le nombre de sections `h2`.** Le gabarit en pose quatre et le sommaire en vit. Un décryptage de brève actualité n'en justifie pas quatre : seuil (pas de `.sommaire` sous trois `h2`) ou second gabarit court, distinct de celui-ci ?
4. **La barre de progression sous 1080 px.** L'accepter, la déplacer en filet de 3 px collant sous `.entete`, ou la supprimer sur petit écran. Aucune option n'est neutre pour la hauteur d'en-tête, câblée en dur à 96 px en quatre endroits.
5. **Une sixième valeur de `.sources__type`.** Les bulletins d'OAR sont typés « Avis ». Si l'OCRI devient une source régulière — le bulletin 26-0033 du 3 février 2026 le laisse penser (fiche 01) —, une valeur « Bulletin » s'imposera.
6. **Le commentaire d'accessibilité de `tokens.css`.** Il annonce 4,9:1 pour le blanc sur turquoise foncé, valeur établie pour la valeur antérieure du jeton ; `--actio-turquoise-fonce` vaut désormais `#096B61`. Les ratios doivent être recalculés, faute de quoi la règle opposable cesse de l'être.
7. **La date d'arrêté du gabarit.** Toutes les références employées ici viennent des fiches 01 à 09, constituées le 4 septembre 2026 alors que l'accès sortant aux sites des régulateurs était bloqué. Aucune n'a été lue à la source : le gabarit est spécifié, les exemples qu'il contient ne sont pas publiables en l'état.
