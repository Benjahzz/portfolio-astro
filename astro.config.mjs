// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio-astro-kohl-nu.vercel.app/",
  base: "/",
  experimental: {
    svg: true,
  },
  build: {
    inlineStylesheets: 'auto'
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
