# Getting temwa.dev into search engines

A one-time setup, in order. Everything the site itself needs is already in place: canonical URLs on `https://temwa.dev`, `/sitemap.xml` (every page, project and post), `/robots.txt`, `/feed.xml`, `/llms.txt`, structured data (Person, WebSite, ProfilePage, BreadcrumbList, CreativeWork, BlogPosting), titles of at most 60 characters, descriptions of at most 160, and a share image for every page. Lighthouse SEO is 100 on every page type.

## 0. Before you start

1. **Merge the open quality PR**, so production serves the final titles, descriptions and structured data.
2. **Make the www redirect permanent.** Vercel → gregorytemwa → Settings → Domains → `www.temwa.dev` → Edit → redirect to `temwa.dev` with **308 Permanent** (it is 307 today). Permanent tells search engines which address is the real one.

## 1. Google Search Console (about 10 minutes)

Use a **Domain property**: it covers `temwa.dev`, `www.temwa.dev`, http and https in one go, and is verified through DNS, so nothing in the code changes.

1. Open <https://search.google.com/search-console> and sign in with your Google account.
2. **Add property** → choose **Domain** → enter `temwa.dev` → Continue.
3. Google shows a TXT record like `google-site-verification=AbC123…`. Copy it.
4. In **name.com** → My Domains → temwa.dev → **Manage DNS Records**, add:
   - **Type:** TXT
   - **Host:** leave empty (the domain itself)
   - **Answer:** the whole `google-site-verification=…` value
   - **TTL:** 300
5. Back in Search Console, click **Verify**. It usually works within minutes; if not, wait an hour and try again. Keep the TXT record forever: removing it un-verifies the property.
6. **Submit the sitemap:** left menu → **Sitemaps** → enter `sitemap.xml` → Submit. Status should become *Success* with about 47 URLs discovered.
7. **Ask Google to crawl the important pages now:** paste each URL into the search bar at the top (**URL Inspection**) → **Request indexing**. Google allows roughly ten a day, so start with:
   - `https://temwa.dev/`
   - `https://temwa.dev/about`
   - `https://temwa.dev/projects`
   - `https://temwa.dev/blog`
   - `https://temwa.dev/projects/liquor-store-pos`
   - `https://temwa.dev/projects/oklaw-law-firm-management`
   - the three essays under `https://temwa.dev/blog/…`

   The rest arrive through the sitemap.

> No HTML tag needed. If you ever prefer the tag method (a *URL prefix* property), set `GOOGLE_SITE_VERIFICATION` in Vercel to the code Google gives you and redeploy; the site adds the meta tag itself.

## 2. Bing Webmaster Tools (about 5 minutes)

Bing's index also feeds DuckDuckGo, Yahoo, Ecosia and ChatGPT's web search, so this one matters more than its market share suggests.

1. Open <https://www.bing.com/webmasters> and sign in (a Microsoft account, or "Sign in with Google").
2. Choose **Import from Google Search Console**, authorise, and select `temwa.dev`. This copies the verified site and its sitemap in one step. (Do this after step 1 is verified.)
3. If you'd rather add it by hand: **Add site** → `https://temwa.dev` → verify by **DNS (CNAME)** at name.com, or set `BING_SITE_VERIFICATION` in Vercel to the `msvalidate.01` code and redeploy. Then **Sitemaps** → submit `https://temwa.dev/sitemap.xml`.
4. **URL Submission** → submit the same handful of key URLs as above.

## 3. Check what search engines see (about 5 minutes)

1. **Rich Results Test:** <https://search.google.com/test/rich-results>, test `https://temwa.dev/about` (Profile page, Breadcrumbs) and one case study (Breadcrumbs). Both should say *valid items detected*.
2. **Schema validator:** <https://validator.schema.org>, test `https://temwa.dev/`. The Person entry should show Chief Software Engineer, Webtech Solutions, USIU–Africa and your four profiles, with no errors.

## 4. Refresh link previews (about 5 minutes)

Social networks cache previews. Clear any old `gregorytemwa.vercel.app` ones so shares show the new title and image.

1. **LinkedIn:** <https://www.linkedin.com/post-inspector/>, inspect `https://temwa.dev`, then `/projects` and `/blog`.
2. **WhatsApp, Facebook, Instagram:** <https://developers.facebook.com/tools/debug/>, paste `https://temwa.dev` → **Scrape Again**.
3. **X:** there's no validator any more; post or DM yourself the link and the large card appears.

## 5. Point your profiles at the new address

Every profile link is a signal search engines use to connect the site to you (the site already lists these in its structured data, so the links should go both ways):

- **GitHub:** Settings → Public profile → **Website** = `https://temwa.dev`, and the link in your profile README (`youneedgreg/youneedgreg`).
- **LinkedIn:** Edit intro → **Website** = `https://temwa.dev` (label it "Portfolio"), and add it to Featured.
- **X:** Edit profile → **Website** = `temwa.dev`.
- CVs, email signature, and any freelance profiles.

## 6. Turn on the measurement you already ship

- **Vercel → gregorytemwa → Analytics:** enabled (visitors and top pages).
- **Vercel → Speed Insights → Enable:** real Core Web Vitals from visitors; the code is already in the site.

## 7. What to expect, and what to watch

- **First week:** the home page and the pages you requested show up for searches like *Gregory Temwa*. `site:temwa.dev` on Google lists what is indexed so far.
- **Two to four weeks:** most of the sitemap is indexed. Watch **Search Console → Pages**: a few "Discovered, currently not indexed" entries are normal for a new domain and clear up over time.
- **Ongoing:** Search Console → **Performance** shows the queries people find you by. **Enhancements** fills in Breadcrumbs and Profile page reports after the first crawl.
- **Each new post or project:** it lands in the sitemap and RSS feed automatically on deploy; request indexing for it in URL Inspection to speed things up.

## If something goes wrong

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Verification fails | TXT record has a typo, or a host was entered | Host empty, answer pasted whole; wait for DNS and retry |
| Sitemap "Couldn't fetch" | Submitted before the domain verified, or a typo | Resubmit exactly `sitemap.xml` |
| Old vercel.app URLs in results | Google hasn't recrawled them yet | Nothing to do: they redirect and every page's canonical points at temwa.dev |
| Page "Crawled, currently not indexed" | New domain, little authority yet | Link to it from your profiles and posts; request indexing again after a couple of weeks |
