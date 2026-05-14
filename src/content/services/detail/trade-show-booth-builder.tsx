export const TSBB_HERO = {
  showPreloader: false,
  eyebrow: "TRADE SHOW BOOTH BUILDER",
  title: (
    <>
      Trade Show Booth Builders Who Engineer for <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Conversion, Not Just Aesthetics
      </span>
    </>
  ),
  description:
    "We are a full-service exhibition booth builder — design, fabrication, logistics, and on-site installation — serving enterprise brands at the world's most competitive trade shows.",
  image: {
    src: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=2000",
    alt: "Trade show booth construction in progress",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Get a Build Quote",
  secondaryCtaLabel: "Download Build Capabilities PDF",
  stat: { value: "500+", label: "Booths Built & Installed", icon: "HardHat" },
};

export const TSBB_WHY = {
  eyebrow: "BEYOND THE BUILD",
  heading: (
    <>
      Exhibition Stand Design, Build, <br />
      <span className="text-brand-cyan">and Turnkey Solutions</span>
    </>
  ),
  reasons: [
    {
      id: "inhouse",
      title: "In-House Fabrication",
      description:
        "We own our production — no third-party contractors, no quality compromises, no delay risk.",
      image:
        "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "materials",
      title: "Premium Materials",
      description:
        "Aircraft-grade aluminium, tempered glass, bespoke joinery, and precision CNC-cut components.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "global",
      title: "Global Installation Network",
      description:
        "Certified installation crews in 40+ countries — your booth is built to the same standard anywhere.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "reuse",
      title: "Designed for Reuse",
      description:
        "Every structure is engineered for multiple shows — easy breakdown, storage, and reconfiguration.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const TSBB_DELIVERABLES = {
  eyebrow: "OUR CAPABILITIES",
  heading: (
    <>
      What <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        We Build
      </span>
    </>
  ),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    {
      id: "design",
      title: "Structural Design & Engineering",
      description:
        "Full structural engineering drawings, load calculations, and venue compliance documentation.",
      icon: "Layers",
      image:
        "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "fabrication",
      title: "Custom Fabrication",
      description:
        "In-house CNC machining, joinery, powder coating, and final assembly at our production facility.",
      icon: "Settings",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "install",
      title: "Global Installation & Breakdown",
      description:
        "Certified crews install and dismantle at any venue worldwide — guaranteed to spec every time.",
      icon: "Wrench",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "storage",
      title: "Storage & Maintenance",
      description:
        "Climate-controlled storage between events with pre-show inspection and maintenance included.",
      icon: "HardHat",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const TSBB_STATS = {
  heading: (
    <>
      Global Reach <br />
      <span className="text-brand-blue">Local Execution</span>
    </>
  ),
  quote:
    '"We provide premier trade show booth builders for enterprise brands, offering custom fabrication, global deployment, and turnkey installation that has delivered 500+ booths across major global markets."',
  attribution: "— Fabrication Team, B2B Sales Arrow",
  stats: [
    {
      value: "500+",
      label: "Booth Designs Delivered",
      icon: "HardHat",
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
      label: "Engineering Compliance",
      icon: "Target",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const TSBB_CASE_STUDIES = {
  eyebrow: "BUILD PORTFOLIO HIGHLIGHTS",
  heading: (
    <>
      Real Events. <br />
      <span className="text-brand-blue">Real Results.</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View Full Portfolio",
  caseStudies: [
    {
      id: "automotive",
      client: "Automotive OEM",
      title: "900 sqm Double-Deck at IAA Mobility",
      challenge: "Largest exhibition footprint in company history — on a tight timeline.",
      solution: "Full structural engineering, in-house fabrication, 12-person installation crew.",
      metric: "900 sqm",
      metricLabel: "Installed in 4 Days",
      icon: "HardHat",
      image:
        "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "pharma",
      client: "Global Pharma Brand",
      title: "Reconfigurable Booth Used at 14 Shows",
      challenge: "Needed a single build to work across 14 global events over 2 years.",
      solution: "Modular reconfigurable system designed for 5 different floor plan configurations.",
      metric: "14 shows",
      metricLabel: "From 1 Build",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const TSBB_TESTIMONIALS = {
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
      name: "Hans Mueller",
      designation: "Head of Trade Marketing",
      company: "Precision Industries GmbH",
      rating: 5,
      quote:
        "We've been using the same B2BSA-built booth across 3 continents for 4 years. It looks as good today as it did on day one. Exceptional build quality.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Yuki Tanaka",
      designation: "Brand Manager",
      company: "Lumex Robotics",
      rating: 5,
      quote:
        "The reconfigurable system they built for us saved us from booking a new booth every year. We just ship it, and their crew handles the rest wherever we go.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Isabelle Moreau",
      designation: "Events Director",
      company: "Continental Pharma",
      rating: 5,
      quote:
        "From structural drawings to final installation, their process is military-grade. Zero surprises, zero compromises on quality.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const TSBB_FAQ = {
  eyebrow: "BOOTH BUILDER FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our trade show booth building service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "timeline",
      question: "How long does a custom build take?",
      answer:
        "Design and engineering: 2 weeks. Production: 6–10 weeks depending on complexity. Total from project kick-off to first installation: 10–14 weeks. Double-deck structures require 16–20 weeks.",
    },
    {
      id: "sizes",
      question: "What sizes and configurations can you build?",
      answer:
        "We build everything from 9 sqm inline booths to 2,000+ sqm pavilions. Inline, corner, island, peninsula, and double-deck configurations all supported.",
    },
    {
      id: "materials",
      question: "What materials do you use?",
      answer:
        "We use aircraft-grade aluminium extrusions as our structural backbone, with options for timber, glass, acrylic, steel, and composite cladding. All materials are sourced for durability and premium finish.",
    },
    {
      id: "reuse",
      question: "How do you ensure the booth holds up over multiple shows?",
      answer:
        "We engineer all components for a minimum of 10 assembly/disassembly cycles. Pre-show inspection and maintenance is included in our storage package. Wear parts are replaced proactively.",
    },
    {
      id: "storage",
      question: "Where do you store booths between events?",
      answer:
        "We have climate-controlled storage facilities in Dubai, Singapore, Frankfurt, and Chicago. For other geographies, we use approved partner facilities. Monthly storage rates available.",
    },
  ],
};

export const TSBB_CONTACT = {
  eyebrow: "START YOUR BOOTH BUILD",
  heading: (
    <>
      Build Your <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Exhibition Structure
      </span>
    </>
  ),
  description:
    "Tell us about your event requirements and we'll provide a detailed build proposal and timeline.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Booth Size",
    servicePlaceholder: "Select size range...",
    serviceOptions: [
      { value: "small", label: "Small (9–36 sqm)" },
      { value: "medium", label: "Medium (36–100 sqm)" },
      { value: "large", label: "Large (100–500 sqm)" },
      { value: "enterprise", label: "Enterprise (500+ sqm)" },
    ],
    messageLabel: "Tell Us About Your Project",
    messagePlaceholder: "Event name, venue, size, configuration, and any special requirements...",
    ctaLabel: "Get Build Proposal",
  },
};
