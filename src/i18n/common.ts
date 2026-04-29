// src/i18n/common.ts
import type { Lang } from './index';

export const nav = {
  fr: {
    projects: 'Projets',
    about: 'Qui suis-je ?',
    services: 'Offres',
    network: 'Réseau',
    contact: 'Contact',
    blog: 'Blog',
  },
  en: {
    projects: 'Projects',
    about: 'Skills',
    services: 'Offers',
    network: 'Network',
    contact: 'Contact',
    blog: 'Blog',
  },
  de: {
    projects: 'Projekte',
    about: 'Über mich',
    services: 'Angebote',
    network: 'Netzwerk',
    contact: 'Kontakt',
    blog: 'Blog',
  },
} satisfies Record<Lang, Record<string, string>>;

export const footer = {
  fr: {
    copyright: 'Josselin HANEL - Développeur Web Full Stack',
    ecoDesignDesc: "Ce site a été conçu avec une approche d'éco-conception pour minimiser son impact environnemental.",
    availability: 'Disponibilité',
    locations: 'Quimper · Rennes · Paris · Berlin · Télétravail',
    privacyPolicy: 'Politique de confidentialité',
  },
  en: {
    copyright: 'Josselin HANEL - Full Stack Web Developer',
    ecoDesignDesc: 'This site was designed with an eco-design approach to minimize its environmental impact.',
    availability: 'Availability',
    locations: 'Quimper · Rennes · Paris · Berlin · Remote',
    privacyPolicy: 'Privacy Policy',
  },
  de: {
    copyright: 'Josselin HANEL - Full-Stack Webentwickler',
    ecoDesignDesc: 'Diese Website wurde mit einem Öko-Design-Ansatz entwickelt, um ihre Umweltauswirkungen zu minimieren.',
    availability: 'Verfügbarkeit',
    locations: 'Quimper · Rennes · Paris · Berlin · Remote',
    privacyPolicy: 'Datenschutzerklärung',
  },
} satisfies Record<Lang, Record<string, string>>;

export const cta = {
  fr: {
    contactButton: 'Me contacter',
    ctaTitle: 'Un projet en tête ?',
    ctaText: "N'hésitez pas à me contacter pour un devis gratuit sans engagement.",
    phone: '+33 7 81 33 97 68',
    email: 'josshanel@gmail.com',
  },
  en: {
    contactButton: "Let's talk",
    ctaTitle: 'Have a project in mind?',
    ctaText: 'Feel free to contact me for a free quote with no obligation.',
    phone: '+33 7 81 33 97 68',
    email: 'josshanel@gmail.com',
  },
  de: {
    contactButton: 'Kontakt',
    ctaTitle: 'Ein Projekt im Sinn?',
    ctaText: 'Kontaktieren Sie mich gerne für ein kostenloses, unverbindliches Angebot.',
    phone: '+33 7 81 33 97 68',
    email: 'josshanel@gmail.com',
  },
} satisfies Record<Lang, Record<string, string>>;

export const ecoMode = {
  fr: {
    toggleLabel: 'Mode Éco',
    toggleLabelActive: 'Mode Éco activé',
    infoTitle: 'Mode Éco activé',
    infoDesc: "Une version alternative du site, optimisée pour les connexions lentes et la navigation mobile.",
  },
  en: {
    toggleLabel: 'Eco Mode',
    toggleLabelActive: 'Eco Mode on',
    infoTitle: 'Eco Mode on',
    infoDesc: 'An alternative version of the site, optimised for slow connections and on-the-go browsing.',
  },
  de: {
    toggleLabel: 'Öko-Modus',
    toggleLabelActive: 'Öko-Modus aktiv',
    infoTitle: 'Öko-Modus aktiv',
    infoDesc: 'Eine alternative Version der Website, optimiert für langsame Verbindungen und mobiles Surfen.',
  },
} satisfies Record<Lang, any>;
