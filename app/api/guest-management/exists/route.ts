import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("API route called with body:", body)

    // Forward the request to your backend
    const apiUrl = "https://34.132.92.1/api/guest-management/exists"
    console.log("Forwarding to:", apiUrl)

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      // Add this to handle potential certificate issues with IP-based URLs
      ...(process.env.NODE_ENV === "development" && { next: { revalidate: 0 } }),
    })

    console.log("Response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("API error response:", errorText)
      throw new Error(`API request failed with status ${response.status}: ${errorText}`)
    }

    try {
      const data = await response.json()
      console.log("Response data:", data)

      // Ensure we're returning a boolean value
      if (typeof data === "boolean") {
        return NextResponse.json(data)
      } else if (data && typeof data === "object") {
        // If the backend returns an object, extract the relevant boolean value
        const exists = data.exists || data.success || data.valid || false
        return NextResponse.json(exists)
      } else {
        // Default fallback
        return NextResponse.json(false)
      }
    } catch (parseError) {
      console.error("Error parsing JSON response:", parseError)
      // If the response isn't valid JSON, check if it's a string "true" or "false"
      const text = await response.text()
      console.log("Response text:", text)
      return NextResponse.json(text.trim().toLowerCase() === "true")
    }
  } catch (error) {
    console.error("API proxy error:", error)
    return NextResponse.json(
      { error: "Failed to connect to the backend server", details: error.message },
      { status: 500 },
    )
  }
}

