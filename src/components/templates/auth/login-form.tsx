"use client"
import { useRouter } from 'next/navigation'
//
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
//shadcn
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
//icons
import { Loader2, SendHorizontal } from 'lucide-react'
//validation schema
import { LoginFormSchema, type LoginFormValues } from '@/validation/auth'



export default function LoginForm() {

    const router = useRouter()

    const formSchema = LoginFormSchema()
    
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            username: '',
            password: '',
        }
    })

    const { handleSubmit, formState, control } = form
    const { isSubmitting } = formState

    const onSubmit = async (data : LoginFormValues) => {
       console.log(data)

        const { username, password } = data

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            const data = await response.json()

            console.log('response => ', response)
            console.log('response data', data)
            
            if(response.status === 200 && data.success) {
                router.replace('/panel')
            }

            
        } catch(error) {
            console.log(error)
        } finally {
        
        }
    }

    return (
        <Form {...form}>
            <form noValidate 
            onSubmit={handleSubmit(onSubmit)} 
            className="relative flex flex-col w-full max-w-full gap-4">

               
                <FormField
                    control={control}
                    name='username'
                    render={({ field }) => (
                    <FormItem className="relative grow mb-4">
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                        <Input
                            {...field}
                            id='username'
                            placeholder='Please enter your username'
                            className="w-full h-11 bg-white text-foreground placeholder:text-xs placeholder:text-gray-400 rounded-2xl"
                        />
                        </FormControl>
                        <FormMessage className="text-xs absolute left-0 -bottom-5"/>
                    </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name='password'
                    render={({ field }) => (
                    <FormItem className="relative grow mb-4">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                        <Input
                            {...field}
                            id='password' type="password"
                            placeholder='Please enter your password'
                            className="w-full h-11 bg-white text-foreground placeholder:text-xs placeholder:text-gray-400 rounded-2xl"
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