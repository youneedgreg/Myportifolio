"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { experience } from "@/data/experience"

type ExperienceTimelineProps = {
  limit?: number
}

export default function ExperienceTimeline({ limit }: ExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  })
  const items = limit ? experience.slice(0, limit) : experience

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-[15px] top-1 bottom-1 w-px bg-border md:left-[19px]" />
      <motion.div
        className="absolute left-[15px] top-1 w-px origin-top bg-primary md:left-[19px]"
        style={{ scaleY: scrollYProgress, height: "calc(100% - 0.25rem)" }}
      />
      <ol className="space-y-10">
        {items.map((item, i) => (
          <motion.li
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex gap-6 pl-10 md:gap-8 md:pl-12"
          >
            <span className="absolute left-0 top-0.5 flex size-8 items-center justify-center rounded-full border border-border bg-card md:size-10">
              <span className="size-2 rounded-full bg-primary" />
            </span>
            <div className="space-y-1.5 pt-0.5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-semibold tracking-tight">{item.role}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-primary">{item.company}</span>
              </div>
              <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
