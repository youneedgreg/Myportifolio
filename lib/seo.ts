import type { Metadata } from "next"

export const SITE_URL = "https://temwa.dev"
export const SITE_NAME = "Gregory Temwa"
export const SITE_TITLE = "Gregory Temwa | Chief Software Engineer in Nairobi"
export const SITE_DESCRIPTION =
  "Gregory Temwa builds production systems businesses run on: offline-first point of sale, legal trust accounting, ERPs. Case studies, writing and a lab."

const TITLE_SUFFIX = " | Gregory Temwa"

/**
 * Search results show roughly 155 characters of a description; longer ones are
 * cut mid-word. Trim at a word boundary and end on an ellipsis instead.
 */
export function metaDescription(text: string, max = 155) {
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,:;.(\s]+$/, "")}…`
}

/** "Page | Gregory Temwa", unless that runs past ~60 characters; then the page title alone. */
export function pageTitle(title: string) {
  return title.length + TITLE_SUFFIX.length > 60 ? title : `${title}${TITLE_SUFFIX}`
}

/** Consistent metadata for a page: title, trimmed description, canonical, Open Graph and X card. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  index = true,
}: {
  title: string
  description: string
  path: string
  type?: "website" | "article" | "profile"
  index?: boolean
}): Metadata {
  const full = pageTitle(title)
  const desc = metaDescription(description)
  return {
    title: { absolute: full },
    description: desc,
    alternates: { canonical: path },
    openGraph: { title: full, description: desc, url: path, siteName: SITE_NAME, locale: "en_US", type },
    twitter: { card: "summary_large_image", title: full, description: desc, creator: "@youneedgreg" },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  }
}

/** schema.org BreadcrumbList for a page under Home. */
export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  }
}
