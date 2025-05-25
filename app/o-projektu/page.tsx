import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Github, Heart, Users, Mail } from "lucide-react"

export default function OProjektuPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
                O nás
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                O projektu ihos.eu
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Komunitní technologický projekt od developerů pro developery, který nabízí jednoduché, spolehlivé a
                bezpečné služby a nástroje zdarma.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Naše mise</h2>
              <p className="text-muted-foreground">
                Projekt ihos.eu vznikl s cílem vytvořit otevřenou platformu pro vývojáře, která nabízí kvalitní nástroje
                a služby zdarma. Věříme, že technologie by měly být dostupné všem, a proto jsme se rozhodli vytvořit
                komunitu, která sdílí stejné hodnoty.
              </p>
              <p className="text-muted-foreground">
                Naším cílem je neustále zlepšovat a rozšiřovat naše služby, reagovat na potřeby vývojářské komunity a
                vytvářet prostředí, kde mohou vývojáři sdílet své znalosti a zkušenosti.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/nastroje">
                    Prozkoumat nástroje
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/kontakt">Kontaktujte nás</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <CardTitle className="mt-2">Komunita</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jsme rostoucí komunita vývojářů, kteří sdílejí své znalosti a zkušenosti. Připojte se k nám a staňte
                    se součástí tohoto projektu.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Github className="h-6 w-6 text-blue-600" />
                  <CardTitle className="mt-2">Open Source</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Všechny naše nástroje jsou open source a přístupné komunitě vývojářů. Můžete přispět k jejich vývoji
                    nebo je využít ve svých projektech.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Heart className="h-6 w-6 text-blue-600" />
                  <CardTitle className="mt-2">Zdarma pro všechny</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Věříme, že kvalitní nástroje by měly být dostupné všem. Proto jsou všechny naše služby poskytovány
                    zdarma pro celou komunitu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Náš tým</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Za projektem ihos.eu stojí Honza, který věnuje svůj čas a znalosti rozvoji této platformy.
              </p>
            </div>
          </div>
          <div className="mx-auto flex justify-center mt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Honza</h3>
                <p className="text-sm text-muted-foreground">Full-stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Připojte se k nám</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Máte zájem přispět k rozvoji projektu ihos.eu? Kontaktujte nás a pomozte nám vytvářet lepší nástroje pro
                vývojáře.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="mailto:hello@ihos.eu">
                  <Mail className="mr-2 h-4 w-4" />
                  Kontaktujte nás
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
