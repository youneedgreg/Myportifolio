import WorkExplorer, { type WorkItem } from "@/components/work-explorer"
import { projects } from "@/data/projects"

/** Newest first; within a year, featured work leads. "2025–Present" sorts as 2025. */
function byRecency(a: WorkItem, b: WorkItem) {
  return b.year.slice(0, 4).localeCompare(a.year.slice(0, 4)) || Number(b.featured) - Number(a.featured)
}

export default function ProjectsPage() {
  // Only what the cards need crosses to the client — not the case-study text.
  const items: WorkItem[] = projects
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      image: p.image.startsWith("/placeholder") ? null : p.image,
      tags: p.tags,
      year: p.year,
      status: p.status,
      featured: Boolean(p.featured),
      openSource: Boolean(p.openSource),
    }))
    .sort(byRecency)

  const count = (status: WorkItem["status"]) => items.filter((item) => item.status === status).length

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-5">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">greg@portfolio</span>:~$ ls ~/work | wc -l
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-8xl">
            <span className="text-gradient">{items.length} things</span>
            <br />
            <span className="text-primary">I&apos;ve built.</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Production systems for real clients, open-source work, and experiments that taught me something. Search
            it, filter it, switch to the terminal view — or let the dice pick.
          </p>
          <dl className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
            {(
              [
                ["live", "live right now"],
                ["private", "client systems"],
                ["source-available", "source-available"],
                ["coming-soon", "in progress"],
              ] as const
            ).map(([status, label]) => (
              <div key={status} className="flex flex-col-reverse">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="text-2xl font-semibold">{count(status)}</dd>
              </div>
            ))}
          </dl>
        </header>
        <WorkExplorer items={items} />
      </div>
    </main>
  )
}
