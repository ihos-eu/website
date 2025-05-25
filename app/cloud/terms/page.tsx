import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CloudTermsPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-6">
      <div className="space-y-2 text-center mb-8">
        <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-2">
          ihos.cloud
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Podmínky použití</h1>
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              <span>Tyto podmínky upravují vztah mezi poskytovatelem služeb ihos cloud a jeho uživateli</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">1. Úvodní ustanovení</h2>
            <p>
              Tyto podmínky použití (dále jen "Podmínky") upravují práva a povinnosti mezi provozovatelem služby
              ihos.cloud (dále jen "Poskytovatel") a uživateli těchto služeb (dále jen "Uživatel").
            </p>
            <p>Poskytovatelem služeb je Honza, provozovatel projektu ihos.eu, který není plátcem DPH.</p>
            <p>Uživatelem se stává každá fyzická nebo právnická osoba, která využívá služeb Poskytovatele.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">2. Popis služeb</h2>
            <p>Poskytovatel nabízí následující cloudové služby:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Virtuální privátní servery (VPS)</li>
              <li>Webhosting</li>
              <li>Databázové služby</li>
              <li>Objektové úložiště</li>
              <li>Další související služby</li>
            </ul>
            <p>
              Některé služby jsou poskytovány zdarma, zejména pro komunitní projekty, jiné jsou zpoplatněny dle
              aktuálního ceníku.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">3. Registrace a účet</h2>
            <p>
              Pro využívání služeb je nutná registrace a vytvoření uživatelského účtu. Uživatel je povinen uvést
              pravdivé a úplné informace a tyto údaje udržovat aktuální.
            </p>
            <p>
              Uživatel je odpovědný za ochranu svých přihlašovacích údajů a nesmí je sdílet s třetími osobami. Jakékoliv
              podezření na neoprávněný přístup k účtu je Uživatel povinen neprodleně nahlásit Poskytovateli.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">4. Platební podmínky</h2>
            <p>
              Ceny za placené služby jsou uvedeny v aktuálním ceníku. Poskytovatel není plátcem DPH, ceny jsou tedy
              konečné.
            </p>
            <p>
              Platby jsou prováděny předem na základě vystavené faktury nebo prostřednictvím automatického platebního
              systému.
            </p>
            <p>V případě prodlení s platbou je Poskytovatel oprávněn omezit nebo pozastavit poskytování služeb.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">
              5. Práva a povinnosti Uživatele
            </h2>
            <p>Uživatel se zavazuje:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Využívat služby v souladu s těmito Podmínkami a platnými právními předpisy</li>
              <li>Nepoužívat služby k nelegálním účelům nebo k šíření nelegálního obsahu</li>
              <li>Neohrožovat bezpečnost a stabilitu infrastruktury Poskytovatele</li>
              <li>Respektovat práva duševního vlastnictví třetích osob</li>
              <li>Neprovádět činnosti, které by mohly vést k přetížení serverů nebo sítě</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">
              6. Práva a povinnosti Poskytovatele
            </h2>
            <p>Poskytovatel se zavazuje:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Zajistit dostupnost služeb dle sjednaných parametrů</li>
              <li>Provádět pravidelné zálohování dat (pokud je součástí služby)</li>
              <li>Informovat Uživatele o plánovaných odstávkách a údržbě</li>
              <li>Chránit osobní údaje Uživatele v souladu s právními předpisy</li>
            </ul>
            <p>Poskytovatel si vyhrazuje právo:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Změnit rozsah a parametry poskytovaných služeb</li>
              <li>Upravit ceny služeb</li>
              <li>Omezit nebo pozastavit služby v případě porušení těchto Podmínek</li>
              <li>Provádět technické zásahy do infrastruktury za účelem zajištění řádného fungování služeb</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">7. Dostupnost a záruky</h2>
            <p>
              Poskytovatel usiluje o zajištění maximální dostupnosti služeb, nezaručuje však nepřetržitou dostupnost.
              Plánované odstávky budou Uživateli oznámeny předem.
            </p>
            <p>
              Poskytovatel nenese odpovědnost za výpadky způsobené vyšší mocí, útoky třetích stran nebo jinými
              okolnostmi, které nemůže ovlivnit.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">8. Ochrana dat</h2>
            <p>
              Poskytovatel se zavazuje chránit data Uživatele a nakládat s nimi v souladu s právními předpisy.
              Podrobnosti o zpracování osobních údajů jsou uvedeny v Zásadách ochrany osobních údajů.
            </p>
            <p>
              Uživatel je odpovědný za pravidelné zálohování svých dat, pokud není zálohování výslovně součástí sjednané
              služby.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">9. Ukončení služeb</h2>
            <p>
              Uživatel může kdykoliv ukončit využívání služeb, musí však uhradit všechny závazky vůči Poskytovateli.
            </p>
            <p>
              Poskytovatel může ukončit poskytování služeb v případě závažného nebo opakovaného porušení těchto
              Podmínek, a to bez nároku na vrácení již uhrazených plateb.
            </p>
            <p>Po ukončení služeb budou data Uživatele uchována po dobu 14 dnů, poté budou nenávratně smazána.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">10. Závěrečná ustanovení</h2>
            <p>Tyto Podmínky se řídí právním řádem České republiky.</p>
            <p>
              Poskytovatel si vyhrazuje právo tyto Podmínky kdykoliv změnit. O změnách bude Uživatel informován
              prostřednictvím webových stránek nebo e-mailem.
            </p>
            <p>
              Pokud některé ustanovení těchto Podmínek je nebo se stane neplatným, ostatní ustanovení zůstávají v
              platnosti.
            </p>
            <p>Tyto Podmínky nabývají účinnosti dnem 1. 5. 2023.</p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-muted-foreground">
                V případě dotazů nebo nejasností nás kontaktujte na{" "}
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
          href="/cloud/privacy"
          className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-800"
        >
          Ochrana osobních údajů
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
