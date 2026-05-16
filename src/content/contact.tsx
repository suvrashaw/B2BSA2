export const CONTACT_HERO = {
  showPreloader: false,
  eyebrow: "CONTACT US",
  title: (
    <>
      Let&apos;s Build Your Enterprise <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Growth Strategy
      </span>
    </>
  ),
  description:
    "Whether you need a booth for next month or a full-year growth program — start with one conversation. Our growth architects are ready.",
  image: {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
    alt: "Team collaboration",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: null,
  secondaryCtaLabel: null,
  stat: {
    value: "98%",
    label: "Client Satisfaction",
    icon: "Star",
  },
};

export const CONTACT_WHO_WE_ARE = {
  heading: (
    <>
      Why Brands <br />
      <span className="text-brand-blue">Trust Us</span>
    </>
  ),
  quote:
    '"Every engagement begins with a single conversation. That first call has generated over $1.2 billion in pipeline for our clients."',
  attribution: "— Leadership Team, B2B Sales Arrow",
  stats: [
    {
      value: "< 24h",
      label: "Average Response Time",
      icon: "Clock",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "98%",
      label: "Client Satisfaction Rate",
      icon: "Star",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "240+",
      label: "Brands Served",
      icon: "Users",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "40+",
      label: "Countries Covered",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const CONTACT_FAQ = {
  eyebrow: "BEFORE YOU REACH OUT",
  heading: (
    <>
      Common <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Questions
      </span>
    </>
  ),
  description: "Answers to what most clients ask before starting their first engagement with us.",
  scrollAmount: 340,
  faqs: [
    {
      id: "pricing",
      question: "What is your pricing structure?",
      answer:
        "We work on project-based and retainer models. Event projects typically start from $15,000. Lead generation and marketing retainers from $5,000/month. We tailor every proposal.",
    },
    {
      id: "locations",
      question: "Which markets do you serve?",
      answer:
        "We operate across 40+ countries with deep presence in EMEA, APAC, and the Americas. We have on-ground partners at every major trade show venue globally.",
    },
    {
      id: "turnaround",
      question: "What is your typical turnaround time?",
      answer:
        "Lead generation campaigns can launch within 2 weeks. Event booth design and production requires 8–12 weeks. Media production projects take 4–6 weeks from brief to delivery.",
    },
    {
      id: "minimum",
      question: "Is there a minimum engagement size?",
      answer:
        "We work best with brands committing to a 3-month minimum engagement for services like lead generation and marketing. For events, there is no minimum — we take single-event projects.",
    },
    {
      id: "process",
      question: "What does onboarding look like?",
      answer:
        "After your first call, we deliver a scoped proposal within 48 hours. Once approved, our team conducts a deep-dive strategy session and assigns a dedicated account lead within a week.",
    },
  ],
};

export const CONTACT_FORM = {
  eyebrow: "INQUIRY",
  heading: (
    <>
      Start the <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Conversation
      </span>
    </>
  ),
  description:
    "Whether you need a booth for next month or a full-year growth program — start with one conversation. Our growth architects are ready.",
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
      { value: "events", label: "Global Event Solutions" },
      { value: "media", label: "Media Production" },
      { value: "marketing", label: "Performance Marketing" },
      { value: "lead-gen", label: "Lead Generation" },
      { value: "research", label: "Market Research" },
    ],
    messageLabel: "Tell Us About Your Goals",
    messagePlaceholder: "What are you trying to achieve?",
    ctaLabel: "Send Inquiry",
  },
};
