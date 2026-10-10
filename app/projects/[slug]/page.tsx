import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllProjectSlugs, getProjectBySlug, projects } from "@/data/projects"
import ProjectCaseStudy from "@/components/project-case-study"
import { getSortedPosts } from "@/data/blog"
import { breadcrumbs, pageMetadata, SITE_URL } from "@/lib/seo"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

// Only the projects in data/projects.ts exist; anything else is a 404 without rendering.
export const dynamicParams = false

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  const meta = pageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
    type: "article",
  })
  // A real screenshot makes a better preview than the generated card, when there is one.
  const shot = project.gallery[0]
  return shot
    ? {
        ...meta,
        openGraph: { ...meta.openGraph, images: [{ url: shot, alt: `${project.title} screenshot` }] },
        twitter: { ...meta.twitter, images: [shot] },
      }
    : meta
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const index = projects.findIndex((p) => p.slug === slug)
  const prev = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null

  const relatedPosts = getSortedPosts().filter((post) => post.project?.slug === slug)
  // Projects sharing the most tags with this one, for "more like this".
  const similar = projects
    .filter((p) => p.slug !== slug && p.status !== "coming-soon")
    .map((p) => ({ project: p, shared: p.tags.filter((tag) => project.tags.includes(tag)).length }))
    .filter(({ shared }) => shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 3)
    .map(({ project }) => project)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/projects/${project.slug}#work`,
        name: project.title,
        description: project.description,
        url: `${SITE_URL}/projects/${project.slug}`,
        dateCreated: project.year.slice(0, 4),
        keywords: project.tags.join(", "),
        creator: { "@id": `${SITE_URL}/#person` },
        ...(project.image.startsWith("/placeholder") ? {} : { image: `${SITE_URL}${project.image}` }),
        ...(project.href ? { sameAs: project.href } : {}),
        ...(project.github ? { codeRepository: project.github } : {}),
      },
      breadcrumbs([{ name: "Work", path: "/projects" }, { name: project.title, path: `/projects/${project.slug}` }]),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectCaseStudy project={project} prev={prev} next={next} relatedPosts={relatedPosts} similar={similar} />
    </>
  )
}
