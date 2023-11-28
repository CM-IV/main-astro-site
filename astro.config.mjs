import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["ik.imagekit.io"],
  },
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  site: "https://home.civdev.xyz",
  integrations: [tailwind(), sitemap()],
});
