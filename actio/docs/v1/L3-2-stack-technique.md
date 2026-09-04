## 2. Stack technique

Cette section est écrite pour être exécutée par une équipe de 2,4 ETP en phase 1, sur
l'enveloppe annuelle de **14 000 $** que le §4.2 alloue conjointement à l'hébergement, au
prestataire d'envoi, aux domaines et aux polices auto-hébergées. Toute sa trame découle
d'une contrainte unique : le média publie du droit, donc **la preuve doit survivre au
fournisseur**. Un fait publié doit rester démontrable quand le système de gestion de
contenu change ; une preuve de consentement doit rester opposable quand le prestataire
d'envoi change. On choisit donc systématiquement l'architecture qui rend le fournisseur
remplaçable, même lorsqu'elle coûte plus cher en travail d'intégration.

**Avertissement de méthode, opposable.** Aucun tarif, aucun classement de délivrabilité
et aucune fonctionnalité de Sanity, de WordPress VIP, de Listmonk, de Feedly ou de
RSS.app n'a pu être vérifié (`U-74`). Les cellules de coût portent donc la mention
**[À VÉRIFIER]** et une méthode de remplissage, jamais un chiffre inventé. Les arbitrages
reposent sur la licence, le modèle de contenu, la localisation et la réversibilité —
quatre critères vérifiables sans grille tarifaire.

---

### 2.1 CMS et moteur de site

#### Ce qu'Actio demande réellement à son CMS

Cinq exigences, toutes issues des livrables 1 et 2, aucune négociable :

1. **Bilinguisme imposé** — chaque article a une contrepartie `fr-CA` / `en-CA` liée, avec
   `hreflang` réciproque (`prototype/fr/article.html`, lignes 9-11). Le registre des
   plateformes n'existe aujourd'hui qu'en français : le modèle doit accepter qu'une
   traduction **manque** sans casser la navigation, exactement comme le fait le bouton EN
   de `registre.html` qui renvoie à l'accueil anglais avec un `title` explicatif.
2. **Deux taxonomies structurantes** — juridiction (`--jur-federal`, `--jur-quebec`,
   `--jur-ontario`, `--jur-multi`, `--jur-intl`) et statut réglementaire
   (`--statut-alerte`, `--statut-consultation`, `--statut-conforme`, `--statut-info`,
   `--statut-neutre`). Ce sont des jetons de design, donc des valeurs closes : le CMS doit
   les traiter comme des énumérations, pas comme des étiquettes libres.
3. **Gabarit d'article à boîtes juridiques** — les trois variantes `.boite--texte`,
   `.boite--impact` et `.boite--risque`, chacune avec son `.boite__entete`, son
   `.boite__corps` et son `.boite__ref`, plus la liste `.sources__liste` dont chaque entrée
   porte un `.sources__type` (« Décision », « Avis », « Loi »). Ce ne sont pas des blocs de
   texte riche : ce sont des types de données.
4. **Registre des plateformes** — donnée structurée, sept colonnes, synchronisée depuis
   les registres officiels, jamais saisie à la main (note de provenance de
   `registre.html`).
5. **Mur payant Actio Pro** à partir de la phase 3, sur des contenus déjà publiés en
   aperçu dès la phase 2.

#### Comparaison

Verdict par critère : ✅ satisfait, ⚠️ satisfait au prix d'un contournement, ❌ non
satisfait, `[NV]` non vérifié.

| Critère | Next.js + Tailwind sur **Ghost** | sur **Strapi** | sur **Payload 3** | sur **Sanity** | **WordPress VIP** |
|---|---|---|---|---|---|
| Licence du cœur | MIT (mention 2013-2026) | licence non vérifiée `[NV]` ; cœur ouvert | **MIT** | propriétaire, service hébergé `[NV]` | GPL + contrat de service `[NV]` |
| Coût | Ghost(Pro) ou auto-hébergement — grille **[À VÉRIFIER]** | Strapi Cloud ou auto-hébergement — **[À VÉRIFIER]** | **hébergement seul** : pas de licence à payer | abonnement par siège et par requête **[À VÉRIFIER]** | contrat annuel d'entreprise **[À VÉRIFIER]**, hors enveloppe |
| Bilinguisme natif | ❌ un site = une langue ; deux instances à synchroniser | ✅ i18n intégrée | ✅ localisation par champ, sur un seul document | `[NV]` | ⚠️ extension tierce (multisite ou greffon) |
| Modèle de contenu | ❌ fermé : `post`, `page`, `tag`, `author`. Les boîtes juridiques deviennent du HTML dans le corps | ✅ types et composants arbitraires | ✅ types, blocs et champs arbitraires, typés en TypeScript | ✅ schémas arbitraires | ⚠️ champs personnalisés greffés sur `post` |
| API | ✅ Content API + Admin API | ✅ REST **et** GraphQL générés | ✅ REST, GraphQL **et** accès local sans HTTP dans le même processus Next.js | ✅ API de requête propriétaire | ⚠️ REST et GraphQL selon greffons |
| Flux de travail éditorial | ✅ brouillon / programmé / publié | ⚠️ à configurer | ⚠️ à configurer (crochets et états) | ⚠️ à configurer | ✅ rôles et relecture matures |
| Versions et corrections | ⚠️ historique limité | ⚠️ selon configuration | ✅ versionnement et brouillons par document | ✅ historique de document | ✅ révisions natives |
| Hébergement au Canada | ✅ auto-hébergeable | ✅ auto-hébergeable | ✅ auto-hébergeable, PostgreSQL | ❌ jeu de données hébergé par l'éditeur ; région canadienne `[NV]` | ❌ plateforme de l'éditeur |
| Verrouillage fournisseur | ⚠️ **le cœur dépend de Mailgun** (voir §2.2) | ✅ faible | ✅ faible : base PostgreSQL possédée | ❌ fort | ❌ fort |
| Compétences requises | Node + Handlebars | Node + modèle Strapi | **Node/TypeScript + Next.js — les mêmes que le frontal** | schémas + langage de requête propriétaire | PHP + procédures de l'éditeur |

#### Décision

**Payload 3, en MIT, installé dans l'application Next.js elle-même, sur PostgreSQL.**

Motif, en trois points opposables. (i) **Il n'ajoute pas de second système à exploiter** :
Payload s'installe dans le répertoire `/app` de l'application Next.js et expose un accès
local dans le même processus — 2,4 ETP administrent une application, pas un CMS *plus* un
frontal *plus* leur synchronisation. (ii) **Le modèle de contenu est programmable et
typé**, ce que Ghost interdit : boîtes juridiques et sources primaires doivent être des
enregistrements interrogeables, pour afficher « toutes les analyses citant l'Avis 21-333 »
sans moissonner son propre site. (iii) **La base PostgreSQL appartient à Actio**, en
`ca-central-1` : la sortie coûte un `pg_dump`, pas une renégociation.

Ghost est écarté pour deux raisons cumulatives : modèle de contenu fermé, et cœur dépendant
de `mailgun.js`, qui lit `bulkEmail.mailgun.apiKey`, `bulkEmail.mailgun.domain` et
`bulkEmail.mailgun.baseUrl` — « infolettre
Ghost native » signifie en pratique « Mailgun ». Strapi est recevable et constitue le repli
immédiat, mais impose un second exécutable et un second déploiement. Sanity est écarté sur
la résidence (`[NV]`) et le verrouillage ; WordPress VIP sur le coût et les compétences —
il n'existe aucune compétence PHP dans l'effectif de la phase 1.

#### Modèle de contenu retenu

Neuf collections. Les champs marqués **[loc]** sont localisés `fr-CA` / `en-CA`.

| Collection | Champs (extrait exécutable) |
|---|---|
| `article` | `titre` **[loc]**, `chapeau` **[loc]**, `slug` **[loc]**, `corps` **[loc]** (blocs), `auteur` → `auteur`, `juridictions[]` → `juridiction`, `statut` → énumération de statut, `rubrique` (5 valeurs du menu), `sources[]` → `source_primaire`, `date_publication`, `date_derniere_verification`, `etat_verification` (`vérifié` / `partiellement vérifié` / `non vérifié`), `corrections[]` → `correction`, `temps_lecture` (calculé, jamais saisi), `pro` (booléen) |
| `bloc_boite` (bloc du corps) | `variante` (`texte` \| `impact` \| `risque` → `.boite--texte`, `.boite--impact`, `.boite--risque`), `entete` **[loc]**, `corps` **[loc]**, `reference` **[loc]** (rendu en `.boite__ref`) |
| `source_primaire` | `type` (`Décision` \| `Avis` \| `Loi` \| `Règlement` \| `Directive` — alimente `.sources__type`), `titre` **[loc]**, `autorite` → `autorite`, `url`, `date_document`, `date_consultation` **obligatoire**, `document_lu` (booléen), `renvoi_registre_incertitudes` (ex. `U-07`) |
| `plateforme` (registre) | `nom`, `statut_valeurs_mobilieres`, `autorite_principale` → `autorite`, `provinces[]`, `regime_lbcft`, `derniere_decision`, `url_fiche_officielle`, `horodatage_synchro`, `origine` (toujours une liste officielle) |
| `instrument` | `numero`, `titre` **[loc]**, `autorite`, `etat` (`en vigueur` \| `projet` \| `abrogé` \| `intérimaire`), `url_fr`, `url_en`, `existe_en_francais` (booléen — voir `U-14`) |
| `autorite` | `sigle`, `nom` **[loc]**, `juridiction`, `url_veille`, `url_flux` (nullable), `couleur` (jeton `--jur-*`) |
| `edition_infolettre` | `numero`, `objet`, `preentete`, `segments[]`, `contenu`, `date_envoi`, `lien_version_web`, `corrections[]` |
| `auteur` | `nom`, `fonction` **[loc]**, `declaration_interets` **[loc]**, `portrait` |
| `correction` | `article` → `article`, `date`, `nature` (`fait` \| `droit` \| `forme`), `texte_avant`, `texte_apres`, `edition_de_publication` |

**Trois règles de modèle, imposées au niveau du schéma, pas de la relecture.**
(1) Un `article` ne se publie pas si `sources[]` compte moins de **quatre** entrées de
type `Décision`, `Avis`, `Loi` ou `Règlement` — le plancher du livrable 2 devient une
contrainte de base de données. (2) Toute `source_primaire` dont `document_lu` est faux
force l'affichage de la formulation prudente attachée à son
`renvoi_registre_incertitudes` : le registre des incertitudes cesse d'être un document et
devient un champ. (3) Une `plateforme` sans `horodatage_synchro` de moins de **24 heures**
n'est pas rendue : `registre.html` affiche alors `.vide__titre` « Aucune donnée chargée »,
comportement déjà codé dans le prototype.

#### Stratégie de rendu

| Objet | Mode | Revalidation | Motif |
|---|---|---|---|
| Articles, rubriques, dossiers, guides | Statique à la compilation | À la demande, par crochet à la publication | Un texte de droit publié ne change qu'à la correction ; la correction déclenche le crochet |
| Accueil `fr/index.html`, `en/index.html` | Statique | Incrémentale à **900 s** | Le fil `.depeches` et le bandeau `.cotations__piste` bougent dans la journée |
| Registre des plateformes | Statique | Incrémentale à **6 h**, conforme à la « fréquence cible : 6 h » affichée dans `.provenance__horodatage` | La donnée vient d'une synchronisation, pas d'une saisie |
| Agenda `.echeancier` | Statique | Incrémentale à **24 h** | Horizon trois mois, granularité au jour |
| Recherche, préférences d'infolettre, désabonnement | Rendu à la demande | — | Contenu propre au lecteur ; jamais mis en cache, jamais indexé (`noindex`) |
| Pages Actio Pro verrouillées | Statique pour l'aperçu, à la demande pour le détail | — | L'aperçu doit être indexable ; le détail est un contrôle d'accès, jamais un masquage CSS |

Le portail de langue `prototype/index.html` reste une redirection 302 au niveau du réseau
de diffusion, jamais une page rendue : la négociation de langue ne doit pas être mise en
cache par juridiction.

---

### 2.2 Envoi de l'infolettre

#### Le principe qui commande le choix

La LCAP fait porter à l'expéditeur **le fardeau de la preuve du consentement**, et l'art. 33
lui ouvre une défense de diligence raisonnable. La preuve est donc un actif juridique :
elle se compose de `date_consentement`, `ip_consentement` et `source_consentement`, trois
des quatre jetons déjà déclarés `obligatoires_lcap` dans `newsletter/manifeste.json`.

**Décision d'architecture, préalable au choix du fournisseur : le registre de consentement
est maître chez Actio, en `ca-central-1`, et n'est jamais délégué.** Le prestataire d'envoi
ne reçoit qu'une charge minimale — adresse, segment, jetons de fusion résolus — et n'est
jamais l'autorité sur le consentement. Cela a trois effets : la preuve LCAP survit au
changement de fournisseur ; l'évaluation des facteurs relatifs à la vie privée exigée par
la Loi 25 avant toute communication hors Québec porte sur un périmètre réduit et stable ;
et la réversibilité cesse de dépendre d'une fonction d'exportation.

#### Comparaison

| Critère | Beehiiv | Ghost natif | Mailgun | Resend | Amazon SES | Listmonk auto-hébergé |
|---|---|---|---|---|---|---|
| Nature | plateforme d'infolettre hébergée | module du CMS | service d'envoi | service d'envoi | service d'envoi d'infrastructure | logiciel AGPL v3 `[NV]` à exploiter soi-même |
| Réputation d'IP | mutualisée par défaut `[NV]` | celle de Mailgun | mutualisée ou dédiée `[NV]` | `[NV]` | mutualisée ou dédiée ; réputation à construire | celle du relais SMTP retenu |
| Segmentation | intégrée `[NV]` | étiquettes de membres | ⚠️ pas son objet | ⚠️ pas son objet | ❌ aucune | requêtes SQL `[NV]` |
| Séquences automatisées | intégrées `[NV]` | limitées | ❌ | ❌ | ❌ | `[NV]` |
| Preuve du consentement LCAP | dépend du fournisseur | dans la base Ghost | ❌ hors périmètre | ❌ hors périmètre | ❌ hors périmètre | ✅ dans la base d'Actio |
| API et crochets | `[NV]` | Admin API | ✅ crochets d'événements | ✅ | ✅ événements par file de messages | ✅ API HTTP |
| Résidence des données | ❌ non établie | celle de l'hôte, **sauf l'envoi, qui passe par Mailgun** | ❌ non établie | ❌ non établie | ✅ **`ca-central-1`** | ✅ celle qu'Actio choisit |
| Modèle de coût | par abonné et par mois | licence nulle + coût Mailgun | par message et par volume | par message | **par message** | serveur + relais SMTP |
| Réversibilité | export de liste `[NV]` | `pg_dump` + reconstruction de l'envoi | liste non détenue | liste non détenue | liste non détenue | `pg_dump` |

**Sur le coût par abonné.** Les grilles tarifaires n'ont pas pu être consultées
(`U-74`) : aucun montant n'est avancé ici. Ce qui est décidable sans elles, c'est la
**forme** du coût, et elle suffit à trancher.

| Taille de liste | Modèle « par abonné » (Beehiiv) | Modèle « par message » (SES, Mailgun, Resend) | Modèle « auto-hébergé » (Listmonk) |
|---|---|---|---|
| 1 000 | coût plancher de palier **[À VÉRIFIER]** | 44 000 messages/an — négligeable | serveur, ≈ constant |
| 10 000 | croît linéairement **[À VÉRIFIER]** | 440 000 messages/an | serveur, ≈ constant |
| 50 000 | croît linéairement **[À VÉRIFIER]** | 2 200 000 messages/an | serveur + surveillance |

Actio envoie **44 éditions par an** plus trois courriels de bienvenue par inscription : son
coût est gouverné par le nombre de **messages**, pas par le nombre d'abonnés inactifs. Un
modèle par abonné facture la partie de la liste qui ne reçoit rien la semaine où elle ne
reçoit rien. **Sous-enveloppe allouée à l'envoi : 4 800 $ par an**, sur les 14 000 $ du
poste « hébergement, prestataire d'envoi, domaines, polices auto-hébergées » — le solde se
répartit en 6 200 $ d'hébergement, 2 400 $ d'outillage de veille et 600 $ de domaines et
certificats ; les polices sont sous licence SIL OFL et ne coûtent rien.

#### Décision

**Listmonk auto-hébergé dans `ca-central-1`, adossé à Amazon SES `ca-central-1` comme
agent de transport, le registre de consentement demeurant dans le PostgreSQL d'Actio.**

Motif : c'est la seule combinaison des six où la preuve LCAP, la liste et l'horodatage du
consentement ne quittent jamais un système qu'Actio contrôle, et où SES est la seule des
six solutions d'envoi dont une région canadienne soit établie par la base factuelle.
Corollaire : **aucune évaluation des facteurs relatifs à la vie privée pour communication
hors Québec n'est requise par ce choix** — non parce que la Loi 25 l'interdirait, mais
parce qu'il n'y a pas de communication hors Québec dans le chemin d'envoi.

**Ce choix est risqué et il est daté.** La segmentation SQL de Listmonk, son traitement des
rejets et ses automatisations n'ont pas pu être vérifiés (`U-74`) : la décision repose sur
un logiciel dont trois fonctions critiques sont non documentées dans notre base.

**Portes de sortie, arrêtées d'avance.** Une preuve de concept de **15 jours ouvrables**,
en phase 1, avant la première édition. Trois critères de sortie, tous éliminatoires :
(a) les cinq segments S1 à S5 du livrable 2 s'expriment en requêtes SQL et se recalculent
en moins de 60 s sur 10 000 lignes ; (b) la séquence de bienvenue à trois envois (J+0,
J+2, J+5) s'exécute avec la règle de collision du mardi codée dans `manifeste.json` ;
(c) les rejets définitifs de SES reviennent dans Listmonk et retirent l'adresse en moins
de 15 minutes. Un seul échec fait basculer sur le repli, dans cet ordre : **1er Resend ou
Mailgun comme agent de transport derrière une application d'envoi écrite par Actio** — la
liste et la preuve restent chez Actio, seule la sortie SMTP change ; **2e Beehiiv**, qui
impose alors une évaluation des facteurs relatifs à la vie privée documentée et un
avenant contractuel sur la sous-traitance, et fait passer la liste sous contrôle d'un
tiers. **Ghost natif n'est jamais un repli** : il ferait dépendre l'envoi de Mailgun *et*
le CMS de Ghost, soit deux verrous pour un seul problème. Le coût de bascule est borné
par construction : le registre de consentement est déjà maître chez Actio ; migrer, c'est
réécrire un connecteur d'envoi, estimé **3 jours-personne**.

#### Authentification et préparation du domaine

Domaine d'envoi : **`dispatch.actio.ca`**, sous-domaine dédié déjà inscrit dans
`newsletter/manifeste.json`. Il n'est pas facultatif : il isole la réputation de l'envoi de
masse de celle du courrier de la rédaction (`redaction@actio.ca`, adresse de réponse) et
du domaine racine `actio.ca`.

| Enregistrement | Valeur cible | Emplacement | Contrôle |
|---|---|---|---|
| SPF | `v=spf1 include:amazonses.com -all` | `dispatch.actio.ca` | terminaison en `-all` dès le premier jour ; jamais `~all` |
| DKIM | trois CNAME de rotation de clés, signature 2048 bits, en-tête `d=dispatch.actio.ca` | `dispatch.actio.ca` | alignement strict avec l'adresse `De :` |
| DMARC | voir calendrier ci-dessous | `_dmarc.dispatch.actio.ca` | rapports agrégés `rua` reçus quotidiennement |
| MX de retour | domaine d'enveloppe distinct pour les rejets | `bounce.dispatch.actio.ca` | alignement DMARC en mode relâché sur SPF |
| BIMI | après `p=quarantine` au minimum ; exige un logo SVG P/S et, chez plusieurs opérateurs, un certificat de marque vérifiée dont le coût et l'obligation ne sont pas vérifiés **[À VÉRIFIER]** | `default._bimi.dispatch.actio.ca` | reporté à la phase 2 |

**Calendrier de montée DMARC**, en jours ouvrables à compter de la délégation du
sous-domaine (J0) :

| Jour | Politique | Condition de passage à l'étape suivante |
|---|---|---|
| J0 → J20 | `p=none; rua=...; pct=100` | 100 % des messages alignés SPF **et** DKIM sur 5 rapports consécutifs |
| J21 → J35 | `p=quarantine; pct=25` | aucun rejet imputable à l'alignement |
| J36 → J50 | `p=quarantine; pct=100` | idem |
| J51 → J70 | `p=reject; pct=50` | plaintes < 0,08 % (seuil du livrable 2) |
| J71 | `p=reject; pct=100` — **politique cible** | maintenue ; toute régression revient à `p=quarantine` |

**Montée en charge de l'expédition.** La liste est petite avant le mois 4 (cible : 2 000
abonnés nets), ce qui rend la montée naturellement douce ; elle est néanmoins encadrée.
Trois envois de vérification à moins de 50 adresses internes réparties sur au moins quatre
opérateurs de messagerie, puis : **édition 1** ≤ 500 destinataires · **édition 2**
≤ 1 000 · **édition 3** ≤ 2 000 · **éditions 4 à 8** doublement hebdomadaire plafonné à
10 000 · au-delà, plus de plafond. Les deux vagues d'envoi de 6 h 30 (`America/Toronto`
puis `America/Vancouver`) sont conservées ; l'écart de trois heures entre elles constitue
un fractionnement utile à la réputation. **Règle d'arrêt :** toute édition dont les rejets
définitifs dépassent 1,2 % ou les plaintes 0,08 % suspend la montée et gèle le volume au
palier précédent jusqu'à explication écrite.

---

### 2.3 Veille automatisée et ingestion

**Règle première, non négociable : la veille automatisée signale, elle ne publie jamais.**
Aucun texte produit par le pipeline n'atteint le site ou l'infolettre. Le pipeline produit
exclusivement des **signaux** — « telle page a changé, à telle heure, voici le condensé du
changement » — traités par l'analyste réglementaire. Cette règle est technique autant que
déontologique : la licence permettant la republication des contenus des régulateurs n'est
pas vérifiée (`U-76`), et un système qui ne publie pas ne peut pas republier par accident.

#### Sources et nature du flux

État arrêté au 4 septembre 2026. **Un seul fil RSS est confirmé** : l'index des flux de la
*Gazette du Canada*. Pour tout le reste, la nature du flux est indiquée telle que la base la
donne, et l'existence d'un fil RSS chez l'ACVM, l'AMF, la CVMO, l'OCRI, le CANAFE, l'ARC,
le BSIF et la Banque du Canada **n'est pas établie** (`U-66`) : aucune couverture
automatisée ne doit être promise avant test réel de chaque flux.

| Source | URL | Nature | Fréquence de vérification | Niveau d'alerte |
|---|---|---|---|---|
| *Gazette du Canada* — index des flux | `gazette.gc.ca/rss/sc-rb-fra.html` | **RSS confirmé** | 30 min | N2 |
| *Gazette du Canada*, Partie I | `gazette.gc.ca/rp-pr/p1/` | Page ; mise en ligne le vendredi 14 h HE | vendredi, toutes les 15 min de 13 h 45 à 16 h | N1 |
| *Gazette du Canada*, Partie II | `gazette.gc.ca/rp-pr/p2/` | Page ; mercredi une semaine sur deux, 9 h HE ; structure d'URL déduite `[NV]` | mercredi, toutes les 15 min de 8 h 45 à 11 h | N1 |
| ACVM — plateformes autorisées | `autorites-valeurs-mobilieres.ca/…/plateformes-de-cryptoactifs-autorisees-a-faire-affaire-avec-les-canadiens/` | Page (liste), mise à jour continue | 6 h | **N0** |
| ACVM — plateformes proscrites | `autorites-valeurs-mobilieres.ca/…/plateformes-de-cryptoactifs-proscrites/` | Page (liste), mise à jour continue | 6 h | **N0** |
| ACVM — salle de presse | `autorites-valeurs-mobilieres.ca` ; `securities-administrators.ca` | Page ; rythme non établi | 3 h | N1 |
| AMF — mises en garde | `lautorite.qc.ca/en/general-public/media-centre/investor-warnings` | Page (liste), mise à jour continue | 3 h | **N0** |
| AMF — actualités | `lautorite.qc.ca/grand-public/salle-de-presse/actualites/` — URL de veille à confirmer | Page | 3 h | N1 |
| OCRI — publications | `ocri.ca/salle-de-presse/publications/` ; `ciro.ca/newsroom` | Page | 6 h | N1 |
| CVMO — nouvelles | `osc.ca/en/news-events/news` | Page | 6 h | N1 |
| CVMO — mises en garde aux investisseurs | `osc.ca/en/investors/investor-warnings-and-alerts` | Page (liste) | 6 h | **N0** |
| Tribunal des marchés financiers (Ontario) | `capitalmarketstribunal.ca` | Page | 12 h | N1 |
| CANAFE — pénalités administratives pécuniaires | `fintrac-canafe.canada.ca/pen/amps/` ; `/pen/3-fra` | Page (liste) | 12 h | N1 |
| CANAFE — directives | `fintrac-canafe.canada.ca/guidance-directives/guidance-directives-eng` | Page (index) | 24 h | N2 |
| Revenu Québec — registre des ESM | `revenuquebec.ca/fr/entreprises/mesures-particulieres/entreprises-de-services-monetaires-esm/registre/` | Page (registre) | 24 h | N1 |
| ARC — guide sur les cryptoactifs | `canada.ca/fr/agence-revenu/…/guide-cryptomonnaie.html` | Page | 24 h | N2 |
| Ministère des Finances — avant-projets de loi | `fin.canada.ca/drleg-apl/` | Page (index) | 12 h | N1 |
| LEGISinfo | `parl.ca` | Page ; au fil des étapes | 6 h | N1 |
| Banque du Canada — registre des FSP | `bankofcanada.ca/regulatory-oversight/retail-payments/psp-registry/` | Page (registre) | 24 h | N2 |
| BSIF — bibliothèque de lignes directrices | `osfi-bsif.gc.ca/en/guidance/guidance-library` | Page (index) | 24 h | N2 |
| CRTC — application de la LCAP | `crtc.gc.ca/fra/internet/anti/reg.htm` | Page | 7 j | N3 |
| Cabinets et presse spécialisée | sites respectifs | Page | 24 h | N3 — **signal seulement, jamais source de droit** |

#### Pipeline

Cinq étapes, une par tâche, aucune ne publiant.

1. **Collecte.** `n8n` auto-hébergé, sous Sustainable Use License — auto-hébergement
   autorisé, millésime non vérifié `[NV]`. Nœud `n8n-nodes-base.rssFeedRead` partout où un
   fil RSS est **confirmé par test** ; ailleurs, récupération de page programmée par
   Playwright (Apache 2.0 `[NV]`), sans interface, un contexte par hôte. Feedly et RSS.app
   sont écartés : conditions non vérifiées (`U-74`) et, surtout, ils placeraient la liste de
   veille d'Actio — donc une partie de sa ligne éditoriale — chez un tiers.
2. **Normalisation.** Extraction du contenu principal ; suppression des scripts, de la
   navigation, des horodatages d'affichage et des identifiants de session ; réduction des
   espaces ; texte brut UTF-8. Sans cette étape, un compteur de visites suffit à déclarer un
   changement.
3. **Détection de changement.** Empreinte **SHA-256** du texte normalisé, comparée à la
   précédente. Sur les pages-listes (plateformes autorisées, plateformes proscrites, mises
   en garde, registres), l'empreinte est calculée **par ligne** : le signal utile n'est pas
   « la page a changé », c'est « cette ligne est apparue » ou « cette ligne a disparu ».
4. **Stockage.** PostgreSQL en `ca-central-1`, table `veille_capture` : `source`, `url`,
   `horodatage_utc`, `code_http`, `empreinte`, `texte_normalise`, `differentiel`,
   `entetes_reponse`. Conservation **24 mois**, mais le HTML brut **30 jours** seulement :
   la licence de republication n'étant pas vérifiée (`U-76`), un entrepôt de pages de
   régulateurs est un risque sans contrepartie.
5. **Signal.** Un enregistrement `signal` par changement, adressé à la rédaction et inscrit
   dans une file : URL, heure, différentiel, niveau. **Jamais de texte rédigé.**

| Niveau | Déclencheur | Destinataire | Délai de prise en charge |
|---|---|---|---|
| **N0** | Ligne ajoutée ou retirée d'une liste d'inscription, de proscription ou de mise en garde | Analyste réglementaire **et** rédacteur en chef | 2 h ouvrables ; hors heures, 12 h |
| **N1** | Nouvelle publication d'une autorité, nouvelle étape parlementaire, nouvelle pénalité | Analyste réglementaire | 1 jour ouvrable |
| **N2** | Modification d'une page de directives ou d'un guide existant | Analyste réglementaire | 3 jours ouvrables |
| **N3** | Signal secondaire (cabinet, presse) | File hebdomadaire | Revue du vendredi |

**Un signal N0 peut modifier le registre des plateformes sans intervention humaine** — parce
que la valeur y est recopiée d'une liste officielle avec renvoi à la fiche d'origine et
horodatage, et non interprétée. **Aucun autre niveau ne peut modifier quoi que ce soit sur
le site.**

#### Contraintes juridiques de la collecte

Cette partie est celle où le pipeline peut mettre Actio en défaut. Elle est écrite en
conséquence.

| Question | État vérifié | Règle adoptée |
|---|---|---|
| Licence du gouvernement ouvert – Canada | Version, date, clauses d'attribution et d'exclusion **non consultées** (`U-76`) | Ne rien republier au motif que c'est public. Aucune citation de la licence avant lecture. La collecte se limite à ce qui est nécessaire pour **détecter** un changement |
| Conditions d'utilisation de l'ACVM, de l'AMF, de la CVMO et de l'OCRI | **Non consultées** (`U-76`) — la licéité du moissonnage de ces sites **n'est pas établie** | Lecture obligatoire des conditions de chaque hôte **avant** sa mise en production dans n8n. Tant qu'elles ne sont pas lues, la source reste en surveillance manuelle |
| `robots.txt` | Non consultés (`U-76`) | Récupération et journalisation du `robots.txt` à chaque exécution ; toute directive `Disallow` couvrant le chemin visé **arrête** la tâche et produit un signal d'exploitation, pas un contournement |
| Rythme de requêtes | Aucune limite publiée n'a été vérifiée | Plafond auto-imposé : **1 requête toutes les 5 secondes par hôte, une seule connexion simultanée, jamais plus de 240 requêtes par heure par hôte**. Respect de `Retry-After` ; interruption de 60 minutes après deux réponses 429 ou 503 |
| Identification | — | En-tête `User-Agent` explicite : `ActioVeille/1.0 (+https://actio.ca/veille; veille@actio.ca)`. Aucune rotation d'adresse IP, aucun contournement de mesure technique |
| Attribution | Obligation d'attribution non vérifiée dans son libellé (`U-76`) | Attribution systématique par défaut : nom de l'autorité, titre du document, URL, **date de consultation**. Le champ `date_consultation` de `source_primaire` est obligatoire au schéma |
| Étendue de la reprise | — | Jamais le texte intégral. Un signal contient au plus **300 caractères** de contexte autour du changement ; le lecteur est renvoyé à la page officielle |

---

### 2.4 Hébergement et souveraineté des données

#### Régions canadiennes réellement disponibles

| Fournisseur | Identifiant de région | Nom exact tel que documenté | Zones de disponibilité | État de vérification |
|---|---|---|---|---|
| AWS | `ca-central-1` | « Canada (Central) » | non relevé | Vérifié (données du SDK) ; la ville n'est pas nommée par la source **[À VÉRIFIER]** |
| AWS | `ca-west-1` | « Canada West (Calgary) » | non relevé | Vérifié |
| Google Cloud | `northamerica-northeast1` | Montréal | 3 zones, résidant encore dans un ou deux centres physiques, l'extension étant en cours | Vérifié |
| Google Cloud | `northamerica-northeast2` | Toronto | 3 zones, même réserve | Vérifié |
| Azure | `canadacentral` | — | non vérifiées | Région confirmée ; attribution de ville issue de tableaux Front Door et ExpressRoute, non d'une page officielle **[PARTIELLEMENT VÉRIFIÉ]** |
| Azure | `canadaeast` | — | non vérifiées | Idem |
| OVHcloud | Beauharnois | — | — | **[NON VÉRIFIÉ]** — services et engagements de résidence non consultés ; ne pas retenir sans vérification |

#### Ce que « souveraineté des données » veut dire juridiquement pour Actio

Trois énoncés, et un quatrième qui est le plus utile.

1. **Loi 25.** Une évaluation des facteurs relatifs à la vie privée est obligatoire **avant
   toute communication de renseignements personnels hors Québec**. C'est une obligation de
   procédure et de documentation : elle ne prohibe pas le transfert, elle le conditionne à
   une évaluation préalable, écrite, et à la démonstration d'une protection adéquate. Le
   déclencheur est la **communication**, pas la localisation du serveur : un fournisseur
   canadien dont le personnel de soutien accède aux données depuis l'étranger déclenche
   l'obligation.
2. **LPRPDE.** L'organisation demeure **responsable** des renseignements personnels
   transférés à un tiers pour traitement ; le transfert n'est pas une cession de
   responsabilité. Il s'exerce par contrat et par vérification, pas par choix de région.
3. **Articulation des deux régimes** pour une entreprise québécoise : elle **doit être
   vérifiée** (`U-56`) ; le statut du décret déclarant la loi québécoise « essentiellement
   similaire » après la Loi 25 n'est pas établi. Rien n'est affirmé ici sur laquelle des
   deux lois prime.
4. **Ce que cela n'empêche pas.** Ni l'usage d'un fournisseur américain, ni la sortie de
   données du Canada. Le droit impose l'**évaluation préalable**, la **documentation**, la
   **responsabilité contractuelle** et l'**information de la personne concernée** : la
   souveraineté des données n'est pas un lieu, c'est un dossier. Actio choisit néanmoins la
   résidence canadienne pour tout composant portant des renseignements personnels — non
   qu'elle y soit tenue, mais parce que le dossier à constituer y est plus court.

#### Le réseau de diffusion déplace des données — et on le traite

Fait vérifié : chez Cloudflare, **Regional Services couvre le Canada** — l'éditeur indique
n'utiliser que des centres de données physiquement situés au Canada pour déchiffrer et
traiter le trafic HTTPS — **mais le Customer Metadata Boundary ne connaît que les
États-Unis et l'Union européenne**. La documentation ajoute que les sous-requêtes des
Workers échappent à Regional Services et que l'activation du Customer Metadata Boundary
vide une partie de l'analytique. **Conséquence directe : la donnée applicative peut rester
au Canada pendant que les métadonnées et les journaux en sortent.** Il est donc interdit,
dans toute communication d'Actio, d'écrire « hébergé au Canada » sans nommer la couche.

Traitement adopté, en quatre règles. (i) Le réseau de diffusion ne sert que du contenu
**public** : pages statiques, images, polices, feuilles de style. (ii) Aucun cheminement
authentifié ni aucun formulaire ne transite par un Worker ; l'inscription à l'infolettre,
les préférences et le désabonnement pointent vers l'origine en `ca-central-1`. (iii)
Regional Services est activé sur le Canada, et **le fait que les métadonnées en sortent est
consigné dans l'évaluation des facteurs relatifs à la vie privée**, pas dissimulé. (iv)
Aucun renseignement personnel n'est jamais placé dans une URL, un paramètre de requête ou
un en-tête personnalisé : ce qui n'entre pas dans un journal de réseau de diffusion n'a pas
besoin d'être rapatrié.

#### Architecture arrêtée

| Composant | Solution | Région | Données portées | Motif |
|---|---|---|---|---|
| Calcul applicatif (Next.js + Payload) | conteneurs sur AWS, 2 instances | **`ca-central-1`** | session d'administration, brouillons | Résidence ; proximité de la base |
| Base de données | PostgreSQL géré, chiffré au repos | **`ca-central-1`** | **registre de consentement LCAP**, contenus, registre des plateformes | Point unique où vit la preuve juridique |
| Objets (images, exports, captures de veille) | stockage objet chiffré, accès par URL signée à 300 s | **`ca-central-1`** | pièces jointes, portraits, différentiels | Aucune donnée personnelle |
| Sauvegardes | copies chiffrées, clés distinctes de celles de production | **`ca-west-1` (« Canada West (Calgary) »)** | tout | Séparation géographique **sans sortie du Canada** — c'est précisément ce que `ca-west-1` rend possible |
| Réseau de diffusion | Cloudflare, Regional Services sur le Canada | traitement au Canada ; **métadonnées hors du Canada** | contenu public seulement | Fait documenté et assumé, jamais présenté comme « hébergé au Canada » |
| Envoi de courriel | Amazon SES | **`ca-central-1`** | adresse, jetons de fusion | Voir §2.2 |
| Journaux applicatifs | agrégateur auto-hébergé | **`ca-central-1`** | IP tronquée à /24, sans identifiant de lecteur | Rétention **30 jours** |
| Journaux du réseau de diffusion | Cloudflare | hors frontière de métadonnées canadienne | métadonnées de requête | Aucun renseignement personnel en URL ; c'est la seule parade |
| Secrets | gestionnaire de secrets managé | **`ca-central-1`** | clés d'API, identifiants | Rotation 90 jours |
| Veille (n8n, Playwright) | conteneurs isolés, sortie réseau restreinte à une liste d'hôtes | **`ca-central-1`** | captures de veille | Isolé du calcul applicatif : un moissonneur ne partage pas le réseau d'une base contenant des consentements |

**Ce qui n'est pas décidé** : le recours à OVHcloud Beauharnois, faute de vérification
(`U-75`), et le choix entre PostgreSQL managé et auto-géré, qui dépend de la question de
l'accès du personnel de soutien depuis l'étranger — question qui relève de l'évaluation des
facteurs relatifs à la vie privée, pas de la technique.

---

### 2.5 Qualité, mesure et exploitation

#### Analytique respectueuse de la vie privée

| Option | Témoin | Identifiant persistant | Auto-hébergeable au Canada | Bandeau de consentement requis | Verdict |
|---|---|---|---|---|---|
| Google Analytics 4 | oui | oui | non | oui | **Rejeté** — mesure incompatible avec un média qui reproche aux plateformes leur traitement des données |
| Plausible, édition communautaire | non | non | oui, licence **[À VÉRIFIER]** | non, si aucun identifiant n'est stocké | **Retenu** |
| Matomo auto-hébergé | configurable | configurable | oui | selon configuration | Repli |
| Umami | non | non | oui | non | Repli secondaire |
| Journaux d'origine seuls | non | non | oui | non | Conservé **en complément** : mesure de dernier ressort, insensible aux bloqueurs |

**Décision : mesure auto-hébergée sans témoin ni identifiant persistant, dans
`ca-central-1` — Plausible en édition communautaire, complétée par l'agrégation des
journaux d'origine.** Motif : c'est la seule configuration qui n'exige pas de bandeau de
consentement, donc qui ne dégrade ni la mise en page ni la mesure elle-même. La licence de
l'édition communautaire n'est pas vérifiée **[À VÉRIFIER]** ; si elle interdit cet usage,
Matomo prend sa place sans changer l'architecture. **Règle générale opposable : aucune
mesure ne peut exiger un bandeau de consentement.** Une mesure qui coûte un bandeau coûte
plus qu'elle ne rapporte.

#### Budget de performance

Chiffré, mesuré au 75e centile, sur mobile, réseau contraint, sur `fr/article.html`.

| Indicateur | Budget | Point de rupture (échec de la chaîne d'intégration) |
|---|---|---|
| LCP | ≤ 1 800 ms | > 2 500 ms |
| INP | ≤ 200 ms | > 350 ms |
| CLS | ≤ 0,05 | > 0,10 |
| TTFB (page statique servie par le réseau de diffusion) | ≤ 200 ms | > 600 ms |
| HTML de l'article, compressé | ≤ 20 ko | > 30 ko |
| CSS total, compressé | ≤ 22 ko | > 30 ko |
| JavaScript total, compressé | ≤ 12 ko | > 20 ko |
| Polices, quatre fichiers `woff2` sous-ensemble `latin` + `latin-ext` | ≤ 200 ko | > 260 ko |
| **Poids total de la page d'article** | **≤ 400 ko** | > 550 ko |
| Requêtes | ≤ 35 | > 50 |
| Requêtes vers un tiers | **0** | ≥ 1 |

Ces budgets sont tenables : l'état actuel du prototype est `tokens.css` 14 495 o,
`actio.css` 41 613 o, `article.css` 16 992 o et `actio.js` 10 663 o **non compressés**,
pour un `fr/article.html` de 32 304 o. Le seul dépassement structurel connu est le
chargement des polices depuis Google Fonts, présent dans les quatre pages du prototype à
titre de démonstration : **il viole la ligne « 0 requête tierce » et doit disparaître à la
mise en ligne**, ce que la phase 1 impose déjà. Il n'est pas seulement un coût de
performance : il communique l'adresse IP du lecteur à un tiers.

**Points de rupture de mise en page.** Le prototype porte aujourd'hui **sept** seuils
distincts (`560`, `640`, `760`, `900`, `1024`, `1080`, `1100` px) répartis sur quatre
feuilles. **Décision : quatre seuils canoniques — 560, 760, 900 et 1100 px** ; les trois
autres sont repliés sur le voisin le plus proche. Motif : `--grille-max-etroit` vaut
`760px` et le seuil de 760 px est donc le seul qui corresponde à un jeton ; les autres sont
arrivés par accrétion. Le harnais de capture rend à `1440 × 900`, `834 × 1000` et
`390 × 844`, largeurs qui restent la référence de contrôle.

#### Accessibilité

Cible : **WCAG 2.1 AA, à titre volontaire, comme norme éditoriale et sans invoquer
d'obligation légale** — position de la base factuelle. WCAG 2.2 n'est pas mentionnée
(`U-54`). La LAPHO vise WCAG 2.0 AA au-delà de 50 employés ; Actio compte 2,4 ETP et ne
relève vraisemblablement pas de la *Loi canadienne sur l'accessibilité*, réservée aux
entités sous réglementation fédérale. On vise plus haut que l'obligation, précisément pour
n'avoir pas à discuter de son périmètre.

**Outillage déjà en place.** `tools/verifier.mjs` vérifie sur le DOM rendu, dans les deux
thèmes et sur les cinq pages, les liens, l'accessibilité, le contraste et l'intégrité
éditoriale ; il calcule les rapports par luminance relative plutôt que de les déclarer.
C'est lui qui rend opposable la règle du fichier de jetons : les jetons de marque et de
statut sont des couleurs de **texte** et ne peuvent pas servir d'aplat sous du blanc —
`--actio-bleu-palais` tombe à 2,96:1 en mode sombre, `--statut-alerte` à 2,74:1. Les seuls
aplats autorisés sous du blanc sont `--fill-primaire`, `--statut-alerte-fixe`,
`--demo-fond`, `--encre-fond` et `--degrade-1/2/3`.

**Ce qui manque et doit être ajouté au harnais**, par ordre : ordre de tabulation et
piège de focus dans `.megamenu` et le menu `.burger` ; visibilité du focus sur les six
variantes de `.btn` ; respect de `prefers-reduced-motion` sur `.sommaire__progression` et
`.cotations__piste` ; annonce `aria-live` du compteur `.filtres__compte` du registre ;
libellés des champs du formulaire `.infolettre__form`. Un moteur de règles d'accessibilité
tiers reste à choisir — sa licence n'a pas été vérifiée, il n'est donc pas nommé ici.

#### Sécurité

| En-tête | Valeur | Remarque |
|---|---|---|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'nonce-<aléa>'; style-src 'self' 'nonce-<aléa>'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'; object-src 'none'` | **Deux obstacles réels dans le prototype** : le script anti-scintillement doit rester en ligne et synchrone (un fichier externe arriverait trop tard) et exige donc un `nonce` par réponse ; `fr/registre.html` et `fr/article.html` portent des attributs `style=` en ligne, incompatibles avec `style-src 'self'` — à déplacer dans `article.css` et `registre.css` avant activation |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Après validation du sous-domaine d'envoi |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limite ce qui part vers les régulateurs cités |
| `X-Content-Type-Options` | `nosniff` | — |
| `Permissions-Policy` | `geolocation=(), camera=(), microphone=(), interest-cohort=()` | — |
| `Cross-Origin-Opener-Policy` | `same-origin` | — |

**Secrets.** Aucun secret dans le dépôt ; gestionnaire de secrets managé en
`ca-central-1` ; rotation à **90 jours** pour les clés d'API du prestataire d'envoi et du
réseau de diffusion, **immédiate** au départ d'un membre de l'équipe. Analyse de secrets à
chaque poussée, bloquante. Le dépôt ne contient aujourd'hui aucune clé : `package.json` ne
déclare que `playwright-core` en dépendance de développement, ce qui réduit à presque rien
la surface de chaîne d'approvisionnement du prototype — propriété à préserver.

#### Sauvegardes et reprise

| Composant | Fréquence | Rétention | RPO | RTO |
|---|---|---|---|---|
| PostgreSQL (contenus + **consentements**) | continue par journal + instantané quotidien | 35 jours glissants + 1 instantané mensuel sur 24 mois | **5 min** | **4 h** |
| Stockage objet | versionné, réplication vers `ca-west-1` | 90 jours | 15 min | 4 h |
| Configuration et infrastructure | dans le dépôt Git | historique complet | 0 | 2 h |
| Dépôt Git | miroir chiffré quotidien | 90 jours | 24 h | 1 h |
| Captures de veille | quotidienne | 24 mois (30 j pour le HTML brut) | 24 h | 24 h |

**Épreuve de restauration obligatoire tous les 90 jours**, chronométrée, sur un
environnement neuf, avec production d'un compte rendu daté. Une sauvegarde non restaurée
n'est pas une sauvegarde. La restauration du registre de consentement est la seule dont
l'échec soit **bloquant pour l'envoi** : sans preuve de consentement restaurable, aucune
édition ne part.

#### Intégration continue

Une seule commande fait foi : `npm run tout`, soit `structure` → `docs` → `emails` →
`verifier`, complétée par `npm run captures`. Elle est déjà au vert dans le dépôt et
constitue l'indicateur de sortie de la phase 1.

| Étape | Outil | Ce qu'elle bloque |
|---|---|---|
| 1. Structure | `tools/structure.mjs` | Incohérence entre l'arborescence documentée et le dépôt |
| 2. Documentation | `tools/docs.mjs` | Renvoi rompu entre livrables et artefacts |
| 3. Courriels | `tools/emails.mjs` | Assemblage d'un envoi auquel manque l'une des six mentions LCAP obligatoires — mécanisme d'exclusion, « Actio Média inc. », « Montréal (Québec) », « consentement exprès », « 10 jours ouvrables », « ni conseil en placement » — ou employant un jeton de fusion non déclaré, ou dépassant les bornes d'objet |
| 4. Vérification | `tools/verifier.mjs` | Lien rompu, défaut d'accessibilité, contraste sous le seuil dans l'un des deux thèmes, ressource tierce non déclarée |
| 5. Capture | `tools/captures.mjs` | **Débordement horizontal** du document et **dépassement de la mesure de lecture** |

**Sur `tools/captures.mjs`.** C'est le harnais de capture visuelle du dépôt. Il rend les
cinq écrans dans les deux thèmes et à trois largeurs — 30 rendus par exécution — et
vérifie deux invariants tenus pour non négociables : (1) `document.documentElement.scrollWidth`
ne dépasse jamais `clientWidth` de plus d'un pixel, et en cas d'échec le harnais nomme
jusqu'à huit éléments coupables avec leur bord droit et leur `position` calculée ;
(2) la colonne `.prose` ne dépasse pas **800 px**. Le second invariant est le garde-fou de
la mesure de lecture : `--grille-max-etroit` vise `760px`, le harnais tolère 40 px de jeu
pour absorber les remplissages, et refuse au-delà. Il sort en code 1 : **toute modification
de gabarit ou de jeton passe par lui avant fusion.** Il est appelé au moins autant pour
son échec que pour ses images.

Trois ajouts au harnais, en phase 1 : exécution sur `en/index.html` en `en-CA` avec
`locale: 'en-CA'` ; comparaison de la hauteur de document entre deux exécutions, tout écart
supérieur à 5 % étant signalé ; et une quatrième largeur à **320 px**, la seule où
`.registre__defilement` et `.cotations__piste` risquent réellement de déborder.

---

### Ce qui reste à trancher

1. **La preuve de concept Listmonk (§2.2) est la décision la plus exposée du livrable.**
   Trois fonctions critiques — segmentation SQL, séquences, traitement des rejets — ne sont
   documentées nulle part dans la base (`U-74`). Quinze jours ouvrables avant la première
   édition, trois critères éliminatoires, un repli écrit. Si la preuve de concept est
   repoussée, elle doit être remplacée par le repli, jamais par un pari.
2. **PostgreSQL managé ou auto-géré.** La question n'est pas technique : elle est de savoir
   si le personnel de soutien du fournisseur accède aux données depuis l'étranger, ce qui
   déclencherait l'obligation d'évaluation préalable de la Loi 25 sur la base même qui
   porte les consentements. À poser au fournisseur par écrit avant contrat.
3. **Le certificat de marque vérifiée exigé par BIMI** : obligation et coût non vérifiés
   **[À VÉRIFIER]**. Décider en phase 2 si le gain de reconnaissance visuelle en boîte de
   réception justifie la dépense pour une liste de 7 500 adresses.
4. **La licence de l'édition communautaire de Plausible** **[À VÉRIFIER]**. Si elle
   interdit l'usage prévu, basculer sur Matomo : l'architecture ne change pas, le choix du
   logiciel oui.
5. **Les conditions d'utilisation et le `robots.txt` de l'ACVM, de l'AMF, de la CVMO et de
   l'OCRI** (`U-76`). Tant qu'ils ne sont pas lus, quatre sources du tableau du §2.3
   restent en surveillance manuelle et le pipeline tourne amputé de ses sources N0 les plus
   utiles. C'est la dépendance la plus coûteuse de cette section : elle se lève par une
   demi-journée de lecture, pas par du développement.
6. **La couverture par fil RSS**, non établie pour huit autorités (`U-66`). Le tableau du
   §2.3 range par défaut chaque source en récupération de page programmée ; chaque fil
   effectivement trouvé et testé retire une tâche Playwright, réduit le rythme de requêtes
   et éteint un risque juridique. Test à mener source par source, résultat consigné avec sa
   date.
7. **Le seuil de bascule vers un réseau de diffusion sans sortie de métadonnées.** Aucune
   frontière de métadonnées canadienne n'existe chez Cloudflare. Faut-il, au-delà d'un
   certain volume, servir depuis l'origine en `ca-central-1` sans réseau de diffusion, et
   accepter la latence hors du Québec et de l'Ontario ? La question devient sérieuse à la
   phase 3, quand Actio Pro portera des contenus payants et donc des cheminements
   authentifiés.
