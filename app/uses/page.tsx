import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"
import { SITE_NAME } from "@/lib/seo"

const description = "The languages, frameworks, databases and infrastructure Gregory Temwa builds with, counted from real projects."

export const metadata: Metadata = {
  title: "Uses",
  description,
  alternates: { canonical: "/uses" },
  openGraph: { title: "Uses | Gregory Temwa", description, url: "/uses", siteName: SITE_NAME, type: "website" },
}

/** Project tags that name the same tool. */
const ALIASES: Record<string, string> = {
  "React 19": "React",
  "Tailwind CSS v4": "Tailwind CSS",
  "Neon Postgres": "PostgreSQL",
  NeonDB: "PostgreSQL",
}

const toolbox = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "Java", "C / C++", "SQL"] },
  { label: "Frontend & mobile", items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Framer Motion", "shadcn/ui"] },
  { label: "Backend", items: ["Node.js", "NestJS", "Effect", "Prisma", "Drizzle", "Zod", "Auth.js", "Better Auth"] },
  { label: "Data", items: ["PostgreSQL", "TimescaleDB", "MySQL", "MongoDB", "SQLite", "Redis", "Supabase"] },
  { label: "Infrastructure", items: ["Docker", "Kubernetes", "Nginx", "RabbitMQ", "Linux", "AWS", "Vercel", "Railway"] },
  { label: "Observability", items: ["Prometheus", "Grafana", "Grafana Tempo", "Juju charms"] },
  { label: "Testing", items: ["Vitest", "Playwright"] },
  { label: "AI / ML", items: ["TensorFlow", "Keras", "Anthropic Claude", "Mistral", "OpenRouter"] },
]

const thisSite = [
  ["Framework", "Next.js 16 (App Router, Turbopack) on React 19"],
  ["Styling", "Tailwind CSS 4, shadcn/ui, Magic UI marquee"],
  ["Motion", "Framer Motion, respecting prefers-reduced-motion"],
  ["Type", "Geist Sans and Geist Mono"],
  ["Writing", "MDX with remark-gfm and rehype-pretty-code"],
  ["Email", "Resend for the contact form"],
  ["Hosting", "Vercel, with Analytics and Speed Insights"],
]

export default function UsesPage() {
  const counts = new Map<string, number>()
  for (const project of projects) {
    for (const tag of new Set(project.tags.map((t) => ALIASES[t] ?? t))) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }
  const mostUsed = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)
  const max = mostUsed[0]?.[1] ?? 1

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-16">
        <header className="space-y-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">greg@portfolio</span>:~$ cat package.json | jq .dependencies
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient">Uses</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Not a wishlist. The chart below is counted from the {projects.length} projects on this site, so it only
            shows what has actually shipped.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary">Most used, by project count</h2>
          <ul className="space-y-2.5">
            {mostUsed.map(([tool, count]) => (
              <li key={tool} className="grid grid-cols-[8.5rem_1fr_2rem] items-center gap-3 font-mono text-sm sm:grid-cols-[11rem_1fr_2rem]">
                <span className="truncate">{tool}</span>
                <span className="h-2 overflow-hidden rounded-full bg-muted">
                  <span className="block h-full rounded-full bg-primary" style={{ width: `${(count / max) * 100}%` }} />
                </span>
                <span className="text-right text-muted-foreground">{count}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary">The toolbox</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {toolbox.map((group) => (
              <div key={group.label} className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary">This site</h2>
          <dl className="surface divide-y divide-border">
            {thisSite.map(([label, value]) => (
              <div key={label} className="grid gap-1 p-4 sm:grid-cols-[10rem_1fr]">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
                <dd className="text-sm">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="font-mono text-xs text-muted-foreground">
            The design rules live in <code className="text-foreground">DESIGN.md</code> in the repo. Want the long
            version of any of these? <Link href="/blog" className="text-primary underline underline-offset-4 hover:text-foreground">The blog</Link>{" "}
            is where they get argued about.
          </p>
        </section>
      </div>
    </main>
  )
}
