/** Post metadata. Each post's body lives in content/blog/<slug>.mdx. */
export type Post = {
  slug: string
  title: string
  summary: string
  /** ISO date — used for sorting, <time> and structured data. */
  date: string
  readingTime: string
  tags: string[]
  /** Optional link back to the project the post came out of. */
  project?: { title: string; slug: string }
  featured?: boolean
}

export const posts: Post[] = [
  {
    slug: "a-rule-enforced-in-one-place-is-not-enforced",
    title: "A rule enforced in one place is not enforced",
    summary:
      "One rule about client money ended up in four places — the domain, a database trigger, a repository translation, and the ordering of two writes. Each answers a different question, and removing any one leaves a system that passes its tests and is wrong on a busy afternoon.",
    date: "2026-08-24",
    readingTime: "6 min read",
    tags: ["TypeScript", "Effect", "Postgres", "Domain Modelling"],
    project: { title: "OKLaw Practice Management", slug: "oklaw-law-firm-management" },
    featured: true,
  },
  {
    slug: "the-failures-that-cost-most-are-the-silent-ones",
    title: "The failures that cost the most are the silent ones",
    summary:
      "Two chart bars drew in nothing on a page whose figures had already been checked in a browser. A sign-in refusal rendered as ordinary body text. Neither threw, neither logged, and neither was findable by looking — so I started parsing the stylesheet in a test.",
    date: "2026-08-12",
    readingTime: "5 min read",
    tags: ["CSS", "Testing", "Accessibility", "Vitest"],
    project: { title: "OKLaw Practice Management", slug: "oklaw-law-firm-management" },
  },
  {
    slug: "the-default-is-the-control-not-the-flag",
    title: "The default is the control, not the flag",
    summary:
      "Making a public demo's affordances conditional took an afternoon. Deciding which way the condition should fail took longer and mattered more — because one direction is a dull afternoon and the other publishes a one-click administrator login.",
    date: "2026-07-30",
    readingTime: "5 min read",
    tags: ["Security", "Configuration", "Deployment"],
    project: { title: "OKLaw Practice Management", slug: "oklaw-law-firm-management" },
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllPostSlugs(): string[] {
  return posts.map((post) => post.slug)
}

/** Newest first — the order the blog index and the command palette use. */
export function getSortedPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
