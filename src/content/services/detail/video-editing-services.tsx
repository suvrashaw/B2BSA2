import { GLOBAL_CASE_STUDIES } from "../../shared";

export const VIDEO_EDITING_HERO = {
  title: "Video Editing Services — Polished, Professional, Pipelined",
  description:
    "Raw footage is just the beginning. We provide the expert video editing services that transform your raw files into high-fidelity assets, using cinematic pacing, motion graphics, and sound design to build brand authority.",
};

export { GLOBAL_PROOF_STATS as VIDEO_EDITING_PROOF_BAR } from "../../shared";

export const VIDEO_EDITING_WHY = {
  heading: "The Edit is Where the Story Happens",
  description:
    "In the enterprise world, attention is the scarcest resource. A poorly edited video loses your prospect in the first ten seconds. Our editing team doesn't just 'cut clips'; we engineer attention. We understand the pacing required for B2B audiences, the importance of clear data visualization, and the specific sound design that signals professional quality. We transform your raw content into a high-fidelity sales tool that keeps viewers engaged until the final CTA.",
  reasons: [
    {
      id: "authority",
      title: "Commercial Authority",
      description:
        "Professional color grading and sound design that separates you from the competition.",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "retention",
      title: "Viewer Retention",
      description: "Cinematic pacing that keeps busy executives engaged with your message.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const VIDEO_EDITING_DELIVERABLES = {
  heading: "Our Video Editing Services",
  services: [
    {
      id: "storytelling",
      title: "Narrative and Cinematic Editing",
      description:
        "We assemble your footage into a compelling brand story, focusing on narrative flow, rhythm, and emotional resonance to keep your audience hooked.",
      icon: "Scissors",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "motion",
      title: "Motion Graphics and VFX",
      description:
        "We enhance your videos with custom typography, data visualization, and 2D/3D elements that make complex information easy to digest and visually stunning.",
      icon: "Activity",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "audio",
      title: "Sound Design and Audio Mastering",
      description:
        "We provide professional audio cleaning, sound effects, and music mastering to ensure your video sounds as premium as it looks on every device.",
      icon: "Volume2",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "color",
      title: "Professional Color Grading",
      description:
        "We give your footage a cinematic, high-fidelity look, ensuring color consistency and brand-aligned aesthetics across all your video assets.",
      icon: "Palette",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const VIDEO_EDITING_TIMELINE = {
  title: "Editing Project Timeline",
  headers: ["Phase", "Duration", "Deliverable"],
  rows: [
    {
      phase: "First Cut",
      duration: "3 Business Days",
      deliverable: "Narrative assembly and initial pacing",
    },
    {
      phase: "Polished Edit",
      duration: "5 Business Days",
      deliverable: "Sound design, color grading, and graphics",
    },
    {
      phase: "Final Master",
      duration: "7 Business Days",
      deliverable: "Final files optimized for all platforms",
    },
  ],
};

export const VIDEO_EDITING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const VIDEO_EDITING_FAQ = {
  heading: "Video Editing FAQs",
  faqs: [
    {
      id: "footage-source",
      question: "Can you edit footage we shot ourselves?",
      answer:
        "Yes. We work with raw footage from any source, including smartphone recordings, Zoom interviews, and internal event coverage.",
    },
    {
      id: "revisions",
      question: "How many rounds of revisions are included?",
      answer:
        "Every project includes two full rounds of revisions to ensure the final product perfectly aligns with your brand vision.",
    },
    {
      id: "turnaround-urgent",
      question: "Do you offer 'next-day' editing?",
      answer:
        "Yes. For event recaps and urgent social clips, we have a dedicated rapid-response team that can deliver within 24 hours.",
    },
  ],
};
