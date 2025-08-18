"use client"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Globe, Github, Download } from "lucide-react"
import { useRef } from "react"

export function CVTemplate() {
  const cvRef = useRef<HTMLDivElement>(null)

  const downloadPDF = async () => {
    if (!cvRef.current) return

    try {
      // Dynamic import to reduce bundle size
      const html2canvas = (await import("html2canvas")).default
      const jsPDF = (await import("jspdf")).default

      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        ignoreElements: (element) => {
          // Skip elements that might cause color issues
          return element.classList?.contains("skip-pdf") || false
        },
      })

      // Calculate dimensions for A4 page
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width

      // Add image to PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)

      // Download the PDF
      pdf.save("Gregory_Temwa_CV.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8" style={{ backgroundColor: "#f8fafc" }}>
      <div className="flex justify-end mb-6">
        <Button
          onClick={downloadPDF}
          className="flex items-center gap-2"
          style={{ backgroundColor: "#0891b2", color: "white" }}
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      <div
        ref={cvRef}
        style={{ backgroundColor: "#ffffff", padding: "2rem", fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#0891b2", marginBottom: "0.5rem" }}>
            Gregory Temwa
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#64748b", marginBottom: "1rem" }}>Software Engineer</p>

          <div className="flex flex-wrap justify-center gap-4 text-sm" style={{ color: "#1e293b" }}>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>gregorytemwa1212@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+254 759 442 583</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/youneedgreg</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>gregorytemwa.vercel.app</span>
            </div>
            <div className="flex items-center gap-1">
              <Github className="w-4 h-4" />
              <span>github.com/youneedgreg</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#0891b2", marginBottom: "0.75rem" }}>
              Professional Summary
            </h2>
            <p style={{ color: "#1e293b", lineHeight: "1.625" }}>
              Motivated Software Engineering student at United States International University (USIU) with 3 years of
              working experience. Award-winning participant in multiple hackathons with a strong foundation in software
              development, artificial intelligence, machine learning, and web technologies. Experienced in full-stack
              development, image annotation for AI systems, and creating innovative solutions for diverse clients.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#0891b2", marginBottom: "1rem" }}>
              Professional Experience
            </h2>

            <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />
            <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

            <div className="space-y-6">
              <div>

            <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>
                      Software Engineering Intern
                    </h3>
                    <p style={{ color: "#f59e0b", fontWeight: "500" }}>Ivy Community</p>
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Jul 2025 - Sept 2025</span>
                </div>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#1e293b" }} className="space-y-1">
                  <li>Gained hands-on experience in software development practices</li>
                  <li>Contributed to community-focused software projects</li>
                  <li>Developed organizational and time management skills</li>
                  <li>Collaborated with development teams on various initiatives</li>
                </ul>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>2D Image Annotator</h3>
                    <p style={{ color: "#f59e0b", fontWeight: "500" }}>DigiTalanta</p>
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Apr 2025 - Jul 2025</span>
                </div>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#1e293b" }} className="space-y-1">
                  <li>Conducted 2D image annotation for AI training datasets</li>
                  <li>Ensured precise labeling and categorization of visual data</li>
                  <li>Maintained quality standards for machine learning model training</li>
                  <li>Collaborated with AI development teams on data preparation</li>
                </ul>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

            
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>3D Image Annotator</h3>
                    <p style={{ color: "#f59e0b", fontWeight: "500" }}>Cloudinary</p>
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>sept 2025 - Nov 2025</span>
                </div>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#1e293b" }} className="space-y-1">
                  <li>Performed 3D image annotation for artificial intelligence systems</li>
                  <li>Maintained high attention to detail and contextual accuracy in data processing</li>
                  <li>Adhered to strict data confidentiality and quality standards</li>
                  <li>Contributed to AI dataset development for machine learning applications</li>
                </ul>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>Software Developer</h3>
                    <p style={{ color: "#f59e0b", fontWeight: "500" }}>Webtech Solutions Limited</p>
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Mar 2024 - Mar 2025</span>
                </div>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#1e293b" }} className="space-y-1">
                  <li>Developed and launched responsive websites for diverse clients, enhancing user engagement</li>
                  <li>Created and integrated chatbots to websites and developed personalized systems</li>
                  <li>Optimized website performance, reducing load times and improving SEO</li>
                  <li>Worked on website design, graphic design, software development, and IT consultancy</li>
                </ul>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              {/* Job 2 */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>Full Stack Developer</h3>
                    <p style={{ color: "#f59e0b", fontWeight: "500" }}>Mtaamall</p>
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Jul 2024 - Dec 2024</span>
                </div>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#1e293b" }} className="space-y-1">
                  <li>Developed and launched a Minimum Viable Product (MVP) for Mtaamall using the MERN stack</li>
                  <li>Collaborated with cross-functional teams to design and implement new features</li>
                  <li>Provided ongoing technical support and project management for software solutions</li>
                  <li>Enhanced user experience and engagement through innovative feature development</li>
                </ul>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              {/* Job 3 */}
              

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              {/* Job 4 */}
              

              {/* Job 5 */}
              

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              {/* Job 6 */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>
                      Software Engineering Intern
                    </h3>
                    <p style={{ color: "#f59e0b", fontWeight: "500" }}>Girwa Foundation</p>
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#64748b" }}>2023</span>
                </div>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#1e293b" }} className="space-y-1">
                  <li>Participated in foundation-based software development projects</li>
                  <li>Applied software engineering principles in real-world scenarios</li>
                  <li>Worked independently and remotely with reliable technical setup</li>
                  <li>Contributed to social impact through technology solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#0891b2", marginBottom: "1rem" }}>Education</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>
                    BSc. Software Engineering
                  </h3>
                  <p style={{ color: "#f59e0b", fontWeight: "500" }}>United States International University (USIU)</p>
                  <p style={{ color: "#64748b" }}>Currently pursuing degree in Software Engineering</p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Sep 2023 - Present</span>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-start">
                <div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>
                    Machine Learning with Python
                  </h3>
                  <p style={{ color: "#f59e0b", fontWeight: "500" }}>Freecodecamp.org</p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Mar 2025 - May 2025</span>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-start">
                <div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>Responsive Web Design</h3>
                  <p style={{ color: "#f59e0b", fontWeight: "500" }}>Freecodecamp.org</p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Jan 2023 - Apr 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#0891b2", marginBottom: "1rem" }}>
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 style={{ fontWeight: "600", color: "#1e293b", marginBottom: "0.5rem" }}>Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    JavaScript
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Python
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Java
                  </span>
                </div>
              </div>

              <div>
                <h4 style={{ fontWeight: "600", color: "#1e293b", marginBottom: "0.5rem" }}>Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    React
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Node.js
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Express
                  </span>
                </div>
              </div>

              <div>
                <h4 style={{ fontWeight: "600", color: "#1e293b", marginBottom: "0.5rem" }}>Databases</h4>
                <div className="flex flex-wrap gap-2">
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    MySQL
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    PostgreSQL
                  </span>
                </div>
              </div>

              <div>
                <h4 style={{ fontWeight: "600", color: "#1e293b", marginBottom: "0.5rem" }}>Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Git
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Docker
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Jenkins
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    AWS
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Ubuntu
                  </span>
                  <span
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#475569",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    RESTful APIs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#0891b2", marginBottom: "1rem" }}>
              Personal Projects
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>Chati - AI Chatbot for Feelings</h4>
                  <p style={{ color: "#64748b" }}>An AI chatbot designed to help users with emotional support</p>
                  <p style={{ fontSize: "0.875rem", color: "#f59e0b" }}>https://chati-ai.vercel.app/</p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Feb 2024</span>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-start">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>2day - Habit Builder Application</h4>
                  <p style={{ color: "#64748b" }}>A habit builder and quitter application with productivity features</p>
                  <p style={{ fontSize: "0.875rem", color: "#f59e0b" }}>https://2dayy.vercel.app/</p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Mar 2024</span>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-start">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>Motel Management System</h4>
                  <p style={{ color: "#64748b" }}>
                    A comprehensive motel management app for managing clients and rooms
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#f59e0b" }}>https://sevendaysholidaysinn.vercel.app/</p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Nov 2024 - Dec 2024</span>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-start">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>Java Restaurant Management System</h4>
                  <p style={{ color: "#64748b" }}>
                    A Java-based system for managing orders, users, and products using MySQL
                  </p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Apr 2025</span>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-start">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>Hate Speech Classifier</h4>
                  <p style={{ color: "#64748b" }}>
                    A machine learning classifier built with Python to detect hate speech
                  </p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Apr 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#0891b2", marginBottom: "1rem" }}>
              Certifications
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>IBM Artificial Intelligence Fundamentals</h4>
                  <p style={{ color: "#64748b" }}>IBM</p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Jan 2025 - Mar 2025</span>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-center">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>Javascript Frameworks Web Development</h4>
                  <p style={{ color: "#64748b" }}>Freecodecamp</p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Sep 2022 - Dec 2022</span>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-center">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>Machine Learning with Python</h4>
                  <p style={{ color: "#64748b" }}>Freecodecamp</p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>Mar 2025 - May 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div style={{ border: "1px solid #e2e8f0", borderRadius: "0.5rem", backgroundColor: "#ffffff" }}>
          <div style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#0891b2", marginBottom: "1rem" }}>Languages</h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>English</h4>
                  <p style={{ color: "#64748b" }}>Native or Bilingual Proficiency</p>
                </div>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-center">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>Spanish</h4>
                  <p style={{ color: "#64748b" }}>Professional Working Proficiency</p>
                </div>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "1rem 0" }} />

              <div className="flex justify-between items-center">
                <div>
                  <h4 style={{ fontWeight: "600", color: "#1e293b" }}>Kiswahili</h4>
                  <p style={{ color: "#64748b" }}>Native Proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
