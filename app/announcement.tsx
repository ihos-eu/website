"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function Announcement() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className="w-full bg-blue-600 text-white py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-sm">
        <span className="mr-2">🚀</span>
        <p>
          BETA verze webu! Postupně přidáváme další funkce. Připojte se na náš{" "}
          <Link
            href="https://discord.gg/vfuYG4jhcj"
            className="underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord server
          </Link>{" "}
          pro nejnovější aktualizace.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
          aria-label="Zavřít oznámení"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
