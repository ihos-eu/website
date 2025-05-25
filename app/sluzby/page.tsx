import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Database, FileCode, GitBranch, Globe, Server, Shield } from "lucide-react"

export default function SluzbyPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Naše služby a nástroje</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Objevte kompletní nabídku služeb a nástrojů, které ihos.eu nabízí vývojářské komunitě.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <Database className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Databázové služby</CardTitle>
                <CardDescription>Rychlé a spolehlivé databázové řešení</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>NoSQL databáze</li>
                  <li>SQL databáze</li>
                  <li>Automatické zálohování</li>
                  <li>Jednoduché API</li>
                  <li>Vysoký výkon</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/sluzby/databaze">
                    Více informací
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <Server className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Hostingové řešení</CardTitle>
                <CardDescription>Spolehlivý hosting pro vaše aplikace</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Webhosting</li>
                  <li>Aplikační hosting</li>
                  <li>Kontejnerové řešení</li>
                  <li>Automatické škálování</li>
                  <li>Nepřetržitý monitoring</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/sluzby/hosting">
                    Více informací
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <GitBranch className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Vývojářské nástroje</CardTitle>
                <CardDescription>Nástroje pro zjednodušení vývoje</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>CI/CD pipeline</li>
                  <li>Testovací nástroje</li>
                  <li>Verzovací systémy</li>
                  <li>Monitorovací nástroje</li>
                  <li>Analytické nástroje</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/sluzby/nastroje">
                    Více informací
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Bezpečnostní řešení</CardTitle>
                <CardDescription>Ochrana vašich dat a aplikací</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>SSL certifikáty</li>
                  <li>Firewall</li>
                  <li>DDoS ochrana</li>
                  <li>Bezpečnostní audity</li>
                  <li>Šifrování dat</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/sluzby/bezpecnost">
                    Více informací
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>API služby</CardTitle>
                <CardDescription>Rozhraní pro integraci s vašimi aplikacemi</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>RESTful API</li>
                  <li>GraphQL</li>
                  <li>Webhooks</li>
                  <li>Dokumentace API</li>
                  <li>Testovací prostředí</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/sluzby/api">
                    Více informací
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <FileCode className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Dokumentace a vzdělávání</CardTitle>
                <CardDescription>Materiály pro vývojáře</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Technická dokumentace</li>
                  <li>Tutoriály</li>
                  <li>Webináře</li>
                  <li>Příklady kódu</li>
                  <li>Komunitní fórum</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/sluzby/dokumentace">
                    Více informací
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
