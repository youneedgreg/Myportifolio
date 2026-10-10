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
  authors: [
    {
      name: "Gregory Temwa",
      url: SITE_URL,
    },
  ],
  creator: "Gregory Temwa",
  // Set these in Vercel to verify ownership with an HTML tag instead of DNS.
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } } : {}),
  },
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
      givenName: "Gregory",
      familyName: "Temwa",
      jobTitle: "Chief Software Engineer",
      description: SITE_DESCRIPTION,
      worksFor: {
        "@type": "Organization",
        name: "Webtech Solutions Limited",
        url: "https://webtechsolutionske.com",
      },
      // Still studying (BSc expected 2027), so affiliation rather than alumniOf.
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "United States International University–Africa",
        url: "https://www.usiu.ac.ke",
      },
      email: "mailto:gregorytemwa1212@gmail.com",
      knowsAbout: [
        "Software engineering",
        "Full-stack web development",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Offline-first systems",
        "Multi-tenant SaaS",
        "Machine learning",
      ],
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
      inLanguage: "en",
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
        <link rel="alternate" type="application/rss+xml" title="Gregory Temwa | Blog" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CommandPaletteProvider>
            <a
              href="#content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
              Skip to content
            </a>
            <ScrollProgress />
            <SiteHeader />
            <div id="content" tabIndex={-1} className="outline-none">
              {children}
            </div>
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
