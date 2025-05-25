import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ToolsGrid from "@/components/tools-grid"
import { allTools } from "@/lib/tools-data"

export default function NastrojePage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
                tools.ihos.eu
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Vývojářské nástroje
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Kompletní kolekce užitečných online nástrojů pro vývojáře, které zjednodušují každodenní práci.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="col-span-full">
              <div className="flex items-center space-x-2 mb-6">
                <Button variant="outline" size="sm" className="rounded-full">
                  Všechny
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  Síťové
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  Vývojářské
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  Bezpečnostní
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  Analytické
                </Button>
              </div>
            </div>

            <ToolsGrid tools={allTools} />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Powered by ihos max Servers</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Všechny nástroje na této stránce běží na prémiových ihos max serverech, které poskytují výjimečný výkon,
                spolehlivost a bezpečnost pro všechny vaše vývojářské potřeby.
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
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
                  <path d="M11 12H3" />
                  <path d="m15 16-4-4 4-4" />
                  <path d="M21 5v14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Vysoký výkon</h3>
              <p className="text-muted-foreground">
                Nejnovější generace NVMe disků a moderní CPU architektura pro maximální rychlost.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Dostupnost</h3>
              <p className="text-muted-foreground">
                Konstantní monitoring a redundantní infrastruktura pro maximální spolehlivost.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
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
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <path d="M3 9h18" />
                  <path d="M3 15h18" />
                  <path d="M9 3v18" />
                  <path d="M15 3v18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Bezpečná platforma</h3>
              <p className="text-muted-foreground">
                Podniková úroveň zabezpečení s DDoS ochranou a pravidelnými zálohami.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="https://cloud.ihos.eu" target="_blank" rel="noopener noreferrer">
                Navštívit cloud.ihos.eu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
