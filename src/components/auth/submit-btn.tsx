import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { Loader2Icon } from 'lucide-react'
import { useFormStatus } from 'react-dom'

const SubmitButton: React.FC<{ text: string }> = ({ text }) => {
  const { pending } = useFormStatus()
  return (
    <CardFooter className="justify-end">
      <Button type="submit" disabled={pending}>
        <Loader2Icon className={`mr-2 animate-spin ${!pending && 'hidden'}`} />
        {text}
      </Button>
    </CardFooter>
  )
}

export default SubmitButton
