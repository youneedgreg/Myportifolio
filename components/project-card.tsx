"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import { Github, Globe } from "lucide-react"
import dynamic from "next/dynamic"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div))

type Props = {
  title?: string
  description?: string
  image?: string
  tags?: string[]
  href?: string
  github?: string
}

export default function ProjectCard({
  title = "Project",
  description = "Description goes here.",
  image = "/placeholder.svg?height=400&width=600",
  tags = ["Next.js", "TypeScript"],
  href = "#",
  github = "#",
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldShowReadMore = description.length > 100 // Adjust threshold as needed

  return (
    <MotionDiv whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card className="surface flex h-[500px] flex-col overflow-hidden p-0 shadow-sm">
        <div className="group relative overflow-hidden">
          <MotionDiv
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Image
              src={image || "/placeholder.svg"}
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
          <div className="absolute top-4 left-4 z-10 rounded-full border border-border bg-background/70 p-2 backdrop-blur-sm">
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
          <div className="absolute top-4 right-4 z-10 rounded-full border border-border bg-background/70 p-2 backdrop-blur-sm">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Globe className="h-5 w-5 text-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
        <CardHeader className="pt-6">
          <CardTitle className="text-base text-gradient">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-3 overflow-hidden pb-6">
          <div>
            <p className={`text-sm text-muted-foreground ${!isExpanded ? "line-clamp-2" : ""}`}>{description}</p>
            {shouldShowReadMore && (
              <button
                onClick={(e) => {
                  e.preventDefault()
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
