"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { TypeAnimation } from 'react-type-animation';

export default function AboutClientPage() {
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
          <TypeAnimation
            sequence={[
              "I'm Gregory Temwa, a Software Engineering student at USIU with a passion for building innovative web solutions and AI applications.",
              1000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-muted-foreground"
          />
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
          <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
          <div className="mt-6 space-y-8">
            <div className="relative flex gap-8">
              <div className="absolute left-0 top-0 flex w-6 justify-center">
                <div className="w-px bg-border"></div>
              </div>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Full Stack Developer</h3>
                <p className="text-sm text-muted-foreground">Mtaamall startup</p>
                <p className="mt-2 text-sm">Developed and launched the Minimum Viable Product (MVP) for the Mtaamall startup using the MERN stack, contributing to the initial product launch and user acquisition.</p>
              </div>
            </div>
            <div className="relative flex gap-8">
              <div className="absolute left-0 top-0 flex w-6 justify-center">
                <div className="w-px bg-border"></div>
              </div>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Software Developer</h3>
                <p className="text-sm text-muted-foreground">Webtech Solutions Limited</p>
                <p className="mt-2 text-sm">Optimized website performance and SEO for diverse clients, and created and integrated AI chatbots into client websites for enhanced user engagement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-lg font-semibold">BSc. in Software Engineering</h3>
              <p className="text-sm text-muted-foreground">United States International University (USIU)</p>
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
