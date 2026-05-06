export const HPMI_HERO = {
  showPreloader: false,
  eyebrow: "HUMAN-POWERED MARKET INTELLIGENCE",
  title: (
    <>
      Deep Market Insight <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        That Algorithms Can&apos;t Deliver
      </span>
    </>
  ),
  description:
    "Our analyst network conducts primary research — interviews, competitive deep-dives, and custom intelligence reports — giving your leadership team the insight needed to make confident strategic decisions.",
  image: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
    alt: "Market research analysts at work",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Commission Research",
  secondaryCtaLabel: "See Sample Reports",
  stat: { value: "150+", label: "Custom Intelligence Reports Delivered", icon: "Brain" },
};

export const HPMI_WHY = {
  eyebrow: "THE INTELLIGENCE DIFFERENCE",
  heading: (
    <>
      Why Human Research <br />
      <span className="text-brand-cyan">Outperforms Automation</span>
    </>
  ),
  reasons: [
    {
      id: "nuance",
      title: "Captures What Data Can't",
      description:
        "Buyer sentiment, competitor positioning shifts, and emerging market dynamics require human analysts — not algorithms.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "primary",
      title: "Primary Research Access",
      description:
        "We conduct direct interviews with buyers, industry experts, and competitors — intelligence no third-party database can provide.",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "strategic",
      title: "Actionable Strategic Output",
      description:
        "Every report is structured for executive decision-making — not raw data dumps, but clear findings and recommended actions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "custom",
      title: "Fully Custom Scope",
      description:
        "We research exactly what you need — a specific competitor, a new market, a buyer segment — with no generic templates.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const HPMI_DELIVERABLES = {
  eyebrow: "WHAT'S INCLUDED",
  heading: (
    <>
      Market Intelligence <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Research Services
      </span>
    </>
  ),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    {
      id: "competitive",
      title: "Competitive Intelligence",
      description:
        "Deep analysis of your top 3–5 competitors — positioning, pricing, product gaps, and strategic vulnerabilities.",
      icon: "Search",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "buyer-research",
      title: "Buyer Research & ICP Study",
      description:
        "Primary research with 20–50 buyers in your target segment — understanding jobs-to-be-done, buying triggers, and decision criteria.",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "market-sizing",
      title: "Market Sizing & Opportunity Mapping",
      description:
        "TAM, SAM, and SOM analysis for new market entry or product launch decisions — built on primary research, not syndicated estimates.",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-red",
    },
    {
      id: "reports",
      title: "Executive Intelligence Reports",
      description:
        "Board-ready market intelligence reports with key findings, strategic recommendations, and supporting evidence.",
      icon: "Brain",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const HPMI_STATS = {
  heading: (
    <>
      Research Quality <br />
      <span className="text-brand-blue">Impact Numbers</span>
    </>
  ),
  quote:
    '"The best strategic decisions are made with intelligence that your competitors don\'t have. We give our clients an asymmetric information advantage in every market they enter."',
  attribution: "— Intelligence Research Lead, B2B Sales Arrow",
  stats: [
    {
      value: "150+",
      label: "Custom Intelligence Reports Delivered",
      icon: "Brain",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "40+",
      label: "Markets & Industries Covered",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "2wk",
      label: "Avg Report Turnaround",
      icon: "Zap",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "98%",
      label: "Executive Satisfaction Rate",
      icon: "Target",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const HPMI_CASE_STUDIES = {
  eyebrow: "INTELLIGENCE RESULTS",
  heading: (
    <>
      Markets We&apos;ve Helped <br />
      <span className="text-brand-blue">Our Clients Enter</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Work",
  caseStudies: [
    {
      id: "aura-research",
      client: "Aura Systems",
      title: "Competitive Intelligence Reveals $12M Opportunity Gap",
      challenge:
        "Leadership team had no visibility into why they were losing deals to competitors.",
      solution: "Win/loss primary research with 30 past prospects and 3 deep competitor profiles.",
      metric: "$12M",
      metricLabel: "Identified Revenue Opportunity",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "nexus-research",
      client: "Nexus Technologies",
      title: "Market Entry Research Shapes APAC Expansion Strategy",
      challenge: "Board needed data-backed market entry recommendation for Southeast Asia.",
      solution:
        "12-week primary research programme: 40 buyer interviews and competitive landscape mapping.",
      metric: "3",
      metricLabel: "Priority Markets Identified for Entry",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const HPMI_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (
    <>
      Leaders Who Made <br />
      <span className="text-[#1E6091]">Better Decisions Faster</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "Michael Chen",
      designation: "VP of Global Sales",
      company: "Aura Systems",
      rating: 5,
      quote:
        "The competitive intelligence report revealed a $12 million product gap we'd been completely blind to. That single piece of research reshaped our entire product roadmap.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      designation: "Chief Marketing Officer",
      company: "Nexus Technologies",
      rating: 5,
      quote:
        "The buyer research they conducted gave us direct quotes and frameworks from our actual ICP. It transformed how we write copy, pitch decks, and proposals.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      designation: "Director of Brand Activation",
      company: "Vortex Labs",
      rating: 5,
      quote:
        "Board-ready research delivered in 2 weeks. The quality and depth of insight from primary interviews is something no data tool could ever replicate.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const HPMI_FAQ = {
  eyebrow: "MARKET INTELLIGENCE FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our human-powered market intelligence service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "scope",
      question: "How do you define the research scope?",
      answer:
        "We start with a 60-minute briefing call to understand your strategic question, existing knowledge, and decision timeline. We then propose a research design with methodology, timeline, and deliverables.",
    },
    {
      id: "primary",
      question: "How do you recruit interview respondents?",
      answer:
        "We have a global network of B2B professionals across 40+ industries. For niche segments, we use professional panels and social outreach. We recruit to your exact ICP specification.",
    },
    {
      id: "turnaround",
      question: "How long does a research project take?",
      answer:
        "Competitive intelligence reports: 1–2 weeks. Buyer research studies (20+ interviews): 4–6 weeks. Market sizing studies: 2–4 weeks. Timelines depend on research scope and recruitment complexity.",
    },
    {
      id: "format",
      question: "What does the final deliverable look like?",
      answer:
        "A structured PDF report with executive summary, key findings, data visualisations, and strategic recommendations — ready to present to your board or leadership team without additional formatting.",
    },
    {
      id: "confidentiality",
      question: "Is our research brief kept confidential?",
      answer:
        "Absolutely. We sign NDAs before every engagement and never disclose client identities to respondents. All research is conducted under our independent research brand.",
    },
  ],
};

export const HPMI_CONTACT = {
  eyebrow: "COMMISSION RESEARCH",
  heading: (
    <>
      Get the Intelligence <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        to Make Bold Moves
      </span>
    </>
  ),
  description:
    "Tell us your strategic question and we'll design a research programme to answer it — with confidence.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Research Type",
    servicePlaceholder: "Select research type...",
    serviceOptions: [
      { value: "competitive", label: "Competitive Intelligence" },
      { value: "buyer", label: "Buyer Research / ICP Study" },
      { value: "market-sizing", label: "Market Sizing & Entry" },
      { value: "win-loss", label: "Win/Loss Analysis" },
      { value: "other", label: "Other / Not Sure" },
    ],
    messageLabel: "Describe Your Research Question",
    messagePlaceholder: "What strategic decision are you trying to make? What do you need to know?",
    ctaLabel: "Commission Research",
  },
};
