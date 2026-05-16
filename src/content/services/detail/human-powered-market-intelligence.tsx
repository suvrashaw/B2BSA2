import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const MARKET_INTEL_HERO = {
  description:
    "AI can find data, but it cannot find truth. We provide the human-verified intelligence that gives your sales team the 'unfair advantage' they need to break into complex enterprise accounts.",
  title: "Human-Powered Market Intelligence — Enterprise Insights, Verified",
};

export { GLOBAL_PROOF_STATS as MARKET_INTEL_PROOF_BAR } from "../../shared";

export const MARKET_INTEL_WHY = {
  description:
    "Enterprise sales are won or lost on the quality of your insights. If your sales team is working with the same generic data as your competitors, they have no strategic advantage. Our human analysts go beyond public records to identify the 'hidden' organizational structures, current vendor frustrations, and specific budget cycles of your target accounts. This isn't just data; it's the tactical intelligence you need to dominate your sector.",
  heading: "The Advantage of Account-Level Truth",
  reasons: [
    {
      description: "Know your prospect's pain points before they even mention them.",
      id: "advantage",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Strategic Advantage",
    },
    {
      description:
        "Enable outreach that is so relevant it cannot be ignored by C-suite executives.",
      id: "personalization",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Hyper-Personalization",
    },
  ],
};

export const MARKET_INTEL_DELIVERABLES = {
  heading: "Our Intelligence Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "We build comprehensive dossiers on your Top 50 target accounts, including organizational charts, key decision-maker bios, and historical vendor relationships.",
      icon: "UserCheck",
      id: "profiling",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Deep Account Profiling",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Identify exactly which technologies your prospects are using today and which contract cycles are coming to an end, allowing you to time your outreach perfectly.",
      icon: "Cpu",
      id: "technographic",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      title: "Technographic and Intent Mapping",
    },
    {
      color: "bg-brand-primary",
      description:
        "Understand exactly how your competitors are positioning themselves within your target accounts and where their service delivery is falling short.",
      icon: "Shield",
      id: "competitor",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
      title: "Competitor 'Shadow' Research",
    },
    {
      color: "bg-brand-blue",
      description:
        "We conduct primary research to understand the real-time needs and objections of your Ideal Customer Profile, helping you refine your messaging.",
      icon: "Activity",
      id: "sentiment",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Buyer Sentiment Analysis",
    },
  ],
};

export const MARKET_INTEL_TIERS = {
  headers: ["Research Level", "Deliverables"],
  rows: [
    {
      deliverables: "High-level industry trends, regulatory impacts, and growth mapping",
      "research level": "Macro Vertical",
    },
    {
      deliverables: "Feature-by-feature comparison and market sentiment analysis",
      "research level": "Competitive Audit",
    },
    {
      deliverables: "Deep-dive org charts, DM profiles, and current vendor analysis",
      "research level": "Target Account Dossier",
    },
    {
      deliverables: "Real-time signals of budget shifts or leadership changes",
      "research level": "Live Intent Feed",
    },
  ],
  title: "Intel Tier Guide",
};

export const MARKET_INTEL_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const MARKET_INTEL_FAQ = {
  faqs: [
    {
      answer:
        "We use AI for initial data harvesting, but 100% of the strategic insights and verification are performed by human analysts with sector-specific expertise.",
      id: "manual",
      question: "Is this research done by AI?",
    },
    {
      answer:
        "Absolutely. All our intelligence is gathered from public records, verified industry sources, and primary research conducted within legal and ethical guidelines.",
      id: "legal",
      question: "Is this research ethically sourced?",
    },
    {
      answer:
        "We can provide structured dossiers (PDF/Doc) for your sales team or sync the data directly into your CRM account fields.",
      id: "crm",
      question: "How do we receive the intelligence?",
    },
  ],
  heading: "Market Intelligence FAQs",
};

export const MARKET_INTEL_PAGE = {
  pageId: "service.market-intelligence",
  pageName: "Human-Powered Market Intelligence",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/market-intelligence",
    description:
      "Human-powered market intelligence for B2B — competitor analysis, buyer behaviour research, TAM analysis, win/loss interviews, expert panels, and strategic reports. The insight automated tools cannot deliver.",
    focusKeyphrase: "human-powered market intelligence",
    secondaryKeywords: [
      "B2B market intelligence services",
      "competitive intelligence B2B",
      "brand research",
      "AI market research",
    ],
    title: "Human-Powered B2B Market Intelligence Services | B2B Sales Arrow",
  },
} as const;
