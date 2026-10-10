"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { useCommandPalette } from "@/components/command-palette"
import { exploreNav, mainNav } from "@/data/navigation"

const ShortcutsHelp = dynamic(() => import("@/components/shortcuts-help"), { ssr: false })

const goTo = [{ href: "/", label: "Home", shortcut: "h" }, ...mainNav, ...exploreNav].filter((link) => link.shortcut)

function isTyping(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
}

/**
 * Vim-style navigation: `g` then a letter jumps to a page, `t` toggles the theme,
 * `/` opens search and `?` shows this list.
 */
export default function KeyboardShortcuts() {
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()
  const { setOpen: setPaletteOpen } = useCommandPalette()
  const [helpOpen, setHelpOpen] = useState(false)
  const [helpLoaded, setHelpLoaded] = useState(false)
  const returnFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    let pendingG: ReturnType<typeof setTimeout> | null = null

    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return

      if (pendingG) {
        clearTimeout(pendingG)
        pendingG = null
        const link = goTo.find((l) => l.shortcut === event.key.toLowerCase())
        if (link) {
          event.preventDefault()
          router.push(link.href)
        }
        return
      }

      switch (event.key) {
        case "g":
          pendingG = setTimeout(() => (pendingG = null), 1000)
          break
        case "?":
          event.preventDefault()
          if (!(document.activeElement as HTMLElement | null)?.closest('[role="dialog"]')) {
            returnFocus.current = document.activeElement as HTMLElement | null
          }
          setHelpLoaded(true)
          setHelpOpen((open) => !open)
          break
        case "/":
          event.preventDefault()
          setPaletteOpen(true)
          break
        case "t":
          setTheme(resolvedTheme === "dark" ? "light" : "dark")
          break
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      if (pendingG) clearTimeout(pendingG)
    }
  }, [router, resolvedTheme, setTheme, setPaletteOpen])

  useEffect(() => {
    // A note for the people who open devtools on portfolios.
    console.log(
      "%cgreg@portfolio:~$ %cwhoami\n%cYou read source code for fun. So do I. Say hi: gregorytemwa1212@gmail.com\nPress ? on the page for keyboard shortcuts.",
      "color:#38bdf8;font-family:monospace",
      "color:inherit;font-family:monospace",
      "color:#9ca3af;font-family:monospace",
    )
  }, [])

  return helpLoaded ? <ShortcutsHelp open={helpOpen} setOpen={setHelpOpen} goTo={goTo} returnFocus={returnFocus} /> : null
}
