## 3. La séquence de bienvenue automatisée

> **Avertissement opposable.** Le fond juridique des trois courriels provient de
> `research/00-base-factuelle-consolidee.md`, arrêtée au 4 septembre 2026 et bâtie sur des résumés de
> moteur de recherche, l'accès direct aux sites des régulateurs ayant été bloqué. **Aucun texte primaire
> n'a été lu.** Les corps ci-dessous sont rédigés mot pour mot et prêts à intégrer ; chaque affirmation
> juridique doit être rouverte à la source et datée avant le premier envoi, selon le point 1 du § 2.2.6.

### 3.1 Architecture de la séquence

#### 3.1.1 Le double consentement, et pourquoi Actio l'impose

La LCAP exige un **consentement exprès** ; elle n'exige pas qu'il soit confirmé une seconde fois. Ce
qu'elle exige en revanche, et que la fiche 06 identifie comme le point d'appui du régime, c'est que **le
fardeau de la preuve du consentement pèse sur l'expéditeur**. Le double consentement n'ajoute pas une
obligation : il fabrique la preuve de celle qui existe.

| Le formulaire seul produit | Le clic de confirmation ajoute |
|---|---|
| Une case cochée, un horodatage, une adresse IP, un libellé — tous saisis par un navigateur, sans preuve que le titulaire de l'adresse était présent | La preuve que **le titulaire de la boîte** a agi : le jeton n'est réclamable que depuis la boîte visée. Une adresse saisie par un tiers, par faute de frappe ou par malveillance, n'est jamais confirmée |
| Une seule manifestation, alors que la Loi 25 exige un consentement « manifeste, libre et éclairé » | Une seconde manifestation, distincte et horodatée, sur un support que l'abonné contrôle |
| Une politique écrite | Un **contrôle technique** — l'art. 33 LCAP n'admet la diligence raisonnable que si le programme est documenté et **actif au moment de la violation** (Bulletin d'information de Conformité et Enquêtes CRTC 2014-326) |

**Prix payé, assumé.** Une part des inscriptions ne sera jamais confirmée. Le § 1.6 refuse déjà la taille
brute de la liste comme indicateur, parce qu'elle valorise des inscriptions dont le consentement n'est pas
prouvable. **Seuil interne** : sous **55 %** de confirmations après 500 dépôts de formulaire, on réécrit le
courriel de confirmation et la page `/fr/infolettre/confirmation/` avant toute autre optimisation.
`[À VÉRIFIER — la base ne fournit aucun repère de marché ; 55 % est un seuil de déclenchement interne.]`

**Le courriel de confirmation.** Il n'est pas le courriel 1 : il ne livre rien et ne promeut rien.
Expéditeur `Actio Dispatch <dispatch@actio.ca>`. Objet : « Confirmez votre inscription à Actio Dispatch »
(44 car.). Pré-en-tête : « Un seul clic, valable sept jours. Sans lui, votre adresse est supprimée et vous
ne recevez rien. » (98 car.). Corps : le libellé **intégral** du consentement affiché dans
`.infolettre__consentement`, reproduit à l'identique ; la date, l'heure, l'adresse IP et l'URL de dépôt ;
un bouton unique « Confirmer mon inscription », jeton à usage unique **valable 7 jours** ; un lien « Je
n'ai rien demandé — supprimer définitivement cette adresse » ; l'identification d'`Actio Média inc.`, son
adresse postale et l'avertissement d'absence de conseil. Aucun lien de rubrique, pas le guide.

**Arbitrage sur la qualification.** Un message adressé à qui vient d'en faire la demande n'a pas de
finalité promotionnelle, mais la fiche 06 pose que « traiter tout envoi comme un MEC est la seule position
défendable ». Position retenue : il porte **l'identification, l'adresse postale et un mécanisme d'exclusion
fonctionnel** — donc satisfait aux exigences de forme s'il devait être requalifié — sans aucun contenu
commercial. **Une seule relance, à +48 h**, ne contenant que le lien. **Purge à J+7** : la fiche en attente
est détruite, non archivée, la Loi 25 imposant la minimisation ; ce n'est pas une liste de suppression.

#### 3.1.2 Le calendrier des trois courriels

Le point de départ est le **clic de confirmation**, jamais le dépôt du formulaire.

| Courriel | Décalage | Heure | Jetons nouveaux à créer |
|---|---|---|---|
| **C1 — Accueil et remise du guide** | J+0, **≤ 5 minutes** après le clic | Immédiat, tous jours, tous fuseaux | `{{lien_guide}}`, `{{date_premiere_edition}}` |
| **C2 — Pourquoi le cadre canadien est unique** | J+2 | 11 h 00 locales — V1 11 h 00 HE, V2 14 h 00 HE | `{{lien_carte_autorites}}` |
| **C3 — Naviguer dans les ressources** | J+5 | 11 h 00 locales, mêmes vagues | `{{lien_parcours}}` |

**Pourquoi J+0, J+2, J+5.** Trois contraintes se croisent. (i) *La fenêtre de reconnaissance* : passé une
semaine, le troisième courriel devient une sollicitation non demandée — ce que la LCAP ne sanctionne pas,
mais que la plainte pour pourriel sanctionne. (ii) *La périodicité de l'édition* : une séquence de douze
jours croiserait deux éditions et rendrait indémêlable, en mesure, ce qui relève de chacune. (iii) *La
densité de C2* : placé à J+1, il serait ouvert dans la même session que C1 et lu en diagonale.

**Pourquoi 11 h 00 et non 6 h 30.** Le créneau de 6 h 30 HE est une promesse affichée —
`.infolettre__preuve` porte « Mardi · 6 h 30 » et « Heure de l'Est ». Un courriel de séquence à cette heure
usurperait la signature de l'édition. Onze heures est le second creux de la boîte professionnelle.

**Jours interdits pour C2 et C3.** Un envoi dû un **mardi** (jour d'édition), un **samedi** ou un
**dimanche** glisse au jour ouvrable autorisé suivant, même heure. C1 y échappe : il livre ce que la
personne vient de réclamer, et le retenir romprait l'attente créée par le clic.
`[À VÉRIFIER — la base ne recense aucun jour férié ; la table `jours_interdits` est revue chaque décembre
par la diffusion.]`

| Confirmation | C1 | C2 (J+2) | C3 (J+5) | 1re édition |
|---|---|---|---|---|
| Lundi 14 h | Lundi 14 h 05 | Mercredi | Samedi → **lundi** (J+7) | Mardi J+8 |
| Mardi 9 h | Mardi 9 h 05 | Jeudi | Dimanche → **lundi** (J+6) | Mardi J+7 |
| Vendredi 18 h | Vendredi 18 h 05 | Dimanche → **lundi** (J+3) | Mercredi (J+5) | Mardi J+4 — **avant C3** |

**L'entrelacement est permis, la superposition ne l'est pas.** La dernière ligne montre une édition
intercalée dans la séquence : c'est accepté, C3 orientant vers le site et non vers l'infolettre. Ce qui est
interdit, c'est deux courriels le même jour (§ 3.1.4).

#### 3.1.3 Conditions de sortie de séquence

| Nº | Événement | Effet sur la séquence | Effet sur l'abonnement |
|---|---|---|---|
| S-1 | Clic sur `{{lien_desabonnement}}` | Arrêt immédiat | Retrait complet, traité sous **10 jours ouvrables** ; mécanisme fonctionnel **60 jours** |
| S-2 | Plainte pour pourriel | Arrêt immédiat | Suppression totale, **sans courriel de sortie** : un message de plus est un aveu |
| S-3 | Rebond permanent sur C1 | Arrêt immédiat | Adresse suppressée ; la fiche de consentement est **conservée** (preuve LCAP) |
| S-4 | Deux rebonds temporaires consécutifs | Report de 24 h, puis reprise ; arrêt au troisième | Inchangé |
| S-5 | Clic sur « ne recevoir que l'édition du mardi », en bas de C1 et C2 | Arrêt de la séquence seule | Maintenu ; entrée immédiate dans la liste hebdomadaire |
| S-6 | Déclaration du profil (appel à l'action de C1) | **Aucune sortie** : choisit la variante de C3 | Segment S1 à S4 renseigné (§ 1.4) |
| S-7 | Aucune ouverture ni clic sur les trois | Fin normale | Bascule en segment **S5 — réengagement** après 8 éditions sans clic |
| S-8 | Réinscription d'une adresse en liste de suppression | **Non déclenchée** ; message unique vers `/fr/infolettre/preferences/` | Réactivation manuelle seulement |

S-8 est une décision de conformité : réenclencher une séquence sur une adresse antérieurement désabonnée
écraserait un retrait de consentement par un nouveau formulaire. La réactivation est instruite par la
personne responsable de la protection des renseignements personnels, désignée **et publiée** comme la
Loi 25 l'impose.

#### 3.1.4 Articulation avec l'édition hebdomadaire

| Règle | Formulation exécutable |
|---|---|
| **A — Gel de la liste** | La liste d'envoi est figée le **mardi à 5 h 30 HE**, 60 minutes avant l'envoi de masse : le gel s'aligne sur le point 18 du § 2.2.6 |
| **B — Quarantaine de 24 heures** | Toute adresse dont la **confirmation** date de moins de **24 heures** au moment du gel est exclue de l'édition |
| **C — Unicité quotidienne** | Aucun abonné ne reçoit plus d'un courriel par jour civil, fuseau du destinataire ; en cas de collision **l'édition prime**, le courriel de séquence glisse d'un jour |

La règle B fait le travail de fond : elle garantit que C1 et l'édition ne tombent jamais le même jour, et
produit mécaniquement la promesse de C1 — la première édition reçue est **le premier mardi situé à plus de
24 heures après la confirmation**. Cette date, calculée à l'envoi, est écrite en toutes lettres dans C1 ;
elle n'est jamais approximée par « la semaine prochaine ».

**Conséquence d'intégration.** Les trois courriels passent par la chaîne de l'édition — `chassis.html`, un
fragment dans `newsletter/contenus/`, une entrée de manifeste — avec `bandeau_cours: false`, qui retire le
bloc `<!--DEBUT:COURS-->` … `<!--FIN:COURS-->`. Clés : `bienvenue-01`, `bienvenue-02`, `bienvenue-03`. Le
fichier `newsletter/manifeste.json` que lit `tools/emails.mjs` **n'existe pas encore dans le dépôt** :
premier ticket. `MENTIONS_OBLIGATOIRES` reçoit une septième entrée, propre à `bienvenue-01` :
`{{lien_guide}}` — un courriel d'accueil qui ne livre pas le guide qu'il annonce doit être un échec de
compilation, pas une coquille.

### 3.2 Les trois courriels

**Fiche technique des trois envois.** Expéditeur affiché identique pour les trois — **Actio Dispatch**,
`dispatch@actio.ca`, `Reply-To: redaction@actio.ca` : changer de nom d'affichage en cours de séquence
disperse la réputation d'expéditeur et casse la reconnaissance en boîte de réception. Objets sous le
plafond dur de 60 caractères du § 1.3, sans émoji, sans capitale d'insistance.

| | **C1 — Accueil et guide** | **C2 — Le cadre canadien** | **C3 — Les ressources** |
|---|---|---|---|
| **Objet témoin** | Bienvenue. Votre guide de conformité est prêt. (46) | Aucune commission fédérale des valeurs mobilières (48) | Par où commencer dans les ressources d'Actio (43) |
| **Variante A/B nº 1** | Votre guide de conformité canadienne est prêt (45) | Pourquoi le Canada n'a pas de gendarme unique (44) | Le registre, l'agenda, les trois parcours (40) |
| **Variante A/B nº 2** | C'est confirmé — et voici le guide (34) | Un cadre bâti sur des avis, pas des règlements (48) | Ce qu'il faut ouvrir en premier chez Actio (43) |
| **Pré-en-tête** | *Ce qu'Actio est, ce qu'Actio n'est pas, la date de votre première édition, et une question à une ligne.* (104) | *Quatre régimes se superposent sur une même plateforme : valeurs mobilières, autoréglementation, LBC/FT fédéral, permis québécois.* (128) | *Cinq rubriques, trois paliers de guides, un registre daté et un agenda : chacun résout un problème précis.* (105) |
| **Appel à l'action unique** | **Déclarer son profil** — deux boutons, une seule décision | **Ouvrir la carte des autorités canadiennes** → `/fr/autorite/` | **S1** « Commencer le parcours Niveau 1 » → `/fr/guides-education/niveau-1-fondamentaux/` · **S2** « Demander l'accès d'essai à *Actio Pro* » → `/fr/actio-pro/` |

#### Courriel 1 — Accueil, positionnement et remise du guide

**Corps du message**

> **Votre inscription à *Actio Dispatch* est confirmée.**
>
> Vous recevrez une édition par semaine, le mardi à 6 h 30, heure de l'Est. La première vous parviendra le
> **{{date_premiere_edition}}**. Entre-temps, deux courriels : dans deux jours, pourquoi le cadre canadien
> ne ressemble à aucun autre ; dans cinq jours, par où commencer dans nos ressources. Ensuite, plus rien
> que l'édition du mardi.
>
> **Votre guide est ici.**
>
> **[Ouvrir le *Guide de conformité crypto au Canada* →]**
>
> Trente-quatre pages, arrêtées au {{date_arret_guide}}. Chaque affirmation y porte son texte de renvoi et
> sa date de consultation ; ce qui n'est pas établi y est écrit comme n'étant pas établi.
>
> **Ce qu'Actio est.** Un média canadien indépendant qui lit les actes réglementaires à la source et dit
> ce qu'ils obligent, qui ils obligent et à partir de quand. Bilingue, établi au Québec, sans contenu
> commandité et sans lien d'affiliation.
>
> **Ce qu'Actio n'est pas.** Actio n'est inscrite à aucun titre auprès des Autorités canadiennes en
> valeurs mobilières, de l'Autorité des marchés financiers, de la Commission des valeurs mobilières de
> l'Ontario ni de l'Organisme canadien de réglementation des investissements. Nous ne fournissons ni
> conseil en placement, ni conseil juridique, ni conseil fiscal. Nous ne recommandons aucun actif et ne
> publions aucun objectif de cours. Si vous cherchez à savoir quoi acheter, vous êtes au mauvais endroit ;
> si vous cherchez à savoir ce qui vous oblige, restez.
>
> **Une seule chose vous est demandée aujourd'hui.** Dites-nous comment vous lisez Actio. Cela change
> l'ordre des sections de votre édition, pas la matière — et jamais le pied de page.
>
> **[Je lis Actio à titre personnel]**  **[Je lis Actio pour mon métier]**
>
> Vous pouvez ne pas répondre : c'est facultatif, et la lecture reste identique.
>
> — La rédaction d'Actio
>
> *Je préfère ne recevoir que l'édition du mardi : [arrêter ces deux courriels].*

**Le guide remis — sommaire réel.** Page HTML permanente sous
`/fr/guides-education/guide-de-conformite/`, doublée d'un fichier téléchargeable. **Aucune pièce jointe** :
elle dégraderait la délivrabilité et priverait Actio de la possibilité de corriger après diffusion, ce que
la politique de correction impose.

| Ch. | Titre | Contenu |
|---|---|---|
| 1 | Qui régule quoi | La carte des autorités — ACVM, AMF, CVMO, OCRI, TMF, CANAFE, Revenu Québec, ARC, Banque du Canada, BSIF, CRTC, CAI, OQLF — chacune avec son objet de compétence et le type de publication à surveiller |
| 2 | Le contrat de cryptoactif | L'Avis 21-327 du personnel des ACVM, publié en janvier 2020 : l'absence de livraison immédiate fait naître une relation contractuelle soumise au droit des valeurs mobilières. Puis *AMF c. Gagnon* (TMF, 22 août 2025) : gérer les ETH d'investisseurs contre 20 % des profits est un contrat d'investissement ; vendre un abonnement à un groupe de signaux n'en est pas un |
| 3 | Vérifier une plateforme en quatre minutes | Partir des **deux listes officielles des ACVM** — autorisées, proscrites — les dater, puis lire la décision d'inscription. Quatre statuts à distinguer : engagement préalable, courtier restreint, courtier en placement, membre de l'OCRI |
| 4 | La garde des actifs | Règles CPPC 4300 et 4342 de l'OCRI — garde, emplacement de titres agréé, séparation quotidienne, obligation de résultat faisant échapper aux créanciers les actifs entièrement payés — puis le cadre de garde publié le 3 février 2026, qui classe les dépositaires par paliers et limite l'autogarde |
| 5 | Le second régime : LBC/FT | LRPCFAT (L.C. 2000, ch. 17) : l'inscription auprès du CANAFE est **déclarative** — ni capital minimum, ni cautionnement, ni agrément prudentiel. Depuis le 1er juin 2021 : déclaration des réceptions de monnaie virtuelle de 10 000 $ et plus, règle de 24 heures, règle d'acheminement, tenue de documents. Le projet de loi C-12, sanctionné le 26 mars 2026 |
| 6 | Le troisième régime : le permis québécois | Le permis d'entreprise de services monétaires de la *Loi sur les entreprises de services monétaires* (RLRQ c. E-12.000001), obligatoire depuis le 1er avril 2012 et **distinct** de l'inscription en valeurs mobilières |
| 7 | La fiscalité en dix décisions | Les cryptoactifs sont des **biens**, non de la monnaie, et chaque disposition est un fait générateur. Les facteurs des par. 9 à 13 du bulletin IT-479R. Le taux d'inclusion demeure **50 %** — hausse annulée le 21 mars 2025. T1135 : seuil de **coût total supérieur à 100 000 $**, et non de juste valeur marchande ; pénalité de 25 $ par jour, minimum 100 $, maximum 2 500 $. TP-21.4.39, exigible depuis l'année d'imposition 2024 même sans opération. Détention directe non admissible en REER, CELI et CELIAPP ; impôt de 50 % de la juste valeur marchande du placement non admissible. Minage : art. 188.2 LTA, crédits de taxe sur les intrants refusés. Effet de paiement virtuel : fourniture exonérée. Jetons non fongibles : fournitures taxables, seuil de petit fournisseur 30 000 $. *Amicarelli c. Le Roi*, 2025 CCI 185 |
| 8 | Les six questions ouvertes | Jalonnement, largages et embranchements : la pratique dominante des cabinets et des CPA retient l'inclusion au revenu de la juste valeur marchande à la réception, **et cette pratique n'est pas une position de l'ARC**. Finance décentralisée. Le calendrier du Cadre de déclaration des cryptoactifs (*Crypto-Asset Reporting Framework*, CARF), modifié par le Budget de 2025. Le régime fédéral des cryptomonnaies stables édicté par le projet de loi C-15 : **édicté, non en vigueur**. Le sort des inscriptions de courtier restreint encore actives. L'articulation avec le régime intérimaire de l'Avis 21-333 |

Trois annexes : **A**, le lexique bilingue français / anglais canadien d'Actio ; **B**, la chronologie
2020-2026, sans les jours de publication contredits entre fiches ; **C**, le modèle de fiche de
vérification d'une plateforme, aux six colonnes du registre.

**Ce que le guide n'affirme nulle part**, par application du registre des incertitudes : le nombre de
membres des ACVM ; la référence neutre des décisions du TMF et l'existence d'un appel dans *Gagnon* ; tout
nom de plateforme repris d'une source secondaire et toute limite d'achat annuelle ; tout palier, plafond
d'actifs ou seuil de capital du cadre de garde de l'OCRI ; la périodicité et les frais de l'inscription au
CANAFE ainsi que le calendrier des décrets de C-12 ; **l'autorité délivrant le permis québécois d'ESM**,
tant qu'elle n'est pas vérifiée sur `revenuquebec.ca` (C-04) ; toute position de l'ARC sur le jalonnement ;
toute date d'application du Cadre de déclaration des cryptoactifs. Le chapitre 8 est écrit en entier au
conditionnel documenté.

**Note de conception.** C1 fait quatre choses. Il **tient la promesse** — le guide, en deuxième position,
avant tout discours de marque ; il **date l'avenir** en toutes lettres, par la règle B ; il **pose la
limite juridique** avant qu'un lecteur ne prête à Actio une qualité qu'elle n'a pas, le paragraphe « Ce
qu'Actio n'est pas » reprenant le périmètre du pied de page ; il **demande une seule chose**. La remise du
guide n'est pas comptée comme appel à l'action : c'est une livraison attendue, placée avant la demande
précisément pour que la demande vienne après un service rendu. Les deux boutons forment **une** décision à
deux issues, alignée sur le champ facultatif « Vous lisez Actio… » du § 1.4 ; « Vous pouvez ne pas
répondre » est exigé par la minimisation de la Loi 25 — une collecte facultative doit être présentée comme
telle.

#### Courriel 2 — Pourquoi la régulation canadienne est unique au monde

**Corps du message**

> **Il n'existe pas de commission fédérale des valeurs mobilières au Canada.**
>
> Ce n'est pas un détail d'organigramme : c'est la clé de tout ce qui suit. La compétence en valeurs
> mobilières appartient aux provinces et aux territoires ; chacun a son autorité — l'Autorité des marchés
> financiers au Québec, la Commission des valeurs mobilières de l'Ontario, et ainsi de suite. Les
> **Autorités canadiennes en valeurs mobilières** ne sont pas une commission nationale : c'est le **forum**
> où ces autorités se coordonnent. Les ACVM ne délivrent aucune inscription. Elles publient des règlements
> et des normes que chaque province adopte pour son propre compte, des avis du personnel de la série
> 21-xxx, et des communiqués conjoints. **Première conséquence : le droit applicable dépend de votre
> province de résidence.** Une plateforme inscrite en Ontario ne l'est pas nécessairement au Québec, et une
> décision du Tribunal administratif des marchés financiers ne lie pas le Tribunal des marchés financiers
> de l'Ontario.
>
> **Deuxième particularité : ce cadre est bâti sur des avis, non sur des règlements.**
>
> L'Avis 21-327 du personnel des ACVM, publié en janvier 2020, énonce que l'absence de livraison immédiate
> d'un cryptoactif fait naître une relation contractuelle soumise au droit des valeurs mobilières : c'est
> le « contrat de cryptoactif ». L'Avis conjoint 21-329, publié en mars 2021, ouvre la voie du **courtier
> restreint** et l'**engagement préalable**. L'Avis 21-332, du 22 février 2023, renforce cet engagement
> après les faillites de 2022 : garde, séparation des actifs, interdiction du levier. L'Avis 21-333, du
> 5 octobre 2023, institue un régime intérimaire pour les **cryptoactifs arrimés à une valeur**. Le
> communiqué conjoint des ACVM et de l'OCRI du 6 août 2024 met fin à l'approche intérimaire : les ACVM et
> l'OCRI attendent désormais des plateformes qu'elles déposent une demande d'inscription de courtier en
> placement.
>
> Aucun de ces textes n'est un règlement. Ils s'imposent par les **conditions d'inscription** consenties
> plateforme par plateforme et par les dispenses accordées au cas par cas. C'est un cadre rapide ; c'est
> aussi un cadre où la sécurité juridique et le contrôle judiciaire sont plus faibles qu'ailleurs. Un média
> qui ne lit que les lois ne voit rien de ce droit-là.
>
> **Troisième couche : l'autoréglementation.** L'Organisme canadien de réglementation des investissements,
> né de la fusion de l'OCRCVM et de l'ACFM en 2023, encadre les plateformes devenues courtiers en
> placement. Ses Règles CPPC 4300 et 4342 imposent la garde, l'emplacement de titres agréé et une
> séparation quotidienne. Le cadre de garde des actifs numériques qu'il a publié le 3 février 2026 classe
> les dépositaires par paliers et limite l'autogarde — et il est imposé par conditions d'adhésion, non par
> règle publiée.
>
> **Quatrième couche, fédérale : la lutte contre le recyclage des produits de la criminalité.** Ici, la
> compétence est fédérale et le régulateur unique : le CANAFE. L'inscription y est **déclarative** : ni
> capital minimum, ni cautionnement, ni agrément prudentiel. Depuis le 1er juin 2021 s'appliquent la
> déclaration des réceptions de monnaie virtuelle de 10 000 $ et plus, la règle de 24 heures et la règle
> d'acheminement. Le projet de loi C-12, sanctionné le 26 mars 2026, multiplie par quarante les pénalités
> administratives pécuniaires, généralise l'inscription des entités déclarantes et crée une violation très
> grave visant un programme de conformité qui n'est pas efficace. Ses volets entrent en vigueur **par
> décret** : leur calendrier doit être vérifié au cas par cas.
>
> **Cinquième couche, québécoise.** Offrir certains services monétaires au Québec suppose un **permis
> d'entreprise de services monétaires**, prévu par la *Loi sur les entreprises de services monétaires* et
> obligatoire depuis le 1er avril 2012. Ce permis est **distinct** de l'inscription en valeurs mobilières
> et de l'inscription auprès du CANAFE : trois régimes, trois dossiers, trois autorités.
>
> **Ce que cela change pour vous, investisseur.** La question utile n'est pas « cette plateforme est-elle
> réglementée ? » mais « est-elle inscrite auprès de l'autorité de **ma** province, et à quel titre ? ».
> Une plateforme non inscrite auprès de l'autorité de votre province ne vous fait bénéficier d'aucune des
> protections prévues par la législation en valeurs mobilières, y compris en cas d'insolvabilité. Deux
> listes officielles des ACVM font foi — autorisées, proscrites — mises à jour en continu.
>
> **Ce que cela change pour vous, plateforme.** Vous ne cumulez pas des formalités : vous cumulez des
> régimes, dont chacun a son autorité, son vocabulaire et son calendrier. Un manquement dans l'un ne
> s'excuse pas par la conformité dans un autre. Et comme l'essentiel de l'encadrement passe par des
> conditions d'inscription, **votre propre décision d'inscription est votre premier texte applicable** —
> avant tout avis, avant tout règlement.
>
> **[Ouvrir la carte des autorités canadiennes →]**
>
> — La rédaction d'Actio
>
> *Je préfère ne recevoir que l'édition du mardi : [arrêter ce dernier courriel].*

**Note de conception.** C2 est le seul courriel qui ne demande rien. Son rôle est de **justifier la
promesse** : qui admet que le cadre canadien est irréductible aux cadres américain et européen admet du
même coup qu'un média canadien spécialisé lui est nécessaire. La structure est délibérément une
**superposition** de cinq couches numérotées, parce que c'est la forme du problème réel. La double sortie
« investisseur / plateforme » sert de test comportemental : le lien cliqué renseigne le segment lorsque le
profil n'a pas été déclaré en C1.

**Trois précautions incorporées au texte.** (i) Le nombre de membres des ACVM n'est **pas** écrit.
`[À VÉRIFIER — ne jamais écrire « treize autorités » avant vérification.]` (ii) Le **régime de passeport
est absent de la base factuelle** : aucune phrase ne le décrit ni ne le nomme ; ne sont décrits que les
instruments documentés — règlements et normes canadiennes, avis du personnel, communiqués conjoints,
décisions d'inscription provinciales. `[À VÉRIFIER]` (iii) L'autorité délivrant le permis québécois d'ESM
**n'est pas nommée** : contradiction C-04, dont le point 2 du § 2.2.6 fait un contrôle bloquant à la
charge de la juriste-réviseure.

#### Courriel 3 — Comment naviguer dans les ressources d'Actio

**Corps du message** — l'ouverture et l'appel à l'action varient selon le profil déclaré ; le reste est
commun.

> *Ouverture, variante S1 — à titre personnel :*
> **Vous lisez Actio à titre personnel. Commencez par le registre, puis par le parcours Niveau 1.** Les
> deux répondent aux seules questions qui vous engagent : cette plateforme est-elle inscrite là où
> j'habite, et cette opération est-elle imposable ?
>
> *Ouverture, variante S2 — pour votre métier :*
> **Vous lisez Actio pour votre métier. Commencez par l'agenda réglementaire, puis par le parcours
> Niveau 3.** Les deux répondent aux seules questions qui engagent une direction de la conformité :
> qu'est-ce qui tombe ce trimestre, et où en est mon dossier de garde ?
>
> *Ouverture, variante par défaut — profil non déclaré :*
> **Vous n'avez pas déclaré de profil, et c'est très bien.** Voici les ressources classées par le problème
> qu'elles résolvent : ouvrez celle qui décrit le vôtre.
>
> *Commun :*
>
> **Le registre des plateformes — « celle que j'utilise est-elle inscrite ? »**
> Une ligne par plateforme : statut en valeurs mobilières, autorité principale, provinces couvertes, régime
> LBC/FT, dernière décision, lien vers la fiche officielle. Le registre ne remplace pas les deux listes des
> ACVM : il les rend lisibles, les date, et renvoie à elles. Aucune ligne n'y entre sur la foi d'un article
> de presse.
>
> **L'agenda réglementaire — « qu'est-ce qui tombe ce trimestre ? »**
> Les échéances de consultation, d'entrée en vigueur et de déclaration, par trimestre. Il porte aussi ce
> qui n'a **pas** de date : les volets du projet de loi C-12 qui entrent en vigueur par décret, le
> calendrier du Cadre de déclaration des cryptoactifs modifié par le Budget de 2025, l'entrée en vigueur du
> régime fédéral des cryptomonnaies stables — édicté le 26 mars 2026, et non en vigueur. Une échéance
> inconnue affichée comme inconnue vaut mieux qu'une échéance inventée.
>
> **Les cinq rubriques — « où va cette question ? »**
> *Régulation & ACVM* pour ce qu'un acte oblige et à partir de quand. *Marchés & Macro* pour la règle
> prudentielle ou monétaire qui rend une décision de marché possible ou interdite. *Guides & Éducation*
> pour passer d'un niveau de compétence au suivant. *Fiscalité canadienne* pour la qualification exacte
> d'une opération, au fédéral et au Québec, formulaires à l'appui. *Actio Pro* pour le suivi documenté d'un
> dossier.
>
> **Les trois paliers de guides — « je sais, ou je crois savoir ? »**
> *Niveau 1 — Déclarer ses cryptoactifs au Canada* : quatre guides, environ 45 minutes ; savoir si une
> opération est imposable, sous quelle qualification, et quoi conserver comme pièce. *Niveau 2 — Régimes
> enregistrés, jalonnement et revenus étrangers* : quatre guides, environ 1 h 10 ; là où la fiscalité
> devient contre-intuitive. *Niveau 3 — Conformité des plateformes et garde d'actifs* : quatre guides,
> environ 2 h ; inscription, garde, LBC/FT et responsabilité.
>
> ***Actio Pro* — « je dois en répondre devant un conseil. »**
> Notes de recherche, suivi de dossiers, registre enrichi et exportable, alertes, données structurées,
> séances trimestrielles à huis clos avec la rédaction. Abonnement institutionnel, facturation annuelle,
> sièges multiples, aucun contenu commandité. Si vous ne rendez de comptes à personne sur ces sujets,
> *Actio Pro* ne vous servira à rien : restez à l'infolettre, elle est gratuite et le restera.
>
> **[Commencer le parcours Niveau 1 →]** *(variante S1)*
> **[Demander l'accès d'essai à Actio Pro →]** *(variante S2)*
>
> À partir de mardi prochain, vous ne recevrez plus que l'édition hebdomadaire.
>
> — La rédaction d'Actio

**Note de conception.** Le danger de C3 est le catalogue : une liste de fonctionnalités qu'on parcourt sans
rien ouvrir. La parade est formelle — **chaque ressource est introduite par la question du lecteur, entre
guillemets, avant d'être nommée**. Deuxième parade : la phrase qui **décourage** l'abonnement à *Actio Pro*
pour qui n'en a pas l'usage ; elle protège l'indicateur de plaintes et vaut mieux qu'un essai résilié au
premier mois. Troisième décision : la dernière ligne **annonce la fin de la séquence** — un abonné qui sait
que les courriels s'arrêtent ne se désabonne pas pour vérifier qu'ils s'arrêteront.

#### Le pied de page de conformité, commun aux trois courriels

Il n'est pas rédigé ici : il est **déjà codé** dans `newsletter/chassis.html` et spécifié au § 2.2.5. Les
trois courriels le reçoivent à l'identique — rappel du fondement du consentement avec
`{{date_consentement}}`, `{{ip_consentement}}` et `{{source_consentement}}` ; identification d'`Actio Média
inc.` et adresse postale en dur ; désabonnement en un clic traité sous 10 jours ouvrables et fonctionnel
60 jours ; avertissement d'absence de conseil ; renvoi à la politique de confidentialité. Trois
différences, normatives.

| Nº | Delta propre à la séquence | Motif |
|---|---|---|
| D-1 | `{{date_consentement}}` porte l'horodatage du **clic de confirmation**, non du dépôt du formulaire | C'est la manifestation la plus probante ; le dépôt reste au registre de consentement sans être imprimé |
| D-2 | En-têtes `List-Unsubscribe` et `List-Unsubscribe-Post: List-Unsubscribe=One-Click` **obligatoires dès C1** | Le point 13 du § 2.2.6 vaut aussi pour la séquence ; un premier courriel est le pire moment pour manquer un désabonnement en un clic |
| D-3 | C1 et C2 portent, sous la signature, le lien « arrêter ces courriels » de la sortie S-5, **distinct** du désabonnement | Sortir de la séquence sans quitter l'infolettre doit être possible sans retirer son consentement |

### 3.3 Mesure et itération

Les indicateurs de la séquence sont distincts de ceux du § 1.6 : elle se mesure par abonné, non par
édition, et son taux d'ouverture n'y est pas plus fiable qu'ailleurs.

| Indicateur | Définition | Cible 3 mois | Seuil de réécriture |
|---|---|---|---|
| Taux de confirmation | Clics de confirmation ÷ dépôts de formulaire | 65 % | **< 55 %** → réécriture du courriel de confirmation et de `/fr/infolettre/confirmation/` |
| Remise du guide | Ouvertures de `{{lien_guide}}` ÷ C1 délivrés | 45 % | **< 30 %** → le bouton remonte au-dessus du premier paragraphe |
| Déclaration de profil | Clics sur l'un des deux boutons ÷ C1 délivrés | 22 % | **< 12 %** → appel à l'action reformulé ; **> 40 %** → le champ revient dans le formulaire du site |
| Clic unique de C2 | Abonnés ayant cliqué ≥ 1 lien ÷ C2 délivrés | 14 % | **< 8 %** → C2 est scindé ou raccourci ; c'est le plus long des trois |
| Clic unique de C3 | Idem | 11 % | **< 6 %** → l'ouverture variable cède la place à une version unique |
| Sortie S-5 | Clics « arrêter ces courriels » ÷ entrées en séquence | ≤ 4 % | **> 8 %** → séquence ramenée à deux courriels, C3 fondu dans C1 |
| Désabonnement en séquence | Désabonnements ÷ entrées en séquence | ≤ 1,2 % | **> 2 %** → arrêt et instruction du dossier par la juriste-réviseure |
| Plainte pour pourriel | Plaintes ÷ courriels de séquence délivrés | < 0,08 % | **> 0,15 %** → suspension immédiate, contrôle de la source des inscriptions |
| Survie à la 6e édition | Abonnés actifs six éditions après la fin de séquence ÷ sortis de séquence | 82 % | **< 70 %** → c'est **C1** qu'on réécrit, pas l'édition |

Le dernier indicateur est le seul qui juge la séquence pour ce qu'elle est : d'excellents clics suivis d'un
décrochage à la sixième édition signifient qu'elle a menti sur le produit.

**Protocole de test A/B.**

| Paramètre | Règle |
|---|---|
| Ce qu'on teste | **Un seul élément à la fois** : (1) objet de C1 ; (2) position du bouton du guide ; (3) appel à l'action de C1 ; (4) objet de C2. Pied de page, mentions obligatoires et expéditeur affiché **ne sont jamais testés** — invariants de conformité et de réputation |
| Ce qui arbitre | Le **clic**, jamais l'ouverture : un test d'objet arbitré à l'ouverture sélectionne le sensationnalisme, ce que le § 1.6 refuse. Pour C1, la déclaration de profil ; pour C2, le clic unique |
| Échantillon | **1 000 abonnés confirmés par bras**, soit 2 000 par test. Les 2 000 par bras du § 1.6 visent l'édition, dont le volume est acquis d'un coup ; ici l'échantillon s'accumule inscription par inscription. **Contrepartie assumée** : sous **3 points de pourcentage**, l'écart n'est pas concluant `[À VÉRIFIER — aucune donnée de puissance statistique dans la base]` |
| Durée | **21 jours minimum, 60 jours maximum** : trois cycles hebdomadaires lissent l'effet du jour d'inscription ; au-delà de soixante jours, l'actualité réglementaire a changé et les bras ne sont plus comparables |
| Répartition | Aléatoire à la confirmation, **stable pour toute la séquence** : un abonné ne change pas de bras entre C1 et C3 |
| Arrêt anticipé | Interdit sur résultat favorable ; **obligatoire** si un bras dépasse 0,15 % de plaintes ou 2 % de désabonnement |
| Consignation et rôles | Un enregistrement par test dans `docs/annexes/` — hypothèse, date, effectifs, résultat, décision ; un test non consigné n'a pas eu lieu. **R** définit l'hypothèse · **J** valide les deux bras **avant** ouverture · **I** implante la répartition · **D** surveille plaintes et rebonds chaque jour |

**Cadence de révision.** Revue complète tous les **six mois**, et immédiate à l'un des trois événements
suivants : entrée en vigueur par décret d'un volet du projet de loi C-12 ; entrée en vigueur du régime
fédéral des cryptomonnaies stables ; résolution de la contradiction C-04. Les trois touchent le corps de
C2 et les chapitres 5 ou 6 du guide.

### Ce qui reste à trancher

1. **Le guide n'existe pas.** C1 le livre en deuxième position, et `tools/emails.mjs` refusera de compiler
   sans `{{lien_guide}}`. Huit chapitres, trois annexes, dont le chapitre 7 exige à lui seul une relecture
   fiscale complète. **Aucune séquence ne part avant que le guide soit publié et daté.** Qui l'écrit, selon
   quel calendrier ?
2. **Le régime de passeport.** Absent de la base factuelle, il est pourtant le mécanisme qui explique
   comment des autorités provinciales produisent un marché unique. Sans lui, C2 décrit une fragmentation
   sans dire comment elle est surmontée : c'est **la seule lacune de fond du courriel 2**. Le nombre de
   membres des ACVM est à vérifier dans le même mouvement.
3. **La langue de la séquence.** La Charte de la langue française appliquée à une infolettre bilingue
   diffusée au Québec n'est pas instruite (U-58). Règle provisoire : la séquence anglaise est traduite
   intégralement et publiée **en même temps** que la française, jamais avant.
4. ~~**`manifeste.json` et les quatre jetons nouveaux**~~ — **exécuté.** `newsletter/manifeste.json`
   existe, décrit les quatre envois et porte une **liste fermée** des dix-huit champs de fusion admis.
   `tools/emails.mjs` refuse d'assembler un courriel employant un champ non déclaré, ou auquel manque
   l'un des quatre champs de preuve du consentement exigés par la LCAP. Un courriel expédié avec
   « {{lien_guide}} » en toutes lettres est une perte de crédibilité que rien ne rattrape : le
   contrôle vaut mieux que la relecture.
5. **La variante par défaut de C3.** Si la déclaration de profil se stabilise sous 12 %, la variante par
   défaut devient le cas général : maintenir trois versions d'un courriel lu par une minorité, ou n'en
   garder qu'une ?
6. **La quarantaine de 24 heures contre la date de première édition.** Un abonné confirmé un mardi à 5 h 29
   attend huit jours son premier *Dispatch*. L'abaisser à 12 heures réduirait l'attente, au prix d'un risque
   de collision C1 / édition pour qui confirme en soirée. Arbitrage de la diffusion, sur observation réelle.
