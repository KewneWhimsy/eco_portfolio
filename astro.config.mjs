// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: 'https://jkw.ovh',

  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [],
  adapter: cloudflare()
});