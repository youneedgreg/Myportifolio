import type { MetadataRoute } from "next"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#08080b",
    theme_color: "#08080b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
