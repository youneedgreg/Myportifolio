import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getSortedPosts } from "@/data/blog"
import { getJourney } from "@/data/journey"
import { exploreNav } from "@/data/navigation"
import { NOW_UPDATED } from "@/data/now"

/** Teasers for the deeper pages — the "keep going" section of the home page. */
export default function RabbitHoles() {
  const journey = getJourney()
  const firstYear = Math.min(...journey.map((entry) => entry.year))
  const facts: Record<string, string> = {
    "/journey": `${journey.length} milestones since ${firstYear}`,
    "/now": `Last updated ${NOW_UPDATED}`,
    "/uses": "From Postgres to the font on this page",
    "/lab": "Break an offline sync queue on purpose",
  }

  const holes = [
    ...exploreNav.map((link) => ({ ...link, fact: facts[link.href] })),
    {
      href: "/blog",
      label: "Writing",
      shortcut: "b",
      teaser: "Notes from shipping real systems",
      fact: `${getSortedPosts().length} essays · RSS available`,
    },
  ]

  return (
    <section className="mx-auto w-full max-w-5xl space-y-10">
      <div className="space-y-2">
        <p className="font-mono text-sm uppercase tracking-widest text-primary">Keep going</p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Places to get lost</h2>
        <p className="max-w-xl text-muted-foreground">
          The home page is the trailer. These are the director&apos;s cut. Or press{" "}
          <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-xs text-foreground">?</kbd> and
          drive with the keyboard.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {holes.map((hole) => (
          <Link
            key={hole.href}
            href={hole.href}
            className="surface group flex min-h-44 flex-col gap-3 p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>
                <kbd className="rounded border border-border px-1.5 py-0.5">g</kbd>{" "}
                <kbd className="rounded border border-border px-1.5 py-0.5">{hole.shortcut}</kbd>
              </span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
              {hole.label}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{hole.teaser}</p>
            {hole.fact && <p className="mt-auto font-mono text-xs text-primary">{hole.fact}</p>}
          </Link>
        ))}
        <div className="surface flex min-h-44 flex-col justify-between gap-3 border-dashed p-6 font-mono text-sm">
          <p className="text-muted-foreground">
            <span className="text-primary">greg@portfolio</span>:~$ ls -a
          </p>
          <p className="text-muted-foreground">
            Some things here aren&apos;t linked anywhere. Open the devtools console, or switch tabs and come back.
          </p>
        </div>
      </div>
    </section>
  )
}
