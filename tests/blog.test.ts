import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import { getSortedPosts, posts } from "@/data/blog"

const mdx = (slug: string) => join(process.cwd(), "content/blog", `${slug}.mdx`)

describe("blog", () => {
  it("has a body file for every post", () => {
    for (const post of posts) expect(existsSync(mdx(post.slug)), post.slug).toBe(true)
  })

  it("uses ISO dates and sorts newest first", () => {
    for (const post of posts) expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    const dates = getSortedPosts().map((p) => p.date)
    expect(dates).toEqual([...dates].sort().reverse())
  })

  it("keeps em dashes out of titles, summaries and bodies", () => {
    for (const post of posts) {
      expect(`${post.title} ${post.summary}`, post.slug).not.toContain("—")
      expect(readFileSync(mdx(post.slug), "utf8"), post.slug).not.toContain("—")
    }
  })

  it("only links posts to projects that exist", async () => {
    const { getProjectBySlug } = await import("@/data/projects")
    for (const post of posts.filter((p) => p.project)) {
      expect(getProjectBySlug(post.project!.slug), post.slug).toBeDefined()
    }
  })
})
