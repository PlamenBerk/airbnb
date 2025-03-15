"use client"

import { useLanguage } from "@/contexts/language-context"
import {CookingPot, BookOpen, Landmark, Car} from "lucide-react"
import SectionCard from "@/components/section-card"

export function ClientDashboardContent() {
  const { t } = useLanguage()

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-white">{t("dashboard.welcome")}</h1>
      <p className="mt-2 text-xl text-white/80">{t("dashboard.subtitle")}</p>
    </>
  )
}

export function ClientDashboardPage() {
  return (
    <div className="min-h-screen bg-dashboard">
      <div className="pt-16">
        <div
          className="h-64 w-full flex items-center"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(30, 58, 138, 0.7), rgba(124, 58, 237, 0.7))",
          }}
        >
          <div className="container mx-auto px-4">
            <ClientDashboardContent />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <ClientSections />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ClientSections() {
  const { t } = useLanguage()

  const sections = [
    {
      id: 1,
      title: t("section.food.title"),
      description: t("section.food.description"),
      href: "/dashboard/food",
      icon: CookingPot,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: t("section.transport.title"),
      description: t("section.transport.description"),
      href: "/dashboard/transport",
      icon: Car,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      title: t("section.landmarks.title"),
      description: t("section.landmarks.description"),
      href: "/dashboard/landmarks",
      icon: Landmark,
      color: "bg-emerald-100 text-emerald-600",
    },
  ]

  return (
    <>
      {sections.map((section) => (
        <SectionCard key={section.id} section={section} />
      ))}
    </>
  )
}

