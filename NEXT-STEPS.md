# Next steps

What's left after the October 2026 upgrade (PRs #5–#8). The first section needs you; the second is code work I can pick up.

## Needs you

- [ ] **Add `GITHUB_TOKEN` in Vercel.** Create a fine-grained GitHub token with read-only access to public repositories and add it to the project as `GITHUB_TOKEN`, then redeploy. Without it, the home page "Now" section and the GitHub stats on `/about` share GitHub's 60 requests/hour unauthenticated limit with everyone else on Vercel's IPs, and fall back to a plain "See recent work on GitHub" link when it runs out.
- [ ] **Turn on Speed Insights.** Vercel dashboard → project → Speed Insights → Enable. The code is already in place (`@vercel/speed-insights` in `app/layout.tsx`); it starts reporting Core Web Vitals once enabled.
- [ ] **Buy a custom domain** (e.g. `gregorytemwa.dev`) and add it to the project in Vercel. After that, change `SITE_URL` in `lib/seo.ts` so canonical URLs, the sitemap, RSS and Open Graph point at it.
- [ ] **Decide the status of the "My Portfolio" project.** `myportfolio-website` in `data/projects.ts` is still `coming-soon` even though the site is live. Switch it to `live` with `href: "https://gregorytemwa.vercel.app"`, or remove it.

Not changing: the bio says you're a USIU student, which is correct — you haven't graduated yet.

## Keep fresh

- [ ] **`/now`** — bump `NOW_UPDATED` in `data/now.ts` whenever you change what it says.
- [ ] **"Currently building"** — set `currentlyBuilding` in `data/now.ts` to the project slug(s) you're focused on (now: `safari-os`).
- [ ] **`/uses`** — add your hardware, editor, terminal and fonts if you want them listed; I only included tools proven by your projects.

## UI improvements

Found in a pass over the live site at desktop and phone (375px) widths, in both themes.

### High

- [x] **No navigation on phones.** _Done: menu sheet with every page._ Below 768px the header hides About / Projects / Blog / Contact / CV and only the search icon remains, so mobile visitors have to discover the command palette to get around. Add a menu button that opens a sheet with the same links (`@radix-ui/react-dialog` is already installed).
- [x] **Pages start invisible until JavaScript loads.** _Done: page-transition template removed._ `app/template.tsx` wraps every page in a Framer Motion fade that starts at `opacity: 0`, so the server-rendered HTML is hidden until hydration. That delays Largest Contentful Paint on every page, and on a slow phone the page looks blank. Use a CSS-only fade, or drop the page transition.
- [x] **Footer only exists on the home page.** _Done: global footer._ `/about`, `/projects`, `/blog`, project and post pages end abruptly. Move the footer into the root layout and give it links to every page, socials, RSS and the CV.

### Medium

- [x] **Double side padding on the home page.** _Done on the home page._ `main` has `px-4 md:px-6` and every section inside it adds `px-4 md:px-6` again, so content sits 32px from the edge on phones (48px on desktop) while the header uses 16px. Remove the padding from one of the two levels.
- [ ] **Small tap targets on mobile.** 21 links and buttons on the home page are under 32px tall (footer links, "View all" / "All posts" links, badge-sized controls). Aim for at least 40px of tappable height.
- [x] **Hero role line pops in after load.** _Done: hero is fully server-rendered now._ `AnimatedText` is loaded with `ssr: false`, so the "Software Engineer" line is empty in the HTML and appears later, shifting the layout. Render the first phrase on the server and animate from there, or reserve its height.
- [ ] **App icons.** Only `favicon.ico` exists. Add `app/icon.png` and `app/apple-icon.png` (Next.js picks them up automatically) and list a 192px and 512px icon in `app/manifest.ts`, so the site looks right on home screens and in tabs.

### Low

- [ ] **12 of 25 projects use a placeholder cover.** Add real screenshots, or hide `coming-soon` projects from the main grid until they have something to show.
- [x] **`/fun` is only reachable through ⌘K.** _Done: replaced by `/lab`, linked everywhere; `/fun` redirects._ Link it from the new footer, or remove it — its random-fact widget is gone and the remaining widgets don't say much about your work.
