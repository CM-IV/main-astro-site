import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://home.civdev.xyz/',
	experimental: {
		assets: true
	},
	integrations: [mdx({
		remarkPlugins: [remarkMath],
      	rehypePlugins: [rehypeKatex]
	}), sitemap()],
});
