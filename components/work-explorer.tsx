"use client"

import { useDeferredValue, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowUpRight, Dices, LayoutGrid, Search, SquareTerminal, X } from "lucide-react"
import { projectCategories, type ProjectCategory, type ProjectStatus } from "@/data/projects"
import { cn } from "@/lib/utils"

export type WorkItem = {
  slug: string
  title: string
  description: string
  image: string | null
  tags: string[]
  year: string
  status: ProjectStatus
  featured: boolean
  openSource: boolean
  client: boolean
  categories: ProjectCategory[]
}

const STATUS: Record<ProjectStatus, { label: string; perms: string; dot: string }> = {
  live: { label: "Live", perms: "-rwxr-xr-x", dot: "bg-primary" },
  "source-available": { label: "Source", perms: "-rw-r--r--", dot: "bg-chart-3" },
  private: { label: "Client · private", perms: "-rwx------", dot: "bg-chart-4" },
  "coming-soon": { label: "In progress", perms: "-rw-------", dot: "bg-muted-foreground" },
}

type StatusFilter = "all" | "client" | ProjectStatus

const FILTERS: { id: StatusFilter; label: string; dot?: string }[] = [
  { id: "all", label: "Everything" },
  { id: "live", label: "Live", dot: STATUS.live.dot },
  { id: "client", label: "Client work", dot: "bg-chart-5" },
  { id: "source-available", label: "Source-available", dot: STATUS["source-available"].dot },
  { id: "coming-soon", label: "In progress", dot: STATUS["coming-soon"].dot },
  { id: "private", label: "Private", dot: STATUS.private.dot },
]

function matchesStatus(item: WorkItem, filter: StatusFilter) {
  if (filter === "all") return true
  if (filter === "client") return item.client
  return item.status === filter
}

/** Tags that name the same tool. */
const ALIASES: Record<string, string> = { "React 19": "React", "Tailwind CSS v4": "Tailwind CSS", "Neon Postgres": "PostgreSQL", NeonDB: "PostgreSQL" }
const norm = (tag: string) => ALIASES[tag] ?? tag

function StatusPill({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 font-mono text-[11px] backdrop-blur-sm">
      <span className={cn("size-1.5 rounded-full", STATUS[status].dot)} />
      {STATUS[status].label}
    </span>
  )
}

function Cover({ item, big }: { item: WorkItem; big: boolean }) {
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt=""
        width={big ? 1040 : 640}
        height={big ? 650 : 400}
        sizes={big ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"}
        className="aspect-[16/10] h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
      />
    )
  }
  // No screenshot yet: a generated cover, so the grid never shows a grey box.
  const initials = item.title
    .split(/[\s-]+/)
    .filter((word) => /^[a-z0-9]/i.test(word))
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="relative flex aspect-[16/10] h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-card to-accent/40">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "1.5rem 1.5rem",
        }}
      />
      <span className="text-gradient text-6xl font-semibold tracking-tighter transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none">
        {initials}
      </span>
      <span className="absolute bottom-3 left-4 font-mono text-[11px] text-muted-foreground">~/work/{item.slug}</span>
    </div>
  )
}

function GalleryCard({ item }: { item: WorkItem }) {
  const big = item.featured
  return (
    <Link
      href={`/projects/${item.slug}`}
      className={cn(
        "surface group relative flex flex-col overflow-hidden transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/50 motion-reduce:hover:translate-y-0",
        big && "sm:col-span-2",
      )}
    >
      <div className="relative overflow-hidden">
        <Cover item={item} big={big} />
        <div className="absolute top-3 left-3">
          <StatusPill status={item.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className={cn("font-semibold tracking-tight transition-colors group-hover:text-primary", big ? "text-xl" : "text-lg")}>
            {item.title}
          </h2>
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>
        <p className={cn("text-sm leading-relaxed text-muted-foreground", big ? "line-clamp-3" : "line-clamp-2")}>
          {item.description}
        </p>
        <p className="mt-auto truncate pt-2 font-mono text-xs text-muted-foreground">
          {item.year} · {item.tags.slice(0, 3).join(" · ")}
        </p>
      </div>
    </Link>
  )
}

function TerminalView({ items }: { items: WorkItem[] }) {
  return (
    <div className="surface overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3" aria-hidden>
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 text-xs text-muted-foreground">greg@portfolio: ~/work</span>
      </div>
      <div className="p-2 sm:p-4">
        <p className="px-2 pb-2 text-muted-foreground">
          <span className="text-primary">$</span> ls -l --sort=time
        </p>
        <p className="px-2 pb-2 text-xs text-muted-foreground">total {items.length}</p>
        <ul>
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/projects/${item.slug}`}
                className="group grid min-h-10 grid-cols-[3rem_1fr] items-center gap-x-4 rounded-md px-2 py-1.5 transition-colors hover:bg-muted sm:grid-cols-[6.5rem_3rem_1fr_minmax(0,16rem)]"
              >
                <span className="hidden text-muted-foreground sm:inline">{STATUS[item.status].perms}</span>
                <span className="text-muted-foreground">{item.year.slice(0, 4)}</span>
                <span className="truncate transition-colors group-hover:text-primary">
                  {item.title}
                  {item.status === "live" && <span className="text-primary">*</span>}
                </span>
                <span className="hidden truncate text-xs text-muted-foreground sm:inline">{item.tags.slice(0, 3).join(", ")}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="px-2 pt-3 text-xs text-muted-foreground">
          <span className="text-primary">*</span> live · x = you can run it · ------ = client&apos;s eyes only
        </p>
      </div>
    </div>
  )
}

export default function WorkExplorer({ items }: { items: WorkItem[] }) {
  const router = useRouter()
  const [status, setStatus] = useState<StatusFilter>("all")
  const [category, setCategory] = useState<ProjectCategory | null>(null)
  const [tech, setTech] = useState<string | null>(null)
  const [query, setQuery] = useState("")
  const [view, setView] = useState<"gallery" | "terminal">("gallery")
  const deferredQuery = useDeferredValue(query)

  const topTech = useMemo(() => {
    const counts = new Map<string, number>()
    for (const item of items) for (const tag of new Set(item.tags.map(norm))) counts.set(tag, (counts.get(tag) ?? 0) + 1)
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([tag]) => tag)
  }, [items])

  const statusCounts = useMemo(
    () => Object.fromEntries(FILTERS.map(({ id }) => [id, items.filter((item) => matchesStatus(item, id)).length])),
    [items],
  )

  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        projectCategories.map(({ id }) => [id, items.filter((item) => item.categories.includes(id)).length]),
      ),
    [items],
  )

  const visible = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    return items.filter(
      (item) =>
        matchesStatus(item, status) &&
        (!category || item.categories.includes(category)) &&
        (!tech || item.tags.map(norm).includes(tech)) &&
        (!q || `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase().includes(q)),
    )
  }, [items, status, category, tech, deferredQuery])

  const filtered = status !== "all" || category !== null || tech !== null || query !== ""

  function surprise() {
    const pool = visible.length > 0 ? visible : items
    router.push(`/projects/${pool[Math.floor(Math.random() * pool.length)].slug}`)
  }

  function clear() {
    setStatus("all")
    setCategory(null)
    setTech(null)
    setQuery("")
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="surface flex min-h-11 flex-1 items-center gap-2 px-4 focus-within:border-primary/60">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <span className="sr-only">Search projects</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="grep -i postgres, offline, AI…"
              className="w-full bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground/70"
            />
          </label>
          <div className="flex gap-2">
            <div role="group" aria-label="View" className="surface flex p-1">
              {(
                [
                  ["gallery", LayoutGrid, "Gallery"],
                  ["terminal", SquareTerminal, "Terminal"],
                ] as const
              ).map(([id, Icon, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setView(id)}
                  aria-pressed={view === id}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-xl px-3 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground aria-pressed:bg-muted aria-pressed:text-foreground"
                >
                  <Icon className="size-3.5" />
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={surprise}
              className="surface group inline-flex min-h-11 items-center gap-2 px-4 font-mono text-xs transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Dices className="size-4 transition-transform duration-500 group-hover:rotate-180 motion-reduce:transition-none" />
              Surprise me
            </button>
          </div>
        </div>

        <div role="group" aria-label="Filter by status" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 font-mono text-xs [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setStatus(filter.id)}
              aria-pressed={status === filter.id}
              disabled={!statusCounts[filter.id]}
              className="inline-flex min-h-9 shrink-0 items-center gap-2 rounded-full border border-border px-3.5 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40 aria-pressed:border-primary aria-pressed:text-primary"
            >
              {filter.dot && <span className={cn("size-1.5 rounded-full", filter.dot)} />}
              {filter.label} · {statusCounts[filter.id] ?? 0}
            </button>
          ))}
        </div>

        <div role="group" aria-label="Filter by kind of work" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 font-mono text-xs [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {projectCategories
            .filter(({ id }) => categoryCounts[id] > 0)
            .map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setCategory(category === id ? null : id)}
                aria-pressed={category === id}
                className="inline-flex min-h-9 shrink-0 items-center gap-2 rounded-full border border-dashed border-border px-3.5 text-muted-foreground transition-colors hover:text-foreground aria-pressed:border-solid aria-pressed:border-primary aria-pressed:text-primary"
              >
                {label} · {categoryCounts[id]}
              </button>
            ))}
        </div>

        <div role="group" aria-label="Filter by technology" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 font-mono text-xs [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {topTech.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setTech(tech === tag ? null : tag)}
              aria-pressed={tech === tag}
              className="min-h-8 shrink-0 rounded-md bg-muted px-2.5 text-muted-foreground transition-colors hover:text-foreground aria-pressed:bg-primary aria-pressed:text-primary-foreground"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between font-mono text-xs text-muted-foreground" aria-live="polite">
        <span>
          {visible.length} of {items.length} projects
        </span>
        {filtered && (
          <button type="button" onClick={clear} className="inline-flex min-h-8 items-center gap-1 hover:text-foreground">
            <X className="size-3.5" />
            Clear filters
          </button>
        )}
      </div>

      {visible.length === 0 ? (
        <div className="surface space-y-3 p-8 text-center font-mono text-sm">
          <p className="text-muted-foreground">
            grep: no projects match <span className="text-foreground">&ldquo;{query || tech || category || status}&rdquo;</span>
          </p>
          <button type="button" onClick={clear} className="text-primary hover:text-foreground">
            reset and show everything
          </button>
        </div>
      ) : view === "gallery" ? (
        <div className="grid grid-flow-dense gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <GalleryCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <TerminalView items={visible} />
      )}
    </div>
  )
}
