import { NextResponse } from "next/server"

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

    // In a real app, send an email or store to DB here.
    // For demo, we just echo back the payload.
    console.log("Contact form submission:", { name, email, message })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }
}
