import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(),
    mdx({
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkMath],
      extendPlugins: 'astroDefaults'
    })
  ],
  site: import.meta.site,
});