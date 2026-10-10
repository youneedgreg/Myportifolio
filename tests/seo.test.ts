import { describe, expect, it } from "vitest"
import { breadcrumbs, metaDescription, pageTitle, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo"

describe("seo helpers", () => {
  it("keeps short descriptions as they are", () => {
    expect(metaDescription("A short one.")).toBe("A short one.")
  })

  it("trims long descriptions at a word boundary to at most 155 characters", () => {
    const long = "word ".repeat(80)
    const out = metaDescription(long)
    expect(out.length).toBeLessThanOrEqual(155)
    expect(out.endsWith("…")).toBe(true)
    expect(out).not.toMatch(/ …$/)
  })

  it("drops the name suffix when the title would run past 60 characters", () => {
    expect(pageTitle("Uses")).toBe("Uses | Gregory Temwa")
    const long = "The failures that cost the most are the silent ones"
    expect(pageTitle(long)).toBe(long)
  })

  it("keeps the site title and description within search-result limits", () => {
    expect(SITE_TITLE.length).toBeLessThanOrEqual(60)
    expect(SITE_DESCRIPTION.length).toBeLessThanOrEqual(160)
    expect(`${SITE_TITLE} ${SITE_DESCRIPTION}`).not.toMatch(/[–—]/)
  })

  it("builds breadcrumbs that start at Home with absolute URLs", () => {
    const list = breadcrumbs([{ name: "Work", path: "/projects" }])
    expect(list.itemListElement.map((i) => [i.position, i.name, i.item])).toEqual([
      [1, "Home", "https://temwa.dev"],
      [2, "Work", "https://temwa.dev/projects"],
    ])
  })
})
