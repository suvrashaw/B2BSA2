import type { ReactNode } from "react";

export interface HomeHeroContent {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: {
    src: string;
    alt: string;
    loaderAlt: string;
  };
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  stat: {
    value: string;
    label: string;
    icon: string;
  };
  timing: {
    expandDelay: number;
    doneDelay: number;
  };
}

export interface CinematicStoryBeat {
  id: string;
  className: string;
  opacityInput: number[];
  opacityOutput: number[];
  yInput: number[];
  yOutput: number[];
  eyebrow?: {
    text: string;
    className: string;
  };
  title: ReactNode;
  titleClassName: string;
  description?: {
    text: string;
    className: string;
  };
  cta?: {
    label: string;
    className: string;
  };
}

export interface CinematicSequenceContent {
  frameCount: number;
  frameUrlTemplate?: string;
  frameUrls?: string[];
  loadingText: string;
  beats: CinematicStoryBeat[];
}

export interface ClientLogoItem {
  id: string;
  logoName?: string;
}

export interface WhoWeAreStat {
  value: string;
  label: string;
  icon: string;
  bg: string;
}

export interface WhoWeAreContent {
  heading: ReactNode;
  quote: string;
  attribution: string;
  stats: WhoWeAreStat[];
}

export interface HomeServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  color: string;
}

export interface HomeServicesContent {
  eyebrow: string;
  heading: ReactNode;
  serviceLabel: string;
  ctaLabel: string;
  services: HomeServiceItem[];
}

export interface CaseStudyItem {
  id: string;
  client: string;
  title: string;
  challenge: string;
  solution: string;
  metric: string;
  metricLabel: string;
  icon: string;
  image: string;
}

export interface CaseStudiesContent {
  eyebrow: string;
  heading: ReactNode;
  ctaLabel: string;
  viewAllLabel: string;
  items: CaseStudyItem[];
}

export interface UpcomingEventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
}

export interface UpcomingEventsContent {
  eyebrow: string;
  heading: ReactNode;
  badgeLabel: string;
  ctaLabel: string;
  viewAllLabel: string;
  events: UpcomingEventItem[];
}

export interface WhyChooseUsReason {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface WhyChooseUsContent {
  eyebrow: string;
  heading: ReactNode;
  reasons: WhyChooseUsReason[];
}

export interface TestimonialItem {
  id: number | string;
  name: string;
  designation: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  heading: ReactNode;
  testimonials: TestimonialItem[];
  autoplayInterval: number;
  initialIndex: number;
}

export interface BlogItem {
  id: number | string;
  title: string;
  category: string;
  date: string;
  image: string;
}

export interface BlogsContent {
  eyebrow: string;
  heading: ReactNode;
  ctaLabel: string;
  blogs: BlogItem[];
}

export interface FAQItem {
  id: number | string;
  question: string;
  answer: string;
}

export interface FAQContent {
  eyebrow: string;
  heading: ReactNode;
  description: string;
  scrollAmount: number;
  faqs: FAQItem[];
}

export interface ContactServiceOption {
  value: string;
  label: string;
}

export interface ContactContent {
  eyebrow: string;
  heading: ReactNode;
  description: string;
  illustration: {
    src: string;
    alt: string;
  };
  form: {
    firstNameLabel: string;
    firstNamePlaceholder: string;
    lastNameLabel?: string;
    lastNamePlaceholder?: string;
    companyLabel?: string;
    companyPlaceholder?: string;
    phoneLabel?: string;
    phonePlaceholder?: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel?: string;
    servicePlaceholder?: string;
    serviceOptions?: ContactServiceOption[];
    eventLabel?: string;
    eventPlaceholder?: string;
    messageLabel?: string;
    messagePlaceholder?: string;
    consentLabel?: string;
    ctaLabel: string;
  };
}

export const HOME_HERO_CONTENT: HomeHeroContent = {
  eyebrow: "GLOBAL CAPABILITY. STRATEGIC GROWTH.",
  title: <>B2B Global Event Solutions & Trade Show Booth Designs</>,
  description:
    "Trusted across 30+ countries, we deliver custom trade show booth design, active on-ground prospecting, and end-to-end event execution that turns exhibitions into a qualified B2B sales pipeline.",
  image: {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
    alt: "Global B2B enterprise growth strategy",
    loaderAlt: "Loader",
  },
  primaryCtaLabel: "Get a Custom Proposal",
  secondaryCtaLabel: "See Our Work",
  stat: {
    value: "30+",
    label: "Countries Served",
    icon: "Globe",
  },
  timing: {
    expandDelay: 2000,
    doneDelay: 2800,
  },
};

export const HOME_CINEMATIC_SEQUENCE_CONTENT: CinematicSequenceContent = {
  frameCount: 60,
  frameUrlTemplate: "/Frames/ezgif-frame-%d.jpg",
  loadingText: "Loading Cinematic Experience...",
  beats: [
    {
      id: "intro",
      className:
        "absolute left-0 text-left max-w-lg pl-8 md:pl-16 pr-8 py-10 bg-black/40 backdrop-blur-md rounded-r-3xl border-y border-r border-white/10 shadow-2xl",
      opacityInput: [0, 0.05, 1],
      opacityOutput: [0, 1, 1],
      yInput: [0, 0.15],
      yOutput: [30, 0],
      title: <>Immersive Experience.</>,
      titleClassName:
        "font-heading text-5xl md:text-7xl font-bold !text-white leading-tight drop-shadow-lg",
    },
    {
      id: "approach",
      className:
        "absolute right-8 lg:right-24 text-right max-w-xl px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end",
      opacityInput: [0.25, 0.35, 0.45, 0.5],
      opacityOutput: [0, 1, 1, 0],
      yInput: [0.25, 0.35],
      yOutput: [30, 0],
      eyebrow: {
        text: "Precision Engineered",
        className:
          "text-brand-cyan uppercase tracking-[0.3em] text-sm font-bold block mb-4 drop-shadow-md",
      },
      title: <>A strategic approach to spatial storytelling.</>,
      titleClassName:
        "font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg",
      description: {
        text: "We don't just build booths. We architect conversion environments designed to capture enterprise leads and communicate market dominance.",
        className: "text-gray-200 mt-6 text-lg md:text-xl max-w-lg drop-shadow-md",
      },
    },
    {
      id: "services",
      className:
        "absolute right-8 lg:right-24 text-right max-w-lg px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end",
      opacityInput: [0.5, 0.6, 0.7, 0.75],
      opacityOutput: [0, 1, 1, 0],
      yInput: [0.5, 0.6],
      yOutput: [30, 0],
      eyebrow: {
        text: "End-to-End Execution",
        className:
          "text-brand-blue uppercase tracking-[0.3em] text-sm font-bold block mb-4 drop-shadow-md",
      },
      title: <>From Blueprint to Reality.</>,
      titleClassName:
        "font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg",
    },
    {
      id: "cta",
      className:
        "absolute right-8 lg:right-24 text-right max-w-lg px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end",
      opacityInput: [0.75, 0.85, 1],
      opacityOutput: [0, 1, 1],
      yInput: [0.75, 0.85],
      yOutput: [30, 0],
      title: <>Command The Floor.</>,
      titleClassName:
        "font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg",
      cta: {
        label: "Start Your Project",
        className:
          "bg-brand-primary hover:bg-brand-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-colors shadow-xl",
      },
    },
  ],
};

export const HOME_CLIENT_LOGOS: ClientLogoItem[] = [
  { id: "singlestore" },
  { id: "temenos" },
  { id: "worldpay" },
  { id: "syngene" },
  { id: "airtel" },
  { id: "infosys" },
];

export const HOME_WHO_WE_ARE_CONTENT: WhoWeAreContent = {
  heading: <>Your Trusted Global B2B Event Partner</>,
  quote:
    "We don't just design exhibition booths — we build sales pipelines. B2B Sales Arrow combines custom trade show booth design, on-ground lead generation, and performance-driven event marketing to turn floor traffic into qualified enterprise opportunities. One partner. One end-to-end B2B event solution built to drive measurable results.",
  attribution: "\u2014 Leadership Team, B2B Sales Arrow",
  stats: [
    {
      value: "30+",
      label: "Countries Served",
      icon: "Globe2",
      bg: "bg-gradient-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "300+",
      label: "Global Events Handled",
      icon: "TrendingUp",
      bg: "bg-gradient-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "2,500+",
      label: "SQLs Delivered",
      icon: "Target",
      bg: "bg-gradient-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "10+",
      label: "Years of Experience",
      icon: "Users",
      bg: "bg-gradient-to-br from-[#1b5e82] to-[#164e6b]",
    },
  ],
};

export const HOME_SERVICES_CONTENT: HomeServicesContent = {
  eyebrow: "OUR CORE PILLARS",
  heading: <>Our B2B Event Services & Trade Show Solutions</>,
  serviceLabel: "Service",
  ctaLabel: "Learn More",
  services: [
    {
      id: "booth-design",
      title: "Booth Design & Production",
      description:
        "We design and build custom trade show booths that stop foot traffic, reflect your brand, and create the perfect environment for high-value sales conversations.",
      icon: "Presentation",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "active-prospecting",
      title: "Active Prospecting",
      description:
        "We deploy trained multilingual sales specialists directly onto the event floor to engage senior decision-makers, qualify leads on the spot, and deliver verified SQLs to your team daily.",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "media",
      title: "Corporate Media Production",
      description:
        "We capture broadcast-quality video, interviews, and 3D animations at your event — turning a single day on the floor into 12 months of high-impact digital content.",
      icon: "MonitorPlay",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "giveaways",
      title: "Giveaways",
      description:
        "We source and deliver premium branded giveaways that keep your company top-of-mind long after the event floor closes.",
      icon: "Gift",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "networking",
      title: "Networking",
      description:
        "We design and manage exclusive networking experiences — VIP dinners, roundtables, and hosted meetings — that connect your team directly with key enterprise decision-makers.",
      icon: "Coffee",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "branding",
      title: "Branding",
      description:
        "We create cohesive event branding — from booth graphics and signage to digital displays — so your enterprise presence commands attention across the entire venue.",
      icon: "Palette",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "experience-creation",
      title: "Experience Creation",
      description:
        "We design immersive booth experiences — interactive demos, live activations, and engagement zones — that turn passive visitors into active pipeline opportunities.",
      icon: "Lightbulb",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "market-research",
      title: "Database & Market Research",
      description:
        "We build verified, account-level prospect databases and deploy our proprietary HPMI methodology to uncover deep target market intelligence before your event begins.",
      icon: "Database",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description:
        "We run targeted pre-event marketing campaigns across email and social to drive qualified attendee traffic to your booth and fill your team's calendar with high-intent meetings before day one.",
      icon: "Rocket",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
  ],
};

export const HOME_CASE_STUDIES_CONTENT: CaseStudiesContent = {
  eyebrow: "PROVEN EXECUTION",
  heading: <>Proven Global Event Solutions: Enterprise Success Stories</>,
  ctaLabel: "Full Study",
  viewAllLabel: "View All Work",
  items: [
    {
      id: "adobe-summit",
      client: "Adobe Summit",
      title: "Sustainable Design & Lead Generation",
      challenge: "Sustainable booth design and high-volume lead capture.",
      solution:
        "We delivered a custom eco-friendly island booth and active on-site prospecting to secure 70+ SQLs and engage 60 unique billion-dollar enterprise accounts.",
      metric: "70+",
      metricLabel: "SQLs Secured",
      icon: "Leaf",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "world-aviation",
      client: "World Aviation Festival",
      title: "Doubling Executive Pipeline",
      challenge: "High-speed outreach for executive meetings.",
      solution:
        "Through rapid pre-event outreach and on-ground prospecting, we secured 60 executive meetings—doubling the initial target within a high-speed, 10-day campaign.",
      metric: "60",
      metricLabel: "Meetings Secured",
      icon: "Plane",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "sibos",
      client: "SIBOS",
      title: "High-Impact Outreach & Interactive Exhibits",
      challenge: "Personalized global outreach and visitor engagement.",
      solution:
        "We created hyper-personalized global outreach and interactive booth design for two financial leaders, capturing 270+ leads and 64 strategic executive meetings.",
      metric: "270+",
      metricLabel: "Leads Captured",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const HOME_UPCOMING_EVENTS_CONTENT: UpcomingEventsContent = {
  eyebrow: "GLOBAL PRESENCE",
  heading: <>Upcoming Trade Shows & Global Industry Events</>,
  badgeLabel: "Upcoming",
  ctaLabel: "Meet Us There!",
  viewAllLabel: "View All Events",
  events: [
    {
      id: "adobe",
      title: "Adobe Summit",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "autotech",
      title: "Autotech",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "cba",
      title: "CBA Live",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "databricks",
      title: "Databricks Summit",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "hannover",
      title: "Hannover Messe",
      date: "2026",
      location: "Germany",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "hp",
      title: "HP Discovery",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "iucx",
      title: "IUCX",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "itw",
      title: "ITW (International Telecoms Week)",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "nvidia",
      title: "NVIDIA GTC 2026",
      date: "2026",
      location: "USA",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "sap-madrid",
      title: "SAP Sapphire 2026 Madrid",
      date: "2026",
      location: "Spain",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "sap-orlando",
      title: "SAP Sapphire 2026 Orlando",
      date: "2026",
      location: "USA",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "servicenow",
      title: "ServiceNow Knowledge 2026",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "snowflake",
      title: "Snowflake Summit",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "zenith",
      title: "Zenith Live",
      date: "2026",
      location: "Global",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export const HOME_WHY_CHOOSE_US_CONTENT: WhyChooseUsContent = {
  eyebrow: "THE B2BSA ADVANTAGE",
  heading: <>Why Enterprise Brands Trust Our Global Event Solutions?</>,
  reasons: [
    {
      id: "revenue-driven",
      title: "Revenue-Driven Execution",
      description:
        "We deliberately engineer every event strategy directly from your commercial goals to drive measurable pipeline outcomes.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "zero-coordination",
      title: "Zero Coordination Tax",
      description:
        "We consolidate booth design, media production, and marketing under one accountable roof to eliminate vendor gaps.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "seamless-delivery",
      title: "Seamless Worldwide Delivery",
      description:
        "We leverage deep regional intelligence across three continents to ensure flawless corporate experiences around the globe.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "active-prospecting",
      title: "Proprietary Active Prospecting",
      description:
        "We deploy trained sales specialists directly onto the active event floor to hunt high-value enterprise decision-makers.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "industry-expertise",
      title: "Deep Industry Expertise",
      description:
        "We possess extensive domain expertise across major global sectors so we already understand your specific language.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const HOME_TESTIMONIALS_CONTENT: TestimonialsContent = {
  eyebrow: "CLIENT SUCCESS",
  heading: <>What Our Clients Say?</>,
  autoplayInterval: 3000,
  initialIndex: 2,
  testimonials: [
    {
      id: 1,
      name: "[Client Name]",
      designation: "[Job Title]",
      company: "[Enterprise Brand]",
      rating: 5,
      quote:
        '"Their team built an incredible sustainable booth that perfectly captured our global brand identity this year."',
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "[Client Name]",
      designation: "[Job Title]",
      company: "[Enterprise Brand]",
      rating: 5,
      quote:
        '"Their active prospecting team navigated the event floor and delivered fifty highly qualified sales leads daily."',
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "[Client Name]",
      designation: "[Job Title]",
      company: "[Enterprise Brand]",
      rating: 5,
      quote:
        '"They curated an exclusive networking experiences and provided premium custom giveaways that kept our attendees fully engaged."',
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const HOME_BLOGS_CONTENT: BlogsContent = {
  eyebrow: "INSIGHTS & INTELLIGENCE",
  heading: <>Expert Strategies to Maximize Your Global Event Solutions</>,
  ctaLabel: "Explore Intelligence",
  blogs: [
    {
      id: 1,
      title: "8 Must-Ask Questions Before Hiring a Trade Show Booth Design Company",
      category: "Design",
      date: "Oct 12, 2025",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "5 Trade Show Booth Design Setup Trends Reshaping Exhibits in 2026",
      category: "Trends",
      date: "Sep 28, 2025",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "6 Must-Have Features for Effective B2B Booth Design",
      category: "Features",
      date: "Sep 15, 2025",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export const HOME_FAQ_CONTENT: FAQContent = {
  eyebrow: "INTELLIGENCE & CLARITY",
  heading: <>Frequently Asked Questions</>,
  description:
    "Everything you need to know about our global event solutions and how we drive pipeline for enterprise brands.",
  scrollAmount: 340,
  faqs: [
    {
      id: 1,
      question: "What services do you offer as an event partner?",
      answer:
        "We provide end-to-end solutions, from custom booth design and floor prospecting to digital marketing and market research, all engineered to drive measurable pipeline growth.",
    },
    {
      id: 2,
      question: "Do you manage exhibitions outside of the United States?",
      answer:
        "Yes. We deliver global event solutions across 30+ countries, leveraging regional expertise to ensure a consistent, high-impact brand presence anywhere you exhibit.",
    },
    {
      id: 3,
      question: "Can you build custom exhibits for our specific industry?",
      answer:
        "Our team crafts premium booth designs tailored to your industry, fusing architectural creativity with sales psychology to convert floor traffic into qualified enterprise leads.",
    },
    {
      id: 4,
      question: "How do you guarantee high-quality leads from an exhibition?",
      answer:
        "We deploy trained sales specialists to the floor to engage senior delegates, qualify them via BANT criteria, and deliver verified SQLs directly to your team.",
    },
    {
      id: 5,
      question: "Do you help with attendee engagement and networking?",
      answer:
        "We elevate your brand through curated experiences, including exclusive VIP dinners, premium corporate giveaways, and interactive booth activities designed for deep engagement.",
    },
    {
      id: 6,
      question: "Do you handle both strategic planning and physical build?",
      answer:
        "We offer turnkey solutions that integrate commercial strategy with structural design and media production, managing all logistics so your team can focus on closing deals.",
    },
    {
      id: 7,
      question: "How do you drive traffic to our booth before events?",
      answer:
        "We execute targeted pre-event marketing using personalized email sequences and social media to fill your calendar with high-intent meetings before the show begins.",
    },
    {
      id: 8,
      question: "Can you help us repurpose the event for digital marketing?",
      answer:
        "Our media team captures broadcast-grade video and 3D animations on-site, transforming your event into a year’s worth of digital content to fuel your ongoing sales pipeline.",
    },
  ],
};

export const HOME_CONTACT_CONTENT: ContactContent = {
  eyebrow: "START THE CONVERSATION",
  heading: <>Ready to Build Your Global Event Strategy?</>,
  description:
    "Partner with B2B Sales Arrow to design high-impact trade show booths and execute data-driven event marketing strategies that generate qualified leads and pipeline. Share your requirements, and our team will create a tailored plan for your next exhibition.",
  illustration: {
    src: "/undraw_contact-us_s4jn.svg",
    alt: "Contact Us",
  },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    companyLabel: "Company Name",
    companyPlaceholder: "Your Company",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+1 (000) 000-0000",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Select the services you need",
    servicePlaceholder: "Select a service...",
    serviceOptions: [
      { value: "end-to-end", label: "End-to-End Global Event Solutions" },
      { value: "booth-design", label: "Trade Show Booth Design & Production" },
      { value: "on-ground", label: "On-Ground Active Prospecting" },
      { value: "media", label: "Corporate Media Production" },
      { value: "research", label: "Database & Market Research" },
      { value: "marketing", label: "Performance Marketing" },
    ],
    eventLabel: "Upcoming Event Name & Date (Optional)",
    eventPlaceholder: "e.g. GITEX 2026, October 2026",
    messageLabel: "Tell us about your event goals and requirements",
    messagePlaceholder: "Enter your requirements here...",
    consentLabel:
      "I agree to receive communications from B2B Sales Arrow regarding their services.",
    ctaLabel: "Get Your Custom Proposal",
  },
};
