export type OpenSourceContribution = {
  owner: string
  repo: string
}

// Repositories with a merged or open pull request from youneedgreg. Forks with
// no PR upstream do not belong here.
export const openSourceContributions: OpenSourceContribution[] = [
  // Merged: refactor to avoid hardcoding endpoints in the TF module
  { owner: "canonical", repo: "tempo-operators" },
  // Merged: show-config example updated to Juju 3.x syntax
  { owner: "canonical", repo: "alertmanager-k8s-operator" },
  // PR #95 open (in review): https://github.com/canonical/cos-alerter/pull/95
  { owner: "canonical", repo: "cos-alerter" },
  // Open: --verbosity flag for hwctl
  { owner: "canonical", repo: "hardware-api" },
  // Open: occupancy module, device property decorators
  { owner: "google", repo: "sbsim" },
  // Merged: Producer::send return type
  { owner: "mxsm", repo: "rocketmq-rust" },
  { owner: "tirth-patel06", repo: "MedSync-AI" },
  { owner: "SanderGi", repo: "ConcussionAssessment" },
]
