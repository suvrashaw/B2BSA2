import { GLOBAL_CASE_STUDIES } from "../shared";

export const PERF_HERO = {
  title: "B2B Performance Marketing — ROI-First Growth",
  description:
    "Stop 'spraying and praying' with your ad spend. We provide the full-funnel performance marketing that combines data-driven targeting with high-conversion creative to deliver a measurable return on every dollar.",
};

export { GLOBAL_PROOF_STATS as PERF_PROOF_BAR } from "../shared";

export const PERF_SERVICES = {
  heading: "Our Performance Marketing Capabilities",
  description:
    "Performance marketing in the B2B enterprise space is about quality, not just clicks. We focus on reaching the right stakeholders within your target accounts, using multi-channel strategies to build trust and drive high-intent actions. From demand generation to bottom-of-funnel conversion, we ensure your marketing engine is always optimized for revenue.",
  services: [
    {
      id: "seo",
      title: "B2B SEO Services",
      description:
        "We don't just chase traffic; we chase pipeline. Our SEO strategies target high-intent enterprise keywords and build authority through expert-led content clusters.",
      icon: "Search",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
      href: "/services/performance-marketing/seo-services",
    },
    {
      id: "paid",
      title: "B2B Paid Advertising",
      description:
        "Precision-targeted campaigns across Google Ads, Programmatic Display, and Retargeting, built to capture demand exactly when your prospects are searching for solutions.",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
      href: "/services/performance-marketing/paid-advertising",
    },
    {
      id: "linkedin",
      title: "LinkedIn Ads for B2B",
      description:
        "The gold standard for B2B targeting. We use account-based marketing (ABM) and lead generation forms to put your message directly in front of C-suite decision-makers.",
      icon: "ExternalLink",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
      href: "/services/performance-marketing/linkedin-ads",
    },
  ],
};

export const PERF_WHY = {
  heading: "The Performance Marketing ROI Engine",
  description:
    "Most agencies focus on vanity metrics like impressions and clicks. We focus on pipeline value and customer acquisition cost (CAC). By aligning your marketing spend with your sales goals, we create a transparent growth engine where every dollar spent is an investment in future revenue. We treat your budget as if it were our own, constanty testing and optimizing for the highest possible return.",
  reasons: [
    {
      id: "full-funnel",
      title: "Full-Funnel Alignment",
      description: "We bridge the gap between marketing interest and sales closing.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "mastery",
      title: "Multi-Channel Mastery",
      description: "Coordinated campaigns that work together to lower your overall CAC.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const PERF_PROCESS = {
  heading: "Our Performance Marketing Process",
  phases: [
    {
      title: "Funnel Audit and Strategy",
      description: "Analyzing your current metrics and defining the optimal growth path.",
    },
    {
      title: "Targeting and Segmenting",
      description: "Defining the account-based targets and decision-maker personas.",
    },
    {
      title: "Creative and Messaging",
      description: "Building high-conversion ad copy and landing page environments.",
    },
    {
      title: "Launch and Continuous Optimization",
      description: "Real-time monitoring and A/B testing to drive down cost per lead.",
    },
    {
      title: "Attribution and Reporting",
      description: "Clear, transparent reporting on pipeline value and ROI.",
    },
  ],
};

export const PERF_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const PERF_FAQ = {
  heading: "Performance Marketing FAQs",
  faqs: [
    {
      id: "budget",
      question: "What is the recommended starting budget?",
      answer:
        "We typically recommend a minimum ad spend of $5,000 per month to ensure enough data for meaningful optimization, though this varies by market and channel.",
    },
    {
      id: "tracking",
      question: "How do you track sales from ads?",
      answer:
        "We use advanced multi-touch attribution and CRM integration to track leads from their very first click all the way to a closed-won deal.",
    },
    {
      id: "seo-timeline",
      question: "How long does SEO take to work?",
      answer:
        "SEO is a long-term investment. While you may see technical improvements in weeks, significant organic growth typically takes 4–6 months of consistent effort.",
    },
  ],
};
