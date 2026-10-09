import WorkExplorer, { type WorkItem } from "@/components/work-explorer"
import OpenSourceList from "@/components/open-source-list"
import { openSourceContributions } from "@/data/open-source"
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
      client: Boolean(p.client),
      categories: p.categories,
    }))
    .sort(byRecency)

  const count = (status: WorkItem["status"]) => items.filter((item) => item.status === status).length
  const mergedCount = openSourceContributions.flatMap((p) => p.pullRequests).filter((pr) => pr.status === "merged").length

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
            it, filter it, switch to the terminal view, or let the dice pick.
          </p>
          <dl className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
            {[
              [count("live"), "live right now"],
              [items.filter((item) => item.client).length, "client projects"],
              [openSourceContributions.length, "open-source repos contributed to"],
              [count("coming-soon"), "in progress"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="text-2xl font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </header>
        <WorkExplorer items={items} />

        <section id="open-source" className="scroll-mt-24 space-y-6 border-t border-border pt-12">
          <div className="space-y-2">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">greg@portfolio</span>:~$ gh search prs --author youneedgreg
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Open-source contributions</h2>
            <p className="max-w-2xl text-muted-foreground">
              Code I&apos;ve sent to other people&apos;s projects: what each project is, and the pull requests, merged
              or still in review. {mergedCount} merged so far.
            </p>
          </div>
          <OpenSourceList />
        </section>
      </div>
    </main>
  )
}
