"use client"

import { useEffect } from "react"

const AWAY_TITLE = "👀 come back… | Gregory Temwa"

/** Swaps the tab title while the visitor is on another tab, and restores it when they return. */
export default function TabTitle() {
  useEffect(() => {
    let original: string | null = null

    function onVisibilityChange() {
      if (document.hidden) {
        original = document.title
        document.title = AWAY_TITLE
      } else if (original !== null) {
        document.title = original
        original = null
      }
    }

    document.addEventListener("visibilitychange", onVisibilityChange)
    return () => document.removeEventListener("visibilitychange", onVisibilityChange)
  }, [])

  return null
}
