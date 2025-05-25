import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Cloud, Globe, Lock, Mail, Server } from "lucide-react"

export interface Solution {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

const solutions: Solution[] = [
  {
    id: "webhosting",
    name: "Webhosting",
    description:
      "Spolehlivý a rychlý webhosting pro vaše projekty, s podporou PHP, MySQL a dalších technologií. Dostupný zdarma nebo za velmi nízkou cenu.",
    icon: <Globe className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: "vps",
    name: "Virtuální servery",
    description:
      "Výkonné VPS servery s plnou kontrolou, dedikovanými zdroji a vysokou dostupností. Nabízíme za zlomek běžné tržní ceny.",
    icon: <Server className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: "cloud",
    name: "Cloudové služby",
    description:
      "Flexibilní cloudové řešení pro moderní aplikace s automatickým škálováním a zálohováním. Dostupné zdarma pro komunitní projekty.",
    icon: <Cloud className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: "domains",
    name: "Doménové služby",
    description:
      "Registrace a správa domén všech populárních TLD s pokročilými DNS nástroji. Za výhodné ceny nebo zdarma k hostingovým službám.",
    icon: <Globe className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: "email",
    name: "Email hosting",
    description:
      "Profesionální emailové řešení s velkou kapacitou, antispamem a antivirem. Dostupné zdarma nebo za minimální poplatek.",
    icon: <Mail className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: "security",
    name: "Zabezpečení a certifikáty",
    description:
      "SSL certifikáty, firewall a další bezpečnostní nástroje pro ochranu vašich dat a systémů. Základní zabezpečení poskytujeme zdarma.",
    icon: <Lock className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
  },
]

export default function SolutionsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((solution) => (
        <Card key={solution.id} className="flex flex-col overflow-hidden group transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <div className="mb-4">{solution.icon}</div>
            <CardTitle className="text-xl">{solution.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-muted-foreground mb-4">{solution.description}</p>
            <Button
              asChild
              variant="outline"
              className="w-full mt-auto group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
            >
              <Link href="mailto:hello@ihos.eu">
                Více informací
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
