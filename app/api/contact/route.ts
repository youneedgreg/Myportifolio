import { NextResponse } from "next/server"
import { Resend } from "resend"

const MAX_NAME = 100
const MAX_EMAIL = 254
const MAX_MESSAGE = 5000

// Best-effort per-instance limit: 5 submissions per IP per 10 minutes.
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > RATE_LIMIT
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string; company?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  // Honeypot: real visitors never see or fill this field.
  if (body.company) {
    return NextResponse.json({ ok: true })
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 })
  }

  const name = (body.name || "").trim()
  const email = (body.email || "").trim()
  const message = (body.message || "").trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }
  if (name.length > MAX_NAME || email.length > MAX_EMAIL || message.length > MAX_MESSAGE) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "gregorytemwa1212@gmail.com",
    replyTo: email,
    subject: `New contact form submission from ${name.replace(/[\r\n]+/g, " ")}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Couldn't send your message. Please try again later." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
