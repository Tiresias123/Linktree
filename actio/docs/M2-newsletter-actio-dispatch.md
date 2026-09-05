# Module 2 — *Actio Dispatch* : stratégie, édition pilote nº 042, séquence de bienvenue

> **Avertissement opposable à tout le module.** Le fond juridique et fiscal des courriels provient de
> `research/00-base-factuelle-consolidee.md`, arrêtée au 4 septembre 2026 et bâtie sur des résumés de
> moteur de recherche, l'accès direct aux sites des autorités ayant été bloqué. **Aucun texte primaire
> n'a été lu.** Les corps ci-dessous sont rédigés mot pour mot et prêts à intégrer ; chaque affirmation
> juridique doit être rouverte à la source et datée avant le premier envoi, selon la section A.5 de
> `docs/annexes/registre-de-verification.md`. Le module remplace les trois livrables v1
> (`docs/v1/L2-1-strategie-mailing.md`, `docs/v1/L2-2-edition-type.md`,
> `docs/v1/L2-3-sequence-bienvenue.md`) : ce qui y était hebdomadaire devient bi-hebdomadaire, ce qui
> y était turquoise devient bleu royal, et ce qui y était affirmé sans source y est reformulé.

**Ce que ce module livre, et où le trouver dans le dépôt.**

| Élément | Fichier | Contrôlé par |
|---|---|---|
| Châssis unique (en-tête, bandeau de cours, pied LCAP) | `newsletter/chassis.html` | `tools/emails.mjs` (mentions obligatoires, couleurs dans `prototype/assets/tokens.css`, attributs répétés, poids) |
| Édition pilote nº 042 (fragment) | `newsletter/contenus/dispatch-042.html` | idem + référence figée |
| Édition pilote nº 042 (assemblée, référence versionnée) | `newsletter/actio-dispatch-042.html` | comparaison à l'assemblage — toute divergence bloque |
| Courriels d'accueil J+0, J+2, J+5 | `newsletter/contenus/bienvenue-1.html`, `newsletter/contenus/bienvenue-2.html`, `newsletter/contenus/bienvenue-3.html` | idem |
| Manifeste : cadence, vagues, objets, champs de fusion, preuve du consentement | `newsletter/manifeste.json` | validité JSON, liste fermée des champs |
| Sorties assemblées | `newsletter/dist/` (non versionné, régénéré par `npm run emails`) | — |
| Anciens fichiers v1 | `newsletter/v1/` | exclus de l'assemblage |

---

## 1. Stratégie et charte éditoriale

### 1.1 Positionnement et promesse

*Actio Dispatch* est **la traçabilité bi-hebdomadaire de l'état du droit canadien des cryptoactifs**,
sous une forme qu'un directeur de la conformité transfère à son conseil sans la réécrire et qu'un
investisseur de détail lit en quatre minutes dans le train. La promesse est celle qu'affiche le bloc
`.infolettre` de `prototype/fr/index.html` : « Le mardi, ce que la régulation a changé. Le vendredi, ce
que vous devez faire. » Deux phrases, deux rendez-vous, deux contrats de lecture distincts.

| Rendez-vous | Ce qu'il promet | Ce qu'il contient | Lecture |
|---|---|---|---|
| **Mardi 7 h HE** | *Ce qui a changé* — l'analyse réglementaire et macro | Grand angle (≈ 400 mots) · Radar des juridictions (3 brèves à niveau d'impact) · Cas pratique fiscal (≈ 200 mots) · Chiffre de la semaine | 4 min |
| **Vendredi 12 h HE** | *Ce que vous devez faire* — le récapitulatif et l'action | Récapitulatif daté de la semaine (5 lignes, une par jour) · Un guide pratique exécutable en moins de 10 minutes · Agenda des échéances à 14 jours | 3 min |

| Ce que l'infolettre n'est pas | Motif du refus |
|---|---|
| Un résumé des articles de la semaine | Le site publie au fil de l'eau ; l'infolettre publie **une hiérarchie** et une action. |
| Une revue de presse | Cabinets et presse spécialisée sont des **signaux**, jamais une source de droit (base §7). |
| Un bulletin de marché | Le bandeau de cours porte sa limite dans le châssis : « Actio ne recommande aucun actif ». Le Chiffre de la semaine décrit un flux, jamais un rendement. |
| Un canal d'acquisition à volume | Sous la LCAP, le **fardeau de la preuve du consentement pèse sur l'expéditeur** ; chaque adresse non prouvable est un passif. |
| Un avis juridique | `tools/emails.mjs` inscrit « ni conseil en placement » dans `MENTIONS_OBLIGATOIRES` : son absence **bloque l'assemblage**. |
| Un support publicitaire pour plateformes | Aucune plateforme non inscrite n'y est nommée, jamais ; une plateforme inscrite n'y est nommée qu'avec son statut daté (règle déontologique du Module 4). |

**Pourquoi ce ne peut pas être un résumé automatisé du site.** (i) *Les régimes diffèrent* : une page
est une publication, un courriel est un **message électronique commercial** dès qu'il porte un appel à
l'abonnement, un commanditaire, un lien d'affiliation ou un événement — et « traiter tout envoi comme
un MEC est la seule position défendable » (fiche 06). Un résumé automatisé produirait des MEC que
personne n'aurait relus. (ii) *Le rythme du droit n'est pas celui de la publication* : un règlement
pris le mercredi à la *Gazette*, Partie II, peut dormir six jours avant qu'un lecteur ne le voie ; le
Dispatch du mardi le hiérarchise, celui du vendredi dit quoi en faire. (iii) *Le lecteur cherche
l'arbitrage, pas l'information* : la loi fédérale sur les cryptomonnaies stables est **édictée et non en
vigueur**, et la base qualifie de « piège central du dossier fédéral » le fait d'écrire que les émetteurs
« doivent désormais » quoi que ce soit (§3.4). Un résumé de titres reproduit le piège ; l'édition nº 042
le désamorce dans son Grand angle.

### 1.2 Cadence, jours et heures

**Décision : deux éditions par semaine, le mardi à 7 h et le vendredi à 12 h, heure de l'Est.** C'est
ce qu'affichent `.infolettre` (« Mardi 7 h HE … Vendredi 12 h HE ») et `.infolettre__preuve-sociale`
(« deux envois par semaine, jamais plus ») dans `prototype/fr/index.html`, et ce que code le bloc
`cadence` de `newsletter/manifeste.json`.

**Pourquoi « HE » et jamais « EST ».** Le cahier des charges écrit « 7h00 EST ». L'*Eastern Standard
Time* n'est en vigueur que de novembre à mars ; de mars à novembre, Toronto et Montréal sont à l'heure
avancée (HAE/EDT). Un envoi calé « 7 h EST » partirait à 8 h locales tout l'été. Le manifeste fixe donc
le fuseau IANA `America/Toronto`, qui bascule seul, et l'infolettre écrit « HE » (heure de l'Est), qui
couvre les deux. Le registre de vérification (ligne V-22) en fait un point de contrôle.

| Publication suivie | Rythme documenté (base §7) | Effet sur le mardi | Effet sur le vendredi |
|---|---|---|---|
| *Gazette du Canada*, Partie I (projets de règlement) | En ligne le **vendredi 14 h HE**, date officielle le samedi | Traité 4 jours plus tard, texte lu le week-end | Un projet paru à 14 h ne peut être dans l'édition de 12 h : il ouvre le mardi suivant, et l'agenda du vendredi *suivant* porte la date de clôture des commentaires |
| *Gazette du Canada*, Partie II (règlements pris) | **Mercredi, une semaine sur deux, 9 h HE** | Latence maximale de 6 jours, annonçable | L'entrée en vigueur passe à l'agenda 48 h après parution |
| ACVM, AMF, CVMO, OCRI | Aucun rythme établi (`[NV]`) | Le mardi capte le lundi, jour fréquent des communiqués conjoints | Le vendredi capte le jeudi, second jour fréquent |
| CANAFE — avis, PAP, révocations | Au fil des avis | Hebdomadaire, sauf seuil d'*Alerte Actio* | Le guide pratique du vendredi peut être « vérifier l'inscription d'ESM » |
| ARC, Revenu Québec | Saisonnier (février-avril) | Cas pratique fiscal chaque mardi | Guide fiscal exécutable chaque vendredi du printemps |
| Listes ACVM des plateformes autorisées et proscrites | Continu | **Jamais un envoi** : objet de registre (`prototype/fr/registre.html`) | Idem ; une mise en garde visant une plateforme de nos fiches déclenche l'alerte (seuil B) |

**Pourquoi 7 h le mardi.** Le lecteur B2B ouvre sa boîte entre 7 h et 8 h 30 ; à 7 h, le Dispatch est
le premier courriel éditorial du jour, avant les bulletins de cabinets qui partent en majorité entre
8 h et 10 h. Le lecteur B2C le lit dans le transport. **Pourquoi 12 h le vendredi.** Le guide pratique
demande dix minutes d'action ; le créneau du midi est le seul où un professionnel les prend un vendredi.
Un envoi du vendredi matin est traité comme du travail ; un envoi du vendredi soir n'est pas ouvert
avant lundi, où il a perdu son agenda.

**Fuseaux — deux vagues, une heure locale.** Un envoi unique à 7 h HE atteindrait Vancouver à 4 h.

| Vague | Provinces | Mardi | Vendredi |
|---|---|---|---|
| V1 — `America/Toronto` | QC, ON, NB, NS, PE, NL | 7 h HE (8 h HA, 8 h 30 HNT) | 12 h HE |
| V2 — `America/Vancouver` | BC, AB, SK, MB, YT, NT, NU | 7 h HP (8 h HR, 9 h HC) | 12 h HP |

Rattachement par province déclarée dans les préférences, sinon par le fuseau du dernier clic, sinon
V1. La Saskatchewan ne change pas d'heure : le décalage V1/V2 y varie de deux à une heure selon la
saison, ce que le fuseau IANA absorbe [À VÉRIFIER — la base ne documente pas les fuseaux ; règle
d'implémentation, non de droit].

**Gel du contenu.** Lundi 12 h HE pour le mardi, jeudi 15 h HE pour le vendredi. Entre le gel et
l'envoi, seule la révision juridique peut modifier un texte, et seulement pour retirer ou reformuler.
Le registre de vérification (section A.5) doit être vide de toute ligne « NON VÉRIFIÉ » sur l'envoi au
moment du gel : un courriel envoyé ne se corrige pas.

**Éditions hors cycle — « Alerte Actio ».** Le manifeste (`cadence.hors_cycle`) fixe quatre seuils
dont **un** suffit, à condition qu'attendre le prochain rendez-vous nuise au lecteur :

| Seuil | Exemple type tiré de la base |
|---|---|
| A. Entrée en vigueur ou échéance à moins de 7 jours | Décret portant un volet du projet de loi C-12, « échelonné par décret » |
| B. Ajout à la liste des plateformes proscrites des ACVM, ordonnance de blocage, ou **mise en garde visant une plateforme figurant dans nos fiches** | Dossier XT.com et CoinEx (AMF) — le nouveau critère des fiches est propre à la v2 : quand Actio nomme une plateforme, il doit prévenir ses lecteurs le jour où l'autorité la vise |
| C. Sanction d'un ordre de grandeur inédit | PAP de 176 960 190 $ annoncée par le CANAFE le 22 octobre 2025 (`C-10`) |
| D. Décision modifiant une qualification déjà affirmée par le *Dispatch* | *Amicarelli c. Le Roi*, 2025 CCI 185 |

Autorisation : **double signature**, rédaction en chef **et** révision juridique, consignée dans le
champ `autorisation` de l'envoi avec l'identifiant de la source primaire **lue**. Plafond : deux alertes
par 30 jours glissants, jamais deux la même semaine civile ; la troisième rebascule en tête du Grand
angle du mardi. Le format existe : `bandeau_cours: false` retire le bloc de cours, et l'alerte tient en
Grand angle + Radar d'une seule brève.

### 1.3 Doctrine de la ligne d'objet

Les règles sont **codées** dans `tools/emails.mjs`, pas seulement écrites ici : un objet hors bornes
fait échouer l'assemblage.

1. **Budget : 28 à 52 caractères, plafond dur à 60.** L'objet expédié (`objet`) est distinct du titre
   d'archive (`titre`) : nº 042 a un titre de 78 caractères et un objet de 52. L'outil refuse un objet
   identique au titre.
2. **Troncature.** [À VÉRIFIER — la base ne couvre pas le rendu des clients.] Ordres de grandeur de
   travail : Mail d'iOS en portrait, coupure vers 35–40 caractères ; Gmail sur mobile, 35–45 ; Outlook
   pour Windows, 60–75. **L'information décisive tient dans les 32 premiers caractères** : « Stablecoins :
   ce que votre plateforme » (32) dit déjà le sujet et l'angle.
3. **Émojis : interdits, sans exception** (`\p{Extended_Pictographic}` fait échouer l'assemblage).
   L'Avis conjoint 21-330 encadre les communications des plateformes inscrites ; Actio n'y est pas
   assujettie mais l'applique volontairement, parce que ses lecteurs le sont.
4. **Le pré-en-tête est une seconde accroche, jamais une redite.** Il porte le **mécanisme** quand
   l'objet porte la **conséquence**. Bornes 90–130 caractères, contrôlées ; un pré-en-tête qui contient
   l'objet ou en reprend les 28 premiers caractères est refusé. Nº 042 : objet « Stablecoins : ce que
   votre plateforme peut vous vendre » (52) ; pré-en-tête « Un même jeton, deux régimes : l'Avis 21-333
   s'applique aujourd'hui, la loi fédérale plus tard. Et c'est la plateforme qui décide. » (128).
5. **Sensationnalisme : proscrit.** Règle de risque, non de goût : Actio répond des indications
   fausses ou trompeuses devant le Bureau de la concurrence. Un objet qui affirme plus que le corps est
   trompeur même si le corps est exact.
6. **Chiffres et autorités.** Un chiffre dans l'objet doit être corroboré **et** ouvert à la source ;
   nº 042 n'en contient aucun, parce qu'aucun n'est corroboré. Sigles admis sans développement : ACVM,
   AMF, CVMO, OCRI, CANAFE, ARC, TMF, BSIF. « OCRCVM » n'est jamais employé au présent. Un nom de
   plateforme n'entre dans un objet que si la plateforme a une fiche et un statut lu le jour même.
7. **Variante B systématique.** Chaque envoi porte `objet_variante_b`, testée sur 20 % de la liste
   pendant 90 minutes (mardi) ou 60 minutes (vendredi) avant l'envoi au reste ; la variante gagnante est
   celle du **taux de clic sur le premier lien de contenu**, jamais du taux d'ouverture (§ 1.6).

**Douze lignes d'objet de réserve.** Forme validée par l'outil ; fond à rouvrir à la source.

| Famille | Objet (car.) | Pré-en-tête | Rendez-vous |
|---|---|---|---|
| A — conséquence | Édicté n'est pas en vigueur (27 → à allonger : « Édicté n'est pas en vigueur, et ça compte », 41) | La loi fédérale sur les cryptomonnaies stables est adoptée ; décrets et règlements ne sont pas pris. | Mardi |
| A | Votre dépositaire devient une décision de conformité (52) | Le cadre de garde de l'OCRI classe les dépositaires par paliers et limite l'autogarde. | Mardi |
| A | Un statut d'inscription vaut pour une province (46) | Deux plateformes inscrites au Québec et en Ontario peuvent offrir deux listes de jetons différentes. | Mardi |
| B — question fermée | Votre plateforme figure-t-elle encore sur la liste ? (52) | Les listes des ACVM changent en continu ; nous avons daté la nôtre et vérifié les trois registres. | Vendredi |
| B | Le jalonnement est-il imposable à la réception ? (48) | La pratique des cabinets retient l'inclusion au revenu de la juste valeur marchande ; l'ARC n'a rien publié de formel. | Mardi |
| B | Avez-vous produit la TP-21.4.39 sans avoir vendu ? (50) | Le Québec exige une déclaration propre aux cryptoactifs même sans transaction ; une pénalité s'y attache. | Vendredi |
| C — action | Vérifiez l'inscription d'ESM en quatre minutes (46) | Le registre du CANAFE, distinct de l'inscription en valeurs mobilières, se consulte en ligne. Voici comment. | Vendredi |
| C | Calculez votre PBR avant que l'ARC ne le fasse (46) | Un coût moyen par bien identique, recalculé à chaque achat, frais inclus : l'exemple en dix lignes. | Vendredi |
| C | Trois échéances avant le 30 avril (34) | T1, TP-1, T1135 : ce qui se déclare, où, et ce qui coûte si on l'oublie. | Vendredi |
| D — chiffre | Une semaine positive pour les FNB de bitcoin à Toronto (54) | Entrées nettes de la semaine dans les FNB au comptant cotés à la TSX, en dollars canadiens, tous émetteurs. | Mardi |
| D | Combien de plateformes sont inscrites dans votre province (56) | La recherche nationale d'inscription des ACVM, lue ce matin, province par province. | Vendredi |
| E — alerte | Alerte Actio : mise en garde visant une plateforme de nos fiches (60) | L'AMF vient de publier une mise en garde ; voici ce que signifie ce statut, et ce que vous pouvez faire. | Hors cycle |

### 1.4 Segmentation

Trois segments, un seul contenu. La segmentation change **l'ordre des sections et le guide du
vendredi**, jamais la matière ni le pied de page.

| Segment | Origine | Mardi — ordre des sections | Vendredi — guide privilégié |
|---|---|---|---|
| `b2c-investisseurs` | Bouton « Je lis Actio à titre personnel » (C1), défaut | Grand angle → Cas pratique fiscal → Radar → Chiffre | Guides de niveau débutant/intermédiaire : vérifier une inscription, calculer un PBR, produire un formulaire |
| `b2b-conformite` | Bouton « Je lis Actio pour mon métier » (C1) ; domaine professionnel connu | Radar → Grand angle → Chiffre → Cas pratique | Guides de niveau avancé : lire une décision d'inscription, répondre à une consultation, documenter la garde |
| `nouvel-abonne` | Du clic de confirmation à la fin de la séquence (J+5) | Reçoit l'édition dès le premier rendez-vous ; la séquence s'y intercale sans jamais tomber le même jour | — |

**Juridiction.** Le commutateur du site (`[data-action="juridiction"]`, stocké sous `actio.juridiction`)
n'est pas repris dans l'infolettre : un courriel segmenté par province produirait treize versions à
relire. Le Radar nomme toujours le ressort de chaque brève ; c'est le lecteur qui filtre.

**Langue.** Une liste par langue (`fr-CA`, `en-CA`), choisie à l'inscription, modifiable dans les
préférences, **jamais déduite** de l'adresse IP (Loi 25). L'édition anglaise part à la même heure ; elle
n'est jamais envoyée avant que la française ne soit gelée.

### 1.5 Charte éditoriale de l'infolettre

1. **Une source par nature d'acte.** Loi consolidée sur `laws-lois.justice.gc.ca` ; règlement à la
   *Gazette* ; avis du personnel sur le PDF de l'autorité ; décision sur CanLII ; statut d'inscription
   sur la recherche nationale des ACVM. Tout le reste est un signal.
2. **Dater, toujours.** Chaque brève du Radar porte une autorité et, dès que lue, une date de source.
   Le Chiffre de la semaine porte sa date de relevé (`{{flux_releve}}`) et sa source (`{{flux_source}}`).
3. **Le niveau d'impact est une obligation, pas une émotion.** *Élevé* : modifie une obligation ou un
   droit du lecteur dans les 30 jours. *Modéré* : modifie une pratique ou un délai, ou crée un risque
   documentaire. *Informatif* : contexte, tendance, texte non en vigueur. Une brève sans « Ce que ça
   change pour vous » n'est pas publiée.
4. **Le cas pratique fiscal est un cas fictif, dit fictif**, avec des prénoms, jamais des initiales de
   personnes réelles ; il décrit une méthode de raisonnement et se termine toujours par le bloc « À
   vérifier avant de déclarer ».
5. **Le Chiffre de la semaine décrit un flux ou un décompte, jamais un rendement**, et le gabarit ne
   contient aucune valeur : `{{chiffre_semaine}}`, `{{flux_s0}}` … `{{flux_s4}}` sont injectés par le
   relevé d'Actio Research, capturé et daté.
6. **Le bandeau de cours ne contient aucun cours.** `{{btc_cad}}`, `{{eth_cad}}`, `{{sol_cad}}` et
   leurs variations sont remplis à l'envoi ; `{{cours_horodatage}}` et `{{cours_source}}` les datent. Un
   chiffre figé dans un courriel réglementaire est un chiffre faux à l'ouverture.
7. **Aucune plateforme non inscrite n'est nommée** hors d'une mise en garde ou d'une ordonnance
   publiée par une autorité, citée avec son lien. Une plateforme inscrite n'est nommée qu'avec son statut
   lu le jour du gel.
8. **La transparence est un bloc, pas une note.** Chaque édition du mardi ferme sur l'encart
   « Transparence » : contenu commandité, affiliation, absence d'inscription d'Actio, lien vers le
   registre de vérification (`{{lien_registre_verification}}`).
9. **Le marqueur `[À VÉRIFIER]` est publiable ; l'affirmation sans marqueur ne l'est pas** tant que la
   source n'est pas lue. Nº 042 en porte trois (état de vérification du Grand angle, nombre de
   révocations du CANAFE, dates et numéros d'avis dans C2).
10. **Symétrie linguistique.** L'édition anglaise ne peut affirmer ce que la française marque comme
    incertain, ni l'inverse.

### 1.6 Mesure

| Indicateur | Définition | Cible à 6 mois | Refusé comme indicateur |
|---|---|---|---|
| **Taux de clic sur le premier lien de contenu** | Clics uniques sur le bouton du Grand angle (mardi) ou du guide (vendredi) ÷ envois délivrés | 8 % mardi, 12 % vendredi | Le taux d'ouverture : la protection de la confidentialité d'Apple Mail le fausse |
| **Taux de plainte** | Plaintes pour pourriel ÷ envois délivrés, par fournisseur | < 0,05 % ; > 0,1 % sur un envoi = enquête avant l'envoi suivant | — |
| **Taux de désabonnement par envoi** | Désabonnements sous 72 h ÷ envois délivrés | < 0,3 % ; un pic sur une édition rouvre sa relecture | La taille brute de la liste : elle valorise des consentements non prouvables |
| **Confirmations** | Clics de confirmation ÷ formulaires déposés | > 55 % ; en deçà, réécrire le courriel de confirmation avant toute autre optimisation | — |
| **Réponses** | Réponses humaines à `redaction@actio.ca` par édition | Lue, non ciblée : un lecteur qui répond corrige | — |
| **Délivrabilité** | Taux de placement en boîte de réception (test de semences sur six clients) | > 95 % | — |

Aucune mesure individuelle n'est conservée au-delà de 13 mois ; les clics sont agrégés par lien et par
segment, jamais rattachés à une adresse au-delà de la fenêtre de mesure d'un envoi (Loi 25,
minimisation). L'implémentation est spécifiée au Module 4.

---

## 2. L'édition pilote — *Actio Dispatch* nº 042

### 2.1 Partie A — L'édition nº 042 transcrite

Le texte ci-dessous est celui de `newsletter/contenus/dispatch-042.html`, assemblé dans
`newsletter/actio-dispatch-042.html`. Les champs `{{…}}` sont ceux du manifeste.

#### Barre de service

`ÉDITION Nº 042 · MARDI 8 SEPTEMBRE 2026 · 7 H HE` — à droite : *Version web*.

#### En-tête de marque

**Actio|** — DISPATCH · L'INFOLETTRE RÉGLEMENTAIRE ET FISCALE — à droite : *4 min de lecture · 4 sections*.

#### Bandeau de cours (fond `--encre-fond`, texte `--encre-texte`)

`BTC/CAD {{btc_cad}} {{btc_var_24h}} · ETH/CAD {{eth_cad}} {{eth_var_24h}} · SOL/CAD {{sol_cad}} {{sol_var_24h}} · Marché {{marche_statut}}`
*Cours en dollars canadiens, arrêtés le {{cours_horodatage}} (HE), source {{cours_source}}. Variation sur 24 heures. Actio ne recommande aucun actif.*

#### ◆ Le grand angle · Section 01

**Stablecoins : ce que les ACVM autorisent aujourd'hui, et pourquoi Québec et Ontario n'offrent pas la
même liste**
*La rédaction · ACVM / Fédéral · 400 mots · 2 min*

> **ÉTAT DE VÉRIFICATION — À LIRE AVANT DE CITER CE COURRIEL.** La date et la portée de l'Avis 21-333,
> comme l'état de la loi fédérale, proviennent de résultats de recherche indexés. **Aucun texte n'a été
> lu à la source** à la date d'envoi. Actio publie le point *avec* sa réserve plutôt que de le taire —
> mais ne vous en prévalez pas sans avoir vérifié : le registre de vérification donne les points
> d'entrée exacts.

Le mot « stablecoin » n'existe dans aucun texte canadien. Les autorités en valeurs mobilières parlent
de *cryptoactif arrimé à une valeur* ; le législateur fédéral, de *cryptomonnaie stable*. Cette
différence de vocabulaire signale deux régimes conçus séparément, par deux ordres de gouvernement, pour
deux objets : le premier encadre la plateforme qui vous vend le jeton, le second l'émetteur qui le
crée. Et un seul des deux est en vigueur.

**Ce que les ACVM autorisent aujourd'hui.** Depuis l'Avis 21-333 du personnel des ACVM, une
plateforme inscrite ne peut continuer d'offrir un jeton arrimé à une monnaie fiduciaire que s'il
satisfait aux conditions de l'avis : un seul actif de référence, un émetteur qui a pris envers les ACVM
des engagements de réserve, de rachat et de divulgation, et une inscription du jeton dans les
conditions d'inscription de la plateforme. Le jeton n'est ni approuvé ni interdit : il est *toléré sous
conditions*, plateforme par plateforme. C'est le point que les lecteurs nous demandent le plus souvent
d'expliquer, et le plus mal compris.

**Pourquoi Québec et Ontario n'offrent pas la même liste.** L'AMF et la CVMO appliquent le même avis
harmonisé. Mais l'avis ne s'applique qu'à travers les conditions d'inscription de chaque plateforme,
accordées par son autorité principale puis reconnues par les autres. Deux plateformes inscrites dans
les deux provinces peuvent donc offrir deux listes de jetons différentes — non parce que le droit
diffère à la frontière de l'Outaouais, mais parce que leurs dossiers diffèrent. Un jeton absent de votre
plateforme n'est pas « interdit au Canada » : il n'a pas satisfait aux conditions *pour cette
plateforme*.

**Ce que la loi fédérale changera — plus tard.** La loi sur les cryptomonnaies stables, adoptée au
printemps dans un projet de loi d'exécution budgétaire, confie à la Banque du Canada la supervision
prudentielle des émetteurs : réserves, rachat au pair, gouvernance. Elle est édictée, elle n'est pas en
vigueur ; ses règlements ne sont pas pris. Un article qui écrit que le Canada « encadre désormais » les
stablecoins décrit un avenir. Le jour où ce régime entrera en vigueur, un émetteur supervisé à Ottawa
verra son jeton rester soumis, dans chaque province, aux conditions de l'Avis 21-333. Aucun texte
identifié par la rédaction n'organise ce cumul.

**Ce que nous surveillons :** la parution des projets de règlement fédéraux à la *Gazette du Canada*,
Partie I, et — plateforme par plateforme — les modifications de conditions d'inscription touchant la
liste des jetons arrimés. C'est là, avant les lois, que la réponse se lira.

[ Lire l'analyse complète (9 min) → ] — `{{lien_article_grand_angle}}` → `prototype/fr/article.html`

#### Section 02 — Le radar des juridictions

*Trois brèves, trois ressorts, un niveau d'impact sur vos obligations : élevé, modéré ou informatif.*

**◆ Ottawa · Fédéral · CANAFE — Impact : élevé**
**Révocations d'inscriptions d'ESM : la liste du CANAFE devient une liste de contrôle.** Le CANAFE a
révoqué en 2026 l'inscription de plusieurs dizaines d'entreprises de services monétaires, en majorité
liées aux cryptoactifs. Une plateforme dont l'inscription d'ESM est révoquée ne peut plus légalement
recevoir vos fonds pour les convertir. **Ce que ça change pour vous :** vérifiez l'inscription d'ESM de
votre plateforme au registre du CANAFE — elle est distincte de l'inscription en valeurs mobilières, et
l'une ne vaut pas l'autre. *[À VÉRIFIER] Le nombre exact de révocations varie selon nos fiches (23, 51,
« plus de 50 ») ; nous ne citons aucun chiffre.*

**◆ Québec · AMF · Revenu Québec — Impact : modéré**
**TP-21.4.39 : la déclaration québécoise que l'on oublie parce qu'elle n'a pas d'équivalent fédéral.**
Le Québec impose une déclaration propre aux cryptoactifs, exigible même en l'absence de transaction
imposable dans l'année, assortie d'une pénalité. Un allègement a été annoncé au printemps 2025 ; sa
portée pour l'année d'imposition 2025 reste à confirmer sur le site de Revenu Québec. **Ce que ça change
pour vous :** un résident du Québec qui détient des cryptoactifs sans avoir vendu n'est pas dispensé de
déclarer. Vérifiez votre situation avant le printemps, pas en avril.

**◆ International · OCDE — Impact : informatif**
**Cadre de déclaration des cryptoactifs (CARF) : l'ARC cessera de dépendre de votre déclaration
spontanée.** Le Canada a reporté l'application du cadre de l'OCDE ; le calendrier canadien précis reste à
confirmer sur le texte de la partie XXI de la Loi de l'impôt sur le revenu. Une fois en vigueur, les
plateformes déclareront elles-mêmes vos opérations à l'ARC, qui les recoupera avec les administrations
étrangères. **Ce que ça change pour vous :** rien à faire cette semaine. Mais un historique déclaratif
incomplet se corrige mieux avant l'échange automatique qu'après.

#### Section 03 — Le cas pratique fiscal

**Récompenses de validateur : revenu à la réception, ou gain en capital à la vente ?**

**La situation (cas fictif).** Élise, résidente de l'Ontario, exploite depuis janvier un nœud
validateur sur une chaîne à preuve d'enjeu. Elle a immobilisé 32 jetons achetés en 2024 et reçoit
chaque mois des récompenses de validation ; en décembre, elle en détient 0,9 de plus. Elle n'a rien
vendu. Elle se demande si elle a quelque chose à déclarer.

**La lecture dominante : un revenu, à la réception.** L'ARC n'a publié aucune position formelle propre
au jalonnement que nous ayons pu consulter. La pratique des cabinets et des CPA retient l'inclusion au
revenu de la juste valeur marchande de chaque récompense, le jour où Élise en obtient le contrôle —
comme pour le minage. Les 0,9 jetons sont donc un revenu de 2026, même sans vente, et leur valeur à la
réception devient le prix de base rajusté de chaque lot.

**Le second fait générateur : la vente.** Quand Élise vendra ces jetons, l'écart entre le produit et ce
prix de base sera, selon le faisceau d'indices du bulletin IT-479R, un gain en capital ou un revenu
d'entreprise. Exploiter un nœud avec du matériel dédié, de façon continue et pour un rendement, plaide
pour l'entreprise. Le traitement n'est pas global : la réception et la disposition se qualifient
séparément.

> **À vérifier avant de déclarer.** Cette rubrique décrit une méthode de raisonnement à partir de la
> pratique professionnelle, non une position administrative publiée. Le bulletin IT-479R est archivé ; il
> reste appliqué par les tribunaux. Un nœud exploité au Québec ajoute la déclaration TP-21.4.39.
> Consultez un fiscaliste sur votre dossier.

#### Section 04 — Le chiffre de la semaine (fond `--encre-fond`)

**`{{chiffre_semaine}}`** — **Entrées nettes de la semaine dans les FNB de bitcoin au comptant cotés à la
Bourse de Toronto**, en millions de dollars canadiens, tous émetteurs confondus. Le signe compte plus que
le montant : une semaine positive après deux semaines de sorties dit quelque chose du détail canadien que
les flux américains ne disent pas.

```
FNB BTC AU COMPTANT — TSX — ENTRÉES NETTES HEBDOMADAIRES (M$ CA)

Semaine      Flux net                        Cumul 5 sem.
S-4          {{flux_s4}}
S-3          {{flux_s3}}
S-2          {{flux_s2}}
S-1          {{flux_s1}}
S-0          {{flux_s0}}

Barres : 1 bloc = 10 M$ CA. Sorties nettes à gauche de l'axe, entrées à droite.
Relevé du {{flux_releve}} · source {{flux_source}} · calcul Actio Research.
```

Le relevé injecte, pour chaque semaine, une chaîne de la forme `−42  ▌▌▌▌|          −42` ou
`+38       |▌▌▌▌  +71` : signe, barre ASCII proportionnelle, cumul. Le gabarit ne contient aucune
valeur (charte, règle 5). *Les valeurs de ce tableau sont injectées par le relevé hebdomadaire d'Actio
Research ; le gabarit n'en contient aucune. Un flux net décrit un mouvement de parts, pas un rendement.
Ne constitue pas une recommandation.*

#### Encart de transparence

**Transparence.** Cette édition ne comporte aucun contenu commandité et aucun lien d'affiliation. Aucune
plateforme de négociation n'a rémunéré Actio pour y figurer ou pour en être absente. Actio n'est
inscrite à aucun titre auprès des autorités canadiennes en valeurs mobilières. Nos règles : charte
d'indépendance · politique de correction · registre de vérification.
**Vendredi, 12 h HE :** le récapitulatif de la semaine et un guide pratique — « Vérifier l'inscription
d'ESM de sa plateforme au registre du CANAFE, en quatre minutes ».

#### Pied de page — conformité LCAP (commun à tous les envois, porté par le châssis)

**Actio|** — **Actio Média inc.** · 1000, rue De La Gauchetière Ouest, bureau 2400 · Montréal (Québec)
H3B 4W5, Canada · redaction@actio.ca · Rédaction à Montréal et à Toronto.

Vous recevez ce message parce que vous avez donné votre **consentement exprès** à recevoir *Actio
Dispatch*, le **{{date_consentement}}**, depuis la page {{source_consentement}}, puis confirmé ce
consentement depuis votre boîte de courriel. Ce message est un message électronique commercial au sens
de la **Loi canadienne anti-pourriel (LCAP)**.
**Se désabonner en un clic** · Gérer mes préférences. *Le désabonnement prend effet sans confirmation
ni connexion, est traité dans un délai maximal de 10 jours ouvrables, et le mécanisme demeure
fonctionnel pendant au moins 60 jours à compter de l'envoi du présent message.*

**Avertissement.** Actio est un média. Actio ne fournit ni conseil en placement, ni conseil juridique,
ni conseil fiscal, et n'est inscrite à aucun titre auprès des Autorités canadiennes en valeurs
mobilières, de l'Autorité des marchés financiers, de la Commission des valeurs mobilières de l'Ontario ou
de l'Organisme canadien de réglementation des investissements. Les contenus décrivent un état du droit
à une date donnée et ne tiennent pas compte de votre situation personnelle, de vos objectifs ni de votre
tolérance au risque. Les cryptoactifs sont volatils ; vous pouvez perdre la totalité des sommes
investies. Une plateforme non inscrite auprès de l'autorité de votre province ne vous fait bénéficier
d'aucune des protections prévues par la législation en valeurs mobilières, y compris en cas
d'insolvabilité. Consultez un professionnel inscrit ou un avocat avant toute décision.
Vos renseignements personnels sont traités conformément à notre politique de confidentialité. Ils ne
sont ni vendus, ni loués, ni cédés. Vous pouvez demander l'accès à vos renseignements, leur
rectification ou leur suppression en écrivant à l'adresse ci-dessus.
© 2026 Actio Média inc. Tous droits réservés. · Version web · Archives · Signaler une erreur

**Budget de lecture.** Grand angle 427 mots, Radar 3 × ≈ 90 mots, Cas pratique 209 mots, Chiffre ≈ 80
mots, Transparence ≈ 70 mots : ≈ 1 060 mots hors pied de page, soit 4 min 15 s à 250 mots/min. La cible
du cahier des charges (4 min) est tenue à condition que le Radar ne dépasse pas 100 mots par brève —
règle inscrite à la liste de contrôle (§ 2.2.6).

### 2.2 Partie B — Spécification du gabarit

#### 2.2.1 Anatomie du châssis

`newsletter/chassis.html` est un tableau de 600 px centré, à une colonne, sans image. Chaque envoi
n'est qu'un fragment `{{CONTENU}}` inséré entre le bandeau de cours et le pied de page.

| Bloc | Fond | Texte | Police | Rôle |
|---|---|---|---|---|
| Barre de service | `--fond-page` `#F8FAFC` | `--texte-tertiaire` `#475569` | JetBrains Mono → Consolas, 11 px | `{{SURTITRE}}` (édition, date, heure) et lien *Version web* |
| En-tête de marque | `--fond-surface` `#FFFFFF`, filet haut 3 px `--marque-navy` `#0F172A` | `#0F172A` | Newsreader → Georgia, 30 px, graisse forte ; barre `\|` en `--marque-bleu` `#2563EB` | Logo « Actio\| », signature « Dispatch · l'infolettre réglementaire et fiscale », `{{META_DROITE}}` |
| Bandeau de cours | `--encre-fond` `#0A1128` | `--encre-texte` `#F1F5F9`, libellés `--encre-stable` `#94A3B8`, variations `--encre-texte-2` `#CBD5E1` | JetBrains Mono, 12 px | Trois paires en CAD + statut de marché, tous en champs de fusion ; retiré quand `bandeau_cours: false` |
| Contenu | `#FFFFFF`, bordures latérales `--bordure` `#E2E8F0` | `#0F172A` corps 16/26, `--texte-secondaire` `#334155` encadrés | Plus Jakarta Sans → Arial ; titres Newsreader → Georgia | Fragment de l'envoi |
| Chiffre de la semaine | `--encre-fond` `#0A1128`, tableau `#1E293B` | `#F1F5F9` / `#CBD5E1`, accent `--encre-accent` `#F59E0B` | Newsreader 56 px pour le chiffre ; JetBrains Mono 11 px pour le tableau | Seul bloc inversé du contenu |
| Pied LCAP | `--fond-surface-2` `#F1F5F9`, filet haut 2 px `#0F172A` | `#334155` / `#475569` | Plus Jakarta Sans 12 → 11 px | Identification, consentement, désabonnement, avertissement, confidentialité |

**Couleurs sémantiques du contenu** — toutes issues de `prototype/assets/tokens.css`, ce que
`tools/emails.mjs` vérifie hexadécimal par hexadécimal :

| Usage | Texte (clair) | Fond (clair) | Texte (sombre, classe) |
|---|---|---|---|
| Impact élevé, « À vérifier avant de déclarer » | `--statut-alerte` `#B91C1C` | `--statut-alerte-pale` `#FEE2E2`, bordure `#F87171` | `#F87171` (`.alerte`) |
| Impact modéré, état de vérification, `[À VÉRIFIER]` | `--statut-consultation` `#B45309` | `--statut-consultation-pale` `#FEF3C7`, bordure `--marque-ambre` `#F59E0B` | `#FCD34D` (`.ambre`) |
| Impact informatif | `--texte-tertiaire` `#475569` | — | `#94A3B8` (`.txt-tertiaire`) |
| Conforme (outil 2 de C3) | `--statut-conforme` `#047857` | — | `#34D399` (`.conforme`) |
| Information (outil 1 de C3, Ottawa) | `--statut-info` `#1E40AF` | — | `#60A5FA` (`.info`) |
| Filets de juridiction du Radar | `--jur-federal` `#1E40AF` · `--jur-quebec` `#0E7490` · `--jur-ontario` `#6D28D9` · `--jur-intl` `#92400E` | encart `#F1F5F9` | inchangés (filets, pas texte) |
| Bouton principal | `#FFFFFF` | `--fill-primaire` `#2563EB` (5,2:1) | inchangé |
| Bouton secondaire (profil professionnel, préférences) | `#FFFFFF` | `--marque-navy` `#0F172A` | inchangé |

Le blanc n'est jamais posé sur l'ambre ni sur le vert (2,2:1 et 2,5:1) : c'est la règle d'accessibilité
de `tokens.css`, transposée telle quelle au courriel.

#### 2.2.2 Contraintes des clients de messagerie

| Contrainte | Réponse du châssis |
|---|---|
| Outlook pour Windows (moteur Word) ignore `max-width`, les marges négatives, `border-radius`, les polices web | Tableaux imbriqués `role="presentation"`, largeur fixe 600 px, styles en ligne sur chaque cellule ; bloc `<!--[if mso]>` qui force Georgia et Arial ; les coins arrondis sont un agrément, pas une structure |
| Gmail tronque le message au-delà de 102 Ko | `tools/emails.mjs` échoue à 102 400 octets ; nº 042 pèse 36,5 Ko, les courriels d'accueil 18,5 Ko |
| Gmail supprime les `<style>` dans certains contextes (transfert, application tierce) | Tout style structurel est en ligne ; la feuille `<style>` ne porte que le mobile et le mode sombre |
| Un attribut répété sur une balise est ignoré silencieusement | Contrôle des attributs `style`, `class`, `width`, `align`, `href` répétés, bloquant |
| Les polices web ne sont chargées que par Apple Mail et quelques clients ; les charger depuis Google transmet l'adresse IP du lecteur | **Aucune police web n'est appelée.** Newsreader, Plus Jakarta Sans et JetBrains Mono sont en tête de pile pour les clients qui les ont localement ; Georgia, Arial et Consolas rendent partout ailleurs. Le rendu de référence est celui de Georgia/Arial |
| Le suivi d'ouverture par pixel est bloqué ou simulé (Apple) | Aucun pixel ; la mesure est le clic (§ 1.6) |
| Les liens `mailto:` et `tel:` sont réécrits par certains clients | `format-detection` désactivé ; un seul `mailto:` (contact) ; aucun `tel:` en v2 |
| Mobile : cellules de cours sur une ligne trop étroite | `.cours-cell` passe en `inline-block` à 48 % sous 620 px ; `.bouton a` devient bloc pleine largeur ; `.chiffre-grand` descend à 48 px |

#### 2.2.3 Mode sombre

Le bloc `@media (prefers-color-scheme: dark)` du châssis reprend les valeurs du bloc sombre de
`tokens.css` : page `#020617`, carte `#0F172A`, encart `#1E293B`, texte `#F1F5F9` / `#CBD5E1` /
`#94A3B8`, bordures `#334155`, lien `#60A5FA`, ambre `#FCD34D`, alerte `#F87171`, conforme `#34D399`,
info `#60A5FA`. Les classes `.fond-page`, `.fond-carte`, `.fond-encart`, `.txt-primaire`,
`.txt-secondaire`, `.txt-tertiaire`, `.bordure`, `.lien`, `.ambre`, `.alerte`, `.conforme`, `.info`,
`.inverse` sont posées sur les cellules concernées. Deux règles : (i) la version claire doit rester
lisible si le client ignore le bloc — aucun texte ne dépend du mode sombre ; (ii) les fonds pâles
(`#FEF3C7`, `#FEE2E2`) ne sont pas basculés en sombre : leur texte (`#B45309`, `#B91C1C`) reste lisible
dessus, et un client qui inverse les couleurs de force (Outlook Windows) produit un résultat moins
mauvais avec un fond pâle qu'avec un fond sombre inversé.

#### 2.2.4 Accessibilité

- `lang="fr-CA"` sur `<html>` ; `role="presentation"` sur tout tableau de mise en page.
- Hiérarchie : un `<h1>` (Grand angle), des `<h2>` (sections). Le texte des liens est porteur
  (« Lire l'analyse complète (9 min) », jamais « cliquez ici »).
- Contraste : toutes les paires texte/fond du châssis et des fragments sont des paires déclarées
  conformes dans `tokens.css` (≥ 4,5:1) ; les seules exceptions sont les libellés de 10 px du Radar,
  en graisse forte et lettrage espacé, dont la paire reste ≥ 4,5:1 (`#1E40AF`, `#0E7490`, `#92400E`
  sur `#F1F5F9`).
- Taille de police minimale 10 px pour les libellés, 11 px pour les mentions légales, 15–16 px pour le
  corps ; interlignage ≥ 1,5.
- Le tableau ASCII du Chiffre de la semaine est précédé d'une phrase qui en donne le sens ; un lecteur
  d'écran lit la phrase, puis les lignes `S-4 … S-0` comme du texte.
- Pas d'information portée par la seule couleur : chaque niveau d'impact est écrit (« Impact : élevé »).

#### 2.2.5 Variables du gabarit

| Variable | Rempli par | Où |
|---|---|---|
| `{{TITRE}}`, `{{PREENTETE}}`, `{{SURTITRE}}`, `{{META_DROITE}}`, `{{CONTENU}}` | `tools/emails.mjs` depuis `newsletter/manifeste.json` | Châssis — toute variable majuscule restante fait échouer l'assemblage |
| `{{btc_cad}}`, `{{btc_var_24h}}`, `{{eth_cad}}`, `{{eth_var_24h}}`, `{{sol_cad}}`, `{{sol_var_24h}}`, `{{marche_statut}}`, `{{cours_horodatage}}`, `{{cours_source}}` | Flux de marché d'Actio Research, à l'envoi | Bandeau de cours |
| `{{chiffre_semaine}}`, `{{flux_s0}}` … `{{flux_s4}}`, `{{flux_releve}}`, `{{flux_source}}` | Relevé hebdomadaire d'Actio Research | Chiffre de la semaine |
| `{{date_consentement}}`, `{{source_consentement}}` | Journal de consentement | Pied LCAP — **obligatoires** ; leur absence bloque |
| `{{lien_desabonnement}}`, `{{lien_preferences}}`, `{{lien_version_web}}`, `{{lien_archives}}`, `{{lien_confidentialite}}`, `{{lien_corrections}}` | Prestataire d'envoi | Pied LCAP et barre de service |
| `{{lien_article_grand_angle}}`, `{{lien_charte}}`, `{{lien_registre_verification}}` | Rédaction, par envoi | Édition du mardi |
| `{{lien_guide}}`, `{{date_arret_guide}}`, `{{date_premiere_edition}}`, `{{lien_profil_particulier}}`, `{{lien_profil_professionnel}}`, `{{lien_arret_sequence}}`, `{{lien_carte_autorites}}`, `{{lien_fiches_plateformes}}`, `{{lien_academie}}`, `{{lien_registres}}` | Séquence d'accueil | C1, C2, C3 |

La liste `jetons_de_fusion.admis` du manifeste est **fermée** : un champ employé sans y figurer fait
échouer l'assemblage, parce qu'un courriel expédié avec « {{lien_guide}} » en toutes lettres est une
perte de crédibilité que rien ne rattrape.

#### 2.2.6 Liste de contrôle avant envoi

Vingt points ; les onze premiers sont **exécutés par `npm run emails`**, les neuf autres par des
personnes, et consignés.

| # | Contrôle | Qui / quoi | Bloquant |
|---|---|---|---|
| 1 | Objet 28–60 caractères, sans émoji, distinct du titre | outil | oui |
| 2 | Pré-en-tête 90–130 caractères, ne reprend pas l'objet | outil | oui |
| 3 | Champs de fusion tous déclarés ; `date_consentement`, `source_consentement`, `lien_desabonnement` présents | outil | oui |
| 4 | Mentions LCAP : identification, adresse, consentement exprès, 10 jours ouvrables, absence de conseil, mécanisme d'exclusion | outil | oui |
| 5 | Aucun attribut répété ; aucune variable majuscule non remplie | outil | oui |
| 6 | Toutes les couleurs existent dans `tokens.css` | outil | oui |
| 7 | Poids < 102 400 octets | outil | oui |
| 8 | L'assemblage reproduit la référence versionnée (`actio-dispatch-042.html`) | outil | oui |
| 9 | Balisage équilibré, identifiants uniques (`npm run structure`) | outil | oui |
| 10 | JSON du manifeste valide | outil | oui |
| 11 | Ni `EST` ni `EDT` dans un texte ; « HE » seulement | outil | oui |
| 12 | Registre de vérification : aucune ligne « NON VÉRIFIÉ » sur l'envoi au moment du gel | révision juridique | oui |
| 13 | Chaque brève du Radar porte un ressort, un niveau d'impact et un « Ce que ça change pour vous » | chef de pupitre | oui |
| 14 | Le Radar ne dépasse pas 100 mots par brève ; le Grand angle 450 ; le Cas pratique 250 | chef de pupitre | oui |
| 15 | Aucune plateforme non inscrite nommée hors mise en garde citée ; statut de toute plateforme nommée lu le jour du gel | révision juridique | oui |
| 16 | Rendu sur six clients réels (Gmail web et Android, Apple Mail macOS et iOS, Outlook Windows et web), clair et sombre, captures conservées | intégration | oui |
| 17 | Tous les liens ouvrent la bonne cible, en HTTPS, avec paramètres de mesure agrégés | intégration | oui |
| 18 | Envoi de semences : placement en boîte de réception sur les six clients | diffusion | oui |
| 19 | Test A/B de l'objet lancé sur 20 % à H−90 min (mardi) / H−60 min (vendredi) | diffusion | non |
| 20 | Version anglaise gelée après la française, symétrie des marqueurs `[À VÉRIFIER]` | révision | oui |

---

## 3. La séquence de bienvenue

### 3.1 Architecture

#### 3.1.1 Le double consentement, et pourquoi Actio l'impose

La LCAP exige un **consentement exprès** ; elle n'exige pas qu'il soit confirmé une seconde fois. Ce
qu'elle exige, et que la fiche 06 identifie comme le point d'appui du régime, c'est que **le fardeau de
la preuve du consentement pèse sur l'expéditeur**. Le double consentement n'ajoute pas une obligation :
il fabrique la preuve de celle qui existe.

| Le formulaire seul produit | Le clic de confirmation ajoute |
|---|---|
| Une case cochée avant le champ de courriel (`.infolettre__consentement` de `prototype/fr/index.html`), un horodatage, une page de dépôt — saisis par un navigateur, sans preuve que le titulaire de l'adresse était présent | La preuve que **le titulaire de la boîte** a agi : le jeton n'est réclamable que depuis la boîte visée |
| Une seule manifestation, alors que la Loi 25 exige un consentement « manifeste, libre et éclairé » | Une seconde manifestation, distincte et horodatée, sur un support que l'abonné contrôle |
| Une politique écrite | Un **contrôle technique** — la diligence raisonnable de l'art. 33 LCAP suppose un programme documenté et actif |

**Preuve du consentement — arbitrage v2.** La v1 affichait l'adresse IP de dépôt dans chaque pied de
page (v1 V-35 : contradiction avec la Loi 25). La v2 tranche, et le manifeste (`preuve_du_consentement`)
le code : la date, la page de dépôt et l'horodatage du clic de confirmation sont **conservés et
rappelés** dans chaque courriel ; l'adresse IP de dépôt est **conservée au journal** comme élément de
preuve, **jamais affichée ni réutilisée** à une autre fin. `tools/emails.mjs` exige désormais
`date_consentement` et `source_consentement`, et non plus `ip_consentement`.

**Le courriel de confirmation.** Il n'est pas le courriel 1 : il ne livre rien et ne promeut rien.
Expéditeur `Actio Dispatch <dispatch@actio.ca>`. Objet : « Confirmez votre inscription à Actio
Dispatch » (44). Pré-en-tête : « Un seul clic, valable sept jours. Sans lui, votre adresse est supprimée
et vous ne recevez rien. » (98). Corps : le libellé **intégral** du consentement affiché sur le site,
reproduit à l'identique ; la date, l'heure et l'URL de dépôt ; un bouton unique « Confirmer mon
inscription », jeton à usage unique valable 7 jours ; un lien « Je n'ai rien demandé — supprimer
définitivement cette adresse » ; l'identification d'Actio Média inc., son adresse postale et
l'avertissement d'absence de conseil. Aucun lien de rubrique, pas le guide. **Une seule relance à
+48 h**, ne contenant que le lien. **Purge à J+7** : la fiche en attente est détruite, non archivée.

#### 3.1.2 Le calendrier des trois courriels

Le point de départ est le **clic de confirmation**, jamais le dépôt du formulaire.

| Courriel | Décalage | Heure | Objet | Champs propres |
|---|---|---|---|---|
| **C1 — Accueil et remise du guide** | J+0, ≤ 5 min après le clic | Immédiat, tous jours, tous fuseaux | Bienvenue. Votre guide de survie est prêt. (42) | `{{lien_guide}}`, `{{date_arret_guide}}`, `{{date_premiere_edition}}`, `{{lien_profil_particulier}}`, `{{lien_profil_professionnel}}` |
| **C2 — Pourquoi le cadre canadien est unique** | J+2 | 11 h locales (V1 11 h HE, V2 11 h HP) | Aucune commission fédérale des valeurs mobilières (49) | `{{lien_carte_autorites}}` |
| **C3 — La boîte à outils** | J+5 | 11 h locales, mêmes vagues | La boîte à outils : fiches, Académie, registres (48) | `{{lien_fiches_plateformes}}`, `{{lien_academie}}`, `{{lien_registres}}`, `{{lien_preferences}}` |

**Pourquoi J+0, J+2, J+5.** (i) *La fenêtre de reconnaissance* : passé une semaine, le troisième
courriel devient une sollicitation non demandée. (ii) *La périodicité* : avec deux éditions par semaine,
une séquence de plus de sept jours croiserait trois éditions et rendrait indémêlable, en mesure, ce qui
relève de chacune. (iii) *La densité de C2* : à J+1, il serait ouvert dans la même session que C1 et lu
en diagonale.

**Pourquoi 11 h et non 7 h ni 12 h.** Ces deux créneaux sont les signatures des éditions ; un courriel
de séquence qui y partirait usurperait leur rendez-vous. Onze heures est le creux entre les deux.

**Jours interdits pour C2 et C3.** Un envoi dû un **mardi** ou un **vendredi** (jours d'édition), un
**samedi** ou un **dimanche** glisse au jour ouvrable autorisé suivant (lundi, mercredi, jeudi), même
heure. C1 y échappe : il livre ce que la personne vient de réclamer.

| Confirmation | C1 | C2 (J+2) | C3 (J+5) | Éditions intercalées |
|---|---|---|---|---|
| Lundi 14 h | Lundi 14 h 05 | Mercredi | Samedi → **lundi** (J+7) | Mardi (J+1), vendredi (J+4) |
| Mardi 9 h | Mardi 9 h 05 | Jeudi | Dimanche → **lundi** (J+6) | Vendredi (J+3) — C1 part *après* l'édition de 7 h, jamais le même envoi |
| Jeudi 16 h | Jeudi 16 h 05 | Samedi → **lundi** (J+4) | Mardi → **mercredi** (J+6) | Vendredi (J+1), mardi (J+5) |
| Vendredi 18 h | Vendredi 18 h 05 | Dimanche → **lundi** (J+3) | Mercredi (J+5) | Mardi (J+4) |

**L'entrelacement est permis, la superposition ne l'est pas** : un abonné ne reçoit jamais deux
courriels d'Actio le même jour, et la séquence cède toujours le pas à l'édition. Le cas « mardi 9 h »
est le seul où C1 et une édition tombent le même jour : C1 part parce qu'il est réclamé, l'édition est
déjà partie à 7 h — deux courriels ce jour-là, exception documentée dans `regle_de_collision`.

#### 3.1.3 Conditions de sortie

Désabonnement (sort de tout) ; « arrêter les courriels d'accueil » (`{{lien_arret_sequence}}`, sort de
la séquence, reste abonné aux éditions) ; fin des trois envois. Le clic sur l'un des deux boutons de
profil de C1 ne sort de rien : il change le segment.

### 3.2 Les trois courriels

Les textes intégraux sont ceux de `newsletter/contenus/bienvenue-1.html`, `bienvenue-2.html` et
`bienvenue-3.html`, assemblés par le châssis (bandeau de cours retiré).

#### Courriel 1 — J+0 · Accueil, positionnement, remise du guide

**Objet** : Bienvenue. Votre guide de survie est prêt. — **Variante B** : Votre guide réglementaire et
fiscal canadien est prêt. — **Pré-en-tête** : Ce qu'Actio est, ce qu'Actio n'est pas, vos deux
rendez-vous de la semaine, et une seule question à une ligne.

**H1.** Votre inscription à *Actio Dispatch* est confirmée. Votre guide est ici.

Vous recevrez deux courriels par semaine, jamais plus. **Le mardi à 7 h, heure de l'Est** : l'analyse
réglementaire et macro de la semaine — un grand angle, le radar des juridictions, un cas pratique
fiscal, un chiffre. **Le vendredi à 12 h** : le récapitulatif et un guide pratique à faire en quelques
minutes. Votre première édition vous parviendra le **{{date_premiere_edition}}**.

Entre-temps, deux courriels seulement : dans deux jours, pourquoi le cadre réglementaire canadien est
unique — et souvent mal compris ; dans cinq jours, la boîte à outils. Ensuite, plus rien que les deux
rendez-vous.

**Le guide promis.** [ Ouvrir le Guide de survie réglementaire et fiscal → ]

*Le Guide de survie réglementaire et fiscal pour l'investisseur crypto canadien*, arrêté au
{{date_arret_guide}}. Huit chapitres : qui réglemente quoi (ACVM, AMF, CVMO, OCRI, CANAFE, Banque du
Canada) ; comment vérifier qu'une plateforme est inscrite dans votre province ; ce qu'une inscription
protège, et ce qu'elle ne protège pas ; le prix de base rajusté, calculé sur un exemple ; gain en
capital ou revenu d'entreprise ; le T1135 et la TP-21.4.39 ; le jalonnement et les récompenses ; les
échéances du printemps. Chaque affirmation y porte son texte de renvoi et sa date de consultation ; ce
qui n'est pas établi y est écrit comme n'étant pas établi.

> **Ce qu'Actio est.** Un média canadien indépendant, bilingue, établi à Montréal et à Toronto, qui lit
> les actes réglementaires à la source et dit ce qu'ils obligent, qui ils obligent et à partir de quand.
> Sans contenu commandité non signalé. Quand un lien d'affiliation existe, il est divulgué dans le corps
> du texte, jamais caché dans un tableau.

> **Ce qu'Actio n'est pas.** Actio n'est inscrite à aucun titre auprès des Autorités canadiennes en
> valeurs mobilières, de l'Autorité des marchés financiers, de la Commission des valeurs mobilières de
> l'Ontario ni de l'Organisme canadien de réglementation des investissements. Nous ne fournissons ni
> conseil en placement, ni conseil juridique, ni conseil fiscal. Nous ne recommandons aucun actif et ne
> publions aucun objectif de cours. Si vous cherchez à savoir quoi acheter, vous êtes au mauvais
> endroit ; si vous cherchez à savoir ce qui vous oblige, restez.

**Une seule chose vous est demandée aujourd'hui.** Dites-nous comment vous lisez Actio. Cela change
l'ordre des sections de votre édition, pas la matière — et jamais le pied de page.
[ Je lis Actio à titre personnel ] [ Je lis Actio pour mon métier ]
*Vous pouvez ne pas répondre : c'est facultatif, et la lecture reste identique.*
— La rédaction d'Actio
*Je préfère ne recevoir que les éditions du mardi et du vendredi : arrêter les deux prochains courriels
d'accueil.*

**Pourquoi ce courriel est construit ainsi.** Il livre d'abord (le guide est le premier bouton, avant
tout discours) ; il fixe le contrat (deux envois, deux heures, une première date) ; il dit l'interdit
avant la promesse (« Ce qu'Actio n'est pas » est en rouge, avant la demande) ; et il ne demande qu'une
chose, facultative. Le guide est un document réel à produire avant le lancement (Module 4, phase 1) ;
tant qu'il n'existe pas, C1 ne part pas — règle codée par le champ `{{date_arret_guide}}`, qui ne peut
être vide.

#### Courriel 2 — J+2 · Pourquoi le cadre réglementaire crypto canadien est unique (et souvent mal compris)

**Objet** : Aucune commission fédérale des valeurs mobilières — **Variante B** : Pourquoi le cadre
canadien ne ressemble à aucun autre — **Pré-en-tête** : Quatre régimes se superposent sur une même
plateforme : valeurs mobilières, autoréglementation, LBC/FT fédéral, permis québécois.

**H1.** Pourquoi le cadre réglementaire crypto canadien est unique (et souvent mal compris)

La plupart des lecteurs arrivent chez Actio avec un modèle en tête, importé des États-Unis ou de
l'Europe : un régulateur national, une loi dédiée, un agrément unique. Le Canada n'a rien de tout cela
— et c'est ce qui rend son cadre à la fois plus exigeant qu'on ne le croit et plus mal compris qu'il ne
le mérite.

**1. Il n'existe pas de commission fédérale des valeurs mobilières.** Les valeurs mobilières relèvent
des provinces et des territoires. Treize autorités — l'AMF au Québec, la CVMO en Ontario, et les autres
— coordonnent leurs positions au sein des Autorités canadiennes en valeurs mobilières, les ACVM, qui ne
sont pas une autorité mais un forum. Un « avis du personnel des ACVM » n'est donc ni une loi ni un
règlement : c'est une interprétation partagée, qui s'impose aux plateformes par les conditions
d'inscription qu'elles acceptent. Conséquence pratique : une inscription vaut pour une province.
Vérifiez la vôtre.

**2. Ce n'est pas le jeton qui est réglementé, c'est la relation.** Depuis l'Avis 21-327 de janvier
2020, le raisonnement canadien tient en une phrase : quand une plateforme ne vous livre pas
immédiatement l'actif que vous achetez, elle vous doit quelque chose — et cette créance, ce *contrat de
cryptoactif*, est une valeur mobilière. Les ACVM n'ont pas qualifié le bitcoin lui-même de valeur
mobilière ; c'est la relation avec la plateforme qui le garde pour vous qui l'est. C'est pourquoi le Canada a inscrit ses plateformes
des années avant la plupart des pays, sans jamais adopter de loi « crypto ».

**3. L'inscription se fait par paliers, et le dernier palier est désormais le seul.** Engagement
préalable, puis courtier restreint (une catégorie transitoire, avec des plafonds), puis courtier en
placement membre de l'OCRI, l'organisme d'autoréglementation. Depuis août 2024, la voie transitoire est
fermée aux nouveaux venus : une plateforme qui veut servir des Canadiens vise directement l'OCRI, avec
son cadre de garde des actifs numériques — dépositaires par paliers, autogarde restreinte. Ce que vous
devez retenir : la catégorie d'inscription de votre plateforme dit ce qu'elle a le droit de vous offrir.

**4. Un second guichet, fédéral, que l'inscription provinciale ne remplace pas.** Une plateforme est
aussi une *entreprise de services monétaires* au sens de la loi fédérale contre le blanchiment :
inscription auprès du CANAFE, déclarations d'opérations, règle d'acheminement. Au Québec s'ajoute un
permis d'ESM, délivré par Revenu Québec. Trois formalités pour une plateforme active au Québec — et trois
registres pour vous, lecteur, qui voulez la vérifier.

> **Le piège du moment.** La loi fédérale sur les cryptomonnaies stables est adoptée, mais pas en
> vigueur : ses règlements ne sont pas pris. Un texte qui dit que les émetteurs « doivent désormais »
> quoi que ce soit décrit un avenir. Aujourd'hui, c'est l'Avis 21-333 des ACVM qui décide, plateforme
> par plateforme, quels jetons arrimés au dollar vous pouvez acheter.
> *[À VÉRIFIER — dates et numéros d'avis non lus à la source à la date de rédaction ; voir le registre
> de vérification.]*

**Ce que cela change pour vous, en une ligne.** Au Canada, la question n'est jamais « ce jeton est-il
légal ? » mais « ma plateforme est-elle inscrite dans ma province, dans quelle catégorie, et auprès de
quels registres ? ». Le guide reçu avant-hier répond aux trois. Vendredi, la boîte à outils vous donnera
les liens directs.
[ Voir la carte des autorités canadiennes → ]
— La rédaction d'Actio
*Je préfère ne recevoir que les éditions du mardi et du vendredi : arrêter le dernier courriel d'accueil.*

**Pourquoi ce courriel est construit ainsi.** Il corrige quatre idées reçues dans l'ordre où un
nouveau lecteur les rencontre (qui réglemente → quoi → comment → et quoi d'autre), chaque point fermant
sur une conséquence pratique ; il porte le « piège du moment » en ambre, parce que c'est la faute la
plus répandue de la presse généraliste ; et il annonce C3 sans le vendre. Lignes du registre de
vérification concernées : V-01, V-02, V-36 (Avis 21-327, janvier 2020), V-38 (passeport) — le corps ne
cite aucune date de jour, aucun seuil, aucun nom de plateforme.

#### Courriel 3 — J+5 · La boîte à outils

**Objet** : La boîte à outils : fiches, Académie, registres — **Variante B** : Trois outils, chacun pour
un problème précis — **Pré-en-tête** : Une fiche par plateforme inscrite, trois parcours de guides et
sept registres officiels réunis : chacun résout un problème précis.

**H1.** La boîte à outils : les fiches des plateformes autorisées, l'Académie, les registres

Trois outils, chacun pour un problème précis. Après ce courriel, vous ne recevrez plus que les deux
rendez-vous : le mardi à 7 h et le vendredi à 12 h, heure de l'Est.

> **Outil 1 · « Cette plateforme a-t-elle le droit de me servir ? » — Les fiches des plateformes
> autorisées.** Une fiche par plateforme inscrite auprès d'au moins une autorité canadienne : catégorie
> d'inscription, provinces couvertes, dépositaire déclaré, inscription d'ESM au CANAFE, permis
> québécois, date de la dernière décision, lien vers la fiche officielle de chaque registre. Le statut
> est repris du registre de l'autorité et daté ; il n'est ni une recommandation ni une garantie. Quand
> une fiche comporte un lien d'affiliation, il est divulgué dans son corps. [ Ouvrir les fiches → ]

> **Outil 2 · « Par où commencer ? » — L'Académie Actio, en trois parcours.** **Je débute au Canada**
> (débutant) : dépôt par virement Interac, choix d'une plateforme inscrite, sécurité du compte. **Je
> déclare mes cryptos** (intermédiaire) : prix de base rajusté lot par lot, gain ou revenu, T1135,
> TP-21.4.39. **Je comprends la régulation des plateformes** (avancé) : du contrat de cryptoactif à
> l'adhésion à l'OCRI, pour les directions de la conformité et les cabinets. Chaque guide porte sa date
> d'arrêt et son niveau. [ Choisir un parcours → ]

> **Outil 3 · « Où est la source ? » — Les registres officiels, en un endroit.** La recherche nationale
> d'inscription des ACVM, le registre et les mises en garde de l'AMF, le registre de la CVMO, les
> courtiers membres de l'OCRI, les entreprises de services monétaires du CANAFE, les permis de Revenu
> Québec, la *Gazette du Canada*. Actio ne se substitue à aucun d'eux : nous vous y conduisons, et nous
> datons chaque consultation. [ Ouvrir les registres → ]

**Deux réglages, si vous le souhaitez.** Votre juridiction (Tout Canada, Québec, Ontario,
International) et votre langue (français, anglais) se règlent une fois sur le site et s'appliquent à
chaque page. Ni l'un ni l'autre n'est déduit de votre adresse IP : c'est vous qui choisissez.
[ Régler ma juridiction et ma langue → ]
— La rédaction d'Actio
*C'était le dernier courriel de la séquence d'accueil. À mardi, 7 h.*

**Pourquoi ce courriel est construit ainsi.** Trois problèmes, trois outils, trois boutons ; chaque
outil dit sa limite (« ni une recommandation ni une garantie », « nous ne nous substituons à aucun
registre ») ; les trois parcours de l'Académie sont ceux de `prototype/fr/index.html` (`.parcours`),
mot pour mot ; et le dernier bouton mène aux préférences, pas à un contenu — la séquence finit en rendant
la main. Il ne promet aucune fiche qui n'existe pas encore : les liens `{{lien_fiches_plateformes}}`
et `{{lien_academie}}` sont remplis par la rédaction et ne peuvent pointer que vers des pages publiées
(registre V-14, V-15).

### 3.3 Mesure et itération de la séquence

| Point de mesure | Ce qu'il dit | Seuil d'action |
|---|---|---|
| Confirmations ÷ formulaires | Qualité du formulaire et du courriel de confirmation | < 55 % : réécrire la confirmation avant tout |
| Clic « Ouvrir le guide » (C1) | Le guide est-il la bonne promesse | < 40 % à 7 jours : la promesse d'inscription et C1 ne concordent pas |
| Réponse profil (C1) | Répartition B2C/B2B réelle | Informatif ; sous 25 % de réponses, l'ordre des sections reste celui de `b2c-investisseurs` |
| Clic « carte des autorités » (C2) | Intérêt pour la pédagogie institutionnelle | < 15 % : raccourcir C2 de moitié |
| Clics par outil (C3) | Quel outil est cherché en premier | Réordonner C3 chaque trimestre selon le clic dominant |
| Arrêts de séquence | Densité perçue | > 5 % sur C1 : la séquence promet trop de courriels |
| Désabonnements pendant la séquence | Erreur d'attente à l'inscription | > 2 % : revoir la page d'inscription, pas la séquence |

Chaque modification d'un courriel d'accueil rouvre sa relecture juridique et ses lignes du registre ;
le texte est figé entre deux relectures, jamais retouché « en passant ».

---

## 4. Conformité LCAP, Loi 25 et LPRPDE — ce que le châssis garantit et ce qu'il ne peut pas garantir

| Exigence | Où elle est satisfaite | Contrôle | Ce qui reste hors du code |
|---|---|---|---|
| Consentement exprès, prouvable | Case à cocher avant le champ (`prototype/fr/index.html`), double confirmation, journal de consentement | `date_consentement` et `source_consentement` obligatoires | Le journal lui-même (Module 4) ; sa conservation ; la relance unique |
| Identification de l'expéditeur | Pied LCAP : Actio Média inc., adresse postale, courriel | Mention « Actio Média inc. » et « Montréal (Québec) » obligatoires | **L'existence de la personne morale et la validité de l'adresse** (registre V-26) |
| Mécanisme d'exclusion en un clic, sans connexion, actif 60 jours, traité sous 10 jours ouvrables | Lien `{{lien_desabonnement}}` + en-têtes `List-Unsubscribe` et `List-Unsubscribe-Post` (manifeste) | Mention « 10 jours ouvrables » et champ obligatoires | La mise en œuvre côté prestataire, testée avant le premier envoi |
| Absence d'indication fausse ou trompeuse | Doctrine de l'objet (§ 1.3), registre de vérification | Objet ≠ titre, bornes, pas d'émoji | Le fond de chaque affirmation |
| Minimisation (Loi 25) | Aucune IP affichée ; mesure agrégée ; aucune police web ni pixel | — | Politique de conservation (13 mois), évaluation des facteurs relatifs à la vie privée avant tout transfert hors Québec |
| Hébergement et sous-traitance | Non promis dans le courriel v2 (la v1 promettait « hébergés au Canada » : retiré, registre V-24) | — | Le contrat du prestataire d'envoi et sa région (Module 4) |
| Langue (Charte de la langue française) | Liste française et liste anglaise distinctes, jamais de courriel bilingue imposé ; le français n'est jamais publié après l'anglais | Symétrie contrôlée à la relecture | La qualification de l'infolettre au regard de la Charte (U-58) |

---

### Ce qui reste à trancher

1. **Le numéro 042.** Le cahier des charges impose une édition « nº 042 » ; à deux envois par semaine,
   elle correspond à la vingt-et-unième semaine de diffusion. Soit le lancement est daté en conséquence
   (avril 2026 pour un nº 042 le 8 septembre), soit le numéro est celui du mardi seulement (le vendredi
   ayant sa propre série), soit la première édition réelle portera le nº 001 et le 042 reste un numéro
   de maquette. La rédaction recommande la seconde option : deux séries, « nº 042 » pour le mardi,
   « V-042 » pour le vendredi, lisibles séparément dans les archives.
2. **Le guide de survie.** C1 ne peut partir sans lui. Huit chapitres sont annoncés ; les écrire est un
   travail de phase 1 (Module 4), et `{{date_arret_guide}}` ne peut être vide.
3. **La preuve sociale « 15 000 »** affichée par `.infolettre__preuve-sociale` sur le site (registre
   V-25) : la retirer jusqu'à 1 000 abonnés, ou la remplacer par une preuve vraie. L'infolettre, elle,
   n'affiche aucun chiffre d'abonnés.
4. **Le prestataire d'envoi** (Beehiiv, Resend + React Email, ou autre — Module 4) : les champs de
   fusion du manifeste sont nommés en français et en minuscules ; leur syntaxe `{{…}}` devra être
   transposée à celle du prestataire sans en changer la liste fermée.
5. **La signature.** Nº 042 est signée « La rédaction » et non d'un nom : décision v2, cohérente avec la
   ligne V-30 du registre. La signature nominative reviendra quand une juriste réelle signera.
6. **La série du vendredi.** Ce module spécifie son format (§ 1.1) et sa cadence (manifeste) sans en
   livrer une édition pilote : le cahier des charges n'en demandait pas. La première édition du vendredi
   sera écrite sur le même châssis avec `bandeau_cours: false` et trois blocs (récapitulatif, guide,
   agenda) ; son gabarit de fragment est à ajouter à `newsletter/contenus/` en phase 1.
