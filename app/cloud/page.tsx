import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cloud, Database, Server, Shield, Zap, Check } from "lucide-react"
import Link from "next/link"

interface PricingPlan {
  id: string
  name: string
  icon: string
  cores: number
  ram: number
  storage: number
  price: number
  popular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    icon: "⚡",
    cores: 1,
    ram: 6,
    storage: 40,
    price: 67.2,
  },
  {
    id: "starter-pro",
    name: "Starter Pro",
    icon: "🚀",
    cores: 2,
    ram: 8,
    storage: 50,
    price: 108.0,
    popular: true,
  },
  {
    id: "performance",
    name: "Performance",
    icon: "🔝",
    cores: 4,
    ram: 12,
    storage: 100,
    price: 139.2,
  },
  {
    id: "turbo",
    name: "Turbo",
    icon: "💪",
    cores: 4,
    ram: 16,
    storage: 150,
    price: 189.6,
  },
  {
    id: "power",
    name: "Power",
    icon: "💪",
    cores: 6,
    ram: 24,
    storage: 200,
    price: 273.6,
  },
  {
    id: "ultra",
    name: "Ultra",
    icon: "🏆",
    cores: 6,
    ram: 36,
    storage: 250,
    price: 405.6,
  },
  {
    id: "ultimate",
    name: "Ultimate",
    icon: "🌍",
    cores: 8,
    ram: 48,
    storage: 300,
    price: 550.4,
  },
]

export default function CloudPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
                ihos.cloud
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Cloudové služby
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Výkonné a spolehlivé cloudové služby za zlomek běžné ceny nebo zcela zdarma pro komunitní projekty.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="#pricing">
                  Zobrazit ceník
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:hello@ihos.eu">Kontaktujte nás</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Naše cloudové služby</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Nabízíme komplexní řešení pro vaše projekty s důrazem na výkon, spolehlivost a bezpečnost.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <Server className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Virtuální servery</CardTitle>
                <CardDescription>Výkonné VPS servery s plnou kontrolou</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Dedikované výpočetní zdroje</li>
                  <li>SSD úložiště s vysokým výkonem</li>
                  <li>Neomezený přenos dat</li>
                  <li>Plný root přístup</li>
                  <li>Široký výběr operačních systémů</li>
                  <li>Automatické zálohování</li>
                </ul>
                <p className="text-sm font-medium text-blue-600 mb-4">
                  Od 67,20 Kč/měsíc nebo zdarma pro neziskové organizace a vývojáře
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="#pricing">
                    Zobrazit ceník
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <Database className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Databázové služby</CardTitle>
                <CardDescription>Spolehlivé a rychlé databáze</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>MySQL/MariaDB</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Automatické zálohování</li>
                  <li>Vysoká dostupnost</li>
                </ul>
                <p className="text-sm font-medium text-blue-600 mb-4">Od 30 Kč/měsíc nebo zdarma s hostingem</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="mailto:hello@ihos.eu">
                    Kontaktujte nás
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <Cloud className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Objektové úložiště</CardTitle>
                <CardDescription>Škálovatelné úložiště pro vaše data</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>S3 kompatibilní API</li>
                  <li>Neomezená kapacita</li>
                  <li>Vysoká dostupnost</li>
                  <li>Geografická redundance</li>
                  <li>CDN integrace</li>
                  <li>Šifrování dat</li>
                </ul>
                <p className="text-sm font-medium text-blue-600 mb-4">Od 0,10 Kč/GB nebo zdarma do 10GB</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="mailto:hello@ihos.eu">
                    Kontaktujte nás
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ceník VPS serverů</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Vyberte si plán, který nejlépe vyhovuje vašim potřebám. Pro neziskové organizace a vývojáře nabízíme
                služby zdarma.
              </p>
              <div className="inline-flex items-center justify-center mt-4 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  💡 Pro neziskové organizace a vývojáře jsou služby zdarma
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`flex flex-col overflow-hidden ${plan.popular ? "border-blue-500 shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">Nejoblíbenější</div>
                )}
                <CardHeader className="pb-2">
                  <div className="text-4xl mb-2">{plan.icon}</div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price.toFixed(2)} Kč</span>
                    <span className="ml-1 text-sm text-muted-foreground">/měsíc</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{plan.cores} vCore CPU</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{plan.ram} GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{plan.storage} GB NVMe úložiště</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Neomezený přenos dat</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>99.9% dostupnost</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>DDoS ochrana</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>
                    <a href="https://discord.gg/vfuYG4jhcj" target="_blank" rel="noopener noreferrer">
                      Objednat
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Proč zvolit ihos cloud?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Nabízíme cloudové služby s důrazem na výkon, spolehlivost a bezpečnost za zlomek běžné ceny.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col items-center text-center p-6">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-lg mb-2">Vysoký výkon</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Nejnovější generace NVMe disků a moderní CPU architektura pro maximální rychlost.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center p-6">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-lg mb-2">Bezpečnost</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  DDoS ochrana, firewall, pravidelné bezpečnostní aktualizace a šifrování dat.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 mb-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <CardTitle className="text-lg mb-2">24/7 Dostupnost</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Garantovaná dostupnost 99,9% s nepřetržitým monitoringem a podporou.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 mb-4"
              >
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <CardTitle className="text-lg mb-2">Nízké ceny</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                  Až o 70% nižší ceny než u komerčních poskytovatelů a možnost bezplatného využití pro komunitní
                  projekty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Často kladené dotazy</h2>
                <p className="text-muted-foreground">Odpovědi na nejčastější otázky o našich cloudových službách</p>
              </div>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold">Jak mohu získat služby zdarma?</h3>
                  <p className="text-muted-foreground mt-1">
                    Pokud jste nezisková organizace nebo vývojář pracující na veřejně prospěšném projektu, připojte se
                    na náš Discord server a rádi vám poskytneme služby zdarma.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold">Jaké operační systémy nabízíte?</h3>
                  <p className="text-muted-foreground mt-1">
                    Nabízíme širokou škálu operačních systémů včetně Ubuntu, Debian, CentOS, Fedora, Windows Server a
                    dalších. Můžete také nahrát vlastní ISO.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold">Jak probíhá objednávka a platba?</h3>
                  <p className="text-muted-foreground mt-1">
                    Pro objednání služeb se připojte na náš Discord server, kde vám poskytneme všechny potřebné
                    informace. Platby probíhají měsíčně nebo ročně (s 10% slevou) bankovním převodem.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold">Jak je to s DPH?</h3>
                  <p className="text-muted-foreground mt-1">Nejsme plátci DPH, takže uvedené ceny jsou konečné.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold">Jak probíhá platba?</h3>
                  <p className="text-muted-foreground mt-1">
                    Platby probíhají měsíčně nebo ročně (s 10% slevou) bankovním převodem. Po objednání vám zašleme
                    fakturu s platebními údaji.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Připojte se k naší komunitě</h2>
                <p className="text-muted-foreground">
                  Staňte se součástí rostoucí komunity vývojářů a získejte přístup k exkluzivním nabídkám a podpoře.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Card className="p-6">
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold text-lg">Dokumenty a podmínky</h3>
                    <p className="text-muted-foreground">
                      Přečtěte si naše podmínky použití a další důležité dokumenty
                    </p>
                    <div className="flex flex-col space-y-2 mt-4">
                      <Link href="/cloud/terms" className="text-blue-600 hover:underline flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Podmínky použití
                      </Link>
                      <Link href="/cloud/privacy" className="text-blue-600 hover:underline flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Ochrana osobních údajů
                      </Link>
                      <Link href="/cloud/usage-policy" className="text-blue-600 hover:underline flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Pravidla používání
                      </Link>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex flex-col space-y-4">
                    <h3 className="font-semibold text-lg">Kontaktujte nás</h3>
                    <p className="text-muted-foreground">
                      Máte dotaz nebo potřebujete pomoc? Neváhejte nás kontaktovat.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                        <a href="mailto:hello@ihos.eu">
                          Napište nám
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <a href="https://discord.gg/vfuYG4jhcj" target="_blank" rel="noopener noreferrer">
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
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="4" />
                            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                            <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
                            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                          </svg>
                          Discord server
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
