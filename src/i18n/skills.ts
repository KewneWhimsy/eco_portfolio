// src/i18n/skills.ts — Descriptions des compétences (partagé entre standard et éco)
import type { Lang } from './index';

type SkillDescriptions = Record<string, { technical: string; simple: string }>;

export const skillDescriptions: Record<Lang, SkillDescriptions> = {
  fr: {
    'Astro': {
      technical: 'Framework web agnostique générant principalement du HTML statique, offrant un excellent SEO naturel et des performances optimales sans imposer de choix technologiques.',
      simple: 'Outil qui crée des sites web rapides et faciles à trouver sur Google, sans vous forcer à utiliser une technologie particulière.'
    },
    'CSS Pro': {
      technical: 'Techniques CSS avancées pour un design responsive et des animations fluides, limitant le recours au JavaScript coûteux en ressources.',
      simple: 'Techniques pour créer des sites qui s\'adaptent à tous les écrans avec des animations légères.'
    },
    'TypeScript': {
      technical: 'Sur-ensemble typé de JavaScript pour un code plus robuste et maintenable, réduisant les erreurs et la dette technique.',
      simple: 'Une version améliorée de JavaScript qui aide à éviter les bugs et facilite le travail en équipe.'
    },
    'HTMX': {
      technical: 'Bibliothèque ultra-légère (~14kb) ajoutant des capacités AJAX et WebSocket directement au HTML.',
      simple: 'Un petit outil qui rend les pages web interactives sans alourdir le site.'
    },
    'Tailwind': {
      technical: 'Framework CSS utilitaire qui facilite le travail collaboratif et le responsive. Purge CSS en production pour des feuilles de style ultra-optimisées.',
      simple: 'Système qui permet de créer rapidement des designs adaptés à tous les écrans, tout en gardant le site léger.'
    },
    'Astro + Workers': {
      technical: 'Architecture edge-first : Astro pour le rendu statique/SSR avec routes API, complété par Workers pour la logique métier côté edge. Coûts dérisoires, performances maximales.',
      simple: 'Astro construit les pages et crée des routes pour des agents dormants (Workers) qui se réveillent uniquement quand on a besoin d\'eux. Plus économique qu\'un serveur permanent.'
    },
    'Supabase': {
      technical: 'Backend managé (CRUD, auth, storage). PostgreSQL + PostgREST qui génère automatiquement une API REST. Idéal pour démarrer rapidement.',
      simple: 'Un service qui stocke vos données et gère les connexions utilisateurs, sans avoir à installer ou maintenir un serveur.'
    },
    'Phoenix (Elixir)': {
      technical: 'Backend custom pour applications interactives et temps réel. LiveView élimine le JavaScript client. Excellent pour des milliers de visiteurs simultanés.',
      simple: 'Un serveur complet que l\'on contrôle entièrement. Excellent pour du temps réel intensif et des milliers de visiteurs simultanés.'
    },
    'PostgreSQL': {
      technical: 'SGBD relationnel open-source puissant avec un écosystème d\'extensions quasi infini.',
      simple: 'Une base de données fiable et polyvalente qui stocke vos informations de façon organisée et sécurisée.'
    },
    'PostgREST': {
      technical: 'Transforme une BDD Postgres en API REST instantanément. Permet dans certains cas de se passer de backend.',
      simple: 'Un outil qui permet d\'accéder facilement et en toute sécurité aux données stockées, sans écrire beaucoup de code.'
    },
    'MongoDB': {
      technical: 'Base de données NoSQL orientée documents permettant une flexibilité des schémas.',
      simple: 'Une base de données flexible qui s\'adapte facilement aux changements.'
    },
    'Git': {
      technical: 'Essentiel pour tout développement collaboratif, trace claire des modifications et contributions simultanées.',
      simple: 'Un système qui permet à plusieurs personnes de travailler sur le même projet sans conflit.'
    },
    'Docker': {
      technical: 'Reproductibilité parfaite des environnements. Docker Compose pour l\'orchestration, Swarm pour le déploiement scalable.',
      simple: 'Un outil qui garantit que le site fonctionnera partout de la même façon.'
    },
    'Lighthouse': {
      technical: 'Outil d\'audit pour mesurer et améliorer objectivement les performances web et l\'impact environnemental.',
      simple: 'Un outil qui analyse votre site et suggère des améliorations pour le rendre plus rapide et plus écologique.'
    },
    'Accessibilité': {
      technical: 'Conception d\'interfaces compatibles avec tous les appareils, navigateurs et modes d\'utilisation.',
      simple: 'Rendre le site utilisable par tous, y compris les personnes handicapées.'
    },
    'Performance & Éco-conception': {
      technical: 'Un site performant est par nature éco-conçu : moins de ressources consommées, moins d\'énergie gaspillée.',
      simple: 'Du web durable : un site rapide et efficace consomme moins d\'énergie et est valorisé par Google.'
    },
    'UX/UI': {
      technical: 'Interfaces intuitives répondant aux besoins réels. Réduit les frictions et améliore l\'engagement.',
      simple: 'Concevoir des sites faciles et agréables à utiliser, qui répondent aux besoins des visiteurs.'
    },
  },
  en: {
    'Astro': {
      technical: 'Framework-agnostic web builder generating mostly static HTML, excellent natural SEO and optimal performance.',
      simple: 'A tool that creates fast websites easily found on Google, without forcing any particular technology.'
    },
    'CSS Pro': {
      technical: 'Advanced CSS techniques for responsive design and smooth animations, reducing reliance on resource-intensive JavaScript.',
      simple: 'Techniques for creating websites that adapt to all screens with smooth, lightweight animations.'
    },
    'TypeScript': {
      technical: 'Typed superset of JavaScript for more robust and maintainable code, reducing errors and technical debt.',
      simple: 'An improved version of JavaScript that helps prevent bugs and makes teamwork easier.'
    },
    'HTMX': {
      technical: 'Ultra-lightweight library (~14kb) adding AJAX and WebSocket capabilities directly to HTML.',
      simple: 'A small tool that makes web pages interactive without making the site heavier.'
    },
    'Tailwind': {
      technical: 'Utility CSS framework facilitating collaborative work and responsive design. CSS purging guarantees ultra-optimized stylesheets.',
      simple: 'System that quickly creates designs adapted to all screens, while keeping the site lightweight.'
    },
    'Astro + Workers': {
      technical: 'Edge-first architecture: Astro for static/SSR rendering with API routes, complemented by Workers for edge-side business logic.',
      simple: 'Astro builds pages and creates routes for dormant agents (Workers) that wake up only when needed. More economical than a permanent server.'
    },
    'Supabase': {
      technical: 'Managed backend (CRUD, auth, storage). PostgreSQL + PostgREST auto-generating a REST API. Ideal for quick starts.',
      simple: 'A service that stores your data and manages user logins, without installing or maintaining a server.'
    },
    'Phoenix (Elixir)': {
      technical: 'Custom backend for interactive, real-time applications. LiveView eliminates client-side JavaScript. Handles thousands of simultaneous visitors.',
      simple: 'A complete server you fully control. Excellent for real-time features and thousands of simultaneous visitors.'
    },
    'PostgreSQL': {
      technical: 'Powerful open-source relational DBMS with an almost infinite extension ecosystem.',
      simple: 'A reliable and versatile database that stores your information in an organized and secure way.'
    },
    'PostgREST': {
      technical: 'Instantly transforms a Postgres DB into a REST API. Can bypass backend entirely in some cases.',
      simple: 'A tool that provides easy and secure access to stored data without writing a lot of code.'
    },
    'MongoDB': {
      technical: 'NoSQL document database enabling data flexibility and adaptable schemas.',
      simple: 'A flexible database that easily adapts to changes and stores various information types.'
    },
    'Git': {
      technical: 'Essential for collaborative development, clear change tracking and simultaneous contributions.',
      simple: 'A system that allows multiple people to work on the same project without conflict.'
    },
    'Docker': {
      technical: 'Perfect environment reproducibility. Docker Compose for orchestration, Swarm for scalable deployment.',
      simple: 'A tool that ensures the site will work the same way everywhere.'
    },
    'Lighthouse': {
      technical: 'Essential audit tool for objectively measuring web performance and environmental impact.',
      simple: 'A tool that analyzes your site and suggests improvements to make it faster and greener.'
    },
    'Accessibility': {
      technical: 'Designing interfaces compatible with all devices, browsers and usage modes.',
      simple: 'Making the site usable by everyone, including people with disabilities.'
    },
    'Performance & Eco-design': {
      technical: 'A performant site is inherently eco-designed: less resources consumed, less energy wasted.',
      simple: 'Sustainable web: a fast and efficient site consumes less energy and is valued by search engines.'
    },
    'UX/UI': {
      technical: 'Intuitive interfaces meeting actual user needs. Reduces friction and improves engagement.',
      simple: 'Designing sites that are easy and pleasant to use, genuinely meeting visitor needs.'
    },
  },
  de: {
    'Astro': {
      technical: 'Framework-agnostisches Web-Tool, das überwiegend statisches HTML generiert. Hervorragende SEO und optimale Leistung.',
      simple: 'Ein Werkzeug, das schnelle Websites erstellt, die leicht auf Google zu finden sind.'
    },
    'CSS Pro': {
      technical: 'Fortgeschrittene CSS-Techniken für responsive Designs und flüssige Animationen.',
      simple: 'Techniken zur Erstellung von Websites, die sich an alle Bildschirme anpassen.'
    },
    'TypeScript': {
      technical: 'Typisierte Erweiterung von JavaScript für robusteren und wartbaren Code.',
      simple: 'Eine verbesserte Version von JavaScript, die Fehler vermeidet und Teamarbeit erleichtert.'
    },
    'HTMX': {
      technical: 'Ultraleichte Bibliothek (~14kb) für AJAX- und WebSocket-Funktionen direkt im HTML.',
      simple: 'Ein kleines Werkzeug, das Webseiten interaktiv macht, ohne die Website zu belasten.'
    },
    'Tailwind': {
      technical: 'Utility-CSS-Framework für Zusammenarbeit und Responsive-Design. CSS-Bereinigung garantiert optimierte Stylesheets.',
      simple: 'System für schnelle, bildschirmangepasste Designs bei leichter Website.'
    },
    'Astro + Workers': {
      technical: 'Edge-First-Architektur: Astro für statisches/SSR-Rendering, Workers für Edge-seitige Geschäftslogik.',
      simple: 'Astro erstellt Seiten, schlafende Agenten (Workers) wachen nur bei Bedarf auf. Wirtschaftlicher als ein Dauerserver.'
    },
    'Supabase': {
      technical: 'Verwaltetes Backend (CRUD, Auth, Storage). PostgreSQL + PostgREST für automatische REST-API.',
      simple: 'Ein Service, der Ihre Daten speichert und Benutzeranmeldungen verwaltet, ohne Server.'
    },
    'Phoenix (Elixir)': {
      technical: 'Custom-Backend für interaktive Echtzeit-Anwendungen. LiveView eliminiert clientseitiges JavaScript.',
      simple: 'Ein vollständiger Server. Hervorragend für Echtzeit und Tausende gleichzeitiger Besucher.'
    },
    'PostgreSQL': {
      technical: 'Leistungsstarkes Open-Source-DBMS mit nahezu unendlichem Erweiterungs-Ökosystem.',
      simple: 'Eine zuverlässige Datenbank, die Ihre Informationen organisiert und sicher speichert.'
    },
    'PostgREST': {
      technical: 'Verwandelt eine Postgres-DB sofort in eine REST-API. Kann Backend teils ersetzen.',
      simple: 'Ein Werkzeug für einfachen und sicheren Zugriff auf gespeicherte Daten.'
    },
    'MongoDB': {
      technical: 'NoSQL-Dokumentendatenbank für flexible Schemas.',
      simple: 'Eine flexible Datenbank, die sich leicht an Änderungen anpasst.'
    },
    'Git': {
      technical: 'Unerlässlich für kollaborative Entwicklung. Klare Änderungsverfolgung.',
      simple: 'Ein System für konfliktfreie Zusammenarbeit am selben Projekt.'
    },
    'Docker': {
      technical: 'Perfekte Reproduzierbarkeit von Entwicklungsumgebungen. Compose und Swarm für Orchestrierung.',
      simple: 'Ein Werkzeug, das sicherstellt, dass die Website überall gleich funktioniert.'
    },
    'Lighthouse': {
      technical: 'Audit-Tool für objektive Messung von Webleistung und Umweltauswirkungen.',
      simple: 'Ein Werkzeug, das Ihre Website analysiert und Verbesserungsvorschläge macht.'
    },
    'Barrierefreiheit': {
      technical: 'Gestaltung kompatibler Schnittstellen für alle Geräte und Nutzungsmodi.',
      simple: 'Die Website für alle nutzbar machen, einschließlich Menschen mit Behinderungen.'
    },
    'Performance & Öko-Design': {
      technical: 'Eine performante Website ist von Natur aus öko-designt: weniger Ressourcen, weniger Energie.',
      simple: 'Nachhaltiges Web: schnell und effizient = weniger Energieverbrauch.'
    },
    'UX/UI': {
      technical: 'Intuitive Schnittstellen für tatsächliche Benutzerbedürfnisse.',
      simple: 'Websites, die einfach und angenehm zu benutzen sind.'
    },
  },
};

/**
 * Récupère la description simple d'une compétence
 */
export function getSimpleDescription(skill: string, lang: Lang): string {
  return skillDescriptions[lang]?.[skill]?.simple || '';
}

/**
 * Récupère la description technique d'une compétence
 */
export function getDescription(skill: string, lang: Lang): { technical: string; simple: string } {
  return skillDescriptions[lang]?.[skill] || { technical: '', simple: '' };
}
