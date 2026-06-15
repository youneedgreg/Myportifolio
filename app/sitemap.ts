import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/fun`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}
