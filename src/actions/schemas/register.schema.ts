import * as z from 'zod'

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(4, { message: 'Name must be at least 4 characters long' })
      .max(20, { message: 'Name must be at most 20 characters long' })
      .regex(/^[a-zA-Z0-9]+$/, { message: 'Name must only contain alphanumeric characters' }),
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(20, { message: 'Password must be at most 20 characters long' })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/, {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(20, { message: 'Password must be at most 20 characters long' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
