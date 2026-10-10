import { getSortedPosts } from "@/data/blog"
import { experience } from "@/data/experience"
import { projects } from "@/data/projects"
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/seo"

export const dynamic = "force-static"

/**
 * /llms.txt (llmstxt.org): a plain-text map of the site for AI assistants and
 * answer engines, generated from the same data as the pages.
 */
export function GET() {
  const featured = projects.filter((p) => p.featured || p.client)
  const lines = [
    "# Gregory Temwa",
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `Chief Software Engineer at Webtech Solutions in Nairobi, Kenya, and a BSc Software Engineering student at USIU–Africa (expected 2027). ${experience.length} roles and ${projects.length} projects since 2023. Contact: gregorytemwa1212@gmail.com.`,
    "",
    "## Pages",
    "",
    `- [About](${SITE_URL}/about): background, experience, education and certifications`,
    `- [Work](${SITE_URL}/projects): every project with a case study`,
    `- [Writing](${SITE_URL}/blog): essays on building production software`,
    `- [Journey](${SITE_URL}/journey): jobs, projects and essays by year`,
    `- [CV](${SITE_URL}/cv): printable CV`,
    "",
    "## Selected work",
    "",
    ...featured.map((p) => `- [${p.title}](${SITE_URL}/projects/${p.slug}): ${p.description}`),
    "",
    "## Writing",
    "",
    ...getSortedPosts().map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.summary}`),
    "",
  ]
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
