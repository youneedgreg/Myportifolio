import { describe, expect, it } from "vitest"
import { getJourney } from "@/data/journey"
import { projects } from "@/data/projects"

describe("journey", () => {
  const journey = getJourney()

  it("is ordered newest first", () => {
    const keys = journey.map((e) => e.when)
    expect(keys).toEqual([...keys].sort().reverse())
  })

  it("includes the expected graduation as upcoming", () => {
    const grad = journey.find((e) => e.kind === "education")
    expect(grad).toMatchObject({ year: 2027, upcoming: true })
  })

  it("leaves out projects that are still coming soon", () => {
    const comingSoon = new Set(projects.filter((p) => p.status === "coming-soon").map((p) => `/projects/${p.slug}`))
    for (const entry of journey) expect(comingSoon.has(entry.href ?? "")).toBe(false)
  })

  it("parses month-precision periods", () => {
    const chief = journey.find((e) => e.title === "Chief Software Engineer")
    expect(chief?.when).toBe("2026-02")
  })
})
