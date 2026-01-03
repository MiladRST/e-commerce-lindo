"use client"
import { useRouter } from "next/navigation";
//shadcn
import {Button} from "@/components/ui/button";

export default function LogoutButton() {

    const router = useRouter()

    const handleLogout = async () => {
        
        try {
            const response = await fetch(`/api/auth/logout` , {
                method: 'POST',
            })
            const data = await response.json();
            console.log(data)
            if(response.ok) {
                router.refresh()
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <Button variant="destructive" onClick={handleLogout}>LogOut</Button>
    )
}