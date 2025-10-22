import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About — Gregory Temwa",
  description:
    "More about Gregory Temwa: Software Engineering student at USIU with 2 years of experience in full-stack development, AI/ML, and web technologies.",
  openGraph: {
    title: "About — Gregory Temwa",
    description:
      "More about Gregory Temwa: Software Engineering student at USIU with 2 years of experience in full-stack development, AI/ML, and web technologies.",
    images: [{ url: "/placeholder.svg?height=630&width=1200&text=About+Gregory+Temwa", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
}

export default function AboutPage() {
  return (
    <div className="min-h-dvh liquid-gradient dark:liquid-gradient-dark relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <main className="container px-4 md:px-6 py-10 md:py-16">
        <header className="mx-auto max-w-4xl space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">About me</h1>
          <p className="text-muted-foreground">
            I&apos;m Gregory Temwa, a Software Engineering student at USIU with a passion for building innovative web
            solutions and AI applications.
          </p>
        </header>

        <section className="mx-auto mt-10 grid max-w-4xl items-start gap-8 md:grid-cols-[200px_1fr]">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/potrait.jpg"
              alt="Gregory Temwa portrait"
              width={200}
              height={200}
              className="rounded-full border"
              priority
            />
          </div>
          <div className="space-y-4 leading-relaxed text-balance">
            <p>
              I&apos;m currently pursuing my BSc. in Software Engineering at United States International University (USIU)
              while gaining hands-on experience in the tech industry. Over the past 2 years, I&apos;ve worked with
              companies like Webtech Solutions Limited and Mtaamall startup, developing everything from responsive
              websites to AI chatbots.
            </p>
            <p>
              As an award-winning hackathon participant, I thrive in collaborative environments where I can solve complex
              problems using modern technologies. My expertise spans the full development stack, with particular interests
              in artificial intelligence, machine learning, and creating delightful user experiences.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">MERN Stack</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">AI Development</Badge>
              <Badge variant="secondary">MySQL</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Git</Badge>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-xl font-semibold tracking-tight">Highlights</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            <li className="rounded-lg border bg-card p-4">
              🏆 Award-winning participant in multiple hackathons with innovative solutions.
            </li>
            <li className="rounded-lg border bg-card p-4">
              🚀 Developed and launched MVP for Mtaamall startup using MERN stack.
            </li>
            <li className="rounded-lg border bg-card p-4">
              🤖 Created AI chatbots and integrated them into client websites for enhanced engagement.
            </li>
            <li className="rounded-lg border bg-card p-4">
              📈 Optimized website performance and SEO for diverse clients at Webtech Solutions.
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
