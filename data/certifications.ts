export type Certification = {
  title: string
  /** One line on what it covered, shown on the About page. */
  description: string
}

/** The single source for certifications: the About page and the CV both read this list. */
export const certifications: Certification[] = [
  {
    title: "Coursera: Machine Learning (Andrew Ng)",
    description: "Supervised and unsupervised learning, regularisation and optimisation.",
  },
  {
    title: "Google Machine Learning Crash Course",
    description: "Regression, classification, neural networks and preparing data for models.",
  },
  {
    title: "IBM SkillsBuild: AI Fundamentals",
    description: "Core AI concepts, applications and ethics.",
  },
  {
    title: "freeCodeCamp: Machine Learning with Python",
    description: "Machine learning pipelines in Python, from training to evaluation.",
  },
  {
    title: "freeCodeCamp: Data Analysis with Python",
    description: "Cleaning, analysing and visualising data with NumPy, pandas and Matplotlib.",
  },
  {
    title: "freeCodeCamp: Front End Development Libraries",
    description: "React, Redux and component-driven UI.",
  },
  {
    title: "HNG Internship: Backend Development",
    description: "The backend track of HNG's internship.",
  },
  {
    title: "HNG Internship: Frontend Development",
    description: "The frontend track of HNG's internship.",
  },
]
