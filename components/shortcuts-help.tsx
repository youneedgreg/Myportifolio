"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { NavLink } from "@/data/navigation"

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex min-w-6 items-center justify-center rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
      {children}
    </kbd>
  )
}

export default function ShortcutsHelp({
  open: helpOpen,
  setOpen: setHelpOpen,
  goTo,
  returnFocus,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  goTo: NavLink[]
  returnFocus?: React.RefObject<HTMLElement | null>
}) {
  return (
    <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
      <DialogContent
        className="sm:max-w-md"
        onCloseAutoFocus={(event) => {
          event.preventDefault()
          if (returnFocus?.current?.isConnected) returnFocus.current.focus()
        }}
      >
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
