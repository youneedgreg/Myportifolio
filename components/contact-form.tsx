"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast("Missing fields", { description: "Please fill out all fields." })
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to send")
      toast("Message sent", { description: "Thanks for reaching out! I’ll get back to you soon." })
      setForm({ name: "", email: "", message: "" })
    } catch (err: unknown) {
      let message = "Please try again.";
      if (err instanceof Error) {
        message = err.message;
      }
      toast("Something went wrong", { description: message });
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-2xl glass dark:glass-dark rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Let&apos;s build something amazing
        </h2>
        <p className="mt-2 text-foreground/60">
          Based in Nairobi, Kenya. Tell me about your project, and I&apos;ll get back to you soon!
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
                autoComplete="name"
                className="glass dark:glass-dark border-white/20 focus:border-blue-400/50 transition-colors"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">
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
                autoComplete="email"
                className="glass dark:glass-dark border-white/20 focus:border-blue-400/50 transition-colors"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground/80">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="What would you like to build?"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              required
              rows={5}
              className="glass dark:glass-dark border-white/20 focus:border-blue-400/50 transition-colors resize-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                type="submit"
                disabled={loading}
                className="glass dark:glass-dark border-0 bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-600/80 hover:to-purple-700/80 text-white shadow-lg"
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
            </motion.div>
            <p className="text-xs text-foreground/50">
              I usually reply within 24 hours. Available for freelance and full-time opportunities.
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
