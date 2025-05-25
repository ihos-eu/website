export default function PanelPrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
        <div className="flex items-center mb-8 pb-4 border-b">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
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
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Zásady ochrany osobních údajů - panel.ihos.cz</h1>
        </div>

        <div className="text-sm text-muted-foreground mb-8">
          <p>Poslední aktualizace: 17. května 2025</p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <nav className="hidden lg:block lg:col-span-1 space-y-1 mb-8 sticky top-24">
            <p className="font-medium mb-2 text-sm">Obsah dokumentu</p>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#uvod" className="text-blue-600 hover:underline">
                  1. Úvod
                </a>
              </li>
              <li>
                <a href="#informace" className="text-blue-600 hover:underline">
                  2. Jaké informace shromažďujeme
                </a>
              </li>
              <li>
                <a href="#pouziti" className="text-blue-600 hover:underline">
                  3. Jak používáme vaše informace
                </a>
              </li>
              <li>
                <a href="#bezpecnost" className="text-blue-600 hover:underline">
                  4. Bezpečnost dat
                </a>
              </li>
              <li>
                <a href="#sdileni" className="text-blue-600 hover:underline">
                  5. Sdílení a zveřejňování informací
                </a>
              </li>
              <li>
                <a href="#uchovavani" className="text-blue-600 hover:underline">
                  6. Uchovávání dat
                </a>
              </li>
              <li>
                <a href="#prava" className="text-blue-600 hover:underline">
                  7. Vaše práva
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-blue-600 hover:underline">
                  8. Cookies
                </a>
              </li>
              <li>
                <a href="#zmeny" className="text-blue-600 hover:underline">
                  9. Změny těchto zásad
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-blue-600 hover:underline">
                  10. Kontaktní informace
                </a>
              </li>
            </ul>
          </nav>

          <div className="prose prose-blue max-w-none lg:col-span-3 dark:prose-invert">
            <section id="uvod">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  1
                </span>
                Úvod
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Vítejte na panel.ihos.cz. Tyto zásady ochrany osobních údajů vysvětlují, jak shromažďujeme, používáme,
                sdílíme a chráníme osobní údaje, které získáváme od uživatelů našeho soukromého hostingového panelu.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Používáním našich služeb souhlasíte s postupy popsanými v těchto zásadách ochrany osobních údajů.
              </p>
            </section>

            <section id="informace" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  2
                </span>
                Jaké informace shromažďujeme
              </h2>
              <p className="text-base leading-relaxed mb-4">Můžeme shromažďovat následující typy informací:</p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                  <h3 className="font-bold mb-2 flex items-center">
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
                      className="text-blue-600 dark:text-blue-400 mr-2"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Osobní údaje
                  </h3>
                  <p className="text-sm">
                    Jméno, e-mailová adresa, telefonní číslo a další kontaktní údaje, které nám dobrovolně poskytnete
                    při registraci nebo používání našich služeb.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                  <h3 className="font-bold mb-2 flex items-center">
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
                      className="text-blue-600 dark:text-blue-400 mr-2"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Přihlašovací údaje
                  </h3>
                  <p className="text-sm">
                    Informace potřebné k přístupu k vašemu účtu, jako je uživatelské jméno a heslo (ukládáme pouze
                    zabezpečené hashe hesel, nikoli samotná hesla).
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                  <h3 className="font-bold mb-2 flex items-center">
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
                      className="text-blue-600 dark:text-blue-400 mr-2"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                    Údaje o používání
                  </h3>
                  <p className="text-sm">
                    Informace o tom, jak používáte náš panel, včetně IP adresy, typu prohlížeče, navštívených stránek,
                    akcí provedených v panelu a času přístupu.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                  <h3 className="font-bold mb-2 flex items-center">
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
                      className="text-blue-600 dark:text-blue-400 mr-2"
                    >
                      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                      <line x1="6" x2="6.01" y1="6" y2="6" />
                      <line x1="6" x2="6.01" y1="18" y2="18" />
                    </svg>
                    Údaje o serveru
                  </h3>
                  <p className="text-sm">
                    Informace o vašich serverech, databázích, doménách a dalších službách, které spravujete
                    prostřednictvím našeho panelu.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                  <h3 className="font-bold mb-2 flex items-center">
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
                      className="text-blue-600 dark:text-blue-400 mr-2"
                    >
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <line x1="12" x2="12.01" y1="18" y2="18" />
                    </svg>
                    Technické údaje
                  </h3>
                  <p className="text-sm">
                    Informace o vašem zařízení, síťovém připojení a způsobu, jakým interagujete s našimi službami.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600">
                  <h3 className="font-bold mb-2 flex items-center">
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
                      className="text-blue-600 dark:text-blue-400 mr-2"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                      <path d="M8.5 8.5v.01" />
                      <path d="M16 15.5v.01" />
                      <path d="M12 12v.01" />
                      <path d="M11 17v.01" />
                      <path d="M7 14v.01" />
                    </svg>
                    Cookies
                  </h3>
                  <p className="text-sm">
                    Používáme cookies a podobné technologie ke sledování aktivity na našem panelu a k ukládání určitých
                    informací.
                  </p>
                </div>
              </div>
            </section>

            <section id="pouziti" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  3
                </span>
                Jak používáme vaše informace
              </h2>
              <p className="text-base leading-relaxed mb-4">Vaše informace používáme k následujícím účelům:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-base leading-relaxed">
                  Poskytování a správa vašeho hostingového účtu a souvisejících služeb
                </li>
                <li className="text-base leading-relaxed">Autentizace a zabezpečení vašeho účtu</li>
                <li className="text-base leading-relaxed">
                  Komunikace s vámi ohledně vašeho účtu, služeb a technické podpory
                </li>
                <li className="text-base leading-relaxed">Zlepšování a optimalizace našeho panelu a služeb</li>
                <li className="text-base leading-relaxed">
                  Detekce a prevence podvodů, zneužití a bezpečnostních incidentů
                </li>
                <li className="text-base leading-relaxed">Plnění našich právních povinností</li>
              </ul>
            </section>

            <section id="bezpecnost" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  4
                </span>
                Bezpečnost dat
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                <p className="text-base leading-relaxed">
                  Implementujeme přísná bezpečnostní opatření k ochraně vašich osobních údajů před neoprávněným
                  přístupem, ztrátou, zneužitím nebo zničením.
                </p>
              </div>
              <p className="text-base leading-relaxed mb-4">Tato opatření zahrnují:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-base leading-relaxed">Šifrování dat v klidu i během přenosu</li>
                <li className="text-base leading-relaxed">Pravidelné bezpečnostní audity a penetrační testy</li>
                <li className="text-base leading-relaxed">Přísné kontroly přístupu a autentizace</li>
                <li className="text-base leading-relaxed">Monitorování a detekce bezpečnostních incidentů</li>
                <li className="text-base leading-relaxed">Pravidelné zálohování dat</li>
                <li className="text-base leading-relaxed">Fyzické zabezpečení našich datových center</li>
              </ul>
            </section>

            <section id="sdileni" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  5
                </span>
                Sdílení a zveřejňování informací
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Vzhledem k soukromé povaze našeho hostingového panelu sdílíme vaše osobní údaje pouze v omezených
                případech:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-base leading-relaxed">
                  <strong>S poskytovateli služeb:</strong> Můžeme sdílet informace s třetími stranami, které nám
                  pomáhají provozovat náš panel a poskytovat související služby (např. poskytovatelé datových center,
                  platební zpracovatelé).
                </li>
                <li className="text-base leading-relaxed">
                  <strong>Pro právní účely:</strong> Můžeme sdílet informace, pokud se domníváme, že je to nezbytné k
                  dodržení zákona, k ochraně práv a bezpečnosti naší společnosti nebo jiných osob.
                </li>
                <li className="text-base leading-relaxed">
                  <strong>S vaším souhlasem:</strong> Můžeme sdílet vaše osobní údaje, pokud nám k tomu dáte výslovný
                  souhlas.
                </li>
              </ul>
              <p className="text-base leading-relaxed mb-4">
                Nesdílíme, neprodáváme ani nepronajímáme vaše osobní údaje třetím stranám pro marketingové účely nebo
                jiné účely nesouvisející s poskytováním našich služeb.
              </p>
            </section>

            <section id="uchovavani" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  6
                </span>
                Uchovávání dat
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Uchováváme vaše osobní údaje pouze po dobu nezbytně nutnou k naplnění účelů uvedených v těchto zásadách
                ochrany osobních údajů, pokud není vyžadována nebo povolena delší doba uchovávání zákonem.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Po ukončení vašeho účtu můžeme některé informace uchovávat po omezenou dobu pro účely zálohování, řešení
                sporů, prevence podvodů nebo plnění našich právních povinností.
              </p>
            </section>

            <section id="prava" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  7
                </span>
                Vaše práva
              </h2>
              <p className="text-base leading-relaxed mb-4">
                V závislosti na vašem místě pobytu můžete mít určitá práva týkající se vašich osobních údajů, včetně:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
                  <p className="text-sm font-medium">Právo na přístup k vašim osobním údajům</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
                  <p className="text-sm font-medium">Právo na opravu nepřesných údajů</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
                  <p className="text-sm font-medium">Právo na vymazání vašich údajů</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
                  <p className="text-sm font-medium">Právo na omezení zpracování</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
                  <p className="text-sm font-medium">Právo na přenositelnost údajů</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
                  <p className="text-sm font-medium">Právo vznést námitku proti zpracování</p>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-4">
                Pokud chcete uplatnit některé z těchto práv nebo máte jakékoli dotazy ohledně zpracování vašich osobních
                údajů, kontaktujte nás na adrese{" "}
                <a href="mailto:hello@ihos.eu" className="text-blue-600 hover:underline">
                  hello@ihos.eu
                </a>
                .
              </p>
            </section>

            <section id="cookies" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  8
                </span>
                Cookies
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Cookies jsou malé soubory, které jsou umístěny na vašem zařízení. Používáme cookies k zajištění
                správného fungování našeho panelu, k autentizaci uživatelů, k zapamatování vašich preferencí a k analýze
                používání našeho panelu.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Můžete nastavit svůj prohlížeč tak, aby odmítal všechny cookies nebo aby vás upozornil, když je cookie
                odeslán. Pokud však nepovolíte cookies, nemusíte být schopni používat některé části našeho panelu.
              </p>
            </section>

            <section id="zmeny" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  9
                </span>
                Změny těchto zásad
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Můžeme aktualizovat naše zásady ochrany osobních údajů čas od času. Budeme vás informovat o jakýchkoli
                změnách zveřejněním nových zásad ochrany osobních údajů na této stránce a/nebo prostřednictvím e-mailu.
              </p>
            </section>

            <section id="kontakt" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  10
                </span>
                Kontaktní informace
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Pokud máte jakékoli dotazy ohledně těchto zásad ochrany osobních údajů nebo o tom, jak zpracováváme vaše
                osobní údaje, kontaktujte nás prosím na adrese{" "}
                <a href="mailto:hello@ihos.eu" className="text-blue-600 hover:underline">
                  hello@ihos.eu
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
