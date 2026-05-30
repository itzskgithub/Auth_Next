import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname


    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

    const token = request.cookies.get('token')?.value || '';

    const isProtectedPath = path.startsWith('/profile');

    if(isPublicPath && token) {
        return NextResponse.redirect(
            new URL('/profile', request.nextUrl)
        );
    }

    if(isProtectedPath && !token){
        return NextResponse.redirect(
            new URL('/login', request.nextUrl)
        )
    }

    return NextResponse.next();


}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile/:path*',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}
