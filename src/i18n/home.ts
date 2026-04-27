// src/i18n/home.ts
import type { Lang } from './index';

const valueIcons = ['lightning', 'mouse-pointer', 'leaf', 'rocket'] as const;
const serviceIcons = ['globe', 'gear', 'cart', 'messages-square'] as const;

export const home = {
  fr: {
    title: 'Josselin HANEL - Créateur de sites internet',
    description: "Créateur de sites internet qui marchent bien, rapides et moins gourmands en énergie. Basé à Rennes, disponible à Quimper, Paris, Berlin et à distance.",
    heroTypePart1: 'Créateur de',
    heroTypePart2: ' sites internet',
    heroText: "Je crée des sites web durables au chargement rapide, qui s'affichent correctement sur tous les appareils, et sont bien placés sur Google. Le tout avec des technologies modernes, économiques et écologiques.",
    contactButton: 'Me contacter',
    projectsButton: 'Voir mes réalisations',

    values: [
      { title: 'Rapidité', description: 'Des sites qui ne font pas attendre vos visiteurs.', icon: valueIcons[0] },
      { title: 'Simplicité', description: 'Des solutions qui vont droit au but, faciles à mettre à jour.', icon: valueIcons[1] },
      { title: "Économie d'énergie", description: "Des sites plus légers qui font baisser vos factures d'hébergement.", icon: valueIcons[2] },
      { title: 'Autonomie', description: 'Des sites que vous pouvez faire évoluer facilement.', icon: valueIcons[3] },
    ],

    servicesTitle: 'Services',
    services: [
      { title: 'Sites pour présenter votre activité', description: 'Sites professionnels personnalisés, rapides et bien placés sur Google - sans WordPress ni abonnements coûteux.', icon: serviceIcons[0] },
      { title: 'Applications web', description: "Outils en ligne sur mesure pour automatiser vos tâches et améliorer l'expérience de vos utilisateurs.", icon: serviceIcons[1] },
      { title: 'Boutiques en ligne', description: 'Solutions de vente en ligne modernes et rapides, sans les frais mensuels des plateformes habituelles.', icon: serviceIcons[2] },
      { title: 'Conseils', description: 'Conseils pour rendre vos sites existants plus rapides, moins énergivores et plus agréables à utiliser.', icon: serviceIcons[3] },
    ],

    projectsTitle: 'Projets récents',
    projectButton: 'Voir ce projet',
    viewAllProjectsButton: 'Voir tous les projets',

    blogTitle: 'Articles récents',
    viewAllBlogButton: 'Voir tous les articles',
  },
  en: {
    title: 'Josselin HANEL - Full Stack Web Developer',
    description: 'Full stack web developer creating fast, efficient and eco-friendly websites. Based in Rennes (France), available in Quimper, Paris, Berlin and for remote work.',
    heroTypePart1: 'Full Stack',
    heroTypePart2: 'Web Developer',
    heroText: 'I create sustainable websites with fast loading, that display correctly on all devices, and rank well on Google. All with modern, cost-effective and eco-friendly technologies.',
    contactButton: 'Contact me',
    projectsButton: 'View my projects',

    values: [
      { title: 'Speed', description: "Websites that don't keep your visitors waiting.", icon: valueIcons[0] },
      { title: 'Simplicity', description: 'Solutions that get straight to the point, easy to update.', icon: valueIcons[1] },
      { title: 'Energy saving', description: 'Lighter websites that lower your hosting bills.', icon: valueIcons[2] },
      { title: 'Autonomy', description: 'Websites you can easily evolve.', icon: valueIcons[3] },
    ],

    servicesTitle: 'Services',
    services: [
      { title: 'Showcase websites', description: 'Personalized, fast and well-ranked professional websites - without WordPress or costly subscriptions.', icon: serviceIcons[0] },
      { title: 'Web applications', description: "Custom online tools to automate your tasks and improve your users' experience.", icon: serviceIcons[1] },
      { title: 'Online stores', description: 'Modern and fast e-commerce solutions, without the monthly fees of traditional platforms.', icon: serviceIcons[2] },
      { title: 'Consulting', description: 'Advice to make your existing sites faster, less energy-intensive and more user-friendly.', icon: serviceIcons[3] },
    ],

    projectsTitle: 'Recent projects',
    projectButton: 'Explore project',
    viewAllProjectsButton: 'View all projects',

    blogTitle: 'Recent articles',
    viewAllBlogButton: 'View all articles',
  },
  de: {
    title: 'Josselin HANEL - Full-Stack Webentwickler',
    description: 'Full-Stack Webentwickler, der schnelle, effiziente und umweltfreundliche Websites erstellt. Mit Sitz in Rennes (Frankreich), verfügbar in Quimper, Paris, Berlin und für Remote-Arbeit.',
    heroTypePart1: 'Full Stack',
    heroTypePart2: 'Webentwickler',
    heroText: 'Ich erstelle nachhaltige Websites mit schnellem Ladevorgang, die auf allen Geräten korrekt angezeigt werden und bei Google gut platziert sind. Alles mit modernen, wirtschaftlichen und ökologischen Technologien.',
    contactButton: 'Kontakt',
    projectsButton: 'Meine Projekte',

    values: [
      { title: 'Schnelligkeit', description: 'Websites, die Ihre Besucher nicht warten lassen.', icon: valueIcons[0] },
      { title: 'Einfachheit', description: 'Lösungen, die auf den Punkt kommen, leicht zu aktualisieren.', icon: valueIcons[1] },
      { title: 'Energieeinsparung', description: 'Leichtere Websites, die Ihre Hosting-Kosten senken.', icon: valueIcons[2] },
      { title: 'Autonomie', description: 'Websites, die Sie leicht weiterentwickeln können.', icon: valueIcons[3] },
    ],

    servicesTitle: 'Dienstleistungen',
    services: [
      { title: 'Präsentations-Websites', description: 'Personalisierte, schnelle und gut platzierte professionelle Websites - ohne WordPress oder kostspielige Abonnements.', icon: serviceIcons[0] },
      { title: 'Webanwendungen', description: 'Maßgeschneiderte Online-Tools zur Automatisierung Ihrer Aufgaben und Verbesserung der Benutzererfahrung.', icon: serviceIcons[1] },
      { title: 'Online-Shops', description: 'Moderne und schnelle E-Commerce-Lösungen ohne monatliche Gebühren traditioneller Plattformen.', icon: serviceIcons[2] },
      { title: 'Beratung', description: 'Beratung, um Ihre bestehenden Websites schneller, weniger energieintensiv und benutzerfreundlicher zu machen.', icon: serviceIcons[3] },
    ],

    projectsTitle: 'Aktuelle Projekte',
    projectButton: 'Projekt entdecken',
    viewAllProjectsButton: 'Alle Projekte ansehen',

    blogTitle: 'Neueste Artikel',
    viewAllBlogButton: 'Alle Artikel ansehen',
  },
} satisfies Record<Lang, any>;
