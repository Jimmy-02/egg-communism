'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { CreatePostSchema } from './schemas/create-post.schemas'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Post } from '@prisma/client'

export const createPost = async (_: any, formData: FormData) => {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) throw new Error('You must be logged in to create a post.')
    const validate = await CreatePostSchema.parseAsync({
      title: formData.get('title'),
      content: formData.get('content'),
      publish: formData.get('publish'),
    })

    await prisma.post.create({
      data: {
        title: validate.title,
        content: validate.content,
        published: validate.publish === 'on',
        author: {
          create: {
            name: session.user.name,
          },
        },
      },
    })

    revalidatePath('/')
    return { message: 'Post created successfully' }
  } catch (err: any) {
    return { error: err.message || 'Something went wrong' }
  }
}

export const deletePost = async (post: Post) => {
  await prisma.post.delete({ where: { id: post.id } })
  revalidatePath('/')
}
