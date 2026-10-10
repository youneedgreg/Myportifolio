import { OG_SIZE, renderOgImage } from "@/lib/og-image"

export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Gregory Temwa | Chief Software Engineer in Nairobi"

export default function Image() {
  return renderOgImage({
    eyebrow: "Gregory Temwa · Chief Software Engineer",
    title: "Software that holds up on a busy afternoon.",
    tags: ["Nairobi", "Full-stack", "AI"],
  })
}
