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
    status: z.enum(['Konsep / demo', 'Proyek internal', 'Proyek klien']).default('Konsep / demo'),
    accent: z.string().default('#103d2e'),
    year: z.number().default(2026),
    challenge: z.string().default('Membuat pengalaman digital yang jelas dan mudah digunakan.'),
    solution: z.string().default('Desain responsif dengan informasi terstruktur dan interaksi yang relevan.'),
    design: z.string().default('Hierarki visual yang jelas, tipografi terukur, dan navigasi sederhana.'),
    interaction: z.string().default('Jelajahi konten dan navigasi responsif.'),
    order: z.number().default(0),
  }),
})

export const collections = { articles, demo }
