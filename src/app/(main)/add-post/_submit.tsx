'use client'

import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { Loader2Icon } from 'lucide-react'
import { useFormStatus } from 'react-dom'

const SubmitBtn: React.FC = () => {
  const { pending } = useFormStatus()
  return (
    <CardFooter>
      <Button className="w-full" disabled={pending}>
        <Loader2Icon className={`${!pending && 'hidden'} animate-spin`} />
        Save
      </Button>
    </CardFooter>
  )
}

export default SubmitBtn
