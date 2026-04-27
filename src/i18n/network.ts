// src/i18n/network.ts
import type { Lang } from './index';

export const network = {
  fr: {
    title: 'Josselin HANEL - Mon réseau',
    description: 'Voici les personnes de talent que je peux vous recommander pour des besoins spécifiques.',
    networkTitle: 'Mon réseau',
    networkIntro: "Je connais ces professionnels talentueux et peux vous les recommander si votre projet nécessite des compétences spécifiques. N'hésitez pas à me contacter pour en savoir plus.",
    viewWork: 'Voir le travail',
    contactCTA: 'Votre projet a besoin de compétences particulières ?',
    contactButton: 'Parlons-en',
  },
  en: {
    title: 'Josselin HANEL - My professional network',
    description: 'Discover my network of professional collaborators and talents I work with regularly.',
    networkTitle: 'My professional network',
    networkIntro: "Here are the talented professionals I team up well with. Feel free to contact me to establish connections.",
    viewWork: 'View work',
    contactCTA: "Does your project's setup require a separation of responsibilities?",
    contactButton: "Let's discuss",
  },
  de: {
    title: 'Josselin HANEL - Mein berufliches Netzwerk',
    description: 'Entdecken Sie mein Netzwerk von professionellen Mitarbeitern und Talenten.',
    networkTitle: 'Mein berufliches Netzwerk',
    networkIntro: 'Hier sind die talentierten Fachleute, mit denen ich ein gutes Team bilde. Kontaktieren Sie mich gerne.',
    viewWork: 'Arbeit ansehen',
    contactCTA: 'Benötigt Ihr Projekt eine Aufteilung der Verantwortlichkeiten?',
    contactButton: 'Lassen Sie uns darüber sprechen',
  },
} satisfies Record<Lang, any>;
