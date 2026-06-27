"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="surface mx-auto grid max-w-4xl items-start gap-8 p-8 md:grid-cols-[160px_1fr] md:p-12"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/potrait.jpg"
            alt="Gregory Temwa headshot"
            width={160}
            height={160}
            className="rounded-2xl border border-border object-cover"
          />
        </motion.div>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Who I am</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">About me</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            I&apos;m Gregory Temwa, a motivated Software Engineering student at United States International University
            (USIU) with 3+ years of working experience. I&apos;m an award-winning participant in multiple hackathons with a
            strong foundation in software development, artificial intelligence, machine learning, and web
            technologies.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Currently based in Nairobi, Kenya, I lead technical strategy as Chief Software Engineer at WebTech
            Solutions Limited, building production SaaS platforms, AI-powered tools, and developer infrastructure
            end to end. I also contribute to open source projects at Canonical and Google.
          </p>
          <div className="space-y-3 pt-2">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Languages</p>
              <div className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Python</Badge>
                <Badge>Go</Badge>
                <Badge>Rust</Badge>
                <Badge>C / C++</Badge>
                <Badge>Java</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Frameworks &amp; tools</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">NestJS</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Systems &amp; infrastructure</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Linux</Badge>
                <Badge variant="outline">Kubernetes</Badge>
                <Badge variant="outline">Microservices Architecture</Badge>
                <Badge variant="outline">RabbitMQ</Badge>
                <Badge variant="outline">Redis</Badge>
                <Badge variant="outline">Prometheus</Badge>
                <Badge variant="outline">Grafana</Badge>
                <Badge variant="outline">Observability</Badge>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
