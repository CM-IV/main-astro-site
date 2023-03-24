import { defineCollection, z } from 'astro:content';

const photos = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string().url(),
        author: z.string().default("CM-IV"),
        pubDate: z.string().transform(str => new Date(str)),
        draft: z.boolean()
    }),
})

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string().default("CM-IV"),
        pubDate: z.string().transform(str => new Date(str)),
        draft: z.boolean()
    }),
});

export const collections = { blog, photos };
