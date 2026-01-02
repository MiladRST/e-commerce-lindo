import { cookies } from 'next/headers';
//constants
import { BASE_URL } from '@/constants';

export const authUser = async () => {
    
    const cookieStore = await cookies()
  
    const token = cookieStore.get('token')?.value || null
    
    let user = null 

    if(token) {
        try {
            //using third party api get user info
            const response = await fetch(`${BASE_URL}/auth/me`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}` 
                },
                credentials: "include"
            })
    
            const data = await response.json()

            user = data 
    
            console.log('userAuth data => ', data)

        } catch (error) {
            console.log('userAuth error => ', error )
            return user
        }    
    }

    return user;
}