
export const ABOUT_HERO = {
  showPreloader: false,
  eyebrow: "WHO WE ARE",
  title: (
    <>
      Built for <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Enterprise Growth
      </span>
    </>
  ),
  description:
    "B2B Sales Arrow was founded with a single conviction: enterprise brands deserve a partner that treats pipeline as a science, not a guess.",
  image: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    alt: "B2B Sales Arrow team and office",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Our Services",
  secondaryCtaLabel: "Get In Touch",
  stat: {
    value: "40+",
    label: "Countries Served",
    icon: "Globe2",
  },
};

// CinematicSequence — company journey story
// Suggested secondary use. Stock image frames as placeholders.
export const ABOUT_CINEMATIC = {
  frameCount: 4,
  frameUrls: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1497366754035-f200586c4bd9?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920",
  ],
  loadingText: "Our Story...",
  beats: [
    {
      id: "founding",
      className:
        "absolute left-0 text-left max-w-lg pl-8 md:pl-16 pr-8 py-10 bg-black/40 backdrop-blur-md rounded-r-3xl border-y border-r border-white/10 shadow-2xl",
      opacityInput: [0, 0.1, 0.22, 0.25],
      opacityOutput: [0, 1, 1, 0],
      yInput: [0, 0.1],
      yOutput: [30, 0],
      title: "We Started With a Problem.",
      titleClassName:
        "font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg",
    },
    {
      id: "growth",
      className:
        "absolute right-8 lg:right-24 text-right max-w-xl px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end",
      opacityInput: [0.25, 0.35, 0.48, 0.5],
      opacityOutput: [0, 1, 1, 0],
      yInput: [0.25, 0.35],
      yOutput: [30, 0],
      eyebrow: {
        text: "First Client",
        className:
          "text-brand-cyan uppercase tracking-[0.3em] text-sm font-bold block mb-4 drop-shadow-md",
      },
      title: "Then We Solved It.",
      titleClassName:
        "font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg",
      description: {
        text: "Our first engagement was a single trade show booth. That client went from invisible to market leader on the floor.",
        className: "text-gray-200 mt-6 text-lg md:text-xl max-w-lg drop-shadow-md",
      },
    },
    {
      id: "scale",
      className:
        "absolute right-8 lg:right-24 text-right max-w-lg px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end",
      opacityInput: [0.5, 0.6, 0.73, 0.75],
      opacityOutput: [0, 1, 1, 0],
      yInput: [0.5, 0.6],
      yOutput: [30, 0],
      eyebrow: {
        text: "40+ Countries",
        className:
          "text-brand-blue uppercase tracking-[0.3em] text-sm font-bold block mb-4 drop-shadow-md",
      },
      title: "Then We Scaled It.",
      titleClassName:
        "font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg",
    },
    {
      id: "today",
      className:
        "absolute right-8 lg:right-24 text-right max-w-lg px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end",
      opacityInput: [0.75, 0.85, 1],
      opacityOutput: [0, 1, 1],
      yInput: [0.75, 0.85],
      yOutput: [30, 0],
      title: "Today, We Build Empires.",
      titleClassName:
        "font-heading text-4xl md:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg",
      cta: {
        label: "See Our Work",
        className:
          "bg-brand-red hover:bg-brand-maroon text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-colors shadow-xl",
      },
    },
  ],
};

export const ABOUT_STATS = {
  heading: (
    <>
      Engineering Growth for <br />
      <span className="text-brand-blue">Global Innovators</span>
    </>
  ),
  quote:
    '"Our mission is to transform how B2B brands connect with their audiences through innovative, immersive experiences that drive measurable business results."',
  attribution: "— Leadership Team, B2B Sales Arrow",
  stats: [
    {
      value: "8+",
      label: "Years in Operation",
      icon: "TrendingUp",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "240+",
      label: "Brands Served",
      icon: "Users",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "$1.2B",
      label: "Pipeline Generated",
      icon: "BarChart3",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "40+",
      label: "Countries Covered",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#1b5e82] to-[#164e6b]",
    },
    {
      value: "98%",
      label: "Client Retention",
      icon: "Target",
      bg: "bg-linear-to-br from-[#306f75] to-[#255c61]",
    },
    {
      value: "500+",
      label: "Projects Delivered",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const ABOUT_VALUES = {
  eyebrow: "OUR PRINCIPLES",
  heading: (
    <>
      The Values That Drive <br />
      <span className="text-brand-cyan">Everything We Do</span>
    </>
  ),
  reasons: [
    {
      id: "integrity",
      title: "Integrity First",
      description:
        "We tell clients what they need to hear, not what they want to hear. Honest strategy over comfortable agreements.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "innovation",
      title: "Innovation Always",
      description:
        "We never repeat the same solution twice. Every brief demands fresh thinking grounded in proven methodology.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "results",
      title: "Results-First Thinking",
      description:
        "Every decision we make is filtered through one question: does this move our client's pipeline forward?",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "global",
      title: "Global Perspective",
      description:
        "With operations across 40+ countries, we bring a genuinely international lens to every local challenge.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "partnership",
      title: "Long-Term Partnership",
      description:
        "We build relationships, not transactions. Our 98% client retention rate is the proof.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const ABOUT_CASE_STUDIES = {
  eyebrow: "FLAGSHIP WORK",
  heading: (
    <>
      The Results That Define <br />
      <span className="text-brand-blue">Our Reputation</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Case Studies",
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
  ],
};

export const ABOUT_TESTIMONIALS = {
  eyebrow: "CLIENT SUCCESS",
  heading: (
    <>
      Trusted by Industry <br />
      <span className="text-[#1E6091]">Visionaries</span>
    </>
  ),
  autoplayInterval: 3000,
  initialIndex: 2,
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
        "The strategic media production and targeted lead generation strategies deployed by the team were instrumental in helping us penetrate the European market 6 months ahead of schedule.",
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

export const ABOUT_CONTACT = {
  eyebrow: "WORK WITH US",
  heading: (
    <>
      Let&apos;s Build <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Something Great
      </span>
    </>
  ),
  description:
    "We partner with ambitious brands who are serious about enterprise growth. If that's you, let's talk.",
  illustration: null,
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "How Can We Help?",
    servicePlaceholder: "Select a service...",
    serviceOptions: [
      { value: "events", label: "Global Event Solutions" },
      { value: "media", label: "Media Production" },
      { value: "marketing", label: "Performance Marketing" },
      { value: "lead-gen", label: "Lead Generation" },
      { value: "research", label: "Market Research" },
    ],
    messageLabel: "Tell Us About Your Business",
    messagePlaceholder: "What are your growth goals?",
    ctaLabel: "Start Partnership",
  },
};
