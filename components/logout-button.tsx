"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LogoutButton() {
  const { t } = useLanguage()

  const handleLogout = () => {
    // Clear authentication from localStorage
    localStorage.removeItem("isAuthenticated")
    console.log("Authentication cleared from localStorage")

    // Redirect to login page
    window.location.href = "/"
  }

  return (
    <Button onClick={handleLogout} variant="outline" className="px-4 py-2 text-sm font-medium flex items-center gap-2">
      <LogOut className="h-4 w-4" />
      {t("logout")}
    </Button>
  )
}

