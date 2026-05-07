export const CASE_STUDIES_HERO = {
  showPreloader: false,
  eyebrow: "CASE STUDIES",
  title: (
    <>
      Enterprise Results That <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Speak for Themselves
      </span>
    </>
  ),
  description:
    "250+ projects. 40+ countries. $1.2B in pipeline generated. Explore the case studies behind the numbers.",
  image: {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000",
    alt: "Business results and growth",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "See a Case Study",
  secondaryCtaLabel: "Work With Us",
  stat: {
    value: "4.2x",
    label: "Average Client ROI",
    icon: "TrendingUp",
  },
};

export const CASE_STUDIES_STATS = {
  heading: (
    <>
      The B2B Sales Arrow <br />
      <span className="text-brand-blue">Track Record</span>
    </>
  ),
  quote:
    '"Real results from real enterprise clients — trade show ROI, lead generation metrics, media production impact, and performance marketing outcomes."',
  attribution: "— Growth Strategy Team, B2B Sales Arrow",
  stats: [
    {
      value: "250+",
      label: "Events Delivered",
      icon: "TrendingUp",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "$1.2B",
      label: "Pipeline Generated",
      icon: "BarChart3",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "15k+",
      label: "Leads Generated",
      icon: "Users",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "98%",
      label: "Client Retention",
      icon: "Target",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const CASE_STUDIES_LIST = {
  eyebrow: "OUR PORTFOLIO",
  heading: (
    <>
      Work That Drives <br />
      <span className="text-brand-blue">Market Valuation</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Work",
  items: [
    {
      id: "tech-summit",
      client: "Global Tech Summit",
      title: "Redefining the Enterprise Exhibition Experience",
      challenge: "Low attendee engagement in a 10,000 sq ft booth space.",
      solution: "Interactive structural design with live AR product demos.",
      metric: "+340%",
      metricLabel: "Lead Capture Rate",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "finserve",
      client: "FinServe SaaS",
      title: "Scaling Pipeline Through Precision Media",
      challenge: "High customer acquisition cost across generic channels.",
      solution: "Targeted video thought-leadership campaign.",
      metric: "4.2x",
      metricLabel: "ROI in 6 Months",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "pharma-expo",
      client: "PharmaConnect Expo",
      title: "Dominating the Exhibition Floor at CPhI Worldwide",
      challenge: "Brand visibility lost among 2,500+ exhibitors at a major pharma expo.",
      solution: "360° immersive booth environment with live demo theatre.",
      metric: "220+",
      metricLabel: "SQLs Captured",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const CASE_STUDIES_TESTIMONIALS = {
  eyebrow: "CLIENT SUCCESS",
  heading: (
    <>
      Voices Behind <br />
      <span className="text-[#1E6091]">the Results</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "Sarah Jenkins",
      designation: "Chief Marketing Officer",
      company: "Nexus Technologies",
      rating: 5,
      quote:
        "B2B Sales Arrow transformed our exhibition presence. Their architectural approach to booth design and lead capture systems increased our qualified pipeline by 340% at GITEX.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "VP of Global Sales",
      company: "Aura Systems",
      rating: 5,
      quote:
        "The strategic media production and targeted lead generation strategies deployed by the team helped us penetrate the European market 6 months ahead of schedule.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      designation: "Director of Brand Activation",
      company: "Vortex Labs",
      rating: 5,
      quote:
        "Unlike typical agencies, they understand the deep nuances of enterprise B2B sales cycles. Every piece of collateral and physical asset they produced was highly conversion-focused.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "David Alaba",
      designation: "Head of Growth",
      company: "Synapse Networks",
      rating: 5,
      quote:
        "Their data-driven insights and innovative campaigns created an entirely new paradigm for how we engage our enterprise prospects. A flawless execution.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const CASE_STUDIES_CONTACT = {
  eyebrow: "GET IN TOUCH",
  heading: (
    <>
      Could Your Next Campaign Be <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Our Next Case Study?
      </span>
    </>
  ),
  description:
    "Tell us about your growth challenge and we'll architect a strategy to put you in the success stories above.",
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
    serviceLabel: "Service of Interest",
    servicePlaceholder: "Select a service...",
    serviceOptions: [
      { value: "events", label: "Global Event Solutions" },
      { value: "media", label: "Media Production" },
      { value: "marketing", label: "Performance Marketing" },
      { value: "lead-gen", label: "Lead Generation" },
      { value: "research", label: "Market Research" },
    ],
    messageLabel: "Your Growth Challenge",
    messagePlaceholder: "What results are you trying to achieve?",
    ctaLabel: "Start the Conversation",
  },
};
