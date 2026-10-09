import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import ExperienceTimeline from "@/components/experience-timeline"
import { Marquee } from "@/components/ui/marquee"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "Rust",
  "Java",
  "NestJS",
  "Machine Learning",
  "AI Development",
  "MySQL",
  "PostgreSQL",
  "TimescaleDB",
  "Redis",
  "RabbitMQ",
  "Docker",
  "Kubernetes",
  "Nginx",
  "Prometheus",
  "Grafana",
  "Linux",
  "AWS",
  "Git",
]
const half = Math.ceil(skills.length / 2)

const certificates = [
  {
    title: "IBM SkillsBuild: AI Fundamentals",
    description: "Core AI concepts, applications, and ethics.",
  },
  {
    title: "freeCodeCamp: Front End Development Libraries",
    description: "React, Redux, and UI component best practices.",
  },
  {
    title: "freeCodeCamp: Machine Learning with Python",
    description: "ML pipelines with Python, model training & evaluation.",
  },
  {
    title: "Coursera: Machine Learning (Andrew Ng)",
    description: "Supervised/unsupervised learning, regularization, optimization.",
  },
]

type AboutClientPageProps = {
  githubStats?: ReactNode
}

export default function AboutClientPage({ githubStats }: AboutClientPageProps) {
  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-20 md:space-y-28">
        <header className="space-y-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">greg@portfolio</span>:~$ cat about.md
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient">About me</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m Gregory Temwa. I lead engineering at Webtech Solutions in Nairobi and I&apos;m finishing a BSc in
            Software Engineering at USIU, class of 2027. Most of what I build is software other people run their day on,
            and most of what I care about is making it hold up.
          </p>
        </header>

        <section className="surface grid items-start gap-8 p-6 sm:p-8 md:grid-cols-[200px_1fr] md:p-10">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/potrait.jpg"
              alt="Portrait of Gregory Temwa"
              width={200}
              height={200}
              sizes="200px"
              className="rounded-2xl border border-border object-cover"
              priority
            />
          </div>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I started in 2023 teaching students aged 8 to 18 to code, build robots and try AI and VR at Somo Africa.
              Freelance work and internships followed, at Mtaamall, Girwa Foundation, Ivy Community and HNG, before I
              joined Webtech Solutions as a full-stack developer in December 2024.
            </p>
            <p>
              Since February 2026 I&apos;ve been its Chief Software Engineer: I own architecture, CI/CD and code
              standards across client projects, and mentor the engineers who ship them. The work ranges from trust
              accounting for a law firm to an offline-first point of sale, and it is almost always the unglamorous
              part, the rule that has to hold on a busy afternoon, that takes the longest.
            </p>
            <p>
              Outside client work I contribute to open source, mostly Python in Canonical&apos;s observability
              charms, and write up the things I got wrong first on the{" "}
              <Link href="/blog" className="text-primary underline underline-offset-4 hover:text-foreground">
                blog
              </Link>
              . I&apos;ve picked up hackathon awards along the way, all while sitting exams.
            </p>
          </div>
        </section>

        <section aria-labelledby="stack-heading" className="space-y-4">
          <p id="stack-heading" className="font-mono text-sm uppercase tracking-widest text-primary">
            Tools I build with
          </p>
          <div className="relative motion-reduce:hidden">
            <Marquee pauseOnHover className="[--duration:45s]">
              {skills.slice(0, half).map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 font-mono text-xs">
                  {skill}
                </Badge>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:45s]">
              {skills.slice(half).map((skill) => (
                <Badge key={skill} variant="outline" className="px-3 py-1 font-mono text-xs">
                  {skill}
                </Badge>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background" />
          </div>
          {/* Reduced motion: the same list, static. */}
          <div className="hidden flex-wrap gap-2 motion-reduce:flex">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Career</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Work experience</h2>
          </div>
          <ExperienceTimeline />
        </section>

        {githubStats && (
          <section className="space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-sm uppercase tracking-widest text-primary">On GitHub</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Open source &amp; activity</h2>
            </div>
            {githubStats}
          </section>
        )}

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Background</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Education</h2>
          </div>
          <div className="surface flex items-start gap-4 p-6 md:p-8">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GraduationCap className="size-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">BSc in Software Engineering</h3>
              <p className="text-muted-foreground">United States International University (USIU)</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Expected graduation: 2027
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Always learning</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Certificates</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {certificates.map((c) => (
              <div key={c.title} className="surface space-y-1.5 p-5">
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-primary" />
                  <h3 className="font-semibold">{c.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
