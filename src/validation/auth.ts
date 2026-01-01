import { z } from 'zod'

export const LoginFormSchema = () => {
  return z.object({
    username: z
    .string()
    .min(4 , 'Username is not valid'),
    password: z
    .string()
    .min(6, 'Password must be at least 6 characters.')    
  })
}

export type LoginFormValues = z.infer<ReturnType<typeof LoginFormSchema>>