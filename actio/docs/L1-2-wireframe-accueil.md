## 2. Wireframe haute fidélité de la page d'accueil

Cette section spécifie `prototype/index.html` (685 lignes) tel qu'il est écrit, bloc par bloc, du haut vers le bas. Elle est opposable à l'intégration : toute divergence entre le code et le présent document est un défaut, et les défauts déjà constatés dans le prototype sont nommés en fin de bloc avec leur correction chiffrée. Les jetons cités proviennent tous de `prototype/assets/tokens.css` ; les classes citées existent toutes dans `prototype/assets/actio.css`. Aucune couleur, échelle ou police hors jeton n'est introduite ici.

### 2.0 Géométrie de la grille — valeurs à reporter dans Figma

Le conteneur `.contenant` fait `max-width: var(--grille-max)` = **1320 px**, `padding-inline: var(--grille-marge)` = `clamp(16px, 4vw, 48px)`, centré par `margin-inline: auto`. La marge fluide sature à 48 px dès 1200 px de fenêtre. La grille `.grille` est `repeat(12, minmax(0,1fr))` avec `gap: var(--grille-gouttiere)` = 24 px, ramené à `var(--grille-gouttiere-mobile)` = 16 px sous 900 px.

Au conteneur maximal, la largeur utile est donc 1320 − 96 = **1224 px**, et la colonne unitaire vaut exactement **80 px** : (1224 − 11 × 24) / 12 = 960 / 12. Ce nombre rond est la raison d'être du couple 1320 / 24 ; il doit être préservé si l'un des deux change.

| Portée | Classe | Largeur à 1320 px | ≤ 1100 px | ≤ 1024 px | ≤ 900 px | ≤ 640 px |
|---|---|---|---|---|---|---|
| 12 col. | `.col-12` | 1224 px | — | 12 | gouttière 16 px | 12 |
| 8 col. | `.col-8` | 664 px | — | **12** | gouttière 16 px | 12 |
| 7 col. | `.col-7` | 704 px | — | **12** | gouttière 16 px | 12 |
| 6 col. | `.col-6` | 600 px | — | **12** | gouttière 16 px | 12 |
| 5 col. | `.col-5` | 496 px | — | **12** | gouttière 16 px | 12 |
| 4 col. | `.col-4` | 392 px | — | **6** | gouttière 16 px | **12** |
| 3 col. | `.col-3` | 288 px | — | **6** | gouttière 16 px | **12** |
| 2 col. | `.col-2` | *non défini* | — | — | — | — |

Le point de rupture **1100 px** ne touche pas la grille : il ne concerne que l'en-tête (`@media (max-width: 1100px)`, `actio.css` l. 340-369). Le point de rupture **900 px** ne touche que la gouttière. Les deux ruptures structurantes sont donc **1024 px** (effondrement des blocs larges) et **640 px** (effondrement des blocs à trois colonnes).

> **Défaut 1 — `.col-2` n'existe pas.** `index.html` l. 603 applique `col-2` à la colonne « Rubriques » du pied de page, mais `actio.css` ne définit aucune règle `.col-2`. La colonne est placée automatiquement sur **une seule piste, soit 80 px de large**, et les cinq intitulés de rubrique se replient sur trois à cinq lignes chacun. Correction : ajouter `.col-2 { grid-column: span 2; }` à la suite de `.col-3` (l. 80) et l'inclure dans la règle `@media (max-width: 1024px)` avec `span 6`, puis `span 12` à 640 px.

---

### 2.1 Bandeau de probité

**Rôle.** Déclarer, avant tout contenu, que les articles affichés sont des maquettes non vérifiées par un juriste. La décision de conception est de placer cet aveu **au-dessus de tout**, y compris du bandeau de cotations et du logo : un média de conformité qui laisserait un lecteur croire à une publication réelle perdrait précisément l'actif qu'il vend. Le bandeau est un dispositif de prototype, à retirer au lancement éditorial et à remplacer par rien.

**Grille.** Hors grille et hors conteneur : `.demo` est un enfant direct de `<body>`, en pleine largeur de fenêtre, `text-align: center`. Aucun comportement de rupture : le texte se replie, la hauteur croît.

**Espacements.** `padding: var(--e-2) var(--e-4)` = 8 px vertical, 16 px horizontal. Aucune marge.

**Typographie.** `font-size: var(--t-micro)` = 0,6875 rem (11 px), famille héritée `var(--police-texte)` (Inter), graisse 400, interlignage hérité `var(--lh-texte)` = 1,68, `letter-spacing: .03em`. Le mot d'ouverture `<strong>Prototype éditorial</strong>` passe en `text-transform: uppercase` avec `letter-spacing: var(--interlettre-etiq)` = 0,085 em.

**Couleurs.** Fond `var(--statut-consultation)` = **#965800** en clair, **#E8A93C** en sombre. Texte `#fff` — seule valeur brute admise, autorisée par la note d'accessibilité de `tokens.css` pour l'aplat consultation (5,7:1).

**Contenu (cité).** « **Prototype éditorial** — Les articles ci-dessous sont des *maquettes de démonstration* rédigées à partir de faits réglementaires réels arrêtés au 4 septembre 2026. Aucune de ces pages n'a été vérifiée par un juriste ni publiée. Voir le [registre de vérification](../docs/annexes/registre-de-verification.md). »

**États.** Le lien hérite de `a { text-decoration-thickness: 1px }` et passe à 2 px au survol ; focus visible par la règle globale `:focus-visible` (contour 3 px). Aucun état vide, de chargement ou d'erreur : contenu statique.

**Accessibilité.** `role="note"`, premier nœud lisible après le lien d'évitement, deuxième arrêt de tabulation de la page. Contraste mesuré : **5,7:1** en clair (#fff sur #965800). En sombre, le fond devient #E8A93C : le blanc n'y tient plus que **1,9:1**.

> **Défaut 2 — bandeau de probité illisible en mode sombre.** Correction : `.demo { color: var(--fond-inverse); }` en mode sombre, ce qui donne l'encre #0E1A2B sur #E8A93C, soit **8,4:1**. Le blanc reste correct en mode clair.
>
> **Défaut 3 — lien brisé.** `docs/annexes/` existe mais est vide : `registre-de-verification.md` n'a jamais été écrit. Livrable bloquant : le registre de vérification est la pièce qui rend le bandeau crédible.

---

### 2.2 Bandeau de cotations et indicateur de conformité

**Rôle.** Fournir le repère de marché minimal attendu par un lecteur venu de l'écosystème cryptoactif, **et lui refuser la place de choix**. Sur un média grand public, l'extrémité droite d'un bandeau de cours est vendue : indice de peur, promotion de plateforme, lien affilié. Chez Actio, cette extrémité porte un lien vers `registre.html`, « Registre des plateformes de négociation de cryptoactifs », qui recense pour chaque plateforme son statut d'inscription, son autorité principale, les provinces couvertes, son régime LBC/FT et sa dernière décision. C'est le seul arbitrage de monétisation visible au-dessus de la ligne de flottaison, et il est fait contre la monétisation.

Ce choix est la traduction en interface de l'avertissement déjà présent au pied de page : « **Vérifiez toujours l'inscription d'une plateforme dans le registre de votre autorité provinciale avant d'y déposer des fonds.** » Un avertissement en pied de page se lit une fois ; un lien en tête de page se lit à chaque visite.

**Grille.** `.cotations > .contenant > .cotations__piste` : une seule piste flex, `gap: var(--e-6)` = 24 px, `overflow-x: auto` avec ascenseur masqué (`scrollbar-width: none`, `::-webkit-scrollbar { display:none }`). Le bandeau ne se replie jamais : sous 640 px il défile horizontalement. `.conformite` porte `margin-left: auto` — il est donc **poussé au bord droit du conteneur** tant que la piste n'excède pas la largeur disponible ; dès qu'elle déborde, il reste le dernier élément atteignable par défilement.

**Espacements.** `padding-block: var(--e-2)` = 8 px. `.conformite` ajoute `padding-left: var(--e-6)` = 24 px et un filet séparateur `border-left: var(--trait) solid color-mix(in srgb, var(--texte-inverse) 25%, transparent)`.

**Typographie.** Famille `var(--police-donnee)` (IBM Plex Mono) pour tout le bandeau — décision : les cours sont des données, pas de la prose. `.cotations` : `var(--t-petit)` = 13 px. `.cours__sym` : graisse `var(--graisse-grasse)` = 700, `letter-spacing: .04em`. `.cours__val` : `font-variant-numeric: tabular-nums` (obligatoire — sans quoi les chiffres sautent au rafraîchissement). `.cours__var` et `.conformite` : `var(--t-micro)` = 11 px ; `.conformite` en `text-transform: uppercase`, `letter-spacing: .04em`.

**Couleurs.** Le bandeau est **inversé par rapport à la page** : fond `var(--fond-inverse)`, texte `var(--texte-inverse)`. En clair : #0B1420 sur lequel se pose #F7F5F1 → **17,0:1**. En sombre, les deux jetons s'échangent : fond #FAF8F4, texte #0E1A2B → **16,5:1**. C'est donc une bande sombre sur page claire, et une bande claire sur page sombre — l'inversion est intentionnelle et doit être conservée dans la maquette.

Variation : `--cours-hausse` #0E7C5A / #3FCB96, `--cours-baisse` #C8102E / #FF6B7F, `--cours-stable` #6E7F92 / #8FA0B2, avec glyphes générés en CSS (`▲ `, `▼ `, `→ `).

**Contenu (cité).** Ordre exact : badge « Démo » (`badge--consultation`), puis `BTC/CAD`, `ETH/CAD`, `SOL/CAD`, `CAD/USD` — chacun avec valeur « — » et variation « n. d. » en classe `cours__var--stable` — puis « Flux de marché · non branché », puis l'indicateur « **Registre des plateformes autorisées** » (`data-en="Authorized platform register"`).

La paire `CAD/USD` est le quatrième symbole et non un actif : elle rappelle que le lectorat compte en dollars canadiens et que toute conversion est un fait générateur fiscal. Les valeurs sont figées ; `actio.js` (l. 244-247) pose sur chaque `[data-arrete]` un `title` : « Données figées — prototype hors ligne. En production : flux de marché sous licence, rafraîchi toutes les 60 secondes. » Afficher un cours faux comme s'il était réel serait une indication trompeuse ; le prototype affiche donc un tiret cadratin.

**Indicateur de conformité — code couleur opposable.** `.conformite__pastille` : disque de 8 px, `border-radius: var(--rayon-plein)`, `background: var(--statut-conforme)`, halo `box-shadow: 0 0 0 3px color-mix(in srgb, var(--statut-conforme) 25%, transparent)`.

| Règle | Énoncé |
|---|---|
| Signification | La pastille qualifie **la nature de la destination** (un registre d'entités inscrites), jamais l'état du marché ni celui d'une plateforme donnée. |
| Interdiction | Elle ne peut jamais changer de couleur selon une condition de marché, un incident ou un cours. Une pastille qui passerait à `--statut-alerte` ferait d'Actio une agence de notation de fait. |
| Interdiction | Aucun logo, aucune marque de plateforme, aucun lien affilié ne peut occuper cet emplacement. |
| Autorité | Seule la direction de la rédaction peut modifier la cible du lien ; le libellé est bilingué par `data-fr` / `data-en` et suit la terminologie officielle. |
| Libellé proscrit | « liste noire », « liste blanche », « plateformes approuvées ». L'AMF publie des « mises en garde » et une « liste des entreprises non autorisées » ; les ACVM tiennent une liste de plateformes autorisées et une liste de plateformes **proscrites** (fiche 01, § synthèse, point 10 — source secondaire, **[À VÉRIFIER]** sur les pages officielles). |

**États.** Survol : `.conformite:hover { text-decoration: underline }`. Focus : contour global 3 px. Pas d'état actif ni de chargement (lien simple). État vide du flux : c'est l'état affiché par défaut dans le prototype — « — » / « n. d. » / « non branché ». État d'erreur du flux de production **non spécifié** ; à trancher (§ 2.12).

**Accessibilité.** `.cotations__piste` porte `role="region"` et `aria-label="Cours des principaux actifs et statut réglementaire"`. L'indicateur est le **troisième arrêt de tabulation** de la page. Contraste non textuel de la pastille : **3,6:1** en mode clair (#0E7C5A sur #0B1420), au-dessus du seuil de 3:1 de la règle 1.4.11.

> **Défaut 4 — pastille de conformité sous le seuil en mode sombre.** En sombre, `--statut-conforme` devient #3FCB96 et `--fond-inverse` devient #FAF8F4 : le contraste tombe à **1,9:1**, sous le seuil de 3:1. Correction sans nouvelle couleur : ajouter à `tokens.css` un jeton `--statut-conforme-inverse`, valant `var(--statut-conforme)` dans `:root` et **#0E7C5A** dans les deux blocs sombres, puis pointer `.conformite__pastille` dessus. Contraste résultant en sombre : **4,9:1**.
>
> **Défaut 5 — sens porté par la seule couleur.** Les glyphes `▲ ▼ →` sont générés par `::before` et la hausse/baisse n'est autrement signalée que par la couleur. Règle 1.4.1. Correction éditoriale : le contenu textuel de `.cours__var` doit toujours porter le signe (`+2,4 %`, `−1,8 %`), et `.cours__val` doit être doublé d'un `<span class="vh">` quand la valeur est indisponible (« valeur non disponible » plutôt que « — »).
>
> **Arbitrage à retenir — le bandeau n'est pas collant.** Seul `.entete` porte `position: sticky`. L'indicateur de conformité disparaît donc au premier défilement, tandis que le bouton « S'abonner » reste, lui, visible en permanence. C'est une hiérarchie qu'il faut assumer ou corriger (§ 2.12).

---

### 2.3 En-tête principal et mega-menu

**Rôle.** Donner à voir, en une ligne, que le site est bilingue, thématiquement organisé par **autorité**, et qu'il propose un abonnement. La décision de conception est de trier la navigation par matière (« Régulation & ACVM », « Fiscalité canadienne ») et non par type de contenu (« Actualités », « Guides ») — sauf pour l'entrée pédagogique, qui reste un format.

**Grille.** `.entete` est `position: sticky; top: 0; z-index: var(--z-entete)` = 200. `.entete__barre` : flex, `gap: var(--e-6)` = 24 px, `min-height: 64px`. Le fond est `color-mix(in srgb, var(--fond-page) 92%, transparent)` avec `backdrop-filter: saturate(160%) blur(12px)` : le contenu défilant transparaît à 8 %.

**Comportement aux ruptures.**

| Largeur | Comportement |
|---|---|
| > 1100 px | Logo · nav 5 entrées · sélecteurs langue et thème · bouton `.btn--pro` sur une ligne. `.burger` en `display: none` (donc **hors ordre de tabulation**). |
| ≤ 1100 px | `.burger` (42 × 42 px) apparaît ; `.nav` et `.entete__actions` passent en `display: none` et ne réapparaissent que sous `.entete[data-ouvert="true"]`. La nav devient une colonne, chaque `.nav__lien` en `padding: var(--e-4) var(--e-2)`, `font-size: var(--t-base)`, séparé par `border-bottom: var(--trait) solid var(--bordure-douce)`. Le `.btn--pro` prend `flex: 1 1 100%`. |
| ≤ 1100 px | Le mega-menu perd `position: absolute` et devient `static` : il se déplie sur place, sans ombre ni filet bas, avec `padding-block: var(--e-5)` = 20 px. |
| ≤ 1024 px | Les quatre colonnes `col-3` du mega-menu passent à `span 6` → grille 2 × 2. |
| ≤ 640 px | Elles passent à `span 12` → empilement complet. |

`actio.js` (l. 147-157) écoute `matchMedia('(min-width: 1101px)')` et referme le panneau au retour en disposition large, faute de quoi le focus resterait piégé dans des nœuds masqués.

**Espacements.** `.nav { gap: var(--e-1) }` = 4 px ; `.nav__lien { padding: var(--e-2) var(--e-3) }` = 8/12 px ; `.entete__actions { gap: var(--e-2) }` = 8 px ; `.megamenu__grille { padding-block: var(--e-8) }` = 32 px ; `.megamenu__vedette { padding: var(--e-5) }` = 20 px.

**Typographie.** `.logo` : `var(--police-titre)` (Source Serif 4), 1,5 rem, graisse 700, `letter-spacing: -.03em` ; le point final `.logo__point` est en `var(--actio-turquoise-fonce)` = #0B7F74 — jeton **non redéfini en mode sombre**, donc stable. `.nav__lien` : `var(--t-petit)` = 13 px, graisse `var(--graisse-demi)` = 600. `.megamenu__colonne h3` : `var(--police-texte)`, `var(--t-micro)` = 11 px, majuscules, `letter-spacing: var(--interlettre-etiq)` = 0,085 em, couleur `var(--texte-tertiaire)`. `.selecteur button` : 11 px, graisse 600, majuscules, `letter-spacing: .06em`.

**Couleurs.** Texte de navigation `var(--texte-primaire)` sur `var(--fond-page)` : **16,5:1** en clair, **16,5:1** en sombre. Survol : fond `var(--fond-surface-2)`. Page courante : `var(--actio-bleu-palais)` (**10,5:1** sur le vélin) plus un soulignement de 2 px en `::after`. Bouton `.btn--pro` : fond `var(--texte-primaire)`, texte `var(--fond-page)` — **16,5:1** dans les deux modes ; au survol il bascule sur `var(--actio-bleu-palais)` avec texte blanc (**11,1:1**).

**Contenu (cité).** Nav : « Régulation & ACVM » (`data-en="Regulation & CSA"`), « Marchés & Macro », « Guides & Éducation », « Fiscalité canadienne », « Actio Pro ». Bouton : « S'abonner » / « Subscribe ». Mega-menu, trois colonnes de tri croisé — **Par autorité** (ACVM — avis du personnel ; AMF — Québec ; CVMO — Ontario ; OCRI — autoréglementation ; CANAFE — LBC/FT ; Banque du Canada — paiements), **Par type d'acte** (Avis du personnel ; Consultation publique ; Décision et sanction ; Mise en garde ; Règlement et modification ; Dispense discrétionnaire), **Par juridiction** (Fédéral / Ottawa ; Québec ; Ontario ; Harmonisé ACVM ; International) — puis une quatrième colonne vedette, badge « Dossier permanent » (`badge--info`), titre « La sortie du régime de courtier restreint », et ce résumé : « Suivi continu de la migration des plateformes vers l'inscription de courtier en placement et l'adhésion à l'OCRI, annoncée par les ACVM le 6 août 2024. »

Les trois axes de tri ne sont pas décoratifs : ils reproduisent la structure réelle du droit applicable, où un même dossier est indexé par l'autorité qui agit, par l'instrument employé et par le territoire visé. La date du 6 août 2024 est celle du communiqué conjoint ACVM–OCRI ; la fiche 02 la marque **[À VÉRIFIER]** (incertitude 12 : des communiqués ultérieurs pourraient l'avoir remplacée).

**États.** `.nav__lien[aria-expanded="true"]` prend le fond `var(--fond-surface-2)` et fait pivoter `.nav__chevron` de 180° en `var(--mvt-rapide)` = 120 ms. `.burger[aria-expanded="true"]` transforme les trois traits en croix (translations de ±6 px, rotations de ±45°). Fermeture du mega-menu : clic sur le déclencheur, clic hors du panneau, ou touche `Échap` — laquelle **rend le focus au déclencheur** (`actio.js` l. 120-124). Sélecteurs de thème et de langue : état porté par `aria-pressed`, aplat `var(--texte-primaire)` sur l'option active. Aucun état de chargement.

**Accessibilité.** `<nav aria-label="Navigation principale">`, `id="nav-principale"` ; le burger porte `aria-expanded`, `aria-controls="nav-principale"` et un `aria-label` bilingue (`data-fr-aria="Ouvrir le menu"` / `data-en-aria="Open menu"`). Les deux sélecteurs sont des `role="group"` nommés « Langue du site » et « Thème d'affichage ». Le panneau `#mm-regulation` est `hidden`, donc hors ordre de tabulation tant qu'il est fermé.

> **Défaut 6 — `aria-expanded` sur un lien.** `.nav__lien` de la rubrique Régulation est un `<a href="#regulation">` porteur de `aria-expanded` et `aria-controls`. Le motif attendu est un `<button>` ; ici, `actio.js` fait un `preventDefault()` sur le clic, ce qui prive le lien de sa fonction de navigation sans lui donner la sémantique de bouton. Correction : dédoubler en un `<a>` vers `#regulation` et un `<button aria-expanded>` adjacent portant le chevron.
>
> **Défaut 7 — état « page courante » jamais posé.** `.nav__lien[aria-current="page"]` est stylé (l. 303-307) mais aucun nœud ne porte l'attribut dans `index.html`. À poser côté gabarit.

---

### 2.4 À la une — agencement asymétrique 7 / 5

**Rôle.** Opposer une analyse longue à un fil de brèves, dans le même écran. La décision de conception est le rapport **7 / 5** plutôt que 8 / 4 : à 8 / 4, la colonne de brèves tombe à 320 px et un titre de brève sur deux lignes devient un titre sur quatre. À 7 / 5 (704 px et 496 px), la brève garde une amplitude de titre confortable tout en restant clairement subordonnée. Le filet vertical `border-right: var(--trait) solid var(--bordure)` sur `.une__principal`, doublé de `padding-right: var(--e-8)` = 32 px, est ce qui rend la subordination lisible sans hiérarchie de taille supplémentaire.

**Grille.** `<section class="une grille">` : `.col-7` (704 px) + `.col-5` (496 px), gouttière 24 px, total 1224 px. À **1024 px**, les deux passent à `span 12` : le filet vertical devient un filet horizontal (`border-bottom`) et le rembourrage bascule de `padding-right` à `padding-bottom: var(--e-8)`. Sous 1024 px, l'article majeur et les brèves sont donc empilés, dans cet ordre — le DOM est déjà dans l'ordre de lecture voulu, aucune réorganisation n'est nécessaire.

**Espacements.** `.une { padding-block: var(--e-10) var(--e-12) }` = 40 px en haut, 48 px en bas. `.une__principal { gap: var(--e-4) }` = 16 px entre chaque bloc interne. `.breves { gap: var(--e-5) }` = 20 px. `.breve { gap: var(--e-2); padding-bottom: var(--e-5) }` = 8 px / 20 px, séparées par `border-bottom: var(--trait) solid var(--bordure-douce)`, la dernière sans filet ni rembourrage.

**Typographie.**

| Élément | Jeton | Rendu | Famille | Graisse | Interlignage |
|---|---|---|---|---|---|
| `.une__titre` | `--t-h1` | `clamp(2,125rem, 1,62rem + 2,2vw, 3,375rem)` → 34 px à 54 px | `--police-titre` | 700 | `--lh-serre` 1,15 |
| `.une__chapeau` | `--t-lead` | `clamp(1,125rem, 1,05rem + 0,35vw, 1,3125rem)` → 18 px à 21 px | `--police-texte` | 400 | `--lh-moyen` 1,35 |
| `.une__signature` | `--t-petit` | 13 px | `--police-texte` | 400 (nom en 600) | 1,68 |
| `time`, `.lecture` | `--t-micro` | 11 px | `--police-donnee` | 400 | 1,68 |
| `.breves__titre` | `--t-micro` | 11 px, majuscules, 0,085 em | `--police-texte` | 700 | 1,68 |
| `.breve__titre` | `--t-h6` | 1,0625 rem = 17 px | `--police-titre` | 700 | `--lh-moyen` 1,35 |
| `.carte__resume` | `--t-petit` | 13 px | `--police-texte` | 400 | `--lh-moyen` 1,35 |

Le titre de section « À la une » (`h2#titre-une`) est en `.vh` : présent pour les lecteurs d'écran, absent à l'œil. En revanche « **Le fil réglementaire** » (`data-en="The regulatory wire"`) est visible et souligné d'un `border-bottom: var(--trait-fort)` = 2 px en `var(--texte-primaire)` : c'est le seul intertitre de la colonne droite.

**Couleurs.** Titre en `var(--texte-primaire)` (16,5:1) qui passe à `var(--actio-bleu-palais)` au survol (10,5:1). Chapeau en `var(--texte-secondaire)` : **7,1:1**. Signature en `var(--texte-tertiaire)` : **5,2:1**. `.une__visuel` : dégradé `linear-gradient(135deg, …)` bâti sur `var(--actio-bleu-palais)` et `var(--actio-turquoise-fonce)`, `aspect-ratio: 16 / 9`, `border-radius: var(--rayon-3)` = 10 px.

**Contenu réel et règle de composition de chaque métadonnée.**

Article majeur, ligne de métadonnées : `.rubrique` « Régulation & ACVM » — `badge badge--alerte` « Décision » — `juridiction juridiction--quebec` « Québec · TMF ».

Titre : « Après *Gagnon*, où s'arrête le contrat d'investissement pour les « finfluenceurs » québécois ? »

Chapeau : « Le Tribunal administratif des marchés financiers a jugé, le 22 août 2025, que gérer les éthers d'investisseurs contre 20 % des profits constitue un contrat d'investissement — mais que vendre un abonnement à des signaux de négociation n'en est pas un. Cette ligne de partage, plus restrictive que la lecture historique de l'AMF, redistribue le risque d'exercice illégal pour toute une économie de créateurs de contenu. »

Signature : « **Marie-Claude Fortin**, juriste en valeurs mobilières » — `juridiction--quebec` « AMF / Québec » — `<time datetime="2026-09-03">3 septembre 2026</time>` — `.lecture` « 11 min ».

| Métadonnée | Règle de composition opposable |
|---|---|
| Rubrique | Une seule, jamais deux. Elle correspond à une entrée réelle de la navigation principale. Filet de 3 px (`--trait-editorial`) sous le libellé, couleur variable par rubrique (`.rubrique--marches` en `--actio-turquoise-fonce`, `--fiscalite` en `--statut-consultation`, `--guides` en `--jur-ontario`, `--pro` en `--texte-primaire`). |
| Badge statutaire | Un seul, obligatoire, choisi dans la charte du § 2.5. Il désigne l'**acte** commenté, jamais le ton de l'article. |
| Juridiction | Losange de 8 px pivoté à 45°, couleur `--jur-*`. Le libellé nomme le territoire, éventuellement suivi de l'organe : « Québec · TMF ». Un article portant sur un acte harmonisé prend `--multi`, jamais la province de rédaction. |
| Auteur | Prénom, nom, virgule, qualité professionnelle en minuscules. La qualité est une allégation vérifiable : « juriste en valeurs mobilières » engage la rédaction. **Signature fictive dans le prototype**, couverte par le bandeau de probité. |
| Juridiction de signature | Répétée après l'auteur sous la forme « autorité / province » — elle indique le périmètre de compétence de l'analyse, non celui de l'auteur. |
| Date | `<time datetime="AAAA-MM-JJ">` = **date de publication**, jamais la date de l'acte. La date de l'acte vit dans le corps et dans la légende du visuel (ici « TMF · 22 août 2025 »). Les deux dates ne doivent jamais être confondues ni fusionnées. |
| Temps de lecture | Entier suivi de « min », en `--police-donnee`, sans « ~ » ni fourchette. La méthode de calcul n'est pas arrêtée (§ 2.12). |

Brèves — trois entrées, chacune avec badge + juridiction, titre, résumé, puis date courte et durée :

| # | Badge | Juridiction | Titre (extrait) | Date | Durée |
|---|---|---|---|---|---|
| 1 | `badge--consultation` « Consultation » | `--federal` « Fédéral » | « Stablecoins : la Banque du Canada ouvre les consultations sur les règlements d'application de la loi adoptée en mars » | 4 sept. | 4 min |
| 2 | `badge--info` « Avis » | `--multi` « Harmonisé » | « Garde des actifs numériques : ce que le cadre de l'OCRI change pour les courtiers de taille moyenne » | 2 sept. | 6 min |
| 3 | `badge--alerte` « Mise en garde » | `--quebec` « Québec » | « Blocage d'accès aux plateformes non inscrites : l'outil monte en puissance, ses limites juridiques aussi » | 31 août | 5 min |

> **Défaut 8 — titre de la brève 1.** Le mot « Stablecoins » contredit la terminologie maison ; le corps de la brève emploie correctement « cryptoactifs arrimés à une monnaie fiduciaire ». Surtout, l'ouverture d'une consultation de la Banque du Canada est **[À VÉRIFIER]** : la fiche 07 (incertitude 7) indique qu'aucune trace d'un projet de règlement à la *Gazette du Canada, Partie I* n'a été trouvée, et que les règlements sont attendus vers 2027. Le titre français de la loi elle-même est également **[À VÉRIFIER]** — « Loi sur les cryptomonnaies stables » est une traduction plausible non confirmée sur le texte bilingue (fiche 07, incertitude 2). Ne pas publier en l'état.

**États.** `.breve__titre a::after { position: absolute; inset: 0 }` rend toute la brève cliquable, `.breve` étant `position: relative`. Une seule ancre par brève : aucun conflit de zone. Survol du titre : passage à `var(--texte-lien)`. Le survol de la zone étendue **ne produit aucun retour visuel sur le bloc** : à corriger par `.breve:hover .breve__titre { color: var(--texte-lien) }`. État vide de la colonne : si moins de trois brèves, `.breve:last-of-type` retire le filet — le rendu reste correct à une ou deux entrées, mais le `.col-5` devient très court face à un `.col-7` de 900 px ; prévoir un plancher de trois brèves comme règle éditoriale.

**Accessibilité.** `<section aria-labelledby="titre-une">`. Le visuel est un `role="img"` porteur d'un `aria-label` descriptif — « Schéma : ligne de partage tracée par le TMF entre gestion de fonds d'autrui et vente d'information. » — tandis que le `<svg>` intérieur est `aria-hidden="true"`. C'est le bon motif : le texte alternatif énonce la démonstration, pas la forme.

> **Défaut 9 — visuel de la une illisible en mode sombre.** Le dégradé repose sur `var(--actio-bleu-palais)`, redéfini à **#4E9BE0** en mode sombre. Les libellés blancs de 21 px du SVG y tombent à **3,0:1**, sous le seuil de 4,5:1 (21 px en graisse normale n'est pas du « grand texte »). Correction sans nouvelle couleur : construire le dégradé sur `var(--actio-bleu-palais-fonce)` (#0A2B4B) et `var(--actio-turquoise-fonce)` (#0B7F74), tous deux **non redéfinis en mode sombre**. Le blanc y tient respectivement 14,4:1 et 4,9:1 dans les deux modes.
>
> **Défaut 10 — valeurs brutes dans le SVG.** `#C8102E`, `#12B5A6`, `#06231F` sont écrits en dur (l. 213-218) alors que l'en-tête d'`actio.css` interdit toute valeur brute. Remplacer par `fill="var(--statut-alerte)"`, `fill="var(--actio-turquoise)"` et un nouveau jeton `--texte-sur-turquoise` valant **#0E1A2B dans les trois blocs** (clair, sombre auto, sombre explicite) : l'encre sur turquoise tient 6,8:1 en clair et 9,6:1 en sombre, alors que `var(--texte-primaire)` s'inverserait et tomberait à 1,6:1.

---

### 2.5 Régulation & décryptages institutionnels

**Rôle.** Prouver que le média lit les sources primaires. Chaque carte porte un **résumé exécutif** encarté — un objet éditorial que la presse cryptoactif n'a pas — qui donne l'analyse avant le clic. La décision de conception est d'accepter des cartes longues et inégales plutôt que des accroches tronquées : un directeur de la conformité doit pouvoir décider en dix secondes si l'article le concerne.

**Grille.** `<div class="grille">` avec trois `.carte.col-4` de **392 px**. À 1024 px : `span 6` → deux cartes par ligne, la troisième seule. À 640 px : `span 12` → empilement. `.carte { height: 100% }` et `align-items` par défaut `stretch` : les trois cartes d'une ligne ont la même hauteur, et `.carte__pied { margin-top: auto }` colle les métadonnées au bas de chacune.

**Espacements.** `.section { padding-block: var(--e-16) }` = 64 px ; `.section + .section { padding-top: 0 }` — cette règle ne s'applique **pas** ici, car le frère précédent est `.une.grille` et non `.section` : la section Régulation conserve donc 64 px de rembourrage haut, tandis que les sections Schéma et Guides qui la suivent n'en ont aucun. `.section__entete` : `padding-bottom: var(--e-4)` = 16 px, `margin-bottom: var(--e-8)` = 32 px, `border-bottom: var(--trait-fort)` = 2 px en `var(--texte-primaire)`. `.carte { padding: var(--e-5); gap: var(--e-3) }` = 20 px / 12 px. `.carte__synthese { padding: var(--e-3) var(--e-4) }` = 12 px / 16 px. `.carte__pied { padding-top: var(--e-3) }` = 12 px.

**Typographie.** `.section__sur` : 11 px, majuscules, 0,085 em, `var(--texte-tertiaire)`. `.section__titre` : `var(--t-h2)` = `clamp(1,75rem, 1,52rem + 1,0vw, 2,375rem)` → 28 px à 38 px, Source Serif 4, 700, `--lh-serre`. `.carte__titre` : `var(--t-h5)` = `clamp(1,125rem, 1,08rem + 0,22vw, 1,25rem)` → 18 px à 20 px. `.carte__resume` : 13 px, `--lh-moyen`. `.carte__synthese` : 13 px, `--lh-dense` 1,45. `.carte__pied` : 11 px en IBM Plex Mono, éléments séparés par un point médian généré (`span + span::before { content: "·" }`).

**Couleurs.** `.carte` : fond `var(--fond-surface)` (#FFFFFF clair, #111E2E sombre), filet `var(--bordure)`, rayon `var(--rayon-2)` = 6 px. `.carte__synthese` : fond `var(--fond-surface-2)`, **filet gauche de 3 px** en `var(--actio-bleu-palais)`, rayon asymétrique `0 var(--rayon-1) var(--rayon-1) 0`. Contrastes mesurés : résumé 7,5:1 ; synthèse 6,6:1 ; pied 5,5:1 ; « Résumé exécutif. » en `var(--texte-primaire)` 15,7:1.

**Contenu (cité).** Surtitre « Sources primaires décryptées » / « Primary sources decoded » ; titre « Régulation & décryptages institutionnels » ; lien « Toutes les analyses » avec flèche générée (`::after { content: " →" }`). Trois cartes :

| Carte | Badge | Juridiction | Sujet | Type | Durée | Date |
|---|---|---|---|---|---|---|
| 1 | Consultation publique | ACVM (`--multi`) | régime permanent succédant aux avis du personnel | Analyse | 9 min | 2 sept. 2026 |
| 2 | Sanction OCRI | Ontario | Avis 21-330, publicité et marketing d'influence | Décryptage | 7 min | 29 août 2026 |
| 3 | Avis du personnel | ACVM (`--multi`) | prêts adossés à des cryptoactifs et rendement passif | Analyse | 8 min | 26 août 2026 |

**Charte d'emploi opposable des badges statutaires.** Un badge est une qualification juridique affichée. Il est faux ou il est juste ; il n'est jamais joli.

| Badge | Classe | Jeton (clair / sombre) | Acte visé — seul emploi admis | Interdits |
|---|---|---|---|---|
| Consultation publique | `badge--consultation` | #965800 sur #FBF0E0 / #E8A93C sur rgba(232,169,60,.14) | Appel à commentaires ouvert et **non clos** : consultation d'une autorité, avant-projet, projet de règlement publié à la *Gazette du Canada, Partie I*. | Interdit dès la clôture des commentaires ; l'article passe alors sans badge ou en « Avis du personnel ». |
| Avis du personnel | `badge--info` | #0F3D68 sur #E7EFF7 / #7FB6EA sur rgba(127,182,234,.14) | Avis du personnel des ACVM, bulletin ou note d'orientation de l'OCRI, position administrative. **Jamais présenté comme un règlement** : ce n'est pas un texte adopté ni publié à la Gazette. | Interdit pour un règlement, une loi, une décision. |
| Sanction OCRI | `badge--alerte` | #C8102E sur #FBE9EC / #FF6B7F sur rgba(255,107,127,.14) | Décision disciplinaire **de l'OCRI** identifiée par ses parties et sa date. Le libellé nomme l'organisme : « Sanction OCRI », « Sanction CVMO », « Pénalité TMF ». | Interdit pour un acte d'une autre autorité, pour une simple mise en garde, et pour un article qui parle de sanctions en général. |
| Mise en garde | `badge--alerte` | id. | Publication nommée « mise en garde » par l'autorité, ou inscription sur une liste d'entreprises non autorisées / de plateformes proscrites. | Interdit comme synonyme d'« alerte » éditoriale ou de tribune. Le mot « liste noire » est proscrit. |
| Décision | `badge--alerte` | id. | Décision d'un tribunal ou d'une autorité **imposant** une interdiction, une pénalité, une radiation ou un blocage. Si la décision est déclaratoire ou favorable au mis en cause, employer `badge--info`. | Interdit pour une simple ordonnance de procédure ou une décision non rendue publique. |
| *(réservé)* Inscrit / En vigueur | `badge--conforme` | #0E7C5A sur #E3F4EE / #3FCB96 sur rgba(63,203,150,.14) | Statut d'inscription confirmé au registre ; texte entré en vigueur. Employé dans `registre.html`, non en accueil. | Interdit comme label de recommandation ou de qualité. |
| *(réservé)* Archivé / Abrogé | `badge--neutre` | #5B6B7C sur #EDF0F3 / #8FA0B2 sur rgba(143,160,178,.12) | Acte abrogé, remplacé ou sans objet. | — |

Règles transversales : **un seul badge par objet** ; il est posé par le rédacteur et validé au relais par le responsable de la vérification, jamais par l'intégration ni par le marketing ; il ne peut être ajouté à une carte pour équilibrer visuellement une ligne ; le badge est reproduit à l'identique dans l'infolettre ; en cas de doute entre deux badges, on retient le moins grave.

> **Défaut 11 — badge et juridiction faux sur la carte 2.** L'Avis 21-330 est un avis **conjoint ACVM / OCRCVM** (aujourd'hui OCRI) du 23 septembre 2021 : la juridiction est harmonisée, non ontarienne, et le corps de la carte ne rapporte **aucune décision disciplinaire de l'OCRI**. Le badge « Sanction OCRI » annonce donc un acte que l'article n'établit pas — exactement l'usage décoratif que la charte interdit. Correction : `badge--info` « Avis du personnel » et `juridiction--multi` « ACVM ». La date de 2021 est retenue par la fiche 01 ; la fiche 08 la donne à « 2022 » et la marque **[À VÉRIFIER]**.

**États.** `.carte:hover, .carte:focus-within` : `border-color` passe à `var(--bordure-forte)`, ombre `var(--ombre-2)`, `transform: translateY(-2px)`, le tout en `var(--mvt-moyen)` = 220 ms — annulé par la règle `prefers-reduced-motion` d'`actio.css` (l. 10-16). `.carte__titre a::after { inset: 0 }` : carte entièrement cliquable, `:focus-within` garantissant que l'état de survol est aussi rendu au clavier. État vide : une section à moins de trois cartes laisse un vide en fin de ligne ; règle éditoriale — publier par multiples de trois ou n'afficher que deux colonnes.

**Accessibilité.** `<section id="regulation" aria-labelledby="titre-regulation">` ; chaque carte est un `<article>` ; le titre de carte est un `h3` contenant l'unique lien. Ordre de tabulation : lien « Toutes les analyses », puis carte 1, 2, 3.

---

### 2.6 Bloc schéma — le cheminement de conformité

**Rôle.** Rendre visible en un objet ce qu'aucun texte unique ne dit : le parcours d'inscription d'une plateforme n'existe qu'en creux, reconstitué à partir d'avis du personnel, de conditions d'inscription et de dispenses. C'est le format signature d'Actio et la principale raison de revenir sur le site.

**Grille.** `.schema` occupe la pleine largeur du conteneur (1224 px), hors grille à 12 colonnes. À l'intérieur, `.schema__corps { padding: var(--e-6); overflow-x: auto }` et `.flux { display: flex; gap: var(--e-3); min-width: 720px }`. Cinq étapes en `flex: 1` : **225,6 px** chacune à 1320 px ((1224 − 48 − 48) / 5), et **134,4 px** au plancher de 720 px, en dessous duquel le bloc **défile horizontalement** au lieu de s'empiler. Décision assumée : un cheminement séquentiel perd son sens s'il devient une pile verticale.

**Espacements.** `.schema__entete { padding: var(--e-5) var(--e-6) }` = 20 / 24 px, sur fond `var(--fond-surface-2)` avec filet bas. `.schema__corps { padding: var(--e-6) }` = 24 px. `.flux__etape { padding: var(--e-4); gap: var(--e-2) }` = 16 / 8 px, rayon `var(--rayon-2)` = 6 px. `.schema__pied { padding: var(--e-3) var(--e-6); gap: var(--e-4) }`.

**Typographie.** `.schema__titre` : `var(--t-h4)` = `clamp(1,3125rem, 1,22rem + 0,42vw, 1,5rem)` → 21 à 24 px, Source Serif 4, 700. `.schema__sous` : 13 px, `max-width: 62ch` — mesure de lecture imposée, à ne pas élargir. `.flux__num` : 11 px IBM Plex Mono, graisse 700, `letter-spacing: .08em`, couleur `var(--actio-bleu-palais)`. `.flux__nom` : `var(--t-h6)` = 17 px, Source Serif 4, 700, `--lh-moyen`. `.flux__detail` : 11 px, `--lh-dense` 1,45. `.schema__pied` : 11 px IBM Plex Mono, `var(--texte-tertiaire)`.

**Couleurs.** Cadre : `var(--fond-surface)`, filet `var(--bordure)`, rayon `var(--rayon-3)` = 10 px. Étape ordinaire : fond `var(--fond-surface-2)`, filet `var(--bordure-douce)`. Étape de bascule : `.flux__etape--actuel { border-color: var(--actio-turquoise); background: var(--actio-turquoise-pale) }` — #E2F6F3 en clair, `rgba(53,214,196,.14)` en sombre. Contrastes mesurés sur l'étape de bascule : nom 15,6:1, détail 6,7:1, numéro 9,9:1.

**Contenu (cité).** Titre : « Le chemin de conformité d'une plateforme de négociation de cryptoactifs au Canada ». Sous-titre : « Depuis l'annonce des ACVM du 6 août 2024, la voie du courtier restreint à durée limitée n'est plus la destination : elle n'est qu'une étape vers l'inscription de courtier en placement et l'adhésion à l'OCRI. Le parcours se double d'un second guichet, fédéral et provincial, en matière de lutte contre le blanchiment. »

| Étape | Libellé | Contenu essentiel |
|---|---|---|
| ÉTAPE 01 | Engagement préalable | Dépôt de l'engagement préalable à l'inscription (EPI) auprès de l'autorité principale ; conditions d'exploitation immédiatement opposables. |
| ÉTAPE 02 | Courtier restreint | Inscription transitoire assortie de conditions et de dispenses : plafonds d'achat pour les investisseurs de détail, actifs négociables limités, obligations de garde. |
| **ÉTAPE 03 · POINT DE BASCULE** | Demande de courtier en placement | « Depuis le 6 août 2024, c'est la seule trajectoire ouverte : capital réglementaire, gouvernance, personnes désignées responsables, contrôle interne. » |
| ÉTAPE 04 | Adhésion à l'OCRI | Application des règles de l'organisme, dont le cadre de garde des actifs numériques et le classement des dépositaires par paliers. |
| EN PARALLÈLE | Guichet LBC/FT | Inscription d'ESM auprès du CANAFE (fédéral) et, au Québec, permis d'entreprise de services monétaires délivré par **Revenu Québec** — et non par l'AMF. |

**Pourquoi l'étape 03 est le point de bascule.** Parce que c'est la seule étape où le régime change de nature. Les étapes 01 et 02 relèvent d'un dispositif transitoire construit par avis du personnel ; l'étape 03 fait entrer la plateforme dans la catégorie d'inscription de droit commun du Règlement 31-103, avec exigences de capital réglementaire, de gouvernance et de contrôle interne. C'est aussi le point de non-retour : depuis le communiqué du 6 août 2024, les ACVM n'acceptent plus de nouveaux engagements préalables comme porte d'entrée durable. La mise en évidence turquoise ne signale donc pas « l'étape où l'on en est », mais **l'étape où le régime cesse d'être intérimaire**.

Le cinquième bloc porte « EN PARALLÈLE » et non « ÉTAPE 05 » : le guichet LBC/FT n'est pas une suite chronologique mais une filière distincte, fédérale et provinciale, qui court pendant tout le parcours. La mention « Revenu Québec — et non par l'AMF » corrige l'erreur la plus fréquente de la presse spécialisée (fiche 02, § synthèse, point 3 : la LESM est administrée par Revenu Québec depuis le 13 septembre 2021).

**Règles de mise en page des schémas d'Actio (opposables).**

1. Tout schéma est encadré dans `.schema` — jamais posé nu dans le flux d'article.
2. `.schema__pied` porte **trois mentions obligatoires**, dans cet ordre : la source (« Source : reconstitution Actio d'après les avis du personnel des ACVM et le cadre de l'OCRI »), la date d'arrêté (« Arrêté au 4 septembre 2026 »), la portée (« Schéma pédagogique — ne constitue pas un avis juridique »). Aucun schéma ne peut être publié sans ces trois lignes.
3. La date d'arrêté est en pied ici mais doit être **répétée en tête** dans les tableaux comparatifs, conformément à l'enseignement du benchmark (fiche 08).
4. Le mot « reconstitution » est obligatoire dès que le schéma agrège plusieurs instruments : il signale que la séquence n'est écrite nulle part telle quelle.
5. Un bouton `.btn--secondaire` « Version imprimable » est présent en en-tête : un schéma d'Actio doit être imprimable en A4 paysage sans perte, parce qu'il finit en pièce jointe de note interne.
6. Une seule étape peut porter `--actuel` ; les étapes conditionnelles portent `--futur`.

> **Défaut 12 — étapes « futures » sous le seuil de contraste.** `.flux__etape--futur { opacity: .72 }` s'applique à tout le bloc, texte compris : `.flux__detail` (11 px) tombe à **3,5:1** sur `--fond-surface-2`, sous le seuil de 4,5:1. Correction sans nouvelle couleur : supprimer l'`opacity` et exprimer la futurité par la forme — `border-style: dashed` sur `var(--bordure)` et `.flux__etape--futur .flux__num { color: var(--statut-neutre) }`, qui tient **4,8:1**.
>
> **Défaut 13 — flèche de liaison rognée de 5 px.** `.flux__etape::after` est posée à `right: calc(var(--e-3) * -1 - 5px)` = −17 px alors que la gouttière ne fait que 12 px : le glyphe déborde de 5 px sur l'étape suivante, dont le fond opaque le recouvre (les frères sont `position: relative` sans `z-index`, donc peints dans l'ordre du DOM). Correction : `right: calc(var(--e-3) * -1)` avec `transform: translate(-50%, -50%)` et `left: 100%`.

---

### 2.7 Guides pédagogiques — trois paliers

**Rôle.** Constituer le socle permanent qui capte la recherche organique, sans reprendre le modèle du média grand public (guides de trading, analyse technique sérialisée). Ici la progression n'est pas « débutant → trader » mais « contribuable → conformité ». Le palier 3 est adressé aux directions de la conformité, aux cabinets et aux administrateurs : c'est l'entonnoir vers l'offre payante, nommé explicitement dans le pied de carte.

**Grille.** Trois `.palier.col-4` de 392 px ; 6 colonnes à 1024 px ; 12 à 640 px. `.palier { display: grid; gap: var(--e-4); padding: var(--e-6); height: 100% }` = 16 px de gouttière interne, 24 px de rembourrage. `.palier__pied { margin-top: auto }` aligne les pieds des trois cartes.

**Typographie.** `.palier__niveau` : 11 px IBM Plex Mono, majuscules, `letter-spacing: .08em`, `var(--texte-tertiaire)`. `.palier__titre` : `var(--t-h5)` → 18 à 20 px, Source Serif 4, 700. `.palier__desc` : 13 px, `--lh-moyen`. `.palier__liste li` : 13 px, `padding-left: var(--e-5)` = 20 px, puce remplacée par un tiret de 10 × 2 px en `var(--bordure-forte)` positionné à `top: .62em`.

**Jauge de niveau.** `.palier__jauge` contient exactement **trois `<i>`** de 16 × 4 px, rayon 2 px, `gap: 3px`, tous en `var(--bordure-forte)` par défaut. La coloration est purement sélectorielle : `.palier--n1 .palier__jauge i:nth-child(-n+1)`, `--n2 … (-n+2)`, `--n3 … (-n+3)`. Le nombre de segments allumés **est** le niveau ; il n'y a pas d'attribut à saisir. Le filet supérieur de 3 px de la carte reprend la même couleur, ce qui fait de la jauge et du filet un seul signal :

| Palier | Filet et jauge | Jeton clair / sombre | Titre | Volume |
|---|---|---|---|---|
| Niveau 1 · Débutant | 1 segment | `--statut-conforme` #0E7C5A / #3FCB96 | « Déclarer ses cryptoactifs au Canada » | 4 guides · ~45 min |
| Niveau 2 · Intermédiaire | 2 segments | `--actio-bleu-palais` #0F3D68 / #4E9BE0 | « Régimes enregistrés, jalonnement et revenus étrangers » | 4 guides · ~1 h 10 |
| Niveau 3 · Professionnel | 3 segments | `--jur-ontario` #6B4FA8 / #A991E8 | « Conformité des plateformes et garde d'actifs » | 4 guides · ~2 h · **Actio Pro** |

**Contenu (cité).** Palier 1 : « Le socle : savoir si une opération est imposable, sous quelle qualification, et quoi conserver comme pièce justificative. » — quatre entrées, dont « Gain en capital ou revenu d'entreprise : les critères que retient l'ARC » et « Québec : ce que Revenu Québec traite différemment ». Palier 2 : « REER et CELI : pourquoi la détention directe reste fermée, et ce qui s'y loge », « Jalonnement : revenu au moment de la réception, ou à la disposition ? », « Formulaire T1135 : quand un cryptoactif devient un bien étranger déterminé ». Palier 3 : « Du courtier restreint à l'OCRI : monter un dossier d'inscription », « CANAFE et Revenu Québec : cumuler deux régimes d'ESM sans angle mort ».

Le titre du guide « Jalonnement : revenu au moment de la réception, ou à la disposition ? » est **correctement formulé en question**, ce qui est obligatoire : la fiche 05 (incertitude 6) interdit d'attribuer à l'ARC une position formelle sur le jalonnement, faute d'interprétation technique identifiée. Un titre affirmatif serait fautif.

**États.** `.palier__liste a:hover { color: var(--texte-lien); text-decoration: underline }`. Aucune zone cliquable étendue : la carte contient quatre liens distincts, l'ajout d'un `::after { inset: 0 }` les rendrait inatteignables. Focus visible par la règle globale. Contraste : `.palier__niveau` en `--texte-tertiaire` sur `--fond-surface` = **5,5:1** ; jauge éteinte `--bordure-forte` sur `--fond-surface` = contraste non textuel à vérifier au moment du gel de la maquette.

**Accessibilité.** `.palier__jauge` est `aria-hidden="true"` : le niveau est déjà porté par le texte adjacent « Niveau 1 · Débutant ». Ordre de tabulation : « Tous les guides », puis les 12 liens des trois paliers dans l'ordre du DOM.

---

### 2.8 Appel à l'abonnement — anatomie de conversion et conformité LCAP

**Rôle.** Convertir sans jamais franchir la frontière entre information et sollicitation, et surtout : **démontrer la conformité en l'exécutant**. Un média de conformité qui pré-cocherait une case de consentement serait inaudible. Le bloc est donc autant une pièce de démonstration qu'un formulaire.

**Grille.** `<section id="infolettre">` est **hors du `.contenant` principal** : c'est un frère du `div.contenant` de `<main>`, ce qui lui donne son propre conteneur et un rembourrage vertical plein de `var(--e-16)` = 64 px haut et bas (la règle `.section + .section` ne s'applique pas). `.infolettre` : pleine largeur du conteneur, `border-radius: var(--rayon-4)` = 16 px. `.infolettre__inner { padding: var(--e-12) var(--e-10) }` = 48 px vertical, 40 px horizontal, ramené à `var(--e-8) var(--e-5)` = 32 / 20 px sous **640 px**. `.infolettre__form { max-width: 620px }` ; `.champ { flex: 1 1 260px }` : le champ et le bouton se replient l'un sous l'autre dès que la largeur disponible passe sous ~ 420 px.

**Typographie et couleurs.** Panneau inversé : fond `var(--fond-inverse)`, texte `var(--texte-inverse)`, plus deux dégradés radiaux en `::before` (turquoise à 26 % en haut à droite, bleu-palais-clair à 24 % en bas à gauche), `pointer-events: none`. `.infolettre__sur` : 11 px, majuscules, 0,085 em, `var(--actio-turquoise)`. `.infolettre__titre` : `var(--t-h2)` avec `max-width: 22ch` — mesure courte volontaire, le titre doit tenir en deux lignes. `.infolettre__promesse` : `var(--t-lead)`, `opacity: .88`, `max-width: 56ch`. `.infolettre__chiffre` : `var(--t-h4)` en IBM Plex Mono, graisse 700. Contraste mesuré du texte principal sur le point le plus clair du dégradé : **10,8:1** ; des mentions à `opacity: .78` : **7,2:1**.

**Promesse de valeur (citée).** Surtitre « Actio Dispatch · l'infolettre ». Titre : « Le mardi matin, ce qui a changé dans le droit canadien des cryptoactifs. » Promesse : « Une édition par semaine : le décryptage d'un acte réglementaire, le radar des juridictions (Ottawa, Québec, Ontario, international) avec son niveau d'impact, et un point de fiscalité appliqué à un cas réel. Lu en huit minutes. Sourcé, daté, sans conseil d'achat. »

La promesse énonce une **structure** (trois rubriques nommées), une **durée** (huit minutes), une **fréquence** (une par semaine) et une **exclusion** (« sans conseil d'achat »). L'exclusion est la partie la plus importante : elle est cohérente avec l'avertissement du pied de page selon lequel Actio n'est inscrite à aucun titre.

**Preuves affichées.** Trois blocs `.infolettre__preuve`, séparés d'`var(--e-6)` = 24 px, encadrés haut et bas par `border-block: var(--trait) solid color-mix(in srgb, var(--texte-inverse) 18%, transparent)` :

| Chiffre | Étiquette | Nature de la preuve |
|---|---|---|
| « Mardi · 6 h 30 » | Heure de l'Est | Engagement de ponctualité, vérifiable par le lecteur dès la première semaine. |
| « 8 min » | Temps de lecture | Engagement de format ; borne le coût d'attention. |
| « 100 % » | Sources primaires citées | Engagement éditorial, le seul qui distingue Actio d'un agrégateur. |

Aucun chiffre d'audience n'est affiché. C'est un arbitrage : le benchmark montre que les chiffres auto-déclarés et non audités (« 10 millions de visites ») sont l'argument d'autorité standard du secteur, et qu'ils sont sans valeur devant un lectorat juriste.

**Conformité LCAP — détail exécutable.**

| Exigence | Implémentation dans le prototype | Emplacement |
|---|---|---|
| Consentement exprès, **jamais pré-coché** | `<input type="checkbox" name="consentement">` sans attribut `checked` | `index.html` l. 553 |
| Case distincte de l'envoi | `<label class="infolettre__consentement">` séparé du `div.infolettre__form` | l. 552-561 |
| Finalités énoncées au moment de la collecte | « Je consens expressément à recevoir l'infolettre *Actio Dispatch* et les communications électroniques commerciales d'Actio, conformément à la **Loi canadienne anti-pourriel (LCAP)**. » | l. 555-557 |
| Mention du droit de retrait | « Ce consentement peut être retiré en tout temps par le lien de désabonnement présent dans chaque message. » | l. 557-558 |
| Renvoi aux politiques | Liens « politique de confidentialité » et « conditions d'utilisation » en `var(--actio-turquoise)` | l. 558-559 |
| Blocage de l'envoi sans consentement | `actio.js` l. 220-227 : message « Le consentement exprès est requis par la Loi canadienne anti-pourriel (LCAP). » puis `consent.focus()` | `actio.js` |
| Preuve du consentement | Message de succès : « En production : double opt-in, horodatage du consentement et journalisation de la preuve (art. 13 LCAP). » | `actio.js` l. 229-231 |

Le renvoi à l'art. 13 LCAP (fardeau de la preuve du consentement pesant sur l'expéditeur) est **[À VÉRIFIER]** : la fiche 06 indique que seul l'art. 33 a pu être confirmé sur source et marque explicitement l'art. 13 comme non vérifié. Tant que la vérification n'est pas faite, le message d'état doit citer l'obligation sans le numéro d'article.

**Bandeau de réassurance — position et contenu.** `.infolettre__reassurance` est placé **après** la case de consentement, à `margin-top: var(--e-5)` = 20 px, en 11 px, `opacity: .78`, chaque mention préfixée d'un « ✓ » turquoise généré en CSS. Quatre mentions : « Une seule édition par semaine » — « Désabonnement en un clic, traité sous 10 jours ouvrables » — « Aucune revente ni cession de vos renseignements » — « Données hébergées au Canada ».

La position est un arbitrage : la réassurance suit le consentement au lieu de le précéder, pour que le geste positif du lecteur ne soit pas noyé sous quatre promesses. Le délai de **10 jours ouvrables** correspond au délai de traitement de la désinscription retenu par la fiche 06 (point 2) et est repris à l'identique dans le pied de l'infolettre `newsletter/actio-dispatch-001.html`. La mention « Données hébergées au Canada » est un engagement lourd : la fiche 06 (§ 6) rappelle qu'une communication de renseignements personnels hors Québec impose une évaluation des facteurs relatifs à la vie privée préalable et documentée. Cette mention ne peut être publiée avant que le prestataire d'envoi soit choisi et l'EFVP conclue.

Le bandeau de réassurance ne remplace pas les mentions obligatoires par envoi — identification de l'expéditeur, adresse postale valide au moins 60 jours, mécanisme d'exclusion fonctionnel au moins 60 jours — qui vivent dans le pied de l'infolettre, non sur cette page.

**États.** Champ au repos : fond `color-mix(in srgb, var(--texte-inverse) 8%, transparent)`, filet à 30 % — contraste de bordure contre le panneau : **3,1:1**, la valeur non textuelle la plus serrée de la page. Au focus : `border-color: var(--actio-turquoise)`, fond porté à 12 %. Erreur d'adresse : « Adresse de courriel non valide. » et focus rendu au champ. Erreur de consentement : voir tableau. Succès : message de prototype. Le conteneur d'état est `<p role="status" aria-live="polite" data-etat>` avec `min-height: 1.4em` — la réserve de hauteur évite le saut de mise en page à l'apparition du message. Après succès, `actio.js` vide le champ et **décoche** la case (l. 233-236).

> **Défaut 14 — ordre de tabulation contraire à la logique du consentement.** Dans le DOM, la case de consentement suit le bouton d'envoi. Un usager au clavier atteint donc « Recevoir Actio Dispatch » **avant** d'avoir rencontré la case. Le script bloque bien l'envoi et renvoie le focus à la case, mais un blocage n'est pas un parcours. Correction : déplacer le `<label class="infolettre__consentement">` **avant** le `<div class="infolettre__form">` dans le DOM. L'ordre visuel peut être rétabli par `order` sur le conteneur flex, mais l'ordre de tabulation suit le DOM et c'est lui qui compte ici.
>
> **Défaut 15 — valeur brute `#06231F`.** `.infolettre .btn--primaire { color: #06231F }` n'est pas un jeton. Voir la correction proposée au défaut 10 (`--texte-sur-turquoise` = #0E1A2B, fixe dans les trois blocs). Contraste actuel 6,5:1, contraste corrigé 6,8:1.

---

### 2.9 Pied de page institutionnel

**Rôle.** Porter la charge légale que la page ne peut pas porter plus haut sans devenir illisible : périmètre d'activité, absence d'inscription, avertissement sur les risques, liens vers les registres officiels, pages de gouvernance. C'est la contrepartie du refus de la monétisation visible en tête de page — la crédibilité se paie ici, en densité.

**Grille.** `.pied { margin-top: var(--e-20) }` = 80 px, fond `var(--fond-surface-2)`, filet supérieur `var(--trait-fort)` = 2 px en `var(--texte-primaire)`. `.pied__principal.grille { padding-block: var(--e-12) var(--e-10) }` = 48 px / 40 px. Quatre colonnes : `col-4` (392 px, identité et adresse) + `col-2` (**défectueuse, cf. § 2.0**) + `col-3` (288 px, registres) + `col-3` (288 px, transparence).

**Typographie et couleurs.** `.pied__colonne h3` : 11 px, majuscules, 0,085 em, `var(--texte-tertiaire)` — **4,8:1** sur `--fond-surface-2`. `.pied__liste a` : 13 px, `var(--texte-secondaire)` = **6,6:1**, passage à `var(--texte-primaire)` et soulignement au survol. Les liens externes portent `rel="external noopener"` et reçoivent une flèche « ↗ » générée à 0,85 em en `var(--texte-tertiaire)` — signal visuel de sortie de site, indispensable quand la destination est un régulateur. L'adresse est en `var(--police-donnee)` à `var(--t-micro)` : « Actio Média inc. / 1000, rue De La Gauchetière Ouest, bureau 2400 / Montréal (Québec) H3B 4W5, Canada / redaction@actio.ca » — la même adresse postale que celle du pied de `newsletter/actio-dispatch-001.html`, conformément à l'obligation LCAP d'adresse postale valide.

**Encadré d'avertissement.** `.avertissement` : filet complet `var(--statut-alerte)` plus filet gauche de 3 px, fond `var(--statut-alerte-pale)`, `padding: var(--e-5) var(--e-6)`, `margin-block: var(--e-8)` = 32 px. Titre en 11 px majuscules `var(--statut-alerte)` précédé d'un « ⚠ » en `aria-hidden`. Trois paragraphes de 13 px à interlignage 1,62 :

1. Absence de conseil et absence d'inscription — « **Actio ne fournit ni conseil en placement, ni conseil juridique, ni conseil fiscal.** Actio n'est inscrite à aucun titre auprès des Autorités canadiennes en valeurs mobilières, de l'Autorité des marchés financiers, de la Commission des valeurs mobilières de l'Ontario ou de l'Organisme canadien de réglementation des investissements […] ».
2. Nature journalistique et **péremption du droit** — « Ils décrivent un état du droit à une date donnée ; le droit évolue, et une analyse exacte à sa date de publication peut cesser de l'être. »
3. Risque de perte totale et **absence de protection en cas d'insolvabilité** d'une plateforme non inscrite, avec l'injonction de vérifier l'inscription au registre provincial.

Ces trois paragraphes ne sont pas interchangeables : le premier écarte la qualification d'activité inscrite, le deuxième écarte la responsabilité liée à l'obsolescence, le troisième renvoie au registre — et referme ainsi la boucle ouverte par l'indicateur de conformité du § 2.2.

**Colonne « Registres et sources officielles ».** Sept liens sortants : ACVM, AMF, CVMO, OCRI, CANAFE, **Revenu Québec — permis d'ESM**, Gazette du Canada. L'intitulé « Revenu Québec — permis d'ESM » est délibéré : il corrige, dans le pied de page lui-même, la confusion AMF / Revenu Québec.

**Colonne « Transparence ».** Sept pages de gouvernance : charte éditoriale et indépendance, politique sur les partenariats rémunérés, politique d'affiliation et de divulgation, méthode de vérification des sources, politique de correction, conflits d'intérêts de la rédaction, « Nous signaler une erreur ». Aucune n'est écrite : sept livrables à produire, condition de crédibilité du bloc.

**Bande légale.** `.pied__legal` : filet haut, `padding-block: var(--e-6)` = 24 px, 11 px en `var(--texte-tertiaire)`. « © 2026 Actio Média inc. Tous droits réservés. Prototype non publié. » puis six liens sous `<nav aria-label="Liens légaux">`, dont « Politique de confidentialité (Loi 25 / LPRPDE) » et « Accessibilité (WCAG 2.1 AA) ». Ce dernier libellé est un **engagement volontaire** : la fiche 06 (points 9-10) établit que la Loi canadienne sur l'accessibilité ne vise que les entités sous réglementation fédérale et que la LAPHO ontarienne exige WCAG 2.0 AA au-delà de 50 employés. La page d'accessibilité devra donc dire que la norme est une norme éditoriale choisie, non une obligation légale invoquée.

**États et accessibilité.** Aucun état dynamique. 26 liens, soit plus du tiers des arrêts de tabulation de la page : le lien d'évitement en tête est ce qui rend cette densité acceptable. `role="note"` sur l'encadré d'avertissement.

---

### 2.10 Ordre de lecture et hiérarchie visuelle

La page compte **68 arrêts de tabulation** en disposition large (le bouton `.burger` étant en `display: none`, donc hors séquence), répartis ainsi : 15 avant `<main>`, 4 à la une, 4 en section Régulation, 1 au schéma, 13 aux guides, 5 à l'infolettre, 26 au pied de page.

L'ordre d'apparition est le suivant : probité → conformité → identité → analyse longue → sources primaires → mécanisme → pédagogie → abonnement → charge légale. Un média cryptoactif grand public ordonne l'inverse : cotations en tête et en direct, sélection d'actifs, comparatif de plateformes monétisé, guides d'entrée en position d'entonnoir, avertissement de risque en pied de page.

| Ce que fait un média cryptoactif grand public | Ce que fait cette page | Justification |
|---|---|---|
| Cotations animées en position dominante | Bandeau de 8 px de rembourrage, valeurs figées, non collant | Le cours n'est pas l'information ; il est le prétexte de la visite. |
| Extrémité droite du bandeau vendue (indice, promotion) | Lien vers le registre des plateformes | Seul emplacement rentable de la page, cédé à l'intérêt du lecteur. |
| Une actualité chaude en tête | Une analyse de 11 min sur une décision de 2025 | La valeur d'Actio est la profondeur, non la fraîcheur. |
| Accroches tronquées | Résumé exécutif encarté dans chaque carte | Le lecteur doit pouvoir décider sans cliquer. |
| Listicle prescriptif (« Top 7 des cryptos ») | Schéma de cheminement de conformité | Un média de réglementation ne classe pas des actifs. |
| Guides « débutant → trading » | Paliers « contribuable → conformité » | La progression suit une charge d'obligation, non un appétit de risque. |
| Avertissement de risque en pied, une ligne | Encadré de trois paragraphes en `--statut-alerte` | L'avertissement est un contenu, pas une formalité. |

Trois dispositifs typographiques portent seuls la hiérarchie, sans recours à la couleur : la mesure (`22ch` pour le titre d'infolettre, `62ch` pour le sous-titre de schéma, `56ch` pour la promesse, `36ch` pour la présentation en pied de page), le contraste de famille (Source Serif 4 pour tout ce qui est éditorial, Inter pour tout ce qui est étiquette, IBM Plex Mono pour tout ce qui est donnée, date, durée ou adresse), et le filet — 2 px sous chaque titre de section, 3 px pour les rubriques et les filets de résumé exécutif, 1 px pour les séparations internes.

La règle de famille est opposable et se vérifie mécaniquement : **toute date, toute durée, tout symbole de cotation et toute adresse doivent être en `var(--police-donnee)`**. C'est ce qui permet à l'œil de distinguer, dans une même ligne de métadonnées, ce qui est affirmation éditoriale de ce qui est fait daté.

---

### 2.11 Ce que la page ne fait pas, et pourquoi

**Pas de compteur de peur ni d'indice de sentiment.** Un indice de peur et d'avidité est une opinion présentée comme une mesure. Sur un média dont l'avertissement affirme ne fournir « ni conseil en placement, ni conseil juridique, ni conseil fiscal », afficher un curseur qui indique s'il faut acheter ou vendre serait contradictoire dans le même écran.

**Pas de classement de plateformes monétisé.** Le benchmark éditorial identifie le comparatif affilié comme le cœur monétaire du modèle dominant. Trois raisons de le refuser : l'inscription varie par province, ce qui rend structurellement trompeur tout tableau unique « meilleures plateformes au Canada » sans colonne juridiction ; un comparatif mettant en avant une plateforme inscrite peut s'analyser comme du matériel de marketing diffusé pour son compte, hypothèse que l'Avis 21-330 rend non théorique **[À VÉRIFIER sur le texte de l'avis]** ; et le millésime dans le titre force une réécriture annuelle qui vieillit mal en droit. `registre.html` remplace le comparatif : mêmes colonnes utiles — statut d'inscription, autorité principale, provinces couvertes, régime LBC/FT, dernière décision, fiche officielle — sans classement ni recommandation.

**Pas de widget de prix clignotant.** Aucune animation n'existe sur la page hors les 120 à 220 ms de transition des états de survol, elles-mêmes désactivées sous `prefers-reduced-motion`. Un cours qui clignote crée un sentiment d'urgence ; l'urgence est l'outil du vendeur.

**Pas de promotion publiée comme article.** Le seul appel à l'action commercial est le bloc `#infolettre`, identifié comme tel, hors du fil éditorial. Rien dans `.une` ni dans `.section` ne mène à une offre payante, sauf la mention « Actio Pro » du palier 3, qui figure en pied de carte à 11 px et non dans un titre.

**Pas de chiffre d'audience auto-déclaré.** Les trois preuves de l'infolettre sont des engagements tenables (jour, heure, durée, taux de citation), pas des mesures invérifiables.

**Pas de compte à rebours, pas de rareté.** Aucun mécanisme de pression temporelle n'existe dans le balisage.

---

### 2.12 Ce qui reste à trancher

1. **L'indicateur de conformité doit-il survivre au défilement ?** Aujourd'hui il disparaît au premier défilement tandis que « S'abonner » reste collant. Trois options : dupliquer une pastille compacte dans `.entete__actions` ; rendre `.cotations` collant sous `.entete` (coût : 40 px de hauteur permanente) ; assumer la disparition. Décision nécessaire avant le gel de la maquette.
2. **Méthode de calcul du temps de lecture.** Aucune n'est fixée. Il faut une formule écrite (mots par minute, traitement des tableaux et des schémas, arrondi) et son inscription dans la charte, faute de quoi « 11 min » est un chiffre sans auteur.
3. **État d'erreur du flux de cotations en production.** Spécifié à zéro. Que montre le bandeau si le fournisseur sous licence ne répond pas — dernière valeur horodatée, tiret, ou disparition du bandeau ?
4. **Sort du bandeau de probité au lancement.** Il disparaît, mais que devient le lien « registre de vérification » qu'il porte ? Proposition : le déplacer dans la colonne Transparence du pied de page, en huitième entrée.
5. **Les quinze défauts listés ci-dessus**, dont quatre d'accessibilité mesurés sous le seuil AA (défauts 2, 4, 9, 12), un d'ordre de tabulation à portée juridique (défaut 14), un de grille (défaut 1) et deux d'exactitude éditoriale (défauts 8 et 11). Les quatre défauts de contraste se corrigent tous sans introduire une seule couleur nouvelle.
6. **Les sept pages de gouvernance** listées dans la colonne Transparence et le registre de vérification n'existent pas. Tant qu'ils n'existent pas, le pied de page promet une transparence qu'il ne livre pas — ce qui est le seul reproche auquel ce projet ne peut pas survivre.
