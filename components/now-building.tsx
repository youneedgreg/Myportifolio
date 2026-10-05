import Link from "next/link"
import { ArrowRight, GitCommitHorizontal, Hammer } from "lucide-react"
import { projects } from "@/data/projects"
import { GITHUB_USERNAME, githubHeaders } from "@/lib/github"

type GithubRepo = {
  name: string
  full_name: string
  html_url: string
  language: string | null
  pushed_at: string
  fork: boolean
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

async function getLatestActivity(): Promise<LatestActivity> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=10`, {
      headers: githubHeaders(),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return { repos: [], commit: null }
    const repos = ((await res.json()) as GithubRepo[]).filter((repo) => !repo.fork).slice(0, 3)
    if (repos.length === 0) return { repos, commit: null }

    const latest = repos[0]
    const commitsRes = await fetch(`https://api.github.com/repos/${latest.full_name}/commits?per_page=10`, {
      headers: githubHeaders(),
      next: { revalidate: 3600 },
    })
    if (!commitsRes.ok) return { repos, commit: null }
    // Skip merge commits — "Merge pull request #n" says nothing about the work.
    const commit = ((await commitsRes.json()) as GithubCommit[]).find((c) => c.parents.length === 1)
    return {
      repos,
      commit: commit
        ? {
            message: commit.commit.message.split("\n")[0],
            url: commit.html_url,
            date: commit.commit.author.date,
            repo: latest.name,
          }
        : null,
    }
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
  const current = projects.find((project) => project.featured)
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
