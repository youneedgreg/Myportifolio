"use client"

import { motion } from "framer-motion"

export default function DraggableCard() {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-muted/30 p-4">
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
        className="surface flex h-32 w-56 cursor-grab items-center justify-center shadow-sm"
        whileTap={{ cursor: "grabbing", scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span className="text-sm text-muted-foreground">Drag me around</span>
      </motion.div>
    </div>
  )
}
