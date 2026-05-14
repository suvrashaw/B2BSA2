export const MEDIA_HERO = {
  showPreloader: false,
  eyebrow: "B2B MEDIA PRODUCTION",
  title: (
    <>
      Corporate Media Production{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        That Builds Market Authority
      </span>
    </>
  ),
  description:
    "We produce high-fidelity corporate video, event coverage, and executive interviews that turn brand visibility into commercial authority. Cinematic execution meets strategic B2B messaging.",
  image: {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000",
    alt: "Professional video production studio",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Request a Media Production Consultation",
  secondaryCtaLabel: "Start Your Media Project",
  stat: {
    value: "500+",
    label: "Videos Produced",
    icon: "Video",
  },
};

export const MEDIA_SERVICES = {
  eyebrow: "OUR CAPABILITIES",
  heading: (
    <>
      High-Impact Outreach &{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Interactive Exhibits
      </span>
    </>
  ),
  serviceLabel: "Service",
  ctaLabel: "Learn More",
  services: [
    {
      id: "event-video",
      title: "Event Video Production",
      description:
        "Live event capture, highlights reels, and post-event content packages that extend your show floor ROI.",
      icon: "Camera",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "corporate-video",
      title: "Corporate Video Production",
      description:
        "Brand films, product explainers, and executive thought leadership videos at broadcast quality.",
      icon: "Clapperboard",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "video-editing",
      title: "Video Editing Services",
      description:
        "Post-production, colour grading, motion graphics, and delivery-ready mastering for all platforms.",
      icon: "MonitorPlay",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "live-streaming",
      title: "Live Streaming Services",
      description:
        "Multi-camera, broadcast-grade live streams for conferences, product launches, and virtual events.",
      icon: "Radio",
      image:
        "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "testimonials",
      title: "Video Testimonials",
      description:
        "Professionally filmed client success stories that convert prospects more effectively than any written review.",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "youtube-ads",
      title: "YouTube Ads for B2B",
      description:
        "Pre-roll, in-stream, and bumper ad campaigns on YouTube engineered specifically for enterprise B2B audiences.",
      icon: "Video",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
  ],
};

export const MEDIA_STATS = {
  heading: (
    <>
      Cinematic Storytelling <br />
      <span className="text-brand-blue">Engineered for B2B Conversion</span>
    </>
  ),
  quote:
    '"We provide cinematic B2B media production for enterprise brands, delivering event video, corporate content, video editing, and live streaming that builds authority through high-fidelity execution across 40+ markets."',
  attribution: "— Media Production Team, B2B Sales Arrow",
  stats: [
    {
      value: "250+",
      label: "Videos Produced",
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

export const MEDIA_WHY = {
  eyebrow: "THE POWER OF QUALITY",
  heading: (
    <>
      Why Enterprise Brands Can&apos;t <br />
      <span className="text-brand-cyan">Afford Low-Quality Content</span>
    </>
  ),
  reasons: [
    {
      id: "b2b-first",
      title: "Built for B2B Audiences",
      description:
        "We understand enterprise buying committees, long sales cycles, and the specific trust signals that B2B buyers respond to. Our content is engineered for this.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "broadcast-quality",
      title: "Broadcast-Grade Production",
      description:
        "Cinema-quality cameras, professional lighting rigs, and Dolby-certified audio for every project — regardless of scope.",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "strategy",
      title: "Content Strategy Included",
      description:
        "We don't just point and shoot. Every production begins with a content strategy session to ensure the video serves a specific pipeline objective.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "fast-turnaround",
      title: "Fast, Reliable Delivery",
      description:
        "We deliver on time, every time. Our production pipeline ensures 4–6 week turnaround from brief to delivery-ready master files.",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const MEDIA_CASE_STUDIES = {
  eyebrow: "MEDIA RESULTS",
  heading: (
    <>
      Global Reach <span className="text-brand-blue">Local Execution</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Media Work",
  items: [
    {
      id: "finserve",
      client: "FinServe SaaS",
      title: "Scaling Pipeline Through Precision Media",
      challenge: "High customer acquisition cost across generic digital channels.",
      solution: "Targeted video thought-leadership campaign with executive interviews.",
      metric: "4.2x",
      metricLabel: "ROI in 6 Months",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "saas-launch",
      client: "Vortex Labs",
      title: "Product Launch Video That Drove 2,000 Trial Signups",
      challenge: "New B2B SaaS product needed rapid market awareness in a crowded space.",
      solution:
        "60-second hero video + 3 feature explainers distributed across LinkedIn and YouTube.",
      metric: "2,000",
      metricLabel: "Trial Signups in Week 1",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const MEDIA_TESTIMONIALS = {
  eyebrow: "CLIENT SUCCESS",
  heading: (
    <>
      Brands That Shared <span className="text-[#1E6091]">Their Stories</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "Michael Chen",
      designation: "VP of Global Sales",
      company: "Aura Systems",
      rating: 5,
      quote:
        "The strategic media production and targeted campaigns deployed by the team were instrumental in helping us penetrate the European market 6 months ahead of schedule.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      designation: "Director of Brand Activation",
      company: "Vortex Labs",
      rating: 5,
      quote:
        "Unlike typical video agencies, they understand the deep nuances of enterprise B2B sales cycles. Every video they produced was highly conversion-focused.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "David Alaba",
      designation: "Head of Growth",
      company: "Synapse Networks",
      rating: 5,
      quote:
        "Their cinematic approach to corporate video transformed how our prospects perceive us. The view-through rates on our LinkedIn campaigns tripled after their first production.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const MEDIA_BLOGS = {
  eyebrow: "MEDIA INSIGHTS",
  heading: (
    <>
      Corporate Media <span className="text-brand-primary">Insights</span>
    </>
  ),
  ctaLabel: "View All Media Articles",
  blogs: [
    {
      id: 1,
      title: "Architecting a High-Converting B2B Video Strategy",
      category: "Media",
      date: "Sep 15, 2025",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Why Live Streaming is the New Trade Show Floor",
      category: "Events",
      date: "Aug 28, 2025",
      image:
        "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "The B2B Video Formats That Actually Drive Pipeline",
      category: "Strategy",
      date: "Aug 10, 2025",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export const MEDIA_FAQ = {
  eyebrow: "MEDIA PRODUCTION FAQ",
  heading: (
    <>
      Frequently Asked{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our media production services.",
  scrollAmount: 340,
  faqs: [
    {
      id: "timeline",
      question: "What is your production turnaround time?",
      answer:
        "Standard corporate video projects deliver in 4–6 weeks from brief to final delivery. Expedited 2-week production is available at a premium. Event coverage is delivered within 5 business days.",
    },
    {
      id: "location",
      question: "Do you film internationally?",
      answer:
        "Yes. Our production crews operate globally. We have partners in 40+ countries and regularly film at events, corporate offices, and studios across EMEA, APAC, and the Americas.",
    },
    {
      id: "formats",
      question: "What formats do you deliver?",
      answer:
        "We deliver in all standard formats: H.264/H.265 for web, ProRes for broadcast, and platform-optimised versions for LinkedIn, YouTube, and your website.",
    },
    {
      id: "scripting",
      question: "Do you handle scripting and storyboarding?",
      answer:
        "Yes. Every production includes pre-production services: creative brief, script or shot list development, and storyboard review before a single camera rolls.",
    },
    {
      id: "revisions",
      question: "How many revisions are included?",
      answer:
        "Standard projects include 2 rounds of edit revisions. Our revision process is structured and efficient — most clients don't need more than one round.",
    },
  ],
};

export const MEDIA_CONTACT = {
  eyebrow: "START YOUR PROJECT",
  heading: (
    <>
      Let&apos;s Produce <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Something Exceptional
      </span>
    </>
  ),
  description:
    "Tell us about your video production needs and we'll scope a production that drives real B2B results.",
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
    serviceLabel: "Production Type",
    servicePlaceholder: "Select a service...",
    serviceOptions: [
      { value: "event-video", label: "Event Video Production" },
      { value: "corporate-video", label: "Corporate Video" },
      { value: "video-editing", label: "Video Editing" },
      { value: "live-streaming", label: "Live Streaming" },
      { value: "testimonials", label: "Video Testimonials" },
      { value: "youtube-ads", label: "YouTube Ads" },
    ],
    messageLabel: "Tell Us About Your Project",
    messagePlaceholder: "What video content do you need and what outcome are you targeting?",
    ctaLabel: "Get Production Quote",
  },
};
