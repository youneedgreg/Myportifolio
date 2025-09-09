"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import FloatingOrbs from "./floating-orbs"

const AnimatedText = dynamic(() => import("./animated-text"), { ssr: false })

export default function Hero() {
  return (
    <section className="container px-4 md:px-6 pt-10 md:pt-16 relative">
      <FloatingOrbs />
      <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <motion.div
            className="inline-flex items-center rounded-full glass dark:glass-dark px-4 py-2 text-sm text-foreground/80"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            ✨ Available for freelance and full‑time
          </motion.div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Hi, I&apos;m Gregory Temwa
          </h1>
          <div className="text-xl text-foreground/70">
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
          <p className="max-w-xl text-foreground/60 leading-relaxed">
            Award-winning Software Engineering student at USIU with 2 years of experience building responsive websites,
            AI chatbots, and full-stack applications using React, Python, and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                className="px-6 glass dark:glass-dark border-0 bg-gradient-to-r from-blue-500/80 to-purple-600/80 hover:from-blue-600/80 hover:to-purple-700/80 text-white shadow-lg"
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                variant="outline"
                className="px-6 glass dark:glass-dark border-white/20 hover:bg-white/10 bg-transparent"
              >
                <Link href="#projects">View projects</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative animate-float"
        >
          <div className="relative glass dark:glass-dark rounded-3xl p-2 shadow-2xl">
            <Image
              src="/hero picture.png"
              alt="Gregory Temwa's development workspace with multiple monitors showing code"
              width={800}
              height={600}
              className="mx-auto aspect-[4/3] rounded-2xl object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
