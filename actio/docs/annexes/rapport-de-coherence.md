## Annexe B — Rapport de cohérence croisée des livrables

Relecture croisée des onze documents de `docs/`, du prototype (`prototype/index.html`,
`prototype/fr/index.html`, `prototype/fr/article.html`, `prototype/fr/registre.html`,
`prototype/en/index.html`, `assets/tokens.css`, `assets/actio.css`, `assets/article.css`,
`assets/actio.js`) et du système de mailing (`newsletter/actio-dispatch-001.html`,
`newsletter/chassis.html`, `newsletter/manifeste.json`, `tools/emails.mjs`).

**Verdict.** Les trois livrables sont cohérents entre eux sur leur doctrine — un statut par
couleur, une source primaire par affirmation, le français d'abord, aucune recommandation
d'actif — et cette doctrine est effectivement exécutée par le code et par l'outillage. La
cohérence se rompt sur trois plans. **Premier :** les documents ont vieilli plus vite que le
code. Une dizaine de « défauts à corriger » sont corrigés dans le dépôt mais toujours décrits
comme ouverts, deux fichiers déclarés absents existent, deux classes déclarées inexistantes sont
écrites, et la quasi-totalité des renvois de ligne avaient dérivé. **Deuxième :** trois valeurs
structurantes divergent d'un livrable à l'autre sans qu'aucun ne le signale — la fréquence
d'envoi (52 ou 44 éditions par an), les points de rupture de mise en page, et la longueur du
pré-en-tête. **Troisième, et le plus lourd :** le livrable 3 et le corps rédigé de la séquence de
bienvenue affirment du droit daté et chiffré sans le marqueur que le registre de vérification
rend obligatoire, y compris sur des points que ce même registre classe *NON VÉRIFIÉ — NE PAS
PUBLIER*. Les écarts objectifs ont été corrigés ; le reste est ci-dessous.

Après correction, `npm run tout` (structure → docs → emails → verifier) passe au vert, ce que le
§ 2.5 de `docs/L3-2-stack-technique.md` affirmait sans que ce fût encore le cas.

---

### B.1 Ce qui a été corrigé

#### Valeurs de couleur contredisant la source de vérité

| # | Où | Était | Est |
|---|---|---|---|
| C-01 | `docs/L1-1-arborescence.md` § 1.4, ligne « Juridiction » | `--jur-multi` `#0B7F74` | `#096B61` — valeur de `assets/tokens.css` |
| C-02 | `docs/L1-1-arborescence.md` § 1.4, ligne « Niveau d'impact » | `--actio-turquoise-fonce` `#0B7F74` | `#096B61` |
| C-03 | `docs/L2-2-edition-type.md` § 2.2.1 | « Le point de *Actio.* emploie `#0B7F74` (`--jur-multi`) » | `#096B61` (`--actio-turquoise-fonce`) — valeur réellement posée dans `newsletter/chassis.html` et `newsletter/actio-dispatch-001.html` |
| C-04 | `docs/L3-1-identite-marque.md` § 1.5, tableau des déclinaisons | En-tête de courriel, point `#0B7F74` | `#096B61`, conformément au § 1.5 du même document qui déclare l'écart « résolu » |
| C-05 | `prototype/assets/tokens.css` l. 65 | commentaire « sur `--encre-accent` : 8,8:1 » | « 9,1:1 » — valeur du bloc d'accessibilité du même fichier ; calcul de luminance relative : 9,12 |

`#0B7F74` n'existe dans aucun jeton : c'est l'ancienne valeur de `--actio-turquoise-fonce`, que
`docs/L3-1-identite-marque.md` § 1.5 raconte avoir abandonnée. Quatre documents la citaient encore
comme si elle était en vigueur. Le récit historique du § 1.5 a été conservé tel quel.

#### Affirmations contredites par le dépôt

| # | Où | Était | Est |
|---|---|---|---|
| C-06 | `docs/L1-1-arborescence.md` § 1.2 | « `.conformite` pointe vers `registre.html`, fichier qui n'existe pas encore alors que `assets/registre.css` est déjà écrit » | Les deux fichiers existent ; ne reste que le ticket des sept liens `href="#"` de la colonne « Transparence » |
| C-07 | `docs/L1-2-wireframe-accueil.md` § 2.13, D2 | « `docs/annexes/registre-de-verification.md` n'existe pas » | Le registre est écrit ; le défaut réel était le chemin relatif du lien, corrigé (voir C-18) |
| C-08 | `docs/L2-3-sequence-bienvenue.md` § 3.1.4 | « `newsletter/manifeste.json` n'existe pas encore dans le dépôt : premier ticket » | Il existe et décrit les quatre envois — ce que le point 4 de « Ce qui reste à trancher » du même document affirmait déjà, en se contredisant |
| C-09 | `docs/L2-3-sequence-bienvenue.md` § 3.1.4 | Clés `bienvenue-01`, `bienvenue-02`, `bienvenue-03` | `bienvenue-1`, `bienvenue-2`, `bienvenue-3` — clés réelles du manifeste |
| C-10 | `docs/L1-3-wireframe-article.md` § 3.3 et `docs/L3-3-conformite-deontologie.md` § 3.5.1 et « reste à trancher » 2 | « La variante `.maj--correction` n'existe pas dans `article.css` : à créer » | Elle est écrite (`assets/article.css` l. 293-297). Elle n'est employée nulle part : l'arbitrage porte désormais sur son emploi, non sur sa création |
| C-11 | `docs/L3-3-conformite-deontologie.md` § 3.1.4 et « reste à trancher » 2 | « La classe `.commandite` n'existe pas dans `actio.css` : à créer » | Elle est écrite (`assets/actio.css` l. 698-723), avec `.commandite__titre` et `.commandite__inscription`, et employée nulle part |
| C-12 | `docs/L1-3-wireframe-article.md` § 3.4 | « Défaut à corriger : `.retenir__liste li::before` pose `background: var(--actio-bleu-palais); color: #fff` » | Le code pose déjà `--fill-primaire` / `--fill-primaire-texte` |
| C-13 | `docs/L1-3-wireframe-article.md` § 3.2 | Portraits en dégradé `--actio-bleu-palais` → `--actio-turquoise-fonce`, « défaut à corriger » | Le code emploie `--degrade-2` → `--degrade-3`, invariants par thème. Subsiste une seule valeur brute, le `color: #fff` des deux règles |
| C-14 | `docs/L1-2-wireframe-accueil.md` § 2.13, D6 | « Le déclencheur du mega-menu est un `<a>` … ni lien, ni bouton » | C'est un `<button type="button">` (l. 96-100) ; ne reste que l'absence de lien vers l'index de la rubrique |
| C-15 | `docs/L1-2-wireframe-accueil.md` § 2.13, D10 et D11 | Dégradé de `.une__visuel` et valeurs brutes du SVG de la une | Corrigés dans le code : `--degrade-1/2/3` et jetons d'encre ; le seul `#FFFFFF` restant est posé sur `--statut-alerte-fixe`, appariement autorisé |
| C-16 | `docs/L1-2-wireframe-accueil.md` § 2.5 et § 2.13, D12 | Carte 2 décrite comme « *Sanction OCRI* / Ontario » | Le code porte `badge--info` « Avis du personnel » et `juridiction--multi` « ACVM · OCRI ». Le doute de millésime (2021 / 2022) reste ouvert |
| C-17 | `docs/L1-2-wireframe-accueil.md` § 2.13, D17 et D18 | Case de consentement après le bouton d'envoi ; deux valeurs brutes dans `.infolettre .btn--primaire` | D17 corrigé (le label précède le formulaire dans le DOM) ; D18 à moitié — subsistent les deux `#fff` de la règle de survol |
| C-18 | `prototype/fr/index.html` l. 37 | `href="../docs/annexes/…"`, qui vise `prototype/docs/` | `href="../../docs/annexes/…"`. `tools/verifier.mjs` signalait ce lien interne cassé ; il ne signale plus aucun défaut. La ligne V-43 du registre de vérification a été mise à jour en conséquence |
| C-19 | `docs/L1-1-arborescence.md` § 1.5 | « les clés `actio.theme` et `actio.langue` déjà employées dans `assets/actio.js` » | Seule `actio.theme` existe : `assets/actio.js` l. 9 déclare `var STOCKAGE = { theme: 'actio.theme' }` |

#### Mesures et décomptes faux

| # | Où | Était | Est |
|---|---|---|---|
| C-20 | `docs/L1-2-wireframe-accueil.md` § 2.0 | `.col-8` = 664 px | **808 px**. La grille du document pose colonne unitaire 80 px et gouttière 24 px : 8 × 80 + 7 × 24 = 808. 664 supposait une seule gouttière. Toutes les autres largeurs du tableau sont exactes |
| C-21 | `docs/L1-2-wireframe-accueil.md` § 2.6 | Quatre `.col-6` de 320 px dans le bloc Fiscalité | **392 px**. 320 px était la conséquence arithmétique du 664 px erroné |
| C-22 | `docs/L1-2-wireframe-accueil.md`, chapeau | « `prototype/fr/index.html` (907 lignes) » | 911 lignes |
| C-23 | `docs/L2-2-edition-type.md`, chapeau et § 2.2.2 | 33 383 octets pour l'édition nº 001 ; 11 492 pour le châssis ; « 32,6 Ko — 32 % du seuil » | 33 650 et 11 476 octets ; « 32,9 Ko — 33 % du seuil ». Le plafond interne de 80 Ko reste largement tenu |

#### Renvois de ligne dérivés

Corrigés dans `docs/L1-1-arborescence.md`, `docs/L1-2-wireframe-accueil.md` et
`docs/L3-3-conformite-deontologie.md` : point de rupture 1100 px de `assets/actio.css` (340 → 371) ;
`prefers-reduced-motion` (10-16 → 10-15) ; `.avertissement` (639 → 663) ; `.demo a` (659 → 742) ;
colonne « Rubriques » (824 → 829) ; `h1.vh` (177 → 179) ; style en ligne `--encre-stable` (64 → 65) ;
commentaire « Hauteur fixe 36 px » (41 → 42) ; case de consentement et libellés LCAP de
`prototype/fr/index.html` (774 → 770 ; 773-782 → 769-778 ; 776-778 → 772-774 ; 778-779 → 774-775 ;
779-780 → 775-776) ; blocage, message de preuve, remise à zéro et titres `[data-arrete]` de
`assets/actio.js` (220-227 → 190-196 ; 229-231 → 198-201 ; 233-236 → 203-205 ; 244-247 → 214-216) ;
retour de focus à `Échap` (120-124 → 90-94). Seuls renvois trouvés exacts : `article.html` lignes
9-11 (hreflang) et les localisations du bandeau `.demo` dans le registre de vérification.

#### Code

| # | Fichier | Correction |
|---|---|---|
| C-24 | `newsletter/manifeste.json` | Le pré-en-tête de `bienvenue-2` écrivait **« Cinq couches de droit, treize autorités… »**. `docs/L2-3-sequence-bienvenue.md` § 3.2 interdit expressément ce chiffre — « ne jamais écrire *treize autorités* avant vérification » — et le corps du courriel l'évite scrupuleusement. La mention partait pourtant en boîte de réception, où elle est le premier texte lu. Remplacé par le pré-en-tête que le même § 3.2 prescrit : « Quatre régimes se superposent sur une même plateforme : valeurs mobilières, autoréglementation, LBC/FT fédéral, permis québécois. » `newsletter/dist/` régénéré |
| C-25 | `tools/docs.mjs` | Le contrôle A traitait un nom d'hôte cité entre accents graves comme un chemin de dépôt et faisait échouer `npm run docs` sur une URL de la *Gazette du Canada*. Le premier segment d'un chemin relatif est un nom de répertoire, jamais un nom d'hôte pointé : le contrôle ignore désormais ces derniers, sans rien relâcher d'autre |
| C-26 | `docs/L3-2-stack-technique.md` § 2.1 | Deux clés de configuration de `mailgun.js`, citées sous leur seul suffixe pointé, étaient lues comme des classes CSS inexistantes. Écrites en toutes lettres : `bulkEmail.mailgun.domain`, `bulkEmail.mailgun.baseUrl` |

---

### B.2 Ce qui reste à trancher par un humain

#### Contradictions entre livrables

**T-01 — 52 éditions par an, ou 44 ?** `docs/L2-1-strategie-mailing.md` § 1.2 pose « une édition
par semaine, le mardi », sans relâche annoncée, et le courriel C1 le promet à l'abonné. Mais
`docs/L3-2-stack-technique.md` § 2.2 et `docs/L3-4-modele-roadmap.md` § 4.2 (hypothèse H6, coût de
production, taux de remplissage du parrainage) comptent **44 éditions par an**. Huit semaines
d'écart, qui portent le coût direct (35 640 $), l'inventaire publicitaire et la promesse faite à
l'inscription. Décider le calendrier, puis l'annoncer sur la page d'inscription — ou passer les
modèles à 52.

**T-02 — Les points de rupture s'annulent d'un livrable à l'autre.**
`docs/L1-2-wireframe-accueil.md` § 2.0 : « les deux ruptures structurantes sont **1024 px** et
**640 px** », et toute sa grille responsive en dépend. `docs/L1-3-wireframe-article.md` § 3.5 :
« seuil de bascule **1080 px** », câblé en quatre endroits (`top`, `scroll-margin-top`,
`rootMargin`, media query). `docs/L3-2-stack-technique.md` § 2.5 décide au contraire « quatre
seuils canoniques — **560, 760, 900 et 1100 px** », les trois autres « repliés sur le voisin le
plus proche ». Appliquer cette décision réécrit la totalité du comportement responsive spécifié
par le livrable 1, et aucun des trois documents ne le mentionne. C'est la contradiction la plus
coûteuse du lot.

**T-03 — Longueur du pré-en-tête : 120 ou 130 signes ?** `docs/L2-1-strategie-mailing.md` § 1.3
fixe la cible « 90 à 120 caractères » ; `docs/L2-2-edition-type.md` § 2.2.5 dit « 90 à 130 » et
son point de contrôle 16 « ≤ 130 ». Le pré-en-tête que `docs/L2-3-sequence-bienvenue.md` prescrit
pour C2 fait 129 signes : conforme à l'un, hors cible de l'autre. Aucun outil ne le contrôle,
alors que `tools/emails.mjs` contrôle déjà les bornes de l'objet.

**T-04 — Le registre : six ou sept colonnes ?** `docs/L1-2-wireframe-accueil.md` § 2.2 et § 2.12
et `docs/L2-3-sequence-bienvenue.md` (annexe C du guide) en énumèrent six ;
`docs/L3-2-stack-technique.md` § 2.1 en annonce sept ; `prototype/fr/registre.html` porte sept
`<th scope="col">`. L'écart vient de ce que les six énumérés omettent la colonne « Plateforme ».
Harmoniser dans un sens ou dans l'autre : la « fiche de vérification d'une plateforme » promise
en annexe du guide est bâtie sur ce décompte.

**T-05 — Quatre ou six fichiers de police par page ?** `docs/L3-1-identite-marque.md` § 1.3 :
« aucune page ne charge plus de 6 fichiers », sur dix romains produits.
`docs/L3-2-stack-technique.md` § 2.5, budget de performance : « polices, **quatre** fichiers
`woff2` ≤ 200 ko ». Le budget de poids dépend du chiffre retenu.

**T-06 — Le sélecteur de juridiction existe-t-il ?** `docs/L1-1-arborescence.md` § 1.5 le décrit
comme « troisième composant `.selecteur` », avec six états, une persistance `localStorage` et un
comportement différencié index / article — au présent de l'indicatif, comme le reste de la
section. `docs/L1-2-wireframe-accueil.md` § 2.3 ne connaît que « deux sélecteurs », et le
prototype n'en porte que deux (langue, thème). Spécification à venir ou description fautive de
l'existant : le document ne le dit pas, et `tools/docs.mjs` ne peut pas le voir puisque la classe
`.selecteur` existe.

**T-07 — Méthode de calcul du temps de lecture du site.**
`docs/L1-2-wireframe-accueil.md` § 2.13, arbitrage 2 : « aucune formule n'est fixée […] de sorte
que *11 min* reste un chiffre sans auteur ». Or `docs/L1-3-wireframe-article.md` § 3.13 en donne
une : `arrondi(signes de .prose ÷ 1 300) + 1 minute par tableau`. Et
`docs/L2-1-strategie-mailing.md` § 1.5 en donne une troisième pour l'infolettre (`mots ÷ 180`).
Deux formules, une déclaration d'absence : trancher laquelle fait foi pour le site.

**T-08 — Noms des rubriques de l'infolettre.** `docs/L2-1-strategie-mailing.md` § 1.5 annonce
« dans l'ordre codé : *Le grand angle réglementaire* · *Le radar des juridictions* · *Le chiffre
de la semaine* · *Le point fiscalité et jurisprudence* ». Les libellés visibles de
`newsletter/contenus/dispatch-001.html` sont « Le grand angle », « Le radar des juridictions »,
« Le chiffre de la semaine », « Fiscalité & jurisprudence » ; les deux formes longues ne vivent
que dans les commentaires HTML. Un lecteur qui cite la charte ne retrouvera pas deux des quatre
rubriques.

**T-09 — Objets et pré-en-têtes de la séquence : le manifeste et le livrable divergent.**
La variante A/B nº 1 de C2 est « Pourquoi le Canada n'a pas de gendarme unique » dans
`docs/L2-3-sequence-bienvenue.md`, « Pourquoi le cadre canadien ne ressemble à aucun autre » dans
`newsletter/manifeste.json`. Et cinq décomptes de signes du livrable sont décalés d'un cran :
objet de C2 annoncé 48, mesuré 49 ; objet de C3 43 / 44 ; variante 1 de C3 40 / 41 ; pré-en-tête
de C1 104 / 103 ; pré-en-tête de C3 105 / 106. Les autres sont exacts. Aucun contrôle automatisé
ne porte sur ces décomptes.

**T-10 — Vagues d'envoi : les territoires.** `docs/L2-1-strategie-mailing.md` § 1.2 décrit
V1 « Québec, Ontario, Atlantique » et V2 « C.-B., Alberta, Saskatchewan, Manitoba ».
`newsletter/manifeste.json` ajoute YT, NT et NU à `vague_2`. Les territoires n'apparaissent dans
aucun document du livrable 2, alors que `docs/L3-4-modele-roadmap.md` § 4.1.1 fait des deux vagues
« un instrument de conformité » province par province.

**T-11 — « Cinq ans » ou « six ans » après l'Avis 21-327.** `prototype/fr/index.html` l. 313 écrit
« Cinq ans », `newsletter/contenus/dispatch-001.html` écrit « six ans » deux fois. Le registre de
vérification l'a tracé (V-09) et pose que janvier 2020 donne six ans, mais subordonne la levée à
V-04 (date de l'avis, *NON VÉRIFIÉ*). Non corrigé ici : la date de départ n'est pas établie, et
corriger le texte reviendrait à trancher une question de fond.

**T-12 — Deux projets de loi, une même date.** `docs/L2-3-sequence-bienvenue.md` fait sanctionner
le projet de loi C-12 (LBC/FT) le 26 mars 2026 (corps de C2, chapitre 5 du guide) et édicter le
régime fédéral des cryptomonnaies stables — attribué au projet de loi **C-15** au chapitre 8 —
« le 26 mars 2026 » également (C3). C-15 n'apparaît nulle part ailleurs dans les livrables, et
aucun renvoi ne rapproche les deux mentions. Vérifier avant emploi ; en attendant, ne pas dater.

**T-13 — `--encre-texte-2` : 8,6 ou 8,7 ?** `docs/L1-2-wireframe-accueil.md` § 2.9 écrit 8,6:1 ;
`assets/tokens.css` et `docs/L3-1-identite-marque.md` écrivent 8,7:1. Valeur calculée : 8,65.
Écart d'arrondi, mais la règle se veut opposable et vérifiée par calcul.

**T-14 — D13 est présenté comme réglé et ne l'est pas.** Le point (6) des arbitrages du § 2.13 de
`docs/L1-2-wireframe-accueil.md` annonce « six emplois décoratifs reversés » vers `.etiquette` —
mais n'en nomme que quatre (« Démo », « Analyse », « Dossier », « Guide »), et « Guide » n'existe
en `.etiquette` sur aucune page. Surtout, quatre badges portent toujours un sujet et non un statut
dans `prototype/fr/index.html` : `badge--info` « Biens étrangers », `badge--consultation`
« TPS / TVH », `badge--consultation` « Position administrative », `badge--alerte` « Obligation
déclarative » — précisément ceux que D13 dénonce comme « le défaut le plus grave ». S'y ajoute le
`badge--info` « Dossier permanent » du mega-menu. Le § 2.2 continue par ailleurs de parler du
« badge *Démo* » là où le code pose une `.etiquette`.

**T-15 — D1 est à moitié obsolète.** `.col-2` n'est effectivement pas déclaré à la base dans
`assets/actio.css`, mais il figure déjà dans les deux media queries (1024 px → `span 6`,
640 px → `span 12`). Il ne reste à écrire que la déclaration de base.

**T-16 — `art. 13 LCAP` est toujours écrit dans le code.**
`docs/L1-2-wireframe-accueil.md` § 2.9 conclut que le message doit énoncer l'obligation « sans le
numéro d'article », le registre (V-34) et `docs/L2-2-edition-type.md` § 2.2.5 rappelant que seul
l'art. 33 a pu être confirmé. `assets/actio.js` l. 200 l'écrit encore, et ce texte s'affiche au
lecteur après un envoi réussi. Correction éditoriale à décider, non appliquée ici parce qu'elle
touche une chaîne visible.

**T-17 — « Sept seuils, quatre feuilles ».** `docs/L3-2-stack-technique.md` § 2.5 recense sept
seuils répartis sur quatre feuilles. Le dépôt en porte huit si l'on compte le
`@media (max-width: 520px)` du bloc `<style>` de `prototype/index.html`, qui est bien l'une des
quatre sources de règles (les trois autres étant `assets/actio.css`, `assets/article.css` et
`assets/registre.css` ; `assets/tokens.css` n'en contient aucune). À clarifier avant de replier
quoi que ce soit.

#### Affirmations juridiques sans source ni marqueur

Le registre de vérification pose (règle A.4-2) que toute ligne « À VÉRIFIER » est « soit levée,
soit reformulée dans les termes exacts du registre des incertitudes, **marqueur visible dans le
corps du contenu, jamais en page de mentions** ». Les points suivants s'en écartent.

**T-18 — Charte de la langue française, art. 52 et 55.**
`docs/L3-3-conformite-deontologie.md` § 3.4.3 les énonce comme du droit établi : « L'article 52
vise les publications commerciales, sites web et réseaux sociaux compris » ; « L'article 55, dans
sa version en vigueur depuis le 1er juin 2023, impose que le contrat d'adhésion soit remis d'abord
en français ». Aucun marqueur. Or `docs/L1-1-arborescence.md` § 1.5 marque **[À VÉRIFIER]**
exactement le même point, en précisant que « le texte de l'art. 52 et le libellé exact du
règlement n'ont pas pu être lus à la source, l'accès à legisquebec.gouv.qc.ca ayant été bloqué ».
Deux livrables, deux régimes de certitude pour la même règle — et c'est le livrable 3 qui se
présente comme « document opposable interne ».

**T-19 — Une absence affirmée : « il n'existe aucun délai de 72 heures dans la Loi 25 ».**
`docs/L3-3-conformite-deontologie.md` § 3.4.2 en fait une règle interne, et
`docs/L2-1-strategie-mailing.md` § 1.3 en fait la ligne d'objet D1, présentée comme un « démenti
sûr ». Mais le registre classe *NON VÉRIFIÉ — NE PAS PUBLIER* l'affirmation « zéro règlement
permanent » (V-10) au motif qu'« affirmer une absence exige un dépouillement exhaustif ». Le même
standard devrait valoir ici, ou la différence de traitement devrait être motivée.

**T-20 — Droit privé d'action de la LCAP.** § 3.4.1 : « suspendu par décret avant son entrée en
vigueur prévue en 2017, n'a pas été abrogé ». Trois faits juridiques datés, sans marqueur, dans un
paragraphe qui marque pourtant **[À VÉRIFIER]** les montants de sanction qui le précèdent.

**T-21 — Communiqué des ACVM du 22 octobre 2025.** § 3.1.2 : il « rappelle que ces prêts relèvent
de l'inscription et du prospectus », sans marqueur, et ce constat fonde un refus de format
publicitaire. Le registre classe ce communiqué *NON VÉRIFIÉ — NE PAS PUBLIER* (V-17).

**T-22 — LAPHO : « rapport de conformité au-delà de 20 employés »** (§ 3.4.4). Ce seuil
n'apparaît dans aucun autre livrable — les quatre autres mentions de la LAPHO ne citent que les
50 employés — et il n'est pas marqué.

**T-23 — Les chiffres fiscaux du guide.** `docs/L2-3-sequence-bienvenue.md`, chapitre 7 du
sommaire remis en C1, écrit sans marqueur en ligne : seuil T1135 « de coût total supérieur à
100 000 $ », « pénalité de 25 $ par jour, minimum 100 $, maximum 2 500 $ », « impôt de 50 % de la
juste valeur marchande », « seuil de petit fournisseur 30 000 $ », « art. 188.2 LTA », « par. 9 à
13 du bulletin IT-479R ». Or le registre note que le prototype est conforme **parce qu'il ne cite
pas** le seuil de 100 000 $ (V-29) et **parce qu'il ne cite aucun numéro** (V-30), et le risque R5
de `docs/L3-4-modele-roadmap.md` interdit « aucun montant, aucun numéro d'article publié depuis
une source secondaire ». L'avertissement liminaire du document ne satisfait pas la règle A.4-2.
C'est, avec T-18, le point le plus exposé de la relecture.

**T-24 — Les dates d'avis du corps de C2.** Avis 21-329 « publié en mars 2021 », Avis 21-332 « du
22 février 2023 », Avis 21-333 « du 5 octobre 2023 », cadre de garde « publié le 3 février 2026 »,
« Règles CPPC 4300 et 4342 », « depuis le 1er juin 2021 », « depuis le 1er avril 2012 » : écrites
au présent de l'indicatif dans un texte annoncé « rédigé mot pour mot et prêt à intégrer ». Le
registre ne les couvre pas ligne à ligne, et l'avertissement liminaire vaut mention de tête, non
marqueur en ligne.

#### Doublons

**T-25 — Le socle d'accessibilité est écrit cinq fois.** La même règle (Loi canadienne sur
l'accessibilité réservée aux entités fédérales ; CAN/ASC-EN 301 549:2024 volontaire ; LAPHO
WCAG 2.0 AA au-delà de 50 employés ; WCAG 2.1 AA visé volontairement) figure dans
`docs/L1-2-wireframe-accueil.md` § 2.10, `docs/L1-3-wireframe-article.md` § 3.7,
`docs/L3-1-identite-marque.md` § 1.2, `docs/L3-2-stack-technique.md` § 2.5 et
`docs/L3-3-conformite-deontologie.md` § 3.4.4. Une seule doit faire foi — le § 3.4.4, seul à
porter le tableau d'applicabilité — les quatre autres devant y renvoyer.

**T-26 — La charte des badges est écrite deux fois, sous deux formes.**
`docs/L1-2-wireframe-accueil.md` § 2.5 la pose en sept emplois ;
`docs/L1-1-arborescence.md` § 1.4 la pose en cinq valeurs de « statut réglementaire ». La valeur
« Loi et projet de loi » du type d'acte n'existe que dans la seconde, et le point 3 de « Ce qui
reste à trancher » de `docs/L1-1-arborescence.md` le signale déjà.

**T-27 — Le pied de conformité LCAP est spécifié trois fois** :
`docs/L2-2-edition-type.md` § 2.2.5, `docs/L2-3-sequence-bienvenue.md` (« Le pied de page de
conformité ») et `docs/L3-3-conformite-deontologie.md` § 3.4.1. Les trois concordent aujourd'hui ;
le risque est la dérive, et il est réel puisque le pied est justement l'élément que
`newsletter/chassis.html` centralise pour éviter la divergence.

**T-28 — La règle « français d'abord » est posée six fois** (L1-1 § 1.5, L2-1 arbitrage 1,
L2-2 § 2.2.4, L2-3 arbitrage 3, L3-3 § 3.4.3, L3-4 phase 1), dans six formulations légèrement
différentes. Une seule est exécutable ; les autres sont des rappels.

**T-29 — Le cheminement de conformité existe en deux versions à maintenir.** Le `.flux` à cinq
étapes de `prototype/fr/index.html` et le schéma en art ASCII de la section 03 de
`newsletter/contenus/dispatch-001.html` disent la même chose dans deux syntaxes. Aucun document
ne désigne lequel fait foi ni comment on les tient synchrones — alors que la règle des trois
mentions obligatoires du pied de schéma, elle, est bien commune.

**T-30 — Le délai de correction est fixé deux fois avec deux découpages.**
`docs/L1-3-wireframe-article.md` § 3.3 : correction « sous 24 heures », accusé de réception « sous
2 jours ouvrables ». `docs/L3-3-conformite-deontologie.md` § 3.5.1 : quatre niveaux, 4 h ouvrées
pour la coquille, 24 h pour les niveaux 2 à 4. Compatibles, mais le premier ignore le niveau 1 et
le second est le seul à distinguer les niveaux : dire lequel fait foi.

#### Points de conformité restés ouverts dans le code

**T-31 — Cinq pages chargent encore Google Fonts.** `tools/verifier.mjs` le signale à chaque
exécution, `docs/L3-1-identite-marque.md` § 1.3 en fait « un défaut à corriger avant mise en
ligne » et `docs/L3-2-stack-technique.md` § 2.5 « une violation de la ligne 0 requête tierce ». Le
contrôle de suppression proposé (`grep -r "fonts.g" prototype/` ne retourne rien) échoue
aujourd'hui sur les cinq pages. Rien à corriger dans les documents : c'est le code qui doit
bouger, et cela conditionne l'EFVP.

**T-32 — La septième mention obligatoire n'est pas implantée.**
`docs/L2-3-sequence-bienvenue.md` § 3.1.4 exige que `MENTIONS_OBLIGATOIRES` reçoive une entrée
`{{lien_guide}}` propre à `bienvenue-1`. `tools/emails.mjs` en compte six, et
`docs/L3-2-stack-technique.md` décrit correctement l'état actuel (« l'une des six mentions »). La
liste fermée des jetons de fusion admet bien `lien_guide`, mais rien n'impose sa présence.

**T-33 — Jetons de fusion non recensés dans le livrable.** Le tableau « Jetons nouveaux à créer »
de `docs/L2-3-sequence-bienvenue.md` § 3.1.2 n'annonce que `{{lien_guide}}`,
`{{date_premiere_edition}}`, `{{lien_carte_autorites}}` et `{{lien_parcours}}`. La liste fermée de
`newsletter/manifeste.json` en déclare quatre autres employés par la séquence :
`date_arret_guide` (utilisé dans le corps de C1, au § 3.2 du même document), `lien_arret_sequence`,
`lien_profil_particulier`, `lien_profil_professionnel`. Inversement, `lien_parcours` n'est pas
déclaré : un contenu qui l'emploierait ferait échouer l'assemblage.

**T-34 — La couleur comme décoration dans l'infolettre.** L'œil-de-bœuf de la section 04 de
`newsletter/contenus/dispatch-001.html` est posé en `#965800`, valeur de `--statut-consultation`,
pour introduire une rubrique de fiscalité qui n'est ni une consultation ni un projet. La règle
« un statut, jamais une décoration » de `assets/tokens.css` et du § 2.5 de
`docs/L1-2-wireframe-accueil.md` s'applique aussi aux courriels, où
`tools/emails.mjs` ne contrôle que l'appartenance de la couleur au système, pas son emploi.

---

### B.3 Trous — ce que le cahier des charges demande et qu'aucune section ne traite

| # | Trou | Ce qui le rend nécessaire |
|---|---|---|
| G-01 | **Aucun wireframe de `prototype/fr/registre.html`.** Le livrable 1 spécifie l'accueil (§ 2) et l'article (§ 3), pas le registre | La page est livrée en code avec sa feuille `assets/registre.css`, elle est la cible du seul emplacement monétisable cédé au lecteur (§ 2.2), le point d'arrivée de C3, l'objet d'une collection entière du modèle de contenu de `docs/L3-2-stack-technique.md`, et le seul endroit où Actio engage une donnée. C'est le trou le plus grave |
| G-02 | **Aucune spécification des pages d'index de rubrique ni de la barre de filtres** décrite à `docs/L1-1-arborescence.md` § 1.4 | Sept taxonomies croisées, un comportement client sans rechargement, des paramètres d'URL et une règle `noindex, follow` : c'est ce qui décide de l'indexabilité du site, et rien ne le dessine |
| G-03 | **Aucune spécification de la page d'inscription /fr/infolettre/**, ni des pages confirmation, préférences et désabonnement | `docs/L2-3-sequence-bienvenue.md` § 3.3 fait de la page de confirmation un seuil de réécriture (« < 55 % → réécriture du courriel de confirmation **et de la page** »), et la LCAP fait du désabonnement en un clic une obligation. Le livrable 1 ne les liste que comme URL |
| G-04 | **Le guide de conformité remis par C1 n'existe pas** ; son sommaire n'est décrit que dans un tableau de `docs/L2-3-sequence-bienvenue.md` | C1 le livre en deuxième position, avant tout discours de marque, et `tools/emails.mjs` doit refuser de compiler sans lui (T-32). Aucun livrable ne le porte comme artefact, ni ne dit qui l'écrit |
| G-05 | **Les sept pages de « Transparence » et la page /fr/corrections/ ne sont pas écrites** | Le pied de page les promet sur toutes les pages, `docs/L3-3-conformite-deontologie.md` § 3.5.2 spécifie le journal public des corrections, et `{{lien_corrections}}` part dans chaque courriel. Déjà signalé au point 7 des arbitrages du § 2.13 de `docs/L1-2-wireframe-accueil.md`, mais aucun document ne les spécifie |
| G-06 | **Deux registres exigés par `docs/L3-3-conformite-deontologie.md` sont absents du dépôt** : le journal des vérifications de partenaires (§ 3.1.3) et le registre des incidents de confidentialité (§ 3.4.2), tous deux nommés comme des fichiers de `docs/annexes/` | Le premier est le support d'un contrôle « tous les 30 jours » ; le second est imposé sans seuil par la Loi 25 |
| G-07 | **Aucune édition anglaise de l'infolettre** : ni fragment dans `newsletter/contenus/`, ni entrée de manifeste, ni gabarit `lang="en-CA"` | `docs/L2-2-edition-type.md` § 2.2.4 prévoit la variante, la règle de parité est posée six fois (T-28), et `docs/L3-4-modele-roadmap.md` fait de la parité anglaise l'objectif de la phase 2 |
| G-08 | **Aucune version texte brut des courriels** | Point 17 de la liste de contrôle avant envoi (`docs/L2-2-edition-type.md` § 2.2.6), déclaré bloquant. `tools/emails.mjs` n'assemble que le HTML : le contrôle ne peut pas être satisfait |
| G-09 | **La ligne « Portée » de `.retenir` n'a ni classe ni implantation** | `docs/L1-1-arborescence.md` § 1.5 la rend obligatoire dans chaque article, le point 8 de la liste de contrôle avant publication la vérifie, et `docs/L1-3-wireframe-article.md` § 3.4 renvoie à une classe « à créer » qui n'existe pas |
| G-10 | **Aucune spécification du mur payant Actio Pro** — authentification, accès par domaine, aperçu indexable, contrôle d'accès côté serveur | Toute la phase 3 en dépend (57 contrats, 142 100 $), et `docs/L3-2-stack-technique.md` § 2.1 n'y consacre qu'une exigence d'une ligne |
| G-11 | **Aucun jeu de couleurs catégoriel pour graphiques** | Déjà signalé au point 7 de `docs/L3-1-identite-marque.md`, mais le livrable 3 vend des « données structurées » et des tableaux de bord mensuels : le trou est en aval d'une promesse commerciale |
| G-12 | **Trois composants écrits et employés nulle part** : `.logo__baseline`, `.commandite`, `.maj--correction` | Chacun attend un gabarit. Le premier est déjà signalé (L3-1, point 6) ; les deux autres viennent d'être reclassés (C-10, C-11) et leurs arbitrages doivent être réécrits en conséquence |
| G-13 | **Aucun document ne fixe le sort du bandeau `.demo` au lancement**, sinon une proposition en une ligne | Le bandeau est le seul dispositif qui rend le prototype honnête ; le registre de vérification pose qu'il « ne purge aucune ligne ». Ce qui le remplace — ou ce qui doit être vrai pour qu'il disparaisse — n'est spécifié nulle part |

---

### B.4 Comment revérifier

`npm run tout` couvre désormais, dans l'ordre : balisage, références des livrables au code,
mentions LCAP et bornes d'objet, liens, accessibilité et contrastes sur le DOM rendu dans les deux
thèmes. Il est au vert. Ce qu'il ne couvre pas, et que cette relecture a dû faire à la main :
les décomptes de signes des objets et pré-en-têtes (T-03, T-09), les renvois de ligne, les
mesures de grille (C-20, C-21), les poids de fichiers cités dans les documents (C-23), l'emploi
d'une couleur de statut hors de son statut (T-14, T-34) et la présence d'un marqueur
**[À VÉRIFIER]** en regard de chaque affirmation juridique datée ou chiffrée (T-18 à T-24). Les
quatre premiers sont mécanisables ; le dernier ne l'est pas, et c'est celui qui décide de la
publiabilité.
