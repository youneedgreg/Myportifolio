import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllProjectSlugs, getProjectBySlug, projects } from "@/data/projects"
import ProjectCaseStudy from "@/components/project-case-study"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  const title = `${project.title} — Gregory Temwa`

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
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

  return <ProjectCaseStudy project={project} prev={prev} next={next} />
}
