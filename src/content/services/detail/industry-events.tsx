export const IE_HERO = {
  showPreloader: false,
  eyebrow: "INDUSTRY EVENTS",
  title: (
    <>
      Be Present Where <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Decisions Are Made
      </span>
    </>
  ),
  description:
    "We identify, plan, and manage your presence at the most valuable B2B industry events globally — so your brand is in the room when buyers are ready to commit.",
  image: {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2000",
    alt: "Industry event conference floor",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Case Studies",
  stat: { value: "200+", label: "Industry Events Covered", icon: "Globe2" },
};

export const IE_WHY = {
  eyebrow: "WHY INDUSTRY EVENTS WORK",
  heading: (
    <>
      The Strategic Value <br />
      <span className="text-brand-cyan">of Being in the Room</span>
    </>
  ),
  reasons: [
    {
      id: "buyers",
      title: "Decision-Makers in One Place",
      description:
        "Industry events concentrate your ICP in a single venue — the highest-density lead opportunity of the year.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "trust",
      title: "Trust Built Face-to-Face",
      description:
        "In-person conversations accelerate the trust cycle 4x faster than digital-only outreach.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "intel",
      title: "Competitive Market Intelligence",
      description:
        "Walk away with insight into competitor positioning, buyer concerns, and emerging trends.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "brand",
      title: "Brand Visibility & Authority",
      description:
        "Speaking slots, sponsorships, and exhibition space position your brand as a category leader.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const IE_DELIVERABLES = {
  eyebrow: "WHAT'S INCLUDED",
  heading: (
    <>
      Full-Service <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Event Management
      </span>
    </>
  ),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    {
      id: "selection",
      title: "Event Selection & Strategy",
      description:
        "We map and rank events by ICP density, competitor activity, and pipeline potential.",
      icon: "Star",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "logistics",
      title: "End-to-End Logistics",
      description:
        "Registration, travel, booth booking, freight, and on-site coordination all managed for you.",
      icon: "MapPin",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "speaking",
      title: "Speaking & Sponsorship Placement",
      description:
        "We secure panel slots, keynote opportunities, and brand sponsorships at your target events.",
      icon: "Building2",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "capture",
      title: "Lead Capture & Follow-Up",
      description:
        "On-site lead qualification, CRM sync, and automated post-event follow-up sequences.",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const IE_STATS = {
  heading: (
    <>
      Industry Event Results <br />
      <span className="text-brand-blue">by the Numbers</span>
    </>
  ),
  quote:
    '"The best B2B sales conversations don\'t start on LinkedIn. They start at an industry event, over a coffee, in a 10-minute hallway conversation."',
  attribution: "— Events Strategy Team, B2B Sales Arrow",
  stats: [
    {
      value: "200+",
      label: "Events Covered Globally",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "45+",
      label: "Countries Represented",
      icon: "MapPin",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "3.8x",
      label: "Avg Pipeline Multiplier",
      icon: "TrendingUp",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "85%",
      label: "Client Event Attendance Rate",
      icon: "Users",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const IE_CASE_STUDIES = {
  eyebrow: "INDUSTRY EVENT RESULTS",
  heading: (
    <>
      Events That <br />
      <span className="text-brand-blue">Moved the Needle</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Event Work",
  caseStudies: [
    {
      id: "web3",
      client: "Blockchain Platform",
      title: "200+ Enterprise Meetings at Token2049",
      challenge: "Unknown brand in crowded Web3 enterprise space.",
      solution: "Speaking slot + island booth + pre-booked meeting program.",
      metric: "200+",
      metricLabel: "Enterprise Meetings",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "hr",
      client: "HR Tech Scale-Up",
      title: "$4.2M Pipeline from HR Tech Conference",
      challenge: "First-time exhibitor, no event strategy.",
      solution: "Full-service event management + targeted pre-show outreach.",
      metric: "$4.2M",
      metricLabel: "Pipeline Generated",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const IE_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (
    <>
      Brands That <br />
      <span className="text-[#1E6091]">Owned the Room</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "Arjun Mehta",
      designation: "CEO",
      company: "DataFusion Labs",
      rating: 5,
      quote:
        "B2BSA handled everything — from selecting which events to attend to booking the speaking slot to running our booth. We just showed up and closed deals.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Claire Dupont",
      designation: "Marketing Director",
      company: "Veloxa Systems",
      rating: 5,
      quote:
        "Their event selection process alone was worth it. They identified two niche events we'd never heard of that turned into our biggest pipeline quarters.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      designation: "Head of Partnerships",
      company: "Stratify Global",
      rating: 5,
      quote:
        "The pre-event outreach and meeting scheduling they ran meant we had 40 confirmed meetings before the show even started. Incredible ROI.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const IE_FAQ = {
  eyebrow: "INDUSTRY EVENTS FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our industry event management service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "which",
      question: "How do you decide which events to recommend?",
      answer:
        "We use a proprietary scoring model that ranks events by your ICP concentration, average deal size of attendees, competitor presence, content alignment, and historical lead-to-pipeline conversion rates.",
    },
    {
      id: "budget",
      question: "What is a typical event budget?",
      answer:
        "Budgets vary significantly by event tier and geography. Tier 1 global events (GITEX, Dreamforce, CES) require $50k–$200k+ all-in. Niche industry events can be executed for $10k–$30k. We help you build a portfolio approach for maximum ROI.",
    },
    {
      id: "speaking",
      question: "How do you secure speaking slots?",
      answer:
        "We have established relationships with event organisers at 80+ major shows globally. For new events, we build the submission and pitch the most relevant angle for your brand. Slots are typically secured 3–6 months in advance.",
    },
    {
      id: "lead",
      question: "What lead volumes should we expect?",
      answer:
        "This depends heavily on event size, booth placement, and your engagement program. Our clients typically achieve 150–600 qualified leads at mid-to-large events with our full-service management.",
    },
    {
      id: "timeline",
      question: "How far in advance should we plan?",
      answer:
        "12 weeks is our recommended minimum. Booth space at major events sells out 6–9 months ahead. Speaking slots are competitive. Early planning is directly correlated with better outcomes.",
    },
  ],
};

export const IE_CONTACT = {
  eyebrow: "PLAN YOUR EVENT PRESENCE",
  heading: (
    <>
      Build Your <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Event Calendar
      </span>
    </>
  ),
  description:
    "Tell us about your target market and goals — we'll map the events that will move your pipeline most.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Industry",
    servicePlaceholder: "Select your industry...",
    serviceOptions: [
      { value: "tech", label: "Technology / SaaS" },
      { value: "finance", label: "Finance / Fintech" },
      { value: "health", label: "Healthcare / Pharma" },
      { value: "manufacturing", label: "Manufacturing / Industrial" },
      { value: "other", label: "Other" },
    ],
    messageLabel: "Tell Us About Your Goals",
    messagePlaceholder: "Target market, geographies, annual budget, and what success looks like...",
    ctaLabel: "Plan My Event Calendar",
  },
};
