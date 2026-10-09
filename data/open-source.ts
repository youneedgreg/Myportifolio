export type ContributionStatus = "merged" | "open"

export type OpenSourceContribution = {
  owner: string
  repo: string
  /** What the project is, in one line. */
  about: string
  /** Pull requests from youneedgreg, newest first. */
  pullRequests: { title: string; url: string; status: ContributionStatus }[]
}

// Repositories with a merged or open pull request from youneedgreg. Closed,
// unmerged PRs and forks with no PR upstream do not belong here.
export const openSourceContributions: OpenSourceContribution[] = [
  {
    owner: "canonical",
    repo: "tempo-operators",
    about: "Charmed operators that run Grafana Tempo, a distributed tracing backend, in microservices mode.",
    pullRequests: [
      {
        title: "Lower charm-tracing buffer overflow logs to debug level",
        url: "https://github.com/canonical/tempo-operators/pull/353",
        status: "open",
      },
      {
        title: "Avoid hardcoding endpoints in the Terraform module",
        url: "https://github.com/canonical/tempo-operators/pull/350",
        status: "merged",
      },
    ],
  },
  {
    owner: "canonical",
    repo: "alertmanager-k8s-operator",
    about: "Charmed operator for Alertmanager, the alerting component behind Prometheus and Loki.",
    pullRequests: [
      {
        title: "Update the show-config example to Juju 3.x syntax",
        url: "https://github.com/canonical/alertmanager-k8s-operator/pull/445",
        status: "merged",
      },
    ],
  },
  {
    owner: "canonical",
    repo: "cos-alerter",
    about: "Alerts when the Canonical Observability Stack stops sending its regular heartbeat pings.",
    pullRequests: [
      {
        title: "Optionally skip the client key check for silencing",
        url: "https://github.com/canonical/cos-alerter/pull/95",
        status: "open",
      },
    ],
  },
  {
    owner: "canonical",
    repo: "hardware-api",
    about: "API server, library and CLI for retrieving hardware information.",
    pullRequests: [
      {
        title: "Add a --verbosity flag to the hwctl CLI",
        url: "https://github.com/canonical/hardware-api/pull/588",
        status: "open",
      },
    ],
  },
  {
    owner: "google",
    repo: "sbsim",
    about:
      "Google's Smart Buildings Control suite: real-world data and calibrated simulation for training agents that cut energy use in office buildings.",
    pullRequests: [{ title: "Occupancy module", url: "https://github.com/google/sbsim/pull/143", status: "open" }],
  },
  {
    owner: "mxsm",
    repo: "rocketmq-rust",
    about: "Apache RocketMQ, the distributed messaging platform, reimplemented in Rust.",
    pullRequests: [
      {
        title: "Change Producer::send to return Option<SendResult>",
        url: "https://github.com/mxsm/rocketmq-rust/pull/5342",
        status: "merged",
      },
    ],
  },
  {
    owner: "tirth-patel06",
    repo: "MedSync-AI",
    about: "Helps patients manage medications and health routines with an AI assistant.",
    pullRequests: [
      { title: "Multilingual implementation", url: "https://github.com/tirth-patel06/MedSync-AI/pull/44", status: "merged" },
    ],
  },
  {
    owner: "SanderGi",
    repo: "ConcussionAssessment",
    about: "An online sport concussion assessment that follows the international SCAT6 standard.",
    pullRequests: [
      {
        title: "Mark athlete data as deleted and update the sync timestamp on deletion",
        url: "https://github.com/SanderGi/ConcussionAssessment/pull/4",
        status: "merged",
      },
    ],
  },
  {
    owner: "lingdojo",
    repo: "kana-dojo",
    about: "A minimalist platform for learning Japanese, inspired by Duolingo and Monkeytype.",
    pullRequests: [
      { title: "Add the Street Lantern dark theme", url: "https://github.com/lingdojo/kana-dojo/pull/1289", status: "merged" },
      { title: "Add the School Uniform dark theme", url: "https://github.com/lingdojo/kana-dojo/pull/1276", status: "merged" },
      {
        title: "Add Japanese proverbs and facts to the content library",
        url: "https://github.com/lingdojo/kana-dojo/pull/1282",
        status: "merged",
      },
    ],
  },
]
