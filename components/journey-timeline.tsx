"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { journeyKinds, type JourneyEntry, type JourneyKind } from "@/data/journey"
import { cn } from "@/lib/utils"

const kindLabel = Object.fromEntries(journeyKinds.map(({ kind, label }) => [kind, label])) as Record<JourneyKind, string>

export default function JourneyTimeline({ entries }: { entries: JourneyEntry[] }) {
  const [active, setActive] = useState<JourneyKind | null>(null)
  const visible = active ? entries.filter((entry) => entry.kind === active) : entries
  const years = [...new Set(visible.map((entry) => entry.year))]
  const counts = Object.fromEntries(
    journeyKinds.map(({ kind }) => [kind, entries.filter((entry) => entry.kind === kind).length]),
  )

  return (
    <div className="space-y-12">
      <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-2 font-mono text-xs">
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className="min-h-9 rounded-full border border-border px-3.5 transition-colors hover:text-foreground aria-pressed:border-primary aria-pressed:text-primary"
        >
          Everything · {entries.length}
        </button>
        {journeyKinds.map(({ kind, label }) => (
          <button
            key={kind}
            type="button"
            onClick={() => setActive(active === kind ? null : kind)}
            aria-pressed={active === kind}
            className="min-h-9 rounded-full border border-border px-3.5 text-muted-foreground transition-colors hover:text-foreground aria-pressed:border-primary aria-pressed:text-primary"
          >
            {label} · {counts[kind]}
          </button>
        ))}
      </div>

      <ol className="space-y-14">
        {years.map((year) => (
          <li key={year} className="grid gap-6 md:grid-cols-[8rem_1fr]">
            <h2 className="font-mono text-3xl font-semibold tracking-tight text-primary md:sticky md:top-24 md:self-start">
              {year}
            </h2>
            <ol className="space-y-3 border-l border-border pl-6">
              {visible
                .filter((entry) => entry.year === year)
                .map((entry) => {
                  const body = (
                    <>
                      <span className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        <span className={cn(entry.upcoming ? "text-primary" : "")}>{kindLabel[entry.kind]}</span>
                        {entry.upcoming && <span>· upcoming</span>}
                      </span>
                      <span className="flex items-start justify-between gap-3">
                        <span className="font-semibold tracking-tight transition-colors group-hover:text-primary">
                          {entry.title}
                        </span>
                        {entry.href && (
                          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                        )}
                      </span>
                      <span className="text-sm text-muted-foreground">{entry.detail}</span>
                    </>
                  )
                  return (
                    <li key={`${entry.kind}-${entry.title}`} className="relative">
                      <span
                        aria-hidden
                        className={cn(
                          "absolute top-5 -left-[1.85rem] size-2.5 rounded-full border-2 border-background",
                          entry.upcoming ? "bg-muted-foreground" : "bg-primary",
                        )}
                      />
                      {entry.href ? (
                        <Link
                          href={entry.href}
                          className="surface group flex flex-col gap-1 p-4 transition-colors hover:border-primary/50"
                        >
                          {body}
                        </Link>
                      ) : (
                        <div className={cn("surface flex flex-col gap-1 p-4", entry.upcoming && "border-dashed")}>
                          {body}
                        </div>
                      )}
                    </li>
                  )
                })}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  )
}
