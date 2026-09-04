# Actio

> Média canadien indépendant d’actualité, d’analyse réglementaire et d’éducation aux
> cryptoactifs et au Web3. Bilingue français / anglais canadien.
> *Actio*, du latin : action en justice, acte juridique, capacité d’agir.

Ce dépôt contient le blueprint de lancement complet en **quatre modules** — architecture et
maquettes, système d’infolettre, direction artistique et design system, fiche produit — **et le
prototype exécutable qui en découle**. Les documents ne décrivent pas une intention : ils
spécifient des fichiers qui existent et qu’on peut ouvrir dans un navigateur. La version v1
(trois livrables, palette « Encre et Vélin », cadence hebdomadaire) est archivée sous
`docs/v1/` et `newsletter/v1/`.

---

## Les quatre modules

| # | Module | Document | Artefacts exécutables |
|---|---|---|---|
| 1 | Architecture, arborescence, page d’accueil et gabarit d’article | [`docs/M1-architecture-wireframes.md`](docs/M1-architecture-wireframes.md) | [`prototype/fr/index.html`](prototype/fr/index.html) · [`fr/article.html`](prototype/fr/article.html) · [`fr/registre.html`](prototype/fr/registre.html) · [`en/index.html`](prototype/en/index.html) · [`index.html`](prototype/index.html) |
| 2 | *Actio Dispatch* — infolettre bi-hebdomadaire, édition pilote nº 042, séquence d’accueil | [`docs/M2-newsletter-actio-dispatch.md`](docs/M2-newsletter-actio-dispatch.md) | [`newsletter/actio-dispatch-042.html`](newsletter/actio-dispatch-042.html) · [`newsletter/chassis.html`](newsletter/chassis.html) · [`newsletter/contenus/`](newsletter/contenus/) · [`newsletter/manifeste.json`](newsletter/manifeste.json) |
| 3 | Direction artistique, typographies, design system, trois composants Tailwind | [`docs/M3-direction-artistique-design-system.md`](docs/M3-direction-artistique-design-system.md) | [`prototype/assets/tokens.css`](prototype/assets/tokens.css) · [`prototype/composants/index.html`](prototype/composants/index.html) · [`badge-statut.html`](prototype/composants/badge-statut.html) · [`encadre-en-bref.html`](prototype/composants/encadre-en-bref.html) · [`carte-plateforme.html`](prototype/composants/carte-plateforme.html) |
| 4 | PRD : stack Next.js 14 / Strapi / Resend, hébergement `ca-central-1` et Loi 25, veille, SEO/GEO et Schema.org, déontologie, revenus tripartite, feuille de route 12 mois | [`docs/M4-prd-seo-conformite-monetisation.md`](docs/M4-prd-seo-conformite-monetisation.md) | — (spécification d’exécution des trois modules précédents) |

Deux annexes opposables les accompagnent :
[`docs/annexes/registre-de-verification.md`](docs/annexes/registre-de-verification.md) — l’état de
vérification de chaque fait avancé par le prototype (45 lignes) et par l’infolettre (28 lignes) —
et [`docs/annexes/rapport-de-coherence.md`](docs/annexes/rapport-de-coherence.md) — la relecture
croisée des quatre modules et du code.

---

## Arborescence du dépôt

```
actio/
├── README.md                     ce document
├── package.json                  outillage (playwright-core, tailwindcss — hors production)
├── docs/
│   ├── M1-architecture-wireframes.md
│   ├── M2-newsletter-actio-dispatch.md
│   ├── M3-direction-artistique-design-system.md
│   ├── M4-prd-seo-conformite-monetisation.md
│   ├── annexes/
│   │   ├── registre-de-verification.md   état de vérification de chaque fait avancé
│   │   └── rapport-de-coherence.md       relecture croisée des modules et du code
│   └── v1/                       livrables et annexes de la première version (archive)
├── research/                     base factuelle — veille sur sources primaires
│   ├── 00-base-factuelle-consolidee.md   document de référence interne
│   └── 01-09-*.md                fiches par domaine (ACVM, AMF, OCRI, CANAFE, ARC, LCAP…)
├── prototype/
│   ├── index.html                portail de langue (« / » → 302 vers /fr/)
│   ├── fr/
│   │   ├── index.html            page d’accueil — cinq piliers, commutateur de juridiction,
│   │   │                         Baromètre réglementaire, Académie, comparateur, infolettre
│   │   ├── article.html          gabarit d’analyse — En bref, sommaire, note de conformité,
│   │   │                         mise en garde, sources, fiche auteur
│   │   └── registre.html         registre des plateformes autorisées
│   ├── en/
│   │   └── index.html            home page, Canadian English
│   ├── composants/
│   │   ├── index.html            galerie des composants Tailwind (rendu + source)
│   │   ├── badge-statut.html     composant 1 — badge de statut réglementaire
│   │   ├── encadre-en-bref.html  composant 2 — encadré « En bref »
│   │   ├── carte-plateforme.html composant 3 — carte comparative de plateforme
│   │   ├── composants.tw.css     source Tailwind v4 : chaque utilitaire renvoie à un jeton
│   │   └── composants.css        feuille compilée localement (aucun CDN)
│   └── assets/
│       ├── tokens.css            jetons de design — SOURCE DE VÉRITÉ unique
│       ├── actio.css             composants du site
│       ├── article.css           gabarit d’article
│       ├── registre.css          registre des plateformes
│       └── actio.js              thème, menu, recherche, juridiction, horodatages, score
├── newsletter/
│   ├── actio-dispatch-042.html   édition pilote nº 042, assemblée (référence versionnée)
│   ├── chassis.html              en-tête, bandeau de cours, pied de conformité LCAP
│   ├── contenus/                 dispatch-042, bienvenue-1, bienvenue-2, bienvenue-3
│   ├── manifeste.json            cadence mardi 7 h / vendredi 12 h HE, objets, champs de fusion
│   ├── dist/                     courriels assemblés (générés)
│   └── v1/                       châssis, contenus et manifeste de la première version
└── tools/
    ├── structure.mjs             balisage : équilibre, attributs répétés, identifiants en double
    ├── docs.mjs                  références des documents au code : chemins, classes, jetons
    ├── emails.mjs                assemblage des courriels + contrôle LCAP, couleurs, « HE »
    ├── composants.mjs            galerie des composants : injection, classes compilées, couleurs
    ├── verifier.mjs              liens, accessibilité, contraste sur le DOM rendu (6 pages)
    ├── captures.mjs              rendu multi-thème / multi-largeur + invariants
    └── artefact.mjs              document unique consultable en ligne
```

---

## Ouvrir le prototype

Aucune compilation. Les pages sont du HTML statique.

```bash
python3 -m http.server 8080 --directory actio/prototype
# puis http://localhost:8080/               portail de langue
#      http://localhost:8080/fr/            accueil français
#      http://localhost:8080/fr/article.html
#      http://localhost:8080/en/            home page, English
#      http://localhost:8080/composants/    composants Tailwind
```

Le prototype charge ses polices (Newsreader, Plus Jakarta Sans, JetBrains Mono) depuis Google
Fonts **à titre de démonstration seulement**. En production, elles doivent être auto-hébergées :
le chargement depuis un tiers transmet l’adresse IP du lecteur à ce tiers, ce qui constitue une
communication de renseignement personnel au sens de la Loi 25. Les piles de repli sont définies
dans `tokens.css` et le rendu reste correct hors ligne. La galerie de composants et les courriels
ne chargent aucune ressource tierce.

## Version consultable en ligne

Le prototype est aussi publié en un document unique, tous écrans réunis, avec leur navigation
réelle :
**[claude.ai/code/artifact/e33beee5-e998-48d5-b1dd-ffb984705ac5](https://claude.ai/code/artifact/e33beee5-e998-48d5-b1dd-ffb984705ac5)**

```bash
npm run artefact                 # régénère le document unique
```

`tools/artefact.mjs` replie les quatre feuilles de style et le script dans un seul fichier, espace
les identifiants et remplace les liens entre fichiers par des changements d’écran en conservant
l’ancre visée. **Il ne modifie ni le balisage, ni les feuilles de style, ni le script.**

## Vérifier

```bash
cd actio && npm install          # playwright-core et tailwindcss ; Chromium est préinstallé
npm run tout                     # structure → docs → courriels → composants → vérificateur
npm run captures                 # 36 rendus (6 écrans × 2 thèmes × 3 largeurs) + invariants
npm run tailwind                 # recompile composants.css depuis composants.tw.css
npm run artefact                 # régénère le document unique
```

Chaque outil sort en erreur plutôt qu’en avertissement, et nomme le fautif :

- **`structure.mjs`** lit le balisage sans moteur de rendu : balise mal fermée, attribut répété,
  identifiant en double — ce qu’un navigateur répare en silence et qu’un client de messagerie
  disloque.
- **`docs.mjs`** échoue si un document cite un chemin, une classe CSS ou un jeton qui n’existe pas.
  Les documents spécifient des fichiers ; une classe citée mais inexistante est une instruction
  que personne ne pourra exécuter.
- **`emails.mjs`** refuse d’assembler un courriel auquel manque une mention rendue obligatoire par
  la Loi canadienne anti-pourriel, qui dépasse le seuil de troncature de Gmail, qui emploie une
  couleur absente de `tokens.css`, un champ de fusion non déclaré, ou l’abréviation « EST » à la
  place de « HE ». Il compare l’assemblage à la référence versionnée et échoue s’ils divergent.
- **`composants.mjs`** injecte chaque fragment Tailwind dans la galerie (rendu et source), vérifie
  que chaque classe employée a été compilée et qu’aucune couleur n’est écrite en dur.
- **`verifier.mjs`** échoue sur un lien interne mort, une ancre inexistante, un lien externe sans
  `rel="noopener"`, un `h1` absent ou dupliqué, un saut de niveau de titre, un champ sans
  étiquette, un `<nav>` anonyme, un sommaire qui ne suit pas les sections, ou un rapport de
  contraste sous le seuil AA — mesuré sur le DOM rendu, deux thèmes, six pages, pseudo-éléments
  et opacité héritée compris.
- **`captures.mjs`** échoue si une page déborde horizontalement ou si la colonne de lecture
  excède la mesure fixée.

---

## Trois règles qui gouvernent tout le reste

**1. La couleur porte un statut, jamais une décoration.** Chaque jeton de statut de `tokens.css`
correspond à une catégorie d’acte réglementaire opposable — mise en garde, consultation, avis du
personnel, inscription en vigueur, archivé. Les couleurs imposées par le cahier des charges qui ne
tiennent pas le contraste AA comme texte (`#F59E0B`, `#10B981`, `#EF4444`) sont des **aplats** ;
leurs variantes « 700 » portent le texte. Les composants Tailwind n’ont aucune couleur propre :
chaque utilitaire renvoie à un jeton.

**2. Rien n’est publié qui n’ait été vérifié sur la source primaire.** La base factuelle de
`research/` a été constituée alors que l’accès direct aux sites des régulateurs était bloqué :
les références proviennent de résultats de recherche indexés. Aucune n’a été inventée, et chacune
est recensée dans le registre de vérification avec son état. **Les contenus du prototype et de
l’infolettre sont des maquettes éditoriales et portent un bandeau qui le dit** ; les chiffres du
comparateur sont marqués « illustratif » ; le bandeau de cours et le Chiffre de la semaine ne
contiennent aucune valeur.

**3. Aucune promotion sans autorisation des ACVM.** Une plateforme absente de la liste des
plateformes autorisées, présente sur la liste des proscrites ou visée par une mise en garde ne
peut être ni comparée, ni affiliée, ni commanditaire. L’affiliation, admise pour les courtiers
inscrits, est encadrée par douze garde-fous codés (Module 4, § 5.2).

---

## Ce qui reste à décider — et qui ne relève pas de la conception

Chaque module se ferme sur ses points à trancher. Les cinq qui bloquent une mise en ligne :

1. **La signature.** La fiche auteur du gabarit affiche une juriste fictive avec une appartenance
   au Barreau : attribuer à la rédaction ou recruter la personne qui signera (registre V-30).
2. **Le comparateur au lancement.** Trois plateformes réelles sont nommées en page d’accueil ;
   aucun relevé daté n’existe. Afficher le statut seul, ou attendre le mois 4 (V-15, V-16).
3. **La preuve sociale « 15 000 ».** Fausse à la date de lancement ; à retirer jusqu’à 1 000
   abonnés ou à remplacer par une preuve vraie (V-25).
4. **L’adresse et la personne morale.** La LCAP exige une adresse valide de l’expéditeur ; Actio
   Média inc. n’existe pas encore (V-26, N-23).
5. **Le prestataire d’envoi.** Resend + React Email sous condition d’une évaluation des facteurs
   relatifs à la vie privée ; Amazon SES `ca-central-1` en repli (Module 4, § 1.3).
