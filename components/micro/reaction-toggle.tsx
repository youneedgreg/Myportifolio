"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function ReactionToggle() {
  const [liked, setLiked] = useState(false)
  const [burstKey, setBurstKey] = useState(0)

  return (
    <div className="relative inline-flex items-center gap-3">
      <Button
        variant={liked ? "default" : "outline"}
        onClick={() => {
          setLiked((v) => !v)
          setBurstKey((k) => k + 1)
        }}
        aria-pressed={liked}
        aria-label={liked ? "Unlike" : "Like"}
      >
        <Heart className={`size-4 ${liked ? "fill-current" : ""}`} />
        <span className="ml-2">{liked ? "Liked" : "Like"}</span>
      </Button>
      <AnimatePresence>
        {liked &&
          Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={`${burstKey}-${i}`}
              initial={{ opacity: 0.9, scale: 0.5 }}
              animate={{
                opacity: 0,
                scale: 1.4,
                x: Math.cos((i / 8) * Math.PI * 2) * 28,
                y: Math.sin((i / 8) * Math.PI * 2) * 28,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="pointer-events-none absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500"
              aria-hidden="true"
            />
          ))}
      </AnimatePresence>
    </div>
  )
}
