"use client"

// Check if the user is authenticated
export function isAuthenticated(): boolean {
  if (typeof window !== "undefined") {
    return localStorage.getItem("isAuthenticated") === "true"
  }
  return false
}

// Set authentication
export function setAuthenticated(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("isAuthenticated", "true")
    console.log("Authentication set in localStorage")
  }
}

// Clear authentication
export function clearAuthentication(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("isAuthenticated")
    console.log("Authentication cleared from localStorage")
  }
}

