import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-8 text-3xl font-bold">Zásady používání cookies</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="mb-3 text-2xl font-semibold">Co jsou cookies?</h2>
          <p>
            Cookies jsou malé textové soubory, které jsou ukládány ve vašem prohlížeči nebo na pevném disku vašeho
            zařízení. Webové stránky používají cookies k rozpoznání vašeho zařízení při příští návštěvě. Cookies nám
            umožňují zapamatovat si vaše preference a poskytovat vám lepší uživatelský zážitek.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Jak používáme cookies</h2>
          <p>Na našich stránkách používáme cookies pro následující účely:</p>
          <ul className="mt-2 ml-6 list-disc">
            <li>Zajištění základních funkcí webu a zapamatování vašich preferencí</li>
            <li>Analýza návštěvnosti a chování uživatelů na našich stránkách</li>
            <li>Zlepšování obsahu a struktury našich stránek</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Typy cookies, které používáme</h2>

          <div className="mt-4">
            <h3 className="mb-2 text-xl font-medium">Nezbytné cookies</h3>
            <p>
              Tyto cookies jsou nezbytné pro fungování našich webových stránek. Bez těchto cookies by stránky
              nefungovaly správně. Nezbytné cookies nelze vypnout.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="mb-2 text-xl font-medium">Analytické cookies</h3>
            <p>
              Tyto cookies nám pomáhají porozumět, jak návštěvníci používají naše stránky. Anonymně sbírají a sdělují
              informace, které nám pomáhají zlepšovat naše stránky.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="mb-2 text-xl font-medium">Funkční cookies</h3>
            <p>
              Tyto cookies umožňují webovým stránkám poskytovat vylepšené funkce a personalizaci. Mohou být nastaveny
              námi nebo poskytovateli třetích stran, jejichž služby jsme přidali na naše stránky.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Jak spravovat cookies</h2>
          <p>Většina webových prohlížečů umožňuje kontrolovat cookies prostřednictvím nastavení prohlížeče. Můžete:</p>
          <ul className="mt-2 ml-6 list-disc">
            <li>Zobrazit cookies uložené ve vašem prohlížeči a odstranit konkrétní cookies</li>
            <li>Blokovat cookies třetích stran</li>
            <li>Blokovat cookies z konkrétních webových stránek</li>
            <li>Blokovat všechny cookies</li>
            <li>Odstranit všechny cookies při zavření prohlížeče</li>
          </ul>
          <p className="mt-3">
            Upozorňujeme, že pokud se rozhodnete blokovat cookies, některé části našich stránek nemusí fungovat správně.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Doba platnosti cookies</h2>
          <p>Cookies mají různou dobu platnosti:</p>
          <ul className="mt-2 ml-6 list-disc">
            <li>Dočasné (session) cookies - jsou odstraněny po zavření prohlížeče</li>
            <li>Trvalé cookies - zůstávají ve vašem zařízení po určitou dobu nebo dokud je neodstraníte</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Právní základ pro používání cookies</h2>
          <p>
            Pro používání nezbytných cookies nepotřebujeme váš souhlas, protože jsou nezbytné pro fungování našich
            stránek. Pro všechny ostatní typy cookies potřebujeme váš souhlas, který můžete kdykoliv odvolat.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Změny zásad používání cookies</h2>
          <p>
            Vyhrazujeme si právo kdykoliv změnit tyto zásady používání cookies. Jakékoliv změny budou zveřejněny na této
            stránce.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Kontaktujte nás</h2>
          <p>
            Pokud máte jakékoliv dotazy ohledně našich zásad používání cookies, kontaktujte nás na{" "}
            <Link href="mailto:hello@ihos.eu" className="text-blue-600 hover:underline">
              hello@ihos.eu
            </Link>
            .
          </p>
        </section>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Poslední aktualizace: 21. května 2025</p>
      </div>
    </div>
  )
}
