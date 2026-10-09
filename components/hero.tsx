import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingOrbs from "@/components/floating-orbs"
import { experience } from "@/data/experience"
import { getSortedPosts } from "@/data/blog"
import { projects } from "@/data/projects"

export default function Hero() {
  const stats = [
    { value: projects.length, label: "projects" },
    { value: experience.length, label: "roles" },
    { value: getSortedPosts().length, label: "essays" },
    { value: 1, label: "degree in progress" },
  ]

  return (
    <section className="relative pt-10 md:pt-16">
      <FloatingOrbs />
      <div className="relative z-10 mx-auto max-w-5xl space-y-6 md:space-y-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for freelance &amp; full-time
          </span>
          <span className="font-mono text-xs text-muted-foreground">~/gregory $ whoami</span>
        </div>

        <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-7xl lg:text-8xl">
          <span className="text-gradient">Software that holds up</span>
          <br />
          <span className="text-primary">on a busy afternoon.</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m Gregory — Chief Software Engineer at WebTech and a Software Engineering student at USIU, class of
          2027. I build impactful systems that organisations run their day on — trust accounting for a law firm,
          operations for a flower farm, bookings for a safari operator, a point of sale that keeps selling offline.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="#contact">
              Let&apos;s work together
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#work">
              See the work
              <ArrowDown className="size-4" />
            </Link>
          </Button>
        </div>

        <dl className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-xl font-semibold text-foreground">{stat.value}</dd>
              <span aria-hidden className="text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
