import { GLOBAL_CASE_STUDIES } from "../../shared";

export const SEO_HERO = {
  title: "B2B SEO Services — Organic Pipeline at Scale",
  description:
    "Stop chasing keywords; start chasing customers. We provide the full-stack B2B SEO that combines technical excellence with authority-building content to put your brand at the top of the search results for the terms that drive revenue.",
};

export { GLOBAL_PROOF_STATS as SEO_PROOF_BAR } from "../../shared";

export const SEO_WHY = {
  heading: "The Power of Organic Intent",
  description:
    "In the B2B world, search is the starting point for almost every major purchase decision. If your brand isn't visible when your prospects are researching solutions to their complex challenges, you are handing leads to your competitors. SEO is not just about 'ranking'; it's about building an organic moat around your brand, driving consistent, high-quality traffic that compounds in value over time without increasing your ad spend.",
  reasons: [
    {
      id: "authority",
      title: "Market Authority",
      description:
        "Ranking for difficult industry terms signals leadership and builds trust with decision-makers.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "compounding",
      title: "Compounding ROI",
      description:
        "Organic traffic grows in value over time, lowering your overall customer acquisition cost.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const SEO_DELIVERABLES = {
  heading: "Our SEO Services",
  services: [
    {
      id: "technical",
      title: "Technical SEO and Site Architecture",
      description:
        "We optimize your site for speed, mobile performance, and crawlability — ensuring search engines can easily find and index your most valuable content.",
      icon: "Settings",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "content",
      title: "Authority Content Clusters",
      description:
        "We move beyond single-keyword targeting to build deep 'topic clusters' that establish your brand as the definitive source of truth in your industry.",
      icon: "FileText",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "backlink",
      title: "Strategic Link Building",
      description:
        "We secure high-authority backlinks from reputable B2B publications and industry sites to boost your domain authority and search rankings.",
      icon: "Link",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "reporting",
      title: "Pipeline-First Reporting",
      description:
        "We don't just report on rankings. We track organic conversions and attribute them to your bottom-line revenue goals.",
      icon: "BarChart",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const SEO_ROADMAP = {
  title: "SEO Milestone Roadmap",
  headers: ["Month", "Focus"],
  rows: [
    {
      month: "Month 1",
      focus: "Technical Audit and Baseline Performance Mapping",
    },
    {
      month: "Month 2",
      focus: "Keyword Gap Analysis and Content Strategy Design",
    },
    {
      month: "Month 3",
      focus: "Launch of Initial Authority Content Clusters",
    },
    {
      month: "Month 4+",
      focus: "Continuous Optimization, Link Building, and Pipeline Scaling",
    },
  ],
};

export const SEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const SEO_FAQ = {
  heading: "B2B SEO FAQs",
  faqs: [
    {
      id: "timeline",
      question: "How long until we see organic growth?",
      answer:
        "SEO is a medium-term strategy. While technical fixes can show results in weeks, meaningful growth in organic pipeline typically takes 3–6 months.",
    },
    {
      id: "ppc-vs-seo",
      question: "Should we do SEO or PPC?",
      answer:
        "The most successful enterprise brands do both. PPC captures immediate demand, while SEO builds long-term authority and drives lower-cost leads over time.",
    },
    {
      id: "guarantee",
      question: "Do you guarantee #1 rankings?",
      answer:
        "No reputable agency can guarantee specific rankings due to algorithm volatility, but we do guarantee a significant increase in your organic pipeline value.",
    },
  ],
};
