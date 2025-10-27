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
    <main className="px-4 md:px-6 py-10 md:py-16">
      <header className="mx-auto max-w-4xl space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Playground</h1>
        <p className="text-muted-foreground">
          Small, memorable interactions that add delight without getting in the way.
        </p>
      </header>

      <section className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-lg font-semibold">Click counter</h2>
          <p className="text-sm text-muted-foreground">Springy increment and burst animation.</p>
          <div className="mt-4">
            <ClickCounter />
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-lg font-semibold">Reactions</h2>
          <p className="text-sm text-muted-foreground">Tap to like with little emoji bursts.</p>
          <div className="mt-4">
            <ReactionToggle />
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 md:col-span-2">
          <h2 className="text-lg font-semibold">Draggable card</h2>
          <p className="text-sm text-muted-foreground">Drag around to feel the physics.</p>
          <div className="mt-4">
            <DraggableCard />
          </div>
        </div>
      </section>
    </main>
  )
}
