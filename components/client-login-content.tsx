"use client"

import { useLanguage } from "@/contexts/language-context"

export function ClientLoginContent() {
  const { t } = useLanguage()

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-secondary">{t("app.title")}</h1>
      <p className="mt-2 text-gray-600">{t("login.subtitle")}</p>
    </div>
  )
}

