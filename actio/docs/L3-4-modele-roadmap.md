## 4. Modèle économique et feuille de route

Montants en dollars canadiens, hors taxes, facturation annuelle : la mention
codée dans `prototype/fr/index.html` (`.pro__mention`) impose « facturation
annuelle, sièges multiples, accès par domaine » et interdit tout contenu
commandité dans Pro — c'est une contrainte, et une formule mensuelle exigerait
de modifier cette page d'abord.

Aucun chiffre de marché ne provient de la base factuelle : elle ne contient
aucune donnée d'audience canadienne, signale qu'**aucun média canadien n'a été
analysé** (`U-72`) et que les seuls chiffres comparables sont auto-déclarés et
non audités (`U-70`). Les hypothèses du §4.2 sont des **postulats de gestion**,
écrits pour être réfutés par les six premiers mois d'exploitation.

### 4.1 Paliers de monétisation

Trois paliers, dont un seul est payant à l'ouverture de la phase 3.

| Palier | Périmètre | Prix | Contrainte de conformité dominante |
|---|---|---|---|
| **Gratuit** | Tout le site — `prototype/fr/index.html`, `prototype/fr/article.html`, `prototype/fr/registre.html`, `prototype/en/index.html` — les guides de niveaux 1 et 2, l'édition hebdomadaire et ses archives | 0 $ | LCAP : consentement exprès non précoché (`.infolettre__consentement`), preuve conservée, désabonnement traité sous 10 jours ouvrables |
| **Actio Pro** | Notes de recherche, suivi de dossiers, agenda, registre enrichi, alertes, guides de niveau 3 (`.palier--n3`, déjà marqué « Actio Pro » dans `.palier__pied`) | 1 490 $ à 5 900 $ / an | Aucun parrainage dans le périmètre Pro ; l'accès par domaine crée un fichier professionnel soumis à la Loi 25 |
| **Research** | Pro + interface de programmation, séance dédiée, exports | 24 000 $ + / an | Un client inscrit auprès des ACVM n'obtient aucune antériorité éditoriale : même heure de mise en ligne pour tous |

**Aucun mur de paiement sur l'éditorial gratuit, et aucun compteur d'articles.**
La raison n'est pas commerciale : un média réglementaire ne vaut que par la
citation, et une page derrière un mur n'est ni citée par un cabinet, ni reprise
dans un mémoire de consultation. Le gratuit est le canal d'acquisition de Pro ;
il n'est pas un produit d'appel dégradé.

#### 4.1.1 Le palier gratuit et le parrainage qualifié

**« Qualifié » se définit par l'inscription, jamais par le budget.** La règle
d'inscription préalable posée à la section 3.1 du présent livrable s'applique
intégralement au parrainage : Actio ne vend d'espace qu'à une entité dont le
statut réglementaire est vérifiable sur une source officielle, à la date de la
signature **et** le matin de l'envoi.

| Catégorie de parrain | Condition d'admission | Preuve exigée au dossier | Statut |
|---|---|---|---|
| Plateforme de négociation de cryptoactifs | Figure sur la liste des plateformes autorisées des ACVM à la signature et à J−0 ; ne figure sur aucune liste de plateformes proscrites ; inscrite comme entreprise de services monétaires auprès du CANAFE | Capture horodatée des deux listes des ACVM ; numéro d'inscription au CANAFE | **Admis** |
| Plateforme sous **engagement préalable**, ou titulaire d'une inscription de **courtier restreint** encore active | — | — | **Refusé.** L'engagement préalable n'est pas une inscription, et le sort des inscriptions de courtier restreint encore en vigueur n'est pas documenté publiquement (`U-05`, `C-05`) : Actio ne peut pas attester d'un statut qu'elle ne peut pas lire |
| Cabinet d'avocats, de comptables ou de fiscalistes | Membres inscrits à un ordre professionnel (Barreau du Québec, Law Society of Ontario, ordre de CPA) | Numéro d'inscription à l'ordre du signataire | **Admis** |
| Dépositaire, éditeur de logiciel de conformité, fournisseur d'analyse de chaîne | N'offre aucun service de négociation au public canadien | Déclaration signée + capture du site | **Admis** |
| Émetteur de cryptoactif arrimé à une valeur | — | — | **Refusé jusqu'à nouvel ordre.** Le régime fédéral des cryptomonnaies stables est édicté mais son entrée en vigueur dépend de décrets et de règlements (`U-59`) : il n'existe aucun registre où vérifier un statut |
| Émetteur de jeton, prévente, projet de jetons non fongibles, programme d'affiliation, service rémunéré à la conversion | — | — | **Refusé, sans exception** |
| Entité visée par une mise en garde de l'AMF, de la CVMO ou d'une autre autorité membre des ACVM depuis moins de 24 mois | — | — | **Refusé** |

**Format.** Un **encart de parrainage** unique, de **55 mots au maximum**, sans
image (une image dans un courriel est un pixel de suivi qui échappe à
l'évaluation des facteurs relatifs à la vie privée), avec **un seul lien** passé
par la redirection de premier niveau sur `actio.ca` prévue au §1.5 du livrable 2.
Il se place **entre la quatrième section éditoriale et l'encart de transparence**
de `newsletter/contenus/dispatch-001.html` — jamais à l'intérieur du flux
éditorial, dont la charte fixe quatre sections et interdit la cinquième. Habillage
imposé : libellé « PARRAINAGE » en petites capitales à `--interlettre-etiq`,
texte `--texte-tertiaire` sur `--fond-surface-2`, filet `--bordure-forte`,
`--rayon-1`. **Aucune couleur de statut** : `--statut-consultation` et ses
semblables désignent un acte réglementaire, jamais un annonceur.

**Quantité.** **Un parrainage par édition, jamais deux.** Un second encart
oblige le lecteur à arbitrer entre deux annonceurs et double la charge de
vérification. **Quatre éditions par trimestre glissant et par annonceur, jamais
deux consécutives.** Le plafond de douze liens sortants du §1.5 du livrable 2
devient, dans une édition parrainée, **onze liens éditoriaux plus un**.

**Prix.**

| Taille de la liste délivrée | Tarif | Note |
|---|---|---|
| < 4 000 | 900 $ l'édition, forfait plancher | En deçà, Actio ne vend pas : le format se brûle |
| 4 000 à 12 000 | 60 $ le mille délivré | Facturé sur les délivrés, jamais sur les inscrits |
| > 12 000 | 65 $ le mille délivré | — |
| Segment S2 seul (conformité, juristes, cabinets) | 120 $ le mille délivré | Ciblage par segment, pas par nom |

**Délais opposables.** Dossier de qualification déposé **15 jours ouvrables**
avant l'envoi ; texte figé **5 jours ouvrables** avant ; **revérification des
listes officielles le matin de l'envoi**, avant 6 h 00 HE — un parrain radié
entre la signature et l'envoi fait annuler l'encart, sans remboursement partiel
et sans report. Paiement à 30 jours, d'avance pour un premier parrainage.

**Ciblage provincial.** La charte interdit tout lien vers une plateforme non
inscrite dans la province du lecteur. Les deux vagues d'envoi déclarées dans
`newsletter/manifeste.json` (`vague_1` : QC, ON, NB, NS, PE, NL ; `vague_2` :
BC, AB, SK, MB, YT, NT, NU) servent donc aussi d'instrument de conformité : un
parrain inscrit dans une partie seulement des provinces n'est diffusé que dans la
vague correspondante, et le tarif suit les délivrés de cette vague.

**Ce que le parrainage n'est pas.** La séquence d'accueil promet, dans
`newsletter/contenus/bienvenue-1.html`, un média « sans contenu commandité et
sans lien d'affiliation ». Cette promesse reste **littéralement vraie** : le
parrainage est un encart identifié, extérieur au flux éditorial, jamais rédigé ni
relu par la rédaction pour le compte du parrain, et sans droit de regard sur le
calendrier éditorial. Ce qui reste absolument prohibé : le publireportage, le
lien d'affiliation, la rémunération à la conversion, et la mention d'un parrain
dans un texte signé.

**Conséquence de code, à exécuter.** L'encart de transparence de
`newsletter/contenus/dispatch-001.html` affirme aujourd'hui qu'il n'existe
« aucune rémunération d'une plateforme de négociation ». Une édition parrainée
par une plateforme inscrite rendrait cette phrase fausse. **Spécification :**
ajouter à `newsletter/manifeste.json` un objet `parrainage` par envoi (nom,
catégorie, preuve, provinces, vague), et étendre `tools/emails.mjs` pour qu'il
**refuse d'assembler** (i) un envoi comportant un encart de parrainage dont
l'entrée `parrainage` est absente, (ii) un envoi portant un encart de parrainage
et la formulation « aucun contenu commandité » non amendée, (iii) un encart de
plus de 55 mots ou de plus d'un lien. La duplication devient un contrôle, selon
le principe déjà énoncé dans le manifeste.

#### 4.1.2 Actio Pro / Research

Les six promesses de `.pro__liste` sont des engagements de volume, pas des
intitulés.

| Promesse codée | Engagement chiffré | Palier |
|---|---|---|
| Notes de recherche | **2 par mois**, 3 500 à 6 000 mots, chacune accompagnée de son état de vérification ligne à ligne | Tous |
| Suivi de dossiers | **12 dossiers ouverts** à l'ouverture de Pro, chacun tenu comme une chronologie d'actes datés | Tous |
| Agenda des consultations et des échéances | Horizon **12 mois**, exportable au format iCalendar et en valeurs séparées par virgules ; version publique limitée à 3 mois dans le bloc `.echeancier` | Tous ; export à partir de Cabinet |
| Registre enrichi | Historique des inscriptions, conditions et dispenses plateforme par plateforme, avec `.provenance__horodatage` sur chaque ligne ; export | Tous ; export à partir de Cabinet |
| Alertes | Courriel dans les **4 heures ouvrables** suivant la publication d'un acte par une autorité suivie ; « Alerte Actio » hors cycle à toute la liste seulement si l'acte modifie une obligation, avec la double signature exigée par `newsletter/manifeste.json` | Tous |
| Données structurées | Interface de programmation en lecture seule : taxonomies, échéances, registre — **jamais le texte des actes** (`U-76`) | Research seulement ; option à 3 500 $/an au palier Cabinet |
| Séances avec la rédaction | Point **trimestriel** à huis clos, 60 minutes | Cabinet et Research ; Research obtient une séance dédiée annuelle |

| Palier | Sièges | Prix annuel | Siège additionnel | Cible |
|---|---|---|---|---|
| **Pro Individuel** | 1, nominatif, non transférable | **1 490 $** | — | Juriste seul, fiscaliste, administrateur de société |
| **Pro Cabinet** | 5 inclus, jusqu'à 15 | **5 900 $** | 240 $ | Cabinet, direction de la conformité d'une entreprise de taille moyenne |
| **Research Entreprise** | 25 inclus, accès par domaine de courriel | **24 000 $** | 180 $ au-delà de 25 | Plateforme inscrite, banque, gestionnaire, association professionnelle, régulateur |

Indexation contractuelle plafonnée à l'indice des prix à la consommation majoré
de 3 points, notifiée 90 jours avant l'échéance. Aucun rabais de lancement
au-delà de 15 % ; un rabais plus profond fixe la valeur perçue à ce niveau pour
la durée du contrat.

#### 4.1.3 Revenus complémentaires

| Source | Potentiel annuel à maturité | Coût de production | Risque déontologique et parade |
|---|---|---|---|
| **Formation professionnelle** | 60 000 $ — 2 sessions/an, 60 participants, 395 $ ; reconnaissance en formation continue obligatoire des ordres professionnels **[À VÉRIFIER — les exigences des ordres ne figurent pas dans la base factuelle]** | 120 h de rédaction par session nouvelle, 25 h par reprise | **Élevé** : le formateur devient un conseiller de fait. Parade : aucune question sur un dossier nommé, aucune plateforme désignée, mention d'ouverture reprenant le bloc `.avertissement` du site |
| **Syndication** | 45 000 $ — 4 licences à 9 000 $ (intranet de cabinet, association professionnelle, éditeur juridique) | Faible : contrat et flux, ~20 h par licence et par an | **Élevé** : le licencié demandera un droit de relecture. Parade : clause de non-relecture, interdiction de co-marquage sur l'éditorial, résiliation immédiate en cas de modification du texte |
| **Données** | 45 000 $ — 3 clients à 15 000 $ | Nul en marginal : l'interface est construite pour Research | **Le plus élevé de tous.** La licéité du moissonnage des sites de l'ACVM, de l'AMF, de la CVMO et de l'OCRI **n'est pas établie** (`U-76`). Parade : ne vendre que la couche propre d'Actio — qualification, datation, état de vérification, taxonomie — et jamais une reproduction du texte d'un acte |
| **Événements** | 29 000 $ net — une journée annuelle, 120 participants à 495 $, 35 000 $ de charges | 200 h réparties sur 4 mois | **Moyen** : un commanditaire d'événement achète une place au programme. Parade : programme arrêté par la rédaction seule, aucune intervention de commanditaire en tribune, plafond de 20 % du budget de l'événement par commanditaire |

#### 4.1.4 Répartition cible du chiffre d'affaires et concentration

Chiffres annualisés au mois indiqué, non cumulés.

| Source | Cible M12 | Modèle M12 | Cible M24 | Modèle M24 | Cible M36 | Modèle M36 |
|---|---|---|---|---|---|---|
| Actio Pro / Research | 0 % | 0 $ | ≥ 70 % | 108 600 $ · 76 % | ≥ 55 % | 232 000 $ · 48 % |
| Parrainage | 100 % | 16 200 $ | ≤ 30 % | 33 500 $ · 24 % | ≤ 15 % | 72 000 $ · 15 % |
| Formation | — | — | — | — | ~12 % | 60 000 $ · 12 % |
| Syndication | — | — | — | — | ~9 % | 45 000 $ · 9 % |
| Données | — | — | — | — | ~6 % | 45 000 $ · 9 % |
| Événements | — | — | — | — | ~3 % | 29 000 $ · 6 % |
| **Total** | — | **16 200 $** | — | **142 100 $** | — | **483 000 $** |

Deux enseignements, tous deux inconfortables. **À 12 mois, le modèle est
mono-source** : la règle de concentration est alors à la fois la plus nécessaire
et la plus coûteuse à tenir. **À 36 mois, Pro reste 7 points sous sa cible** ; le
comblement passe par une indexation de 12 % au mois 30 ou par 60 sièges
supplémentaires, pas par un troisième produit.

**Règle de concentration, opposable.**

| Objet | Plafond | Déclencheur |
|---|---|---|
| Un annonceur | 15 % du chiffre d'affaires des 12 derniers mois glissants | Au-delà, Actio refuse la commande suivante — sans négociation, sans exception commerciale |
| Les trois premiers annonceurs | 35 % du revenu de parrainage | Au-delà, gel des ventes de parrainage jusqu'à la signature d'un quatrième parrain qualifié |
| Un client Pro | 8 % du chiffre d'affaires des 12 derniers mois glissants | Au-delà, aucun renouvellement à la hausse |
| Le parrainage dans son ensemble | 40 % à 24 mois, 25 % à 36 mois | Au-delà, arrêt des ventes jusqu'à retour sous le seuil |

Un parrain ne connaît jamais le calendrier éditorial, et Actio ne s'interdit
aucun sujet le concernant. **Règle d'écran :** si un parrain fait l'objet d'un
article, l'encart est retiré des éditions situées **30 jours avant et 30 jours
après** la publication, aux frais d'Actio.

### 4.2 Hypothèses économiques

Chaque hypothèse porte un nom, une valeur et une origine. Aucune n'est sourcée
sur une donnée de marché canadienne : la base factuelle n'en contient pas.

| Nom | Hypothèse | M12 | M24 | M36 | Origine |
|---|---|---|---|---|---|
| **H1** | Taille de la liste, nette des désabonnements et des rejets définitifs | 7 500 | 18 000 | 30 000 | Extrapolation de la croissance nette cible du livrable 2 : +250/mois à 3 mois, +500 à 6 mois, +900 à 12 mois |
| **H2** | Part des domaines non génériques (approximation des segments S2 et S3) | 55 % | 60 % | 62 % | Cible de qualité de liste du livrable 2 |
| **H3** | Taux de conversion d'un lecteur professionnel en siège Pro payant | 1,1 % | 1,8 % | 2,4 % | **Aucune** — postulat de gestion |
| **H4** | Sièges par contrat | 2,6 | 3,4 | 4,1 | Postulat, dérivé de la structure à trois paliers |
| **H5** | Revenu annuel moyen par siège | 620 $ | 560 $ | 520 $ | Décroît avec la montée des contrats Research |
| **H6** | Taux de remplissage du parrainage (44 éditions/an) | 40 % | 70 % | 85 % | Postulat |
| **H7** | Renouvellement annuel de Pro | — | 85 % | 88 % | Postulat |
| → | **Sièges Pro** (H1 × H2 × H3) | 45 | 194 | 446 | — |
| → | **Contrats Pro** (sièges ÷ H4) | 17 | 57 | 109 | — |

**Coûts de production.**

| Objet | Charge | Coût direct |
|---|---|---|
| Une édition d'*Actio Dispatch* (1 250 à 1 450 mots, plancher de 4 sources primaires) | 14 h : 5 rédaction, 4 vérification sur sources primaires, 2 traduction et révision anglaise, 1,5 assemblage et contrôle `tools/emails.mjs`, 1,5 ordonnancement des deux vagues | **810 $** |
| 44 éditions par an | — | **35 640 $** |
| Une note de recherche Pro (3 500 à 6 000 mots) | 38 h : 18 rédaction, 12 vérification, 5 traduction, 3 schémas | **2 200 $** |
| 24 notes par an | — | **52 800 $** |

Coût horaire interne chargé retenu : **58 $**, soit la masse salariale de départ
divisée par 2,4 ETP × 1 650 heures.

**Effectif de départ et base annuelle de charges (phase 1, 2,4 ETP).**

| Poste | Montant |
|---|---|
| Rédacteur en chef, 1,0 ETP — arbitrage éditorial, signature, seconde signature des alertes | 95 000 $ |
| Analyste réglementaire, 1,0 ETP — juriste ou parajuriste : veille, lecture des sources primaires, tenue de l'état de vérification | 72 000 $ |
| Traduction et révision en anglais canadien, 0,4 ETP contractuel | 34 000 $ |
| Charges sociales et avantages, 16 % des salaires | 26 720 $ |
| Vérification juridique externe, forfait de 300 h | 30 000 $ |
| Assurance responsabilité professionnelle et média **[À VÉRIFIER — aucune cotation]** | 9 000 $ |
| Hébergement, prestataire d'envoi, domaines, polices auto-hébergées | 14 000 $ |
| Comptabilité, juridique de société, taxes | 8 000 $ |
| **Total récurrent** | **288 720 $** |
| Développement et intégration, contrat de 25 jours — phase 1 seulement | 22 500 $ |

**Seuil de rentabilité.** À l'effectif de la phase 3 (5,0 ETP), la base de
charges atteint **537 000 $**. Les revenus non-Pro à maturité valent 251 000 $ ;
Pro doit donc apporter 286 000 $, soit **550 sièges** à 520 $, soit 134 contrats.
Le modèle central en produit 446 à 36 mois : **la rentabilité n'est pas atteinte
à 36 mois**. Elle l'est au **mois 41** sur la trajectoire de H3, ou au **mois 31**
si l'effectif est tenu à 3,4 ETP jusqu'au mois 36 (charges 372 000 $). Besoin de
financement cumulé avant le premier mois excédentaire : **de l'ordre de
950 000 $** dans le scénario à 5,0 ETP, **de l'ordre de 610 000 $** dans le
scénario sobre.

**L'hypothèse la plus fragile est H3**, le taux de conversion en siège Pro. Elle
n'a aucun ancrage : la base ne contient aucun comparateur canadien (`U-72`) et
les seuls chiffres d'un média comparable sont auto-déclarés, non audités et
portent sur un public de particuliers, non de professionnels (`U-70`). Une
division de H3 par deux repousse la rentabilité de dix mois et porte le besoin de
financement au-delà de 1,3 M$. **Test de réfutation, à exécuter au mois 10 :**
proposer un engagement payant d'avance à 30 lecteurs du segment S2 ; si moins de
4 signent, H3 est faux et la phase 3 doit être redessinée avant d'embaucher.

### 4.3 Feuille de route en quatre phases

#### Phase 1 — MVP · mois 1 à 4

**Objectif unique :** publier chaque mardi une édition vérifiée, sans exception,
pendant douze semaines consécutives. Rien d'autre.

**Périmètre livré.** Mise en production des pages existantes : portail de langue
`prototype/index.html`, accueil et gabarit d'analyse en français, registre des
plateformes, accueil anglais. Les quatre rubriques du menu principal —
Régulation & ACVM, Marchés & Macro, Guides & Éducation, Fiscalité canadienne — et
la page de présentation d'Actio Pro, **sans vente**. Cadence : une édition
hebdomadaire, mardi 6 h 30 HE, deux vagues ; séquence d'accueil à trois courriels
(J+0, J+2, J+5). Guides de niveaux 1 et 2 seulement. Polices auto-hébergées dès
la mise en ligne : le chargement depuis un tiers communique l'adresse IP du
lecteur.

**Effectif :** 2,4 ETP — rédacteur en chef, analyste réglementaire, traduction
contractuelle ; développement en contrat de 25 jours.

**Indicateurs de sortie :** 12 éditions consécutives sans report · 2 000 abonnés
nets · taux de clic unique ≥ 6,5 % · désabonnement ≤ 0,45 % · plaintes < 0,08 % ·
**zéro correction de fait majeure** · `npm run tout` au vert avant chaque
publication · 100 % des affirmations juridiques rattachées à une ligne de l'état
de vérification.

**Risques propres et parade.** La vérification prend plus de temps que la
rédaction : parade, les six premières éditions se construisent exclusivement sur
les 27 sujets d'analyse du réservoir éditorial qui ne dépendent d'aucune date de
2026, et **aucun fait daté de 2026 n'est publié avant l'ouverture d'un accès aux
sources primaires**. Les exigences de la Charte de la langue française pour une
infolettre bilingue ne sont pas établies (`U-58`) : parade, publication française
d'abord, jamais plus vite ni mieux en anglais.

**Reporté à la phase 2 :** Pro payant, parrainage, agenda public, pages
d'autorité et d'étiquettes, parité anglaise au-delà de l'accueil.

#### Phase 2 — Autorité éditoriale · mois 5 à 12

**Objectif unique :** être cité. La mesure est externe : reprises par un cabinet,
un média ou un régulateur.

**Périmètre livré.** Parité anglaise complète (gabarit d'analyse et registre en
anglais canadien). Agenda public `.echeancier` à horizon 3 mois. Pages
d'autorité et d'étiquettes. Guides de niveau 3 ouverts en aperçu, verrouillés au
détail. Registre porté à 40 fiches d'instrument réglementaire, chacune horodatée
et rattachée à la liste officielle lue à sa date — **aucun nom de plateforme
depuis une source secondaire** (`U-07`). **Ouverture du parrainage à l'édition
30**, pas avant : vendre un espace sur une liste de 2 000 personnes brûle le
format pour trois ans.

**Effectif :** 3,4 ETP — ajout d'un second analyste réglementaire, affecté à
l'Ontario et au fédéral.

**Indicateurs de sortie :** 7 500 abonnés · domaines non génériques ≥ 55 % · taux
de clic unique ≥ 11 %, et ≥ 14 % sur S2 · 8 reprises citées par trimestre · 12
parrainages vendus à au moins 5 parrains distincts · 40 fiches au registre ·
désabonnement ≤ 0,25 %.

**Risques propres et parade.** Le parrainage ouvre au moment où la liste est
encore petite, donc le tarif plancher domine et la tentation d'assouplir la
grille de qualification est maximale : parade, la grille du §4.1.1 est validée
par le rédacteur en chef **et** par le conseil externe, et un refus n'est jamais
motivé auprès du candidat. Second risque : la parité anglaise double la charge de
révision sans doubler l'effectif ; parade, plafond de deux contenus longs par
semaine tant que la traduction reste à 0,4 ETP.

**Reporté à la phase 3 :** Pro payant, interface de programmation, exports,
alertes, séances de rédaction.

#### Phase 3 — Monétisation professionnelle · mois 13 à 24

**Objectif unique :** 57 contrats Pro actifs et un renouvellement ≥ 85 %.

**Périmètre livré.** Authentification et accès par domaine. Les sept engagements
du §4.1.2, dans l'ordre : notes de recherche, suivi de 12 dossiers, agenda à 12
mois exportable, registre enrichi exportable, alertes à 4 heures ouvrables,
interface de programmation en lecture seule, séances trimestrielles. Facturation
annuelle, en dollars canadiens, avec perception des taxes selon la province du
client. Cadence : hebdomadaire pour le gratuit, bimensuelle pour les notes Pro.

**Effectif :** 5,0 ETP — ajout de 1,0 ETP en développement produit et de 0,6 ETP
en relation client et facturation.

**Indicateurs de sortie :** 18 000 abonnés · 194 sièges · 57 contrats · 142 100 $
de chiffre d'affaires annualisé · renouvellement ≥ 85 % · concentration
respectée sur les quatre plafonds · **zéro remboursement consenti pour erreur de
fait** · délai médian d'alerte < 4 h ouvrables sur 20 actes consécutifs.

**Risques propres et parade.** Construire un produit d'accès réservé tout en
tenant l'édition gratuite : parade, l'analyste no 2 est affecté au gratuit et
n'écrit aucune note Pro pendant les six premiers mois. Le périmètre Pro
s'interdit le parrainage : toute la marge repose donc sur les sièges, et une
sous-performance de H3 se voit immédiatement ; parade, revue de H3 au mois 16 et
gel d'embauche automatique si les sièges sont sous 120.

**Reporté à la phase 4 :** formation, événements, syndication, données.

#### Phase 4 — Média de référence · mois 25 à 42

**Objectif unique :** être la source citée dans un mémoire de consultation, un
avis de cabinet ou une décision.

**Périmètre livré.** Les quatre revenus complémentaires du §4.1.3. Couverture
étendue au-delà du Québec et de l'Ontario : Colombie-Britannique, Alberta,
Nouveau-Brunswick. Veille outillée : le seul flux confirmé est l'index des flux
de la *Gazette du Canada* (`U-66`), tout le reste passe par une surveillance de
pages **après vérification des conditions d'utilisation et du `robots.txt`**
(`U-76`).

**Effectif :** 8,2 ETP — ajout d'un troisième analyste, d'un responsable
formation et événements, et de 0,8 ETP en développement.

**Indicateurs de sortie :** 30 000 abonnés · 446 sièges · 483 000 $ annualisés ·
parrainage ≤ 15 % du chiffre d'affaires · aucun annonceur au-delà de 15 % ·
excédent d'exploitation mensuel atteint.

**Risques propres et parade.** La diversification disperse : parade, aucun
nouveau produit n'ouvre tant que le précédent n'a pas tenu deux cycles complets.
Le moissonnage devient une exposition : parade, avis juridique écrit **avant** la
première vente de données.

**Ce que la phase 4 reporte définitivement** — et qui n'est pas un report mais un
refus : aucune couverture des États-Unis ou de l'Union européenne, aucun produit
de prix ou de signal de marché, aucun comparateur de plateformes (un classement
est une recommandation), aucune activité rémunérée par une plateforme non
inscrite.

#### Synthèse

| Phase | Durée | Objectif unique | Effectif | Sortie chiffrée | Reporté |
|---|---|---|---|---|---|
| 1 — MVP | M1–M4 | 12 éditions vérifiées d'affilée | 2,4 ETP | 2 000 abonnés · CTU 6,5 % · 0 correction majeure | Pro, parrainage, agenda, parité EN |
| 2 — Autorité éditoriale | M5–M12 | Être cité | 3,4 ETP | 7 500 abonnés · 8 reprises/trimestre · 12 parrainages | Pro payant, interface de programmation, alertes |
| 3 — Monétisation professionnelle | M13–M24 | 57 contrats Pro | 5,0 ETP | 194 sièges · 142 100 $ · renouvellement 85 % | Formation, événements, syndication, données |
| 4 — Média de référence | M25–M42 | Être cité dans un mémoire ou un avis | 8,2 ETP | 30 000 abonnés · 446 sièges · 483 000 $ | Refus définitif : marchés étrangers, signaux, comparateur |

### 4.4 Risques structurels

| # | Risque | Signal d'alerte précoce | Parade | Seuil de renoncement |
|---|---|---|---|---|
| **R1** | **Dépendance à une poignée d'annonceurs** | Les trois premiers annonceurs dépassent 35 % du revenu de parrainage sur deux trimestres consécutifs, ou un seul dépasse 12 % | Plafonds du §4.1.4 appliqués sans négociation ; liste d'attente d'au moins 6 parrains qualifiés en permanence ; clause permettant à Actio de refuser un renouvellement sans motif | Si, au mois 24, moins de 8 parrains qualifiés distincts ont signé au moins une fois : **abandon du parrainage**, et report intégral de la charge sur Pro |
| **R2** | **Étroitesse du marché canadien** | Croissance nette sous 400/mois pendant 3 mois consécutifs **alors que le taux de clic unique tient** — c'est la preuve que le plafond est d'audience, non de qualité | Parité anglaise dès la phase 2 ; syndication vers les associations professionnelles ; Research vendu aux régulateurs et aux universités | Si, au mois 18, la liste est sous 9 000 avec un CTU ≥ 11 % : arrêt de l'investissement en croissance de liste et bascule sur un abonnement de recherche pur, sans ambition de média grand public |
| **R3** | **Cycle de marché** | Le signal n'est **pas** le prix des cryptoactifs : c'est le nombre d'actes réglementaires publiés par mois. Alerte sous 6 actes qualifiant pour le « Grand angle » par trimestre | Le réservoir éditorial compte 58 sujets, dont 27 d'analyse indépendants de l'actualité ; la rubrique fiscale est contracyclique — les déclarations se font quel que soit le marché | Deux trimestres consécutifs sous le seuil : passage à une édition bimensuelle, **annoncé aux abonnés**, plutôt qu'une édition hebdomadaire creuse |
| **R4** | **Coût de la vérification juridique** | Temps de vérification supérieur à 6 h par édition sur 4 éditions consécutives, ou plus de 40 % du temps éditorial total | La base factuelle contient **77 incertitudes** (`U-01` à `U-77`) et **17 contradictions** (`C-01` à `C-17`) : autant de vérifications non faites. Parade : vérifier par **texte primaire** et non par article — une lecture de l'Avis 21-330 sert cinq articles ; forfait externe de 300 h ; formulations prudentes du registre employées telles quelles | Si le seuil de 40 % est franchi au mois 12 : passage à une édition toutes les deux semaines. **Jamais un abaissement du standard de vérification** — c'est le seul actif du média |
| **R5** | **Mise en cause de la responsabilité** | Première mise en demeure ; ou demande de retrait visant une fiche du registre | Bloc `.avertissement` sur chaque page et en pied de chaque courriel ; politique de correction liée dans chaque envoi ; aucun nom de plateforme, aucun montant, aucun numéro d'article publié depuis une source secondaire (`U-07`, `U-35`, `U-46`, `U-50`) ; assurance responsabilité professionnelle et média souscrite **avant** la première publication | Deux mises en demeure jugées fondées en 12 mois : suspension immédiate de la publication des plateformes proscrites et republication seulement après avis juridique écrit |

### Ce qui reste à trancher

1. **Le prix d'entrée de Pro Individuel.** 1 490 $/an place Actio au-dessus d'un
   abonnement de presse et au-dessous d'un service de veille juridique. Aucun
   comparateur canadien n'existe dans la base (`U-72`) : le prix est un pari, à
   confirmer par le test de réfutation du mois 10.
2. **L'ouverture du parrainage aux plateformes inscrites.** Elle est ici admise
   sous condition d'inscription vérifiée deux fois. L'alternative — n'accepter
   que des parrains extérieurs au secteur — coûte environ la moitié du revenu de
   parrainage et supprime la contradiction de fond entre le rôle de vigie et le
   rôle de régie. **Décision requise avant l'édition 30.**
3. **La fiscalité indirecte de l'abonnement.** Le traitement en TPS/TVH d'un
   abonnement numérique vendu à un client d'une autre province n'a pas été
   recherché ; le débat sur les commissions de plateforme (`U-38`) montre que la
   qualification n'est pas évidente. **[À VÉRIFIER]** avant la première
   facturation.
4. **Le statut de l'interface de programmation.** Vendre des données dérivées de
   publications de régulateurs suppose de connaître la version et les clauses de
   la Licence du gouvernement ouvert – Canada, ainsi que les conditions
   d'utilisation de chaque site : rien de tout cela n'est établi (`U-76`).
   Tant que ce point n'est pas tranché, la ligne « Données » du §4.1.3 vaut zéro.
5. **L'effectif de la phase 3.** Le modèle central montre que la date de
   rentabilité dépend davantage du passage de 3,4 à 5,0 ETP que du prix de Pro.
   Tenir 3,4 ETP jusqu'au mois 36 avance la rentabilité de dix mois et réduit le
   besoin de financement de 340 000 $, au prix d'un produit Pro plus lent à
   livrer. **Arbitrage à rendre avant le mois 12**, pas après.
