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

  const setOpenAndLoad = React.useCallback((value: boolean) => {
    if (value) setLoaded(true)
    setOpen(value)
  }, [])

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setLoaded(true)
        setOpen((value) => !value)
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
