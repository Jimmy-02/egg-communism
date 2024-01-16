'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createPost } from '@/lib/actions'
import { NextPage } from 'next'
import { useFormState } from 'react-dom'
import SubmitBtn from './_submit'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Textarea } from '@/components/ui/textarea'

const Page: NextPage = () => {
  const [state, action] = useFormState(createPost, {
    message: '',
  })
  const router = useRouter()

  useEffect(() => {
    if (state.message) {
      toast(state.message)
      router.push('/')
    }
  }, [state])

  return (
    <div className="grid min-h-[80dvh] place-items-center">
      <Card className="w-screen max-w-screen-md">
        <CardHeader>
          <CardTitle>Add new post</CardTitle>
          <CardDescription>Fill in the form below to add a new post to your blog.</CardDescription>
        </CardHeader>

        <form action={action}>
          <CardContent className="space-y-4">
            <section>
              <Label>Title</Label>
              <Input name="title" placeholder="Enter a title" required />
            </section>

            <section>
              <Label>Content</Label>
              <Textarea name="content" placeholder="Enter a content" />
            </section>

            <section>
              <Label>Publish</Label>
              <Checkbox name="publish" />
            </section>

            <Label className="text-destructive">{state.error}</Label>
          </CardContent>

          <SubmitBtn />
        </form>
      </Card>
    </div>
  )
}

export default Page
