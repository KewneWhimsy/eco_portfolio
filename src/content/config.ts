// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.record(z.string()),
    description: z.record(z.string()),
    slug: z.string(),
    year: z.number(),
    featured: z.boolean().default(false),
    tech: z.array(z.string()),
    images: z.object({
      hero: z.string(),
      gallery: z.array(z.string()).optional(),
    }),
    links: z.object({
      website: z.string().url().optional(),
      github: z.string().url().optional(),
      githubFrontend: z.string().url().optional(),
      githubBackend: z.string().url().optional(),
    }).optional(),
    collaborators: z.array(z.object({
      name: z.string(),
      role: z.record(z.string()),
      url: z.string().url().optional(),
    })).optional(),
    order: z.number(),
    status: z.enum(['completed', 'in-progress', 'on-hold']).default('completed'),
  }),
});

export const collections = {
  projects: projectsCollection,
};