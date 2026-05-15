import { GLOBAL_CASE_STUDIES } from "../../shared";

export const ELG_HERO = {
  title: "Event Lead Generation — Qualified Pipeline From the Event Floor",
  description:
    "Stop settling for badge scans that go nowhere. Our event lead generation programs combine active prospecting with BANT qualification and real-time CRM handoff — so your sales team gets meetings, not just data.",
};

export { GLOBAL_PROOF_STATS as ELG_PROOF_BAR } from "../../shared";

export const ELG_WHY = {
  heading: "Why Badge Scans Are Not Leads",
  description:
    "A badge scan is a record of attendance, not an expression of intent. Most event data dies in a spreadsheet because it lacks the context a sales team needs to follow up effectively. We solve the 'lead decay' problem by qualifying every visitor against your Ideal Customer Profile (ICP) in real-time. By the time the show floor closes, your sales team isn't looking at a list of names — they are looking at a pipeline of qualified opportunities.",
  reasons: [
    {
      id: "intent",
      title: "Real-Time Intent",
      description: "We capture the context of the conversation, not just the contact details.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "qualification",
      title: "BANT Qualification",
      description: "Budget, Authority, Need, and Timeline confirmed on the spot.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const ELG_DELIVERABLES = {
  heading: "Our Event Lead Generation Services",
  services: [
    {
      id: "prospecting",
      title: "Active Prospecting and Traffic Driving",
      description:
        "Our specialists don't wait for people to walk into your booth. We actively engage high-value prospects on the event floor and move them into your engagement zone.",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "qualification",
      title: "Qualification Framework Design (BANT/CHAMP)",
      description:
        "We work with your sales leadership to define exactly what a 'qualified lead' looks like, then build custom capture scripts to ensure every lead meets that standard.",
      icon: "Filter",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "sync",
      title: "Real-Time CRM Sync and Lead Routing",
      description:
        "Leads are pushed to Salesforce, HubSpot, or Dynamics within minutes of the conversation, assigned to the right territory owner with full qualification notes.",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
    {
      id: "capture",
      title: "Digital Lead Capture Technology",
      description:
        "High-speed NFC and QR-based capture hardware and software that eliminates manual data entry and reduces friction for the visitor.",
      icon: "Scan",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-blue",
    },
    {
      id: "follow-up",
      title: "Post-Event Follow-Up Automation",
      description:
        "Immediate personalized email sequences triggered the moment a lead is captured, keeping the conversation warm while your team is still on-site.",
      icon: "Mail",
      image:
        "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-cyan",
    },
    {
      id: "reporting",
      title: "Lead Intelligence and Attribution Reporting",
      description:
        "Full audit of lead quality, cost per qualified lead, and predicted pipeline value delivered within 48 hours of event close.",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1460925833468-af0464ee2d58?auto=format&fit=crop&q=80&w=1200",
      color: "bg-brand-primary",
    },
  ],
};

export const ELG_PRICING = {
  title: "Event Lead Generation Service Tiers",
  headers: ["Service Tier", "Focus"],
  rows: [
    {
      "service tier": "Core Lead Capture Program",
      focus: "Hardware, app, and qualification workflow setup",
    },
    {
      "service tier": "Active Prospecting Program",
      focus: "On-floor specialists driving traffic and qualifying in real-time",
    },
    {
      "service tier": "Full Pipeline Program",
      focus: "Pre-event outreach + on-floor capture + post-event follow-up",
    },
  ],
};

export const ELG_PROCESS = {
  heading: "Our Event Lead Generation Process",
  phases: [
    {
      title: "Strategic Alignment",
      description: "Defining ICP, qualification criteria, and CRM routing rules.",
    },
    {
      title: "Workflow Design",
      description: "Building the digital capture script and follow-up triggers.",
    },
    {
      title: "Specialist Briefing",
      description: "Training the on-floor team on your product and buyer objections.",
    },
    {
      title: "Live Execution",
      description: "Active prospecting, qualification, and real-time CRM sync.",
    },
    {
      title: "Intelligence Handoff",
      description: "Final lead audit, reporting, and attribution review.",
    },
  ],
};

export const ELG_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const ELG_FAQ = {
  heading: "Event Lead Generation FAQs",
  faqs: [
    {
      id: "sql",
      question: "What is an SQL in an event context?",
      answer:
        "A Sales Qualified Lead (SQL) from an event is a prospect who has been verified by a lead specialist to meet your ICP criteria and has a confirmed business need and purchase timeline.",
    },
    {
      id: "crm",
      question: "How quickly do leads enter our CRM?",
      answer:
        "Typically within 5–10 minutes of the conversation on the event floor, including all qualification notes.",
    },
    {
      id: "staffing",
      question: "Do you provide the people to capture the leads?",
      answer:
        "Yes. We provide trained B2B lead generation specialists who understand enterprise sales and can qualify senior decision-makers.",
    },
    {
      id: "framework",
      question: "Which qualification framework do you use?",
      answer:
        "BANT (Budget, Authority, Need, Timeline) or CHAMP (Challenges, Authority, Money, Prioritization) — customized to your sales motion.",
    },
  ],
};
