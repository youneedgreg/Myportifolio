'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div))
import ProjectCard from '@/components/project-card'
import { projects } from '@/data/projects'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState(6)

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6)
  }

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back home
          </Link>
          <div className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary">Portfolio</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
              All projects
            </h1>
          </div>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            A collection of my work, from web apps to open-source projects.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleProjects).map((p, i) => (
            <MotionDiv
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
            >
              <ProjectCard {...p} />
            </MotionDiv>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="text-center">
            <Button onClick={loadMore} variant="outline" size="lg">
              Load more
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
