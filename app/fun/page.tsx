import type { Metadata } from "next"
import ClickCounter from "@/components/micro/click-counter"
import ReactionToggle from "@/components/micro/reaction-toggle"
import DraggableCard from "@/components/micro/draggable-card"

export const metadata: Metadata = {
  title: "Fun — Gregory Temwa",
  description: "Interactive widgets and micro-interactions by Gregory Temwa.",
  openGraph: {
    title: "Fun — Gregory Temwa",
    description: "Interactive widgets and micro-interactions by Gregory Temwa.",
    images: [
      { url: "/placeholder.svg?height=630&width=1200&text=Gregory+Temwa+Interactive", width: 1200, height: 630 },
    ],
  },
  twitter: { card: "summary_large_image" },
}

export default function FunPage() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-2">
          <p className="font-mono text-sm uppercase tracking-widest text-primary">Interactive</p>
          <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">Playground</h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Small, memorable interactions that add delight without getting in the way.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="surface p-6 md:p-8">
            <h2 className="text-lg font-semibold tracking-tight">Click counter</h2>
            <p className="text-sm text-muted-foreground">Springy increment and burst animation.</p>
            <div className="mt-6">
              <ClickCounter />
            </div>
          </div>

          <div className="surface p-6 md:p-8">
            <h2 className="text-lg font-semibold tracking-tight">Reactions</h2>
            <p className="text-sm text-muted-foreground">Tap to like with little emoji bursts.</p>
            <div className="mt-6">
              <ReactionToggle />
            </div>
          </div>

          <div className="surface p-6 md:p-8 md:col-span-2">
            <h2 className="text-lg font-semibold tracking-tight">Draggable card</h2>
            <p className="text-sm text-muted-foreground">Drag around to feel the physics.</p>
            <div className="mt-6">
              <DraggableCard />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
