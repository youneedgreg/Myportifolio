import type { Metadata } from "next"
import { Suspense } from "react"
import AboutClientPage from "./about-client"
import GithubStats, { GithubStatsSkeleton } from "@/components/github-stats"

const description =
  "More about Gregory Temwa: Software Engineering student at USIU with 3+ years of experience in full-stack development, AI/ML, and web technologies."

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Gregory Temwa",
    description,
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <AboutClientPage
      githubStats={
        <Suspense fallback={<GithubStatsSkeleton />}>
          <GithubStats />
        </Suspense>
      }
    />
  )
}