"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { KeyRound } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LoginForm() {
  const { t } = useLanguage()
  const [accessCode, setAccessCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Call the REST API endpoint
      const response = await fetch("http://34.132.92.1:8080/api/guest-management/exists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: accessCode.trim() }),
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      // Parse the response
      const exists = await response.json()

      if (exists === true) {
        console.log("Login successful")

        // Set authentication in localStorage
        localStorage.setItem("isAuthenticated", "true")
        console.log("Authentication set in localStorage")

        // Redirect to dashboard
        window.location.href = "/dashboard"
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

