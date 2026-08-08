import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		role: z.string(),
		order: z.number(),
		date: z.coerce.date(),
		stack: z.array(z.string()),
		problem: z.string(),
		solution: z.string(),
		impact: z.array(z.string()),
		featured: z.boolean().default(true),
	}),
});

export const collections = { projects };
