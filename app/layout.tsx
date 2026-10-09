import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from "@/components/theme-provider"
import LazyToaster from "@/components/lazy-toaster"
import SiteHeader from "@/components/site-header"
import ScrollProgress from "@/components/scroll-progress"
import SiteFooter from "@/components/site-footer"
import TabTitle from "@/components/tab-title"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import { CommandPaletteProvider } from "@/components/command-palette"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/seo"

// Self-hosted at build time, Latin subset only (~50KB for both faces). Both are
// preloaded: a late mono swap re-wraps the labels above headings and shifts the page.
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Gregory Temwa",
  },
  description: SITE_DESCRIPTION,
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
      url: SITE_URL,
    },
  ],
  creator: "Gregory Temwa",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: "@youneedgreg",
    creator: "@youneedgreg",
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
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08080b" },
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
  ],
  colorScheme: "dark light",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Gregory Temwa",
      alternateName: "Gregory Temwa Odete",
      url: SITE_URL,
      image: `${SITE_URL}/potrait.jpg`,
      jobTitle: "Software Engineer",
      description: SITE_DESCRIPTION,
      worksFor: {
        "@type": "Organization",
        name: "WebTech Solutions Limited",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "United States International University",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      sameAs: [
        "https://github.com/youneedgreg",
        "https://www.linkedin.com/in/youneedgreg/",
        "https://x.com/youneedgreg",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* In <head> directly: page-level `alternates` metadata would otherwise replace it. */}
        <link rel="alternate" type="application/rss+xml" title="Gregory Temwa — Blog" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CommandPaletteProvider>
            <ScrollProgress />
            <SiteHeader />
            {children}
            <SiteFooter />
            <LazyToaster />
            <TabTitle />
            <KeyboardShortcuts />
            <Analytics/>
            <SpeedInsights />
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
