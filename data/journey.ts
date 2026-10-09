import { getSortedPosts } from "@/data/blog"
import { experience } from "@/data/experience"
import { projects } from "@/data/projects"

export type JourneyKind = "work" | "open-source" | "teaching" | "project" | "writing" | "education"

export type JourneyEntry = {
  /** Sortable "YYYY-MM" key; month is "00" when only the year is known. */
  when: string
  year: number
  kind: JourneyKind
  title: string
  detail: string
  href?: string
  upcoming?: boolean
}

export const journeyKinds: { kind: JourneyKind; label: string }[] = [
  { kind: "work", label: "Work" },
  { kind: "project", label: "Projects" },
  { kind: "open-source", label: "Open source" },
  { kind: "writing", label: "Writing" },
  { kind: "teaching", label: "Teaching" },
  { kind: "education", label: "Education" },
]

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

/** "Feb 2026 – Present" → "2026-02"; "2023 – Present" → "2023-00". */
function startOf(period: string) {
  const match = period.match(/(?:([A-Z][a-z]{2}) )?(\d{4})/)
  if (!match) return null
  const month = match[1] ? MONTHS.indexOf(match[1]) + 1 : 0
  return { year: Number(match[2]), when: `${match[2]}-${String(month).padStart(2, "0")}` }
}

function kindOfRole(role: string): JourneyKind {
  if (/open source/i.test(role)) return "open-source"
  if (/instructor/i.test(role)) return "teaching"
  return "work"
}

export function getJourney(): JourneyEntry[] {
  const entries: JourneyEntry[] = []

  for (const job of experience) {
    const start = startOf(job.period)
    if (!start) continue
    entries.push({
      ...start,
      kind: kindOfRole(job.role),
      title: job.role,
      detail: `${job.company} · ${job.period}`,
    })
  }

  for (const project of projects) {
    if (project.status === "coming-soon") continue
    const start = startOf(project.year)
    if (!start) continue
    entries.push({
      ...start,
      kind: "project",
      title: project.title,
      detail: project.role,
      href: `/projects/${project.slug}`,
    })
  }

  for (const post of getSortedPosts()) {
    entries.push({
      when: post.date.slice(0, 7),
      year: Number(post.date.slice(0, 4)),
      kind: "writing",
      title: post.title,
      detail: post.readingTime,
      href: `/blog/${post.slug}`,
    })
  }

  entries.push({
    when: "2027-00",
    year: 2027,
    kind: "education",
    title: "BSc Software Engineering",
    detail: "United States International University–Africa · expected",
    upcoming: true,
  })

  return entries.sort((a, b) => b.when.localeCompare(a.when))
}
