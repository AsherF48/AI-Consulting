export type Service = {
  slug: string;
  name: string;
  summary: string;
};

export const services: Service[] = [
  {
    slug: "workflow-audit",
    name: "Workflow Automation Audit",
    summary:
      "We map how work actually moves through your team and flag the manual steps costing you the most time.",
  },
  {
    slug: "internal-tools",
    name: "Custom Internal AI Tools",
    summary:
      "We build the specific tool your team needs — a document processor, a support triage system, an internal assistant trained on your data.",
  },
  {
    slug: "rollout-training",
    name: "Team Training & Rollout",
    summary:
      "A tool nobody uses is a wasted investment. We handle the rollout so adoption actually sticks.",
  },
  {
    slug: "ongoing-optimization",
    name: "Ongoing Optimization",
    summary:
      "Workflows change. We keep your AI systems tuned as your team, data, and priorities shift.",
  },
];
