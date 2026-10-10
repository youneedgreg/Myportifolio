import type { Metadata } from "next"
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatPostDate, getSortedPosts } from "@/data/blog"
import Hero from "@/components/hero"
import WorkStrip from "@/components/home/work-strip"
import SelectedWork from "@/components/home/selected-work"
import RabbitHoles from "@/components/home/rabbit-holes"
import ScrollReveal from "@/components/scroll-reveal"
import NowBuilding from "@/components/now-building"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
}

const INTRO =
  "I started out teaching kids to code at Somo Africa in 2023. Since then I've shipped marketplaces, finance apps, a database engine written from scratch, and systems that real businesses open every morning, while still sitting exams at USIU. I care about the unglamorous parts: the rule enforced in four places, the sale that syncs exactly once, the default that fails safe."

export default function Page() {
  const latestPosts = getSortedPosts().slice(0, 3)

  return (
    <>
      <main className="flex flex-col gap-24 px-4 md:gap-32 md:px-6">
        <div className="space-y-10 md:space-y-12">
          <Hero />
          <WorkStrip />
        </div>

        <section id="about" className="mx-auto w-full max-w-4xl space-y-6">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">greg@portfolio</span>:~$ cat about.txt
          </p>
          <ScrollReveal
            text={INTRO}
            className="text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl md:text-4xl"
          />
          <Link
            href="/about"
            className="inline-flex min-h-10 items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-foreground"
          >
            The longer version
            <ArrowRight className="size-4" />
          </Link>
        </section>

        <SelectedWork />

        <section id="writing" className="mx-auto w-full max-w-5xl space-y-10">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="font-mono text-sm uppercase tracking-widest text-primary">Writing</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Things I got wrong first</h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap font-mono text-sm text-primary transition-colors hover:text-foreground"
            >
              All posts
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="surface group flex flex-col gap-3 p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-balance text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-mono text-sm text-primary">
                  Read
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <RabbitHoles />

        <section id="now" className="mx-auto w-full max-w-5xl space-y-10">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="font-mono text-sm uppercase tracking-widest text-primary">Now</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">What I&apos;m working on</h2>
            </div>
            <Link
              href="/now"
              className="inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap font-mono text-sm text-primary transition-colors hover:text-foreground"
            >
              /now
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <NowBuilding />
        </section>

        <ContactForm />
      </main>
    </>
  )
}
