"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl glass dark:glass-dark rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <div className="grid items-start gap-8 md:grid-cols-[160px_1fr]">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <Image
                src="/placeholder.svg?height=160&width=160&text=Gregory+Temwa"
                alt="Gregory Temwa headshot"
                width={160}
                height={160}
                className="rounded-full border-2 border-white/20 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-600/20"></div>
            </div>
          </motion.div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About me
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              I&apos;m Gregory Temwa, a motivated Software Engineering student at United States International University
              (USIU) with 2 years of working experience. I&apos;m an award-winning participant in multiple hackathons with a
              strong foundation in software development, artificial intelligence, machine learning, and web
              technologies.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Currently based in Nairobi, Kenya, I&apos;ve worked as a Software Developer at Webtech Solutions Limited and as
              a Full Stack Developer at Mtaamall startup, where I developed MVPs and enhanced user engagement through
              innovative web solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
