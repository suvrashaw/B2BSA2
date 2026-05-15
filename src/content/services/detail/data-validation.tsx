import { GLOBAL_CASE_STUDIES } from "../../shared";

export const DATA_VALIDATION_HERO = {
  title: "B2B Data Validation — 100% Accuracy Guaranteed",
  description:
    "Your outreach is only as good as your data. We provide the human-in-the-loop validation that cleans your CRM, removes the decay, and ensures your sales team never wastes another minute on a 'dead' lead.",
};

export { GLOBAL_PROOF_STATS as DATA_VALIDATION_PROOF_BAR } from "../../shared";

export const DATA_VALIDATION_WHY = {
  heading: "The ROI of Clean Data",
  description:
    "B2B data decays at a rate of 30% per year. People change jobs, companies merge, and email domains expire. If you are running outbound campaigns on year-old data, you are wasting 30% of your budget and damaging your sender reputation. Our validation service is the 'reset button' for your CRM, ensuring every record is accurate, compliant, and ready for high-stakes enterprise outreach.",
  reasons: [
    {
      id: "deliverability",
      title: "Protected Deliverability",
      description: "Ensure your emails land in the inbox, not the spam folder.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "efficiency",
      title: "Sales Velocity",
      description: "Stop sales reps from wasting time on incorrect phone numbers.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const DATA_VALIDATION_DELIVERABLES = {
  heading: "Our Validation Services",
  services: [
    {
      id: "cleansing",
      title: "Comprehensive CRM Cleansing",
      description:
        "We perform a deep audit of your CRM, removing duplicates, correcting formatting errors, and standardizing job titles across your entire database.",
      icon: "Eraser",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "email",
      title: "Multi-Step Email Verification",
      description:
        "We go beyond simple syntax checks, using real-time domain handshakes and SMTP pings to verify inbox existence without ever sending a test email.",
      icon: "MailCheck",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "phone",
      title: "Direct-Dial and Mobile Verification",
      description:
        "Our human researchers discreetly verify office and mobile numbers to ensure your sales team has a direct path to the decision-maker.",
      icon: "Phone",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "social",
      title: "LinkedIn Profile Synchronization",
      description:
        "We cross-reference every contact against their live LinkedIn profile to ensure job titles and company affiliations are 100% current.",
      icon: "Link",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
  ],
};

export const DATA_VALIDATION_WORKFLOW = {
  title: "Validation Workflow",
  headers: ["Stage", "Process"],
  rows: [
    {
      stage: "Automated Filter",
      process: "AI-driven check for syntactical errors and known spam traps",
    },
    {
      stage: "Domain Handshake",
      process: "Direct server ping to verify email inbox existence",
    },
    {
      stage: "Human Verification",
      process: "Manual audit of high-value records by research specialists",
    },
    {
      stage: "CRM Injection",
      process: "Seamless re-upload of clean, enriched data into your platform",
    },
  ],
};

export const DATA_VALIDATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_VALIDATION_FAQ = {
  heading: "Data Validation FAQs",
  faqs: [
    {
      id: "frequency",
      question: "How often should we validate our data?",
      answer:
        "We recommend a full CRM audit every 6 months, or immediately prior to any major new outbound marketing campaign.",
    },
    {
      id: "gdpr",
      question: "Is this process GDPR compliant?",
      answer:
        "Yes. Our validation processes are fully passive or use professional verification methods that adhere to all global privacy standards.",
    },
    {
      id: "replacement",
      question: "What if the data is still incorrect?",
      answer:
        "We offer a 100% accuracy guarantee. If any record we validate bounces within 30 days, we replace it for free.",
    },
  ],
};
