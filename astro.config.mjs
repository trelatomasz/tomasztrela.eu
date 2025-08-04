import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tomasztrela.eu',
  base: '/',
  build: {
    assets: 'static',
  },
}); 