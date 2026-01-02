
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    try{
        const cookie = await cookies();
        cookie.delete('token')
        return NextResponse.json({ success: true, message: 'You are logged-out successfully!' }, { status: 200})
    }catch(error) {
        return NextResponse.json({ message : 'Internal server error.'} , { status: 500 })
    }
}