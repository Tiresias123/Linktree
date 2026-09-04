## 1. Stratégie et charte éditoriale d'*Actio Dispatch*

> **Avertissement opposable à toute la section.** La base factuelle consolidée (`research/00-base-factuelle-consolidee.md`, arrêtée au 4 septembre 2026) repose sur des résumés de moteur de recherche, la sortie réseau ayant bloqué les sites du CRTC, des ACVM, de l'AMF, de la CVMO, de l'OCRI, du CANAFE, de l'ARC et de la *Gazette du Canada*. **Aucun texte primaire n'a été lu.** Les lignes d'objet ci-dessous sont des **spécifications de forme** : leur fond est à rouvrir à la source et à dater avant emploi. [À VÉRIFIER] signale ce sur quoi la base est muette.

### 1.1 Positionnement et promesse

*Actio Dispatch* est **la traçabilité hebdomadaire de l'état du droit canadien des cryptoactifs**, sous une forme qu'un directeur de la conformité transfère à son conseil sans la réécrire. La promesse est déjà codée et n'est pas négociable : « Une édition par semaine : le décryptage d'un acte réglementaire, le radar des juridictions (Ottawa, Québec, Ontario, international) avec son niveau d'impact, et un point de fiscalité appliqué à un cas réel. Lu en huit minutes. Sourcé, daté, sans conseil d'achat. » (`.infolettre__promesse`).

| Ce que l'infolettre n'est pas | Motif du refus |
|---|---|
| Un résumé des articles de la semaine | Le site publie au fil de l'eau ; l'infolettre publie **une hiérarchie**. |
| Une revue de presse | Cabinets et presse spécialisée sont des **signaux**, jamais une source de droit (base §7). |
| Un bulletin de marché | Le bandeau de cours porte sa limite : « Actio ne recommande aucun actif ». |
| Un canal d'acquisition à volume | Sous la LCAP, le **fardeau de la preuve du consentement pèse sur l'expéditeur**. |
| Un avis juridique | `tools/emails.mjs` inscrit `« ni conseil en placement »` dans `MENTIONS_OBLIGATOIRES` : son absence **bloque la compilation**. |

**Pourquoi ce ne peut pas être un résumé du site.** Trois raisons, dont deux juridiques. (i) **Les régimes diffèrent** : une page est une publication, un courriel est un **message électronique commercial** dès qu'il porte un appel à l'abonnement, un commanditaire ou un événement — « traiter tout envoi comme un MEC est la seule position défendable » (fiche 06). Un résumé automatisé produirait des MEC que personne n'aurait relus. (ii) **Le rythme du droit n'est pas celui de la publication** : un règlement pris peut dormir six jours avant qu'un lecteur ne le voie. (iii) **Le lecteur cherche l'arbitrage, pas l'information** : la loi fédérale sur les cryptomonnaies stables est **édictée et non en vigueur**, et la base qualifie de « piège central du dossier fédéral » le fait d'écrire que les émetteurs « doivent désormais » quoi que ce soit (§3.4). Un résumé de titres reproduit le piège ; une infolettre le désamorce.

### 1.2 Fréquence et horaire d'envoi

> ⚠ **CONTRADICTION NON TRANCHÉE — à lire avant ce paragraphe.** La cadence posée ici est hebdomadaire, soit **52 éditions par an**, et le courriel d'accueil C1 la promet en ces termes à l'abonné. Mais le § 2.2 du livrable 3 et l'hypothèse H6 du § 4.2 — coût direct de production, inventaire de parrainage, seuil de rentabilité — comptent **44 éditions par an**. Huit semaines d'écart. Trois issues, et une seule à retenir : (a) tenir 52 et corriger le modèle économique ; (b) retenir 44, annoncer les relâches sur la page d'inscription et **réécrire la promesse de C1**, qui devient sinon trompeuse ; (c) tenir 52 avec une édition allégée pendant les relâches. Le § 2.2.7 du livrable 2 relève par ailleurs que dix-huit contrôles bloquants par envoi, dont cinq à la charge du juriste-réviseur, rendent 52 exigeant sans ce poste pourvu. **Aucun outil ne peut trancher cela : c'est un engagement, pas une valeur.**

**Décision : une édition par semaine, le mardi, bouclée à 6 h 30 HE** — ce qu'affichent `.infolettre__preuve` (« Mardi · 6 h 30 » / « Heure de l'Est ») et la barre de service du gabarit (« ÉDITION Nº 001 · MARDI 8 SEPTEMBRE 2026 »).

| Publication | Rythme documenté (base §7) | Effet sur le choix du mardi |
|---|---|---|
| *Gazette du Canada*, Partie I | Hebdomadaire — en ligne **vendredi 14 h HE**, date officielle le samedi | Un projet paru le vendredi après-midi est traité 4 jours plus tard, week-end compris pour lire le texte. |
| *Gazette du Canada*, Partie II | **Mercredi, toutes les deux semaines, 9 h HE** | Latence maximale de 6 jours, connue et annonçable. |
| ACVM, AMF, CVMO, OCRI | `[NV]` — aucun rythme établi | Le mardi capte le lundi, jour fréquent des communiqués conjoints. |
| CANAFE — avis de PAP | Au fil des avis | Hebdomadaire, sauf seuil d'*Alerte Actio*. |
| Listes ACVM des plateformes autorisées et proscrites | Mise à jour continue | Ne justifie **jamais** un envoi : objet de registre (`prototype/fr/registre.html`). |

**Pourquoi pas le lundi** : jour de tri, saturé par les bulletins de cabinets (McMillan, Blakes, Stikeman Elliott, Osler, Fasken, BLG — base §7). **Pourquoi pas le jeudi** : la Partie II du mercredi serait couverte en 24 heures, sans relecture juridique.

**Fuseaux.** L'édition est bouclée et la version web publiée à 6 h 30 HE ; la diffusion se fait en **deux vagues**, calées sur 6 h 30 locales, sans modifier le jour ni la promesse affichée.

| Vague | Heure HE | Provinces | Heure locale |
|---|---|---|---|
| V1 | 6 h 30 | Québec, Ontario, Atlantique | 6 h 30 HE / 7 h 30 HA / 8 h HNT |
| V2 | 9 h 30 | C.-B., Alberta, Saskatchewan, Manitoba | 6 h 30 HP / 7 h 30 HR |

Un envoi unique à 6 h 30 HE atteindrait Vancouver à 3 h 30 : enseveli sous le courrier de nuit avant le premier regard. Rattachement par province déclarée, sinon par le fuseau du dernier clic, sinon V1. La V2 est recalculée deux fois l'an, la Saskatchewan ne changeant pas d'heure [À VÉRIFIER].

**Éditions hors cycle — « Alerte Actio ».** *Seuil* : un envoi exceptionnel n'est justifié que si **un** des quatre critères est rempli **et** qu'attendre le mardi nuirait au lecteur.

| Seuil | Exemple type tiré de la base |
|---|---|
| A. Entrée en vigueur ou échéance à moins de 7 jours | Décret portant un volet du projet de loi C-12, « échelonné par décret » |
| B. Ajout à la liste des plateformes proscrites des ACVM, ou ordonnance de blocage | Dossier XT.com et CoinEx (AMF) |
| C. Sanction d'un ordre de grandeur inédit | PAP de 176 960 190 $ annoncée par le CANAFE le 22 octobre 2025 — nombre de manquements non chiffré (`C-10`) |
| D. Décision modifiant une qualification déjà affirmée par le *Dispatch* | *Amicarelli c. Le Roi*, 2025 CCI 185 |

*Autorisation* : **double signature** — rédacteur ou rédactrice en chef **et** juriste-réviseure, aucun des deux seul. Consignée dans `newsletter/manifeste.json` (champ `autorisation`, à ajouter), avec horodatage et identifiant de la source primaire **lue**. *Fréquence maximale* : **deux alertes par période glissante de 30 jours**, jamais deux la même semaine civile ; la troisième est refusée et rebascule en tête du « Grand angle » du mardi. Au-delà, l'alerte devient du bruit — et le désabonnement d'un juriste en cabinet est définitif. Le format existe : le commutateur `bandeau_cours: false` de `tools/emails.mjs` retire le bloc de cours et donne une alerte à trois blocs.

### 1.3 Psychologie de la ligne d'objet

1. **Budget : 28 à 52 caractères, plafond dur à 60.** L'objet est indépendant du `{{TITRE}}` du châssis, qui sert l'archive : édition nº 001, titre d'archive de 70 caractères, objet expédié de 46. **À exécuter :** ajouter à `newsletter/manifeste.json` un champ `objet` distinct de `titre`, et faire échouer `tools/emails.mjs` au-delà de 60 caractères.
2. **Troncature.** [À VÉRIFIER — la base ne couvre pas le rendu des clients de messagerie.] Ordres de grandeur de travail : Mail d'iOS en portrait, coupure vers 35–40 caractères ; Gmail sur mobile, 35–45 ; Outlook pour Windows en volet de lecture, 60–75. **Protocole** : rendre `newsletter/dist/*.html` sur six clients réels avant le premier envoi et consigner les longueurs dans `docs/annexes/`. D'ici là : **l'information décisive tient dans les 32 premiers caractères.**
3. **Émojis : interdits, sans exception.** L'*Avis conjoint 21-330 sur la publicité, le marketing et les médias sociaux* — cité sans millésime (`C-03`) — encadre les communications des plateformes inscrites : Actio n'y est pas assujettie mais l'applique **volontairement**, parce que ses lecteurs le sont. S'y ajoute le rendu, variable sous Outlook.
4. **Le pré-en-tête est une seconde accroche, jamais une redite.** Il porte le **mécanisme** quand l'objet porte la **conséquence**. Cible **90 à 130 caractères** — borne harmonisée avec le point de contrôle 16 du § 2.2.5 du livrable 2, qui est la borne opérante en production ; l'édition nº 001 est à 115, le pré-en-tête de C2 à 129. **Contrôlée** par `tools/emails.mjs`, au même titre que les bornes de l'objet. Implémenté par `{{PREENTETE}}` dans `chassis.html` : `<div>` masqué suivi d'un bourrage de caractères invisibles qui empêche l'aspiration du corps. **Interdits :** « Voir dans le navigateur », « Ouvrez pour découvrir », toute reprise de l'objet.
5. **Sensationnalisme : proscrit.** Règle de risque, non de goût : Actio répond des **indications fausses ou trompeuses** devant le Bureau de la concurrence. Un objet qui affirme plus que le corps est trompeur même si le corps est exact.
6. **Chiffres et autorités.** Un chiffre dans l'objet doit être corroboré **et** ouvert à la source. Sigles admis sans développement : **ACVM, AMF, CVMO, OCRI, CANAFE, ARC, TMF, BSIF**. « OCRCVM » n'est jamais employé au présent. Un nom de plateforme ne provient que des deux listes officielles des ACVM (`U-07`).

**Douze lignes d'objet.** *Forme validée ; le fond de chacune est à rouvrir à la source avant emploi.*

**Famille A — la conséquence.**

| # | Objet (car.) | Pré-en-tête | Pourquoi elle fonctionne |
|---|---|---|---|
| A1 | **Le contrat d'investissement a trouvé sa limite** (46) | Le TMF distingue la gestion des fonds d'autrui de la vente d'information — et rétrécit le contrat d'investissement. | Une frontière juridique déplacée est la seule nouvelle qui vaut un courriel. |
| A2 | **Édicté n'est pas en vigueur** (27) | La loi fédérale sur les cryptomonnaies stables est adoptée ; décrets et règlements ne sont pas pris. | Vingt-sept caractères : aucune troncature, et le piège fédéral désamorcé d'emblée. |
| A3 | **Votre dépositaire devient une décision de conformité** (52) | Le cadre de garde publié par l'OCRI le 3 février 2026 classe les dépositaires par paliers et limite l'autogarde. | Une note d'orientation devient un point d'ordre du jour, sans palier ni seuil (`C-13`). |

**Famille B — la question fermée.**

| # | Objet (car.) | Pré-en-tête | Pourquoi elle fonctionne |
|---|---|---|---|
| B1 | **Votre plateforme figure-t-elle encore sur la liste ?** (52) | Les listes des plateformes autorisées et proscrites des ACVM changent en continu ; nous avons daté la nôtre. | Un doute vérifiable en un clic, qui mène au registre, pas à un article. |
| B2 | **Le jalonnement est-il imposable à la réception ?** (48) | La pratique des cabinets et des CPA retient l'inclusion au revenu de la juste valeur marchande ; l'ARC n'a rien publié de formel. | Le pré-en-tête dit exactement ce que `U-37` autorise ; l'écart entre pratique et doctrine est la nouvelle. |
| B3 | **Une perte QuadrigaCX est-elle une perte d'entreprise ?** (54) | *Amicarelli c. Le Roi*, 2025 CCI 185 : première décision de la Cour canadienne de l'impôt sur le bitcoin. | Un nom que tout le lectorat reconnaît, rattaché à une décision datée. |

**Famille C — le chiffre.** *Sans verbe ; le pré-en-tête fournit le sujet.*

| # | Objet (car.) | Pré-en-tête | Pourquoi elle fonctionne |
|---|---|---|---|
| C1 | **176 960 190 $** (13) | La pénalité administrative pécuniaire annoncée par le CANAFE le 22 octobre 2025 contre Xeltox Enterprises Ltd. (Cryptomus). | Montant corroboré, objet visible en entier partout, et sans verbe aucune exagération n'est possible. |
| C2 | **50 %, et non 66,7 %** (19) | Le taux d'inclusion des gains en capital est inchangé : la hausse a été annulée le 21 mars 2025. | Elle vaut par ce qu'elle démonte : un chiffre encore inscrit dans des feuilles de calcul. |
| C3 | **De 1 % à 5 % des fonds propres de catégorie 1** (45) | Le BSIF a relevé en octobre 2025 le plafond d'exposition des banques aux cryptoactifs du groupe 2. | Elle vise la conformité bancaire et signale aux autres qu'Actio couvre le prudentiel. |

**Famille D — le démenti.** *La plus performante d'un média juridique : elle promet d'éviter une erreur.*

| # | Objet (car.) | Pré-en-tête | Pourquoi elle fonctionne |
|---|---|---|---|
| D1 | **Non, la Loi 25 ne prévoit aucun délai de 72 heures** (50) | Le chiffre vient du RGPD. La loi québécoise impose de signaler « avec diligence », en cas de risque de préjudice sérieux. | Contamination du RGPD confirmée par deux fiches : démenti sûr, qui corrige une procédure interne. |
| D2 | **L'OCRCVM n'existe plus depuis 2023** (34) | L'OCRI est né de la fusion de l'OCRCVM et de l'ACFM ; les politiques qui nomment l'ancien organisme sont à reprendre. | Elle attaque une erreur présente dans des politiques en vigueur : une tâche réelle. |
| D3 | **Une pénalité administrative n'est pas une amende** (48) | PAP au CANAFE, SAP au CRTC et à la CAI, pénalité administrative au TMF : trois régimes, aucune amende. | Elle établit la compétence terminologique d'Actio en une ligne. |

**Cinq lignes d'objet interdites.**

| Contre-exemple | Motif |
|---|---|
| « 🚨 ALERTE : le Canada interdit la crypto » | Émoji ; affirmation fausse — l'interdiction des guichets automatiques a été **annoncée**, non mise en vigueur (`U-32`). Indication trompeuse. |
| « Les 5 plateformes à éviter absolument en 2026 » | Nomme des plateformes hors des listes officielles des ACVM (`U-07`) ; listicle prescriptif ; « absolument » amplifie sans support. |
| « Payez 0 $ d'impôt sur vos gains : la méthode légale » | Conseil fiscal, que le pied de page de chaque envoi nie fournir ; l'ARC n'a publié aucune ligne directrice formelle (`U-37`). |
| « Nouveau règlement sur les stablecoins : en vigueur lundi » | Erreur de droit — régime **édicté, non en vigueur** (`U-59`) ; titre non vérifié (`C-08`) ; « stablecoins » pour « cryptomonnaie stable ». |
| « Dernière chance avant la hausse : ce qu'il faut acheter » | Urgence fabriquée et recommandation d'achat — seule règle absolue de la charte. |

### 1.4 Segmentation

Un **champ déclaré unique et facultatif**, complété par la déduction comportementale. Aucun segment ne modifie le pied de page de conformité, identique par construction (châssis unique).

| Segment | Rattachement | Contenu | Objet | Heure | Appel à l'action | Ouverture cible à 12 mois |
|---|---|---|---|---|---|---|
| **S1 — Investisseurs informés** (B2C) | Déclaré « à titre personnel » ; défaut si rien n'est déclaré | Le « Point fiscalité » passe en deuxième ; la garde OCRI tient en deux phrases | Familles B et D | V1 / V2 | « Vérifier une plateforme dans le registre » → `registre.html` | 38 % |
| **S2 — Conformité, juristes, cabinets** (B2B) | Déclaré « conformité, juridique ou cabinet », **ou** déduit : domaine non générique + une ouverture du parcours « Conformité des plateformes et garde d'actifs » | « Grand angle » augmenté d'un encadré « ce que cela change dans vos procédures » | Familles A et C ; jamais d'interrogatif — ce segment lit l'affirmation comme un engagement | V1 / V2 | « Lire les sources primaires » → ancre `#sources-titre` | 44 % |
| **S3 — Fiscalité et CPA** | Déduit : deux clics en 90 jours sur la rubrique fiscalité | Le « Point fiscalité » remonte en tête et double | Famille C, chiffre fiscal | V1 / V2 | « Ajouter la fiche T1135 à mes dossiers » | 46 % |
| **S4 — Presse, recherche, institutions** | Déclaré uniquement | Identique | Identique | V1 | **Aucun appel commercial** — « Demander une précision à la rédaction » | 40 % |
| **S5 — Réengagement** | Déduit : aucun clic sur 8 éditions consécutives | Une édition sur deux, puis un courriel de confirmation d'intérêt | Famille D seule | V1 | « Confirmer que je veux continuer à recevoir *Actio Dispatch* » | 12 % |

**Le champ demandé à l'inscription.** Le formulaire ne collecte qu'une adresse et un consentement exprès non précoché (`input#courriel`, `input[name="consentement"]`). **Spécification :** ajouter **un seul** `select`, « Vous lisez Actio… » — *à titre personnel* · *conformité, juridique ou cabinet* · *fiscalité et comptabilité* · *presse, recherche ou institution* — plus **« je préfère ne pas répondre »**, présélectionnée.

Il reste facultatif pour trois raisons, dont deux juridiques. (i) **Loi 25, minimisation** : la fonction professionnelle n'est pas nécessaire pour envoyer une infolettre ; l'exiger, c'est collecter un renseignement personnel sans nécessité, sur un consentement qui doit être « manifeste, libre et éclairé ». (ii) **LCAP, preuve du consentement** : chaque champ obligatoire réduit le nombre d'inscriptions **prouvables**. (iii) **Périmètre de l'EFVP** : toute communication hors Québec impose une évaluation préalable et documentée, dont chaque champ élargit l'objet. **Conséquence assumée :** une majorité d'inscrits restera non déclarée [À VÉRIFIER], d'où la déduction comportementale comme mécanisme **principal** de S2 et S3.

### 1.5 Charte éditoriale de l'infolettre

| Clause | Règle |
|---|---|
| **Longueur** | **1 250 à 1 450 mots** dans le corps, hors pied de page ; plafond dur 1 600. Au-delà, on retire un bloc, on ne le raccourcit pas. |
| **Sections** | **Quatre**, dans l'ordre codé : *Le grand angle réglementaire* · *Le radar des juridictions* · *Le chiffre de la semaine* · *Le point fiscalité et jurisprudence*, plus l'encart de transparence et le pied de page. **Aucune cinquième** : elle ferait tomber la promesse des huit minutes. |
| **Temps de lecture** | `mots ÷ 180`, plus 30 s par schéma textuel, arrondi à la minute la plus proche — 180 mots/minute pour de la prose analytique française lue à l'écran [À VÉRIFIER, valeur d'usage]. À 1 350 mots avec un schéma : 7,5 + 0,5 = **8 min**, ce qu'affiche l'en-tête. Produit par la compilation, jamais saisi à la main. |
| **Sources** | Chaque affirmation juridique porte un lien vers le **texte primaire** et sa **date de consultation**. Le « 5 sources primaires » de l'en-tête engage : **plancher de 4 par édition**. Cabinets et presse cités comme signal, jamais comme source de droit. Un point non vérifié prend la formulation du registre des incertitudes, ou n'est pas écrit. |
| **Liens sortants** | **12 au maximum.** Aucun lien d'affiliation, aucun paramètre de suivi tiers ; redirection de premier niveau sur `actio.ca` pour la mesure. Aucun lien vers une plateforme non inscrite dans la province du lecteur — il vaudrait mise en avant. Un lien vers un régulateur pointe la page, **jamais un texte republié par Actio** (`U-76`). |
| **Ton** | Affirmatif sur le vérifié, prudent sur le reste. Pas de première personne du singulier, pas de superlatif, « historique » banni, une idée par phrase. Le lecteur est un pair : on ne lui explique pas ce qu'est un cryptoactif. |
| **Correction** | Toute correction paraît dans l'édition suivante, en tête du « Grand angle », datée. La politique est liée dans chaque pied de page (`{{lien_corrections}}`). |
| **Recommandation d'achat** | **Interdiction absolue.** Aucun objectif de cours, aucun « il faut », aucune « opportunité », aucune mention d'un actif hors contexte réglementaire ou fiscal. La règle vaut pour les **liens** : un lien vers une page d'achat est une recommandation. |

### 1.6 Mesure

| Indicateur | Définition | 3 mois | 6 mois | 12 mois |
|---|---|---|---|---|
| Taux de clic unique (CTU) | Abonnés distincts ayant cliqué ≥ 1 lien ÷ délivrés | 6,5 % | 8,5 % | 11 % |
| CTU du segment S2 | Idem, restreint à la conformité et aux cabinets | 8 % | 11 % | 14 % |
| Profondeur de clic | Rang moyen du lien cliqué (1 = premier lien du « Grand angle ») ; > 2,5 = lecture jusqu'au bout | 1,8 | 2,2 | 2,5 |
| Désabonnement | Désabonnements ÷ délivrés, par édition | ≤ 0,45 % | ≤ 0,35 % | ≤ 0,25 % |
| Plainte pour pourriel | Plaintes ÷ délivrés | < 0,08 % | < 0,05 % | < 0,03 % |
| Rebonds permanents | Rejets définitifs ÷ envois | < 1,2 % | < 0,8 % | < 0,5 % |
| Domaines non génériques | Qualité B2B de la liste | 35 % | 45 % | 55 % |
| Réponses à la rédaction | Réponses humaines à l'adresse d'expédition, par édition | 3 | 6 | 12 |
| Reprises citées | Citations d'une édition par un cabinet, un média ou un régulateur, par trimestre | 1 | 3 | 8 |
| Croissance nette | Inscriptions − désabonnements − rebonds, par mois | +250 | +500 | +900 |

**Indicateurs refusés**, parce qu'ils déplacent la décision éditoriale.

| Refusé | Mauvaise décision induite |
|---|---|
| Le taux d'ouverture **comme objectif** | Il récompense l'objet racoleur et pénalise l'objet exact. Mesuré, jamais visé. |
| Le taux de clic sur ouverture (CTOR) | Il s'améliore quand les ouvertures baissent : on l'optimise en perdant des lecteurs. |
| Le temps passé dans la boîte de réception | Il pousse à allonger, contre la promesse des huit minutes. |
| Les tests A/B d'objet arbitrés à l'ouverture | Ils sélectionnent le sensationnalisme. Chez Actio, un test A/B s'arbitre **au CTU**, sur 2 000 destinataires par bras au minimum. |
| La taille brute de la liste | Elle valorise des inscriptions dont le consentement n'est pas prouvable. |
| Le partage sur les réseaux sociaux | La distribution des liens d'actualité au Canada est entravée et l'état 2026 n'est pas établi (`U-57`) : optimiser sur une inconnue. |

**Protection de la confidentialité dans Mail d'Apple.** Le préchargement des contenus distants, dont le pixel d'ouverture, fait qu'une part des ouvertures ne correspond à aucune lecture humaine et que l'horodatage comme l'adresse IP associés sont ceux d'un relais. [À VÉRIFIER — mécanisme absent de la base ; à confirmer sur la documentation d'Apple avant publication.]

*Sur la mesure.* Le taux d'ouverture reste une **série de tendance sur segment stable**, jamais un niveau absolu ; les colonnes « ouverture cible » du §1.4 sont des repères internes, non contractuels. On mesure à la place : le **CTU**, insensible au préchargement ; la **profondeur de clic** ; le rapport ouvertures/clics par famille de client, qui donne un **coefficient d'ouvertures machine** à retrancher ; la consultation de `{{lien_version_web}}` ; et les **réponses humaines**, que nul automate ne fabrique.

*Sur la vie privée.* Le pixel collecte une adresse IP à chaque affichage — renseignement personnel distinct de l'`{{ip_consentement}}`, conservée, elle, comme preuve de consentement LCAP. **Arbitrage :** ne garder de l'ouverture qu'un booléen et un horodatage tronqué à l'heure, sans IP ni géolocalisation, et couvrir cette collecte par l'EFVP.

### Ce qui reste à trancher

1. **Langue et Charte.** Les exigences de la Charte de la langue française pour une infolettre bilingue diffusée au Québec n'ont **pas** été recherchées (`U-58`). Règle de prudence : le risque n'est pas d'écrire en anglais, mais de publier en anglais avant, plus vite ou mieux qu'en français. **À arbitrer :** envoi simultané des deux versions, ou décalage ?
2. **Prestataire d'envoi.** L'EFVP préalable à toute communication hors Québec conditionne le choix ; aucun coût par abonné ni classement de délivrabilité n'est disponible (`U-74`). Comparaison à refaire, résidence des données précisée **couche par couche**.
3. **La V2 face à la promesse affichée.** Le site annonce « Mardi · 6 h 30 · Heure de l'Est » : afficher les deux vagues sur la page d'inscription, ou tenir 6 h 30 pour l'heure de bouclage ?
4. ~~**Le champ `objet`**~~ — **exécuté.** `newsletter/manifeste.json` porte un champ `objet` distinct de `titre`, et `tools/emails.mjs` fait échouer l'assemblage au-delà de 60 caractères, en deçà de 28, en présence d'un émoji dans l'objet ou l'une de ses variantes, et si l'objet expédié est identique au titre d'archive. La doctrine du §1.3 est désormais opposable et non déclarative.
5. **Le seuil de retrait de S5.** Huit éditions sans clic déclenchent le réengagement ; combien avant le retrait définitif ? Le retrait protège la réputation d'expédition, mais le juriste qui lit sans cliquer existe : seuil à établir après six mois d'observation.
