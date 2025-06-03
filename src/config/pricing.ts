// src/config/pricing.ts

// Types pour une meilleure sécurité de type
export type Lang = 'fr' | 'en' | 'de';

export interface PackageFeatures {
  fr: string[];
  en: string[];
  de: string[];
}

export interface PackageConfig {
  price: number;
  features: PackageFeatures;
}

export interface OptionDescriptions {
  fr: string;
  en: string;
  de: string;
}

export interface AdditionalOptionConfig {
  price: number;
  descriptions: OptionDescriptions;
}

export interface FormattedPackage {
  title: string;
  price: string;
  features: string[];
}

export interface FormattedOption {
  title: string;
  price: string;
  description: string;
  priceValue: number;
}

// Configuration centralisée des prix et packages
export const PRICING_CONFIG = {
  // Prix des packages (en euros, sans symbole)
  packages: {
    basic: {
      price: 250,
      features: {
        fr: [
          "Une page complète qui présente votre activité",
          "Coordonnées & formulaire de contact", 
          "Animations pour attirer l'attention",
          "Idéal pour les petites entreprises ou artisans"
        ],
        en: [
          "An effective and complete showcase page",
          "Presentation of your business",
          "Contact details & contact form", 
          "Animations to highlight your strengths",
          "Ideal for small structures"
        ],
        de: [
          "Eine effektive und vollständige Präsentationsseite",
          "Darstellung Ihrer Geschäftstätigkeit",
          "Kontaktdaten & Kontaktformular",
          "Animationen zur Hervorhebung Ihrer Stärken",
          "Ideal für kleine Strukturen"
        ]
      }
    },
    standard: {
      price: 500,
      features: {
        fr: [
          "Jusqu'à 3 pages (ex. : Accueil, À propos, Contact)",
          "Formulaire de contact avec envoi de fichiers",
          "Effets visuels modernes", 
          "Navigation fluide sur mobile et ordinateur"
        ],
        en: [
          "Up to 3 pages (e.g.: Home, About, Contact)",
          "Contact form with file upload capability",
          "Modern animations and interface effects",
          "Smooth transitions, visual feedback on actions",
          "Fluid navigation on mobile & desktop"
        ],
        de: [
          "Bis zu 3 Seiten (z.B.: Startseite, Über uns, Kontakt)",
          "Kontaktformular mit Datei-Upload-Funktion", 
          "Moderne Animationen und Schnittstelleneffekte",
          "Sanfte Übergänge, visuelle Rückmeldung bei Aktionen",
          "Flüssige Navigation auf Mobilgeräten & Desktop"
        ]
      }
    },
    premium: {
      price: 800,
      features: {
        fr: [
          "Jusqu'à 6 pages ou sections",
          "Design sur-mesure selon vos goûts",
          "Animations avancées",
          "Expérience utilisateur optimale"
        ],
        en: [
          "Up to 6 pages or distinct sections", 
          "Unlimited custom design",
          "Advanced animations: scroll appearance, parallax",
          "Dynamic transitions and subtle interactions",
          "Optimized user experience"
        ],
        de: [
          "Bis zu 6 Seiten oder verschiedene Abschnitte",
          "Unbegrenztes individuelles Design",
          "Fortgeschrittene Animationen: Scroll-Erscheinung, Parallaxe", 
          "Dynamische Übergänge und subtile Interaktionen",
          "Optimierte Benutzererfahrung"
        ]
      }
    }
  },

  // Prix des options additionnelles
  additionalOptions: {
    multilingual: {
      price: 200,
      descriptions: {
        fr: "Ajout de 2 langues (anglais, allemand...) avec un bouton pour passer de l'une à l'autre",
        en: "Up to 2 additional languages with manual selector or automatic detection", 
        de: "Bis zu 2 zusätzliche Sprachen mit manuellem Selektor oder automatischer Erkennung"
      }
    },
    cms: {
      price: 300,
      descriptions: {
        fr: "Un espace /admin pour changer vos textes et images sans toucher au code",
        en: "Integrated /admin interface to modify your texts and images easily without coding",
        de: "Integrierte /admin-Oberfläche zum einfachen Ändern Ihrer Texte und Bilder ohne Programmierung"
      }
    },
    googleSheets: {
      price: 150,
      descriptions: {
        fr: "Modifiez facilement vos textes, tarifs ou horaires directement dans un tableau Google",
        en: "Simple editing via a Google spreadsheet to modify descriptions, prices, schedules",
        de: "Einfache Bearbeitung über eine Google-Tabelle zur Änderung von Beschreibungen, Preisen, Zeitplänen"
      }
    },
    training: {
      price: 50,
      descriptions: {
        fr: "Je vous montre comment modifier vous-même les textes et images de votre site",
        en: "1-hour video training to learn how to modify texts and images yourself",
        de: "1-stündige Videokonferenz-Schulung, um zu lernen, wie Sie Texte und Bilder selbst ändern können"
      }
    },
    analytics: {
      price: 100,
      descriptions: {
        fr: "Savoir combien de personnes visitent votre site et d'où elles viennent, sans traquer vos visiteurs",
        en: "GDPR-friendly traffic tracking with a clear and accessible dashboard",
        de: "DSGVO-freundliches Traffic-Tracking mit einem übersichtlichen und zugänglichen Dashboard"
      }
    }
  },

  // Ce qui est inclus dans tous les packages
  includedFeatures: {
    fr: [
      "S'affiche bien sur tous les appareils (mobile, tablette, PC)",
      "Design moderne et facile à utiliser",
      "Bien placé sur Google", 
      "Chargement rapide",
      "Hébergement gratuit à vie via Cloudflare Pages",
      "Code source livré (vous en êtes propriétaire)",
      "Support technique d'1 mois après livraison"
    ],
    en: [
      "Responsive website (mobile, tablet, desktop)",
      "Modern and accessible design",
      "Optimized natural SEO",
      "Maximum performance (fast loading)",
      "Free lifetime hosting via Cloudflare Pages", 
      "Delivered source code (GitHub or archive)",
      "1 month technical support after delivery"
    ],
    de: [
      "Responsive Website (Mobilgeräte, Tablets, Computer)",
      "Modernes und zugängliches Design",
      "Optimiertes natürliches SEO",
      "Maximale Leistung (schnelles Laden)",
      "Kostenloses lebenslanges Hosting über Cloudflare Pages",
      "Gelieferter Quellcode (GitHub oder Archiv)",
      "1 Monat technischer Support nach Lieferung"
    ]
  }
};

// Type pour les clés de packages
export type PackageKey = keyof typeof PRICING_CONFIG.packages;

// Type pour les clés d'options
export type OptionKey = keyof typeof PRICING_CONFIG.additionalOptions;

// Fonction helper pour obtenir les packages formatés pour une langue donnée
export function getPackagesForLang(lang: Lang): Record<PackageKey, FormattedPackage> {
  const packages = {} as Record<PackageKey, FormattedPackage>;
  
  for (const [key, packageData] of Object.entries(PRICING_CONFIG.packages)) {
    packages[key as PackageKey] = {
      title: getPackageTitle(key as PackageKey, lang),
      price: formatPrice(packageData.price, lang),
      features: packageData.features[lang] || packageData.features.fr
    };
  }
  
  return packages;
}

// Fonction helper pour obtenir les options additionnelles formatées
export function getAdditionalOptionsForLang(lang: Lang): FormattedOption[] {
  const options: FormattedOption[] = [];
  
  for (const [key, optionData] of Object.entries(PRICING_CONFIG.additionalOptions)) {
    options.push({
      title: getOptionTitle(key as OptionKey, lang),
      price: formatPrice(optionData.price, lang),
      description: optionData.descriptions[lang] || optionData.descriptions.fr,
      priceValue: optionData.price // Pour les calculs JS
    });
  }
  
  return options;
}

// Fonction helper pour obtenir les fonctionnalités incluses
export function getIncludedFeaturesForLang(lang: Lang): string[] {
  return PRICING_CONFIG.includedFeatures[lang] || PRICING_CONFIG.includedFeatures.fr;
}

// Fonction pour formater les prix selon la langue
function formatPrice(price: number, lang: Lang): string {
  switch (lang) {
    case 'en':
      return `€${price}`;
    case 'de': 
      return `${price} €`;
    case 'fr':
    default:
      return `${price} €`;
  }
}

// Fonction pour obtenir le titre des packages selon la langue
function getPackageTitle(packageKey: PackageKey, lang: Lang): string {
  const titles: Record<PackageKey, Record<Lang, string>> = {
    basic: {
      fr: "Site Une Page",
      en: "One-Page Website", 
      de: "Einseitige Website"
    },
    standard: {
      fr: "Site Multi-pages",
      en: "Multi-page Website",
      de: "Mehrseitige Website"
    },
    premium: {
      fr: "Site Avancé", 
      en: "Premium Website",
      de: "Premium-Website"
    }
  };
  
  return titles[packageKey][lang] || titles[packageKey].fr;
}

// Fonction pour obtenir le titre des options selon la langue
function getOptionTitle(optionKey: OptionKey, lang: Lang): string {
  const titles: Record<OptionKey, Record<Lang, string>> = {
    multilingual: {
      fr: "Site en plusieurs langues",
      en: "Multilingual site",
      de: "Mehrsprachige Website"
    },
    cms: {
      fr: "Interface pour modifier vos contenus", 
      en: "Management via graphical interface",
      de: "Verwaltung über grafische Oberfläche"
    },
    googleSheets: {
      fr: "Gestion via tableaux (Google Sheets)",
      en: "Management via spreadsheets (Google Sheets)",
      de: "Verwaltung über Tabellen (Google Sheets)"
    },
    training: {
      fr: "Formation simple d'1h",
      en: "Markdown training", 
      de: "Markdown-Schulung"
    },
    analytics: {
      fr: "Statistiques de visites sans cookies",
      en: "Detailed cookie-free statistics",
      de: "Detaillierte Cookie-freie Statistiken"
    }
  };
  
  return titles[optionKey][lang] || titles[optionKey].fr;
}

// Fonction utilitaire pour obtenir les prix bruts pour les calculs JavaScript
export function getPricesForJS(): Record<string, number> {
  const prices: Record<string, number> = {
    basic: PRICING_CONFIG.packages.basic.price,
    standard: PRICING_CONFIG.packages.standard.price,
    premium: PRICING_CONFIG.packages.premium.price,
    not_sure: 0
  };

  // Ajouter les prix des options
  Object.entries(PRICING_CONFIG.additionalOptions).forEach(([key, option], index) => {
    prices[`option_${index}`] = option.price;
  });

  return prices;
}