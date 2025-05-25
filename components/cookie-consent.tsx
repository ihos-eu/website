"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-md md:flex md:items-center md:justify-between">
      <div className="mb-3 text-sm text-gray-700 md:mb-0 md:mr-4">
        Tento web používá cookies pro zlepšení uživatelského zážitku.
        <Link href="/cookies" className="ml-1 text-blue-600 hover:underline">
          Více informací
        </Link>
      </div>
      <Button onClick={acceptCookies} className="w-full md:w-auto">
        Souhlasím
      </Button>
    </div>
  )
}
