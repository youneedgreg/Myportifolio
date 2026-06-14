import { BookMarked, Code2, Flame, Star, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import AnimatedCounter from "@/components/animated-counter"
import { openSourceContributions } from "@/data/open-source"

const GITHUB_USERNAME = "youneedgreg"

type GithubUser = {
  public_repos: number
  followers: number
  html_url: string
}

type GithubRepo = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  fork: boolean
  updated_at: string
}

type ContributionDay = {
  date: string
  count: number
  level: number
}

type ContributionsResponse = {
  total: Record<string, number>
  contributions: ContributionDay[]
}

async function getGithubUser(): Promise<GithubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=100`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

async function getOpenSourceContributions(): Promise<GithubRepo[]> {
  const results = await Promise.all(
    openSourceContributions.map(async ({ owner, repo }) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          headers: { Accept: "application/vnd.github+json" },
          next: { revalidate: 3600 },
        })
        if (!res.ok) return null
        return (await res.json()) as GithubRepo
      } catch {
        return null
      }
    })
  )
  return results.filter((repo): repo is GithubRepo => repo !== null)
}

async function getContributions(): Promise<ContributionsResponse | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

const LEVEL_CLASSES = ["bg-muted", "bg-primary/25", "bg-primary/50", "bg-primary/75", "bg-primary"]

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="surface flex flex-col gap-2 p-5">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="font-mono text-xs uppercase tracking-widest">{label}</span>
      </div>
      <AnimatedCounter value={value} className="text-3xl font-semibold tracking-tight" />
    </div>
  )
}

function ContributionHeatmap({ data }: { data: ContributionDay[] }) {
  const weeks: ContributionDay[][] = []
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7))
  }

  return (
    <div className="surface space-y-3 p-5">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contribution activity</p>
      <div className="overflow-x-auto pb-1">
        <div className="grid w-max grid-flow-col gap-1" style={{ gridTemplateRows: "repeat(7, 0.65rem)" }}>
          {weeks.flatMap((week) =>
            week.map((day) => (
              <div
                key={day.date}
                title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                className={cn("size-[0.65rem] rounded-sm", LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0])}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

function RepoCard({ repo }: { repo: GithubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="surface flex flex-col gap-2 p-5 transition-colors hover:border-primary/50"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold tracking-tight">{repo.full_name}</span>
        <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-muted-foreground">
          <Star className="size-3.5" />
          {repo.stargazers_count}
        </span>
      </div>
      {repo.description && <p className="line-clamp-2 text-sm text-muted-foreground">{repo.description}</p>}
      {repo.language && (
        <Badge variant="secondary" className="w-fit text-xs">
          {repo.language}
        </Badge>
      )}
    </a>
  )
}

export function GithubStatsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="surface shimmer h-24" />
        ))}
      </div>
      <div className="surface shimmer h-28" />
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="surface shimmer h-28" />
        ))}
      </div>
    </div>
  )
}

export default async function GithubStats() {
  const [user, repos, contributions, contributedRepos] = await Promise.all([
    getGithubUser(),
    getGithubRepos(),
    getContributions(),
    getOpenSourceContributions(),
  ])

  if (!user) {
    return null
  }

  const ownRepos = repos.filter((repo) => !repo.fork)
  const totalStars = ownRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
  const yearlyContributions = contributions?.total?.lastYear ?? null

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard icon={<Code2 className="size-4" />} label="Public repos" value={user.public_repos} />
        <StatCard icon={<Users className="size-4" />} label="Followers" value={user.followers} />
        <StatCard icon={<Star className="size-4" />} label="Total stars" value={totalStars} />
        {yearlyContributions !== null && (
          <StatCard icon={<Flame className="size-4" />} label="Contributions (1y)" value={yearlyContributions} />
        )}
      </div>

      {contributions && <ContributionHeatmap data={contributions.contributions} />}

      {contributedRepos.length > 0 && (
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
            <BookMarked className="size-4" />
            Open source contributions
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {contributedRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
