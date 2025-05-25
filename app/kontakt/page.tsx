import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"

export default function KontaktPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
                Kontakt
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Kontaktujte nás
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Máte dotaz nebo nápad? Neváhejte nás kontaktovat. Jsme tu pro vás.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Napište nám</h2>
              <p className="text-muted-foreground mb-8">
                Pro jakékoliv dotazy, návrhy nebo informace o našich službách nás kontaktujte na emailu:
              </p>
              <a
                href="mailto:hello@ihos.eu"
                className="inline-flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xl font-medium"
              >
                <Mail className="mr-2 h-6 w-6" />
                hello@ihos.eu
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2 w-full mt-12">
              <Card>
                <CardHeader className="pb-2">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <CardTitle className="mt-2">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <a href="mailto:hello@ihos.eu" className="text-blue-600 hover:underline">
                      hello@ihos.eu
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <CardTitle className="mt-2">Adresa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Praha, Česká republika</CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-12 w-full">
              <div className="p-6">
                <h3 className="text-lg font-bold">Často kladené dotazy</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-medium">Jsou všechny služby opravdu zdarma?</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Většina našich služeb a nástrojů je poskytována zdarma nebo za velmi nízkou cenu. U některých
                      pokročilých služeb může být účtován minimální poplatek.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Jak rychle odpovídáte na emaily?</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Snažíme se odpovídat na všechny dotazy do 24 hodin v pracovních dnech.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Nabízíte řešení na míru?</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ano, kontaktujte nás s vašimi požadavky a společně najdeme nejlepší řešení pro váš projekt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
