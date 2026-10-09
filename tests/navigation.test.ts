import { describe, expect, it } from "vitest"
import { exploreNav, mainNav, SOCIAL } from "@/data/navigation"
import { openSourceContributions } from "@/data/open-source"

describe("navigation", () => {
  it("never reuses a g-key shortcut (h is home)", () => {
    const keys = [...mainNav, ...exploreNav].map((l) => l.shortcut).filter(Boolean)
    expect(new Set([...keys, "h"]).size).toBe(keys.length + 1)
  })

  it("has a usable WhatsApp link", () => {
    expect(SOCIAL.whatsapp).toMatch(/^https:\/\/wa\.me\/\d{9,15}$/)
  })
})

describe("open-source contributions", () => {
  it("links every pull request to its own repository", () => {
    for (const { owner, repo, pullRequests } of openSourceContributions) {
      expect(pullRequests.length).toBeGreaterThan(0)
      for (const pr of pullRequests) {
        expect(pr.url.toLowerCase()).toMatch(new RegExp(`^https://github\\.com/${owner}/${repo}/pull/\\d+$`, "i"))
      }
    }
  })
})
