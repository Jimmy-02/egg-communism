import { NextPage } from 'next'
import prisma from '@/lib/prisma'
import PostCard from '@/components/post-card'

const Page: NextPage = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: { select: { name: true } } },
  })

  return (
    <div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard {...(post as Post)} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
