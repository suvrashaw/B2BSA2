export const PERF_HERO = {
  showPreloader: false,
  eyebrow: "PERFORMANCE MARKETING",
  title: (
    <>
      Data-Driven Growth <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        at Enterprise Scale
      </span>
    </>
  ),
  description:
    "SEO, paid advertising, and LinkedIn campaigns engineered to generate qualified enterprise pipeline — not vanity metrics.",
  image: {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
    alt: "Performance marketing and data analytics",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Get a Strategy",
  secondaryCtaLabel: "See Results",
  stat: {
    value: "3.8x",
    label: "Average ROAS",
    icon: "TrendingUp",
  },
};

export const PERF_SERVICES = {
  eyebrow: "MARKETING SERVICES",
  heading: (
    <>
      Channels That Drive <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Enterprise Pipeline
      </span>
    </>
  ),
  serviceLabel: "Service",
  ctaLabel: "Learn More",
  services: [
    {
      id: "seo",
      title: "SEO Services",
      description:
        "Technical SEO, content strategy, and link building to rank for the enterprise keywords your buyers search.",
      icon: "Search",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "paid-ads",
      title: "Paid Advertising",
      description:
        "Google Ads, programmatic display, and retargeting campaigns with enterprise-grade conversion tracking.",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "linkedin",
      title: "LinkedIn Ads for B2B",
      description:
        "Sponsored content, InMail, and Lead Gen Forms targeting C-suite and VP-level decision makers.",
      icon: "ExternalLink",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
  ],
};

export const PERF_STATS = {
  heading: (
    <>
      Marketing That <br />
      <span className="text-brand-blue">Moves the Needle</span>
    </>
  ),
  quote:
    '"B2B marketing doesn\'t fail because of bad creative. It fails because of bad targeting. We fix the targeting first."',
  attribution: "— Performance Marketing Team, B2B Sales Arrow",
  stats: [
    {
      value: "3.8x",
      label: "Average ROAS",
      icon: "TrendingUp",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "+280%",
      label: "Avg Organic Traffic",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "62%",
      label: "Lower Cost-per-Lead",
      icon: "Target",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "120+",
      label: "Campaigns Managed",
      icon: "BarChart3",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const PERF_WHY = {
  eyebrow: "THE PERFORMANCE DIFFERENCE",
  heading: (
    <>
      Why Enterprise Brands <br />
      <span className="text-brand-cyan">Choose Our Marketing Team</span>
    </>
  ),
  reasons: [
    {
      id: "b2b-specific",
      title: "Built for B2B Sales Cycles",
      description:
        "We understand 6–18 month deal cycles, multi-stakeholder buying committees, and the metrics that actually predict pipeline — not just traffic.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "data-driven",
      title: "Rigorously Data-Driven",
      description:
        "Every campaign decision is driven by data. We track from first impression to closed deal and optimise the entire funnel, not just the top.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "linkedin-mastery",
      title: "LinkedIn Mastery",
      description:
        "LinkedIn is the most powerful channel for B2B enterprise pipeline. We are among the top 1% of LinkedIn Marketing Partners globally by spend managed.",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "integration",
      title: "Fully Integrated Strategy",
      description:
        "SEO, paid, and organic working together — not in silos. Our campaigns compound each other, driving down cost per acquisition over time.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const PERF_CASE_STUDIES = {
  eyebrow: "MARKETING RESULTS",
  heading: (
    <>
      Campaigns That Built <br />
      <span className="text-brand-blue">Enterprise Pipeline</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Marketing Work",
  items: [
    {
      id: "finserve",
      client: "FinServe SaaS",
      title: "Scaling Pipeline Through Precision Digital Marketing",
      challenge: "High CAC with generic paid campaigns targeting too-broad audiences.",
      solution: "LinkedIn ABM targeting + SEO content cluster + retargeting sequence.",
      metric: "4.2x",
      metricLabel: "ROI in 6 Months",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "synapse",
      client: "Synapse Networks",
      title: "LinkedIn Campaign Drives 180 Enterprise Demo Requests",
      challenge: "Needed to fill enterprise sales pipeline in a new geographic market.",
      solution: "ICP-targeted Sponsored Content + InMail sequence + Lead Gen Forms.",
      metric: "180",
      metricLabel: "Enterprise Demos",
      icon: "ExternalLink",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const PERF_TESTIMONIALS = {
  eyebrow: "CLIENT SUCCESS",
  heading: (
    <>
      Brands That Grew <br />
      <span className="text-[#1E6091]">With Our Campaigns</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "David Alaba",
      designation: "Head of Growth",
      company: "Synapse Networks",
      rating: 5,
      quote:
        "Their data-driven insights and innovative web designs created an entirely new paradigm for how we engage our enterprise prospects. A flawless execution.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Sophia Martinez",
      designation: "VP Marketing",
      company: "Elevate Logistics",
      rating: 5,
      quote:
        "A flawless execution from strategy to deployment. The ROI on the campaigns they structured for us broke all our previous quarter records.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Michael Chen",
      designation: "VP of Global Sales",
      company: "Aura Systems",
      rating: 5,
      quote:
        "Their LinkedIn campaigns penetrated the European enterprise market in a way our internal team had been trying — and failing — to do for two years.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const PERF_BLOGS = {
  eyebrow: "MARKETING INTELLIGENCE",
  heading: (
    <>
      B2B Marketing <br />
      <span className="text-brand-primary">Insights</span>
    </>
  ),
  ctaLabel: "View All Marketing Articles",
  blogs: [
    {
      id: 1,
      title: "Why LinkedIn Is the Highest-ROI Channel for B2B Enterprise",
      category: "LinkedIn",
      date: "Oct 5, 2025",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "The B2B SEO Strategy That Dominates 'Enterprise' Keywords",
      category: "SEO",
      date: "Sep 18, 2025",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "How to Build a Full-Funnel B2B Paid Media Strategy",
      category: "Paid Ads",
      date: "Sep 2, 2025",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export const PERF_FAQ = {
  eyebrow: "PERFORMANCE MARKETING FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our performance marketing services.",
  scrollAmount: 340,
  faqs: [
    {
      id: "budget",
      question: "What is the minimum ad spend you work with?",
      answer:
        "We typically work with clients spending a minimum of $5,000/month on paid media. Below this threshold, our management fees don't represent good value. We recommend starting with LinkedIn at $3,000 minimum.",
    },
    {
      id: "timeline",
      question: "How long before I see results?",
      answer:
        "SEO: 3–6 months for significant organic growth. Paid: first results within 2–4 weeks, meaningful ROI by month 2–3. LinkedIn: qualified pipeline typically appears in weeks 4–8.",
    },
    {
      id: "reporting",
      question: "What reporting do you provide?",
      answer:
        "Weekly performance snapshots and monthly strategic reviews. All campaigns include a live dashboard with real-time metrics including pipeline attribution from first click to closed deal.",
    },
    {
      id: "industries",
      question: "Which industries do you specialise in?",
      answer:
        "We specialise in enterprise B2B across SaaS, FinTech, Healthcare IT, Logistics, Manufacturing, and Professional Services. We have specific playbooks for each vertical.",
    },
    {
      id: "contract",
      question: "What are your contract terms?",
      answer:
        "We work on 3-month minimum engagements for marketing retainers to allow proper optimisation cycles. After 3 months, contracts roll monthly with 30-day notice.",
    },
  ],
};

export const PERF_CONTACT = {
  eyebrow: "GET STARTED",
  heading: (
    <>
      Let&apos;s Scale Your <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Marketing Pipeline
      </span>
    </>
  ),
  description:
    "Tell us your growth targets and we'll design a performance marketing strategy engineered to hit them.",
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
    serviceLabel: "Marketing Channel",
    servicePlaceholder: "Select a channel...",
    serviceOptions: [
      { value: "seo", label: "SEO Services" },
      { value: "paid", label: "Paid Advertising" },
      { value: "linkedin", label: "LinkedIn Ads for B2B" },
      { value: "full-funnel", label: "Full Funnel Strategy" },
    ],
    messageLabel: "Tell Us Your Growth Goals",
    messagePlaceholder: "What pipeline targets are you trying to hit?",
    ctaLabel: "Get Marketing Strategy",
  },
};
