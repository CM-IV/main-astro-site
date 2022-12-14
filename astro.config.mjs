import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://home.civdev.xyz' || import.meta.env.site,
  markdown: {
    remarkPlugins: ["remark-gfm", "remark-smartypants", "remark-math"],
    rehypePlugins: ["rehype-katex"]
  },
  legacy: {
    astroFlavoredMarkdown: true
  },
  integrations: [
    sitemap()
  ],
});