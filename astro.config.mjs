import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.impulsebuenosaires.org',
  integrations: [tailwind(), sitemap()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  server: { host: true, port: 4321 },
  vite: {
    server: {
      host: true,
      allowedHosts: true,
      hmr: { clientPort: 443 },
    },
  },
});
