
import { NextResponse } from "next/server";

const BASE_URL = process.env.API_BASE_URL;

export async function POST(req: Request) {

    try {

        const body = await req.json();

        const { username, password } = body;

        // data validation
        if(!username || !password) {
            return NextResponse.json({ message: "Username or password is not valid!" } , { status: 422 })
        }

        // fetch request to external Api
        console.log('base-url', BASE_URL)

        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password })
        })

        if(!response.ok) {
            return NextResponse.json({ message: "Failed to login!"} , { status: response.status })
        } 

        const data = await response.json();
        const { accessToken, refreshToken } = data;

        console.log(data)

        return NextResponse.json({ message: 'You are logged-in successfully!', data } , { 
            status : 200,
            headers: {
                "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;max-age=${60*60}` // 1 Hour or 60 minutes
            }
         });

    } catch( error) {
        return NextResponse.json({ message: "Internal server error!"} , { status: 500 })
    }
    
}

export async function GET(req: Request) {
    return NextResponse.json({ message: 'login test'} , { status : 200 });
}