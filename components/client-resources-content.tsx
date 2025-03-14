"use client"

import { useLanguage } from "@/contexts/language-context"
import { FileText, Bus, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClientBackButton } from "./client-architecture-content"

export function ClientResourcesTitle() {
  const { t } = useLanguage()

  return <h1 className="mb-6 text-3xl font-bold text-secondary">{t("section.resources.title")}</h1>
}

export function ClientResourcesPage() {
  return (
    <div className="min-h-screen bg-urban-resources py-12">
      <div className="container mx-auto px-4">
        <div className="content-overlay p-6 mb-6">
          <ClientBackButton />
          <ClientResourcesTitle />
        </div>

        <ClientResourcesContent />
      </div>
    </div>
  )
}

export function ClientResourcesContent() {
  const { t } = useLanguage()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border bg-white/95 backdrop-blur-sm p-6 shadow-sm">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          <FileText className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="mb-2 text-xl font-semibold">{t("resources.maps.title")}</h2>
        <p className="mb-4 text-gray-700">{t("resources.maps.description")}</p>
        <Button variant="outline" className="w-full">
          {t("resources.maps.button")}
        </Button>
      </div>

      <div className="rounded-lg border bg-white/95 backdrop-blur-sm p-6 shadow-sm">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
          <Bus className="h-6 w-6 text-purple-600" />
        </div>
        <h2 className="mb-2 text-xl font-semibold">{t("resources.transport.title")}</h2>
        <p className="mb-4 text-gray-700">{t("resources.transport.description")}</p>
        <Button variant="outline" className="w-full">
          {t("resources.transport.button")}
        </Button>
      </div>

      <div className="rounded-lg border bg-white/95 backdrop-blur-sm p-6 shadow-sm">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <Calendar className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="mb-2 text-xl font-semibold">{t("resources.events.title")}</h2>
        <p className="mb-4 text-gray-700">{t("resources.events.description")}</p>
        <Button variant="outline" className="w-full">
          {t("resources.events.button")}
        </Button>
      </div>
    </div>
  )
}

