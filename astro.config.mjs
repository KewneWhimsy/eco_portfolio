// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: 'https://votredomaine.com', // Remplacez par votre domaine réel
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'fr',
      locales: {
        fr: 'fr-FR',
        en: 'en-US',
        de: 'de-DE'
      }
    }
  })]
});