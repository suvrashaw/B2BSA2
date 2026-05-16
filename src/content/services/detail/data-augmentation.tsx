import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const DATA_AUGMENTATION_HERO = {
  description:
    "Stop selling to companies that aren't buying. We provide the technographic and intent-based enrichment that tells you exactly which companies in your ICP are currently in-market for your solution.",
  title: "B2B Data Augmentation — Deep Intent, Not Just Contact Info",
};

export { GLOBAL_PROOF_STATS as DATA_AUGMENTATION_PROOF_BAR } from "../../shared";

export const DATA_AUGMENTATION_WHY = {
  description:
    "A name and an email address are the bare minimum. To win in a competitive enterprise environment, your sales team needs to know what software their prospect is currently using, what their department's budget looks like, and what public signals they've given that indicate a need for your solution. Our augmentation service turns 'thin' leads into 'thick' dossiers, providing the context that allows your reps to lead with value rather than questions.",
  heading: "Why Enrichment is the Catalyst for Sales Success",
  reasons: [
    {
      description: "Know your prospect's tech stack and pain points before the first call.",
      id: "context",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Immediate Context",
    },
    {
      description:
        "Focus your highest-value reps on the accounts with the strongest intent signals.",
      id: "priority",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Strategic Prioritization",
    },
  ],
};

export const DATA_AUGMENTATION_DELIVERABLES = {
  heading: "Our Augmentation Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "We add deep organizational data including exact headcount, revenue brackets, funding history, and organizational hierarchy to help you map the buying committee.",
      icon: "Building",
      id: "firmographic",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      title: "Firmographic Enrichment",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Identify the 'digital footprint' of your target accounts — knowing exactly which CRM, cloud provider, or marketing stack they are currently running.",
      icon: "Cpu",
      id: "technographic",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      title: "Technographic Profiling",
    },
    {
      color: "bg-brand-primary",
      description:
        "We track public signals — job postings, news, funding rounds, and social activity — to identify the 'moments that matter' for your sales team.",
      icon: "Activity",
      id: "intent",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Intent and Trigger Monitoring",
    },
    {
      color: "bg-brand-blue",
      description:
        "We bridge the gap between accounts and people, adding verified LinkedIn profiles and direct-dial phone numbers for every key stakeholder.",
      icon: "UserPlus",
      id: "contact",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
      title: "Social and Contact Appending",
    },
  ],
};

export const DATA_AUGMENTATION_LAYERS = {
  headers: ["Layer", "Insights Provided"],
  rows: [
    {
      "insights provided": "Revenue, headcount, funding history, and expansion signals",
      layer: "Firmographic",
    },
    {
      "insights provided": "Current software stack, hardware infrastructure, and IT spend",
      layer: "Technographic",
    },
    {
      "insights provided": "Live hiring trends, public press releases, and budget triggers",
      layer: "Intent",
    },
    {
      "insights provided": "Decision-maker personality insights and preferred communication styles",
      layer: "Psychographic",
    },
  ],
  title: "Enrichment Layers",
};

export const DATA_AUGMENTATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_AUGMENTATION_FAQ = {
  faqs: [
    {
      answer:
        "We use a combination of primary research, public record monitoring, and premium B2B intent feeds to provide a 360-degree view of your target accounts.",
      id: "sources",
      question: "Where do you get your intent data?",
    },
    {
      answer:
        "Yes. We can map our augmented fields directly into your HubSpot, Salesforce, or Microsoft Dynamics fields for immediate sales action.",
      id: "integration",
      question: "Can you push enriched data directly to our CRM?",
    },
    {
      answer:
        "For enterprise-level organizations in the US, Europe, and UAE, we typically achieve a 90%+ match rate for firmographic and technographic data.",
      id: "match-rate",
      question: "What is your typical match rate?",
    },
  ],
  heading: "Data Augmentation FAQs",
};

export const DATA_AUGMENTATION_PAGE = {
  pageId: "service.data-augmentation",
  pageName: "Data Augmentation",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/data-augmentation",
    description:
      "B2B data augmentation services — verified firmographic, technographic, contact, and intent data enrichment. Transform your CRM from an incomplete database into a precision sales intelligence asset.",
    focusKeyphrase: "data augmentation services",
    secondaryKeywords: [
      "CRM data enrichment",
      "contact data enrichment",
      "firmographic data enrichment",
      "data validation services",
    ],
    title: "B2B Data Augmentation Services and CRM Enrichment | B2B Sales Arrow",
  },
} as const;
