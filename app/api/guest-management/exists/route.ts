import { NextResponse } from "next/server"
import https from "https"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Create a custom agent that ignores certificate errors
    const agent = new https.Agent({
      rejectUnauthorized: false, // WARNING: This is insecure, but necessary for self-signed certs
    })

    // Forward the request to your backend
    const response = await fetch("https://34.132.92.1/api/guest-management/exists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      // @ts-ignore - TypeScript doesn't recognize the agent property
      agent: agent,
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("API proxy error:", error)
    return NextResponse.json(
      { error: "Failed to connect to the backend server", details: error.message },
      { status: 500 },
    )
  }
}

