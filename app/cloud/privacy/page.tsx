import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CloudPrivacyPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-6">
      <div className="space-y-2 text-center mb-8">
        <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-2">
          ihos.cloud
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ochrana osobních údajů</h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">Platné od 1. 5. 2023</p>
      </div>

      <Card className="mb-8 border-blue-100 dark:border-blue-900/50">
        <CardContent className="p-6">
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Tyto zásady popisují, jak nakládáme s vašimi osobními údaji při využívání služeb ihos cloud</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">1. Správce osobních údajů</h2>
            <p>
              Správcem osobních údajů je Honza, provozovatel projektu ihos.eu a služby ihos.cloud (dále jen "Správce").
            </p>
            <p>Kontaktní údaje Správce:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>E-mail: hello@ihos.eu</li>
              <li>Discord server: https://discord.gg/vfuYG4jhcj</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">
              2. Jaké údaje zpracováváme
            </h2>
            <p>Při poskytování cloudových služeb zpracováváme následující kategorie osobních údajů:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Identifikační údaje (jméno, příjmení, uživatelské jméno)</li>
              <li>Kontaktní údaje (e-mail, telefonní číslo)</li>
              <li>Fakturační údaje (adresa, IČO, DIČ)</li>
              <li>Platební údaje (informace o provedených platbách)</li>
              <li>Technické údaje (IP adresa, logy přístupů, informace o využívání služeb)</li>
              <li>Obsah uložený na poskytovaných službách (data na VPS, webhosting, databáze)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">3. Účely zpracování</h2>
            <p>Vaše osobní údaje zpracováváme pro následující účely:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Poskytování cloudových služeb (VPS, webhosting, databáze, objektové úložiště)</li>
              <li>Správa uživatelských účtů</li>
              <li>Fakturace a zpracování plateb</li>
              <li>Komunikace s uživateli a poskytování technické podpory</li>
              <li>Zajištění bezpečnosti a stability služeb</li>
              <li>Plnění zákonných povinností</li>
              <li>Zlepšování a rozvoj služeb</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">
              4. Právní základ zpracování
            </h2>
            <p>Osobní údaje zpracováváme na základě následujících právních titulů:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Plnění smlouvy - zpracování nezbytné pro poskytování služeb</li>
              <li>Plnění právních povinností - zejména v oblasti účetnictví a daní</li>
              <li>Oprávněný zájem - ochrana našich práv a majetku, zajištění bezpečnosti služeb</li>
              <li>Souhlas - v případech, kdy nám jej udělíte (např. pro marketingové účely)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">5. Doba uchovávání údajů</h2>
            <p>Osobní údaje uchováváme po dobu nezbytně nutnou k naplnění účelů zpracování:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Po dobu trvání smluvního vztahu a poskytování služeb</li>
              <li>Po dobu nezbytnou k vyřízení případných reklamací (obvykle 2 roky)</li>
              <li>Po dobu stanovenou právními předpisy (např. účetní doklady 5-10 let)</li>
              <li>Logy a technické údaje obvykle 6 měsíců</li>
            </ul>
            <p>
              Po ukončení služeb jsou data uživatele uchována po dobu 14 dnů, poté jsou nenávratně smazána, pokud není
              dohodnuto jinak.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">
              6. Příjemci osobních údajů
            </h2>
            <p>Vaše osobní údaje můžeme sdílet s následujícími kategoriemi příjemců:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Poskytovatelé technických a podpůrných služeb (např. poskytovatelé serverové infrastruktury)</li>
              <li>Poskytovatelé platebních služeb</li>
              <li>Státní orgány v případech stanovených zákonem</li>
            </ul>
            <p>
              Všichni naši partneři jsou vázáni povinností mlčenlivosti a nesmějí využít poskytnuté údaje k žádným jiným
              účelům, než ke kterým jsme jim je zpřístupnili.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">7. Zabezpečení dat</h2>
            <p>
              Přijali jsme a udržujeme veškerá možná technická a organizační opatření, která zamezují zneužití,
              poškození nebo zničení vašich osobních údajů, zejména:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Šifrování dat při přenosu (SSL/TLS)</li>
              <li>Pravidelné aktualizace systémů a bezpečnostní patche</li>
              <li>Omezený přístup k osobním údajům</li>
              <li>Pravidelné zálohování dat</li>
              <li>Firewall a další bezpečnostní opatření</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">8. Vaše práva</h2>
            <p>V souvislosti se zpracováním vašich osobních údajů máte následující práva:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Právo na přístup k osobním údajům</li>
              <li>Právo na opravu nepřesných nebo neúplných osobních údajů</li>
              <li>Právo na výmaz (právo být zapomenut)</li>
              <li>Právo na omezení zpracování</li>
              <li>Právo na přenositelnost údajů</li>
              <li>Právo vznést námitku proti zpracování</li>
              <li>Právo odvolat souhlas se zpracováním</li>
              <li>Právo podat stížnost u dozorového úřadu (Úřad pro ochranu osobních údajů)</li>
            </ul>
            <p>Pro uplatnění těchto práv nás kontaktujte na e-mailové adrese hello@ihos.eu.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">
              9. Cookies a podobné technologie
            </h2>
            <p>
              Na našich webových stránkách používáme cookies a podobné technologie pro zajištění funkčnosti, analýzu
              návštěvnosti a personalizaci obsahu.
            </p>
            <p>
              Podrobné informace o používání cookies jsou k dispozici v samostatném dokumentu Zásady používání cookies.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">
              10. Změny zásad ochrany osobních údajů
            </h2>
            <p>
              Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat. Aktuální verze bude vždy dostupná na
              našich webových stránkách.
            </p>
            <p>
              O významných změnách vás budeme informovat prostřednictvím e-mailu nebo oznámení na našich webových
              stránkách.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-muted-foreground">
                V případě dotazů ohledně zpracování osobních údajů nás kontaktujte na{" "}
                <a href="mailto:hello@ihos.eu" className="text-blue-600 hover:underline">
                  hello@ihos.eu
                </a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/cloud"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
        >
          Zpět na Cloud
        </Link>
        <Link
          href="/cloud/terms"
          className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-800"
        >
          Podmínky použití
        </Link>
        <Link
          href="/cloud/usage-policy"
          className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-800"
        >
          Pravidla používání
        </Link>
      </div>
    </div>
  )
}
