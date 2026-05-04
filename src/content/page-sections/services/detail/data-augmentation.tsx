
export const DA_HERO = {
  showPreloader: false,
  eyebrow: "DATA AUGMENTATION",
  title: (
    <>
      Enrich Your Data for <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Precision B2B Targeting
      </span>
    </>
  ),
  description:
    "We enrich your existing CRM and prospect data with verified firmographic, technographic, and contact intelligence — turning incomplete records into actionable, revenue-ready datasets.",
  image: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    alt: "Data augmentation and enrichment",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Get a Free Data Audit",
  secondaryCtaLabel: "See Data Results",
  stat: { value: "94%", label: "Avg Data Accuracy Rate", icon: "Database" },
};

export const DA_WHY = {
  eyebrow: "THE ENRICHMENT DIFFERENCE",
  heading: (<>Why Clean, Enriched Data <br /><span className="text-brand-cyan">Powers Pipeline</span></>),
  reasons: [
    { id: "accuracy", title: "Eliminate Wasted Outreach", description: "Dirty data means your sales team calls dead numbers and emails bounced addresses. Enrichment fixes that at the source.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" },
    { id: "targeting", title: "Precision ICP Matching", description: "Enriched firmographic and technographic data lets you filter, score, and prioritise your best-fit accounts instantly.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
    { id: "personalisation", title: "Hyper-Personalised Outreach", description: "Know your prospect's tech stack, headcount, recent funding, and buying signals before your first touchpoint.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" },
    { id: "crm", title: "CRM Health at Scale", description: "Systematic enrichment keeps your CRM accurate as your database grows — no more manual research for each new record.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" },
  ],
};

export const DA_DELIVERABLES = {
  eyebrow: "WHAT'S INCLUDED",
  heading: (<>Full Data Augmentation <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Service Package</span></>),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    { id: "firmographic", title: "Firmographic Enrichment", description: "Company name, size, revenue, industry, HQ location, and subsidiary mapping for every account.", icon: "Database", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-blue" },
    { id: "contact", title: "Contact Intelligence", description: "Verified direct dial, professional email, LinkedIn profile, and job title for every decision-maker record.", icon: "Users", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-cyan" },
    { id: "technographic", title: "Technographic Data", description: "Identify the exact technology stack your prospects use — enabling product-fit targeting and competitive displacement messaging.", icon: "BarChart3", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-red" },
    { id: "intent", title: "Buyer Intent Signals", description: "Layer intent data on top of your records to identify which accounts are actively researching solutions like yours right now.", icon: "TrendingUp", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-blue" },
  ],
};

export const DA_STATS = {
  heading: (<>Data Enrichment <br /><span className="text-brand-blue">Quality Numbers</span></>),
  quote: '"Your GTM strategy is only as good as the data beneath it. We turn incomplete, stale CRM records into the precision intelligence your sales team needs to win enterprise deals."',
  attribution: "— Data Intelligence Team, B2B Sales Arrow",
  stats: [
    { value: "94%", label: "Avg Data Accuracy Rate", icon: "Database", bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]" },
    { value: "72hr", label: "Avg Turnaround Per 10k Records", icon: "Zap", bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]" },
    { value: "40+", label: "Data Sources & Providers Used", icon: "Globe2", bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]" },
    { value: "3×", label: "Avg Reply Rate Lift Post-Enrichment", icon: "Target", bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]" },
  ],
};

export const DA_CASE_STUDIES = {
  eyebrow: "DATA ENRICHMENT RESULTS",
  heading: (<>Datasets We&apos;ve Made <br /><span className="text-brand-blue">Revenue-Ready</span></>),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Work",
  caseStudies: [
    { id: "synapse-data", client: "Synapse Networks", title: "CRM Enrichment Triples Outbound Reply Rate", challenge: "CRM had 18,000 records with 42% missing contact data.", solution: "Full firmographic and contact enrichment on entire CRM database.", metric: "3×", metricLabel: "Outbound Reply Rate", icon: "BarChart3", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" },
    { id: "elevate-data", client: "Elevate Logistics", title: "Technographic Data Enables Product-Fit Targeting", challenge: "Sales team had no visibility into prospect tech stacks.", solution: "Technographic enrichment of 5,000 target accounts with competitive displacement sequencing.", metric: "+67%", metricLabel: "Meeting Conversion Rate", icon: "Users", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
  ],
};

export const DA_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (<>Teams That Found <br /><span className="text-[#1E6091]">Gold in Their Data</span></>),
  autoplayInterval: 3500, initialIndex: 1,
  testimonials: [
    { id: 1, name: "David Alaba", designation: "Head of Growth", company: "Synapse Networks", rating: 5, quote: "We had 18,000 CRM records we could barely use. After enrichment, we had a precision-targeted outbound machine. Reply rates tripled within the first campaign.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Sophia Martinez", designation: "VP Marketing", company: "Elevate Logistics", rating: 5, quote: "The technographic data changed our entire outbound strategy. Knowing our prospects' tech stacks allowed us to personalise at a level we'd never achieved before.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Michael Chen", designation: "VP of Global Sales", company: "Aura Systems", rating: 5, quote: "94% accuracy across 25,000 records delivered in 72 hours. The data quality is exceptional and the turnaround speed enabled us to launch our campaign on schedule.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  ],
};

export const DA_FAQ = {
  eyebrow: "DATA AUGMENTATION FAQ",
  heading: (<>Frequently Asked <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Questions</span></>),
  description: "Everything you need to know about our data augmentation service.",
  scrollAmount: 340,
  faqs: [
    { id: "sources", question: "Where does your enrichment data come from?", answer: "We use a proprietary blend of 40+ commercial and human-verified data sources including LinkedIn, company websites, business registries, and our own research network." },
    { id: "accuracy", question: "What accuracy rate can we expect?", answer: "We guarantee a minimum 90% accuracy rate on email addresses and 85% on direct dials. Our standard delivery achieves 94% overall accuracy across all data fields." },
    { id: "format", question: "What file formats do you accept?", answer: "CSV, Excel, or direct CRM integration (Salesforce, HubSpot, Pipedrive, and others). We return the enriched data in the same format you provide, ready to import." },
    { id: "gdpr", question: "Is your data GDPR compliant?", answer: "Yes. All enrichment data is sourced from legitimate, publicly available business intelligence. We provide a data processing agreement and comply with GDPR and CCPA requirements." },
    { id: "turnaround", question: "How quickly can you enrich our data?", answer: "Standard enrichment: 72 hours per 10,000 records. Urgent projects can be expedited. We'll provide an exact timeline based on your dataset size and requirements during onboarding." },
  ],
};

export const DA_CONTACT = {
  eyebrow: "ENRICH YOUR DATA",
  heading: (<>Transform Your CRM into a <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Revenue Engine</span></>),
  description: "Send us a sample of your data for a free accuracy audit and enrichment recommendation.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name", firstNamePlaceholder: "John",
    lastNameLabel: "Last Name", lastNamePlaceholder: "Doe",
    emailLabel: "Work Email", emailPlaceholder: "john@company.com",
    serviceLabel: "Dataset Size", servicePlaceholder: "Select record volume...",
    serviceOptions: [
      { value: "small", label: "Under 5,000 records" },
      { value: "medium", label: "5,000–25,000 records" },
      { value: "large", label: "25,000–100,000 records" },
      { value: "enterprise", label: "100,000+ records" },
    ],
    messageLabel: "Tell Us About Your Data Needs", messagePlaceholder: "Current CRM, data gaps, target ICP, and enrichment goals...",
    ctaLabel: "Get Free Data Audit",
  },
};
