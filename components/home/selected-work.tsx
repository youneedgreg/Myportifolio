import Image from "next/image"
import Link from "next/link"
import { ArrowRight, PenLine } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ProjectCoverPlaceholder from "@/components/project-cover-placeholder"
import { getSortedPosts } from "@/data/blog"
import { getFeaturedProjects, projects } from "@/data/projects"
import { cn } from "@/lib/utils"

export default function SelectedWork() {
  const featured = getFeaturedProjects().slice(0, 4)
  const posts = getSortedPosts()

  return (
    <section id="work" className="mx-auto w-full max-w-5xl scroll-mt-24 space-y-10">
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="font-mono text-sm uppercase tracking-widest text-primary">Selected work</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Built for people who rely on it</h2>
        </div>
        <Link
          href="/projects"
          className="inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap font-mono text-sm text-primary transition-colors hover:text-foreground"
        >
          All {projects.length}
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="space-y-6">
        {featured.map((project, i) => {
          const post = posts.find((p) => p.project?.slug === project.slug)
          const hasImage = !project.image.startsWith("/placeholder")
          return (
            <article
              key={project.slug}
              className="surface group grid overflow-hidden transition-colors hover:border-primary/50 md:grid-cols-2"
            >
              <Link
                href={`/projects/${project.slug}`}
                tabIndex={-1}
                aria-hidden
                className={cn("relative block overflow-hidden bg-muted", i % 2 === 1 && "md:order-2")}
              >
                {hasImage ? (
                  <Image
                    src={project.image}
                    alt=""
                    width={960}
                    height={640}
                    sizes="(min-width: 768px) 512px, 100vw"
                    className="aspect-[16/10] h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                ) : (
                  <ProjectCoverPlaceholder title={project.title} tags={project.tags} label="Case study" />
                )}
              </Link>
              <div className="flex flex-col gap-4 p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {project.year} · {project.role}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition-colors hover:text-primary group-hover:text-primary"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="line-clamp-4 leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 font-mono text-sm">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex min-h-10 items-center gap-1.5 text-primary transition-colors hover:text-foreground"
                  >
                    Read the case study
                    <ArrowRight className="size-4" />
                  </Link>
                  {post && (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex min-h-10 items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <PenLine className="size-3.5" />
                      Wrote about it
                    </Link>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
