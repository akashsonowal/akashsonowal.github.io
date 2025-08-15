import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://akashsonowal.github.io',
  integrations: [tailwind()]
});
