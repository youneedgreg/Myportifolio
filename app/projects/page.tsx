'use client'

import dynamic from 'next/dynamic'

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
    <div className="min-h-dvh liquid-gradient dark:liquid-gradient-dark relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50">
        Skip to content
      </a>
      <main id="main" className="relative z-10 flex flex-col gap-16 md:gap-24">
        <section id='projects' className='px-4 md:px-6'>
          <div className='mx-auto max-w-5xl'>
            <div className='mb-8 space-y-4 text-center'>
              <h1 className='text-1xl font-bold tracking-tighter sm:text-2xl md:text-3xl'>
                My Projects
              </h1>
              <p className='text-muted-foreground md:text-xl'>
                A collection of my work, from web apps to open-source projects.
              </p>
            </div>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {projects.slice(0, visibleProjects).map((p, i) => (
                <MotionDiv
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <ProjectCard {...p} />
                </MotionDiv>
              ))}
            </div>
            {visibleProjects < projects.length && (
              <div className="mt-8 text-center">
                <Button onClick={loadMore}>Load More</Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
