import Link from "next/link"
import { ArrowRight, GitCommitHorizontal, Hammer } from "lucide-react"
import { projects } from "@/data/projects"
import { GITHUB_USERNAME, githubHeaders } from "@/lib/github"
import { currentlyBuilding } from "@/data/now"

type GithubRepo = {
  name: string
  full_name: string
  html_url: string
  language: string | null
  pushed_at: string
  fork: boolean
  private: boolean
  default_branch: string
}

type GithubCommit = {
  html_url: string
  parents: unknown[]
  commit: { message: string; author: { date: string } }
}

type LatestActivity = {
  repos: GithubRepo[]
  commit: { message: string; url: string; date: string; repo: string } | null
}

type GithubBranch = { name: string }

const github = (path: string) =>
  fetch(`https://api.github.com${path}`, { headers: githubHeaders(), next: { revalidate: 3600 } })

/**
 * Newest real commit in a public repo across its branches (up to 8), so work
 * on a feature branch shows before it is merged. Merge commits are skipped.
 */
async function getLatestCommit(repo: GithubRepo): Promise<LatestActivity["commit"]> {
  const branchesRes = await github(`/repos/${repo.full_name}/branches?per_page=8`)
  const branches = branchesRes.ok ? ((await branchesRes.json()) as GithubBranch[]).map((b) => b.name) : []
  if (!branches.includes(repo.default_branch)) branches.unshift(repo.default_branch)

  const heads = await Promise.all(
    branches.map(async (branch) => {
      const res = await github(`/repos/${repo.full_name}/commits?sha=${encodeURIComponent(branch)}&per_page=5`)
      if (!res.ok) return null
      const commit = ((await res.json()) as GithubCommit[]).find((c) => c.parents.length === 1)
      return commit ? { branch, commit } : null
    }),
  )
  const latest = heads
    .filter((head) => head !== null)
    .sort((a, b) => b.commit.commit.author.date.localeCompare(a.commit.commit.author.date))[0]
  if (!latest) return null

  return {
    message: latest.commit.commit.message.split("\n")[0],
    url: latest.commit.html_url,
    date: latest.commit.commit.author.date,
    repo: latest.branch === repo.default_branch ? repo.name : `${repo.name} @ ${latest.branch}`,
  }
}

async function getLatestActivity(): Promise<LatestActivity> {
  try {
    // Public repos only: private client work never leaks into the page.
    const res = await github(`/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=10&type=owner`)
    if (!res.ok) return { repos: [], commit: null }
    const repos = ((await res.json()) as GithubRepo[]).filter((repo) => !repo.fork && !repo.private).slice(0, 3)
    if (repos.length === 0) return { repos, commit: null }
    return { repos, commit: await getLatestCommit(repos[0]) }
  } catch {
    return { repos: [], commit: null }
  }
}

const relativeTime = new Intl.RelativeTimeFormat("en", { numeric: "auto" })

function timeAgo(date: string) {
  const seconds = (new Date(date).getTime() - Date.now()) / 1000
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 31536000],
    ["month", 2592000],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ]
  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size) return relativeTime.format(Math.round(seconds / size), unit)
  }
  return "just now"
}

export default async function NowBuilding() {
  const current = currentlyBuilding
    .map((slug) => projects.find((project) => project.slug === slug))
    .find((project) => project !== undefined)
  const { repos, commit } = await getLatestActivity()

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {current && (
        <Link
          href={`/projects/${current.slug}`}
          className="surface group flex flex-col gap-3 p-6 transition-colors hover:border-primary/50"
        >
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <Hammer className="size-3.5" />
            Currently building
          </p>
          <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
            {current.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{current.description}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 font-mono text-sm text-primary">
            Read the case study
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      )}

      <div className="surface flex flex-col gap-4 p-6">
        <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
          <GitCommitHorizontal className="size-3.5" />
          Latest commit
        </p>
        {commit ? (
          <a href={commit.url} target="_blank" rel="noreferrer" className="group space-y-1">
            <p className="line-clamp-2 font-mono text-sm transition-colors group-hover:text-primary">
              {commit.message}
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              {commit.repo} · <time dateTime={commit.date}>{timeAgo(commit.date)}</time>
            </p>
          </a>
        ) : (
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            See recent work on GitHub →
          </a>
        )}
        {repos.length > 0 && (
          <div className="mt-auto space-y-2 border-t border-border pt-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Recently active</p>
            <ul className="space-y-1.5">
              {repos.map((repo) => (
                <li key={repo.full_name} className="flex items-baseline justify-between gap-3 text-sm">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate font-mono transition-colors hover:text-primary"
                  >
                    {repo.name}
                  </a>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {repo.language ? `${repo.language} · ` : ""}
                    <time dateTime={repo.pushed_at}>{timeAgo(repo.pushed_at)}</time>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
