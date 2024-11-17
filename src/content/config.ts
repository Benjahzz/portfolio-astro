import { defineCollection, z } from 'astro:content';

export const collections = {
	works: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			dateEntry: z.coerce.date(),
			date: z.string(),
			description: z.string(),
			position: z.string(),
			usedTools: z.array(z.string()),
			color: z.string(),
			companyLink: z.string(),
		}),
	}),
};
