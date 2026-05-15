import type { CaseStudyIndexEntry } from "@/types/case-studies";

export const CASE_STUDIES_PAGE_CONTENT = {
  hero: {
    title: "Enterprise Results That Speak for Themselves",
    description:
      "Results matter more than promises. Documented outcomes from real enterprise B2B programs — trade show lead generation, booth design, video production, performance marketing, and market research.",
    image: {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000",
      alt: "Enterprise growth results dashboard",
    },
    proofBarStats: [
      "250+ events",
      "$1.2B+ pipeline influenced",
      "40+ countries",
      "15,000+ enterprise leads",
      "98% client retention",
      "500+ booth designs",
    ],
  },
  filtersTitle: "Filter by: Service Category | Industry | Geography | Company Size",
  filters: [
    { id: "serviceCategory", label: "Service Category" },
    { id: "industry", label: "Industry" },
    { id: "geography", label: "Geography" },
    { id: "companySize", label: "Company Size" },
  ] as const,
  resultsHeading: "Recent Program Results",
  cardCtaLabel: "Read Full Study",
  template: {
    title: "Case Study Template — For Future Entries",
    items: [
      "Client Context: industry, size, geography, event or campaign type",
      "The Challenge: specific commercial problem or objective",
      "What We Did: exact scope, geography, timeline, and approach",
      "The Results: specific numbers — leads, pipeline, meetings, cost per opportunity",
      "Client Quote: named, attributed, with job title",
      "Service Tags: which B2B Sales Arrow services were involved",
    ],
  },
  cta: {
    title:
      "Enterprise results are not accidental. They are engineered through strategy, creative execution, data quality, and disciplined follow-up. Could your next program become our next case study?",
    ctaLabel: "Request a Strategy Consultation",
    ctaHref: "/contact",
  },
};

export const CASE_STUDIES_PAGE_STUDIES: CaseStudyIndexEntry[] = [
  {
    id: "adobe-summit-2025",
    anchorId: "adobe-summit-2025",
    title: "Case Study 1: Adobe Summit 2025 — Enterprise Event Lead Generation, Las Vegas",
    industry: "Enterprise Technology / Digital Experience",
    event: "Adobe Summit, Las Vegas",
    servicesText: "Event Lead Generation, Active Prospecting, CRM Integration.",
    serviceCategories: ["Event Lead Generation", "Active Prospecting", "CRM Integration"],
    geography: "Las Vegas",
    companySize: "Enterprise",
    challenge:
      "Generate qualified pipeline at a flagship US event with high exhibitor competition and a technically sophisticated buyer audience who had attended multiple times previously.",
    whatWeDid:
      "Full event lead generation program — pre-event ICP mapping and target account outreach, BANT-qualified booth capture, active prospecting across the event floor, and CRM-ready delivery within 48 hours.",
    results:
      "320+ qualified conversations recorded over 3 event days. 87 BANT-qualified leads delivered to sales within 48 hours. 22 meetings progressed to pipeline within 30 days. Lead-to-pipeline conversion: 25.3%.",
    card: {
      id: "adobe-summit-2025",
      client: "Adobe Summit 2025",
      title: "Case Study 1: Adobe Summit 2025 — Enterprise Event Lead Generation, Las Vegas",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
      icon: "BarChart3",
      metric: "87",
      metricLabel: "BANT-Qualified Leads",
      primarySummary: {
        label: "The Challenge",
        text: "Generate qualified pipeline at a flagship US event with high exhibitor competition and a technically sophisticated buyer audience who had attended multiple times previously.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Full event lead generation program — pre-event ICP mapping and target account outreach, BANT-qualified booth capture, active prospecting across the event floor, and CRM-ready delivery within 48 hours.",
      },
      href: "#adobe-summit-2025",
      badge: "Event Lead Generation",
      inactiveLabel: "Adobe Summit 2025",
    },
  },
  {
    id: "money-20-20-europe-2025",
    anchorId: "money-20-20-europe-2025",
    title: "Case Study 2: Money 20/20 Europe 2025 — First-Time Market Entry, Amsterdam",
    industry: "Fintech / Payments / Embedded Finance",
    event: "Money 20/20 Europe, Amsterdam",
    servicesText:
      "Custom Booth Design, Event Lead Generation, Active Prospecting, Sales Team Briefing.",
    serviceCategories: [
      "Custom Booth Design",
      "Event Lead Generation",
      "Active Prospecting",
      "Sales Team Briefing",
    ],
    geography: "Amsterdam",
    companySize: "Enterprise",
    challenge:
      "First-time European market appearance with limited brand recognition and a sales team unfamiliar with the event environment and European buyer expectations.",
    whatWeDid:
      "Custom 10x20 inline booth design and build, pre-event sales team briefing sessions, priority account list built from registered attendee data, CHAMP-qualified lead capture, and same-day CRM routing.",
    results:
      "190+ qualified conversations across 3 days. 54 CHAMP-qualified leads delivered to named sales owners. 8 European partnerships initiated from the event. Client signed a 12-month global event program within 6 weeks.",
    card: {
      id: "money-20-20-europe-2025",
      client: "Money 20/20 Europe 2025",
      title: "Case Study 2: Money 20/20 Europe 2025 — First-Time Market Entry, Amsterdam",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      icon: "Target",
      metric: "54",
      metricLabel: "CHAMP-Qualified Leads",
      primarySummary: {
        label: "The Challenge",
        text: "First-time European market appearance with limited brand recognition and a sales team unfamiliar with the event environment and European buyer expectations.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Custom 10x20 inline booth design and build, pre-event sales team briefing sessions, priority account list built from registered attendee data, CHAMP-qualified lead capture, and same-day CRM routing.",
      },
      href: "#money-20-20-europe-2025",
      badge: "Custom Booth Design",
      inactiveLabel: "Money 20/20 Europe 2025",
    },
  },
  {
    id: "world-aviation-festival-2025",
    anchorId: "world-aviation-festival-2025",
    title:
      "Case Study 3: World Aviation Festival 2025 — Relationship-Driven Enterprise Sales, Amsterdam",
    industry: "Aviation Technology / Digital Transformation",
    event: "World Aviation Festival, Amsterdam",
    servicesText:
      "Full Event Program — Booth, Lead Generation, Meeting Scheduling, Post-Event Follow-Up.",
    serviceCategories: [
      "Full Event Program",
      "Booth",
      "Lead Generation",
      "Meeting Scheduling",
      "Post-Event Follow-Up",
    ],
    geography: "Amsterdam",
    companySize: "Enterprise",
    challenge:
      "Deep relationships with existing accounts needed to be advanced, while simultaneously generating new qualified conversations with procurement and digital transformation decision-makers across EMEA — in a high-trust, relationship-driven sector.",
    whatWeDid:
      "Premium booth environment, pre-event outreach and meeting scheduling for leadership team, structured active prospecting, on-site qualification capture, and a post-event follow-up sequence designed for aviation procurement cycles.",
    results:
      "14 pre-scheduled meetings with C-level and VP-level aviation decision-makers. 110+ qualified conversations captured. 3 existing client relationships advanced to contract expansion discussions within 60 days. 1 net-new enterprise deal initiated directly from an event conversation.",
    card: {
      id: "world-aviation-festival-2025",
      client: "World Aviation Festival 2025",
      title:
        "Case Study 3: World Aviation Festival 2025 — Relationship-Driven Enterprise Sales, Amsterdam",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      icon: "Plane",
      metric: "110+",
      metricLabel: "Qualified Conversations",
      primarySummary: {
        label: "The Challenge",
        text: "Deep relationships with existing accounts needed to be advanced, while simultaneously generating new qualified conversations with procurement and digital transformation decision-makers across EMEA — in a high-trust, relationship-driven sector.",
      },
      secondarySummary: {
        label: "What We Did",
        text: "Premium booth environment, pre-event outreach and meeting scheduling for leadership team, structured active prospecting, on-site qualification capture, and a post-event follow-up sequence designed for aviation procurement cycles.",
      },
      href: "#world-aviation-festival-2025",
      badge: "Full Event Program",
      inactiveLabel: "World Aviation Festival 2025",
    },
  },
];
