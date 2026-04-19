// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://leadershipseries.org',
  output: 'static',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
  adapter: cloudflare()
});