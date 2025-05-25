export default function PanelTermsPage() {
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
              <path d="M10 16h4" />
              <path d="M12 12h2" />
              <path d="M12 8h2" />
              <path d="M18 20V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v16" />
              <path d="M2 20h20" />
              <path d="M4 23h16" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Podmínky použití - panel.ihos.cz</h1>
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
                <a href="#pristup" className="text-blue-600 hover:underline">
                  2. Přístup k Službám
                </a>
              </li>
              <li>
                <a href="#pouzivani" className="text-blue-600 hover:underline">
                  3. Používání služeb
                </a>
              </li>
              <li>
                <a href="#obsah" className="text-blue-600 hover:underline">
                  4. Obsah a data
                </a>
              </li>
              <li>
                <a href="#zalohovani" className="text-blue-600 hover:underline">
                  5. Zálohování dat
                </a>
              </li>
              <li>
                <a href="#omezeni" className="text-blue-600 hover:underline">
                  6. Omezení odpovědnosti
                </a>
              </li>
              <li>
                <a href="#ukonceni" className="text-blue-600 hover:underline">
                  7. Ukončení
                </a>
              </li>
              <li>
                <a href="#zmeny" className="text-blue-600 hover:underline">
                  8. Změny podmínek
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
                Vítejte na panel.ihos.cz. Tyto podmínky použití upravují vaše používání hostingového panelu
                panel.ihos.cz, včetně všech služeb a nástrojů, které jsou v rámci tohoto panelu k dispozici (dále jen
                "Služby").
              </p>
              <p className="text-base leading-relaxed mb-4">
                Panel.ihos.cz je soukromý hostingový panel určený pouze pro vybrané uživatele. Používáním našich Služeb
                souhlasíte s těmito podmínkami. Pokud s těmito podmínkami nesouhlasíte, prosím, nepoužívejte naše
                Služby.
              </p>
            </section>

            <section id="pristup" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  2
                </span>
                Přístup k Službám
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Přístup k panel.ihos.cz je omezen pouze na pozvané uživatele. Přístupové údaje jsou přísně osobní a
                nesmí být sdíleny s třetími stranami. Jste zodpovědní za udržení důvěrnosti vašich přihlašovacích údajů
                a za všechny aktivity, které se odehrávají pod vaším účtem.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Vyhrazujeme si právo odmítnout přístup k Službám jakémukoli uživateli bez předchozího upozornění a z
                jakéhokoli důvodu, zejména při porušení těchto podmínek.
              </p>
            </section>

            <section id="pouzivani" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  3
                </span>
                Používání služeb
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Služby panel.ihos.cz jsou poskytovány pro soukromé a profesionální použití. Při používání našich Služeb
                se zavazujete dodržovat všechny platné zákony a předpisy.
              </p>
              <p className="text-base leading-relaxed mb-4">Zavazujete se, že nebudete:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-base leading-relaxed">
                  Používat naše Služby způsobem, který by mohl poškodit, deaktivovat, přetížit nebo narušit naše servery
                  nebo sítě
                </li>
                <li className="text-base leading-relaxed">
                  Používat naše Služby k distribuci nevyžádaných nebo neoprávněných reklam nebo propagačních materiálů
                </li>
                <li className="text-base leading-relaxed">
                  Pokoušet se získat neoprávněný přístup k jakýmkoli částem našich Služeb, jiným účtům, počítačovým
                  systémům nebo sítím připojeným k našim Službám
                </li>
                <li className="text-base leading-relaxed">
                  Používat naše Služby k hostování nelegálního obsahu nebo k provádění nelegálních aktivit
                </li>
                <li className="text-base leading-relaxed">
                  Shromažďovat nebo sbírat informace o ostatních uživatelích bez jejich souhlasu
                </li>
                <li className="text-base leading-relaxed">
                  Přeprodávat nebo poskytovat naše Služby třetím stranám bez našeho výslovného souhlasu
                </li>
              </ul>
            </section>

            <section id="obsah" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  4
                </span>
                Obsah a data
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Jste výhradně zodpovědní za veškerý obsah a data, které nahráváte, stahujete, publikujete, přenášíte
                nebo jinak používáte v souvislosti s našimi Službami. Musíte mít všechna potřebná práva k takovému
                obsahu a datům.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Vyhrazujeme si právo, ale nemáme povinnost, monitorovat a kontrolovat jakýkoli obsah, který je k
                dispozici prostřednictvím našich Služeb. Můžeme odstranit jakýkoli obsah, který podle našeho uvážení
                porušuje tyto podmínky nebo je jinak nevhodný.
              </p>
            </section>

            <section id="zalohovani" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  5
                </span>
                Zálohování dat
              </h2>
              <p className="text-base leading-relaxed mb-4">
                I když se snažíme zajistit maximální dostupnost a bezpečnost vašich dat, doporučujeme pravidelně
                zálohovat všechna důležitá data. Nejsme zodpovědní za ztrátu dat v důsledku selhání hardwaru, softwaru
                nebo jiných technických problémů.
              </p>
            </section>

            <section id="omezeni" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  6
                </span>
                Omezení odpovědnosti
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                <p className="text-base leading-relaxed">
                  Naše Služby jsou poskytovány "tak, jak jsou" a "jak jsou dostupné" bez jakýchkoli záruk, ať už
                  výslovných nebo předpokládaných. Panel.ihos.cz neposkytuje žádné záruky, že naše Služby budou splňovat
                  vaše požadavky nebo že budou nepřerušované, včasné, bezpečné nebo bez chyb.
                </p>
              </div>
              <p className="text-base leading-relaxed mb-4">
                V žádném případě nebude panel.ihos.cz odpovědný za jakékoli přímé, nepřímé, náhodné, zvláštní, následné
                nebo exemplární škody, včetně, ale ne výhradně, škod za ztrátu zisku, dobré pověsti, použití, dat nebo
                jiných nehmotných ztrát.
              </p>
            </section>

            <section id="ukonceni" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  7
                </span>
                Ukončení
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Můžeme ukončit nebo pozastavit váš přístup k našim Službám okamžitě, bez předchozího upozornění nebo
                odpovědnosti, z jakéhokoli důvodu, včetně, ale ne výhradně, porušení těchto podmínek.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Po ukončení vašeho přístupu k našim Službám přestane vaše právo používat Služby okamžitě. Pokud si
                přejete ukončit svůj účet, můžete jednoduše přestat používat naše Služby.
              </p>
            </section>

            <section id="zmeny" className="mt-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">
                  8
                </span>
                Změny podmínek
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Vyhrazujeme si právo kdykoli upravit nebo nahradit tyto podmínky. Je vaší odpovědností pravidelně
                kontrolovat tyto podmínky na změny. Vaše pokračující používání našich Služeb po zveřejnění jakýchkoli
                změn těchto podmínek znamená, že tyto změny přijímáte.
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
                Pokud máte jakékoli dotazy ohledně těchto podmínek, kontaktujte nás prosím na adrese{" "}
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
