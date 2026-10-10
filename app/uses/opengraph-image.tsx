import { OG_SIZE, renderOgImage } from "@/lib/og-image"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Uses | Gregory Temwa"

export default function Image() {
  return renderOgImage({ eyebrow: "Gregory Temwa · Uses", title: "The stack behind the work" })
}
