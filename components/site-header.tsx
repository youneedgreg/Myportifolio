"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { Github, Linkedin, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCommandPalette } from "@/components/command-palette"
import XLogo from "@/components/icons/x-logo"
import { mainNav, SOCIAL } from "@/data/navigation"

const ThemeToggle = dynamic(() => import("@/components/theme-toggle"), { ssr: false })
// The menu (and Radix Dialog) only downloads when someone first opens it.
const MobileMenu = dynamic(() => import("@/components/mobile-menu"), { ssr: false })

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function SiteHeader() {
  const pathname = usePathname()
  const { setOpen } = useCommandPalette()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuLoaded, setMenuLoaded] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            GT
          </span>
          <span className="sr-only">Home</span>
          <span className="hidden sm:inline">Gregory Temwa</span>
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
          {[...mainNav, { href: "/cv", label: "CV" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className="transition-colors hover:text-foreground aria-[current=page]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(true)}
            aria-label="Open command palette"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <Search className="size-3.5" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] sm:inline">
              ⌘K
            </kbd>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="GitHub"
            className="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            <a href={SOCIAL.github} target="_blank" rel="noreferrer">
              <Github className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="X (Twitter)"
            className="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            <a href={SOCIAL.x} target="_blank" rel="noreferrer">
              <XLogo className="size-3.5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="LinkedIn"
            className="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="size-4" />
            </a>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="text-muted-foreground hover:text-foreground md:hidden"
            onClick={() => {
              setMenuLoaded(true)
              setMenuOpen(true)
            }}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      {menuLoaded && <MobileMenu open={menuOpen} setOpen={setMenuOpen} pathname={pathname} />}
    </header>
  )
}
