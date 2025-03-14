import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path starts with /dashboard
  if (pathname.startsWith("/dashboard")) {
    // Check for the authentication cookie
    const authCookie = request.cookies.get("isAuthenticated")
    const isAuthenticated = authCookie?.value === "true"

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

// Configure middleware to run on dashboard routes
export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
}

