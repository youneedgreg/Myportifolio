import Image from "next/image"
import Link from "next/link"
import { Marquee } from "@/components/ui/marquee"
import { projects, type Project } from "@/data/projects"

function WorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="surface group relative block w-72 shrink-0 overflow-hidden p-1.5 transition-colors hover:border-primary/50 sm:w-80"
    >
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={640}
        height={400}
        sizes="320px"
        className="aspect-[16/10] w-full rounded-xl object-cover object-top"
      />
      <div className="flex items-center justify-between gap-3 px-2 pt-2.5 pb-1">
        <span className="truncate text-sm font-semibold tracking-tight transition-colors group-hover:text-primary">
          {project.title}
        </span>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
      </div>
    </Link>
  )
}

/** Real screenshots, scrolling, right under the hero: the work is the first thing you see. */
export default function WorkStrip() {
  const withScreens = projects.filter((project) => !project.image.startsWith("/placeholder"))

  return (
    <section aria-label="Project screenshots" className="-mx-4 md:-mx-6">
      <div className="relative motion-reduce:hidden">
        <Marquee pauseOnHover repeat={2} className="[--duration:60s] [--gap:1.25rem]">
          {withScreens.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background md:w-24" />
      </div>
      {/* Reduced motion: the same cards in a row you scroll yourself. */}
      <div className="hidden snap-x gap-5 overflow-x-auto px-4 pb-2 motion-reduce:flex md:px-6">
        {withScreens.map((project) => (
          <div key={project.slug} className="snap-start">
            <WorkCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
