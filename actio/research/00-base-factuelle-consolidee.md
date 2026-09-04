# Base factuelle consolidée — Actio
> Document de référence interne. Toute affirmation des livrables doit pouvoir être rattachée à une ligne de ce document.

**Arrêté au 4 septembre 2026.** Consolidation des neuf fiches de veille `01` à `09` du répertoire `research`. Aucun fait extérieur à ces fiches n'a été ajouté.

**Avertissement méthodologique commun, valable pour l'intégralité du document.** Les neuf fiches signalent toutes la même limite : la politique de sortie réseau de l'environnement de recherche a bloqué l'accès direct (fetch) à la totalité des domaines visés — `autorites-valeurs-mobilieres.ca`, `lautorite.qc.ca`, `osc.ca`, `ciro.ca` / `ocri.ca`, `asc.ca`, `fcnb.ca`, `bcsc.bc.ca`, `legisquebec.gouv.qc.ca`, `laws-lois.justice.gc.ca`, `parl.ca`, `canada.ca`, `fin.canada.ca`, `revenuquebec.ca`, `fintrac-canafe.canada.ca`, `bankofcanada.ca`, `gazette.gc.ca`, `osfi-bsif.gc.ca`, `crtc.gc.ca`, `cai.gouv.qc.ca`, `oqlf.gouv.qc.ca`, `canlii.org`, `cryptoast.fr`, `journalducoin.com`, `finance-investissement.com`, ainsi que les sites de cabinets (McMillan, Blakes, Stikeman Elliott, McCarthy Tétrault, Osler, Fasken, BLG, Gowling WLG, Norton Rose Fulbright). Les seules exceptions sont les dépôts publics de code et de métadonnées consultés pour la fiche `09` (GitHub, Google Fonts, documentation d'infonuagique), qui ont pu être lus.

**Conséquence de rédaction, non négociable.** Aucun texte primaire n'a été lu intégralement. Tout ce qui suit provient de résultats de recherche indexés, recoupés entre sources. **Aucun numéro d'article, aucune date, aucun montant ne doit être publié sans avoir été rouvert sur la source officielle.** Les marqueurs employés dans ce document :

- `[NV]` — non vérifié sur source primaire (statut par défaut de la quasi-totalité des lignes) ;
- `[C-nn]` — élément faisant l'objet d'une contradiction entre fiches, détaillée en section 5 ;
- `[PV]` — partiellement vérifié (une composante confirmée, une autre non).

---

## 1. Carte des autorités canadiennes

| Autorité | Sigle FR | Sigle EN | Ressort | Compétence sur les cryptoactifs | Type de publication à surveiller |
|---|---|---|---|---|---|
| Autorités canadiennes en valeurs mobilières | ACVM | CSA | Pancanadien (forum des commissions provinciales et territoriales) | Qualification du « contrat de cryptoactif » ; inscription des plateformes ; cryptoactifs arrimés à une valeur ; fonds d'investissement publics | Avis du personnel (série 21-xxx), règlements et normes canadiennes, communiqués conjoints, listes de plateformes autorisées et proscrites |
| Autorité des marchés financiers | AMF | AMF | Québec — régulateur intégré (valeurs mobilières, assurance, institutions de dépôts, distribution) | Applique le régime des ACVM aux plateformes ; exécution (mises en garde, blocages) ; ne délivre **pas** le permis d'ESM `[C-04]` | Avis, décisions, mises en garde, liste des entreprises non autorisées, bulletin de l'Autorité |
| Commission des valeurs mobilières de l'Ontario | CVMO | OSC | Ontario | Inscription et conformité des plateformes ; poursuites contre plateformes extraterritoriales ; droits exigibles | Avis du personnel (33-757), projets de modification des Règles 13-502/13-503, mises en garde aux investisseurs, nouvelles |
| Autres commissions membres des ACVM (Alberta, Colombie-Britannique, Nouveau-Brunswick) | ASC, BCSC, FCNB | ASC, BCSC, FCNB | Provinces respectives | Inscription et décisions propres à chaque province ; hébergent certains communiqués conjoints des ACVM | Communiqués, décisions d'inscription, versions françaises de certains avis (FCNB) |
| Organisme canadien de réglementation des investissements | OCRI | CIRO | Pancanadien — organisme d'autoréglementation reconnu, né de la fusion OCRCVM–ACFM | Adhésion des plateformes devenues courtiers en placement ; cadre de garde des actifs numériques ; conditions d'adhésion | Bulletins et notes d'orientation (26-0033), Règles CPPC, rapport annuel sur la conformité |
| Tribunal administratif des marchés financiers | TMF | FMAT | Québec | Juge les manquements en valeurs mobilières ; pénalités administratives, ordonnances de blocage et d'interdiction | Décisions, communiqués de l'AMF relatant les décisions |
| Tribunal des marchés financiers (Ontario) | — | Capital Markets Tribunal | Ontario — division indépendante de la CVMO | Rend les ordonnances et approuve les ententes de règlement ; la CVMO poursuit | Ordonnances, ententes de règlement, exposés des allégations |
| Centre d'analyse des opérations et déclarations financières du Canada | CANAFE | FINTRAC | Fédéral | Inscription des ESM et ESME ; déclarations (DOIMV, DOD) ; règle d'acheminement ; pénalités administratives pécuniaires | Directives, avis de PAP, communiqués, page « modernisation et changements à venir », révocations d'inscription |
| Revenu Québec | — | — | Québec | Administre la *Loi sur les entreprises de services monétaires* depuis le 13 septembre 2021 `[C-04]` ; fiscalité québécoise des cryptoactifs (TP-21.4.39) | Registre des ESM, catégories de services monétaires, formulaires et guides fiscaux |
| Agence du revenu du Canada | ARC | CRA | Fédéral | Qualification fiscale (bien, non monnaie) ; TPS/TVH ; T1135 ; futur Cadre de déclaration des cryptoactifs | Guides et pages d'orientation, folios de l'impôt sur le revenu, avis TPS/TVH, interprétations techniques |
| Cour canadienne de l'impôt | CCI | TCC | Fédéral | Contentieux fiscal ; première décision sur le bitcoin (*Amicarelli*, 2025) | Jugements |
| Banque du Canada | — | BoC | Fédéral | Superviseur prudentiel projeté des émetteurs de cryptomonnaies stables ; supervision des FSP sous la LAAPD ; services bancaires axés sur les consommateurs ; MNBC en veille | Registre des FSP, cadres de surveillance, pages de statut, publications de recherche |
| Bureau du surintendant des institutions financières | BSIF | OSFI | Fédéral | Traitement du capital et de la liquidité des expositions bancaires et d'assurance sur cryptoactifs | Lignes directrices, bibliothèque de lignes directrices |
| Ministère des Finances du Canada | — | — | Fédéral | Politique législative : stablecoins, LBC-FT, CARF, guichets automatiques de cryptomonnaie | Budgets et mises à jour économiques, avant-projets de loi et notes explicatives, consultations |
| Parlement du Canada et gouverneur en conseil | — | — | Fédéral | Adoption des lois (C-12, C-15, C-29, C-31) ; décrets d'entrée en vigueur ; règlements | LEGISinfo, sanctions royales, *Gazette du Canada* Parties I et II |
| Agence des crimes financiers (projetée) | — | — | Fédéral | Enquête sur les crimes financiers — **n'existe pas encore** : projet de loi C-29 en comité | Étapes parlementaires de C-29 |
| Conseil de la radiodiffusion et des télécommunications canadiennes | CRTC | CRTC | Fédéral | Application des art. 6 à 9 de la LCAP aux messages électroniques commerciaux (infolettre) | Décisions de Conformité et Enquêtes, bulletins d'information, engagements, procès-verbaux de violation, rapports de mesure du rendement |
| Commissariat à la protection de la vie privée du Canada | CPVP | OPC | Fédéral | LPRPDE : consentement, mesures de sécurité, atteintes ; volet LCAP relatif à la collecte d'adresses | Conclusions d'enquête, orientations, rapports annuels |
| Commission d'accès à l'information | CAI | CAI | Québec | Loi 25 / P-39.1 : consentement, incidents de confidentialité, EFVP, sanctions administratives pécuniaires | Décisions, orientations, avis, sanctions |
| Office québécois de la langue française | OQLF | OQLF | Québec | Charte de la langue française : publications commerciales en ligne (art. 52), contrats d'adhésion (art. 55) | Communiqués d'infraction, pages sur les changements législatifs, vocabulaires normalisés (dont le *Vocabulaire de la cryptomonnaie*) |
| Directeur des poursuites criminelles et pénales | DPCP | — | Québec | Poursuites pénales fondées sur la Charte de la langue française | Poursuites, relayées par les communiqués de l'OQLF |
| Bureau de la concurrence | — | Competition Bureau | Fédéral | Indications fausses ou trompeuses ; divulgation des liens matériels (affiliation, commandite) ; co-application de la LCAP | Lignes directrices, avis d'application, poursuites |
| Normes d'accessibilité Canada / commissaire à l'accessibilité | — | ASC | Fédéral — **entités sous réglementation fédérale seulement** | Loi canadienne sur l'accessibilité ; norme CAN/ASC-EN 301 549:2024 (WCAG 2.1 AA) | Normes, guides techniques, plans et rapports d'accessibilité |
| Gouvernement de l'Ontario (LAPHO / Normes d'accessibilité intégrées) | LAPHO | AODA | Ontario | Sites Web publics conformes à WCAG 2.0 AA au-delà de 50 employés ; rapport de conformité au-delà de 20 employés | Règl. Ont. 191/11, pages d'orientation, échéances de rapport |
| Patrimoine canadien (avec le CRTC) | — | — | Fédéral | Loi sur les nouvelles en ligne — distribution des liens d'actualité `[NV]` état 2026 | Décisions et cadres du CRTC, orientations ministérielles |

---

## 2. Chronologie réglementaire vérifiée

Ordre chronologique inverse. **Aucune de ces dates n'a été confirmée sur source primaire** : lire la colonne Source comme « où la retrouver », non comme « ce qui a été lu ». Les marqueurs `[NV]` et `[C-nn]` renvoient à la section 5.

| Date | Instrument / Événement | Autorité | Portée | Source |
|---|---|---|---|---|
| 29 juill. 2026 | Clôture des commentaires sur le relèvement des droits exigibles des PNC (Règles 13-502 / 13-503) | CVMO | Ontario | Fiche 03 — osc.ca |
| 27 juin 2026 | *Gazette du Canada*, Partie I, vol. 160, n° 26 — projet de règlement sur les services bancaires axés sur les consommateurs | Gouverneur en conseil / Banque du Canada | Fédéral | Fiche 07 — gazette.gc.ca |
| 18 juin 2026 | Deuxième lecture du projet de loi C-29 (Agence des crimes financiers) `[NV]` | Parlement | Fédéral | Fiche 04 — parl.ca |
| 3 juin 2026 | Deuxième lecture du projet de loi C-31 (Loi n° 2 d'exécution du budget de 2025) `[NV]` | Parlement | Fédéral | Fiche 05 — parl.ca |
| 6 ou 7 mai 2026 `[C-07]` | Dépôt du projet de loi C-31 | Parlement | Fédéral | Fiches 03 et 07 — fin.canada.ca, parl.ca |
| 30 avr. 2026 | Publication du projet de modifications aux Règles 13-502 et 13-503 (deux droits additionnels de 24 500 $ ; entrée en vigueur envisagée le 5 avril 2027) | CVMO | Ontario | Fiche 03 — osc.ca |
| 28 avr. 2026 `[C-09]` | Mise à jour économique du printemps 2026 : interdiction projetée des guichets automatiques de cryptomonnaie, pouvoir de directive du ministre sous la LRPCFAT, financement de l'Agence des crimes financiers (352,7 M$) | Ministère des Finances | Fédéral | Fiches 04 et 07 — budget.canada.ca |
| 27 avr. 2026 | Première lecture du projet de loi C-29 | Parlement | Fédéral | Fiche 04 — parl.ca |
| Avr. 2026 | Rapport sur la conformité 2026 de l'OCRI `[NV]` date exacte | OCRI | Pancanadien | Fiches 01 et 03 — blg.com, ocri.ca |
| 26 mars 2026 | Sanction royale du projet de loi **C-12** : pénalités administratives pécuniaires multipliées par 40, inscription universelle des entités déclarantes, accords de conformité obligatoires, nouvelle violation très grave (programme de conformité inefficace) — volets échelonnés par décret | Parlement / CANAFE | Fédéral | Fiche 04 — parl.ca |
| 26 mars 2026 | Sanction royale du projet de loi **C-15** (Loi d'exécution du budget de 2025, n° 1) portant édiction de la loi fédérale sur les cryptomonnaies stables `[C-08]` — **édictée, non en vigueur** | Parlement / Banque du Canada | Fédéral | Fiches 01, 04, 05 et 07 — parl.ca, dlapiper.com |
| Mars 2026 | Vagues de révocations d'inscriptions d'ESM liées aux cryptoactifs `[C-14]` | CANAFE | Fédéral | Fiche 04 |
| 9 mars 2026 | Date de référence pour le rapport annuel des FSP (dépôt au plus tard le 31 mars 2026) | Banque du Canada | Fédéral | Fiche 07 — bankofcanada.ca |
| 5 févr. 2026 | Communiqué de PAP contre TreasureMeta Corporation | CANAFE | Fédéral | Fiche 04 — fintrac-canafe.canada.ca |
| 3 févr. 2026 | Bulletin / note d'orientation **26-0033** sur le cadre de garde des actifs numériques : dépositaires acceptables par paliers, plafonds d'actifs clients, capital minimal, autogarde plafonnée `[C-13]` | OCRI | Pancanadien | Fiches 01 et 03 — ciro.ca / ocri.ca |
| Janv. 2026 | Signalement d'une vague de vérifications T1135 visant les actifs étrangers | ARC (rapporté par BLG) | Fédéral | Fiche 05 — blg.com |
| 9 déc. 2025 | ***Amicarelli c. Le Roi*, 2025 CCI 185** — première décision de la Cour canadienne de l'impôt sur le bitcoin ; perte QuadrigaCX qualifiée de perte d'entreprise (projet comportant un risque de caractère commercial) | Cour canadienne de l'impôt | Fédéral | Fiche 05 — canlii.org |
| 20 nov. 2025 | Dispense accordée à QCAD Digital Trust `[NV]` | ACVM / AMF | `[NV]` | Fiche 01 |
| 4 nov. 2025 | Budget de 2025 « Canada Strong » : report d'un an du CDC/CARF et de la NCD 2.0 au 1er janvier 2027 `[C-06]` ; annonce du cadre sur les cryptomonnaies stables ; 10 M$ sur 2 ans à la Banque du Canada dès 2026-2027 ; refonte du régime des placements admissibles | Ministère des Finances | Fédéral | Fiches 05 et 07 — budget.canada.ca |
| 22 oct. 2025 | Communiqué des ACVM sur les **prêts adossés à des cryptoactifs** : rappel des obligations d'inscription et de prospectus | ACVM | Pancanadien | Fiche 01 — bcsc.bc.ca |
| 22 oct. 2025 | Avis public de PAP contre **Xeltox Enterprises Ltd. (Cryptomus)** : 176 960 190 $ `[C-10]` sur le nombre de manquements et la date d'imposition | CANAFE | Fédéral | Fiches 04 et 07 — fintrac-canafe.canada.ca |
| Oct. 2025 | Relèvement du plafond d'exposition aux cryptoactifs du groupe 2, de 1 % à 5 % des fonds propres de catégorie 1 | BSIF | Fédéral | Fiche 07 — osfi-bsif.gc.ca |
| 1er oct. 2025 | Modifications réglementaires LBC-FT (contrôle des mandataires d'ESM, services d'acquisition pour guichets privés) `[NV]` | Gouverneur en conseil / CANAFE | Fédéral | Fiche 04 |
| 12 sept. 2025 | Clôture de la consultation sur les propositions législatives du CDC / CARF | Ministère des Finances | Fédéral | Fiches 04 et 05 — fin.canada.ca |
| 8 sept. 2025 | Ouverture du registre public des fournisseurs de services de paiement ; début de la supervision sous la LAAPD | Banque du Canada | Fédéral | Fiche 07 — bankofcanada.ca |
| 28 août 2025 | ***AMF c. iGenius LLC*** (TMF) : homologation d'une entente, pénalité de 15 000 $, géoblocage de deux logiciels de négociation automatisée (Endotech, Coinrule) | TMF | Québec | Fiche 02 — lautorite.qc.ca, quebec.ca |
| 22 août 2025 | ***AMF c. Gagnon et 9452-7538 Québec inc.* (« Richie The Bull »)** (TMF) : gestion des ETH d'investisseurs sur Uniswap avec partage de 20 % des profits = contrat d'investissement ; abonnement à un groupe de signaux ≠ contrat d'investissement | TMF | Québec | Fiche 02 — lautorite.qc.ca, mccarthy.ca |
| 15 août 2025 | Publication des propositions législatives créant la partie XXI de la LIR (CDC / CARF) | Ministère des Finances | Fédéral | Fiche 05 — fin.canada.ca |
| 16 juill. 2025 | Entrée en vigueur des modifications au **Règlement 81-102** relatives aux cryptoactifs : OPC alternatifs et fonds à capital fixe seulement, cryptoactifs fongibles cotés, interdiction du prêt de titres et des pensions, garde hors ligne, rapport annuel de comptable public | ACVM / CVMO | Pancanadien | Fiche 03 — osc.ca |
| 17 juin 2025 | Lancement du FNB XRP de 3iQ `[NV]` | TSX | Canada | Fiche 03 — investmentexecutive.com |
| Juin 2025 | Avis sur la TPS/TVH n° 324 (*Activités de minage relatives aux cryptoactifs*), version remplaçant celle de mars 2024 | ARC | Fédéral | Fiche 05 — canada.ca |
| 9 mai 2025 | Communiqué d'infraction visant le site web de Fournitures Hermes inc. | OQLF | Québec | Fiche 02 — oqlf.gouv.qc.ca |
| Avr. 2025 | Allègement annoncé du formulaire TP-21.4.39 (liste de transactions non exigée) `[NV]` portée exacte | Revenu Québec | Québec | Fiche 05 — lapresse.ca |
| 17 avr. 2025 | Publication des modifications au Règlement 81-102 relatives aux cryptoactifs | ACVM | Pancanadien | Fiche 03 — osc.ca |
| 16 avr. 2025 | Lancement des premiers FNB Solana au comptant avec jalonnement (3iQ, Purpose, CI GAM, Evolve) `[NV]` | TSX | Canada | Fiche 03 |
| 21 mars 2025 | **Annulation** de la hausse du taux d'inclusion des gains en capital : le taux demeure 50 % | Ministère des Finances | Fédéral | Fiche 05 |
| 20 févr. 2025 | Publication des lignes directrices du BSIF sur les expositions sur cryptoactifs (banques ; assurance) — en vigueur le 1er nov. 2025 ou le 1er janv. 2026 selon la fin d'exercice | BSIF | Fédéral | Fiche 07 — osfi-bsif.gc.ca |
| 17 févr. 2025 | Instantané ACVM des plateformes : 5 membres de l'OCRI, 8 courtiers restreints, 6 sous engagement préalable `[NV]`, probablement périmé | ACVM | Pancanadien | Fiche 07 |
| Janv. 2025 | Shakepay, première plateforme québécoise membre de l'OCRI `[NV]` | OCRI | Québec | Fiche 01 |
| 31 janv. 2025 | Report de la hausse du taux d'inclusion des gains en capital (avant son annulation) | Ministère des Finances | Fédéral | Fiche 05 |
| 10 déc. 2024 | **Avis 33-757 du personnel de la CVMO** : revue de six PNC courtiers restreints — adéquation du compte, limite de placement (30 000 $ net sur 12 mois `[NV]`), limites client | CVMO | Ontario | Fiche 03 — osc.ca |
| 15 nov. 2024 | Date limite d'inscription des fournisseurs de services de paiement sous la LAAPD | Banque du Canada | Fédéral | Fiche 07 |
| 22 sept. 2024 | Loi 25 pleinement en vigueur (dernière phase : portabilité) | CAI | Québec | Fiches 02 et 06 — cai.gouv.qc.ca |
| Sept. 2024 | Réduction annoncée des travaux sur le dollar canadien numérique : aucun projet ni pilote | Banque du Canada | Fédéral | Fiche 07 — bankofcanada.ca |
| 6 août 2024 | **Communiqué conjoint ACVM–OCRI** : fin de l'approche intérimaire d'inscription de courtier restreint à durée limitée ; les plateformes doivent prioriser l'inscription de courtier en placement et l'adhésion à l'OCRI `[C-05]` | ACVM + OCRI | Pancanadien | Fiches 01 à 04 — asc.ca, autorites-valeurs-mobilieres.ca |
| Mai 2024 | Adoption de la norme CAN/ASC-EN 301 549:2024 (identique à EN 301 549 (2021), intègre WCAG 2.1 AA) — norme volontaire | Normes d'accessibilité Canada | Fédéral | Fiche 06 — accessible.canada.ca |
| 5 oct. 2023 | **Avis 21-333 du personnel des ACVM** : régime intérimaire des cryptoactifs arrimés à une valeur (CAV / VRCA) | ACVM | Pancanadien | Fiches 01, 02 et 03 — lautorite.qc.ca |
| 29 août 2023 | Table ronde CPA Canada, question 20, interprétation 2023-0984901C6 (cryptomonnaie = fonds ou bien incorporel ; JNF ; T1135) | ARC | Fédéral | Fiche 05 — taxinterpretations.com |
| 22 juin 2023 | Sanction royale de la *Loi d'exécution du budget de 2023* : art. 188.2 LTA — le minage est réputé ne pas être une fourniture, les CTI sont refusés | Parlement | Fédéral | Fiche 05 |
| 1er juin 2023 | Entrée en vigueur de l'art. 55 modifié de la Charte de la langue française (contrats d'adhésion) | OQLF | Québec | Fiche 02 |
| 24 mars 2023 | Échéance des engagements préalables renforcés (délai de 30 jours ouvert par l'Avis 21-332) | ACVM | Pancanadien | Fiche 01 |
| 22 févr. 2023 | **Avis 21-332 du personnel des ACVM** : engagement préalable renforcé (garde, séparation des actifs, interdiction du levier), après les faillites de 2022 (Voyager, Celsius, FTX, BlockFi, Genesis) | ACVM | Pancanadien | Fiches 01 et 03 — fcnb.ca |
| 1er janv. 2023 | Fusion de l'OCRCVM et de l'ACFM ; la dénomination « OCRI / CIRO » sera annoncée plus tard en 2023 `[NV]` | OCRI | Pancanadien | Fiche 03 |
| 2022 | Décisions **Mek Global / PhoenixFin (KuCoin)** — 2 M$ CA et interdiction permanente — et **Bybit Fintech Limited** — remise de 2 468 910 $ US et 10 000 $ CA de frais | Tribunal des marchés financiers (Ont.) | Ontario | Fiche 03 — mccarthy.ca |
| 1er juin 2022 | Sanction de la Loi 96 (Loi sur la langue officielle et commune du Québec, le français) ; volets en vigueur le 1er juin 2025 ; période de grâce sur les produits jusqu'au 1er juin 2027 | OQLF | Québec | Fiche 02 |
| 18 févr. 2022 | Clôture de la consultation sur l'avant-projet de *Capital Markets Act* (Ontario) — **non adopté** | Ministère des Finances de l'Ontario | Ontario | Fiche 03 |
| 22 sept. 2022 | Première phase d'entrée en vigueur de la Loi 25 | CAI | Québec | Fiches 02 et 06 |
| 23 sept. 2021 `[C-03]` | **Avis conjoint 21-330 ACVM/OCRCVM** : publicité, marketing, médias sociaux, concours de type ludique | ACVM + OCRCVM | Pancanadien | Fiches 01 et 08 — osc.ca |
| 13 sept. 2021 | Transfert de l'administration de la *Loi sur les entreprises de services monétaires* de l'AMF à **Revenu Québec** `[C-04]` | Revenu Québec | Québec | Fiche 02 |
| 12 oct. 2021 | Publication de l'avant-projet de *Capital Markets Act* (Ontario) | Ministère des Finances de l'Ontario | Ontario | Fiche 03 |
| 2021 | *Loi de 2021 sur la Commission des valeurs mobilières* (Ontario) : création du Tribunal des marchés financiers | Législature de l'Ontario | Ontario | Fiche 03 |
| 29 juin 2021 | Sanction royale du projet de loi C-30 (43e lég., 2e sess.) : définition d'« effet de paiement virtuel » et al. f.1 d'« instrument financier », par. 123(1) LTA — effet réputé au 18 mai 2019 `[NV]` `[C-15]` | Parlement | Fédéral | Fiche 05 |
| 1er juin 2021 | Entrée en vigueur des modifications « cryptoactifs » du RRPCFAT : DOIMV à 10 000 $, règle de 24 heures, règle d'acheminement, tenue de documents | CANAFE | Fédéral | Fiche 04 |
| 29 mars 2021 `[C-02]` | **Avis conjoint 21-329 ACVM/OCRCVM** : conformité des plateformes, voie du courtier restreint, conditions et dispenses, engagement préalable | ACVM + OCRCVM | Pancanadien | Fiches 01 et 02 |
| 1er janv. 2021 | Échéance de conformité WCAG 2.0 AA des sites Web sous la LAPHO | Gouvernement de l'Ontario | Ontario | Fiche 06 |
| 16 janv. 2020 `[C-01]` | **Avis 21-327 du personnel des ACVM** : le « contrat de cryptoactif » — l'absence de livraison immédiate fait naître une relation contractuelle soumise au droit des valeurs mobilières | ACVM | Pancanadien | Fiche 01 — osc.ca |
| 1er nov. 2018 | Entrée en vigueur du *Règlement sur les atteintes aux mesures de sécurité*, DORS/2018-64 (déclaration au commissaire, registre conservé 24 mois) | CPVP | Fédéral | Fiche 06 |
| 1er juill. 2017 | Date prévue de l'entrée en vigueur du **droit privé d'action** de la LCAP — **suspendu par décret**, jamais abrogé `[NV]` numéro de décret | Gouverneur en conseil | Fédéral | Fiche 06 |
| 19 juin 2014 | Bulletin d'information de Conformité et Enquêtes CRTC 2014-326 : programmes de conformité d'entreprise, appui à la défense de diligence raisonnable (art. 33 LCAP) | CRTC | Fédéral | Fiche 06 |
| 2014 | Entrée en vigueur du volet principal de la LCAP `[NV]` (1er juillet 2014 non confirmé) | CRTC | Fédéral | Fiches 06 et 08 |
| 18 déc. 2013 | *Règlement sur la protection du commerce électronique* (gouverneur en conseil), DORS/2013-221 — exclusions et exemptions | Gouverneur en conseil | Fédéral | Fiche 06 — gazette.gc.ca |
| 2012 | *Règlement sur la protection du commerce électronique* (CRTC), DORS/2012-36 — renseignements prescrits, forme du mécanisme d'exclusion | CRTC | Fédéral | Fiche 06 |
| 1er avr. 2012 | Permis d'ESM obligatoires au Québec | AMF, puis Revenu Québec | Québec | Fiche 02 |
| 2010 | Adoption de la *Loi sur les entreprises de services monétaires* (Québec) et de la LCAP (L.C. 2010, ch. 23) `[NV]` citation exacte | Législateurs | Québec / Fédéral | Fiches 02 et 06 |
| 2000 | LRPCFAT (L.C. 2000, ch. 17) et LPRPDE (L.C. 2000, ch. 5) | CANAFE ; CPVP | Fédéral | Fiches 04 et 06 |
| 1990 | *Loi sur les valeurs mobilières* (Ontario), L.R.O. 1990, ch. S.5 | Législature de l'Ontario | Ontario | Fiche 03 |
| 1982 | *Loi sur les valeurs mobilières* (Québec), RLRQ c. V-1.1, refondue depuis | AMF / TMF | Québec | Fiche 02 |

---

## 3. Instruments et textes applicables

### 3.1 Valeurs mobilières et encadrement des plateformes

| Instrument | Autorité | Objet | Date | Statut |
|---|---|---|---|---|
| *Loi sur les valeurs mobilières* (Québec), RLRQ c. V-1.1 | AMF (surveillance) / TMF (sanction) | Notion de « contrat d'investissement » à l'art. 1 `[NV]` alinéa exact ; inscription ; prospectus ; exercice illégal | Loi de 1982, refondue | En vigueur |
| *Loi sur les valeurs mobilières* (Ontario), L.R.O. 1990, ch. S.5 | Législature de l'Ontario / CVMO | Inscription, prospectus, sanctions | 1990 | En vigueur |
| *Loi de 2021 sur la Commission des valeurs mobilières* (Ontario) | Législature de l'Ontario | Crée le Tribunal des marchés financiers | 2021 | En vigueur |
| Avant-projet de *Capital Markets Act* (Ontario) | Ministère des Finances de l'Ontario | Remplacerait la Loi sur les valeurs mobilières et la Loi sur les contrats à terme ; pouvoir discrétionnaire de désignation plutôt que qualification du contrat | Avant-projet 12 oct. 2021 ; consultation close 18 févr. 2022 | **Non adopté** `[NV]` statut au 4 sept. 2026 |
| Règlement 31-103 / Norme canadienne 31-103 sur les obligations et dispenses d'inscription | ACVM / AMF / CVMO | Inscription (courtier restreint, courtier en placement), convenance, communications publicitaires des personnes inscrites | En vigueur, modifié | En vigueur `[NV]` version applicable |
| Avis 21-327 du personnel | ACVM | Contrat de cryptoactif : l'absence de livraison immédiate soumet la relation au droit des valeurs mobilières | 16 janv. 2020 `[C-01]` | Avis du personnel, en vigueur |
| Avis conjoint 21-329 ACVM / OCRCVM | ACVM + OCRCVM (auj. OCRI) | Conformité des plateformes ; voie du courtier restreint ; conditions et dispenses ; engagement préalable | 29 mars 2021 `[C-02]` | En vigueur, largement dépassé par le communiqué du 6 août 2024 |
| Avis conjoint 21-330 ACVM / OCRCVM | ACVM + OCRCVM | Publicité, marketing, médias sociaux ; concours de type ludique ; le marketing diffusé par un tiers pour le compte d'une plateforme engage celle-ci | 23 sept. 2021 `[C-03]` | En vigueur |
| Avis 21-332 du personnel | ACVM | Engagement préalable renforcé (EPI / PRU) : garde, séparation des actifs, interdiction du levier | 22 févr. 2023 | En vigueur ; nouveaux engagements plus acceptés depuis le 6 août 2024 |
| Avis 21-333 du personnel | ACVM | Régime intérimaire des cryptoactifs arrimés à une valeur (CAV / VRCA) | 5 oct. 2023 | En vigueur (intérimaire) |
| Communiqué conjoint ACVM–OCRI | ACVM + OCRI | Fin de l'approche intérimaire du courtier restreint ; priorité à l'inscription de courtier en placement et à l'adhésion à l'OCRI | 6 août 2024 `[C-05]` | Applicable |
| Avis 33-757 du personnel | CVMO | Revue de conformité de six PNC courtiers restreints : adéquation du compte, limite de placement, limites client | 10 déc. 2024 | Publié |
| Communiqué ACVM — prêts adossés à des cryptoactifs | ACVM | Rappel des obligations d'inscription et de prospectus des plateformes de prêt garanti par cryptoactifs | 22 oct. 2025 | En vigueur |
| Bulletin / note d'orientation **26-0033** | OCRI | Cadre de garde des actifs numériques : dépositaires acceptables par paliers, plafonds d'actifs clients, capital minimal, limitation de l'autogarde ; imposé par conditions d'adhésion, non par règle publiée | 3 févr. 2026 `[C-13]` | En vigueur (approche intérimaire) |
| Règles CPPC, Règles 4300 et 4342 | OCRI | Garde, emplacement de titres agréé, séparation quotidienne ; obligation de résultat (les actifs entièrement payés échappent aux créanciers) | En vigueur | En vigueur |
| Règlement 81-102 sur les fonds d'investissement (modifications cryptoactifs) | ACVM / CVMO | OPC alternatifs et fonds à capital fixe seulement ; cryptoactifs fongibles cotés ; interdiction du prêt de titres et des pensions ; garde hors ligne ; rapport annuel de comptable public | Publié 17 avr. 2025 ; en vigueur 16 juill. 2025 | En vigueur |
| Projet de modifications aux Règles 13-502 et 13-503 | CVMO | Droit additionnel de 24 500 $ à l'inscription d'un courtier restreint ; 24 500 $ pour dispense | Publié 30 avr. 2026 ; entrée en vigueur envisagée 5 avr. 2027 | Consultation close |
| Listes publiques des plateformes autorisées et des plateformes proscrites | ACVM | Baromètre d'exécution ; seules les listes officielles font foi | Mises à jour continues | En vigueur |

**Décisions de référence.** *AMF c. Gagnon* (TMF, 22 août 2025) `[NV]` référence neutre ; *AMF c. iGenius LLC* (TMF, 28 août 2025) `[NV]` référence neutre ; Mek Global / PhoenixFin (KuCoin), Bybit Fintech Limited, Aux Cayes Fintech (OKX), Blockratize / Adventure One QSS (Polymarket), Phemex — toutes devant le Tribunal des marchés financiers de l'Ontario `[NV]` dates et montants (voir section 5).

### 3.2 Lutte contre le recyclage des produits de la criminalité et le financement des activités terroristes (LBC-FT)

| Instrument | Autorité | Objet | Date | Statut |
|---|---|---|---|---|
| LRPCFAT / PCMLTFA, L.C. 2000, ch. 17 | CANAFE / ministère des Finances | Régime-cadre, entités déclarantes, pénalités administratives pécuniaires | 2000, modifiée en continu | En vigueur |
| RRPCFAT / PCMLTFR | Gouverneur en conseil | Inscription des ESM, DOIMV, DOD, règle d'acheminement, tenue de documents, vérification de l'identité | Modifications cryptoactifs en vigueur le 1er juin 2021 | En vigueur `[NV]` numéros d'articles |
| Directive sur la règle d'acheminement (télévirements et transfert de monnaie virtuelle) | CANAFE | Renseignements à transmettre avec un transfert ; seuil de 1 000 $ tiré du déclencheur de tenue de documents, non de la disposition elle-même | 2021, mise à jour depuis | En vigueur |
| Directive DOIMV et règle de 24 heures | CANAFE | Déclaration des réceptions de monnaie virtuelle de 10 000 $ et plus | 1er juin 2021 | En vigueur |
| Projet de loi **C-12** | Parlement / CANAFE | PAP multipliées par 40 (40 000 $ mineure ; 4 M$ grave ; 20 M$ très grave ; plafond cumulatif au plus élevé de 20 M$ ou 3 % du revenu brut mondial du groupe) ; inscription universelle des entités déclarantes ; accords de conformité obligatoires ; nouvelle violation très grave pour programme de conformité inefficace | Sanction royale 26 mars 2026 | En vigueur, **volets échelonnés par décret** `[NV]` |
| Projet de loi **C-29**, *Loi sur l'Agence des crimes financiers* | Parlement | Création d'une agence fédérale d'enquête sur les crimes financiers | 1re lecture 27 avr. 2026 ; 2e lecture 18 juin 2026 | **En comité** `[NV]` |
| Mise à jour économique du printemps 2026 | Ministère des Finances | Interdiction projetée des guichets automatiques de cryptomonnaie (infraction criminelle projetée) ; pouvoir de directive du ministre sous la LRPCFAT ; 352,7 M$ pour l'Agence des crimes financiers | 28 avr. 2026 `[C-09]` | Annonce ; véhicule législatif `[NV]` |
| *Loi sur les entreprises de services monétaires* (Québec), RLRQ c. E-12.000001 | Revenu Québec depuis le 13 sept. 2021 `[C-04]` | Permis d'exploitation d'ESM ; catégories liées aux cryptoactifs (guichets automatiques de cryptoactifs, change de devises, transfert de fonds) | Loi de 2010 ; permis obligatoires depuis le 1er avr. 2012 | En vigueur |

**Règle de cumul.** Une plateforme active au Québec cumule typiquement : inscription en valeurs mobilières (AMF / ACVM, puis OCRI), permis d'ESM québécois (Revenu Québec `[C-04]`) et inscription d'ESM ou d'ESME auprès du CANAFE. L'inscription fédérale est gratuite ; le Québec impose des frais. L'inscription au CANAFE est **déclarative** : ni capital minimum, ni cautionnement, ni agrément prudentiel.

### 3.3 Fiscalité

| Instrument | Autorité | Objet | Date | Statut |
|---|---|---|---|---|
| Pages « Information pour les utilisateurs de cryptoactifs et les professionnels de l'impôt » | ARC | Position administrative : les cryptoactifs sont des **biens** (marchandise ou bien incorporel), non de la monnaie ; chaque disposition est un fait générateur | Mises à jour continues `[NV]` | En vigueur |
| Bulletin IT-479R, *Transactions de valeurs mobilières*, par. 9 à 13 | ARC | Facteurs distinguant revenu d'entreprise et gain en capital, appliqués par analogie aux cryptoactifs : fréquence, intention, durée de détention, mode de financement, expertise, nature de l'actif | Archivé | Archivé mais opérant |
| Taux d'inclusion des gains en capital | Ministère des Finances | Demeure **50 %** : hausse à 66,67 % reportée le 31 janv. 2025, **annulée le 21 mars 2025** | 21 mars 2025 | En vigueur |
| *Amicarelli c. Le Roi*, 2025 CCI 185 | Cour canadienne de l'impôt | Première décision judiciaire sur le bitcoin ; perte QuadrigaCX sur compte de revenu (projet comportant un risque de caractère commercial) | 9 déc. 2025 | Rendue `[NV]` appel |
| Par. 123(1) LTA — « effet de paiement virtuel » ; al. f.1 d'« instrument financier » | Parlement / ARC | Cryptomonnaies fongibles = instrument financier ; leur vente est une **fourniture exonérée**. Exclusion des biens conférant un droit d'échange ou de rachat contre de l'argent ou des services déterminés | Projet de loi C-30 (43-2), sanction royale 29 juin 2021 ; effet réputé au 18 mai 2019 `[NV]` | En vigueur |
| Art. 188.2 LTA — activités de minage | Parlement | Le minage est réputé ne pas être une fourniture ; **CTI refusés** | Sanction royale 22 juin 2023 | En vigueur |
| Avis sur la TPS/TVH n° 324, *Activités de minage relatives aux cryptoactifs* | ARC | Interprétation de l'art. 188.2 ; groupes et bassins de minage | Version de juin 2025 (remplace mars 2024) | En vigueur |
| Formulaire T1135, *Bilan de vérification du revenu étranger* | ARC | Cryptoactifs « situés, déposés ou détenus hors du Canada » = bien étranger déterminé ; seuil de **coût total** supérieur à 100 000 $ (et non JVM) ; pénalité de base 25 $/jour, minimum 100 $, maximum 2 500 $, majorée en cas de faute lourde | Annuel | En vigueur |
| Interprétation 2014-0561061E5 ; table ronde CPA Canada 2023-0984901C6 (29 août 2023, Q. 20) | ARC | Cryptomonnaie = fonds ou bien incorporel ; JNF ; application du T1135 | 2014 / 2023 | Positions administratives |
| Folio de l'impôt sur le revenu S3-F10-C1, *Placements admissibles* | ARC | Détention **directe** de cryptoactifs non admissible en REER / CELI / CELIAPP ; FNB cotés à une bourse désignée admissibles ; impôt de 50 % de la JVM sur un placement non admissible `[NV]` renvoi législatif | Mis à jour périodiquement | En vigueur |
| Formulaire TP-21.4.39, *Déclaration relative aux cryptoactifs* | Revenu Québec | Déclaration obligatoire de détention et d'opérations, même en l'absence de transaction | Depuis l'année d'imposition 2024 ; allègement annoncé en avril 2025 `[NV]` | En vigueur |
| Propositions législatives — partie XXI LIR (CDC / CARF) | Ministère des Finances / ARC | Déclaration par les fournisseurs de services de cryptoactifs ; échange automatique de renseignements | Publiées le 15 août 2025 ; consultation close le 12 sept. 2025 | Reprises dans le projet de loi C-31 `[C-06]` `[C-07]` |
| Budget de 2025 (4 nov. 2025) | Ministère des Finances | Report d'un an du CDC et de la NCD 2.0 ; refonte du régime des placements admissibles ; annonce du cadre sur les cryptomonnaies stables | 4 nov. 2025 | Politique annoncée |
| Projet de loi **C-31**, *Loi n° 2 d'exécution du budget de 2025* | Parlement | Édicte la partie XXI LIR ; deux nouvelles catégories de fonds admissibles ; abrogation du régime des placements enregistrés au 1er janv. 2027 | Dépôt 6 ou 7 mai 2026 `[C-07]` ; 2e lecture 3 juin 2026 | En cours `[NV]` |

**Zones grises fiscales explicitement non tranchées.** Jalonnement, largages, embranchements : aucune ligne directrice formelle et exhaustive de l'ARC ; la pratique dominante des cabinets et des CPA (inclusion au revenu de la JVM à la réception, devenant le PBR) **ne doit pas être attribuée à l'ARC**. Finance décentralisée (pools de liquidité, *wrapping*, jetons de reçu) : susceptible d'analyse comme échange de biens, donc disposition, sans confirmation protocole par protocole. Situs des actifs portés par une chaîne de blocs pour le T1135 : notionnel, sans méthode fournie par l'ARC. Statut TPS/TVH de plusieurs cryptomonnaies stables et jetons utilitaires : incertain. Commissions et frais de plateforme : fourniture taxable ou service financier exonéré, non tranché. Les JNF, ne fonctionnant pas comme moyen d'échange, sont des fournitures **taxables** (seuil de petit fournisseur : 30 000 $).

### 3.4 Paiements, prudentiel et cadre fédéral des cryptomonnaies stables

| Instrument | Autorité | Objet | Date | Statut |
|---|---|---|---|---|
| Loi fédérale sur les cryptomonnaies stables `[C-08]` (section 45, partie 5, projet de loi C-15 — Loi d'exécution du budget de 2025, n° 1) | Parlement / Banque du Canada | Enregistrement des émetteurs auprès de la Banque du Canada ; réserve 1:1 en actifs très liquides chez un dépositaire qualifié ; politiques de rachat, gestion des risques, protection des renseignements personnels ; déclarations et vérifications | Sanction royale 26 mars 2026 | **Édictée, NON EN VIGUEUR** — décrets et règlements attendus, mise en œuvre visée 2027 |
| *Loi sur les activités associées aux paiements de détail* (LAAPD / RPAA) | Banque du Canada | Enregistrement et supervision des fournisseurs de services de paiement | Date limite d'inscription 15 nov. 2024 ; registre public ouvert le 8 sept. 2025 | En vigueur |
| Rapport annuel des FSP | Banque du Canada | Déclaration annuelle obligatoire ; FSP inscrits avant le 9 mars 2026 : dépôt au plus tard le 31 mars 2026 | 2026 | En vigueur |
| Lignes directrices sur les expositions sur cryptoactifs (banques ; assurance) | BSIF | Traitement du capital et de la liquidité, alignement Bâle ; plafond du groupe 2 relevé de 1 % à 5 % des fonds propres de catégorie 1 en oct. 2025 | Publiées le 20 févr. 2025 ; en vigueur 1er nov. 2025 ou 1er janv. 2026 selon la fin d'exercice | En vigueur |
| Services bancaires axés sur les consommateurs (volet de C-15) | Banque du Canada (transfert depuis l'ACFC) | Surveillance du cadre ; jusqu'à 19,3 M$ sur 2 ans ; extension à l'initiation de paiement visée d'ici mi-2027 | Sanction de C-15 le 26 mars 2026 ; projet de règlement à la *Gazette*, Partie I, 27 juin 2026 | En construction |
| Dollar canadien numérique (MNBC de détail) | Banque du Canada | Recherche seulement — **aucun projet ni pilote** | Réduction des travaux annoncée en sept. 2024 | En veille |

**Le piège central du dossier fédéral.** « Édicté » n'est pas « en vigueur ». Écrire que « les émetteurs doivent désormais détenir une réserve 1:1 » est une erreur juridique tant que le gouverneur en conseil n'a pas fixé la date d'entrée en vigueur et que les règlements ne sont pas pris.

### 3.5 Vie privée et courriel commercial

| Instrument | Autorité | Objet | Date | Statut |
|---|---|---|---|---|
| Loi canadienne anti-pourriel (LCAP / CASL), L.C. 2010, ch. 23 `[NV]` | CRTC (art. 6-9), Bureau de la concurrence, CPVP | Interdiction d'envoyer un message électronique commercial sans consentement ; forme et contenu ; identification de l'expéditeur, adresse postale valide 60 jours, mécanisme d'exclusion valide 60 jours et traité sous 10 jours ouvrables ; fardeau de la preuve du consentement sur l'expéditeur ; diligence raisonnable (art. 33) ; SAP maximales de 1 000 000 $ (personne physique) et 10 000 000 $ (personne morale) ; responsabilité personnelle des dirigeants | Volet principal 2014 `[NV]` | En vigueur |
| Règlement sur la protection du commerce électronique (CRTC), DORS/2012-36 | CRTC | Renseignements prescrits dans chaque message ; forme du mécanisme d'exclusion | 2012 | En vigueur |
| Règlement sur la protection du commerce électronique (gouverneur en conseil), DORS/2013-221 | Gouverneur en conseil | Exclusions et exemptions, dont certains messages interentreprises | 18 déc. 2013 | En vigueur |
| Lignes directrices sur le consentement tacite | CRTC | Relation d'affaires en cours (2 ans après un achat ou contrat), demande de renseignements (6 mois), publication bien en vue | n.d. | Lignes directrices |
| Bulletin d'information de Conformité et Enquêtes CRTC 2014-326 | CRTC | Programmes de conformité d'entreprise ; appui à la diligence raisonnable | 19 juin 2014 | Archivé, toujours cité |
| Droit privé d'action (LCAP) | Gouverneur en conseil | Suspendu par décret avant son entrée en vigueur prévue au 1er juill. 2017 ; **non abrogé** | 2017 | Suspendu — risque dormant |
| LPRPDE (PIPEDA), L.C. 2000, ch. 5 | CPVP | Consentement, finalités, mesures de sécurité, atteintes | 2000 | En vigueur — **le projet de loi C-27 est mort au feuilleton et n'a pas été remplacé** |
| Règlement sur les atteintes aux mesures de sécurité, DORS/2018-64 | CPVP | Déclaration si « risque réel de préjudice grave » ; registre conservé 24 mois | 1er nov. 2018 | En vigueur |
| Loi 25 (L.Q. 2021, c. 25) modifiant la *Loi sur la protection des renseignements personnels dans le secteur privé*, RLRQ c. P-39.1 | CAI | Consentement manifeste, libre et éclairé ; responsable de la protection des renseignements personnels désigné **et publié** ; registre de tous les incidents de confidentialité ; signalement « avec diligence » en cas de risque de préjudice sérieux ; **EFVP obligatoire avant toute communication hors Québec** ; portabilité | Phases 22 sept. 2022 / 2023 / 2024 ; pleinement en vigueur le 22 sept. 2024 | En vigueur `[C-11]` `[C-12]` sur les montants et la date des SAP |
| *Loi sur la concurrence* (indications fausses ou trompeuses) | Bureau de la concurrence | Divulgation des liens matériels : affiliation, commandite, avantage reçu | En vigueur | En vigueur `[NV]` numéro d'article |
| Loi sur les nouvelles en ligne | CRTC / Patrimoine canadien | Distribution : blocage des liens d'actualité par Meta au Canada | 2023 | `[NV]` état en 2026 |

**Deux pièges de rédaction confirmés par deux fiches.** (i) Il n'existe **pas** de délai de 72 heures dans la Loi 25 : ce chiffre est une contamination du RGPD. (ii) Ne jamais écrire « amende » pour une sanction administrative pécuniaire, ni « RGPD canadien » pour la Loi 25.

### 3.6 Accessibilité et langue

| Instrument | Autorité | Objet | Date | Statut |
|---|---|---|---|---|
| *Loi canadienne sur l'accessibilité*, L.C. 2019, ch. 10 | Normes d'accessibilité Canada / commissaire à l'accessibilité | Plans d'accessibilité, rétroaction, rapports d'étape — **entités sous réglementation fédérale seulement** ; un média numérique indépendant n'y est vraisemblablement pas assujetti | 2019 | En vigueur |
| CAN/ASC-EN 301 549:2024 | Normes d'accessibilité Canada | Norme nationale TIC, identique à EN 301 549 (2021), intègre WCAG 2.1 AA | Mai 2024 | **Norme volontaire** |
| LAPHO (AODA), L.O. 2005, chap. 11, et Normes d'accessibilité intégrées, Règl. Ont. 191/11, art. 14 | Gouvernement de l'Ontario | Sites Web publics conformes à **WCAG 2.0 niveau AA** (et non 2.1) ; obligation au-delà de 50 employés ; rapport de conformité au-delà de 20 employés | Échéance 1er janv. 2021 ; dernier rapport connu au 31 déc. 2023, prochain annoncé au 31 déc. 2026 | En vigueur |
| Charte de la langue française, RLRQ c. C-11, art. 52 et 55 | OQLF ; poursuites par le DPCP | Art. 52 : publications commerciales, y compris sites web et réseaux sociaux — version française d'une qualité et d'une accessibilité **au moins égales** ; art. 55 : contrat d'adhésion remis d'abord en français | Art. 55 modifié en vigueur le 1er juin 2023 | En vigueur |
| Loi 96 (Loi sur la langue officielle et commune du Québec, le français), L.Q. 2022, c. 14 | OQLF | Réforme de la Charte ; francisation dès 25 employés ; marques de commerce | Sanctionnée le 1er juin 2022 ; volets en vigueur le 1er juin 2025 ; période de grâce produits jusqu'au 1er juin 2027 | En vigueur |

**Position recommandée par la fiche 06.** Viser **WCAG 2.1 AA volontairement**, comme norme éditoriale, sans invoquer d'obligation légale. Pour la langue : le risque n'est pas d'écrire en anglais, mais de publier en anglais **avant**, plus vite, ou mieux qu'en français.

### 3.7 Licences applicables à l'outillage d'Actio (fiche 09)

SIL Open Font License 1.1 (Newsreader, Inter, Source Serif 4, Literata, Spectral, IBM Plex, Public Sans) ; licence MIT (Ghost, Payload) ; GNU AGPL v3 (Listmonk) `[NV]` ; Sustainable Use License et n8n Enterprise License (n8n, « fair-code », auto-hébergement autorisé) `[NV]` ; Apache License 2.0 (Playwright) `[NV]` ; Licence du gouvernement ouvert – Canada `[NV]` version, date et clauses — **ne rien republier d'un régulateur au motif que c'est public tant que la licence n'est pas vérifiée**.
