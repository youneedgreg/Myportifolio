import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatPostDate, getSortedPosts } from "@/data/blog"

const Hero = dynamic(() => import("@/components/hero"))
const About = dynamic(() => import("@/components/about"))
const ExperienceTimeline = dynamic(() => import("@/components/experience-timeline"))
const Projects = dynamic(() => import("@/components/projects"))
const ContactForm = dynamic(() => import("@/components/contact-form"))
const RandomFact = dynamic(() => import("@/components/micro/random-fact"))

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Page() {
  const latestPosts = getSortedPosts().slice(0, 2)

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50">
        Skip to content
      </a>
      <main id="main" className="flex flex-col gap-24 px-4 pb-24 md:gap-32 md:px-6">
        <Hero />
        <About />
        <section id="experience" className="px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="font-mono text-sm uppercase tracking-widest text-primary">Career</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Experience</h2>
              </div>
              <Link
                href="/about#experience"
                className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-sm text-primary transition-colors hover:text-foreground"
              >
                Full history
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <ExperienceTimeline limit={3} />
          </div>
        </section>
        <Projects />
        <section id="writing" className="px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="font-mono text-sm uppercase tracking-widest text-primary">Writing</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">From the blog</h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-sm text-primary transition-colors hover:text-foreground"
              >
                All posts
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="surface group flex flex-col gap-2 p-6 transition-colors hover:border-primary/50"
                >
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="text-balance text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section id="fun" className="px-4 md:px-6">
          <div className="surface mx-auto max-w-4xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Random fact generator</h2>
            <p className="mt-1 text-muted-foreground">
              Click the button to get a random fact from a public API. It&apos;s the little moments that make
              interfaces memorable.
            </p>
            <div className="mt-6">
              <RandomFact />
            </div>
          </div>
        </section>
        <ContactForm />
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Gregory Temwa. All rights reserved.
            </p>
            <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <a className="transition-colors hover:text-foreground" href="#projects">
                Projects
              </a>
              <a className="transition-colors hover:text-foreground" href="#about">
                About
              </a>
              <Link className="transition-colors hover:text-foreground" href="/blog">
                Blog
              </Link>
              <a className="transition-colors hover:text-foreground" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
