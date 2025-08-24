import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body: { name?: string; email?: string; message?: string } = await req.json()
    const name = (body.name || "").trim()
    const email = (body.email || "").trim()
    const message = (body.message || "").trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 })
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gregorytemwa1212@gmail.com",
      subject: "New contact form submission",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (_error) {
    console.error("API Error:", _error); // Use _error here
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }
}
