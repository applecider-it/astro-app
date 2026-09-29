// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap'

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4322',

  integrations: [sitemap(), vue()],
});