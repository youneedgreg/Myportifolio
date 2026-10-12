import type { Project } from "@/data/projects"
import { repoFullName } from "@/lib/github"

/**
 * When a project was last worked on, as a timestamp: the later of its recorded
 * lastActive date and GitHub's last push to its repo. Without either, the start
 * of its year ("2025–Present" counts as 2025).
 */
export function lastActiveAt(project: Pick<Project, "github" | "lastActive" | "year">, pushes: Map<string, string>) {
  const repo = repoFullName(project.github)
  const pushed = repo ? Date.parse(pushes.get(repo) ?? "") : NaN
  const recorded = Date.parse(project.lastActive ?? project.year.slice(0, 4))
  return Math.max(Number.isNaN(pushed) ? 0 : pushed, Number.isNaN(recorded) ? 0 : recorded)
}
