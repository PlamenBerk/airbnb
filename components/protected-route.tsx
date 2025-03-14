"use client"

import type React from "react"

import { useEffect, useState } from "react"
import LoadingSpinner from "./loading-spinner"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    // Check authentication from localStorage
    const checkAuth = () => {
      const authed = localStorage.getItem("isAuthenticated") === "true"
      console.log("Authentication check result:", authed)

      if (!authed) {
        console.log("Not authenticated, redirecting to login")
        window.location.href = "/"
      } else {
        console.log("Authenticated, showing protected content")
        setIsAuthed(true)
      }

      setIsLoading(false)
    }

    // Run the check
    checkAuth()
  }, [])

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <LoadingSpinner />
  }

  // Only render children if authenticated
  return isAuthed ? <>{children}</> : null
}

