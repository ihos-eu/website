"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, FileText } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function Header() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Domů", href: "/" },
    { name: "Nástroje", href: "/nastroje" },
    { name: "Cloud", href: "/cloud" },
    { name: "O projektu", href: "/o-projektu" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
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
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                ihos.eu
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium transition-colors hover:text-blue-600 flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  Dokumenty
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/terms">Podmínky použití</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/privacy">Ochrana osobních údajů</Link>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Panel.ihos.cz</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild>
                        <Link href="/panel/terms">Podmínky použití</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/panel/privacy">Ochrana osobních údajů</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/panel/usage-policy">Pravidla používání</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Cloud.ihos.eu</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild>
                        <Link href="/cloud/terms">Podmínky použití</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/cloud/privacy">Ochrana osobních údajů</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/cloud/usage-policy">Pravidla používání</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden md:flex">
            <a href="https://discord.gg/vfuYG4jhcj" target="_blank" rel="noopener noreferrer">
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
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
              </svg>
              Discord
            </a>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Přepnout motiv</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Světlý</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Tmavý</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>Systémový</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Otevřít menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium transition-colors hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 pb-2 border-t">
                  <p className="text-sm font-medium mb-2">Dokumenty</p>
                  <div className="flex flex-col gap-2 pl-2">
                    <Link
                      href="/terms"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Podmínky použití
                    </Link>
                    <Link
                      href="/privacy"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Ochrana osobních údajů
                    </Link>
                    <p className="text-sm font-medium mt-2 mb-1">Panel.ihos.cz</p>
                    <Link
                      href="/panel/terms"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Podmínky použití
                    </Link>
                    <Link
                      href="/panel/privacy"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Ochrana osobních údajů
                    </Link>
                    <Link
                      href="/panel/usage-policy"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Pravidla používání
                    </Link>
                    <p className="text-sm font-medium mt-2 mb-1">Cloud.ihos.eu</p>
                    <Link
                      href="/cloud/terms"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Podmínky použití
                    </Link>
                    <Link
                      href="/cloud/privacy"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Ochrana osobních údajů
                    </Link>
                    <Link
                      href="/cloud/usage-policy"
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Pravidla používání
                    </Link>
                  </div>
                </div>
                <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                  <a
                    href="https://discord.gg/vfuYG4jhcj"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
