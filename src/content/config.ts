import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    timeSpent: z.string(),
    date: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog,
}; 