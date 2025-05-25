import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CloudUsagePolicyPage() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-6">
      <div className="space-y-2 text-center mb-8">
        <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400 mb-2">
          ihos.cloud
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pravidla používání</h1>
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
              <span>Tato pravidla definují povolené a zakázané způsoby využívání služeb ihos cloud</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">1. Úvod</h2>
            <p>
              Tato pravidla používání (dále jen "Pravidla") stanovují podmínky pro využívání cloudových služeb
              poskytovaných na platformě ihos.cloud (dále jen "Služby"). Cílem těchto Pravidel je zajistit bezpečné,
              stabilní a efektivní prostředí pro všechny uživatele.
            </p>
            <p>
              Tato Pravidla jsou nedílnou součástí Podmínek použití. Používáním Služeb vyjadřujete souhlas s těmito
              Pravidly a zavazujete se je dodržovat.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">2. Povolené využití</h2>
            <p>Služby můžete využívat k následujícím účelům:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Hostování webových stránek a aplikací</li>
              <li>Vývoj a testování softwaru</li>
              <li>Provoz databází a úložišť dat</li>
              <li>Provoz vlastních serverů a služeb</li>
              <li>Vzdělávací a výzkumné účely</li>
              <li>Osobní a komerční projekty v souladu s právními předpisy</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">3. Zakázané využití</h2>
            <p>Je přísně zakázáno využívat Služby k následujícím účelům:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Jakékoliv nelegální aktivity nebo porušování právních předpisů</li>
              <li>Šíření malwaru, virů nebo jiného škodlivého kódu</li>
              <li>Phishing, spamming nebo jiné podvodné aktivity</li>
              <li>Neoprávněný přístup k systémům nebo datům</li>
              <li>DDoS útoky nebo jiné aktivity narušující stabilitu sítě</li>
              <li>Těžba kryptoměn bez předchozího souhlasu</li>
              <li>Šíření pornografického, násilného nebo jinak nevhodného obsahu</li>
              <li>Porušování autorských práv nebo jiných práv duševního vlastnictví</li>
              <li>Provoz služeb, které nadměrně zatěžují infrastrukturu</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">4. Omezení zdrojů</h2>
            <p>Každý tarif Služeb má stanovené limity pro využívání výpočetních zdrojů:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>CPU: Maximální využití přidělených procesorových jader</li>
              <li>RAM: Maximální využití přidělené operační paměti</li>
              <li>Disk: Maximální využití přiděleného diskového prostoru</li>
              <li>Přenos dat: Maximální objem přenesených dat za měsíc</li>
              <li>IOPS: Maximální počet vstupně-výstupních operací za sekundu</li>
            </ul>
            <p>
              Překročení těchto limitů může vést k dočasnému omezení nebo pozastavení Služeb. V případě opakovaného
              překračování limitů vám doporučujeme přejít na vyšší tarif.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">5. Bezpečnost</h2>
            <p>Jako uživatel jste odpovědní za bezpečnost vašich Služeb a dat:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Udržujte všechny systémy a aplikace aktualizované</li>
              <li>Používejte silná hesla a pravidelně je měňte</li>
              <li>Omezte přístup k vašim službám pouze na nezbytné osoby</li>
              <li>Pravidelně zálohujte svá data (pokud není zálohování součástí služby)</li>
              <li>Monitorujte své služby pro detekci neobvyklých aktivit</li>
              <li>Neprodleně nahlaste jakékoliv bezpečnostní incidenty</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">6. Monitorování a audity</h2>
            <p>
              Vyhrazujeme si právo monitorovat využívání Služeb za účelem zajištění dodržování těchto Pravidel a ochrany
              naší infrastruktury. Toto monitorování zahrnuje:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Sledování využití systémových zdrojů (CPU, RAM, disk, síť)</li>
              <li>Logování přístupů a aktivit</li>
              <li>Kontrola dodržování bezpečnostních standardů</li>
              <li>Detekce potenciálně škodlivých aktivit</li>
            </ul>
            <p>
              Respektujeme vaše soukromí a nesledujeme obsah vašich dat, pokud to není nezbytně nutné z bezpečnostních
              důvodů nebo na základě právních požadavků.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">
              7. Zálohování a obnova dat
            </h2>
            <p>V závislosti na zvoleném tarifu může být součástí Služeb automatické zálohování:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Denní zálohy s uchováním po dobu 7 dnů</li>
              <li>Týdenní zálohy s uchováním po dobu 4 týdnů</li>
              <li>Měsíční zálohy s uchováním po dobu 3 měsíců (pouze u vyšších tarifů)</li>
            </ul>
            <p>
              I v případě, že je zálohování součástí služby, doporučujeme provádět vlastní zálohy kritických dat.
              Neneseme odpovědnost za ztrátu dat v případě, že zálohování není součástí vašeho tarifu.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">8. Dostupnost služeb</h2>
            <p>Usilujeme o zajištění vysoké dostupnosti Služeb:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Standardní tarify: Cílová dostupnost 99,9%</li>
              <li>Business tarify: Cílová dostupnost 99,95%</li>
              <li>Enterprise tarify: Cílová dostupnost 99,99%</li>
            </ul>
            <p>
              Plánované údržby jsou obvykle prováděny v nočních hodinách a jsou oznámeny nejméně 48 hodin předem.
              Neplánované výpadky řešíme s nejvyšší prioritou.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">9. Technická podpora</h2>
            <p>Poskytujeme technickou podporu v následujícím rozsahu:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>E-mailová podpora: hello@ihos.eu</li>
              <li>Discord server: https://discord.gg/vfuYG4jhcj</li>
              <li>Reakční doba: obvykle do 24 hodin v pracovní dny</li>
              <li>Prioritní podpora pro business a enterprise tarify</li>
            </ul>
            <p>
              Technická podpora zahrnuje pomoc s infrastrukturou a platformou, nikoliv s vaším vlastním kódem nebo
              aplikacemi, pokud není dohodnuto jinak.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">
              10. Porušení pravidel a sankce
            </h2>
            <p>V případě porušení těchto Pravidel můžeme přijmout následující opatření:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Upozornění a žádost o nápravu</li>
              <li>Dočasné omezení nebo pozastavení Služeb</li>
              <li>Trvalé ukončení poskytování Služeb</li>
              <li>V závažných případech vymáhání náhrady škody</li>
            </ul>
            <p>Opatření budou přiměřená závažnosti porušení a případným předchozím porušením.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">11. Změny pravidel</h2>
            <p>
              Vyhrazujeme si právo tato Pravidla kdykoliv změnit. O významných změnách budete informováni
              prostřednictvím e-mailu nebo oznámení na našich webových stránkách. Pokračováním ve využívání Služeb po
              oznámení změn vyjadřujete souhlas s aktualizovanými Pravidly.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-muted-foreground">
                V případě dotazů nebo nejasností ohledně těchto Pravidel nás kontaktujte na{" "}
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
          href="/cloud/privacy"
          className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-800"
        >
          Ochrana osobních údajů
        </Link>
      </div>
    </div>
  )
}
