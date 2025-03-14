"use client"

import { useLanguage } from "@/contexts/language-context"
import { Building, BookOpen, Landmark } from "lucide-react"
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
      <div
        className="h-64 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2532&auto=format&fit=crop')",
          backgroundPosition: "center bottom",
          backgroundAttachment: "scroll", // Explicitly set to scroll
        }}
      >
        <div className="h-full w-full bg-gradient-to-r from-blue-900/70 to-purple-900/70 flex items-center">
          <div className="container mx-auto px-4">
            <ClientDashboardContent />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <ClientSections />
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
      title: t("section.architecture.title"),
      description: t("section.architecture.description"),
      href: "/dashboard/product-features",
      icon: Building,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: t("section.guides.title"),
      description: t("section.guides.description"),
      href: "/dashboard/user-guides",
      icon: BookOpen,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      title: t("section.resources.title"),
      description: t("section.resources.description"),
      href: "/dashboard/resources",
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

