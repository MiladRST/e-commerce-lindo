"use client"
// import { subscribeToNewsletter } from "@/actions"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
//shadcn
import {Button} from "@/components/ui/button"
import {Form,FormControl,FormField,FormItem} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
//icons
import { Loader2, SendHorizontal } from 'lucide-react'
//validation
import { getNewsletterFormSchema, type NewsletterFormValues } from '@/validation'


export default function SubscribeForm() {
    
    const formSchema = getNewsletterFormSchema()

    const form = useForm<NewsletterFormValues>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
        email: '',
        }
    })

    const { handleSubmit, formState, control } = form
    const { isSubmitting } = formState

    const onSubmit = (data : NewsletterFormValues) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form noValidate 
            onSubmit={handleSubmit(onSubmit)} 
            className="relative flex flex-col justify-center items-center md:flex-row md:items-center gap-2">
                <FormField
                    control={control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            id='email'
                            placeholder='ایمیل خود را وارد نمایید'
                            className="max-w-full w-52 bg-white text-foreground placeholder:text-xs placeholder:text-gray-400 rounded-full"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                />
              <Button
                type='submit'
                disabled={isSubmitting}
                className='grow-0 w-fit rounded-full'
              >
                {isSubmitting && (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                )}
                ارسال
                <SendHorizontal className="rotate-180" />
              </Button>
            </form>
        </Form>
    )
}