"use client"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function CVTemplate() {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50">
      <div className="flex justify-end mb-6 no-print">
        <Button
          onClick={downloadPDF}
          className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      <div className="bg-white p-12">
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
            Full Stack & AI Engineer skilled in React, Next.js, Node.js, and Python. Experienced in building full-stack
            systems, integrating AI models, and developing scalable APIs. Combines analytical precision with creative
            design, crafting seamless user experiences while delivering efficient, data-driven solutions.
          </p>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2 uppercase">Technical Skills</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, SQL, C++, Java</p>
            <p><strong>Frameworks:</strong> React, Next.js, Node.js, Express.js, TensorFlow, scikit-learn</p>
            <p><strong>Databases:</strong> MySQL, MongoDB, Supabase, PostgreSQL</p>
            <p><strong>Tools:</strong> Git, Docker, Postman, Figma, VS Code, Vercel</p>
            <p><strong>Core Competencies:</strong> Full Stack Development, API Engineering, Machine Learning, Debugging, Data Pipelines, Agile Collaboration, UI/UX Design</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase">Experience</h2>
          <div className="space-y-4">
            {/* Job 1 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">Full Stack / ML Engineer Intern — HNG Internship</h3>
                <span className="text-xs text-gray-600">(Sep 2025 – Nov 2025)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Developed multi-framework systems integrating AI-based debugging and analytics. Designed React, Vue,
                and Twig frontends with consistent architecture and optimized Node.js APIs.
              </p>
            </div>

            {/* Job 2 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">Junior Software Engineer — Momentum Labs</h3>
                <span className="text-xs text-gray-600">(May 2025 – Aug 2025)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Built and deployed full-stack web apps integrating TensorFlow analytics. Improved performance and added
                RESTful APIs with real-time visualization features.
              </p>
            </div>

            {/* Job 3 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">Junior Software Engineer — WebTech Solutions</h3>
                <span className="text-xs text-gray-600">(May 2024 – Jan 2025)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Delivered full-stack web applications in React, Node.js, and MySQL. Collaborated with designers to
                enhance UI/UX for enterprise clients.
              </p>
            </div>

            {/* Job 4 */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-gray-800">Freelance Developer & Designer — Self-Employed</h3>
                <span className="text-xs text-gray-600">(2023 – Present)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Delivered scalable full-stack solutions integrating machine learning and modern web technologies for
                diverse global clients.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-3 uppercase">Projects</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>• Save-It</strong> – Personal finance web app built with Next.js, featuring dashboards, analytics, and goal tracking
              via Supabase backend.
            </p>
            <p>
              <strong>• Chati AI</strong> – AI mental health chatbot integrating sentiment analysis, journaling, and gamified wellness tools
              using HuggingFace APIs.
            </p>
            <p>
              <strong>• Country Currency API</strong> – RESTful API combining real-time currency data and GDP analytics using
              Node.js and MySQL.
            </p>
            <p>
              <strong>• TicketFlow Multi-Framework</strong> – Identical ticket systems built in React, Vue, and Twig to ensure
              cross-framework parity and scalability.
            </p>
            <p>
              <strong>• Compono UI Builder</strong> – Real-time UI component builder for Shadcn design system with code export
              functionality.
            </p>
            <p>
              <strong>• Fine-Tuned Image Classifier</strong> – Transfer learning project using TensorFlow and Keras to improve
              classification accuracy through pre-trained models.
            </p>
            <p>
              <strong>• Hate Speech Classifier</strong> – NLP model detecting hate speech and offensive language trained using
              scikit-learn and NLTK.
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
            <p>Exceptional problem-solving and debugging ability.</p>
            <p>Bridges AI and web development to create integrated solutions.</p>
            <p>Collaborative communicator and agile team contributor.</p>
            <p>Committed to clean code, scalability, and continuous learning.</p>
          </div>
        </section>
      </div>
    </div>
  )
}