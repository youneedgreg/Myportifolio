import type { Metadata } from "next"
import { breadcrumbs, pageMetadata, SITE_URL } from "@/lib/seo"
import { Suspense } from "react"
import AboutClientPage from "./about-client"
import GithubStats, { GithubStatsSkeleton } from "@/components/github-stats"


export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Gregory Temwa is Chief Software Engineer at Webtech Solutions in Nairobi and a Software Engineering student at USIU, class of 2027.",
  path: "/about",
  type: "profile",
})

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/about`,
        url: `${SITE_URL}/about`,
        name: "About Gregory Temwa",
        mainEntity: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      breadcrumbs([{ name: "About", path: "/about" }]),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutClientPage
        githubStats={
          <Suspense fallback={<GithubStatsSkeleton />}>
            <GithubStats />
          </Suspense>
        }
      />
    </>
  )
}