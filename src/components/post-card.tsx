'use client'

import { XIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { deletePost } from '@/lib/actions'

const PostCard: React.FC<Post> = (post) => {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.author?.name}</CardDescription>
      </CardHeader>

      <CardContent>{post.content}</CardContent>

      <Button
        variant="destructive"
        size="icon"
        className="absolute right-2 top-2"
        onClick={() => deletePost(post)}
      >
        <XIcon />
      </Button>
    </Card>
  )
}

export default PostCard
