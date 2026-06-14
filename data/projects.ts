export type ProjectStatus = "live" | "coming-soon"

export type ProjectSize = "small" | "medium" | "large"

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
  href: string
  github: string
  featured?: boolean
  size: ProjectSize
  year: string
  role: string
  status: ProjectStatus
  gallery: string[]
  openSource?: boolean
  private?: boolean
  caseStudy: CaseStudy
}

export const projects: Project[] = [
  {
    slug: "flori-core-enterprise-os",
    title: "Flori-Core Enterprise OS",
    description:
      "Production-grade, multi-tenant Agri-ERP for high-altitude floriculture, connecting IoT field sensors with logistics and market operations through a unified backend with an AI assistant and real-time monitoring.",
    image: "/placeholder.svg?height=400&width=600&text=Flori-Core+Enterprise+OS",
    tags: ["NestJS", "Next.js", "TypeScript", "Prisma", "TimescaleDB", "MQTT", "Socket.io"],
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/Flori-Core-Enterprise-OS",
    size: "large",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "High-altitude floriculture operations run physical field sensors, labour, spray logs, pack house, procurement, and export documentation as disconnected systems with no real-time visibility.",
      approach:
        "Built a multi-tenant 'Farm Operating System' connecting IoT field sensors to logistics and market operations through a unified backend, with real-time WebSocket gateways and an AI assistant.",
      techDetails:
        "NestJS 11 + Next.js 16 monorepo (Turborepo) with Prisma across 22 migrations covering telemetry, labour, spray logs, pack house, procurement, export docs, and CRM; MQTT v5 via EMQX ingests cold-room sensor data into TimescaleDB for time-series compliance reporting; Socket.io gateway streams live operational events; AI assistant (Claude + OpenAI) via Vercel AI SDK; M-Pesa B2C for payroll disbursements; Redis, AWS S3, Prometheus + Sentry observability.",
      results: "Core platform and 22 migrations built — full write-up and demo coming soon.",
      challenges:
        "Ingesting high-frequency MQTT cold-room sensor data into TimescaleDB without dropping readings during connectivity gaps at remote high-altitude field sites — buffering and backfilling on reconnect — while keeping the Socket.io live dashboard responsive and the 22-migration schema coherent across telemetry, labour, spray logs, and export docs.",
    },
  },
  {
    slug: "pesapal-rdbms",
    title: "Pesapal RDBMS",
    description:
      "A relational database engine built entirely from scratch in Python with zero external dependencies — custom SQL parser, query executor, hash-based indexing, and an interactive REPL with a web demo.",
    image: "/placeholder.svg?height=400&width=600&text=Pesapal+RDBMS",
    tags: ["Python", "SQL", "Systems Programming"],
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/pesapal",
    size: "small",
    year: "2026",
    role: "Backend Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "Understanding how relational databases work under the hood means building the pieces most developers never touch: the parser, planner, and storage engine.",
      approach:
        "Built a relational database engine from scratch in Python using only the standard library, for the Pesapal JDEV26 Developer Challenge.",
      techDetails:
        "Custom SQL parser and AST-driven query executor; hash-indexed JSON-backed persistent storage; supports CREATE TABLE, INSERT, SELECT (with JOIN and WHERE), UPDATE, and DELETE with type coercion and constraint checking; interactive REPL plus a Flask web demo.",
      results: "Shipped a working SQL engine with JOINs, indexing, and a REPL — built entirely on the Python standard library.",
      challenges:
        "Implementing JOINs, WHERE filtering, and type coercion on top of a hand-rolled hash index using only the Python standard library — no parser generator, no ORM — and keeping the JSON-backed storage consistent across crashes without a real write-ahead log.",
    },
  },
  {
    slug: "notification-system",
    title: "Notification System",
    description:
      "5-service microservices monorepo for email and push notifications — an API Gateway routes to User, Email, Push, and Template services via RabbitMQ with dead-letter queues, circuit breakers, and full observability.",
    image: "/placeholder.svg?height=400&width=600&text=Notification+System",
    tags: ["NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Docker", "Prometheus", "Grafana"],
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/notification-system",
    size: "medium",
    year: "2026",
    role: "Backend Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "Notification delivery across email and push channels needs to be reliable and observable even when downstream providers fail or degrade.",
      approach:
        "Built a NestJS monorepo of 5 independently deployable services — API Gateway, User, Email, Push, and Template — orchestrated via Docker Compose and reverse-proxied through Nginx.",
      techDetails:
        "All inter-service communication via RabbitMQ AMQP with dead-letter queues and configurable retry logic; circuit breaker (opossum) on every downstream call with open/half-open/closed states; correlation ID injection at the gateway for full distributed tracing; Firebase Admin (FCM) for push; Prometheus + Grafana monitoring stack deployed from checked-in config; Swagger API docs.",
      results: "Shipped a working 5-service platform with dead-letter retry, circuit breaking, and a live Grafana monitoring stack.",
      challenges:
        "Guaranteeing at-least-once delivery without double-sending when a downstream email or push provider fails mid-flight — tuning dead-letter retry, circuit-breaker open/half-open thresholds, and idempotency keys so retries never notified a user twice — and threading correlation IDs through every service to make failures traceable in Grafana.",
    },
  },
  {
    slug: "safari-os",
    title: "Safari OS",
    description:
      "End-to-end SaaS for a real safari operator: bookings, costing engine, CRM, itinerary builder, invoicing, supplier management, and an AI intelligence layer for conversion scoring and anomaly detection.",
    image: "/placeholder.svg?height=400&width=600&text=Safari+OS",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Anthropic Claude", "Twilio"],
    href: "https://tobeadded.com/",
    github: "",
    size: "large",
    year: "2025–Present",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: false,
    private: true,
    caseStudy: {
      problem:
        "Safari operators run bookings, pricing, supplier coordination, and client communication across spreadsheets, WhatsApp, and email, with no single system tying it together.",
      approach:
        "Building an end-to-end ERP for a real safari company covering bookings, a costing engine, CRM, itinerary builder, invoicing, and supplier management — over 30 Prisma models — with an AI layer (Claude, with Mistral fallback) for conversion scoring and anomaly detection.",
      techDetails:
        "Next.js 16 with Prisma and PostgreSQL; JWT sessions with OTP and three-role RBAC (Admin/Ops/Guide); Twilio WhatsApp integration across 14 message types with real-time delivery receipts; PDF/DOCX document generation via PDFKit and an AI content studio generating marketing copy in 5 languages across 6 channels; Vercel Cron for scheduled jobs.",
      results: "In active development for a real safari operator — full write-up and demo coming once the platform is live.",
      challenges:
        "Keeping the costing engine accurate across multi-currency quotes, seasonal supplier rates, and per-person markups while modeling over 30 interrelated Prisma entities; and making sure the AI conversion-scoring and anomaly-detection layer degraded gracefully to the Mistral fallback so a slow or unavailable model could never block a booking or a WhatsApp reply.",
    },
  },
  {
    slug: "spine-platform",
    title: "Spine — Property & Business SaaS",
    description:
      "Multi-tenant property and business management SaaS — 5 Next.js apps (mall, farm, biz, super-dashboard, tenant portal) in a Turborepo monorepo with AI chat, PDF reporting, and tenant-isolated data.",
    image: "/placeholder.svg?height=400&width=600&text=Spine+Platform",
    tags: ["Next.js", "TypeScript", "Supabase", "Turborepo", "Vercel AI SDK"],
    href: "https://tobeadded.com/",
    github: "",
    size: "large",
    year: "2025–Present",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: false,
    private: true,
    caseStudy: {
      problem:
        "Property and business operators (malls, farms, and multi-location businesses) need tenant-isolated dashboards, reporting, and AI assistance without standing up separate infrastructure per client.",
      approach:
        "Built a multi-tenant SaaS as 5 Next.js apps (mall, farm, biz, super-dashboard, and tenant portal) in a Turborepo monorepo, with Supabase row-level security isolating each tenant's data.",
      techDetails:
        "Turborepo + pnpm workspaces across 5 Next.js 14 apps; Supabase RLS for tenant isolation; Deno Edge Functions for cron-triggered automation; AI chat via Anthropic Claude with Mistral fallback through the Vercel AI SDK; @react-pdf/renderer for report generation; Apache Superset for analytics dashboards.",
      results: "Running across multiple internal apps in active development — full write-up and demo coming soon.",
      challenges:
        "Enforcing strict tenant isolation across 5 apps sharing one Supabase instance — getting row-level security policies right so no query could ever leak data between tenants — while keeping shared Turborepo packages, types, and Supabase migrations in sync so a change in one app didn't silently break the others.",
    },
  },
  {
    slug: "save-it",
    title: "Save-It",
    description:
      "An 11-module personal finance suite — transactions, accounts, budgets, bills, savings goals, debts, loans, assets, wishlist, and habits — with an analytics dashboard visualizing income and expenses.",
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
        "Designing a transaction model flexible enough to power 11 modules — from budgets and bills to debts, loans, and habits — without duplicating logic across modules.",
    },
  },
  {
    slug: "chati-ai",
    title: "Chati AI",
    description:
      "AI-powered mental health chatbot with multi-LLM support (OpenAI + Mistral), mood tracking, journaling, and mini-games. NextAuth authentication with NeonDB serverless Postgres and Prisma ORM.",
    image: "/assets/chatiphoto.png",
    tags: ["Next.js", "OpenAI", "Mistral", "Prisma", "NeonDB", "NextAuth"],
    href: "https://chati-ai.vercel.app/",
    github: "https://github.com/youneedgreg/chati",
    featured: true,
    size: "large",
    year: "2025",
    role: "Full-Stack Developer (Solo)",
    status: "live",
    gallery: ["/assets/chatiphoto.png"],
    openSource: true,
    caseStudy: {
      problem:
        "Access to mental health support is limited, and stigma or cost keeps many people from seeking help early.",
      approach:
        "Built an AI-powered chatbot with multi-LLM support (OpenAI + Mistral) for supportive conversations, paired with mood tracking, journaling, and mini-games to encourage healthy daily habits.",
      techDetails:
        "Next.js 15 with multi-LLM support (OpenAI + Mistral) for conversational responses, NextAuth for authentication, NeonDB serverless Postgres with Prisma ORM for conversation history and mood logs, and Framer Motion for transitions across a calm, accessible UI.",
      results:
        "Shipped a working chatbot with mood tracking and journaling, deployed and free for users to access.",
      challenges:
        "Coordinating fallback between OpenAI and Mistral so conversations stay supportive and consistent even if one provider is unavailable, while keeping latency low enough for natural back-and-forth chat.",
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
    image: "/placeholder.svg?height=400&width=600&text=Chessy",
    tags: ["Next.js", "TypeScript", "chess.js", "Stockfish.js", "Zustand"],
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/chessy",
    size: "medium",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "Most chess apps just show you a board — they don't explain why a move was wrong or how to think about the position better next time.",
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
    image: "/placeholder.svg?height=400&width=600&text=Dapper+Saint+Streets",
    tags: ["React", "Vite", "Supabase", "TanStack Query", "Zod", "Framer Motion"],
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/dapper-saint-streets",
    size: "medium",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "Streetwear brands need an e-commerce experience that feels as premium as the product — not a generic storefront template.",
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
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/framez_app",
    size: "medium",
    year: "2025",
    role: "Mobile Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "Building a social app that feels native on both iOS and Android usually means maintaining two codebases.",
      approach:
        "Built a cross-platform social app — feed, post creation with image upload, profiles, search, and settings — with stack and tab navigation via React Navigation.",
      techDetails:
        "React Native with Expo and TypeScript, Supabase for auth, database, and file storage, and EAS for the production build and distribution pipeline.",
      results: "Shipped a working social app with image-upload posts and profile feeds, built for EAS production distribution.",
      challenges:
        "Handling image uploads reliably on flaky mobile networks — compressing files and recovering from interrupted uploads to Supabase storage — while keeping the feed in sync and the UI consistent across both the iOS and Android Expo builds.",
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
    caseStudy: {
      problem:
        "Teams evaluating frontend frameworks need a like-for-like comparison of the same product built across different stacks.",
      approach:
        "Built the same ticket management application three times — in React, Vue, and Twig — sharing the same feature set (auth, CRUD, dashboards) to compare developer experience and output across stacks.",
      techDetails:
        "React and Vue.js single-page front ends sharing a common design language, a PHP/Twig server-rendered version, Tailwind CSS across all three, and consistent auth and CRUD flows implemented per framework's idioms.",
      results:
        "Produced three functionally equivalent ticketing apps, built collaboratively using Agile workflows during the HNG internship.",
      challenges:
        "Keeping feature parity and visual consistency across three very different rendering models — two SPAs and a server-rendered template engine.",
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
        "Balancing freshness of live exchange rates against upstream rate limits — solved with a TTL-based caching layer.",
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
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/hate_speech",
    size: "small",
    year: "2024",
    role: "ML Engineer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "Online platforms in Kenya need automated tools to detect hate speech and offensive language in local-language contexts, where most off-the-shelf models underperform.",
      approach:
        "Trained and evaluated text classification models on a Kenyan-focused hate speech dataset using scikit-learn, with NLTK for preprocessing and Pandas/Matplotlib for analysis.",
      techDetails:
        "Python with scikit-learn for model training, NLTK for tokenization and cleaning, Pandas for dataset handling, and Matplotlib for visualizing class distributions and model performance.",
      results: "Full write-up with model performance metrics and a demo coming soon — check back or follow the GitHub repo for progress.",
      challenges:
        "Handling code-switched Swahili–English text and local slang that standard English tokenizers mangle, and correcting for a heavily imbalanced dataset where neutral and offensive examples vastly outnumbered genuine hate speech — which skewed naive accuracy and forced a focus on precision and recall.",
    },
  },
  {
    slug: "fine-tuned-image-classifier",
    title: "Fine-Tuned Image Classifier",
    description:
      "Transfer learning project using MobileNetV2, ResNet, and VGG16 for image classification, improving accuracy through model fine-tuning.",
    image: "/placeholder.svg?height=400&width=600&text=Fine+Tuned+Image+Classifier",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/fine_tuned",
    size: "small",
    year: "2024",
    role: "ML Engineer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "Training image classifiers from scratch is data- and compute-intensive, especially for smaller, domain-specific datasets.",
      approach:
        "Applied transfer learning with MobileNetV2, ResNet, and VGG16 backbones, fine-tuning each on a target dataset and comparing accuracy and efficiency trade-offs.",
      techDetails:
        "Python with TensorFlow/Keras for model definition and training, OpenCV for image preprocessing, and a head-to-head comparison across the three architectures.",
      results: "Full write-up with accuracy comparisons across architectures coming soon — check back or follow the GitHub repo for progress.",
      challenges:
        "Avoiding overfitting when fine-tuning large ImageNet backbones on a small target dataset — tuning how many layers to unfreeze and how low to drop the learning rate so the pretrained features survived, and keeping the comparison fair when MobileNetV2, ResNet, and VGG16 have very different parameter counts and memory footprints.",
    },
  },
  {
    slug: "titanic-survival-neural-network",
    title: "Titanic Survival Neural Network",
    description:
      "A neural network predicting Titanic passenger survival, with a tf.data pipeline, feature engineering, and categorical encoding.",
    image: "/placeholder.svg?height=400&width=600&text=Titanic+Survival+NN",
    tags: ["Python", "TensorFlow", "Keras", "Jupyter Notebook"],
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/survived_unsurvived_ML",
    size: "small",
    year: "2025",
    role: "ML Engineer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
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
    image: "/placeholder.svg?height=400&width=600&text=Motel+Management+System",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/Motel_management",
    size: "medium",
    year: "2025",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "Small motels and guesthouses often rely on paper logs or spreadsheets to track room occupancy, bookings, and daily revenue.",
      approach:
        "A TypeScript app for managing bookings, tracking occupancy in real time, and generating automated daily summary reports, built on Prisma ORM.",
      techDetails: "Next.js with TypeScript, Prisma ORM for the booking and occupancy schema, and Tailwind CSS for the admin dashboard.",
      results: "Full write-up and live demo coming soon — check back or follow the GitHub repo for progress.",
      challenges:
        "Keeping occupancy state consistent when bookings, check-ins, and check-outs can overlap — modeling room availability so a single Prisma transaction blocks double-booking the same room for overlapping dates, and generating the daily summary correctly across day boundaries.",
    },
  },
  {
    slug: "myportfolio-website",
    title: "MyPortfolio Website",
    description:
      "A Next.js portfolio website showcasing Gregory Temwa's projects, education, and experience with smooth animations and dynamic sections.",
    image: "/placeholder.svg?height=400&width=600&text=My+Portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://tobeadded.com/",
    github: "https://github.com/youneedgreg/myportifolio",
    size: "medium",
    year: "2026",
    role: "Full-Stack Developer (Solo)",
    status: "coming-soon",
    gallery: [],
    openSource: true,
    caseStudy: {
      problem:
        "Portfolio sites often look templated and don't reflect the engineering quality of the person's actual work.",
      approach:
        "A full redesign of this site — new design system, command palette, live GitHub stats, and detailed project case studies like the one you're reading now.",
      techDetails: "Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui, and cmdk.",
      results: "Full write-up coming soon — check back or follow the GitHub repo for progress.",
      challenges:
        "Balancing heavy Framer Motion animation, a command palette, and a live GitHub stats integration against fast load times and strong Lighthouse scores — while keeping every section accessible, keyboard-navigable, and free of layout shift.",
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
