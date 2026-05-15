import { GLOBAL_CASE_STUDIES } from "../../shared";

export const LINKEDIN_ADS_HERO = {
  title: "LinkedIn Ads for B2B — Precision ABM at Scale",
  description:
    "Stop wasting budget on 'lookalike' audiences. We provide the strategic LinkedIn Advertising that reaches the specific people at the specific companies you need to win, using account-based targeting to build authority and drive leads.",
};

export { GLOBAL_PROOF_STATS as LINKEDIN_ADS_PROOF_BAR } from "../../shared";

export const LINKEDIN_ADS_WHY = {
  heading: "The Power of the Professional Context",
  description:
    "LinkedIn is not just another social network; it's the world's most comprehensive database of professional intent. When you advertise on LinkedIn, your message appears in a context of professional growth and decision-making. We leverage LinkedIn's unparalleled first-party data to build account-based marketing (ABM) campaigns that don't just 'get impressions,' but reach the specific C-suite executives and procurement leads who hold the keys to your enterprise deals.",
  reasons: [
    {
      id: "precision",
      title: "Unerring Precision",
      description: "Target by exact company, seniority, and skill set with 100% accuracy.",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "trust",
      title: "Inherited Trust",
      description:
        "Benefit from the high-trust environment of LinkedIn to build your brand authority.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const LINKEDIN_ADS_DELIVERABLES = {
  heading: "Our LinkedIn Ads Services",
  services: [
    {
      id: "targeting",
      title: "Advanced ABM Targeting",
      description:
        "We upload your specific target account list and use LinkedIn's Matched Audiences to ensure your ads are only seen by the companies you want to win.",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "leadgen",
      title: "Lead Gen Form Optimization",
      description:
        "We use LinkedIn's native lead gen forms to capture high-quality prospect data with one click, drastically increasing your conversion rate compared to external landing pages.",
      icon: "Scan",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "content",
      title: "Thought Leadership Content Ads",
      description:
        "We use Sponsored Content to promote your most valuable industry insights, positioning your executives as market leaders before the sales call ever happens.",
      icon: "Palette",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "integration",
      title: "Full CRM Lead Synchronization",
      description:
        "We ensure every lead captured on LinkedIn is instantly pushed into your CRM with all firmographic data intact for immediate follow-up.",
      icon: "RefreshCw",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const LINKEDIN_ADS_FORMATS = {
  title: "Ad Format Efficiency",
  headers: ["Format", "Best For"],
  rows: [
    {
      format: "Sponsored Content",
      "best for": "High-level thought leadership and brand building",
    },
    {
      format: "Lead Gen Forms",
      "best for": "Capturing high-intent data without leaving LinkedIn",
    },
    {
      format: "Document Ads",
      "best for": "Gated content downloads (Whitepapers, E-books)",
    },
    {
      format: "Video Ads",
      "best for": "Product demos and complex service storytelling",
    },
  ],
};

export const LINKEDIN_ADS_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const LINKEDIN_ADS_FAQ = {
  heading: "LinkedIn Advertising FAQs",
  faqs: [
    {
      id: "cpc",
      question: "Isn't LinkedIn too expensive?",
      answer:
        "While the cost-per-click is higher than other platforms, the quality of leads and the ability to target only high-value accounts typically leads to a much lower cost-per-deal.",
    },
    {
      id: "targeting-scale",
      question: "How small can we go with targeting?",
      answer:
        "LinkedIn requires a minimum audience size of 300 people. We specialize in building 'micro-ABM' campaigns that stay just above this limit for maximum precision.",
    },
    {
      id: "sales-alignment",
      question: "Can we target our sales team's leads?",
      answer:
        "Yes. We can upload specific lead lists or target visitors of specific high-value pages on your website to ensure sales and marketing are in total alignment.",
    },
  ],
};
