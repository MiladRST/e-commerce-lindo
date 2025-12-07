import { z } from 'zod'

// news-letter form form
export const NewsletterFormSchema = () => 
  z.object({
    email: z
    .email('ایمیل معتبر نیست.')
  })

export type NewsletterFormValues = z.infer<ReturnType<typeof NewsletterFormSchema>>


