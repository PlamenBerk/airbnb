"use client"

import { Building2 } from "lucide-react"
import LogoutButton from "@/components/logout-button"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function ClientHeader() {
  const { t } = useLanguage()

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-secondary">{t("app.title")}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <LogoutButton />
        </div>
      </div>
    </header>
  )
}

