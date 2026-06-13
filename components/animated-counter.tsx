"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"

type AnimatedCounterProps = {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({ value, prefix = "", suffix = "", className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  const display = useTransform(springValue, (latest) => `${prefix}${Math.round(latest).toLocaleString()}${suffix}`)

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
