// src/i18n/index.ts
// Système i18n simple et typé pour le portfolio

export type Lang = 'fr' | 'en' | 'de';
export const LANGS: Lang[] = ['fr', 'en', 'de'];

/**
 * Récupère les traductions pour une langue donnée depuis un objet de traductions.
 * Usage dans une page Astro :
 * 
 *   import { t } from '../../i18n';
 *   import { homeTranslations } from '../../i18n/home';
 *   const text = t(homeTranslations, lang);
 *   // text.heroTitle, text.values, etc.
 */
export function t<T>(translations: Record<Lang, T>, lang: Lang | string): T {
  return translations[lang as Lang] ?? translations.fr;
}

/**
 * Helper pour générer les getStaticPaths multilingues
 */
export function getLangPaths() {
  return LANGS.map(lang => ({ params: { lang } }));
}

/**
 * Extrait la langue courante depuis un pathname
 */
export function getLangFromPath(pathname: string): Lang {
  const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
  return (match?.[1] as Lang) || 'fr';
}
