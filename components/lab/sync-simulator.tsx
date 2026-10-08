"use client"

import { useEffect, useRef, useState } from "react"
import { RotateCcw, ShoppingCart, Wifi, WifiOff, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Sale = { id: string; label: string; status: "queued" | "synced"; attempts: number }
type LogLine = { text: string; tone: "info" | "ok" | "warn" | "dup" }

const ITEMS = ["2 × soda 500ml", "Crate of 24", "Water 1L", "Juice 1L", "6-pack", "Snacks"]

/**
 * A toy model of the Liquor Store POS outbox: sales are written locally first,
 * then pushed in order with a client-generated id, so a retry after a lost
 * response is recognised as a duplicate instead of becoming a second sale.
 */
export default function SyncSimulator() {
  const [online, setOnline] = useState(false)
  const [flaky, setFlaky] = useState(true)
  const [outbox, setOutbox] = useState<Sale[]>([])
  const [server, setServer] = useState<string[]>([])
  const [duplicates, setDuplicates] = useState(0)
  const [log, setLog] = useState<LogLine[]>([{ text: "phone offline — sales will queue locally", tone: "info" }])
  const serverRef = useRef(new Set<string>())
  const logRef = useRef<HTMLOListElement>(null)

  const say = (text: string, tone: LogLine["tone"] = "info") => setLog((lines) => [...lines.slice(-40), { text, tone }])

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight })
  }, [log])

  useEffect(() => {
    const next = outbox.find((sale) => sale.status === "queued")
    if (!online || !next) return

    const timer = setTimeout(() => {
      const seen = serverRef.current.has(next.id)
      if (!seen) {
        serverRef.current.add(next.id)
        setServer((rows) => [...rows, next.id])
      }
      const responseLost = flaky && !seen && Math.random() < 0.35

      if (responseLost) {
        // The server stored it, but the phone never heard back — so it must retry.
        setOutbox((sales) => sales.map((s) => (s.id === next.id ? { ...s, attempts: s.attempts + 1 } : s)))
        say(`POST /sync ${next.id} → stored, but the response was lost. retrying…`, "warn")
        return
      }

      if (seen) {
        setDuplicates((n) => n + 1)
        say(`POST /sync ${next.id} → 200 duplicate (already stored, not counted twice)`, "dup")
      } else {
        say(`POST /sync ${next.id} → 201 created`, "ok")
      }
      setOutbox((sales) => sales.map((s) => (s.id === next.id ? { ...s, status: "synced" } : s)))
    }, 700)

    return () => clearTimeout(timer)
  }, [online, flaky, outbox])

  function sell() {
    const id = crypto.randomUUID().slice(0, 8)
    const label = ITEMS[Math.floor(Math.random() * ITEMS.length)]
    setOutbox((sales) => [...sales, { id, label, status: "queued", attempts: 0 }])
    say(`sale ${id} (${label}) written to SQLite + outbox in one transaction`)
  }

  function toggleNetwork() {
    setOnline((value) => !value)
    say(online ? "network dropped — still selling" : "network back — draining outbox in order", online ? "warn" : "info")
  }

  function reset() {
    serverRef.current = new Set()
    setOutbox([])
    setServer([])
    setDuplicates(0)
    setOnline(false)
    setLog([{ text: "reset — phone offline", tone: "info" }])
  }

  const queued = outbox.filter((sale) => sale.status === "queued").length

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <Button onClick={sell}>
            <ShoppingCart className="size-4" />
            Make a sale
          </Button>
          <Button variant="outline" onClick={toggleNetwork} aria-pressed={online}>
            {online ? <Wifi className="size-4 text-primary" /> : <WifiOff className="size-4" />}
            {online ? "Online" : "Offline"}
          </Button>
          <Button variant="outline" onClick={() => setFlaky((v) => !v)} aria-pressed={flaky}>
            <Zap className={cn("size-4", flaky && "text-primary")} />
            Flaky network {flaky ? "on" : "off"}
          </Button>
          <Button variant="ghost" size="icon" onClick={reset} aria-label="Reset simulation">
            <RotateCcw className="size-4" />
          </Button>
        </div>

        <dl className="grid grid-cols-3 gap-3 font-mono">
          {[
            ["on the phone", outbox.length],
            ["on the server", server.length],
            ["duplicates stopped", duplicates],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col-reverse rounded-xl border border-border p-3">
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="text-2xl font-semibold">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Outbox · {queued} waiting
          </p>
          <ul className="flex min-h-12 flex-wrap gap-2">
            {outbox.slice(-18).map((sale) => (
              <li
                key={sale.id}
                title={sale.label}
                className={cn(
                  "rounded-md border px-2 py-1 font-mono text-xs transition-colors",
                  sale.status === "synced" ? "border-primary/40 text-primary" : "border-dashed border-border text-muted-foreground",
                )}
              >
                {sale.id}
                {sale.attempts > 0 && <span className="text-muted-foreground"> ×{sale.attempts + 1}</span>}
              </li>
            ))}
            {outbox.length === 0 && <li className="text-sm text-muted-foreground">Make a few sales while offline.</li>}
          </ul>
        </div>
      </div>

      <ol
        ref={logRef}
        aria-live="polite"
        className="h-72 overflow-y-auto rounded-xl border border-border bg-background p-4 font-mono text-xs leading-relaxed"
      >
        {log.map((line, i) => (
          <li
            key={i}
            className={cn(
              line.tone === "ok" && "text-primary",
              line.tone === "warn" && "text-chart-4",
              line.tone === "dup" && "text-chart-2",
              line.tone === "info" && "text-muted-foreground",
            )}
          >
            <span className="text-muted-foreground/60">$ </span>
            {line.text}
          </li>
        ))}
      </ol>
    </div>
  )
}
