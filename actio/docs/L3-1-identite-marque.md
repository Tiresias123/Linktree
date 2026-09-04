## 1. Identité de marque et direction artistique

> **Source de vérité.** `prototype/assets/tokens.css`. Toute valeur citée ci-dessous en est extraite
> textuellement. Une valeur absente du fichier n'existe pas pour Actio ; une valeur du fichier
> employée hors de son usage autorisé est un défaut de conformité, pas une variante.

### 1.1 Le nom et la posture

**Actio**, en latin, ne désigne pas une idée : il désigne un acte. Le mot recouvre l'action en
justice, l'acte juridique, la capacité d'agir et la mise en mouvement procédurale — ce qui est
déposé, notifié, opposable, et qui produit un effet daté. C'est un nom de procédure, pas un nom
d'opinion.

L'étymologie engage trois disciplines. **La date** : un acte a une date d'effet, donc tout contenu
porte sa date d'arrêté (`.schema__pied` : « Arrêté au 4 septembre 2026 »). **La source** : un acte
se prouve par la pièce, donc le gabarit d'article réserve un bloc `.sources` numéroté et le
prototype porte un bandeau `.demo` tant que la rédaction n'a pas vérifié la page. **Le périmètre** :
Actio publie ce qu'elle peut opposer et signale ce qu'elle ne peut pas.

**La posture en une phrase :** *Actio établit ce qui est opposable, date ce qui ne l'est pas encore,
et refuse de combler l'écart.*

Actio promet : la juridiction nommée avant l'affirmation ; la date d'arrêté visible ; la source
primaire citée ou son absence signalée ; l'écart entre régimes fédéral, québécois et ontarien traité
comme l'objet du travail ; la parité intégrale des éditions française et anglaise canadienne,
conçues comme une paire d'URL (`/fr/`, `/en/`) et non comme une traduction *a posteriori*.

Actio refuse : la prévision de cours ; la recommandation d'actif ; le millésime dans le titre, qui
vieillit mal en droit ; l'affiliation vers une plateforme de négociation tant que son inscription
n'est pas vérifiée ; la promotion publiée sous forme d'article ; le chiffre d'audience auto-déclaré
comme argument d'autorité.

**Registre de voix.** Celui d'une note adressée à un responsable de la conformité pressé : phrase
déclarative, sujet nommé, verbe d'obligation quand l'obligation existe, conditionnel quand elle est
incertaine. Le schéma d'accueil écrit « Depuis le 6 août 2024, c'est la seule trajectoire ouverte »,
et non « les choses ont changé ».

| On dit | On ne dit pas | Motif |
|---|---|---|
| cryptoactifs | crypto-monnaies | Terminologie officielle. Exception : « monnaie virtuelle » lorsqu'on cite la LRPCFAT, qui emploie ce terme |
| inscription (à titre de courtier restreint, de courtier en placement) | licence, agrément, permis | « Permis » est réservé à l'entreprise de services monétaires québécoise |
| OCRI | OCRCVM, ACFM | Fusion de 2023 ; ces sigles n'existent plus au présent |
| pénalité administrative pécuniaire (CANAFE) · sanction administrative pécuniaire (CRTC, CAI) · pénalité administrative (TMF) | amende | L'amende est pénale et relève d'un régime distinct ; les trois familles ne sont pas interchangeables |
| infolettre | newsletter | Terminologie officielle ; s'applique au nom même du produit, *Actio Dispatch — l'infolettre réglementaire* |

**Positionnement face à trois familles.** La comparaison porte sur ce qu'Actio fait, non sur ce que
font les autres : la veille n'a observé aucun média canadien et n'a pu accéder à la direction
artistique des cabinets canadiens. Ces lignes sont des écarts revendiqués, pas des mesures.

| Famille | Ce qu'elle sert | Ce qu'Actio fait à la place | Preuve dans le prototype |
|---|---|---|---|
| Médias de cryptoactifs grand public | Le fil chaud, le prix, la sélection d'actifs | Le fil réglementaire : chaque brève porte une pastille de juridiction et un badge de statut, jamais une recommandation | `.cotations__piste` affiche « — » et « n. d. » : repère, pas incitation |
| Veille juridique de cabinet | Le mémorandum client, tarifé, souvent unilingue et non daté publiquement | La même exigence de source, mais publiée, bilingue, datée et assortie d'un registre de vérification | `.sources` numérotées ; lien vers `docs/annexes/registre-de-verification.md` |
| Agences de presse financières | La dépêche neutre, chronométrée, sans position méthodologique | La dépêche assortie de sa qualification : un projet de loi n'est jamais cité sans sa législature et sa session | `.depeche` + `.badge--consultation` pour tout texte non en vigueur |

### 1.2 Palette — le parti pris « Encre et Vélin »

Le fichier l'énonce en tête : « Un média juridique se lit comme un document, pas comme un tableau de
bord. »

**Le vélin chaud `--fond-page: #FAF8F4` plutôt que `#FFFFFF`.** Le blanc d'écran est un fond
d'application : il signale une console, un tableau de bord. Le vélin signale un document qu'on lit
longtemps. Précédent vérifié dans la presse financière : le *Financial Times* sert un fond web
`#FFF1e5`, valeur lue dans sa bibliothèque officielle de couleurs de graphiques ; Actio retient le
principe avec une teinte moins saturée. Corollaire : `--fond-surface: #FFFFFF` demeure une **surface
portée** (carte, schéma), jamais un fond de page.

**La couleur ne décore jamais.** Chaque couleur porte un statut opposable et un seul. Un badge
`.badge--conforme` affirme qu'un régime est en vigueur ou qu'une inscription est active ; le poser
pour l'esthétique revient à publier une affirmation juridique fausse. `.badge` compose
systématiquement un jeton de texte et son jeton pâle homonyme, et rien d'autre.

**Le rouge est réservé.** `--statut-alerte: #C8102E` ne signifie ni « important », ni « nouveau »,
ni « à lire », mais mise en garde, sanction ou radiation. L'infolettre ne l'emploie que pour
« Impact : élevé ». Le dépenser sur un titre accrocheur détruirait le signal le jour où une pénalité
administrative pécuniaire devra être annoncée.

#### Couleurs de marque

| Jeton | Clair | Sombre | Usage autorisé | Usage interdit |
|---|---|---|---|---|
| `--actio-bleu-palais` | `#0F3D68` | `#4E9BE0` | Texte institutionnel ; `.rubrique` et son filet de 3 px ; `--texte-lien` | Aplat sous texte blanc (2,96:1 en sombre) |
| `--actio-bleu-palais-fonce` | `#0A2B4B` | — | Survol d'aplat (`--fill-primaire-survol`) | Texte courant : trop proche de `--texte-primaire` |
| `--actio-bleu-palais-clair` | `#1B5A96` | `#7FB6EA` | Valeur de `--fill-primaire` en mode sombre | Texte sur `--fond-surface-2` en mode clair |
| `--actio-bleu-palais-pale` | `#E7EFF7` | `rgba(78,155,224,.14)` | Encart institutionnel, fond de `.badge--info` | Bordure seule : indiscernable de `--bordure` |
| `--actio-turquoise` | `#12B5A6` | `#35D6C4` | Bordure de `.flux__etape--actuel` | Aplat sous texte blanc (1,82:1 en sombre) |
| `--actio-turquoise-fonce` | `#096B61` | `#3FD8C7` | `.logo__point` ; `.rubrique--marches` | Aplat sous texte blanc (1,77:1 en sombre) |
| `--actio-turquoise-pale` | `#E2F6F3` | `rgba(53,214,196,.14)` | Fond de l'étape active d'un schéma | Fond de badge : la couleur n'est pas un statut |

#### Couleurs de statut réglementaire

| Jeton | Clair | Sombre | Ce que le badge affirme | Interdit |
|---|---|---|---|---|
| `--statut-alerte` / `-pale` | `#C8102E` / `#FBE9EC` | `#FF6B7F` / `rgba(255,107,127,.14)` | Mise en garde, sanction, radiation | Emphase éditoriale ; tout aplat (employer `--statut-alerte-fixe`) |
| `--statut-consultation` / `-pale` | `#965800` / `#FBF0E0` | `#E8A93C` / `rgba(232,169,60,.14)` | Consultation, projet de loi, texte édicté non en vigueur | Un texte en vigueur, même récent |
| `--statut-conforme` / `-pale` | `#0E7C5A` / `#E3F4EE` | `#3FCB96` / `rgba(63,203,150,.14)` | Inscrit, autorisé, en vigueur | Une plateforme dont l'inscription n'a pas été vérifiée dans les listes des ACVM |
| `--statut-info` / `-pale` | `#0F3D68` / `#E7EFF7` | `#7FB6EA` / `rgba(127,182,234,.14)` | Avis, bulletin, information | Substitution à `--actio-bleu-palais` : valeurs identiques en clair, divergentes en sombre |
| `--statut-neutre` / `-pale` | `#5B6B7C` / `#EDF0F3` | `#8FA0B2` / `rgba(143,160,178,.12)` | Archivé, abrogé, sans objet | Un contenu ancien mais toujours applicable |

#### Couleurs de juridiction

Codage cartographique, employé par `.juridiction::before` — un carré de 8 px pivoté à 45°, forme
volontairement distincte de la pastille ronde de 6 px des badges de statut, pour qu'une juridiction
ne se lise jamais comme un statut.

| Jeton | Clair | Sombre | Porte |
|---|---|---|---|
| `--jur-federal` | `#0F3D68` | `#7FB6EA` | Canada / Ottawa — CANAFE, ARC, Banque du Canada, BSIF |
| `--jur-quebec` | `#16688A` | `#59C3E8` | Québec — AMF, Revenu Québec, CAI |
| `--jur-ontario` | `#6B4FA8` | `#A991E8` | Ontario — CVMO ; également `.rubrique--guides` et `.palier--n3` |
| `--jur-multi` | `#096B61` | `#35D6C4` | Harmonisé ACVM |
| `--jur-intl` | `#8A6D3B` | `#D4B172` | International |

#### Surfaces claires et surfaces sombres

| Rôle | Clair | Sombre | Usage autorisé | Interdit |
|---|---|---|---|---|
| `--fond-page` | `#FAF8F4` | `#0B1420` | Fond du document, valeur de `<meta name="theme-color">` | Fond de carte |
| `--fond-surface` | `#FFFFFF` | `#111E2E` | Carte, `.schema`, `.tableau` | Fond de page |
| `--fond-surface-2` | `#F3F0EA` | `#16263A` | Encarts, `.schema__entete`, `thead` — **surface la plus défavorable du mode clair** | Y poser un jeton de texte sous 4,5:1 |
| `--fond-surface-3` | `#E9E5DC` | `#1D3145` | Jauges, éléments inertes | Texte long |
| `--texte-primaire` | `#0E1A2B` | `#EEF2F7` | Corps, titres | — |
| `--texte-secondaire` | `#45566A` | `#A9B8C9` | Chapeaux, résumés, `.flux__detail` | Corps d'article |
| `--texte-tertiaire` | `#5A6B7E` | `#7C8DA1` | Métadonnées, `.schema__pied` | Toute information opposable |
| `--bordure` / `-forte` / `-douce` | `#DCD7CC` / `#C3BCAD` / `#EBE7DE` | `#24374C` / `#354C66` / `#1A2A3C` | Filets, séparateurs | Porter une couleur de statut |

**Bandes d'encre — invariantes par thème.** `--encre-fond` (`#0E1A2B` clair, `#16263A` sombre) reste
sombre dans les deux thèmes, avec `--encre-texte #F4F7FA`, `--encre-texte-2 #A9B8C9`,
`--encre-accent #35D6C4`, `--encre-hausse #3FCB96`, `--encre-baisse #FF6B7F`, `--encre-stable
#8FA0B2`, `--encre-ambre #E8A93C`. Motif : un bandeau de cotations dont le fond s'inverserait
emporterait avec lui des couleurs réglées pour un fond foncé. Même logique pour `--degrade-1
#0A2B4B`, `--degrade-2 #0F3D68`, `--degrade-3 #096B61`, et pour le bandeau de probité `--demo-fond
#8A5300` / `--demo-texte #FFFFFF`.

#### Règle d'accessibilité opposable

Reproduite du fichier, vérifiée par calcul sur le DOM rendu dans les deux thèmes
(`tools/verifier.mjs`). **Les jetons de marque et de statut sont des couleurs de TEXTE.** Ils
s'éclaircissent en mode sombre et deviennent, de ce fait, incapables de porter du texte blanc.

| Jeton (valeur en mode sombre) | Blanc dessus |
|---|---|
| `--actio-bleu-palais` `#4E9BE0` | 2,96:1 |
| `--statut-alerte` `#FF6B7F` | 2,74:1 |
| `--statut-consultation` `#E8A93C` | 2,06:1 |
| `--statut-conforme` `#3FCB96` | 2,06:1 |
| `--actio-turquoise-fonce` `#3FD8C7` | 1,77:1 |
| `--actio-turquoise` `#35D6C4` | 1,82:1 |

Aucun de ces jetons ne peut servir d'aplat plein. C'est une règle, pas une préférence : elle a été
établie après que six composants du prototype eurent échoué pour cette exacte raison. D'où un jeu
d'aplats distinct, réglé pour porter du blanc dans les deux thèmes.

| Aplats autorisés sous texte blanc | Valeur | Rapport |
|---|---|---|
| `--fill-primaire` | `#0F3D68` clair / `#1B5A96` sombre | 11,1 / 7,1 |
| `--statut-alerte-fixe` | `#C8102E` | 5,9 |
| `--demo-fond` | `#8A5300` | 6,3 |
| `--encre-fond` | `#0E1A2B` clair / `#16263A` sombre | 17,5 / 15,3 |
| `--degrade-1` / `-2` / `-3` | `#0A2B4B` / `#0F3D68` / `#096B61` | 14,4 / 11,1 / 6,4 |

**Aplat exigeant du texte d'encre :** `--encre-accent #35D6C4` avec `--encre-accent-texte #06231F`,
9,1:1 — le blanc y tombe à 1,8:1 et est **interdit**.

**Texte porté par une bande d'encre**, tous ≥ 5,5:1 sur les deux valeurs de `--encre-fond` :
`--encre-texte` 16,3 / 14,2 · `--encre-texte-2` 8,7 / 7,6 · `--encre-accent` 9,6 / 8,4 ·
`--encre-hausse` 8,5 / 7,4 · `--encre-baisse` 6,4 / 5,6 · `--encre-stable` 6,5 / 5,7 ·
`--encre-ambre` 8,5 / 7,4.

**Texte de statut sur son fond pâle :** employer le jeton plein correspondant — tous ≥ 4,5:1 une
fois la transparence composée sur la surface porteuse.

Niveau visé : **WCAG 2.1 AA, adopté volontairement comme norme éditoriale**, sans invoquer
d'obligation légale — la *Loi canadienne sur l'accessibilité* vise les entités sous réglementation
fédérale, la CAN/ASC-EN 301 549:2024 est volontaire, et la LAPHO ontarienne impose WCAG 2.0 AA
au-delà de 50 employés (Règl. Ont. 191/11, art. 14).

### 1.3 Stack typographique

Trois familles, pas quatre : le *Financial Times* en sert deux, à deux graisses chacune, et fait
naître sa hiérarchie du corps et de l'interlignage.

| Rôle | Famille et pile de repli complète | Licence | Graisses employées | Motif |
|---|---|---|---|---|
| Titrage | `"Source Serif 4", "Source Serif Pro", "Iowan Old Style", Georgia, "Times New Roman", serif` | SIL OFL (millésime **[À VÉRIFIER]**) | 400, 600, 700 ; axe `opsz` 8–60 | Empattements de journal financier ; l'axe optique tient un titre à 54 px comme un intertitre à 21 px sans changer de famille |
| Lecture et interface | `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | SIL OFL 1.1 | 400, 500, 600, 700 | Conçue pour l'écran ; chiffres tabulaires et alternatives contextuelles de ponctuation documentés |
| Données, cotations, tableaux | `"IBM Plex Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace` | SIL OFL | 400, 500, 600 | Chasse fixe pour les cours, les numéros d'étape (`.flux__num`), les renvois de sources et les pastilles de juridiction |

**Arbitrage.** La veille recommandait *Newsreader* en titrage ; le prototype a retenu **Source
Serif 4**, également sous OFL et déclarant `latin` et `latin-ext`, pour son axe `opsz` 8–60 sur une
échelle qui descend à 17 px (`--t-h6`). Contrepartie à lever avant gel de la charte : les **chiffres
tabulaires ne sont vérifiés que pour Newsreader et Inter** ; ni pour Source Serif 4 ni pour IBM Plex
Mono **[À VÉRIFIER]**. D'ici là, tout tableau de cours, de volumes ou de sanctions applique
`font-variant-numeric: tabular-nums` — ce que fait déjà `.tableau td[data-num]` — et le rendu est
contrôlé à la relecture.

**Français.** Le jeu *GF Latin Core* servi par le sous-ensemble `latin` couvre é è ê ë à â ç ô û î ï
ù, la ligature **œ / Œ** et les **guillemets « »** ; sa documentation nomme explicitement le
français. Les trois familles déclarent `latin` et `latin-ext`. Les espaces fines insécables sont
produites par U+202F saisi dans la copie ou par l'entité `&nbsp;` déjà employée dans le prototype
devant les deux-points et les unités ; aucune n'est laissée à l'appréciation du rédacteur.

#### Échelle typographique

Ratio 1,200 (seconde majeure), base 17 px, fluide entre 360 px et 1440 px de largeur de fenêtre.

| Jeton | Valeur | À 360 px | À 1440 px | Usage |
|---|---|---|---|---|
| `--t-micro` | `0.6875rem` | 11 px | 11 px | Étiquettes, badges, `.schema__pied`, `.flux__detail` |
| `--t-petit` | `0.8125rem` | 13 px | 13 px | Métadonnées, `.tableau`, liens de navigation |
| `--t-base` | `1.0625rem` | 17 px | 17 px | Corps |
| `--t-lead` | `clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)` | 18 px | 21 px | Chapeau (`.article__chapeau`) |
| `--t-h6` | `1.0625rem` | 17 px | 17 px | `.flux__nom` |
| `--t-h5` | `clamp(1.125rem, 1.08rem + 0.22vw, 1.25rem)` | 18 px | 20 px | Titre de carte secondaire |
| `--t-h4` | `clamp(1.3125rem, 1.22rem + 0.42vw, 1.5rem)` | 21 px | 24 px | `.schema__titre`, `.portail__langue` |
| `--t-h3` | `clamp(1.5rem, 1.36rem + 0.6vw, 1.8125rem)` | 24 px | 29 px | Intertitres d'article |
| `--t-h2` | `clamp(1.75rem, 1.52rem + 1.0vw, 2.375rem)` | 28 px | 38 px | `.section__titre` |
| `--t-h1` | `clamp(2.125rem, 1.62rem + 2.2vw, 3.375rem)` | 34 px | 54 px | `.article__titre` |
| `--t-display` | `clamp(2.5rem, 1.7rem + 3.4vw, 4.25rem)` | 40 px | 68 px | Une exceptionnelle |

Interlignages : `--lh-serre 1.15` (titres), `--lh-moyen 1.35` (sous-titres), `--lh-texte 1.68`
(corps d'article), `--lh-dense 1.45` (tableaux). Interlettrage : `--interlettre-titre -0.018em`,
`--interlettre-etiq 0.085em` pour les petites capitales de badges et de rubriques.

#### Auto-hébergement des polices — exigence, non préférence

**État constaté.** Les quatre pages du prototype chargent aujourd'hui les trois familles depuis
`fonts.googleapis.com`, avec `preconnect` vers `fonts.gstatic.com`. C'est un **défaut à corriger
avant mise en ligne**, et non une spécification à reconduire.

Le motif est juridique. Une requête de police vers un tiers lui transmet l'adresse IP du visiteur,
son en-tête `User-Agent` et le référent. Le prototype tient déjà, dans le commentaire de son
portail, que traiter une adresse IP pour deviner une langue reviendrait à traiter un renseignement
personnel sans nécessité ; la même analyse s'applique à une police. Or la Loi 25 (L.Q. 2021, c. 25,
modifiant la *Loi sur la protection des renseignements personnels dans le secteur privé*, RLRQ
c. P-39.1) impose une **évaluation des facteurs relatifs à la vie privée (EFVP) préalable à toute
communication de renseignements personnels hors du Québec**. Un média qui publie le nom de son
responsable de la protection des renseignements personnels ne peut pas soumettre chaque lecteur à
une communication hors Québec pour économiser un fichier de 40 ko. La qualification de l'adresse IP
d'un lecteur comme renseignement personnel au sens de P-39.1 est **[À VÉRIFIER]** auprès du texte et
des orientations de la CAI ; l'auto-hébergement rend la question sans objet, ce qui en est
l'intérêt.

| Exigence | Valeur | Contrôle |
|---|---|---|
| Sous-ensemble | `latin` + `latin-ext` seuls ; grec et cyrillique retirés | Présence de œ, Œ, « », U+202F après sous-ensemblage |
| Format | `woff2` exclusivement ; aucun `woff`, `ttf`, `eot` | Un fichier par graisse |
| Fichiers | 3 Source Serif 4 (400/600/700), 4 Inter (400/500/600/700), 3 IBM Plex Mono (400/500/600) — 10 romains ; italiques ajoutées seulement si un gabarit les emploie | Aucune page ne charge plus de 6 fichiers |
| Préchargement | `rel="preload" as="font" type="font/woff2" crossorigin` sur deux faces seulement : Source Serif 4 700 et Inter 400 | Le reste passe par `@font-face` sans preload |
| Repli | `font-display: swap` | La pile de repli du tableau ci-dessus doit rendre la page lisible sans aucun téléchargement |
| Origine | Même domaine, ou sous-domaine servi par la même infrastructure | Aucune requête sortante au premier rendu |
| Suppression | Retirer les `preconnect` et la feuille `fonts.googleapis.com` des quatre pages | `grep -r "fonts.g" prototype/` ne retourne rien |

L'infolettre n'est pas concernée : elle ne charge aucune police et déclare des piles système
(`Georgia, 'Times New Roman', serif` en titrage, `Arial, Helvetica, sans-serif` en texte,
`'IBM Plex Mono', Consolas, monospace` en données), les clients de messagerie ne garantissant pas le
chargement de fontes distantes.

### 1.4 Principes graphiques des schémas

**Diagrammes de conformité.** Orientation **horizontale, de gauche à droite**, une seule rangée
(`.flux { display: flex }`), sur un rail de largeur minimale 720 px (`min-width: 720px`) contenu
dans `.schema__corps { overflow-x: auto }` : le document ne déborde jamais, seul le schéma défile.
**Cinq étapes au maximum** — celui de l'accueil en compte cinq, dont une hors séquence (« EN
PARALLÈLE »). Au-delà, on découpe en deux schémas. Trois états, et trois seulement :

| État | Classe | Traitement | Sens |
|---|---|---|---|
| Étape ordinaire | `.flux__etape` | Fond `--fond-surface-2`, bordure `--bordure-douce` | Étape du parcours, sans emphase |
| Point de bascule | `.flux__etape--actuel` | Bordure `--actio-turquoise`, fond `--actio-turquoise-pale`, numéro `--actio-turquoise-fonce` | **Un seul par schéma**, nommé dans le libellé : « ÉTAPE 03 · POINT DE BASCULE » |
| Étape à venir | `.flux__etape--futur` | Fond transparent, bordure en tirets, numéro `--texte-tertiaire` | Ce qui n'est pas encore exigible |

Typographie des étapes, non négociable : numéro en `--police-donnee`, `--t-micro`, graisse 700,
interlettrage 0,08em ; nom en `--police-titre`, `--t-h6`, graisse 700 ; détail en `--t-micro`,
`--texte-secondaire`, `--lh-dense`. La liaison est le caractère « → » produit par
`.flux__etape::after` en `--bordure-forte`, supprimé sur la dernière étape. Les jetons de
juridiction ne colorent jamais le fond d'une étape : ils n'apparaissent qu'en pastille
`.juridiction--*` dans `.flux__detail` lorsqu'une étape relève d'une autorité distincte — mêler
couleur de juridiction et couleur de statut sur une même surface rendrait les deux illisibles.

**Iconographie institutionnelle.** Actio emploie : le carré pivoté à 45° des juridictions, la
pastille ronde de 6 px des statuts, la flèche de séquence, le filet de rubrique de 3 px
(`--trait-editorial`) et le losange `◆` qui ouvre une ligne de juridiction dans l'infolettre. Actio
bannit : la fusée, la lune, le taureau, l'ours, la courbe en flèche montante, le cadenas, le marteau
de juge et le drapeau national employé comme signe de juridiction. Motif juridique autant
qu'éditorial : l'Avis conjoint 21-330 des ACVM porte sur la publicité, le marketing et les médias
sociaux, et l'iconographie spéculative est exactement ce qu'un régulateur lit comme du matériel de
marketing.

**Tableaux comparatifs.** Règles opposables, telles qu'implantées dans `.tableau` :

| Point | Règle | Implantation |
|---|---|---|
| Colonnes obligatoires | **Juridiction** et **date d'arrêté** avant toute donnée comparée | `caption` ou deux premières colonnes |
| Chiffres | Alignés à droite, `--police-donnee`, `tabular-nums`, `white-space: nowrap` | `td[data-num]` |
| En-têtes | `--t-micro`, capitales, fond `--fond-surface-2`, filet `--trait-fort` en `--bordure-forte`, `position: sticky; top: 0` | `thead th` |
| Séparation | `--bordure-douce` entre lignes ; rien sous la dernière ; **jamais de zébrage** | `tbody tr:last-child td` |
| Légende | En haut, capitales, `--texte-tertiaire` sur `--fond-surface-2` | `caption-side: top` |
| Mobile | Largeur minimale 560 px ; défilement **dans** le conteneur, jamais dans la page | `.tableau { overflow-x: auto }` |

**Légende obligatoire.** Aucun schéma ni tableau ne se publie sans les trois mentions de
`.schema__pied`, dans cet ordre, en `--police-donnee` à `--t-micro` : la **source** (« Source :
reconstitution Actio d'après les avis du personnel des ACVM et le cadre de l'OCRI »), la **date
d'arrêté** (« Arrêté au 4 septembre 2026 ») et la **réserve** (« Schéma pédagogique — ne constitue
pas un avis juridique »). La troisième est reprise à l'identique dans l'infolettre ; un schéma qui
ne la porte pas ne franchit pas la relecture.

### 1.5 Logotype et déclinaisons

**Construction.** Le logotype est **textuel**, jamais une image :
`<span>Actio<span class="logo__point">.</span></span>`. Il hérite de `--police-titre`, graisse
`--graisse-grasse` (700), interlettrage `-.03em`, couleur `--texte-primaire`, en `inline-flex`,
`align-items: baseline`, `gap: 2px`. Le point prend `--actio-turquoise-fonce` : `#096B61` en clair,
`#3FD8C7` en sombre. C'est un point final — la marque affirme, elle ne s'exclame pas.

Une signature est prévue par `.logo__baseline` (`--police-texte`, `--t-micro`, graisse 500,
interlettrage `.06em`, capitales, `--texte-tertiaire`, `margin-top: -4px`). Elle **n'est employée
sur aucune page du prototype** ; l'infolettre en fait usage sous forme équivalente : « Dispatch ·
l'infolettre réglementaire ».

| Contexte | Corps | Réalisation |
|---|---|---|
| En-tête de site | `1.5rem` (24 px) | `.logo` dans `.entete__barre`, lien `aria-label="Actio, accueil"` |
| Pied de page | `1.5rem` (24 px) | `.logo` + `margin-bottom: 12px` |
| Portail de langue | `2.75rem` (44 px) | `.portail__logo`, centré, sans signature |
| En-tête de courriel | 30 px | Georgia 700, `letter-spacing:-0.8px`, point `#0B7F74` |
| Pied de courriel | 20 px | Même traitement, sans signature |
| Corps minimal absolu | **16 px** | En deçà, le point se confond avec l'empattement du « o » |

**Écart résolu.** L'infolettre employait `#0B7F74` pour le point — l'ancienne valeur de
`--actio-turquoise-fonce`, conservée en clair après que le jeton eut été assombri à `#096B61` pour
atteindre 4,5:1 sur son propre fond pâle. C'est la dérive à laquelle un courriel est structurellement
exposé : il ne peut pas lire une variable CSS, ses couleurs sont donc écrites en clair, et rien ne les
rattache plus au système. **Arbitrage retenu : aligner, et non promouvoir.** Un jeton distinct pour le courriel aurait institué deux turquoises de marque, ce que la règle du § 1.2
interdit. Les courriels sont passés à `#096B61` (6,4:1 sur `#FFFFFF`).
Le lien est désormais tenu par un contrôle et non par la vigilance : `tools/emails.mjs` extrait
toutes les couleurs de chaque courriel assemblé et refuse la production si l'une d'elles n'existe pas
dans `tokens.css`.

**Zone de protection.** Marge libre égale à la **hauteur de capitale du « A »** sur les quatre côtés,
soit 0,7 × le corps (17 px pour un corps de 24 px). Aucun élément — filet, badge, bordure, sélecteur
de langue — n'y pénètre. Dans `.entete__barre`, la contrainte est tenue par
`.nav { margin-left: var(--e-4) }`, soit 16 px, complétés par le `gap` de la barre.

**Versions monochromes.** Deux. *Encre* : logotype et point en `--texte-primaire` (`#0E1A2B` clair,
`#EEF2F7` sombre), pour l'impression noir et blanc et le tamponnage. *Réserve* : logotype et point
en `--fill-primaire-texte #FFFFFF` sur `--fill-primaire`, `--encre-fond` ou un dégradé
`--degrade-1/2/3` — jamais sur un jeton de statut. Le point ne se pose jamais en `--statut-alerte`.

**Favicon.** Le prototype sert un SVG en `data:` URI : carré 64 × 64, `rx="10"`, fond `#0F3D68`,
lettre « A » centrée (`x=32`, `y=45`), 38 px, graisse 700, `#FAF8F4`. Deux arbitrages assumés :
(i) la police déclarée est `Georgia,serif` et non Source Serif 4, un SVG de favicon ne pouvant
embarquer de fonte de façon fiable ; (ii) le point turquoise est **supprimé**, car à 16 px il
devient un artefact. Reste à produire : les tracés vectorisés de la lettre en Source Serif 4 700
(`<path>`, non `<text>`), puis les PNG 32 × 32, 180 × 180 (`apple-touch-icon`) et 512 × 512
(manifeste).

**Avatar.** Carré 400 × 400, fond `--fill-primaire #0F3D68`, monogramme « A » en `#FAF8F4` occupant
58 % de la hauteur, arrondi appliqué par la plateforme et non par le fichier. Le logotype complet
est proscrit en avatar : à la taille servie par un fil, le mot cesse d'être lisible et le point
disparaît.

---

**Ce qui reste à trancher.**

1. Millésime de la SIL OFL des trois familles non vérifié : la charte ne peut être gelée avant
   lecture des fichiers de licence livrés avec chaque fonte.
2. Chiffres tabulaires vérifiés pour Newsreader et Inter seulement. Si Source Serif 4 ne les sert
   pas : basculer le titrage sur Newsreader, ou interdire les chiffres en titrage.
3. ~~Le point du logotype en courriel~~ — **tranché** : aligné sur `--actio-turquoise-fonce`
   `#096B61`, et verrouillé par le contrôle de conformité des couleurs de `tools/emails.mjs`.
4. L'auto-hébergement des polices n'est pas fait — quatre pages appellent encore
   `fonts.googleapis.com`. Aucune EFVP ne peut conclure d'ici là.
5. Qualification de l'adresse IP d'un lecteur au sens de P-39.1 : à vérifier auprès du texte et des
   orientations de la CAI.
6. `.logo__baseline` existe sans être employé : lui donner un emploi canonique ou le retirer.
7. Aucun jeu de couleurs pour graphiques n'existe dans `tokens.css` ; les jetons de statut et de
   juridiction ne peuvent pas servir de palette catégorielle sans détruire leur valeur de signal.
