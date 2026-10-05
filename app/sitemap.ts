import type { MetadataRoute } from "next"
import { getSortedPosts, posts } from "@/data/blog"
import { projects } from "@/data/projects"
import { SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  // Only posts have real dates. Other routes omit lastModified rather than
  // claiming every page changed on each deploy.
  const latestPostDate = getSortedPosts()[0]?.date

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${SITE_URL}/blog`,
      ...(latestPostDate && { lastModified: new Date(latestPostDate) }),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    { url: `${SITE_URL}/fun`, changeFrequency: "yearly", priority: 0.3 },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes, ...postRoutes]
}
