import { OG_SIZE, renderOgImage } from "@/lib/og-image"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Journey | Gregory Temwa"

export default function Image() {
  return renderOgImage({ eyebrow: "Gregory Temwa · Journey", title: "Every job, project and essay since 2023" })
}
