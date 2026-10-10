import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import JourneyTimeline from "@/components/journey-timeline"
import { getJourney } from "@/data/journey"


export const metadata: Metadata = pageMetadata({
  title: "Journey",
  description: "Every job, project, essay and milestone in Gregory Temwa's path so far, year by year, from teaching kids to code in 2023 to leading engineering at Webtech.",
  path: "/journey",
  type: "website",
})

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
            From teaching kids to code in {firstYear} to running engineering at Webtech while finishing a degree.{" "}
            {entries.length} entries, newest first. Filter to follow one thread.
          </p>
        </header>
        <JourneyTimeline entries={entries} />
      </div>
    </main>
  )
}
