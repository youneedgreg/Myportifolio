import { beforeEach, describe, expect, it, vi } from "vitest"

const send = vi.fn()
vi.mock("resend", () => ({
  Resend: class {
    emails = { send }
  },
}))

const post = (body: unknown, ip = `10.0.0.${Math.floor(Math.random() * 250)}`) =>
  new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": ip },
    body: typeof body === "string" ? body : JSON.stringify(body),
  })

const valid = { name: "Jane", email: "jane@example.com", message: "Hello" }

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.resetModules()
    send.mockReset().mockResolvedValue({ error: null })
    process.env.RESEND_API_KEY = "re_test"
  })

  const handler = async () => (await import("@/app/api/contact/route")).POST

  it("sends a valid message with the visitor as reply-to", async () => {
    const res = await (await handler())(post(valid))
    expect(res.status).toBe(200)
    expect(send).toHaveBeenCalledWith(expect.objectContaining({ replyTo: "jane@example.com" }))
  })

  it("escapes HTML from the visitor", async () => {
    await (await handler())(post({ ...valid, message: "<script>alert(1)</script>" }))
    expect(send.mock.calls[0][0].html).toContain("&lt;script&gt;")
    expect(send.mock.calls[0][0].html).not.toContain("<script>")
  })

  it("silently accepts and drops honeypot submissions", async () => {
    const res = await (await handler())(post({ ...valid, company: "bot inc" }))
    expect(res.status).toBe(200)
    expect(send).not.toHaveBeenCalled()
  })

  it.each([
    ["missing fields", { name: "", email: "", message: "" }],
    ["a bad email", { ...valid, email: "nope" }],
    ["an overlong message", { ...valid, message: "x".repeat(5001) }],
  ])("rejects %s", async (_, body) => {
    const res = await (await handler())(post(body))
    expect(res.status).toBe(400)
    expect(send).not.toHaveBeenCalled()
  })

  it("rejects a malformed body", async () => {
    expect((await (await handler())(post("not json"))).status).toBe(400)
  })

  it("reports a provider failure instead of pretending it worked", async () => {
    send.mockResolvedValue({ error: { message: "boom" } })
    expect((await (await handler())(post(valid))).status).toBe(502)
  })

  it("says the form is not configured when the API key is missing", async () => {
    delete process.env.RESEND_API_KEY
    expect((await (await handler())(post(valid))).status).toBe(503)
  })

  it("rate-limits one address after five messages", async () => {
    const POST = await handler()
    const statuses = []
    for (let i = 0; i < 6; i++) statuses.push((await POST(post(valid, "203.0.113.9"))).status)
    expect(statuses).toEqual([200, 200, 200, 200, 200, 429])
  })
})
