"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { clearAuthentication } from "@/lib/auth-client"

export default function LogoutButton() {
  const router = useRouter()
  const { t } = useLanguage()

  const handleLogout = () => {
    // Clear authentication
    clearAuthentication()

    // Redirect to login page using Next.js router
    router.push("/")
  }

  return (
    <Button onClick={handleLogout} variant="outline" className="px-4 py-2 text-sm font-medium flex items-center gap-2">
      <LogOut className="h-4 w-4" />
      {t("logout")}
    </Button>
  )
}

