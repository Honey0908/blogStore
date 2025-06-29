import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const uid = request.cookies.get('uid')?.value;

  // Define routes that require authentication
  const protectedRoutes = ['/blogs']; // add your protected routes here

  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    if (!uid) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Prevent logged-in users from accessing login/signup
  if (['/login', '/signup'].includes(request.nextUrl.pathname) && uid) {
    return NextResponse.redirect(new URL('/blogs', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/blogs/:path*', '/login', '/signup'],
};
