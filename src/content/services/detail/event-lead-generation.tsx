export const ELG_HERO = {
  showPreloader: false,
  eyebrow: "EVENT LEAD GENERATION",
  title: (
    <>
      Turn Exhibition Floor <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Traffic Into Pipeline
      </span>
    </>
  ),
  description:
    "We deploy end-to-end lead capture systems at B2B events — badge scanning, appointment booking, real-time qualification, and CRM integration — so every conversation becomes a tracked opportunity.",
  image: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000",
    alt: "Event lead generation at trade show",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Case Studies",
  stat: { value: "280%", label: "Avg Lead Volume Increase", icon: "TrendingUp" },
};

export const ELG_WHY = {
  eyebrow: "THE LEAD CAPTURE DIFFERENCE",
  heading: (
    <>
      Why Events Are Your <br />
      <span className="text-brand-cyan">Highest-ROI Channel</span>
    </>
  ),
  reasons: [
    {
      id: "realtime",
      title: "Real-Time Qualification",
      description:
        "Leads scored and segmented on the spot using conversation data and badge information.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "crm",
      title: "Instant CRM Sync",
      description:
        "Every lead pushed to your CRM within minutes — no spreadsheets, no data entry lag.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "multi",
      title: "Multi-Channel Capture",
      description:
        "Badge scanning, QR codes, NFC tap, business card OCR — every touchpoint covered.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "followup",
      title: "Automated Follow-Up Sequences",
      description:
        "Triggered email and LinkedIn sequences launch within 24 hours of each lead capture.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const ELG_DELIVERABLES = {
  eyebrow: "WHAT'S INCLUDED",
  heading: (
    <>
      Your Complete <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Lead Capture System
      </span>
    </>
  ),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    {
      id: "badge",
      title: "Badge & NFC Lead Scanning",
      description:
        "Universal badge scanner compatible with all major event systems — no manual data entry.",
      icon: "ScanLine",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "qual",
      title: "On-Site Lead Qualification",
      description: "Custom qualification scripts and scoring criteria built before the event.",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "appt",
      title: "Appointment Booking System",
      description: "Pre-show and on-floor appointment scheduling with automated reminders.",
      icon: "Cpu",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-red",
    },
    {
      id: "report",
      title: "Post-Event Lead Report",
      description:
        "Full breakdown of leads by tier, source, and conversion potential delivered within 48 hours.",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const ELG_STATS = {
  heading: (
    <>
      Event Lead Results <br />
      <span className="text-brand-blue">by the Numbers</span>
    </>
  ),
  quote:
    "\"The difference between a great event and a mediocre one isn't the booth size — it's how many leads you leave with and how fast you follow up.\"",
  attribution: "— Event Strategy Team, B2B Sales Arrow",
  stats: [
    {
      value: "280%",
      label: "Avg Lead Volume Increase",
      icon: "TrendingUp",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "4 hrs",
      label: "Avg Time to CRM Entry",
      icon: "Zap",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "40+",
      label: "Events Covered Annually",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "68%",
      label: "Avg Lead-to-Meeting Rate",
      icon: "Users",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const ELG_CASE_STUDIES = {
  eyebrow: "LEAD GENERATION RESULTS",
  heading: (
    <>
      Pipeline Built <br />
      <span className="text-brand-blue">On the Floor</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Event Work",
  caseStudies: [
    {
      id: "saas",
      client: "SaaS Platform",
      title: "480 SQLs Captured at SaaStr Annual",
      challenge: "Previous year: 90 leads, 5% conversion rate.",
      solution: "NFC capture + real-time scoring + 24h automated follow-up sequence.",
      metric: "480",
      metricLabel: "SQLs in 3 Days",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "fintech",
      client: "Fintech Leader",
      title: "3.2x Pipeline from Sibos 2024",
      challenge: "High foot traffic but poor post-show conversion.",
      solution: "Appointment-first lead system with tiered follow-up by ICP score.",
      metric: "3.2x",
      metricLabel: "Pipeline vs Prior Year",
      icon: "TrendingUp",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const ELG_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (
    <>
      Exhibitors Who <br />
      <span className="text-[#1E6091]">Maximised ROI</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "Marcus Chen",
      designation: "VP Sales",
      company: "CloudScale AI",
      rating: 5,
      quote:
        "We went from collecting 80 business cards to 340 qualified leads with a scoring system that told us exactly who to call first. Game-changer.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Fatima Al-Rashid",
      designation: "Head of Growth",
      company: "Meridian Analytics",
      rating: 5,
      quote:
        "The real-time CRM sync meant our sales team was already booking meetings on day two of the show. No lag, no lost leads.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "David Park",
      designation: "Chief Revenue Officer",
      company: "NexaTech",
      rating: 5,
      quote:
        "Their event lead system paid for itself in the first two deals closed from the event. The qualification framework they designed was excellent.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const ELG_FAQ = {
  eyebrow: "EVENT LEAD GENERATION FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our event lead generation service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "setup",
      question: "How far in advance do you need to set up?",
      answer:
        "We recommend engaging us 4–6 weeks before the event. This allows time to configure the CRM integration, build qualification scripts, set up the appointment booking flow, and brief your booth team.",
    },
    {
      id: "crm",
      question: "Which CRMs do you integrate with?",
      answer:
        "We integrate natively with Salesforce, HubSpot, Pipedrive, Zoho, and Microsoft Dynamics. For other CRMs, we use Zapier or a custom API integration.",
    },
    {
      id: "staffing",
      question: "Do you provide on-site staff?",
      answer:
        "Yes. We can provide trained SDRs and event staff to work your booth, qualify leads, and manage the capture system. This is an optional add-on.",
    },
    {
      id: "virtual",
      question: "Can you do this for virtual or hybrid events?",
      answer:
        "Yes. For virtual events we set up attendee tracking, session engagement scoring, and digital follow-up sequences. For hybrid events we run both streams simultaneously.",
    },
    {
      id: "reporting",
      question: "What's in the post-event report?",
      answer:
        "Lead volume by tier, capture method breakdown, meeting booked rate, estimated pipeline value, follow-up sequence open rates, and recommended next actions for each lead tier.",
    },
  ],
};

export const ELG_CONTACT = {
  eyebrow: "START YOUR EVENT LEAD PROJECT",
  heading: (
    <>
      Capture More Leads <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        At Your Next Event
      </span>
    </>
  ),
  description:
    "Tell us about your upcoming event and target audience — we'll design a lead capture system that fills your pipeline.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Event Type",
    servicePlaceholder: "Select event type...",
    serviceOptions: [
      { value: "tradeshow", label: "Trade Show / Exhibition" },
      { value: "conference", label: "Conference / Summit" },
      { value: "roadshow", label: "Roadshow / Tour" },
      { value: "virtual", label: "Virtual / Hybrid Event" },
    ],
    messageLabel: "Tell Us About Your Event",
    messagePlaceholder: "Event name, date, location, expected attendance, and your lead targets...",
    ctaLabel: "Get Event Lead Strategy",
  },
};
