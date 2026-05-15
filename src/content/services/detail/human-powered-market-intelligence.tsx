import { GLOBAL_CASE_STUDIES } from "../../shared";

export const MARKET_INTEL_HERO = {
  title: "Human-Powered Market Intelligence — Enterprise Insights, Verified",
  description:
    "AI can find data, but it cannot find truth. We provide the human-verified intelligence that gives your sales team the 'unfair advantage' they need to break into complex enterprise accounts.",
};

export { GLOBAL_PROOF_STATS as MARKET_INTEL_PROOF_BAR } from "../../shared";

export const MARKET_INTEL_WHY = {
  heading: "The Advantage of Account-Level Truth",
  description:
    "Enterprise sales are won or lost on the quality of your insights. If your sales team is working with the same generic data as your competitors, they have no strategic advantage. Our human analysts go beyond public records to identify the 'hidden' organizational structures, current vendor frustrations, and specific budget cycles of your target accounts. This isn't just data; it's the tactical intelligence you need to dominate your sector.",
  reasons: [
    {
      id: "advantage",
      title: "Strategic Advantage",
      description: "Know your prospect's pain points before they even mention them.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "personalization",
      title: "Hyper-Personalization",
      description:
        "Enable outreach that is so relevant it cannot be ignored by C-suite executives.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const MARKET_INTEL_DELIVERABLES = {
  heading: "Our Intelligence Services",
  services: [
    {
      id: "profiling",
      title: "Deep Account Profiling",
      description:
        "We build comprehensive dossiers on your Top 50 target accounts, including organizational charts, key decision-maker bios, and historical vendor relationships.",
      icon: "UserCheck",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "technographic",
      title: "Technographic and Intent Mapping",
      description:
        "Identify exactly which technologies your prospects are using today and which contract cycles are coming to an end, allowing you to time your outreach perfectly.",
      icon: "Cpu",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "competitor",
      title: "Competitor 'Shadow' Research",
      description:
        "Understand exactly how your competitors are positioning themselves within your target accounts and where their service delivery is falling short.",
      icon: "Shield",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "sentiment",
      title: "Buyer Sentiment Analysis",
      description:
        "We conduct primary research to understand the real-time needs and objections of your Ideal Customer Profile, helping you refine your messaging.",
      icon: "Activity",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const MARKET_INTEL_TIERS = {
  title: "Intel Tier Guide",
  headers: ["Research Level", "Deliverables"],
  rows: [
    {
      "research level": "Macro Vertical",
      deliverables: "High-level industry trends, regulatory impacts, and growth mapping",
    },
    {
      "research level": "Competitive Audit",
      deliverables: "Feature-by-feature comparison and market sentiment analysis",
    },
    {
      "research level": "Target Account Dossier",
      deliverables: "Deep-dive org charts, DM profiles, and current vendor analysis",
    },
    {
      "research level": "Live Intent Feed",
      deliverables: "Real-time signals of budget shifts or leadership changes",
    },
  ],
};

export const MARKET_INTEL_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const MARKET_INTEL_FAQ = {
  heading: "Market Intelligence FAQs",
  faqs: [
    {
      id: "manual",
      question: "Is this research done by AI?",
      answer:
        "We use AI for initial data harvesting, but 100% of the strategic insights and verification are performed by human analysts with sector-specific expertise.",
    },
    {
      id: "legal",
      question: "Is this research ethically sourced?",
      answer:
        "Absolutely. All our intelligence is gathered from public records, verified industry sources, and primary research conducted within legal and ethical guidelines.",
    },
    {
      id: "crm",
      question: "How do we receive the intelligence?",
      answer:
        "We can provide structured dossiers (PDF/Doc) for your sales team or sync the data directly into your CRM account fields.",
    },
  ],
};
