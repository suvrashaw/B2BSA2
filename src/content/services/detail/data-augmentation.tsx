import { GLOBAL_CASE_STUDIES } from "../../shared";

export const DATA_AUGMENTATION_HERO = {
  title: "B2B Data Augmentation — Deep Intent, Not Just Contact Info",
  description:
    "Stop selling to companies that aren't buying. We provide the technographic and intent-based enrichment that tells you exactly which companies in your ICP are currently in-market for your solution.",
};

export { GLOBAL_PROOF_STATS as DATA_AUGMENTATION_PROOF_BAR } from "../../shared";

export const DATA_AUGMENTATION_WHY = {
  heading: "Why Enrichment is the Catalyst for Sales Success",
  description:
    "A name and an email address are the bare minimum. To win in a competitive enterprise environment, your sales team needs to know what software their prospect is currently using, what their department's budget looks like, and what public signals they've given that indicate a need for your solution. Our augmentation service turns 'thin' leads into 'thick' dossiers, providing the context that allows your reps to lead with value rather than questions.",
  reasons: [
    {
      id: "context",
      title: "Immediate Context",
      description: "Know your prospect's tech stack and pain points before the first call.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "priority",
      title: "Strategic Prioritization",
      description:
        "Focus your highest-value reps on the accounts with the strongest intent signals.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const DATA_AUGMENTATION_DELIVERABLES = {
  heading: "Our Augmentation Services",
  services: [
    {
      id: "firmographic",
      title: "Firmographic Enrichment",
      description:
        "We add deep organizational data including exact headcount, revenue brackets, funding history, and organizational hierarchy to help you map the buying committee.",
      icon: "Building",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "technographic",
      title: "Technographic Profiling",
      description:
        "Identify the 'digital footprint' of your target accounts — knowing exactly which CRM, cloud provider, or marketing stack they are currently running.",
      icon: "Cpu",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "intent",
      title: "Intent and Trigger Monitoring",
      description:
        "We track public signals — job postings, news, funding rounds, and social activity — to identify the 'moments that matter' for your sales team.",
      icon: "Activity",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "contact",
      title: "Social and Contact Appending",
      description:
        "We bridge the gap between accounts and people, adding verified LinkedIn profiles and direct-dial phone numbers for every key stakeholder.",
      icon: "UserPlus",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const DATA_AUGMENTATION_LAYERS = {
  title: "Enrichment Layers",
  headers: ["Layer", "Insights Provided"],
  rows: [
    {
      layer: "Firmographic",
      "insights provided": "Revenue, headcount, funding history, and expansion signals",
    },
    {
      layer: "Technographic",
      "insights provided": "Current software stack, hardware infrastructure, and IT spend",
    },
    {
      layer: "Intent",
      "insights provided": "Live hiring trends, public press releases, and budget triggers",
    },
    {
      layer: "Psychographic",
      "insights provided": "Decision-maker personality insights and preferred communication styles",
    },
  ],
};

export const DATA_AUGMENTATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_AUGMENTATION_FAQ = {
  heading: "Data Augmentation FAQs",
  faqs: [
    {
      id: "sources",
      question: "Where do you get your intent data?",
      answer:
        "We use a combination of primary research, public record monitoring, and premium B2B intent feeds to provide a 360-degree view of your target accounts.",
    },
    {
      id: "integration",
      question: "Can you push enriched data directly to our CRM?",
      answer:
        "Yes. We can map our augmented fields directly into your HubSpot, Salesforce, or Microsoft Dynamics fields for immediate sales action.",
    },
    {
      id: "match-rate",
      question: "What is your typical match rate?",
      answer:
        "For enterprise-level organizations in the US, Europe, and UAE, we typically achieve a 90%+ match rate for firmographic and technographic data.",
    },
  ],
};
