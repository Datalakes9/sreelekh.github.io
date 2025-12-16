import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

// --- Deployment Variables to Customize ---

// ⚠️ CRITICAL: Set your full, live deployment URL for absolute paths (sitemaps, RSS).
// Example: 'https://username.github.io/' or 'https://username.github.io/repo-name/'
const SITE_URL = 'https://sreelekh.guggilam.github.io/'; 

// ⚠️ CRITICAL: Set the base path for GitHub Pages subdirectories (your repo name).
// Must start and end with a slash.
// Example: '/my-portfolio-repo/'
const REPO_BASE_PATH = '/sreelekha.guggilam.github.io/'; 

// --- Configuration ---

export default defineConfig({
  // 1. DEPLOYMENT SETTINGS
  site: SITE_URL,
  base: REPO_BASE_PATH,
  
  // Necessary for deploying a static site to GitHub Pages
  output: 'static',
  
  // 2. INTEGRATIONS
  integrations: [
    // Enables Tailwind CSS and Daisy UI
    tailwind(), 
    
    // Enables the Astro Image component and asset optimization
    image({
      serviceEntryPoint: '@astrojs/image/sharp', 
    }),
  ],
  
  // 3. PATH ALIASES (for imports like '@/settings')
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
  
  // 4. VIEW TRANSITIONS
  // View Transitions are configured in src/layouts/Layout.astro and do not require 
  // a separate entry here, but are automatically enabled when the component is used.
});