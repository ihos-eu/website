import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Tool } from "@/lib/tools-data"

interface ToolsGridProps {
  tools: Tool[]
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <Card key={tool.id} className="flex flex-col overflow-hidden group transition-all hover:shadow-md">
          <CardHeader className="pb-2 relative">
            <div className="absolute top-4 right-4">
              <Badge variant={tool.status === "active" ? "default" : "secondary"} className="bg-blue-600">
                {tool.status === "active" ? "Aktivní" : "Již brzy"}
              </Badge>
            </div>
            <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
              {tool.icon}
            </div>
            <CardTitle className="mt-2">{tool.name}</CardTitle>
            <CardDescription>{tool.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
              {tool.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="w-full mt-auto group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
            >
              <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                Otevřít nástroj
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
