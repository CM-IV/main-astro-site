import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://home.civdev.xyz' || import.meta.env.site,
  integrations: [
    sitemap(),
    preact(),
    mdx({
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkMath],
      extendPlugins: 'astroDefaults'
    })
  ],
});