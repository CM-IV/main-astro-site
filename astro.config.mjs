import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [image(), mdx({
    remarkPlugins: { extends: [remarkMath] },
    rehypePlugins: [rehypeKatex]
  })],
  site: import.meta.site,
  // markdown: {
  //   remarkPlugins: ["remark-gfm", "remark-smartypants", "remark-math"],
  //   rehypePlugins: ["rehype-katex"]
  // }
});