"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LoadingSpinner from "./loading-spinner"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    // Check authentication from localStorage
    const checkAuth = () => {
      try {
        const authed = localStorage.getItem("isAuthenticated") === "true"
        console.log("Authentication check result:", authed)

        if (!authed) {
          console.log("Not authenticated, redirecting to login")
          router.push("/")
        } else {
          console.log("Authenticated, showing protected content")
          setIsAuthed(true)
        }
      } catch (error) {
        console.error("Error checking authentication:", error)
        router.push("/")
      } finally {
        setIsLoading(false)
      }
    }

    // Check auth immediately
    checkAuth()
  }, [router])

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <LoadingSpinner />
  }

  // Only render children if authenticated
  return isAuthed ? <>{children}</> : null
}

