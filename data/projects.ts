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
  caseStudy: CaseStudy
}

export const projects: Project[] = [
  {
    slug: "save-it",
    title: "Save-It",
    description:
      "A comprehensive personal finance tracking platform offering modules for budgets, expenses, savings, and analytics. Visualizes financial health through interactive charts and dashboards.",
    image: "/assets/saveitphoto.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
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
        "Built a Next.js app with dedicated modules for budgets, expenses, savings goals, and analytics, sharing a single transaction model across an interactive dashboard.",
      techDetails:
        "Next.js App Router with TypeScript for type-safe data flows, Tailwind CSS for the UI, and Recharts for budget and expense visualizations driven by a normalized transaction schema shared across every module.",
      results:
        "Shipped a fully responsive personal finance dashboard with real-time chart updates, deployed on Vercel.",
      challenges:
        "Designing a transaction model flexible enough to power budgets, savings goals, and analytics without duplicating logic across modules.",
    },
  },
  {
    slug: "chati-ai",
    title: "Chati AI",
    description:
      "AI-powered mental health chatbot offering supportive conversations, mood tracking, journaling, and mini-games. Integrates HuggingFace models and NextAuth for secure user experiences.",
    image: "/assets/chatiphoto.png",
    tags: ["Next.js", "Node.js", "MongoDB", "HuggingFace", "Tailwind CSS"],
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
        "Built an AI-powered chatbot using HuggingFace models for supportive conversations, paired with mood tracking, journaling, and mini-games to encourage healthy daily habits.",
      techDetails:
        "Next.js with a Node.js backend, MongoDB for user data and mood logs, NextAuth for secure authentication, and the HuggingFace inference API for conversational responses behind a calm, accessible Tailwind CSS UI.",
      results:
        "Shipped a working chatbot with mood tracking and journaling, deployed and free for users to access.",
      challenges:
        "Tuning prompts and response handling for the HuggingFace model to keep conversations supportive and safe while keeping latency low enough for natural back-and-forth chat.",
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
    slug: "compono-ui-builder",
    title: "Compono UI Builder",
    description:
      "Dynamic visual builder for Shadcn UI components with real-time previews and code export for faster UI prototyping.",
    image: "/assets/componophoto.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
        "Built a visual builder for shadcn UI components with real-time previews and one-click code export to speed up prototyping.",
      techDetails:
        "Next.js with TypeScript, Framer Motion for builder interactions, a live preview pane rendering shadcn components from builder state, and code generation that exports ready-to-use JSX.",
      results: "Shipped a working visual builder that exports ready-to-use shadcn component code.",
      challenges:
        "Keeping the live preview in sync with builder state changes in real time without re-rendering the whole canvas.",
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
      challenges: "Detailed write-up coming soon.",
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
      challenges: "Detailed write-up coming soon.",
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
      challenges: "Detailed write-up coming soon.",
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
      challenges: "Detailed write-up coming soon.",
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
