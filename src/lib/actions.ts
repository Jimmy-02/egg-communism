'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'

export const createPost = async (_: any, formData: FormData) => {
  try {
    const title = formData.get('title')
    const content = formData.get('content')
    const publish = formData.get('publish')

    if (!title || !content) {
      throw new Error('Please fill in the title and content')
    }

    await prisma?.post.create({
      data: {
        title: title as string,
        content: content as string,
        published: publish === 'on',
        author: {
          create: {
            name: 'tiesen',
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
  await prisma?.post.delete({ where: { id: post.id } })
  revalidatePath('/')
}
