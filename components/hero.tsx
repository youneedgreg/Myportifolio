"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import FloatingOrbs from "./floating-orbs"

const AnimatedText = dynamic(() => import("./animated-text"), { ssr: false })

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section className="relative px-4 pt-16 md:px-6 md:pt-24">
      <FloatingOrbs />
      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for freelance &amp; full-time
          </motion.div>

          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Hi, I&apos;m</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Gregory Temwa</span>
            </h1>
          </div>

          <div className="font-mono text-lg text-primary sm:text-xl">
            <AnimatedText
              phrases={[
                "Software Engineer",
                "Full Stack Developer",
                "AI/ML Enthusiast",
                "Hackathon Winner",
                "MERN Stack Developer",
              ]}
              typingSpeed={50}
              pauseMs={1500}
            />
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Award-winning Software Engineering student at USIU with 3 years of experience building responsive
            websites, AI chatbots, and full-stack applications using React, Python, and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#projects">View projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://github.com/youneedgreg" target="_blank" rel="noreferrer">
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://www.linkedin.com/in/gregory-temwa-718339245/" target="_blank" rel="noreferrer">
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div style={{ y }} className="surface relative overflow-hidden p-2 shadow-2xl">
            <Image
              src="/hero picture.png"
              alt="Gregory Temwa's development workspace with multiple monitors showing code"
              width={800}
              height={600}
              className="aspect-[4/3] w-full rounded-xl object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
