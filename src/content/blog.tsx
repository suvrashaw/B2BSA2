export const BLOG_HERO = {
  showPreloader: false,
  eyebrow: "B2B GROWTH INSIGHTS",
  title: (
    <>
      Thought Leadership for <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Enterprise Growth Teams
      </span>
    </>
  ),
  description:
    "Ideas should help you make better decisions — not fill a content calendar. Practical intelligence on trade show strategy, performance marketing, B2B video, market research, and pipeline growth. Written for senior marketers who need substance, not noise.",
  image: {
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000",
    alt: "Content and insights hub",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Read the Latest Insights",
  secondaryCtaLabel: "Subscribe for Growth Intelligence",
  stat: {
    value: "120+",
    label: "Articles Published",
    icon: "BookOpen",
  },
};

export const BLOG_LOGOS = [
  { id: "event-strategy" },
  { id: "booth-design" },
  { id: "performance-marketing" },
  { id: "video-production" },
  { id: "market-research" },
  { id: "lead-generation" },
  { id: "case-studies" },
];

export const BLOG_POSTS = {
  eyebrow: "INSIGHTS & INTELLIGENCE",
  heading: (
    <>
      Expert Strategies to Maximize <br />
      <span className="text-brand-primary">Your Global Event Solutions</span>
    </>
  ),
  ctaLabel: "Browse All Articles",
  blogs: [
    {
      id: 1,
      title: "Trade Show ROI — How to Measure Real Return From Your Event Investment",
      category: "Event Strategy",
      date: "Jan 15, 2026",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Trade Show Booth Design — How to Choose the Right Format for Your Goals",
      category: "Booth Design",
      date: "Jan 08, 2026",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "B2B LinkedIn Ads — The Complete Enterprise Guide",
      category: "Performance Marketing",
      date: "Dec 22, 2025",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "MQL vs SQL — Why the Distinction Determines Revenue",
      category: "Lead Generation",
      date: "Dec 10, 2025",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "GITEX 2025 — The Complete Exhibitor Guide for Enterprise B2B Brands",
      category: "Event Strategy",
      date: "Nov 28, 2025",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export const BLOG_CONTACT = {
  eyebrow: "",
  heading: (
    <>
      Subscribe to <br />
      <span className="bg-linear-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Growth Intelligence
      </span>
    </>
  ),
  description:
    "Monthly growth intelligence on event strategy, performance marketing, pipeline generation, and market intelligence — delivered to 4,000+ enterprise marketers.",
  illustration: null,
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    ctaLabel: "Subscribe to Growth Intelligence",
  },
};
