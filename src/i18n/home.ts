// src/i18n/home.ts
import type { Lang } from './index';

const valueIcons = ['lightning', 'mouse-pointer', 'leaf', 'rocket'] as const;
const serviceIcons = ['globe', 'gear', 'cart', 'messages-square'] as const;

export const home = {
  fr: {
    title: 'Josselin HANEL - Full Stack Web Developer',
    description: "Développeur web freelance : sites modulables, rapides et sur-mesure, faciles à prendre en main. Basé à Rennes, disponible à Quimper, Paris, Berlin et à distance.",
    heroTypePart1: 'Full Stack',
    heroTypePart2: 'Web Developer',
    kiss: {
      title: 'KISS : Keep It Simple, Stupid !',
      quote: '"Tout devrait être aussi simple que possible, mais pas simpliste." — Einstein',
      p1: "Je m'applique à trouver la solution la plus légère et adaptée pour chaque projet, ce qui demande souvent plus de réflexion qu'on ne le pense. Je m'appuie sur les standards du web, sans plugins superflus, sans serveur ni base de données quand ce n'est pas nécessaire. L'objectif : une app ou un site faits pour durer, modulables, simples à prendre en main pour les admins comme pour les utilisateurs.",
      p2: "Le résultat : référencement naturel optimal, performances inégalées grâce à la couche de modernité que j'ajoute par-dessus ces standards, et une résilience dans le temps qu'un CMS bardé de plugins (WordPress & co) ne peut pas offrir.",
    },
    contactButton: 'Me contacter',
    projectsButton: 'Voir mes réalisations',

    values: [
      { title: 'Rapidité', description: 'Des sites qui ne font pas attendre vos visiteurs.', icon: valueIcons[0] },
      { title: 'Simplicité', description: 'Des solutions qui vont droit au but, faciles à mettre à jour.', icon: valueIcons[1] },
      { title: 'Légèreté', description: "Un site allégé du superflu coûte moins cher à héberger et consomme moins d'énergie.", icon: valueIcons[2] },
      { title: 'Autonomie', description: "Le site est à vous, sans engagement : pas besoin d'aller voir ailleurs, on peut toujours ajouter la brique qui manque.", icon: valueIcons[3] },
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
    description: 'Freelance web developer: adaptable, fast, custom-made websites that are easy to manage day to day. Based in Rennes, available in Quimper, Paris, Berlin and remotely.',
    heroTypePart1: 'Full Stack',
    heroTypePart2: 'Web Developer',
    kiss: {
      title: 'KISS: Keep It Simple, Stupid!',
      quote: '"Everything should be as simple as possible, but not simpler." — Einstein',
      p1: "I focus on finding the lightest and most fitting solution for each project, which often takes more thought than you'd expect. I build on web standards, without unnecessary plugins, without a server or database when they're not needed. The goal: an app or website built to last, modular, easy to use for admins and end users alike.",
      p2: "The result: optimal natural SEO, unmatched performance thanks to the modern layer I add on top of these standards, and long-term resilience that no plugin-heavy CMS (WordPress & co) can match.",
    },
    contactButton: "Let's talk",
    projectsButton: 'View my projects',

    values: [
      { title: 'Speed', description: "Websites that don't keep your visitors waiting.", icon: valueIcons[0] },
      { title: 'Simplicity', description: 'Solutions that get straight to the point, easy to update.', icon: valueIcons[1] },
      { title: 'Lightness', description: 'A site stripped of the superfluous costs less to host and uses less energy.', icon: valueIcons[2] },
      { title: 'Autonomy', description: "The site is yours, with no strings attached: no need to look elsewhere — we can always add the missing piece later.", icon: valueIcons[3] },
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
    description: 'Freiberuflicher Webentwickler: anpassungsfähige, schnelle und maßgeschneiderte Websites, die sich im Alltag leicht verwalten lassen. Mit Sitz in Rennes, verfügbar in Quimper, Paris, Berlin und remote.',
    heroTypePart1: 'Full Stack',
    heroTypePart2: 'Webentwickler',
    kiss: {
      title: 'KISS: Keep It Simple, Stupid!',
      quote: '"Alles sollte so einfach wie möglich sein, aber nicht einfacher." — Einstein',
      p1: "Ich setze mich dafür ein, die leichteste und passendste Lösung für jedes Projekt zu finden, was oft mehr Überlegung erfordert, als man denken würde. Ich baue auf Web-Standards, ohne überflüssige Plugins, ohne Server oder Datenbank, wenn sie nicht nötig sind. Das Ziel: eine App oder Website, die dauerhaft ist, modular und einfach zu bedienen, für Admins wie für Endnutzer.",
      p2: "Das Ergebnis: optimales natürliches SEO, unübertroffene Performance dank der modernen Schicht, die ich über diese Standards lege, und eine langfristige Resilienz, die kein plugin-überladenes CMS (WordPress & Co) bieten kann.",
    },
    contactButton: 'Kontakt',
    projectsButton: 'Meine Projekte',

    values: [
      { title: 'Schnelligkeit', description: 'Websites, die Ihre Besucher nicht warten lassen.', icon: valueIcons[0] },
      { title: 'Einfachheit', description: 'Lösungen, die auf den Punkt kommen, leicht zu aktualisieren.', icon: valueIcons[1] },
      { title: 'Leichtigkeit', description: 'Eine Website ohne Ballast kostet weniger im Hosting und verbraucht weniger Energie.', icon: valueIcons[2] },
      { title: 'Autonomie', description: 'Die Website gehört Ihnen, ohne Verpflichtungen: Sie müssen nirgendwo anders hin – wir können jederzeit den fehlenden Baustein ergänzen.', icon: valueIcons[3] },
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
