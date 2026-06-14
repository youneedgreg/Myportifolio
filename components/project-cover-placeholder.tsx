import { cn } from "@/lib/utils"

type ProjectCoverPlaceholderProps = {
  title: string
  tags?: string[]
  className?: string
  label?: string
}

export default function ProjectCoverPlaceholder({
  title,
  tags = [],
  className,
  label = "Coming soon",
}: ProjectCoverPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-primary/15 via-card to-accent/30 p-6 text-center",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
        aria-hidden="true"
      />
      <p className="relative font-mono text-xs uppercase tracking-widest text-primary">{label}</p>
      <h3 className="relative text-balance text-xl font-semibold tracking-tight text-gradient md:text-2xl">{title}</h3>
      {tags.length > 0 && (
        <div className="relative flex flex-wrap justify-center gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
