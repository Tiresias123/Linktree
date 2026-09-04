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

---

## 4. Terminologie officielle bilingue Actio

Glossaire fusionné et dédoublonné des neuf fiches. **C'est la référence lexicale du média** : tout livrable s'y conforme, en français comme en anglais canadien. Référence terminologique externe citée par la fiche 05 : le *Vocabulaire de la cryptomonnaie* de l'Office québécois de la langue française, produit avec la collaboration de l'Autorité des marchés financiers.

### Règles d'usage transversales (issues des neuf fiches)

1. **« Cryptoactif », jamais « crypto-monnaie »** dans un texte juridique ou analytique. Exception : employer **« monnaie virtuelle »** lorsqu'on cite la LRPCFAT, qui emploie ce terme.
2. **« OCRI » en français, « CIRO » en anglais** — jamais l'inverse. Ne pas employer « OCRCVM » ni « ACFM » au présent : ces organismes ont fusionné.
3. **Ne pas confondre les trois familles de sanctions administratives** : **pénalité administrative pécuniaire (PAP)** au CANAFE ; **sanction administrative pécuniaire (SAP)** au CRTC et à la CAI ; **pénalité administrative** au TMF. Aucune n'est une « amende » : l'amende est pénale et relève d'un régime distinct.
4. **« Inscription »**, jamais « licence », « agrément » ou « permis » pour les valeurs mobilières et le CANAFE. Le mot **« permis »** est réservé à l'ESM québécoise.
5. **« Infolettre »**, jamais « newsletter ». **« Fil RSS »**, **« moissonnage du Web »**, **« système de gestion de contenu découplé »**.
6. **« Cryptomonnaie stable »** en corps de texte, avec l'équivalent anglais entre parenthèses à la première occurrence.
7. Distinguer **« résidence des données »** et **« souveraineté des données »**.
8. Écrire « ARC » et « Revenu Québec », jamais « le fisc » dans un texte d'analyse.

### 4.1 Autorités, organismes et tribunaux

| Français | English (Canada) |
|---|---|
| Autorités canadiennes en valeurs mobilières (ACVM) | Canadian Securities Administrators (CSA) |
| Autorité des marchés financiers (AMF) | Autorité des marchés financiers (AMF) |
| Commission des valeurs mobilières de l'Ontario (CVMO) | Ontario Securities Commission (OSC) |
| Organisme canadien de réglementation des investissements (OCRI) | Canadian Investment Regulatory Organization (CIRO) |
| organisme d'autoréglementation | self-regulatory organization (SRO) |
| Tribunal administratif des marchés financiers (TMF) | Financial Markets Administrative Tribunal (FMAT) |
| Tribunal des marchés financiers (Ontario) | Capital Markets Tribunal |
| Cour canadienne de l'impôt | Tax Court of Canada |
| Centre d'analyse des opérations et déclarations financières du Canada (CANAFE) | Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) |
| Agence du revenu du Canada (ARC) | Canada Revenue Agency (CRA) |
| Bureau du surintendant des institutions financières (BSIF) | Office of the Superintendent of Financial Institutions (OSFI) |
| Conseil de la radiodiffusion et des télécommunications canadiennes (CRTC) | Canadian Radio-television and Telecommunications Commission (CRTC) |
| Commissariat à la protection de la vie privée du Canada | Office of the Privacy Commissioner of Canada |
| Commission d'accès à l'information (CAI) | Commission d'accès à l'information (CAI) |
| Office québécois de la langue française (OQLF) | Office québécois de la langue française (OQLF) |
| Bureau de la concurrence | Competition Bureau |
| gouverneur en conseil | Governor in Council |
| Pôle d'innovation financière des ACVM (Pôle FinOv) | CSA Financial Innovation Hub (FinHub) |
| bac à sable réglementaire | regulatory sandbox |

### 4.2 Textes, instruments et procédure législative

| Français | English (Canada) |
|---|---|
| Loi sur les valeurs mobilières (Ontario) | Securities Act (Ontario) |
| Règlement 31-103 (Qc) / Norme canadienne 31-103 | National Instrument 31-103 |
| Règlement 81-102 sur les fonds d'investissement | National Instrument 81-102 Investment Funds |
| Règles visant les courtiers en placement et règles partiellement consolidées (Règles CPPC) | Investment Dealer and Partially Consolidated Rules (IDPC Rules) |
| avis du personnel | staff notice |
| note d'orientation | guidance note |
| Loi sur le recyclage des produits de la criminalité et le financement des activités terroristes (LRPCFAT) | Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA) |
| Loi sur les activités associées aux paiements de détail (LAAPD) | Retail Payment Activities Act (RPAA) |
| Loi de l'impôt sur le revenu (LIR) | Income Tax Act (ITA) |
| Loi sur la taxe d'accise (LTA) | Excise Tax Act (ETA) |
| Loi canadienne anti-pourriel (LCAP) | Canada's Anti-Spam Legislation (CASL) |
| Loi sur les nouvelles en ligne | Online News Act |
| Loi sur l'accessibilité pour les personnes handicapées de l'Ontario (LAPHO) | Accessibility for Ontarians with Disabilities Act (AODA) |
| Normes d'accessibilité intégrées | Integrated Accessibility Standards Regulation (IASR) |
| Règles pour l'accessibilité des contenus Web (WCAG) | Web Content Accessibility Guidelines (WCAG) |
| sanction royale | Royal Assent |
| Gazette du Canada, Partie I / Partie II | Canada Gazette, Part I / Part II |

### 4.3 Valeurs mobilières, inscription et encadrement des plateformes

| Français | English (Canada) |
|---|---|
| plateforme de négociation de cryptoactifs (PNC) | crypto asset trading platform (CTP) |
| contrat de cryptoactif | crypto contract |
| contrat d'investissement | investment contract |
| valeur mobilière | security |
| dérivé / contrat dérivé | derivative |
| inscription | registration |
| personne inscrite | registrant |
| courtier restreint (courtier d'exercice restreint) | restricted dealer |
| courtier en placement | investment dealer |
| courtier membre | dealer member |
| engagement préalable (à l'inscription) | pre-registration undertaking (PRU) |
| conditions d'inscription | terms and conditions of registration |
| dispense | exemptive relief |
| dispense de prospectus | prospectus exemption |
| connaissance du client | know your client (KYC) |
| convenance | suitability |
| garde | custody |
| garde d'actifs numériques | digital asset custody |
| autogarde | self-custody |
| dépositaire acceptable / dépositaire qualifié | acceptable custodian / qualified custodian |
| ségrégation des actifs des clients | segregation of client assets |
| stockage hors ligne / portefeuille froid | offline storage / cold wallet |
| fonds négocié en bourse (FNB) | exchange-traded fund (ETF) |
| OPC alternatif | alternative mutual fund |
| fonds d'investissement à capital fixe | non-redeemable investment fund |
| placement admissible / non admissible | qualified / non-qualified investment |
| régime enregistré (REER, CELI, CELIAPP) | registered plan (RRSP, TFSA, FHSA) |

### 4.4 Cryptoactifs — objets, technologie et opérations

| Français | English (Canada) |
|---|---|
| cryptoactif | crypto asset / crypto-asset |
| monnaie virtuelle (terme de la LRPCFAT) | virtual currency |
| cryptoactif arrimé à une valeur (CAV) | value-referenced crypto asset (VRCA) |
| cryptomonnaie stable (adossée à une monnaie fiduciaire) | (fiat-backed) stablecoin |
| effet de paiement virtuel (terme de la LTA) | virtual payment instrument |
| jeton non fongible (JNF) | non-fungible token (NFT) |
| jeton de gouvernance | governance token |
| jeton utilitaire | utility token |
| chaîne de blocs | blockchain |
| registre distribué | distributed ledger |
| portefeuille numérique | (digital) wallet |
| minage / activité de minage | mining / mining activity |
| jalonnement | staking |
| largage | airdrop |
| monnaie numérique de banque centrale (MNBC) | central bank digital currency (CBDC) |
| dollar canadien numérique | digital Canadian dollar |

### 4.5 LBC-FT et paiements

| Français | English (Canada) |
|---|---|
| entreprise de services monétaires (ESM) | money services business (MSB) |
| entreprise de services monétaires étrangère (ESME) | foreign money services business (FMSB) |
| négociation de monnaie virtuelle | dealing in virtual currency |
| permis d'exploitation (ESM, Québec) | operating permit / licence |
| entité déclarante | reporting entity |
| déclaration d'opérations importantes en monnaie virtuelle (DOIMV) | large virtual currency transaction report (LVCTR) |
| déclaration d'opérations douteuses (DOD) | suspicious transaction report (STR) |
| règle d'acheminement | travel rule |
| règle de 24 heures | 24-hour rule |
| programme de conformité | compliance program |
| agent de conformité | compliance officer |
| évaluation des risques | risk assessment |
| vérification de l'identité | identity verification |
| tenue de documents | record keeping |
| bénéficiaire effectif | beneficial owner |
| personne politiquement vulnérable (PPV) | politically exposed person (PEP) |
| fournisseur de services de paiement (FSP) | payment service provider (PSP) |
| services bancaires axés sur les consommateurs | consumer-driven banking (open banking) |

### 4.6 Fiscalité

| Français | English (Canada) |
|---|---|
| disposition | disposition |
| gain en capital / perte en capital | capital gain / capital loss |
| revenu d'entreprise | business income |
| projet comportant un risque de caractère commercial | adventure or concern in the nature of trade |
| prix de base rajusté (PBR) | adjusted cost base (ACB) |
| juste valeur marchande (JVM) | fair market value (FMV) |
| bien étranger déterminé | specified foreign property |
| Bilan de vérification du revenu étranger (T1135) | Foreign Income Verification Statement (T1135) |
| crédit de taxe sur les intrants (CTI) | input tax credit (ITC) |
| fourniture exonérée / taxable | exempt / taxable supply |
| Cadre de déclaration des cryptoactifs (CDC) — variantes « CDA » et « cadre de déclaration des crypto-actifs » `[C-17]` | Crypto-Asset Reporting Framework (CARF) |
| fournisseur de services de cryptoactifs | crypto-asset service provider (CASP) |
| Norme commune de déclaration (NCD) | Common Reporting Standard (CRS) |

### 4.7 Vie privée, courriel commercial et accessibilité

| Français | English (Canada) |
|---|---|
| message électronique commercial (MEC) | commercial electronic message (CEM) |
| consentement exprès | express consent |
| consentement tacite | implied consent |
| relation d'affaires en cours | existing business relationship |
| relation privée en cours | existing non-business relationship |
| publication bien en vue | conspicuous publication |
| mécanisme d'exclusion (désabonnement) | unsubscribe mechanism |
| diligence raisonnable | due diligence |
| droit privé d'action | private right of action |
| renseignement personnel | personal information |
| responsable de la protection des renseignements personnels | person in charge of the protection of personal information |
| évaluation des facteurs relatifs à la vie privée (EFVP) | privacy impact assessment (PIA) |
| incident de confidentialité | confidentiality incident |
| atteinte aux mesures de sécurité | breach of security safeguards |
| risque réel de préjudice grave | real risk of significant harm |
| droit à la portabilité | right to data portability |
| confidentialité par défaut | privacy by default |
| contrat d'adhésion | contract of adhesion |

### 4.8 Sanctions, exécution et procédure

| Français | English (Canada) |
|---|---|
| pénalité administrative pécuniaire (PAP) — CANAFE | administrative monetary penalty (AMP) |
| sanction administrative pécuniaire (SAP) — CRTC, CAI | administrative monetary penalty (AMP) |
| pénalité administrative — TMF | administrative penalty |
| procès-verbal de violation | notice of violation |
| engagement | undertaking |
| mise en garde | investor warning |
| ordonnance de blocage | freeze order |
| ordonnance d'interdiction d'opérations sur valeurs | cease trade order |
| interdiction de participation aux marchés financiers | market participation ban |
| remise des sommes obtenues | disgorgement |
| entente de règlement / exposé des allégations | settlement agreement / statement of allegations |

### 4.9 Média, publicité et déontologie

| Français | English (Canada) |
|---|---|
| indication fausse ou trompeuse | false or misleading representation |
| lien matériel (à divulguer) | material connection |
| contenu commandité | sponsored content |
| lien d'affiliation | affiliate link |
| mise en garde sur les risques | risk warning |
| infolettre | newsletter |

### 4.10 Technique, design et données

| Français | English (Canada) |
|---|---|
| police de caractères | typeface / font |
| graisse | weight |
| chiffres tabulaires | tabular figures |
| police à empattements / sans empattement | serif / sans serif typeface |
| interlignage | leading / line height |
| corps | font size |
| hiérarchie typographique | typographic hierarchy |
| grille de mise en page | layout grid |
| mode sombre | dark mode |
| système de gestion de contenu découplé | headless content management system |
| interface de programmation d'applications (API) | application programming interface |
| fil RSS | RSS feed |
| moissonnage du Web | web scraping |
| délivrabilité | deliverability |
| résidence des données | data residency |
| souveraineté des données | data sovereignty |
| zone de disponibilité | availability zone |

### 4.11 Termes signalés comme à revérifier auprès du glossaire officiel

`account appropriateness` (adéquation du compte), `specified crypto asset`, `Acceptable Securities Location` (emplacement de titres agréé) : traductions proposées par la fiche 03, **non confirmées** sur les versions françaises des avis des ACVM et des Règles CPPC. « Cryptoactif à valeur stable », « courtier restreint » et « engagement préalable » sont également signalés à revérifier par la fiche 08. Formulation française de la nouvelle violation très grave de C-12 (« raisonnablement conçu, fondé sur les risques et efficace ») : traduction de travail. Titre français de la loi fédérale sur les cryptomonnaies stables : non vérifié `[C-08]`.

---

## 5. Registre des incertitudes — INTERDICTION D'AFFIRMER

**Règle de fer.** Rien de ce qui figure dans cette section ne peut être affirmé dans un livrable Actio. Chaque ligne indique la formulation prudente à employer à la place, ou l'obligation de vérification préalable. Une ligne sortie de ce registre suppose la lecture du texte primaire et la mention de la date de consultation.

### 5.1 Contradictions entre fiches

| Réf. | Point contredit | Fiches en cause et versions | Formulation prudente à employer |
|---|---|---|---|
| C-01 | Date de l'Avis 21-327 des ACVM | Fiche 01, interne : nom du fichier OSC `csa_20200116` → 16 janvier 2020 ; un résumé indique le 18 janvier 2020 | « l'Avis 21-327 du personnel des ACVM, publié en janvier 2020 » — ne pas donner le jour avant lecture du PDF |
| C-02 | Date de l'Avis conjoint 21-329 | Fiche 01 : « mars 2021 », jour non vérifié ; fiche 02 : 29 mars 2021 | « l'Avis conjoint 21-329, publié en mars 2021 » |
| C-03 | Date de l'Avis conjoint 21-330 | Fiche 01 : 23 septembre 2021 ; fiche 08 : « 2022 (jour non revérifié) » | « l'Avis conjoint 21-330 sur la publicité, le marketing et les médias sociaux » — sans millésime tant que le PDF n'est pas ouvert |
| C-04 | Autorité délivrant le permis d'ESM au Québec | Fiche 02 : Revenu Québec depuis le 13 septembre 2021, l'erreur inverse étant « la plus fréquente dans la presse spécialisée » ; fiche 04 : tableau attribuant la LESM à l'AMF, et incertitude propre signalant un doute AMF / Revenu Québec / Sûreté du Québec | « le permis québécois d'entreprise de services monétaires, distinct de l'inscription en valeurs mobilières » — vérifier l'autorité délivrante sur revenuquebec.ca avant de la nommer |
| C-05 | État du régime de courtier restreint en 2026 | Fiches 01, 02, 03 et 04 : approche intérimaire close depuis le 6 août 2024, nouveaux engagements préalables plus acceptés ; fiche 07 : « les plateformes continuent d'opérer sous engagement préalable puis inscription à titre de courtier restreint » | « depuis le communiqué conjoint du 6 août 2024, les ACVM et l'OCRI attendent des plateformes qu'elles déposent une demande d'inscription de courtier en placement ; le sort des inscriptions de courtier restreint encore actives n'est pas documenté » |
| C-06 | Calendrier du Cadre de déclaration des cryptoactifs | Fiches 04 et 05 : application reportée au 1er janvier 2027 (Budget de 2025) ; fiche 07 : collecte dès le 1er janvier 2026, premières déclarations à l'ARC en 2027 pour l'année civile 2026 ; fiche 05 signale par ailleurs trois versions concurrentes | « le calendrier du CDC a été modifié par le Budget de 2025 ; la date d'application doit être lue dans le texte adopté de la partie XXI de la LIR » — ne publier aucune date |
| C-07 | Projet de loi C-31 : date de dépôt et objet | Fiche 03 : déposé le 6 mai 2026, présenté comme portant sur les placements admissibles ; fiche 05 : *Loi n° 2 d'exécution du budget de 2025*, 2e lecture le 3 juin 2026 ; fiche 07 : déposé le 7 mai 2026, met en œuvre le CARF | « le projet de loi C-31 (45e législature, 1re session), deuxième loi d'exécution du budget de 2025 » — vérifier date de dépôt et contenu sur LEGISinfo |
| C-08 | Titre français de la loi fédérale sur les cryptomonnaies stables | Fiches 01 et 04 : « Loi sur les stablecoins » ; fiche 07 : « Loi sur les cryptomonnaies stables », expressément signalée comme traduction plausible non vérifiée | « le régime fédéral des cryptomonnaies stables édicté par le projet de loi C-15 » — ne pas citer de titre officiel avant lecture du texte bilingue |
| C-09 | Date de la Mise à jour économique du printemps 2026 | Fiche 04 : publiée le 28 avril 2026 ; fiche 07 : deux dates circulent, 28 avril 2026 et 6 mai 2026 | « la Mise à jour économique du printemps 2026 » — sans date |
| C-10 | Sanction Xeltox Enterprises Ltd. (Cryptomus) | Montant de 176 960 190 $ corroboré ; fiche 04 : 1 518 défauts de DOIMV selon une source, 2 593 violations selon une autre, date d'imposition possible du 16 octobre 2025 ; fiche 07 : 2 593 manquements, six types, avis du 22 octobre 2025 | « une pénalité administrative pécuniaire de 176 960 190 $ annoncée par le CANAFE le 22 octobre 2025 » — ne pas chiffrer les manquements |
| C-11 | Montants des sanctions sous la Loi 25 | Fiche 06 : SAP jusqu'à 10 M$ ou 2 % du chiffre d'affaires mondial, amende pénale jusqu'à 25 M$ ou 4 %, une source secondaire donnant 10 M$ ou 4 % pour la SAP ; fiche 02 : versions expressément qualifiées de contradictoires | « la Loi 25 prévoit des sanctions administratives pécuniaires et des amendes pénales dont les plafonds sont fixés par la loi » — vérifier les montants sur legisquebec avant de les citer |
| C-12 | Entrée en vigueur du régime de SAP de la CAI | Fiche 02 : 22 septembre 2023 selon une source, septembre 2024 selon une autre | « depuis l'entrée en vigueur du volet de la Loi 25 relatif aux sanctions » — sans date |
| C-13 | Nature et contenu du document OCRI 26-0033 | Fiche 01 : « bulletin administratif », paliers et seuils décrits comme « mutuellement contradictoires selon les formulations » (quatre paliers 100 %, 100 %, 75 %, 40 % ; autogarde 20 % ; capital 10 M$ / 100 M$ / 150 M$) ; fiche 03 : « note d'orientation », affirmant quatre niveaux et une autogarde plafonnée à 20 % | « le cadre de garde des actifs numériques publié par l'OCRI le 3 février 2026, qui classe les dépositaires par paliers et limite l'autogarde » — aucun pourcentage, aucun seuil de capital |
| C-14 | Révocations d'inscriptions d'ESM en 2026 | Fiche 04 : 23 au 17 mars 2026 ; 51 au 24 mars 2026 ; « plus de 50 en 2026, dont 47 liées aux cryptoactifs » | « le CANAFE a procédé en 2026 à des révocations d'inscription d'entreprises de services monétaires, dont plusieurs actives dans les cryptoactifs » — sans chiffre |
| C-15 | Deux projets de loi portant le numéro C-30 | Fiche 05 : C-30 (43e législature, 2e session), *Loi n° 1 d'exécution du budget de 2021*, sanctionné le 29 juin 2021 ; fiche 04 : « projet de loi C-30 de mise en œuvre » de la Mise à jour économique du printemps 2026 | Toujours accompagner un numéro de projet de loi de sa législature et de sa session ; ne jamais écrire « C-30 » seul |
| C-16 | Sort du projet de loi C-2 (*Loi sur les frontières sûres*) | Fiche 04 : sanctionné le 26 mars 2026 selon une source ; mesures reprises et accélérées dans C-12 selon une autre ; dispositions réintroduites dans C-22 selon une troisième | Ne pas mentionner C-2 tant que LEGISinfo n'a pas été consulté |
| C-17 | Sigle français du Crypto-Asset Reporting Framework | Fiche 04 : « cadre de déclaration des crypto-actifs (CARF) » ; fiche 05 : « Cadre de déclaration des cryptoactifs (CDC) » ; fiche 07 : « Cadre de déclaration des cryptoactifs (CDA) » | Écrire « le Cadre de déclaration des cryptoactifs (Crypto-Asset Reporting Framework, CARF) » et n'employer aucun sigle français tant que la version française officielle n'est pas vérifiée |

### 5.2 Incertitudes — valeurs mobilières et plateformes

| Réf. | Ce qui n'est pas établi | Formulation prudente |
|---|---|---|
| U-01 | Limite d'achat annuelle nette de 30 000 $ CA pour les cryptoactifs autres que bitcoin, ether, litecoin et bitcoin cash ; exemptions provinciales alléguées (C.-B., Alberta, Manitoba, Québec) issues d'un article de 2022, probablement périmées | « certaines plateformes sont assujetties à des limites d'achat annuelles fixées **dans leurs conditions d'inscription** » — ne jamais citer de plafond sans avoir lu la décision d'inscription de la plateforme visée |
| U-02 | Seuil de 80 % d'actifs clients confiés à un dépositaire tiers acceptable (dispense standard ACVM) | « les plateformes sont tenues de confier une part majoritaire des actifs de leurs clients à un dépositaire acceptable » |
| U-03 | Paliers de garde du cadre OCRI 26-0033, plafonds d'actifs clients, seuils de capital minimal et régime transitoire | Voir C-13 : aucun chiffre |
| U-04 | Report de l'échéance des cryptoactifs arrimés à une valeur du 30 avril au 31 octobre 2024 ; échéance du 1er décembre 2023 pour les engagements d'émetteurs | « le régime intérimaire de l'Avis 21-333 a fait l'objet de prorogations d'échéance » |
| U-05 | Sort des inscriptions de courtier restreint encore actives en 2026 (expiration, prorogation, conversion) | « le sort des inscriptions de courtier restreint encore en vigueur n'est pas documenté publiquement » |
| U-06 | Existence d'une consultation des ACVM en 2025-2026 sur un cadre permanent des plateformes | « aucun règlement permanent des ACVM propre aux plateformes n'a été identifié ; l'absence de preuve n'est pas une preuve d'absence » |
| U-07 | Noms des plateformes autorisées et proscrites (Coinbase Canada, Coinsquare Capital Markets, Wealthsimple Investments, Webull Canada Crypto, VirgoCX, Shakepay ; XT.COM, LiquiTrade/LATOKEN) | Renvoyer systématiquement aux deux listes officielles des ACVM, sans reproduire de nom depuis une source secondaire |
| U-08 | Shakepay première plateforme québécoise membre de l'OCRI (janvier 2025) ; dispense à QCAD Digital Trust (20 novembre 2025) | Ne pas mentionner avant lecture de la décision |
| U-09 | Nombre de PNC inscrites en Ontario et nombre ayant obtenu l'adhésion à l'OCRI au 4 septembre 2026 ; instantané ACVM du 17 février 2025 (5 membres OCRI, 8 courtiers restreints, 6 sous engagement préalable), probablement périmé | « le nombre de plateformes inscrites évolue ; se reporter aux listes des ACVM à la date de consultation » |
| U-10 | Statut législatif du projet de *Capital Markets Act* (Ontario) au 4 septembre 2026 | « l'avant-projet de *Capital Markets Act* n'a pas été adopté ; son état d'avancement doit être vérifié » |
| U-11 | Dates d'approbation et montants exacts des règlements ontariens : Aux Cayes / OKX, Polymarket (avril 2025 selon une source secondaire), Phemex ; frais dans l'ordonnance KuCoin (source comportant une coquille manifeste) | Décrire les affaires sans montant ni date tant que l'ordonnance n'est pas lue |
| U-12 | Titre français officiel et numérotation française du document OCRI 26-0033 ; date de publication du Rapport sur la conformité 2026 de l'OCRI | « le cadre de garde publié par l'OCRI en février 2026 » ; « le rapport de conformité de l'OCRI pour 2026 » |
| U-13 | Date d'adoption formelle de la dénomination « OCRI / CIRO » après la fusion du 1er janvier 2023 | « l'OCRI, né de la fusion de l'OCRCVM et de l'ACFM en 2023 » |
| U-14 | Portée de l'obligation de publication bilingue de la CVMO ; plusieurs publications de la CVMO ne paraissent qu'en anglais | Vérifier l'existence d'une version française d'un document de la CVMO **avant** de le citer en français |
| U-15 | Liste complète et à jour des FNB de cryptoactifs cotés à la TSX en 2026 ; les données disponibles portent sur 2025 (FNB Solana au comptant du 16 avril 2025 ; FNB XRP de 3iQ du 17 juin 2025) | « des FNB de cryptoactifs au comptant sont cotés au Canada depuis 2025 » — sans liste ni date de lancement |

### 5.3 Incertitudes — Québec

| Réf. | Ce qui n'est pas établi | Formulation prudente |
|---|---|---|
| U-16 | Alinéa exact de l'art. 1 de la *Loi sur les valeurs mobilières* (RLRQ c. V-1.1) définissant le « contrat d'investissement » | « la notion de contrat d'investissement de la *Loi sur les valeurs mobilières* » — sans renvoi d'alinéa |
| U-17 | Numéros de dossier et références neutres des décisions du TMF dans *Gagnon* (22 août 2025) et *iGenius* (28 août 2025) | Nommer les parties et la date, sans référence neutre |
| U-18 | Existence, état et issue d'un appel de l'AMF dans *Gagnon* ; une source indique que l'AMF « étudiait la possibilité d'en appeler » | « la décision pourrait faire l'objet d'un appel ; aucune information vérifiée n'est disponible » |
| U-19 | Date d'entrée en vigueur de la catégorie ESM « guichets automatiques de cryptoactifs » et libellé exact des catégories de la LESM | « la LESM prévoit des catégories de services monétaires liées aux cryptoactifs » |
| U-20 | Loi habilitante de l'AMF (titre exact et référence, possiblement *Loi sur l'encadrement du secteur financier*, RLRQ c. E-6.1) | Ne pas citer la loi habilitante |
| U-21 | Existence d'un « Registre des plateformes de négociation de cryptoactifs » distinct tenu par l'AMF | Ne pas mentionner ce registre |
| U-22 | Statistiques d'exécution de l'AMF 2025-2026 (87 personnes sanctionnées, plus de 7,7 M$ dont 7,28 M$ de pénalités du TMF, 229 mises en garde, 19 ordonnances de blocage, 105 ordonnances d'interdiction), issues de la presse spécialisée | « l'AMF publie chaque année un bilan de son activité d'exécution » — aucun chiffre avant lecture du rapport annuel |
| U-23 | Montants des amendes pénales de la Charte de la langue française (3 000 $ à 30 000 $ par infraction pour une personne morale) | « la Charte prévoit des amendes pénales dont les montants varient selon la nature du contrevenant » |
| U-24 | Aucune décision québécoise de 2026 n'a été identifiée : la base peut être en retard de plusieurs mois sur l'état du droit | Toujours dater l'arrêté des données et signaler que la veille québécoise 2026 est incomplète |

### 5.4 Incertitudes — LBC-FT

| Réf. | Ce qui n'est pas établi | Formulation prudente |
|---|---|---|
| U-25 | Numéros d'articles du RRPCFAT relatifs à la règle d'acheminement et à la DOIMV (art. 66.1 ou 124.1 selon les sources) | Décrire l'obligation sans citer de numéro d'article |
| U-26 | Titre officiel bilingue et numéro de chapitre des L.C. du projet de loi C-12 | « le projet de loi C-12, sanctionné le 26 mars 2026 » |
| U-27 | Dates d'entrée en vigueur par décret des volets de C-12 (inscription universelle, accords de conformité) ; parution effective des règlements dans la *Gazette du Canada* | « plusieurs volets de C-12 entrent en vigueur par décret ; leur calendrier doit être vérifié » — ne jamais dater une mesure au jour de son annonce |
| U-28 | Formulation française exacte de la nouvelle violation très grave | Paraphraser : « un programme de conformité qui n'est pas efficace » — sans guillemets |
| U-29 | Pénalité administrative pécuniaire contre Peken Global Limited (KuCoin), environ 20 M$ en 2025 : montant et date | Ne pas mentionner |
| U-30 | Modifications réglementaires entrées en vigueur le 1er octobre 2025 (contrôle des mandataires d'ESM, services d'acquisition pour guichets privés), rapportées par des sources commerciales seulement | Ne pas affirmer |
| U-31 | Renouvellement biennal de l'inscription d'ESM et gratuité de l'inscription fédérale, rapportés par des sources commerciales | « l'inscription auprès du CANAFE est déclarative » — vérifier la périodicité et les frais |
| U-32 | Interdiction des guichets automatiques de cryptomonnaie : véhicule législatif, portée et état d'avancement | « une interdiction des guichets automatiques de cryptomonnaie a été annoncée dans la Mise à jour économique du printemps 2026 ; elle n'est pas en vigueur » |
| U-33 | Statut parlementaire du projet de loi C-29 (Agence des crimes financiers) au 4 septembre 2026 | « l'Agence des crimes financiers est un projet ; elle n'existe pas » |

### 5.5 Incertitudes — fiscalité

| Réf. | Ce qui n'est pas établi | Formulation prudente |
|---|---|---|
| U-34 | Statut d'adoption du projet de loi C-31 au 4 septembre 2026 (2e lecture le 3 juin 2026 ; sanction royale non confirmée) | « le projet de loi C-31 était en cours d'adoption ; vérifier son état sur LEGISinfo » |
| U-35 | Numérotation exacte des articles de la partie XXI de la LIR et des dispositions pénales du CDC | Aucun numéro d'article |
| U-36 | Date de sanction royale et chapitre des L.C. du projet de loi C-15 (indiqué L.C. 2026, ch. 3) ; contenu fiscal exact en matière de cryptoactifs | « le projet de loi C-15, sanctionné en mars 2026 » — sans citation de chapitre |
| U-37 | Position formelle de l'ARC sur le jalonnement, les jetons de gouvernance et la finance décentralisée | « la pratique dominante des cabinets et des CPA retient l'inclusion au revenu de la juste valeur marchande à la réception ; l'ARC n'a publié aucune ligne directrice formelle » — ne jamais attribuer cette position à l'ARC |
| U-38 | Traitement TPS/TVH des commissions et frais de plateforme (fourniture taxable ou service financier exonéré) | « le traitement des commissions de plateforme est débattu » |
| U-39 | Date de dernière mise à jour des pages de l'ARC sur les cryptoactifs et de la page « Les cryptoactifs » de Revenu Québec | Dater la consultation, jamais la page |
| U-40 | Renvoi législatif de l'impôt de 50 % frappant un placement non admissible détenu dans un régime enregistré | « un impôt correspondant à 50 % de la juste valeur marchande du placement non admissible » — sans renvoi |
| U-41 | Portée précise de l'allègement d'avril 2025 du formulaire TP-21.4.39 et modifications éventuelles pour l'année d'imposition 2025 | « le formulaire a fait l'objet d'un allègement annoncé en 2025 ; en vérifier la portée » |
| U-42 | Harmonisation du Québec au Cadre de déclaration des cryptoactifs | Ne pas affirmer d'harmonisation |
| U-43 | Existence d'une décision d'appel dans *Amicarelli* et détail du raisonnement au-delà du dispositif rapporté | « la décision, rendue le 9 décembre 2025, n'a pas été lue intégralement » |
| U-44 | Chiffres de vérification de l'ARC (équipe de vérification crypto, sommes récupérées) | « les cabinets signalent une intensification des vérifications » — sans chiffre |
| U-45 | Date d'effet réputée de l'« effet de paiement virtuel » (18 mai 2019, fournitures effectuées après le 17 mai 2019) | « la définition a un effet rétroactif ; en vérifier la date sur le texte de la LTA » |

### 5.6 Incertitudes — courriel commercial, vie privée, accessibilité

| Réf. | Ce qui n'est pas établi | Formulation prudente |
|---|---|---|
| U-46 | Numéros d'articles de la LCAP : seul l'art. 33 (diligence raisonnable) est confirmé ; art. 6, 10(9), 10(10), 11, 13, 20(4), 31, 32 et 47-51 non vérifiés | Décrire les obligations sans renvoi d'article, sauf l'art. 33 |
| U-47 | Citation exacte et titre long officiel de la LCAP (« L.C. 2010, ch. 23 » est la citation d'usage) | « la Loi canadienne anti-pourriel » |
| U-48 | Date précise d'entrée en vigueur de la LCAP (1er juillet 2014 ; 15 janvier 2015 pour l'installation de programmes d'ordinateur) | « en vigueur depuis 2014 » |
| U-49 | Numéro et date du décret suspendant le droit privé d'action | « le droit privé d'action a été suspendu par décret avant son entrée en vigueur prévue en 2017 et n'a pas été abrogé » |
| U-50 | Numéros d'articles de P-39.1 : art. 3.1, 3.3, 8.1, 9.1, 17 et 27 corroborés par des sources secondaires ; art. 3.5 à 3.8 et 14 non vérifiés ; libellé exact du délai de signalement d'un incident | Ne citer aucun article ; écrire « la loi impose de signaler avec diligence à la CAI et aux personnes concernées en cas de risque de préjudice sérieux » et rappeler qu'**aucun délai de 72 heures n'existe** |
| U-51 | Statistiques d'application du CRTC (260 avis de production et 33 lettres d'avertissement en 2024-2025 ; 152 603 plaintes au premier semestre 2025 ; 11 lettres, 96 avis de production et 2 demandes de préservation du 1er octobre 2025 au 31 mars 2026 ; plus de 3,2 M$ de SAP depuis 2014) | « le CRTC publie des rapports de mesure du rendement faisant état d'une activité soutenue » — sans chiffre |
| U-52 | Objet de la décision Conformité et Enquêtes et Télécom CRTC 2026-140, repérée dans l'index mais non lue | Ne pas mentionner avant lecture |
| U-53 | Numéro DORS et date d'entrée en vigueur du Règlement canadien sur l'accessibilité | Ne pas citer |
| U-54 | Date de recommandation W3C de WCAG 2.2 et reprise éventuelle dans EN 301 549 v4 | Ne pas mentionner WCAG 2.2 |
| U-55 | Absence d'obligation d'accessibilité du secteur privé au Québec (le standard SGQRI 008 vise les organismes publics) | « aucune obligation légale équivalente à la LAPHO n'a été identifiée au Québec pour le secteur privé » |
| U-56 | Statut du décret déclarant la loi québécoise « essentiellement similaire » à la LPRPDE après la Loi 25 ; articulation LPRPDE / Loi 25 pour une entreprise québécoise | « l'articulation entre la LPRPDE et la Loi 25 doit être vérifiée » |
| U-57 | État en 2026 de la Loi sur les nouvelles en ligne et du blocage des liens d'actualité par Meta au Canada | « la distribution des liens d'actualité sur certaines plateformes est entravée au Canada ; l'état de la situation en 2026 doit être vérifié » |
| U-58 | Exigences de la Charte de la langue française applicables à une infolettre bilingue diffusée au Québec : non recherchées par la fiche 06 | Traiter la question avant tout envoi ; ne rien affirmer aujourd'hui |

### 5.7 Incertitudes — cadre fédéral et flux de veille

| Réf. | Ce qui n'est pas établi | Formulation prudente |
|---|---|---|
| U-59 | Date d'entrée en vigueur de la loi fédérale sur les cryptomonnaies stables et contenu des règlements attendus | « la loi est édictée mais n'est pas en vigueur ; son entrée en vigueur dépend de décrets et de règlements » — ne jamais écrire que les émetteurs « doivent désormais » quoi que ce soit |
| U-60 | Consultation du ministère des Finances évoquée (30 jours, ouverte le 1er décembre 2025, sur les mesures transitoires et l'admissibilité des actifs de réserve), source secondaire de faible qualité | Ne pas publier |
| U-61 | Publication d'un projet de règlement sur les cryptomonnaies stables dans la *Gazette du Canada*, Partie I | « aucun projet de règlement n'a été repéré à ce jour » — sans affirmer qu'il n'en existe pas |
| U-62 | Existence d'un registre public des émetteurs de cryptomonnaies stables tenu par la Banque du Canada et obligation d'inscription simultanée comme ESM auprès du CANAFE | Ne pas affirmer |
| U-63 | Périmètre de la loi : sort des émetteurs étrangers servant le marché canadien, des cryptomonnaies stables algorithmiques et des jetons adossés à des marchandises ; exemptions croisées du triple enregistrement | « le périmètre exact du régime n'est pas tranché par les sources consultées » |
| U-64 | Nombre de FSP inscrits, refusés ou en traitement au registre de la Banque du Canada | « le registre est public et consultable » — sans chiffre |
| U-65 | Articulation entre le régime intérimaire des CAV (Avis 21-333) et le régime fédéral des cryptomonnaies stables ; un même jeton pourrait relever de deux régimes | Présenter comme une **question ouverte**, jamais comme une règle |
| U-66 | Existence de flux RSS pour l'ACVM, l'AMF, la CVMO, l'OCRI, le CANAFE, l'ARC, le BSIF et la Banque du Canada ; URL des flux individuels des Parties I et II de la *Gazette* ; URL de veille de l'AMF et de l'ARC | Ne pas promettre de couverture automatisée avant test réel de chaque flux |
| U-67 | Structure d'URL de la *Gazette du Canada*, Partie II (déduite, non confirmée) | Vérifier avant intégration dans un agrégateur |

### 5.8 Incertitudes — benchmark éditorial et outillage

| Réf. | Ce qui n'est pas établi | Formulation prudente |
|---|---|---|
| U-68 | Arborescence du site Cryptoast : les cinq entrées de menu proviennent de la fiche App Store de l'application, pas du site ; ordre des blocs de la page d'accueil et contenu au-dessus de la ligne de flottaison non observés ; existence d'un fil « à la une », d'un widget de cotations, d'un bloc infolettre en cours de lecture et densité publicitaire réelle non observés | Ne rien affirmer sur l'interface ; archiver une capture d'écran datée avant toute description |
| U-69 | Formulations exactes des bandeaux d'affiliation, des avertissements de risque et de la charte éditoriale de Cryptoast | Ne pas citer entre guillemets |
| U-70 | Chiffres d'audience de Cryptoast (10 M de visites annuelles, 500 000 abonnés, lancement en 2017) : auto-déclarés, non audités ; tarifs de l'académie (39 €/mois, 99 €/mois, promotions à -75/-80 %) : sources tierces, potentiellement périmées | « chiffres auto-déclarés par l'éditeur » ; ordres de grandeur seulement |
| U-71 | Droit français cité par Cryptoast (agrément CASP au 1er juillet 2026, fin du régime PSAN au 30 juin 2026) | Ne pas reprendre ; vérifier à la source française avant tout article comparatif |
| U-72 | **Lacune assumée** : aucun média canadien, francophone ou anglophone, n'a été analysé ; aucun comparateur canadien n'a été observé | Ne pas présenter le benchmark comme couvrant le marché canadien |
| U-73 | Direction artistique de The Block, Osler, McCarthy Tétrault et Stikeman Elliott ; grilles, densité d'information, échelles typographiques et jetons de mode sombre du FT et de Bloomberg ; date de la capture des polices Bloomberg | Ne présenter aucune grille ni palette de concurrent comme mesurée ; les préconisations typographiques de la fiche 09 sont des propositions, pas des observations |
| U-74 | Tarifs et délivrabilité comparée des solutions d'infolettre et d'hébergement (Ghost(Pro), Beehiiv, Mailgun, Resend, WordPress VIP, Sanity, Vercel, OVHcloud) ; fonctionnalités de Listmonk, Feedly et RSS.app | Aucun coût par abonné, aucun classement de délivrabilité |
| U-75 | Attribution des villes aux régions Azure `canadacentral` / `canadaeast` et zones de disponibilité `[PV]` ; régions de fonctions de Vercel au Canada ; engagements de résidence d'OVHcloud Beauharnois | « des régions canadiennes existent chez les grands fournisseurs » — préciser la couche (application, base, CDN, journaux) avant d'écrire « hébergé au Canada » |
| U-76 | Licence du gouvernement ouvert – Canada : version, date, clauses d'attribution et d'exclusion ; conditions d'utilisation et `robots.txt` des sites de l'ACVM, de l'AMF, de la CVMO et de l'OCRI | La licéité du moissonnage de ces sites **n'est pas établie** ; ne pas republier le texte intégral d'un avis de régulateur |
| U-77 | Chiffres tabulaires confirmés pour Newsreader et Inter seulement ; non vérifiés pour Source Serif 4, Literata, Spectral, Public Sans, Source Sans 3 et IBM Plex ; millésimes des licences OFL, AGPL, Sustainable Use et Apache | Vérifier avant d'inscrire une famille dans la charte |

---

## 6. Réservoir éditorial

Sujets remontés par les neuf fiches, classés par rubrique pressentie et par niveau. **Aucun de ces sujets n'est publiable sans passage par la section 5.**

### 6.1 Valeurs mobilières et plateformes (pancanadien)

| Niveau | Sujet | Origine |
|---|---|---|
| Actualité | Sortie effective du régime de courtier restreint : combien de plateformes ont obtenu l'inscription de courtier en placement et l'adhésion à l'OCRI, à quel rythme | Fiches 01, 02, 03 |
| Actualité | La liste des plateformes proscrites comme baromètre d'exécution des ACVM | Fiche 01 |
| Actualité | Le rappel des ACVM du 22 octobre 2025 sur les prêts adossés à des cryptoactifs : extension du périmètre au jalonnement, au prêt et au rendement | Fiche 01 |
| Analyse | Le contrat de cryptoactif comme fiction juridique : ce n'est pas le jeton qui est une valeur mobilière, c'est la relation contractuelle née de l'absence de livraison immédiate ; absence de critère net | Fiches 01, 03 |
| Analyse | Un cadre bâti sur des avis du personnel, des conditions d'inscription et des dispenses au cas par cas : déficit de sécurité juridique et de contrôle judiciaire | Fiche 01 |
| Analyse | Le cadre de garde de l'OCRI 26-0033 : réglementation prudentielle substantielle produite par un organisme d'autoréglementation, imposée par conditions d'adhésion plutôt que par règle publiée ; son coût pour les plateformes de taille moyenne | Fiches 01, 03 |
| Analyse | Séparation des actifs et insolvabilité : l'OCRI exige un résultat sans prescrire de mécanique ; aucune décision canadienne ne valide encore le montage | Fiche 03 |
| Analyse | L'Avis 21-330 face au marketing d'influence et aux finfluenceurs | Fiches 01, 08 |
| Guide | Arbre de décision : quel régime s'applique à quelle activité (négociation, prêt, jalonnement, garde) | Fiches 01, 02 |
| Guide | Fiches d'instrument réglementaire par plateforme : statut d'inscription, province, autorité, date de décision, lien vers la source officielle | Fiche 08 |

### 6.2 Québec

| Niveau | Sujet | Origine |
|---|---|---|
| Actualité | Suites de *AMF c. Gagnon* : appel éventuel, application de la distinction aux finfluenceurs, au copy-trading et aux robots de négociation | Fiche 02 |
| Actualité | L'exécution par blocage d'accès via les télécommunicateurs (XT.com, CoinEx) et ses limites juridiques | Fiche 02 |
| Analyse | La portée de *Gagnon* : l'abonnement payant à un groupe de signaux n'est pas un contrat d'investissement, faute d'apport et parce que l'investisseur conserve son autonomie décisionnelle — lecture restrictive rapprochée de *SEC v. Ripple Labs* | Fiche 02 |
| Analyse | Le double régime AMF / Revenu Québec : pourquoi l'achat-vente de cryptoactifs n'est pas en soi un service de change, mais pourquoi l'approvisionnement en dollars et le retrait en devises en font un | Fiche 02 |
| Guide | Cartographie du double régime sous forme d'arbre de décision : inscription en valeurs mobilières, permis d'ESM, inscription au CANAFE | Fiches 02, 04 |
| Guide | Ce que la Charte de la langue française impose à un site commercial et à une infolettre : art. 52 (qualité et accessibilité au moins égales) et art. 55 (contrat d'adhésion remis d'abord en français) | Fiche 02 |

### 6.3 Ontario et autoréglementation

| Niveau | Sujet | Origine |
|---|---|---|
| Actualité | Le projet de droits exigibles de la CVMO (deux droits additionnels de 24 500 $) comme barrière à l'entrée pour les petites plateformes | Fiche 03 |
| Actualité | Le contentieux ontarien contre les plateformes extraterritoriales et son exécution réelle | Fiche 03 |
| Analyse | 26-0033 comme premier cadre de garde à paliers en Amérique du Nord, comparé aux régimes américain et européen | Fiche 03 |
| Analyse | Deux régimes de garde superposés : Règlement 81-102 pour un FNB (portefeuille froid, rapport de comptable public), cadre OCRI pour une plateforme — l'erreur la plus fréquente dans la presse | Fiche 03 |
| Analyse | Pourquoi l'avant-projet de *Capital Markets Act* rate la cible en se bornant à un pouvoir discrétionnaire de désignation | Fiche 03 |
| Guide | La chaîne de garde d'un FNB de cryptoactifs, du dépositaire au porteur de parts | Fiche 03 |

### 6.4 LBC-FT

| Niveau | Sujet | Origine |
|---|---|---|
| Actualité | Le calendrier d'entrée en vigueur échelonné de C-12 : quels décrets, quand, pour qui — besoin d'information n° 1 des équipes de conformité | Fiche 04 |
| Actualité | Les vagues de révocation d'inscriptions d'ESM comme signal de politique répressive | Fiche 04 |
| Actualité | L'interdiction annoncée des guichets automatiques de cryptomonnaie : mesure d'exception ou modèle exportable, et contestation possible | Fiches 04, 07 |
| Analyse | La nouvelle grille des PAP et le plafond de 3 % du revenu brut mondial : le calcul « au niveau du groupe » pour une filiale canadienne d'un groupe étranger | Fiche 04 |
| Analyse | Le programme de conformité « efficace » : passage d'une logique de cases cochées à une logique de résultat, et le risque d'un reproche fondé sur un volume de DOD inférieur à celui des pairs | Fiche 04 |
| Analyse | L'inscription universelle et son coût réel pour les petites entités | Fiche 04 |
| Analyse | L'extraterritorialité de l'inscription d'ESME : première source de non-conformité involontaire | Fiche 04 |
| Guide | Le seuil de 1 000 $ de la règle d'acheminement : une articulation réglementaire indirecte, tirée du déclencheur de tenue de documents | Fiche 04 |

### 6.5 Fiscalité

| Niveau | Sujet | Origine |
|---|---|---|
| Actualité | Le compte à rebours du Cadre de déclaration des cryptoactifs et la fenêtre de régularisation volontaire d'ici son application | Fiches 04, 05 |
| Actualité | La vague de vérifications T1135 documentée par les cabinets canadiens | Fiche 05 |
| Analyse | *Amicarelli* comme précédent structurant, et sa lecture inversée en marché haussier : la qualification de revenu d'entreprise joue dans les deux sens | Fiche 05 |
| Analyse | Le situs notionnel d'un actif porté par une chaîne de blocs : portefeuille auto-hébergé, plateforme non résidente, dépositaire canadien d'un groupe étranger — trois traitements potentiellement différents | Fiche 05 |
| Analyse | La fiscalité indirecte du minage : l'art. 188.2 LTA et ses effets de trésorerie massifs, sujet sous-couvert | Fiche 05 |
| Analyse | Le statut TPS/TVH incertain de plusieurs cryptomonnaies stables et jetons utilitaires au regard de l'exclusion des biens conférant un droit de rachat | Fiche 05 |
| Guide | Capital ou entreprise : les six facteurs d'IT-479R appliqués aux cryptoactifs | Fiche 05 |
| Guide | Le TP-21.4.39, particularité québécoise sans équivalent fédéral | Fiche 05 |
| Guide | Ce qu'on peut et ne peut pas détenir dans un régime enregistré : détention directe non admissible, FNB cotés admissibles, impôt de 50 % de la JVM | Fiches 03, 05 |

### 6.6 Cadre fédéral, paiements et prudentiel

| Niveau | Sujet | Origine |
|---|---|---|
| Actualité | La publication du projet de règlement sur les cryptomonnaies stables dans la *Gazette du Canada*, Partie I : admissibilité des actifs de réserve, seuils, périodes de transition — **Actio doit pouvoir couvrir la Partie I dans les 24 heures** | Fiche 07 |
| Actualité | Le décompte réel du registre des FSP de la Banque du Canada et le sort des demandes refusées | Fiche 07 |
| Actualité | Le relèvement du plafond du BSIF de 1 % à 5 % comme signal d'ouverture bancaire | Fiche 07 |
| Analyse | « Édicté » n'est pas « en vigueur » : le piège central du dossier fédéral | Fiche 07 |
| Analyse | La superposition non résolue : un même jeton peut relever de la Banque du Canada, des ACVM et de la LAAPD | Fiches 01, 07 |
| Analyse | La concentration des mandats à la Banque du Canada — paiements de détail, cryptomonnaies stables, services bancaires axés sur les consommateurs — pour une institution de culture monétaire, non de supervision de conduite | Fiche 07 |
| Guide | Le triple enregistrement d'un émetteur : Banque du Canada, CANAFE, LAAPD | Fiche 07 |

### 6.7 Média, publicité et déontologie

| Niveau | Sujet | Origine |
|---|---|---|
| Actualité | Les décisions de Conformité et Enquêtes du CRTC, engagements et procès-verbaux de violation : un régulateur d'application peu suivi par la presse crypto, donc un gisement d'articles | Fiche 06 |
| Actualité | Les premières sanctions significatives de la CAI sous la Loi 25 contre des acteurs financiers ou technologiques | Fiche 06 |
| Analyse | La frontière média / canal de commercialisation : un comparatif affilié mettant en avant une plateforme inscrite peut être analysé comme du matériel de marketing diffusé pour son compte | Fiche 08 |
| Analyse | Pourquoi un « comparatif canadien » unique est structurellement trompeur sans colonne juridiction | Fiche 08 |
| Analyse | Comparaison Canada / MiCA : angle rare, à forte valeur, que les médias francophones européens ne traitent pas | Fiche 08 |
| Guide | Le coût réel de conformité LCAP d'une infolettre financière : preuve du consentement exprès, adresse postale valide 60 jours, désabonnement traité en 10 jours ouvrables | Fiches 06, 09 |
| Guide | La divulgation des liens matériels : standard canadien de divulgation claire, proéminente et **spécifique par lien**, contre le bandeau conditionnel généralisé | Fiche 08 |

### 6.8 Données, technique et accès à l'information

| Niveau | Sujet | Origine |
|---|---|---|
| Actualité | La dépendance des médias canadiens à des fournisseurs d'envoi américains | Fiche 09 |
| Analyse | La résidence des données des plateformes inscrites au Canada : où vivent réellement les registres de clients, sachant qu'aucune frontière de métadonnées canadienne n'est offerte par certains fournisseurs de périphérie | Fiche 09 |
| Analyse | L'illisibilité machine des documents des régulateurs (PDF non structurés, fils RSS absents ou instables) comme obstacle concret à la veille | Fiche 09 |
| Analyse | L'ouverture des données réglementaires canadiennes comparée à l'ESMA et au Royaume-Uni | Fiche 09 |
| Guide | « Hébergé au Canada » : ce que la formule couvre et ne couvre pas, couche par couche (application, base, réseau de diffusion, journaux) | Fiche 09 |

### 6.9 Patrons éditoriaux à reprendre, adapter ou rejeter (fiche 08)

- **Reprendre** : socle de pages permanentes (lexique, fiches, guides par niveau) plutôt que le seul fil chaud ; méthodologie affichée des comparatifs (critères énoncés, tableau horodaté, renvoi au registre officiel) ; pages de gouvernance dédiées (transparence, situation financière) ; sérialisation numérotée des contenus pédagogiques ; infolettre comme canal propriétaire.
- **Adapter** : fiches d'instrument réglementaire au lieu de fiches de cotation ; colonne « juridiction » et date d'arrêté des données **en tête** de tableau ; bilinguisme conçu comme une paire d'URL à parité de contenu, non comme une traduction a posteriori ; avertissement de risque transformé en **encadré de portée** (ce que la fiche couvre, à quelle date, quelles provinces, et qu'elle ne constitue ni un avis juridique ni une recommandation) ; divulgation spécifique par lien plus page publique des partenariats.
- **Rejeter** : la promotion publiée comme article (compte à rebours, remises, « dernière chance ») ; le listicle prescriptif et les titres de sélection d'actifs ; l'affiliation sur des plateformes de négociation tant que le statut d'inscription au Canada n'est pas vérifié ; le sensationnalisme de titre et les chiffres d'audience auto-déclarés en argument d'autorité ; le millésime dans le titre, qui vieillit mal en droit ; la dérive hors périmètre.

---

## 7. Sources primaires et flux de veille

**Avertissement.** Sauf mention contraire, ces adresses ont été **repérées par recherche**, non ouvertes. **Un seul flux RSS a été confirmé** : la page d'index des flux de la *Gazette du Canada*. Pour tous les autres organismes, prévoir une surveillance par script des pages « nouvelles » ou « publications », après vérification des conditions d'utilisation et du `robots.txt` (voir U-76). La colonne « Fréquence » indique le rythme documenté par les fiches ; `[NV]` signale qu'aucun rythme n'a pu être établi.

| Source | URL | Type | Fréquence de publication | Rubrique Actio alimentée |
|---|---|---|---|---|
| ACVM — portail et salle de presse | autorites-valeurs-mobilieres.ca ; securities-administrators.ca | Page | `[NV]` | Valeurs mobilières et plateformes |
| ACVM — plateformes autorisées | autorites-valeurs-mobilieres.ca/plateformes-de-cryptoactifs-mesures-reglementaires-et-dapplication-de-la-loi/plateformes-de-cryptoactifs-autorisees-a-faire-affaire-avec-les-canadiens/ | Page (liste) | Mise à jour continue | Valeurs mobilières ; fiches d'instrument |
| ACVM — plateformes proscrites | autorites-valeurs-mobilieres.ca/plateformes-de-cryptoactifs-mesures-reglementaires-et-dapplication-de-la-loi/plateformes-de-cryptoactifs-proscrites/ | Page (liste) | Mise à jour continue | Valeurs mobilières ; exécution |
| ACVM — Avis 21-327 | osc.ca/sites/default/files/pdfs/irps/csa_20200116_21-327_trading-crypto-assets.pdf | PDF | Ponctuel | Valeurs mobilières |
| ACVM — Avis 21-330 | osc.ca/sites/default/files/2021-09/csa_20210923_21-330_crypto-trading-platforms.pdf | PDF | Ponctuel | Média, publicité et déontologie |
| ACVM — Avis 21-332 (FR) | fcnb.ca/sites/default/files/2023-02/2023-02-22-CSAN-21-332-F.pdf | PDF | Ponctuel | Valeurs mobilières |
| ACVM — Avis 21-333 (FR) | lautorite.qc.ca/fileadmin/lautorite/reglementation/valeurs-mobilieres/0-avis-acvm-staff/2023/2023oct05-21-333-avis-acvm-fr.pdf | PDF | Ponctuel | Cryptomonnaies stables |
| ACVM — Avis conjoint 21-329 (FR) | autorites-valeurs-mobilieres.ca/uploadedFiles/Industry_Resources/21-329_Avis_conjoint_ACVM-OCRCVM_29-03-21.pdf | PDF | Ponctuel | Valeurs mobilières |
| ACVM — modifications au Règlement 81-102 | osc.ca/sites/default/files/2025-04/csa_20250417_81-102_investment-funds.pdf | PDF | Ponctuel | Fonds et FNB |
| OCRI — salle de presse et publications | ciro.ca/newsroom ; ocri.ca/salle-de-presse/publications/ | Page | `[NV]` | Autoréglementation ; garde |
| OCRI — cadre de garde des actifs numériques (26-0033) | ciro.ca/newsroom/publications/notice-ciros-digital-asset-custody-framework ; ocri.ca/salle-de-presse/publications/avis-sur-le-cadre-de-locri-relatif-la-garde-des-actifs-numeriques | Page | Ponctuel | Autoréglementation ; garde |
| OCRI — devenir une plateforme de négociation de cryptoactifs | ocri.ca/pour-les-societes/devenir-une-plateforme-de-negociation-de-cryptoactifs | Page | `[NV]` | Valeurs mobilières ; guides |
| CVMO — nouvelles | osc.ca/en/news-events/news | Page | `[NV]` | Ontario |
| CVMO — inscription et conformité des entreprises de cryptoactifs | osc.ca/en/industry/registration-and-compliance/crypto-businesses | Page | `[NV]` | Ontario |
| CVMO — mises en garde aux investisseurs | osc.ca/en/investors/investor-warnings-and-alerts | Page | `[NV]` | Ontario ; exécution |
| CVMO — Avis 33-757 | osc.ca/en/securities-law/instruments-rules-policies/3/33-757/ | Page / PDF | Ponctuel | Ontario ; conformité |
| CVMO — Règles 13-502 / 13-503 | osc.ca/en/securities-law/instruments-rules-policies/1/13-502/ | Page / PDF | Ponctuel | Ontario ; droits exigibles |
| Tribunal des marchés financiers (Ontario) | capitalmarketstribunal.ca | Page | `[NV]` | Ontario ; contentieux |
| AMF — salle de presse et actualités | lautorite.qc.ca/grand-public/salle-de-presse/actualites/ | Page | `[NV]` — URL de veille à confirmer | Québec |
| AMF — mises en garde | lautorite.qc.ca/en/general-public/media-centre/investor-warnings | Page (liste) | Mise à jour continue | Québec ; exécution |
| AMF — dossier XT.com et CoinEx | lautorite.qc.ca/en/general-public/media-centre/news/major-issues/xtcom-coinex | Page | Ponctuel | Québec ; exécution |
| CANAFE — directives | fintrac-canafe.canada.ca/guidance-directives/guidance-directives-eng | Page | `[NV]` | LBC-FT |
| CANAFE — règle d'acheminement | fintrac-canafe.canada.ca/guidance-directives/transaction-operation/travel-acheminement/1-fra | Page | Ponctuel | LBC-FT ; guides |
| CANAFE — DOIMV | fintrac-canafe.canada.ca/guidance-directives/transaction-operation/lvctr/lvctr-fra | Page | Ponctuel | LBC-FT ; guides |
| CANAFE — règle de 24 heures | fintrac-canafe.canada.ca/guidance-directives/transaction-operation/24hour/1-fra | Page | Ponctuel | LBC-FT ; guides |
| CANAFE — pénalités administratives pécuniaires | fintrac-canafe.canada.ca/pen/amps/ ; fintrac-canafe.canada.ca/pen/3-fra | Page (liste) | Au fil des avis | LBC-FT ; exécution |
| CANAFE — modernisation et changements à venir | fintrac-canafe.canada.ca/businesses-entreprises/changes-changements-fra | Page | `[NV]` | LBC-FT |
| CANAFE — inscription des ESM | fintrac-canafe.canada.ca/msb-esm/msb-fra | Page | `[NV]` | LBC-FT ; guides |
| Revenu Québec — catégories de services monétaires liées aux cryptoactifs | revenuquebec.ca/fr/entreprises/mesures-particulieres/entreprises-de-services-monetaires-esm/categories-de-services-monetaires-liees-aux-cryptoactifs/ | Page | `[NV]` | Québec ; LBC-FT |
| Revenu Québec — registre des ESM | revenuquebec.ca/fr/entreprises/mesures-particulieres/entreprises-de-services-monetaires-esm/registre/ | Page (registre) | Mise à jour continue | Québec ; fiches d'instrument |
| Revenu Québec — les cryptoactifs | revenuquebec.ca/fr/une-mission-des-actions/vous-aider-a-vous-conformer/quest-ce-que-leconomie-numerique/les-cryptoactifs/ | Page | `[NV]` | Fiscalité |
| Revenu Québec — formulaire TP-21.4.39 | revenuquebec.ca/fr/services-en-ligne/formulaires-et-publications/details-courant/tp-21-4-39/ | Page / PDF | Annuel | Fiscalité |
| ARC — guide sur les cryptoactifs | canada.ca/fr/agence-revenu/programmes/a-propos-agence-revenu-canada-arc/observation/guide-cryptomonnaie.html | Page | Mises à jour continues `[NV]` | Fiscalité |
| ARC — TPS/TVH sur les transactions de cryptoactifs | canada.ca — section « gst-hst-crypto-transactions » du guide | Page | `[NV]` | Fiscalité |
| ARC — Avis sur la TPS/TVH n° 324 | canada.ca/fr/agence-revenu/services/formulaires-publications/publications/notice324/activites-de-minage-relatives-aux-cryptoactifs.html | Page | Ponctuel (version de juin 2025) | Fiscalité ; minage |
| ARC — Folio S3-F10-C1, placements admissibles | canada.ca — folio S3-F10-C1 | Page | Mise à jour périodique | Fiscalité ; régimes enregistrés |
| ARC — Bulletin IT-479R (archivé) | canada.ca/fr/agence-revenu/services/formulaires-publications/publications/it479r/archivee-transactions-valeurs-mobilieres.html | Page | Archivé | Fiscalité |
| Ministère des Finances — cadre des cryptomonnaies stables | canada.ca/en/department-finance/programs/financial-sector-policy/canadas-stablecoin-framework.html | Page | `[NV]` | Cadre fédéral |
| Ministère des Finances — avant-projets de loi | fin.canada.ca/drleg-apl/ | Page (index) | Au fil des publications | Cadre fédéral ; fiscalité |
| Budget et mises à jour économiques | budget.canada.ca | Page / PDF | Annuel et semestriel | Cadre fédéral ; fiscalité |
| *Gazette du Canada* — index des flux RSS | gazette.gc.ca/rss/sc-rb-fra.html | **RSS (seul flux confirmé)** | Continu | Toutes rubriques |
| *Gazette du Canada*, Partie I | gazette.gc.ca/rp-pr/p1/ | Page / PDF | Hebdomadaire — date officielle le samedi, mise en ligne le vendredi 14 h HE | Cadre fédéral ; projets de règlement |
| *Gazette du Canada*, Partie II | gazette.gc.ca/rp-pr/p2/ | Page / PDF | Le mercredi, toutes les deux semaines, 9 h HE ; structure d'URL déduite `[NV]` | Cadre fédéral ; règlements pris |
| Banque du Canada — registre des FSP | bankofcanada.ca/regulatory-oversight/retail-payments/psp-registry/ | Page (registre) | Mise à jour continue | Paiements ; fiches d'instrument |
| Banque du Canada — paiements de détail | bankofcanada.ca/regulatory-oversight/retail-payments/ | Page | `[NV]` | Paiements |
| Banque du Canada — dollar canadien numérique | bankofcanada.ca/digitaldollar/ | Page (statut) | Rare — travaux réduits depuis sept. 2024 | Cadre fédéral |
| BSIF — bibliothèque de lignes directrices | osfi-bsif.gc.ca/en/guidance/guidance-library | Page (index) | `[NV]` | Prudentiel bancaire |
| Parlement du Canada — LEGISinfo et textes de projets de loi | parl.ca ; lop.parl.ca (résumés législatifs) | Page | Au fil des étapes | Cadre fédéral ; fiscalité ; LBC-FT |
| Justice Canada — lois et règlements | laws-lois.justice.gc.ca | Page | Consolidation continue | Toutes rubriques |
| Légis Québec — lois et règlements | legisquebec.gouv.qc.ca | Page | Consolidation continue | Québec |
| CanLII — décisions | canlii.org | Page | Au fil des décisions | Contentieux |
| CRTC — LCAP, loi, règlements et lignes directrices | crtc.gc.ca/fra/internet/anti/reg.htm ; crtc.gc.ca/fra/com500/guide.htm ; crtc.gc.ca/fra/com500/faq500.htm | Page | `[NV]` | Média ; infolettre |
| CRTC — application de la LCAP (rapports) | crtc.gc.ca/fra/internet/pub/20230930.htm ; crtc.gc.ca/eng/internet/pub/20250930.htm | Page | Périodique `[NV]` | Média ; exécution |
| CPVP — atteintes et orientations | priv.gc.ca | Page | `[NV]` | Vie privée |
| CAI — changements de la Loi 25 et sanctions | cai.gouv.qc.ca/protection-renseignements-personnels/sujets-et-domaines-dinteret/principaux-changements-loi-25 ; .../sanctions-entreprises-poursuites | Page | `[NV]` | Vie privée ; Québec |
| OQLF — changements législatifs et communiqués | oqlf.gouv.qc.ca/charte/changementslegislatifs/ ; oqlf.gouv.qc.ca/office/communiques/ | Page | Au fil des communiqués | Québec ; langue |
| OQLF — *Vocabulaire de la cryptomonnaie* | oqlf.gouv.qc.ca/ressources/bibliotheque/dictionnaires/vocabulaire-cryptomonnaie.aspx | Page | Ponctuel | Terminologie (section 4) |
| Normes d'accessibilité Canada — CAN/ASC-EN 301 549:2024 | accessible.canada.ca | Page | Ponctuel | Accessibilité |
| Gouvernement de l'Ontario — accessibilité des sites Web | ontario.ca/page/how-make-websites-accessible | Page | `[NV]` | Accessibilité |
| Cabinets — veille secondaire (McMillan, Blakes, Stikeman Elliott, McCarthy Tétrault, Osler, Fasken, BLG, Bennett Jones, Aird & Berlis, Davies, Gowling WLG, Norton Rose Fulbright, DLA Piper, Cassels) | sites respectifs, section perspectives / insights | Page | Au fil des publications | Toutes rubriques — **jamais citées comme source de droit, seulement comme signal** |
| Presse et organismes professionnels (Investment Executive, Finance et Investissement, Conseiller, BetaKit, La Presse, CPA Canada, Ordre des CPA du Québec, Fondation canadienne de fiscalité, Tax Interpretations) | sites respectifs | Page | Au fil des publications | Signalement de sujets ; jamais source de droit |

---

## Note de tenue à jour

Ce document est arrêté au **4 septembre 2026** et hérite intégralement des limites méthodologiques des neuf fiches sources. Il doit être révisé dès qu'une source primaire est effectivement lue : chaque vérification retire une ligne de la section 5 et fixe la formulation correspondante dans les sections 2 à 4. Toute ligne sortie de la section 5 doit porter la date de consultation du texte primaire.
