import type React from "react"

export interface Tool {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  features: string[]
  url: string
  status: "active" | "coming-soon"
}

export const allTools: Tool[] = [
  {
    id: "storage",
    name: "Storage",
    description: "Sdílení souborů přes Telegram Storage Bot",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 dark:text-blue-400"
      >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    features: [
      "Neomezená velikost souborů",
      "Rychlé nahrávání a stahování",
      "Sdílení přes odkaz",
      "Integrace s Telegramem",
      "Zabezpečený přenos",
    ],
    url: "https://tools.ihos.eu/storage",
    status: "active",
  },
  {
    id: "whois",
    name: "Whois",
    description: "Profesionální vyhledávač domén (RDAP & Whois)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 dark:text-blue-400"
      >
        <path d="M2 6h4" />
        <path d="M2 10h4" />
        <path d="M2 14h4" />
        <path d="M2 18h4" />
        <rect width="8" height="16" x="8" y="4" rx="1" />
        <path d="M18 16h.01" />
        <path d="M18 20h.01" />
        <path d="M22 6h-4" />
        <path d="M22 10h-4" />
        <path d="M22 14h-4" />
        <path d="M22 18h-4" />
      </svg>
    ),
    features: [
      "Detailní informace o doménách",
      "Podpora RDAP a Whois protokolů",
      "Historie registrací",
      "Informace o registrátorovi",
      "Kontrola dostupnosti domén",
    ],
    url: "https://tools.ihos.eu/whois",
    status: "active",
  },
  {
    id: "search",
    name: "Search",
    description: "Pokročilé vyhledávání informací",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 dark:text-blue-400"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    features: [
      "Fulltextové vyhledávání",
      "Filtrování podle kategorií",
      "Pokročilé vyhledávací operátory",
      "Rychlé výsledky",
      "Relevantní nálezy",
    ],
    url: "https://tools.ihos.eu/search",
    status: "active",
  },
  {
    id: "cloud",
    name: "Cloud",
    description: "Cloudové služby pro vývojáře a firmy - hosting, servery, databáze",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 dark:text-blue-400"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    features: [
      "Hosting, servery, databáze",
      "Škálovatelné řešení",
      "Vysoký výkon",
      "Nepřetržitá dostupnost",
      "Zabezpečené prostředí",
    ],
    url: "https://cloud.ihos.eu",
    status: "active",
  },
  {
    id: "ai",
    name: "AI",
    description: "Umělá inteligence pro automatizaci a analýzu dat",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 dark:text-blue-400"
      >
        <path d="M12 2H2v10h10V2Z" />
        <path d="M22 12h-4v4h-4v4h8v-8Z" />
        <path d="M18 2h4v4" />
        <path d="M14 6V2h4" />
        <path d="m22 2-8 8" />
        <path d="M6 12v4" />
        <path d="M2 12h4" />
        <path d="M12 18h-2" />
        <path d="M8 18v2" />
        <path d="M12 12v2" />
      </svg>
    ),
    features: [
      "Strojové učení",
      "Zpracování přirozeného jazyka",
      "Analýza dat",
      "Prediktivní modely",
      "Automatizace procesů",
    ],
    url: "https://tools.ihos.eu/ai",
    status: "active",
  },
  {
    id: "status",
    name: "Status",
    description: "Veřejný monitoring dostupnosti všech služeb",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 dark:text-blue-400"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    features: [
      "Monitoring v reálném čase",
      "Historie výpadků",
      "Notifikace o problémech",
      "Detailní statistiky",
      "Přehledné grafy",
    ],
    url: "https://tools.ihos.eu/status",
    status: "active",
  },
  {
    id: "paste",
    name: "Paste",
    description: "Sdílení kódu a textových snippetů",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 dark:text-blue-400"
      >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
      </svg>
    ),
    features: [
      "Zvýrazňování syntaxe",
      "Sdílení přes odkaz",
      "Nastavení expirace",
      "Soukromé snippety",
      "Podpora mnoha jazyků",
    ],
    url: "https://tools.ihos.eu/paste",
    status: "coming-soon",
  },
  {
    id: "tools",
    name: "Tools",
    description: "Kolekce užitečných online nástrojů pro vývojáře",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600 dark:text-blue-400"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    features: ["Formátování kódu", "Konverze formátů", "Generátory kódu", "Validátory", "Testovací nástroje"],
    url: "https://tools.ihos.eu/tools",
    status: "coming-soon",
  },
]

export const featuredTools = allTools.filter((tool) =>
  ["storage", "whois", "search", "cloud", "ai", "status"].includes(tool.id),
)
