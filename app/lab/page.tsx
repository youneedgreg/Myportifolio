import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SyncSimulator from "@/components/lab/sync-simulator"
import ClickCounter from "@/components/micro/click-counter"
import ReactionToggle from "@/components/micro/reaction-toggle"
import DraggableCard from "@/components/micro/draggable-card"
import { SITE_NAME } from "@/lib/seo"

const description = "Interactive experiments by Gregory Temwa — including a toy offline-first sync queue you can break."

export const metadata: Metadata = {
  title: "Lab",
  description,
  alternates: { canonical: "/lab" },
  openGraph: { title: "Lab — Gregory Temwa", description, url: "/lab", siteName: SITE_NAME, type: "website" },
}

export default function LabPage() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-16">
        <header className="space-y-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">greg@portfolio</span>:~$ ls ./lab
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient">Lab</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Things to poke at. Some are small interactions; the first one is the idea a real client system depends on,
            shrunk down so you can break it.
          </p>
        </header>

        <section className="surface space-y-6 p-6 md:p-8">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Experiment 01</p>
            <h2 className="text-2xl font-semibold tracking-tight">Sell offline, sync exactly once</h2>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              Go offline and make a few sales, then come back online with the flaky network on. Some responses get
              lost, so the phone retries — and because every sale carries an id the phone generated, the server
              answers &ldquo;duplicate&rdquo; instead of recording it twice. The counters should always agree.
            </p>
          </div>
          <SyncSimulator />
          <Link
            href="/projects/liquor-store-pos"
            className="inline-flex min-h-10 items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-foreground"
          >
            The real system: Liquor Store POS
            <ArrowRight className="size-4" />
          </Link>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Small interactions</p>
            <h2 className="text-2xl font-semibold tracking-tight">Feel, not function</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface p-6 md:p-8">
              <h3 className="text-lg font-semibold tracking-tight">Click counter</h3>
              <p className="text-sm text-muted-foreground">Springy increment and burst animation.</p>
              <div className="mt-6">
                <ClickCounter />
              </div>
            </div>
            <div className="surface p-6 md:p-8">
              <h3 className="text-lg font-semibold tracking-tight">Reactions</h3>
              <p className="text-sm text-muted-foreground">Tap to like with little emoji bursts.</p>
              <div className="mt-6">
                <ReactionToggle />
              </div>
            </div>
            <div className="surface p-6 md:col-span-2 md:p-8">
              <h3 className="text-lg font-semibold tracking-tight">Draggable card</h3>
              <p className="text-sm text-muted-foreground">Drag it around to feel the physics.</p>
              <div className="mt-6">
                <DraggableCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
