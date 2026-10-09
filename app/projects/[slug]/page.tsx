import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllProjectSlugs, getProjectBySlug, projects } from "@/data/projects"
import ProjectCaseStudy from "@/components/project-case-study"
import { getSortedPosts } from "@/data/blog"
import { SITE_NAME } from "@/lib/seo"

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

  const title = `${project.title} | Gregory Temwa`

  return {
    title: { absolute: `${project.title} | Gregory Temwa` },
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title,
      description: project.description,
      url: `/projects/${slug}`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      ...(project.gallery[0] && {
        images: [{ url: project.gallery[0], width: 1200, height: 630, alt: project.title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      ...(project.gallery[0] && { images: [project.gallery[0]] }),
    },
  }
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

  return (
    <ProjectCaseStudy project={project} prev={prev} next={next} relatedPosts={relatedPosts} similar={similar} />
  )
}
