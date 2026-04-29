// src/i18n/legal.ts
import type { Lang } from './index';

export const legal = {
  fr: {
    title: 'Mentions Légales - Josselin HANEL',
    description: 'Mentions légales du site portfolio de Josselin HANEL, conformément à la loi LCEN.',
    pageTitle: 'Mentions Légales',
    lastUpdated: 'Dernière mise à jour : Avril 2025',
    editor: {
      title: 'Éditeur du site',
      labels: { name: 'Nom', status: 'Statut', siret: 'SIRET', address: 'Adresse', phone: 'Téléphone', email: 'E-mail' },
      statusValue: 'Auto-entrepreneur',
    },
    publication: { title: 'Directeur de la publication' },
    hosting: {
      title: 'Hébergeur',
      labels: { company: 'Société', address: 'Adresse', website: 'Site web' },
    },
    intellectual: {
      title: 'Propriété intellectuelle',
      content: "L'ensemble du contenu de ce site (textes, images, code) est la propriété exclusive de Josselin HANEL, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
    },
    liability: {
      title: 'Limitation de responsabilité',
      content: "Josselin HANEL s'efforce d'assurer l'exactitude des informations publiées mais ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus par un usage inapproprié de ces informations.",
    },
    privacyLink: 'Consulter la politique de confidentialité',
    backLink: "Retour à l'accueil",
  },
  en: {
    title: 'Legal Notice - Josselin HANEL',
    description: "Legal notice for Josselin HANEL's portfolio website (required under French law LCEN).",
    pageTitle: 'Legal Notice',
    lastUpdated: 'Last updated: April 2025',
    editor: {
      title: 'Website publisher',
      labels: { name: 'Name', status: 'Status', siret: 'SIRET', address: 'Address', phone: 'Phone', email: 'Email' },
      statusValue: 'Sole trader (Auto-entrepreneur)',
    },
    publication: { title: 'Publication director' },
    hosting: {
      title: 'Hosting provider',
      labels: { company: 'Company', address: 'Address', website: 'Website' },
    },
    intellectual: {
      title: 'Intellectual property',
      content: 'All content on this site (text, images, code) is the exclusive property of Josselin HANEL unless otherwise stated. Any reproduction, even partial, is prohibited without prior authorisation.',
    },
    liability: {
      title: 'Limitation of liability',
      content: 'Josselin HANEL strives to ensure the accuracy of the information published but cannot be held responsible for errors, omissions or results obtained from inappropriate use of this information.',
    },
    privacyLink: 'View privacy policy',
    backLink: 'Back to home',
  },
  de: {
    title: 'Impressum - Josselin HANEL',
    description: 'Impressum der Portfolio-Website von Josselin HANEL (gemäß französischem LCEN-Gesetz erforderlich).',
    pageTitle: 'Impressum',
    lastUpdated: 'Letzte Aktualisierung: April 2025',
    editor: {
      title: 'Websitebetreiber',
      labels: { name: 'Name', status: 'Status', siret: 'SIRET', address: 'Adresse', phone: 'Telefon', email: 'E-Mail' },
      statusValue: 'Einzelunternehmer (Auto-entrepreneur)',
    },
    publication: { title: 'Verantwortlicher' },
    hosting: {
      title: 'Hosting-Anbieter',
      labels: { company: 'Unternehmen', address: 'Adresse', website: 'Website' },
    },
    intellectual: {
      title: 'Geistiges Eigentum',
      content: 'Alle Inhalte dieser Website (Texte, Bilder, Code) sind ausschließliches Eigentum von Josselin HANEL, sofern nicht anders angegeben. Jede Vervielfältigung, auch auszugsweise, ist ohne vorherige Genehmigung untersagt.',
    },
    liability: {
      title: 'Haftungsausschluss',
      content: 'Josselin HANEL bemüht sich um die Richtigkeit der veröffentlichten Informationen, kann jedoch nicht für Fehler, Auslassungen oder Ergebnisse aus einer unangemessenen Verwendung dieser Informationen haftbar gemacht werden.',
    },
    privacyLink: 'Datenschutzerklärung ansehen',
    backLink: 'Zurück zur Startseite',
  },
} satisfies Record<Lang, any>;
