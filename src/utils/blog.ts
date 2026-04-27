// src/utils/blog.ts — Helpers partagés pour le blog
import type { Lang } from '../i18n';

/**
 * Extrait le contenu markdown selon la langue (même pattern que les projets)
 */
export function getContentForLang(body: string, currentLang: string): string {
  if (!body || !body.includes('---lang:')) return body || '';
  const sections = body.split(/---lang:([a-z]{2})---/);
  if (currentLang === 'fr') return sections[0]?.trim() || '';
  for (let i = 1; i < sections.length; i += 2) {
    if (sections[i] === currentLang) return sections[i + 1]?.trim() || '';
  }
  return sections[0]?.trim() || '';
}

/**
 * Formate une date selon la locale
 */
export function formatDate(date: Date, lang: string): string {
  return date.toLocaleDateString(
    lang === 'fr' ? 'fr-FR' : lang === 'de' ? 'de-DE' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
}
