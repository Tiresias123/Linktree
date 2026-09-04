# Module 4 — Fiche produit (PRD) : stack, souveraineté des données, veille, SEO/GEO, déontologie, revenus, feuille de route

> **Avertissement de méthode, opposable.** Ce document est écrit pour être exécuté par une équipe
> de 2,4 ETP en phase 1, à partir du prototype livré aux Modules 1 à 3 — chaque exigence renvoie à
> un fichier qui existe. Les fondements juridiques proviennent de
> `research/00-base-factuelle-consolidee.md`, constituée sans accès aux sites des autorités :
> ce qui n'a pas été lu à la source porte **[À VÉRIFIER]**. Aucun tarif de fournisseur (Strapi
> Cloud, Ghost(Pro), Beehiiv, Resend, AWS, GCP) n'a pu être consulté (`U-74`) : les cellules de
> coût portent une méthode de remplissage, jamais un chiffre inventé. Les arbitrages reposent sur
> quatre critères vérifiables sans grille tarifaire — licence, modèle de contenu, résidence des
> données, réversibilité. Le module remplace `docs/v1/L3-2-stack-technique.md`,
> `docs/v1/L3-3-conformite-deontologie.md` et `docs/v1/L3-4-modele-roadmap.md` ; là où le cahier
> des charges v2 impose une option (Ghost ou Strapi, Beehiiv ou Resend, affiliation éthique), la
> décision est prise **dans** cette option et ses garde-fous sont écrits.

**Le principe qui commande tout le reste.** Actio publie du droit ; **la preuve doit survivre au
fournisseur.** Un fait publié doit rester démontrable quand le CMS change ; une preuve de
consentement doit rester opposable quand le prestataire d'envoi change ; un statut d'inscription
affiché doit rester traçable jusqu'à la capture du registre officiel qui l'a produit. On choisit
donc systématiquement l'architecture qui rend le fournisseur remplaçable, même quand elle coûte
plus cher en intégration.

---

## 1. Stack technique

### 1.1 Frontal : Next.js 14, App Router, Tailwind

Le cahier des charges l'impose ; il est aussi le bon choix, pour quatre raisons vérifiables dans
le prototype.

| Exigence issue des Modules 1–3 | Réponse Next.js 14 (App Router) | Fichier de référence |
|---|---|---|
| Deux arbres `/fr/` et `/en/` à parité, `hreflang` réciproque, `x-default` français, jamais de redirection par IP | Segment dynamique `app/[lang]/…`, `generateStaticParams` sur `['fr','en']`, `alternates.languages` dans `generateMetadata` ; le portail `/` reste une redirection 302 au réseau de diffusion, jamais une page rendue | `prototype/index.html`, `prototype/fr/article.html` (balises `hreflang`) |
| Contenu de droit publié une fois, corrigé rarement | Génération statique + revalidation à la demande (`revalidateTag`) déclenchée par le crochet de publication du CMS | — |
| Accueil vivant (ticker, compteur ACVM, Baromètre) | Revalidation incrémentale : 900 s pour l'accueil, 6 h pour le registre, 24 h pour les guides ; le ticker est un composant client alimenté par une route interne | `prototype/fr/index.html` (`.cotations`, `.conformite__compte`, `#barometre`) |
| Recherche universelle avec autocomplétion des lois et cryptoactifs | Route `app/api/recherche` servant un index JSON précalculé (instruments, autorités, cryptoactifs, plateformes) ; le composant client reprend `INDEX` et `normaliser()` d'`actio.js` | `prototype/assets/actio.js` (§ 8) |
| Commutateur de juridiction persistant | Attribut `data-juridiction` sur `<html>` posé par un script anti-scintillement, stocké sous `actio.juridiction`, filtrage CSS `[data-jur]` — aucune requête serveur | `prototype/assets/actio.js` (§ 9), `prototype/assets/actio.css` |
| Thème clair/sombre, trois états | Même mécanique, clé `actio.theme` ; `color-scheme` sur `:root` | `prototype/assets/tokens.css` |
| Composants Tailwind sans palette propre | `composants.tw.css` devient le `globals.css` du projet : `@import "tailwindcss"` + `@theme inline` sur les jetons ; `tokens.css` est importé avant | `prototype/composants/composants.tw.css` |

**Portage des composants.** Les trois fragments du Module 3 deviennent trois composants serveur
React, mêmes classes, mêmes jetons, sans état client :

| Composant | Signature | Contrainte codée |
|---|---|---|
| `<BadgeStatut statut="conforme" date="2026-09-04" lienRegistre="…" />` | `statut` ∈ `alerte \| consultation \| conforme \| info \| neutre` (énumération TypeScript) ; `date` et `lienRegistre` **obligatoires** quand `statut === 'conforme'` sur une plateforme | Un badge « Inscrite » sans date ni lien ne compile pas |
| `<EnBref lecture="30 secondes" puces={[{attaque, texte}]} />` | `puces.length` entre 3 et 4, vérifié à la compilation par un tuple typé | Trois à quatre puces, jamais deux ni cinq |
| `<CartePlateforme plateforme={…} releve={…} affiliation={…} />` | `plateforme.statut` doit provenir d'un enregistrement `plateforme` dont `horodatage_synchro` < 24 h ; `releve` peut être `null` → « illustratif » affiché ; `affiliation.url` n'est rendu que si `plateforme.affiliation_admise === true` | La carte ne se rend pas pour une plateforme absente de la liste des ACVM |

Les autres composants du site (`.baro`, `.parcours`, `.recherche`, `.commutateur`, `.note-conformite`,
`.mise-en-garde`, `.sources`, `.bio`) sont portés depuis `actio.css` et `article.css` sans
réécriture : le CSS natif BEM du prototype est chargé tel quel dans `globals.css`, et Tailwind ne
sert qu'aux nouveaux composants. Deux systèmes cohabitent, un seul jeu de jetons — la règle du
Module 3.

### 1.2 CMS : Ghost Headless ou Strapi

#### Ce qu'Actio demande à son CMS

Six exigences, toutes issues des Modules 1 à 3, aucune négociable.

1. **Bilinguisme imposé** — chaque article a une contrepartie `fr-CA` / `en-CA` liée ; le modèle
   doit accepter qu'une traduction **manque** sans casser la navigation (`en/index.html` marque
   « (FR) » les liens vers des contenus non traduits).
2. **Taxonomies fermées** — pilier (5), sous-rubrique, juridiction (`--jur-*`), statut réglementaire
   (`--statut-*`), niveau de technicité (Débutant / Confirmé / Spécialiste), type de source. Ce sont
   des jetons de design, donc des énumérations, jamais des étiquettes libres
   (`docs/M1-architecture-wireframes.md`, § 1.3).
3. **Gabarit d'article à blocs juridiques typés** — `.note-conformite` (texte applicable, effets),
   `.mise-en-garde` (risques), `.en-bref`, `.tableau`, `.sources` avec `.sources__type`. Ce ne sont
   pas du HTML dans un champ riche : ce sont des types de données interrogeables (« toutes les
   analyses citant l'Avis 21-333 »).
4. **Registre des plateformes** — donnée structurée synchronisée depuis les listes officielles,
   jamais saisie à la main ; et le **comparateur**, alimenté par des relevés datés.
5. **État de vérification par affirmation** — chaque source porte `document_lu`,
   `date_consultation` et un renvoi au registre de vérification ; un article dont une source n'est
   pas lue force la formulation prudente.
6. **Mur payant Actio Pro** en phase 4, sur des contenus publiés en aperçu.

#### Comparaison

| Critère | **Strapi 5** (auto-hébergé) | **Ghost** (mode headless) |
|---|---|---|
| Licence du cœur | Ouverte, édition communautaire ; dénomination exacte `[NV]` | MIT |
| Bilinguisme natif | ✅ i18n intégrée, par champ, sur un même document | ❌ un site = une langue ; deux instances à synchroniser, ou un champ de langue bricolé |
| Modèle de contenu | ✅ types, composants et zones dynamiques arbitraires ; les blocs juridiques sont des composants réutilisables | ❌ fermé : `post`, `page`, `tag`, `author` ; les blocs deviennent des cartes HTML dans le corps Lexical |
| Énumérations | ✅ champ `enumeration` natif | ⚠️ étiquettes libres ; convention `#interne` |
| Relations (article → sources → autorités ; plateforme → autorité) | ✅ relations typées | ❌ absentes hors `tag` et `author` |
| Données non éditoriales (registre, relevés, consentements) | ✅ collections ordinaires | ❌ hors périmètre |
| Flux éditorial | ⚠️ brouillon / publié natif ; relecture juridique par rôle et champ `etat_verification` | ✅ brouillon / programmé / publié, mature |
| Infolettre | — (rien : voulu, voir § 1.3) | ⚠️ native, mais **le cœur dépend de Mailgun** (`bulkEmail.mailgun.*`) |
| Hébergement au Canada | ✅ conteneur + PostgreSQL en `ca-central-1` | ✅ idem, sauf l'envoi via Mailgun |
| Verrouillage fournisseur | ✅ faible : PostgreSQL possédée, export `pg_dump` | ⚠️ contenu exportable en JSON, mais modèle pauvre à reconstruire |
| Compétences | Node/TypeScript — celles du frontal | Node + Handlebars (thèmes) ; sans objet en headless |
| Coût | Auto-hébergement seul ; Strapi Cloud **[À VÉRIFIER]** | Auto-hébergement seul ; Ghost(Pro) **[À VÉRIFIER]** |

#### Décision : Strapi 5, auto-hébergé, PostgreSQL en `ca-central-1`

Motif en trois points. (i) **Le modèle de contenu est programmable et typé**, ce que Ghost interdit :
les blocs juridiques, les sources, le registre et les relevés du comparateur sont des
enregistrements interrogeables. (ii) **Le bilinguisme est natif**, par champ, sur un même
document : un article et sa traduction ne se désynchronisent pas. (iii) **La base appartient à
Actio** : la sortie coûte un `pg_dump`. Ghost est écarté pour deux raisons cumulatives — modèle
fermé, et infolettre native adossée à Mailgun, ce qui ferait entrer un prestataire dont la résidence
des données n'est pas établie par la seule voie du CMS. Ghost reste le repli si Strapi devait
être abandonné : son API de contenu suffit à un site d'articles, mais le registre et le comparateur
devraient alors vivre dans une base séparée.

#### Modèle de contenu (collections Strapi)

Les champs **[loc]** sont localisés `fr-CA` / `en-CA`.

| Collection | Champs (extrait exécutable) |
|---|---|
| `article` | `titre` [loc], `chapeau` [loc], `slug` [loc], `corps` [loc] (zone dynamique : `paragraphe`, `en_bref`, `note_conformite`, `mise_en_garde`, `tableau`, `citation`, `figure`), `pilier` (énum 5), `sous_rubrique`, `juridictions[]` (énum), `statut` (énum), `niveau` (énum Débutant/Confirmé/Spécialiste), `auteur` → `auteur`, `sources[]` → `source_primaire`, `date_publication`, `date_relecture_juridique` (**null = non publiable**), `etat_verification` (énum), `corrections[]` → `correction`, `temps_lecture` (calculé), `pro` (booléen), `faq[]` (question/réponse [loc], pour `FAQPage`) |
| `guide` | Comme `article` + `parcours` → `parcours`, `ordre`, `etapes[]` (titre, texte, durée — pour `HowTo`), `date_arret`, `annee_imposition` (nullable) |
| `parcours` | `nom` [loc] (« Je débute au Canada »…), `niveau`, `guides[]` → `guide`, durée et compte **calculés** |
| `bloc_en_bref` (composant) | `lecture`, `puces[]` (attaque [loc], texte [loc]) — 3 à 4, validé au schéma |
| `bloc_note_conformite` (composant) | `texte_applicable` [loc], `instruments[]` → `instrument`, `effet_plateforme` [loc], `effet_investisseur` [loc], `signature` → `auteur`, `etat_verification` |
| `bloc_mise_en_garde` (composant) | `risques[]` (titre [loc], texte [loc]) |
| `source_primaire` | `type` (énum Décision / Avis / Loi / Règlement / Directive / Communiqué / Registre), `titre` [loc], `autorite` → `autorite`, `url`, `date_document`, `date_consultation` **obligatoire**, `document_lu` (booléen), `renvoi_registre` (ex. `V-34`, `U-04`) |
| `instrument` | `numero` (« 21-333 »), `titre` [loc], `autorite`, `etat` (énum en vigueur / projet / intérimaire / abrogé / archivé), `url_fr`, `url_en`, `existe_en_francais` (booléen, `U-14`), `entree_en_vigueur` (nullable), `barometre` (énum consultation / avis / vigueur / garde / null) — alimente `#barometre` |
| `autorite` | `sigle` (ACVM, AMF, CVMO, OCRI, CANAFE, ARC, RQ, BdC, BSIF), `nom` [loc], `juridiction` (énum), `url_registre`, `url_veille`, `url_flux` (nullable) |
| `plateforme` (registre) | `nom`, `entite_inscrite`, `categorie` (énum engagement préalable / courtier restreint / courtier en placement), `membre_ocri` (booléen), `provinces[]`, `autorite_principale`, `esm_canafe` (numéro, nullable), `permis_esm_quebec` (nullable), `depositaire_declare`, `date_decision`, `url_fiche_officielle`, `horodatage_synchro`, `origine` (toujours une liste officielle), `mise_en_garde_active` (booléen), `affiliation_admise` (booléen, calculé — voir § 5.2) |
| `releve` (comparateur) | `plateforme` → `plateforme`, `date_releve`, `heure`, `montant_test` (1 000 $ CA), `ecart_btc`, `delai_retrait_interac`, `frais_depot_interac`, `score_garde`, `score_frais`, `score_service`, `score_conformite`, `score_total` (calculé 40/30/20/10), `captures[]` (fichiers), `releve_par` |
| `donnee_marche` | `serie` (énum cours_btc_cad / cours_eth_cad / cours_sol_cad / flux_fnb_btc_tsx / compte_acvm), `horodatage`, `valeur`, `source`, `capture` |
| `auteur` | `nom`, `fonction` [loc], `qualifications[]` (ordre, numéro, **vérifié au Tableau** : booléen + date), `declaration_interets` [loc], `portrait`, `cle_publique` |
| `correction` | `article`, `date`, `niveau` (1–4), `texte_avant`, `texte_apres`, `origine`, `signalant` |
| `abonne` | `courriel`, `langue`, `segment`, `province` (nullable), `consentement` → `consentement`, `preferences`, `sequence_etat` |
| `consentement` | `courriel`, `date_depot`, `page_depot`, `libelle_affiche` (texte intégral), `ip_depot` (**chiffrée, jamais exposée par l'API**), `date_confirmation`, `jeton_confirmation`, `date_retrait` (nullable) |

**Cinq règles de modèle, imposées au schéma, pas à la relecture.** (1) Un `article` ne se publie pas
si `date_relecture_juridique` est nul ou si `sources[]` compte moins de trois entrées de type
Décision / Avis / Loi / Règlement. (2) Toute `source_primaire` dont `document_lu` est faux force
l'affichage du marqueur `[À VÉRIFIER]` et de la formulation prudente attachée à `renvoi_registre`.
(3) Une `plateforme` sans `horodatage_synchro` de moins de 24 h n'est pas rendue ; le registre
affiche « Aucune donnée chargée » (comportement codé dans `prototype/fr/registre.html`). (4) Un
`releve` de plus de 45 jours n'alimente plus le comparateur : la colonne affiche « relevé en
cours ». (5) Un `auteur` dont une `qualification` n'est pas `verifiee` ne peut signer : l'article
est attribué à « La rédaction » (registre V-30).

### 1.3 Infolettre : Beehiiv ou Resend + React Email

#### Le principe qui commande le choix

La LCAP fait porter à l'expéditeur le fardeau de la preuve du consentement. **Décision
d'architecture, préalable au fournisseur : le registre de consentement (`consentement`) est maître
chez Actio, en `ca-central-1`, et n'est jamais délégué.** Le prestataire ne reçoit que la charge
minimale — adresse, segment, champs de fusion résolus — et n'est jamais l'autorité sur le
consentement.

| Critère | **Beehiiv** | **Resend + React Email** |
|---|---|---|
| Nature | Plateforme d'infolettre hébergée : liste, éditeur, séquences, segments, A/B, référencement | Service d'envoi transactionnel et de diffusion par API ; React Email compile des composants en HTML de courriel |
| Où vit la liste | Chez Beehiiv | Chez Actio (le prestataire reçoit les destinataires à l'envoi, ou une audience synchronisée) |
| Preuve du consentement | Chez Beehiiv, format propre | Chez Actio |
| Résidence des données | Non établie `[NV]` | Non établie `[NV]` ; régions annoncées hors Canada |
| Séquence J+0 / J+2 / J+5 avec règle de collision | Automatisations intégrées `[NV]`, règle de collision (jamais mardi/vendredi) à vérifier | Ordonnanceur d'Actio (tâche planifiée) — la règle est codée par Actio |
| Deux vagues horaires | Envoi programmé par segment `[NV]` | Deux appels API |
| Gabarit | Éditeur propriétaire ; HTML personnalisé limité | `newsletter/chassis.html` transposé en composants React Email ; `tools/emails.mjs` continue de contrôler la sortie compilée |
| Champs de fusion | Syntaxe propre | Rendu côté Actio : les `{{…}}` du manifeste sont résolus **avant** l'envoi |
| Modèle de coût | Par abonné et par mois **[À VÉRIFIER]** | Par message **[À VÉRIFIER]** — Actio envoie 2 × 52 éditions + 3 courriels d'accueil par inscription : le coût suit les messages, pas les inactifs |
| Réversibilité | Export CSV `[NV]` | Totale : la liste n'a jamais quitté Actio |
| Délivrabilité | Domaine dédié, réputation `[NV]` | Domaine dédié `dispatch.actio.ca`, SPF/DKIM/DMARC, réputation à construire |

#### Décision : Resend + React Email, registre de consentement chez Actio, avec deux conditions

(i) **Une évaluation des facteurs relatifs à la vie privée (EFVP) écrite avant la signature**,
puisque la région de Resend n'est pas canadienne : elle porte sur un périmètre réduit (adresse,
segment, champs résolus) et stable. (ii) **Une porte de sortie arrêtée d'avance** : si l'EFVP
conclut défavorablement, ou si le placement en boîte de réception sur six clients tombe sous 95 %
pendant deux envois, Amazon SES en `ca-central-1` prend le relais comme agent de transport, avec
le même gabarit — aucun changement de code éditorial, puisque le rendu est fait par Actio.

Beehiiv est écarté non pour sa qualité mais pour trois raisons de structure : la liste et la preuve
vivraient chez un tiers hors Canada, le coût suit les abonnés et non les messages, et la règle de
collision de la séquence (jamais un mardi ni un vendredi) dépendrait d'une automatisation non
vérifiée. Il reste l'option si l'équipe renonce à toute infrastructure d'envoi : dans ce cas, le
registre de consentement est **répliqué** chez Actio à chaque inscription par webhook, et l'EFVP
porte sur la liste entière.

**Chaîne d'envoi.** `manifeste.json` (cadence, objets, champs) → rendu React Email (composants
transposés du châssis) → `tools/emails.mjs` sur la sortie HTML (mentions LCAP, couleurs, poids,
« HE ») → test de semences six clients → A/B 20 % → vagues V1/V2 par API → événements (rejets,
plaintes, désabonnements) rapatriés par webhook dans `abonne` et `consentement` en moins de 15
minutes. En-têtes `List-Unsubscribe` et `List-Unsubscribe-Post: List-Unsubscribe=One-Click` sur
chaque message.

### 1.4 Données de marché, registre et comparateur

| Flux | Source | Fréquence | Ce qui est stocké | Ce qui est affiché |
|---|---|---|---|---|
| Cours BTC/ETH/SOL en CAD, variation 24 h, statut du marché | Fournisseur de cours à contracter (critères : cotation en CAD native, horodatage, licence de réaffichage, résidence non requise — aucune donnée personnelle) **[À VÉRIFIER]** | 60 s côté serveur ; le client lit une route interne mise en cache | `donnee_marche` : horodatage, valeur, source | `.cotations` avec `data-arrete` ; « — » et « n. d. » tant que la route ne répond pas |
| Compteur « Plateformes inscrites ACVM » | Liste des plateformes autorisées des ACVM (signal N0 de la veille, § 3) | 6 h | `plateforme` (lignes) ; `donnee_marche` (`compte_acvm`) | `.conformite__compte` ; « — » si la synchro a plus de 24 h. Le chiffre du cahier des charges (« 12 ») n'entre jamais en dur |
| Flux nets des FNB de bitcoin au comptant (TSX) | Émetteurs et TSX ; méthode à publier dans Actio Research **[À VÉRIFIER — source, licence]** | Hebdomadaire, le lundi | `donnee_marche` (`flux_fnb_btc_tsx`) + capture | Chiffre de la semaine (`{{chiffre_semaine}}`, `{{flux_s0…s4}}`) |
| Relevés du comparateur | Relevé manuel à heure fixe par l'analyste, capture d'écran horodatée, achat test de 1 000 $ CA | Mensuel (phase 3), puis bimensuel | `releve` | `.comparateur` ; `.donnee--nd` « illustratif » tant qu'aucun relevé n'existe ; « relevé en cours » au-delà de 45 jours |

---

## 2. Hébergement et souveraineté des données

### 2.1 Régions canadiennes réellement disponibles

| Fournisseur | Région | Nom documenté | État de vérification |
|---|---|---|---|
| AWS | `ca-central-1` | « Canada (Central) » — la ville (Montréal) n'est pas nommée par la source consultée | Région vérifiée ; ville **[À VÉRIFIER]** |
| AWS | `ca-west-1` | « Canada West (Calgary) » | Vérifié |
| Google Cloud | `northamerica-northeast1` | Montréal, 3 zones | Vérifié |
| Google Cloud | `northamerica-northeast2` | Toronto, 3 zones | Vérifié |

### 2.2 Décision : AWS `ca-central-1`, sauvegardes en `ca-west-1`

Le cahier des charges ouvre AWS Montréal ou GCP Toronto. AWS est retenu pour trois raisons :
(i) `ca-west-1` permet une **séparation géographique des sauvegardes sans sortie du Canada** ;
(ii) Amazon SES existe en `ca-central-1`, ce qui est la porte de sortie de § 1.3 ; (iii) l'équipe
n'a qu'un fournisseur à administrer. GCP Toronto est le repli documenté ; la seule différence
d'architecture serait la sauvegarde inter-régions (Montréal ↔ Toronto), également intra-Canada.

| Composant | Solution | Région | Données portées | Motif |
|---|---|---|---|---|
| Calcul applicatif (Next.js) | conteneurs, 2 instances | `ca-central-1` | sessions d'administration, rendu | Résidence, proximité de la base |
| CMS (Strapi) | conteneur séparé, accès réseau restreint | `ca-central-1` | contenus, brouillons | Isolé du frontal public |
| Base de données | PostgreSQL géré, chiffré au repos | `ca-central-1` | **registre de consentement**, contenus, registre des plateformes, relevés | Point unique où vit la preuve juridique |
| Objets (images, captures de relevés et de veille, exports) | stockage objet chiffré, URL signées 300 s | `ca-central-1` | pièces, captures | Aucune donnée personnelle |
| Sauvegardes | copies chiffrées, clés distinctes | `ca-west-1` | tout | Séparation géographique intra-Canada |
| Réseau de diffusion | Cloudflare, Regional Services sur le Canada | traitement au Canada ; **métadonnées hors du Canada** (fait documenté) | contenu public seulement | Jamais présenté comme « hébergé au Canada » sans nommer la couche |
| Envoi de courriel | Resend (EFVP) ; repli SES `ca-central-1` | hors Canada / `ca-central-1` | adresse, segment, champs résolus | § 1.3 |
| Analytique | Plausible ou Umami auto-hébergé, sans témoin, IP hachée par jour | `ca-central-1` | agrégats | Aucun consentement requis ; aucune donnée individuelle |
| Journaux applicatifs | agrégateur auto-hébergé, IP tronquée à /24 | `ca-central-1` | 30 jours | — |
| Secrets | gestionnaire de secrets managé, rotation 90 jours | `ca-central-1` | clés | — |
| Veille (n8n, Playwright) | conteneurs isolés, sortie réseau limitée à une liste d'hôtes | `ca-central-1` | captures | Un moissonneur ne partage pas le réseau d'une base de consentements |
| Polices | `woff2` sous-ensemblés servis depuis le domaine | CDN | — | Google Fonts interdit en production (Module 3, § 3.3) |

### 2.3 Ce que « souveraineté des données » veut dire pour Actio

1. **Loi 25** — une EFVP est obligatoire **avant toute communication de renseignements personnels
   hors Québec** ; le déclencheur est la communication, pas la localisation du serveur : un
   fournisseur canadien dont le soutien accède aux données depuis l'étranger la déclenche aussi.
2. **LPRPDE** — l'organisation demeure responsable des renseignements transférés à un tiers ; le
   transfert s'encadre par contrat et vérification, jamais par le seul choix de région.
3. **Articulation des deux régimes** pour une entreprise québécoise servant tout le Canada :
   **à vérifier** (`U-56`) ; Actio applique la règle la plus exigeante des deux et n'affirme rien
   sur la primauté.
4. **Ce que cela n'empêche pas** : ni un fournisseur américain, ni une sortie de données. Le droit
   impose l'évaluation préalable, la documentation, la responsabilité contractuelle et
   l'information de la personne. La souveraineté n'est pas un lieu, c'est un dossier ; Actio
   choisit la résidence canadienne pour tout ce qui porte un renseignement personnel parce que le
   dossier y est plus court.

**Registre des traitements (à tenir dès le mois 1).** Inscription à l'infolettre (courriel, langue,
segment, consentement, IP chiffrée) ; préférences (province, juridiction) ; comptes Actio Pro
(phase 4 : identité, facturation, domaine) ; analytique (agrégats) ; journaux (30 jours) ; veille
(aucun renseignement personnel). Responsable de la protection des renseignements personnels
désigné et publié avant le premier envoi. Aucun délai de « 72 heures » n'existe dans la Loi 25
(contamination du RGPD) ; « RGPD canadien » est proscrit.

### 2.4 Sécurité, performance, exploitation

| Domaine | Règle |
|---|---|
| Sécurité | En-têtes `Content-Security-Policy` (aucune ressource tierce hors CDN propre), `Strict-Transport-Security`, `X-Content-Type-Options` ; authentification d'administration par clé matérielle ; aucune donnée personnelle dans une URL ; dépendances verrouillées, mises à jour hebdomadaires |
| Performance | Budget par page : LCP < 2 s à la 75ᵉ centile mobile, CLS < 0,05, JS initial < 90 Ko compressé ; polices préchargées (2 fichiers) ; images en AVIF/WebP, dimensions déclarées |
| Accessibilité | `npm run verifier` sur chaque prévisualisation ; audit externe WCAG 2.1 AA avant d'écrire « Accessibilité (WCAG 2.1 AA) » en pied (registre V-28) |
| Sauvegardes | Quotidiennes, chiffrées, `ca-west-1`, restauration testée trimestriellement ; objectif de reprise 4 h, perte maximale 24 h |
| Intégration continue | À chaque demande de fusion : `npm run tout` (structure, docs, courriels, composants, vérificateur) ; captures `npm run captures` archivées ; déploiement bloqué sur tout échec |
| Observabilité | Disponibilité mesurée depuis Montréal et Vancouver ; alerte si le registre a plus de 24 h ou si la route de cours ne répond pas 15 min |

---

## 3. Veille automatisée et ingestion

**Règle première, non négociable : la veille signale, elle ne publie jamais.** Le pipeline produit
des **signaux** (« telle page a changé, à telle heure, voici le différentiel »), traités par
l'analyste. Une exception, et une seule : un signal N0 sur une liste officielle peut mettre à
jour le registre des plateformes sans intervention humaine, parce que la valeur y est recopiée
avec renvoi à la fiche d'origine et horodatage, jamais interprétée.

### 3.1 Sources

État au 4 septembre 2026 : **un seul flux RSS confirmé**, l'index des flux de la *Gazette du
Canada* (`gazette.gc.ca/rss/sc-rb-fra.html`). L'existence d'un flux chez l'ACVM, l'AMF, la CVMO,
l'OCRI, le CANAFE, l'ARC, le BSIF et la Banque du Canada n'est pas établie (`U-66`) : aucune
couverture automatisée n'est promise avant test réel.

| Source | URL | Nature | Fréquence | Niveau |
|---|---|---|---|---|
| *Gazette du Canada* — index des flux | `gazette.gc.ca/rss/sc-rb-fra.html` | **RSS confirmé** | 30 min | N2 |
| *Gazette*, Partie I (projets de règlement) | `gazette.gc.ca/rp-pr/p1/` | Page ; vendredi 14 h HE | vendredi, 15 min de 13 h 45 à 16 h | N1 |
| *Gazette*, Partie II (règlements pris) | `gazette.gc.ca/rp-pr/p2/` | Page ; mercredi une semaine sur deux, 9 h HE ; URL déduite `[NV]` | mercredi, 15 min de 8 h 45 à 11 h | N1 |
| ACVM — plateformes autorisées | `autorites-valeurs-mobilieres.ca/…/plateformes-de-cryptoactifs-autorisees…/` | Liste, continue | 6 h | **N0** |
| ACVM — plateformes proscrites | `autorites-valeurs-mobilieres.ca/…/plateformes-de-cryptoactifs-proscrites/` | Liste, continue | 6 h | **N0** |
| ACVM — recherche nationale d'inscription | portail des ACVM | Registre | 24 h par fiche suivie | **N0** |
| ACVM — salle de presse | `autorites-valeurs-mobilieres.ca` | Page | 3 h | N1 |
| AMF — mises en garde | `lautorite.qc.ca/en/general-public/media-centre/investor-warnings` | Liste, continue | 3 h | **N0** |
| AMF — actualités | `lautorite.qc.ca/grand-public/salle-de-presse/actualites/` (URL à confirmer) | Page | 3 h | N1 |
| CVMO — nouvelles ; mises en garde | `osc.ca/en/news-events/news` ; `osc.ca/en/investors/investor-warnings-and-alerts` | Page ; liste | 6 h | N1 ; **N0** |
| OCRI — publications | `ocri.ca/salle-de-presse/publications/` ; `ciro.ca/newsroom` | Page | 6 h | N1 |
| Tribunal des marchés financiers (Ontario) ; TMF (Québec) | `capitalmarketstribunal.ca` ; site du TMF | Page | 12 h | N1 |
| CANAFE — pénalités ; révocations d'ESM ; directives | `fintrac-canafe.canada.ca/pen/…` ; registre des ESM ; directives | Liste ; registre ; index | 12 h ; 24 h ; 24 h | N1 ; **N0** (plateformes suivies) ; N2 |
| Revenu Québec — registre des ESM ; page cryptoactifs ; TP-21.4.39 | `revenuquebec.ca/…` | Registre ; page ; page | 24 h | N1 ; N2 ; N2 |
| ARC — guide sur les cryptoactifs ; folios ; avis TPS/TVH | `canada.ca/…` | Page | 24 h | N2 |
| Finances Canada — avant-projets ; cadre des cryptomonnaies stables | `fin.canada.ca/drleg-apl/` ; `canada.ca/en/department-finance/…` | Index ; page | 12 h | N1 |
| LEGISinfo | `parl.ca` | Page, au fil des étapes | 6 h | N1 |
| Banque du Canada — registre des FSP | `bankofcanada.ca/regulatory-oversight/retail-payments/psp-registry/` | Registre | 24 h | N2 |
| BSIF — lignes directrices | `osfi-bsif.gc.ca/en/guidance/guidance-library` | Index | 24 h | N2 |
| CRTC — LCAP | `crtc.gc.ca/fra/internet/anti/reg.htm` | Page | 7 j | N3 |
| Cabinets, presse spécialisée, Cryptoast | sites | Page | 24 h | N3 — signal, jamais source de droit |

### 3.2 Pipeline

1. **Collecte** — n8n auto-hébergé (Sustainable Use License, auto-hébergement autorisé, millésime
   `[NV]`) : nœud RSS partout où un flux est **confirmé par test** ; ailleurs, récupération de page
   programmée par Playwright, un contexte par hôte. Feedly et RSS.app sont écartés : conditions
   non vérifiées (`U-74`) et, surtout, ils placeraient la liste de veille d'Actio — une partie de sa
   ligne éditoriale — chez un tiers.
2. **Normalisation** — extraction du contenu principal ; suppression des scripts, de la navigation,
   des horodatages d'affichage et des identifiants de session ; texte brut UTF-8.
3. **Détection** — empreinte SHA-256 du texte normalisé ; sur les listes et registres, empreinte
   **par ligne** : le signal utile est « cette ligne est apparue / a disparu ».
4. **Stockage** — PostgreSQL `ca-central-1`, table `veille_capture` (source, URL, horodatage UTC,
   code HTTP, empreinte, texte normalisé, différentiel, en-têtes). Conservation 24 mois ; HTML
   brut **30 jours** seulement (`U-76`).
5. **Signal** — un enregistrement par changement, dans une file : URL, heure, différentiel
   (≤ 300 caractères de contexte), niveau. Jamais de texte rédigé.

| Niveau | Déclencheur | Destinataire | Prise en charge | Effet automatique |
|---|---|---|---|---|
| **N0** | Ligne ajoutée ou retirée d'une liste d'inscription, de proscription, de mise en garde ou du registre des ESM, pour une plateforme suivie | Analyste **et** rédaction en chef | 2 h ouvrables ; hors heures, 12 h | Registre mis à jour ; `plateforme.affiliation_admise` recalculé ; **tout lien d'affiliation vers la plateforme désactivé** (§ 5.2) ; alerte Actio si seuil B |
| **N1** | Nouvelle publication d'une autorité, étape parlementaire, pénalité | Analyste | 1 jour ouvrable | Candidat au Baromètre et au Radar |
| **N2** | Modification d'une page de directives, d'un guide, d'un flux de la *Gazette* | Analyste | 3 jours ouvrables | Candidat à la relecture d'un guide |
| **N3** | Signal secondaire | File hebdomadaire | Revue du vendredi | Aucun |

### 3.3 Contraintes juridiques de la collecte

| Question | État | Règle |
|---|---|---|
| Licence du gouvernement ouvert – Canada | Non consultée (`U-76`) | Ne rien republier au motif que c'est public ; la collecte se limite à détecter un changement |
| Conditions d'utilisation de l'ACVM, l'AMF, la CVMO, l'OCRI | Non consultées ; licéité du moissonnage **non établie** | Lecture obligatoire **avant** la mise en production de chaque hôte ; d'ici là, surveillance manuelle |
| `robots.txt` | Non consultés | Récupéré et journalisé à chaque exécution ; un `Disallow` sur le chemin visé **arrête** la tâche |
| Rythme | Aucune limite publiée vérifiée | 1 requête / 5 s / hôte, 1 connexion, ≤ 240 requêtes / h / hôte ; `Retry-After` respecté ; pause 60 min après deux 429/503 |
| Identification | — | `User-Agent: ActioVeille/1.0 (+https://actio.ca/veille; veille@actio.ca)` ; aucune rotation d'IP |
| Attribution | Libellé non vérifié | Autorité, titre, URL, **date de consultation** — champ obligatoire de `source_primaire` |
| Étendue | — | Jamais le texte intégral ; ≤ 300 caractères de contexte ; renvoi à la page officielle |

---

## 4. SEO et GEO

### 4.1 Silos : les cinq piliers deviennent cinq répertoires

Le silo est l'architecture du Module 1 rendue en URL : un pilier = un répertoire, une
sous-rubrique = un sous-répertoire, un contenu = une feuille ; le maillage interne descend
(pilier → sous-rubrique → article) et remonte (fil d'Ariane, `.suite`), et traverse peu (un article
lie un guide de l'Académie, jamais un article d'un autre pilier sans raison éditoriale).

| Pilier | Répertoire `fr` | Répertoire `en` | Sous-répertoires | Contenu type | Revalidation |
|---|---|---|---|---|---|
| Actualités & Régulation | `/fr/actualites/` | `/en/news/` | `federal/`, `provincial/`, `juridique/`, `staking-etf/` | article d'analyse (`NewsArticle`) | à la publication |
| Guides & Académie | `/fr/academie/` | `/en/academy/` | `je-debute/`, `je-declare/`, `je-comprends-les-plateformes/` | guide (`Article` + `HowTo` ou `FAQPage`) | 24 h |
| Comparatifs & Avis | `/fr/plateformes/` | `/en/platforms/` | `comparateur/`, `avis/<plateforme>/`, `registre/` | fiche (`FinancialService` + `Review`) | 6 h |
| Fiscalité & Droit pratique | `/fr/fiscalite/` | `/en/tax/` | `arc/`, `revenu-quebec/`, `declarer/` | guide fiscal (`Article` + `FAQPage`) | 24 h ; campagne de février à avril |
| Actio Research | `/fr/research/` | `/en/research/` | `rapports/`, `donnees/`, `consultations/` | rapport (`Report`) | à la publication |

Règles d'URL : minuscules, sans accent ni article, tirets, jamais de date ni de millésime
(un texte de droit vieillit mal sous une URL datée), jamais de paramètre de juridiction (le
commutateur est côté client). Pages d'autorité (`/fr/autorites/amf/`) et d'instrument
(`/fr/instruments/avis-21-333/`) comme nœuds transversaux, à partir de la phase 2.

### 4.2 Carte des mots-clés

Les quatre expressions du cahier des charges, et leur voisinage. Les volumes ne sont pas connus
(`U-72` : aucun comparateur canadien dans la base) : la carte ordonne par **intention** et par
**saison**, pas par volume.

| Expression | Intention | Pilier / page cible | Saison | Contenu qui répond, et ce qu'il ne dit jamais |
|---|---|---|---|---|
| meilleure plateforme crypto Québec | Choisir | `/fr/plateformes/comparateur/` (filtre Québec) | toute l'année | Comparateur avec méthode et relevé daté ; **jamais « meilleure » dans un titre H1** — « comparatif des plateformes inscrites au Québec » |
| plateforme crypto inscrite AMF · plateforme crypto autorisée Canada · liste ACVM plateformes | Vérifier | `/fr/plateformes/registre/` | toute l'année | Registre synchronisé ; lien vers la fiche officielle |
| impôt crypto ARC · déclarer crypto impôt Canada · gain en capital crypto | Déclarer | `/fr/fiscalite/arc/…` ; parcours « Je déclare mes cryptos » | **février – avril** | Guides PBR, gain/revenu, T1135 ; avertissement fiscal |
| TP-21.4.39 · déclaration crypto Revenu Québec | Déclarer (Québec) | `/fr/fiscalite/revenu-quebec/tp-21-4-39/` | février – avril | Guide propre au Québec |
| avis Shakepay · Shakepay frais · Shakepay est-il sûr | Évaluer une plateforme | `/fr/plateformes/avis/shakepay/` | toute l'année | Fiche avec statut lu, relevé daté, avantages/inconvénients, divulgation ; **aucune fiche sans inscription vérifiée** |
| avis Newton · avis Wealthsimple Crypto · avis Bitbuy · avis VirgoCX | idem | fiches correspondantes | idem | idem |
| ETF Bitcoin Canada frais · FNB bitcoin TSX · meilleur FNB bitcoin Canada | Comparer des FNB | `/fr/actualites/staking-etf/…` + rapport Research | toute l'année ; pic aux résultats trimestriels | Tableau des frais de gestion et écarts à la VL, daté ; jamais de recommandation |
| stablecoin Canada loi · cryptomonnaie stable Banque du Canada · USDC Canada légal | Comprendre | article une (`prototype/fr/article.html`) | événementiel | « adoptée, non en vigueur » |
| staking impôt Canada · récompenses de validateur imposition | Déclarer | guide + cas pratique | février – avril | Revenu à la réception (pratique), réserve ARC |
| CANAFE ESM vérification · plateforme crypto CANAFE | Vérifier | guide du vendredi « vérifier l'inscription d'ESM » | toute l'année | Mode d'emploi du registre |

**Le calendrier fiscal commande la phase 2.** Les feuillets partent en février, la T1 est due
le 30 avril, la TP-1 aussi, les travailleurs autonomes le 15 juin [À VÉRIFIER — échéances non
lues à la source, registre V-31 v1]. Les guides fiscaux doivent être indexés **avant le
1ᵉʳ février** pour exister au printemps ; c'est pourquoi la feuille de route les place au mois 2–3
et pourquoi le lancement doit précéder février d'au moins huit semaines.

### 4.3 SEO technique

| Point | Règle |
|---|---|
| Bilinguisme | `hreflang="fr-CA"`, `hreflang="en-CA"`, `x-default` → `fr` sur chaque page ; deux plans de site (`/sitemap-fr.xml`, `/sitemap-en.xml`) ; jamais de redirection par IP ; `lang` sur `<html>` |
| Canonique | Une URL canonique par contenu et par langue ; le commutateur de juridiction ne change pas l'URL |
| Métadonnées | `title` ≤ 60 caractères, `description` 120–155, sans millésime ; `og:` et `twitter:` avec image générée (titre + pilier + date) |
| Fil d'Ariane | Visible (`.ariane`) et en `BreadcrumbList` |
| Indexation | `noindex` sur recherche, préférences, désabonnement, galeries internes (`prototype/composants/index.html`) ; `index` sur tout le reste, y compris les aperçus Pro |
| Vitesse | Budget § 2.4 ; HTML statique ; aucun script tiers |
| Corrections | Une correction de niveau 3–4 met à jour `dateModified` et le bandeau `.maj` ; l'URL ne change jamais |

### 4.4 Données structurées — JSON-LD

Règle : **un JSON-LD ne décrit que ce qui est visible sur la page**, jamais un contenu absent,
jamais une note que la page ne montre pas. Le prototype porte déjà `NewsMediaOrganization`
(accueil) et `NewsArticle` + `BreadcrumbList` (article). Les quatre types demandés :

**Article (analyse réglementaire)** — `prototype/fr/article.html` porte `NewsArticle` et `BreadcrumbList` ; la forme cible ci-dessous diffère du prototype sur un point : l'`author`, encore une signature de maquette dans le gabarit (registre V-30), devient une `Organization` tant qu'aucune juriste réelle ne signe :

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Stablecoins : entre l’Avis 21-333 des ACVM et la loi fédérale, qui décide de ce qu’un Québécois ou un Ontarien peut acheter ?",
  "datePublished": "2026-09-04T06:30:00-04:00",
  "dateModified": "2026-09-04T06:30:00-04:00",
  "inLanguage": "fr-CA",
  "articleSection": "Actualités & Régulation",
  "author": { "@type": "Person", "name": "La rédaction d’Actio" },
  "publisher": { "@type": "NewsMediaOrganization", "name": "Actio", "url": "https://actio.ca/" },
  "isAccessibleForFree": true,
  "citation": [
    { "@type": "Legislation", "name": "Avis 21-333 du personnel des ACVM — Cryptoactifs arrimés à une valeur", "legislationJurisdiction": "CA" }
  ]
}
```

L'`author` est `Person` seulement quand une personne réelle signe, avec `sameAs` vers son
inscription à l'ordre ; sinon `Organization` (registre V-30). `citation` reprend `.sources`.

**FinancialProduct / FinancialService (fiche de plateforme)** — la plateforme est un service
financier ; la note est un `Review` d'Actio, jamais un `AggregateRating` d'utilisateurs :

```json
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Wealthsimple Crypto",
  "url": "https://www.wealthsimple.com/",
  "areaServed": ["CA-QC", "CA-ON"],
  "additionalType": "https://schema.org/FinancialProduct",
  "review": {
    "@type": "Review",
    "author": { "@type": "Organization", "name": "Actio" },
    "datePublished": "2026-09-04",
    "reviewRating": { "@type": "Rating", "ratingValue": 4.4, "bestRating": 5, "worstRating": 0 },
    "reviewBody": "Score Actio pondéré : garde 40 %, frais 30 %, service 20 %, conformité 10 %. Statut d’inscription lu à la recherche nationale d’inscription des ACVM le 4 septembre 2026. Ne constitue pas une recommandation."
  }
}
```

Émis **seulement** quand `releve` existe et date de moins de 45 jours ; sinon aucun `review`.

**FAQPage (guide)** — chaque paire vient du champ `faq[]` et est rendue visiblement dans le guide :

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Dois-je produire la TP-21.4.39 si je n’ai rien vendu ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Le Québec exige une déclaration propre aux cryptoactifs même sans transaction imposable dans l’année ; un allègement a été annoncé au printemps 2025 et sa portée pour 2025 reste à confirmer sur le site de Revenu Québec." }
    }
  ]
}
```

**HowTo (guide pratique)** — les étapes sont celles de `guide.etapes[]`, visibles :

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Vérifier qu’une plateforme est inscrite dans ma province",
  "totalTime": "PT4M",
  "step": [
    { "@type": "HowToStep", "name": "Ouvrir la recherche nationale d’inscription des ACVM", "text": "Chercher le nom exact de l’entité, pas la marque." },
    { "@type": "HowToStep", "name": "Lire la catégorie et les provinces", "text": "Une inscription vaut pour une province ; vérifier la vôtre." },
    { "@type": "HowToStep", "name": "Vérifier l’inscription d’ESM au CANAFE", "text": "Distincte de l’inscription en valeurs mobilières." },
    { "@type": "HowToStep", "name": "Consulter les mises en garde", "text": "AMF et CVMO : une mise en garde prime sur une inscription." }
  ]
}
```

### 4.5 GEO — être cité par les moteurs génératifs

Un moteur génératif cite ce qui est **daté, sourcé, structuré et stable**. Actio n'a rien à
ajouter à sa charte pour cela ; elle a à l'exposer.

| Levier | Mise en œuvre |
|---|---|
| Réponse directe en tête | `.en-bref` (3–4 puces qui tiennent seules) et le chapô : la thèse en 80 mots, avant tout développement |
| Datation explicite | « État au 4 septembre 2026 » dans le corps, `datePublished` / `dateModified`, bandeau `.maj` sur correction |
| Sources nommées | `.sources` avec type, autorité, date ; `citation` en JSON-LD ; lien vers le document officiel |
| Terminologie officielle | « cryptoactif arrimé à une valeur », « cryptomonnaie stable », « OCRI » — les termes que les moteurs retrouvent dans les textes des autorités |
| Stabilité des URL | Aucune date, aucun millésime ; les corrections gardent l'URL |
| Fichier `llms.txt` | À la racine : description d'Actio, ses cinq piliers, sa charte de vérification, la liste des pages de référence (registre, comparateur, glossaire), sa politique de citation (« citez avec la date d'arrêté ») |
| Glossaire bilingue | `/fr/lexique/`, une entrée par terme avec `DefinedTerm` en JSON-LD |
| Pages d'autorité et d'instrument | Nœuds stables que les moteurs associent aux entités (AMF, Avis 21-333) |
| Ce qu'on refuse | Le bourrage, les pages « X vs Y » sans relevé, les titres interrogatifs sans réponse, tout contenu généré non relu par le réviseur juridique |

---

## 5. Déontologie et conformité

### 5.1 La règle qui commande tout : aucune promotion sans autorisation des ACVM

**Interdiction totale** de promouvoir — par affiliation, commandite, mention rémunérée, classement
ou mise en avant éditoriale — une plateforme de négociation de cryptoactifs qui ne figure pas sur
la **liste des plateformes autorisées à faire affaire avec les Canadiens** publiée par les ACVM,
ou qui figure sur la **liste des plateformes proscrites**, ou qui fait l'objet d'une **mise en garde**
d'un membre des ACVM depuis moins de 24 mois. Le critère n'est pas « inscrite au Canada » mais
« inscrite dans la province où le contenu est servi » : un lecteur montréalais relève de l'AMF, un
lecteur torontois de la CVMO. Le contrôle porte sur **l'entité juridique inscrite**, pas sur la
marque.

Fondement, et pourquoi la règle est plus stricte que la loi n'y oblige Actio : l'**Avis conjoint
21-330** sur la publicité, le marketing et les médias sociaux retient que le marketing diffusé par
un tiers **pour le compte** d'une plateforme engage celle-ci [À VÉRIFIER — millésime `C-03` ;
l'avis n'a pas été ouvert]. Le contenu rémunéré d'Actio devient un manquement **de la plateforme** :
Actio ne subit pas la sanction, elle la cause. S'y ajoute, applicable à Actio directement, la
*Loi sur la concurrence* sur les indications fausses ou trompeuses et la divulgation du lien
matériel [À VÉRIFIER — article].

**Trois degrés d'autorisation, trois degrés de ce qu'Actio peut faire.**

| Statut de la plateforme (lu au registre, daté) | Peut être nommée dans un article | Peut avoir une fiche et figurer au comparateur | Peut porter un lien d'affiliation | Peut commanditer |
|---|---|---|---|---|
| **Courtier en placement, membre de l'OCRI** | Oui | Oui | **Oui**, sous § 5.2 | Oui (B2B, § 6.2) |
| **Courtier restreint** (inscription active, conditions publiées) | Oui | Oui | **Oui**, sous § 5.2 — c'est « l'affiliation éthique avec des courtiers restreints autorisés » du cahier des charges | Oui |
| **Engagement préalable (PRU) accepté**, sur la liste des autorisées, non encore inscrite | Oui, avec la mention « engagement préalable, non inscrite » | Oui, fiche **sans score** et sans relevé ; ligne du comparateur grisée | **Non** — un engagement n'est pas une inscription | Non |
| Sur la liste des proscrites, ou visée par une mise en garde | Oui, dans un article d'exécution citant l'acte | Non | **Non, jamais** | Non |
| Absente des deux listes | Non, sauf article d'enquête citant une source primaire | Non | Non | Non |

### 5.2 Affiliation éthique — la liste fermée des garde-fous

Le cahier des charges impose un revenu d'affiliation. La v1 le refusait absolument ; la v2
l'admet, mais **chaque garde-fou est codé**, pas seulement écrit.

| # | Garde-fou | Où il est codé |
|---|---|---|
| 1 | Seules les plateformes de statut « courtier en placement » ou « courtier restreint », inscrites dans la province du lecteur, sans mise en garde | `plateforme.affiliation_admise` calculé chaque 6 h par le signal N0 ; un lien vers une plateforme non admise ne se rend pas |
| 2 | Le lien n'existe que dans la fiche et dans le second bouton de la carte — **jamais dans un tableau, un article, une infolettre, un titre** | `<CartePlateforme affiliation>` est le seul composant qui rend `rel="sponsored"` ; `tools/emails.mjs` refuse `rel="sponsored"` et tout domaine de plateforme dans un courriel (contrôle à ajouter au mois 4) |
| 3 | Divulgation **dans** la carte, avant le bouton, en clair : « Actio peut percevoir une commission si vous ouvrez un compte depuis ce bouton. Le score n'en tient pas compte. » | `prototype/composants/carte-plateforme.html` ; texte non modifiable par le CMS |
| 4 | Le score ne dépend que du `releve` (40 / 30 / 20 / 10) ; aucun champ « partenaire » n'entre dans le calcul ; la méthode est publiée au-dessus du comparateur | `releve.score_total` calculé ; `.comparateur__methode` |
| 5 | Ordre du comparateur : par score, puis alphabétique ; jamais par revenu | Requête triée côté serveur, sans champ commercial |
| 6 | **Coupe-circuit** : mise en garde, radiation, inscription sur la liste des proscrites → lien désactivé sous 2 h ouvrables (signal N0), fiche conservée avec le nouveau statut, article d'exécution si seuil B | § 3.2 |
| 7 | Contrat avec clause de non-regard, d'information sous 24 h et de remboursement au prorata (§ 5.5) | Contrat type |
| 8 | Aucune prime, aucun code de parrainage, aucun « bonus de bienvenue », aucun concours | Contrat ; relecture juridique |
| 9 | Ciblage provincial : un lien n'est rendu que si `plateforme.provinces` contient la province déclarée du lecteur ; province inconnue → lien absent, mention « vérifiez votre province » | Préférences (jamais l'IP) |
| 10 | Page publique des partenaires d'affiliation : nom, entité inscrite, provinces, date d'entrée, date de sortie | `/fr/transparence/affiliation/` |
| 11 | Plafonds de concentration (§ 6.4) ; l'affiliation ne dépasse jamais 30 % du chiffre d'affaires | Tableau de bord mensuel |
| 12 | Un article mentionnant une plateforme partenaire porte, en tête, la mention « [Plateforme] est partenaire d'affiliation d'Actio. Ce contenu a été produit sans son intervention. » | Champ `article.plateformes_citees[]` croisé avec la liste des partenaires |

### 5.3 Mur de séparation

| Fonction | Relève de | Parle à un annonceur | Connaît le calendrier commercial |
|---|---|---|---|
| Rédaction en chef | Direction générale, **jamais** des revenus | Oui, en présence d'un tiers, jamais sur un sujet en cours | Oui — arbitrage d'adjacence |
| Analystes, journalistes, pigistes | Rédaction en chef | Non, sauf comme source citée | Non |
| Réviseur juridique | Rédaction en chef ; rattachement fonctionnel à la conformité | Oui, pour le seul contrôle d'inscription | Oui |
| Direction des revenus | Direction générale, hors rédaction | Oui | Oui |

La direction des revenus n'a aucun accès en écriture à Strapi ; un journaliste ne détient pas la
liste des partenaires ; aucun contenu commandité ne signe du nom d'un journaliste ni n'emploie
`.note-conformite`, `.mise-en-garde`, `.en-bref` ou `.sources`. Un partenaire sanctionné apprend la
couverture en la lisant. Déclaration d'intérêts (sept rubriques) à l'embauche, au 31 janvier et
sous 5 jours ouvrables sur événement ; bitcoin et ether détenus avant l'embauche autorisés et
gelés ; autres cryptoactifs et titres d'une plateforme citée interdits à la chaîne éditoriale ;
résumé publié dans `.bio__declaration`.

### 5.4 Conformité opérationnelle du média

| Régime | Ce qui est fait | Ce qui reste à faire avant le lancement |
|---|---|---|
| **LCAP** | Consentement exprès non précoché avant le champ ; double confirmation ; identification, adresse, désabonnement en un clic, 10 jours ouvrables, 60 jours ; mentions contrôlées par `tools/emails.mjs` ; preuve dans `consentement` (IP chiffrée, jamais affichée) | Constituer Actio Média inc. et disposer d'une **adresse valide** (registre V-26 / N-23) ; programme de diligence raisonnable écrit et formation annuelle ; tester le désabonnement chez le prestataire |
| **Loi 25 / LPRPDE** | Politique de confidentialité liée ; minimisation (un champ obligatoire) ; aucun tiers dans les pages ; analytique sans témoin ; registre des traitements | Nommer et publier le responsable ; EFVP Resend et Cloudflare ; registre des incidents ; supprimer « (Loi 25 / LPRPDE) » du libellé du pied tant que l'articulation n'est pas établie (V-29) |
| **Charte de la langue française** | Français d'abord, parité d'URL, jamais l'anglais avant ; contrats d'adhésion en français | Qualification d'une infolettre bilingue diffusée au Québec (`U-58`) [À VÉRIFIER] |
| **Accessibilité** | WCAG 2.1 AA comme norme volontaire ; contrastes mesurés ; structure vérifiée | Audit externe avant d'afficher « WCAG 2.1 AA » (V-28) ; WCAG 2.2 non mentionnée (`U-54`) |
| **Droit d'auteur** | Citation courte avec source ; jamais de texte intégral d'un acte ; logos d'autorités interdits ; polices SIL OFL auto-hébergées | Lecture de la Licence du gouvernement ouvert (`U-76`) |
| **Responsabilité** | `.avertissement` sur chaque page et courriel ; « Portée de cette analyse » en fin d'article ; politique de correction liée | Assurance responsabilité professionnelle et médias **avant** la mise en ligne [À VÉRIFIER — aucune cotation] |

**Disclaimers types.** Le pied de page (`.avertissement`), l'avertissement d'article (« Portée de
cette analyse »), l'avertissement fiscal (bloc « À vérifier avant de déclarer » de l'infolettre),
la mention de contenu commandité et la légende de donnée (`.schema__pied`, `caption`) sont
rédigés dans le prototype et repris dans `docs/v1/L3-3-conformite-deontologie.md` § 3.3, texte
français faisant foi ; l'anglais est une traduction de service à faire réviser par un juriste de
common law [À VÉRIFIER].

### 5.5 Politique de correction

Quatre niveaux, un véhicule (`.maj`, `.maj--correction`), un journal public `/fr/corrections/`
jamais purgé, quatre voies de signalement (lecteur 2 jours ouvrables, source citée 1 jour,
**autorité 4 heures ouvrées**, interne immédiat). Niveau 3 (fait faux) et 4 (conclusion retirée) :
correction sous 24 h, bandeau énonçant ce qu'affirmait la version précédente, avis aux abonnés si
diffusé en infolettre, `dateModified` mis à jour, URL inchangée. Une mise en demeure n'est pas un
signalement : accusé de réception sans reconnaissance, gel de l'article, notification à l'avocat
et à l'assureur, vérification par une personne étrangère à l'article, décision écrite sous 5 jours
ouvrables. Une dépublication ne se négocie pas.

---

## 6. Modèle de revenus tripartite

Montants en dollars canadiens, hors taxes. Aucun chiffre de marché ne provient de la base
(`U-70`, `U-72`) : les hypothèses sont des **postulats de gestion**, écrits pour être réfutés par
les six premiers mois.

### 6.1 Affiliation éthique (à partir du mois 4)

| Paramètre | Valeur | Motif |
|---|---|---|
| Plateformes admissibles | Courtiers en placement membres de l'OCRI et courtiers restreints inscrits, sans mise en garde, dans la province du lecteur (§ 5.1) | Règle déontologique |
| Emplacement | Second bouton de la carte de plateforme (fiche) — un seul par fiche | § 5.2, garde-fou 2 |
| Rémunération admise | Forfait par compte ouvert **et financé** (CPA) ; **refusé** : part des frais de négociation du lecteur (rémunération à l'activité = incitation à négocier) | Un média payé à l'activité du lecteur devient un conseiller de fait |
| Hypothèse H-A1 : clics vers une fiche / mois au mois 6 | 6 000 | Postulat |
| H-A2 : taux de clic sur le bouton d'affiliation | 8 % | Postulat |
| H-A3 : taux de comptes ouverts et financés | 12 % | Postulat |
| H-A4 : forfait moyen | 45 $ | À négocier ; **[À VÉRIFIER]** |
| → Revenu mensuel au mois 6 | ≈ 2 600 $ | 6 000 × 8 % × 12 % × 45 $ |
| → Revenu mensuel au mois 12 (trafic × 2,5) | ≈ 6 500 $ | — |
| Plafond | 30 % du chiffre d'affaires ; jamais un partenaire au-delà de 15 % | § 6.4 |
| Test de réfutation, mois 7 | Si H-A3 < 6 % ou si un partenaire pèse > 50 % de l'affiliation, geler l'affiliation et réviser la fiche | — |

### 6.2 Commandite B2B (à partir du mois 5)

Annonceurs admis : cabinets d'avocats, de comptables et de fiscalistes (membres d'un ordre),
dépositaires et fournisseurs de garde institutionnelle, éditeurs de logiciels de conformité,
fournisseurs d'analyse de chaîne, formations professionnelles, associations. **Refusés** :
émetteurs de jetons, préventes, programmes de parrainage, plateformes non admises au § 5.1,
toute entité visée par une mise en garde depuis moins de 24 mois.

| Format | Emplacement | Prix indicatif | Règle |
|---|---|---|---|
| Encart de commandite d'édition (mardi) | Entre le Chiffre de la semaine et l'encart de transparence de `newsletter/contenus/dispatch-042.html` | 900 $ l'édition (plancher, liste < 4 000) ; 60 $ le mille délivré au-delà ; 120 $ le mille sur le segment `b2b-conformite` | 55 mots, un lien, sans image ; libellé « COMMANDITE » ; jamais deux par édition ; quatre par trimestre et par annonceur ; jamais deux consécutives ; l'encart de transparence est réécrit en conséquence (`tools/emails.mjs` à étendre : refus d'un encart sans entrée `commandite` dans le manifeste, ou d'un encart de plus de 55 mots) |
| Commandite de rubrique (Fiscalité & Droit pratique, Actio Research) | Bandeau de rubrique, sans droit de regard | 2 500 $ / mois | Adjacence arbitrée par la rédaction en chef ; retrait 30 jours avant et après tout article visant le commanditaire |
| Contenu commandité identifié | Page dédiée, `.badge--consultation` « Contenu commandité », non signé | 3 500 $ | Procédure en 8 étapes du mur de séparation ; jamais le gabarit d'analyse |
| Événement ou formation coproduits | Programme arrêté par la rédaction seule | Sur devis | Plafond 20 % du budget par commanditaire |

Hypothèse H-B1 : 8 éditions commanditées par trimestre au mois 9, 4 annonceurs distincts ;
H-B2 : une commandite de rubrique au mois 8 ; → ≈ 4 900 $ / mois au mois 12.

### 6.3 Actio Pro (mois 7 à 12)

Les promesses de `.pro` (`prototype/fr/index.html`) sont des engagements de volume.

| Promesse codée | Engagement | Palier |
|---|---|---|
| Rapports trimestriels | Gratuits ; **données brutes, historique, alertes réservés à Pro** — c'est ce que dit `.pro` | — |
| Notes de recherche | 2 par mois, 3 500 à 6 000 mots, état de vérification ligne à ligne | Tous |
| Suivi de dossiers | 12 dossiers ouverts, chronologies d'actes datés | Tous |
| Agenda des consultations et échéances | 12 mois, export iCalendar / CSV (public : 14 jours dans l'infolettre du vendredi) | Tous ; export dès Cabinet |
| Registre enrichi | Historique des inscriptions, conditions, dispenses, horodatage par ligne | Tous ; export dès Cabinet |
| Alertes | Courriel sous 4 h ouvrables après publication d'un acte par une autorité suivie | Tous |
| Données structurées (API lecture seule) | Taxonomies, échéances, registre, relevés — **jamais le texte des actes** (`U-76`) | Research |
| Séances avec la rédaction | Trimestrielle, 60 min | Cabinet et Research |

| Palier | Sièges | Prix annuel | Cible |
|---|---|---|---|
| Pro Individuel | 1, nominatif | **1 490 $** | Juriste, fiscaliste, administrateur |
| Pro Cabinet | 5 inclus, jusqu'à 15 (240 $ le siège additionnel) | **5 900 $** | Cabinet, direction de la conformité |
| Research Entreprise | 25 inclus, accès par domaine (180 $ au-delà) | **24 000 $** | Plateforme inscrite, banque, gestionnaire, régulateur |

Facturation annuelle, taxes selon la province du client, indexation plafonnée à IPC + 3 points,
aucun rabais au-delà de 15 %. Aucune commandite ni affiliation dans le périmètre Pro. Un client
inscrit auprès des ACVM n'obtient aucune antériorité éditoriale.

Hypothèses (mois 12) : H-P1 liste 7 500 abonnés ; H-P2 part des domaines professionnels 55 % ;
H-P3 conversion 1,1 % → 45 sièges ; H-P4 2,6 sièges par contrat → 17 contrats ; H-P5 revenu moyen
par siège 620 $ → **≈ 28 000 $ annualisés au mois 12**. **H-P3 est l'hypothèse la plus fragile**
(aucun comparateur canadien) : test de réfutation au **mois 8** — proposer un engagement payable
d'avance à 30 lecteurs du segment `b2b-conformite` ; moins de 4 signatures = H-P3 faux, Pro
redessiné avant toute embauche.

### 6.4 Répartition cible et plafonds de concentration

| Source | Mois 6 (mensuel) | Mois 12 (mensuel) | Cible de part à 12 mois | Plafond |
|---|---|---|---|---|
| Affiliation | ≈ 2 600 $ | ≈ 6 500 $ | ≤ 30 % | Un partenaire ≤ 15 % du CA ; les trois premiers ≤ 50 % de l'affiliation |
| Commandite B2B | 0 | ≈ 4 900 $ | ≤ 35 % | Un annonceur ≤ 15 % du CA |
| Actio Pro | 0 | ≈ 2 300 $ | ≥ 15 % au mois 12, ≥ 55 % au mois 36 | Un client ≤ 8 % du CA |
| **Total** | **≈ 2 600 $** | **≈ 13 700 $** | — | — |

Charges de la phase 1 (2,4 ETP : rédaction en chef 95 000 $, analyste réglementaire 72 000 $,
traduction 0,4 ETP 34 000 $, charges sociales 16 %, vérification juridique externe 300 h 30 000 $,
assurance 9 000 $ [À VÉRIFIER], hébergement / envoi / domaines 14 000 $, comptabilité 8 000 $) :
**≈ 289 000 $ par an**, soit ≈ 24 000 $ par mois ; développement initial 25 jours, 22 500 $. Le
modèle **n'est pas rentable à 12 mois** (≈ 13 700 $ / mois contre 24 000 $ de charges) : besoin de
financement de la première année de l'ordre de **200 000 $**, rentabilité visée entre les mois 24
et 30 sur la trajectoire de H-P3. Écrire autre chose serait une indication trompeuse.

---

## 7. Feuille de route sur 12 mois

**Préalables, avant le mois 1 — sans eux, rien ne se lance.** Constitution d'Actio Média inc. et
adresse valide (V-26) ; assurance responsabilité média ; responsable de la protection des
renseignements personnels ; EFVP Resend et Cloudflare ; accès aux sources primaires ouvert et les
sept lectures prioritaires du registre de vérification faites ; décision sur la signature (V-30) ;
retrait de la preuve sociale « 15 000 » (V-25) ; lecture des conditions d'utilisation des sites
des autorités avant toute veille automatisée.

### Phase 1 — Mois 1 : fondations

**Objectif unique :** une infrastructure qui tient, une identité en ligne, quinze guides
vérifiés, une séquence d'accueil qui part.

| Livrable | Détail | Fichier ou outil de départ |
|---|---|---|
| Infrastructure | AWS `ca-central-1` : Next.js, Strapi, PostgreSQL, objets, secrets ; sauvegardes `ca-west-1` ; Cloudflare Regional Services ; CSP ; polices auto-hébergées ; CI avec `npm run tout` | § 2 |
| Identité | Portage de `tokens.css`, `actio.css`, `article.css`, `registre.css` ; `composants.tw.css` en `globals.css` ; trois composants React ; accueil, article, registre, portail en `fr` et `en` | Modules 1 et 3 |
| Modèle de contenu | Les 17 collections de § 1.2 ; règles de schéma 1 à 5 ; rôles (rédaction, révision juridique, revenus sans écriture) | § 1.2 |
| 15 guides | Académie : 4 « Je débute », 5 « Je déclare », 4 « Je comprends les plateformes », + 2 guides du vendredi (« vérifier l'inscription d'ESM », « calculer son PBR ») ; chacun avec sources lues, état de vérification, `faq[]` ou `etapes[]` | `prototype/fr/index.html` `#academie` |
| Guide de survie | Les huit chapitres promis par C1 ; `{{date_arret_guide}}` rempli | `newsletter/contenus/bienvenue-1.html` |
| Séquence d'accueil | Double confirmation, C1/C2/C3, règle de collision, registre de consentement, désabonnement en un clic testé sur six clients | `newsletter/manifeste.json` |
| Veille | *Gazette* (RSS) + listes ACVM et mises en garde AMF/CVMO en surveillance, **manuelle tant que les conditions d'utilisation ne sont pas lues** | § 3 |
| Registre des plateformes | Première synchronisation lue et capturée ; compteur ACVM alimenté | `prototype/fr/registre.html` |

**Sortie :** `npm run tout` vert en CI ; 15 guides publiés avec zéro ligne « NON VÉRIFIÉ » ;
séquence d'accueil testée de bout en bout ; registre synchronisé depuis 7 jours sans interruption.
**Reporté :** infolettre bi-hebdomadaire (les guides doivent exister avant qu'on renvoie vers eux),
comparateur, affiliation, Pro.

### Phase 2 — Mois 2 à 3 : infolettre bi-hebdomadaire et printemps fiscal

**Objectif unique :** publier le mardi et le vendredi, huit semaines de suite, sans report, et
être indexé sur la fiscalité avant le 1ᵉʳ février.

| Livrable | Détail |
|---|---|
| Actio Dispatch | Édition du mardi (Grand angle, Radar, Cas pratique, Chiffre) et du vendredi (récapitulatif, guide, agenda 14 jours) ; deux vagues ; A/B 20 % ; flux de marché branché avec source contractée ; Chiffre de la semaine sourcé ou absent |
| SEO printemps fiscal | Silo `/fr/fiscalite/` complet : PBR, gain/revenu, T1135, TP-21.4.39, jalonnement, minage et TPS/TVH, échéances (lues à la source), FAQ ; `FAQPage` et `HowTo` ; pages EN à parité |
| Pages d'autorité et d'instrument | ACVM, AMF, CVMO, OCRI, CANAFE, ARC, Revenu Québec ; Avis 21-327, 21-330, 21-333, cadre de garde de l'OCRI |
| Veille | Passage à l'automatique pour chaque hôte dont les conditions ont été lues ; signal N0 branché sur le registre |
| Mesure | Tableau de bord : clic sur le premier lien, plaintes, désabonnements, confirmations, délivrabilité |

**Sortie :** 16 éditions consécutives ; plaintes < 0,08 % ; désabonnement ≤ 0,45 % par envoi ;
clic sur le premier lien ≥ 6,5 % (mardi) et ≥ 9 % (vendredi) ; 2 000 abonnés nets ; les pages
fiscales indexées et positionnées sur les expressions de § 4.2 avant février. **Reporté :**
comparateur, affiliation, commandite, Pro.

### Phase 3 — Mois 4 à 6 : comparateur interactif et partenariats B2B

**Objectif unique :** un comparateur dont chaque chiffre a un relevé daté, et les premiers
revenus.

| Livrable | Détail |
|---|---|
| Comparateur interactif | Collection `releve` ; premier relevé mensuel (1 000 $ CA, heure fixe, captures) sur Shakepay, Newton, Wealthsimple Crypto, Bitbuy, VirgoCX **si et seulement si** leur statut est lu et admis ; filtres province / catégorie / dépositaire ; tri par score ; méthode publiée ; « illustratif » disparaît ligne par ligne |
| Fiches de plateformes | Une par plateforme admise ; `FinancialService` + `Review` ; avantages / inconvénients ; statut daté ; divulgation |
| Affiliation | Contrats avec 2 à 3 courtiers admis ; coupe-circuit N0 testé (simulation d'une mise en garde) ; page publique des partenaires ; `tools/emails.mjs` étendu (refus de `rel="sponsored"` dans un courriel) |
| Commandite B2B | Grille, contrat type, objet `commandite` dans le manifeste et contrôle d'assemblage ; premiers encarts à partir de l'édition 30 |
| Registre | 40 fiches, historique des décisions ; page « Cartographie des inscriptions » |

**Sortie :** relevé mensuel tenu 3 fois ; zéro donnée « illustratif » sur les plateformes
relevées ; 3 partenaires d'affiliation, 4 annonceurs B2B distincts ; ≈ 2 600 $ / mois
d'affiliation au mois 6 ; **zéro lien d'affiliation rendu vers une plateforme non admise** (test
automatique hebdomadaire). **Reporté :** Pro.

### Phase 4 — Mois 7 à 12 : Actio Pro

**Objectif unique :** 17 contrats Pro et un renouvellement mesurable.

| Livrable | Détail |
|---|---|
| Test de réfutation (mois 8) | 30 lecteurs `b2b-conformite`, engagement payable d'avance ; < 4 signatures → redessiner avant d'embaucher |
| Produit | Authentification, accès par domaine, facturation annuelle avec taxes provinciales, notes de recherche (2 / mois), suivi de 12 dossiers, agenda 12 mois exportable, registre enrichi, alertes sous 4 h ouvrables |
| Research | Rapport trimestriel public (T4) ; données brutes et historique réservés ; API lecture seule pour Research Entreprise |
| Contenu | Guides « Spécialiste » en aperçu ; parité EN complète sur l'Académie et le comparateur |
| Équipe | Second analyste (Ontario / fédéral) au mois 7 ; 0,6 ETP relation client au mois 10 |

**Sortie au mois 12 :** 7 500 abonnés ; 45 sièges / 17 contrats Pro ; ≈ 13 700 $ / mois toutes
sources ; plafonds de concentration respectés ; délai médian d'alerte < 4 h ouvrables sur 20 actes
consécutifs ; zéro correction de niveau 4 ; registre de vérification sans ligne « NON VÉRIFIÉ »
sur le site en ligne.

### Synthèse

| Phase | Mois | Objectif unique | Livrables clés | Sortie chiffrée | Reporté |
|---|---|---|---|---|---|
| 1 — Fondations | 1 | Infra, identité, 15 guides, séquence | AWS `ca-central-1`, Strapi, composants, guides, guide de survie, C1–C3 | CI verte, 15 guides vérifiés, séquence testée | Dispatch, comparateur, revenus |
| 2 — Infolettre et fiscalité | 2–3 | 16 éditions d'affilée, indexé avant février | Mardi / vendredi, silo fiscal, autorités et instruments | 2 000 abonnés, plaintes < 0,08 % | Comparateur, revenus |
| 3 — Comparateur et B2B | 4–6 | Chaque chiffre a un relevé | Relevés, fiches, affiliation encadrée, commandite | 3 partenaires, 4 annonceurs, ≈ 2 600 $ / mois | Pro |
| 4 — Actio Pro | 7–12 | 17 contrats | Test de réfutation, produit Pro, Research, API | 7 500 abonnés, ≈ 13 700 $ / mois | Formation, syndication, événements (année 2) |

### Risques structurels

| # | Risque | Signal précoce | Parade | Seuil de renoncement |
|---|---|---|---|---|
| R1 | Une plateforme partenaire est visée par une mise en garde | Signal N0 | Coupe-circuit 2 h, fiche mise à jour, article d'exécution, remboursement au prorata | Deux partenaires sur trois perdus en 6 mois : affiliation gelée, revenu reporté sur Pro |
| R2 | Étroitesse du marché | Croissance nette < 300 / mois pendant 3 mois avec un clic qui tient | Parité EN, associations professionnelles, Research vendu aux régulateurs et universités | Liste < 5 000 au mois 12 : abonnement de recherche pur |
| R3 | Coût de la vérification | > 40 % du temps éditorial sur 4 éditions | Vérifier par texte primaire, pas par article ; forfait externe 300 h | Franchi au mois 6 : vendredi allégé, jamais d'abaissement du standard |
| R4 | Mise en cause de la responsabilité | Première mise en demeure ou demande de retrait visant une fiche | `.avertissement`, politique de correction, aucun statut sans capture, assurance souscrite avant la mise en ligne | Deux mises en demeure fondées en 12 mois : suspension des fiches, republication sur avis écrit |
| R5 | Dépendance à un fournisseur hors Canada (Resend, Cloudflare) | EFVP défavorable ; incident | Registre de consentement chez Actio ; SES `ca-central-1` en repli ; aucune donnée personnelle en URL | — |

---

### Ce qui reste à trancher

1. **Strapi Cloud ou auto-hébergement.** Auto-hébergement retenu pour la résidence ; Strapi Cloud
   n'est envisageable que si une région canadienne existe **[À VÉRIFIER]**.
2. **Resend ou SES dès le départ.** Resend + React Email est l'option du cahier des charges ; si
   l'EFVP est défavorable, SES `ca-central-1` s'y substitue sans changement éditorial. À trancher
   à la lecture de l'EFVP, pas avant.
3. **La rémunération à l'activité.** Refusée ici (CPA seulement). Un partenaire peut ne proposer
   que la part de frais : Actio renonce alors au partenaire.
4. **Le comparateur au lancement.** Le cahier des charges le place en page d'accueil dès le
   Module 1 ; la feuille de route ne l'alimente qu'au mois 4. Entre-temps : le bloc affiche
   « relevé en cours » sur les colonnes chiffrées et un statut lu — ou n'est pas affiché. La
   rédaction recommande de l'afficher avec le statut seul.
5. **Le source de cours et de flux.** Aucun fournisseur n'a été comparé (`U-74`) ; critères posés
   au § 1.4, choix au mois 2.
6. **La signature nominative.** Tant qu'aucune juriste réelle ne signe, `author` est
   `Organization` ; la fiche auteur du gabarit reste une spécification.
