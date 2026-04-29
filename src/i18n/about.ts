// src/i18n/about.ts
import type { Lang } from './index';

const skillIcons = ['monitor', 'gear', 'database', 'tools', 'list-checks'] as const;
const skillItems = [
  ['Astro', 'Tailwind', 'CSS Pro', 'TypeScript', 'HTMX'],
  ['Astro + Workers', 'Supabase', 'Phoenix (Elixir)'],
  ['PostgreSQL', 'PostgREST', 'MongoDB'],
  ['Git', 'Docker', 'Lighthouse'],
  ['Accessibilité', 'Performance & Éco-conception', 'UX/UI'],
] as const;
export const about = {
  fr: {
    title: 'Josselin HANEL - Qui je suis',
    description: "Découvrez mon parcours, mes compétences et ma façon de créer des sites internet qui respectent la planète.",
    aboutTitle: 'Qui suis-je ?',
    aboutText: "Je crée des sites web écologiques avec une vraie démarche d'éco-conception, pas du greenwashing marketing. Basé à Rennes, je travaille aussi pour des clients à Quimper, Paris, Berlin ou à distance.",
    visionTitle: 'Ma vision',
    visionText: "Le web consomme de plus en plus d'énergie. Je ne vais pas sauver la planète tout seul, mais chaque site que je crée est le plus léger possible sans rogner sur l'expérience utilisateur.",
    skillsTitle: 'Compétences techniques', techToggle: 'Détails techniques', expTitle: 'Mon parcours', eduTitle: 'Formation', contactButton: 'Me contacter',
    experiences: [
      { period: "2025 - Aujourd'hui", position: 'Développeur Web Fullstack indépendant', company: 'À mon compte', description: "Je conçois des sites pour des clients variés, avec une contrainte que je m'impose : chaque site doit être rapide, léger, et que le client puisse l'utiliser en autonomie." },
      { period: '2024 - 2025', position: 'Responsable du site internet', company: 'Objethèque de Cornouaille', description: "Création et maintenance du site de cette association bretonne de prêt d'objets, bénévolement. Un projet qui colle bien à mes valeurs : utile, sobre, local." },
    ],
    education: [
      { year: '2025', degree: 'Diplôme de développeur web', school: 'Studi', description: "Titre RNCP de niveau 5. Formation diplômante qui m'a permis de valider mes acquis. Mon projet de fin de formation est <a href=\"/fr/esport\" class=\"text-link\">Esportify</a>." },
      { year: '2023 - 2024', degree: 'The Odin Project', school: 'Formation en ligne', description: 'Curriculum open source gratuit et très complet pour apprendre le développement web de zéro. <a href="https://www.theodinproject.com" class="text-link">Voir la formation</a>.' },
      { year: '2022 - Présent', degree: 'Formation continue', school: 'Diverses sources', description: "YouTube, podcasts, newsletters tech... J'apprends en permanence, et l'anglais m'ouvre l'accès aux ressources les plus fraîches." },
    ],
    skillCategories: [
      { category: 'Côté visible', icon: skillIcons[0], items: skillItems[0] },
      { category: 'Côté serveur', icon: skillIcons[1], items: skillItems[1] },
      { category: 'Bases de données', icon: skillIcons[2], items: skillItems[2] },
      { category: 'Outils', icon: skillIcons[3], items: skillItems[3] },
      { category: 'Méthodes', icon: skillIcons[4], items: skillItems[4] },
    ],
  },
  en: {
    title: 'Josselin HANEL - About me',
    description: 'Discover my background, skills and vision of eco-friendly web development.',
    aboutTitle: 'About me',
    aboutText: "I create eco-friendly websites with a real eco-design approach, not marketing greenwashing. Based in Rennes, I also work for clients in Quimper, Paris, Berlin or remotely.",
    visionTitle: 'My vision',
    visionText: "The web's energy footprint keeps growing. I can't fix that on my own, but every site I build is as lightweight as possible without compromising user experience.",
    skillsTitle: 'Technical skills', techToggle: 'Technical details', expTitle: 'Professional experience', eduTitle: 'Education', contactButton: "Let's talk",
    experiences: [
      { period: '2025 - Present', position: 'Freelance web developer', company: 'Independent', description: 'I design websites for a range of clients, with one rule I set for myself: every site must be fast, lightweight, and easy for the client to use independently.' },
      { period: '2024 - 2025', position: 'Webmaster', company: 'Objethèque de Cornouaille', description: 'Built and maintained the website for this Breton object-lending association, on a voluntary basis. A project that aligns well with my values: useful, simple, local.' },
    ],
    education: [
      { year: '2025', degree: 'TP développeur web et web mobile', school: 'Studi', description: 'A certified program that let me consolidate everything I had learned. My final project was <a href="/en/esport" class="text-link">Esportify</a>.' },
      { year: '2023 - 2024', degree: 'The Odin Project', school: 'Auto-formation', description: 'A free, open-source and very thorough curriculum to learn web development from scratch. <a href="https://www.theodinproject.com" class="text-link">See the curriculum</a>.' },
      { year: '2022 - Présent', degree: 'Veille technologique', school: 'Sources diverses', description: 'YouTube, podcasts, tech newsletters — always learning, and being comfortable in English means I get the freshest content first.' },
    ],
    skillCategories: [
      { category: 'Frontend', icon: skillIcons[0], items: skillItems[0] },
      { category: 'Backend', icon: skillIcons[1], items: skillItems[1] },
      { category: 'Databases', icon: skillIcons[2], items: skillItems[2] },
      { category: 'Tools', icon: skillIcons[3], items: skillItems[3] },
      { category: 'Methodologies', icon: skillIcons[4], items: skillItems[4] },
    ],
  },
  de: {
    title: 'Josselin HANEL - Über mich',
    description: 'Entdecken Sie meinen Werdegang, meine Fähigkeiten und meine Vision von umweltfreundlicher Webentwicklung.',
    aboutTitle: 'Über mich',
    aboutText: "Ich erstelle ökologische Websites mit einem echten Öko-Design-Ansatz, kein Marketing-Greenwashing. Mit Sitz in Rennes arbeite ich auch für Kunden in Quimper, Paris, Berlin oder remote.",
    visionTitle: 'Meine Vision',
    visionText: "Der Energieverbrauch des Webs wächst stetig. Ich werde das nicht alleine ändern, aber jede Website, die ich baue, ist so leichtgewichtig wie möglich, ohne die Nutzererfahrung zu beeinträchtigen.",
    skillsTitle: 'Technische Fähigkeiten', techToggle: 'Technische Details', expTitle: 'Berufserfahrung', eduTitle: 'Ausbildung', contactButton: 'Kontaktieren Sie mich',
    experiences: [
      { period: '2025 - Heute', position: 'Freelance Webentwickler', company: 'Unabhängig', description: 'Ich gestalte Websites für verschiedene Kunden, mit einer Regel, die ich mir selbst auferlege: Jede Site muss schnell, leicht und für den Kunden eigenständig nutzbar sein.' },
      { period: '2024 - 2025', position: 'Webmaster', company: 'Objethèque de Cornouaille', description: 'Aufbau und Pflege der Website dieses bretonischen Vereins für Objektausleihe, ehrenamtlich. Ein Projekt, das gut zu meinen Werten passt: nützlich, schlicht, lokal.' },
    ],
    education: [
      { year: '2025', degree: 'Beruflicher Titel für Web- und Mobile-Web-Entwicklung', school: 'Studi', description: 'Eine anerkannte Ausbildung, die mir half, meine Kenntnisse zu bestätigen. Mein Abschlussprojekt war <a href="/de/esport" class="text-link">Esportify</a>.' },
      { year: '2023 - 2024', degree: 'The Odin Project', school: 'Selbststudium', description: 'Ein kostenloses, sehr vollständiges Open-Source-Curriculum für Webentwicklung von Grund auf. <a href="https://www.theodinproject.com" class="text-link">Zur Ausbildung</a>.' },
      { year: '2022 - Heute', degree: 'Technologische Wachsamkeit', school: 'Verschiedene Quellen', description: 'YouTube, Podcasts, Tech-Newsletter — ich lerne ständig dazu, und gute Englischkenntnisse geben mir Zugang zu den aktuellsten Inhalten.' },
    ],
    skillCategories: [
      { category: 'Frontend', icon: skillIcons[0], items: skillItems[0] },
      { category: 'Backend', icon: skillIcons[1], items: skillItems[1] },
      { category: 'Datenbanken', icon: skillIcons[2], items: skillItems[2] },
      { category: 'Werkzeuge', icon: skillIcons[3], items: skillItems[3] },
      { category: 'Methoden', icon: skillIcons[4], items: skillItems[4] },
    ],
  },
} satisfies Record<Lang, any>;
