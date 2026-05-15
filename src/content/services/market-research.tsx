import { GLOBAL_CASE_STUDIES } from "../shared";

export const RESEARCH_HERO = {
  title: "B2B Market Research and Intelligence — Data-Driven Strategy",
  description:
    "Stop making decisions in the dark. We provide the human-verified market intelligence and competitor analysis that identifies your next $10M opportunity before your rivals even see it.",
};

export { GLOBAL_PROOF_STATS as RESEARCH_PROOF_BAR } from "../shared";

export const RESEARCH_SERVICES = {
  heading: "Our Market Intelligence Capabilities",
  description:
    "Generic market reports provide yesterday's news. We provide tomorrow's advantage. Our research teams combine large-scale data collection with human-powered analysis to give you a clear view of your competitive landscape, buyer sentiment, and untapped market segments.",
  services: [
    {
      id: "intelligence",
      title: "Human-Powered Market Intelligence",
      description:
        "Deep-dive research into specific industry verticals, identifying emerging trends, regulatory shifts, and high-growth opportunities.",
      icon: "Search",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
      href: "/services/market-research/human-powered-market-intelligence",
    },
    {
      id: "validation",
      title: "Data Validation and Cleansing",
      description:
        "We audit and refresh your existing CRM data, verifying contact details and firmographic fit to ensure 100% outreach accuracy.",
      icon: "CheckCircle",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
      href: "/services/market-research/data-validation",
    },
    {
      id: "augmentation",
      title: "B2B Data Augmentation",
      description:
        "Enriching your target account lists with deep technographic insights, buying intent signals, and executive contact data.",
      icon: "PlusCircle",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
      href: "/services/market-research/data-augmentation",
    },
  ],
};

export const RESEARCH_WHY = {
  heading: "The Cost of Inaccurate Market Data",
  description:
    "In enterprise sales, being wrong is expensive. Targeting the wrong accounts, using outdated contact data, or misreading competitor moves leads to wasted marketing spend and demoralized sales teams. We provide the 'source of truth' for your growth strategy, ensuring every dollar you invest is backed by verified intelligence.",
  reasons: [
    {
      id: "accuracy",
      title: "Human-Verified Accuracy",
      description:
        "We don't trust bots with your data. Every insight is verified by a human analyst.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "actionable",
      title: "Actionable Intelligence",
      description: "We don't just deliver data; we deliver the commercial context you need to win.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const RESEARCH_PROCESS = {
  heading: "Our Research and Intelligence Process",
  phases: [
    {
      title: "Briefing and Hypothesis",
      description: "Defining the research objectives and target parameters.",
    },
    {
      title: "Data Collection",
      description: "Large-scale harvesting of primary and secondary data points.",
    },
    {
      title: "Human Verification",
      description: "Manual audit and verification of every data point for 100% accuracy.",
    },
    {
      title: "Synthesis and Analysis",
      description: "Turning raw data into strategic insights and commercial recommendations.",
    },
    {
      title: "Strategic Handover",
      description: "Delivery of findings in actionable formats (CRM sync/Report/Dashboard).",
    },
  ],
};

export const RESEARCH_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const RESEARCH_FAQ = {
  heading: "Market Research FAQs",
  faqs: [
    {
      id: "freshness",
      question: "How fresh is the data you provide?",
      answer:
        "We focus on real-time verification. Unlike static databases, our research teams verify data at the moment of the request.",
    },
    {
      id: "custom",
      question: "Can you perform custom competitor analysis?",
      answer:
        "Yes. We can perform deep-dive 'shadow' research on specific competitors, their pricing models, and their market positioning.",
    },
    {
      id: "formats",
      question: "How do you deliver the research findings?",
      answer:
        "Findings can be delivered as executive reports, interactive dashboards, or direct data injections into your CRM.",
    },
  ],
};
