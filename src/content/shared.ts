import { CaseStudyItem } from "./home";

export const GLOBAL_PROOF_STATS = [
  "250+ events",
  "$1.2B+ pipeline influenced",
  "15,000+ enterprise leads",
  "98% client retention",
  "500+ booth designs",
  "40+ countries",
];

export const GLOBAL_CASE_STUDIES: CaseStudyItem[] = [
  {
    title: "World Aviation Festival 2025",
    client: "Global digital services and AI transformation leader",
    challenge: "Securing executive meetings within a short campaign timeline",
    solution:
      "Delivered active prospecting and meeting coordination to secure 60 qualified meetings",
    metric: "60 Meetings",
    metricLabel: "Executive meetings secured",
    image:
      "https://images.unsplash.com/photo-1540339832862-47452993c66b?q=80&w=2574&auto=format&fit=crop", // Aviation/Conference
    href: "/case-studies",
  },
  {
    title: "Adobe Summit 2025",
    client: "Enterprise SaaS marketing automation provider",
    challenge: "High-volume lead capture with real-time sales qualification",
    solution: "Full-service lead generation program with on-site qualification and CRM sync",
    metric: "70+ Leads",
    metricLabel: "Daily qualified SQLs",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop", // Tech Summit
    href: "/case-studies",
  },
  {
    title: "SIBOS 2025",
    client: "Tier-1 global financial infrastructure provider",
    challenge: "Standing out in a highly competitive banking technology floor",
    solution: "Turnkey exhibition presence with immersive media and executive networking lounge",
    metric: "270+ Leads",
    metricLabel: "Verified enterprise leads",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // Banking/Architecture
    href: "/case-studies",
  },
];
