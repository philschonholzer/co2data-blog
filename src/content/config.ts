import { z, defineCollection } from 'astro:content'

const author = defineCollection({
  schema: {
    name: z.string(),
    description: z.string().min(10).max(200),
    email: z.string().email(),
    twitter: z.string(),
    layout: z.string().default('@layouts/Author.astro'),
  },
})

const blog = defineCollection({
  schema: {
    title: z.string().max(40),
    description: z.string().min(80).max(200),
    author: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    layout: z.string().default('@layouts/Blog.astro'),
  },
})

export const collections = {
  author: author,
  blog: blog,
}
