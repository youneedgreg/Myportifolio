"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ClickCounter() {
  const [count, setCount] = useState(0)
  const [burst, setBurst] = useState(0)

  return (
    <div className="flex items-center gap-6">
      <motion.div
        key={count}
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 16 }}
        className="text-4xl font-bold tabular-nums bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        aria-live="polite"
      >
        {count}
      </motion.div>
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            onClick={() => {
              setCount((c) => c + 1)
              setBurst((b) => b + 1)
            }}
            className="glass dark:glass-dark border-white/20 bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 backdrop-blur-md shadow-lg"
          >
            Click me
          </Button>
        </motion.div>
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence>
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.span
                key={`${burst}-${i}`}
                initial={{ opacity: 0.9, scale: 0.2 }}
                animate={{
                  opacity: 0,
                  scale: 1.5,
                  x: Math.cos((i / 8) * Math.PI * 2) * 32,
                  y: Math.sin((i / 8) * Math.PI * 2) * 32,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 blur-sm"
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
