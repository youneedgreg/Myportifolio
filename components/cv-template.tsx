"use client"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function CVTemplate() {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="no-print mb-6 flex justify-end">
        <Button onClick={downloadPDF}>
          <Download className="size-4" />
          Download PDF
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-white p-12 shadow-sm print:rounded-none print:border-none print:shadow-none">
        {/* Header Section */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-700 mb-1 tracking-wide">
            GREGORY TEMWA ODETE
          </h1>
          <p className="text-lg text-gray-600 mb-3">Full Stack & AI Engineer</p>
          <div className="text-sm text-gray-700">
            gregorytemwa1212@gmail.com | linkedin.com/in/youneedgreg | gregorytemwa.vercel.app | github.com/youneedgreg
          </div>
        </header>

        <hr className="border-blue-600 border-t-2 mb-6" />

        {/* Profile Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2 uppercase">Profile</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Full Stack & AI Engineer with 3+ years of experience building production SaaS platforms, AI-powered
            applications, and scalable backend systems with React, Next.js, Node.js, NestJS, and Python. Leads
            technical strategy as Chief Software Engineer at WebTech Solutions, combining analytical precision with
            creative design to deliver efficient, AI-integrated, data-driven solutions.
          </p>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2 uppercase">Technical Skills</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, SQL, C++, Java</p>
            <p><strong>Frameworks:</strong> React, Next.js, NestJS, Node.js, Express.js, React Native, TensorFlow, scikit-learn</p>
            <p><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Supabase, NeonDB, TimescaleDB, Redis</p>
            <p><strong>AI/ML:</strong> OpenAI, Anthropic Claude, Mistral, Vercel AI SDK, HuggingFace, TensorFlow/Keras</p>
            <p><strong>Tools & Infra:</strong> Git, Docker, Prisma, RabbitMQ, Turborepo, Postman, Figma, Vercel</p>
            <p><strong>Core Competencies:</strong> Full Stack Development, Multi-Tenant SaaS Architecture, Microservices, API Engineering, Machine Learning, Agile Collaboration, UI/UX Design</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase">Experience</h2>
          <div className="space-y-4">
            {/* Job 1 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">Chief Software Engineer — WebTech Solutions Limited, Nairobi, Kenya</h3>
                <span className="text-xs text-gray-600">(Feb 2026 – Present)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lead technical strategy and architecture across client projects, owning CI/CD pipelines and code
                quality standards while mentoring engineers and delivering production SaaS platforms and AI-powered
                tools.
              </p>
            </div>

            {/* Job 2 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">Full Stack Software Developer — WebTech Solutions Limited, Nairobi, Kenya</h3>
                <span className="text-xs text-gray-600">(Dec 2024 – Jan 2026)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Built client-facing applications with React, Next.js, TypeScript, and Node.js, designing databases and
                REST APIs end-to-end and shipping production deployments on Vercel and Railway.
              </p>
            </div>

            {/* Job 3 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">Intern (Frontend & Backend) — HNG Tech, Remote</h3>
                <span className="text-xs text-gray-600">(Oct 2025 – Dec 2025)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Built a multi-framework ticket management system across React, Vue.js, and Twig frontends with a
                Node/Express backend, implementing auth, CRUD, dashboards, and responsive design in an Agile team.
              </p>
            </div>

            {/* Job 4 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">Software Engineer Intern — Ivy Community, Nairobi, Kenya · Hybrid</h3>
                <span className="text-xs text-gray-600">(Jul 2025 – Sep 2025)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Built and shipped React features for an early-stage startup product, collaborating closely with
                founders and designers to iterate quickly on user-facing functionality.
              </p>
            </div>

            {/* Job 5 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">Software Engineer Intern (Frontend) — Girwa Foundation, Nairobi, Kenya · Remote</h3>
                <span className="text-xs text-gray-600">(May 2025 – Aug 2025)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Built responsive, accessible UI components for donor-management dashboards, improving transparency and
                analytics for community programs.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase">Projects</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>• Safari OS</strong> – End-to-end SaaS for a real safari operator covering bookings, a costing engine, CRM,
              itinerary builder, invoicing, and an AI layer (Claude + Mistral) for conversion scoring, built with Next.js,
              Prisma, and PostgreSQL.
            </p>
            <p>
              <strong>• Flori-Core Enterprise OS</strong> – Multi-tenant Agri-ERP connecting IoT field sensors with logistics and
              market operations via a NestJS + Next.js monorepo, Prisma, TimescaleDB, and an AI assistant.
            </p>
            <p>
              <strong>• Save-It</strong> – 11-module personal finance suite (transactions, budgets, debts, loans, habits) with an
              analytics dashboard, built with Next.js, Supabase, and Recharts.
            </p>
            <p>
              <strong>• Chati AI</strong> – AI-powered mental health chatbot with multi-LLM support (OpenAI + Mistral), mood
              tracking, and journaling, using Next.js, Prisma, and NeonDB.
            </p>
            <p>
              <strong>• Notification System</strong> – 5-service microservices monorepo for email/push notifications with RabbitMQ,
              circuit breakers, and Grafana monitoring, built with NestJS and Docker.
            </p>
            <p>
              <strong>• Spine</strong> – Multi-tenant property & business SaaS across 5 Next.js apps in a Turborepo monorepo with
              Supabase row-level security and AI chat via the Vercel AI SDK.
            </p>
            <p>
              <strong>• Compono UI Builder</strong> – Visual drag-and-drop builder for shadcn/ui with real-time WYSIWYG editing,
              device previews, and live TypeScript + Tailwind code export.
            </p>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2 uppercase">Certifications</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p>Google Machine Learning Crash Course</p>
            <p>Coursera – Machine Learning (Andrew Ng)</p>
            <p>IBM SkillsBuild – AI Engineering Fundamentals</p>
            <p>FreeCodeCamp – Data Analysis with Python</p>
            <p>HNG Internship – Full Stack Development</p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2 uppercase">Education</h2>
          <div className="text-sm text-gray-700">
            <p className="font-bold">Bachelor of Science in Software Engineering <span className="font-normal">(Expected 2027)</span></p>
            <p>United States International University–Africa (USIU–A)</p>
            <p className="italic">Focus: Artificial Intelligence, Software Systems, and Full Stack Engineering</p>
          </div>
        </section>

        {/* Strengths Section */}
        <section>
          <h2 className="text-xl font-bold text-blue-700 mb-2 uppercase">Strengths</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p>Leads technical strategy, architecture decisions, and engineering mentorship.</p>
            <p>Bridges AI/LLM integration and full-stack web development to ship production SaaS.</p>
            <p>Collaborative communicator and agile team contributor.</p>
            <p>Committed to clean code, scalability, and continuous learning.</p>
          </div>
        </section>
      </div>
    </div>
  )
}