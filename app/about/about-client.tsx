"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { TypeAnimation } from "react-type-animation"

export default function AboutClientPage() {
  return (
    <div className="min-h-dvh liquid-gradient dark:liquid-gradient-dark relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <main className="px-4 md:px-6 py-10 md:py-16">
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
              while gaining hands-on experience in the tech industry. Over the past 3 years, I&apos;ve worked with
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

        {/* Work Experience */}
        <section className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
          <div className="mt-6 space-y-8">
            {/* HNG Internship */}
            <div className="relative flex gap-8">
              <div className="absolute left-0 top-0 flex w-6 justify-center">
                <div className="w-px bg-border"></div>
              </div>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Full Stack Developer Intern</h3>
                <p className="text-sm text-muted-foreground">HNG Internship • Sep 2025 – Nov 2025</p>
                <p className="mt-2 text-sm">
                  Built a multi-framework ticket management system using React, Vue.js, and Twig; implemented auth,
                  CRUD, dashboards, and responsive design while collaborating via Agile workflows.
                </p>
              </div>
            </div>

            {/* Momentum Labs */}
            <div className="relative flex gap-8">
              <div className="absolute left-0 top-0 flex w-6 justify-center"><div className="w-px bg-border"></div></div>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Junior Software Engineer Intern</h3>
                <p className="text-sm text-muted-foreground">Momentum Labs • May 2025 – Aug 2025</p>
                <p className="mt-2 text-sm">
                  Contributed to client-facing and internal apps with modular code, API integrations, and DevOps
                  involvement ensuring production-ready deployments.
                </p>
              </div>
            </div>

            {/* Girwa Foundation */}
            <div className="relative flex gap-8">
              <div className="absolute left-0 top-0 flex w-6 justify-center"><div className="w-px bg-border"></div></div>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Junior Software Engineer Intern</h3>
                <p className="text-sm text-muted-foreground">Girwa Foundation • Feb 2025 – Apr 2025</p>
                <p className="mt-2 text-sm">
                  Built mobile-friendly donor-management dashboards, improving transparency and analytics for community programs.
                </p>
              </div>
            </div>

            {/* WebTech Solutions */}
            <div className="relative flex gap-8">
              <div className="absolute left-0 top-0 flex w-6 justify-center"><div className="w-px bg-border"></div></div>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Junior Software Developer</h3>
                <p className="text-sm text-muted-foreground">WebTech Solutions Limited • May 2024 – Jan 2025</p>
                <p className="mt-2 text-sm">
                  Collaborated on UI/UX, backend integration, and deployments with Vercel/Railway; optimized SEO and client performance.
                </p>
              </div>
            </div>

            {/* Mtaamall */}
            <div className="relative flex gap-8">
              <div className="absolute left-0 top-0 flex w-6 justify-center"><div className="w-px bg-border"></div></div>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Junior Software Engineer Intern</h3>
                <p className="text-sm text-muted-foreground">Mtaamall Startup • Feb 2024 – Apr 2024</p>
                <p className="mt-2 text-sm">
                  Developed marketplace dashboards and real-time interfaces for the MVP, integrating scalable databases and auth systems.
                </p>
              </div>
            </div>

            {/* Somo Africa */}
            <div className="relative flex gap-8">
              <div className="absolute left-0 top-0 flex w-6 justify-center"><div className="w-px bg-border"></div></div>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">STEM & Coding Instructor</h3>
                <p className="text-sm text-muted-foreground">Somo Africa • Jun 2023 – Dec 2023</p>
                <p className="mt-2 text-sm">
                  Taught students (8–18) coding, robotics, AI & VR; designed interactive lessons that foster creativity and problem-solving.
                </p>
              </div>
            </div>

            {/* Freelance */}
            <div className="relative flex gap-8">
              <div className="absolute left-0 top-0 flex w-6 justify-center"><div className="w-px bg-border"></div></div>
              <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Freelance Software Developer</h3>
                <p className="text-sm text-muted-foreground">Independent • 2023 – Present</p>
                <p className="mt-2 text-sm">
                  Delivered full-stack client projects — consulting, prototyping, implementation, and deployment — across websites, e-commerce, and AI-driven apps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-5.22-6.224l10.44 6.224M2.25 12h19.5M12 2.25c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">BSc. in Software Engineering</h3>
                  <p className="text-lg text-muted-foreground">United States International University (USIU)</p>
                  <p className="text-sm text-muted-foreground">Expected Graduation: 2027</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight">Certificates</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">IBM SkillsBuild — AI Fundamentals</h3>
              <p className="text-sm text-muted-foreground mt-1">Core AI concepts, applications, and ethics.</p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">freeCodeCamp — Front End Development Libraries</h3>
              <p className="text-sm text-muted-foreground mt-1">React, Redux, and UI component best practices.</p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">freeCodeCamp — Machine Learning with Python</h3>
              <p className="text-sm text-muted-foreground mt-1">ML pipelines with Python, model training & evaluation.</p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Coursera — Machine Learning (Andrew Ng)</h3>
              <p className="text-sm text-muted-foreground mt-1">Supervised/unsupervised learning, regularization, optimization.</p>
            </div>
          </div>
        </section>

        {/* Highlights removed as requested */}
      </main>
    </div>
  )
}
