"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { KeyRound } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Use your domain name with proper SSL certificate
const API_URL = "https://airbnbapi.cc/api/guest-management/exists"

export default function LoginForm() {
  const router = useRouter()
  const { t } = useLanguage()
  const [accessCode, setAccessCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"
    if (isAuthenticated) {
      console.log("User already authenticated, redirecting to dashboard")
      router.push("/dashboard")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      console.log("Attempting to login with code:", accessCode.trim())

      // Use your domain with proper SSL
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: accessCode.trim() }),
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("API error response:", errorText)
        throw new Error(`API request failed with status ${response.status}: ${errorText}`)
      }

      // Parse the response
      const data = await response.json()
      console.log("API response data:", data)

      // Handle different response formats
      let exists = false
      if (typeof data === "boolean") {
        exists = data
      } else if (data && typeof data === "object") {
        exists = data.exists || data.success || data.valid || false
      }

      console.log("Login validation result:", exists)

      if (exists === true) {
        console.log("Login successful, setting authentication")

        // Set authentication in localStorage
        localStorage.setItem("isAuthenticated", "true")
        console.log("Authentication set in localStorage:", localStorage.getItem("isAuthenticated"))

        // Use Next.js router for client-side navigation
        console.log("Redirecting to dashboard")
        router.push("/dashboard")
      } else {
        console.log("Login failed - code doesn't exist")
        setError(t("login.error"))
      }
    } catch (err) {
      console.error("Login error:", err)
      setError(t("login.api.error") || "An error occurred while connecting to the server. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <KeyRound className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <Input
          id="accessCode"
          placeholder={t("login.placeholder")}
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          className="text-center text-lg tracking-wider"
          required
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "..." : t("login.button")}
      </Button>
    </form>
  )
}

