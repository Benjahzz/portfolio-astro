// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://benjahzz.github.io/portfolio-astro/',
  base: '/portfolio-astro/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
