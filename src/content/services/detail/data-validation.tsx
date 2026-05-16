import { GLOBAL_CASE_STUDIES } from "@/content/shared";

export const DATA_VALIDATION_HERO = {
  description:
    "Your outreach is only as good as your data. We provide the human-in-the-loop validation that cleans your CRM, removes the decay, and ensures your sales team never wastes another minute on a 'dead' lead.",
  title: "B2B Data Validation — 100% Accuracy Guaranteed",
};

export { GLOBAL_PROOF_STATS as DATA_VALIDATION_PROOF_BAR } from "../../shared";

export const DATA_VALIDATION_WHY = {
  description:
    "B2B data decays at a rate of 30% per year. People change jobs, companies merge, and email domains expire. If you are running outbound campaigns on year-old data, you are wasting 30% of your budget and damaging your sender reputation. Our validation service is the 'reset button' for your CRM, ensuring every record is accurate, compliant, and ready for high-stakes enterprise outreach.",
  heading: "The ROI of Clean Data",
  reasons: [
    {
      description: "Ensure your emails land in the inbox, not the spam folder.",
      id: "deliverability",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Protected Deliverability",
    },
    {
      description: "Stop sales reps from wasting time on incorrect phone numbers.",
      id: "efficiency",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
      title: "Sales Velocity",
    },
  ],
};

export const DATA_VALIDATION_DELIVERABLES = {
  heading: "Our Validation Services",
  services: [
    {
      color: "bg-brand-blue",
      description:
        "We perform a deep audit of your CRM, removing duplicates, correcting formatting errors, and standardizing job titles across your entire database.",
      icon: "Eraser",
      id: "cleansing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      title: "Comprehensive CRM Cleansing",
    },
    {
      color: "bg-brand-cyan",
      description:
        "We go beyond simple syntax checks, using real-time domain handshakes and SMTP pings to verify inbox existence without ever sending a test email.",
      icon: "MailCheck",
      id: "email",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      title: "Multi-Step Email Verification",
    },
    {
      color: "bg-brand-primary",
      description:
        "Our human researchers discreetly verify office and mobile numbers to ensure your sales team has a direct path to the decision-maker.",
      icon: "Phone",
      id: "phone",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      title: "Direct-Dial and Mobile Verification",
    },
    {
      color: "bg-brand-blue",
      description:
        "We cross-reference every contact against their live LinkedIn profile to ensure job titles and company affiliations are 100% current.",
      icon: "Link",
      id: "social",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1200",
      title: "LinkedIn Profile Synchronization",
    },
  ],
};

export const DATA_VALIDATION_WORKFLOW = {
  headers: ["Stage", "Process"],
  rows: [
    {
      process: "AI-driven check for syntactical errors and known spam traps",
      stage: "Automated Filter",
    },
    {
      process: "Direct server ping to verify email inbox existence",
      stage: "Domain Handshake",
    },
    {
      process: "Manual audit of high-value records by research specialists",
      stage: "Human Verification",
    },
    {
      process: "Seamless re-upload of clean, enriched data into your platform",
      stage: "CRM Injection",
    },
  ],
  title: "Validation Workflow",
};

export const DATA_VALIDATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_VALIDATION_FAQ = {
  faqs: [
    {
      answer:
        "We recommend a full CRM audit every 6 months, or immediately prior to any major new outbound marketing campaign.",
      id: "frequency",
      question: "How often should we validate our data?",
    },
    {
      answer:
        "Yes. Our validation processes are fully passive or use professional verification methods that adhere to all global privacy standards.",
      id: "gdpr",
      question: "Is this process GDPR compliant?",
    },
    {
      answer:
        "We offer a 100% accuracy guarantee. If any record we validate bounces within 30 days, we replace it for free.",
      id: "replacement",
      question: "What if the data is still incorrect?",
    },
  ],
  heading: "Data Validation FAQs",
};

export const DATA_VALIDATION_PAGE = {
  pageId: "service.data-validation",
  pageName: "Data Validation",
  pageType: "serviceDetail",
  seo: {
    canonicalPath: "/services/data-validation",
    description:
      "B2B data validation services — email verification, phone validation, job title confirmation, duplicate detection, and CRM data cleansing. Clean data your sales team can trust.",
    focusKeyphrase: "data validation services",
    secondaryKeywords: [
      "contact data verification",
      "email list validation",
      "CRM data cleansing",
      "data cleansing service",
    ],
    title: "B2B Data Validation and CRM Data Cleansing Services | B2B Sales Arrow",
  },
} as const;
