"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the available languages
export type Language = "en" | "bg"

// Define the context type
type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
})

// Define translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Login page
    "app.title": "City Explorer",
    "login.subtitle": "Enter your access code to discover the city",
    "login.placeholder": "Enter your access code",
    "login.button": "Explore the City",
    "login.error": "Invalid access code",
    "login.api.error": "An error occurred while connecting to the server. Please try again.",

    // Dashboard
    "dashboard.welcome": "Welcome to the City",
    "dashboard.subtitle": "Explore the urban landscape and discover what the city has to offer",

    // Sections
    "section.food.title": "Are you hungry?",
    "section.food.description": "Check out our food offers (dine-in at the restaurant or takeout)",
    "section.transport.title": "Need a transportation?",
    "section.transport.description": "Check out our city transport options (taxi and public transport)",
    "section.landmarks.title": "Want to explore the city?",
    "section.landmarks.description": "Check out our offers for walks and sightseeing in and around the city",

    // Architecture page
    "architecture.skyscrapers.title": "Modern Skyscrapers",
    "architecture.skyscrapers.description":
      "Explore the towering skyscrapers that define the city's skyline. These architectural marvels showcase innovative design and engineering, pushing the boundaries of what's possible in urban construction.",
    "architecture.historic.title": "Historic Districts",
    "architecture.historic.description":
      "Discover the charm of historic neighborhoods with their preserved architecture from past eras. These districts tell the story of the city's evolution through their unique architectural styles.",
    "architecture.landmarks.title": "Iconic Landmarks",
    "architecture.landmarks.description":
      "Visit the iconic landmarks that have become symbols of the city. These architectural wonders attract visitors from around the world and represent the cultural identity of the urban landscape.",

    // City Guides page
    "guides.maps.title": "Neighborhood Maps",
    "guides.maps.description":
      "Detailed maps of each neighborhood with points of interest, transit options, and walking routes. Our neighborhood guides help you navigate the city like a local, highlighting hidden gems and popular attractions in each district.",
    "guides.exploration.title": "Urban Exploration",
    "guides.exploration.description":
      "Curated walking tours that take you through the most interesting parts of the city. These self-guided routes are designed to showcase the unique character of each area, from historic districts to modern developments and everything in between.",
    "guides.culinary.title": "Culinary Adventures",
    "guides.culinary.description":
      "Discover the city's diverse food scene with our culinary guides. From street food to fine dining, we highlight the best places to eat in each neighborhood. Our guides include recommendations for different cuisines, price points, and dining experiences.",

    // Urban Resources page
    "resources.maps.title": "City Maps",
    "resources.maps.description":
      "Download detailed maps of the city, including transit routes, bike paths, and points of interest. Our maps are regularly updated and available in multiple formats.",
    "resources.maps.button": "Download Maps",
    "resources.transport.title": "Transportation Guide",
    "resources.transport.description":
      "Everything you need to know about getting around the city, including public transit schedules, ride-sharing options, bike rentals, and parking information.",
    "resources.transport.button": "View Transportation Guide",
    "resources.events.title": "Events Calendar",
    "resources.events.description":
      "Stay up-to-date with city events, festivals, concerts, and exhibitions. Our comprehensive calendar includes both major events and hidden gems throughout the urban area.",
    "resources.events.button": "Browse Events",

    // Common
    back: "Back to Dashboard",
    logout: "Logout",
    explore: "Explore",
  },
  bg: {
    // Login page
    "app.title": "Градски Пътеводител",
    "login.subtitle": "Въведете вашия код за достъп, за да откриете града",
    "login.placeholder": "Въведете вашия код за достъп",
    "login.button": "Разгледайте Града",
    "login.error": "Невалиден код за достъп",
    "login.api.error": "Възникна грешка при свързване със сървъра. Моля, опитайте отново.",

    // Dashboard
    "dashboard.welcome": "Добре дошли в Града",
    "dashboard.subtitle": "Разгледайте градския пейзаж и открийте какво предлага градът",

    // Sections
    "section.food.title": "Гладен ли си?",
    "section.food.description": "Разгледайте предложенията ни за храна (на място в ресторанта или за вкъщи)",
    "section.transport.title": "Имате нужда от транспорт?",
    "section.transport.description": "Разгледайте нашите предложения за транспорт в града (таксита и градски транспорт)",
    "section.landmarks.title": "Искате да опознаете града?",
    "section.landmarks.description": "Разгледайте предложенията ни за разходки и забележителности в и около града",

    // Architecture page
    "architecture.skyscrapers.title": "Модерни Небостъргачи",
    "architecture.skyscrapers.description":
      "Разгледайте извисяващите се небостъргачи, които определят градския хоризонт. Тези архитектурни чудеса демонстрират иновативен дизайн и инженерство, разширявайки границите на възможното в градското строителство.",
    "architecture.historic.title": "Исторически Квартали",
    "architecture.historic.description":
      "Открийте чара на историческите квартали с тяхната запазена архитектура от минали епохи. Тези райони разказват историята на еволюцията на града чрез своите уникални архитектурни стилове.",
    "architecture.landmarks.title": "Емблематични Забележителности",
    "architecture.landmarks.description":
      "Посетете емблематичните забележителности, които са се превърнали в символи на града. Тези архитектурни чудеса привличат посетители от цял свят и представляват културната идентичност на градския пейзаж.",

    // City Guides page
    "guides.maps.title": "Карти на Кварталите",
    "guides.maps.description":
      "Подробни карти на всеки квартал с точки на интерес, транспортни опции и пешеходни маршрути. Нашите квартални пътеводители ви помагат да се ориентирате в града като местен жител, подчертавайки скрити съкровища и популярни атракции във всеки район.",
    "guides.exploration.title": "Градско Изследване",
    "guides.exploration.description":
      "Подбрани пешеходни обиколки, които ви отвеждат през най-интересните части на града. Тези самостоятелни маршрути са проектирани да покажат уникалния характер на всяка област, от исторически райони до модерни разработки и всичко между тях.",
    "guides.culinary.title": "Кулинарни Приключения",
    "guides.culinary.description":
      "Открийте разнообразната кулинарна сцена на града с нашите кулинарни пътеводители. От улична храна до изискана кухня, ние подчертаваме най-добрите места за хранене във всеки квартал. Нашите пътеводители включват препоръки за различни кухни, ценови категории и кулинарни изживявания.",

    // Urban Resources page
    "resources.maps.title": "Градски Карти",
    "resources.maps.description":
      "Изтеглете подробни карти на града, включително транспортни маршрути, велосипедни алеи и точки на интерес. Нашите карти се актуализират редовно и са налични в множество формати.",
    "resources.maps.button": "Изтеглете Карти",
    "resources.transport.title": "Транспортен Пътеводител",
    "resources.transport.description":
      "Всичко, което трябва да знаете за придвижването в града, включително разписания на обществения транспорт, опции за споделено пътуване, наем на велосипеди и информация за паркиране.",
    "resources.transport.button": "Вижте Транспортния Пътеводител",
    "resources.events.title": "Календар на Събитията",
    "resources.events.description":
      "Бъдете в крак със събитията в града, фестивалите, концертите и изложбите. Нашият изчерпателен календар включва както големи събития, така и скрити съкровища в цялата градска зона.",
    "resources.events.button": "Разгледайте Събитията",

    // Common
    back: "Обратно към Началната страница",
    logout: "Изход",
    explore: "Разгледайте",
  },
}

// Create the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with the stored language or default to English
  const [language, setLanguageState] = useState<Language>("en")

  // Load the saved language preference on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bg")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Update the language and save to localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  return useContext(LanguageContext)
}

