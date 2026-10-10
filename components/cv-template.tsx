import { Printer } from "lucide-react"
import { experience } from "@/data/experience"
import { projects } from "@/data/projects"
import PrintButton from "@/components/print-button"

// The CV reads the same experience data as the rest of the site, so they can't drift apart.
const ROLES = experience.filter((job) => !/Freelance|Instructor|Mtaamall/i.test(`${job.role} ${job.company}`)).slice(0, 6)
const EARLIER = experience.filter((job) => !ROLES.includes(job))

const PROJECTS = [
  {
    name: "Liquor Store POS",
    line: "Offline-first Android point of sale and owner dashboard for a liquor store: SQLite outbox that syncs every sale exactly once, split cash/M-Pesa/credit payments, shift reconciliation. Expo, Next.js, Neon Postgres, Drizzle.",
  },
  {
    name: "OKLaw Practice Management",
    line: "Twenty-module system for a Kenyan law firm (matters, court diary, trust accounting, billing, client portal) with the domain modelled from statute and architecture rules enforced in CI. Next.js, Effect, Neon Postgres.",
  },
  {
    name: "Flori-Core Enterprise OS",
    line: "Multi-tenant Agri-ERP for flower farms connecting cold-room IoT sensors with production, logistics and sales. NestJS and Next.js monorepo, Prisma, TimescaleDB, MQTT, a Claude tool-use assistant.",
  },
  {
    name: "Safari OS",
    line: "Booking-to-invoice platform for a safari operator: costing engine (USD/KES), AI itineraries, WhatsApp reminders, tokenised driver and client portals. Next.js, Prisma, PostgreSQL, Claude with Mistral fallback.",
  },
  {
    name: "Spine",
    line: "Five-app multi-tenant SaaS for a mall, a farm and SMEs on one Supabase project: 64 migrations with row-level security, payroll with Kenyan statutory deductions, 42 unit and 11 end-to-end test suites.",
  },
  {
    name: "Notification System",
    line: "Five-service NestJS monorepo for email and push: RabbitMQ with dead-letter retries, circuit breakers, idempotency keys and Grafana monitoring.",
  },
]

const SKILLS: [string, string][] = [
  ["Languages", "TypeScript, JavaScript, Python, SQL, Go, Rust, Java, C++"],
  ["Frameworks", "Next.js, React, React Native (Expo), Node.js, NestJS, Express, Effect, TensorFlow, scikit-learn"],
  ["Data", "PostgreSQL (Neon, Supabase), TimescaleDB, MySQL, MongoDB, SQLite, Redis; Prisma and Drizzle"],
  ["AI", "Anthropic Claude (tool use), Mistral, OpenRouter, Hugging Face"],
  ["Infrastructure", "Docker, Kubernetes, RabbitMQ, Nginx, Linux, Vercel, Turborepo; Prometheus and Grafana"],
  ["Testing", "Vitest, Playwright, CI with GitHub Actions"],
]

const CERTIFICATIONS = [
  "Google Machine Learning Crash Course",
  "Coursera: Machine Learning (Andrew Ng)",
  "IBM SkillsBuild: AI Engineering Fundamentals",
  "freeCodeCamp: Data Analysis with Python",
  "HNG Internship: Full Stack Development",
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section space-y-2.5">
      <h2 className="border-b border-gray-200 pb-1 text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function CVTemplate() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">greg@portfolio</span>:~$ lp cv.pdf
        </p>
        <PrintButton>
          <Printer className="size-4" />
          Print or save as PDF
        </PrintButton>
      </div>

      <article className="cv rounded-2xl border border-border bg-white p-8 text-[13px] leading-relaxed text-gray-800 shadow-sm sm:p-12 print:rounded-none print:border-none print:p-0 print:shadow-none">
        <header className="space-y-1.5 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-950">Gregory Temwa Odete</h1>
          <p className="text-base text-gray-600">Chief Software Engineer · Full-Stack and AI · Nairobi, Kenya</p>
          <p className="text-xs text-gray-600">
            <a href="mailto:gregorytemwa1212@gmail.com">gregorytemwa1212@gmail.com</a> ·{" "}
            <a href="https://temwa.dev">temwa.dev</a> · <a href="https://github.com/youneedgreg">github.com/youneedgreg</a> ·{" "}
            <a href="https://www.linkedin.com/in/youneedgreg/">linkedin.com/in/youneedgreg</a> ·{" "}
            <a href="https://x.com/youneedgreg">x.com/youneedgreg</a>
          </p>
        </header>

        <div className="mt-6 space-y-5">
          <Section title="Profile">
            <p>
              Software engineer with 3+ years building production systems that businesses run their day on: offline-first
              point of sale, trust accounting for a law firm, ERPs for flower farms and safari operators. Chief Software
              Engineer at Webtech Solutions, owning architecture, CI/CD and code standards across client projects, while
              finishing a BSc in Software Engineering at USIU (2027). Open-source contributor to Canonical&apos;s
              observability charms.
            </p>
          </Section>

          <Section title="Experience">
            <div className="space-y-3">
              {ROLES.map((job) => (
                <div key={`${job.role}-${job.period}`} className="cv-item">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-semibold text-gray-950">
                      {job.role}, <span className="font-normal text-gray-700">{job.company}</span>
                    </h3>
                    <span className="whitespace-nowrap text-xs text-gray-500">{job.period}</span>
                  </div>
                  <p>{job.description}</p>
                </div>
              ))}
              {EARLIER.length > 0 && (
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Earlier:</span>{" "}
                  {EARLIER.map((job) => `${job.role}, ${job.company.split(",")[0]} (${job.period})`).join("; ")}.
                </p>
              )}
            </div>
          </Section>

          <Section title="Selected projects">
            <ul className="space-y-1.5">
              {PROJECTS.map((p) => (
                <li key={p.name} className="cv-item">
                  <span className="font-semibold text-gray-950">{p.name}:</span> {p.line}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500">Case studies for these and {projects.length - PROJECTS.length} more at temwa.dev/projects.</p>
          </Section>

          <Section title="Skills">
            <dl className="space-y-1">
              {SKILLS.map(([label, value]) => (
                <div key={label}>
                  <dt className="inline font-semibold text-gray-950">{label}: </dt>
                  <dd className="inline">{value}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <div className="grid gap-5 sm:grid-cols-2 print:grid-cols-2">
            <Section title="Education">
              <p>
                <span className="font-semibold text-gray-950">BSc Software Engineering</span>, expected 2027
                <br />
                United States International University–Africa (USIU–A)
              </p>
            </Section>
            <Section title="Certifications">
              <ul>
                {CERTIFICATIONS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </article>
    </div>
  )
}
