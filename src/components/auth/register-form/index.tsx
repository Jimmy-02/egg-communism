'use client'

import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { registerUser } from '@/actions/auth'
import SubmitButton from '../submit-btn'

const RegisterForm: React.FC = () => {
  const [state, action] = useFormState(registerUser, null)
  useEffect(() => {
    if (state?.message !== undefined) toast(state?.message)
  }, [state])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Fill the form below to register</CardDescription>
      </CardHeader>

      <form action={action}>
        <CardContent className="space-y-4">
          {fields.map(({ label, ...rest }) => (
            <section key={label}>
              <Label>{label}</Label>
              <Input {...rest} />
            </section>
          ))}

          {state?.error && <p className="text-red-500">{state?.error.toString()}</p>}
        </CardContent>

        <SubmitButton text="Register" />
      </form>
    </Card>
  )
}

export default RegisterForm

const fields = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
  },
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
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm your password',
  },
]
