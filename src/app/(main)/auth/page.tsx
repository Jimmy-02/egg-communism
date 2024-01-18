import type { NextPage } from 'next'

import LoginForm from '@/components/auth/login-form'
import RegisterForm from '@/components/auth/register-form'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Page: NextPage = () => (
  <Tabs defaultValue="login" className="w-full">
    <TabsList className="grid grid-cols-2">
      <TabsTrigger value="login">Login</TabsTrigger>
      <TabsTrigger value="register">Register</TabsTrigger>
    </TabsList>

    <TabsContent value="login">
      <LoginForm />
    </TabsContent>
    <TabsContent value="register">
      <RegisterForm />
    </TabsContent>
  </Tabs>
)

export default Page
