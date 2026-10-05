"use client"

import { usePathname } from "next/navigation"
import { Search } from "lucide-react"
import { useCommandPalette } from "@/components/command-palette"

export function MissingPath() {
  const pathname = usePathname()
  return <span className="break-all">{pathname && pathname !== "/" ? pathname : "this-page"}</span>
}

export function SearchButton() {
  const { setOpen } = useCommandPalette()
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <Search className="size-4" />
      Or search everything
      <kbd className="rounded border border-border px-1.5 py-0.5 text-xs">⌘K</kbd>
    </button>
  )
}
