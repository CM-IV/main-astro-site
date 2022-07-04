import { defineConfig } from 'astro/config';
import image from '@astrojs/image';


// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  site: import.meta.site,
  markdown: {
    remarkPlugins: [
      "remark-gfm",
      "remark-smartypants",
      "remark-math"
    ],
    rehypePlugins: [
      "rehype-katex"
    ]
  }
});