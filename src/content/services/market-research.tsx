import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const RESEARCH_HERO = {
  description:
    "Stop making decisions in the dark. We provide the human-verified market intelligence and competitor analysis that identifies your next $10M opportunity before your rivals even see it.",
  title: "B2B Market Research and Intelligence — Data-Driven Strategy",
};

export { GLOBAL_PROOF_STATS as RESEARCH_PROOF_BAR } from "../shared";

export const RESEARCH_SERVICES = {
  description:
    "Generic market reports provide yesterday's news. We provide tomorrow's advantage. Our research teams combine large-scale data collection with human-powered analysis to give you a clear view of your competitive landscape, buyer sentiment, and untapped market segments.",
  heading: "Our Market Intelligence Capabilities",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "Deep-dive research into specific industry verticals, identifying emerging trends, regulatory shifts, and high-growth opportunities.",
      href: "/services/market-intelligence",
      icon: "Search",
      id: "intelligence",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      title: "Human-Powered Market Intelligence",
    },
    {
      color: "bg-brand-cyan",
      description:
        "We audit and refresh your existing CRM data, verifying contact details and firmographic fit to ensure 100% outreach accuracy.",
      href: "/services/data-validation",
      icon: "CheckCircle",
      id: "validation",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      title: "Data Validation and Cleansing",
    },
    {
      color: "bg-brand-primary",
      description:
        "Enriching your target account lists with deep technographic insights, buying intent signals, and executive contact data.",
      href: "/services/data-augmentation",
      icon: "PlusCircle",
      id: "augmentation",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      title: "B2B Data Augmentation",
    },
  ],
};

export const RESEARCH_WHY = {
  description:
    "In enterprise sales, being wrong is expensive. Targeting the wrong accounts, using outdated contact data, or misreading competitor moves leads to wasted marketing spend and demoralized sales teams. We provide the 'source of truth' for your growth strategy, ensuring every dollar you invest is backed by verified intelligence.",
  heading: "The Cost of Inaccurate Market Data",
  reasons: [
    {
      description:
        "We don't trust bots with your data. Every insight is verified by a human analyst.",
      id: "accuracy",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Human-Verified Accuracy",
    },
    {
      description: "We don't just deliver data; we deliver the commercial context you need to win.",
      id: "actionable",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Actionable Intelligence",
    },
  ],
};

export const RESEARCH_PROCESS = {
  heading: "Our Research and Intelligence Process",
  phases: [
    {
      description: "Defining the research objectives and target parameters.",
      title: "Briefing and Hypothesis",
    },
    {
      description: "Large-scale harvesting of primary and secondary data points.",
      title: "Data Collection",
    },
    {
      description: "Manual audit and verification of every data point for 100% accuracy.",
      title: "Human Verification",
    },
    {
      description: "Turning raw data into strategic insights and commercial recommendations.",
      title: "Synthesis and Analysis",
    },
    {
      description: "Delivery of findings in actionable formats (CRM sync/Report/Dashboard).",
      title: "Strategic Handover",
    },
  ],
};

export const RESEARCH_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const RESEARCH_FAQ = {
  faqs: [
    {
      answer:
        "We focus on real-time verification. Unlike static databases, our research teams verify data at the moment of the request.",
      id: "freshness",
      question: "How fresh is the data you provide?",
    },
    {
      answer:
        "Yes. We can perform deep-dive 'shadow' research on specific competitors, their pricing models, and their market positioning.",
      id: "custom",
      question: "Can you perform custom competitor analysis?",
    },
    {
      answer:
        "Findings can be delivered as executive reports, interactive dashboards, or direct data injections into your CRM.",
      id: "formats",
      question: "How do you deliver the research findings?",
    },
  ],
  heading: "Market Research FAQs",
};

export const RESEARCH_PAGE = {
  pageId: "service.market-research",
  pageName: "Market Research",
  pageType: "serviceHub",
  seo: {
    canonicalPath: "/services/market-research",
    description:
      "Enterprise B2B market research agency — data augmentation, data validation, and human market intelligence for competitive decisions. Better data. Sharper strategy. Faster market moves.",
    focusKeyphrase: "B2B market research agency",
    secondaryKeywords: [
      "market research",
      "market research companies",
      "market research agency",
      "B2B market intelligence",
    ],
    title: "B2B Market Research Agency and Intelligence Services | B2B Sales Arrow",
  },
} as const;
