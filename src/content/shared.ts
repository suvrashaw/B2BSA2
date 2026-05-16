import type { CaseStudyItem as HomeCaseStudyItem } from "./home";

type SharedCaseStudyItem = {
  href?: string;
  icon?: string;
  id?: string;
} & Omit<HomeCaseStudyItem, "icon" | "id">;

export const GLOBAL_PROOF_STATS = [
  "250+ events",
  "$1.2B+ pipeline influenced",
  "15,000+ enterprise leads",
  "98% client retention",
  "500+ booth designs",
  "40+ countries",
];

export const GLOBAL_CASE_STUDIES: SharedCaseStudyItem[] = [
  {
    challenge: "Securing executive meetings within a short campaign timeline",
    client: "Global digital services and AI transformation leader",
    href: "/case-studies",
    icon: "Target",
    id: "world-aviation-festival-2025",
    image:
      "https://images.unsplash.com/photo-1540339832862-47452993c66b?q=80&w=2574&auto=format&fit=crop", // Aviation/Conference
    metric: "60 Meetings",
    metricLabel: "Executive meetings secured",
    solution:
      "Delivered active prospecting and meeting coordination to secure 60 qualified meetings",
    title: "World Aviation Festival 2025",
  },
  {
    challenge: "Standing out in a competitive expo without attendee data",
    client: "Enterprise digital experience and cloud transformation brand",
    href: "/case-studies",
    icon: "Sparkles",
    id: "adobe-summit-2025",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop",
    metric: "70+ Leads",
    metricLabel: "Qualified leads generated",
    solution: "Delivered booth engagement and prospecting support to generate 70+ qualified leads",
    title: "Adobe Summit 2025",
  },
  {
    challenge: "Managing dual-client outreach under restricted event timelines",
    client: "Core banking and revenue management technology brands",
    href: "/case-studies",
    icon: "Building2",
    id: "sibos-2025",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    metric: "270+ Leads",
    metricLabel: "Verified enterprise leads",
    solution: "Delivered active prospecting, meeting coordination, and booth engagement support",
    title: "SIBOS 2025",
  },
];
