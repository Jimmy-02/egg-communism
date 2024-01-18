'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { LoginSchema } from '@/actions/schemas/login.schemas'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubmitButton from '../submit-btn'

const LoginForm: React.FC = () => {
  const { push } = useRouter()
  const action = async (formData: FormData) => {
    try {
      const validate = await LoginSchema.parseAsync({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      })
      await signIn('credentials', { ...validate, redirect: false })

      toast('Login successful')
      push('/')
    } catch (e: any) {
      const message = e.issues.map((e: any) => e.message) || e.message

      toast(typeof message === 'string' ? message : message.join(', '), {
        action: {
          label: 'Close',
          onClick: () => {
            toast.dismiss()
          },
        },
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Fill the form below to login</CardDescription>
      </CardHeader>

      <form action={action}>
        <CardContent className="space-y-4">
          {fields.map(({ label, ...rest }) => (
            <section key={label}>
              <Label>{label}</Label>
              <Input {...rest} />
            </section>
          ))}
        </CardContent>

        <SubmitButton text="Login" />
      </form>
    </Card>
  )
}

export default LoginForm

const fields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  },
]
