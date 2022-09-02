import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [image(), mdx({
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
    extendPlugins: 'astroDefaults'
  })],
  site: import.meta.site,
});