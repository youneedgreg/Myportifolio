"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

type Props = {
  title?: string
  description?: string
  image?: string
  tags?: string[]
  href?: string
}

export default function ProjectCard({
  title = "Project",
  description = "Description goes here.",
  image = "/placeholder.svg?height=400&width=600",
  tags = ["Next.js", "TypeScript"],
  href = "#",
}: Props) {
  return (
    <Link href={href} className="group focus:outline-none">
      <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <Card className="h-[500px] overflow-hidden glass dark:glass-dark border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 flex flex-col">
          <div className="relative overflow-hidden">
            <motion.div
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
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </div>
          <CardHeader>
            <CardTitle className="text-base bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 flex-grow overflow-hidden">
            <p className="text-sm text-foreground/60 line-clamp-2">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs glass dark:glass-dark border-white/20">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}