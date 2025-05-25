import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Server, Shield } from "lucide-react"
import ToolsGrid from "@/components/tools-grid"
import SolutionsGrid from "@/components/solutions-grid"
import { featuredTools } from "@/lib/tools-data"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
                Komunitní projekt
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                ihos.eu
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Komunitní technologický projekt od developerů pro developery, který nabízí jednoduché, spolehlivé a
                bezpečné nástroje zdarma.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/nastroje">
                    Prozkoumat nástroje
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/o-projektu">Více o projektu</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] aspect-video rounded-xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white p-8 shadow-lg transform transition-transform hover:scale-[1.02]">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping"></div>
                      <div className="relative h-16 w-16 rounded-full bg-blue-100/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="m18 16 4-4-4-4" />
                          <path d="m6 8-4 4 4 4" />
                          <path d="m14.5 4-5 16" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold">tools.ihos.eu</h2>
                  <p className="mt-2 text-blue-100">Největší nástroje pro developery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
                Naše nástroje
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Nejpoužívanější vývojářské nástroje
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Objevte naši kolekci užitečných online nástrojů, které usnadňují práci vývojářům.
              </p>
            </div>
          </div>

          <ToolsGrid tools={featuredTools} />

          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/nastroje">
                Zobrazit všechny nástroje
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
                Naše řešení
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Komplexní hostingová a cloudová řešení
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Poskytujeme komplexní hostingová a cloudová řešení pro jednotlivce, firmy i velké organizace za nízké
                ceny nebo zcela zdarma. Vyberte si z našich specializovaných služeb nebo nás kontaktujte pro řešení na
                míru.
              </p>
            </div>
          </div>

          <SolutionsGrid />

          <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Potřebujete řešení na míru?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Kontaktujte nás a společně najdeme nejlepší technologické řešení pro váš konkrétní případ. Nabízíme
              konzultace, analýzy a komplexní implementaci.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="mailto:hello@ihos.eu">
                Kontaktujte nás
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vysoký výkon</h3>
              <p className="text-muted-foreground">
                Všechny nástroje běží na výkonných serverech s nejnovější generací NVMe disků a moderní CPU
                architekturou.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
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
                Konstantní monitoring a redundantní infrastruktura zajišťují maximální spolehlivost a dostupnost.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bezpečná platforma</h3>
              <p className="text-muted-foreground">
                Podniková úroveň zabezpečení s DDoS ochranou a pravidelnými zálohami pro maximální bezpečnost.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="https://cloud.ihos.eu" target="_blank" rel="noopener noreferrer">
                Navštívit cloud.ihos.eu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
                Připojte se k nám
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Staňte se součástí komunity</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Připojte se k rostoucí komunitě vývojářů a přispějte k rozvoji projektu ihos.eu.
              </p>
            </div>
          </div>
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <Link href="https://github.com/ihos-eu" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Přispět na GitHubu
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
