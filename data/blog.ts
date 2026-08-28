export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }

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
  blocks: PostBlock[]
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
    blocks: [
      {
        type: "paragraph",
        text: "Money a Kenyan law firm holds for a client is not the firm's money. The Advocates (Accounts) Rules say so, and Rule 10 is the specific one: client funds may not leave trust for anything other than what they were held for, and a client's trust balance may never go negative by covering one client's disbursement out of another's money. Commingling is a disciplinary matter, not a bookkeeping error.",
      },
      {
        type: "paragraph",
        text: "When I started building trust accounting into OKLaw, I did the obvious thing: wrote the rule as a function in the domain layer, tested it, and moved on. It took me a while to understand why that was not enough — and the reason is not that the function was wrong. The function was fine. It was answering one of four questions.",
      },
      { type: "heading", text: "The four places" },
      {
        type: "paragraph",
        text: "By the time the feature was actually safe, the rule lived in four places, and each placement answers something the others cannot.",
      },
      {
        type: "list",
        items: [
          "In the domain, as a pure function over a balance and a proposed withdrawal. This is where the rule is legible — somebody can find it, read the reasoning, and change it deliberately. It is also the only version cheap enough to test exhaustively, because it needs no database at all.",
          "In the database, as a trigger. The domain function protects the paths that go through the domain. A trigger protects the table: from a migration written at midnight, from a repair script run by hand against production, from the second service that does not exist yet but will.",
          "In the repository, as a translation. Postgres raises its constraint violation as a driver error with a code and a message. If that reaches the service layer as an opaque failure, the application either crashes or reports something unhelpful. The repository translates it back into the same tagged domain error the pure function returns, so the caller handles one failure type instead of two.",
          "In the ordering of two writes inside one transaction. The balance check and the ledger insert have to happen in an order where the check cannot be stale, in a transaction that cannot interleave. Get this wrong and you have a correct rule, correctly enforced, against a number that was true a moment ago.",
        ],
      },
      { type: "heading", text: "Why the last one is the hard one" },
      {
        type: "paragraph",
        text: "The first three are visible. You can point at them in a diff. The fourth is a property of the code's shape rather than any line in it, which is exactly why it survives review and fails in production. Two withdrawals against the same trust account, arriving close enough together, will each read a balance that permits them and each write a ledger row that, together, do not. Nothing in the domain function is wrong. Nothing in the trigger is wrong either — unless the trigger is the thing serialising them, which is the argument for having it.",
      },
      {
        type: "paragraph",
        text: "This is the part I would not have learned from a tutorial, because a tutorial's example has one user. A rule is not defended by its best implementation. It is defended by the weakest of the paths that can reach the data.",
      },
      { type: "heading", text: "Errors as values makes this bearable" },
      {
        type: "paragraph",
        text: "Doing this in plain async/await means every one of those layers can throw something the caller has not thought about. In Effect, a fallible operation enumerates what it can fail with in its type signature, so an unhandled case is a compile error rather than a runtime surprise. That matters more here than almost anywhere else: a missed error path in a trust account withdrawal is not a crash, it is a misappropriation.",
      },
      {
        type: "paragraph",
        text: "It also keeps the repository translation honest. The repository's signature says, in the type, that it can fail with the domain's insufficient-funds error. If I later add a constraint to the table and forget to translate it, the mismatch surfaces where the code is written rather than where it runs.",
      },
      { type: "heading", text: "What I would tell myself at the start" },
      {
        type: "paragraph",
        text: "For each rule that actually matters, list the paths that can reach the data it protects: the application's happy path, a second service, a migration, a hand-run script, two concurrent requests. Then ask which of those your enforcement actually covers. If the answer is one of them, the rule is documentation with a test attached.",
      },
      {
        type: "quote",
        text: "Removing any one of the four leaves a system that is correct in testing and wrong on a busy afternoon.",
      },
    ],
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
    blocks: [
      {
        type: "paragraph",
        text: "An undefined CSS custom property is not an error. The browser invalidates the one declaration that used it and moves on, rendering the rest of the page exactly as you intended. No console warning, no red squiggle, no failing build. That is a reasonable decision for the web and a genuinely dangerous one for a reports page.",
      },
      {
        type: "paragraph",
        text: "On OKLaw's reports screen, two chart bars were drawing in nothing — transparent, on a background, at a size where a missing bar reads as a zero rather than as a bug. The figures on that page had already been verified in a browser by somebody who was checking the numbers, which is the whole problem: the numbers were right. The rendering was wrong in a way that looked like a number.",
      },
      { type: "heading", text: "The same failure, in a second costume" },
      {
        type: "paragraph",
        text: "A class name that does not exist is not an error either. The sign-in refusal — the message telling you your password was wrong — was rendering as ordinary body text, because the class carrying its colour and weight had been renamed elsewhere and this one call site was missed. It said the right words. It said them in the voice of a paragraph rather than a warning, which for an error message is most of the message.",
      },
      {
        type: "paragraph",
        text: "Both bugs share a shape. Nothing throws. Nothing logs. Nothing looks broken unless you already know what the correct output is — and in both cases the incorrect output was plausible.",
      },
      { type: "heading", text: "Parsing the stylesheet in a test" },
      {
        type: "paragraph",
        text: "You cannot catch these by looking harder, and a screenshot diff only helps once you already have a correct screenshot. What worked was treating the stylesheet as data and asserting against it: every custom property a declaration references must be defined somewhere, and every class name the components use must exist in the sheet. Both bugs failed that test immediately, and both would have been caught the day they were introduced.",
      },
      {
        type: "paragraph",
        text: "The same trick extends to things I had been checking by eye. WCAG 2.2 AA contrast ratios are computed from the token values in the stylesheet rather than sampled from a screenshot, so they are checked for every token pair on every run, in both themes, instead of for the four combinations somebody remembered to look at.",
      },
      { type: "heading", text: "The general rule" },
      {
        type: "paragraph",
        text: "Any part of your stack that fails by silently doing nothing needs a test that reads it as data. CSS is the obvious one. So is any config format that ignores unknown keys — a typo in a key name is the same bug wearing a different hat, and it is why this project's environment variables are read once at startup through a validated schema that refuses a malformed value instead of quietly falling back to a default.",
      },
      {
        type: "quote",
        text: "Both were found by parsing the stylesheet in a test, and neither was visible any other way.",
      },
    ],
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
    blocks: [
      {
        type: "paragraph",
        text: "OKLaw has a public demo. The demo needs three things a real installation must never have: a one-click switcher that mints a session for any of six roles without a password, a shared password printed on the sign-in page, and a nightly cron that empties every table so the next visitor finds the firm as the last one did. Each of those, on a system holding a firm's actual matters, is a breach.",
      },
      {
        type: "paragraph",
        text: "So each is conditional on a flag — DEMO_DEPLOYMENT — and the demo and an installation are the same build. Writing that took an afternoon. The part that took longer was deciding which way the flag should fail.",
      },
      { type: "heading", text: "Three mistakes that have to mean the same thing" },
      {
        type: "paragraph",
        text: "Consider what an unset variable actually represents. It could be a variable somebody forgot to set. It could be one somebody misspelt. It could be a deployment created from this repository by a person who has never read the README and does not know the variable exists. All three are mistakes, and the default has to pick one meaning for all of them.",
      },
      {
        type: "paragraph",
        text: "If the flag defaults to on, all three mistakes publish a one-click administrator login on somebody's real data. If it defaults to off, all three produce an ordinary application with the demo affordances absent — and when somebody does forget, the demo is a dull afternoon until they notice the sign-in switcher is missing.",
      },
      {
        type: "paragraph",
        text: "The two failures are not comparable, so the choice is not close. Absence cannot mean demo. It has to mean the real thing, with the dangerous affordances off.",
      },
      { type: "heading", text: "A second lock, not a second door" },
      {
        type: "paragraph",
        text: "The nightly reset endpoint is guarded twice: it needs the cron secret and the demo flag, required together rather than either alone. The reason is specific. vercel.json is committed, so a second project built from this repository registers the same nightly cron whether or not anybody meant it to. One variable is too much weight to put on that.",
      },
      {
        type: "paragraph",
        text: "It is worth being precise about why two checks help here, because two checks do not always help. A control consulted instead of another is a second door — more ways in. A control required alongside another is a second lock. Same count, opposite effect, and the whole difference is whether the operator is and or or.",
      },
      { type: "heading", text: "A related trap: the safeguard that is the attack" },
      {
        type: "paragraph",
        text: "The same habit — asking what a control does when it is wrong — applies to lockouts. Locking an account after five failed sign-ins sounds like security. It also hands anybody who can read the firm's website a way to lock a partner out on the morning of a hearing, using nothing but their email address. The throttle here is durable and limits the attempt rather than disabling the account, and the one thing that would genuinely raise the floor — a second factor — is written down as absent rather than left as an implication.",
      },
      {
        type: "quote",
        text: "Get the default backwards and the flag is worse than no flag at all.",
      },
    ],
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
