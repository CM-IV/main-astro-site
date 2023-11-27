import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  site: "https://home.civdev.xyz",
  integrations: [tailwind(), sitemap()],
});
