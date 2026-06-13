"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { Github, Linkedin } from "lucide-react"

const ThemeToggle = dynamic(() => import("@/components/theme-toggle"), { ssr: false })

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/cv", label: "CV" },
]

export default function SiteHeader() {
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
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground"
          >
            <a href="https://github.com/youneedgreg" target="_blank" rel="noreferrer">
              <Github className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground"
          >
            <a href="https://linkedin.com/in/youneedgreg" target="_blank" rel="noreferrer">
              <Linkedin className="size-4" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
