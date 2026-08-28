import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, FolderKanban } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  formatPostDate,
  getAllPostSlugs,
  getPostBySlug,
  getSortedPosts,
  type PostBlock,
} from "@/data/blog"
import { SITE_NAME, SITE_URL } from "@/lib/seo"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  const title = `${post.title} — Gregory Temwa`

  return {
    title: { absolute: `${post.title} | Gregory Temwa` },
    description: post.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description: post.summary,
      url: `/blog/${slug}`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: ["Gregory Temwa Odete"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.summary,
    },
  }
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="pt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{block.text}</h2>
    case "list":
      return (
        <ul className="space-y-3 pl-5">
          {block.items.map((item) => (
            <li key={item} className="list-disc leading-relaxed text-muted-foreground marker:text-primary">
              {item}
            </li>
          ))}
        </ul>
      )
    case "quote":
      return (
        <blockquote className="border-l-2 border-primary pl-5 text-lg leading-relaxed text-foreground italic">
          {block.text}
        </blockquote>
      )
    default:
      return <p className="leading-relaxed text-muted-foreground">{block.text}</p>
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const sorted = getSortedPosts()
  const index = sorted.findIndex((p) => p.slug === slug)
  const newer = index > 0 ? sorted[index - 1] : null
  const older = index < sorted.length - 1 ? sorted[index + 1] : null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: "Gregory Temwa Odete", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  }

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl space-y-12">
        <header className="space-y-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All posts
          </Link>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="text-gradient">{post.title}</span>
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{post.summary}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          {post.project && (
            <Link
              href={`/projects/${post.project.slug}`}
              className="surface group inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <FolderKanban className="size-3.5 text-primary" />
              From the build of {post.project.title}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </header>

        <div className="space-y-6">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <nav className="grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
          {newer ? (
            <Link
              href={`/blog/${newer.slug}`}
              className="surface group flex flex-col gap-1 p-5 transition-colors hover:border-primary/50"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <ArrowLeft className="size-3.5" />
                Newer
              </span>
              <span className="font-semibold tracking-tight transition-colors group-hover:text-primary">
                {newer.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {older ? (
            <Link
              href={`/blog/${older.slug}`}
              className="surface group flex flex-col items-end gap-1 p-5 text-right transition-colors hover:border-primary/50"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Older
                <ArrowRight className="size-3.5" />
              </span>
              <span className="font-semibold tracking-tight transition-colors group-hover:text-primary">
                {older.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </main>
  )
}
