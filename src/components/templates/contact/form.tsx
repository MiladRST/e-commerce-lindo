"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
//shadcn
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
//icons
import { Loader2, SendHorizontal } from 'lucide-react'
//validation
import { ContactFormSchema, type ContactFormValues } from '@/validation/contact'


export default function ContactForm() {
    
    const formSchema = ContactFormSchema()

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
        name: '',
        email: '',
        message: '',
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
            className="relative flex flex-col w-full max-w-full gap-4">

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <FormField
                        control={control}
                        name='name'
                        render={({ field }) => (
                        <FormItem className="relative grow mb-4">
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                            <Input
                                {...field}
                                id='name'
                                placeholder='Please enter your full name'
                                className="w-full h-11 bg-white text-foreground placeholder:text-xs placeholder:text-gray-400 rounded-2xl"
                            />
                            </FormControl>
                            <FormMessage className="text-xs absolute left-0 -bottom-5"/>
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={control}
                        name='email'
                        render={({ field }) => (
                        <FormItem className="relative grow mb-4">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                            <Input
                                {...field}
                                id='email'
                                placeholder='Please enter your email address'
                                className="w-full h-11 bg-white text-foreground placeholder:text-xs placeholder:text-gray-400 rounded-2xl"
                            />
                            </FormControl>
                            <FormMessage className="text-xs absolute left-0 -bottom-5"/>
                        </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={control}
                    name='message'
                    render={({ field }) => (
                      <FormItem className="w-full relative mb-4">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            id='message'
                            placeholder='Please enter your message'
                            className="w-full h-32 bg-white text-foreground placeholder:text-xs placeholder:text-gray-400 rounded-2xl"
                          />
                        </FormControl>
                        <FormMessage className="text-xs absolute left-0 -bottom-5"/>
                      </FormItem>
                    )}
                />

                <div className="mt-2">
                    <Button
                        type='submit'
                        variant='secondary'
                        disabled={isSubmitting}
                        className='w-full h-12 rounded-2xl'
                    >
                        {isSubmitting && (
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Send
                        <SendHorizontal />
                    </Button>
                </div>

            </form>
        </Form>
    )
}