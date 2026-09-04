## 1. Cartographie de l'information et arborescence

Trois arbitrages gouvernent cette section. **Premier :** la rubrique est une promesse de lectorat, pas un tiroir thématique — on n'ouvre pas de sixième rubrique, on ouvre une sous-rubrique. **Deuxième :** une taxonomie transverse n'existe que si elle est fermée, c'est-à-dire si la rédaction peut refuser une valeur inventée par un rédacteur. **Troisième :** le français et l'anglais canadien sont deux branches jumelles, non un original et sa traduction ; l'architecture d'URL rend cette parité vérifiable par un tiers.

### 1.1 Les cinq rubriques d'Actio

Les cinq libellés sont ceux du prototype (`prototype/index.html`, attributs `data-fr` / `data-en` des `.nav__lien`). Toute divergence entre ce tableau et le prototype est un défaut à corriger dans le prototype, pas ici.

| # | Nom FR | Nom EN (canadien) | Slug FR | Slug EN |
|---|---|---|---|---|
| 1 | Régulation & ACVM | Regulation & CSA | `regulation-acvm` | `regulation-csa` |
| 2 | Marchés & Macro | Markets & Macro | `marches-macro` | `markets-macro` |
| 3 | Guides & Éducation | Guides & Education | `guides-education` | `guides-education` |
| 4 | Fiscalité canadienne | Canadian Taxation | `fiscalite-canadienne` | `canadian-taxation` |
| 5 | Actio Pro | Actio Pro | `actio-pro` | `actio-pro` |

| # | Promesse éditoriale (une phrase) | Lectorat visé | Fréquence cible | Formats admis |
|---|---|---|---|---|
| 1 | Lire l'acte réglementaire à la source et dire ce qu'il oblige, qui il oblige et à partir de quand. | Directions de la conformité de plateformes et de courtiers, avocats en valeurs mobilières, personnes désignées responsables. | 5 publications / semaine, dont ≥ 2 analyses longues | `.breve`, `.carte` (analyse), gabarit `article.html`, `.schema` + `.flux`, `.tableau` |
| 2 | Relier une décision de marché à la règle prudentielle ou monétaire qui la rend possible ou l'interdit. | Gestionnaires de portefeuille, trésoriers d'émetteurs, économistes de banque, journalistes financiers. | 3 publications / semaine | `.carte`, `.breve`, `.tableau`, note de conjoncture |
| 3 | Amener un lecteur d'un niveau de compétence au suivant par une progression numérotée et datée. | Investisseurs de détail informés, comptables, étudiants en droit et en finance, conseillers non spécialisés. | 2 guides neufs / semaine + révision trimestrielle intégrale du socle | `.palier` (3 niveaux), fiche de lexique, `.schema`, procédure pas à pas |
| 4 | Donner la qualification fiscale exacte d'une opération sur cryptoactifs, au fédéral et au Québec, formulaires à l'appui. | Particuliers déclarants, CPA, fiscalistes, préparateurs de déclarations. | 2 publications / semaine, portée à 4 du 1<sup>er</sup> février au 30 avril | `.carte`, guide `.palier`, `.tableau`, fiche de formulaire, `.boite--risque` |
| 5 | Livrer, avant 7 h HE, ce qu'une équipe de conformité doit savoir aujourd'hui et ce qu'elle doit préparer pour le trimestre. | Abonnés payants : conformité, cabinets, affaires réglementaires, secrétariat corporatif. | 5 veilles quotidiennes + 1 note hebdomadaire + 1 tableau de bord mensuel | Veille datée, note de conformité, `.tableau` téléchargeable, agenda, atelier |

**Sous-rubriques.** Chaque sous-rubrique est un répertoire de niveau 3 et une page d'archive indexable (voir § 1.2).

*1 — Régulation & ACVM (9)*

| Sous-rubrique FR | Slug FR | Slug EN |
|---|---|---|
| Inscription des plateformes | `inscription-plateformes` | `platform-registration` |
| Avis du personnel | `avis-du-personnel` | `staff-notices` |
| OCRI et autoréglementation | `ocri-autoreglementation` | `ciro-self-regulation` |
| Garde d'actifs numériques | `garde-actifs-numeriques` | `digital-asset-custody` |
| LBC/FT et CANAFE | `lbc-ft-canafe` | `aml-atf-fintrac` |
| Cryptoactifs arrimés à une valeur | `cryptoactifs-arrimes` | `value-referenced-crypto-assets` |
| Décisions et sanctions | `decisions-sanctions` | `decisions-enforcement` |
| Consultations et projets de règlement | `consultations-projets` | `consultations-proposed-rules` |
| Fonds d'investissement et FNB | `fonds-et-fnb` | `funds-and-etfs` |

*2 — Marchés & Macro (7)*

| Sous-rubrique FR | Slug FR | Slug EN |
|---|---|---|
| Politique monétaire et Banque du Canada | `politique-monetaire` | `monetary-policy` |
| Paiements de détail (LAAPD) | `paiements-de-detail` | `retail-payments` |
| Cryptomonnaies stables | `cryptomonnaies-stables` | `stablecoins` |
| Prudentiel bancaire et BSIF | `prudentiel-bancaire` | `bank-prudential` |
| Fonds négociés en bourse | `fonds-negocies-en-bourse` | `exchange-traded-funds` |
| Infrastructure de marché et garde | `infrastructure-de-marche` | `market-infrastructure` |
| Comparaison internationale | `comparaison-internationale` | `international-comparison` |

*3 — Guides & Éducation (8)*

| Sous-rubrique FR | Slug FR | Slug EN |
|---|---|---|
| Niveau 1 — Fondamentaux | `niveau-1-fondamentaux` | `level-1-fundamentals` |
| Niveau 2 — Intermédiaire | `niveau-2-intermediaire` | `level-2-intermediate` |
| Niveau 3 — Professionnel | `niveau-3-professionnel` | `level-3-professional` |
| Fiches d'autorité | `fiches-autorite` | `regulator-profiles` |
| Procédures pas à pas | `procedures-pas-a-pas` | `step-by-step` |
| Modèles et listes de contrôle | `modeles-et-listes` | `templates-and-checklists` |
| Erreurs fréquentes | `erreurs-frequentes` | `common-errors` |
| Chronologies réglementaires | `chronologies` | `timelines` |

*4 — Fiscalité canadienne (8)*

| Sous-rubrique FR | Slug FR | Slug EN |
|---|---|---|
| Revenu d'entreprise ou gain en capital | `revenu-ou-capital` | `income-or-capital` |
| Déclaration et formulaires | `declaration-formulaires` | `filing-and-forms` |
| TPS/TVH | `tps-tvh` | `gst-hst` |
| Régimes enregistrés | `regimes-enregistres` | `registered-plans` |
| Minage et jalonnement | `minage-jalonnement` | `mining-and-staking` |
| Déclaration internationale (CDC) | `declaration-internationale` | `international-reporting` |
| Vérifications et litiges | `verifications-litiges` | `audits-and-disputes` |
| Particularités du Québec | `particularites-quebec` | `quebec-specifics` |

*5 — Actio Pro (6)*

| Sous-rubrique FR | Slug FR | Slug EN |
|---|---|---|
| Veille quotidienne | `veille-quotidienne` | `daily-monitoring` |
| Notes de conformité | `notes-de-conformite` | `compliance-briefs` |
| Suivi des inscriptions | `suivi-inscriptions` | `registration-tracker` |
| Agenda réglementaire | `agenda-reglementaire` | `regulatory-calendar` |
| Tableaux de bord | `tableaux-de-bord` | `dashboards` |
| Ateliers et webinaires | `ateliers-webinaires` | `workshops-and-webinars` |

### 1.2 Arborescence complète (sitemap)

Le niveau 0 est une redirection 302 vers `/fr/` (voir § 1.5). Les sous-rubriques de niveau 3 ne sont détaillées que pour la rubrique 1 : les quatre autres suivent strictement les slugs du § 1.1.

```
/                                   → 302 vers /fr/  (jamais indexé)
├── /fr/                            [N1] accueil — prototype/index.html
│   ├── /fr/regulation-acvm/                       [N2] rubrique
│   │   ├── /fr/regulation-acvm/inscription-plateformes/       [N3]
│   │   ├── /fr/regulation-acvm/avis-du-personnel/             [N3]
│   │   ├── /fr/regulation-acvm/ocri-autoreglementation/       [N3]
│   │   ├── /fr/regulation-acvm/garde-actifs-numeriques/       [N3]
│   │   ├── /fr/regulation-acvm/lbc-ft-canafe/                 [N3]
│   │   ├── /fr/regulation-acvm/cryptoactifs-arrimes/          [N3]
│   │   ├── /fr/regulation-acvm/decisions-sanctions/           [N3]
│   │   ├── /fr/regulation-acvm/consultations-projets/         [N3]
│   │   └── /fr/regulation-acvm/fonds-et-fnb/                  [N3]
│   ├── /fr/marches-macro/          [N2] + 7 sous-rubriques    [N3]
│   ├── /fr/guides-education/       [N2] + 8 sous-rubriques    [N3]
│   ├── /fr/fiscalite-canadienne/   [N2] + 8 sous-rubriques    [N3]
│   ├── /fr/actio-pro/              [N2] + 6 sous-rubriques    [N3]
│   │
│   ├── /fr/articles/<aaaa>/<mm>/<slug>/     [N3] gabarit article.html
│   ├── /fr/dossiers/<slug>/                 [N2] dossiers permanents
│   │
│   ├── /fr/registre/                        [N2] registre des plateformes
│   │   ├── /fr/registre/autorisees/         [N3]
│   │   ├── /fr/registre/proscrites/         [N3]
│   │   └── /fr/registre/<slug-plateforme>/  [N3] fiche d'instrument
│   ├── /fr/agenda/                          [N2] agenda réglementaire
│   │   └── /fr/agenda/<aaaa>-t<n>/          [N3] vue trimestrielle
│   ├── /fr/lexique/                         [N2]
│   │   └── /fr/lexique/<terme>/             [N3]
│   ├── /fr/recherche/                       [N2] (noindex, follow)
│   ├── /fr/archives/                        [N2]
│   │   ├── /fr/archives/<aaaa>/             [N3]
│   │   └── /fr/archives/<aaaa>/<mm>/        [N3]
│   ├── /fr/auteurs/                         [N2]
│   │   └── /fr/auteurs/<slug>/              [N3] page auteur
│   ├── /fr/etiquettes/                      [N2]
│   │   └── /fr/etiquettes/<slug>/           [N3] page étiquette
│   ├── /fr/juridiction/                     [N2]
│   │   ├── /fr/juridiction/federal/         [N3]
│   │   ├── /fr/juridiction/quebec/          [N3]
│   │   ├── /fr/juridiction/ontario/         [N3]
│   │   ├── /fr/juridiction/harmonise-acvm/  [N3]
│   │   └── /fr/juridiction/international/   [N3]
│   ├── /fr/autorite/<slug>/                 [N3] ACVM, AMF, CVMO, OCRI, CANAFE,
│   │                                             Banque du Canada, BSIF, ARC,
│   │                                             Revenu Québec, CRTC, CAI, OQLF, TMF
│   │
│   ├── /fr/infolettre/                      [N2] Actio Dispatch — page d'inscription
│   │   ├── /fr/infolettre/confirmation/     [N3] double opt-in (noindex)
│   │   ├── /fr/infolettre/preferences/      [N3] {{lien_preferences}} (noindex)
│   │   ├── /fr/infolettre/desabonnement/    [N3] {{lien_desabonnement}} (noindex)
│   │   ├── /fr/infolettre/archives/         [N3] {{lien_archives}}
│   │   └── /fr/infolettre/<nnn>/            [N3] {{lien_version_web}}, ex. /001/
│   │
│   ├── /fr/a-propos/                        [N2]
│   ├── /fr/equipe/                          [N2]
│   ├── /fr/charte-editoriale/               [N2] {{lien_charte}}
│   ├── /fr/politique-de-correction/         [N2] {{lien_corrections}}
│   ├── /fr/partenariats/                    [N2] divulgation des liens matériels
│   ├── /fr/nous-joindre/                    [N2]
│   ├── /fr/mentions-legales/                [N2]
│   ├── /fr/confidentialite/                 [N2] {{lien_confidentialite}}
│   ├── /fr/temoins/                         [N2] gestion des témoins
│   ├── /fr/accessibilite/                   [N2] déclaration WCAG 2.1 AA
│   └── /fr/plan-du-site/                    [N2] plan du site lisible
│
├── /en/  ............................ miroir strict, slugs EN du § 1.1
│
├── /flux/regulation-acvm.rss        RSS 2.0, un flux par rubrique
├── /flux/tout.rss                   RSS 2.0, intégral FR
├── /flux/tout.atom                  Atom 1.0
├── /flux/tout.json                  JSON Feed 1.1
├── /flux/en/all.rss  /all.atom  /all.json
├── /sitemap.xml                     index de sitemaps
├── /sitemap-fr.xml  /sitemap-en.xml
├── /robots.txt
└── /.well-known/security.txt
```

Deux écarts connus avec le prototype, à résorber : `.conformite` (sous-en-tête de `index.html`) pointe vers `registre.html`, fichier qui n'existe pas encore alors que `assets/registre.css` est déjà écrit ; et les liens de la colonne « Transparence » du pied de page portent `href="#"`. Ce sont les deux premiers tickets d'intégration.

### 1.3 Navigation

**Navigation principale.** Cinq entrées, dans cet ordre exact, tel que codé dans `.nav` : Régulation & ACVM · Marchés & Macro · Guides & Éducation · Fiscalité canadienne · Actio Pro. L'ordre n'est pas alphabétique, il est décroissant en fréquence de publication et en spécificité de marque : la rubrique 1 porte la raison d'être du média, la 5 porte le revenu. Placer « Actio Pro » en dernier est délibéré — l'offre payante ne précède jamais le contenu qui la justifie, contrairement au patron relevé chez Cryptoast, où la promotion de l'offre payante est publiée dans le fil d'actualité (fiche 08).

Sous **1100 px** (`assets/actio.css`, ligne 340), les cinq `.nav__lien`, les deux `.selecteur` et le `.btn--pro` ne tiennent plus sur une ligne : `.burger` apparaît, `.nav` et `.entete__actions` basculent en panneau vertical par `.entete[data-ouvert="true"]`, sans duplication de balisage. Le `.megamenu` y devient `position: static`, sans ombre.

**Mega-menus.** Le prototype contient un seul mega-menu, `#mm-regulation`, ouvert par le `.nav__lien` porteur de `aria-expanded` et `aria-controls`. Il est bâti sur `.grille` + `.megamenu__grille` en quatre colonnes `col-3` : trois colonnes `.megamenu__colonne` (« Par autorité » — ACVM, AMF, CVMO, OCRI, CANAFE, Banque du Canada ; « Par type d'acte » — avis du personnel, consultation publique, décision et sanction, mise en garde, règlement et modification, dispense discrétionnaire ; « Par juridiction » — fédéral, Québec, Ontario, harmonisé ACVM, international) et une quatrième `.megamenu__vedette` portant un `.badge badge--info` « Dossier permanent ». Le modèle se décline aux quatre autres rubriques sans changer une ligne de CSS :

| Mega-menu | Colonne 1 | Colonne 2 | Colonne 3 | `.megamenu__vedette` |
|---|---|---|---|---|
| `#mm-regulation` | Par autorité (6) | Par type d'acte (6) | Par juridiction (5) | Dossier permanent : sortie du régime de courtier restreint |
| `#mm-marches` | Par thème (7 sous-rubriques) | Par instrument : cryptoactif arrimé à une valeur, FNB, produit de prêt, jeton non fongible | Par autorité : Banque du Canada, BSIF, ACVM, OCRI | Dossier permanent : entrée en vigueur du régime fédéral des cryptomonnaies stables |
| `#mm-guides` | Par niveau : 1, 2, 3 | Par besoin : déclarer, s'inscrire, se conformer, vérifier | Outils : lexique, chronologies, modèles, listes de contrôle | Guide pilier du trimestre |
| `#mm-fiscalite` | Par contribuable : particulier, entreprise, mineur, fiducie | Par opération : disposition, jalonnement, minage, largage, don | Par formulaire : T1135, TP-21.4.39, TPS/TVH | Dossier permanent : compte à rebours du Cadre de déclaration des cryptoactifs |
| `#mm-pro` | L'offre : veille, notes, agenda, tableaux de bord | Accès : essai, tarifs, licence d'équipe, facturation | Ressources : archives téléchargeables, méthode, sources suivies | Édition du jour d'Actio Pro |

Règle d'ouverture : un seul `.megamenu` ouvert à la fois ; fermeture à `Échap` et au clic extérieur ; ouverture au clic, jamais au survol seul (un menu qui s'ouvre au survol est inutilisable au clavier et à la loupe d'écran).

**Navigation secondaire.** Trois zones distinctes, déjà présentes : la piste `.cotations__piste` du sous-en-tête (cours indicatifs + lien `.conformite` vers le registre des plateformes autorisées) ; les `.entete__actions` (sélecteur de langue, sélecteur de thème à trois états, `.btn--pro`) ; et, en page d'article, le `.sommaire` collant avec sa `.sommaire__barre` de progression, doublé de `.article__outils` (Partager, Imprimer, Citer). S'y ajoute, dans les pages d'index, la barre de filtres décrite au § 1.4.

**Fil d'Ariane.** Composant `.ariane`, `<nav aria-label="Fil d'Ariane">` contenant un `<ol>`, dernier segment en `<span aria-current="page">` sans lien. Règle de construction, dans l'ordre et sans exception : `Accueil → Rubrique → Sous-rubrique → [Dossier ou série, si l'article en fait partie] → Titre court`. Le fil suit la **taxonomie**, jamais le chemin de navigation du lecteur ; il ne dépasse jamais cinq segments ; le titre y est tronqué à 60 caractères ; et il est doublé de `BreadcrumbList` en JSON-LD. Un article rattaché à deux sous-rubriques n'a qu'un seul fil : celui de sa sous-rubrique **canonique**, déclarée en front-matter.

**Pied de page.** `.pied__principal` en `.grille`, quatre colonnes 4 / 2 / 3 / 3 (somme = 12), réduites à 6 puis 12 aux points de rupture 1024 px et 640 px.

| Colonne | Largeur | Contenu |
|---|---|---|
| 1 — Identité | `col-4` | `.logo`, phrase de positionnement, raison sociale, adresse postale et courriel de rédaction — l'adresse postale n'est pas décorative : elle est exigée dans tout message électronique commercial (fiche 06) et doit être identique à celle du pied d'infolettre |
| 2 — Rubriques | `col-2` | Les cinq rubriques, même ordre que `.nav` |
| 3 — Registres et sources officielles | `col-3` | Liens sortants `rel="external noopener"` vers ACVM, AMF, CVMO, OCRI, CANAFE, Revenu Québec (permis d'ESM), Gazette du Canada |
| 4 — Transparence | `col-3` | Charte éditoriale, partenariats rémunérés, affiliation et divulgation, méthode de vérification, politique de correction, conflits d'intérêts, signalement d'erreur |

Sous ces quatre colonnes : le bloc `.avertissement` (absence de conseil en placement, juridique et fiscal ; non-inscription d'Actio auprès des ACVM, de l'AMF, de la CVMO et de l'OCRI ; risque de perte totale) puis `.pied__legal` (mentions légales, conditions d'utilisation, confidentialité, témoins, accessibilité, nous joindre).

### 1.4 Filtres dynamiques et taxonomies

Sept taxonomies transverses, toutes à valeurs fermées. Une valeur absente de ces listes est refusée à la publication : c'est un contrôle de la chaîne d'édition, pas une convention.

| Taxonomie | Valeurs autorisées (fermées) | Affichage | Jeton exact (`tokens.css`) | Archive indexable |
|---|---|---|---|---|
| **Juridiction** | Fédéral · Québec · Ontario · Harmonisé ACVM · International | Pastille `.juridiction` (losange 8 × 8 px, `border-radius: var(--rayon-plein)`) + filtre | `--jur-federal #0F3D68` · `--jur-quebec #16688A` · `--jur-ontario #6B4FA8` · `--jur-multi #0B7F74` · `--jur-intl #8A6D3B` | **Oui** — `/fr/juridiction/<valeur>/` |
| **Autorité** | ACVM · AMF · CVMO · OCRI · CANAFE · Banque du Canada · BSIF · ARC · Revenu Québec · CRTC · CAI · OQLF · TMF | Texte dans la pastille `.juridiction` (ex. « Québec · Tribunal administratif des marchés financiers ») + filtre + colonne 1 du mega-menu | Aucun jeton propre : hérite de la couleur de juridiction | **Oui** — `/fr/autorite/<slug>/` |
| **Type d'acte** | Avis du personnel · Consultation publique · Décision et sanction · Mise en garde · Règlement et modification · Dispense discrétionnaire · Loi et projet de loi | Filtre seul, et colonne 2 du `#mm-regulation` | Aucun | **Non** — recouvre trop la taxonomie de statut ; le filtre est en `noindex, follow` |
| **Statut réglementaire** | En vigueur · Édicté, non en vigueur · En consultation · Mise en garde ou sanction · Abrogé, remplacé ou périmé | Badge `.badge` (11 px, `--interlettre-etiq 0.085em`, pastille de 6 px) | `.badge--conforme` `--statut-conforme #0E7C5A` / `-pale #E3F4EE` · `.badge--info` `--statut-info #0F3D68` / `#E7EFF7` · `.badge--consultation` `#965800` / `#FBF0E0` · `.badge--alerte` `#C8102E` / `#FBE9EC` · `.badge--neutre` `#5B6B7C` / `#EDF0F3` | **Oui** pour « En consultation » (`/fr/regulation-acvm/consultations-projets/`), non pour les autres |
| **Niveau de difficulté** | Niveau 1 · Débutant — Niveau 2 · Intermédiaire — Niveau 3 · Professionnel | `.palier__niveau` + jauge `.palier__jauge` à 3 segments de 16 × 4 px | `.palier--n1` `--statut-conforme #0E7C5A` · `.palier--n2` `--actio-bleu-palais #0F3D68` · `.palier--n3` `--jur-ontario #6B4FA8` | **Oui** — `/fr/guides-education/niveau-<n>-.../` |
| **Format** | Brève · Analyse · Décryptage · Guide · Fiche d'instrument · Schéma · Tableau comparatif · Entretien · Veille Pro | `.badge badge--neutre` accolé au temps de lecture (ex. « Analyse — 11 min ») | `--statut-neutre #5B6B7C` sur `--statut-neutre-pale #EDF0F3` | **Non** — sauf « Guide » et « Schéma », qui remontent aux archives de rubrique |
| **Niveau d'impact** | Structurant · Notable · Signal faible | Encadré `.boite--impact` dans le corps de l'article + tri par défaut des pages d'index | `--actio-turquoise-fonce #0B7F74` sur `--actio-turquoise-pale #E2F6F3` | **Non** — jugement rédactionnel, pas fait opposable |

Deux règles opposables héritées de `tokens.css`. **Un badge = un statut, jamais une décoration** : employer `--statut-alerte` pour signaler un contenu populaire est un défaut au même titre qu'une erreur de fait. **Le blanc est interdit en aplat plein sur `--actio-turquoise #12B5A6`** (2,6:1) ; le texte y est obligatoirement en encre (6,8:1). Les couleurs de statut ne sont jamais le seul porteur d'information : le badge contient toujours son libellé en toutes lettres.

Comportement de la barre de filtres, sur toute page d'index (`/fr/<rubrique>/`, `/fr/juridiction/…`, `/fr/etiquettes/…`) : les filtres s'appliquent côté client sans rechargement, se reflètent dans l'URL en paramètres de requête (`?juridiction=quebec&statut=en-consultation`), et **toute page portant un paramètre de requête est servie en `noindex, follow`** avec `rel="canonical"` vers l'URL nue. Sans quoi sept taxonomies croisées produisent quelques milliers d'URL indexables sans contenu propre.

### 1.5 Bilinguisme et géolocalisation des textes de loi

**Modèle d'URL — arbitrage.**

| Modèle | Avantage principal | Objection décisive | Retenu |
|---|---|---|---|
| Préfixe de chemin `actio.ca/fr/` + `/en/` | Un seul domaine, une seule autorité de référencement, un seul certificat, un seul registre de consentement aux témoins sous la Loi 25 ; la symétrie des deux arbres est vérifiable par un tiers en comparant deux URL | Impose une discipline de parité de contenu | **Oui** |
| Sous-domaines `fr.actio.ca` / `en.actio.ca` | Isolation technique, hébergement séparable | Deux propriétés distinctes aux yeux des moteurs, deux bannières de témoins, deux registres de consentement — coût de conformité doublé pour un gain nul | Non |
| Paramètre `?lang=en` | Coût d'implantation nul | Contenu dupliqué, partage de lien fragile, et rend l'équivalence d'accès impossible à démontrer | Non |

`/` renvoie 302 vers `/fr/` — jamais 301, et jamais selon l'adresse IP du visiteur : une redirection fondée sur la géolocalisation IP suppose de traiter l'adresse IP, qui est un renseignement personnel au sens de la Loi 25 (fiche 06). Le français est la langue par défaut du domaine parce qu'Actio est établie au Québec.

**hreflang.** Chaque page porte trois balises : `hreflang="fr-CA"`, `hreflang="en-CA"` et `hreflang="x-default"` pointant vers la version **française**. Les balises sont réciproques — l'absence de réciprocité annule la déclaration — et pointent toujours vers des URL canoniques, jamais vers une URL portant un paramètre de filtre.

**Traduction absente.** Aucune traduction automatique n'est publiée, jamais. Si la version anglaise d'un article n'existe pas : l'URL `/en/…` renvoie **404** ; la page française ne déclare que `hreflang="fr-CA"` ; et le bouton `EN` du `.selecteur` de langue reste actif mais mène à l'index anglais de la sous-rubrique, avec un message d'une ligne indiquant que cet article n'est pas disponible en anglais. Le bilinguisme du prototype fonctionne aujourd'hui par bascule d'attributs `data-fr` / `data-en` dans `assets/actio.js` : c'est correct pour les libellés d'interface, et **insuffisant pour le corps d'article**, qui doit être servi en deux documents HTML distincts avec deux URL.

**Simultanéité.** La Charte de la langue française (RLRQ c. C-11) vise les publications commerciales, y compris en ligne, et le règlement sur la langue du commerce et des affaires exige une version française accessible dans des conditions de qualité et d'accessibilité au moins égales (fiche 02, § 4) — **[À VÉRIFIER]** : le texte de l'art. 52 et le libellé exact du règlement n'ont pas pu être lus à la source, l'accès à `legisquebec.gouv.qc.ca` ayant été bloqué. Règle éditoriale opposable qui en découle, plus stricte que l'exigence : **aucun contenu n'est publié en anglais avant, plus vite ou plus complètement qu'en français**. Les deux versions partent dans le même déploiement. Si l'anglais n'est pas prêt, le français part seul ; l'inverse n'est jamais autorisé. Même règle pour les conditions d'utilisation et le contrat d'abonnement, qui sont des contrats d'adhésion (art. 55) : version française remise d'abord.

**Stratégie de traduction.**

| Contenu | Qui traduit | Qui révise | Délai de livraison |
|---|---|---|---|
| Brève (< 400 mots) | Rédacteur auteur, bilingue | Chef de pupitre | 3 h après le dépôt FR, même jour |
| Analyse et décryptage | Traducteur juridique externe | Rédactrice en chef adjointe + contrôle terminologique | Livraison à J-1, 12 h HE, pour une parution à J-0 |
| Guide et lexique | Traducteur juridique externe | Réviseur terminologique | 5 jours ouvrables ; publication conjointe seulement |
| Interface, gabarits, infolettre | Rédaction interne | Rédactrice en chef | Avant toute mise en production |
| Citations d'un texte officiel | **Personne** | — | On reprend la version officielle publiée par l'autorité dans la langue voulue ; à défaut, on cite en langue d'origine et on l'indique. Plusieurs publications de la CVMO ne paraissent qu'en anglais (fiche 03) |

Contrôle terminologique : les tables FR/EN des fiches 01 à 08 font foi. Trois interdits qui déclenchent un rejet automatique en révision — « crypto-monnaies » pour « cryptoactifs » ; « OCRCVM » ou « CIRO » dans un texte français ; « licence » ou « agrément » pour « inscription ».

**Géolocalisation des textes de loi.** Chaque contenu déclare en front-matter trois champs distincts, qui ne doivent jamais être confondus :

| Champ | Valeurs | Ce qu'il signifie |
|---|---|---|
| `juridiction[]` | fédéral, québec, ontario, harmonisé-acvm, international | Où la règle s'applique |
| `autorite[]` | liste fermée du § 1.4 | Qui l'édicte ou l'applique |
| `portee` | pancanadienne, provinciale, harmonisée, extraterritoriale | Comment elle s'articule avec les autres ordres |

Ces champs alimentent trois affichages : les pastilles `.juridiction--*` dans `.article__etiquettes` ; une ligne « Portée » obligatoire dans l'encadré `.retenir` en tête d'article ; et la colonne « Juridiction » obligatoire dans tout `.tableau` comparatif (fiche 08 : un tableau « meilleures plateformes au Canada » sans colonne de juridiction est structurellement trompeur, l'inscription variant par autorité).

**Sélecteur de juridiction.** Troisième composant `.selecteur` (`role="group"`, `aria-label="Juridiction"`), placé dans `.entete__actions` sur écran large et dans le panneau replié sous 1100 px. Six états : **Toutes les juridictions** (défaut), Fédéral, Québec, Ontario, Harmonisé ACVM, International. Comportement :

- **Aucune géolocalisation par adresse IP**, ni au premier chargement ni ensuite. La valeur par défaut est « Toutes les juridictions » pour tout le monde ; le choix est explicite.
- Persistance en `localStorage`, clé `actio.juridiction`, sur le modèle des clés `actio.theme` et `actio.langue` déjà employées dans `assets/actio.js`, lecture et écriture entourées d'un `try/catch` (navigation privée). Aucun témoin, donc aucun consentement à recueillir.
- Sur une page d'index, le sélecteur **filtre** et met à jour le compteur de résultats. Sur une page d'article, il ne masque rien : il met en évidence la pastille correspondante et affiche, si la juridiction choisie n'est pas visée par l'article, une bande d'une ligne — « Cette analyse porte sur le Québec ; vous consultez Actio en réglage Ontario. »
- Le sélecteur n'écrit jamais dans l'URL canonique. Il ajoute `?juridiction=…` sur les pages d'index seulement, servies en `noindex, follow`.
- Un contenu dont `portee` vaut « pancanadienne » ou « harmonisée » reste visible dans tous les états du sélecteur.

### Ce qui reste à trancher

1. **Fusionner ou non `/fr/etiquettes/` et `/fr/autorite/`.** Les deux produisent des pages de liste ; les maintenir séparées double le travail de curation. Décision attendue avant l'ouverture de l'indexation.
2. **Sort des sous-rubriques à faible volume.** Une sous-rubrique publiant moins de 6 contenus par trimestre est une page vide indexée. Seuil de dépublication à fixer, et comportement de repli (redirection 301 vers la rubrique parente).
3. **Statut de la valeur « Loi et projet de loi »** dans la taxonomie de type d'acte : elle n'existe pas dans la colonne 2 de `#mm-regulation` telle que codée. Ajouter la ligne au mega-menu ou renoncer à la valeur.
4. **Slug anglais de la rubrique 1.** `regulation-csa` reprend le sigle anglais des ACVM ; il faudra vérifier qu'il ne concurrence pas les pages officielles des Canadian Securities Administrators sur les mêmes requêtes.
5. **Portée réelle de l'obligation de simultanéité.** Elle est ici posée comme règle éditoriale volontaire. Sa qualification juridique exacte au regard de la Charte de la langue française reste **[À VÉRIFIER]** sur le texte officiel, comme l'ensemble des références des fiches 01 à 08, constituées alors que l'accès direct aux sites des régulateurs était bloqué.
6. **Registre des plateformes.** L'arborescence prévoit `/fr/registre/autorisees/` et `/fr/registre/proscrites/` par symétrie avec les deux listes publiques que les ACVM maintiennent (fiche 01). Le contenu de ces listes est mouvant et **[À VÉRIFIER]** : aucun nom de plateforme ne sera publié sans lecture de la liste officielle à sa date, horodatée en tête de page.
