import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
    extendPlugins: 'astroDefaults'
  })],
  site: import.meta.site,
});