import type { Metadata } from "next"
import JourneyTimeline from "@/components/journey-timeline"
import { getJourney } from "@/data/journey"
import { SITE_NAME } from "@/lib/seo"

const description = "Every job, project, essay and milestone in Gregory Temwa's path so far, year by year."

export const metadata: Metadata = {
  title: "Journey",
  description,
  alternates: { canonical: "/journey" },
  openGraph: { title: "Journey — Gregory Temwa", description, url: "/journey", siteName: SITE_NAME, type: "website" },
}

export default function JourneyPage() {
  const entries = getJourney()
  const firstYear = Math.min(...entries.map((entry) => entry.year))

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">greg@portfolio</span>:~$ git log --oneline --all
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient">Journey</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From teaching kids to code in {firstYear} to running engineering at WebTech while finishing a degree.{" "}
            {entries.length} entries, newest first — filter to follow one thread.
          </p>
        </header>
        <JourneyTimeline entries={entries} />
      </div>
    </main>
  )
}
