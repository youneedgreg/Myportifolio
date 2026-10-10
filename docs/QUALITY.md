# Quality audit

A running record of how temwa.dev is judged before each deployment: what was measured, what was found, what was fixed, and what is deliberately left alone. Each round is reviewed by the owner before the next one starts.

## How it is measured

- **Lighthouse 12**, mobile emulation (412 px, throttled CPU and 4G), all four categories, against `next build && next start`.
- **Visual review** of every page at desktop (1440 px) and phone (412 px) widths, in dark and light themes.
- **Automated checks** on every pull request (`.github/workflows/ci.yml`): ESLint, `tsc --noEmit`, Vitest, production build.
- **Content review**: every visible sentence read for accuracy against the data it describes and for tone.

## Round 1 (October 2026)

### Scores

| Page | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Home | 96 | 100 (was 96) | 96 | 100 |
| Work | 93 | 100 | 96 | 100 |
| Case study | 94 | 100 | 96 | 100 |
| Blog index / post | 97 / 97 | 100 | 96 | 100 |
| About | 100 (was 95) | 100 | 96 | 100 |
| Journey | 97 (was 88) | 100 | 96 | 100 |
| Now | 98 | 100 (was 96) | 96 | 100 |
| Uses | 97 | 100 (was 96) | 96 | 100 |
| Lab | 96 | 100 | 96 | 100 |

Total blocking time is 10–50 ms on every page and layout shift is at most 0.004. Lighthouse's simulated LCP (2.5–3.2 s) models a slow 4G download of fonts and scripts; the observed LCP in the trace is 0.1–0.3 s.

### Found and fixed

| Area | Finding | Fix |
| --- | --- | --- |
| Accessibility | Scroll-reveal words started at 18% opacity, failing contrast before they lit up. | The reveal now animates colour from the muted-text token (which passes AA) to the foreground. |
| Accessibility | Inline links on `/now` and `/uses` were distinguishable by colour alone. | Underlined. |
| Accessibility | The skip link only existed on the home page. | One skip link in the root layout targets `#content` on every page. |
| UX | Two calls to action in a row on the home page ("Let's build something amazing", then the footer's "Let's build something."). | The contact section now reads "Tell me what you're building" and leads with direct channels. |
| UX | Contact errors were a toast that disappeared; failures left visitors with nothing to do. | Inline, announced (`aria-live`) success and error states; the error includes the email address. |
| UX | Only one way to get in touch. | Email with one-click copy, a WhatsApp link with a pre-filled opener, and a booking slot that appears when a link is configured. |
| UX | Theme forced dark on first visit. | Follows the visitor's device; the toggle and the `t` shortcut still switch it. |
| Mobile | Hero stats wrapped into a lopsided row; the note beside "Send message" was squeezed. | Two-by-two stat grid on phones; the note stacks under the button. |
| Content | The About page opened with a typing animation that rendered only in the browser and stopped at "a Software Engineering student". Body copy was generic. | Rewritten from the experience data in the same voice as the rest of the site; rendered on the server. |
| Content | "WebTech" and "Webtech" used interchangeably. | "Webtech", matching the company's own site. |
| Content | Em dashes remained in the three blog essays. | Reworded by hand; the sentences say the same thing. A test now fails if one comes back. |
| Content | README listed `gregorytemwa@gmail.com`, which is not the owner's address. | README rewritten as project documentation with the correct contact details. |
| SEO | Blog posts shared the site-wide social image. | Each post generates its own Open Graph image; the post's structured data points to it. |
| Engineering | No automated tests. | 97 Vitest tests: data integrity (unique slugs, every image exists on disk, live projects have URLs, no em dashes), journey ordering and parsing, navigation shortcuts, open-source links, and the contact API (validation, escaping, honeypot, provider failure, missing key, rate limit). |
| Engineering | No CI. | GitHub Actions runs lint, type-check, tests and a production build on every PR and on `main`. |
| Engineering | Contact sender and recipient hard-coded; a missing API key surfaced as a generic failure. | `CONTACT_FROM` / `CONTACT_TO` environment variables; a missing key returns a clear 503. |
| Security | Four unused OAuth secrets stored in Vercel, flagged as readable. | Deleted. Only `RESEND_API_KEY` remains. |
| Dependencies | `react-type-animation` and the toast hook were no longer needed. | Removed. `npm audit --omit=dev`: 0 vulnerabilities. |

### Deliberately left as-is

- **Best practices 96.** The only failing audit is console errors from `/_vercel/insights` and `/_vercel/speed-insights`, which exist only on Vercel. On production the audit passes.
- **CV page SEO 66.** `/cv` is `noindex` on purpose: it duplicates the About page in print form.
- **`'unsafe-inline'` in the CSP script policy.** Next.js inline bootstrap scripts and the JSON-LD blocks need it; nonces would force every page to render dynamically and give up static prerendering.
- **In-memory rate limit on the contact form.** It is per Vercel instance, so it slows a single abuser rather than guaranteeing a global limit. Paired with the honeypot it is proportionate for a personal site; a shared store (Upstash Redis) would be the next step if spam appears.
- **Scroll-driven effects in Firefox.** The reading progress bar and word reveal use CSS scroll timelines, which Firefox does not support yet. Firefox shows the text fully lit and no progress bar: nothing breaks.

### Needs the owner

See [`NEXT-STEPS.md`](../NEXT-STEPS.md): verify `temwa.dev` in Resend, add `GITHUB_TOKEN`, add a booking link, and the two issues on other sites (AgroWatch API errors, OKLaw hero photo).

## Round 2 (October 2026)

Scope agreed with the owner: real write-ups for placeholder case studies, the home page's footer call to action, a keyboard and screen-reader pass, the CV, and Firefox and Safari. ("Latest commit" stays as it is, by choice.)

### Found and fixed

| Area | Finding | Fix |
| --- | --- | --- |
| Content | Five case studies ended in "Full write-up coming soon". | Written from the code: Safari OS and Spine from their repositories (Spine: 64 migrations, 37 enforcing row-level security, 42 unit and 11 end-to-end suites); the hate-speech and image classifiers from their notebooks' own outputs. |
| Content | The image classifier's notebook reports 99.0% test accuracy and, separately, a 48% per-class report. | Investigated: the 48% came from predictions and labels drawn in two passes over a shuffled dataset. The write-up says so and gives the real figures. |
| Content | The hate-speech write-up implied a strong model. | It now reports both accuracy (75.9%) and macro F1 (0.35), and why the gap matters. |
| Content | The motel system claimed "automated daily summaries" and transactional double-booking protection that the code does not have, and was listed as "coming soon" while deployed. | Rewritten to what the code does; marked live with its URL. |
| UX | On the home page the footer's "Let's build something." sat directly under the contact form. | The footer's call to action is path-aware: on the home page it reads "Still scrolling? Go deeper." and links to the journey. |
| Accessibility | Keyboard focus on plain links was the browser's 1 px outline at 50% opacity. | A global 2 px `:focus-visible` ring in the accent colour, offset 3 px. |
| Accessibility | The screenshot marquee kept moving while a card inside it had keyboard focus. | Pauses on `:focus-within` as well as hover. |
| Accessibility | Closing the command palette, mobile menu or shortcut help dropped focus to the page body. | Each restores focus to whatever opened it. |
| CV | Printing included the site footer (two extra pages, one with near-invisible gradient text). | Site header and footer are `no-print`; print styles set page margins and keep each role and project on one page. The CV prints on two pages. |
| CV | Experience was hand-copied, the two featured projects were missing, "Strengths" was filler, en dashes were used as separators, and "Download PDF" opened the print dialog. | Experience is read from `data/experience.ts`; projects updated; filler removed; colons as separators; the button says "Print or save as PDF". |
| Cross-browser | No tests in Firefox or Safari. | Playwright smoke tests (`e2e/`) in Chromium, Firefox and WebKit at desktop and phone sizes: every page renders with one `h1`, no console errors and no horizontal scroll; theme follows the device; keyboard shortcuts, dialogs and focus return; work filters; contact form success and failure (API mocked). Runs in CI on every pull request. |
| Security / testing | `upgrade-insecure-requests` made WebKit rewrite every asset on a local `http://` production build to `https://`, so nothing loaded. Production (HTTPS only) was never affected. | The directive is only sent on Vercel. |

### Verified

- Keyboard: one `h1` and no skipped heading levels on every page, no duplicate ids, alt text on every image, no focusable element inside `aria-hidden`, visible focus everywhere, dialogs trap focus, close on Escape and restore focus.
- Chrome and WebKit (Safari 27.2 engine), desktop and phone: 76 of 76 smoke tests pass locally. Firefox runs in CI; locally it cannot create a profile inside this machine's sandbox.
- CV: prints on two pages with no site chrome.

### Open questions for the owner

- ~~**Certifications.**~~ Resolved: the owner confirmed eight, now in `data/certifications.ts` and read by both pages. Previously the CV listed Google ML Crash Course, Coursera ML, IBM SkillsBuild "AI Engineering Fundamentals", freeCodeCamp Data Analysis with Python and the HNG internship; the About page lists IBM SkillsBuild "AI Fundamentals", freeCodeCamp Front End Development Libraries, freeCodeCamp Machine Learning with Python and Coursera ML. One list should be the truth, kept in one data file.
- **Hackathons.** "Award-winning" is still unsupported by a named event.
