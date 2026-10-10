import type React from "react"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { projects } from "@/data/projects"


export const metadata: Metadata = pageMetadata({
  title: "Work",
  description: `${projects.length} projects by Gregory Temwa: production systems for clients, open-source contributions and experiments, each with a case study.`,
  path: "/projects",
  type: "website",
})

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
