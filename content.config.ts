import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
        type: 'page',
        source: '*.md',
        schema: z.object({
          date: z.string(),
          image: z.array(z.record(z.string(), z.any())).optional(),
          layout: z.array(z.record(z.string(), z.any())).optional(),
          category: z.array(z.record(z.string(), z.any())).optional(),
          description: z.array(z.record(z.string(), z.any())).optional(),
        }),
      }),
  },
})