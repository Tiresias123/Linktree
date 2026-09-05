## 2. L'édition type — *Actio Dispatch* nº 001 et spécification de son gabarit

Deux fichiers font foi : `newsletter/actio-dispatch-001.html` (l'édition nº 001, 35 159 octets) et
`newsletter/chassis.html` (le gabarit vide, 11 476 octets, corps remplacé par `{{CONTENU}}`, bandeau
de cours délimité par `<!--DEBUT:COURS-->` / `<!--FIN:COURS-->`). `newsletter/contenus/` reçoit les
fragments de corps ; `newsletter/dist/` reçoit le fichier assemblé et envoyé.

---

### 2.1 Partie A — L'édition nº 001 en markdown

Restitution fidèle du HTML, dans la forme où un rédacteur la reçoit. Les mentions entre chevrons
`⟨…⟩` sont des attributs de gabarit, non du texte publié.

---

#### En-tête de marque

```
⟨barre de service⟩  ÉDITION Nº 001 · MARDI 8 SEPTEMBRE 2026        [Version web]
```

# Actio.
**Dispatch · l'infolettre réglementaire**

`8 min de lecture · 5 sources primaires`

**Pré-en-tête (invisible dans le corps, visible en boîte de réception) :** « Le TMF distingue la
gestion des fonds d'autrui de la vente d'information — et rétrécit le contrat d'investissement. »

**Objet (`<title>`) :** *Actio Dispatch nº 001 — Le contrat d'investissement a trouvé sa limite*

#### Bandeau de cours

| Actif | Cours (CAD) | Variation |
|---|---|---|
| BTC | 148 720 $ | ▲ 1,8 % |
| ETH | 5 340 $ | ▼ 0,6 % |
| SOL | 268 $ | ▲ 3,4 % |
| CAD/USD | 0,7412 | — |

> Cours en dollars canadiens, arrêtés au lundi 7 septembre 2026 à 22 h (HE). **Gabarit : valeurs
> illustratives**, injectées par le flux de marché à l'envoi. Actio ne recommande aucun actif.

---

#### ◆ Le grand angle

## Le contrat d'investissement vient de trouver sa limite. Elle est plus étroite qu'on ne le croyait.

`Marie-Claude Fortin · Québec / TMF · 4 min`

Pendant six ans, le droit canadien des cryptoactifs a fonctionné par extension. L'Avis 21-327 du
personnel des ACVM avait posé, en janvier 2020, un principe d'une élasticité remarquable : dès lors
qu'une entité ne livre pas immédiatement l'actif à son client, la relation devient un *contrat de
cryptoactif*, soumis au droit des valeurs mobilières. Le raisonnement a servi à saisir les
plateformes de négociation, puis les produits de rendement, puis — l'automne dernier — les prêts
adossés à des cryptoactifs. Chaque fois, la même mécanique : on ne qualifie pas l'actif, on qualifie
la dépossession.

La décision rendue par le Tribunal administratif des marchés financiers le 22 août 2025 opère un
mouvement inverse, et c'est ce qui la rend importante. Saisi par l'Autorité des marchés financiers
d'un dossier visant un créateur de contenu québécois, le tribunal avait à qualifier deux activités
menées par la même personne. La première : recevoir les éthers d'investisseurs, les négocier sur un
protocole décentralisé, conserver une part des profits. La seconde : vendre l'accès à un groupe
privé diffusant des signaux d'achat et de vente.

Il a retenu le contrat d'investissement pour la première et l'a écarté pour la seconde. Le critère
n'est pas le sujet traité, ni le montant, ni même le caractère spéculatif de ce qui est conseillé.
C'est **l'autonomie décisionnelle** : tant que l'investisseur conserve ses actifs et décide seul, il
achète une information — pas un placement.

Trois conséquences méritent d'être posées froidement. **D'abord**, pour l'investisseur de détail, la
nouvelle est mauvaise et non bonne : une activité hors du champ du droit des valeurs mobilières est
une activité sans obligation de connaître le client, sans évaluation de la convenance, sans
divulgation obligatoire des conflits d'intérêts. Sortir du champ, c'est sortir de la protection.
**Ensuite**, la ligne ne dit rien de trois pratiques très répandues — la négociation copiée, les
robots vendus par abonnement, et la rémunération d'un créateur non par son auditoire mais par la
plateforme vers laquelle il l'oriente. **Enfin**, et c'est notre lecture : le régulateur qui veut
atteindre ces pratiques n'a pas besoin de forcer la qualification. Il lui suffit de remonter à la
plateforme inscrite qui finance le créateur, et de lui opposer l'Avis 21-330 sur la publicité et le
marketing d'influence. Viser un assujetti déjà inscrit est toujours plus simple que de qualifier
celui qui ne l'est pas.

Ce que nous surveillons : le sort procédural de la décision, que nous n'avons pas pu vérifier à la
date d'envoi, et la première intervention de l'AMF qui s'appuiera — ou non — sur cette ligne.

**[ Lire l'analyse complète → ]** `⟨{{lien_article_grand_angle}}⟩`

---

#### Section 02 — Le radar des juridictions

*Ce qui a bougé cette semaine, classé par ressort et par niveau d'impact sur vos obligations.*

**◆ Ottawa · Fédéral — Impact : élevé**
**Stablecoins : la loi est adoptée, les règlements ne le sont pas**
Le cadre prudentiel fédéral confié à la Banque du Canada demeure suspendu à ses décrets
d'application. Tant qu'ils ne sont pas pris, l'Avis 21-333 des ACVM continue de régir l'accès des
plateformes aux cryptoactifs arrimés à une valeur. **Ce que ça change pour vous :** rien,
aujourd'hui. Mais un émetteur qui prépare son inscription doit bâtir sur deux régimes, pas un.

**◆ Québec · AMF — Impact : élevé**
**Rappel : ce n'est plus l'AMF qui délivre le permis d'entreprise de services monétaires**
L'erreur revient chaque semaine dans la presse spécialisée. Depuis le 13 septembre 2021, la *Loi sur
les entreprises de services monétaires* est administrée par **Revenu Québec**. Une plateforme active
au Québec cumule donc trois formalités : inscription en valeurs mobilières (AMF/OCRI), permis d'ESM
(Revenu Québec), inscription d'ESM (CANAFE).

**◆ Ontario · CVMO / OCRI — Impact : modéré**
**Garde des actifs numériques : le classement des dépositaires par paliers commence à mordre**
Le cadre de l'OCRI hiérarchise les dépositaires acceptables et assortit chaque palier de plafonds et
d'exigences de capital, tout en restreignant l'autogarde. **Ce que ça change pour vous :** les
courtiers de taille moyenne dont le modèle reposait sur la garde interne doivent rebâtir leur chaîne
de conservation — et son coût.

**◆ International — Impact : informatif**
**Cadre de déclaration des crypto-actifs de l'OCDE : le compte à rebours canadien**
L'échange automatique de renseignements sur les crypto-actifs transformera la position de l'ARC :
elle cessera de dépendre de la déclaration spontanée du contribuable. Les détenteurs dont
l'historique déclaratif est incomplet ont une fenêtre pour régulariser.

---

#### Section 03 — Le chiffre de la semaine

# 0

**C'est le nombre de règlements permanents adoptés par les ACVM propres aux plateformes de
négociation de cryptoactifs.** Six ans après l'Avis 21-327, l'encadrement canadien repose entièrement
sur des avis du personnel, des conditions d'inscription et des dispenses accordées au cas par cas —
aucun de ces instruments n'ayant suivi la procédure d'adoption réglementaire.

```
LE CHEMIN DE CONFORMITÉ D'UNE PLATEFORME AU CANADA

[1] Engagement préalable  ─── déposé auprès de l'autorité principale
        │
[2] Courtier restreint    ─── conditions + dispenses, transitoire
        │
[3] Courtier en placement ─── seule voie ouverte depuis le 6 août 2024
        │
[4] Adhésion à l'OCRI     ─── règles de l'organisme, cadre de garde

EN PARALLÈLE ─ guichet LBC/FT
    CANAFE        (fédéral, inscription d'ESM)
    Revenu Québec (permis d'ESM — et non l'AMF)
```

> Reconstitution Actio d'après les avis du personnel des ACVM et le cadre de l'OCRI. Schéma
> pédagogique ; ne constitue pas un avis juridique.

---

#### Section 04 — Fiscalité & jurisprudence

## Gain en capital ou revenu d'entreprise ? Le cas du fournisseur de liquidité

**La situation.** Un contribuable québécois dépose une paire d'actifs dans un pool de liquidité,
perçoit une part des frais de négociation, retire sa position onze mois plus tard et constate une
plus-value. Il déclare l'ensemble en gain en capital, imposable pour moitié.

**Pourquoi c'est fragile.** L'ARC n'applique pas une règle mais un faisceau d'indices, hérité de la
jurisprudence sur le commerce de valeurs : fréquence des opérations, durée de détention, intention au
moment de l'acquisition, degré d'expertise, temps consacré à l'activité, recours à l'emprunt,
caractère répétitif. Une activité de fourniture de liquidité coche spontanément plusieurs de ces
cases : elle est active, technique, répétée, et son rendement provient de frais perçus — non de la
seule appréciation d'un bien détenu passivement.

**Le point qu'on oublie.** La qualification n'est pas globale, elle est opération par opération. Les
frais perçus et la plus-value de sortie peuvent recevoir des traitements distincts. Et le dépôt
initial dans le pool peut lui-même constituer une disposition — donc un fait générateur — bien avant
tout retrait.

> **À vérifier avant de déclarer.** Les critères ci-dessus sont ceux de la jurisprudence générale sur
> la distinction capital/revenu. Le traitement précis des opérations de finance décentralisée n'a pas
> fait l'objet d'une position administrative publiée que nous ayons pu consulter à la date d'envoi.
> Cette rubrique décrit une méthode de raisonnement, elle ne remplace pas l'avis d'un fiscaliste sur
> votre dossier.

---

#### Encart de transparence

**Transparence.** Cette édition ne comporte aucun contenu commandité, aucun lien d'affiliation et
aucune rémunération d'une plateforme de négociation. Actio n'est inscrite à aucun titre auprès des
autorités canadiennes en valeurs mobilières. Nos règles : [charte d'indépendance] · [politique de
correction].

#### Pied de page — conformité LCAP

**Actio.**

**Actio Média inc.** — 1000, rue De La Gauchetière Ouest, bureau 2400, Montréal (Québec) H3B 4W5,
Canada · redaction@actio.ca · +1 514 555-0142

Vous recevez ce message parce que vous avez donné votre **consentement exprès** à recevoir
l'infolettre *Actio Dispatch*, le **{{date_consentement}}** à partir de l'adresse IP
{{ip_consentement}} (page : {{source_consentement}}). Ce message est un message électronique
commercial au sens de la **Loi canadienne anti-pourriel (LCAP)**.

**[Se désabonner en un clic]** · [Gérer mes préférences]
Le désabonnement est traité dans un délai maximal de 10 jours ouvrables et le mécanisme demeure
fonctionnel pendant au moins 60 jours à compter de l'envoi du présent message.

**Avertissement.** Actio est un média. Actio ne fournit ni conseil en placement, ni conseil
juridique, ni conseil fiscal, et n'est inscrite à aucun titre auprès des Autorités canadiennes en
valeurs mobilières, de l'Autorité des marchés financiers, de la Commission des valeurs mobilières de
l'Ontario ou de l'Organisme canadien de réglementation des investissements. Les contenus décrivent un
état du droit à une date donnée et ne tiennent pas compte de votre situation personnelle, de vos
objectifs ni de votre tolérance au risque. Les cryptoactifs sont volatils ; vous pouvez perdre la
totalité des sommes investies. Une plateforme non inscrite auprès de l'autorité de votre province ne
vous fait bénéficier d'aucune des protections prévues par la législation en valeurs mobilières, y
compris en cas d'insolvabilité. Consultez un professionnel inscrit ou un avocat avant toute décision.

Vos renseignements personnels sont traités conformément à notre [politique de confidentialité] (Loi
25 du Québec et LPRPDE), et hébergés au Canada. Ils ne sont ni vendus, ni loués, ni cédés.

© 2026 Actio Média inc. Tous droits réservés. · [Version web] · [Archives]

---

### 2.2 Partie B — Spécification du gabarit

#### 2.2.1 Anatomie

Conteneur unique : `<table class="conteneur" width="600" style="width:600px;max-width:600px">`.
Paddings latéraux de **32 px**, ramenés à **20 px** sous 620 px par `.marge` — justification de
**536 px**, puis largeur d'écran − 40 px.

| Bloc | Padding | Fond clair | Fond sombre | Typographie |
|---|---|---|---|---|
| Barre de service | `12px 32px` | `#FAF8F4` (`--fond-page`) | `#0B1420` (`.fond-page`) | Plex Mono 11/16 |
| En-tête de marque | `28px 32px 24px`, filet haut `3px #0F3D68` | `#FFFFFF` (`--fond-surface`) | `#111E2E` (`.fond-carte`) | Georgia 30/34 gras, −0,8 px |
| Bandeau de cours | `14px 32px` | `#0E1A2B` (`--encre-fond`) | `#16263A` (`.inverse`) | Plex Mono 12/18 blanc |
| Grand angle | `32px 32px 8px` puis `0 32px 24px` | `#FFFFFF` | `#111E2E` | Georgia 30/36 (`.t-h1` → 26/32) + Arial 16/26 |
| Bouton | cellule `#0F3D68`, lien `13px 26px`, rayon 4 px | aplat plein | inchangé | Arial 14 gras blanc |
| Carte de radar | `14px 16px`, filet gauche 3 px | `#F3F0EA` (`--fond-surface-2`) | `#16263A` (`.fond-encart`) | Georgia 17/23 + Arial 14/21 |
| Le chiffre | `28px 32px` | `#0E1A2B` | `#16263A` (`.inverse`) | Georgia 72/72 |
| Schéma ASCII | `18px`, rayon 4 px | `#16263A` | inchangé | Plex Mono 11/19 |
| Fiscalité | `28px 32px 8px` puis `0 32px 20px` | `#FFFFFF` | `#111E2E` | Georgia 23/29 + Arial 15/24 |
| Encart d'alerte | `14px 16px`, bordure `rgba(200,16,46,.3)` | `#FBE9EC` (`--statut-alerte-pale`) | `#16263A` | Arial 13/20 |
| Transparence | `8px 32px 28px`, filet `1px #EBE7DE` | `#FFFFFF` | `#111E2E` | Arial 12/19 |
| Pied de page | `28px 32px`, filet haut `2px #0E1A2B` | `#F3F0EA` | `#16263A` | Arial 12/19 puis 11/17 |

**Filet gauche de 3 px = juridiction** (`tokens.css` § 3) : Ottawa `#0F3D68` (`--jur-federal`),
Québec `#16688A` (`--jur-quebec`), Ontario `#6B4FA8` (`--jur-ontario`), International `#8A6D3B`
(`--jur-intl`). Le point de « Actio**.** » emploie `#096B61`
(`--actio-turquoise-fonce` — valeur identique à `--jur-multi`).

**Niveau d'impact** — trois valeurs, alignées à droite, Arial 10 px gras capitales, interlettre 1 px :

| Libellé | Jeton | Valeur | Emploi |
|---|---|---|---|
| Impact : élevé | `--statut-alerte` | `#C8102E` | Obligation nouvelle, échéance, sanction |
| Impact : modéré | `--statut-consultation` | `#965800` | Cadre publié dont l'effet se déploie |
| Impact : informatif | `--texte-tertiaire` | `#5A6B7E` | Contexte, comparaison internationale |

**Trois divergences avec `tokens.css`, à arbitrer avant la nº 002.** (i) Le § 2 ter déclare les
bandes d'encre **invariantes par thème** ; `.inverse` les fait passer de `#0E1A2B` à `#16263A`.
(ii) Le texte sur encre emploie `#FFFFFF` et `#EEF2F7` là où le jeton prévu est `--encre-texte`
`#F4F7FA`. (iii) Le corps est à 16 px quand `--t-base` vaut 17 px : les `clamp()` du site sont
inapplicables en courriel et ont été remplacés par des pixels fixes.

#### 2.2.2 Contraintes des clients de messagerie

Un client de messagerie n'est pas un navigateur : la feuille du `<head>` peut être supprimée,
`float`, `flex` et `grid` ne sont pas fiables. **Le `<style>` ne contient donc que ce qui est
jetable** — réinitialisation, `@media` mobile, `@media` sombre ; tout ce qui doit être vu est
dupliqué en ligne, sur des `<td>`.

| Symptôme Outlook (moteur Word) | Contournement présent dans le fichier |
|---|---|
| Résolution différente, largeurs faussées | `<!--[if mso]>` + `<o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch>` |
| Polices ignorées, substitution de Times | `<style>` conditionnel `[if mso]` : Georgia partout, Arial sur `td, div, p, a, span` |
| Espacement parasite des tableaux | `mso-table-lspace:0pt; mso-table-rspace:0pt; border-collapse:collapse` |
| Marges de paragraphe imprévisibles | Aucun `<p>` sans marge explicite : `margin:0 0 16px` ou `margin:0` |
| `padding` ignoré | Le padding est porté par un `<td>`, jamais par une `<div>` structurante |
| `border-radius` non rendu | Les rayons de 4 px dégradent en angles droits — dégradation acceptée |
| Images redimensionnées grossièrement | `-ms-interpolation-mode:bicubic` sur `img` |

**Boutons VML : aucun, volontairement.** Le bouton du Grand Angle est un `<td>` à fond `#0F3D68`
portant un `<a>` en `display:inline-block` : il passe sous Outlook parce que l'aplat est porté par la
cellule. Un `<v:roundrect>` ne servirait qu'à imposer des coins arrondis — ce n'est pas une
exigence.

**Troncature Gmail.** Gmail coupe au-delà d'environ **102 Ko**, à l'octet, et affiche « Message
tronqué ». L'édition nº 001 pèse **35 159 octets, soit 34,3 Ko — 34 % du seuil**, ce qui autorise
environ le triple du corps actuel. Règle d'exploitation : **plafond interne de 80 Ko** sur le fichier
de `dist/`, mesuré par `wc -c` avant envoi. `[À VÉRIFIER — constante d'ingénierie du courriel ; la
base factuelle ne documente aucune donnée de délivrabilité (fiche 09).]`

**Aucune police distante** : ni `@font-face`, ni `<link>`. Le gabarit descend aux repliements système
déjà présents dans les chaînes de `tokens.css`.

| Rôle | Chaîne du site | Chaîne du courriel |
|---|---|---|
| Titres | `--police-titre` | `Georgia, 'Times New Roman', serif` |
| Corps | `--police-texte` | `Arial, Helvetica, sans-serif` |
| Données et schéma | `--police-donnee` | `'IBM Plex Mono', Consolas, monospace` |

Le rendu de référence des données est Consolas. Aucune mise en page ne dépend d'une métrique : le
schéma de la section 03 est aligné par `&nbsp;`, ce qui tient dans toute monospace.

#### 2.2.3 Mode sombre

Déclaré par `<meta name="color-scheme" content="light dark">` et `supported-color-schemes`, appliqué
par un unique bloc `@media (prefers-color-scheme: dark)`.

| Client | Comportement réel |
|---|---|
| Apple Mail (macOS, iOS), Outlook macOS | Appliquent `prefers-color-scheme` ; les classes fonctionnent |
| Outlook.com et Outlook Windows | Inversion automatique, sans égard aux `@media` — non contrôlable |
| Gmail (application et web) | Réécriture partielle et variable, non stable dans le temps |

**Règle opposable : la version claire doit rester lisible partout.** Aucune information n'est portée
par la seule couleur, et **chaque élément coloré porte son fond en ligne**, pour qu'une inversion
sauvage ne produise pas de texte clair sur fond clair.

**Neuf classes de bascule, et neuf seulement** ; toutes en `!important`, sans quoi le style en ligne
l'emporterait. En ajouter une dixième exige une mise à jour conjointe de `chassis.html`.

| Classe | Clair (en ligne) | Sombre (`@media`) | Jeton |
|---|---|---|---|
| `.fond-page` | `#FAF8F4` | `#0B1420` | `--fond-page` |
| `.fond-carte` | `#FFFFFF` | `#111E2E` | `--fond-surface` |
| `.fond-encart` | `#F3F0EA` | `#16263A` | `--fond-surface-2` |
| `.inverse` | `#0E1A2B` | `#16263A` | `--encre-fond` |
| `.txt-primaire` | `#0E1A2B` | `#EEF2F7` | `--texte-primaire` |
| `.txt-secondaire` | `#45566A` | `#A9B8C9` | `--texte-secondaire` |
| `.txt-tertiaire` | `#5A6B7E` | `#7C8DA1` | `--texte-tertiaire` |
| `.bordure` | `#DCD7CC` / `#EBE7DE` | `#24374C` | `--bordure` / `--bordure-douce` |
| `.lien` | `#0F3D68` | `#7FB6EA` | `--texte-lien` |

#### 2.2.4 Accessibilité

| Exigence | Mise en œuvre | Contrôle |
|---|---|---|
| Tableaux non annoncés | `role="presentation"` sur les 18 `<table>`, sans exception | `grep -c 'role="presentation"'` = `grep -c '<table'` |
| Langue | `<html lang="fr-CA">` | Édition anglaise : `lang="en-CA"` |
| Texte de remplacement | Aucune image : le schéma de la section 03 est du **texte** | Toute image ajoutée porte un `alt` ; `alt=""` si décorative |
| Contraste | Blanc sur `#0F3D68` : 11,1:1 ; blanc sur `#C8102E` : 5,9:1 (calculs de `tokens.css`) | WCAG 2.1 AA visé **volontairement**, sans invoquer d'obligation légale |
| Taille de police | Plancher **10 px** (bandeau, libellés d'impact) ; corps **16 px** | Jamais sous 10 px ; texte de fond jamais sous 12 px |
| Cibles tactiles | Bouton ≈ **46 px** ; `.bouton a { display:block !important }` sous 620 px | Liens du pied de page en ligne — faiblesse assumée |
| Zoom | `-webkit-text-size-adjust:100%`, `-ms-text-size-adjust:100%` | Bloque le zoom automatique, pas le manuel |
| Pré-en-tête | `display:none` **et** `max-height:0` **et** `opacity:0` **et** `color:#FAF8F4` | Quatre techniques cumulées, plus un rembourrage invisible |

Les obligations de la Charte de la langue française applicables à une infolettre bilingue diffusée au
Québec n'ont pas été instruites par la veille : **à traiter avant tout envoi, sans rien affirmer
aujourd'hui**. Position de repli : le risque n'est pas d'écrire en anglais, mais de publier en
anglais avant, plus vite, ou mieux qu'en français.

#### 2.2.5 Variables du gabarit

Onze jetons `{{…}}` dans `actio-dispatch-001.html`, plus cinq marqueurs propres à `chassis.html`.

| Jeton | Emplacement | Contenu | LCAP |
|---|---|---|---|
| `{{lien_desabonnement}}` | Pied de page | URL propre à l'abonné, **fonctionnelle au moins 60 jours** | **Obligatoire** |
| `{{lien_preferences}}` | Pied de page | Fréquence, langue | Recommandé — ne remplace pas le désabonnement |
| `{{date_consentement}}` | Pied de page | Date du consentement exprès (`1er mars 2026`) | Preuve du consentement |
| `{{ip_consentement}}` | Pied de page | Adresse IP consignée à l'inscription | Preuve du consentement |
| `{{source_consentement}}` | Pied de page | URL de la page d'inscription | Preuve du consentement |
| `{{lien_confidentialite}}` | Pied de page | Politique de confidentialité (Loi 25, LPRPDE) | Vie privée, non LCAP |
| `{{lien_version_web}}` | Barre de service **et** pied de page | URL canonique de l'édition | Non |
| `{{lien_archives}}` | Pied de page | Index des éditions | Non |
| `{{lien_charte}}` | Transparence | Charte d'indépendance | Non |
| `{{lien_corrections}}` | Transparence | Politique de correction | Non |
| `{{lien_article_grand_angle}}` | Bouton | Article complet | Non |
| `{{TITRE}}` *(chassis)* | `<title>` | Objet du message | Non |
| `{{PREENTETE}}` *(chassis)* | Pré-en-tête | 90 à 130 caractères | Non |
| `{{SURTITRE}}` *(chassis)* | Barre de service | `ÉDITION Nº NNN · JOUR JJ MOIS AAAA` | Non |
| `{{META_DROITE}}` *(chassis)* | En-tête | Temps de lecture, sources primaires | Non |
| `{{CONTENU}}` *(chassis)* | Corps | Fragment de `contenus/`, suite de `<tr>` | Non |

**Ce que la LCAP exige et qui n'est PAS une variable.** Identification de l'expéditeur, adresse
postale, adresse électronique et téléphone sont **écrits en dur** : une variable non substituée
produirait une chaîne `{{…}}` dans un envoi de masse, ce qui serait ici un manquement. L'adresse
postale devant rester valide **au moins 60 jours**, tout déménagement impose de modifier
`chassis.html` **avant**, non après. *(Base factuelle § 3.5 ; aucun numéro d'article n'est cité,
seul l'art. 33 étant vérifié — U-46.)*

#### 2.2.6 Liste de contrôle avant envoi

Rôles : **R** rédacteur en chef, **J** juriste-réviseur, **I** intégrateur, **D** diffusion.
Les 18 points sont bloquants.

| Nº | Point de contrôle | Rôle |
|---|---|---|
| 1 | Chaque affirmation juridique confrontée au registre des incertitudes et reformulée selon la formulation prudente prescrite | J |
| 2 | **« Revenu Québec », autorité du permis d'ESM : vérifier sur `revenuquebec.ca`** — la contradiction C-04 n'est pas résolue | J |
| 3 | **« 0 règlement permanent » réécrit « aucun règlement permanent n'a été identifié ; l'absence de preuve n'est pas une preuve d'absence »** (U-06) | J |
| 4 | **« Seule voie ouverte depuis le 6 août 2024 » devient « les ACVM et l'OCRI attendent une demande d'inscription de courtier en placement »** (C-05) ; « crypto-actifs de l'OCDE » devient « Cadre de déclaration des cryptoactifs (Crypto-Asset Reporting Framework, CARF) », sans sigle français (C-17) | J |
| 5 | Aucun chiffre interdit : ni palier ou seuil de capital OCRI (C-13), ni plafond d'achat annuel (U-01), ni date d'application du CARF (C-06) | J |
| 6 | Terminologie : « cryptoactifs », « inscription » (jamais « licence » ni « agrément »), « OCRI » (jamais « OCRCVM »), « sanction administrative pécuniaire » (jamais « amende ») | R |
| 7 | Cotations issues du flux de marché, en dollars canadiens, heure d'arrêté exacte ; à défaut, le bloc `<!--DEBUT:COURS-->` … `<!--FIN:COURS-->` est retiré | D |
| 8 | Poids du fichier `dist/` par `wc -c` : **≤ 80 Ko** | I |
| 9 | Rendu testé sur Gmail web, Gmail Android, Apple Mail iOS et macOS, Outlook Windows, Outlook.com, Yahoo — en clair **et** en sombre | I |
| 10 | Aucun `{{` résiduel (`grep -c '{{'` = 0) ; aucun lien mort ; aucune redirection vers `http://` | I |
| 11 | Désabonnement testé sur une adresse d'essai : un clic, une étape, sans authentification | D |
| 12 | Adresse postale de `chassis.html` exacte et valide pour les 60 prochains jours | D |
| 13 | En-têtes `List-Unsubscribe` et `List-Unsubscribe-Post: List-Unsubscribe=One-Click` présents | D |
| 14 | SPF alignant l'enveloppe, DKIM signant avec le sélecteur de production, DMARC en `p=quarantine` ou `p=reject` — validés sur un message d'essai reçu, pas seulement en zone DNS | D |
| 15 | Test anti-pourriel avant envoi de masse : ratio texte/HTML, liens raccourcis, capitales dans l'objet | D |
| 16 | Objet ≤ 60 caractères, pré-en-tête ≤ 130 : ils ne se répètent pas et ne promettent aucun rendement | R |
| 17 | Version texte brut générée et relue : elle contient l'adresse postale et le lien de désabonnement | I |
| 18 | Envoi d'essai interne, puis **60 minutes** avant l'envoi de masse ; toute erreur postérieure déclenche la politique de correction sur la version web | R + J |

`[À VÉRIFIER — les points 13 à 15 sont des constantes d'exploitation du courriel : la base factuelle
ne documente ni SPF, ni DKIM, ni DMARC, ni aucune donnée de délivrabilité (U-74).]`

#### 2.2.7 Ce qui reste à trancher

1. ~~**La bascule des bandes d'encre**~~ — **tranché : amender le § 2 ter.** La classe `.inverse` du
   gabarit est conservée ; c'était la formulation du jeton qui était imprécise. Une bande d'encre n'est
   pas *invariante* : elle est **toujours sombre**. Seul `--encre-fond` bouge, d'un cran (`#0E1A2B`
   clair, `#16263A` sombre) pour se détacher d'une page déjà sombre. Les couleurs **portées** ne bougent
   pas — c'est précisément ce qui rend la bande transposable telle quelle dans un courriel, où les
   valeurs sont nécessairement écrites en clair. `tokens.css` dit désormais cela.
2. **16 px contre `--t-base` 17 px.** Aligner les deux supports coûte environ deux lignes par écran
   mobile.
3. **La langue.** Édition anglaise séparée ou envoi bilingue ? Tant que la question de la Charte
   n'est pas instruite, aucune édition anglaise ne part avant son équivalent français.
4. **Le bandeau de cours.** Un média d'analyse réglementaire en a-t-il besoin ? Si non, le bloc
   délimité dans `chassis.html` disparaît et le fichier perd environ 2 Ko.
5. **Les cibles tactiles du pied de page.** Les passer en blocs allonge le pied de page d'environ
   60 px.
6. **La cadence.** Dix-huit contrôles bloquants par envoi, dont cinq à la charge du juriste-réviseur.
   Sans ce poste pourvu, la périodicité descend à bimensuelle.
