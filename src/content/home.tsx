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
    lastNameLabel: string;
    lastNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    serviceOptions: ContactServiceOption[];
    messageLabel: string;
    messagePlaceholder: string;
    ctaLabel: string;
  };
}

export const HOME_HERO_CONTENT: HomeHeroContent = {
  eyebrow: "GLOBAL CAPABILITY. STRATEGIC GROWTH.",
  title: (
    <>
      Accelerating <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
        Enterprise Growth
      </span>
    </>
  ),
  description:
    "We partner with ambitious modern businesses to deliver premium event solutions, digital transformation, and strategic market expansion.",
  image: {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
    alt: "Corporate Event Strategy",
    loaderAlt: "Loader",
  },
  primaryCtaLabel: "Explore Our Work",
  secondaryCtaLabel: "Our Services",
  stat: {
    value: "40+",
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
      title: (
        <>
          Immersive <br /> Experience.
        </>
      ),
      titleClassName:
        "font-heading text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg",
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
      title: (
        <>
          A strategic approach to <br /> spatial storytelling.
        </>
      ),
      titleClassName:
        "font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg",
      description: {
        text: "We don't just build booths. We architect conversion environments designed to capture enterprise leads and communicate market dominance.",
        className:
          "text-gray-200 mt-6 text-lg md:text-xl max-w-lg drop-shadow-md",
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
      title: (
        <>
          From Blueprint <br /> to Reality.
        </>
      ),
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
      title: (
        <>
          Command The <br /> Floor.
        </>
      ),
      titleClassName:
        "font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg",
      cta: {
        label: "Start Your Project",
        className:
          "bg-brand-red hover:bg-brand-maroon text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-colors shadow-xl",
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
  heading: (
    <>
      Engineering Growth for <br />
      <span className="text-brand-blue">
        Global Innovators
      </span>
    </>
  ),
  quote:
    '"Our mission is to transform how B2B brands connect with their audiences through innovative, immersive experiences that drive measurable business results."',
  attribution: "\u2014 Leadership Team, B2B Sales Arrow",
  stats: [
    {
      value: "250+",
      label: "Global Events Executed",
      icon: "Globe2",
      bg: "bg-gradient-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "$1.2B",
      label: "Pipeline Generated",
      icon: "TrendingUp",
      bg: "bg-gradient-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "40+",
      label: "Countries Served",
      icon: "Target",
      bg: "bg-gradient-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "15k+",
      label: "Enterprise Leads",
      icon: "Users",
      bg: "bg-gradient-to-br from-[#1b5e82] to-[#164e6b]",
    },
    {
      value: "98%",
      label: "Client Retention",
      icon: "Target",
      bg: "bg-gradient-to-br from-[#306f75] to-[#255c61]",
    },
    {
      value: "500+",
      label: "Booth Designs",
      icon: "Globe2",
      bg: "bg-gradient-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const HOME_SERVICES_CONTENT: HomeServicesContent = {
  eyebrow: "OUR CAPABILITIES",
  heading: (
    <>
      Strategic Disciplines for <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
        Enterprise Dominance
      </span>
    </>
  ),
  serviceLabel: "Service",
  ctaLabel: "Learn More",
  services: [
    {
      id: "booth-design",
      title: "Event Booth Design",
      description:
        "Architectural, immersive exhibition spaces engineered to dominate trade show floors.",
      icon: "Presentation",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "media",
      title: "Media Production",
      description:
        "Cinematic brand storytelling and high-fidelity corporate content that builds authority.",
      icon: "MonitorPlay",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "digital",
      title: "Digital Marketing",
      description:
        "Data-driven growth architectures designed to scale enterprise pipeline.",
      icon: "Rocket",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-red",
    },
    {
      id: "lead-gen",
      title: "Lead Generation",
      description:
        "Precision-targeted acquisition strategies for high-value B2B accounts.",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "brand",
      title: "Brand Activation",
      description:
        "Strategic positioning and identity frameworks that outmaneuver competitors.",
      icon: "Lightbulb",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
  ],
};

export const HOME_CASE_STUDIES_CONTENT: CaseStudiesContent = {
  eyebrow: "PROVEN EXECUTION",
  heading: (
    <>
      Impact That Drives <br />
      <span className="text-brand-blue">
        Market Valuation
      </span>
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
  ],
};

export const HOME_UPCOMING_EVENTS_CONTENT: UpcomingEventsContent = {
  eyebrow: "GLOBAL PRESENCE",
  heading: (
    <>
      Meet Us Where <br />
      <span className="text-brand-blue">
        Innovation Happens
      </span>
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
      title: "Mobile World Congress",
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
  ],
};

export const HOME_WHY_CHOOSE_US_CONTENT: WhyChooseUsContent = {
  eyebrow: "THE B2B DIFFERENCE",
  heading: (
    <>
      Why Enterprise Leaders <br />
      <span className="text-brand-cyan">Choose Us</span>
    </>
  ),
  reasons: [
    {
      id: "proven",
      title: "Proven Execution",
      description:
        "Decades of combined experience delivering high-stakes enterprise projects without fail.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "global",
      title: "Global Reach",
      description:
        "Established networks and infrastructure across 40+ countries to scale your operations instantly.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "strategic",
      title: "Strategic Creativity",
      description:
        "We don't just make it look good. We engineer design systems that drive measurable conversion.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "tech",
      title: "Technology-Led Delivery",
      description:
        "Leveraging cutting-edge tools and data architectures to ensure precision and performance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const HOME_TESTIMONIALS_CONTENT: TestimonialsContent = {
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
        "Their data-driven insights and innovative web designs created an entirely new paradigm for how we engage our enterprise prospects. A flawless execution.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 5,
      name: "Sophia Martinez",
      designation: "VP Marketing",
      company: "Elevate Logistics",
      rating: 5,
      quote:
        "A flawless execution from strategy to deployment. The ROI on the campaigns they structured for us broke all our previous quarter records.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const HOME_BLOGS_CONTENT: BlogsContent = {
  eyebrow: "INSIGHTS & INTELLIGENCE",
  heading: (
    <>
      Thought Leadership for <br />
      <span className="text-brand-red">Modern Growth</span>
    </>
  ),
  ctaLabel: "Explore Intelligence",
  blogs: [
    {
      id: 1,
      title: "The Future of Experiential B2B Marketing",
      category: "Strategy",
      date: "Oct 12, 2025",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Why Standard Trade Show Booths Are Failing",
      category: "Design",
      date: "Sep 28, 2025",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Architecting a High-Converting Media Strategy",
      category: "Media",
      date: "Sep 15, 2025",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export const HOME_FAQ_CONTENT: FAQContent = {
  eyebrow: "INTELLIGENCE & CLARITY",
  heading: (
    <>
      Frequently Asked{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
        Questions
      </span>
    </>
  ),
  description:
    "Hover over any card to reveal how we operate at the highest levels of enterprise B2B.",
  scrollAmount: 340,
  faqs: [
    {
      id: 1,
      question:
        "How does your strategic exhibition design differ from standard booth builders?",
      answer:
        "We treat exhibition space as an experiential marketing funnel. While standard builders focus on walls and graphics, we architect environments that control traffic flow and create immersive storytelling.",
    },
    {
      id: 2,
      question: "What is your average timeline for an enterprise market activation?",
      answer:
        "For comprehensive multi-channel activations involving physical presence and digital campaigns, our typical sprint is 12-16 weeks including strategic alignment and fabrication.",
    },
    {
      id: 3,
      question: "Do you offer global deployment capabilities?",
      answer:
        "Yes. With a network spanning 40+ countries, we seamlessly execute complex, high-fidelity physical and digital campaigns across EMEA, APAC, and the Americas.",
    },
    {
      id: 4,
      question: "How do you measure the ROI of physical media events?",
      answer:
        "We integrate custom digital touchpoints throughout our environments. By tracking engagements via NFC and CRM-synced apps, we provide a unified dashboard of ROI.",
    },
    {
      id: 5,
      question: "Can you integrate our existing digital assets into the booth?",
      answer:
        "Absolutely. Our technology-led delivery ensures your current software, videos, and AR/VR assets are seamlessly embedded into the architecture of the space.",
    },
  ],
};

export const HOME_CONTACT_CONTENT: ContactContent = {
  eyebrow: "START THE CONVERSATION",
  heading: (
    <>
      Ready to Scale Your <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
        Enterprise?
      </span>
    </>
  ),
  description:
    "Book a strategic consultation with our growth architects to discuss your next exhibition or digital campaign.",
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
      { value: "booth", label: "Event Booth Design" },
      { value: "media", label: "Media Production" },
      { value: "digital", label: "Digital Marketing" },
      { value: "lead", label: "Lead Generation" },
    ],
    messageLabel: "Message",
    messagePlaceholder: "How can we help you grow?",
    ctaLabel: "Send Inquiry",
  },
};
