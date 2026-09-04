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
| Plateforme sous **engagement préalable** ou titulaire d'une inscription de **courtier restreint** encore active | — | — | **Refusé.** L'engagement préalable n'est pas une inscription et le sort des inscriptions de courtier restreint en vigueur n'est pas documenté (`U-05`, `C-05`) |
| Cabinet d'avocats, de comptables ou de fiscalistes | Membres inscrits à un ordre professionnel (Barreau du Québec, Law Society of Ontario, ordre de CPA) | Numéro d'inscription à l'ordre du signataire | **Admis** |
| Dépositaire, éditeur de logiciel de conformité, fournisseur d'analyse de chaîne | N'offre aucun service de négociation au public canadien | Déclaration signée + capture du site | **Admis** |
| Émetteur de cryptoactif arrimé à une valeur | — | — | **Refusé.** Le régime fédéral des cryptomonnaies stables est édicté mais son entrée en vigueur dépend de décrets et de règlements (`U-59`) : aucun registre où vérifier un statut |
| Émetteur de jeton, prévente, projet de jetons non fongibles, programme d'affiliation, service rémunéré à la conversion | — | — | **Refusé, sans exception** |
| Entité visée par une mise en garde de l'AMF, de la CVMO ou d'une autre autorité membre des ACVM depuis moins de 24 mois | — | — | **Refusé** |

**Format.** Un encart unique de **55 mots au maximum**, sans image (une image
dans un courriel est un pixel de suivi), avec **un seul lien** passé par la
redirection de premier niveau sur `actio.ca`. Il se place **entre la quatrième
section éditoriale et l'encart de transparence** de
`newsletter/contenus/dispatch-001.html` — jamais dans le flux éditorial, dont la
charte fixe quatre sections et interdit la cinquième. Habillage imposé : libellé
« PARRAINAGE » à `--interlettre-etiq`, texte `--texte-tertiaire` sur
`--fond-surface-2`, filet `--bordure-forte`, `--rayon-1`. **Aucune couleur de
statut** : `--statut-consultation` désigne un acte réglementaire, jamais un
annonceur.

**Quantité. Un parrainage par édition, jamais deux** — un second encart oblige le
lecteur à arbitrer entre deux annonceurs. **Quatre éditions par trimestre
glissant et par annonceur, jamais deux consécutives.** Le plafond de douze liens
sortants devient, dans une édition parrainée, onze liens éditoriaux plus un.

**Prix.**

| Taille de la liste délivrée | Tarif | Note |
|---|---|---|
| < 4 000 | 900 $ l'édition, forfait plancher | En deçà, Actio ne vend pas : le format se brûle |
| 4 000 à 12 000 | 60 $ le mille délivré | Facturé sur les délivrés, jamais sur les inscrits |
| > 12 000 | 65 $ le mille délivré | — |
| Segment S2 seul (conformité, juristes, cabinets) | 120 $ le mille délivré | Ciblage par segment, pas par nom |

**Délais opposables.** Dossier de qualification déposé **15 jours ouvrables**
avant l'envoi ; texte figé **5 jours ouvrables** avant ; **revérification des
listes officielles avant 6 h 00 HE le matin de l'envoi** — un parrain radié entre
la signature et l'envoi fait annuler l'encart, sans remboursement ni report.
Paiement à 30 jours, d'avance au premier parrainage.

**Ciblage provincial.** La charte interdit tout lien vers une plateforme non
inscrite dans la province du lecteur. Les deux vagues déclarées dans
`newsletter/manifeste.json` (`vague_1` : QC, ON, NB, NS, PE, NL ; `vague_2` : BC,
AB, SK, MB, YT, NT, NU) deviennent donc un instrument de conformité : un parrain
inscrit dans une partie seulement des provinces n'est diffusé que dans la vague
correspondante, et le tarif suit les délivrés de cette vague.

**Ce que le parrainage n'est pas.** `newsletter/contenus/bienvenue-1.html` promet
un média « sans contenu commandité et sans lien d'affiliation ». La promesse
reste **littéralement vraie** : l'encart est identifié, extérieur à l'éditorial,
jamais rédigé ni relu par la rédaction pour le compte du parrain, sans droit de
regard sur le calendrier. Restent absolument prohibés le publireportage, le lien
d'affiliation, la rémunération à la conversion et la mention d'un parrain dans un
texte signé.

**Conséquence de code, à exécuter.** L'encart de transparence de
`newsletter/contenus/dispatch-001.html` affirme qu'il n'existe « aucune
rémunération d'une plateforme de négociation » : une édition parrainée par une
plateforme inscrite rendrait la phrase fausse. **Spécification :** ajouter à
`newsletter/manifeste.json` un objet `parrainage` par envoi (nom, catégorie,
preuve, provinces, vague) et étendre `tools/emails.mjs` pour qu'il refuse
d'assembler un envoi portant un encart sans entrée `parrainage`, un envoi
parrainé conservant la formulation non amendée, ou un encart de plus de 55 mots
ou de plus d'un lien.

#### 4.1.2 Actio Pro / Research

Les six promesses de `.pro__liste` sont des engagements de volume, pas des
intitulés.

| Promesse codée | Engagement chiffré | Palier |
|---|---|---|
| Notes de recherche | **2 par mois**, 3 500 à 6 000 mots, chacune accompagnée de son état de vérification ligne à ligne | Tous |
| Suivi de dossiers | **12 dossiers ouverts** à l'ouverture de Pro, chacun tenu comme une chronologie d'actes datés | Tous |
| Agenda des consultations et des échéances | Horizon **12 mois**, exportable au format iCalendar et en valeurs séparées par virgules ; version publique limitée à 3 mois (`.echeancier`) | Tous ; export dès Cabinet |
| Registre enrichi | Historique des inscriptions, conditions et dispenses, `.provenance__horodatage` sur chaque ligne | Tous ; export dès Cabinet |
| Alertes | Courriel dans les **4 heures ouvrables** suivant la publication d'un acte par une autorité suivie ; « Alerte Actio » hors cycle seulement si l'acte modifie une obligation, sous la double signature exigée par `newsletter/manifeste.json` | Tous |
| Données structurées | Interface de programmation en lecture seule : taxonomies, échéances, registre — **jamais le texte des actes** (`U-76`) | Research seulement ; option à 3 500 $/an au palier Cabinet |
| Séances avec la rédaction | Point **trimestriel** à huis clos, 60 minutes | Cabinet et Research ; Research obtient une séance dédiée annuelle |

| Palier | Sièges | Prix annuel | Siège additionnel | Cible |
|---|---|---|---|---|
| **Pro Individuel** | 1, nominatif, non transférable | **1 490 $** | — | Juriste seul, fiscaliste, administrateur de société |
| **Pro Cabinet** | 5 inclus, jusqu'à 15 | **5 900 $** | 240 $ | Cabinet, direction de la conformité d'une entreprise de taille moyenne |
| **Research Entreprise** | 25 inclus, accès par domaine de courriel | **24 000 $** | 180 $ au-delà de 25 | Plateforme inscrite, banque, gestionnaire, association professionnelle, régulateur |

Indexation contractuelle plafonnée à l'indice des prix à la consommation majoré
de 3 points, notifiée 90 jours avant l'échéance. Aucun rabais de lancement
au-delà de 15 % : plus profond, il fixe la valeur perçue à ce niveau pour la
durée du contrat.

#### 4.1.3 Revenus complémentaires

| Source | Potentiel annuel à maturité | Coût de production | Risque déontologique et parade |
|---|---|---|---|
| **Formation professionnelle** | 60 000 $ — 2 sessions/an, 60 participants, 395 $ ; reconnaissance en formation continue des ordres **[À VÉRIFIER — hors base factuelle]** | 120 h par session nouvelle, 25 h par reprise | **Élevé** : le formateur devient un conseiller de fait. Parade : aucune question sur un dossier nommé, aucune plateforme désignée, mention d'ouverture reprenant `.avertissement` |
| **Syndication** | 45 000 $ — 4 contrats de rediffusion à 9 000 $ (intranet de cabinet, association, éditeur juridique) | Faible : ~20 h par contrat et par an | **Élevé** : le rediffuseur demandera un droit de relecture. Parade : clause de non-relecture, aucun co-marquage sur l'éditorial, résiliation immédiate en cas de modification du texte |
| **Données** | 45 000 $ — 3 clients à 15 000 $ | Nul en marginal : l'interface est construite pour Research | **Le plus élevé.** La licéité du moissonnage des sites de l'ACVM, de l'AMF, de la CVMO et de l'OCRI **n'est pas établie** (`U-76`). Parade : ne vendre que la couche propre d'Actio — qualification, datation, état de vérification, taxonomie — jamais le texte d'un acte |
| **Événements** | 29 000 $ net — une journée annuelle, 120 participants à 495 $, 35 000 $ de charges | 200 h sur 4 mois | **Moyen** : un commanditaire achète une place au programme. Parade : programme arrêté par la rédaction seule, aucune intervention en tribune, plafond de 20 % du budget par commanditaire |

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

Deux enseignements inconfortables. **À 12 mois, le modèle est mono-source** : la
règle de concentration y est à la fois la plus nécessaire et la plus coûteuse à
tenir. **À 36 mois, Pro reste 7 points sous sa cible** ; le comblement passe par
une indexation de 12 % au mois 30 ou par 60 sièges de plus, pas par un troisième
produit.

**Règle de concentration, opposable.**

| Objet | Plafond | Déclencheur |
|---|---|---|
| Un annonceur | 15 % du chiffre d'affaires des 12 derniers mois glissants | Au-delà, Actio refuse la commande suivante — sans négociation, sans exception commerciale |
| Les trois premiers annonceurs | 35 % du revenu de parrainage | Au-delà, gel des ventes de parrainage jusqu'à la signature d'un quatrième parrain qualifié |
| Un client Pro | 8 % du chiffre d'affaires des 12 derniers mois glissants | Au-delà, aucun renouvellement à la hausse |
| Le parrainage dans son ensemble | 40 % à 24 mois, 25 % à 36 mois | Au-delà, arrêt des ventes jusqu'à retour sous le seuil |

Un parrain ne connaît jamais le calendrier éditorial et Actio ne s'interdit aucun
sujet le concernant. **Règle d'écran :** si un parrain fait l'objet d'un article,
l'encart est retiré des éditions situées **30 jours avant et 30 jours après** la
publication, aux frais d'Actio.

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

**Seuil de rentabilité.** À l'effectif de la phase 3 (5,0 ETP), les charges
atteignent **537 000 $**. Les revenus non-Pro à maturité valent 251 000 $ ; Pro
doit donc apporter 286 000 $, soit **550 sièges** à 520 $ — 134 contrats. Le
modèle central en produit 446 à 36 mois : **la rentabilité n'est pas atteinte à
36 mois.** Elle l'est au **mois 41** sur la trajectoire de H3, ou au **mois 31**
si l'effectif est tenu à 3,4 ETP jusqu'au mois 36 (charges 372 000 $). Besoin de
financement cumulé avant le premier mois excédentaire : **de l'ordre de
950 000 $** à 5,0 ETP, **de l'ordre de 610 000 $** dans le scénario sobre.

**L'hypothèse la plus fragile est H3.** Elle n'a aucun ancrage : la base ne
contient aucun comparateur canadien (`U-72`) et les seuls chiffres d'un média
comparable sont auto-déclarés, non audités, et portent sur un public de
particuliers (`U-70`). Diviser H3 par deux repousse la rentabilité de dix mois et
porte le besoin de financement au-delà de 1,3 M$. **Test de réfutation, au mois
10 :** proposer un engagement payable d'avance à 30 lecteurs du segment S2 ; si
moins de 4 signent, H3 est faux et la phase 3 doit être redessinée avant toute
embauche.

### 4.3 Feuille de route en quatre phases

#### Phase 1 — MVP · mois 1 à 4

**Objectif unique :** publier chaque mardi une édition vérifiée, sans exception,
pendant douze semaines consécutives. Rien d'autre.

**Périmètre livré.** Mise en production des pages existantes : portail de langue
`prototype/index.html`, accueil et gabarit d'analyse en français, registre des
plateformes, accueil anglais. Les quatre rubriques du menu principal et la page
de présentation d'Actio Pro, **sans vente**. Une édition hebdomadaire, mardi
6 h 30 HE, deux vagues ; séquence d'accueil à trois courriels (J+0, J+2, J+5).
Guides de niveaux 1 et 2 seulement. Polices auto-hébergées dès la mise en ligne :
le chargement depuis un tiers communique l'adresse IP du lecteur.

**Effectif :** 2,4 ETP — rédacteur en chef, analyste réglementaire, traduction
contractuelle ; développement en contrat de 25 jours.

**Indicateurs de sortie :** 12 éditions consécutives sans report · 2 000 abonnés
nets · taux de clic unique ≥ 6,5 % · désabonnement ≤ 0,45 % · plaintes < 0,08 % ·
**zéro correction de fait majeure** · `npm run tout` au vert avant chaque
publication.

**Risques et parade.** La vérification prend plus de temps que la rédaction :
les six premières éditions se construisent exclusivement sur les 27 sujets
d'analyse du réservoir qui ne dépendent d'aucune date de 2026, et **aucun fait
daté de 2026 n'est publié avant l'ouverture d'un accès aux sources primaires**.
Les exigences de la Charte de la langue française pour une infolettre bilingue ne
sont pas établies (`U-58`) : publication française d'abord, jamais plus vite ni
mieux en anglais.

**Reporté :** Pro payant, parrainage, agenda public, pages d'autorité et
d'étiquettes, parité anglaise au-delà de l'accueil.

#### Phase 2 — Autorité éditoriale · mois 5 à 12

**Objectif unique :** être cité. La mesure est externe : reprises par un cabinet,
un média ou un régulateur.

**Périmètre livré.** Parité anglaise complète (gabarit d'analyse et registre en
anglais canadien). Agenda public `.echeancier` à horizon 3 mois. Pages d'autorité
et d'étiquettes. Guides de niveau 3 en aperçu, verrouillés au détail. Registre
porté à 40 fiches d'instrument réglementaire, chacune horodatée et rattachée à la
liste officielle lue à sa date — **aucun nom de plateforme depuis une source
secondaire** (`U-07`). **Ouverture du parrainage à l'édition 30**, pas avant :
vendre un espace sur une liste de 2 000 personnes brûle le format.

**Effectif :** 3,4 ETP — ajout d'un second analyste réglementaire, affecté à
l'Ontario et au fédéral.

**Indicateurs de sortie :** 7 500 abonnés · domaines non génériques ≥ 55 % · taux
de clic unique ≥ 11 %, et ≥ 14 % sur S2 · 8 reprises citées par trimestre · 12
parrainages vendus à au moins 5 parrains distincts · 40 fiches au registre.

**Risques et parade.** Le parrainage ouvre quand la liste est encore petite : le
tarif plancher domine et la tentation d'assouplir la grille est maximale. La
grille du §4.1.1 est validée par le rédacteur en chef **et** par le conseil
externe, et un refus n'est jamais motivé auprès du candidat. La parité anglaise
double la charge de révision sans doubler l'effectif : plafond de deux contenus
longs par semaine tant que la traduction reste à 0,4 ETP.

**Reporté :** Pro payant, interface de programmation, exports, alertes, séances
de rédaction.

#### Phase 3 — Monétisation professionnelle · mois 13 à 24

**Objectif unique :** 57 contrats Pro actifs et un renouvellement ≥ 85 %.

**Périmètre livré.** Authentification et accès par domaine. Les sept engagements
du §4.1.2. Facturation annuelle avec perception des taxes selon la province du
client. Cadence : hebdomadaire pour le gratuit, bimensuelle pour les notes Pro.

**Effectif :** 5,0 ETP — ajout de 1,0 ETP en développement produit et de 0,6 ETP
en relation client et facturation.

**Indicateurs de sortie :** 18 000 abonnés · 194 sièges · 57 contrats · 142 100 $
annualisés · renouvellement ≥ 85 % · les quatre plafonds de concentration
respectés · **zéro remboursement consenti pour erreur de fait** · délai médian
d'alerte < 4 h ouvrables sur 20 actes consécutifs.

**Risques et parade.** Construire un accès réservé tout en tenant l'édition
gratuite : l'analyste no 2 est affecté au gratuit et n'écrit aucune note Pro
pendant six mois. Le périmètre Pro s'interdit le parrainage, donc toute la marge
repose sur les sièges : revue de H3 au mois 16 et gel d'embauche automatique
sous 120 sièges.

**Reporté :** formation, événements, syndication, données.

#### Phase 4 — Média de référence · mois 25 à 42

**Objectif unique :** être la source citée dans un mémoire de consultation, un
avis de cabinet ou une décision.

**Périmètre livré.** Les quatre revenus complémentaires du §4.1.3. Couverture
étendue à la Colombie-Britannique, à l'Alberta et au Nouveau-Brunswick. Veille
outillée : le seul flux confirmé est l'index des flux de la *Gazette du Canada*
(`U-66`) ; tout le reste passe par une surveillance de pages **après vérification
des conditions d'utilisation et du `robots.txt`** (`U-76`).

**Effectif :** 8,2 ETP — troisième analyste, responsable formation et événements,
0,8 ETP en développement.

**Indicateurs de sortie :** 30 000 abonnés · 446 sièges · 483 000 $ annualisés ·
parrainage ≤ 15 % · aucun annonceur au-delà de 15 % · excédent d'exploitation
mensuel atteint.

**Risques et parade.** La diversification disperse : aucun nouveau produit
n'ouvre tant que le précédent n'a pas tenu deux cycles complets. Le moissonnage
devient une exposition : avis juridique écrit **avant** la première vente de
données.

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
| **R1** | **Dépendance à une poignée d'annonceurs** | Les trois premiers annonceurs dépassent 35 % du revenu de parrainage sur deux trimestres, ou un seul dépasse 12 % | Plafonds du §4.1.4 appliqués sans négociation ; liste d'attente d'au moins 6 parrains qualifiés ; clause de refus de renouvellement sans motif | Moins de 8 parrains distincts ayant signé au mois 24 : **abandon du parrainage**, charge reportée sur Pro |
| **R2** | **Étroitesse du marché canadien** | Croissance nette sous 400/mois pendant 3 mois **alors que le taux de clic unique tient** : le plafond est alors d'audience, non de qualité | Parité anglaise dès la phase 2 ; rediffusion vers les associations professionnelles ; Research vendu aux régulateurs et aux universités | Liste sous 9 000 au mois 18 avec un CTU ≥ 11 % : arrêt de l'investissement en croissance et bascule sur un abonnement de recherche pur |
| **R3** | **Cycle de marché** | Le signal n'est **pas** le prix des cryptoactifs mais le nombre d'actes réglementaires publiés. Alerte sous 6 actes qualifiant pour le « Grand angle » par trimestre | Le réservoir éditorial compte 58 sujets, dont 27 d'analyse indépendants de l'actualité ; la rubrique fiscale est contracyclique | Deux trimestres sous le seuil : passage à une édition bimensuelle, **annoncé aux abonnés**, plutôt qu'une hebdomadaire creuse |
| **R4** | **Coût de la vérification juridique** | Vérification au-delà de 6 h par édition sur 4 éditions consécutives, ou plus de 40 % du temps éditorial | La base contient **77 incertitudes** (`U-01` à `U-77`) et **17 contradictions** (`C-01` à `C-17`) : autant de vérifications non faites. Vérifier par **texte primaire** et non par article — une lecture de l'Avis 21-330 sert cinq articles ; forfait externe de 300 h ; formulations prudentes du registre reprises telles quelles | Seuil de 40 % franchi au mois 12 : édition toutes les deux semaines. **Jamais d'abaissement du standard** — c'est le seul actif du média |
| **R5** | **Mise en cause de la responsabilité** | Première mise en demeure, ou demande de retrait visant une fiche du registre | Bloc `.avertissement` sur chaque page et en pied de chaque courriel ; politique de correction liée dans chaque envoi ; aucun nom de plateforme, aucun montant, aucun numéro d'article publié depuis une source secondaire (`U-07`, `U-35`, `U-46`, `U-50`) ; assurance souscrite **avant** la première publication | Deux mises en demeure jugées fondées en 12 mois : suspension de la publication des plateformes proscrites, republication après avis juridique écrit seulement |

### Ce qui reste à trancher

1. **Le prix d'entrée de Pro Individuel.** 1 490 $/an place Actio au-dessus d'un
   abonnement de presse et au-dessous d'un service de veille juridique. Aucun
   comparateur canadien n'existe dans la base (`U-72`) : le prix est un pari, à
   confirmer par le test de réfutation du mois 10.
2. **L'ouverture du parrainage aux plateformes inscrites.** Admise ici sous
   double vérification de l'inscription. N'accepter que des parrains extérieurs
   au secteur coûterait environ la moitié du revenu de parrainage et supprimerait
   la contradiction entre le rôle de vigie et celui de régie. **Décision requise
   avant l'édition 30.**
3. **La fiscalité indirecte de l'abonnement.** Le traitement en TPS/TVH d'un
   abonnement numérique vendu hors province n'a pas été recherché ; le débat sur
   les commissions de plateforme (`U-38`) montre que la qualification n'est pas
   évidente. **[À VÉRIFIER]** avant la première facturation.
4. **Le statut de l'interface de programmation.** Vendre des données dérivées de
   publications de régulateurs suppose de connaître la version et les clauses de
   la Licence du gouvernement ouvert – Canada et les conditions d'utilisation de
   chaque site : rien n'est établi (`U-76`). Tant que ce point n'est pas tranché,
   la ligne « Données » du §4.1.3 vaut zéro.
5. **L'effectif de la phase 3.** La date de rentabilité dépend davantage du
   passage de 3,4 à 5,0 ETP que du prix de Pro. Tenir 3,4 ETP jusqu'au mois 36
   l'avance de dix mois et réduit le besoin de financement de 340 000 $, au prix
   d'un produit Pro plus lent à livrer. **Arbitrage à rendre avant le mois 12.**
