/**
 * Actio — assemblage des courriels.
 *
 * Un seul châssis (newsletter/chassis.html) porte l'en-tête de marque et le
 * pied de page de conformité LCAP. Chaque envoi n'est qu'un fragment de
 * contenu plus un manifeste. Conséquence voulue : une correction apportée aux
 * mentions légales obligatoires se propage à TOUS les courriels, sans qu'on
 * puisse en oublier un. C'est une exigence de conformité, pas un confort.
 *
 * Usage :  node actio/tools/emails.mjs
 * Sortie :  newsletter/dist/<clé>.html
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ICI = dirname(fileURLToPath(import.meta.url));
const NL = resolve(ICI, '..', 'newsletter');
const DIST = join(NL, 'dist');

const chassis = readFileSync(join(NL, 'chassis.html'), 'utf8');
const manifeste = JSON.parse(readFileSync(join(NL, 'manifeste.json'), 'utf8'));

mkdirSync(DIST, { recursive: true });

// Les mentions que la LCAP rend obligatoires dans tout message électronique
// commercial. Leur absence bloque la production : c'est le point du système.
const MENTIONS_OBLIGATOIRES = [
  { motif: '{{lien_desabonnement}}', nom: 'mécanisme d’exclusion' },
  { motif: 'Actio Média inc.', nom: 'identification de l’expéditeur' },
  { motif: 'Montréal (Québec)', nom: 'adresse postale' },
  { motif: 'consentement exprès', nom: 'rappel du fondement du consentement' },
  { motif: '10 jours ouvrables', nom: 'délai de traitement du désabonnement' },
  { motif: 'ni conseil en placement', nom: 'avertissement d’absence de conseil' },
];

let echecs = 0;

for (const envoi of manifeste.envois) {
  const contenu = readFileSync(join(NL, 'contenus', envoi.contenu), 'utf8');

  let sortie = chassis
    .replaceAll('{{TITRE}}', envoi.titre)
    .replaceAll('{{PREENTETE}}', envoi.preentete)
    .replaceAll('{{SURTITRE}}', envoi.surtitre)
    .replaceAll('{{META_DROITE}}', envoi.meta_droite)
    .replace('{{CONTENU}}', contenu);

  // Bloc de cours : conservé pour l'édition hebdomadaire, retiré ailleurs.
  if (!envoi.bandeau_cours) {
    sortie = sortie.replace(
      /<!--DEBUT:COURS-->[\s\S]*?<!--FIN:COURS-->\n?/,
      ''
    );
  } else {
    sortie = sortie.replace('<!--DEBUT:COURS-->\n', '').replace('<!--FIN:COURS-->\n', '');
  }

  const manquantes = MENTIONS_OBLIGATOIRES.filter((m) => !sortie.includes(m.motif));
  if (manquantes.length) {
    console.error(`  ÉCHEC ${envoi.cle} — mentions LCAP absentes : ` +
      manquantes.map((m) => m.nom).join(', '));
    echecs++;
  }

  // Un attribut répété sur une même balise est ignoré sans erreur par les
  // clients de messagerie : le style perdu ne se voit qu'au rendu final.
  const dupliques = [...sortie.matchAll(/<(\w+)\b([^>]*)>/g)]
    .filter(([, , attrs]) => ['style', 'class', 'width', 'align', 'href']
      .some((a) => (attrs.match(new RegExp(`\\s${a}=`, 'g')) || []).length > 1))
    .map(([balise]) => balise.slice(0, 90));
  if (dupliques.length) {
    console.error(`  ÉCHEC ${envoi.cle} — attribut répété sur ${dupliques.length} balise(s) :`);
    dupliques.slice(0, 3).forEach((b) => console.error(`         ${b}…`));
    echecs++;
  }

  const restants = sortie.match(/\{\{[A-Z_]+\}\}/g);
  if (restants) {
    console.error(`  ÉCHEC ${envoi.cle} — emplacements non remplis : ${[...new Set(restants)].join(', ')}`);
    echecs++;
  }

  const octets = Buffer.byteLength(sortie, 'utf8');
  if (octets > 102400) {
    console.error(`  ÉCHEC ${envoi.cle} — ${octets} octets : Gmail tronque au-delà de 102 400.`);
    echecs++;
  }

  // Une édition de référence versionnée sert de contrôle : le châssis doit la
  // reproduire exactement. Si l'un des deux dérive, la production s'arrête.
  if (envoi.reference) {
    const ref = join(NL, envoi.reference);
    if (!existsSync(ref)) {
      console.error(`  ÉCHEC ${envoi.cle} — référence introuvable : ${envoi.reference}`);
      echecs++;
    } else {
      const norm = (t) => t.replace(/[ \t]+$/gm, '').replace(/\n{2,}/g, '\n').trim();
      if (norm(readFileSync(ref, 'utf8')) !== norm(sortie)) {
        console.error(`  ÉCHEC ${envoi.cle} — l'assemblage diverge de ${envoi.reference}. ` +
          `Le châssis, le fragment de contenu ou la référence ont été modifiés séparément.`);
        echecs++;
      }
    }
  }

  writeFileSync(join(DIST, `${envoi.cle}.html`), sortie, 'utf8');
  console.log(`  ${envoi.cle.padEnd(28)} ${String(octets).padStart(6)} octets · objet : « ${envoi.objet} »`);
}

console.log(`\n${manifeste.envois.length} courriel(s) assemblé(s) dans ${DIST}`);
if (echecs) { console.error(`${echecs} contrôle(s) en échec.`); process.exit(1); }
console.log('Toutes les mentions obligatoires LCAP sont présentes dans chaque envoi.');
