export const THANK_YOU_HERO = {
  description:
    "Your inquiry has landed safely. Our growth architects will review your message and get back to you within 24 business hours.",
  eyebrow: "MESSAGE RECEIVED",
  image: {
    alt: "Partnership and success",
    loaderAlt: "Loading",
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2000",
  },
  primaryCtaLabel: "Explore Services",
  secondaryCtaLabel: "Read Our Blog",
  showPreloader: false,
  stat: {
    icon: "CheckCircle",
    label: "Response Time",
    value: "< 24h",
  },
  title: (
    <>
      Thank You for <br />
      <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Reaching Out
      </span>
    </>
  ),
} as const;

export const THANK_YOU_SERVICES = {
  ctaLabel: "Learn More",
  eyebrow: "WHILE YOU WAIT",
  heading: (
    <>
      Explore What We <br />
      <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
        Do Best
      </span>
    </>
  ),
  serviceLabel: "Service",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "End-to-end exhibition management across 40+ countries — from booth design to on-floor lead capture.",
      icon: "Globe",
      id: "global-events",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
      title: "Global Event Solutions",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Cinematic brand storytelling and high-fidelity corporate content that builds authority.",
      icon: "MonitorPlay",
      id: "media",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1600",
      title: "Media Production",
    },
    {
      color: "bg-brand-primary",
      description:
        "Data-driven SEO, paid advertising, and LinkedIn campaigns engineered to scale enterprise pipeline.",
      icon: "Rocket",
      id: "performance",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      title: "Performance Marketing",
    },
    {
      color: "bg-brand-blue",
      description:
        "Precision-targeted acquisition strategies for high-value B2B accounts ready to buy.",
      icon: "Users",
      id: "lead-gen",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
      title: "Sales Qualified Lead Generation",
    },
    {
      color: "bg-brand-cyan",
      description:
        "Human-powered intelligence, data augmentation, and validation to fuel confident decisions.",
      icon: "Lightbulb",
      id: "market-research",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
      title: "Market Research",
    },
  ],
};

export const THANK_YOU_BLOGS = {
  blogs: [
    {
      category: "Strategy",
      date: "Oct 12, 2025",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
      title: "The Future of Experiential B2B Marketing",
    },
    {
      category: "Design",
      date: "Sep 28, 2025",
      id: 2,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      title: "Why Standard Trade Show Booths Are Failing",
    },
    {
      category: "Media",
      date: "Sep 15, 2025",
      id: 3,
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800",
      title: "Architecting a High-Converting Media Strategy",
    },
  ],
  ctaLabel: "View All Articles",
  eyebrow: "STAY SHARP",
  heading: (
    <>
      Intelligence to Read <br />
      <span className="text-brand-primary">While You Wait</span>
    </>
  ),
};
