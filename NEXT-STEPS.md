# Next steps

What's left after the October 2026 upgrade (PRs #5–#8). The first section needs you; the second is code work I can pick up.

## Needs you

- [ ] **Add `GITHUB_TOKEN` in Vercel.** GitHub → Settings → Developer settings → Fine-grained tokens → Generate: resource owner *youneedgreg*, repository access *Public repositories (read-only)*, no extra permissions. Then Vercel → gregorytemwa → Settings → Environment Variables → add `GITHUB_TOKEN` for Production and Preview, mark it **Sensitive**, and redeploy. Without it the Now section and GitHub stats share GitHub's 60 requests/hour limit.
- [ ] **Turn on Speed Insights.** Vercel dashboard → project → Speed Insights → Enable. The code is already in place (`@vercel/speed-insights` in `app/layout.tsx`); it starts reporting Core Web Vitals once enabled.
- [x] **Custom domain.** _Done: temwa.dev, with `SITE_URL` in `lib/seo.ts` updated so canonicals, sitemap, RSS and share images use it._
- [x] **"My Portfolio" project.** _Done: live at temwa.dev with a real case study and screenshots._

Not changing: the bio says you're a USIU student, which is correct — you haven't graduated yet.

## Needs you (round 1)

- [ ] **Verify temwa.dev in Resend** (free plan includes one domain). Resend → Domains → Add domain `temwa.dev` → copy the DNS records it shows (an MX and TXT record for `send.temwa.dev`, and a DKIM TXT record). temwa.dev's DNS is at **name.com** (its nameservers are `ns*.name.com`), so add them there: name.com → My Domains → temwa.dev → Manage DNS Records. When Resend shows *Verified*, add `CONTACT_FROM` = `Gregory Temwa <hello@temwa.dev>` in Vercel and redeploy. Until then the form uses Resend's test sender, which only delivers to the address your Resend account was created with.
- [ ] **Mark `RESEND_API_KEY` as Sensitive in Vercel** (Settings → Environment Variables → edit). Vercel flags it as readable today.
- [ ] **Redirect www.temwa.dev to temwa.dev.** It currently serves the site on both hosts. Vercel → gregorytemwa → Settings → Domains → www.temwa.dev → Edit → redirect to `temwa.dev` (308).
- [ ] **temwa.com doesn't resolve.** It's added to the Vercel team but has no DNS pointing at Vercel. Either point it at Vercel and redirect it to temwa.dev, or remove it from the project.
- [ ] **Booking link.** Create a free Cal.com (or Calendly) event and put the URL in `SOCIAL.booking` in `data/navigation.ts`; the "Book a call" button appears automatically.
- [ ] **Hackathon specifics.** The site says "award-winning hackathon participant". Naming the hackathon(s), the year and the placing would make it concrete (and would be a natural journey entry).

## Needs you (new)

- [ ] **AgroWatch's live API is failing.** agro-watch-weather-ai.vercel.app shows "Weather AI service error"; check its `WEATHER_AI_KEY` and quota in Vercel.
- [ ] **OKLaw firm site hero photo.** oklaw-new-website.vercel.app still shows the hero image placeholder.

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

- [x] **Placeholder covers.** _Mostly done: real screenshots for every project with a UI to capture; the rest (private client systems, ML notebooks, APIs) use generated covers._ ~~12 of 25 projects use a placeholder cover.~~ Add real screenshots, or hide `coming-soon` projects from the main grid until they have something to show.
- [x] **`/fun` is only reachable through ⌘K.** _Done: replaced by `/lab`, linked everywhere; `/fun` redirects._ Link it from the new footer, or remove it — its random-fact widget is gone and the remaining widgets don't say much about your work.
