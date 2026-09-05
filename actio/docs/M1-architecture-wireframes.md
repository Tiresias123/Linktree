# Module 1 — Architecture digitale & wireframes UI/UX

> Ce document spécifie du code qui existe et fonctionne : `prototype/fr/index.html`, `prototype/fr/article.html`, `prototype/fr/registre.html`, `prototype/en/index.html`, et les feuilles `prototype/assets/tokens.css`, `actio.css`, `article.css`. Toute divergence entre ce document et le prototype est un défaut à corriger dans l'un ou l'autre — jamais à tolérer. `npm run docs` vérifie que chaque classe, jeton et chemin cité ici existe.

**Ce qu'Actio reprend de Cryptoast, et ce qu'elle transforme.** Cryptoast est un média *SEO-first* : sa colonne vertébrale n'est pas le fil d'actualité mais un socle de pages permanentes — cours, lexique, guides, comparatifs — qui capte la recherche organique et sur lequel l'actualité vient se greffer. Actio adopte cette architecture. Elle en transforme trois choses, parce que le Canada l'impose : (1) il n'existe pas de « comparatif canadien » — l'inscription d'une plateforme vaut pour une province, et un tableau unique masque cette réalité ; d'où le **commutateur de juridiction**, qui traverse tout le site ; (2) un comparatif affilié qui met en avant une plateforme inscrite peut être analysé comme du matériel de marketing diffusé pour le compte de cette plateforme au sens de l'Avis conjoint 21-330 — d'où une divulgation dans le corps du contenu et un score qui ne dépend d'aucune rémunération ; (3) le bilinguisme n'est pas une traduction mais une obligation d'équivalence sous la Charte de la langue française — d'où deux arbres de documents sous `/fr/` et `/en/`, jamais une bascule d'attributs.

---

## 1. Arborescence & taxonomie complète

### 1.1 Les cinq piliers éditoriaux

| # | Pilier | Slug FR | Slug EN | Promesse | Lectorat premier | Cadence |
|---|---|---|---|---|---|---|
| 1 | **Actualités & Régulation** | `actualites-regulation` | `news-regulation` | Lire l'acte à la source et dire ce qu'il oblige, qui, et à partir de quand. | Investisseurs informés, directions de la conformité, avocats | 5 publications / semaine |
| 2 | **Guides & Pédagogie — L'Académie Actio** | `academie` | `academy` | Amener un lecteur d'un niveau au suivant par une progression numérotée, datée, révisée. | Débutants, intermédiaires, professionnels en montée de compétence | 2 guides neufs / semaine ; révision trimestrielle du socle |
| 3 | **Comparatifs & Avis plateformes** | `comparatifs` | `comparisons` | Évaluer objectivement les courtiers inscrits au Canada, selon une méthode publiée et un relevé daté. | Investisseurs qui choisissent une plateforme | Relevé mensuel ; fiche révisée à chaque décision d'inscription |
| 4 | **Fiscalité & Droit pratique** | `fiscalite-droit` | `tax-law` | Donner la qualification exacte d'une opération, au fédéral et au Québec, formulaires à l'appui. | Déclarants, CPA, fiscalistes | 2 / semaine, 4 du 1er février au 30 avril |
| 5 | **Dossiers de fond & données — Actio Research** | `research` | `research` | Rapports trimestriels, flux des FNB canadiens, consultations des ACVM décryptées avant clôture. | Institutionnels, cabinets, journalistes | 1 rapport / trimestre + 1 note / consultation |

Les libellés de navigation sont ceux de `.nav__lien` dans `prototype/fr/index.html` : *Actualités & Régulation* · *Académie* · *Comparatifs* · *Fiscalité & Droit* · *Actio Research*. Deux entrées ouvrent un méga-menu (`#mm-actualites`, `#mm-academie`), trois sont des liens directs.

### 1.2 Arborescence à trois niveaux

```
/                                   portail de langue → 302 vers /fr/ (jamais par IP)
├── /fr/  ·  /en/                   deux arbres jumeaux, mêmes profondeurs
│
├── /fr/actualites-regulation/                      [N1] Pilier 1
│   ├── /federal/                                   [N2]
│   │   ├── /canafe-lbc-ft/                         [N3] CANAFE, LRPCFAT, inscription des ESM
│   │   ├── /banque-du-canada-paiements/            [N3] LAAPD, fournisseurs de services de paiement
│   │   ├── /cryptomonnaies-stables/                [N3] loi fédérale, décrets, règlements
│   │   └── /gazette-du-canada/                     [N3] projets de règlement, Partie I et II
│   ├── /provincial/                                [N2]
│   │   ├── /amf-quebec/                            [N3]
│   │   ├── /cvmo-ontario/                          [N3]
│   │   ├── /acvm-avis-harmonises/                  [N3] série 21-xxx
│   │   └── /ocri-autoreglementation/               [N3] bulletins, garde, adhésion
│   ├── /affaires-juridiques-litiges/               [N2]
│   │   ├── /decisions-tmf-cvmo/                    [N3]
│   │   ├── /mises-en-garde-ordonnances/            [N3]
│   │   ├── /insolvabilites/                        [N3]
│   │   └── /recours-collectifs/                    [N3]
│   ├── /jalonnement-fnb-institutionnels/           [N2]
│   │   ├── /fnb-cryptoactifs-canada/               [N3] Règlement 81-102
│   │   ├── /jalonnement-dans-les-fonds/            [N3]
│   │   ├── /garde-institutionnelle/                [N3]
│   │   └── /flux-et-adoption/                      [N3]
│   └── /barometre/                                 [N2] page permanente du Baromètre, toutes entrées
│
├── /fr/academie/                                   [N1] Pilier 2
│   ├── /debutant/                                  [N2] parcours « Je débute au Canada »
│   │   ├── /comprendre-la-chaine-de-blocs/         [N3]
│   │   ├── /premier-achat-interac/                 [N3]
│   │   ├── /choisir-une-plateforme-inscrite/       [N3]
│   │   └── /securiser-son-compte/                  [N3]
│   ├── /intermediaire/                             [N2]
│   │   ├── /finance-decentralisee/                 [N3]
│   │   ├── /autogarde-stockage-a-froid/            [N3]
│   │   ├── /jalonnement-mecanique-risques/         [N3]
│   │   └── /lire-une-decision-d-inscription/       [N3]
│   ├── /avance/                                    [N2]
│   │   ├── /contrats-intelligents/                 [N3]
│   │   ├── /exploiter-un-noeud-validateur/         [N3]
│   │   ├── /conformite-lbc-ft-plateforme/          [N3]
│   │   └── /garde-actifs-numeriques-ocri/          [N3]
│   ├── /parcours/je-debute-au-canada/              [N2] page de parcours (agrégat ordonné)
│   ├── /parcours/je-declare-mes-cryptos/           [N2]
│   ├── /parcours/je-comprends-la-regulation-des-ctp/ [N2]
│   └── /lexique/                                   [N2] glossaire bilingue, une entrée par terme officiel
│
├── /fr/comparatifs/                                [N1] Pilier 3
│   ├── /plateformes/                               [N2] comparateur complet, filtrable par province
│   │   ├── /shakepay/                              [N3] fiche d'évaluation
│   │   ├── /newton/                                [N3]
│   │   ├── /wealthsimple-crypto/                   [N3]
│   │   ├── /bitbuy/                                [N3]
│   │   └── /virgocx/                               [N3]
│   ├── /frais-interac/                             [N2] comparatif dédié dépôts / retraits Interac
│   ├── /securite-des-reserves/                     [N2] garde, dépositaires, preuves de réserves
│   ├── /methode/                                   [N2] la méthode du score, publiée et datée
│   └── /registre/                                  [N2] vue unifiée des registres officiels (registre.html)
│
├── /fr/fiscalite-droit/                            [N1] Pilier 4
│   ├── /declaration-arc/                           [N2]
│   ├── /declaration-revenu-quebec/                 [N2] TP-21.4.39
│   ├── /prix-de-base-rajuste/                      [N2] PBR, exemples chiffrés
│   ├── /gain-en-capital-ou-revenu-d-entreprise/    [N2] bulletin IT-479R
│   ├── /formulaire-t1135/                          [N2]
│   ├── /jalonnement-largages-embranchements/       [N2]
│   ├── /tps-tvh-minage/                            [N2]
│   └── /echeancier/                                [N2] page permanente des échéances
│
├── /fr/research/                                   [N1] Pilier 5
│   ├── /rapports-trimestriels/                     [N2]
│   │   └── /2026-t3-adoption-institutionnelle/     [N3]
│   ├── /flux-fnb/                                  [N2] données hebdomadaires
│   ├── /consultations-acvm/                        [N2] une note par consultation, avant clôture
│   └── /cartographie-des-inscriptions/             [N2]
│
├── /fr/auteurs/<slug>/                             pages auteur, qualifications, déclaration d'intérêts
├── /fr/juridiction/<quebec|ontario|federal|international>/   archives filtrées par juridiction
├── /fr/etiquettes/<slug>/                          archives par étiquette
├── /fr/recherche/                                  résultats de la recherche universelle
├── /fr/infolettre/  · /fr/infolettre/archives/     inscription, archives d'Actio Dispatch
├── /fr/a-propos/  /equipe/  /charte-editoriale/  /partenariats/  /corrections/  /nous-joindre/
├── /fr/mentions-legales/  /confidentialite/  /temoins/  /accessibilite/  /plan-du-site/
└── flux : /fr/feed.xml (RSS) · /fr/feed.json (JSON Feed) · /sitemap.xml · /fr/barometre/feed.xml
```

**Règles d'URL.** Minuscules, tirets, sans accents, sans date dans le chemin (la date vit dans les métadonnées et le `datePublished` Schema.org — une URL datée vieillit, un article corrigé ne doit pas changer d'adresse). Profondeur maximale : 3 niveaux sous la langue. Un contenu n'a qu'une URL canonique ; les archives par juridiction et par étiquette portent `rel="canonical"` vers elles-mêmes mais `noindex` au-delà de la page 2.

### 1.3 Taxonomies transverses (valeurs fermées)

Une taxonomie n'existe que si elle est **fermée** : la rédaction peut refuser une valeur inventée. Chaque valeur est portée dans le balisage par un attribut ou une classe que la feuille de style et le filtrage exploitent.

| Taxonomie | Valeurs admises | Porté par | Rendu | Jeton |
|---|---|---|---|---|
| **Juridiction** | `federal` · `quebec` · `ontario` · `multi` (harmonisé ACVM) · `intl` | `data-jur="…"` (plusieurs valeurs possibles, séparées par un espace) et `.juridiction--…` | pastille losange | `--jur-federal` #1E40AF · `--jur-quebec` #0E7490 · `--jur-ontario` #6D28D9 · `--jur-multi` #047857 · `--jur-intl` #92400E |
| **Autorité** | ACVM · AMF · CVMO · OCRI · CANAFE · Banque du Canada · ARC · Revenu Québec · TMF · Gazette du Canada | étiquette texte dans `.juridiction` | texte | — |
| **Statut de texte** (Baromètre) | Consultation publique · Avis du personnel · Entrée en vigueur · Mise en garde · Décision · Archivé | `.badge--consultation` · `--info` · `--conforme` · `--alerte` · `--alerte` · `--neutre` ; carte `.baro--consultation/avis/vigueur/garde` | badge + filet supérieur de carte | `--statut-*` |
| **Niveau de technicité** | Débutant · Confirmé · Spécialiste | `.niveau--debutant/confirme/specialiste` | jauge à 3 traits | conforme / bleu / ambre foncé |
| **Niveau de parcours** (Académie) | Débutant · Intermédiaire · Avancé | `.parcours--debut/fiscal/ctp` + texte `.parcours__niveau` | glyphe coloré | bleu pâle / ambre pâle / conforme pâle |
| **Format** | Analyse · Décryptage · Brève · Guide · Fiche d'évaluation · Rapport · Note de consultation · Dossier | `.etiquette` (neutre, jamais un badge) | étiquette tiretée | — |
| **Niveau d'impact** (infolettre) | Élevé · Modéré · Informatif | texte, couleurs `--statut-alerte` / `--statut-consultation` / `--texte-tertiaire` | texte majuscules | — |

**Règle opposable des badges.** Un badge de statut est une qualification juridique affichée ; il est juste ou faux, jamais décoratif. Un seul badge par objet. Pour signaler un format (« Analyse », « Dossier »), on emploie `.etiquette`, qui n'a ni couleur de statut ni pastille et ne peut pas être confondue. Cette règle vient d'un défaut réel de la première itération : faute d'étiquette neutre, le prototype détournait les badges à six endroits.

### 1.4 Le système de filtres par juridiction

**Composant.** `.juridictions` — barre de 46 px sous l'en-tête, fond `--fond-surface`, filet bas `--bordure`. À gauche, le libellé « MA JURIDICTION » (`--t-micro`, majuscules, `--interlettre-etiq`). Puis le commutateur `.commutateur` : quatre `.commutateur__option` dans une pilule `--fond-surface-2` bordée, chacune précédée d'un losange à la couleur de sa juridiction. L'option active passe sur `--marque-navy` avec texte blanc et losange `--marque-ambre` (16,5:1 — c'est l'un des rares emplois du blanc sur aplat de marque, et il est autorisé parce que le navy est un jeton d'aplat, non de texte). À droite, la note : « Le filtre masque ce qui ne s'applique pas à votre province. Il ne trie pas, il ne recommande rien. » — masquée sous 760 px.

**Comportement.** Le bouton pose `data-juridiction` sur `<html>` ; la feuille fait tout le reste :

```css
:root[data-juridiction="quebec"]  [data-jur]:not([data-jur~="quebec"]):not([data-jur~="multi"]):not([data-jur~="federal"]) { display: none !important; }
:root[data-juridiction="ontario"] [data-jur]:not([data-jur~="ontario"]):not([data-jur~="multi"]):not([data-jur~="federal"]) { display: none !important; }
:root[data-juridiction="intl"]    [data-jur]:not([data-jur~="intl"]):not([data-jur~="multi"]) { display: none !important; }
```

« Tout Canada » ne pose aucune règle : c'est la vue par défaut, et la une doit y compter ses quatre actualités. Un Québécois voit le fédéral, l'harmonisé et le Québec ; il ne voit pas l'Ontario. Un contenu sans `data-jur` n'est jamais masqué. Le choix est mémorisé dans `localStorage` sous `actio.juridiction` et rétabli avant le premier rendu par le script anti-scintillement du `<head>` : un Québécois ne le refait pas à chaque visite, et la page ne « saute » pas au chargement.

**Ce que le filtre ne fait pas.** Il ne réordonne rien, ne pondère rien, ne déduit rien de l'adresse IP — cette dernière serait un renseignement personnel traité sans nécessité au sens de la Loi 25. Il ne s'applique pas à l'article ouvert (un lecteur qui a cliqué veut lire) ni au registre (qui a ses propres filtres par province).

### 1.5 Bilinguisme

Deux arbres, `/fr/` et `/en/`, aux profondeurs identiques. Le sélecteur `.selecteur` de l'en-tête est fait de **deux liens**, pas de deux boutons : le lecteur doit pouvoir partager l'URL de la version qu'il lit. Une page sans traduction le signale par un astérisque ambré et un `title` ; le lien mène alors à l'index anglais du pilier. Balises `hreflang` réciproques, `x-default` vers le français. Aucun contenu n'est publié en anglais avant, plus vite ou plus complètement qu'en français ; les termes officiels sont ceux des autorités dans chaque langue (*courtier restreint / restricted dealer*, *engagement préalable / pre-registration undertaking*, *cryptoactif arrimé à une valeur / value-referenced crypto asset*). Les liens de `prototype/en/index.html` vers des articles n'existant qu'en français portent le marqueur `.langue-alt` « (FR) », lu par les technologies d'assistance grâce à son attribut `lang`.

---

## 2. Wireframe haute fidélité de la page d'accueil

**Géométrie.** Grille de 12 colonnes, conteneur `--grille-max` 1320 px, gouttière `--grille-gouttiere` 24 px, marge latérale `--grille-marge` `clamp(16px, 4vw, 48px)`. Au conteneur maximal, une colonne vaut 88 px : `.col-8` = 8 × 88 + 7 × 24 = 872 px, `.col-4` = 4 × 88 + 3 × 24 = 424 px, `.col-3` = 312 px. **Quatre points de rupture, et quatre seulement** : 1100 px (l'en-tête se replie, les blocs larges passent en pleine largeur), 900 px (gouttière réduite à 16 px, bloc Research en une colonne), 760 px (tout s'empile — c'est la mesure de lecture), 560 px (bio et portail). Les espacements de l'en-tête sont fluides en `clamp()` pour que la barre tienne à toute largeur du palier 1100–1440 sans cinquième seuil.

**Ordre vertical et rythme.** Bandeau de probité → Bandeau supérieur → En-tête → Commutateur de juridiction → Hero → Baromètre → Académie → Comparateur → Fiscalité → Research → Infolettre → Pied de page. Les sections alternent grille de cartes / bloc unique / tableau, pour que l'œil ne lise pas une colonne de cartes identiques : c'est la leçon de Cryptoast, dont l'accueil change de forme à chaque bloc.

### 2.1 Bandeau de probité (prototype seulement)

`.demo` — fond `--demo-fond` #92400E, texte blanc (6,3:1), 11 px. Il dit trois choses : que les contenus sont des maquettes, que les faits n'ont pas été lus à la source, que les chiffres du comparateur sont illustratifs. Il renvoie au registre de vérification. Il disparaît au lancement ; jusque-là il ne peut pas être retiré, parce qu'un prototype qui ressemble à un site publié trompe celui qui le consulte.

### 2.2 Bandeau supérieur — `.cotations`

**Rôle.** Donner en une ligne les trois informations qu'un lecteur financier veut avant tout : le marché, le statut réglementaire, sa langue.

**Grille et couleurs.** Pleine largeur, fond `--encre-fond` #0A1128 (le bleu nuit profond du cahier des charges — la bande reste sombre dans les deux thèmes), texte `--encre-texte` #F1F5F9 (17,4:1), police `--police-donnee` JetBrains Mono 13 px. Piste flex `.cotations__piste` à gouttière fluide `clamp(12px, 1.6vw, 24px)`, `overflow-x: auto` avec ascenseur masqué : sous 1280 px la piste défile, elle ne se replie jamais.

**Contenu, de gauche à droite.**
1. `.etiquette--demo` « Démo » — ambre d'encre `--encre-accent` sur filet, signale que le flux n'est pas branché.
2. Trois `.cours` : `BTC/CAD`, `ETH/CAD`, `SOL/CAD`. Chacun : symbole en gras (`.cours__sym`), valeur en chiffres tabulaires (`.cours__val`), variation 24 h (`.cours__var`) précédée d'un glyphe généré ▲ / ▼ / → et d'un libellé masqué « variation 24 h : » lu par les lecteurs d'écran — la hausse et la baisse ne reposent jamais sur la seule couleur (`--encre-hausse` #34D399, `--encre-baisse` #F87171). En prototype : « — n. d. ». En production : flux sous licence rafraîchi toutes les 60 s, valeur figée et horodatée si le flux tombe.
3. `.marche` « Marché ouvert 24/7 · flux non branché » — pastille verte pulsée (`.marche::before`), grise en `.marche--ferme`. Les marchés de cryptoactifs n'ont pas de séance : le « statut du marché » du cahier des charges est donc défini comme la **disponibilité du flux**, et le `title` le dit.
4. `.conformite`, poussé à droite par `margin-left: auto` : pastille verte, puis « Plateformes enregistrées ACVM : **N** autorisées à ce jour », le nombre en `.conformite__compte` ambre tabulaire. Cliquable vers `registre.html`. **Le nombre n'est jamais saisi à la main** : il est alimenté par la synchronisation du registre (`data-registre-compte`), et affiche « — » tant qu'elle n'est pas branchée. Le « 12 » du cahier des charges est le type de valeur attendue, pas une donnée que le prototype peut affirmer.

Le sélecteur de langue et le thème ne sont pas dans cette bande mais dans l'en-tête principal, où ils restent visibles au défilement (la bande de cotations, elle, ne l'est pas).

### 2.3 En-tête principal — `.entete`

**Grille.** Collant (`position: sticky; top: 0`, `--z-entete` 200), fond `--fond-page` à 92 % avec `backdrop-filter`, filet bas `--bordure`. Barre `.entete__barre` de 64 px : logo · navigation · actions, gouttière `clamp(12px, 1.6vw, 24px)`.

**Logo `.logo`.** « Actio » en Newsreader 700, 26 px, `letter-spacing: -.02em` — la sérif juridique affirmée — suivi de `.logo__point` : un trait vertical de 3 × 0,62 em en `--marque-bleu` #2563EB, le trait techno minimaliste. Il évoque un curseur ou une barre de mesure, jamais un point final ; il ne prend jamais une autre couleur. Le favicon reprend la même construction : un A sur navy, un trait bleu à droite.

**Navigation `.nav`.** Cinq entrées, `--t-petit` 600, padding horizontal fluide `clamp(6px, 0.85vw, 12px)`. Les deux premières sont des `<button aria-expanded aria-controls>` (un déclencheur de menu est un bouton, jamais un lien), avec chevron `.nav__chevron` qui pivote à l'ouverture. Les trois autres sont des liens. L'entrée courante porte `aria-current="page"` et un filet bas de 2 px `--marque-bleu-fonce`.

**Méga-menus `.megamenu`.** Absolus sous l'en-tête, fond `--fond-surface`, ombre `--ombre-3`, grille 12 colonnes en `padding-block: var(--e-8)`. *Actualités & Régulation* : quatre colonnes `.col-3` — Fédéral / Provincial / Affaires juridiques & litiges / Jalonnement & FNB institutionnels — de quatre liens chacune, reprenant exactement la taxonomie N2–N3 du § 1.2. *Académie* : Débutant / Intermédiaire / Avancé (quatre liens chacune) et une colonne vedette `.megamenu__vedette` sur le lexique bilingue. Fermeture à Échap (focus rendu au déclencheur), au clic extérieur, ou en repassant en disposition large. Sous 1100 px, le méga-menu perd son positionnement absolu et se déplie sur place dans le panneau mobile.

**Recherche universelle `.recherche`.** Champ `.recherche__champ` de 220 à 420 px, icône loupe absolue, placeholder « Loi, avis, cryptoactif… », `role="combobox"` avec `aria-autocomplete="list"`, `aria-expanded`, `aria-controls` vers la liste `role="listbox"`. Dès deux caractères, `actio.js` filtre l'index embarqué (§ 8 du script) — accents ignorés — et rend jusqu'à neuf `.recherche__item` groupés par en-tête `.recherche__groupe` : **Textes et avis** (Avis 21-327, 21-329, 21-330, 21-332, 21-333, Règlements 31-103, 21-101, 81-102, LRPCFAT, LESM, bulletin IT-479R, T1135), **Autorités** (ACVM, AMF, CVMO, OCRI, CANAFE, ARC, Revenu Québec), **Cryptoactifs** (BTC, ETH, SOL, jetons arrimés), **Plateformes** (les cinq fiches). Chaque item : titre en gras, sous-titre en `--t-micro`, touche `↵` à droite. Flèches pour naviguer (`aria-activedescendant`), Entrée pour choisir, Échap pour fermer, état vide « Aucun résultat pour “…”. Essayez un numéro d'avis, une autorité ou un cryptoactif. » En production, l'index vient de l'API du CMS et la liste renvoie vers les pages ; dans le prototype, il est statique.

**Actions.** `.selecteur` langue (deux liens FR / EN, actif en navy), `.selecteur` thème (☀ / A / ☾ — clair, système, sombre — `aria-pressed`, mémorisé sous `actio.theme`), puis `.btn--pro` « S'abonner à la newsletter » (fond `--texte-primaire`, texte `--fond-page`, padding fluide) qui mène à `#infolettre`.

**Sous 1100 px.** `.burger` 42 × 42 px apparaît ; `.nav` et `.entete__actions` sont masqués et rétablis sous `.entete[data-ouvert="true"]` en colonne, la recherche en pleine largeur, le bouton d'abonnement en `flex: 1 1 100%`. Repasser en disposition large referme le panneau (sinon il resterait ouvert et masqué, piégeant le focus).

### 2.4 Commutateur de juridiction — `.juridictions`

Spécifié au § 1.4. Position : immédiatement sous l'en-tête, non collant (il n'a pas à survivre au défilement — le choix est mémorisé). Sur mobile, la pilule défile horizontalement dans sa propre boîte.

### 2.5 Hero — `.une`, grille asymétrique 8 / 4

**Rôle.** Une seule grande analyse à gauche, quatre actualités chaudes à droite : le lecteur pressé lit la colonne de droite, le lecteur d'analyse lit la gauche. La proportion 8/4 (872 px / 424 px) donne à la une une mesure de titre de 20 à 24 caractères par ligne à `--t-h1`, et à la colonne de droite la largeur d'une vignette 84 px + un titre de deux lignes.

**Colonne gauche `.col-8.une__principal`.** Padding droit `--e-8`, filet droit `--bordure` (qui devient un filet bas sous 1100 px). De haut en bas :
- Ligne d'étiquettes : `.rubrique` « Actualités & Régulation » (`--t-micro`, majuscules, filet bas 3 px `--marque-bleu-fonce`), `.badge--consultation` « Consultation publique », `.juridiction--multi` « ACVM · Fédéral ».
- `.une__titre` : `--t-h1` (34 → 54 px fluide), Newsreader 700, `--lh-serre` 1,12, `text-wrap: balance`. Texte réel : *« Stablecoins : entre l'Avis 21-333 des ACVM et la loi fédérale, qui décide de ce qu'un Québécois ou un Ontarien peut acheter ? »*
- `.une__chapeau` : `--t-lead`, `--texte-secondaire`, trois à quatre lignes. Texte réel : *« La loi fédérale sur les cryptomonnaies stables est adoptée mais pas en vigueur ; le régime intérimaire des ACVM, lui, continue de dicter aux plateformes quels jetons arrimés au dollar elles peuvent offrir. Deux régimes, deux logiques, et une question que personne n'a tranchée : lequel prime quand ils se contredisent. Décryptage à l'intention des investisseurs et des directions de la conformité. »*
- `.une__visuel` : 16/9, dégradé `--degrade-1` → `--degrade-2` → `--degrade-3` (#0A1128 → #1E3A8A → #2563EB, invariant par thème, blanc lisible à 14,4 / 8,7 / 5,2), grille SVG. Le schéma est **le contenu** de l'article : deux régimes empilés, le fédéral en pointillé avec l'étiquette « ÉDICTÉ ≠ EN VIGUEUR » sur `--fill-alerte`, l'intérimaire en trait plein ambré avec « EN VIGUEUR » sur `--encre-accent`. Légende JetBrains Mono : *« un même jeton · deux autorités · aucune règle de conflit publiée »*. `role="img"` et `aria-label` décrivent la même chose.
- `.une__signature` : **Marie-Claude Fortin**, juriste en valeurs mobilières · `.juridiction` « ACVM / Fédéral » · `<time>` 4 septembre 2026 · 9 min.

**Colonne droite `.col-4.chaud`.** Titre `.chaud__titre` « ACTUALITÉS CHAUDES » avec, à droite, `.chaud__direct` « En continu » précédé d'une pastille rouge pulsée (animation coupée sous `prefers-reduced-motion`). Puis quatre `.actu` : vignette 84 × 63 px `.actu__vignette` (SVG teinté à la couleur de juridiction — courbe, carte, horloge, globe), titre `.actu__titre` Newsreader 600 sur deux lignes, méta `.actu__meta` avec `<time data-relatif datetime="…">` et la juridiction. **L'horodatage relatif est calculé par `actio.js` depuis l'attribut `datetime`, rafraîchi chaque minute** ; un « il y a 18 min » écrit en dur mentirait dès la dix-neuvième minute. Chaque `.actu` porte `data-jur` et répond au commutateur. Les quatre du prototype : *Blocage d'accès : l'AMF obtient une nouvelle ordonnance visant une plateforme non inscrite* (Québec) · *CANAFE : nouvelle vague de révocations d'inscriptions d'ESM* (Fédéral) · *FNB de bitcoin cotés à Toronto : les entrées nettes hebdomadaires repassent en positif* (Ontario · TSX) · *Cadre de déclaration des cryptoactifs de l'OCDE : ce que l'échange automatique changera pour l'ARC* (International).

### 2.6 Le Baromètre réglementaire — `.barometre` (exclusivité Actio)

**Rôle.** Répondre à la question que se pose une direction de la conformité chaque matin : *qu'est-ce qui a bougé, et à quel stade ?* Quatre cartes, une par statut de texte. Le statut est porté par la carte entière — filet supérieur de 4 px — avant même le titre.

**Grille.** `grid-template-columns: repeat(4, 1fr)`, gouttière 24 px ; 2 × 2 sous 1100 px ; empilé sous 760 px. Chaque `.baro` : fond `--fond-surface`, filet `--bordure`, rayon `--rayon-2`, padding `--e-5`, `.baro--consultation` (filet `--statut-consultation`), `--avis` (`--statut-info`), `--vigueur` (`--statut-conforme`), `--garde` (`--statut-alerte`).

**Anatomie d'une carte.** `.baro__statut` (badge et date empilés) → `.baro__titre` Newsreader 600 → `.baro__impact` (encadré `--fond-surface-2` à filet gauche ambré, intitulé « IMPACT INVESTISSEUR » en `--marque-ambre-fonce`) → `.baro__source` (lien vers le texte officiel avec ↗, et à droite l'état de vérification en ambre).

**Les quatre entrées du prototype.**

| Statut | Titre | Impact investisseur | Source |
|---|---|---|---|
| En consultation publique · Clôture : à confirmer | Règlements d'application de la loi fédérale sur les cryptomonnaies stables | Aucun aujourd'hui : la loi est adoptée, non en vigueur. Un émetteur qui prépare son inscription doit bâtir sur deux régimes, le fédéral à venir et l'Avis 21-333 en vigueur. | Gazette du Canada, Partie I [à vérifier] |
| Nouvel avis du personnel ACVM · 22 oct. 2025 | Prêts adossés à des cryptoactifs : rappel des obligations d'inscription et de prospectus | Une offre de liquidité contre nantissement de cryptoactifs peut constituer un placement. Vérifiez que la plateforme prêteuse est inscrite dans votre province avant de déposer un actif. | Communiqué des ACVM [à vérifier] |
| Entrée en vigueur · 3 févr. 2026 | Cadre de garde des actifs numériques de l'OCRI : dépositaires par paliers | Vos cryptoactifs détenus chez un courtier membre de l'OCRI doivent l'être auprès d'un dépositaire acceptable. Demandez à votre plateforme le nom de son dépositaire et son palier. | Bulletin de l'OCRI [à vérifier] |
| Mise en garde AMF · 31 août 2026 | Plateforme non inscrite ciblant des résidents du Québec — ordonnance de blocage | Une plateforme visée par une mise en garde ne vous fait bénéficier d'aucune protection prévue par la législation en valeurs mobilières, y compris en cas d'insolvabilité. Retirez vos actifs si vous le pouvez encore. | Mise en garde de l'AMF [nom à confirmer] |

Les quatre portent `data-jur` (federal, multi, multi, quebec) et se filtrent. **Chaque entrée porte son état de vérification dans la carte même** : les dates et intitulés proviennent de la base de veille, non des textes lus. Au lancement, l'état « [à vérifier] » disparaît carte par carte au fil des relectures sur source ; une carte ne peut pas être publiée sans lien vers le texte officiel.

### 2.7 Guides & Académie — `.parcours-grille`

**Rôle.** Les trois parcours du cahier des charges, présentés comme des chemins et non comme des listes : un glyphe, un niveau, un titre-promesse à la première personne, une description, les étapes numérotées (ici la numérotation encode une séquence réelle), un pied qui dit la suite.

**Grille.** Trois `.parcours` en `repeat(3, 1fr)`, une colonne sous 1100 px. Chaque carte : `96px 1fr`, glyphe `.parcours__glyphe` 96 × 96 px (SVG en trait, fond `--marque-bleu-pale` / `--marque-ambre-pale` / `--statut-conforme-pale` selon le parcours), titre `.parcours__titre` `--t-h4`, étapes `.parcours__etapes` en `<ol>` à compteur circulaire. Survol : filet `--marque-bleu`, ombre `--ombre-2`. Toute la carte est cliquable (`.parcours__titre a::after`).

| Parcours | Niveau | Étapes (réelles) | Pied |
|---|---|---|---|
| **Je débute au Canada** — Dépôts par virement Interac, choix d'une plateforme inscrite, sécurité du compte | Débutant · 4 guides · 45 min | Comprendre la chaîne de blocs en dix minutes · Vérifier qu'une plateforme est inscrite dans ma province · Premier dépôt par virement Interac : délais, plafonds, frais · Sécuriser son compte : authentification, hameçonnage, retraits | Prochaine étape : Intermédiaire — autogarde et DeFi |
| **Je déclare mes cryptos** — ARC et Revenu Québec : PBR, gain en capital ou revenu d'entreprise, T1135, TP-21.4.39 | Intermédiaire · 5 guides · 1 h 20 | Quelles opérations sont des dispositions · Calculer le PBR lot par lot · Gain en capital ou revenu d'entreprise : les facteurs du bulletin IT-479R · T1135 et biens étrangers déterminés · Québec : la déclaration TP-21.4.39 | À jour pour l'année d'imposition 2025 · révisé chaque printemps |
| **Je comprends la régulation des CTPs** — Du contrat de cryptoactif à l'adhésion à l'OCRI | Avancé · 4 guides · 2 h | Le contrat de cryptoactif : pourquoi la plateforme est réglementée, pas le jeton · Engagement préalable, courtier restreint, courtier en placement · Garde : paliers de dépositaires et limites de l'autogarde · Le second guichet : CANAFE et permis québécois d'ESM | Public : conformité, cabinets, administrateurs |

### 2.8 Comparateur transparent des plateformes canadiennes — `.comparateur`

**Rôle et contrainte.** C'est le cœur monétaire de Cryptoast et le point de friction majeur du cadre canadien. Le composant est donc conçu à l'envers du comparatif habituel : **la méthode est au-dessus du tableau, pas en note de bas de page ; un chiffre non relevé ne s'affiche pas ; le statut d'inscription renvoie au registre officiel ; aucun lien d'affiliation ne part de ce tableau.**

**Anatomie.**
1. `.comparateur__methode` — bandeau `--fond-surface-2` en deux colonnes : à gauche la méthode (*Seules figurent des plateformes inscrites auprès d'au moins un membre des ACVM. Le score Actio /5 pondère sécurité de la garde 40 %, transparence des frais 30 %, qualité du service 20 %, conformité documentée 10 %. Les écarts sont relevés à heure fixe sur un achat de 1 000 $ CA en BTC. Aucun lien d'affiliation n'influe sur le score ; toute rémunération est divulguée dans la fiche.*) ; à droite `.comparateur__arrete` « Relevé du : — / Prochain relevé : mensuel ». Le prototype ajoute en ambre : *les valeurs chiffrées ci-dessous sont illustratives et n'ont pas été relevées.*
2. Tableau (`min-width: 820px`, défilement horizontal dans `.comparateur__defilement`) à six colonnes : **Plateforme** (`.plateforme` — monogramme 40 px sur navy, nom, ville et catégorie d'inscription) · **Score Actio** (`.score` — cinq étoiles SVG dessinées par `actio.js` depuis `data-score`, note en chiffres tabulaires, `aria-label` « Score Actio : 4,2 sur 5 ») · **Écart constaté (BTC)** · **Retrait Interac** · **Statut d'inscription** (`.badge--conforme` « Inscrite » + lien « registre ↗ ») · action `.comparateur__cta` « Fiche complète ».
3. `.comparateur__pied` — *Le statut « Inscrite » est repris du registre de l'autorité de chaque province et renvoie à la fiche officielle ; il n'est ni une recommandation ni une garantie. Une inscription vaut pour une province : vérifiez la vôtre. Actio peut percevoir une commission si vous ouvrez un compte depuis une fiche — jamais depuis ce tableau, et toujours divulguée dans le corps de la fiche.*

**Les trois lignes du prototype** : Shakepay (Montréal · courtier · 4,2), Newton (Toronto · courtier · 4,0), Wealthsimple Crypto (Toronto · courtier en placement · 4,4). Les écarts (≈ 1,8 % / 0,7 % / 1,5 %) et délais de retrait (< 30 min / 1–2 j / 1–3 j) portent chacun la mention `.donnee--nd` « illustratif ». **Ils n'ont pas été relevés et ne peuvent pas l'être depuis l'environnement de conception.** Le protocole de relevé — heure fixe, montant fixe, capture d'écran horodatée, deux relevés indépendants — est décrit au Module 4, § 3. Le statut « Inscrite » lui-même est à confirmer plateforme par plateforme sur le registre de chaque province avant publication.

### 2.9 Fiscalité & Droit pratique et Actio Research

Deux sections plus courtes qui donnent à l'accueil ses cinq piliers. **Fiscalité** : trois `.carte.col-4` — *Calculer le PBR d'un cryptoactif acheté en dix fois* (guide), *Gain en capital ou revenu d'entreprise : les huit facteurs du bulletin IT-479R appliqués au négoce actif* (décryptage), *TP-21.4.39 : la déclaration québécoise exigible même sans transaction* (obligation déclarative, `data-jur="quebec"`). **Research** : le bloc `.pro` à filet fort — titre *« Ce que les chiffres canadiens disent, trimestre après trimestre. »*, quatre livrables (rapport T3 2026, flux des FNB TSX, consultations décryptées, cartographie des inscriptions), bouton `--fill-primaire` « Consulter les dossiers », mention que les données brutes relèvent d'Actio Pro (phase 4).

### 2.10 Bandeau d'acquisition — `.infolettre`

**Grille.** Hors du conteneur principal, dans son propre `.section`, rayon `--rayon-4` 16 px, fond `--encre-fond` avec deux halos radiaux `--marque-bleu` et `--encre-accent`. Padding `--e-12 --e-10`, `--e-8 --e-5` sous 760 px.

**Anatomie de conversion.**
1. `.infolettre__sur` « ACTIO DISPATCH · DEUX FOIS PAR SEMAINE » en `--encre-accent` (le jaune Cryptoast sur nuit, 9,4:1).
2. `.infolettre__titre` `--t-h2` : *« Le mardi, ce que la régulation a changé. Le vendredi, ce que vous devez faire. »*
3. `.infolettre__promesse` : *« Mardi 7 h HE : l'analyse réglementaire et macro de la semaine. Vendredi 12 h HE : le récapitulatif et un guide pratique. Sourcé, daté, sans recommandation d'achat, lu en quatre minutes. »*
4. **Consentement LCAP avant le champ** — `.infolettre__consentement` : case jamais pré-cochée, texte : *« Je consens expressément à recevoir Actio Dispatch et les communications électroniques commerciales d'Actio, conformément à la Loi canadienne anti-pourriel (LCAP). Retrait possible en tout temps par le lien de désabonnement de chaque message. Politique de confidentialité. »* La case précède le bouton dans le DOM : un usager au clavier rencontre le consentement avant « Recevoir ». `actio.js` bloque l'envoi sans case cochée et affiche le motif dans `[data-etat]` (`aria-live="polite"`).
5. `.infolettre__form` : champ courriel `.champ` + bouton `--fill-primaire` « Recevoir Actio Dispatch ».
6. `.infolettre__reassurance` : ✓ Zéro pourriel — deux envois par semaine, jamais plus · ✓ Désabonnement en un clic, traité sous 10 jours ouvrables · ✓ Données hébergées au Canada, jamais cédées.
7. `.infolettre__preuve-sociale` : trois avatars-monogrammes ambrés empilés, puis *« Rejoint par **15 000 juristes, investisseurs et professionnels de la finance** au Canada. »* — c'est le gabarit de la preuve sociale ; **le chiffre doit être vrai le jour de l'envoi** et est remplacé au lancement par le compte réel, arrondi à la centaine inférieure.

### 2.11 Pied de page institutionnel — `.pied`

Fond `--fond-surface-2`, filet supérieur 2 px `--texte-primaire`. Grille 4 / 2 / 3 / 3 :
- **Identité** : logo, description en deux langues, adresse postale complète d'Actio Média inc. (1000, rue De La Gauchetière Ouest, bureau 2400, Montréal H3B 4W5) et courriel — l'adresse est celle qu'exige la LCAP dans tout message, elle doit donc être la même partout.
- **Plan du site** : les cinq piliers, le registre, le lexique, le plan complet.
- **Registres officiels partenaires** : ACVM (recherche nationale d'inscription), AMF (registre et mises en garde), CVMO, OCRI (courtiers membres), CANAFE (ESM), Revenu Québec (permis d'ESM), Gazette du Canada — tous en `rel="external noopener"` avec ↗ généré.
- **Transparence et légal** : charte éditoriale et indépendance, politique d'affiliation et de divulgation, méthode du comparateur, politique de correction, conflits d'intérêts de la rédaction, mentions légales, nous signaler une erreur.

Puis `.avertissement` (filet `--statut-alerte`, fond pâle) en trois paragraphes : absence de conseil et d'inscription ; état du droit daté et invitation à consulter un professionnel ; **volatilité** (*« Les cryptoactifs sont des actifs hautement volatils. Vous pouvez perdre la totalité des sommes investies. »*), plateformes non inscrites, et la phrase propre au comparateur : *« Les comparatifs et fiches d'évaluation sont établis selon une méthode publiée et peuvent donner lieu à une rémunération d'affiliation, toujours divulguée ; ils ne constituent jamais une recommandation. »* Enfin `.pied__legal` : copyright, mentions légales, conditions, confidentialité (Loi 25 / LPRPDE), témoins, accessibilité (WCAG 2.1 AA), nous joindre.

---

## 3. Gabarit « Décryptage / Analyse réglementaire »

Fichier : `prototype/fr/article.html`, feuille `prototype/assets/article.css`. Conteneur resserré à 1200 px ; colonne de lecture `--mesure-lecture` 760 px (≈ 72 caractères) ; **sommaire collant en colonne de gauche** (240 px) sur bureau, remonté au-dessus de la prose sous 1100 px.

### 3.1 Fil d'Ariane — `.ariane`

Cinq niveaux, séparateur › généré, JetBrains Mono 11 px : *Accueil › Actualités & Régulation › Fédéral › Cryptoactifs arrimés à une valeur › [page courante]*. Le niveau courant est un `<span aria-current="page">` sans lien. Il est **dynamique** en ce qu'il reflète la position réelle dans l'arborescence du § 1.2, jamais un chemin décoratif ; un article rattaché à deux sous-rubriques prend celle de son URL canonique.

### 3.2 Bloc-titre — `.article__entete`

- `.article__etiquettes` : `.rubrique` · `.badge` de statut · `.juridiction` (ici « ACVM · Fédéral · Québec · Ontario ») · **`.niveau`** de technicité — pilule JetBrains Mono avec jauge à trois traits : `.niveau--debutant` (un trait vert), `--confirme` (deux traits bleus), `--specialiste` (trois traits ambre foncé).
- `.article__titre` H1 `--t-h1` Newsreader 600, `text-wrap: balance`.
- `.article__chapeau` `--t-lead`, 64 caractères de mesure, quatre à cinq lignes.
- `.article__signature` : portrait-monogramme 40 px sur dégradé, nom et fonction, dates (publication et relecture juridique), temps de lecture, outils Partager / Imprimer / Citer.

### 3.3 « En bref » — `.en-bref` (style Cryptoast)

Encadré **bleu glacier** : fond `--marque-bleu-pale` #DBEAFE, filet `--marque-bleu-fonce` 30 %, filet gauche 5 px `--marque-bleu-fonce`, rayon asymétrique. Titre « EN BREF » avec étoile SVG et, à droite, « 30 secondes ». Liste `.en-bref__liste` de **trois à quatre puces, jamais plus** — au-delà ce n'est plus un résumé mais un second article — chacune ouvrant par une affirmation en gras puis sa justification en une phrase. Puce losange bleue. Les quatre du prototype : *Deux régimes sur un même jeton* · *C'est la plateforme qui décide, pas vous* · *Québec et Ontario ne divergent pas — encore* · *Aucune règle de conflit n'est publiée*. Mesure limitée à `--mesure-lecture`.

### 3.4 Sommaire interactif — `.sommaire`

Colonne gauche, `position: sticky; top: 96px`, filet droit `--bordure`. Liste numérotée par compteur CSS ; l'entrée courante (`aria-current="true"`, posée par un `IntersectionObserver` sur les `h2` de `.prose`) passe en `--marque-bleu-fonce` sur `--marque-bleu-pale` avec filet gauche `--marque-bleu`. Sous la liste, `.sommaire__progression` : « Lecture 42 % » et une barre bleue calculée au défilement. **Le sommaire est engendré depuis les `h2` porteurs d'un `id`** ; `tools/verifier.mjs` échoue si un `h2` de prose manque au sommaire, si une entrée n'a pas de section, ou si l'ordre diffère.

### 3.5 Corps — `.prose`

`--t-base` 17 px, `--lh-texte` 1,7, `> * + *` en `--e-5`. `h2` `--t-h3` avec filet supérieur et `scroll-margin-top: 96px` ; `h3` `--t-h4` ; marqueurs de liste en `--marque-bleu-fonce` ; citation `blockquote` en Newsreader italique avec filet ambré ; renvois `.renvoi` en exposant JetBrains Mono. Les cinq sections du prototype : *Ce que l'Avis 21-333 impose aujourd'hui* · *Ce que la loi fédérale imposera demain* · *Québec, Ontario : même avis, décisions différentes* · *Le conflit que personne n'a tranché* · *Ce que la rédaction surveille*.

### 3.6 Encadrés récurrents — `.encadre`

Deux encadrés normés, **jamais mélangés** : chacun a une vocation, une couleur, un gabarit rédactionnel.

**`.note-conformite` — « Avis du juriste / note de conformité ».** Filet **doré** : `--marque-ambre` #F59E0B à 55 % en bordure, 4 px pleins à gauche ; en-tête sur `--marque-ambre-pale` en `--marque-ambre-fonce` avec icône bouclier. Corps en trois paragraphes obligatoires : **Texte applicable** (les instruments en `.encadre__loi`, pilule mono — ici *Avis 21-333* et *Règlement 31-103*, avec la précision qu'un avis n'est pas un règlement), **Ce que cela signifie pour une plateforme**, **Ce que cela signifie pour l'investisseur**. Puis `.note-conformite__signature` (*Rédigé par Marie-Claude Fortin, révision juridique à faire avant publication*) et `.encadre__ref` portant l'état de vérification. Cet encadré ne donne jamais de conseil individuel : il éclaire le texte, il ne l'applique pas à une situation.

**`.mise-en-garde` — « Mise en garde investisseur ».** Rouge **feutré** : `--statut-alerte` #B91C1C à 40 % en bordure, 4 px à gauche, en-tête sur `--statut-alerte-pale` avec icône triangle. Corps : liste `.mise-en-garde__risques` à puces ▲, chaque risque nommé en gras puis expliqué en une phrase. Les quatre du prototype : *risque de contrepartie sur l'émetteur* · *risque de retrait de la liste* · *risque de désarrimage* · *aucune protection d'assurance-dépôts (SADC)*. Cet encadré nomme des risques **spécifiques à l'objet de l'article** — jamais le rappel générique de volatilité, qui appartient à l'avertissement de pied de page.

### 3.7 Tableau synthétique — `.tableau`

Légende en majuscules au-dessus (*Deux régimes sur un même jeton — état au 4 septembre 2026*), en-têtes collants, chiffres alignés à droite en tabulaire (`td[data-num]`), défilement horizontal dans sa propre boîte sous 560 px. Le tableau du prototype confronte l'Avis 21-333 et la loi fédérale sur cinq lignes : qui est visé, nature du texte, état (badges « En vigueur » / « Édicté, non en vigueur »), ressort, règle de conflit (« Aucune publiée »).

### 3.8 Sources officielles citées — `.sources`

Liste numérotée `[1]`…`[n]` à renvois, typée par `.sources__type` (Avis / Loi / Règlement / Décision / Communiqué), lien direct vers le site de l'autorité, **et l'état de vérification en clair** pour chaque source non lue à la source. Règle : lien vers le texte primaire, jamais vers un commentaire ; une source qui ne peut pas être vérifiée reste marquée, elle n'est pas retirée.

### 3.9 Fiche auteur — `.bio`

Portrait 72 px, nom, fonction, **qualifications** en pilules `.bio__qualif` (*Barreau du Québec · LL.M. droit des valeurs mobilières · Ex-conformité, courtier en placement*), notice, liens (tous ses articles, contact sécurisé), puis `.bio__declaration` : détention d'actifs, rémunération, mandats, financement de l'article — la déclaration d'intérêts est obligatoire, spécifique à l'article, et ne peut pas être remplacée par un renvoi à une page générale.

### 3.10 Avertissement de portée

`.avertissement` en fin de prose : juridictions couvertes et date, rappel qu'un avis du personnel n'est pas un règlement et qu'un texte sanctionné n'est pas nécessairement en vigueur — le piège central du dossier fédéral —, absence de conseil. Puis `.suite` : trois cartes « À lire ensuite ».

### 3.11 Contrôles avant publication (liste opposable)

1. Un seul `h1` ; `h2` tous porteurs d'un `id` et présents au sommaire dans l'ordre (`npm run verifier`).
2. `.en-bref` : 3 ou 4 puces, chacune ouvrant sur une affirmation en gras.
3. `.niveau` posé ; `.juridiction` posée ; un seul `.badge`.
4. Chaque `.note-conformite` cite au moins un instrument en `.encadre__loi` et porte sa signature de relecture.
5. Chaque `.mise-en-garde` nomme des risques propres à l'article, pas la volatilité générique.
6. Toute source non lue à la source porte « [À VÉRIFIER] » dans `.sources` **et** dans le corps.
7. Déclaration d'intérêts spécifique à l'article.
8. Avertissement de portée daté, avec les juridictions.
9. `datePublished` / `dateModified` du JSON-LD `NewsArticle` cohérents avec le bloc-titre.
10. Contraste, liens, balisage : `npm run tout` au vert.
