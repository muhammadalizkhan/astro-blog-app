// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore
import vercel from '@astrojs/vercel/server';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({
      // @ts-ignore
      config: {
        applyBaseStyles: true
      }
    })
  ]
});
