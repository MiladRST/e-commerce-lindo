import { z } from 'zod'

export const ContactFormSchema = () => {
  return z.object({
    name: z.string().min(3, 'نام و نام خانوادگی الزامی است.'),
    email: z.email('ایمیل معتبر نیست.'),
    message: z.string().min(10, 'پیام الزامی است.').max(500, 'پیام نباید بیشتر از 500 کاراکتر باشد.'),
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof ContactFormSchema>>