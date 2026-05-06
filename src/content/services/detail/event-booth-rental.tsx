export const EBR_HERO = {
  showPreloader: false,
  eyebrow: "EVENT BOOTH RENTAL",
  title: (
    <>
      Premium Booth Presence <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Without the Capital Cost
      </span>
    </>
  ),
  description:
    "High-impact modular exhibition booths available for short-term rental — fully branded, delivered, installed, and removed. The strategic choice for infrequent exhibitors or first-time shows.",
  image: {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
    alt: "Modular rental booth at trade show",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Our Inventory",
  stat: { value: "300+", label: "Booth Rentals Delivered", icon: "Package" },
};

export const EBR_WHY = {
  eyebrow: "THE RENTAL ADVANTAGE",
  heading: (
    <>
      Smart Economics for <br />
      <span className="text-brand-cyan">Smart Exhibitors</span>
    </>
  ),
  reasons: [
    {
      id: "cost",
      title: "No Capital Expenditure",
      description:
        "Avoid the upfront cost of a custom build — pay only when you exhibit, with zero storage fees.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "flex",
      title: "Flexible Size & Configuration",
      description:
        "Upsize or downsize for each event — from 9 sqm inline booths to 100 sqm island configurations.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "brand",
      title: "Fully Custom Branded",
      description:
        "Every rental is fully rebranded for you — graphics, colours, signage, and digital elements.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "service",
      title: "Install & Dismantle Included",
      description:
        "Our crew handles all setup and breakdown — you arrive to a finished booth and leave without lifting a finger.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const EBR_DELIVERABLES = {
  eyebrow: "WHAT'S INCLUDED",
  heading: (
    <>
      Everything in Your <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Rental Package
      </span>
    </>
  ),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    {
      id: "structure",
      title: "Modular Booth Structure",
      description:
        "Premium aluminium extrusion system with fabric or rigid infill panels in any configuration.",
      icon: "Package",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "graphics",
      title: "Custom Branded Graphics",
      description:
        "Full-colour large-format graphics printed to your brand specifications and applied to the structure.",
      icon: "RefreshCw",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "logistics",
      title: "Freight & Logistics",
      description:
        "Booth shipped to any venue globally — we handle customs, freight forwarding, and venue delivery.",
      icon: "Truck",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-red",
    },
    {
      id: "install",
      title: "On-Site Installation Crew",
      description:
        "Certified installation team builds and dismantles your booth — guaranteed on-time and to spec.",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const EBR_STATS = {
  heading: (
    <>
      Booth Rental Results <br />
      <span className="text-brand-blue">by the Numbers</span>
    </>
  ),
  quote:
    "\"The smartest exhibitors don't ask whether to rent or buy. They ask whether their event frequency justifies the capital. For most, it doesn't — and rental is the right answer.\"",
  attribution: "— Booth Solutions Team, B2B Sales Arrow",
  stats: [
    {
      value: "300+",
      label: "Booth Rentals Delivered",
      icon: "Package",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "40+",
      label: "Countries Served",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "98%",
      label: "On-Time Installation Rate",
      icon: "Target",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "4 days",
      label: "Avg Turnaround from Order",
      icon: "Zap",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const EBR_CASE_STUDIES = {
  eyebrow: "BOOTH RENTAL RESULTS",
  heading: (
    <>
      First-Time Exhibitors <br />
      <span className="text-brand-blue">Who Stood Out</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Booth Work",
  caseStudies: [
    {
      id: "startup",
      client: "Series B SaaS Startup",
      title: "First Exhibition — Zero Build Budget",
      challenge: "First-time exhibitor with no booth assets or event experience.",
      solution: "48 sqm modular island rental, fully branded, with lead capture setup.",
      metric: "190+",
      metricLabel: "Leads in 2 Days",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "global",
      client: "Manufacturing Co.",
      title: "Global Expansion: 8 Shows, 1 Year",
      challenge: "Needed presence at 8 different shows across 5 countries.",
      solution: "Modular rental system shipped and reinstalled at each venue globally.",
      metric: "8",
      metricLabel: "Countries in 12 Months",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const EBR_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (
    <>
      Exhibitors Who <br />
      <span className="text-[#1E6091]">Chose Smart</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "Sophie Laurent",
      designation: "Marketing Manager",
      company: "Luminar Tech",
      rating: 5,
      quote:
        "We exhibited at CES for the first time with a rental booth that looked completely custom. Nobody knew it wasn't ours — and the leads were very real.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Kenji Watanabe",
      designation: "Director of Sales",
      company: "Praxis Automation",
      rating: 5,
      quote:
        "We attend 6 events per year in different geographies. Owning a booth would be a logistical nightmare. B2BSA's rental model is perfect for our scale.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Amara Diallo",
      designation: "Chief Marketing Officer",
      company: "Vertex Solutions",
      rating: 5,
      quote:
        "The booth arrived perfectly branded, the crew installed it in 4 hours, and they were back to dismantle before we even left the venue. Flawless service.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const EBR_FAQ = {
  eyebrow: "BOOTH RENTAL FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our exhibition booth rental service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "sizes",
      question: "What booth sizes are available for rental?",
      answer:
        "We offer rental configurations from 9 sqm (3x3m) up to 100 sqm island booths. Custom sizes are available on request. Most popular sizes are 18–36 sqm inline and corner positions.",
    },
    {
      id: "branding",
      question: "How custom can the branding be?",
      answer:
        "Fully custom. We print your brand colours, logo, messaging, and imagery on all graphic surfaces. LED lightboxes, digital screens, and product display units are also available.",
    },
    {
      id: "turnaround",
      question: "What is the minimum booking lead time?",
      answer:
        "We recommend booking 6 weeks before your event for standard configurations. Rush production (2–3 weeks) is available at a premium for smaller configurations.",
    },
    {
      id: "global",
      question: "Can you ship rental booths internationally?",
      answer:
        "Yes. We have logistics partners at all major exhibition venues globally. We manage export documentation, customs clearance, and freight for international rentals.",
    },
    {
      id: "vs-buy",
      question: "When should I rent vs. buy a custom booth?",
      answer:
        "Renting is ideal if you exhibit fewer than 4 times per year or are testing new markets. If you exhibit at 5+ events annually with consistent branding, a custom build typically offers better ROI after 2–3 years.",
    },
  ],
};

export const EBR_CONTACT = {
  eyebrow: "RENT A BOOTH",
  heading: (
    <>
      Book Your Booth <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        For Your Next Event
      </span>
    </>
  ),
  description:
    "Tell us about your event and we'll recommend the right rental configuration and provide a fast quote.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Booth Size Needed",
    servicePlaceholder: "Select size range...",
    serviceOptions: [
      { value: "small", label: "Small (9–18 sqm)" },
      { value: "medium", label: "Medium (18–48 sqm)" },
      { value: "large", label: "Large (48–100 sqm)" },
      { value: "custom", label: "Custom / Not Sure" },
    ],
    messageLabel: "Event Details",
    messagePlaceholder: "Event name, venue, dates, and any special requirements...",
    ctaLabel: "Get Rental Quote",
  },
};
