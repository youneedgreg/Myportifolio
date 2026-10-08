"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { useCommandPalette } from "@/components/command-palette"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { exploreNav, mainNav } from "@/data/navigation"

const goTo = [{ href: "/", label: "Home", shortcut: "h" }, ...mainNav, ...exploreNav].filter((link) => link.shortcut)

function isTyping(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex min-w-6 items-center justify-center rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
      {children}
    </kbd>
  )
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
      "%cgreg@portfolio:~$ %cwhoami\n%cYou read source code for fun. So do I — say hi: gregorytemwa1212@gmail.com\nPress ? on the page for keyboard shortcuts.",
      "color:#38bdf8;font-family:monospace",
      "color:inherit;font-family:monospace",
      "color:#9ca3af;font-family:monospace",
    )
  }, [])

  return (
    <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-mono">Keyboard shortcuts</DialogTitle>
          <DialogDescription>For people who would rather not reach for the mouse.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Go to</p>
            <ul className="space-y-1.5 text-sm">
              {goTo.map((link) => (
                <li key={link.href} className="flex items-center justify-between gap-3">
                  {link.label}
                  <span className="flex gap-1">
                    <Key>g</Key>
                    <Key>{link.shortcut}</Key>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Anywhere</p>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-center justify-between gap-3">
                Search
                <span className="flex gap-1">
                  <Key>/</Key>
                  <Key>⌘K</Key>
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                Toggle theme
                <Key>t</Key>
              </li>
              <li className="flex items-center justify-between gap-3">
                This list
                <Key>?</Key>
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
