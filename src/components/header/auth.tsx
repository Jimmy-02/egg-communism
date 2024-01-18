'use client'

import { useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Loader2Icon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Auth: React.FC = () => {
  const { data, status } = useSession()

  if (status === 'loading') return <Loader2Icon className="animate-spin" />

  if (!data?.user)
    return (
      <Button color="primary" variant="ghost" asChild>
        <Link href="/auth">Login</Link>
      </Button>
    )

  return (
    <Avatar>
      <AvatarImage src={data.user.image || ''} />
      <AvatarFallback color="primary">{data.user.name?.charAt(0)}</AvatarFallback>
    </Avatar>
  )
}

export default Auth
