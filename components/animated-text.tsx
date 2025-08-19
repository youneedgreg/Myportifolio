"use client"

import { useEffect, useState } from "react"

type Props = {
  phrases?: string[]
  typingSpeed?: number
  pauseMs?: number
}

export default function AnimatedText({ phrases = ["Software Engineer"], typingSpeed = 60, pauseMs = 1200 }: Props) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)
  const current = phrases[index % phrases.length]

  useEffect(() => {
    const t = setTimeout(() => setBlink((b) => !b), 500)
    return () => clearTimeout(t)
  }, [blink])

  useEffect(() => {
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(t)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
      return
    }
    const delta = deleting ? typingSpeed / 2 : typingSpeed
    const t = setTimeout(() => setSubIndex((s) => s + (deleting ? -1 : 1)), delta)
    return () => clearTimeout(t)
  }, [subIndex, deleting, current, typingSpeed, pauseMs, phrases.length])

  return (
    <span className="font-medium">
      {current.substring(0, subIndex)}
      <span aria-hidden="true" className={blink ? "opacity-100" : "opacity-0"}>
        |
      </span>
    </span>
  )
}
