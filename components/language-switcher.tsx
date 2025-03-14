"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage, type Language } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={() => setIsOpen(!isOpen)}>
        <Globe className="h-4 w-4" />
        <span>{language === "en" ? "EN" : "BG"}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              className={`block px-4 py-2 text-sm w-full text-left ${language === "en" ? "bg-gray-100 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => toggleLanguage("en")}
              role="menuitem"
            >
              English
            </button>
            <button
              className={`block px-4 py-2 text-sm w-full text-left ${language === "bg" ? "bg-gray-100 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => toggleLanguage("bg")}
              role="menuitem"
            >
              Български
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

