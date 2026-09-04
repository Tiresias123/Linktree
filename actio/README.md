# Actio

> Média canadien indépendant d’analyse du cadre réglementaire, fiscal et prudentiel
> des cryptoactifs. Bilingue français / anglais canadien.
> *Actio*, du latin : action en justice, acte juridique, capacité d’agir.

Ce dépôt contient le blueprint de lancement complet — architecture, système de
mailing et fiche produit — **et le prototype exécutable qui en découle**. Les
documents ne décrivent pas une intention : ils spécifient du code qui fonctionne
et qu’on peut ouvrir dans un navigateur.

---

## Les trois livrables

| # | Livrable | Documents | Artefact exécutable correspondant |
|---|---|---|---|
| 1 | Architecture globale et wireframe UI/UX | [`docs/L1-1-arborescence.md`](docs/L1-1-arborescence.md) · [`L1-2-wireframe-accueil.md`](docs/L1-2-wireframe-accueil.md) · [`L1-3-wireframe-article.md`](docs/L1-3-wireframe-article.md) | [`prototype/fr/index.html`](prototype/fr/index.html) · [`fr/article.html`](prototype/fr/article.html) · [`fr/registre.html`](prototype/fr/registre.html) · [`en/index.html`](prototype/en/index.html) |
| 2 | Système et design de l’infolettre « Actio Dispatch » | [`docs/L2-1-strategie-mailing.md`](docs/L2-1-strategie-mailing.md) · [`L2-2-edition-type.md`](docs/L2-2-edition-type.md) · [`L2-3-sequence-bienvenue.md`](docs/L2-3-sequence-bienvenue.md) | [`newsletter/actio-dispatch-001.html`](newsletter/actio-dispatch-001.html) · [`newsletter/chassis.html`](newsletter/chassis.html) |
| 3 | Fiche générale et technique du produit (PRD) | [`docs/L3-1-identite-marque.md`](docs/L3-1-identite-marque.md) · [`L3-2-stack-technique.md`](docs/L3-2-stack-technique.md) · [`L3-3-conformite-deontologie.md`](docs/L3-3-conformite-deontologie.md) · [`L3-4-modele-roadmap.md`](docs/L3-4-modele-roadmap.md) | [`prototype/assets/tokens.css`](prototype/assets/tokens.css) |

---

## Arborescence du dépôt

```
actio/
├── README.md                     ce document
├── package.json                  outillage (playwright-core, hors production)
├── docs/
│   ├── L1-*.md                   Livrable 1 — architecture et wireframes
│   ├── L2-*.md                   Livrable 2 — système de mailing
│   ├── L3-*.md                   Livrable 3 — PRD
│   └── annexes/
│       ├── registre-de-verification.md   état de vérification de chaque fait avancé
│       └── rapport-de-coherence.md       relecture croisée des livrables
├── research/                     base factuelle — veille sur sources primaires
│   ├── 00-base-factuelle-consolidee.md   document de référence interne
│   └── 01-09-*.md                fiches par domaine (ACVM, AMF, OCRI, CANAFE, ARC, LCAP…)
├── prototype/
│   ├── index.html                portail de langue (« / » → 302 vers /fr/)
│   ├── fr/
│   │   ├── index.html            page d’accueil — Livrable 1, section 2
│   │   ├── article.html          gabarit d’analyse — Livrable 1, section 3
│   │   └── registre.html         registre des plateformes autorisées
│   ├── en/
│   │   └── index.html            home page, Canadian English
│   └── assets/
│       ├── tokens.css            jetons de design — SOURCE DE VÉRITÉ unique
│       ├── actio.css             composants
│       ├── article.css           gabarit d’article
│       ├── registre.css          registre des plateformes
│       └── actio.js              thème, menu, sommaire, consentement LCAP
├── newsletter/
│   ├── actio-dispatch-001.html   édition complète, prête à l’envoi
│   ├── chassis.html              en-tête de marque + pied de conformité LCAP
│   ├── contenus/                 fragments de contenu, un par envoi
│   ├── manifeste.json            objets, pré-en-têtes, métadonnées d’envoi
│   └── dist/                     courriels assemblés (générés)
└── tools/
    ├── captures.mjs              rendu multi-thème / multi-largeur + invariants
    ├── verifier.mjs              liens, accessibilité, contraste sur le DOM rendu
    └── emails.mjs                assemblage des courriels + contrôle LCAP
```

---

## Ouvrir le prototype

Aucune compilation. Les pages sont du HTML statique.

```bash
python3 -m http.server 8080 --directory actio/prototype
# puis http://localhost:8080/            portail de langue
#      http://localhost:8080/fr/         accueil français
#      http://localhost:8080/en/         home page, English
```

Le prototype charge ses polices depuis Google Fonts **à titre de démonstration
seulement**. En production, elles doivent être auto-hébergées : le chargement
depuis un tiers transmet l’adresse IP du lecteur à ce tiers, ce qui constitue
une communication de renseignement personnel au sens de la Loi 25. Les piles de
repli sont définies dans `tokens.css` et le rendu reste correct hors ligne.

## Vérifier

```bash
cd actio && npm install          # playwright-core seulement ; Chromium est préinstallé
npm run captures                 # 30 rendus (5 écrans × 2 thèmes × 3 largeurs) + invariants
npm run verifier                 # liens, accessibilité, contraste sur le DOM rendu
npm run emails                   # assemblage des courriels + contrôle des mentions LCAP
npm run docs                     # références des livrables au code : chemins, classes, jetons
npm run structure                # balisage : équilibre, attributs répétés, identifiants en double
npm run tout                     # structure, docs, courriels, vérification — dans l’ordre
```

Chaque outil sort en erreur plutôt qu’en avertissement, et nomme le fautif :

- **`captures.mjs`** échoue si une page déborde horizontalement — il nomme alors
  les éléments qui dépassent — ou si la colonne de lecture excède la mesure fixée.
- **`verifier.mjs`** échoue sur un lien interne mort, une ancre inexistante, un
  lien externe sans `rel="noopener"`, un `h1` absent ou dupliqué, un saut de
  niveau de titre, un champ sans étiquette, un repère `<nav>` anonyme, ou un
  rapport de contraste sous le seuil AA. Le contraste est mesuré sur le DOM
  rendu, fonds translucides composés et opacité héritée comprises&nbsp;: c’est
  le seul contrôle qui attrape une régression de jeton.
- **`emails.mjs`** refuse d’assembler un courriel auquel manque une mention
  rendue obligatoire par la Loi canadienne anti-pourriel, qui dépasse le seuil
  de troncature de Gmail, qui répète un attribut sur une même balise (un client
  de messagerie en perd un en silence), ou qui emploie une couleur absente de
  `tokens.css` — un courriel ne pouvant pas lire une variable CSS, c’est le seul
  moyen de le rattacher au système de design.
- **`structure.mjs`** lit le balisage sans moteur de rendu. Un navigateur répare
  silencieusement une balise mal fermée&nbsp;; un client de messagerie, non — et
  un gabarit qui se disloque chez la moitié des destinataires ne se voit pas au
  navigateur. Il attrape aussi l’attribut répété et l’identifiant en double.
- **`docs.mjs`** échoue si un livrable cite un chemin de fichier, une classe CSS
  ou un jeton qui n’existe pas. Les trois livrables ne décrivent pas une
  intention&nbsp;: ils spécifient des fichiers. Une classe citée mais inexistante
  est une instruction que personne ne pourra exécuter.

Ces trois outils ont trouvé des défauts réels que la relecture visuelle avait
laissés passer&nbsp;: une navigation sans comportement mobile, six composants
dont le texte devenait illisible en mode sombre, et une case de consentement
placée après le bouton d’envoi dans l’ordre de tabulation.

---

## Deux règles qui gouvernent tout le reste

**1. La couleur porte un statut, jamais une décoration.**
Chaque badge de `tokens.css` correspond à une catégorie d’acte réglementaire
opposable — consultation publique, avis du personnel, décision, mise en garde,
inscription en vigueur. Employer une couleur de statut pour un usage décoratif
est un défaut, au même titre qu’une erreur de fait.

**2. Rien n’est publié qui n’ait été vérifié sur la source primaire.**
La base factuelle de `research/` a été constituée alors que l’accès direct aux
sites des régulateurs était bloqué par la politique réseau de l’environnement :
les références proviennent de résultats de recherche indexés, non de la lecture
des textes officiels. Aucune n’a été inventée, et chacune est recensée dans
[`docs/annexes/registre-de-verification.md`](docs/annexes/registre-de-verification.md)
avec son état. **Les contenus du prototype et de l’infolettre sont des maquettes
éditoriales et portent un bandeau qui le dit.**

---

## Avertissement

Actio est un média. Actio ne fournit ni conseil en placement, ni conseil
juridique, ni conseil fiscal, et n’est inscrite à aucun titre auprès des
Autorités canadiennes en valeurs mobilières, de l’Autorité des marchés
financiers, de la Commission des valeurs mobilières de l’Ontario ou de
l’Organisme canadien de réglementation des investissements. Le présent dépôt
est un travail de conception ; il ne constitue pas un avis juridique.
