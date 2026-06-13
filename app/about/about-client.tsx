"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { TypeAnimation } from "react-type-animation"
import { GraduationCap, Award } from "lucide-react"
import ExperienceTimeline from "@/components/experience-timeline"

const skills = [
  "React",
  "JavaScript",
  "Python",
  "Java",
  "MERN Stack",
  "Machine Learning",
  "AI Development",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Git",
]

const certificates = [
  {
    title: "IBM SkillsBuild — AI Fundamentals",
    description: "Core AI concepts, applications, and ethics.",
  },
  {
    title: "freeCodeCamp — Front End Development Libraries",
    description: "React, Redux, and UI component best practices.",
  },
  {
    title: "freeCodeCamp — Machine Learning with Python",
    description: "ML pipelines with Python, model training & evaluation.",
  },
  {
    title: "Coursera — Machine Learning (Andrew Ng)",
    description: "Supervised/unsupervised learning, regularization, optimization.",
  },
]

export default function AboutClientPage() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-20 md:space-y-28">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-primary">Get to know me</p>
          <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient">About me</span>
          </h1>
          <TypeAnimation
            sequence={[
              "I'm Gregory Temwa, a Software Engineering student at USIU with a passion for building innovative web solutions and AI applications.",
              1000,
            ]}
            wrapper="p"
            cursor
            repeat={Infinity}
            className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          />
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="surface grid items-start gap-8 p-8 md:grid-cols-[200px_1fr] md:p-10"
        >
          <div className="flex justify-center md:justify-start">
            <Image
              src="/potrait.jpg"
              alt="Gregory Temwa portrait"
              width={200}
              height={200}
              className="rounded-2xl border border-border object-cover"
              priority
            />
          </div>
          <div className="space-y-4 text-balance leading-relaxed text-muted-foreground">
            <p>
              I&apos;m currently pursuing my BSc. in Software Engineering at United States International University
              (USIU) while gaining hands-on experience in the tech industry. Over the past 3 years, I&apos;ve worked with
              companies like Webtech Solutions Limited and Mtaamall startup, developing everything from responsive
              websites to AI chatbots.
            </p>
            <p>
              As an award-winning hackathon participant, I thrive in collaborative environments where I can solve
              complex problems using modern technologies. My expertise spans the full development stack, with
              particular interests in artificial intelligence, machine learning, and creating delightful user
              experiences.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="experience" className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Career</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Work experience</h2>
          </div>
          <ExperienceTimeline />
        </section>

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
              <h3 className="text-xl font-semibold tracking-tight">BSc. in Software Engineering</h3>
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
