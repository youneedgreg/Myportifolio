import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { CVTemplate } from "@/components/cv-template";

export const metadata: Metadata = pageMetadata({
  title: "CV",
  description: "CV of Gregory Temwa, Chief Software Engineer (full-stack and AI) in Nairobi.",
  path: "/cv",
  index: false,
})

export default function CVPage() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-24 print:p-0">
      <CVTemplate />
    </main>
  );
}
