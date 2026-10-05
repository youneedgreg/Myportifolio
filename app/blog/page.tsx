import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Rss } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatPostDate, getSortedPosts } from "@/data/blog"
import { SITE_NAME } from "@/lib/seo"

const description =
  "Notes from Gregory Temwa on building production software — domain modelling, testing, security defaults, and the failures that only show up once something is real."

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Gregory Temwa",
    description,
    url: "/blog",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
}

export default function BlogPage() {
  const posts = getSortedPosts()

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back home
          </Link>
          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Writing</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
              <span className="text-gradient">Blog</span>
            </h1>
          </div>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Things I got wrong first, written up once I understood why. Mostly notes from shipping
            real systems: domain modelling, testing what fails silently, and picking defaults that
            fail in the direction you can live with.
          </p>
          <a
            href="/feed.xml"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-foreground"
          >
            <Rss className="size-4" />
            Subscribe via RSS
          </a>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="surface group flex flex-col gap-3 p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
                {post.title}
              </h2>
              <p className="leading-relaxed text-muted-foreground">{post.summary}</p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 pt-1 font-mono text-xs uppercase tracking-widest text-primary">
                Read post
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
