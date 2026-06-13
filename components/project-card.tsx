"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import dynamic from "next/dynamic"
import ProjectCoverPlaceholder from "@/components/project-cover-placeholder"
import type { Project } from "@/data/projects"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div))

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const { slug, title, description, image, tags, href, github, status, openSource } = project
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldShowReadMore = description.length > 100 // Adjust threshold as needed
  const isComingSoon = status === "coming-soon"

  return (
    <MotionDiv whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card
        onClick={() => router.push(`/projects/${slug}`)}
        className="surface flex h-[500px] cursor-pointer flex-col overflow-hidden p-0 shadow-sm transition-colors hover:border-primary/50"
      >
        <div className="group relative overflow-hidden">
          {isComingSoon ? (
            <ProjectCoverPlaceholder title={title} tags={tags} />
          ) : (
            <MotionDiv
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <Image
                src={image}
                alt={`${title} preview`}
                width={600}
                height={400}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <MotionDiv
                className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                initial={false}
              />
            </MotionDiv>
          )}
          {openSource && (
            <Badge
              variant="outline"
              className="absolute top-4 left-4 z-10 border-border bg-background/70 backdrop-blur-sm"
            >
              Open Source
            </Badge>
          )}
          {!isComingSoon && (
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${title} source on GitHub`}
                className="rounded-full border border-border bg-background/70 p-2 backdrop-blur-sm transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${title} live site`}
                className="rounded-full border border-border bg-background/70 p-2 backdrop-blur-sm transition-colors hover:text-primary"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
        <CardHeader className="pt-6">
          <CardTitle className="text-base">
            <Link
              href={`/projects/${slug}`}
              onClick={(e) => e.stopPropagation()}
              className="text-gradient hover:underline"
            >
              {title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-3 overflow-hidden pb-6">
          <div>
            <p className={`text-sm text-muted-foreground ${!isExpanded ? "line-clamp-2" : ""}`}>{description}</p>
            {shouldShowReadMore && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsExpanded(!isExpanded)
                }}
                className="mt-1 font-mono text-xs text-primary hover:underline"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </MotionDiv>
  )
}
