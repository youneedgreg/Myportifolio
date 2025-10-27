"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"

import { projects } from "@/data/projects"

import Link from "next/link"

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Selected projects</h2>
            <p className="text-muted-foreground">A few fast, thoughtful builds.</p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-blue-500 hover:underline">
            View all
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
