import { z } from 'zod'

export const ContactFormSchema = () => {
  return z.object({
    name: z.string().min(3, 'Full name is required.'),
    email: z.email('Email is not valid.'),
    message: z.string().min(10, 'Message is required.').max(500, 'Maximum message lenght is 500 charachters.'),
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof ContactFormSchema>>