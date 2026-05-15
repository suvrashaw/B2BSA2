import { GLOBAL_CASE_STUDIES } from "../../shared";

export const PAID_ADS_HERO = {
  title: "B2B Paid Advertising — Captured Demand, Accelerated Pipeline",
  description:
    "Stop paying for traffic that doesn't convert. We provide the precision-targeted paid media across Google, Programmatic, and Retargeting that captures high-intent buyers at the exact moment they are looking for a solution.",
};

export { GLOBAL_PROOF_STATS as PAID_ADS_PROOF_BAR } from "../../shared";

export const PAID_ADS_WHY = {
  heading: "The Speed of Paid Acquisition",
  description:
    "In the enterprise space, waiting for organic growth isn't always an option. Paid advertising allows you to 'jump the queue' and put your brand directly in front of active buyers today. However, without proper targeting and tracking, paid media is a fast way to burn budget. We specialize in high-precision B2B campaigns that focus on intent and firmographic fit, ensuring your ad spend is always working to fill your pipeline, not just inflate your traffic stats.",
  reasons: [
    {
      id: "speed",
      title: "Immediate Impact",
      description: "Launch a campaign today and see qualified traffic and leads this week.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "control",
      title: "Granular Control",
      description:
        "Scale your spend up or down based on your sales team's capacity and your revenue targets.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const PAID_ADS_DELIVERABLES = {
  heading: "Our Paid Media Services",
  services: [
    {
      id: "google",
      title: "Google Search Ads (PPC)",
      description:
        "We dominate the search results for your most valuable enterprise keywords, capturing demand at the moment of highest intent.",
      icon: "Search",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "display",
      title: "Programmatic and Display Advertising",
      description:
        "We use account-based marketing (ABM) data to show your ads only to decision-makers within your specific target account list.",
      icon: "Cpu",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "retargeting",
      title: "High-Conversion Retargeting",
      description:
        "Stay top-of-mind throughout the long B2B buying cycle with coordinated retargeting across the web and social platforms.",
      icon: "RefreshCw",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "tracking",
      title: "Conversion and Attribution Management",
      description:
        "We implement deep server-side tracking to ensure every lead and deal can be traced back to the specific ad that generated it.",
      icon: "BarChart",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const PAID_ADS_STRATEGIES = {
  title: "Ad Strategy Comparison",
  headers: ["Channel", "Best For"],
  rows: [
    {
      channel: "Google Search",
      "best for": "High-intent, bottom-of-funnel demand capture",
    },
    {
      channel: "Programmatic Display",
      "best for": "Brand awareness and retargeting within target accounts",
    },
    {
      channel: "YouTube for B2B",
      "best for": "Educational content and complex product storytelling",
    },
    {
      channel: "Cross-Channel Retargeting",
      "best for": "Shortening long enterprise sales cycles",
    },
  ],
};

export const PAID_ADS_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const PAID_ADS_FAQ = {
  heading: "Paid Advertising FAQs",
  faqs: [
    {
      id: "spend",
      question: "How much should we spend initially?",
      answer:
        "We recommend a minimum pilot budget of $3,000–$5,000 per month to generate enough data for our optimization models to work effectively.",
    },
    {
      id: "timeline",
      question: "How soon will we see leads?",
      answer:
        "Unlike SEO, paid ads can generate leads within the first week of launch. However, full funnel optimization typically takes 2–3 months.",
    },
    {
      id: "tracking",
      question: "Can you track offline sales?",
      answer:
        "Yes. By syncing your ad platforms with your CRM, we can track exactly which ads resulted in a signed contract, not just a lead form submission.",
    },
  ],
};
