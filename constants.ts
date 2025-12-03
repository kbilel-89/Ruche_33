
import { Proposal, Event, MeetingReport, MediaItem } from './types';

export const MOCK_PROPOSALS: Proposal[] = [
  {
    id: '1',
    title: "Blocage symbolique de la préfecture",
    description: "Organisation d'une action non-violente devant la préfecture pour dénoncer l'inaction climatique et sociale. Besoin de 50 abeilles.",
    author: "Ruche Bordeaux Centre",
    date: "2023-10-25",
    category: "Action",
    status: "En cours",
    votes: { pour: 45, contre: 2, abstention: 5 }
  },
  {
    id: '2',
    title: "Achat groupé de matériel de sonorisation",
    description: "Investissement dans une enceinte autonome pour les assemblées populaires. Budget estimé : 400€.",
    author: "Comité Logistique",
    date: "2023-10-20",
    category: "Logistique",
    status: "Adoptée",
    votes: { pour: 120, contre: 10, abstention: 15 }
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: "Assemblée Générale Extraordinaire",
    date: "2023-11-05T18:00:00",
    location: "Salle des Fêtes, Bègles",
    description: "Renouvellement des référents tournants et vote du budget mensuel.",
    type: "Réunion"
  },
  {
    id: '2',
    title: "Atelier Constituant",
    date: "2023-11-12T14:00:00",
    location: "Place de la Victoire, Bordeaux",
    description: "Lecture critique de la constitution et rédaction de cahiers de doléances.",
    type: "Formation"
  },
  {
    id: '3',
    title: "Maraude Solidaire",
    date: "2023-11-15T20:00:00",
    location: "Gare Saint-Jean",
    description: "Distribution de repas chauds et duvets.",
    type: "Action"
  }
];

export const MOCK_REPORTS: MeetingReport[] = [
  {
    id: 'cr-003',
    date: '2023-11-01',
    title: 'Réunion de Coordination Hebdomadaire',
    participants: 12,
    tags: ['Gouvernance', 'Action'],
    content: `
### Ordre du jour
1. Retour sur l'action "Flyer"
2. Préparation de la venue de J. Branco
3. Point trésorerie

### 1. Retour action
L'action a été un succès, 500 tracts distribués. Les retours sont positifs, beaucoup de curiosité sur le concept de "Ruche".
**Décision** : Réimprimer 1000 tracts avec le nouveau QR code.

### 2. Événement à venir
La salle est réservée. Il manque 3 volontaires pour la sécurité et 2 pour le bar.
Le pôle communication doit lancer l'événement Facebook ce soir.

### 3. Trésorerie
Solde actuel : 450€.
Dépenses prévues : 150€ (Impressions).
`
  },
  {
    id: 'cr-002',
    date: '2023-10-24',
    title: 'AG Constitutive - Groupe Bordeaux',
    participants: 28,
    tags: ['Organisation', 'Vote'],
    content: `
### Présents
28 personnes (15 Abeilles, 13 Butineurs).

### Décisions Actées
* **Validation de la Charte** : Adoptée à l'unanimité.
* **Élection des référents** : 
    * *Logistique* : Marc & Sarah
    * *Com* : Thomas
    * *Trésorerie* : Non pourvu (appel à candidature lancé)

### Prochaine étape
Lancement du Discord pour structurer les échanges inter-réunions.
`
  },
  {
    id: 'cr-001',
    date: '2023-10-17',
    title: 'Réunion d\'accueil des nouveaux',
    participants: 8,
    tags: ['Accueil', 'Intégration'],
    content: `
Présentation du mouvement aux nouveaux arrivants.
Explication de la différence Abeille / Butineur.
Tour de table des compétences :
* 2 graphistes
* 1 juriste
* 1 infirmier

Intégration immédiate dans les boucles Telegram en attendant Discord.
`
  }
];

export const MOCK_MEDIA: MediaItem[] = [
  {
    id: 'book-1',
    title: "Crépuscule",
    author: "Juan Branco",
    type: "Livre",
    description: "Une analyse implacable des conditions d'accession au pouvoir d'Emmanuel Macron et des réseaux oligarchiques français.",
    tags: ["Oligarchie", "Macronie", "Enquête"],
    link: "https://au-diable-vauvert.com/livres/crepuscule/"
  },
  {
    id: 'book-2',
    title: "L'Abattage",
    author: "Juan Branco",
    type: "Livre",
    description: "Suite spirituelle de Crépuscule, analysant la corruption morale et systémique des élites parisiennes.",
    tags: ["Système", "Justice", "Politique"],
    link: "#"
  },
  {
    id: 'video-1',
    title: "L'Oligarchie et le Virus",
    author: "Off Investigation",
    type: "Vidéo",
    description: "Documentaire indépendant retraçant la gestion de la crise sanitaire sous le prisme des intérêts privés.",
    tags: ["Santé", "Enquête", "Covid"],
    link: "https://www.off-investigation.fr/"
  },
  {
    id: 'site-1',
    title: "Blast, le souffle de l'info",
    author: "Denis Robert & Co",
    type: "Site Web",
    description: "Média indépendant, libre et sans concession. Une source d'information vitale face aux médias détenus par les milliardaires.",
    tags: ["Presse", "Indépendant", "Investigation"],
    link: "https://www.blast-info.fr/"
  },
  {
    id: 'doc-1',
    title: "Construire une guillotine (Conférence)",
    author: "Juan Branco",
    type: "Vidéo",
    description: "Captation de la conférence fondatrice expliquant la nécessité de sortir de la réforme pour aller vers la révolution institutionnelle.",
    tags: ["Conférence", "Stratégie", "Révolution"],
    link: "#"
  },
  {
    id: 'book-3',
    title: "Manuel d'insurrection générale",
    author: "Comité Invisible",
    type: "Livre",
    description: "Texte politique analysant l'effondrement en cours et proposant des pistes pour s'organiser en dehors de l'État.",
    tags: ["Auto-gestion", "Politique", "Action"],
    link: "#"
  }
];
