import { OG_SIZE, renderOgImage } from "@/lib/og-image"
import { projects } from "@/data/projects"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Work | Gregory Temwa"

export default function Image() {
  return renderOgImage({ eyebrow: "Gregory Temwa · Work", title: `${projects.length} things I've built` })
}
