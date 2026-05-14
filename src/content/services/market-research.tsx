export const MR_HERO = {
  showPreloader: false,
  eyebrow: "B2B MARKET RESEARCH",
  title: (
    <>
      Market Research That Gives You an{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Unfair Competitive Advantage
      </span>
    </>
  ),
  description:
    "Data-driven growth starts with knowing your market better than anyone else. We deliver human-powered market intelligence, validated data, and strategic insights that accelerate enterprise decisions.",
  image: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    alt: "Market research and data analytics",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Request a Research Proposal",
  secondaryCtaLabel: "Start Your Research Project",
  stat: {
    value: "98%",
    label: "Data Accuracy Rate",
    icon: "CheckCircle",
  },
};

export const MR_SERVICES = {
  eyebrow: "OUR RESEARCH SERVICES",
  heading: (
    <>
      Enterprise Market{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Research Solutions
      </span>
    </>
  ),
  serviceLabel: "Service",
  ctaLabel: "Learn More",
  services: [
    {
      id: "data-augmentation",
      title: "Data Augmentation",
      description:
        "Enrich your existing prospect and customer data with firmographic, technographic, and intent signals from 350M+ verified contacts.",
      icon: "Database",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "data-validation",
      title: "Data Validation",
      description:
        "Multi-layer verification of email addresses, phone numbers, and firmographic data to eliminate bounces and wasted outreach.",
      icon: "CheckCircle",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "market-intelligence",
      title: "Human-Powered Market Intelligence",
      description:
        "Primary research, competitor analysis, and market sizing conducted by our expert analyst team — not automated scrapers.",
      icon: "Brain",
      image:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
  ],
};

export const MR_STATS = {
  heading: (
    <>
      Global Reach <span className="text-brand-blue">Local Execution</span>
    </>
  ),
  quote:
    '"We provide human-powered B2B market research, delivering data augmentation, validation, and market intelligence for enterprise growth decisions across 40+ global markets."',
  attribution: "— Market Research Team, B2B Sales Arrow",
  stats: [
    {
      value: "98%",
      label: "Data Accuracy Rate",
      icon: "CheckCircle",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "10+",
      label: "Years of Experience",
      icon: "TrendingUp",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "40+",
      label: "Countries Served",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "100%",
      label: "Research Compliance",
      icon: "Target",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const MR_WHY = {
  eyebrow: "DATA QUALITY",
  heading: (
    <>
      Why Data Quality <span className="text-brand-cyan">Matters</span>
    </>
  ),
  reasons: [
    {
      id: "human-powered",
      title: "Human-Powered, Not Automated",
      description:
        "Our research analysts conduct primary research using a combination of direct outreach, expert interviews, and verified databases — not automated scrapers.",
      image:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "accuracy",
      title: "98% Data Accuracy Guarantee",
      description:
        "Every data point goes through a 3-stage verification process. We guarantee 98% accuracy on all delivered datasets or we re-verify at no cost.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "actionable",
      title: "Actionable Intelligence",
      description:
        "We don't deliver raw data dumps. Every research output includes analyst commentary, strategic implications, and recommended next steps.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "custom",
      title: "Custom-Built for Your ICP",
      description:
        "Every dataset is scoped to your specific Ideal Customer Profile — industry, size, geography, technology, and buying stage.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const MR_CASE_STUDIES = {
  eyebrow: "RESEARCH RESULTS",
  heading: (
    <>
      Intelligence That <span className="text-brand-blue">Changed Outcomes</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Research Work",
  items: [
    {
      id: "techbridge",
      client: "TechBridge Global",
      title: "Market Expansion into 3 New Geographies in 6 Months",
      challenge:
        "No reliable data on TAM, buyer personas, or competitive landscape in target markets.",
      solution: "Full market intelligence reports + validated prospect database for all 3 markets.",
      metric: "3",
      metricLabel: "New Markets Entered",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "elevate",
      client: "Elevate Logistics",
      title: "Data Augmentation Reduces Bounce Rate by 84%",
      challenge: "78% email bounce rate on outbound campaigns, wasting significant SDR time.",
      solution: "Full CRM data audit + augmentation + triple-verified email and phone validation.",
      metric: "84%",
      metricLabel: "Reduction in Bounce Rate",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const MR_TESTIMONIALS = {
  eyebrow: "CLIENT SUCCESS",
  heading: (
    <>
      Decisions Backed by <span className="text-[#1E6091]">Better Data</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "Elena Rodriguez",
      designation: "Director of Brand Activation",
      company: "Vortex Labs",
      rating: 5,
      quote:
        "The market intelligence report they delivered gave our board the confidence to approve a $2M expansion into Southeast Asia. Every assumption was data-backed.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Priya Nair",
      designation: "VP Events",
      company: "TechBridge Global",
      rating: 5,
      quote:
        "We had been working with an automated data provider for years. The difference in quality from B2BSA's human-verified data was immediately obvious when our email open rates tripled.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      designation: "VP Marketing",
      company: "Elevate Logistics",
      rating: 5,
      quote:
        "The data validation service alone saved us an estimated 400 SDR hours per quarter. Clean data isn't a nice-to-have — it's a revenue multiplier.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const MR_BLOGS = {
  eyebrow: "RESEARCH INSIGHTS",
  heading: (
    <>
      Market Intelligence <span className="text-brand-primary">Resources</span>
    </>
  ),
  ctaLabel: "View All Research Articles",
  blogs: [
    {
      id: 1,
      title: "Why Your B2B Data Decays 30% Every Year (and What to Do About It)",
      category: "Data",
      date: "Oct 1, 2025",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "How to Build a TAM/SAM/SOM Model That Actually Holds Up",
      category: "Research",
      date: "Sep 12, 2025",
      image:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "The 8 Data Points Every B2B Prospect Record Should Contain",
      category: "Data",
      date: "Aug 25, 2025",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export const MR_FAQ = {
  eyebrow: "MARKET RESEARCH FAQ",
  heading: (
    <>
      Frequently Asked{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our market research services.",
  scrollAmount: 340,
  faqs: [
    {
      id: "turnaround",
      question: "How quickly can you deliver research?",
      answer:
        "Data augmentation and validation: 48–72 hours for standard datasets. Custom market intelligence reports: 5–10 business days depending on depth. Competitive analysis reports: 7–14 business days.",
    },
    {
      id: "accuracy",
      question: "How do you guarantee data accuracy?",
      answer:
        "Every data point goes through a 3-stage verification process: automated validation, human spot-check, and direct source confirmation. We guarantee 98% accuracy and replace any inaccurate records at no cost.",
    },
    {
      id: "format",
      question: "In what format is research delivered?",
      answer:
        "Data: CSV, Excel, or direct CRM integration. Reports: PDF executive summary + full data appendix. All formats include an analyst briefing call to walk you through key findings and implications.",
    },
    {
      id: "custom",
      question: "Can you research niche markets or unusual geographies?",
      answer:
        "Yes. Our network of specialist researchers covers all major and emerging markets globally. We've conducted research in markets including West Africa, Southeast Asia, the Middle East, and Eastern Europe.",
    },
    {
      id: "gdpr",
      question: "Is your data GDPR compliant?",
      answer:
        "All data in our databases is sourced and processed in full compliance with GDPR, CAN-SPAM, and CCPA. We provide data processing agreements (DPAs) to all enterprise clients as standard.",
    },
  ],
};

export const MR_CONTACT = {
  eyebrow: "GET STARTED",
  heading: (
    <>
      Let&apos;s Build Your{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Intelligence Edge
      </span>
    </>
  ),
  description:
    "Tell us what intelligence you need and we'll propose a research programme that delivers it.",
  illustration: {
    src: "/undraw_contact-us_s4jn.svg",
    alt: "Contact Us",
  },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Research Service",
    servicePlaceholder: "Select a service...",
    serviceOptions: [
      { value: "data-augmentation", label: "Data Augmentation" },
      { value: "data-validation", label: "Data Validation" },
      { value: "market-intelligence", label: "Market Intelligence" },
      { value: "competitive-analysis", label: "Competitive Analysis" },
    ],
    messageLabel: "Describe Your Research Needs",
    messagePlaceholder: "What market, data, or intelligence challenge are you trying to solve?",
    ctaLabel: "Get Research Proposal",
  },
};
