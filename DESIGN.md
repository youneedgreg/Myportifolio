# Design system

How this portfolio looks and behaves, written down so that new pages and components — whether written by hand or with an AI agent — match what is already here. Every rule below describes existing code; when in doubt, copy the nearest existing component.

## Principles

- **Quiet, technical, dark-first.** Near-black surfaces, one cyan accent, Geist Mono for anything that reads as metadata. The work is the decoration.
- **One accent, used sparingly.** `primary` marks labels, links, focus and hover — never large fills behind text.
- **Bordered cards, not glass.** Depth comes from a 1px border on `bg-card`, not blur, shadows or gradients.
- **Motion confirms, it doesn't perform.** Short fade-and-rise on entry, small springs on hover. The only loops are ambient and slow: the hero typing line, the availability ping, the floating orbs and the stack marquee.

## Tokens

Defined in `app/globals.css` as OKLCH variables on `:root` (light) and `.dark` (default theme), exposed to Tailwind through `@theme inline`. Always use the Tailwind names, never raw colours.

| Token | Use |
| --- | --- |
| `background` / `foreground` | Page and body text |
| `card` | Every bordered surface (`.surface`) |
| `muted-foreground` | Secondary text, metadata, descriptions |
| `primary` | Eyebrow labels, links, hover states, focus ring, scroll progress |
| `border` | All borders and dividers |
| `secondary` / `muted` / `accent` | Badge fills, code backgrounds, skeletons |
| `destructive` | Errors only |

Radius comes from `--radius` (0.625rem); cards use `rounded-2xl`, images inside cards `rounded-xl`.

## Typography

Geist Sans for UI and body, Geist Mono (`font-mono`) for labels, dates, stats, code and nav.

| Role | Classes |
| --- | --- |
| Page title (h1) | `text-balance text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl` wrapped in `<span className="text-gradient">` |
| Section heading (h2) | `text-3xl font-semibold tracking-tight md:text-5xl` |
| Card title | `text-lg font-semibold tracking-tight` |
| Eyebrow above a heading | `font-mono text-sm uppercase tracking-widest text-primary` |
| Small metadata label | `font-mono text-xs uppercase tracking-widest text-muted-foreground` |
| Body / description | `leading-relaxed text-muted-foreground` (`text-base sm:text-lg` for intros) |

`.text-gradient` (foreground → foreground/60) is for page titles and project names only.

## Layout

- Page shell: `<main className="px-4 py-16 md:px-6 md:py-24">`.
- Content width: `mx-auto max-w-4xl` for most sections, `max-w-3xl` for reading (blog posts, 404), `max-w-5xl` for project grids.
- Home page sections are separated with `gap-24 md:gap-32`; sub-pages use `space-y-12` to `space-y-20`.
- Grids: `grid gap-4 sm:grid-cols-2` for cards, `sm:grid-cols-2 lg:grid-cols-3` for project cards.
- Must work at 375px with no horizontal scroll.

## Patterns

**Section header** — eyebrow, heading, optional "see all" link on the right:

```tsx
<div className="flex items-end justify-between gap-4">
  <div className="space-y-2">
    <p className="font-mono text-sm uppercase tracking-widest text-primary">Writing</p>
    <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">From the blog</h2>
  </div>
  <Link href="/blog" className="inline-flex items-center gap-1.5 whitespace-nowrap font-mono text-sm text-primary transition-colors hover:text-foreground">
    All posts <ArrowRight className="size-4" />
  </Link>
</div>
```

**Card** — `.surface` plus padding. Clickable cards are a single `<Link>` with `group` and `transition-colors hover:border-primary/50`; the title takes `group-hover:text-primary` and any arrow `group-hover:translate-x-0.5`.

**Badges** (`components/ui/badge.tsx`) — `default` for primary skills, `secondary` for tools and tags, `outline` for infrastructure or status.

**Buttons** (`components/ui/button.tsx`) — one `default` primary action per view; everything else `outline`. Icons from `lucide-react` at `size-4`.

**Terminal motifs** — mono text, `greg@portfolio:~$` prompts in `text-primary`, three muted dots for a window bar (see `app/not-found.tsx`). Use for playful moments, not for core content.

## Motion

Framer Motion (`framer-motion`) for component motion, Tailwind `animate-*` for CSS loops.

- Entry: `initial={{ opacity: 0, y: 16 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`, `transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}` (0.8 for the hero).
- Hover springs: `transition={{ type: "spring", stiffness: 400, damping: 17 }}` with `scale` no larger than 1.05.
- Respect reduced motion: anything that loops must stop or have a static alternative under `motion-reduce:` (see the stack marquee on `/about`).

## Images

- Always `next/image` with a `sizes` prop that matches the rendered width; `priority` only for the above-the-fold image of a page.
- Store in `public/assets/` with kebab-case names (no spaces). Screenshots go through the image optimizer, so JPEG/PNG sources are fine.
- Projects without screenshots use `ProjectCoverPlaceholder`, never stock imagery.

## Content

| What | Where |
| --- | --- |
| Projects and case studies | `data/projects.ts` (only `status: "live"` projects get an `href`) |
| Blog metadata | `data/blog.ts` |
| Blog post bodies | `content/blog/<slug>.mdx`, styled by `mdx-components.tsx` |
| Experience | `data/experience.ts` |
| Site-wide SEO constants | `lib/seo.ts` |

## Constraints

- **Content Security Policy** (`next.config.ts`) allows scripts, styles, fonts, images and fetches from this origin only (plus Vercel's preview toolbar). Components that load fonts, scripts or images from a CDN will be blocked — vendor the asset or extend the policy deliberately.
- **No new animation or UI libraries** without a reason; Framer Motion, shadcn/ui and Magic UI (installed via the shadcn CLI into `components/ui/`) cover what exists.
- **Accessibility:** visible focus (the shared `ring` token), real `<a>`/`<button>` elements, `aria-hidden` on decorative duplicates, alt text on every image.

## Don't

- Add a second accent colour, gradients behind text blocks, or glassmorphism.
- Use `text-gradient` on body copy or small text.
- Put more than one filled (`default`) button in a row.
- Hard-code colours (`#fff`, `text-blue-500`) instead of tokens.
