import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const Hero = dynamic(() => import("@/components/hero"))
const About = dynamic(() => import("@/components/about"))
const ExperienceTimeline = dynamic(() => import("@/components/experience-timeline"))
const Projects = dynamic(() => import("@/components/projects"))
const ContactForm = dynamic(() => import("@/components/contact-form"))
const RandomFact = dynamic(() => import("@/components/micro/random-fact"))

export const metadata: Metadata = {
  title: "Gregory Temwa – Software Engineer",
  description:
    "Software Engineer specializing in full-stack development, AI/ML, and web technologies. Award-winning hackathon participant with 3+ years of experience.",
  openGraph: {
    title: "Gregory Temwa – Software Engineer",
    description:
      "Software Engineer specializing in full-stack development, AI/ML, and web technologies. Award-winning hackathon participant with 3+ years of experience.",
    url: "https://gregorytemwa.vercel.app",
    siteName: "Gregory Temwa Portfolio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Gregory+Temwa+Portfolio",
        width: 1200,
        height: 630,
        alt: "Gregory Temwa Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gregory Temwa – Software Engineer",
    description: "Software Engineer specializing in full-stack development, AI/ML, and web technologies.",
    images: ["/placeholder.svg?height=630&width=1200&text=Gregory+Temwa+Portfolio"],
  },
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
}

export default function Page() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50">
        Skip to content
      </a>
      <main id="main" className="flex flex-col gap-24 px-4 pb-24 md:gap-32 md:px-6">
        <Hero />
        <About />
        <section id="experience" className="px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="font-mono text-sm uppercase tracking-widest text-primary">Career</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Experience</h2>
              </div>
              <Link
                href="/about#experience"
                className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-sm text-primary transition-colors hover:text-foreground"
              >
                Full history
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <ExperienceTimeline limit={3} />
          </div>
        </section>
        <Projects />
        <section id="fun" className="px-4 md:px-6">
          <div className="surface mx-auto max-w-4xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Random fact generator</h2>
            <p className="mt-1 text-muted-foreground">
              Click the button to get a random fact from a public API. It&apos;s the little moments that make
              interfaces memorable.
            </p>
            <div className="mt-6">
              <RandomFact />
            </div>
          </div>
        </section>
        <ContactForm />
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Gregory Temwa. All rights reserved.
            </p>
            <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <a className="transition-colors hover:text-foreground" href="#projects">
                Projects
              </a>
              <a className="transition-colors hover:text-foreground" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-foreground" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
