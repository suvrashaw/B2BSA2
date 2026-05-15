import { GLOBAL_CASE_STUDIES } from "../../shared";

export const LIVE_STREAMING_HERO = {
  title: "Live Streaming Services — Global Reach, Zero Latency",
  description:
    "The world is your venue. We provide the professional multi-camera live streaming that brings your global audience into the room, ensuring broadcast-quality delivery for your conferences, launches, and hybrid events.",
};

export { GLOBAL_PROOF_STATS as LIVE_STREAMING_PROOF_BAR } from "../../shared";

export const LIVE_STREAMING_WHY = {
  heading: "The Power of Real-Time Connection",
  description:
    "In a global economy, your most important audience isn't always in the room. Live streaming bridges the gap between physical and digital, allowing you to reach thousands of prospects simultaneously. However, a technical failure during a live broadcast is a brand disaster. We specialize in zero-fail, multi-camera streaming that handles every technical variable — from bandwidth bonding to remote guest integration — so you can focus on your message while we handle the broadcast.",
  reasons: [
    {
      id: "reach",
      title: "Global Scalability",
      description: "Reach your entire global market without the cost of a multi-city tour.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "engagement",
      title: "Active Engagement",
      description: "Interactive tools that turn passive viewers into active, qualified leads.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const LIVE_STREAMING_DELIVERABLES = {
  heading: "Our Live Streaming Services",
  services: [
    {
      id: "production",
      title: "Multi-Camera Live Production",
      description:
        "We provide cinema-grade cameras, professional lighting, and broadcast switching to ensure your live stream looks like a high-end television production.",
      icon: "Camera",
      image:
        "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "hybrid",
      title: "Hybrid Event Management",
      description:
        "We seamlessly integrate on-site speakers with remote presenters and global audiences, creating a unified experience regardless of location.",
      icon: "Globe2",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "platform",
      title: "Secure Branded Platforms",
      description:
        "Stream to LinkedIn, YouTube, or your own secure, branded event portal with custom registration, analytics, and gated access for lead qualification.",
      icon: "Radio",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "backup",
      title: "Zero-Fail Technical Support",
      description:
        "We use bonded cellular internet and redundant hardware encoders to ensure your broadcast never drops, even in challenging venue environments.",
      icon: "ShieldCheck",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const LIVE_STREAMING_CAPABILITIES = {
  title: "Streaming Capabilities",
  headers: ["Feature", "Capability"],
  rows: [
    {
      feature: "Resolution",
      capability: "4K UHD Broadcast Quality",
    },
    {
      feature: "Latency",
      capability: "Under 3 Seconds (Global)",
    },
    {
      feature: "Capacity",
      capability: "Up to 50,000 Concurrent Viewers",
    },
    {
      feature: "Security",
      capability: "AES-128 Encryption & Gated Access",
    },
  ],
};

export const LIVE_STREAMING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const LIVE_STREAMING_FAQ = {
  heading: "Live Streaming FAQs",
  faqs: [
    {
      id: "bandwidth",
      question: "What if the venue internet is bad?",
      answer:
        "We provide our own 'bonded' internet systems that combine multiple cellular networks to create a high-speed, secure connection anywhere.",
    },
    {
      id: "platforms-simulcast",
      question: "Can we stream to multiple places at once?",
      answer:
        "Yes. We can simultaneously broadcast to LinkedIn, YouTube, and your internal company portal to maximize your reach.",
    },
    {
      id: "interaction-qa",
      question: "How do we handle audience questions?",
      answer:
        "We provide moderated Q&A tools that allow your presenters to see and respond to the best audience questions in real-time.",
    },
  ],
};
