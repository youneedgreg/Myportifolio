import { OG_SIZE, renderOgImage } from "@/lib/og-image"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "About me | Gregory Temwa"

export default function Image() {
  return renderOgImage({ eyebrow: "Gregory Temwa · About", title: "Software that holds up" })
}
