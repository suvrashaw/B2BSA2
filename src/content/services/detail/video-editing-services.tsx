export const VES_HERO = {
  showPreloader: false,
  eyebrow: "VIDEO EDITING SERVICES",
  title: (
    <>
      Professional Video Editing Services That Transform <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Raw Footage Into Revenue Assets
      </span>
    </>
  ),
  description:
    "Raw footage has no ROI. Our post-production team transforms your event footage, interviews, and product demos into polished, conversion-ready video assets.",
  image: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    alt: "Professional video editing suite",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Request an Editing Consultation",
  secondaryCtaLabel: "Start Your Editing Project",
  stat: { value: "1,200+", label: "Videos Edited & Delivered", icon: "Scissors" },
};

export const VES_WHY = {
  eyebrow: "SPEED & SCALE",
  heading: (
    <>
      Our Post-Production <br />
      <span className="text-brand-cyan">Services</span>
    </>
  ),
  reasons: [
    {
      id: "quality",
      title: "Brand-Consistent Quality",
      description:
        "Every cut, colour grade, and motion graphic follows your brand guidelines to the pixel.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "speed",
      title: "Fast Turnaround",
      description:
        "Standard edits delivered in 48 hours. Urgent same-day edits available for event content.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "platform",
      title: "Platform-Native Formats",
      description:
        "Every video delivered in the exact specs for LinkedIn, YouTube, website, and paid media campaigns.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "scale",
      title: "Scale Without Quality Loss",
      description:
        "Our editing team handles high-volume content programmes — 20, 50, or 100+ videos per month.",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const VES_DELIVERABLES = {
  eyebrow: "OUR SERVICES",
  heading: (
    <>
      Video Editing & <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Post-Production
      </span>
    </>
  ),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    {
      id: "edit",
      title: "Multi-Platform Edit",
      description:
        "Your footage edited into 16:9, 1:1, and 9:16 formats — optimised for every major B2B distribution channel.",
      icon: "Scissors",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "colour",
      title: "Colour Grading",
      description:
        "Cinema-quality colour correction and grading to ensure consistent look and feel across your entire video library.",
      icon: "Wand2",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "motion",
      title: "Motion Graphics & Titles",
      description:
        "Branded lower thirds, animated titles, logo reveals, and call-to-action overlays.",
      icon: "Video",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "captions",
      title: "Captions & Subtitles",
      description:
        "Accurate closed captions and burned-in subtitles for silent-play environments (LinkedIn auto-play).",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const VES_STATS = {
  heading: (
    <>
      Global Reach <br />
      <span className="text-brand-blue">Local Execution</span>
    </>
  ),
  quote:
    '"We provide professional video editing and post-production for enterprise brands, delivering polished, conversion-ready video assets from raw event footage, interviews, and product demos across 40+ global markets."',
  attribution: "— Post-Production Lead, B2B Sales Arrow",
  stats: [
    {
      value: "1,500+",
      label: "Videos Edited & Delivered",
      icon: "Video",
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

export const VES_CASE_STUDIES = {
  eyebrow: "EDITING RESULTS",
  heading: (
    <>
      Real Events. <br />
      <span className="text-brand-blue">Real Results.</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Work",
  caseStudies: [
    {
      id: "vortex",
      client: "Vortex Labs",
      title: "Monthly Video Programme Grows LinkedIn 400%",
      challenge: "Raw executive interview footage sitting unused for months.",
      solution: "Monthly editing retainer — 12 videos per month across LinkedIn and YouTube.",
      metric: "+400%",
      metricLabel: "LinkedIn Follower Growth",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "synapse",
      client: "Synapse Networks",
      title: "Sales Video Cuts Reduce Sales Cycle by 30%",
      challenge: "Long sales cycle due to complex product education needs.",
      solution: "Series of 90-second product explainer videos embedded in sales email sequences.",
      metric: "−30%",
      metricLabel: "Sales Cycle Length",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const VES_TESTIMONIALS = {
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
      name: "David Alaba",
      designation: "Head of Growth",
      company: "Synapse Networks",
      rating: 5,
      quote:
        "We had months of footage gathering dust. B2B Sales Arrow's editing team turned it into 40+ platform-ready videos in 3 weeks. Our content engine is now running.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Sophia Martinez",
      designation: "VP Marketing",
      company: "Elevate Logistics",
      rating: 5,
      quote:
        "48-hour turnaround on video edits changed how we operate. We can now react to trends with polished video content the same week.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Michael Chen",
      designation: "VP of Global Sales",
      company: "Aura Systems",
      rating: 5,
      quote:
        "The brand consistency across our entire video library is now exceptional. Every video looks like it came from the same world-class production house.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const VES_FAQ = {
  eyebrow: "VIDEO EDITING FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our video editing service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "format",
      question: "What file formats do you accept for raw footage?",
      answer:
        "We accept all major formats including MP4, MOV, MXF, R3D, BRAW, and ProRes. We can work with footage from any camera system or screen recording software.",
    },
    {
      id: "turnaround",
      question: "How fast is your standard turnaround?",
      answer:
        "Standard edits (under 5 minutes): 48 hours. Long-form content (5–30 min): 5 business days. Urgent same-day editing is available at a premium for event content.",
    },
    {
      id: "revisions",
      question: "How many revision rounds are included?",
      answer:
        "All projects include 2 revision rounds. Additional revisions are available at an hourly rate. Our detailed brief process minimises the need for revisions.",
    },
    {
      id: "retainer",
      question: "Do you offer monthly editing retainers?",
      answer:
        "Yes. Our monthly retainer plans offer priority turnaround, dedicated editors, and volume pricing for teams producing 10+ videos per month.",
    },
    {
      id: "brand",
      question: "Can you match our brand guidelines exactly?",
      answer:
        "Yes. We work from your brand kit — fonts, colours, logo usage, motion style — and create a master template library so every video is pixel-perfect to your identity.",
    },
  ],
};

export const VES_CONTACT = {
  eyebrow: "START YOUR EDITING PROJECT",
  heading: (
    <>
      Transform Your <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Raw Footage
      </span>
    </>
  ),
  description:
    "Send us your footage and brand guidelines — we'll turn it into polished B2B video content that performs.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Edit Type",
    servicePlaceholder: "Select edit type...",
    serviceOptions: [
      { value: "single", label: "One-Off Edit" },
      { value: "series", label: "Video Series" },
      { value: "retainer", label: "Monthly Retainer" },
      { value: "event", label: "Event Content" },
      { value: "other", label: "Other" },
    ],
    messageLabel: "Describe Your Project",
    messagePlaceholder: "Volume of footage, desired output length, platform, and deadline...",
    ctaLabel: "Get Video Editing Quote",
  },
};
