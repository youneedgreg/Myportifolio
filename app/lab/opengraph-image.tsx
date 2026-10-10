import { OG_SIZE, renderOgImage } from "@/lib/og-image"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Lab | Gregory Temwa"

export default function Image() {
  return renderOgImage({ eyebrow: "Gregory Temwa · Lab", title: "Experiments you can break" })
}
