## Annexe A — Registre de vérification avant publication (v2)

Document opposable à la rédaction, référencé par le bandeau `.demo` de chaque page du prototype
(`prototype/fr/index.html`, `prototype/fr/article.html`, `prototype/fr/registre.html`,
`prototype/en/index.html`). Arrêté au 4 septembre 2026, comme `research/00-base-factuelle-consolidee.md`.
Il remplace la version v1 conservée dans `docs/v1/annexes/registre-de-verification.md` ; les lignes
v1 qui subsistent dans le prototype v2 sont reprises ici sous un nouveau numéro, avec renvoi.

---

### A.1 Pourquoi ce registre existe

La politique de sortie réseau de l'environnement où la base factuelle a été constituée a bloqué
l'accès direct à tous les domaines des autorités — `autorites-valeurs-mobilieres.ca`,
`lautorite.qc.ca`, `osc.ca`, `ocri.ca`, `fintrac-canafe.canada.ca`, `legisquebec.gouv.qc.ca`,
`laws-lois.justice.gc.ca`, `gazette.gc.ca`, `canlii.org` et les autres. Aucun avis, aucune loi,
aucune décision n'a été lu dans son texte : les 130 lignes de chronologie et les sept sous-sections
d'instruments viennent de résumés de moteur de recherche recoupés entre neuf fiches. Aucune
référence n'a été inventée — chacune se rattache à une ligne de la base — mais aucune n'est
publiable en l'état. Un seul flux a été confirmé : l'index RSS de la *Gazette du Canada*.

Le prototype v2 ajoute une seconde famille de risques, absente de la v1 : il **nomme des
plateformes réelles** (Shakepay, Newton, Wealthsimple Crypto) dans un comparateur, avec un statut
d'inscription, un score et des mesures. Un statut d'inscription faux, ou périmé, engage la
responsabilité d'Actio autrement qu'une date d'avis erronée : il peut orienter un dépôt d'argent.
Ces lignes portent donc l'état le plus sévère tant que le registre de l'autorité n'a pas été lu à
la date de publication.

---

### A.2 Le registre

**États.** `VÉRIFIÉ` — établi sans accès aux sites des autorités : fait interne à Actio, défaut de
code, ou énoncé portant sur notre propre ignorance. `À VÉRIFIER` — corroboré par deux fiches au
moins, non lu à la source ; publiable dans la seule formulation prudente du registre des
incertitudes. `NON VÉRIFIÉ — NE PAS PUBLIER` — contredit entre fiches, chiffré sans corroboration,
produit par la maquette, ou affirmant une absence.

**Rendu.** `VÉRIFIÉ` → `.badge--conforme` (`--statut-conforme` sur `--statut-conforme-pale`).
`À VÉRIFIER` → `.badge--consultation` (`--statut-consultation` sur `--statut-consultation-pale`),
doublé du bloc `.encadre__ref` dans un article, du marqueur `.baro__verif` dans le Baromètre, de la
mention `.donnee--nd` sur une donnée chiffrée. `NON VÉRIFIÉ` → `.badge--alerte` (`--statut-alerte`
sur `--statut-alerte-pale`), visible en rédaction seulement.

**Localisation.** `idx` = `prototype/fr/index.html` · `art` = `prototype/fr/article.html` ·
`reg` = `prototype/fr/registre.html` · `en` = `prototype/en/index.html`. Les lignes de
l'infolettre (`nl`) sont ajoutées à la section A.5 au fur et à mesure du Module 2.

| # | Affirmation | Où | Source | État | Contrôle |
|---|---|---|---|---|---|
| V-01 | La loi fédérale sur les cryptomonnaies stables est « adoptée mais pas en vigueur » ; ses règlements ne sont pas pris | idx une, baro 1 ; art chapô, §2, tableau ; en | U-59, C-08, U-61 | À VÉRIFIER | Conforme (aucun titre de loi, aucune date d'entrée en vigueur). Vérifier sur LEGISinfo la sanction et l'absence de décret ; ne jamais écrire « depuis le… » |
| V-02 | L'Avis 21-333 « continue de dicter » aux plateformes les jetons arrimés qu'elles peuvent offrir | idx une (chapô) ; art §1 | U-65 | À VÉRIFIER | Le titre est interrogatif (conforme) mais le chapô affirme. Reformuler : « s'applique aujourd'hui aux plateformes inscrites » ; ne pas préjuger de l'articulation avec le fédéral (V-31) |
| V-03 | « Blocage d'accès : l'AMF obtient une nouvelle ordonnance visant une plateforme non inscrite », il y a 18 min | idx chaud 1 ; en | Aucune — brève de maquette | NON VÉRIFIÉ — NE PAS PUBLIER | Aucune ordonnance de septembre 2026 dans la base (U-24). Le bloc « Actualités chaudes » ne se remplit que depuis le flux rédactionnel, jamais depuis le gabarit |
| V-04 | « CANAFE : nouvelle vague de révocations d'inscriptions d'ESM », il y a 1 h | idx chaud 2 ; en | C-14 (révocations de mars 2026) | NON VÉRIFIÉ — NE PAS PUBLIER | Les révocations de 2026 existent (C-14) mais aucune « nouvelle vague » de septembre. Titre de maquette |
| V-05 | « FNB de bitcoin cotés à Toronto : les entrées nettes hebdomadaires repassent en positif », il y a 3 h | idx chaud 3 ; en | U-15 | NON VÉRIFIÉ — NE PAS PUBLIER | Aucune donnée de flux dans la base. Un titre de marché sans relevé daté est interdit (voir aussi V-19 et, au Module 2, le Chiffre de la semaine) |
| V-06 | « Cadre de déclaration des cryptoactifs de l'OCDE : ce que l'échange automatique changera pour l'ARC », hier | idx chaud 4 ; en | C-06, C-17 | À VÉRIFIER | Graphie « cryptoactifs » conforme à C-17. Ne pas donner de date d'application avant lecture de la partie XXI de la LIR (U-35) |
| V-07 | Baromètre, carte 1, statut « En consultation publique » : règlements d'application à la *Gazette*, Partie I | idx baro 1 | U-61 : aucun projet repéré | NON VÉRIFIÉ — NE PAS PUBLIER | La carte porte « Clôture : à confirmer » et `.baro__verif`, mais le statut affirme qu'une consultation existe. Requalifier « Attendu » (état neutre) tant qu'aucun numéro de la *Gazette*, Partie I n'est lu |
| V-08 | Baromètre, carte 2 : communiqué des ACVM du 22 octobre 2025 sur les prêts adossés à des cryptoactifs | idx baro 2 | Base §2 | À VÉRIFIER | La v2 ne reprend plus l'extension au jalonnement (v1 V-17, close). Lire le communiqué ; confirmer date et objet |
| V-09 | Baromètre, carte 3 : cadre de garde de l'OCRI « en vigueur le 3 février 2026 », dépositaires par paliers | idx baro 3 | C-13, U-03, U-12 — aucune date dans la base | NON VÉRIFIÉ — NE PAS PUBLIER | La date du 3 février 2026 n'est corroborée par aucune fiche. Retirer la date ; conserver « paliers de dépositaires » sans seuil ni pourcentage (U-03) ; ne pas citer 26-0033 (U-12) |
| V-10 | Baromètre, carte 4 : mise en garde de l'AMF du 31 août 2026, ordonnance de blocage | idx baro 4 | Aucune — maquette | NON VÉRIFIÉ — NE PAS PUBLIER | Le nom de la plateforme est déjà « à confirmer ». La carte entière ne se publie que depuis la liste des mises en garde de l'AMF, lue le jour même |
| V-11 | Cours BTC/ETH/SOL en CAD, variation 24 h, statut du marché | idx `.cotations` ; en | Fait interne : « — », « n. d. », `.etiquette--demo` « flux non branché » | VÉRIFIÉ | Conforme : aucune valeur affichée. La source de cours (fournisseur, horodatage, devise de cotation) est à choisir au Module 4 avant tout branchement |
| V-12 | Compteur « Plateformes inscrites ACVM : — autorisées à ce jour » ; le chiffre « 12 » du cahier des charges n'est **pas** affiché | idx `.conformite__compte` ; en | U-09 : aucun décompte fiable | VÉRIFIÉ | Décision de rédaction : le compteur reste « — » jusqu'à synchronisation quotidienne avec la recherche nationale d'inscription. Le « 12 » n'entre jamais en dur dans le code |
| V-13 | Académie, parcours 2 : PBR, IT-479R, T1135, TP-21.4.39 | idx parcours 2, fiscalité | IT-479R **archivé** (v1 V-27) ; U-41 ; base §3.3 | À VÉRIFIER | Écrire « bulletin archivé IT-479R, encore appliqué par les tribunaux » ou renvoyer au folio en vigueur ; ne pas présenter un bulletin archivé comme un texte en vigueur |
| V-14 | « À jour pour l'année d'imposition 2025 · révisé chaque printemps » ; « 4 guides · 45 min », « 5 guides · 1 h 20 », « 4 guides · 2 h » | idx parcours 1-3 ; en | Aucune : les guides ne sont pas écrits | NON VÉRIFIÉ — NE PAS PUBLIER | Un parcours ne s'affiche qu'avec des guides publiés ; le décompte et la durée se calculent depuis le CMS, jamais en dur |
| V-15 | Shakepay (Montréal, courtier), Newton (Toronto, courtier), Wealthsimple Crypto (Toronto, courtier en placement) : statut « Inscrite » | idx comparateur ; en | U-07, U-08, U-09 | NON VÉRIFIÉ — NE PAS PUBLIER | Le plus grave après V-30. Le statut, la catégorie d'inscription et la **province** de chaque inscription se lisent sur la recherche nationale d'inscription des ACVM à la date de publication, et le lien `registre ↗` doit viser la fiche exacte. Un statut périmé peut orienter un dépôt |
| V-16 | Scores 4,2 / 4,0 / 4,4, écarts ≈ 1,8 % / 0,7 % / 1,5 %, délais de retrait Interac | idx comparateur ; en | Aucune — valeurs déclarées illustratives (`.donnee--nd`, `.comparateur__methode`, `.comparateur__arrete` « — ») | NON VÉRIFIÉ — NE PAS PUBLIER | Conforme au stade prototype : chaque valeur porte « illustratif » et le relevé est « — ». Aucune ne se publie avant un relevé daté, à heure fixe, sur un achat de 1 000 $ CA, conservé en capture |
| V-17 | Méthode : pondération 40 / 30 / 20 / 10, relevé mensuel, seules des plateformes inscrites | idx `.comparateur__methode` | Fait interne | VÉRIFIÉ | Décision de rédaction. Elle doit figurer mot pour mot sur la page « Méthode du comparateur » du pied de page avant la première fiche |
| V-18 | Divulgation d'affiliation : « jamais depuis ce tableau, toujours divulguée dans le corps de la fiche » | idx `.comparateur__pied` ; en | C-03 (Avis conjoint 21-330) | À VÉRIFIER | Lire l'avis 21-330 : vérifier que la forme de divulgation retenue (dans le corps, avant le lien) satisfait à ce que l'avis attend d'une plateforme quant aux communications faites pour son compte |
| V-19 | Research : « Rapport T3 2026 — adoption institutionnelle », « Flux des FNB de cryptoactifs (TSX) » | idx research ; en | Aucune — rapports non écrits ; U-15 | NON VÉRIFIÉ — NE PAS PUBLIER | Titres de maquette. Le bloc ne s'affiche qu'avec un rapport publié |
| V-20 | Fiscalité, carte 2 : « les **huit** facteurs du bulletin IT-479R » | idx fiscalité | Aucune : le nombre de facteurs n'est pas dans la base | NON VÉRIFIÉ — NE PAS PUBLIER | Lire le bulletin ; d'ici là « les facteurs du bulletin IT-479R », sans nombre |
| V-21 | Fiscalité, carte 3 : TP-21.4.39 « exigible même sans transaction », « l'allègement annoncé » | idx fiscalité | U-41 | À VÉRIFIER | Reprendre la formulation U-41 ; vérifier l'année d'imposition visée par l'allègement sur revenuquebec.ca |
| V-22 | Actio Dispatch paraît le mardi 7 h HE et le vendredi 12 h HE | idx infolettre ; en | Fait interne, cahier des charges | VÉRIFIÉ | Réattester si le calendrier change ; « HE » et non « EST » (l'heure de l'Est bascule à l'heure avancée) |
| V-23 | « Désabonnement en un clic, traité sous 10 jours ouvrables » ; consentement exprès LCAP | idx formulaire | Base §3.5 ; U-46 ; DORS/2012-36 | À VÉRIFIER | Aucun renvoi d'article : conforme. Vérifier le délai de 10 jours ouvrables et la validité de 60 jours du mécanisme |
| V-24 | « Données hébergées au Canada, jamais cédées » | idx infolettre ; en | U-75 ; U-56 ; aucun contrat signé | NON VÉRIFIÉ — NE PAS PUBLIER | Distinguer application, base, diffusion, journaux, et lire les engagements de résidence du fournisseur d'infolettre retenu (Module 4) avant d'afficher la promesse |
| V-25 | « Rejoint par 15 000 juristes, investisseurs et professionnels de la finance au Canada » | idx `.infolettre__preuve-sociale` ; en | Aucune : aucun abonné | NON VÉRIFIÉ — NE PAS PUBLIER | Preuve sociale fausse à la date de lancement = pratique trompeuse. La ligne se calcule depuis la liste (arrondie au millier inférieur) et disparaît sous 1 000 abonnés |
| V-26 | Actio Média inc., 1000, rue De La Gauchetière Ouest, bureau 2400, Montréal H3B 4W5 ; `redaction@actio.ca` | idx pied ; art JSON-LD ; en | Aucune | NON VÉRIFIÉ — NE PAS PUBLIER | La LCAP exige une adresse **valide** de l'expéditeur. Constituer la personne morale, obtenir le bail ou le domicile, enregistrer le domaine, avant tout envoi. Le numéro de téléphone fictif de la v1 a été retiré (v1 V-38 close pour cette part) |
| V-27 | « Actio n'est inscrite à aucun titre… n'exerce aucune activité de courtage, de conseil ou de gestion de portefeuille » | idx `.avertissement` ; en | Fait interne | VÉRIFIÉ | Réattester à chaque évolution d'Actio Pro (phase 4) et de l'affiliation ; un lien d'affiliation n'est pas une activité de courtage, mais l'Avis 21-330 (V-18) borne ce qu'Actio peut dire pour le compte d'une plateforme |
| V-28 | « Accessibilité (WCAG 2.1 AA) » | idx `.pied__legal` ; en | Base §3.6 : cible volontaire ; `tools/verifier.mjs` (contraste seulement) | NON VÉRIFIÉ — NE PAS PUBLIER | Le vérificateur calcule 70 paires de contraste et l'ordre des titres : ce n'est pas un audit. Intituler « Accessibilité — notre démarche » jusqu'à un audit externe |
| V-29 | « Confidentialité (Loi 25 / LPRPDE) » | idx `.pied__legal` ; en | U-56 | NON VÉRIFIÉ — NE PAS PUBLIER | Établir le régime applicable (décret de similarité, activité interprovinciale) avant d'annoncer les deux lois côte à côte |
| V-30 | Signature « Marie-Claude Fortin », Barreau du Québec, LL.M., ex-conformité, déclaration d'intérêts, contact sécurisé | art `.article__signature`, `.bio`, `.bio__qualif`, `.bio__declaration`, JSON-LD ; idx une | Aucune — personne de maquette | NON VÉRIFIÉ — NE PAS PUBLIER | **Défaut le plus grave.** Afficher une appartenance au Barreau du Québec pour une personne inexistante est plus qu'une fiction : c'est une fausse qualification professionnelle. Attribuer à « la rédaction » ou signer sous un nom réel, avec vérification de l'inscription au Tableau de l'Ordre |
| V-31 | Tableau, en bref : « aucune règle de conflit identifiée par la rédaction au 4 septembre 2026 » | art tableau, §4, en bref ; idx une ; en | U-65 | À VÉRIFIER | Reformulé le 4 septembre 2026 (l'ancienne rédaction affirmait une absence). Le §4 reste analytique : conforme. Dépouiller les avis 21-3xx postérieurs à la sanction |
| V-32 | Mise en garde : « aucune supervision prudentielle fédérale ; seuls les engagements pris envers les ACVM s'appliquent » | art `.mise-en-garde`, risque 1 | U-59, U-65 | À VÉRIFIER | Reformulé le 4 septembre 2026 : la rédaction initiale (« aucune autorité canadienne ne supervise ») contredisait le §1. Vérifier la nature exacte des engagements de l'Avis 21-333 (réserves, attestation, audit) |
| V-33 | Mise en garde : « aucune protection de la SADC » | art `.mise-en-garde`, risque 4 | Base : aucune lecture de la *Loi sur la SADC* | À VÉRIFIER | Vérifier la définition de « dépôt » ; la formulation est prudente (un jeton n'est pas un dépôt) et peut rester |
| V-34 | Avis 21-333 « publié le 5 octobre 2023 », « en vigueur depuis 2023 », conditions (une seule monnaie fiduciaire, engagements de réserve, rachat, divulgation) | art §1, sources 1, `.note-conformite` | U-04 ; base §3.1 ; marqué `[À VÉRIFIER]` | À VÉRIFIER | Conforme : la note de conformité annonce l'état de vérification. Ouvrir le PDF ; confirmer date, titre français et périmètre |
| V-35 | Loi fédérale « adoptée au printemps 2026 dans un projet de loi de mise en œuvre budgétaire », supervision confiée à la Banque du Canada | art §2, sources 2 | C-09, U-36, U-59, U-62 | À VÉRIFIER | Numéro et titre du projet de loi déjà marqués `[À VÉRIFIER]` dans `.sources` : conforme. Ne pas nommer C-15 ni C-31 avant LEGISinfo (C-15, U-34) |
| V-36 | Avis 21-327 « 16 janvier 2020 », sous son titre français long | art sources 3, §1 | C-01 | NON VÉRIFIÉ — NE PAS PUBLIER | Reprise de v1 V-04, non close. Ouvrir le PDF `csa_20200116` ; d'ici là « janvier 2020 », sans titre long |
| V-37 | Titre long du Règlement 31-103 | art `.note-conformite`, sources 4 | Base §3.1 | À VÉRIFIER | Vérifier le titre officiel exact sur le site de l'AMF (version consolidée) |
| V-38 | « Conditions accordées par l'autorité principale de la plateforme, puis reconnues par les autres » | art §3 | Base §3.1 (régime de passeport, sans citation du Règlement 11-102) | À VÉRIFIER | Aucun numéro cité : conforme. Vérifier que les conditions d'inscription suivent bien le passeport et non une décision par province |
| V-39 | « Publié le 4 septembre 2026, 6 h 30 HE — Relu par la révision juridique : à faire » | art `.article__dates`, `.maj` | Fait interne | VÉRIFIÉ | Conforme : la mention « à faire » est honnête. Le gabarit refuse la publication tant que la date de relecture est vide (règle à coder au Module 4) |
| V-40 | Horodatages « Il y a 18 min », « Il y a 1 h », « Hier » | idx chaud ; en | Constat de code : calculés par `actio.js` depuis `datetime` | VÉRIFIÉ | Conforme en code ; mais les `datetime` sont figés au 4 septembre 2026 : la maquette affichera « Il y a N jours » dès le lendemain. Comportement attendu, à documenter dans la démonstration |
| V-41 | Colonne « Registres officiels » du pied de page : sept liens vers les autorités | idx pied, colonne 2 ; en | Base §7 : URL repérées, non ouvertes (U-66, U-76) | À VÉRIFIER | Le mot « partenaires », qui supposait un accord avec sept autorités, a été retiré le 4 septembre 2026. Ouvrir les sept URL une à une avant mise en ligne |
| V-42 | Le bandeau `.demo` de chaque page renvoie au présent registre | idx, art, reg, en | Constat de code | VÉRIFIÉ | Posé sur les quatre pages le 4 septembre 2026 (v1 V-43 close). `tools/verifier.mjs` contrôle l'existence du lien |
| V-43 | « OCRI » en français, « CIRO » en anglais ; « permis » réservé à l'ESM ; « cryptoactif » en un mot | Prototype entier | Base §4, règles 2 et 4 ; C-17 | VÉRIFIÉ | Conforme. Recontrôler chaque page et l'infolettre à chaque livraison |
| V-44 | Symétrie linguistique : `en/index.html` marque incertain ce que `fr/index.html` marque incertain | en | Règle A.4-4 | À VÉRIFIER | Chaque ligne du présent registre s'applique aux deux langues ; la colonne « Où » le note (`en`). Contrôler que la traduction n'a pas durci une formulation prudente |
| V-45 | Jeton « Confirmé » (niveau de technicité) et tags de juridiction « Fédéral · Québec · Ontario » sur l'article | art `.niveau--confirme`, `.juridiction` | Fait interne (taxonomies fermées, `docs/M1-architecture-wireframes.md` §1.3) | VÉRIFIÉ | Conforme. Une valeur hors taxonomie fermée bloque la publication (règle CMS, Module 4) |

---

### A.3 Procédure de contrôle

**Qui.** Le **chef de pupitre** ouvre le registre de l'article avant écriture. Le **réviseur
juridique** contrôle et signe chaque levée. La **rédactrice en chef** seule autorise la publication
et tranche les états. La **rédactrice en chef adjointe** tient le registre consolidé.
L'**intégrateur** conserve les captures horodatées. Aucun auteur ne lève ses propres lignes.

**Quatre passes.** (1) *Extraction* — ouvre une ligne toute chaîne correspondant à
`\b(19|20)\d{2}\b`, `\d[\d\s]*\$`, `\d+(,\d+)?\s?%`, `21-3\d{2}`, `33-757`, `31-103`, `81-102`,
`11-102`, `13-50[23]`, `RLRQ`, `L.C.`, `L.R.O.`, `DORS/` ou `C-\d{1,2}` ; un numéro de projet de loi
ne s'écrit jamais sans sa législature et sa session ; **tout nom de plateforme** ouvre une ligne
de statut d'inscription. (2) *Contrôle sur source primaire* — une seule source fait foi par nature
d'acte ; un cabinet, un média spécialisé ou un résumé de moteur sont des **signaux**, jamais des
sources de droit ; pour un statut d'inscription, la seule source est la recherche nationale
d'inscription des ACVM, lue et capturée le jour de publication. (3) *Contre-lecture* par une
personne étrangère à l'article — la formulation publiée doit être celle qu'impose le registre des
incertitudes, mot pour mot. (4) *Levée* — URL exacte, date de consultation, initiales du
valideur ; la ligne correspondante de la section 5 de la base est retirée le jour même.

| Nature de l'affirmation | Point d'entrée primaire | Ce qu'on y capture |
|---|---|---|
| Loi fédérale consolidée | `laws-lois.justice.gc.ca` | Article, version à la date, entrée en vigueur |
| Règlement fédéral pris | *Gazette*, Partie II — `gazette.gc.ca/rp-pr/p2/` (mercredi, une semaine sur deux, 9 h HE) | DORS, enregistrement, effet |
| Projet de règlement | *Gazette*, Partie I — `gazette.gc.ca/rp-pr/p1/` (samedi officiel, en ligne le vendredi 14 h HE) | Volume, numéro, délai de commentaires |
| État d'un projet de loi | LEGISinfo, `parl.ca` ; `lop.parl.ca` | Étape, sanction, chapitre des L.C., décrets |
| Loi ou règlement québécois | `legisquebec.gouv.qc.ca` | Chapitre RLRQ, article, alinéa, historique |
| Décision de tribunal | `canlii.org`, puis site de l'autorité | Référence neutre, dossier, dispositif, appel |
| Avis du personnel des ACVM | PDF sur `osc.ca`, `lautorite.qc.ca`, `fcnb.ca` | Date, titre français officiel, périmètre |
| **Statut d'inscription d'une plateforme** | Recherche nationale d'inscription des ACVM ; registre de l'AMF ; registre de la CVMO | Catégorie, provinces, conditions, date de la décision, capture datée |
| Publication de l'OCRI | `ocri.ca` (FR) et `ciro.ca` (EN) | Numéro et nature exacte de l'instrument |
| Mise en garde | Liste des mises en garde de l'AMF ; *Investor Warnings* de la CVMO | Nom exact, date, motif |
| Directive du CANAFE | `fintrac-canafe.canada.ca` | Seuils, obligations, date de mise à jour |
| Position fiscale | `canada.ca` (ARC) ; `revenuquebec.ca` | Guide, folio, avis TPS/TVH, millésime ; état « archivé » ou non |
| Prudentiel et paiements | `osfi-bsif.gc.ca` ; `bankofcanada.ca` | Ligne directrice, date d'effet, registre des FSP |
| Données de marché | Fournisseur de cours retenu ; fiche du FNB sur `tsx.com` et site de l'émetteur | Horodatage, devise, méthode (dernier cours, moyenne), capture |
| Courriel commercial, vie privée | `crtc.gc.ca` ; `priv.gc.ca` ; `cai.gouv.qc.ca` | Forme, délai, régime de sanction |
| Terminologie | *Vocabulaire de la cryptomonnaie* de l'OQLF | Équivalent français retenu |

**Bilinguisme.** Avant de citer un document de la CVMO en français, vérifier qu'une version
française existe (U-14) : plusieurs n'existent qu'en anglais. L'anglais se contrôle dans les mêmes
passes que le français, jamais après publication.

**Une affirmation invérifiable a trois issues, et trois seulement.** (i) **Suppression**, par défaut
quand elle ne porte pas l'analyse. (ii) **Reformulation prudente** : la colonne « Formulation
prudente à employer » du registre des incertitudes est reprise mot pour mot, avec le marqueur
`[À VÉRIFIER]` en `.badge--consultation` et le bloc `.encadre__ref` — non une suggestion, mais le
texte publiable. (iii) **Report** jusqu'à réouverture de la source. Publier en signalant
l'incertitude en note de bas de page reste publier.

**Délais.** Analyse courante : 2 jours ouvrables ; dossier ou guide : 5 ; fiche de plateforme :
5, plus relecture du registre le jour de publication. Infolettre : contenu gelé le **lundi 12 h**
pour l'envoi du mardi 7 h et le **jeudi 15 h** pour l'envoi du vendredi 12 h (HE). Une ligne
signalée par une autorité suit le délai de 4 heures ouvrées de la politique de correction.

---

### A.4 Règle de publication

1. **Aucun contenu ne quitte la rédaction tant qu'il subsiste une ligne « NON VÉRIFIÉ » qui le
   concerne.** Le bandeau `.demo` (`--demo-fond`, `--demo-texte`) est un aveu interne, pas une
   autorisation : il ne purge aucune ligne.
2. **Toute ligne « À VÉRIFIER » est soit levée, soit reformulée** dans les termes exacts du registre
   des incertitudes, marqueur visible dans le corps du contenu, jamais en page de mentions.
3. **Une levée non signée est nulle** : sans URL, date de consultation ni initiales, la ligne reste
   ouverte.
4. **Symétrie linguistique** : `en/index.html` ne peut affirmer ce que `fr/index.html` marque comme
   incertain, ni l'inverse.
5. **Régression** : toute modification d'un contenu publié rouvre les lignes qu'elle touche ; une
   correction de niveau 3 ou 4 rouvre l'article entier.
6. **Péremption** : une levée portant sur un statut d'inscription, une mise en garde ou une donnée
   de marché vaut **le jour de sa capture** ; une levée portant sur un texte de loi vaut jusqu'à la
   prochaine modification du texte, que la veille (Module 4) signale. Toute autre levée vaut six
   mois.
7. **Portée** : site, infolettre, réseaux sociaux, extraits transmis à un tiers, captures partagées,
   données structurées (JSON-LD) — un `author` fictif dans le JSON-LD est une publication.

| État | Effet | Qui peut le changer |
|---|---|---|
| `VÉRIFIÉ` | Publiable tel quel | Personne : la ligne est retirée, jamais modifiée |
| `À VÉRIFIER` | Publiable dans la seule formulation prudente, marqueur visible | Réviseur juridique, contresigné par la rédactrice en chef |
| `NON VÉRIFIÉ — NE PAS PUBLIER` | Bloque tout le contenu concerné | Rédactrice en chef, sur pièce primaire seulement |

**État au 4 septembre 2026 :** sur 45 lignes, 10 sont `VÉRIFIÉ` — dont aucune ne porte sur le
droit ; 17 sont `À VÉRIFIER` ; 18 sont `NON VÉRIFIÉ — NE PAS PUBLIER`. Aucune page du prototype
n'est publiable au sens de la règle 1. Par rapport à la v1 (44 lignes, 24 bloquantes), la v2 a
clos six lignes bloquantes (téléphone fictif, « 100 % sources primaires », « cinq ans après »,
« Banque du Canada ouvre les consultations », extension au jalonnement, lien du bandeau) et en a
ouvert cinq nouvelles, toutes liées aux contenus que le cahier des charges impose d'afficher :
plateformes nommées (V-15, V-16), preuve sociale (V-25), parcours chiffrés (V-14), rapports
(V-19).

---

### A.5 Lignes de l'infolettre

Chaque édition d'Actio Dispatch et chaque courriel de la séquence de bienvenue ajoutent leurs lignes
ici, sous la même règle A.4. Une infolettre envoyée ne se corrige pas : le gel du lundi 12 h et du
jeudi 15 h (HE) est le dernier point où une ligne peut être levée. Localisation : `nl-042` =
`newsletter/contenus/dispatch-042.html` · `nl-b1`, `nl-b2`, `nl-b3` = `newsletter/contenus/bienvenue-1.html`,
`bienvenue-2.html`, `bienvenue-3.html` · `ch` = `newsletter/chassis.html`.

| # | Affirmation | Où | Source | État | Contrôle |
|---|---|---|---|---|---|
| N-01 | Conditions de l'Avis 21-333 : un seul actif de référence, engagements de réserve, de rachat et de divulgation, inscription du jeton aux conditions d'inscription | nl-042 grand angle ; nl-b2 encadré | Base §3.1 ; U-04 ; encadré « état de vérification » présent | À VÉRIFIER | Conforme au stade prototype : l'encadré ambre annonce l'état. Lire le PDF avant le gel ; aucune date de jour n'est citée |
| N-02 | Loi fédérale « adoptée au printemps dans un projet de loi d'exécution budgétaire », supervision par la Banque du Canada, non en vigueur | nl-042 grand angle ; nl-b2 | U-59, C-09, U-36 | À VÉRIFIER | Aucun numéro de projet de loi, aucune date de jour : conforme. LEGISinfo avant le gel |
| N-03 | Conditions d'inscription « accordées par son autorité principale puis reconnues par les autres » | nl-042 grand angle | Base §3.1 (passeport) | À VÉRIFIER | Reprend V-38 ; même contrôle |
| N-04 | Révocations d'inscriptions d'ESM par le CANAFE en 2026, « plusieurs dizaines », majorité liées aux cryptoactifs | nl-042 radar Ottawa | C-14 | À VÉRIFIER | Aucun chiffre cité et marqueur `[À VÉRIFIER]` visible : conforme. Lire la liste des révocations du CANAFE ; « majorité » à confirmer par décompte |
| N-05 | Une plateforme dont l'inscription d'ESM est révoquée « ne peut plus légalement recevoir vos fonds pour les convertir » | nl-042 radar Ottawa | Base §3.2 (obligation d'inscription d'ESM) | À VÉRIFIER | Vérifier la formulation sur la page du CANAFE : l'interdiction porte sur l'exploitation d'une ESM non inscrite ; ne pas durcir |
| N-06 | TP-21.4.39 exigible même sans transaction, pénalité, allègement annoncé au printemps 2025 | nl-042 radar Québec ; nl-b1, nl-b3 (mention) | U-41 | À VÉRIFIER | Reprend V-21 ; « reste à confirmer » écrit dans le corps : conforme |
| N-07 | CARF : application reportée par le Canada, calendrier « à confirmer sur la partie XXI de la LIR », déclaration par les plateformes | nl-042 radar International | C-06, U-35 | À VÉRIFIER | Aucune date : conforme. Ne pas écrire « 2027 » avant lecture |
| N-08 | Jalonnement : « l'ARC n'a publié aucune position formelle que nous ayons pu consulter » ; pratique des cabinets = revenu à la JVM à la réception | nl-042 cas pratique | U-37 | VÉRIFIÉ | Énoncé portant sur notre propre consultation, formulé comme tel ; la pratique est attribuée aux cabinets, jamais à l'ARC (U-37) |
| N-09 | Bulletin IT-479R « archivé ; reste appliqué par les tribunaux » | nl-042 cas pratique | v1 V-27 (archivé) ; aucune décision citée pour « appliqué par les tribunaux » | À VÉRIFIER | Citer une décision de la CCI qui l'applique, ou écrire « encore invoqué » |
| N-10 | Cas d'Élise : 32 jetons, 0,9 de récompenses, Ontario | nl-042 cas pratique | Cas fictif, dit fictif | VÉRIFIÉ | Conforme (charte §1.5, règle 4). Les nombres sont ceux du cas, pas des données |
| N-11 | Chiffre de la semaine : entrées nettes hebdomadaires des FNB de bitcoin au comptant cotés à la TSX | nl-042 chiffre | Aucune valeur dans le gabarit ; U-15 pour la liste des FNB | VÉRIFIÉ | Conforme : `{{chiffre_semaine}}`, `{{flux_s0}}`…`{{flux_s4}}` sont des champs de fusion. La **source** (`{{flux_source}}`) et la méthode de relevé sont à fixer au Module 4 avant le premier envoi ; un flux non sourcé n'est pas injecté |
| N-12 | Bandeau de cours BTC/ETH/SOL en CAD | ch | Champs de fusion ; aucune valeur | VÉRIFIÉ | Conforme. Source de cours à choisir (Module 4) ; `{{cours_source}}` l'affiche |
| N-13 | « Deux courriels par semaine, jamais plus » ; mardi 7 h HE, vendredi 12 h HE | nl-b1, nl-b3 ; ch (surtitre) | Fait interne, cahier des charges | VÉRIFIÉ | Réattester si la cadence change ; `tools/emails.mjs` refuse « EST/EDT » |
| N-14 | « Le Guide de survie réglementaire et fiscal pour l'investisseur crypto canadien », huit chapitres, arrêté au `{{date_arret_guide}}` | nl-b1 | Aucune : guide non écrit | NON VÉRIFIÉ — NE PAS PUBLIER | C1 ne part pas tant que le guide n'existe pas et que le champ est vide. Le sommaire en huit chapitres engage la rédaction |
| N-15 | « Treize autorités » coordonnées au sein des ACVM | nl-b2 §1 | Base §1 (10 provinces + 3 territoires) | À VÉRIFIER | Vérifier le décompte sur le site des ACVM (membres) |
| N-16 | « Depuis l'Avis 21-327 de janvier 2020 » ; contrat de cryptoactif ; « les ACVM n'ont pas qualifié le bitcoin lui-même de valeur mobilière ; c'est la relation avec la plateforme qui l'est » | nl-b2 §2 | C-01 (mois seulement) ; base §3.1 | À VÉRIFIER | Reformulé le 4 septembre 2026 (l'ancienne rédaction, « n'a jamais été qualifié au Canada », affirmait une absence). Le mois seul est conforme à C-01 ; lire l'Avis 21-327 |
| N-17 | « Depuis août 2024, la voie transitoire est fermée aux nouveaux venus » | nl-b2 §3 | C-05 | À VÉRIFIER | Reprendre la formulation C-05 (approche intérimaire close le 6 août 2024), muette sur les inscriptions actives (U-05) |
| N-18 | Cadre de garde de l'OCRI : « dépositaires par paliers, autogarde restreinte » | nl-b2 §3 | C-13, U-03 | À VÉRIFIER | Aucun seuil, aucun numéro : conforme |
| N-19 | Permis d'ESM délivré par Revenu Québec ; trois formalités au Québec | nl-b2 §4 | C-04 | À VÉRIFIER | Reprend V-19 v1 ; lire la page ESM de revenuquebec.ca |
| N-20 | Fiches des plateformes autorisées : catégorie, provinces, dépositaire déclaré, ESM, permis, date de décision | nl-b3 outil 1 | Aucune fiche publiée | NON VÉRIFIÉ — NE PAS PUBLIER | `{{lien_fiches_plateformes}}` ne peut pointer que vers des fiches publiées avec statut lu (V-15). C3 ne part pas avant la première fiche |
| N-21 | Trois parcours de l'Académie et leur contenu | nl-b3 outil 2 | `prototype/fr/index.html` `.parcours` — guides non écrits | NON VÉRIFIÉ — NE PAS PUBLIER | Reprend V-14 ; `{{lien_academie}}` ne pointe que vers des guides publiés |
| N-22 | Sept registres officiels réunis | nl-b3 outil 3 | Base §7 : URL repérées, non ouvertes (U-66, U-76) | À VÉRIFIER | Reprend V-41 ; ouvrir les sept URL |
| N-23 | Adresse postale, « Rédaction à Montréal et à Toronto », `redaction@actio.ca` | ch pied | Aucune (V-26) | NON VÉRIFIÉ — NE PAS PUBLIER | La LCAP exige une adresse valide ; Toronto suppose un bureau ou une personne. Aucun envoi avant constitution et bail |
| N-24 | Désabonnement « sans confirmation ni connexion », 10 jours ouvrables, 60 jours ; en-têtes `List-Unsubscribe` | ch pied ; manifeste | Base §3.5 ; U-46 | À VÉRIFIER | Reprend V-23 ; tester le désabonnement en un clic chez le prestataire avant le premier envoi |
| N-25 | Consentement « puis confirmé depuis votre boîte de courriel » ; IP conservée au journal, jamais affichée | ch pied ; manifeste `preuve_du_consentement` | Arbitrage v2 (v1 V-35 clos) | VÉRIFIÉ | Décision interne, à inscrire à la politique de confidentialité et au contrat du prestataire |
| N-26 | « Vos renseignements … ne sont ni vendus, ni loués, ni cédés » ; droit d'accès, de rectification, de suppression | ch pied | Fait interne ; Loi 25 (droits) | VÉRIFIÉ | Réattester à chaque nouveau sous-traitant ; la mention « hébergés au Canada » de la v1 a été retirée (V-24) |
| N-27 | « Cette édition ne comporte aucun contenu commandité et aucun lien d'affiliation » | nl-042 transparence | Fait interne, par envoi | VÉRIFIÉ | Réattester à chaque édition ; la phrase change dès qu'un lien d'affiliation entre dans un envoi |
| N-28 | Signature « La rédaction » sans nom | nl-042, nl-b1, nl-b2, nl-b3 | Décision v2 (V-30) | VÉRIFIÉ | Conforme ; aucune personne fictive ne signe l'infolettre |

**État au 4 septembre 2026 (infolettre) :** sur 28 lignes, 9 sont `VÉRIFIÉ`, 15 sont `À VÉRIFIER`,
4 sont `NON VÉRIFIÉ — NE PAS PUBLIER` (N-14, N-20, N-21, N-23). L'édition nº 042 n'est bloquée
que par N-23 (adresse), commune à tout envoi ; la séquence de bienvenue l'est en outre par le guide
(N-14), les fiches (N-20) et les guides de l'Académie (N-21).

---

### Ce qui reste à trancher

1. **La signature fictive (V-30).** Le prototype v2 aggrave la v1 : la fiche auteur affiche une
   appartenance au Barreau. Deux issues seulement — attribuer à la rédaction, ou recruter la juriste
   qui signera, avant toute mise en ligne, même « bêta ».
2. **Le comparateur (V-15, V-16).** Le cahier des charges impose trois plateformes nommées en page
   d'accueil. Les nommer sans relevé daté ni lecture du registre est le risque juridique le plus
   direct d'Actio. Option a : lancer le site sans le bloc, l'ajouter au premier relevé (Phase 3 de
   la feuille de route). Option b : le lancer avec statut lu et capturé, sans score ni écart, ces
   deux colonnes affichant « relevé en cours ».
3. **La preuve sociale (V-25).** Retirer la ligne jusqu'à 1 000 abonnés, ou la remplacer par une
   preuve vraie dès le lancement (« Lu par les directions de la conformité de … », sur autorisation
   écrite).
4. **L'ordre de réouverture des sources.** Sept lectures débloquent le plus de lignes : Avis
   21-333, Avis 21-327, Avis 21-330, recherche nationale d'inscription (trois fiches), texte de la
   loi fédérale sur les cryptomonnaies stables, cadre de garde de l'OCRI, dispositions de forme de
   la LCAP.
5. **La publicité de ce registre.** Il crédibilise auprès d'un lectorat de juristes, et expose les
   points faibles à qui voudrait contester un article. Le bandeau `.demo` y renvoie déjà : la
   question ne se pose qu'à la mise en ligne.
