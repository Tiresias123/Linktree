# Direction artistique des médias financiers premium et stack technique
> Fiche de veille Actio — arrêtée au 4 septembre 2026

## Synthèse opérationnelle (10 lignes max)

1. Le *Financial Times* et Bloomberg servent des polices **propriétaires** : `FinancierDisplayWeb` + `MetricWeb` d'un côté ; `AvenirNextForBBG`, `NHaasGroteskDSPro/TXPro`, `Tiempos` et une police maison `Bloomberg` de l'autre. Actio doit reconstruire ce registre en libre de droit.
2. Substituts OFL retenus : **Newsreader** (titrage, `opsz` 6–72, graisses 200–800, chiffres tabulaires) + **Inter** (lecture, 100–900, chiffres tabulaires) + **IBM Plex Mono** (colonnes). Couverture du français vérifiée.
3. Le fond du FT n'est pas blanc : `#FFF1e5`. Sa palette de courbes web ne compte que **deux couleurs porteuses** (`#0f5499` / `#EB5E8D`) — sobriété documentée, pas impression.
4. Ghost est sous licence MIT (Content API, abonnements, infolettre intégrés), **mais l'envoi de masse passe exclusivement par Mailgun** : dépendance et clés de configuration codées dans le cœur.
5. Régions canadiennes confirmées : AWS `ca-central-1` / `ca-west-1` ; GCP `northamerica-northeast1` (Montréal) et `northamerica-northeast2` (Toronto) ; Azure `canadacentral` / `canadaeast`.
6. Cloudflare couvre le Canada en Regional Services, **mais le Customer Metadata Boundary ne connaît que les États-Unis et l'Union européenne** : « hébergé au Canada » ne s'affirme pas sans réserve.
7. Ingestion : n8n (fair-code, nœud `n8n-nodes-base.rssFeedRead`) + Playwright (Apache-2.0, sans interface). La question juridique du moissonnage reste ouverte.
8. Limite de la fiche : budget de recherche web épuisé et domaines bloqués (Bloomberg, The Block, Osler, McCarthy Tétrault, Stikeman Elliott, Vercel, Beehiiv, Resend, OVHcloud, sites gouvernementaux). Tarifs et DA des cabinets : **[NON VÉRIFIÉ]**.

## Cadre juridique applicable

| Instrument | Autorité | Objet | Date | Statut | Lien |
|---|---|---|---|---|---|
| SIL Open Font License 1.1 | SIL International | Licence de Newsreader, Inter, Source Serif 4, Literata, Spectral, IBM Plex, Public Sans | v1.1 (millésime **[NON VÉRIFIÉ]**) | En vigueur | github.com/productiontype/Newsreader |
| Licence MIT | Ghost Foundation | Code du CMS Ghost (mention 2013-2026) | 2013-2026 | En vigueur | github.com/TryGhost/Ghost |
| GNU AGPL v3 | Auteurs de Listmonk | Infolettre auto-hébergée | **[NON VÉRIFIÉ]** | En vigueur | github.com/knadh/listmonk |
| Sustainable Use License + n8n Enterprise License | n8n | Automatisation « fair-code », auto-hébergement autorisé | **[NON VÉRIFIÉ]** | En vigueur | github.com/n8n-io/n8n |
| Apache License 2.0 | Microsoft | Playwright | **[NON VÉRIFIÉ]** | En vigueur | github.com/microsoft/playwright |
| LCAP, L.C. 2010, ch. 23 | CRTC | MEC : consentement, identification, exclusion | en vigueur (volet principal) 2014 | En vigueur | fiche interne `06-lcap-casl-vie-privee.md` |
| Licence du gouvernement ouvert – Canada | Secrétariat du Conseil du Trésor | Réutilisation des contenus fédéraux | **[NON VÉRIFIÉ]** | **[NON VÉRIFIÉ]** | open.canada.ca (accès bloqué) |

## Points de doctrine et zones grises

### A. Ce que servent réellement les grands titres (vérifié)

**Financial Times.** Le HTML de ft.com précharge quatre `woff2` depuis `ft.com/__origami/service/build/v2/files/o-fonts-assets@1.5.0/` : `MetricWeb-Regular`, `MetricWeb-Semibold`, `FinancierDisplayWeb-Regular`, `FinancierDisplayWeb-Bold`. Un dépôt éditorial du FT déclare `$font-headline: "FinancierDisplayWeb", serif` et `$font-sans: "MetricWeb", sans-serif`. **Deux familles, deux graisses chacune** : la hiérarchie naît du corps et de l'interlignage, pas de la multiplication des graisses.

**Palette FT** (bibliothèque officielle `g-chartcolour`) : fonds web `#FFF1e5`, social `#333`, vidéo `#335`, imprimé `#FEE`, neutre `#FFF` ; courbes web `#0f5499`, `#EB5E8D`, `#70DCE6`, `#9dbf57`, `#208fce`, `#7f062e`, `#c2b7af` ; barres catégorielles `#1E558C`, `#94d2e6`, `#1E8FCC`, `#B3325D`, `#FF75A3`, `#D9CCC3`, `#AECC70`, `#F34D5B` ; séquentielle `#f3dec8` → `#0f5499`. Le code commente que, pour une courbe, « la première couleur est neutre / de fond, la seconde primaire / de mise en évidence » : **une seule couleur porteuse par graphique**.

**Bloomberg.** Le CDN `assets.bwbx.io/business/public/fonts/` sert `AvenirNext-Regular`, `AvenirNext-Demi`, `AvenirNextPForBBG`, `Bloomberg` (police maison), `NHaasGroteskDSPro-75Bd`/`-95Blk` (titrage), `NHaasGroteskTXPro-55Rg`/`-56It`/`-75Bd` (texte), `TiemposHeadlineWeb-Bold`, `TiemposTextWeb-Regular`, et `MetricWeb-Semibold`. Le service de polices est appelé avec `AvenirNextMForBBG:400,400i,600,600i,700,700i|OpenSans:400,400i,600,600i,700,700i` : **trois graisses (400 / 600 / 700)**, une grotesque de titrage, une sérif de texte long.

**The Block, Osler, McCarthy Tétrault, Stikeman Elliott** : domaines inaccessibles. Rien n'est affirmé ici sur leurs polices, palettes ou grilles. **[NON VÉRIFIÉ]**

### B. Familles libres de droit retenues (métadonnées Google Fonts, vérifiées)

| Rôle | Famille | Licence | Axes / graisses | Sous-ensembles |
|---|---|---|---|---|
| Titrage sérif | **Newsreader** (Production Type) | OFL 1.1 | variable `opsz` 6–72, `wght` 200–800, romain + italique | latin, latin-ext, vietnamien |
| Titrage (variante) | **Source Serif 4** (F. Grießhammer) | OFL | `opsz` 8–60, `wght` 200–900 | latin, latin-ext, grec, cyrillique |
| Titrage (variante) | **Literata** (TypeTogether) | OFL | `opsz` 7–72, `wght` 200–900 | latin, latin-ext, grec, cyrillique |
| Texte sérif (variante) | **Spectral** (Production Type) | OFL | 7 graisses 200–800 + italiques, non variable | latin, latin-ext, cyrillique |
| Lecture sans | **Inter** (R. Andersson) | OFL 1.1 | variable `opsz` 14–32, `wght` 100–900 ; 9 graisses Thin→Black + italiques | latin, latin-ext, grec, cyrillique, vietnamien |
| Lecture (variante) | **Public Sans** (USWDS) | OFL | `wght` 100–900 | latin, latin-ext, vietnamien |
| Lecture (variante) | **IBM Plex Sans** (Abbink / Bold Monday) | OFL | `wdth` 75–100, `wght` 100–700 | latin, latin-ext, grec, cyrillique |
| Chiffres / colonnes | **IBM Plex Mono** | OFL | 7 graisses 100–700, chacune avec italique | latin, latin-ext, cyrillique |

**Français : vérifié.** Le jeu *GF Latin Core* — celui du sous-ensemble `latin` servi par Google Fonts, 220 glyphes de lettres — couvre é è ê ë à â ç ô û î ï ù, la ligature **œ / Œ** et les **guillemets « »** ; sa documentation nomme explicitement le français parmi les 26 langues visées. Toutes les familles ci-dessus déclarent `latin` et `latin-ext`. Newsreader revendique en outre le jeu *Latin Plus* et « 130+ langues ».

**Chiffres tabulaires : vérifié pour Newsreader et Inter.** Les sources de Newsreader contiennent `features_tnum.fea` (« feature tnum { # tabular figures ») ainsi que `locl` (formes localisées, indispensable au français), `case` (capitales accentuées et guillemets), `pnum`, `ordn`, `sups`, `liga`. Inter documente les chiffres tabulaires, le zéro barré et des alternatives contextuelles de ponctuation. **Mise en œuvre :** `font-variant-numeric: tabular-nums` sur tout tableau de cours, de volumes ou de sanctions.

### C. Zones grises du stack

**1. Ghost et le verrou Mailgun.** Le cœur de Ghost dépend de `mailgun.js` (10.4.0), expose `mailgun-email-provider.js` et lit `bulkEmail.mailgun.apiKey`, `.domain`, `.baseUrl`. « Infolettre Ghost native » signifie donc en pratique **« Mailgun »** ; substituer Resend, SES ou Postmark à l'envoi de masse suppose de modifier le cœur. Le transport SMTP transactionnel reste distinct.

**2. « Hébergé au Canada » : à qualifier.** AWS expose `ca-central-1` (« Canada (Central) ») et `ca-west-1` (« Canada West (Calgary) ») ; GCP `northamerica-northeast1` (Montréal, 3 zones) et `northamerica-northeast2` (Toronto, 3 zones), Google précisant que ces zones résident encore dans un ou deux centres physiques, l'extension étant en cours ; Azure expose `canadacentral` et `canadaeast`. Chez Cloudflare en revanche, Regional Services couvre le Canada (« Cloudflare n'utilisera que des centres de données physiquement situés au Canada pour déchiffrer et traiter le trafic HTTPS ») **alors que le Customer Metadata Boundary n'offre que les États-Unis et l'Union européenne** ; la documentation ajoute que les sous-requêtes des Workers échappent à Regional Services et que l'activation du CMB vide une partie de l'analytique. La donnée applicative peut donc rester au Canada pendant que **métadonnées et journaux** en sortent.

**3. CMS.** Strapi (JS/TS ; SQLite, PostgreSQL, MySQL, MariaDB ; REST et GraphQL générés ; i18n intégrée ; auto-hébergé ou Strapi Cloud) et Payload (MIT ; natif Next.js, installable dans `/app` ; MongoDB et PostgreSQL ; v3) sont auto-hébergeables, donc compatibles avec une exigence de résidence. Sanity et WordPress VIP : **[NON VÉRIFIÉ]**.

**4. Ingestion et moissonnage.** n8n fournit le nœud `n8n-nodes-base.rssFeedRead` ; Playwright pilote Chromium, Firefox et WebKit sans interface, en JS/TS, Python, .NET et Java. Rien de cela ne tranche la question juridique : les conditions d'utilisation des sites de l'ACVM, de l'Autorité des marchés financiers ou de la Commission des valeurs mobilières de l'Ontario, ainsi que la portée de la Licence du gouvernement ouvert – Canada, **n'ont pas pu être consultées**.

## Ce que cela implique pour la ligne éditoriale d'Actio

**Sujets.** (1) La résidence des données des plateformes de négociation de cryptoactifs inscrites au Canada — où vivent réellement les registres de clients, sachant qu'aucune frontière de métadonnées canadienne n'existe chez Cloudflare. (2) Le coût réel de conformité LCAP d'une infolettre financière : preuve du consentement exprès, adresse postale valide 60 jours, désabonnement traité en 10 jours ouvrables. (3) La dépendance des médias canadiens à des fournisseurs d'envoi américains. (4) L'illisibilité machine des documents des régulateurs (PDF non structurés, fils RSS absents ou instables), obstacle concret à la veille. (5) L'ouverture des données réglementaires canadiennes comparée à l'ESMA et au Royaume-Uni.

**Vocabulaire.** « Cryptoactifs », jamais « crypto-monnaies » ; « infolettre », jamais « newsletter » ; « fil RSS » ; « moissonnage du Web » ; « système de gestion de contenu découplé ». Distinguer « résidence des données » et « souveraineté des données ». Conserver « ACVM », « Autorité des marchés financiers », « OCRI », « courtier restreint », « courtier en placement », « engagement préalable (à l'inscription) ».

**Pièges.** Ne pas écrire « hébergé au Canada » sans préciser la couche (application, base, CDN, journaux). Ne pas présenter la palette ou la police d'un concurrent comme un fait sans avoir vu le fichier servi. Ne pas réutiliser les polices propriétaires du FT ou de Bloomberg, même en prototype. Ne pas republier le texte intégral d'un avis de régulateur au motif qu'il est public : la licence applicable n'est pas vérifiée. Ne jamais présenter une grille de concurrent comme mesurée si elle ne l'a pas été.

## Terminologie officielle FR / EN canadien

| Français | English (Canadian) |
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
| infolettre | newsletter |
| mécanisme d'exclusion (désabonnement) | unsubscribe mechanism |
| délivrabilité | deliverability |
| message électronique commercial (MEC) | commercial electronic message (CEM) |
| consentement exprès | express consent |
| système de gestion de contenu découplé | headless content management system |
| interface de programmation d'applications (API) | application programming interface |
| fil RSS | RSS feed |
| moissonnage du Web | web scraping |
| résidence des données | data residency |
| souveraineté des données | data sovereignty |
| zone de disponibilité | availability zone |
| cryptoactifs | crypto assets |
| ACVM | Canadian Securities Administrators (CSA) |
| Autorité des marchés financiers | Autorité des marchés financiers (AMF) |
| courtier restreint | restricted dealer |
| engagement préalable (à l'inscription) | pre-registration undertaking (PRU) |

## Sources

Toutes consultées le **4 septembre 2026**.

- Métadonnées Google Fonts : https://raw.githubusercontent.com/google/fonts/main/ofl/newsreader/METADATA.pb (idem `inter`, `sourceserif4`, `literata`, `spectral`, `ibmplexsans`, `ibmplexmono`, `publicsans`, `sourcesans3`, `fraunces`)
- Jeux de glyphes Google Fonts (français, œ, guillemets) : https://raw.githubusercontent.com/googlefonts/glyphsets/main/GLYPHSETS.md
- Newsreader (licence, langues) : https://github.com/productiontype/Newsreader — chiffres tabulaires : `sources/features/features_tnum.fea`
- Inter (licence, graisses, fonctionnalités OpenType) : https://github.com/rsms/inter
- Palette officielle des graphiques du FT : https://raw.githubusercontent.com/ft-interactive/g-chartcolour/master/build/g-chartcolour.js
- Polices déclarées par un dépôt éditorial du FT : `client/styles/_var.scss`, https://github.com/ft-interactive/business-book-award
- Préchargement des polices de ft.com (capture HTML archivée) : `webscraping-o/htmlfiles/ft.txt`, https://github.com/p-ai-org/p-web
- Polices servies par le CDN de Bloomberg : `docs/domains/bwbx.io.html`, https://github.com/duckduckgo/tracker-radar-wiki
- Ghost (licence, API, Mailgun) : https://github.com/TryGhost/Ghost — `ghost/core/package.json`, `ghost/core/core/server/services/email-service/mailgun-email-provider.js`, `compose.dev.mailgun.yaml`
- Strapi : https://github.com/strapi/strapi — Payload : https://github.com/payloadcms/payload — Listmonk : https://github.com/knadh/listmonk
- n8n (licence, nœud RSS) : https://github.com/n8n-io/n8n — Playwright : https://github.com/microsoft/playwright
- Régions AWS (données du SDK) : https://raw.githubusercontent.com/boto/botocore/develop/botocore/data/partitions.json
- Régions Google Cloud : https://cloud.google.com/about/locations
- Régions Azure au Canada : `includes/front-door-edge-locations-by-abbreviation.md` et `articles/storage/common/network-routing-preference.md`, https://github.com/MicrosoftDocs/azure-docs
- Cloudflare, régions : https://raw.githubusercontent.com/cloudflare/cloudflare-docs/production/src/content/docs/data-localization/region-support.mdx — limites : `.../limitations.mdx`
- Obligations LCAP : fiche interne `/home/user/Linktree/actio/research/06-lcap-casl-vie-privee.md`

## Incertitudes et points à vérifier

- **DA des cabinets canadiens (Osler, McCarthy Tétrault, Stikeman Elliott) et de The Block** : domaines bloqués, aucune observation. Rien n'est affirmé sur leurs polices, palettes, grilles ou mode sombre. **[NON VÉRIFIÉ]**
- **Date de la capture Bloomberg** : la liste des polices provient d'un dépôt de recensement (DuckDuckGo Tracker Radar) dont la date de collecte est indéterminée ; à revérifier directement sur `assets.bwbx.io`. **[NON VÉRIFIÉ]**
- **Grilles, densité d'information, échelles typographiques et jetons de mode sombre** du FT, de Bloomberg et de The Block : aucune mesure effectuée. Les indications de la section B sont des **préconisations**, pas des observations. **[NON VÉRIFIÉ]**
- **Tarifs** (Ghost(Pro), Beehiiv, Mailgun, Resend, WordPress VIP, Sanity, Vercel, OVHcloud) : aucune grille consultée ; aucun coût par abonné n'est avancé. **[NON VÉRIFIÉ]**
- **Délivrabilité comparée** (placement en boîte de réception, IP dédiées, gestion des retours) : aucune donnée. **[NON VÉRIFIÉ]**
- **Listmonk** : segmentation SQL, traitement des retours, fournisseurs SMTP pris en charge — documentation inaccessible. **[NON VÉRIFIÉ]**
- **Azure** : `canadacentral` et `canadaeast` confirmés ; l'attribution des villes (Toronto, Québec) provient de tableaux Front Door et ExpressRoute, non d'une page officielle de localisation des régions ; zones de disponibilité non vérifiées. **[PARTIELLEMENT VÉRIFIÉ]**
- **Vercel** (régions de fonctions au Canada, politique de résidence) et **OVHcloud Beauharnois** (services, engagements de résidence) : **[NON VÉRIFIÉ]**
- **Licence du gouvernement ouvert – Canada** : version, date, clauses d'attribution et d'exclusion non consultées ; ne rien citer avant vérification. **[NON VÉRIFIÉ]**
- **Conditions d'utilisation et `robots.txt`** des sites de l'ACVM, de l'AMF, de la CVMO et de l'OCRI : non consultés. La licéité du moissonnage de ces sites n'est **pas** établie. **[NON VÉRIFIÉ]**
- **Feedly et RSS.app** : fonctionnalités, tarifs et conditions non vérifiés. **[NON VÉRIFIÉ]**
- **Chiffres tabulaires** confirmés pour Newsreader et Inter seulement ; non vérifiés pour Source Serif 4, Literata, Spectral, Public Sans, Source Sans 3 et IBM Plex. **[NON VÉRIFIÉ]**
- **Millésime de la SIL OFL 1.1** et dates des autres licences : non vérifiés. **[NON VÉRIFIÉ]**
