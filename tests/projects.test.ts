import { existsSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import { projectCategories, projects } from "@/data/projects"
import { lastActiveAt } from "@/lib/work-order"

const publicFile = (src: string) => join(process.cwd(), "public", src.split("?")[0])
const isPlaceholder = (src: string) => src.startsWith("/placeholder")
const copy = (p: (typeof projects)[number]) =>
  [p.title, p.description, ...Object.values(p.caseStudy).filter(Boolean)].join(" ")

describe("projects data", () => {
  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it.each(projects.map((p) => [p.slug, p]))("%s: every referenced image exists", (_, p) => {
    for (const src of [p.image, ...p.gallery].filter((s) => !isPlaceholder(s))) {
      expect(existsSync(publicFile(src)), src).toBe(true)
    }
  })

  it.each(projects.map((p) => [p.slug, p]))("%s: has at least one known category", (_, p) => {
    const known = new Set(projectCategories.map((c) => c.id))
    expect(p.categories.length).toBeGreaterThan(0)
    for (const c of p.categories) expect(known.has(c)).toBe(true)
  })

  it("only live projects need a live URL, and every live project has one", () => {
    for (const p of projects.filter((p) => p.status === "live")) {
      expect(p.href, p.slug).toMatch(/^https:\/\//)
    }
  })

  it("keeps em dashes out of site copy", () => {
    for (const p of projects) expect(copy(p), p.slug).not.toContain("—")
  })

  it("names the event on every hackathon project", () => {
    for (const p of projects.filter((p) => p.hackathon !== undefined)) expect(p.hackathon?.trim(), p.slug).toBeTruthy()
  })

  it("uses a year (or year range) the journey can parse", () => {
    for (const p of projects) expect(p.year, p.slug).toMatch(/^\d{4}/)
  })
})

describe("work page order", () => {
  it("records lastActive as a YYYY-MM-DD date", () => {
    for (const p of projects.filter((p) => p.lastActive)) expect(p.lastActive, p.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it("prefers a newer GitHub push over the recorded date, matching the repo case-insensitively", () => {
    const project = { github: "https://github.com/youneedgreg/Save-it", lastActive: "2025-12-22", year: "2025" }
    const pushes = new Map([["youneedgreg/save-it", "2026-10-01T09:00:00Z"]])
    expect(lastActiveAt(project, pushes)).toBe(Date.parse("2026-10-01T09:00:00Z"))
  })

  it("keeps the recorded date when GitHub has nothing newer or is unreachable", () => {
    const project = { github: "https://github.com/youneedgreg/chessy", lastActive: "2026-10-11", year: "2026" }
    expect(lastActiveAt(project, new Map([["youneedgreg/chessy", "2026-01-01T00:00:00Z"]]))).toBe(Date.parse("2026-10-11"))
    expect(lastActiveAt(project, new Map())).toBe(Date.parse("2026-10-11"))
  })

  it("falls back to the start of the year for a private project with no date", () => {
    expect(lastActiveAt({ github: "", year: "2025–Present" }, new Map())).toBe(Date.parse("2025"))
  })
})
