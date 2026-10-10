import Link from "next/link"
import FooterCta from "@/components/footer-cta"
import { exploreNav, mainNav, SOCIAL } from "@/data/navigation"

const linkClass = "inline-flex min-h-8 items-center transition-colors hover:text-foreground"

export default function SiteFooter() {
  return (
    <footer className="no-print mt-24 border-t border-border px-4 md:mt-32 md:px-6">
      <div className="mx-auto max-w-5xl space-y-16 py-16 md:py-24">
        <FooterCta />

        <div className="grid gap-10 font-mono text-sm sm:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Pages</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </li>
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cv" className={linkClass}>
                  CV
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Get lost</p>
            <ul className="space-y-1 text-muted-foreground">
              {exploreNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Elsewhere</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <a href={SOCIAL.github} target="_blank" rel="noreferrer" className={linkClass}>
                  GitHub
                </a>
              </li>
              <li>
                <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SOCIAL.x} target="_blank" rel="noreferrer" className={linkClass}>
                  X / Twitter
                </a>
              </li>
              <li>
                <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" className={linkClass}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${SOCIAL.email}`} className={linkClass}>
                  Email
                </a>
              </li>
              <li>
                <a href="/feed.xml" className={linkClass}>
                  RSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gregory Temwa · Built in Nairobi, between lectures.</p>
          <p>
            Press <kbd className="rounded border border-border px-1.5 py-0.5 text-foreground">?</kbd> for keyboard
            shortcuts
          </p>
        </div>
      </div>
    </footer>
  )
}
