
export const THANK_YOU_HERO = {
  showPreloader: false,
  eyebrow: "MESSAGE RECEIVED",
  title: (
    <>
      Thank You for <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
        Reaching Out
      </span>
    </>
  ),
  description:
    "Your inquiry has landed safely. Our growth architects will review your message and get back to you within 24 business hours.",
  image: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2000",
    alt: "Partnership and success",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Explore Services",
  secondaryCtaLabel: "Read Our Blog",
  stat: {
    value: "< 24h",
    label: "Response Time",
    icon: "CheckCircle",
  },
} as const;

export const THANK_YOU_SERVICES = {
  eyebrow: "WHILE YOU WAIT",
  heading: (
    <>
      Explore What We <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
        Do Best
      </span>
    </>
  ),
  serviceLabel: "Service",
  ctaLabel: "Learn More",
  services: [
    {
      id: "global-events",
      title: "Global Event Solutions",
      description:
        "End-to-end exhibition management across 40+ countries — from booth design to on-floor lead capture.",
      icon: "Globe",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
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
      id: "performance",
      title: "Performance Marketing",
      description:
        "Data-driven SEO, paid advertising, and LinkedIn campaigns engineered to scale enterprise pipeline.",
      icon: "Rocket",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-red",
    },
    {
      id: "lead-gen",
      title: "Sales Qualified Lead Generation",
      description:
        "Precision-targeted acquisition strategies for high-value B2B accounts ready to buy.",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "market-research",
      title: "Market Research",
      description:
        "Human-powered intelligence, data augmentation, and validation to fuel confident decisions.",
      icon: "Lightbulb",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
  ],
};

export const THANK_YOU_BLOGS = {
  eyebrow: "STAY SHARP",
  heading: (
    <>
      Intelligence to Read <br />
      <span className="text-brand-red">While You Wait</span>
    </>
  ),
  ctaLabel: "View All Articles",
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
