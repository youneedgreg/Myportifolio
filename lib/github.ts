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

/** "https://github.com/Owner/Repo" → "owner/repo"; null for anything else. */
export function repoFullName(url: string): string | null {
  const match = url.match(/^https:\/\/github\.com\/([^/]+\/[^/?#]+)/i)
  return match ? match[1].replace(/\.git$/, "").toLowerCase() : null
}

/**
 * When each public repo was last pushed to, keyed by lowercase "owner/repo".
 * One request for every repo, cached for an hour; empty if GitHub is unreachable,
 * so callers fall back to their own dates.
 */
export async function getRepoPushDates(): Promise<Map<string, string>> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=pushed&per_page=100`, {
      headers: githubHeaders(),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return new Map()
    const repos = (await res.json()) as { full_name: string; pushed_at: string | null }[]
    return new Map(
      repos.filter((repo) => repo.pushed_at).map((repo) => [repo.full_name.toLowerCase(), repo.pushed_at as string]),
    )
  } catch {
    return new Map()
  }
}
