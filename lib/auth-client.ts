"use client"

// Check if the user is authenticated
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") {
    return false
  }
  return localStorage.getItem("isAuthenticated") === "true"
}

// Set authentication
export function setAuthenticated(value = true): void {
  if (typeof window === "undefined") {
    return
  }
  localStorage.setItem("isAuthenticated", value ? "true" : "false")
  console.log(`Authentication set to ${value} in localStorage`)
}

// Clear authentication
export function clearAuthentication(): void {
  if (typeof window === "undefined") {
    return
  }
  localStorage.removeItem("isAuthenticated")
  console.log("Authentication cleared from localStorage")
}

