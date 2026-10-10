# temwa.dev

The portfolio of **Gregory Temwa**, Chief Software Engineer at Webtech Solutions in Nairobi and a Software Engineering student at USIU (class of 2027). Live at **[temwa.dev](https://temwa.dev)**.

It puts the work up front, teases what's below, gives visitors places to get lost (case studies, an MDX blog, a journey timeline, `/now`, `/uses`, a lab), and is keyboard-driven throughout: press <kbd>?</kbd> on the site.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) on React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui, Magic UI marquee; tokens in `app/globals.css` |
| Content | Typed data in `data/`; blog bodies in `content/blog/*.mdx` (remark-gfm, rehype-pretty-code) |
| Email | Resend, via `app/api/contact/route.ts` |
| Hosting | Vercel, with Web Analytics and Speed Insights |
| Tests | Vitest unit tests (`tests/`) and Playwright cross-browser smoke tests (`e2e/`) in Chromium, Firefox and WebKit, all run in CI |

## Getting started

Requires Node 20.9+ (CI and Vercel use Node 24). For the browser tests, install the engines once with `npx playwright install chromium firefox webkit`; set `PLAYWRIGHT_BROWSERS_PATH` to keep them on another disk.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (prerenders every page) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (flat config, `eslint-config-next`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest: data integrity, journey, navigation and the contact API |
| `npm run test:browsers` | Playwright after `npm run build`: every page in Chrome, Firefox and Safari (WebKit), desktop and phone, plus keyboard, theme, filters and the contact form (mocked, so no email is sent) |

## Environment variables

All optional locally; the site degrades gracefully without them.

| Variable | Used by | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | Contact form | Without it the form returns a clear "not configured" error and shows the email address instead. |
| `CONTACT_FROM` | Contact form | Sender, e.g. `Gregory Temwa <hello@temwa.dev>`. Defaults to Resend's test sender, which only delivers to the Resend account's own address. |
| `CONTACT_TO` | Contact form | Recipient. Defaults to `gregorytemwa1212@gmail.com`. |
| `GITHUB_TOKEN` | Now section, About page GitHub stats | Read-only fine-grained token. Without it GitHub allows 60 requests/hour per IP, shared on Vercel. |

## Where things live

| To change | Edit |
| --- | --- |
| Projects and case studies | `data/projects.ts` (screenshots in `public/assets/`) |
| Blog posts | Metadata in `data/blog.ts`, body in `content/blog/<slug>.mdx` |
| Experience, journey | `data/experience.ts` (the journey is derived from experience, projects and posts) |
| "Currently building", `/now` date | `data/now.ts` |
| Open-source contributions | `data/open-source.ts` |
| Navigation, socials, WhatsApp, booking link | `data/navigation.ts` (every nav surface reads it) |
| Site URL, title, description | `lib/seo.ts` |
| Design rules | [`DESIGN.md`](DESIGN.md) |

## Quality

Measured on a production build with Lighthouse (mobile emulation): performance 93–100, accessibility 100, best practices 96 (100 on Vercel), SEO 100 on every indexable page. Every page is smoke-tested in Chrome, Firefox and Safari's engine at desktop and phone sizes on each pull request. The full audit, what was fixed and what is deliberately left as-is are in [`docs/QUALITY.md`](docs/QUALITY.md). Open items that need the owner are in [`NEXT-STEPS.md`](NEXT-STEPS.md).

Security: a strict Content Security Policy and security headers (`next.config.ts`), HTML-escaped and length-limited contact input with a honeypot and per-IP rate limit, and no secrets in the client bundle.

## Contact

[temwa.dev](https://temwa.dev) · gregorytemwa1212@gmail.com · [GitHub](https://github.com/youneedgreg) · [LinkedIn](https://www.linkedin.com/in/youneedgreg/) · [X](https://x.com/youneedgreg)
