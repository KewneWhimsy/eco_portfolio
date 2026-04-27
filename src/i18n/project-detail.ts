// src/i18n/project-detail.ts
import type { Lang } from './index';

export const projectDetail = {
  fr: {
    allProjects: 'Tous les projets',
    nextProject: 'Projet suivant',
    prevProject: 'Projet précédent',
    visitSite: 'Visiter le site web',
    viewSourceCode: 'Voir le code source',
    viewFrontendCode: 'Repo Frontend',
    viewBackendCode: 'Repo Backend',
    techTitle: 'Technologies utilisées',
    collaboratorRole: 'En collaboration avec',
  },
  en: {
    allProjects: 'All projects',
    nextProject: 'Next project',
    prevProject: 'Previous project',
    visitSite: 'Visit the website',
    viewSourceCode: 'View source code',
    viewFrontendCode: 'Frontend Repo',
    viewBackendCode: 'Backend Repo',
    techTitle: 'Technologies used',
    collaboratorRole: 'In collaboration with',
  },
  de: {
    allProjects: 'Alle Projekte',
    nextProject: 'Nächstes Projekt',
    prevProject: 'Vorheriges Projekt',
    visitSite: 'Website besuchen',
    viewSourceCode: 'Quellcode ansehen',
    viewFrontendCode: 'Frontend Repo',
    viewBackendCode: 'Backend Repo',
    techTitle: 'Verwendete Technologien',
    collaboratorRole: 'In Zusammenarbeit mit',
  },
} satisfies Record<Lang, any>;
