import { GLOBAL_CASE_STUDIES } from "../../shared";

export const BOOTH_BUILDER_HERO = {
  title: "Booth Production and Fabrication — From Render to Reality",
  description:
    "We bridge the gap between design and delivery. Our global fabrication network ensures that what you approved in a 3D render is exactly what stands on the show floor — built to the highest engineering standards, on time, and on budget.",
};

export { GLOBAL_PROOF_STATS as BOOTH_BUILDER_PROOF_BAR } from "../../shared";

export const BOOTH_BUILDER_WHY = {
  heading: "Why Build Quality Determines Your Event ROI",
  description:
    "A booth that looks good in a render but poor in reality damages your brand credibility. Poor finishes, visible seams, or technical failures at the moment of engagement are unacceptable at the enterprise level. We treat exhibition fabrication as high-performance temporary architecture. By using premium materials and expert builders who understand the stresses of a busy event floor, we ensure your presence feels as premium as your product.",
  reasons: [
    {
      id: "precision",
      title: "Precision Engineering",
      description: "Our builds match your 3D renders with millimetre accuracy.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "reliability",
      title: "On-Time Reliability",
      description: "Zero-error delivery. Your booth is show-ready 24 hours before the doors open.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const BOOTH_BUILDER_DELIVERABLES = {
  heading: "Our Booth Production Services",
  services: [
    {
      id: "fabrication",
      title: "Custom Timber and Metal Fabrication",
      description:
        "Master carpentry and metalwork for bespoke structures, custom furniture, and architectural focal points — built to last for multiple event cycles.",
      icon: "Hammer",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "av",
      title: "Technical and AV Integration",
      description:
        "Seamless integration of LED walls, interactive displays, and hidden cabling — managed by specialist technical teams to ensure 100% uptime.",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "finishing",
      title: "Premium Surface Finishing",
      description:
        "High-grade laminates, custom paint finishes, and tension-fabric graphics that provide a seamless, high-end look without visible seams or joints.",
      icon: "Brush",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "installation",
      title: "Supervised Installation and Dismantle (I&D)",
      description:
        "Full on-site management of the build-up and break-down phase, including all labor management and venue liaison.",
      icon: "ShieldCheck",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const BOOTH_BUILDER_STANDARDS = {
  title: "Our Fabrication Standards",
  headers: ["Standard", "Benefit"],
  rows: [
    {
      standard: "Structural Safety",
      benefit: "Certified engineering for all overhead and double-deck structures",
    },
    {
      standard: "Material Sustainability",
      benefit: "Priority use of recyclable and low-VOC materials",
    },
    {
      standard: "Fire Compliance",
      benefit: "All materials certified to local venue fire-safety regulations",
    },
    {
      standard: "Pre-Build Validation",
      benefit: "Major custom components pre-assembled in workshop to ensure zero site errors",
    },
  ],
};

export const BOOTH_BUILDER_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_BUILDER_FAQ = {
  heading: "Booth Production FAQs",
  faqs: [
    {
      id: "timeline",
      question: "When should fabrication begin?",
      answer:
        "We recommend finalized designs move into fabrication 8–12 weeks before the event to ensure material availability and quality control.",
    },
    {
      id: "storage",
      question: "Do you store the booth after the show?",
      answer:
        "Yes. We offer regional storage in Dubai, Las Vegas, and London, along with refurbishment services for multi-event use.",
    },
    {
      id: "global",
      question: "Do you build everything in-house?",
      answer:
        "We use a combination of our own workshop facilities and a vetted network of specialist fabrication partners globally to minimize shipping and ensure local compliance.",
    },
  ],
};
