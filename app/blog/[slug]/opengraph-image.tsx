import { getPostBySlug } from "@/data/blog"
import { OG_SIZE, renderOgImage } from "@/lib/og-image"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Essay by Gregory Temwa"

type Props = { params: Promise<{ slug: string }> }

export default async function Image({ params }: Props) {
  const post = getPostBySlug((await params).slug)
  return renderOgImage({
    eyebrow: "Gregory Temwa · Writing",
    title: post?.title ?? "Gregory Temwa",
    tags: post?.tags.slice(0, 4) ?? [],
  })
}
