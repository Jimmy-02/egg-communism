'use server'

import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { RegisterSchema } from './schemas/register.schema'

export const registerUser = async (_: any, formData: FormData) => {
  try {
    const validate = await RegisterSchema.parseAsync({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    })

    await prisma.user.create({
      data: {
        name: validate.name,
        email: validate.email,
        password: bcrypt.hashSync(validate.password, 10),
      },
    })

    return { message: 'User registered successfully' }
  } catch (e: any) {
    const message = e.errors?.length > 0 ? e.errors.map((err: any) => err.message) : e.message

    return { error: message }
  }
}
