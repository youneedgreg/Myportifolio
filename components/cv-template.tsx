"use client"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Globe, Github, Download } from "lucide-react"
import { useRef } from "react"

export function CVTemplate() {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50">
      <div className="flex justify-end mb-6 no-print">
        <Button
          onClick={downloadPDF}
          className="flex items-center gap-2 bg-cyan-600 text-white hover:bg-cyan-700"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      <div
        className="bg-white p-8"
      >
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-600 mb-2">
            Gregory Temwa
          </h1>
          <p className="text-xl text-gray-500 mb-4">Software Engineer</p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-800">
            <a href="mailto:gregorytemwa1212@gmail.com" className="flex items-center gap-1 hover:text-cyan-600">
              <Mail className="w-4 h-4" />
              <span>gregorytemwa1212@gmail.com</span>
            </a>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+254 759 442 583</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Nairobi, Kenya</span>
            </div>
            <a href="https://linkedin.com/in/youneedgreg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-600">
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/youneedgreg</span>
            </a>
            <a href="https://gregorytemwa.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-600">
              <Globe className="w-4 h-4" />
              <span>gregorytemwa.vercel.app</span>
            </a>
            <a href="https://github.com/youneedgreg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-600">
              <Github className="w-4 h-4" />
              <span>github.com/youneedgreg</span>
            </a>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4 border-b pb-2">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {/* Job 1 */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-semibold text-gray-800">Software Engineering Intern</h3>
                    <span className="text-sm text-gray-500">Jul 2025 - Sept 2025</span>
                  </div>
                  <p className="text-amber-600 font-medium">Ivy Community</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                    <li>Gained hands-on experience in software development practices</li>
                    <li>Contributed to community-focused software projects</li>
                  </ul>
                </div>
                {/* Job 2 */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-semibold text-gray-800">2D Image Annotator</h3>
                     <span className="text-sm text-gray-500">Apr 2025 - Jul 2025</span>
                  </div>
                  <p className="text-amber-600 font-medium">DigiTalanta</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                    <li>Conducted 2D image annotation for AI training datasets</li>
                    <li>Ensured precise labeling and categorization of visual data</li>
                  </ul>
                </div>
                 {/* Job 3 */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-semibold text-gray-800">3D Image Annotator</h3>
                     <span className="text-sm text-gray-500">Sept 2025 - Nov 2025</span>
                  </div>
                  <p className="text-amber-600 font-medium">Cloudinary</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                    <li>Performed 3D image annotation for artificial intelligence systems</li>
                    <li>Maintained high attention to detail and contextual accuracy</li>
                  </ul>
                </div>
                {/* Job 4 */}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-semibold text-gray-800">Software Developer</h3>
                     <span className="text-sm text-gray-500">Mar 2024 - Mar 2025</span>
                  </div>
                  <p className="text-amber-600 font-medium">Webtech Solutions Limited</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                    <li>Developed and launched responsive websites for diverse clients</li>
                    <li>Created and integrated chatbots to websites</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4 border-b pb-2">Education</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-semibold text-gray-800">BSc. Software Engineering</h3>
                    <span className="text-sm text-gray-500">Sep 2023 - Present</span>
                  </div>
                  <p className="text-amber-600 font-medium">United States International University (USIU)</p>
                </div>
                 <div>
                  <h3 className="text-lg font-semibold text-gray-800">Machine Learning with Python</h3>
                  <p className="text-amber-600 font-medium">Freecodecamp.org</p>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4 border-b pb-2">Personal Projects</h2>
               <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Chati - AI Chatbot for Feelings</h4>
                    <a href="https://chati-ai.vercel.app/" className="text-sm text-amber-600 hover:underline">https://chati-ai.vercel.app/</a>
                  </div>
                   <div>
                    <h4 className="font-semibold text-gray-800">2day - Habit Builder Application</h4>
                    <a href="https://2dayy.vercel.app/" className="text-sm text-amber-600 hover:underline">https://2dayy.vercel.app/</a>
                  </div>
               </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4 border-b pb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Motivated Software Engineering student with 3 years of experience. Award-winning hackathon participant with a strong foundation in software development, AI, and web technologies.
              </p>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4 border-b pb-2">
                Technical Skills
              </h2>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">JavaScript</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">Python</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">Java</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">React</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">Node.js</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">Express</span>
                  </div>
                </div>
                 <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">MySQL</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section>
                <h2 className="text-2xl font-semibold text-cyan-600 mb-4 border-b pb-2">Certifications</h2>
                <div className="space-y-2">
                    <p className="text-gray-700">IBM Artificial Intelligence Fundamentals</p>
                    <p className="text-gray-700">Javascript Frameworks Web Development</p>
                </div>
            </section>

            {/* Languages Section */}
            <section>
                <h2 className="text-2xl font-semibold text-cyan-600 mb-4 border-b pb-2">Languages</h2>
                <div className="space-y-2">
                    <p className="text-gray-700">English (Native)</p>
                    <p className="text-gray-700">Spanish (Professional)</p>
                    <p className="text-gray-700">Kiswahili (Native)</p>
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
