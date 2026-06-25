import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://www.maudebaudier.com',
  // Le site est 100% statique : Astro génère du HTML pur dans /dist
  build: {
    format: 'directory',
  },
});
