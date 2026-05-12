import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://luko248.github.io',
  base: '/web-science-demo/',
  vite: {
    plugins: [tailwindcss()],
  },
});
