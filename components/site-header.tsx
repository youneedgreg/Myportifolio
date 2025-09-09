"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { Github, Linkedin } from "lucide-react"

const ThemeToggle = dynamic(() => import("@/components/theme-toggle"), { ssr: false })

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full glass dark:glass-dark">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground/90 hover:text-foreground transition-colors"
        >
          <span className="sr-only">Home</span>
          Gregory Temwa
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:underline underline-offset-4" href="#about">
            About
          </a>
          <a className="hover:underline underline-offset-4" href="#projects">
            Projects
          </a>
          <a className="hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
          <Link className="hover:underline underline-offset-4" href="/cv">
            CV
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href="https://github.com/youneedgreg" target="_blank" rel="noreferrer">
              <Github className="size-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <a href="https://linkedin.com/in/youneedgreg" target="_blank" rel="noreferrer">
              <Linkedin className="size-5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
