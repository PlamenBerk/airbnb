"use client"

import { useLanguage } from "@/contexts/language-context"
import { Map, Compass, Utensils } from "lucide-react"
import { ClientBackButton } from "./client-architecture-content"

export function ClientGuidesTitle() {
  const { t } = useLanguage()

  return <h1 className="mb-6 text-3xl font-bold text-secondary">{t("section.guides.title")}</h1>
}

export function ClientGuidesPage() {
  return (
    <div className="min-h-screen bg-city-guides py-12">
      <div className="container mx-auto px-4">
        <div className="content-overlay p-6 mb-6">
          <ClientBackButton />
          <ClientGuidesTitle />
        </div>

        <ClientGuidesContent />
      </div>
    </div>
  )
}

export function ClientGuidesContent() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <section className="rounded-lg border bg-white/95 backdrop-blur-sm p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <Map className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold">{t("guides.maps.title")}</h2>
        </div>
        <p className="text-gray-700">{t("guides.maps.description")}</p>
      </section>

      <section className="rounded-lg border bg-white/95 backdrop-blur-sm p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 p-2 rounded-full">
            <Compass className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold">{t("guides.exploration.title")}</h2>
        </div>
        <p className="text-gray-700">{t("guides.exploration.description")}</p>
      </section>

      <section className="rounded-lg border bg-white/95 backdrop-blur-sm p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-100 p-2 rounded-full">
            <Utensils className="h-6 w-6 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-semibold">{t("guides.culinary.title")}</h2>
        </div>
        <p className="text-gray-700">{t("guides.culinary.description")}</p>
      </section>
    </div>
  )
}

