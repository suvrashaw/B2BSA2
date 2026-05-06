
export const BLOG_HERO = {
  showPreloader: false,
  eyebrow: "RESOURCES & INSIGHTS",
  title: (
    <>
      B2B Marketing <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Intelligence
      </span>
    </>
  ),
  description:
    "Strategies, case breakdowns, and market intelligence for enterprise growth leaders navigating complex B2B landscapes.",
  image: {
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000",
    alt: "Content and insights hub",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Browse Articles",
  secondaryCtaLabel: "Subscribe",
  stat: {
    value: "120+",
    label: "Articles Published",
    icon: "BookOpen",
  },
};

export const BLOG_WHO_WE_ARE = {
  heading: (
    <>
      Intelligence at <br />
      <span className="text-brand-blue">Scale</span>
    </>
  ),
  quote:
    '"We write what we live. Every article is built from real campaign data, event floor learnings, and enterprise-grade B2B strategy."',
  attribution: "— B2BSA Content Team",
  stats: [
    {
      value: "120+",
      label: "Articles Published",
      icon: "BookOpen",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "18k+",
      label: "Monthly Readers",
      icon: "Users",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "12",
      label: "Topics Covered",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "6 min",
      label: "Avg Read Time",
      icon: "Clock",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const BLOG_LOGOS = [
  { id: "strategy" },
  { id: "events" },
  { id: "media" },
  { id: "lead-gen" },
  { id: "seo" },
  { id: "research" },
  { id: "data" },
];

export const BLOG_POSTS = {
  eyebrow: "INSIGHTS & INTELLIGENCE",
  heading: (
    <>
      Thought Leadership for <br />
      <span className="text-brand-red">Modern Growth</span>
    </>
  ),
  ctaLabel: "Browse All Articles",
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

export const BLOG_FAQ = {
  eyebrow: "ABOUT OUR CONTENT",
  heading: (
    <>
      Common <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our content and how to make the most of it.",
  scrollAmount: 340,
  faqs: [
    {
      id: "topics",
      question: "What topics do you cover?",
      answer:
        "We cover B2B event strategy, booth design, media production, SEO, LinkedIn advertising, lead generation, data intelligence, and enterprise marketing — all from a practitioner lens.",
    },
    {
      id: "frequency",
      question: "How often do you publish?",
      answer:
        "We publish 2–3 in-depth articles per week, plus monthly data reports and quarterly market intelligence briefings tailored for enterprise B2B leaders.",
    },
    {
      id: "subscribe",
      question: "How do I subscribe for updates?",
      answer:
        "Use the 'Suggest a Topic' form below to drop your email. We'll add you to our intelligence list — no spam, no irrelevant content, only high-signal B2B insights.",
    },
    {
      id: "guest",
      question: "Do you accept guest posts?",
      answer:
        "We accept thought leadership contributions from B2B practitioners with verifiable credentials. Reach out via the form below with your topic pitch and a sample of your writing.",
    },
    {
      id: "data",
      question: "Are your articles data-backed?",
      answer:
        "Yes. Every strategic claim is backed by our proprietary client campaign data, third-party research, or direct field observations from enterprise events across 40+ countries.",
    },
  ],
};

export const BLOG_CONTACT = {
  eyebrow: "JOIN THE CONVERSATION",
  heading: (
    <>
      Suggest a <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Topic
      </span>
    </>
  ),
  description:
    "Is there a B2B challenge you'd like us to cover? Drop your idea and email — we read every submission.",
  illustration: null,
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Topic Category",
    servicePlaceholder: "Select a category...",
    serviceOptions: [
      { value: "events", label: "Event Strategy" },
      { value: "media", label: "Media Production" },
      { value: "marketing", label: "Performance Marketing" },
      { value: "lead-gen", label: "Lead Generation" },
      { value: "research", label: "Market Research" },
    ],
    messageLabel: "Your Topic Idea",
    messagePlaceholder: "What would you like us to write about?",
    ctaLabel: "Submit Idea",
  },
};
