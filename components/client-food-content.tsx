"use client"

import { useLanguage } from "@/contexts/language-context"
import { Building, Building2, Landmark, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ClientBackButton() {
  const { t } = useLanguage()

  return (
    <Link href="/dashboard">
      <Button variant="ghost" className="mb-6 flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" />
        {t("back")}
      </Button>
    </Link>
  )
}

export function ClientFoodTitle() {
  const { t } = useLanguage()

  return <h1 className="mb-6 text-3xl font-bold text-secondary">{t("section.food.title")}</h1>
}

export function ClientFoodPage() {
  return (
    <div className="min-h-screen bg-architecture py-12">
      <div className="container mx-auto px-4">
        <div className="content-overlay p-6 mb-6">
          <ClientBackButton />
          <ClientFoodTitle />
        </div>

        <ClientFoodContent />
      </div>
    </div>
  )
}

export function ClientFoodContent() {
  const { t } = useLanguage()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border bg-white/95 backdrop-blur-sm overflow-hidden shadow-sm">
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Building className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">{t("architecture.skyscrapers.title")}</h2>
          </div>
          <p className="text-gray-700">{t("architecture.skyscrapers.description")}</p>
        </div>
      </div>

      <div className="rounded-lg border bg-white/95 backdrop-blur-sm overflow-hidden shadow-sm">
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop')",
          }}
        ></div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">{t("architecture.historic.title")}</h2>
          </div>
          <p className="text-gray-700">{t("architecture.historic.description")}</p>
        </div>
      </div>

      <div className="rounded-lg border bg-white/95 backdrop-blur-sm overflow-hidden shadow-sm">
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Landmark className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">{t("architecture.landmarks.title")}</h2>
          </div>
          <p className="text-gray-700">{t("architecture.landmarks.description")}</p>
        </div>
      </div>
    </div>
  )
}

