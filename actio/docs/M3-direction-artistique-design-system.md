# Module 3 — Direction artistique et design system

> **Source de vérité.** `prototype/assets/tokens.css`. Toute valeur citée ci-dessous en est extraite
> textuellement ; chaque rapport de contraste a été calculé à l'écriture du fichier de jetons (70
> paires) puis mesuré sur le DOM rendu par `tools/verifier.mjs`, en clair et en sombre, sur les six
> pages du prototype. Une valeur absente du fichier n'existe pas pour Actio ; une valeur du fichier
> employée hors de son usage autorisé est un défaut de conformité, pas une variante. Ce module
> remplace `docs/v1/L3-1-identite-marque.md` : la palette « Encre et Vélin » (bleu palais,
> turquoise, vélin) est retirée au profit de la palette imposée par le cahier des charges — bleu
> nuit, bleu royal, ambre régulateur.

**Ce que ce module livre, et où le trouver.**

| Élément | Fichier | Contrôlé par |
|---|---|---|
| Jetons de design (couleurs, typographie, espacement, grille, rayons, mouvement, plans) | `prototype/assets/tokens.css` | rapports calculés à l'écriture ; `tools/verifier.mjs` sur le DOM |
| Composants du site (BEM, CSS natif) | `prototype/assets/actio.css`, `prototype/assets/article.css`, `prototype/assets/registre.css` | `tools/docs.mjs` (classes citées existent), `tools/verifier.mjs` |
| Source Tailwind v4 : la palette par défaut effacée, chaque utilitaire renvoyé à un jeton | `prototype/composants/composants.tw.css` | `npm run tailwind` (compilation locale, sans CDN) |
| Feuille compilée, versionnée | `prototype/composants/composants.css` | `tools/composants.mjs` : chaque classe employée est compilée |
| Composant 1 — Badge de statut réglementaire | `prototype/composants/badge-statut.html` | `tools/composants.mjs` : aucune couleur en dur |
| Composant 2 — Encadré « En bref » / Points clés | `prototype/composants/encadre-en-bref.html` | idem |
| Composant 3 — Carte comparative de plateforme | `prototype/composants/carte-plateforme.html` | idem |
| Galerie : rendu + source des trois composants, commutateur de thème | `prototype/composants/index.html` | `tools/composants.mjs` injecte rendu et source ; `tools/verifier.mjs` (6ᵉ page) ; `tools/structure.mjs` |

---

## 1. Posture et identité

### 1.1 Le nom et la posture

**Actio**, en latin, ne désigne pas une idée : il désigne un acte. Le mot recouvre l'action en
justice, l'acte juridique, la capacité d'agir et la mise en mouvement procédurale — ce qui est
déposé, notifié, opposable, et qui produit un effet daté. C'est un nom de procédure, pas un nom
d'opinion.

L'étymologie engage trois disciplines. **La date** : un acte a une date d'effet, donc tout contenu
porte sa date d'arrêté (`.schema__pied` : « Arrêté au 4 septembre 2026 » ; `.comparateur__arrete` :
« Relevé du : — »). **La source** : un acte se prouve par la pièce, donc le gabarit d'article réserve
un bloc `.sources` numéroté et chaque page porte un bandeau `.demo` tant que la rédaction n'a pas
vérifié ce qu'elle affirme. **Le périmètre** : Actio publie ce qu'elle peut opposer et signale ce
qu'elle ne peut pas — `[À VÉRIFIER]` est un élément de charte, pas un aveu.

**La posture en une phrase :** *Actio établit ce qui est opposable, date ce qui ne l'est pas encore,
et refuse de combler l'écart.*

**Registre de voix.** Celui d'une note adressée à un responsable de la conformité pressé, lisible
par un investisseur de détail : phrase déclarative, sujet nommé, verbe d'obligation quand
l'obligation existe, conditionnel quand elle est incertaine. La une écrit « adoptée mais pas en
vigueur », jamais « le Canada encadre désormais ».

| On dit | On ne dit pas | Motif |
|---|---|---|
| cryptoactifs | crypto-monnaies, crypto-actifs | Terminologie officielle (OQLF, ACVM). Exception : « monnaie virtuelle » quand on cite la LRPCFAT, qui emploie ce terme |
| cryptoactif arrimé à une valeur (ACVM) · cryptomonnaie stable (loi fédérale) · stablecoin (titre grand public, entre guillemets à la première occurrence) | stablecoin en corps de texte juridique | Deux régimes, deux vocabulaires ; le mot anglais n'existe dans aucun texte canadien |
| inscription (courtier restreint, courtier en placement) | licence, agrément, permis | « Permis » est réservé à l'entreprise de services monétaires québécoise |
| OCRI (FR) · CIRO (EN) | OCRCVM, ACFM | Fusion de 2023 ; ces sigles n'existent plus au présent |
| pénalité administrative pécuniaire (CANAFE) · sanction administrative pécuniaire (CRTC, CAI) · pénalité administrative (TMF) | amende | L'amende est pénale ; les trois familles ne sont pas interchangeables |
| infolettre | newsletter | Terminologie officielle ; *Actio Dispatch — l'infolettre réglementaire et fiscale* |
| HE (heure de l'Est) | EST, EDT | L'Est bascule deux fois l'an ; `tools/emails.mjs` refuse EST/EDT |

### 1.2 La référence Cryptoast, et ce qu'Actio en retient

Le cahier des charges désigne Cryptoast.fr comme référence de structure. Ce qu'Actio en retient est
mesurable dans le prototype : le **mega-menu** par pilier (`.megamenu`), la **une 8/4** avec quatre
brèves horodatées (`.une__principal`, `.chaud`), le **badge jaune** sur fond sombre (`--encre-accent`
sur `--encre-fond`, le « jaune Cryptoast » transposé en ambre régulateur), le **comparateur**
avec méthode publiée au-dessus du tableau (`.comparateur__methode`), la **fiche auteur** qualifiée
(`.bio__qualifs`). Ce qu'Actio ne reprend pas : l'affiliation sans divulgation dans le corps
(l'Avis conjoint 21-330 des ACVM le rend impossible pour un média dont les lecteurs sont des
plateformes inscrites), le cours en titre, l'iconographie spéculative. Cryptoast est une
référence d'architecture, pas de ton.

---

## 2. Palette

### 2.1 La palette imposée et sa règle de dérivation

Le cahier des charges fixe sept couleurs. Prises telles quelles, trois d'entre elles ne peuvent pas
porter de texte : l'ambre `#F59E0B` tient 2,05:1 sur le fond clair, le vert `#10B981` 2,42:1, le
rouge `#EF4444` 3,60:1 — toutes sous le seuil AA de 4,5:1. Le fichier de jetons applique donc une
**règle de dérivation**, écrite en tête de `tokens.css` et opposable :

> Une valeur « 500 » est une couleur d'**aplat**. Sa variante « 700 » de même teinte est la couleur
> de **texte** en mode clair ; sa variante « 400 » est la couleur de texte en mode sombre.

| Rôle (cahier des charges) | Valeur imposée | Jeton | Usage autorisé | Variante texte clair (700) | Variante texte sombre (400) |
|---|---|---|---|---|---|
| Primaire — Bleu Nuit / Deep Navy (autorité) | `#0F172A` · `#0A1128` | `--marque-navy` · `--marque-navy-profond` | Texte principal (17,1:1), surfaces sombres, bandes d'encre, en-tête de courriel | — (déjà un texte) | `--encre-texte` `#F1F5F9` sur navy |
| Secondaire — Bleu Royal Électrique (action, Web3) | `#2563EB` · `#1E40AF` | `--marque-bleu` · `--marque-bleu-fonce` | Aplat des boutons (`--fill-primaire`, blanc dessus 5,2:1), barre du logo, filets ; **texte** en `#1E40AF` (8,3:1) | `#1E40AF` | `#93C5FD` |
| Accent — Ambre Régulateur (réglementation, or juridique) | `#F59E0B` · `#D97706` | `--marque-ambre` · `--marque-ambre-fonce` | Aplat des badges jaunes, étoiles du score, accent sur encre (8,7:1) ; **texte** en `#B45309` (4,5:1 sur pâle) — `#D97706` tombait à 3,2:1 et n'est pas retenu | `#B45309` | `#FCD34D` |
| Succès — statut conforme | `#10B981` | `--fill-conforme` | Aplat sous texte navy (7,0:1) ; **jamais sous du blanc** (2,5:1) ; texte en `--statut-conforme` `#047857` | `#047857` | `#34D399` |
| Alerte — mise en garde | `#EF4444` | — (rejeté comme aplat : 3,76:1 sous blanc) | Remplacé par `--fill-alerte` `#DC2626` (4,8:1 sous blanc) ; texte en `--statut-alerte` `#B91C1C` (5,3:1) | `#B91C1C` | `#F87171` |
| Fond clair | `#F8FAFC` | `--fond-page` | Fond de page en mode clair | — | — |
| Fond sombre | `#020617` | `--fond-page` (sombre) | Fond de page en mode sombre | — | — |

**Trois familles, trois usages, jamais mêlés.** (i) Les **couleurs de statut** (`--statut-*`) sont
des couleurs de **texte** ; elles s'éclaircissent en sombre et ne portent jamais de blanc. (ii) Les
**aplats** (`--fill-*`) sont invariants par thème et chacun déclare la couleur de texte qu'il admet
(`--fill-ambre-texte` `#0F172A`, `--fill-primaire-texte` `#FFFFFF`). (iii) Les **bandes d'encre**
(`--encre-*`) sont toujours sombres, dans les deux thèmes, ce qui les rend transposables telles
quelles dans un courriel (Module 2, § 2.2.1).

### 2.2 Couleurs de statut réglementaire

Un badge = un statut opposable, jamais décoratif. Cinq statuts fermés ; un sixième n'existe pas
tant qu'il n'a pas été ajouté ici et dans `tokens.css`.

| Statut | Sens | Texte (clair) | Fond pâle (clair) | Rapport | Texte (sombre) | Classe site | Utilitaires Tailwind |
|---|---|---|---|---|---|---|---|
| Alerte | Mise en garde, ordonnance, sanction, plateforme proscrite | `--statut-alerte` `#B91C1C` | `--statut-alerte-pale` `#FEE2E2` | 5,30:1 | `#F87171` (6,45:1 sur `#0F172A`) | `.badge--alerte` | `text-alerte bg-alerte-pale` |
| Consultation | Projet, consultation publique, texte édicté non en vigueur, donnée illustrative | `--statut-consultation` `#B45309` | `--statut-consultation-pale` `#FEF3C7` | 4,51:1 | `#FBBF24` (10,69:1) | `.badge--consultation`, `.donnee--nd`, `.baro__verif` | `text-consultation bg-consultation-pale` |
| Conforme | Inscrite, en vigueur, membre de l'OCRI | `--statut-conforme` `#047857` | `--statut-conforme-pale` `#D1FAE5` | 4,84:1 | `#34D399` (9,29:1) | `.badge--conforme` | `text-conforme bg-conforme-pale` |
| Info | Avis du personnel, position administrative, guide | `--statut-info` `#1E40AF` | `--statut-info-pale` `#DBEAFE` | 7,1:1 | `#60A5FA` (7,02:1) | `.badge--info` | `text-info bg-info-pale` |
| Neutre | Archivé, abrogé, remplacé | `--statut-neutre` `#475569` | `--statut-neutre-pale` `#F1F5F9` | 6,9:1 | `#94A3B8` | `.badge--neutre` | `text-neutre bg-neutre-pale` |

En mode sombre, les fonds pâles deviennent des fonds translucides composés sur la surface
(`rgba(248,113,113,.14)` pour l'alerte, etc.) : le texte 400 y tient au-dessus de 6:1 dans tous
les cas. L'étiquette éditoriale `.etiquette` (« Analyse », « Guide · Débutant ») n'a ni couleur de
statut, ni pastille, ni capitales : elle ne peut pas être confondue avec un badge, et c'est son
objet.

### 2.3 Couleurs de juridiction

Codage cartographique, employé **uniquement** par la pastille `.juridiction--*` (carré pivoté à
45°) et par les filets de gauche du Radar de l'infolettre — jamais comme fond d'un bloc de texte,
jamais mêlé à une couleur de statut sur une même surface.

| Ressort | Jeton | Clair | Sur blanc | Sombre |
|---|---|---|---|---|
| Fédéral — Ottawa, CANAFE, Banque du Canada | `--jur-federal` | `#1E40AF` | 8,72:1 | `#60A5FA` |
| Québec — AMF, Revenu Québec, TMF | `--jur-quebec` | `#0E7490` | 5,36:1 | `#22D3EE` |
| Ontario — CVMO, TMF ontarien | `--jur-ontario` | `#6D28D9` | 7,10:1 | `#A78BFA` |
| Harmonisé — ACVM, OCRI | `--jur-multi` | `#047857` | 5,48:1 | `#34D399` |
| International — OCDE, GAFI | `--jur-intl` | `#92400E` | 7,09:1 | `#FCD34D` |

Le commutateur de juridiction (`.commutateur`) ne colore pas l'interface : il filtre
(`:root[data-juridiction="quebec"]` masque les cartes `data-jur` étrangères). La couleur dit d'où
vient un texte ; elle ne dit jamais s'il est bon ou mauvais.

### 2.4 Surfaces, textes, bordures

| Jeton | Clair | Sombre | Usage |
|---|---|---|---|
| `--fond-page` | `#F8FAFC` | `#020617` | Fond de page |
| `--fond-surface` | `#FFFFFF` | `#0F172A` | Cartes, en-tête, pied |
| `--fond-surface-2` | `#F1F5F9` | `#1E293B` | Encarts, en-têtes de tableau, pied de courriel |
| `--fond-surface-3` | `#E2E8F0` | `#334155` | Surfaces creusées, survol |
| `--texte-primaire` | `#0F172A` (17,1:1) | `#F1F5F9` (18,4:1) | Corps, titres |
| `--texte-secondaire` | `#334155` (9,9:1) | `#CBD5E1` (13,6:1) | Chapôs, encadrés, méta |
| `--texte-tertiaire` | `#475569` (6,2:1 sur la surface la plus défavorable `#E2E8F0`) | `#94A3B8` (5,7:1) | Étiquettes, dates, notes |
| `--texte-lien` | `#1D4ED8` (6,4:1) | `#60A5FA` (7,9:1) | Liens dans le corps |
| `--bordure` · `--bordure-forte` · `--bordure-douce` | `#E2E8F0` · `#CBD5E1` · `#F1F5F9` | `#1E293B` · `#334155` · `#172033` | Filets, séparateurs, étoile vide du score |
| `--encre-fond` · `--encre-texte` · `--encre-texte-2` | `#0A1128` · `#F1F5F9` (17,1:1) · `#CBD5E1` (12,6:1) | `#0F172A` · idem | Bandeau de cotations, bloc d'abonnement, Chiffre de la semaine |
| `--encre-accent` · `--encre-hausse` · `--encre-baisse` · `--encre-stable` | `#F59E0B` (8,7:1) · `#34D399` (9,7:1) · `#F87171` (6,8:1) · `#94A3B8` (7,3:1) | invariants | Badge jaune sur nuit, variations de cours |
| `--demo-fond` · `--demo-texte` | `#92400E` · `#FFFFFF` (7,1:1) | invariants | Bandeau de probité du prototype |
| `--degrade-1/2/3` | `#0A1128` · `#1E3A8A` · `#2563EB` | invariants | Illustration de une (schéma SVG) ; blanc dessus 18,7 / 10,4 / 5,2 |

### 2.5 Mode sombre

Trois états, une seule mécanique. Le réglage « système » ne pose aucun attribut et
`@media (prefers-color-scheme: dark)` redéfinit les jetons sous `:root:not([data-theme="light"])` ;
un choix explicite pose `data-theme="dark"` ou `data-theme="light"` sur `<html>`, et
`:root[data-theme="dark"]` redéfinit les mêmes jetons pour que le choix prime dans les deux sens.
Le choix est mémorisé sous la clé `actio.theme` et rejoué avant le premier rendu par le script
anti-scintillement de chaque page. Règles : (i) jamais une couleur définie *seulement* dans un bloc
sombre ; (ii) `body` porte toujours `--fond-page` en fond ; (iii) les bandes d'encre et les aplats
ne bougent pas ; (iv) l'aplat primaire reste `#2563EB` dans les deux thèmes — `#3B82F6`, essayé en
sombre, tombait à 3,68:1 sous du blanc et a été rejeté par `tools/verifier.mjs`.

### 2.6 Règle d'accessibilité opposable

WCAG 2.1 AA : 4,5:1 pour le texte courant, 3:1 pour le grand texte (≥ 24 px, ou ≥ 18,66 px en
graisse 700) et les marqueurs graphiques. **Aplats autorisés sous du blanc** : `--fill-primaire`,
`--fill-primaire-survol`, `--fill-alerte`, `--demo-fond`, `--encre-fond`, `--degrade-1/2/3`.
**Aplats exigeant du texte navy** : `--fill-ambre` (8,3:1 navy, 2,2:1 blanc), `--fill-conforme`
(7,0:1 navy, 2,5:1 blanc), `--encre-accent` (8,3:1 navy). Aucune information n'est portée par la
seule couleur : chaque badge écrit son statut, chaque variation de cours porte « ▲ » ou « ▼ »,
chaque étiquette d'avantage ou d'inconvénient porte « + » ou « − ». La règle n'est pas
déclarative : `tools/verifier.mjs` mesure chaque paire texte/fond sur le DOM rendu, y compris les
pseudo-éléments et l'opacité cumulée des ancêtres, et fait échouer la suite sous le seuil.

---

## 3. Typographie

### 3.1 Les trois familles

| Rôle | Famille | Pile de repli | Jeton | Pourquoi celle-ci |
|---|---|---|---|---|
| Titres, chiffres de score, logotype | **Newsreader** (Production Type, SIL OFL) | Iowan Old Style, Georgia, Times New Roman, serif | `--police-titre` | Sérif contemporaine à tailles optiques (36 pt pour les titres, 9 pt pour les petits corps), cachet éditorial et juridique sans le pastiche du journal du XIXᵉ. Chiffres tabulaires confirmés (U-77). Retenue de préférence à Merriweather (plus large, moins de tailles optiques) et à Playfair Display (contrastes trop forts sous 24 px, chiffres non tabulaires) |
| Corps, interface, badges | **Plus Jakarta Sans** (Tokotype, SIL OFL) | -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif | `--police-texte` | Géométrique, très lisible sur mobile, œil large, jeu latin étendu complet (accents, œ, guillemets français). Retenue de préférence à Inter pour sa chaleur : Inter est un excellent Inter, mais tous les tableaux de bord l'emploient |
| Données, cotations, dates, étiquettes de juridiction, code | **JetBrains Mono** (JetBrains, SIL OFL) | SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace | `--police-donnee` | Chiffres tabulaires par construction, hauteur d'x élevée, ligatures désactivables. Retenue de préférence à Space Mono, dont le dessin excentrique fatigue en tableau |

Les trois sont sous licence SIL OFL 1.1 : redistribuables, auto-hébergeables, modifiables. Les
courriels ne les chargent pas (Module 2, § 2.2.2) : Georgia, Arial et Consolas y portent le rendu.

### 3.2 Échelle et graisses

Ratio 1,200, base 17 px, fluide de 360 à 1440 px par `clamp()` ; pas de point de rupture
typographique.

| Jeton | Valeur | Emploi |
|---|---|---|
| `--t-micro` | 11 px | Badges, étiquettes, dates, mentions |
| `--t-petit` | 13 px | Méta, encadrés, notes, corps des cartes |
| `--t-base` | 17 px | Corps de texte |
| `--t-lead` | 18 → 21 px | Chapô |
| `--t-h6` · `--t-h5` · `--t-h4` | 17 · 18 → 20 · 21 → 24 px | Titres de carte, intertitres |
| `--t-h3` · `--t-h2` | 24 → 29 · 28 → 38 px | Titres de section, H2 d'article |
| `--t-h1` · `--t-display` | 34 → 54 · 40 → 68 px | H1 d'article, titre de une |

Interlignages : `--lh-serre` 1,12 (titres), `--lh-moyen` 1,35, `--lh-dense` 1,45 (encadrés),
`--lh-texte` 1,7 (corps). Graisses : 400, 500, 600, 700 — jamais 300 ni 800. Interlettrage des
titres `--interlettre-titre` −0,012 em (Newsreader est déjà serrée), des étiquettes
`--interlettre-etiq` 0,08 em en capitales. Mesure de lecture `--mesure-lecture` 760 px, appliquée
au `.prose`, à `.en-bref`, à `.encadre`.

### 3.3 Auto-hébergement — exigence, non préférence

Le prototype charge ses polices depuis Google Fonts **à titre de démonstration seulement**, et
`tools/verifier.mjs` le signale à chaque exécution (« ressource tierce : fonts.googleapis.com »).
Charger une police depuis un tiers transmet l'adresse IP du lecteur à ce tiers : c'est une
communication de renseignement personnel au sens de la Loi 25, et aucune évaluation des facteurs
relatifs à la vie privée ne peut conclure tant qu'elle subsiste. En production (Module 4) : fichiers
`woff2` sous-ensemblés (latin étendu), servis depuis le domaine d'Actio avec `font-display: swap`,
`@font-face` déclaré dans `tokens.css`, et préchargement des deux fichiers de la première vue
(Newsreader 700, Plus Jakarta Sans 400).

---

## 4. Principes graphiques

### 4.1 Logotype

Le logotype est **textuel**, jamais une image :
`<a class="logo"><span>Actio</span><span class="logo__point" aria-hidden="true">|</span></a>`.
Newsreader 700, 26 px en en-tête, interlettrage −0,02 em, couleur `--texte-primaire`. Le signe
n'est plus un point (v1) mais une **barre verticale** de 3 × 0,62 em en `--marque-bleu`
(`.logo__point`) : le trait « techno » demandé par le cahier des charges, posé sur la sérif
juridique. Il se lit comme un curseur ou une marge de texte — la marque agit, elle ne conclut pas.
Le caractère « | » reste dans le DOM pour la copie du texte, masqué visuellement
(`text-indent: -999px`). Corps minimal 16 px ; en deçà, la barre se confond avec un « l ». Dans le
courriel, la barre est le caractère « | » en `#2563EB`, graisse normale, précédé d'une espace fine.

### 4.2 Iconographie

Actio emploie : la barre verticale du logo ; le carré pivoté à 45° des juridictions ; la pastille
ronde de 6 px des statuts (`.badge::before`) ; le losange des puces « En bref » et des lignes de
Radar ; le filet éditorial de 3 px (`--trait-editorial`) ; le filet de 5 px de l'encadré « En bref »
et de la note de conformité ; l'étoile à cinq branches du score, ambre pleine, bordure forte vide ;
les flèches « → » et « ↗ » (interne, externe). Actio bannit : la fusée, la lune, le taureau, l'ours,
la courbe en flèche montante, le cadenas, le marteau de juge, le drapeau national comme signe de
juridiction, et tout pictogramme de « sécurité » qui ferait passer une inscription pour une
garantie. Motif juridique autant qu'éditorial : l'Avis conjoint 21-330 porte sur la publicité et le
marketing, et l'iconographie spéculative est exactement ce qu'un régulateur lit comme du matériel
de marketing.

### 4.3 Schémas de conformité

Orientation horizontale, de gauche à droite, une seule rangée (`.flux`, largeur minimale 720 px,
défilement **dans** `.schema__corps`, jamais dans la page). Cinq étapes au maximum. Trois états :
étape ordinaire (`.flux__etape`), point de bascule (`.flux__etape--actuel`, **un seul par schéma**,
nommé dans le libellé), étape à venir (`.flux__etape--futur`, bordure en tirets). Numéro en
`--police-donnee` à `--t-micro`, nom en `--police-titre`, détail en `--t-petit`. Légende obligatoire
en `.schema__pied`, dans cet ordre : **source**, **date d'arrêté**, **réserve** (« Schéma
pédagogique — ne constitue pas un avis juridique »). Un schéma sans ses trois mentions ne franchit
pas la relecture. L'illustration SVG de la une suit les mêmes règles avec les dégradés
`--degrade-1/2/3` et des badges `--fill-alerte` / `--encre-accent`.

### 4.4 Tableaux comparatifs

Implantés dans `.tableau` (article) et `.comparateur__defilement` (accueil).

| Point | Règle |
|---|---|
| Colonnes obligatoires | Juridiction (ou province d'inscription) et date de relevé avant toute donnée comparée |
| Méthode | Écrite **au-dessus** du tableau (`.comparateur__methode`), pondération chiffrée, date du relevé (`.comparateur__arrete`) |
| Chiffres | Alignés à droite, `--police-donnee`, `tabular-nums`, `white-space: nowrap` ; « illustratif » en `.donnee--nd` tant qu'aucun relevé daté n'existe |
| En-têtes | `--t-micro`, capitales, `--fond-surface-2`, `position: sticky` |
| Séparation | `--bordure-douce` entre lignes ; **jamais de zébrage** |
| Statut | Badge `.badge--conforme` + lien « registre ↗ » vers la fiche officielle ; jamais un statut sans lien |
| Affiliation | Aucun lien d'affiliation dans un tableau ; divulgation dans le corps de la fiche (`.comparateur__pied`) |
| Mobile | Défilement dans le conteneur ; la première colonne reste lisible |

---

## 5. Les composants Tailwind

### 5.1 Pourquoi Tailwind, et pourquoi sans sa palette

Le cahier des charges demande des composants HTML/Tailwind : c'est le vocabulaire que
l'équipe de développement du Module 4 (Next.js 14) emploiera. Le risque de Tailwind pour un design
system est connu : `text-yellow-500` est toujours à portée de main, et un composant écrit avec la
palette par défaut sort du système sans que rien ne le signale. `prototype/composants/composants.tw.css`
le rend impossible :

```css
@import "tailwindcss";
@source "./*.html";
@theme inline {
  --color-*: initial;            /* la palette Tailwind n'existe plus   */
  --color-bleu: var(--marque-bleu);
  --color-conforme: var(--statut-conforme);
  --color-conforme-pale: var(--statut-conforme-pale);
  --font-titre: var(--police-titre);
  --radius-1: var(--rayon-1);
  /* … un utilitaire par jeton, rien d'autre */
}
```

`@theme inline` fait que `bg-bleu` compile en `background-color: var(--marque-bleu)` : le mode
sombre, les variantes 700/400 et les rapports de contraste de `tokens.css` s'appliquent sans que le
composant les connaisse. `bg-yellow-400` ne compile pas. La feuille `prototype/composants/composants.css`
est compilée localement par `npm run tailwind` (Tailwind v4, dépendance de développement) et
versionnée : le prototype s'ouvre sans compilation, sans CDN, sans ressource tierce.

**Chaîne de contrôle.** `npm run composants` (`tools/composants.mjs`) : (1) injecte chaque fragment
dans la galerie, en rendu et en source échappée, pour qu'ils ne divergent jamais ; (2) vérifie que
chaque classe employée par un fragment existe dans la feuille compilée — sinon la feuille est
périmée ; (3) refuse toute couleur hexadécimale écrite en dur dans un fragment. Puis
`tools/verifier.mjs` mesure les contrastes de la galerie dans les deux thèmes et
`tools/structure.mjs` contrôle le balisage. La suite `npm run tout` enchaîne les quatre.

**Correspondance des utilitaires.** `text-texte` / `text-texte-2` / `text-texte-3` /
`text-lien` (textes), `bg-page` / `bg-surface` / `bg-surface-2` / `bg-surface-3` (surfaces),
`border-bordure` / `border-bordure-forte`, `text-{alerte|consultation|conforme|info|neutre}` et
`bg-…-pale` (statuts), `bg-fill-primaire text-fill-primaire-texte hover:bg-fill-primaire-survol`
(bouton), `bg-navy`, `bg-bleu`, `text-bleu-fonce`, `bg-bleu-pale`, `text-ambre`, `bg-encre
text-encre-texte`, `text-jur-quebec`…, `font-titre` / `font-texte` / `font-donnee`,
`text-micro` / `text-petit` / `text-base` / `text-lead` / `text-h5` … `text-h2`, `tracking-etiq` /
`tracking-titre`, `rounded-1` … `rounded-4` / `rounded-plein`, `shadow-1` … `shadow-3`. Les
modificateurs d'opacité (`border-conforme/30`) compilent en `color-mix()` sur le jeton.

### 5.2 Composant 1 — Badge de statut réglementaire

**Fichier.** `prototype/composants/badge-statut.html`. **Équivalent site.** `.badge` + `.badge--*`.

**Anatomie.** Un `<span>` en `inline-flex`, `text-micro`, graisse 700, capitales, interlettrage
`tracking-etiq`, `px-2 py-[3px]`, `rounded-1`, bordure à 30 % de la couleur de texte ; une pastille
de 6 px (`size-1.5 rounded-plein bg-current`) ; un préfixe `sr-only` « Statut réglementaire : » ;
le libellé écrit. Cinq variantes, une par statut (§ 2.2). Une **variante datée** ajoute, hors du
badge, la date de lecture (`<time>`) en `font-donnee text-micro text-texte-3` et le lien « registre ↗ »
vers la fiche officielle : c'est la seule forme publiable pour un statut d'inscription.

```html
<span class="inline-flex items-center gap-2 font-texte text-micro font-bold tracking-etiq uppercase
             leading-normal whitespace-nowrap px-2 py-[3px] rounded-1 border
             text-conforme bg-conforme-pale border-conforme/30">
  <span class="size-1.5 rounded-plein bg-current shrink-0" aria-hidden="true"></span>
  <span class="sr-only">Statut réglementaire :</span>Inscrite
</span>
```

**Règles d'emploi.** Un badge porte un statut, jamais une rubrique (pour cela : `.etiquette`).
Le libellé est un état, pas une opinion (« Inscrite », pas « Recommandée »). Un badge « Inscrite »
sans date ni lien ne se publie pas. Deux badges sur un même élément sont interdits : si une
plateforme est inscrite *et* visée par une mise en garde, l'alerte prime et l'inscription passe
dans le corps. En mode sombre, rien à faire : les jetons basculent.

**Accessibilité.** Texte ≥ 4,5:1 sur son fond pâle dans les deux thèmes (§ 2.2) ; la pastille est
`aria-hidden` ; le préfixe `sr-only` donne le contexte à un lecteur d'écran ; `whitespace-nowrap`
évite la coupure du libellé ; la liste d'exemples porte `aria-label`.

### 5.3 Composant 2 — Encadré « En bref » / Points clés

**Fichier.** `prototype/composants/encadre-en-bref.html`. **Équivalent site.** `.en-bref`.

**Anatomie.** Un `<aside aria-labelledby>` sur fond `bg-bleu-pale` (bleu glacier `#DBEAFE`, en
sombre `rgba(96,165,250,.14)`), bordure à 30 % de `bleu-fonce`, filet gauche de 5 px
`border-l-bleu-fonce`, coins droits arrondis (`rounded-r-3`), `p-6`, `my-8`, `max-w-[760px]` (la
mesure de lecture). Titre `<p>` en `text-micro` capitales `text-bleu-fonce` avec l'étoile SVG et,
à droite (`ml-auto`), le temps de lecture en `font-donnee`. Liste sans puces natives ; chaque
`<li>` est une grille `[18px_1fr]` dont la première cellule est un losange de 8 px
(`size-2 rounded-[2px] bg-bleu-fonce rotate-45`) ; texte en `text-petit text-texte-2`, attaque en
`<strong class="text-texte">`.

**Règles d'emploi.** Trois à quatre puces, jamais deux ni cinq. Chaque puce commence par une phrase
en gras qui tient seule : un lecteur qui ne lit que les gras a la thèse. Placé sous le chapô, avant
le sommaire ; un seul par article. L'encadré résume l'analyse, il n'annonce pas de conclusion que
l'article ne démontre pas. Il n'est jamais employé pour un avertissement (pour cela :
`.mise-en-garde`, bordure rouge) ni pour un point de droit (`.note-conformite`, bordure dorée).

**Accessibilité.** `aria-labelledby` vers le titre ; les losanges sont `aria-hidden` ; contraste
`#1E40AF` sur `#DBEAFE` 7,1:1 (titre), `#334155` sur `#DBEAFE` 8,4:1 (corps) ; en sombre `#93C5FD`
et `#CBD5E1` sur le fond translucide composé, > 9:1.

### 5.4 Composant 3 — Carte comparative de plateforme

**Fichier.** `prototype/composants/carte-plateforme.html`. **Équivalent site.** la ligne de
`.comparateur` (`.plateforme`, `.score`, `.donnee`, `.comparateur__cta`) ; la carte en est la forme
verticale, pour une page de fiche, un flux mobile ou un encart.

**Anatomie** (six blocs, dans cet ordre, séparés par `gap-5`) :

1. **En-tête** — initiale sur `bg-navy text-encre-texte` (44 px, `rounded-2`), nom en `font-titre
   text-h5`, catégorie d'inscription en `font-donnee text-micro text-texte-3` (« Toronto · courtier
   en placement · membre de l'OCRI »), badge de statut (composant 1) aligné à droite.
2. **Score** — « Score Actio » en étiquette, chiffre en `font-titre text-h2` avec « / 5 » en
   `text-petit`, cinq étoiles SVG (`text-ambre`, la vide en `text-bordure-forte`) sous
   `role="img" aria-label="4,4 étoiles sur 5"`, pondération écrite : garde 40 % · frais 30 % ·
   service 20 % · conformité 10 %.
3. **Données** — `<dl>` en trois colonnes : écart (BTC), retrait Interac, garde ; valeurs en
   `font-donnee tabular-nums text-petit font-semibold` ; mention « illustratif » en
   `text-consultation` tant qu'aucun relevé daté n'existe, « déclaré » en `text-texte-3` pour une
   donnée déclarative.
4. **Avantages / inconvénients** — deux listes `aria-label`, étiquettes `text-conforme
   bg-conforme-pale` avec « + » écrit, `text-alerte bg-alerte-pale` avec « − » écrit.
5. **Statut daté et divulgation** — date de lecture au registre, lien « fiche au registre ↗ »,
   rappel « une inscription vaut pour une province », **divulgation d'affiliation** en clair, dans
   la carte, avant les boutons.
6. **Actions** — primaire « Fiche complète » (`bg-fill-primaire text-fill-primaire-texte
   hover:bg-fill-primaire-survol`, `rounded-2`, `text-petit font-semibold`) ; secondaire « Ouvrir un
   compte ↗ » en bordure, `rel="sponsored noopener"`, avec un `sr-only` « (lien d'affiliation) ».

**Règles d'emploi.** Une carte n'existe que pour une plateforme inscrite auprès d'au moins un
membre des ACVM, statut lu et daté le jour de publication (registre V-15). Aucun chiffre ne se
publie sans relevé daté (V-16) ; jusque-là, « illustratif » reste affiché. Le score ne tient jamais
compte d'une rémunération, et la carte le dit. Deux plateformes ne sont jamais comparées dans une
même carte : la comparaison est le tableau, la carte est la fiche. Le bouton secondaire est le
**seul** endroit d'une carte où un lien d'affiliation peut exister ; il porte `rel="sponsored"`.

**Accessibilité.** `aria-labelledby` vers le nom ; étoiles sous un seul `role="img"` nommé ;
`<dl>` sémantique ; contraste des étiquettes ≥ 4,5:1 (§ 2.2) ; blanc sur `#2563EB` 5,2:1 ;
`hover:` uniquement sur des propriétés de couleur, la cible tactile restant ≥ 40 px ; la carte
se replie à une colonne sous 420 px sans perte d'information.

### 5.5 Ajouter un composant

1. Écrire le fragment `prototype/composants/<cle>.html` : un commentaire d'en-tête (rôle, règles),
   un seul élément racine, aucune couleur en dur, aucune classe hors du thème.
2. Ajouter à `prototype/composants/index.html` une section avec les marqueurs
   `<!--RENDU:<cle>-->…<!--FIN-RENDU:<cle>-->` et `<!--SOURCE:<cle>-->…<!--FIN-SOURCE:<cle>-->`.
3. `npm run tailwind` puis `npm run composants` ; corriger jusqu'à « Toutes les classes des
   composants sont compilées ».
4. `npm run verifier` : contraste dans les deux thèmes, balisage, liens.
5. Documenter ici : anatomie, règles d'emploi, accessibilité, équivalent site.

---

## 6. Ce que le design system garantit, et ce qu'il ne garantit pas

| Garanti par le code | Non garanti — relève de la rédaction ou du Module 4 |
|---|---|
| Toute couleur employée existe dans `tokens.css` (site : `tools/docs.mjs` ; courriel : `tools/emails.mjs` ; composants : `tools/composants.mjs`) | Le sens donné à une couleur : un badge « conforme » posé sur une plateforme non inscrite est une faute éditoriale, pas une faute de CSS |
| Chaque paire texte/fond ≥ 4,5:1 sur le DOM rendu, deux thèmes, six pages | Le contraste d'une image ou d'un SVG importé |
| Un `h1` par page, ordre des titres, `lang`, repères, champs étiquetés | L'audit WCAG complet (clavier, lecteur d'écran, mouvement) : à commander avant d'écrire « WCAG 2.1 AA » en pied de page (registre V-28) |
| Les fragments Tailwind et leur rendu en galerie sont identiques | Leur portage en composants React (Module 4) : mêmes classes, mêmes jetons, tests de non-régression visuelle à écrire |
| Aucune ressource tierce dans les composants et les courriels | Les polices du site : Google Fonts en démonstration, auto-hébergement exigé en production |

---

### Ce qui reste à trancher

1. **`#D97706` et `#1E40AF`.** Le cahier des charges donne deux valeurs par couleur de marque
   (`#D97706` pour l'ambre, `#1E40AF` pour le bleu). `#1E40AF` est retenu comme texte bleu ;
   `#D97706` ne l'est pas (3,2:1 sur `#F8FAFC`) et cède à `#B45309`. Si `#D97706` doit exister, ce
   sera comme aplat sous texte navy — à ajouter à `tokens.css` avec son rapport calculé, pas en
   ligne.
2. **Newsreader ou Merriweather.** Newsreader est retenue pour ses tailles optiques et ses chiffres
   tabulaires ; Merriweather rend mieux sur d'anciens écrans Windows sans lissage. Décision à
   confirmer sur les captures de `tools/captures.mjs` à 360 px.
3. **Les composants React.** Les trois fragments sont du HTML ; leur transposition en composants
   Next.js (props `statut`, `date`, `lien` pour le badge ; `puces[]` pour l'encadré ; `plateforme`
   pour la carte) est spécifiée au Module 4 mais non écrite.
4. **Le bouton secondaire de la carte.** `rel="sponsored"` et divulgation dans la carte satisfont
   à ce qu'Actio s'impose ; la forme exacte de la divulgation attendue par l'Avis 21-330 pour les
   communications faites pour le compte d'une plateforme reste à lire (registre V-18).
