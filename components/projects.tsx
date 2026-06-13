"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"
import { ArrowRight } from "lucide-react"

import { projects } from "@/data/projects"

import Link from "next/link"

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Selected work</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Projects</h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-sm text-primary transition-colors hover:text-foreground"
          >
            View all
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
