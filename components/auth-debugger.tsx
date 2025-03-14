"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function AuthDebugger() {
  const [authState, setAuthState] = useState<string>("Checking...")

  useEffect(() => {
    const checkAuth = () => {
      try {
        const isAuth = localStorage.getItem("isAuthenticated")
        setAuthState(`Auth state: ${isAuth}`)
      } catch (e) {
        setAuthState(`Error: ${e.message}`)
      }
    }

    checkAuth()

    // Check every second
    const interval = setInterval(checkAuth, 1000)
    return () => clearInterval(interval)
  }, [])

  const forceAuth = () => {
    localStorage.setItem("isAuthenticated", "true")
    setAuthState(`Auth state: true (forced)`)
  }

  const clearAuth = () => {
    localStorage.removeItem("isAuthenticated")
    setAuthState(`Auth state: null (cleared)`)
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50 text-xs">
      <p className="mb-2">{authState}</p>
      <div className="flex gap-2">
        <Button size="sm" onClick={forceAuth}>
          Force Auth
        </Button>
        <Button size="sm" variant="destructive" onClick={clearAuth}>
          Clear Auth
        </Button>
      </div>
    </div>
  )
}

