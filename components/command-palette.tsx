"use client"

import * as React from "react"
import dynamic from "next/dynamic"

// The palette (cmdk, every project and post) is only downloaded the first time it opens.
const CommandPaletteDialog = dynamic(() => import("@/components/command-palette-dialog"), { ssr: false })

type CommandPaletteContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const CommandPaletteContext = React.createContext<CommandPaletteContextValue | null>(null)

export function useCommandPalette() {
  const context = React.useContext(CommandPaletteContext)
  if (!context) {
    throw new Error("useCommandPalette must be used within a CommandPaletteProvider")
  }
  return context
}

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)
  // The palette is opened from code (button, ⌘K, "/"), not a Radix trigger, so
  // remember what had focus and hand it back on close.
  const returnFocus = React.useRef<HTMLElement | null>(null)

  const setOpenAndLoad = React.useCallback((value: boolean) => {
    if (value) {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      setLoaded(true)
    } else {
      const target = returnFocus.current
      requestAnimationFrame(() => target?.isConnected && target.focus())
    }
    setOpen(value)
  }, [])

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => {
          if (!value) {
            returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
            setLoaded(true)
          }
          return !value
        })
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <CommandPaletteContext.Provider value={{ open, setOpen: setOpenAndLoad }}>
      {children}
      {loaded && <CommandPaletteDialog open={open} setOpen={setOpenAndLoad} />}
    </CommandPaletteContext.Provider>
  )
}
