## Annexe A — Registre de vérification avant publication

Document opposable à la rédaction, référencé par le bandeau `.demo` de `prototype/fr/index.html`
(ligne 37). Arrêté au 4 septembre 2026, comme `research/00-base-factuelle-consolidee.md`.

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

---

### A.2 Le registre

**États.** `VÉRIFIÉ` — établi sans accès aux sites des autorités : fait interne à Actio, défaut de
code, ou énoncé portant sur notre propre ignorance. `À VÉRIFIER` — corroboré par deux fiches au
moins, non lu à la source ; publiable dans la seule formulation prudente du registre des
incertitudes. `NON VÉRIFIÉ — NE PAS PUBLIER` — contredit entre fiches, chiffré sans corroboration,
produit par la maquette, ou affirmant une absence.

**Rendu.** `VÉRIFIÉ` → `.badge--conforme` (`#0E7C5A` sur `#E3F4EE`). `À VÉRIFIER` →
`.badge--consultation` (`#965800` sur `#FBF0E0`), doublé du bloc `.boite__ref`. `NON VÉRIFIÉ` →
`.badge--alerte` (`#C8102E` sur `#FBE9EC`), visible en rédaction seulement.

**Localisation.** `idx` = `prototype/fr/index.html` · `art` = `prototype/fr/article.html` ·
`reg` = `prototype/fr/registre.html` · `en` = `prototype/en/index.html` ·
`nl` = `newsletter/actio-dispatch-001.html`.

| # | Affirmation | Où | Source | État | Contrôle |
|---|---|---|---|---|---|
| V-01 | Décision du TMF du 22 août 2025, part de profits « de l'ordre de 20 % » ; l'abonnement à des signaux n'est pas un contrat d'investissement | art §intro, §1-2 ; idx une ; nl §01 | Base §2 | À VÉRIFIER | Lire la décision sur CanLII ; vérifier que les deux qualifications sont au dispositif ; sinon « une part des profits », sans date |
| V-02 | Aucune référence neutre n'est donnée ; le sort procédural est dit invérifié | art sources, `.maj`, §4 | U-17, U-18 | VÉRIFIÉ | Conforme. Chercher un appel avant republication |
| V-03 | Homologation du 28 août 2025 emportant géoblocage de logiciels | art §2.1 | Base §2 (*iGenius*) | À VÉRIFIER | Confirmer date et objet ; ne pas reprendre les 15 000 $ |
| V-04 | Avis 21-327 daté du 16 janvier 2020, sous son titre français long | art « Textes de loi », sources | C-01 | NON VÉRIFIÉ — NE PAS PUBLIER | Ouvrir le PDF `csa_20200116` ; d'ici là « janvier 2020 », sans titre |
| V-05 | Avis 21-327 : l'absence de livraison immédiate fait naître un contrat | art §2 ; idx carte 3 ; nl §01 | Base §3.1 | À VÉRIFIER | Lire le PDF ; ne pas durcir en « toute absence de livraison » |
| V-06 | Avis conjoint 21-330 daté du 23 septembre 2021 | art sources ; idx carte 2 | C-03 | NON VÉRIFIÉ — NE PAS PUBLIER | Ouvrir le PDF ; citer l'avis sans millésime |
| V-07 | La plateforme inscrite répond des communications faites pour son compte | art §4 ; idx carte 2 ; nl §01 | Base §3.1 | À VÉRIFIER | Isoler le passage fondant le rattachement |
| V-08 | Depuis le 6 août 2024, courtier en placement et OCRI : seule voie ouverte | idx étape 03 ; en ; reg ; nl schéma | C-05 | À VÉRIFIER | Reprendre la formulation C-05, muette sur les inscriptions actives |
| V-09 | « Cinq ans après l'Avis 21-327 » contre « six ans » | idx carte 1 ; nl §03 | Incohérence interne | NON VÉRIFIÉ — NE PAS PUBLIER | Trancher après V-04 : janvier 2020 donne six ans |
| V-10 | Zéro règlement permanent des ACVM propre aux plateformes | nl §03 | U-06 | NON VÉRIFIÉ — NE PAS PUBLIER | Affirmer une absence exige un dépouillement exhaustif, impossible ici |
| V-11 | Les ACVM consultent sur un régime permanent | idx carte 1 ; en | U-06 | NON VÉRIFIÉ — NE PAS PUBLIER | Aucune consultation identifiée : retirer ou requalifier en question |
| V-12 | Inscription au titre du Règlement 31-103 ; courtier restreint à plafonds d'achat ; engagement préalable opposable | art tableau ; idx cartes et étapes 01-02 ; reg | Base §3.1 ; U-01 ; Avis 21-332 | À VÉRIFIER | Aucun chiffre : conforme. Jamais de plafond sans lire la décision visée |
| V-13 | Cadre de garde de l'OCRI : paliers, plafonds, autogarde restreinte | idx fil ; nl radar Ontario | C-13, U-03, U-12 | À VÉRIFIER | Aucun pourcentage ni seuil : conforme. Ne pas citer le numéro 26-0033 |
| V-14 | Blocage d'accès par ordonnance aux fournisseurs de télécommunication | idx fil | Aucune | NON VÉRIFIÉ — NE PAS PUBLIER | La base ne connaît que blocage de sommes et géoblocage : trois mesures confondues |
| V-15 | Nomination de XT.com et CoinEx | idx fil | U-07, U-21 | NON VÉRIFIÉ — NE PAS PUBLIER | Aucun nom depuis une source secondaire ; renvoyer aux listes des ACVM |
| V-16 | Marché canadien étroit : volumes modestes, écarts plus larges | idx fil des marchés | U-09, U-15 | NON VÉRIFIÉ — NE PAS PUBLIER | La comparaison suppose des données que la rédaction n'a pas |
| V-17 | Le communiqué du 22 octobre 2025 vise aussi jalonnement et rendement | idx carte 3 ; en ; nl §01 | Base §2 : prêts adossés | NON VÉRIFIÉ — NE PAS PUBLIER | L'extension au jalonnement est absente de la base ; lire le communiqué |
| V-18 | Registre unifié synchronisé depuis 13 autorités, cible 6 h | reg provenance | Aucune ; base §7 pour les URL | NON VÉRIFIÉ — NE PAS PUBLIER | Chiffre non étayé ; U-76 laisse la licéité du moissonnage ouverte |
| V-19 | Permis d'ESM délivré par Revenu Québec depuis le 13 septembre 2021 ; LESM, RLRQ c. E-12.000001 ; cumul de trois formalités | art tableau, §3, sources ; idx schéma ; en ; nl radar Québec | C-04 ; base §3.2 | NON VÉRIFIÉ — NE PAS PUBLIER | Déjà marqué `[À VÉRIFIER]` : conforme. Lire la page ESM de revenuquebec.ca et le chapitre sur LégisQuébec |
| V-20 | Le « contrat d'investissement » est à l'article 1 de la LVM et « distingue le Québec des autres provinces » | art « Textes de loi » | U-16 ; aucune pour la comparaison | NON VÉRIFIÉ — NE PAS PUBLIER | Retirer la comparaison, qui suppose neuf autres lois lues ; confirmer l'article, sans alinéa |
| V-21 | Les PAP du CANAFE « peuvent viser plusieurs milliers d'opérations » | art `.boite--risque` | C-10 | NON VÉRIFIÉ — NE PAS PUBLIER | « Plusieurs milliers » chiffre ce que C-10 interdit |
| V-22 | Interdictions d'opérations, pénalités du TMF, blocage ; renvoi au registre de l'AMF | art `.boite--risque`, `.boite--impact` | Base §1, §3.1 ; U-21 | À VÉRIFIER | Vérifier libellés et intitulé du registre ; aucun montant : conforme |
| V-23 | Régime fédéral des cryptomonnaies stables adopté, non en vigueur ; les FSP recoupent les plateformes | idx fil et fil des marchés ; en ; nl radar Ottawa | U-59, C-08, U-64 | À VÉRIFIER | Conforme. Aucun titre de loi ; jamais « doivent désormais » ; aucun décompte de FSP |
| V-24 | « La Banque du Canada ouvre les consultations sur les règlements » | idx fil, titre | U-60, U-61 | NON VÉRIFIÉ — NE PAS PUBLIER | Aucun projet repéré à la *Gazette*, Partie I : retirer |
| V-25 | L'Avis 21-333 « continue de régir » l'accès aux cryptoactifs arrimés | idx fil ; nl radar Ottawa | U-65 | NON VÉRIFIÉ — NE PAS PUBLIER | Réécrire en question : un jeton pourrait relever de deux régimes |
| V-26 | Détention directe fermée au REER et au CELI ; FNB soumis au Règlement 81-102 | idx fil, guides niv. 2 ; en | Folio S3-F10-C1 ; U-40, U-15 | À VÉRIFIER | Lire le folio ; sans liste, sans émetteur, sans date |
| V-27 | Faisceau d'indices : gain en capital ou revenu d'entreprise ; gain « imposable pour moitié » | idx fiscalité ; nl §04 | IT-479R, **archivé** ; hausse annulée le 21 mars 2025 | À VÉRIFIER | Ne pas donner un bulletin archivé pour un texte en vigueur ; confirmer le taux sur la LIR |
| V-28 | Jalonnement : « revenu à la réception ou à la disposition ? » | idx guides niv. 2 | U-37 | À VÉRIFIER | Forme interrogative : conforme. Ne jamais prêter la pratique des cabinets à l'ARC |
| V-29 | Un cryptoactif peut être un bien étranger déterminé (T1135) | idx fiscalité, guides ; en | Base §3.3 ; U-39 | À VÉRIFIER | Seuil de 100 000 $ non cité : conforme ; le situs reste notionnel |
| V-30 | Le minage entraîne le refus des crédits de taxe sur les intrants | idx fiscalité | Art. 188.2 LTA ; Avis nº 324 | À VÉRIFIER | Aucun numéro cité : conforme. Lire l'avis, version de juin 2025 |
| V-31 | Échéances du 30 avril, du 15 juin et du 15 mars | idx échéancier | Aucune — absentes de la base | NON VÉRIFIÉ — NE PAS PUBLIER | Vérifier sur canada.ca et revenuquebec.ca : un échéancier faux est le pire |
| V-32 | « Le calendrier canadien du CDC reste à confirmer » | idx échéancier | C-06 | VÉRIFIÉ | Conforme. Aucune date avant lecture de la partie XXI de la LIR |
| V-33 | Graphie « crypto-actifs », sigle français, « fenêtre pour régulariser » | idx échéancier ; nl radar International | C-17 ; C-06 | NON VÉRIFIÉ — NE PAS PUBLIER | Écrire « Cadre de déclaration des cryptoactifs (*Crypto-Asset Reporting Framework*, CARF) » |
| V-34 | Désabonnement sous 10 jours ouvrables, mécanisme valide 60 jours, consentement exprès | idx formulaire ; nl pied | Base §3.5 ; U-46 ; DORS/2012-36 | À VÉRIFIER | Aucun renvoi d'article : conforme (seul l'art. 33 l'est). Vérifier délais et forme |
| V-35 | Conservation de la date, de l'IP et de la page de consentement | nl pied | LCAP (preuve) contre Loi 25 (minimisation) | NON VÉRIFIÉ — NE PAS PUBLIER | Le portail refuse ailleurs de traiter une IP « sans nécessité » : positions opposées |
| V-36 | « Données hébergées au Canada » ; « politique de confidentialité (Loi 25 / LPRPDE) » | idx bloc infolettre et pied ; nl pied | U-75 ; U-56 | NON VÉRIFIÉ — NE PAS PUBLIER | Distinguer application, base, diffusion, journaux ; établir le régime applicable avant d'annoncer les deux lois |
| V-37 | « Accessibilité (WCAG 2.1 AA) » | idx `.pied__legal` | Base §3.6 : cible **volontaire** | NON VÉRIFIÉ — NE PAS PUBLIER | Se lit comme une déclaration de conformité, sans audit : requalifier ou auditer |
| V-38 | Adresse De La Gauchetière, téléphone 514 555-0142, « Actio Média inc. », domaine `actio.ca` | idx pied ; nl pied | Aucune | NON VÉRIFIÉ — NE PAS PUBLIER | 555-01xx est réservé à la fiction ; la LCAP exige une adresse **valide**. Vérifier au Registraire des entreprises |
| V-39 | Signature « Marie-Claude Fortin », déclaration d'intérêts, clé publique | art `.bio` ; nl §01 | Aucune — personne de maquette | NON VÉRIFIÉ — NE PAS PUBLIER | Signer une déclaration d'intérêts au nom d'un inexistant : défaut le plus grave |
| V-40 | Cours BTC 148 720 $, ETH 5 340 $, SOL 268 $, CAD/USD 0,7412 | nl cotations | Valeurs déclarées illustratives | NON VÉRIFIÉ — NE PAS PUBLIER | Le site affiche « — » et « flux non branché » : neutraliser aussi le gabarit |
| V-41 | « 5 sources primaires » ; « 100 % sources primaires citées » | nl en-tête ; idx bloc infolettre | Contredit par la présente annexe | NON VÉRIFIÉ — NE PAS PUBLIER | Zéro source primaire lue. Ne rétablir qu'une fois l'état majoritairement `VÉRIFIÉ` |
| V-42 | Actio n'est inscrite à aucun titre ; aucune cession de renseignements ; parution le mardi 6 h 30 HE | idx avertissement, bloc infolettre ; nl pied | Faits internes | VÉRIFIÉ | Réattester à chaque évolution d'Actio Pro ; l'inscrire aux contrats de sous-traitance |
| V-43 | Le bandeau `.demo` renvoie au présent registre | idx l. 37 ; art l. 30-35 ; en l. 27-32 | Constat de code | VÉRIFIÉ | Lien réparé, l. 37 : le `href` remonte désormais de deux niveaux (`../../`) et non d'un seul, et vise `docs/annexes/registre-de-verification.md` ; `tools/verifier.mjs` ne signale plus de lien interne cassé. Le renvoi reste **absent** de `article.html` et de `en/index.html` : à poser |
| V-44 | « OCRI » en français, « CIRO » en anglais ; « permis » réservé à l'ESM | Prototype et infolettre | Base §4, règles 2 et 4 | VÉRIFIÉ | Conforme ; l'unique « OCRCVM » est historique. Recontrôler chaque page |

---

### A.3 Procédure de contrôle

**Qui.** Le **chef de pupitre** ouvre le registre de l'article avant écriture. Le **réviseur
juridique** contrôle et signe chaque levée. La **rédactrice en chef** seule autorise la publication
et tranche les états. La **rédactrice en chef adjointe** tient le registre consolidé.
L'**intégrateur** conserve les captures horodatées. Aucun auteur ne lève ses propres lignes.

**Quatre passes.** (1) *Extraction* — ouvre une ligne toute chaîne correspondant à
`\b(19|20)\d{2}\b`, `\d[\d\s]*\$`, `21-3\d{2}`, `33-757`, `31-103`, `81-102`, `13-50[23]`, `RLRQ`,
`L.C.`, `L.R.O.`, `DORS/` ou `C-\d{1,2}` ; un numéro de projet de loi ne s'écrit jamais sans sa
législature et sa session. (2) *Contrôle sur source primaire* — une seule source fait foi par
nature d'acte ; un cabinet, un média spécialisé ou un résumé de moteur sont des **signaux**, jamais
des sources de droit. (3) *Contre-lecture* par une personne étrangère à l'article — la formulation
publiée doit être celle qu'impose le registre des incertitudes, mot pour mot. (4) *Levée* — URL
exacte, date de consultation, initiales du valideur ; la ligne correspondante de la section 5 de la
base est retirée le jour même.

| Nature de l'affirmation | Point d'entrée primaire | Ce qu'on y capture |
|---|---|---|
| Loi fédérale consolidée | `laws-lois.justice.gc.ca` | Article, version à la date, entrée en vigueur |
| Règlement fédéral pris | *Gazette*, Partie II — `gazette.gc.ca/rp-pr/p2/` (mercredi, une semaine sur deux, 9 h HE) | DORS, enregistrement, effet |
| Projet de règlement | *Gazette*, Partie I — `gazette.gc.ca/rp-pr/p1/` (samedi officiel, en ligne le vendredi 14 h HE) | Volume, numéro, délai de commentaires |
| État d'un projet de loi | LEGISinfo, `parl.ca` ; `lop.parl.ca` | Étape, sanction, chapitre des L.C., décrets |
| Loi ou règlement québécois | `legisquebec.gouv.qc.ca` | Chapitre RLRQ, article, alinéa, historique |
| Décision de tribunal | `canlii.org`, puis site de l'autorité | Référence neutre, dossier, dispositif, appel |
| Avis du personnel des ACVM | PDF sur `osc.ca`, `lautorite.qc.ca`, `fcnb.ca` | Date, titre français officiel, périmètre |
| Publication de l'OCRI | `ocri.ca` (FR) et `ciro.ca` (EN) | Numéro et nature exacte de l'instrument |
| Directive du CANAFE | `fintrac-canafe.canada.ca` | Seuils, obligations, date de mise à jour |
| Position fiscale | `canada.ca` (ARC) ; `revenuquebec.ca` | Guide, folio, avis TPS/TVH, millésime |
| Prudentiel et paiements | `osfi-bsif.gc.ca` ; `bankofcanada.ca` | Ligne directrice, date d'effet, registre des FSP |
| Courriel commercial, vie privée | `crtc.gc.ca` ; `priv.gc.ca` ; `cai.gouv.qc.ca` | Forme, délai, régime de sanction |
| Terminologie | *Vocabulaire de la cryptomonnaie* de l'OQLF | Équivalent français retenu |

**Bilinguisme.** Avant de citer un document de la CVMO en français, vérifier qu'une version
française existe (U-14) : plusieurs n'existent qu'en anglais. L'anglais se contrôle dans les mêmes
passes que le français, jamais après publication.

**Une affirmation invérifiable a trois issues, et trois seulement.** (i) **Suppression**, par défaut
quand elle ne porte pas l'analyse. (ii) **Reformulation prudente** : la colonne « Formulation
prudente à employer » du registre des incertitudes est reprise mot pour mot, avec le marqueur
`[À VÉRIFIER]` en `.badge--consultation` et le bloc `.boite__ref` — non une suggestion, mais le
texte publiable. (iii) **Report** jusqu'à réouverture de la source. Publier en signalant
l'incertitude en note de bas de page reste publier.

**Délais.** Analyse courante : 2 jours ouvrables ; dossier ou guide : 5. Infolettre : contenu gelé
le **lundi 12 h** pour un envoi le mardi 6 h 30 (HE). Une ligne signalée par une autorité suit le
délai de 4 heures ouvrées de la politique de correction.

---

### A.4 Règle de publication

1. **Aucun contenu ne quitte la rédaction tant qu'il subsiste une ligne « NON VÉRIFIÉ » qui le
   concerne.** Le bandeau `.demo` (`--demo-fond` `#8A5300`, `--demo-texte` `#FFFFFF`) est un aveu
   interne, pas une autorisation : il ne purge aucune ligne.
2. **Toute ligne « À VÉRIFIER » est soit levée, soit reformulée** dans les termes exacts du registre
   des incertitudes, marqueur visible dans le corps du contenu, jamais en page de mentions.
3. **Une levée non signée est nulle** : sans URL, date de consultation ni initiales, la ligne reste
   ouverte.
4. **Symétrie linguistique** : `en/index.html` ne peut affirmer ce que `fr/index.html` marque comme
   incertain, ni l'inverse.
5. **Régression** : toute modification d'un contenu publié rouvre les lignes qu'elle touche ; une
   correction de niveau 3 ou 4 rouvre l'article entier.
6. **Portée** : site, infolettre, réseaux sociaux, extraits transmis à un tiers, captures partagées.

| État | Effet | Qui peut le changer |
|---|---|---|
| `VÉRIFIÉ` | Publiable tel quel | Personne : la ligne est retirée, jamais modifiée |
| `À VÉRIFIER` | Publiable dans la seule formulation prudente, marqueur visible | Réviseur juridique, contresigné par la rédactrice en chef |
| `NON VÉRIFIÉ — NE PAS PUBLIER` | Bloque tout le contenu concerné | Rédactrice en chef, sur pièce primaire seulement |

**État au 4 septembre 2026 :** sur 44 lignes, 5 sont `VÉRIFIÉ` — et aucune ne porte sur le droit ;
15 sont `À VÉRIFIER` ; 24 sont `NON VÉRIFIÉ — NE PAS PUBLIER`. Aucune page du prototype, aucune
section de l'infolettre n'est publiable au sens de la règle 1.

---

### Ce qui reste à trancher

1. **La signature fictive (V-39).** Tant que Marie-Claude Fortin n'existe pas, le nom, la fonction,
   la déclaration d'intérêts et la clé publique tombent ensemble : attribuer l'article à la
   rédaction, ou l'écrire sous une signature réelle.
2. **L'ordre de réouverture des sources.** Sept lectures débloquent le plus de lignes : Avis 21-327,
   Avis 21-330, communiqué du 6 août 2024, page ESM de Revenu Québec, décision du TMF du 22 août
   2025, cadre de garde de l'OCRI, dispositions de forme de la LCAP. Cet ordre, ou d'abord ce qui
   bloque l'infolettre nº 001 ?
3. **La contradiction sur l'adresse IP (V-35).** Le portail refuse d'en traiter une pour deviner une
   langue ; l'infolettre en conserve une comme preuve de consentement. L'une des deux positions doit
   céder avant le premier envoi.
4. **La promesse « 100 % sources primaires citées » (V-41).** La maintenir bloque toute publication
   jusqu'à réouverture complète ; la retirer coûte l'argument de vente.
5. **La publicité de ce registre.** Il crédibilise auprès d'un lectorat de juristes, et expose les
   points faibles à qui voudrait contester un article.
6. **La péremption d'une levée.** Rien n'en fixe la durée. Une vérification faite sur une page de
   l'ARC « mise à jour en continu » (U-39) vaut-elle six mois plus tard ?
