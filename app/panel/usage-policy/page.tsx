export default function PanelUsagePolicyPage() {
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
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Pravidla používání - panel.ihos.cz</h1>
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
                <a href="#obecna-pravidla" className="text-blue-600 hover:underline">
                  2. Obecná pravidla používání
                </a>
              </li>
              <li>
                <a href="#omezeni" className="text-blue-600 hover:underline">
                  3. Omezení zdrojů a výkonu
                </a>
              </li>
              <li>
                <a href="#zakazane" className="text-blue-600 hover:underline">
                  4. Zakázané aktivity
                </a>
              </li>
              <li>
                <a href="#zalohovani" className="text-blue-600 hover:underline">
                  5. Zálohování a obnova dat
                </a>
              </li>
              <li>
                <a href="#aktualizace" className="text-blue-600 hover:underline">
                  6. Aktualizace a údržba
                </a>
              </li>
              <li>
                <a href="#monitorovani" className="text-blue-600 hover:underline">
                  7. Monitorování a vynucování
                </a>
              </li>
              <li>
                <a href="#zmeny" className="text-blue-600 hover:underline">
                  8. Změny pravidel
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-blue-600 hover:underline">
                  9. Kontaktní informace
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
                Tato pravidla používání stanovují podmínky a omezení pro používání služeb poskytovaných prostřednictvím
                panel.ihos.cz. Dodržování těchto pravidel je nezbytné pro zajištění bezpečného, stabilního a efektivního
                provozu našich služeb pro všechny uživatele.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                <p className="text-base leading-relaxed">
                  Používáním našich služeb souhlasíte s dodržováním těchto pravidel. Porušení těchto pravidel může vést
                  k omezení nebo ukončení vašeho přístupu k našim službám.
                </p>
              </div>
            </section>

            <section id="obecna-pravidla" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  2
                </span>
                Obecná pravidla používání
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Při používání našich služeb musíte dodržovat následující obecná pravidla:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-base leading-relaxed">Dodržovat všechny platné zákony a předpisy</li>
                <li className="text-base leading-relaxed">Respektovat práva a soukromí ostatních uživatelů</li>
                <li className="text-base leading-relaxed">Používat služby pouze k legálním účelům</li>
                <li className="text-base leading-relaxed">
                  Nezneužívat služby způsobem, který by mohl narušit jejich dostupnost nebo výkon
                </li>
                <li className="text-base leading-relaxed">
                  Chránit své přihlašovací údaje a nesdílet je s třetími stranami
                </li>
                <li className="text-base leading-relaxed">Pravidelně aktualizovat své kontaktní údaje</li>
                <li className="text-base leading-relaxed">Reagovat na důležitá oznámení a komunikaci z naší strany</li>
              </ul>
            </section>

            <section id="omezeni" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  3
                </span>
                Omezení zdrojů a výkonu
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Naše služby jsou poskytovány s určitými omezeními zdrojů a výkonu, která jsou stanovena pro každý účet.
                Tato omezení zahrnují:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600 flex items-center">
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                  <p className="text-sm font-medium">Přidělený diskový prostor</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600 flex items-center">
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
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  <p className="text-sm font-medium">Měsíční přenos dat</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600 flex items-center">
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
                    <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                    <path d="M2 20h20" />
                    <path d="M14 12v.01" />
                  </svg>
                  <p className="text-sm font-medium">Výpočetní výkon (CPU)</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600 flex items-center">
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
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                  <p className="text-sm font-medium">Operační paměť (RAM)</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600 flex items-center">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <p className="text-sm font-medium">Počet současných připojení</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-100 dark:border-gray-600 flex items-center">
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
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                  <p className="text-sm font-medium">Počet databází a e-mailů</p>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-4">
                Překročení těchto omezení může vést k dočasnému omezení nebo pozastavení služeb. Pokud pravidelně
                překračujete přidělené limity, doporučujeme zvážit upgrade vašeho účtu.
              </p>
            </section>

            <section id="zakazane" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  4
                </span>
                Zakázané aktivity
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Následující aktivity jsou na našich službách přísně zakázány:
              </p>

              <div className="space-y-4 mb-4">
                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20">
                  <h3 className="font-bold mb-2 flex items-center text-red-600 dark:text-red-400">
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
                      className="mr-2"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m4.93 4.93 14.14 14.14" />
                    </svg>
                    Nelegální obsah
                  </h3>
                  <p className="text-sm">
                    Hostování, distribuce nebo přenos jakéhokoli nelegálního obsahu, včetně, ale ne výhradně, materiálů
                    porušujících autorská práva, dětské pornografie, materiálů podporujících násilí nebo nenávist.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20">
                  <h3 className="font-bold mb-2 flex items-center text-red-600 dark:text-red-400">
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
                      className="mr-2"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                    Škodlivý kód
                  </h3>
                  <p className="text-sm">
                    Hostování, distribuce nebo přenos malwaru, virů, trojských koní, ransomwaru nebo jiného škodlivého
                    kódu.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20">
                  <h3 className="font-bold mb-2 flex items-center text-red-600 dark:text-red-400">
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
                      className="mr-2"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    Hacking a neoprávněný přístup
                  </h3>
                  <p className="text-sm">
                    Pokusy o získání neoprávněného přístupu k jiným systémům, sítím nebo účtům, včetně skenování portů,
                    útoků hrubou silou nebo exploitace zranitelností.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20">
                  <h3 className="font-bold mb-2 flex items-center text-red-600 dark:text-red-400">
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
                      className="mr-2"
                    >
                      <path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4" />
                      <rect width="20" height="8" x="2" y="10" rx="2" />
                      <path d="m6 14 4-4 4 4 4-4" />
                    </svg>
                    Spam a nevyžádaná komunikace
                  </h3>
                  <p className="text-sm">
                    Používání našich služeb k rozesílání spamu, nevyžádaných e-mailů nebo jiných forem nevyžádané
                    komunikace.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20">
                  <h3 className="font-bold mb-2 flex items-center text-red-600 dark:text-red-400">
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
                      className="mr-2"
                    >
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    DoS/DDoS útoky
                  </h3>
                  <p className="text-sm">
                    Provádění nebo usnadňování útoků typu odepření služby (DoS) nebo distribuovaného odepření služby
                    (DDoS).
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-4">
                Porušení těchto pravidel může vést k okamžitému ukončení vašeho účtu bez předchozího upozornění a
                případně i k právním krokům.
              </p>
            </section>

            <section id="zalohovani" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  5
                </span>
                Zálohování a obnova dat
              </h2>
              <p className="text-base leading-relaxed mb-4">
                I když poskytujeme pravidelné zálohování jako součást našich služeb, jste primárně zodpovědní za
                zálohování svých dat. Doporučujeme pravidelně vytvářet a uchovávat vlastní zálohy důležitých dat.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                <h3 className="font-bold mb-2">Naše zásady zálohování a obnovy dat zahrnují:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li className="text-sm">Automatické denní zálohy všech dat</li>
                  <li className="text-sm">Uchovávání záloh po dobu 7 dnů</li>
                  <li className="text-sm">Možnost obnovení dat ze zálohy na vyžádání</li>
                  <li className="text-sm">Možnost stažení záloh pro vlastní archivaci</li>
                </ul>
              </div>
              <p className="text-base leading-relaxed mb-4">
                Upozorňujeme, že obnova dat ze zálohy může být zpoplatněna v závislosti na rozsahu a složitosti
                požadované obnovy.
              </p>
            </section>

            <section id="aktualizace" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  6
                </span>
                Aktualizace a údržba
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Pravidelně provádíme aktualizace a údržbu našich systémů za účelem zajištění bezpečnosti, stability a
                výkonu. Během těchto období může dojít k dočasné nedostupnosti služeb.
              </p>
              <p className="text-base leading-relaxed mb-4">Naše zásady týkající se aktualizací a údržby zahrnují:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-base leading-relaxed">
                  Plánovaná údržba je obvykle prováděna v době s nízkým provozem
                </li>
                <li className="text-base leading-relaxed">Oznámení o plánované údržbě jsou zasílána předem</li>
                <li className="text-base leading-relaxed">
                  Nouzové aktualizace mohou být provedeny bez předchozího oznámení v případě kritických bezpečnostních
                  hrozeb
                </li>
                <li className="text-base leading-relaxed">Snaha minimalizovat dobu výpadku během údržby</li>
              </ul>
            </section>

            <section id="monitorovani" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  7
                </span>
                Monitorování a vynucování
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Vyhrazujeme si právo monitorovat používání našich služeb za účelem zajištění dodržování těchto pravidel
                a ochrany našich systémů a ostatních uživatelů. Toto monitorování je prováděno v souladu s našimi
                zásadami ochrany osobních údajů.
              </p>
              <p className="text-base leading-relaxed mb-4">
                V případě porušení těchto pravidel můžeme přijmout následující opatření:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-base leading-relaxed">Zaslání upozornění s žádostí o nápravu situace</li>
                <li className="text-base leading-relaxed">Dočasné pozastavení služeb</li>
                <li className="text-base leading-relaxed">Trvalé ukončení služeb</li>
                <li className="text-base leading-relaxed">Odstranění obsahu porušujícího pravidla</li>
                <li className="text-base leading-relaxed">Nahlášení závažných porušení příslušným orgánům</li>
              </ul>
            </section>

            <section id="zmeny" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  8
                </span>
                Změny pravidel
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Vyhrazujeme si právo kdykoli upravit nebo aktualizovat tato pravidla. O významných změnách vás budeme
                informovat prostřednictvím e-mailu nebo oznámení v našem panelu. Pokračování v používání našich služeb
                po zveřejnění změn znamená, že tyto změny přijímáte.
              </p>
            </section>

            <section id="kontakt" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  9
                </span>
                Kontaktní informace
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Pokud máte jakékoli dotazy ohledně těchto pravidel používání nebo potřebujete nahlásit porušení,
                kontaktujte nás prosím na adrese{" "}
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
