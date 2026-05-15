import { GLOBAL_CASE_STUDIES } from "../shared";

export const MEDIA_HERO = {
  title: "B2B Media Production — Enterprise Authority, Filmed",
  description:
    "Before a buyer books a meeting, they judge your brand by what they see. Our video production company creates the high-fidelity content that earns trust and shortens your sales cycle.",
};

export { GLOBAL_PROOF_STATS as MEDIA_PROOF_BAR } from "../shared";

export const MEDIA_SERVICES = {
  heading: "Our Media Production Services",
  description:
    "In the enterprise B2B space, video is the most powerful tool for building trust at scale. We produce everything from cinematic brand films to rapid-response event recaps, ensuring your brand story is told with the premium quality it deserves. Our production process is built for speed and reliability, delivering broadcast-grade assets that work across your entire sales and marketing funnel.",
  services: [
    {
      id: "event-video",
      title: "Event Video Production",
      description:
        "Don't let your event ROI end when the booth is packed. We create cinematic event recaps, speaker highlights, and visitor testimonials that extend your brand's presence indefinitely.",
      icon: "Camera",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
      href: "/services/media-production/event-video-production",
    },
    {
      id: "corporate-video",
      title: "Corporate Video Production",
      description:
        "From brand anthems to product explainers, we produce high-fidelity corporate videos that humanize your brand and position your executives as industry leaders.",
      icon: "Clapperboard",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
      href: "/services/media-production/corporate-video-production",
    },
    {
      id: "video-editing",
      title: "Video Editing Services",
      description:
        "Turn your raw footage into polished, professional assets. Our editing team handles everything from color grading and motion graphics to multi-format exports for all platforms.",
      icon: "MonitorPlay",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
      href: "/services/media-production/video-editing-services",
    },
    {
      id: "live-streaming",
      title: "Live Streaming Services",
      description:
        "Professional multi-camera live streaming for your corporate events and webinars, ensuring your global audience experiences your brand with zero latency and broadcast quality.",
      icon: "Radio",
      image:
        "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
      href: "/services/media-production/live-streaming-services",
    },
  ],
};

export const MEDIA_WHY = {
  heading: "Why Premium Production is a Sales Requirement",
  description:
    "Low-quality video signals a low-quality brand. In a world of amateur content, broadcast-grade production is a powerful differentiator. We don't just provide 'video services'; we provide the visual authority that justifies your enterprise price point and makes your sales team's job easier. Every frame we shoot is designed to build trust and move your prospect one step closer to a 'yes.'",
  reasons: [
    {
      id: "authority",
      title: "Visual Authority",
      description:
        "Cinematic quality that reflects the premium nature of your enterprise solutions.",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "efficiency",
      title: "Storytelling Efficiency",
      description: "Explain complex value propositions in minutes, not pages of whitepapers.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const MEDIA_PROCESS = {
  heading: "Our Media Production Process",
  phases: [
    {
      title: "Creative Brief and Strategy",
      description:
        "Defining the core message, audience, and commercial objectives for the content.",
    },
    {
      title: "Pre-Production and Planning",
      description: "Scripting, storyboarding, location scouting, and talent coordination.",
    },
    {
      title: "Production (The Shoot)",
      description: "Broadcast-grade filming using cinema-quality equipment and professional crews.",
    },
    {
      title: "Post-Production and Editing",
      description: "Polishing the footage with color grading, sound design, and motion graphics.",
    },
    {
      title: "Delivery and Multi-Platform Export",
      description: "Providing master files optimized for web, social, and broadcast environments.",
    },
  ],
};

export const MEDIA_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const MEDIA_FAQ = {
  heading: "Media Production FAQs",
  faqs: [
    {
      id: "turnaround",
      question: "What is your typical turnaround time?",
      answer:
        "Standard corporate videos deliver in 4–6 weeks. Event recap videos can be delivered in as little as 48 hours for immediate social impact.",
    },
    {
      id: "locations",
      question: "Do you film in multiple locations?",
      answer:
        "Yes. Our production network is global. We can coordinate simultaneous shoots in multiple cities to ensure brand consistency for global organizations.",
    },
    {
      id: "ownership",
      question: "Do we own the raw footage?",
      answer:
        "Absolutely. Once the project is complete and paid, you own all the final assets and can request the raw files for future use.",
    },
  ],
};
