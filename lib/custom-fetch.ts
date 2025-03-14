import { Agent } from "https"

// Create a custom HTTPS agent that ignores certificate errors
const httpsAgent = new Agent({
  rejectUnauthorized: false, // WARNING: This is insecure and should only be used in development
})

export async function customFetch(url: string, options: RequestInit = {}) {
  // Only use the custom agent in development
  const agent = process.env.NODE_ENV === "development" ? httpsAgent : undefined

  return fetch(url, {
    ...options,
    // @ts-ignore - TypeScript doesn't recognize the agent property
    agent,
  })
}

