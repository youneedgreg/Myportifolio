export const GITHUB_USERNAME = "youneedgreg"

/**
 * Headers for GitHub REST calls. Unauthenticated requests share a 60/hour
 * limit per IP, so set GITHUB_TOKEN (a read-only token is enough) in production.
 */
export function githubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN
  return {
    Accept: "application/vnd.github+json",
    ...(token && { Authorization: `Bearer ${token}` }),
  }
}
