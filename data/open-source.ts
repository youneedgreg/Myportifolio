export type OpenSourceContribution = {
  owner: string
  repo: string
}

export const openSourceContributions: OpenSourceContribution[] = [
  // PR #95 open (in review): https://github.com/canonical/cos-alerter/pull/95
  { owner: "canonical", repo: "cos-alerter" },
  // PR #350 open (in review): https://github.com/canonical/tempo-operators/pull/350
  { owner: "canonical", repo: "tempo-operators" },
  { owner: "google", repo: "sbsim" },
  { owner: "google", repo: "go-github" },
  { owner: "mxsm", repo: "rocketmq-rust" },
  { owner: "tirth-patel06", repo: "MedSync-AI" },
  { owner: "SanderGi", repo: "ConcussionAssessment" },
  { owner: "vercel", repo: "ai" },
  { owner: "vercel", repo: "vercel" },
  { owner: "freeCodeCamp", repo: "freeCodeCamp" },
]
