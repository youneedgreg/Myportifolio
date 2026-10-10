import type { Metadata } from "next"
import { CVTemplate } from "@/components/cv-template";

export const metadata: Metadata = {
  title: "CV",
  description: "CV of Gregory Temwa, Chief Software Engineer (full-stack and AI) in Nairobi.",
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
    <main className="px-4 py-16 md:px-6 md:py-24 print:p-0">
      <CVTemplate />
    </main>
  );
}
