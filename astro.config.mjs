import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const SITE_URL = 'https://sreelekha.guggilam.github.io/'; 
const REPO_BASE_PATH = '/'; 

export default defineConfig({
  site: SITE_URL,
  base: REPO_BASE_PATH,
  output: 'static',
  integrations: [
    tailwind(),
  ],
  // REMOVED the "image" block entirely as it is built-in now
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});