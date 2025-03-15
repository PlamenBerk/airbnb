"use client"

// Define the API URL based on the environment
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://34.132.92.1"

// Use HTTP in development, HTTPS in production
const API_PROTOCOL = process.env.NODE_ENV === "development" ? "http" : "https"

// Construct the full API URL
export const API_URL = `${API_PROTOCOL}://${API_BASE_URL.replace(/^https?:\/\//, "")}`

export async function callApi(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`API error for ${url}:`, error)
    throw error
  }
}

