import { GLOBAL_CASE_STUDIES } from "../../shared";

export const EVENT_VIDEO_HERO = {
  title: "Event Video Production — High-Fidelity Recaps, Real-Time Impact",
  description:
    "Don't let your event ROI end when the booth is packed. We provide the cinema-quality event video that captures the energy, the expert insights, and the visitor testimonials that keep your brand in front of buyers long after the show.",
};

export { GLOBAL_PROOF_STATS as EVENT_VIDEO_PROOF_BAR } from "../../shared";

export const EVENT_VIDEO_WHY = {
  heading: "Extend the Life of Your Live Event",
  description:
    "A three-day exhibition is a massive investment. If you aren't capturing high-fidelity content during the show, you are losing 80% of the potential ROI. Our event production teams don't just 'film the booth'; we document the strategic conversations, capture spontaneous customer praise, and record the executive thought leadership that positions your brand as a market leader. This content provides your sales team with 12 months of high-impact follow-up material.",
  reasons: [
    {
      id: "longevity",
      title: "Content Longevity",
      description: "Turn a single 3-day event into a year-long marketing campaign.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "authority",
      title: "Brand Authority",
      description: "High-quality production values signal an enterprise-grade brand.",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const EVENT_VIDEO_DELIVERABLES = {
  heading: "Our Event Video Services",
  services: [
    {
      id: "highlights",
      title: "Cinematic Event Highlights",
      description:
        "We produce high-energy, 4K highlight films that capture the scale and impact of your event presence, perfect for social media and stakeholder reporting.",
      icon: "Film",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "testimonials",
      title: "On-Site Customer Testimonials",
      description:
        "We capture authentic, unscripted testimonials from your most important clients while they are at your booth, providing powerful social proof for your sales team.",
      icon: "MessageSquare",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "interviews",
      title: "Executive Thought Leadership",
      description:
        "Professional, multi-camera interviews with your C-suite and product experts, turning your booth into a broadcast studio for industry insights.",
      icon: "User",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "recap",
      title: "Rapid Social Recaps",
      description:
        "We deliver short, punchy social clips within 24 hours of each event day, allowing you to build momentum and drive traffic while the show is still live.",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const EVENT_VIDEO_TIERS = {
  title: "Production Delivery Tiers",
  headers: ["Service Level", "Delivery Timeline", "Deliverables"],
  rows: [
    {
      "service level": "Rapid Social",
      "delivery timeline": "24 Hours",
      deliverables: "60s highlight reel and raw social clips",
    },
    {
      "service level": "Standard Edit",
      "delivery timeline": "5 Business Days",
      deliverables: "Master highlight film and interview cuts",
    },
    {
      "service level": "Premium Feature",
      "delivery timeline": "10 Business Days",
      deliverables: "Cinematic brand film with motion graphics and sound design",
    },
  ],
};

export const EVENT_VIDEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_VIDEO_FAQ = {
  heading: "Event Video FAQs",
  faqs: [
    {
      id: "setup",
      question: "How much space do you need in the booth?",
      answer:
        "We are used to working in tight exhibition environments. Our 'mobile studio' setup is designed to be unobtrusive and highly efficient.",
    },
    {
      id: "international",
      question: "Do you have local crews globally?",
      answer:
        "Yes. We coordinate production across GITEX, CES, MWC, and all major global events using local and traveling crews for consistent quality.",
    },
    {
      id: "licensing",
      question: "Is music licensing included?",
      answer:
        "Yes. All our final edits include fully licensed music for web, social, and corporate presentation use.",
    },
  ],
};
