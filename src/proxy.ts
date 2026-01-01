import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export const config = {
    matcher: [
        '/panel/:path*',
        '/auth/:path*',
        '/api/panel/:path*'

    /*
     * Apply middleware to all pages except:
     * 1. /api/* (exclude all API routes)
     * 2. /login (exclude the login page)
     * 3. /_next/* (exclude Next.js assets, e.g., /_next/static/*)
     */
    // '/((?!/auth).*)',
  ],
}

export function proxy(request : NextRequest ) {
    
    const path = request.nextUrl.pathname
    
    const token = request.cookies.get('token')?.value

    //check if the request is for the api route
    if(path.includes('/api/panel') && !token) {
        return NextResponse.json({ message: "You are not authorized"} , { status: 401})
    }
    
    if(path.includes('/panel') && !token) {
        console.log('isprotectedRoute && !token');
        return NextResponse.redirect(new URL('/auth/login' , request.nextUrl))
    }

    if(path.includes('/auth') && token) {
        return NextResponse.redirect(new URL('/panel' , request.nextUrl))
    }

    return NextResponse.next()
}