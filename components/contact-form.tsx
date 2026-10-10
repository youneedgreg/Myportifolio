"use client"

import type React from "react"
import { useState, useSyncExternalStore } from "react"
import { CalendarDays, Check, Copy, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SOCIAL } from "@/data/navigation"

// Keep in step with app/api/contact/route.ts.
const LIMITS = { name: 100, email: 254, message: 5000 }

type Status = { kind: "idle" } | { kind: "sent" } | { kind: "error"; message: string }

const WHATSAPP_TEXT = encodeURIComponent("Hi Gregory, I found you on temwa.dev and I'd like to talk about a project.")

const noop = () => () => {}

export default function ContactForm() {
  // False during server render and before hydration: the button stays disabled
  // until React owns the submit, so a native submit can never fire.
  const hydrated = useSyncExternalStore(noop, () => true, () => false)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<Status>({ kind: "idle" })
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" })

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SOCIAL.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${SOCIAL.email}`
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus({ kind: "idle" })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Couldn't send your message.")
      setStatus({ kind: "sent" })
      setForm({ name: "", email: "", message: "", company: "" })
    } catch (err: unknown) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Couldn't send your message." })
    } finally {
      setLoading(false)
    }
  }

  const channel =
    "surface group flex min-h-12 items-center gap-3 px-4 py-3 text-sm transition-colors hover:border-primary/50"

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl scroll-mt-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Get in touch</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Tell me what you&apos;re building</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            A system that has to stay up, a product that needs shipping, or a role on your team. A few lines about the
            problem is plenty; I reply within a day, from Nairobi (EAT, UTC+3).
          </p>
          <ul className="grid gap-3">
            <li>
              <button type="button" onClick={copyEmail} className={`${channel} w-full text-left`}>
                <Mail className="size-4 shrink-0 text-primary" />
                <span className="min-w-0 flex-1 truncate font-mono">{SOCIAL.email}</span>
                <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-foreground">
                  {copied ? <Check className="size-3.5 text-primary" /> : <Copy className="size-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </li>
            <li>
              <a
                href={`${SOCIAL.whatsapp}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noreferrer"
                className={channel}
              >
                <MessageCircle className="size-4 shrink-0 text-primary" />
                <span className="flex-1">Message me on WhatsApp</span>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground">Open ↗</span>
              </a>
            </li>
            {SOCIAL.booking && (
              <li>
                <a href={SOCIAL.booking} target="_blank" rel="noreferrer" className={channel}>
                  <CalendarDays className="size-4 shrink-0 text-primary" />
                  <span className="flex-1">Book a 20-minute intro call</span>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground">Pick a time ↗</span>
                </a>
              </li>
            )}
          </ul>
        </div>

        <form method="post" onSubmit={onSubmit} className="surface relative space-y-5 p-6 sm:p-8">
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
                maxLength={LIMITS.name}
                autoComplete="name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
                maxLength={LIMITS.email}
                autoComplete="email"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              What are you building?
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="The problem, who it's for, and roughly when you need it."
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              required
              maxLength={LIMITS.message}
              rows={5}
              className="resize-y"
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              disabled={loading || !hydrated}
              size="lg"
              className="transition-transform hover:scale-[1.02] active:scale-[0.98] motion-reduce:transform-none"
            >
              {loading ? "Sending…" : "Send message"}
            </Button>
            <p className="font-mono text-xs text-muted-foreground">Goes straight to my inbox.</p>
          </div>
          <div aria-live="polite" className="text-sm">
            {status.kind === "sent" && (
              <p className="rounded-xl border border-primary/40 bg-primary/5 px-4 py-3">
                Thanks, it&apos;s in my inbox. I&apos;ll reply within a day.
              </p>
            )}
            {status.kind === "error" && (
              <p className="rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3">
                {status.message} You can also email me directly at{" "}
                <a href={`mailto:${SOCIAL.email}`} className="font-medium underline underline-offset-4">
                  {SOCIAL.email}
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
