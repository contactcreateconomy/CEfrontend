import type { VibingItem } from "@/types";

export const vibingItems: VibingItem[] = [
  {
    id: "v1",
    kind: "campaign",
    label: "Creator Sprint Week is heating up fast",
    href: "/feed?sort=hot",
    engagedUsers: 1500,
  },
  {
    id: "v2",
    kind: "discussion",
    label: "Debate: best AI design stack in 2026",
    href: "/feed?category=debate&sort=top",
    engagedUsers: 1320,
  },
  {
    id: "v3",
    kind: "post",
    label: "Top prompt workflows this week",
    href: "/feed?sort=top",
    engagedUsers: 1180,
  },
  {
    id: "v4",
    kind: "update",
    label: "New creator analytics snapshot just dropped",
    href: "/drafts",
    engagedUsers: 960,
  },
  {
    id: "v5",
    kind: "creator",
    label: "Community picks: 5 launch-ready tools",
    href: "/feed?category=showcase&sort=hot",
    engagedUsers: 1095,
  },
  {
    id: "v6",
    kind: "campaign",
    label: "Micro-gigs challenge now trending",
    href: "/feed?category=gigs&sort=hot",
    engagedUsers: 880,
  },
  {
    id: "v7",
    kind: "discussion",
    label: "Pricing experiments creators are running",
    href: "/feed?sort=new",
    engagedUsers: 1020,
  },
  {
    id: "v8",
    kind: "update",
    label: "Weekly digest: what creators saved most",
    href: "/feed?sort=fav",
    engagedUsers: 930,
  },
];
