import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Gregory Temwa – Software Engineer"

export default async function Image() {
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
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "rgba(0,174,238,0.12)",
              color: "#00aeee",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            GT
          </div>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#00aeee",
            }}
          >
            Gregory Temwa
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 48,
            gap: 16,
          }}
        >
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            Software Engineer
          </div>
          <div style={{ fontSize: 34, color: "#a1a1aa" }}>
            Full-Stack &amp; AI/ML Engineer · Nairobi, Kenya
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
