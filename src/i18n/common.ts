// src/i18n/common.ts
import type { Lang } from './index';

export const nav = {
  fr: {
    projects: 'Projets',
    about: 'Qui suis-je ?',
    services: 'Services & Tarifs',
    network: 'Réseau',
    contact: 'Contact',
    blog: 'Blog',
  },
  en: {
    projects: 'Projects',
    about: 'Skills',
    services: 'Services & Pricing',
    network: 'Network',
    contact: 'Contact',
    blog: 'Blog',
  },
  de: {
    projects: 'Projekte',
    about: 'Über mich',
    services: 'Leistungen & Preise',
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
  },
  en: {
    contactButton: 'Contact me',
    ctaTitle: 'Have a project in mind?',
    ctaText: 'Feel free to contact me for a free quote with no obligation.',
    phone: '+33 7 81 33 97 68',
  },
  de: {
    contactButton: 'Kontakt',
    ctaTitle: 'Ein Projekt im Sinn?',
    ctaText: 'Kontaktieren Sie mich gerne für ein kostenloses, unverbindliches Angebot.',
    phone: '+33 7 81 33 97 68',
  },
} satisfies Record<Lang, Record<string, string>>;

export const ecoMode = {
  fr: {
    toggleLabel: 'Mode Éco',
    toggleLabelStandard: 'Mode Standard',
    infoTitle: 'Mode Éco activé',
    infoText: 'Cette version allégée de mon site :',
    infoFeatures: [
      'Pèse moins de 50 Ko par page (contre 2-5 Mo pour un site normal)',
      "Consomme 90% moins d'énergie qu'un site classique",
      'Fonctionne avec très peu de code (3 Ko contre 500+ Ko habituels)',
      "S'affiche quasi instantanément, même avec une mauvaise connexion",
    ],
    infoExplanation: "Ce mode allégé facilite l'accès au site même avec un vieil ordinateur ou une connexion lente.",
  },
  en: {
    toggleLabel: 'Eco Mode',
    toggleLabelStandard: 'Standard Mode',
    infoTitle: 'Eco Mode activated',
    infoText: 'This lightweight version of my website:',
    infoFeatures: [
      'Weighs less than 50 KB per page (vs 2-5 MB for a typical site)',
      'Uses 90% less energy than a standard website',
      'Works with minimal code (only 3 KB vs typical 500+ KB)',
      'Loads almost instantly, even with poor internet',
    ],
    infoExplanation: 'This lightweight mode works well even with old computers or slow connections.',
  },
  de: {
    toggleLabel: 'Öko-Modus',
    toggleLabelStandard: 'Standard-Modus',
    infoTitle: 'Öko-Modus aktiviert',
    infoText: 'Diese abgespeckte Version meiner Website:',
    infoFeatures: [
      'Wiegt weniger als 50 KB pro Seite (im Vergleich zu 2-5 MB)',
      'Verbraucht 90% weniger Energie als eine Standard-Website',
      'Funktioniert mit minimalem Code (nur 3 KB gegenüber üblichen 500+ KB)',
      'Lädt fast sofort, selbst bei schlechtem Internet',
    ],
    infoExplanation: 'Dieser abgespeckte Modus funktioniert auch mit alten Computern oder langsamen Verbindungen.',
  },
} satisfies Record<Lang, any>;
