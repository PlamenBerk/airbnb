import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This middleware is now disabled since we're handling auth client-side
export function middleware(request: NextRequest) {
  // We're not doing any server-side auth checks anymore
  // Just pass through all requests
  return NextResponse.next()
}

// Configure middleware to run on dashboard routes
export const config = {
  matcher: [], // Empty array means middleware won't run on any routes
}

