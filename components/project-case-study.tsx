"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Github, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ProjectCoverPlaceholder from "@/components/project-cover-placeholder"
import type { Project } from "@/data/projects"

type ProjectCaseStudyProps = {
  project: Project
  prev: Project | null
  next: Project | null
}

function CaseSection({ label, content }: { label: string; content: string }) {
  return (
    <div className="space-y-2">
      <p className="font-mono text-sm uppercase tracking-widest text-primary">{label}</p>
      <p className="leading-relaxed text-muted-foreground">{content}</p>
    </div>
  )
}

export default function ProjectCaseStudy({ project, prev, next }: ProjectCaseStudyProps) {
  const isComingSoon = project.status === "coming-soon"
  const { caseStudy } = project

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
        <div className="space-y-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-sm uppercase tracking-widest text-primary">
                {project.role} · {project.year}
              </p>
              {project.openSource && <Badge variant="outline">Open Source</Badge>}
              {isComingSoon && <Badge variant="secondary">Coming soon</Badge>}
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
              <span className="text-gradient">{project.title}</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {isComingSoon ? (
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="size-4" />
                    Follow progress on GitHub
                  </a>
                </Button>
              ) : (
                <>
                  <Button asChild>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      <Globe className="size-4" />
                      Live site
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="size-4" />
                      Source
                    </a>
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.gallery.length > 0 ? (
            <div className="surface overflow-hidden p-2">
              <Image
                src={project.gallery[0]}
                alt={`${project.title} preview`}
                width={1200}
                height={800}
                className="aspect-[16/10] w-full rounded-xl object-cover"
                priority
              />
            </div>
          ) : (
            <ProjectCoverPlaceholder title={project.title} tags={project.tags} className="rounded-2xl border border-border aspect-[16/10]" />
          )}
        </motion.div>

        {project.gallery.length > 1 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.slice(1).map((src) => (
              <div key={src} className="surface overflow-hidden p-2">
                <Image
                  src={src}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="grid gap-10 sm:grid-cols-2">
          <CaseSection label="Problem" content={caseStudy.problem} />
          <CaseSection label="Approach" content={caseStudy.approach} />
          {caseStudy.techDetails && <CaseSection label="Tech highlights" content={caseStudy.techDetails} />}
          <CaseSection label="Results" content={caseStudy.results} />
          {caseStudy.challenges && <CaseSection label="Challenges" content={caseStudy.challenges} />}
        </div>

        <nav className="grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="surface group flex flex-col gap-1 p-5 transition-colors hover:border-primary/50"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <ArrowLeft className="size-3.5" />
                Previous
              </span>
              <span className="font-semibold tracking-tight transition-colors group-hover:text-primary">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="surface group flex flex-col items-end gap-1 p-5 text-right transition-colors hover:border-primary/50"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Next
                <ArrowRight className="size-3.5" />
              </span>
              <span className="font-semibold tracking-tight transition-colors group-hover:text-primary">{next.title}</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </main>
  )
}
