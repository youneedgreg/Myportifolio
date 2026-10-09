import { ArrowUpRight, GitMerge, GitPullRequest } from "lucide-react"
import { openSourceContributions } from "@/data/open-source"
import { cn } from "@/lib/utils"

/** Upstream projects with a merged or open pull request from me: what they are and what I sent. */
export default function OpenSourceList() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {openSourceContributions.map((project) => (
        <li key={`${project.owner}/${project.repo}`} className="surface flex flex-col gap-4 p-5">
          <div className="space-y-1.5">
            <a
              href={`https://github.com/${project.owner}/${project.repo}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-sm transition-colors hover:text-primary"
            >
              <span className="text-muted-foreground">{project.owner}/</span>
              <span className="font-semibold">{project.repo}</span>
              <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.about}</p>
          </div>
          <ul className="mt-auto space-y-2 border-t border-border pt-3">
            {project.pullRequests.map((pr) => {
              const Icon = pr.status === "merged" ? GitMerge : GitPullRequest
              return (
                <li key={pr.url}>
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-8 items-start gap-2.5 text-sm transition-colors hover:text-primary"
                  >
                    <Icon
                      className={cn("mt-0.5 size-4 shrink-0", pr.status === "merged" ? "text-chart-2" : "text-chart-3")}
                      aria-hidden
                    />
                    <span className="flex-1">{pr.title}</span>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {pr.status} · #{pr.url.split("/").pop()}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </li>
      ))}
    </ul>
  )
}
