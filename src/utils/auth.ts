"use server"

import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode";

//constants
import { BASE_URL, ACCESS_TOKEN } from '@/constants';

export const getAccessToken = async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get(ACCESS_TOKEN)?.value || null 
    return token;
}

export const authUser = async () => {
    
    const token = await getAccessToken()
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

export const verifyAccessToken = async (token: string) => {

    try{
        const tokenPayload = verify(token, process.env.ACCESS_TOKEN_SECRET_KEY!)
        return tokenPayload;
    }catch(err) {
        console.log('token is not verified!', err)
        return false
    }    
}

export const decodeAccessToken = async () => {
    const token = await getAccessToken()

    if(!token) return null

    try {
        const decoded = jwtDecode(token)
        return decoded
    }catch(error) {
        console.log('decodeAccessToken error => ', error)
        return null
    }

}