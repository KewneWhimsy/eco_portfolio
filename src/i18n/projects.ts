// src/i18n/projects.ts
import type { Lang } from './index';

export const projects = {
  fr: {
    title: 'Josselin HANEL - Projets',
    description: 'Découvrez mes projets de développement web : des sites et applications sur-mesure, construits sur les standards du web, avec le minimum de dépendances.',
    projectsTitle: 'Mes projets',
    projectsIntro: 'Voici une sélection de mes réalisations récentes. Tous les sites en ligne atteignent un score <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" class="text-link" title="Outil de mesure de performance Google">Lighthouse</a> de 90 à 100/100.',
    viewProject: 'Voir le projet',
    viewCode: 'Voir le code',
    visitSite: 'Visiter le site',
    year: 'Année',
    technologies: 'Technologies',
  },
  en: {
    title: 'Josselin HANEL - Projects',
    description: 'Discover my web development projects: custom-made sites and applications, built on web standards, with minimal dependencies.',
    projectsTitle: 'My projects',
    projectsIntro: 'Here is a selection of my recent work. All live sites achieve a <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" class="text-link" title="Google performance measurement tool">Lighthouse</a> score between 90 and 100/100.',
    viewProject: 'View project',
    viewCode: 'View code',
    visitSite: 'Visit website',
    year: 'Year',
    technologies: 'Technologies',
  },
  de: {
    title: 'Josselin HANEL - Projekte',
    description: 'Entdecken Sie meine Webentwicklungsprojekte: maßgeschneiderte Websites und Anwendungen, gebaut auf Web-Standards, mit minimalen Abhängigkeiten.',
    projectsTitle: 'Meine Projekte',
    projectsIntro: 'Hier ist eine Auswahl meiner neuesten Arbeiten. Alle meine Websites erreichen einen <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" class="text-link" title="Googles Performance-Messtool">Lighthouse</a> Score von 90 bis 100/100.',
    viewProject: 'Projekt ansehen',
    viewCode: 'Code ansehen',
    visitSite: 'Website besuchen',
    year: 'Jahr',
    technologies: 'Technologien',
  },
} satisfies Record<Lang, any>;
