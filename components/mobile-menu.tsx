"use client"

import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { exploreNav, mainNav, SOCIAL } from "@/data/navigation"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function MobileMenu({
  open: menuOpen,
  setOpen: setMenuOpen,
  pathname,
  returnFocus,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  pathname: string
  returnFocus?: React.RefObject<HTMLElement | null>
}) {
  return (
    <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
      <DialogContent
        onCloseAutoFocus={(event) => {
          event.preventDefault()
          returnFocus?.current?.focus()
        }}
        className="top-4 max-h-[calc(100dvh-2rem)] translate-y-0 overflow-y-auto sm:max-w-md">
        <DialogTitle className="font-mono text-sm uppercase tracking-widest text-primary">Menu</DialogTitle>
        <DialogDescription className="sr-only">Site navigation</DialogDescription>
        <nav className="grid gap-6">
          <ul className="grid">
            {[{ href: "/", label: "Home" }, ...mainNav, { href: "/cv", label: "CV" }].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className="flex min-h-11 items-center text-2xl font-semibold tracking-tight transition-colors hover:text-primary aria-[current=page]:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-2 border-t border-border pt-5">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Get lost</p>
            <ul className="grid grid-cols-2 gap-2">
              {exploreNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "surface flex min-h-11 flex-col justify-center px-4 py-3 transition-colors hover:border-primary/50",
                      isActive(pathname, link.href) && "border-primary/50",
                    )}
                  >
                    <span className="font-semibold">{link.label}</span>
                    <span className="line-clamp-2 text-xs text-muted-foreground">{link.teaser}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 border-t border-border pt-5 font-mono text-sm">
            <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="min-h-11 content-center hover:text-primary">
              GitHub
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="min-h-11 content-center hover:text-primary">
              LinkedIn
            </a>
            <a href={SOCIAL.x} target="_blank" rel="noreferrer" className="min-h-11 content-center hover:text-primary">
              X
            </a>
            <a href={`mailto:${SOCIAL.email}`} className="min-h-11 content-center hover:text-primary">
              Email
            </a>
          </div>
        </nav>
      </DialogContent>
    </Dialog>
  )
}
