"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface SectionCardProps {
  section: {
    id: number
    title: string
    description: string
    href: string
    icon: LucideIcon
    color: string
  }
}

export default function SectionCard({ section }: SectionCardProps) {
  const Icon = section.icon
  const { t } = useLanguage()

  return (
    <Link href={section.href} className="block">
      <Card className="h-full city-card border-t-4 border-t-primary overflow-hidden">
        <CardHeader className="pb-2">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${section.color}`}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="mt-4">{section.title}</CardTitle>
          <CardDescription>{section.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end pt-0">
          <div className="flex items-center text-primary text-sm font-medium">
            {t("explore")} <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

