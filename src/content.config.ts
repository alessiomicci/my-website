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
		websiteUrl: z.union([z.string().url(), z.literal('')]).default(''),
		githubUrl: z.union([z.string().url(), z.literal('')]).default(''),
		appStoreUrl: z.union([z.string().url(), z.literal('')]).default(''),
		playStoreUrl: z.union([z.string().url(), z.literal('')]).default(''),
	}),
});

export const collections = { projects };
