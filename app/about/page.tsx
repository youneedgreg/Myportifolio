import type { Metadata } from "next"
import AboutClientPage from "./about-client"

export const metadata: Metadata = {
  title: "About — Gregory Temwa",
  description:
    "More about Gregory Temwa: Software Engineering student at USIU with 3 years of experience in full-stack development, AI/ML, and web technologies.",
  openGraph: {
    title: "About — Gregory Temwa",
    description:
      "More about Gregory Temwa: Software Engineering student at USIU with 3 years of experience in full-stack development, AI/ML, and web technologies.",
    images: [{ url: "/placeholder.svg?height=630&width=1200&text=About+Gregory+Temwa", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
}

export default function AboutPage() {
  return <AboutClientPage />
}