import Link from "next/link"

export default function AnnouncementPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 md:p-8">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
              🧾 Oficiální reakce projektu <span className="font-extrabold">ihos.cloud</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <span className="mr-1">📅</span>
                <span>Datum: 22. května 2025</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center">
                <span className="mr-1">📨</span>
                <span>
                  Kontakt:{" "}
                  <Link href="mailto:hello@ihos.eu" className="text-blue-600 hover:underline">
                    hello@ihos.eu
                  </Link>
                </span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center">
                <span className="mr-1">🌐</span>
                <span>
                  Web:{" "}
                  <Link href="https://ihos.cloud" className="text-blue-600 hover:underline">
                    https://ihos.cloud
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            V reakci na veřejně šířené tvrzení od osoby vystupující jako <em>Matt Chmela / CEO of Moonsworth</em>,
            považujeme za nutné uvést následující:
          </p>

          <hr className="border-gray-200 dark:border-gray-800" />

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                <span className="mr-2">⚠️</span> 1. K prohlášení o ukončení spolupráce
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Osoba známá jako Matt provozovala pod účtem na platformě ihos.cloud projekt <strong>MattHosting</strong>
                , přičemž se naší infrastruktury opakovaně dopouštěla závažných porušení smluvních podmínek. Tyto
                skutečnosti zahrnovaly mimo jiné:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Nepovolený <strong>provoz komerčních a veřejných služeb třetím stranám</strong>, včetně webhostingu a
                  voice serverů.
                </li>
                <li>
                  <strong>Přeprodej hostingových kapacit</strong> bez souhlasu poskytovatele.
                </li>
                <li>
                  <strong>Opakované zatěžování sítě a rušení provozu infrastruktury</strong>.
                </li>
                <li>
                  <strong>Nátlakové jednání vůči technické podpoře</strong> včetně opakovaného spamu, nátlaku a
                  nevyžádané komunikace.
                </li>
                <li>
                  A co je nejzávažnější: <strong>přímé výhružky fyzickým násilím a smrtí vůči provozovateli</strong>,
                  konkrétně v podobě zprávy <em>„keď mi začneš spamovať môj súkromný mail, prizabijem ťa"</em>, která je
                  zdokumentována.
                </li>
              </ul>
            </div>

            <hr className="border-gray-200 dark:border-gray-800" />

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                <span className="mr-2">📌</span> 2. O naší platformě
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ihos.cloud</strong> je komunitní a nezávislý technologický projekt, provozovaný bez právní
                subjektivity společnosti (nejedná se o firmu), který funguje na principu dobrovolných příspěvků a malých
                poplatků za provozní náklady. Věnujeme se poskytování technických nástrojů, VPS a hostingu pro
                vývojářské, vzdělávací a nekomerční účely.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Služby nejsou určeny pro přeprodej, provoz herních nebo komerčních hostingů, pokud není výslovně
                dohodnuto jinak.
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-800" />

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                <span className="mr-2">🛑</span> 3. Prohlášení uživatele „Matt" je:
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Zavádějící</strong> – spolupráce nebyla ukončena z naší strany kvůli „nerealistickému
                  hostingu", ale z důvodu <strong>závažného porušení pravidel a výhružného chování</strong>.
                </li>
                <li>
                  <strong>Poškozující</strong> – tvrzení o „neprofesionalitě" je zcela nepodložené, přičemž důvodem
                  nedostupnosti jeho služby je{" "}
                  <strong>okamžité pozastavení na základě platných smluvních podmínek</strong>, nikoliv výpadek z naší
                  strany.
                </li>
                <li>
                  <strong>Nevěrohodné</strong> – údajný subjekt „Moonsworth" není s námi nijak formálně spojen a dle
                  veřejně dostupných informací se jedná o osobní projekt bez právního rámce.
                </li>
              </ul>
            </div>

            <hr className="border-gray-200 dark:border-gray-800" />

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                <span className="mr-2">🔄</span> 4. Odpověď a další kroky
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Pokud bude mít dotyčný zájem situaci řešit, má možnost kontaktovat nás výhradně prostřednictvím e-mailu{" "}
                <Link href="mailto:hello@ihos.eu" className="text-blue-600 hover:underline">
                  <strong>hello@ihos.eu</strong>
                </Link>
                , kde můžeme za <strong>symbolický poplatek</strong> zohlednit individuální situaci a případně
                poskytnout prostor pro obnovení služby za upravených podmínek.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Nebudou-li z jeho strany odstraněny veřejně šířené dezinformace a výhružné chování, vyhrazujeme si právo
                podniknout právní kroky, včetně kontaktování jeho poskytovatele připojení a nahlášení incidentu.
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-800" />

            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                S přáním klidného dne,
                <br />
                <strong>Tým ihos.cloud</strong>
                <br />📧{" "}
                <Link href="mailto:hello@ihos.eu" className="text-blue-600 hover:underline">
                  hello@ihos.eu
                </Link>
                <br />📎{" "}
                <Link href="/cloud/terms" className="text-blue-600 hover:underline">
                  Podmínky použití
                </Link>
                <br />📎{" "}
                <Link href="/cloud/usage-policy" className="text-blue-600 hover:underline">
                  Pravidla užívání služby
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
