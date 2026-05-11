import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.impulsebuenosaires.org',
  integrations: [tailwind(), sitemap()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
