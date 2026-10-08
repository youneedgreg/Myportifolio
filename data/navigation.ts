export type NavLink = {
  href: string
  label: string
  /** Second key of the `g <key>` keyboard shortcut. */
  shortcut?: string
  /** One-line teaser used in the footer, mobile menu and home page. */
  teaser?: string
}

export const mainNav: NavLink[] = [
  { href: "/projects", label: "Work", shortcut: "w", teaser: "Case studies from real client builds" },
  { href: "/blog", label: "Writing", shortcut: "b", teaser: "Things I got wrong first, written up" },
  { href: "/about", label: "About", shortcut: "a", teaser: "Experience, stack and certificates" },
  { href: "/#contact", label: "Contact", shortcut: "c" },
]

/** The places to wander into once the main pages are done. */
export const exploreNav: NavLink[] = [
  { href: "/journey", label: "Journey", shortcut: "j", teaser: "Every job, project and post, year by year" },
  { href: "/now", label: "Now", shortcut: "n", teaser: "What has my attention this month" },
  { href: "/uses", label: "Uses", shortcut: "u", teaser: "The stack and tools behind the work" },
  { href: "/lab", label: "Lab", shortcut: "l", teaser: "Experiments you can poke at" },
]

export const SOCIAL = {
  email: "gregorytemwa1212@gmail.com",
  github: "https://github.com/youneedgreg",
  linkedin: "https://www.linkedin.com/in/youneedgreg/",
}
