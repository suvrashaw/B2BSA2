export const CVP_HERO = {
  showPreloader: false,
  eyebrow: "CORPORATE VIDEO PRODUCTION",
  title: (
    <>
      Corporate Video Production That <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Commands Enterprise Attention
      </span>
    </>
  ),
  description:
    "We produce brand films, product videos, and executive content that build authority, earn trust, and accelerate enterprise sales cycles.",
  image: {
    src: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=2000",
    alt: "Corporate video production studio",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Request a Corporate Video Consultation",
  secondaryCtaLabel: "Start Your Video Project",
  stat: { value: "300+", label: "Corporate Films Produced", icon: "Film" },
};

export const CVP_WHY = {
  eyebrow: "SALES ACCELERATION",
  heading: (
    <>
      How Corporate Video Accelerates <br />
      <span className="text-brand-cyan">Your Sales Cycle</span>
    </>
  ),
  reasons: [
    {
      id: "authority",
      title: "Establishes Market Authority",
      description:
        "A cinematic brand film signals scale, credibility, and premium positioning before a single sales conversation.",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "sales",
      title: "Shortens the Sales Cycle",
      description:
        "Buyers who watch a well-produced company overview video convert at 3× the rate of those who read a brochure.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "thought",
      title: "Thought Leadership at Scale",
      description:
        "Executive interview series and expert explainers position your leadership as industry voices — distributed via LinkedIn.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "investors",
      title: "Investor & Board Confidence",
      description:
        "High-quality video production signals operational maturity — critical for fundraising and enterprise partnership conversations.",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const CVP_DELIVERABLES = {
  eyebrow: "WHAT WE PRODUCE",
  heading: (
    <>
      Corporate Video Content <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        We Produce
      </span>
    </>
  ),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    {
      id: "brand-film",
      title: "Brand Film",
      description:
        "A 2–5 minute cinematic company story film for homepage, sales decks, and investor meetings.",
      icon: "Film",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "exec-interviews",
      title: "Executive Interview Series",
      description:
        "Professional sit-down interviews with C-suite and subject matter experts, filmed in a branded studio environment.",
      icon: "Video",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "product-demo",
      title: "Product Demo Video",
      description:
        "Slick product walkthroughs combining screen recording, live footage, and motion graphics.",
      icon: "Presentation",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "social-cuts",
      title: "Social & Campaign Cuts",
      description: "Platform-optimised video cuts for LinkedIn, YouTube, and paid media campaigns.",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const CVP_STATS = {
  heading: (
    <>
      Global Reach <br />
      <span className="text-brand-blue">Local Execution</span>
    </>
  ),
  quote:
    '"We provide cinematic corporate video production for enterprise brands, delivering brand films, product videos, and executive interviews that build authority through high-fidelity execution across 40+ markets."',
  attribution: "— Production Director, B2B Sales Arrow",
  stats: [
    {
      value: "500+",
      label: "Videos Produced",
      icon: "Film",
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
      label: "Production Accuracy",
      icon: "Target",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const CVP_CASE_STUDIES = {
  eyebrow: "CORPORATE VIDEO RESULTS",
  heading: (
    <>
      Brands We&apos;ve Made <br />
      <span className="text-brand-blue">Look World-Class</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Work",
  caseStudies: [
    {
      id: "finserve",
      client: "FinServe SaaS",
      title: "Brand Film Drives 4.2× Pipeline Growth",
      challenge: "Complex SaaS product lost in a crowded market.",
      solution: "Cinematic 3-minute brand story film deployed across sales and paid channels.",
      metric: "4.2×",
      metricLabel: "Pipeline ROI",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "aura",
      client: "Aura Systems",
      title: "Executive Series Generates 180 Qualified Meetings",
      challenge: "New market entry — no brand recognition in Europe.",
      solution: "8-part LinkedIn thought leadership video series featuring the CEO.",
      metric: "180",
      metricLabel: "Qualified Sales Meetings",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const CVP_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (
    <>
      Executives Who Found <br />
      <span className="text-[#1E6091]">Their Voice on Video</span>
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
        "The brand film they produced became our most powerful sales asset. Every enterprise prospect we send it to books a call. It just works.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      designation: "Director of Brand Activation",
      company: "Vortex Labs",
      rating: 5,
      quote:
        "Our CEO was initially camera-shy. The production team made him look and sound like a true industry authority. The LinkedIn series drove 180 meeting requests.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "David Alaba",
      designation: "Head of Growth",
      company: "Synapse Networks",
      rating: 5,
      quote:
        "Corporate video production with B2B Sales Arrow is a completely different experience from standard video agencies. They understand sales, not just production.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const CVP_FAQ = {
  eyebrow: "CORPORATE VIDEO FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our corporate video production service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "timeline",
      question: "How long does a corporate video take to produce?",
      answer:
        "A brand film typically takes 6–8 weeks from brief to final delivery: 1 week scripting, 1 week pre-production, 1–2 days filming, 2–3 weeks post-production.",
    },
    {
      id: "location",
      question: "Do you film in our office or a dedicated studio?",
      answer:
        "Both. We can transform your office into a polished filming environment or bring you to our production studio. We advise based on your brand aesthetic and budget.",
    },
    {
      id: "revisions",
      question: "How many revision rounds are included?",
      answer:
        "All packages include 2 rounds of revisions on the edit. Additional revision rounds are available at a day rate. Our briefs are thorough enough that most clients approve on the first cut.",
    },
    {
      id: "distribution",
      question: "Do you help with video distribution?",
      answer:
        "Yes. We can manage LinkedIn video campaigns, YouTube channel setup, and paid video ad distribution to ensure your content reaches the right B2B decision-makers.",
    },
    {
      id: "global",
      question: "Can you film at our international offices?",
      answer:
        "Yes. We have crews across EMEA, APAC, and the Americas. We can coordinate multi-location shoots and maintain consistent quality and branding across all offices.",
    },
  ],
};

export const CVP_CONTACT = {
  eyebrow: "START YOUR VIDEO PROJECT",
  heading: (
    <>
      Commission Your <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Brand Film
      </span>
    </>
  ),
  description:
    "Tell us about your business and goals — we'll design a video production package that positions you as the obvious market leader.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Video Type",
    servicePlaceholder: "Select video type...",
    serviceOptions: [
      { value: "brand-film", label: "Brand Film" },
      { value: "exec-series", label: "Executive Interview Series" },
      { value: "product-demo", label: "Product Demo" },
      { value: "campaign", label: "Social / Campaign Video" },
      { value: "other", label: "Other" },
    ],
    messageLabel: "Tell Us About Your Brand",
    messagePlaceholder: "Your company, target audience, goals, and timeline...",
    ctaLabel: "Get Video Production Quote",
  },
};
