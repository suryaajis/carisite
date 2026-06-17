import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    publishDate: z.coerce.date(),
    image: z.string(),
  }),
})

const demo = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    demoUrl: z.string().url(),
    livePath: z.string().optional(), // internal route to a real in-site live demo
    features: z.array(z.string()).optional(),
  }),
})

export const collections = { articles, demo }
