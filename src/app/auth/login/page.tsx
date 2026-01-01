import LoginForm from "@/components/templates/auth/login-form"
import Image from "next/image"

export default function LoginPage() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-4">
            
            <div className="w-full flex-1 md:flex-1/2">
                <div className="md:max-w-80 mx-auto">
                    <LoginForm />
                </div>
            </div>

            <div className="md:flex-1/2">
                <Image src="/images/login.png" 
                alt="Login background" width={500} height={500}
                className="mx-auto" />
            </div>
            
        </section>
    )
}