"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Orb {
  id: number
  style: {
    width: number
    height: number
    left: string
    top: string
  }
  animate: {
    x: number[]
    y: number[]
    scale: number[]
  }
  transition: {
    duration: number
    repeat: number
    repeatType: "reverse" | "loop" | "mirror"
    ease: string
  }
}

export default function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([])

  useEffect(() => {
    const newOrbs: Orb[] = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      style: {
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      },
      animate: {
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
        scale: [1, 1.2, 1],
      },
      transition: {
        duration: Math.random() * 10 + 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    }))
    setOrbs(newOrbs)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 blur-sm"
          style={orb.style}
          animate={orb.animate}
          transition={orb.transition}
        />
      ))}
    </div>
  )
}
