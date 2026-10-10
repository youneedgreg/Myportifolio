import { getProjectBySlug } from "@/data/projects"
import { OG_SIZE, renderOgImage } from "@/lib/og-image"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Project case study by Gregory Temwa"

type Props = { params: Promise<{ slug: string }> }

export default async function Image({ params }: Props) {
  const project = getProjectBySlug((await params).slug)
  return renderOgImage({
    eyebrow: "Gregory Temwa · Case study",
    title: project?.title ?? "Gregory Temwa",
    tags: project?.tags.slice(0, 4) ?? [],
  })
}
