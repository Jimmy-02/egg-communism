'use client'

import { FilePlus2Icon, Loader2Icon, LogOutIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={data.user.image || ''} />
          <AvatarFallback color="primary">{data.user.name?.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>{data.user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <FilePlus2Icon className="mr-2" />
            <span>Create a new post</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
            <LogOutIcon className="mr-2" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Auth
