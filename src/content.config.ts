import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.string(), // academic year, e.g. "2026–27"
      tracks: z.array(z.enum(['EEG', 'EMG', 'ML', 'Hardware'])).default([]),
      summary: z.string(),
      status: z.enum(['proposed', 'active', 'complete']).default('complete'),
      kind: z.enum(['build', 'research']).default('build'),
      team: z.array(z.string()).default([]),
      github: z.string().optional(),
      image: image().optional(),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

const officers = defineCollection({
  loader: file('./src/content/officers.yaml'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    major: z.string().optional(),
    year: z.string().optional(),
    photo: z.string().optional(), // path under /public, e.g. /officers/jane.jpg
    linkedin: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects, news, officers };
