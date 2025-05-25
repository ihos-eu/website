import Link from "next/link"
import { CalendarIcon } from "lucide-react"

interface Announcement {
  id: string
  title: string
  date: string
  summary: string
  url: string
}

// Seznam oznámení - v budoucnu může být načítán z databáze nebo API
const announcements: Announcement[] = [
  {
    id: "matthosting",
    title: "Oficiální reakce projektu ihos.cloud",
    date: "22. května 2025",
    summary:
      "V reakci na veřejně šířené tvrzení od osoby vystupující jako Matt Chmela / CEO of Moonsworth, považujeme za nutné uvést následující...",
    url: "/oznameni/matthosting",
  },
  // Zde budou v budoucnu přidána další oznámení
]

export default function AnnouncementsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">Oznámení a prohlášení</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Oficiální oznámení a prohlášení týkající se projektů ihos.eu a ihos.cloud
          </p>
        </div>

        {announcements.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Žádná oznámení k zobrazení</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {announcements.map((announcement) => (
              <Link key={announcement.id} href={announcement.url} className="block group">
                <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 transition-all duration-200 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-800">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{announcement.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {announcement.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{announcement.summary}</p>
                    <div className="pt-2">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                        Číst více →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
