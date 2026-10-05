import { getSortedPosts } from "@/data/blog"
import { SITE_NAME, SITE_URL } from "@/lib/seo"

export const dynamic = "force-static"

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export function GET() {
  const posts = getSortedPosts()
  const lastBuildDate = posts[0] ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`
      const categories = post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join("\n")
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.summary)}</description>
${categories}
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`Blog — ${SITE_NAME}`)}</title>
    <link>${SITE_URL}/blog</link>
    <description>Writing by Gregory Temwa on software engineering, domain modelling and building production systems.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
