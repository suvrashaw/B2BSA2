import { GLOBAL_CASE_STUDIES } from "../../shared";

export const VIDEO_EDITING_HERO = {
  title: "Professional Video Editing Services That Transform Raw Footage Into Revenue Assets",
  description:
    "Raw footage has potential. Edited footage has a job. We turn your event recordings, demos, and brand content into polished video editing deliverables ready for every channel your team uses.",
};

export { GLOBAL_PROOF_STATS as VIDEO_EDITING_PROOF_BAR } from "../../shared";

export const VIDEO_EDITING_WHY = {
  heading: "The Edit is Where the Story Happens",
  description:
    "Great footage without great editing is invisible. The edit is where pacing, emotion, and commercial intent are built into the final asset. Our post-production team works from a clear brief — what should the viewer feel, understand, and do after watching — and structures every cut around that outcome.",
  reasons: [
    {
      id: "story",
      title: "Story-Led Editing",
      description:
        "We select the strongest material, structure the narrative, and shape a complete video with clear intent and pacing.",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "quality",
      title: "Enterprise Production Quality",
      description:
        "Professional colour grading, sound design, and motion graphics — production values that match your enterprise brand positioning.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const VIDEO_EDITING_DELIVERABLES = {
  heading: "Our Post-Production Services",
  services: [
    {
      id: "edit",
      title: "Full Edit and Assembly",
      description:
        "Selecting the strongest material, structuring the narrative, and shaping a complete video with clear intent and pacing.",
      icon: "Scissors",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "colour",
      title: "Colour Correction and Grading",
      description:
        "Technical consistency plus professional colour grading for a polished, premium visual look.",
      icon: "Palette",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "motion",
      title: "Motion Graphics and Title Design",
      description: "Branded titles, lower thirds, animated text, and data callouts.",
      icon: "Sparkles",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "subtitles",
      title: "Subtitles and Captions",
      description:
        "Accurate subtitles improving accessibility, LinkedIn performance, and viewer retention.",
      icon: "Type",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "social",
      title: "Social Cut-Downs and Format Adaptation",
      description:
        "15s, 30s, 60s, vertical, square, and widescreen versions for LinkedIn, YouTube, Instagram, paid campaigns, and sales outreach.",
      icon: "Share2",
      image:
        "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "sound",
      title: "Sound Design and Music",
      description: "Audio clean-up, voice balancing, licensed music, and sound effects.",
      icon: "Music",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
  ],
};

export const VIDEO_EDITING_TURNAROUND = {
  title: "Typical Turnaround Times",
  headers: ["Deliverable", "Typical Turnaround"],
  rows: [
    {
      deliverable: "Single video edit (under 5 min)",
      "typical turnaround": "3–5 business days",
    },
    {
      deliverable: "Event highlight reel",
      "typical turnaround": "5–8 business days",
    },
    {
      deliverable: "Multi-video package (5+ videos)",
      "typical turnaround": "10–15 business days",
    },
    {
      deliverable: "Ongoing high-volume program",
      "typical turnaround": "Custom workflow + weekly delivery capacity agreed upfront",
    },
  ],
};

export const VIDEO_EDITING_TIMELINE = VIDEO_EDITING_TURNAROUND;

export const VIDEO_EDITING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const VIDEO_EDITING_FAQ = {
  heading: "Video Editing FAQs",
  faqs: [
    {
      id: "external-footage",
      question: "Can you edit footage shot by someone else?",
      answer:
        "Yes — we edit footage from any source. We advise honestly on what quality output is achievable from the material provided.",
    },
    {
      id: "formats",
      question: "What file formats do you accept?",
      answer:
        "MP4, MOV, MXF, ProRes, AVCHD, and most camera raw formats. Secure transfer links provided for large uploads.",
    },
    {
      id: "feedback",
      question: "How do we give feedback?",
      answer:
        "Frame-accurate review platform — you comment directly on the video at specific timecodes. Standard projects include two revision rounds.",
    },
  ],
};
