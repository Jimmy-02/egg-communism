import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign In',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Abc@example.com' },
        password: { label: 'Password', type: 'password', placeholder: 'Abc#1234' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          throw new Error('Please enter your email and password.')

        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (!user) throw new Error('User not found.')

        const isValid = bcrypt.compare(credentials.password, user.password as string)
        if (!isValid) throw new Error('Incorrect password.')

        return user as any
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  jwt: { secret: process.env.NEXTAUTH_SECRET },

  callbacks: {},
}

const handlers = NextAuth(authOptions)

export { handlers as GET, handlers as POST }
