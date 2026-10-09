export type ProjectStatus = "live" | "source-available" | "private" | "coming-soon"

export type ProjectSize = "small" | "medium" | "large"

export type ProjectCategory =
  | "frontend"
  | "backend"
  | "full-stack"
  | "mobile"
  | "ai-ml"
  | "seo"
  | "microservices"
  | "data"
  | "systems"

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "full-stack", label: "Full-stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "seo", label: "SEO & sites" },
  { id: "mobile", label: "Mobile" },
  { id: "ai-ml", label: "AI & ML" },
  { id: "microservices", label: "Microservices" },
  { id: "data", label: "Data" },
  { id: "systems", label: "Systems" },
]

export type CaseStudy = {
  problem: string
  approach: string
  techDetails?: string
  results: string
  challenges?: string
}

export type Project = {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  /** Live URL, only set for projects with status "live". */
  href?: string
  github: string
  featured?: boolean
  size: ProjectSize
  year: string
  role: string
  status: ProjectStatus
  gallery: string[]
  openSource?: boolean
  sourceAvailable?: boolean
  private?: boolean
  /** What kind of work it is; drives the category filters on /projects. */
  categories: ProjectCategory[]
  /** Built for a client or employer, whatever its visibility. */
  client?: boolean
  caseStudy: CaseStudy
}

export const projects: Project[] = [
  {
    slug: "liquor-store-pos",
    title: "Liquor Store POS",
    description:
      "An offline-first point of sale for a Kenyan liquor store: an Android app that keeps selling with no connection and syncs every sale exactly once, plus an owner dashboard for profit, stock, till shortages, debts and supplier balances.",
    image: "/assets/liquor-pos-app-screens.jpg",
    tags: ["React Native", "Expo", "SQLite", "Next.js", "TypeScript", "Neon Postgres", "Drizzle", "Auth.js", "Zod"],
    github: "https://github.com/youneedgreg/lightweight-mobile-POS",
    featured: true,
    size: "large",
    year: "2026",
    role: "Full-Stack & Mobile Developer (Solo)",
    status: "source-available",
    gallery: ["/assets/liquor-pos-dashboard.jpg", "/assets/liquor-pos-app-screens.jpg"],
    openSource: true,
    categories: ["full-stack", "mobile"],
    client: true,
    caseStudy: {
      problem:
        "A small liquor store in Kenya loses its internet connection several times a day, and a POS that stops selling when the network drops is not a POS. The shop also runs on details that generic tills ignore: beer is bought by the crate and sold by the bottle, returnable bottles carry a deposit unless the customer brings an empty, regulars buy on credit, a customer pays part cash and part M-Pesa, and the owner needs to know at the end of each shift whether the till came up short.",
      approach:
        "Built two apps over one shared TypeScript contract. Cashiers sell on Android phones that hold the whole catalog locally and work with no connection: camera or Bluetooth barcode scanning, split payments across cash, M-Pesa and credit, bottle deposits and empties, crate and carton pack prices, retail and wholesale tiers, and shift open and close with a counted float. The owner gets a web dashboard with revenue and gross profit by date range, payment mix, negative-stock alerts, tills that did not balance, customer debts, supplier balances, and stock intake that breaks crates into bottles.",
      techDetails:
        "pnpm monorepo: Expo SDK 57 with Expo Router and expo-sqlite on the phone, Next.js 16 on Vercel with Drizzle ORM over Neon Postgres, Auth.js for owners, and a shared package of Zod 4 wire schemas and money helpers used by both sides. Every change on the phone is applied locally and written to a SQLite outbox in the same transaction, then pushed in dependency order (customers, shift opens, stock intakes, sales, money movements, shift closes) so a sale never reaches the server before its shift or its customer. Each record carries a client-generated UUID, so the server's handlers are idempotent and a retry comes back as a duplicate rather than a second sale. Stock is an append-only ledger with a cached on-hand figure, and the server recomputes each shift's expected cash from the synced records rather than trusting the phone. Cashiers sign in with phone and PIN to device-bound tokens; a token version bumped on PIN reset or disable signs a user out of every phone at once, and five wrong PINs lock the account.",
      results:
        "Built for a client, with an installable Android build and the owner dashboard deployed on Vercel, and demonstrated against two weeks of seeded trading: 251 sales, 14 shifts and a restock. In testing, 50 sales made offline uploaded as exactly 50, and re-sending all of them created no duplicates. M-Pesa STK Push through Safaricom's Daraja API is the next phase.",
      challenges:
        "Deciding what the server should do when the phone was right and the database disagreed. Two phones selling offline can both sell the last bottle on the shelf, and rejecting the second sale would erase money that really changed hands, so stock is allowed to go negative and the dashboard flags it for a recount instead. The same rule shaped failure handling: a record the server can never store is kept on the phone under Needs attention, rather than retried forever or silently dropped.",
    },
  },
  {
    slug: "oklaw-law-firm-management",
    title: "OKLaw Practice Management",
    description:
      "A practice management system for a Kenyan law firm (matters, court diary, trust accounting, billing, documents and a client portal), with the domain modelled from actual Kenyan statute and its architecture enforced by the linter.",
    image: "/assets/oklaw-dashboard.jpg",
    tags: ["Next.js", "React 19", "TypeScript", "Effect", "Neon Postgres", "Better Auth", "Playwright", "Vitest"],
    href: "https://law-firmmanagementsystem.vercel.app/sign-in",
    github: "https://github.com/youneedgreg/law-firm_management_system",
    featured: true,
    size: "large",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: [
      "/assets/oklaw-dashboard.jpg",
      "/assets/oklaw-case-detail.jpg",
      "/assets/oklaw-billing.jpg",
      "/assets/oklaw-client-portal.jpg",
      "/assets/oklaw-reports-dark.jpg",
    ],
    sourceAvailable: true,
    categories: ["full-stack", "backend"],
    client: true,
    caseStudy: {
      problem:
        "Small and mid-sized firms in Nairobi run on a patchwork of spreadsheets, WhatsApp, and paper diaries, and the failures that follow are not cosmetic: a missed court date can mean a matter dismissed for want of prosecution, commingling client money held in trust is a disciplinary matter under the Advocates (Accounts) Rules rather than a bookkeeping error, and a conflict of interest has to be checked before a matter is opened, against every client the firm has ever acted for or against.",
      approach:
        "Built a twenty-module practice management system (matters, clients, billing, trust, time, court diary, documents, tasks, correspondence, client portal, reports, search, appointments and the dashboard) around rules with hard edges, encoded so that violating one fails to compile or fails loudly at a boundary rather than producing a quietly wrong number. A live demo signs you in as any of six roles, each able to do strictly less than the one above it.",
      techDetails:
        "Next.js 16 and React 19 on Effect 3.22 end to end: errors are values in the type signature, dependencies are injected as Layers so there is no mocking framework in the repository, and TestClock makes statutory deadline computation instant and deterministic. effect/Schema is the single source for parsing, types, DB mapping and form constraints; Neon Postgres via @effect/sql-pg holds invariants as constraints including one trigger; Better Auth keeps sessions as rows we own; documents live in private Vercel Blob. Every service requires a CurrentUser in its type, so an unauthorized read does not compile. Architecture boundaries are declared in eslint.boundaries.mjs and turned into no-restricted-imports rules, so a service reaching into infra/ fails CI, and a test reads the linter's own boundary table and fails if the architecture diagram claims a dependency the linter forbids.",
      results:
        "Live demo with one-click sign-in across six roles, backed by 1,147 unit tests, 49 integration tests against real Postgres, 29 end-to-end browser specs, 14 architecture decision records, and WCAG 2.2 AA contrast measured from the stylesheet rather than sampled from a screenshot. Source-available: readable and licensable, with commercial use by written permission.",
      challenges:
        "A rule enforced in one place is not enforced. Rule 10 on client money lives in the domain, in a database trigger, in a repository translation, and in the ordering of two writes inside one transaction. Remove any one and the system is correct in testing and wrong on a busy afternoon. The costliest failures were the silent ones: an undefined CSS custom property is not an error, so two chart bars drew in nothing on a page whose figures had already been verified in a browser, and both were only ever found by parsing the stylesheet in a test. Deciding which way a flag should fail took longer than making it conditional. DEMO_DEPLOYMENT defaults to off so an unset variable, a misspelt one, and a deployment made by somebody who never read the README all mean a real installation with the demo affordances absent, because the reverse publishes a one-click administrator login.",
    },
  },
  {
    slug: "flori-core-enterprise-os",
    title: "Flori-Core Enterprise OS",
    description:
      "Production-grade, multi-tenant Agri-ERP for high-altitude floriculture, connecting IoT field sensors with logistics and market operations through a unified backend with an AI assistant and real-time monitoring.",
    image: "/assets/flori-dashboard.jpg",
    tags: ["NestJS", "Next.js", "TypeScript", "Prisma", "TimescaleDB", "MQTT", "Socket.io"],
    href: "https://flori-core-web.vercel.app/dashboard",
    github: "https://github.com/youneedgreg/Flori-Core-Enterprise-OS",
    size: "large",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: [
      "/assets/flori-dashboard.jpg",
      "/assets/flori-cold-room.jpg",
      "/assets/flori-pack-house.jpg",
      "/assets/flori-logistics.jpg",
      "/assets/flori-sales.jpg",
    ],
    openSource: true,
    categories: ["full-stack", "backend", "ai-ml"],
    caseStudy: {
      problem:
        "High-altitude floriculture operations run physical field sensors, labour, spray logs, pack house, procurement, and export documentation as disconnected systems with no real-time visibility.",
      approach:
        "Built a multi-tenant 'Farm Operating System' connecting IoT field sensors to logistics and market operations through a unified backend, with real-time WebSocket gateways and an AI assistant.",
      techDetails:
        "NestJS 11 + Next.js 16 monorepo (Turborepo) with Prisma across 22 migrations covering telemetry, labour, spray logs, pack house, procurement, export docs, and CRM; MQTT v5 via EMQX ingests cold-room sensor data into TimescaleDB for time-series compliance reporting; Socket.io gateway streams live operational events; a Claude tool-use assistant over tenant-scoped data tools with Mistral fallback, a per-tenant token budget and a bounded tool loop; automation jobs for hourly low-stock scans that raise purchase requests, daily compliance-expiry reminders and a daily per-tenant insights digest; Redis, AWS S3, and Sentry error monitoring.",
      results:
        "Live demo with one-click sign-in across eight roles (managing director, HR manager, financial controller, head of production, QC lead, stores manager, export sales lead and lead driver) over sixteen modules spanning farm zones, production, operations, pack house, cold room, team, HR and training, logistics, inventory, stores, procurement, sales and CRM, compliance and financials, backed by 22 Prisma migrations.",
      challenges:
        "Ingesting high-frequency MQTT cold-room sensor data into TimescaleDB without dropping readings during connectivity gaps at remote high-altitude field sites, buffering and backfilling on reconnect, while keeping the Socket.io live dashboard responsive and the 22-migration schema coherent across telemetry, labour, spray logs, and export docs.",
    },
  },
  {
    slug: "terry-masila-portfolio",
    title: "Terry Masila Portfolio",
    description:
      "An editorial portfolio site for a fashion model (hero, gallery archive, client list, measurements and representation) where the owner signs in and edits every line of copy and swaps every photograph in place on the live page.",
    image: "/assets/terry-portfolio-hero.jpg",
    tags: ["TanStack Start", "React 19", "TypeScript", "Appwrite", "Tailwind CSS v4", "Radix UI", "Zod"],
    href: "https://terry-portifolio-chi.vercel.app",
    github: "https://github.com/youneedgreg/terry-portifolio",
    size: "medium",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: ["/assets/terry-portfolio-hero.jpg", "/assets/terry-portfolio-measurements.jpg"],
    openSource: true,
    categories: ["frontend", "seo"],
    client: true,
    caseStudy: {
      problem:
        "A model's book changes faster than a developer can be booked to change it: a new campaign, a dropped client, a revised set of measurements. A portfolio that needs a redeploy for each edit is out of date the week it ships.",
      approach:
        "Built the site so its owner maintains it. Every heading, paragraph and measurement is an editable text node and every photograph is an image slot; signing in at the owner route turns the live page itself into the editor, so there is no separate admin dashboard to design, learn or keep in sync with the front end. Content, clients, social links and photographs live in Appwrite collections with a storage bucket behind them, and the page falls back to a typed set of defaults for any key the database has not been given yet, so the site renders complete before a single record exists.",
      techDetails:
        "TanStack Start with server-side rendering on React 19, TanStack Router for file-based routes and TanStack Query for data, built by Vite 8 and styled with Tailwind CSS v4 over Radix UI primitives; Appwrite supplies database, authentication and file storage through a single typed client; Zod and TypeScript carry types end to end; a server route proxies storage files behind the site's own origin, rejecting any path containing '..' before redirecting, so image URLs never leak bucket structure, and sitemap.xml is generated as a route rather than a build artefact.",
      results:
        "Live and deployed, with the editorial front end, gallery and client pages, owner authentication and in-place editing all working against Appwrite; the photograph archive is awaiting the model's content upload.",
      challenges:
        "Deciding where 'editable' stops. Making text editable in place is straightforward; making it editable only for the owner, without shipping edit affordances or a second render path to every visitor, meant the owner check had to resolve before the page committed to a layout, and a session probe that fails is the normal case, not an error, since almost every visitor is not signed in.",
    },
  },
  {
    slug: "save-it",
    title: "Save-It",
    description:
      "An 11-module personal finance suite (transactions, accounts, budgets, bills, savings goals, debts, loans, assets, wishlist and habits) with an analytics dashboard visualizing income and expenses.",
    image: "/assets/saveitphoto.png",
    tags: ["Next.js", "TypeScript", "Supabase", "shadcn/ui", "Recharts"],
    href: "https://savee-it.vercel.app/",
    github: "https://github.com/youneedgreg/Save-it",
    featured: true,
    size: "large",
    year: "2025",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: ["/assets/saveitphoto.png"],
    openSource: true,
    categories: ["full-stack"],
    caseStudy: {
      problem:
        "Many people track spending across scattered apps, spreadsheets, and bank statements with no single view of their financial health.",
      approach:
        "Built an 11-module Next.js finance suite covering transactions, accounts, budgets, bills, savings goals, debts, loans, assets, wishlist, and habits, sharing a single transaction model across an interactive analytics dashboard.",
      techDetails:
        "Next.js App Router with TypeScript and Supabase for data and auth, shadcn/ui for the interface, and Recharts for budget and expense visualizations driven by a normalized transaction schema shared across all 11 modules.",
      results:
        "Shipped a fully responsive personal finance dashboard with real-time chart updates, deployed on Vercel.",
      challenges:
        "Designing a transaction model flexible enough to power 11 modules, from budgets and bills to debts, loans and habits, without duplicating logic across modules.",
    },
  },
  {
    slug: "pesapal-rdbms",
    title: "Pesapal RDBMS",
    description:
      "A relational database engine built entirely from scratch in Python with zero external dependencies: a custom SQL parser, query executor, hash-based indexing, and an interactive REPL with a web demo.",
    image: "/assets/pesapal-repl.jpg",
    tags: ["Python", "SQL", "Systems Programming"],
    github: "https://github.com/youneedgreg/pesapal",
    size: "small",
    year: "2026",
    role: "Backend Developer (Solo)",
    status: "source-available",
    gallery: ["/assets/pesapal-repl.jpg", "/assets/pesapal-web.jpg"],
    openSource: true,
    categories: ["systems", "backend", "data"],
    caseStudy: {
      problem:
        "Understanding how relational databases work under the hood means building the pieces most developers never touch: the parser, planner, and storage engine.",
      approach:
        "Built a relational database engine from scratch in Python using only the standard library, for the Pesapal JDEV26 Developer Challenge.",
      techDetails:
        "Custom SQL parser and AST-driven query executor; hash-indexed JSON-backed persistent storage; supports CREATE TABLE, INSERT, SELECT (with JOIN and WHERE), UPDATE, and DELETE with type coercion and constraint checking; interactive REPL plus a Flask web demo.",
      results: "Shipped a working SQL engine with JOINs, indexing, and a REPL, built entirely on the Python standard library.",
      challenges:
        "Implementing JOINs, WHERE filtering, and type coercion on top of a hand-rolled hash index using only the Python standard library (no parser generator, no ORM), and keeping the JSON-backed storage consistent across crashes without a real write-ahead log.",
    },
  },
  {
    slug: "chati-ai",
    title: "Chati AI",
    description:
      "AI-powered mental health chatbot built on a Mistral-based model through OpenRouter, with mood tracking, journaling, and mini-games. NextAuth authentication with NeonDB serverless Postgres and Prisma ORM.",
    image: "/assets/chatiphoto.png",
    tags: ["Next.js", "OpenRouter", "Mistral", "Prisma", "NeonDB", "NextAuth"],
    href: "https://chati-ai.vercel.app/",
    github: "https://github.com/youneedgreg/chati",
    featured: true,
    size: "large",
    year: "2025",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: ["/assets/chatiphoto.png"],
    openSource: true,
    categories: ["full-stack", "ai-ml"],
    caseStudy: {
      problem:
        "Access to mental health support is limited, and stigma or cost keeps many people from seeking help early.",
      approach:
        "Built an AI-powered chatbot for supportive conversations, paired with mood tracking, journaling, and mini-games to encourage healthy daily habits.",
      techDetails:
        "Next.js 15 with a Mistral-based model (DeepHermes 3) through OpenRouter for conversational responses and Hugging Face Inference for search, NextAuth for authentication, NeonDB serverless Postgres with Prisma ORM for conversation history and mood logs, and Framer Motion for transitions across a calm, accessible UI.",
      results:
        "Shipped a working chatbot with mood tracking and journaling, deployed and free for users to access.",
      challenges:
        "Keeping conversations supportive and on-topic with a free-tier hosted model, while keeping latency low enough for natural back-and-forth chat.",
    },
  },
  {
    slug: "notification-system",
    title: "Notification System",
    description:
      "5-service microservices monorepo for email and push notifications. An API Gateway routes to User, Email, Push, and Template services via RabbitMQ with dead-letter queues, circuit breakers, and full observability.",
    image: "/assets/notification-architecture.jpg",
    tags: ["NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/youneedgreg/notification-system",
    size: "medium",
    year: "2026",
    role: "Backend Developer (Solo)",
    status: "source-available",
    gallery: ["/assets/notification-architecture.jpg", "/assets/notification-message-flow.jpg"],
    openSource: true,
    categories: ["backend", "microservices"],
    caseStudy: {
      problem:
        "Notification delivery across email and push channels needs to be reliable and observable even when downstream providers fail or degrade.",
      approach:
        "Built a NestJS monorepo of 5 independently deployable services (API Gateway, User, Email, Push and Template) orchestrated via Docker Compose and reverse-proxied through Nginx.",
      techDetails:
        "All inter-service communication via RabbitMQ AMQP with dead-letter queues and configurable retry logic; circuit breaker (opossum) on every downstream call with open/half-open/closed states; correlation ID injection at the gateway for full distributed tracing; Firebase Admin (FCM) for push; Prometheus + Grafana monitoring stack deployed from checked-in config; Swagger API docs.",
      results: "Shipped a working 5-service platform with dead-letter retry, circuit breaking, and a live Grafana monitoring stack.",
      challenges:
        "Guaranteeing at-least-once delivery without double-sending when a downstream email or push provider fails mid-flight: tuning dead-letter retry, circuit-breaker open/half-open thresholds, and idempotency keys so retries never notified a user twice, and threading correlation IDs through every service to make failures traceable in Grafana.",
    },
  },
  {
    slug: "safari-os",
    title: "Safari OS",
    description:
      "End-to-end SaaS for a real safari operator: bookings, costing engine, CRM, itinerary builder, invoicing and supplier management, with AI-driven automation (WhatsApp concierge replies, passport and receipt OCR, itinerary drafting) and nine scheduled jobs.",
    image: "/placeholder.svg?height=400&width=600&text=Safari+OS",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Anthropic Claude", "Twilio"],
    github: "",
    size: "large",
    year: "2025–Present",
    role: "Full-Stack Developer (Solo)",
    status: "private",
    gallery: [],
    openSource: false,
    private: true,
    categories: ["full-stack", "ai-ml"],
    client: true,
    caseStudy: {
      problem:
        "Safari operators run bookings, pricing, supplier coordination, and client communication across spreadsheets, WhatsApp, and email, with no single system tying it together.",
      approach:
        "Building an end-to-end ERP for a real safari company covering bookings, a costing engine, CRM, itinerary builder, invoicing, and supplier management (over 30 Prisma models), with Claude (Mistral fallback) automating the text-heavy work: itinerary drafting, OCR and PDF extraction, translation, marketing copy and WhatsApp replies. Conversion scoring and anomaly detection are rule-based so they stay explainable, with Claude writing the summary.",
      techDetails:
        "Next.js 16 with Prisma and PostgreSQL; JWT sessions with OTP and three-role RBAC (Admin/Ops/Guide); Twilio WhatsApp integration across 14 message types with real-time delivery receipts; PDF/DOCX document generation via PDFKit and an AI content studio generating marketing copy in 5 languages across 6 channels; Vercel Cron for scheduled jobs.",
      results: "In active development for a real safari operator. Full write-up and demo coming once the platform is live.",
      challenges:
        "Keeping the costing engine accurate across multi-currency quotes, seasonal supplier rates, and per-person markups while modeling over 30 interrelated Prisma entities; and keeping AI at the edge of the workflow: rule-based scores the model only explains, provider failover so a slow or unavailable model never blocks a booking, and signed Twilio webhooks plus fail-closed cron auth so the automations cannot be triggered by anyone else.",
    },
  },
  {
    slug: "motion-studio",
    title: "motion-studio",
    description:
      "A studio for making motion graphics with Claude, where every video is a program: a frame-accurate renderer, synthesized scores, automated checks on every film, a Claude Code skill that runs the whole pipeline, and an eight-lesson course with a companion website.",
    image: "/assets/motion-studio-home.jpg",
    tags: ["Next.js", "TypeScript", "Playwright", "FFmpeg", "Python", "Claude Code"],
    href: "https://motionstudio-web.vercel.app",
    github: "https://github.com/youneedgreg/motion-studio",
    featured: true,
    size: "medium",
    year: "2026",
    role: "Developer (Solo)",
    status: "live",
    gallery: [
      "/assets/motion-studio-home.jpg",
      "/assets/motion-studio-film.jpg",
      "/assets/motion-studio-tests.jpg",
      "/assets/motion-studio-lesson.jpg",
    ],
    openSource: true,
    categories: ["frontend", "ai-ml"],
    caseStudy: {
      problem:
        "Motion videos made with Claude were all over my feed, but the guides behind them mixed real technique with claims nobody had checked, and a model that can't watch video or hear audio has no way to tell whether its own film is in sync or readable on a phone.",
      approach:
        "Built a small studio where each film is a web page with one pure function, seek(t), that paints the exact frame for time t. Playwright's Chromium renders every frame and FFmpeg encodes them, scores are synthesized on the film's own beat grid, and every claim from the article I learned from was checked against primary sources across eight lessons.",
      techDetails:
        "A renderer with parallel workers, a network sandbox and explicit BT.709 color, streaming frames straight into FFmpeg; tools/check.py measures determinism, per-cue audio and visual sync, loudness, text clipping and minimum text size on phones; closed-form springs tested against the ODE; a determinism hook and a /motion-film skill for Claude Code. The companion site is a static Next.js export generated from the repo: films with their check reports, lessons with quizzes, and a page on what each test proves and what it doesn't.",
      results:
        "Four films, the latest a 32 s Safari OS launch film rendered at 16:9, 9:16 and 1:1 from one timeline with all 51 sound cues landing within one frame of the picture. The code, course and films are open source, and the site is live.",
      challenges:
        "A check only proves what it measures: several bugs passed every automated check until a person looked or a new check was written, from text clipped inside passing shapes to a render that only failed in a fresh clone.",
    },
  },
  {
    slug: "spine-platform",
    title: "Spine: Property & Business SaaS",
    description:
      "Multi-tenant property and business management SaaS: 5 Next.js apps (mall, farm, biz, super-dashboard, tenant portal) in a Turborepo monorepo with AI chat, PDF reporting, and tenant-isolated data.",
    image: "/placeholder.svg?height=400&width=600&text=Spine+Platform",
    tags: ["Next.js", "TypeScript", "Supabase", "Turborepo", "Mistral"],
    github: "",
    size: "large",
    year: "2025–Present",
    role: "Full-Stack Developer (Solo)",
    status: "private",
    gallery: [],
    openSource: false,
    private: true,
    categories: ["full-stack", "backend"],
    caseStudy: {
      problem:
        "Property and business operators (malls, farms, and multi-location businesses) need tenant-isolated dashboards, reporting, and AI assistance without standing up separate infrastructure per client.",
      approach:
        "Built a multi-tenant SaaS as 5 Next.js apps (mall, farm, biz, super-dashboard, and tenant portal) in a Turborepo monorepo, with Supabase row-level security isolating each tenant's data.",
      techDetails:
        "Turborepo + npm workspaces across 5 Next.js 14 apps; Supabase RLS for tenant isolation; Deno Edge Functions and pg_cron for scheduled automation (invoicing, rent reminders, penalties, lease expiry); a Mistral tool-calling assistant over live mall data with role-scoped tools, user confirmation and server-side re-authorisation for write actions, and AI_ACTION audit logging; payments recorded through an atomic, idempotent Postgres RPC; @react-pdf/renderer for report generation; Apache Superset for analytics dashboards.",
      results: "Running across multiple internal apps in active development. Full write-up and demo coming soon.",
      challenges:
        "Enforcing strict tenant isolation across 5 apps sharing one Supabase instance: getting row-level security policies right so no query could ever leak data between tenants, while keeping shared Turborepo packages, types, and Supabase migrations in sync so a change in one app didn't silently break the others.",
    },
  },
  {
    slug: "compono-ui-builder",
    title: "Compono UI Builder",
    description:
      "A visual drag-and-drop builder for shadcn/ui components with real-time WYSIWYG editing, device previews, Tiptap rich-text editing, and live TypeScript + Tailwind CSS code generation.",
    image: "/assets/componophoto.png",
    tags: ["Next.js", "React 19", "TypeScript", "@dnd-kit", "Tiptap", "PostHog"],
    href: "https://compono.vercel.app/",
    github: "https://github.com/youneedgreg/compono",
    size: "medium",
    year: "2025",
    role: "Frontend Developer (Solo)",
    status: "live",
    gallery: ["/assets/componophoto.png"],
    openSource: true,
    categories: ["frontend"],
    caseStudy: {
      problem:
        "Prototyping UIs with shadcn/ui components usually means writing the same boilerplate repeatedly before seeing a result.",
      approach:
        "Built a visual drag-and-drop builder for shadcn/ui components with real-time WYSIWYG editing, device previews, and one-click export to clean TypeScript + Tailwind code via a Babel/Prettier pipeline.",
      techDetails:
        "Next.js 15 with React 19 and TypeScript, @dnd-kit for drag-and-drop component placement, Tiptap for rich-text editing, device previews (desktop/tablet/mobile), a Babel/Prettier pipeline generating clean TypeScript + Tailwind code on export, and PostHog for usage analytics.",
      results: "Shipped a working visual builder that exports ready-to-use shadcn component code.",
      challenges:
        "Keeping the live preview in sync with builder state changes in real time without re-rendering the whole canvas.",
    },
  },
  {
    slug: "chessy",
    title: "Chessy",
    description:
      "A chess training platform that runs Stockfish (WASM) in a Web Worker for instant move analysis, opening book review, move classification, and principled correction.",
    image: "/assets/chessy-home.jpg",
    tags: ["Next.js", "TypeScript", "chess.js", "Stockfish.js", "Zustand"],
    github: "https://github.com/youneedgreg/chessy",
    size: "medium",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: ["/assets/chessy-home.jpg"],
    openSource: true,
    categories: ["frontend"],
    caseStudy: {
      problem:
        "Most chess apps just show you a board. They don't explain why a move was wrong or how to think about the position better next time.",
      approach:
        "Built a training platform that runs Stockfish compiled to WASM inside a Web Worker, so every move gets instant engine analysis without blocking the UI.",
      techDetails:
        "Next.js 16 with TypeScript, chess.js for game state and move validation, Stockfish.js (WASM) in a Web Worker for analysis, Zustand for app state, and opening book lookups for move classification and correction.",
      results: "Shipped a working trainer with instant move feedback and opening book analysis, containerized with Docker.",
      challenges:
        "Marshalling positions to and from the Stockfish WASM engine in a Web Worker without blocking the main thread or leaking workers between games, and classifying moves meaningfully by reconciling raw engine evaluations against opening-book theory so feedback explained the 'why', not just a centipawn score.",
    },
  },
  {
    slug: "unilender",
    title: "Unilender",
    description:
      "Loan management and investment prototype built with Next.js and Supabase for authentication and secure financial interactions.",
    image: "/assets/unilenderphoto.png",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    href: "https://unilender.vercel.app/",
    github: "https://github.com/youneedgreg/unilender",
    featured: true,
    size: "large",
    year: "2024",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: ["/assets/unilenderphoto.png"],
    openSource: true,
    categories: ["full-stack"],
    caseStudy: {
      problem:
        "Small lending and investment platforms need secure, auditable flows for loans and investor activity without building auth and data infrastructure from scratch.",
      approach:
        "Built a loan management and investment prototype on Next.js with Supabase handling authentication, the database, and row-level security for sensitive financial records.",
      techDetails:
        "Next.js with TypeScript on the front end, Supabase (PostgreSQL + Auth) for data and access control, Tailwind CSS for the UI, and server actions for loan and investment mutations.",
      results: "Delivered a working prototype demonstrating secure auth, loan tracking, and investment flows backed by PostgreSQL.",
      challenges:
        "Modeling loan and investment relationships in PostgreSQL with Supabase row-level security so each user could only access their own financial records.",
    },
  },
  {
    slug: "dapper-saint-streets",
    title: "Dapper Saint Streets",
    description:
      "A luxury streetwear e-commerce platform with full authentication, shopping cart, wishlist, admin dashboard, and 360° product views.",
    image: "/assets/dapper-saint-landing.jpg",
    tags: ["React", "Vite", "Supabase", "TanStack Query", "Zod", "Framer Motion"],
    github: "https://github.com/youneedgreg/dapper-saint-streets",
    size: "medium",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: ["/assets/dapper-saint-landing.jpg"],
    openSource: true,
    categories: ["full-stack"],
    caseStudy: {
      problem:
        "Streetwear brands need an e-commerce experience that feels as premium as the product, not a generic storefront template.",
      approach:
        "Built a full luxury e-commerce platform with an editorial homepage, 360° product viewer, slide-out cart, wishlist, and an admin dashboard for managing inventory.",
      techDetails:
        "React 18 with Vite, Supabase for auth, product data, and media storage, TanStack Query for server state, and Zod + React Hook Form for validated checkout, with Framer Motion transitions throughout.",
      results: "Shipped a full storefront with cart, wishlist, 360° product views, and an admin dashboard.",
      challenges:
        "Building a smooth 360° product viewer that preloads its frame sequence without janking or blowing up data usage on mobile, while keeping cart, wishlist, and auth state consistent across TanStack Query caches and Supabase real-time updates.",
    },
  },
  {
    slug: "framez",
    title: "Framez",
    description:
      "A cross-platform React Native social app with a feed, post creation with image uploads, profiles, search, and settings, built with Expo and Supabase.",
    image: "/placeholder.svg?height=400&width=600&text=Framez",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    github: "https://github.com/youneedgreg/framez_app",
    size: "medium",
    year: "2025",
    role: "Mobile Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    categories: ["mobile"],
    caseStudy: {
      problem:
        "Building a social app that feels native on both iOS and Android usually means maintaining two codebases.",
      approach:
        "Built a cross-platform social app (feed, post creation with image upload, profiles, search and settings) with stack and tab navigation via React Navigation.",
      techDetails:
        "React Native with Expo and TypeScript, Supabase for auth, database, and file storage, and EAS for the production build and distribution pipeline.",
      results: "Shipped a working social app with image-upload posts and profile feeds, built for EAS production distribution.",
      challenges:
        "Handling image uploads reliably on flaky mobile networks: compressing files and recovering from interrupted uploads to Supabase storage, while keeping the feed in sync and the UI consistent across both the iOS and Android Expo builds.",
    },
  },
  {
    slug: "mtaamall-mvp",
    title: "MtaaMall MVP",
    description:
      "Full-stack e-commerce marketplace connecting clients and local businesses with real-time dashboards and analytics.",
    image: "/assets/mtaamallphoto.png",
    tags: ["React", "Node.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    href: "https://business-mtaamall.vercel.app/",
    github: "https://github.com/youneedgreg/Mtaamall-client-production",
    size: "large",
    year: "2024",
    role: "Full-Stack Contributor (Internship)",
    status: "live",
    gallery: ["/assets/mtaamallphoto.png"],
    openSource: false,
    categories: ["full-stack"],
    caseStudy: {
      problem:
        "Local businesses in underserved markets lacked a digital storefront and analytics tools to reach customers online.",
      approach:
        "Contributed to a full-stack e-commerce marketplace MVP connecting clients and local businesses, building real-time dashboards and analytics for vendors.",
      techDetails:
        "React front end, Node.js/Express backend, MongoDB for product and order data, and real-time dashboard widgets for vendor analytics, deployed on Vercel.",
      results:
        "Helped ship a working MVP marketplace used to onboard local businesses, with vendor-facing analytics dashboards.",
      challenges:
        "Designing real-time dashboard updates for vendors across a shared MongoDB data layer while the product was actively evolving.",
    },
  },
  {
    slug: "ticketflow-multi-framework",
    title: "TicketFlow Multi-Framework",
    description:
      "A multi-framework ticketing app built in React, Vue, and Twig, designed to replicate consistent functionality across different front-end stacks.",
    image: "/assets/ticketphoto.png",
    tags: ["React", "Vue", "PHP", "Twig", "Tailwind CSS"],
    href: "https://ticket-management-multiframework.vercel.app/",
    github: "https://github.com/youneedgreg/ticket-management-multiframework",
    size: "medium",
    year: "2025",
    role: "Full-Stack Developer (Team)",
    status: "live",
    gallery: ["/assets/ticketphoto.png"],
    openSource: false,
    categories: ["frontend", "backend"],
    caseStudy: {
      problem:
        "Teams evaluating frontend frameworks need a like-for-like comparison of the same product built across different stacks.",
      approach:
        "Built the same ticket management application three times, in React, Vue and Twig, sharing the same feature set (auth, CRUD, dashboards) to compare developer experience and output across stacks.",
      techDetails:
        "React and Vue.js single-page front ends sharing a common design language, a PHP/Twig server-rendered version, Tailwind CSS across all three, and consistent auth and CRUD flows implemented per framework's idioms.",
      results:
        "Produced three functionally equivalent ticketing apps, built collaboratively using Agile workflows during the HNG internship.",
      challenges:
        "Keeping feature parity and visual consistency across three very different rendering models: two SPAs and a server-rendered template engine.",
    },
  },
  {
    slug: "country-currency-exchange-api",
    title: "Country Currency & Exchange API",
    description:
      "RESTful API combining country and currency data with live exchange rates, GDP estimates, caching, and CRUD operations for analytics.",
    image: "/assets/countriesphoto.png",
    tags: ["Node.js", "Express.js", "MySQL", "Axios", "Jimp"],
    href: "https://country-currency-api-production-cf68.up.railway.app/",
    github: "https://github.com/youneedgreg/country-currency-api",
    size: "small",
    year: "2024",
    role: "Backend Developer (Solo)",
    status: "live",
    gallery: ["/assets/countriesphoto.png"],
    openSource: true,
    categories: ["backend"],
    caseStudy: {
      problem:
        "Apps that need country and currency data often have to stitch together multiple inconsistent third-party APIs.",
      approach:
        "Built a unified REST API combining country metadata, currency info, and live exchange rates, with a caching layer to reduce upstream calls and full CRUD endpoints for analytics.",
      techDetails:
        "Node.js and Express for the API, MySQL for persistence, Axios for upstream exchange-rate requests, Jimp for processing flag images, and a TTL-based cache to stay within rate limits.",
      results:
        "Deployed a production API on Railway serving combined country, currency, exchange-rate, and GDP-estimate data.",
      challenges:
        "Balancing freshness of live exchange rates against upstream rate limits, solved with a TTL-based caching layer.",
    },
  },
  {
    slug: "2day-habit-builder",
    title: "2day - Habit Builder",
    description:
      "A productivity and habit-tracking app featuring tasks, reminders, analytics, and notes with smooth animations and offline persistence.",
    image: "/assets/2dayyphoto.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Framer Motion"],
    href: "https://2dayy.vercel.app/",
    github: "https://github.com/youneedgreg/2day",
    size: "medium",
    year: "2025",
    role: "Frontend Developer (Solo)",
    status: "live",
    gallery: ["/assets/2dayyphoto.png"],
    openSource: true,
    categories: ["frontend"],
    caseStudy: {
      problem:
        "Habit trackers often feel clunky or get abandoned because logging progress takes too much friction-filled effort.",
      approach:
        "Designed a fast, animation-driven habit and task tracker with reminders, analytics, and notes, backed by offline persistence so it keeps working without a connection.",
      techDetails:
        "Next.js with TypeScript and shadcn/ui components, Framer Motion for micro-interactions on every interaction, and local-storage-backed state for offline-first usage.",
      results:
        "Delivered a polished, responsive productivity app with smooth animations and offline support.",
      challenges:
        "Keeping the UI snappy with Framer Motion animations on every interaction without hurting performance on lower-end devices.",
    },
  },
  {
    slug: "backend-wizards",
    title: "Backend Wizards",
    description:
      "Node.js microservice that performs string analysis, pattern detection, hashing, and storage, demonstrating backend logic and cryptography.",
    image: "/assets/stringphoto.png",
    tags: ["Node.js", "Express", "MongoDB", "Crypto.js"],
    href: "https://backend-wizards-stage1-production.up.railway.app/",
    github: "https://github.com/youneedgreg/backend-wizards-stage1",
    size: "small",
    year: "2024",
    role: "Backend Developer (Solo)",
    status: "live",
    gallery: ["/assets/stringphoto.png"],
    openSource: true,
    categories: ["backend", "microservices"],
    caseStudy: {
      problem:
        "Wanted a hands-on demonstration of core backend skills: string processing, pattern detection, and secure hashing and storage.",
      approach:
        "Built a Node.js microservice exposing endpoints for string analysis, pattern detection, and cryptographic hashing, backed by MongoDB for storage.",
      techDetails:
        "Express.js for routing, Crypto.js for hashing and encryption operations, and MongoDB for persisting analysis results.",
      results:
        "Deployed a working microservice on Railway demonstrating backend algorithms and cryptography fundamentals.",
      challenges:
        "Designing clean, composable endpoints for string-analysis operations that could be chained without duplicating logic.",
    },
  },
  {
    slug: "hate-speech-classifier",
    title: "Hate Speech Classifier",
    description:
      "A machine learning project detecting hate speech and offensive language using a Kenyan dataset, trained with scikit-learn and NLTK.",
    image: "/placeholder.svg?height=400&width=600&text=Hate+Speech+Classifier",
    tags: ["Python", "scikit-learn", "NLTK", "Pandas", "Matplotlib"],
    github: "https://github.com/youneedgreg/hate_speech",
    size: "small",
    year: "2024",
    role: "ML Engineer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    categories: ["ai-ml", "data"],
    caseStudy: {
      problem:
        "Online platforms in Kenya need automated tools to detect hate speech and offensive language in local-language contexts, where most off-the-shelf models underperform.",
      approach:
        "Trained and evaluated text classification models on a Kenyan-focused hate speech dataset using scikit-learn, with NLTK for preprocessing and Pandas/Matplotlib for analysis.",
      techDetails:
        "Python with scikit-learn for model training, NLTK for tokenization and cleaning, Pandas for dataset handling, and Matplotlib for visualizing class distributions and model performance.",
      results: "Full write-up with model performance metrics and a demo coming soon. Check back or follow the GitHub repo for progress.",
      challenges:
        "Handling code-switched Swahili–English text and local slang that standard English tokenizers mangle, and correcting for a heavily imbalanced dataset where neutral and offensive examples vastly outnumbered genuine hate speech, which skewed naive accuracy and forced a focus on precision and recall.",
    },
  },
  {
    slug: "fine-tuned-image-classifier",
    title: "Fine-Tuned Image Classifier",
    description:
      "Transfer learning project using MobileNetV2, ResNet, and VGG16 for image classification, improving accuracy through model fine-tuning.",
    image: "/placeholder.svg?height=400&width=600&text=Fine+Tuned+Image+Classifier",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github: "https://github.com/youneedgreg/fine_tuned",
    size: "small",
    year: "2024",
    role: "ML Engineer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    categories: ["ai-ml"],
    caseStudy: {
      problem:
        "Training image classifiers from scratch is data- and compute-intensive, especially for smaller, domain-specific datasets.",
      approach:
        "Applied transfer learning with MobileNetV2, ResNet, and VGG16 backbones, fine-tuning each on a target dataset and comparing accuracy and efficiency trade-offs.",
      techDetails:
        "Python with TensorFlow/Keras for model definition and training, OpenCV for image preprocessing, and a head-to-head comparison across the three architectures.",
      results: "Full write-up with accuracy comparisons across architectures coming soon. Check back or follow the GitHub repo for progress.",
      challenges:
        "Avoiding overfitting when fine-tuning large ImageNet backbones on a small target dataset: tuning how many layers to unfreeze and how low to drop the learning rate so the pretrained features survived, and keeping the comparison fair when MobileNetV2, ResNet, and VGG16 have very different parameter counts and memory footprints.",
    },
  },
  {
    slug: "titanic-survival-neural-network",
    title: "Titanic Survival Neural Network",
    description:
      "A neural network predicting Titanic passenger survival, with a tf.data pipeline, feature engineering, and categorical encoding.",
    image: "/placeholder.svg?height=400&width=600&text=Titanic+Survival+NN",
    tags: ["Python", "TensorFlow", "Keras", "Jupyter Notebook"],
    github: "https://github.com/youneedgreg/survived_unsurvived_ML",
    size: "small",
    year: "2025",
    role: "ML Engineer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    categories: ["ai-ml", "data"],
    caseStudy: {
      problem:
        "The Titanic dataset is a classic benchmark for practicing feature engineering and neural network design on tabular data with mixed types.",
      approach:
        "Built a neural network with a tf.data pipeline and TensorFlow feature columns to predict passenger survival from the Titanic dataset.",
      techDetails:
        "TensorFlow 2 / Keras with a tf.data input pipeline, categorical encoding via feature columns, and engineered features including age groups, fare brackets, and a family-size composite.",
      results: "Trained a working survival-prediction model with engineered features and categorical encoding.",
      challenges:
        "Preventing the network from overfitting such a small, noisy dataset, handling missing age and cabin values, and correctly wiring mixed categorical and numeric features through the tf.data pipeline without leaking information between the train and validation splits.",
    },
  },
  {
    slug: "motel-management-system",
    title: "Motel Management System",
    description:
      "A TypeScript-based motel management app handling bookings, occupancy tracking, and automated daily summaries with Prisma ORM.",
    image: "/assets/motel-login.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    github: "https://github.com/youneedgreg/Motel_management",
    size: "medium",
    year: "2025",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: ["/assets/motel-login.jpg"],
    openSource: true,
    categories: ["full-stack"],
    caseStudy: {
      problem:
        "Small motels and guesthouses often rely on paper logs or spreadsheets to track room occupancy, bookings, and daily revenue.",
      approach:
        "A TypeScript app for managing bookings, tracking occupancy in real time, and generating automated daily summary reports, built on Prisma ORM.",
      techDetails: "Next.js with TypeScript, Prisma ORM for the booking and occupancy schema, and Tailwind CSS for the admin dashboard.",
      results: "Full write-up and live demo coming soon. Check back or follow the GitHub repo for progress.",
      challenges:
        "Keeping occupancy state consistent when bookings, check-ins, and check-outs can overlap: modeling room availability so a single Prisma transaction blocks double-booking the same room for overlapping dates, and generating the daily summary correctly across day boundaries.",
    },
  },
  {
    slug: "myportfolio-website",
    title: "temwa.dev (this portfolio)",
    description:
      "The site you're on: a fast, keyboard-driven portfolio with filterable case studies, an MDX blog, a year-by-year journey, and a lab of interactive experiments, scoring 93–97 on mobile Lighthouse.",
    image: "/assets/portfolio-home.jpg",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    href: "https://temwa.dev",
    github: "https://github.com/youneedgreg/Myportifolio",
    size: "medium",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: ["/assets/portfolio-home.jpg", "/assets/portfolio-projects.jpg", "/assets/portfolio-lab.jpg"],
    openSource: true,
    categories: ["frontend", "seo"],
    caseStudy: {
      problem:
        "Portfolio sites often look templated and say little about how the person actually engineers. Mine had grown animation-heavy too: on a throttled phone the home page scored 38 on Lighthouse, with over two seconds of main-thread blocking.",
      approach:
        "Rebuilt it around four ideas: put the work up front, tease what's below, give people places to get lost, and show personality. The home page opens on real project screenshots; a filterable work page, an MDX blog, a journey timeline, /now, /uses and a lab sit behind it, and everything is reachable from ⌘K search or vim-style g-key shortcuts.",
      techDetails:
        "Next.js 16 (App Router, Turbopack) on React 19 and Tailwind CSS 4. Pages are server-rendered with small client islands; scroll effects run on CSS scroll timelines instead of JavaScript; the command palette, mobile menu and toasts load on first use; fonts are self-hosted Latin subsets. Blog posts are MDX with rehype-pretty-code, the journey and /uses chart are derived from the same project data, and a strict Content Security Policy, RSS and structured data ship with it.",
      results:
        "Mobile Lighthouse performance went from 38 to 93–97 across pages, with total blocking time down from 2.2 s to under 100 ms and layout shift near zero.",
      challenges:
        "Keeping the personality without paying for it: the motion that made the old site feel alive was the same JavaScript that made it slow, so each effect had to be rebuilt in CSS or loaded only when someone actually reaches for it.",
    },
  },
  {
    slug: "kikwetu-cultural-adventures",
    title: "Kikwetu Cultural Adventures",
    description:
      "The website for a safari and cultural tour operator: destination and package pages across Kenya, Tanzania, Uganda and Botswana, a safari enquiry form, a journal, and the technical SEO to be found on search.",
    image: "/assets/kikwetu-home.jpg",
    tags: ["HTML", "CSS", "JavaScript", "EmailJS", "SEO"],
    href: "https://kikwetuculturaladventures.com",
    github: "https://github.com/youneedgreg/kikwetu-new--site",
    size: "medium",
    year: "2026",
    role: "Web Developer (Client)",
    status: "live",
    gallery: ["/assets/kikwetu-home.jpg"],
    categories: ["frontend", "seo"],
    client: true,
    caseStudy: {
      problem:
        "A tour operator selling multi-day safaris needs travellers to find each trip on search and send an enquiry, not just admire a homepage.",
      approach:
        "Built a hand-coded multi-page site with one page per destination and experience (Great Migration, gorilla trekking, Big Five, balloon, honeymoon and cultural safaris), an enquiry form delivered through EmailJS, and a journal.",
      techDetails:
        "Static HTML with one stylesheet and a small script for the mobile menu, FAQ and enquiry form. sitemap.xml and robots.txt for search engines, and an .htaccess that handles redirects, HTTPS and caching, deployed to cPanel hosting.",
      results: "Live at kikwetuculturaladventures.com.",
    },
  },
  {
    slug: "webtech-solutions-website",
    title: "Webtech Solutions KE Website",
    description:
      "The official site for Webtech Solutions, a Nairobi digital agency: services, portfolio, blog, an AI lead-capture chat and interactive product demos, hand-coded with structured data and technical SEO throughout.",
    image: "/assets/webtech-home.jpg",
    tags: ["HTML", "CSS", "JavaScript", "JSON-LD", "SEO"],
    href: "https://webtechsolutionske.com",
    github: "https://github.com/youneedgreg/webtech-solutions-website-redo",
    size: "medium",
    year: "2026",
    role: "Web Developer",
    status: "live",
    gallery: ["/assets/webtech-home.jpg"],
    categories: ["frontend", "seo"],
    client: true,
    caseStudy: {
      problem:
        "An agency that sells web and SEO work has to rank for those services itself, and turn the visitors it gets into leads.",
      approach:
        "Rebuilt the site as hand-coded pages: a service catalogue with an anchor per offering, a portfolio, a blog with client-side topic filters, a contact page with an FAQ, an AI lead-capture chat on the home and contact pages, and demo pages for the agency's products.",
      techDetails:
        "Per-page titles, descriptions, canonicals and social cards. JSON-LD for ProfessionalService, WebSite, BreadcrumbList, ItemList, Blog and FAQPage. A sitemap with clean URLs, robots.txt, and an .htaccess for HTTPS and non-www redirects, extension-less URLs, gzip, caching, security headers and a custom 404.",
      results: "Live at webtechsolutionske.com.",
    },
  },
  {
    slug: "oklaw-firm-website",
    title: "Odhiambo & Kathyaka Advocates Website",
    description:
      "The public website for the law firm behind OKLaw: practice areas, team profiles, insights articles and careers, ported from a single-file design mockup into a Next.js site where every page has its own URL and prerenders as static HTML.",
    image: "/assets/oklaw-website.jpg",
    tags: ["Next.js", "TypeScript", "SEO"],
    href: "https://oklaw-new-website.vercel.app",
    github: "https://github.com/youneedgreg/oklaw-new-website",
    size: "medium",
    year: "2026",
    role: "Frontend Developer (Client)",
    status: "live",
    gallery: ["/assets/oklaw-website.jpg"],
    categories: ["frontend", "seo"],
    client: true,
    caseStudy: {
      problem:
        "The design arrived as a single-file mockup with ten client-side pages: no URLs, no metadata, nothing a search engine could index.",
      approach:
        "Turned each mock page into a real route (home, about, practice areas, team and partner profiles, insights articles, careers, contact), each with its own URL and metadata.",
      techDetails:
        "Next.js App Router. All sixteen routes, including robots.txt, sitemap.xml, the icon and the 404, prerender to static HTML at build time.",
      results: "Live on Vercel.",
    },
  },
  {
    slug: "flori-core-website",
    title: "Flori-Core Marketing Site",
    description:
      "The marketing site for Flori-Core Enterprise OS, rebuilt from a design canvas as a statically prerendered Next.js 16 app with SEO as the organising constraint.",
    image: "/assets/flori-core-website.jpg",
    tags: ["Next.js", "TypeScript", "SEO"],
    href: "https://flori-core-website.vercel.app",
    github: "https://github.com/youneedgreg/flori-core-website",
    size: "small",
    year: "2026",
    role: "Frontend Developer (Solo)",
    status: "live",
    gallery: ["/assets/flori-core-website.jpg"],
    categories: ["frontend", "seo"],
    caseStudy: {
      problem: "The product needed a site that search engines and buyers can read without running any JavaScript.",
      approach:
        "Rewrote the design canvas as a Next.js App Router site where every route prerenders, with canonical, social and sitemap URLs all resolving from one configured origin.",
      techDetails:
        "Next.js 16, statically prerendered; Organization and WebSite JSON-LD in the root layout; a single site-URL setting that every page, sitemap entry and social card reads.",
      results: "Live on Vercel, alongside the Flori-Core product it markets.",
    },
  },
  {
    slug: "safari-os-website",
    title: "Safari OS Marketing Site",
    description:
      "The marketing site for Safari OS, ported from a client-rendered design prototype to a statically rendered Next.js site with one URL per page, real links, and per-page titles, descriptions and canonicals.",
    image: "/assets/safari-os-website.jpg",
    tags: ["Next.js", "TypeScript", "SEO"],
    href: "https://safari-os-website.vercel.app",
    github: "https://github.com/youneedgreg/safari-os-website",
    size: "small",
    year: "2026",
    role: "Frontend Developer (Solo)",
    status: "live",
    gallery: ["/assets/safari-os-website.jpg"],
    categories: ["frontend", "seo"],
    caseStudy: {
      problem:
        "The prototype was a single-URL single-page app: three pages behind React state, navigated by clicks on spans, with no title, meta description or server-rendered HTML.",
      approach:
        "Rebuilt it with one prerendered URL per page (home, features, contact), real link navigation with the active page marked, a demo request form, and a generated Open Graph image.",
      techDetails:
        "Next.js App Router; page copy and the route table live in one place that every SEO surface reads; robots, sitemap, icon and JSON-LD generated from it.",
      results: "Live on Vercel.",
    },
  },
  {
    slug: "biosystems-medical-marketplace",
    title: "BIOSYSTEMS Medical Marketplace",
    description:
      "A medical equipment and supplies marketplace connecting hospitals, clinics, pharmacies and NGOs with verified suppliers, with separate experiences for buyers, suppliers and administrators.",
    image: "/assets/biosystems-home.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "shadcn/ui"],
    href: "https://biosystems.vercel.app",
    github: "https://github.com/youneedgreg/hospital-equipments-store",
    size: "medium",
    year: "2025",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: ["/assets/biosystems-home.jpg"],
    categories: ["full-stack"],
    caseStudy: {
      problem:
        "Buyers of medical supplies source from scattered suppliers with little way to tell who is verified.",
      approach:
        "Built a marketplace with three roles. Buyers browse, filter, order and track; suppliers manage listings, inventory and orders behind a KYC verification step; administrators approve suppliers, moderate products and monitor orders.",
      techDetails:
        "Next.js 16 App Router and TypeScript on Supabase (Postgres, Auth and Storage), with middleware guarding each role's dashboard.",
      results: "Live on Vercel with seeded demo data.",
    },
  },
  {
    slug: "agrowatch",
    title: "AgroWatch",
    description:
      "Weather and canopy intelligence for farmers: a 7-day forecast with AI summaries, AI canopy-health reports from aerial images, and a deterministic engine that fuses both into prioritised risk alerts.",
    image: "/assets/agrowatch-home.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Leaflet", "Vitest"],
    href: "https://agro-watch-weather-ai.vercel.app",
    github: "https://github.com/youneedgreg/Agro-watch---weather-ai",
    size: "medium",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: ["/assets/agrowatch-home.jpg"],
    categories: ["full-stack", "ai-ml"],
    caseStudy: {
      problem: "Farmers and agronomists need weather and crop-health signals turned into decisions, not just numbers.",
      approach:
        "Combined a 7-day forecast with on-demand AI summaries, AI canopy analysis of uploaded aerial or satellite images (coverage, density, and trees that are healthy, need care or need replacing), and a risk engine that ranks alerts for flooding, frost, wind, drought and canopy thinning.",
      techDetails:
        "Next.js 16 acting as a backend-for-frontend so the Weather AI key never leaves the server; a typed API client with timeouts, retry with backoff and rate-limit parsing; a pure, deterministic risk-fusion engine; a Leaflet map picker; tests in Vitest.",
      results: "Live on Vercel, with a quota gauge showing API usage against the free plan.",
    },
  },
  {
    slug: "black-stars-club-management",
    title: "Black Stars Club Management",
    description:
      "Lounge and nightclub management for Black Stars in Westlands, Nairobi: priced in shillings, with English, French and Arabic (right-to-left) interfaces, M-Pesa payments, SMS and WhatsApp messaging, and Claude-assisted workflows.",
    image: "/placeholder.svg?height=400&width=600&text=Black+Stars",
    tags: ["Next.js", "TypeScript", "Neon Postgres", "Drizzle", "M-Pesa", "Twilio"],
    github: "https://github.com/youneedgreg/club_management_system",
    size: "medium",
    year: "2026",
    role: "Full-Stack Developer (Client)",
    status: "coming-soon",
    gallery: [],
    categories: ["full-stack", "backend"],
    client: true,
    caseStudy: {
      problem:
        "A busy lounge and nightclub needs one system for its operations, priced in shillings and usable by staff in three languages.",
      approach:
        "Building it on top of the club's static HTML prototype, with the build plan, service costs and architecture decisions recorded in the repository as it goes.",
      techDetails:
        "Next.js 16, React 19 and Tailwind CSS 4 with shadcn/ui; Neon serverless Postgres through Drizzle ORM; Neon Auth; environment validation with Zod; Resend for email, Twilio for SMS and WhatsApp, M-Pesa Daraja for payments, and the Claude API.",
      results: "In progress. Follow the build on GitHub.",
    },
  },
  {
    slug: "weather-api-backend",
    title: "Weather API Backend",
    description: "A Laravel REST API that sits between a weather app's frontend and the OpenWeatherMap API.",
    image: "/placeholder.svg?height=400&width=600&text=Weather+API",
    tags: ["Laravel", "PHP", "REST API"],
    github: "https://github.com/youneedgreg/weather-app-backend",
    size: "small",
    year: "2025",
    role: "Backend Developer (Solo)",
    status: "source-available",
    gallery: [],
    categories: ["backend"],
    caseStudy: {
      problem: "A weather frontend should not call a third-party API directly and expose its key.",
      approach: "Built a Laravel API that the client calls instead, which then queries OpenWeatherMap on its behalf.",
      results: "Source on GitHub.",
    },
  },
  {
    slug: "restaurant-management-java",
    title: "Restaurant Management System",
    description:
      "A Java desktop application for running a restaurant: menus, orders, customers, sales and reports, with admin and employee logins over MySQL.",
    image: "/assets/restaurant-admin.jpg",
    tags: ["Java", "MySQL", "NetBeans"],
    github: "https://github.com/youneedgreg/java_restaurant_management",
    size: "small",
    year: "2025",
    role: "Developer (Solo)",
    status: "source-available",
    gallery: ["/assets/restaurant-admin.jpg"],
    categories: ["systems", "backend"],
    caseStudy: {
      problem: "A restaurant needs one place to manage its menu, take orders, track customers and see sales.",
      approach:
        "Built a desktop app with login and sign-up for admins and employees, an admin area for sales, staff and products, and product and order screens, all backed by MySQL.",
      techDetails:
        "Java with object-oriented design and JDBC database access, built in Apache NetBeans, with the schema shipped as SQL scripts and full documentation in the repository.",
      results: "Source and documentation on GitHub.",
    },
  },
  {
    slug: "etl-data-warehousing",
    title: "ETL & Data Warehousing Pipeline",
    description:
      "Python scripts that generate, extract and transform data for a warehouse, with a test suite covering each stage.",
    image: "/placeholder.svg?height=400&width=600&text=ETL+Pipeline",
    tags: ["Python", "Jupyter Notebook", "ETL"],
    github: "https://github.com/youneedgreg/More_warehousing",
    size: "small",
    year: "2025",
    role: "Data Engineer (Solo)",
    status: "source-available",
    gallery: [],
    categories: ["data"],
    caseStudy: {
      problem: "A warehouse is only as good as the pipeline that loads it, and a pipeline without tests breaks quietly.",
      approach:
        "Wrote separate generate, extract and transform stages, with tests for extraction and transformation and a single script that runs the whole suite.",
      results: "Source on GitHub.",
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
