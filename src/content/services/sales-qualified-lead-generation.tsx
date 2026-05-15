import { GLOBAL_CASE_STUDIES } from "../shared";

export const SQL_HERO = {
  title: "Sales Qualified Lead Generation — Enterprise Pipeline, Not Just Data",
  description:
    "Stop wasting time on unqualified 'leads'. We provide the human-powered prospecting and BANT-qualified meeting setting that fills your sales team's calendar with genuine enterprise opportunities.",
};

export { GLOBAL_PROOF_STATS as SQL_PROOF_BAR } from "../shared";

export const SQL_SERVICES = {
  heading: "Our Lead Generation Capabilities",
  description:
    "In the enterprise world, quantity is the enemy of quality. Your sales team doesn't need more 'leads' — they need more 'qualified conversations.' We specialize in human-powered prospecting that cuts through the noise of automated spam. Our specialists act as a seamless extension of your brand, engaging decision-makers at your most valuable target accounts and qualifying them against strict BANT criteria before they ever reach your sales team's calendar.",
  services: [
    {
      id: "prospecting",
      title: "Human-Powered Prospecting and Outreach",
      description:
        "We use a multi-channel approach — phone, email, and LinkedIn — to engage your target accounts. No automated bots. Just real humans having real conversations with your future customers.",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "appointment",
      title: "Qualified Appointment Setting",
      description:
        "We don't just deliver a list; we deliver confirmed meetings on your sales team's calendar — qualified against BANT (Budget, Authority, Need, Timeline) criteria.",
      icon: "CalendarCheck",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "database",
      title: "B2B Database Cleansing and Augmentation",
      description:
        "Is your CRM full of dead leads? We refresh and augment your existing data with verified phone numbers, LinkedIn profiles, and technographic insights.",
      icon: "Database",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "icp",
      title: "ICP and Persona Development",
      description:
        "We help you define exactly who you should be targeting by analyzing your historical win data and market opportunity — ensuring zero wasted effort.",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const SQL_WHY = {
  heading: "Why Human Relevance Still Wins",
  description:
    "AI can generate text, but it cannot build trust. In high-stakes enterprise sales, the first touchpoint defines the relationship. Our human-powered model ensures that every interaction is relevant, respectful, and focused on the prospect's specific business challenges. This approach results in higher meeting show rates, shorter sales cycles, and a significantly higher win rate compared to automated outbound strategies.",
  reasons: [
    {
      id: "bant",
      title: "Strict BANT Qualification",
      description: "We only pass leads that have the budget, authority, need, and timeline to buy.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "crm",
      title: "Seamless CRM Integration",
      description:
        "Leads are pushed directly into your Salesforce or HubSpot instance for immediate follow-up.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const SQL_PROCESS = {
  heading: "Our 5-Step SQL Generation Process",
  phases: [
    {
      title: "Target Identification and ICP Audit",
      description:
        "We define exactly who your best customers are and build a verified account list.",
    },
    {
      title: "Messaging and Value Prop Development",
      description:
        "Creating custom outreach scripts that focus on solving specific prospect pain points.",
    },
    {
      title: "Multi-Channel Outreach (Human-First)",
      description:
        "Coordinated engagement across phone, email, and LinkedIn by our sales specialists.",
    },
    {
      title: "Deep BANT Qualification",
      description:
        "Verifying the commercial viability of every prospect before booking the meeting.",
    },
    {
      title: "Meeting Handoff and Pipeline Sync",
      description:
        "Delivering qualified meetings and full discovery notes directly to your sales team.",
    },
  ],
};

export const SQL_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const SQL_FAQ = {
  heading: "SQL Generation FAQs",
  faqs: [
    {
      id: "sql-vs-mql",
      question: "What makes an SQL different from an MQL?",
      answer:
        "An MQL has shown interest; an SQL has been verified by a human specialist to have a legitimate business need and the authority to pursue a solution.",
    },
    {
      id: "guarantees",
      question: "Do you guarantee meeting volume?",
      answer:
        "We provide realistic forecasts based on your market size and ICP. We focus on 'Show-Rate' and 'Pipeline Value' rather than vanity lead numbers.",
    },
    {
      id: "crm-access",
      question: "Do you need access to our CRM?",
      answer:
        "While not strictly required, working directly inside your CRM allows for much tighter sales alignment and faster lead response times.",
    },
  ],
};
