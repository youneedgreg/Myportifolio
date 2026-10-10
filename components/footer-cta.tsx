"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

/**
 * The footer's big call to action. On the home page the contact form sits just
 * above it, so there it points deeper into the site instead of back to contact.
 */
export default function FooterCta() {
  const onHome = usePathname() === "/"
  const cta = onHome
    ? {
        command: "./journey",
        href: "/journey",
        lines: ["Still scrolling?", "Go deeper."],
        note: "Every job, project and essay since 2023, year by year. Or press ? and drive with the keyboard.",
      }
    : {
        command: "./contact",
        href: "/#contact",
        lines: ["Let's build", "something."],
        note: "Open to freelance builds and full-time roles. I usually reply within a day.",
      }

  return (
    <div className="space-y-6">
      <p className="font-mono text-sm text-primary">greg@portfolio:~$ {cta.command}</p>
      <Link href={cta.href} className="group block w-fit">
        <span className="text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-8xl">
          <span className="text-gradient">{cta.lines[0]}</span>
          <br />
          <span className="inline-flex items-center gap-3 text-gradient transition-colors">
            {cta.lines[1]}
            <ArrowUpRight className="size-10 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:size-16" />
          </span>
        </span>
      </Link>
      <p className="max-w-md text-muted-foreground">{cta.note}</p>
    </div>
  )
}
