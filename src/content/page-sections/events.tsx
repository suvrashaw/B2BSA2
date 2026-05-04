import { BarChart3, Globe2, Target, TrendingUp, Users } from "lucide-react";

export const EVENTS_HERO = {
  showPreloader: false,
  eyebrow: "INDUSTRY EVENTS",
  title: (
    <>
      B2B Events That <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Build Pipeline
      </span>
    </>
  ),
  description:
    "From booth design to on-floor lead capture, we give enterprise brands the infrastructure to dominate every trade show they attend.",
  image: {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
    alt: "Enterprise trade show floor",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "View Events",
  secondaryCtaLabel: "Get Booth Support",
  stat: {
    value: "250+",
    label: "Events Managed",
    icon: Globe2,
  },
};

export const EVENTS_UPCOMING = {
  eyebrow: "GLOBAL PRESENCE",
  heading: (
    <>
      Upcoming <br />
      <span className="text-brand-blue">Industry Events</span>
    </>
  ),
  badgeLabel: "Upcoming",
  ctaLabel: "Register Interest",
  viewAllLabel: "View All Events",
  events: [
    {
      id: "gitex-2026",
      title: "GITEX Technology Week 2026",
      date: "Oct 12 - 16, 2026",
      location: "Dubai World Trade Centre",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "mwc-2026",
      title: "Mobile World Congress 2026",
      date: "Feb 23 - 26, 2026",
      location: "Fira Gran Via, Barcelona",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "aws-re-invent",
      title: "AWS re:Invent 2026",
      date: "Nov 30 - Dec 4, 2026",
      location: "Las Vegas, Nevada",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "ces-2026",
      title: "CES 2026",
      date: "Jan 6 - 9, 2026",
      location: "Las Vegas Convention Center",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const EVENTS_STATS = {
  heading: (
    <>
      Events That Move <br />
      <span className="text-brand-blue">Enterprise Pipeline</span>
    </>
  ),
  quote:
    '"We\'ve been on every major trade show floor across 40+ countries. We know what converts and what gets ignored."',
  attribution: "— Events Strategy Team, B2B Sales Arrow",
  stats: [
    {
      value: "250+",
      label: "Events Managed",
      icon: Globe2,
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "40+",
      label: "Countries Represented",
      icon: Target,
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "280+",
      label: "Avg Leads per Event",
      icon: Users,
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "500+",
      label: "Exhibitors Supported",
      icon: TrendingUp,
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const EVENTS_CASE_STUDIES = {
  eyebrow: "PAST EVENT HIGHLIGHTS",
  heading: (
    <>
      Events That Defined <br />
      <span className="text-brand-blue">Market Leadership</span>
    </>
  ),
  ctaLabel: "Full Recap",
  viewAllLabel: "View All Events",
  items: [
    {
      id: "gitex-2025",
      client: "GITEX 2025",
      title: "340% Lead Surge at the World's Largest Tech Event",
      challenge: "Client struggling with generic booth presence among 6,000 exhibitors.",
      solution: "Immersive 2-storey booth with live AR demos and NFC lead capture.",
      metric: "+340%",
      metricLabel: "Lead Capture Rate",
      icon: BarChart3,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "mwc-2025",
      client: "MWC Barcelona 2025",
      title: "SaaS Brand Dominates Mobile World Congress Floor",
      challenge: "New-to-market brand needed to establish credibility fast.",
      solution: "Premium modular booth, influencer-led product launch, social media activation.",
      metric: "220",
      metricLabel: "Enterprise SQLs",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "aws-2025",
      client: "AWS re:Invent 2025",
      title: "Cloud Platform Closes $4M Pipeline in 4 Days",
      challenge: "Competing against hyperscalers in the world's largest cloud event.",
      solution: "Technical demo environment, pre-scheduled meeting programme, CRM integration.",
      metric: "$4M",
      metricLabel: "Pipeline in 4 Days",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const EVENTS_WHY = {
  eyebrow: "WHY EXHIBIT",
  heading: (
    <>
      The Case for <br />
      <span className="text-brand-cyan">Face-to-Face</span>
    </>
  ),
  reasons: [
    {
      id: "conversion",
      title: "Face-to-Face Conversion",
      description:
        "In-person meetings close 40% faster than digital outreach. Events compress the sales cycle dramatically.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "visibility",
      title: "Brand Visibility at Scale",
      description:
        "A single well-designed booth can generate more brand awareness than months of digital advertising in a target market.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "pipeline",
      title: "Pipeline Acceleration",
      description:
        "Events bring your entire ICP into one room. Our lead capture systems ensure you leave with qualified, segmented prospect data.",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "intelligence",
      title: "Real-Time Market Intelligence",
      description:
        "Walking the show floor gives you competitive intelligence that no research report can replicate.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const EVENTS_TESTIMONIALS = {
  eyebrow: "EXHIBITOR FEEDBACK",
  heading: (
    <>
      From the Brands <br />
      <span className="text-[#1E6091]">That Showed Up</span>
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
      name: "James Okafor",
      designation: "Head of Partnerships",
      company: "CloudCore Systems",
      rating: 5,
      quote:
        "The pre-event strategy, on-floor activation, and post-show lead nurturing process they built for us was unlike anything we'd experienced with a previous event agency.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Priya Nair",
      designation: "VP Events",
      company: "TechBridge Global",
      rating: 5,
      quote:
        "We've exhibited at 20+ shows globally. B2BSA is the only partner that genuinely understands enterprise buyer psychology on the trade show floor.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const EVENTS_CONTACT = {
  eyebrow: "PLAN YOUR PRESENCE",
  heading: (
    <>
      Let&apos;s Plan Your <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Event Presence
      </span>
    </>
  ),
  description:
    "Tell us which events you're targeting and we'll design a presence strategy that outperforms your competitors.",
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
    serviceLabel: "Event of Interest",
    servicePlaceholder: "Select an event...",
    serviceOptions: [
      { value: "gitex", label: "GITEX Technology Week" },
      { value: "mwc", label: "Mobile World Congress" },
      { value: "aws", label: "AWS re:Invent" },
      { value: "ces", label: "CES" },
      { value: "other", label: "Other / Custom Event" },
    ],
    messageLabel: "Tell Us About Your Goals",
    messagePlaceholder: "Which events are you targeting? What results do you need?",
    ctaLabel: "Get Event Strategy",
  },
};
