import Link from "next/link"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
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
                className="text-blue-600 mr-2"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
              <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                ihos.eu
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Komunitní technologický projekt od developerů pro developery, který nabízí jednoduché, spolehlivé a
              bezpečné nástroje zdarma nebo za nízkou cenu.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="mailto:hello@ihos.eu"
                className="text-muted-foreground hover:text-foreground flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                hello@ihos.eu
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://discord.gg/vfuYG4jhcj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center"
              >
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
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Nástroje</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nastroje#storage" className="text-muted-foreground hover:text-foreground">
                  Storage
                </Link>
              </li>
              <li>
                <Link href="/nastroje#whois" className="text-muted-foreground hover:text-foreground">
                  Whois
                </Link>
              </li>
              <li>
                <Link href="/nastroje#search" className="text-muted-foreground hover:text-foreground">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/nastroje#cloud" className="text-muted-foreground hover:text-foreground">
                  Cloud
                </Link>
              </li>
              <li>
                <Link href="/nastroje#ai" className="text-muted-foreground hover:text-foreground">
                  AI
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Služby</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cloud" className="text-muted-foreground hover:text-foreground">
                  Cloudové služby
                </Link>
              </li>
              <li>
                <Link href="/cloud#vps" className="text-muted-foreground hover:text-foreground">
                  Virtuální servery
                </Link>
              </li>
              <li>
                <Link href="/cloud#db" className="text-muted-foreground hover:text-foreground">
                  Databáze
                </Link>
              </li>
              <li>
                <Link href="/cloud#storage" className="text-muted-foreground hover:text-foreground">
                  Objektové úložiště
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/vfuYG4jhcj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Discord server
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Informace</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/o-projektu" className="text-muted-foreground hover:text-foreground">
                  O projektu
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-foreground">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Podmínky použití
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@ihos.eu" className="text-muted-foreground hover:text-foreground">
                  hello@ihos.eu
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 ihos.eu. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
