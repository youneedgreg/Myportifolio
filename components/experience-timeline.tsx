import { experience } from "@/data/experience"

type ExperienceTimelineProps = {
  limit?: number
}

export default function ExperienceTimeline({ limit }: ExperienceTimelineProps) {
  const items = limit ? experience.slice(0, limit) : experience

  return (
    <div className="timeline relative">
      <div className="absolute left-[15px] top-1 bottom-1 w-px bg-border md:left-[19px]" />
      {/* Fills as the list scrolls past, on a CSS view timeline (see globals.css). */}
      <div
        aria-hidden
        className="timeline-progress absolute left-[15px] top-1 w-px origin-top bg-primary md:left-[19px]"
        style={{ height: "calc(100% - 0.25rem)" }}
      />
      <ol className="space-y-10">
        {items.map((item) => (
          <li key={`${item.company}-${item.role}`} className="relative flex gap-6 pl-10 md:gap-8 md:pl-12">
            <span className="absolute left-0 top-0.5 flex size-8 items-center justify-center rounded-full border border-border bg-card md:size-10">
              <span className="size-2 rounded-full bg-primary" />
            </span>
            <div className="space-y-1.5 pt-0.5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-semibold tracking-tight">{item.role}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-primary">{item.company}</span>
              </div>
              <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
