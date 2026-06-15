import type { Metadata } from "next"
import { CVTemplate } from "@/components/cv-template";

export const metadata: Metadata = {
  title: "CV",
  description: "Downloadable CV / resume for Gregory Temwa, Full Stack & AI Engineer.",
  alternates: {
    canonical: "/cv",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function CVPage() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <CVTemplate />
    </main>
  );
}
