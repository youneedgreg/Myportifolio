import { ImageResponse } from "next/og"
import { getProjectBySlug } from "@/data/projects"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const title = project?.title ?? "Gregory Temwa"
  const tags = project?.tags.slice(0, 4) ?? []

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#08080b",
          backgroundImage:
            "radial-gradient(circle at 85% 25%, rgba(0,174,238,0.25), transparent 45%), radial-gradient(circle at 15% 85%, rgba(0,174,238,0.12), transparent 45%)",
          color: "#f7f7f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#00aeee",
          }}
        >
          Gregory Temwa · Project
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
            marginTop: 32,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        {tags.length > 0 && (
          <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "10px 24px",
                  borderRadius: 999,
                  border: "1px solid rgba(247,247,248,0.16)",
                  fontSize: 26,
                  color: "#a1a1aa",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    ),
    { ...size }
  )
}
