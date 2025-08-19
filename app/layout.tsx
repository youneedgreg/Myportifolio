import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Gregory Temwa – Software Engineer",
    template: "%s | Gregory Temwa",
  },
  description:
    "Software Engineer specializing in full-stack development, AI/ML, and web technologies. Award-winning hackathon participant with 2 years of experience.",
  keywords: [
    "Gregory Temwa",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "JavaScript",
    "Python",
    "Machine Learning",
    "AI",
    "MERN Stack",
    "Nairobi",
    "Kenya",
  ],
  authors: [
    {
      name: "Gregory Temwa",
      url: "https://gregorytemwa.vercel.app",
    },
  ],
  creator: "Gregory Temwa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gregorytemwa.vercel.app",
    title: "Gregory Temwa – Software Engineer",
    description:
      "Software Engineer specializing in full-stack development, AI/ML, and web technologies. Award-winning hackathon participant with 2 years of experience.",
    siteName: "Gregory Temwa Portfolio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Gregory+Temwa+Portfolio",
        width: 1200,
        height: 630,
        alt: "Gregory Temwa Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gregory Temwa – Software Engineer",
    description:
      "Software Engineer specializing in full-stack development, AI/ML, and web technologies. Award-winning hackathon participant with 2 years of experience.",
    site: "@youneedgreg",
    creator: "@youneedgreg",
    images: ["/placeholder.svg?height=630&width=1200&text=Gregory+Temwa+Portfolio"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
