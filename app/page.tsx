import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import ContactForm from "@/components/contact-form"
import RandomFact from "@/components/micro/random-fact"

export const metadata: Metadata = {
  title: "Gregory Temwa – Software Engineer",
  description:
    "Software Engineer specializing in full-stack development, AI/ML, and web technologies. Award-winning hackathon participant with 2 years of experience.",
  openGraph: {
    title: "Gregory Temwa – Software Engineer",
    description:
      "Software Engineer specializing in full-stack development, AI/ML, and web technologies. Award-winning hackathon participant with 2 years of experience.",
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
    <div className="min-h-dvh liquid-gradient dark:liquid-gradient-dark relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50">
        Skip to content
      </a>
      <main id="main" className="relative z-10 flex flex-col gap-16 md:gap-24">
        <Hero />
        <About />
        <Projects />
        <section id="fun" className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-xl border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Random Fact Generator</h2>
            <p className="mt-1 text-muted-foreground">
              Click the button to get a random fact from a public API. It&apos;s the little moments that make interfaces memorable.
            </p>
            <div className="mt-6">
              <RandomFact />
            </div>
          </div>
        </section>
        <ContactForm />
        <footer className="border-t">
          <div className="container px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2023 Gregory Temwa. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a className="hover:underline" href="#projects">
                Projects
              </a>
              <a className="hover:underline" href="#about">
                About
              </a>
              <a className="hover:underline" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
