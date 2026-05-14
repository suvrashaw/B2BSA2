export const CE_HERO = {
  showPreloader: false,
  eyebrow: "CUSTOM EVENTS",
  title: (
    <>
      Custom Event Solutions That Position <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Your Brand as the Market Authority
      </span>
    </>
  ),
  description:
    "Don't just attend events — own them. We design and produce proprietary experiences that build relationships, generate press, and accelerate enterprise pipeline.",
  image: {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000",
    alt: "Custom branded B2B event",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Request a Custom Event Proposal",
  secondaryCtaLabel: "See Our Event Success Stories",
  stat: { value: "300+", label: "Global Events Handled", icon: "Calendar" },
};

export const CE_WHY = {
  eyebrow: "EVENT FORMATS",
  heading: (
    <>
      Custom B2B Event Formats <br />
      <span className="text-brand-cyan">We Produce</span>
    </>
  ),
  reasons: [
    {
      id: "control",
      title: "Complete Brand Control",
      description:
        "Your event. Your agenda. Your story. No competitor booths, no divided attention.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "audience",
      title: "Curated Buyer Audiences",
      description:
        "We invite and qualify your exact ICP — no generic delegates, only decision-makers worth your time.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "thought",
      title: "Thought Leadership at Scale",
      description:
        "Panel discussions, keynotes, and workshops that position your executives as industry authorities.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "pipeline",
      title: "Direct Pipeline Opportunities",
      description:
        "Private meeting rooms, product demos, and structured networking baked into the event design.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const CE_DELIVERABLES = {
  eyebrow: "OUR CAPABILITIES",
  heading: (
    <>
      What <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        We Manage
      </span>
    </>
  ),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    {
      id: "concept",
      title: "Concept & Programme Design",
      description: "Full event concept, agenda architecture, speaker curation, and format design.",
      icon: "Layers",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "venue",
      title: "Venue & Logistics Management",
      description: "Venue sourcing, AV setup, catering, transport, and on-site coordination.",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "speakers",
      title: "Speaker & Moderator Sourcing",
      description: "Access to our network of 500+ industry speakers and moderators globally.",
      icon: "Mic2",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "lead",
      title: "Attendee Acquisition & Lead Capture",
      description:
        "Targeted outreach to your ICP, registration management, and post-event follow-up.",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const CE_STATS = {
  heading: (
    <>
      Global Reach <br />
      <span className="text-brand-blue">Local Execution</span>
    </>
  ),
  quote:
    '"We design and execute proprietary B2B events that position enterprise brands as market authorities, from executive roundtables to global product launches, delivered with flawless execution across 40+ markets."',
  attribution: "— Custom Events Team, B2B Sales Arrow",
  stats: [
    {
      value: "300+",
      label: "Global Events Handled",
      icon: "Calendar",
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

export const CE_CASE_STUDIES = {
  eyebrow: "CUSTOM EVENT RESULTS",
  heading: (
    <>
      Real Events. <br />
      <span className="text-brand-blue">Real Results.</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Event Work",
  caseStudies: [
    {
      id: "summit",
      client: "Enterprise Cloud Platform",
      title: "400-Person CXO Summit, Dubai 2024",
      challenge: "Needed to establish enterprise credibility in MENA market.",
      solution: "Full-service CXO summit with 3 keynotes, 8 panels, and 1:1 meeting program.",
      metric: "$8.4M",
      metricLabel: "Pipeline Attributed",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "roundtable",
      client: "B2B Payments Company",
      title: "12-City CFO Roundtable Series",
      challenge: "Unable to reach finance decision-makers through digital channels.",
      solution:
        "Intimate 20-person CFO roundtables in 12 cities — fully managed logistics and content.",
      metric: "144",
      metricLabel: "CFOs Engaged",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const CE_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (
    <>
      Real Events. <br />
      <span className="text-[#1E6091]">Real Results.</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "Elena Vasquez",
      designation: "CMO",
      company: "Nexora Enterprise",
      rating: 5,
      quote:
        "B2BSA produced our flagship summit from concept to execution. 400 attendees, zero issues, and $8M in pipeline within 60 days. We've made it an annual event.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Thomas Brandt",
      designation: "VP Revenue",
      company: "PlatformOne",
      rating: 5,
      quote:
        "The roundtable series they ran for us was flawless. Intimate, well-curated, and every attendee was exactly who we needed in the room.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Nia Osei",
      designation: "Director of Marketing",
      company: "Axiom Technologies",
      rating: 5,
      quote:
        "From speaker sourcing to post-event reporting, they handled everything. We focused on the conversations; they handled the complexity.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const CE_FAQ = {
  eyebrow: "CUSTOM EVENTS FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our custom B2B event service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "formats",
      question: "What event formats do you produce?",
      answer:
        "We produce executive roundtables (10–30 pax), industry summits (100–1,000+ pax), product launch events, roadshows, awards ceremonies, and custom hybrid formats.",
    },
    {
      id: "lead-time",
      question: "How long does it take to plan a custom event?",
      answer:
        "8–12 weeks for smaller formats (roundtables, roadshows). 16–24 weeks for large summits. We can compress timelines for urgent requirements with an express production fee.",
    },
    {
      id: "attendees",
      question: "How do you recruit attendees?",
      answer:
        "We use a combination of direct outreach to your ICP list, our proprietary executive network, event partnerships, and digital promotion. Attendee quality is guaranteed — we qualify every registrant.",
    },
    {
      id: "virtual",
      question: "Can events be virtual or hybrid?",
      answer:
        "Yes. We run fully virtual events on our preferred platform stack, and hybrid formats with physical and digital attendee experiences running simultaneously.",
    },
    {
      id: "ip",
      question: "Do you help with event content and IP?",
      answer:
        "Yes. We have an in-house content team that produces keynote decks, research reports, panel guides, and post-event content assets (video highlights, whitepapers, blog series).",
    },
  ],
};

export const CE_CONTACT = {
  eyebrow: "START YOUR CUSTOM EVENT",
  heading: (
    <>
      Design Your <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Flagship Event
      </span>
    </>
  ),
  description:
    "Tell us about your audience and goals — we'll design an event format that builds authority and fills your pipeline.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Event Format",
    servicePlaceholder: "Select format...",
    serviceOptions: [
      { value: "roundtable", label: "Executive Roundtable (10–30)" },
      { value: "summit", label: "Industry Summit (100–500)" },
      { value: "launch", label: "Product Launch Event" },
      { value: "roadshow", label: "Multi-City Roadshow" },
      { value: "virtual", label: "Virtual / Hybrid" },
    ],
    messageLabel: "Tell Us About Your Event Vision",
    messagePlaceholder: "Audience profile, geography, goals, approximate budget...",
    ctaLabel: "Start Planning My Event",
  },
};
