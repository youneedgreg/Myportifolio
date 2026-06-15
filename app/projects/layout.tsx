import type { Metadata } from "next"
import { SITE_NAME } from "@/lib/seo"

const description = "A collection of Gregory Temwa's work, from production SaaS platforms to open-source projects and ML experiments."

export const metadata: Metadata = {
  title: "All Projects",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — Gregory Temwa",
    description,
    url: "/projects",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
