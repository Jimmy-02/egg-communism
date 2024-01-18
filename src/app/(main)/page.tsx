import PostCard from '@/components/post-card'
import prisma from '@/lib/prisma'
import { Post } from '@prisma/client'
import { NextPage } from 'next'

interface IPsot extends Post {
  author: {
    name: string
  }
}

export const dynamic = 'force-dynamic'
const Page: NextPage = async () => {
  try {
    const posts = (await prisma.post.findMany({
      where: { published: true },
      include: { author: { select: { name: true } } },
    })) as IPsot[]
    if (!posts) throw new Error('No Posts Found')

    return (
      <div>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard {...post} />
            </li>
          ))}
        </ul>
      </div>
    )
  } catch (e) {
    return <div>No Posts Found</div>
  }
}

export default Page
