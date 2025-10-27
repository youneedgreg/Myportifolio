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
      <Card className="h-[500px] overflow-hidden glass dark:glass-dark border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 flex flex-col">
        <div className="relative overflow-hidden">
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
              className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100"
              initial={false}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </MotionDiv>
          <div className="absolute top-4 left-4 z-10 bg-black/50 rounded-full p-2">
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-white hover:text-blue-500 transition-colors" />
            </Link>
          </div>
          <div className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Globe className="h-6 w-6 text-white hover:text-blue-500 transition-colors" />
            </Link>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-base bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 flex-grow overflow-hidden">
          <div>
            <p className={`text-sm text-foreground/60 ${!isExpanded ? 'line-clamp-2' : ''}`}>
              {description}
            </p>
            {shouldShowReadMore && (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsExpanded(!isExpanded)
                }}
                className="text-xs text-blue-500 hover:underline mt-1"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs glass dark:glass-dark border-white/20">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </MotionDiv>
  )
}
