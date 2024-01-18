import * as z from 'zod'

export const CreatePostSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  publish: z.string().optional(),
})

export type CreatePostInput = z.infer<typeof CreatePostSchema>
