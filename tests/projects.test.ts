import { existsSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import { projectCategories, projects } from "@/data/projects"

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

  it("uses a year (or year range) the journey can parse", () => {
    for (const p of projects) expect(p.year, p.slug).toMatch(/^\d{4}/)
  })
})
