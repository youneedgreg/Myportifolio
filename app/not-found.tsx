import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getSortedPosts } from "@/data/blog"
import { projects } from "@/data/projects"
import { MissingPath, SearchButton } from "@/components/not-found-actions"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  const suggestions = [
    { href: "/", label: "Home", hint: "Start over" },
    { href: "/projects", label: "Projects", hint: `${projects.length} case studies` },
    { href: "/blog", label: "Blog", hint: getSortedPosts()[0]?.title ?? "Writing" },
    { href: "/about", label: "About", hint: "Experience & stack" },
  ]

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <p className="font-mono text-sm uppercase tracking-widest text-primary">Error 404</p>
          <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient">Nothing lives here.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The link may be old, or the page moved. Everything that still exists is one of the places below.
          </p>
        </div>

        <div className="surface overflow-hidden font-mono text-sm">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="space-y-1.5 p-5 leading-relaxed">
            <p>
              <span className="text-primary">greg@portfolio</span>
              <span className="text-muted-foreground">:~$ </span>
              cd <MissingPath />
            </p>
            <p className="text-destructive">
              cd: <MissingPath />: No such file or directory
            </p>
            <p>
              <span className="text-primary">greg@portfolio</span>
              <span className="text-muted-foreground">:~$ </span>
              ls
            </p>
          </div>
        </div>

        <nav aria-label="Suggested pages" className="grid gap-4 sm:grid-cols-2">
          {suggestions.map(({ href, label, hint }) => (
            <Link
              key={href}
              href={href}
              className="surface group flex items-center justify-between gap-4 p-5 transition-colors hover:border-primary/50"
            >
              <span className="min-w-0 space-y-1">
                <span className="block font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {label}
                </span>
                <span className="block truncate font-mono text-xs text-muted-foreground">{hint}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </nav>

        <SearchButton />
      </div>
    </main>
  )
}
