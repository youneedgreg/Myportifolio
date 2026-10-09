import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Briefcase, GraduationCap, Hammer, PenLine } from "lucide-react"
import NowBuilding from "@/components/now-building"
import { formatPostDate, getSortedPosts } from "@/data/blog"
import { experience } from "@/data/experience"
import { NOW_UPDATED } from "@/data/now"
import { SITE_NAME } from "@/lib/seo"

const description = "What Gregory Temwa is building, working on, studying and writing right now."

export const metadata: Metadata = {
  title: "Now",
  description,
  alternates: { canonical: "/now" },
  openGraph: { title: "Now | Gregory Temwa", description, url: "/now", siteName: SITE_NAME, type: "website" },
}

function Block({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-border pt-8 md:grid-cols-[12rem_1fr]">
      <h2 className="inline-flex items-center gap-2 self-start font-mono text-sm uppercase tracking-widest text-primary">
        {icon}
        {label}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export default function NowPage() {
  const current = experience.filter((job) => job.period.includes("Present"))
  const latestPost = getSortedPosts()[0]

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">greg@portfolio</span>:~$ date &amp;&amp; cat now.md
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient">Now</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            What has my attention at the moment. Last updated <span className="text-foreground">{NOW_UPDATED}</span>;
            the GitHub activity below refreshes on its own every hour.
          </p>
        </header>

        <Block icon={<Hammer className="size-4" />} label="Building">
          <NowBuilding />
        </Block>

        <Block icon={<Briefcase className="size-4" />} label="Working">
          <ul className="space-y-4">
            {current.map((job) => (
              <li key={job.role} className="space-y-1">
                <p className="font-semibold tracking-tight">
                  {job.role} <span className="font-normal text-muted-foreground">· {job.company}</span>
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{job.description}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block icon={<GraduationCap className="size-4" />} label="Studying">
          <p className="leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">BSc Software Engineering</span> at United States
            International University–Africa, graduating in 2027, doing the coursework alongside everything above.
          </p>
        </Block>

        {latestPost && (
          <Block icon={<PenLine className="size-4" />} label="Writing">
            <Link href={`/blog/${latestPost.slug}`} className="surface group block space-y-2 p-5 transition-colors hover:border-primary/50">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Latest · {formatPostDate(latestPost.date)}
              </p>
              <p className="font-semibold tracking-tight transition-colors group-hover:text-primary">{latestPost.title}</p>
              <p className="line-clamp-2 text-sm text-muted-foreground">{latestPost.summary}</p>
            </Link>
          </Block>
        )}

        <p className="border-t border-border pt-8 font-mono text-xs text-muted-foreground">
          This is a{" "}
          <a href="https://nownownow.com/about" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4 hover:text-foreground">
            now page
          </a>
          . See what came before on the{" "}
          <Link href="/journey" className="inline-flex items-center gap-1 text-primary underline underline-offset-4 hover:text-foreground">
            journey <ArrowRight className="size-3" />
          </Link>
        </p>
      </div>
    </main>
  )
}
