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
    visionText: "Internet consomme de plus en plus d'électricité dans le monde. En tant que créateur de sites, je m'engage à faire des sites plus légers, plus rapide, qui fonctionnent parfaitement même sur des appareils anciens, sans sacrifier l'expérience utilisateur.",
    skillsTitle: 'Compétences techniques', techToggle: 'Détails techniques', expTitle: 'Mon parcours', eduTitle: 'Formation', contactButton: 'Me contacter',
    experiences: [
      { period: "2025 - Aujourd'hui", position: 'Développeur Web Fullstack indépendant', company: 'À mon compte', description: "Je crée des sites pour différents clients en faisant attention à ce qu'ils soient économes en énergie." },
      { period: '2024 - 2025', position: 'Responsable du site internet', company: 'Objethèque de Cornouaille', description: "J'ai créé et mis à jour le site internet pour mettre en valeur les activités et événements de l'association." },
    ],
    education: [
      { year: '2025', degree: 'Diplôme de développeur web', school: 'Studi', description: 'Formation complète pour créer des sites de A à Z.' },
      { year: '2023 - 2024', degree: 'The Odin Project', school: 'Formation en ligne', description: 'Apprentissage complet pour créer des sites modernes.' },
      { year: '2022 - Présent', degree: 'Formation continue', school: 'Diverses sources', description: 'Je me forme en permanence pour rester à jour.' },
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
    visionText: "Digital technology now represents a growing part of our carbon footprint. As a web developer, I'm committed to designing websites and applications that minimize their environmental impact without compromising user experience.",
    skillsTitle: 'Technical skills', techToggle: 'Technical details', expTitle: 'Professional experience', eduTitle: 'Education', contactButton: 'Contact me',
    experiences: [
      { period: '2025 - Present', position: 'Freelance web developer', company: 'Independent', description: 'Design and development of websites and applications for various clients with special attention to environmental impact.' },
      { period: '2024 - 2025', position: 'Webmaster', company: 'Objethèque de Cornouaille', description: "Integration and development of user interfaces to showcase the association's activities and events." },
    ],
    education: [
      { year: '2025', degree: 'TP développeur web et web mobile', school: 'Studi', description: 'Titre RNCP de niveau 5, formation full stack (backend et frontend).' },
      { year: '2023 - 2024', degree: 'The Odin Project', school: 'Auto-formation', description: 'Parcours complet de développement web full stack avec focus sur JavaScript et technologies modernes.' },
      { year: '2022 - Présent', degree: 'Veille technologique', school: 'Sources diverses', description: 'Auto-formation continue à travers documentation, blogs techniques, conférences et communautés spécialisées.' },
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
    visionText: "Die digitale Technologie stellt heute einen wachsenden Teil unseres CO2-Fußabdrucks dar. Als Webentwickler setze ich mich dafür ein, Websites und Anwendungen zu entwickeln, die ihre Umweltauswirkungen minimieren, ohne die Benutzererfahrung zu beeinträchtigen.",
    skillsTitle: 'Technische Fähigkeiten', techToggle: 'Technische Details', expTitle: 'Berufserfahrung', eduTitle: 'Ausbildung', contactButton: 'Kontaktieren Sie mich',
    experiences: [
      { period: '2025 - Heute', position: 'Freelance Webentwickler', company: 'Unabhängig', description: 'Design und Entwicklung von Websites und Anwendungen für verschiedene Kunden mit besonderem Augenmerk auf Umweltauswirkungen.' },
      { period: '2024 - 2025', position: 'Webmaster', company: 'Objethèque de Cornouaille', description: 'Integration und Entwicklung von Benutzeroberflächen zur Präsentation der Aktivitäten und Veranstaltungen des Vereins.' },
    ],
    education: [
      { year: '2025', degree: 'Beruflicher Titel für Web- und Mobile-Web-Entwicklung', school: 'Studi', description: 'RNCP Qualifikation Stufe 5, Full-Stack-Ausbildung.' },
      { year: '2023 - 2024', degree: 'The Odin Project', school: 'Selbststudium', description: 'Kompletter Full-Stack-Webentwicklungslehrplan mit Schwerpunkt auf JavaScript.' },
      { year: '2022 - Heute', degree: 'Technologische Wachsamkeit', school: 'Verschiedene Quellen', description: 'Kontinuierliches Selbststudium durch Dokumentation, technische Blogs, Konferenzen.' },
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
