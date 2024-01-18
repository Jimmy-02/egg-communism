'use client'

import { deletePost } from '@/actions/post'
import { formatDate } from '@/lib/utils'
import { Post } from '@prisma/client'
import { XIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface PostCardProps extends Post {
  author: {
    name: string
  }
}

const PostCard: React.FC<PostCardProps> = (post) => (
  <Card className="relative">
    <CardHeader>
      <CardTitle>{post.title}</CardTitle>
      <CardDescription>
        {post.author.name} - {formatDate(post.createdAt)}
      </CardDescription>
    </CardHeader>

    <CardContent>{post.content}</CardContent>

    <form action={() => deletePost(post)} className="absolute right-2 top-2">
      <Button variant="destructive" size="icon" type="submit">
        <XIcon />
      </Button>
    </form>
  </Card>
)

export default PostCard
