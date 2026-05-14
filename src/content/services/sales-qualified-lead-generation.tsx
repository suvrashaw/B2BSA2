export const SQL_HERO = {
  showPreloader: false,
  eyebrow: "ACTIVE PROSPECTING & LEAD GEN",
  title: (
    <>
      Sales Qualified Lead Generation —{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Decision-Makers, Not Data
      </span>
    </>
  ),
  description:
    "We deploy trained sales specialists directly onto the event floor to identify and engage senior decision-makers in real-time. No cold lists — just qualified enterprise SQLs delivered to your team daily.",
  image: {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
    alt: "Sales pipeline and lead generation",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Request an SQL Proposal",
  secondaryCtaLabel: "Start Your Lead Gen Project",
  stat: {
    value: "2,500+",
    label: "SQLs Delivered",
    icon: "Users",
  },
};

export const SQL_SERVICES = {
  eyebrow: "OUR STRATEGY",
  heading: (
    <>
      Sales Qualified Lead{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Generation Solutions
      </span>
    </>
  ),
  serviceLabel: "Component",
  ctaLabel: "Learn More",
  services: [
    {
      id: "icp",
      title: "ICP Targeting",
      description:
        "We build your Ideal Customer Profile from firmographic, technographic, and intent data — then find every company that matches.",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "database",
      title: "Database Prospecting",
      description:
        "Access to 350M+ verified B2B contacts. We build targeted prospect lists with phone, email, and LinkedIn — all compliance-verified.",
      icon: "Database",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "outreach",
      title: "Multi-Touch Outreach",
      description:
        "Coordinated email, LinkedIn, and phone sequences personalised at scale — designed to break through enterprise gatekeepers.",
      icon: "MessageSquare",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "scoring",
      title: "Lead Scoring",
      description:
        "Every prospect is scored on engagement, firmographic fit, and buying intent before being passed to your sales team as an SQL.",
      icon: "Filter",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "crm",
      title: "CRM Integration",
      description:
        "SQLs are delivered directly into your CRM (Salesforce, HubSpot, Pipedrive) with full context, scoring, and next-step recommendations.",
      icon: "Settings",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "reporting",
      title: "Pipeline Reporting",
      description:
        "Real-time dashboards showing leads generated, meetings booked, pipeline value, and revenue attribution — updated daily.",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
  ],
};

export const SQL_STATS = {
  heading: (
    <>
      Global Reach <span className="text-brand-blue">Local Execution</span>
    </>
  ),
  quote:
    '"We generate and deliver sales-qualified leads for enterprise B2B companies, delivering verified decision-makers ready to engage your sales team across 40+ markets."',
  attribution: "— Lead Generation Team, B2B Sales Arrow",
  stats: [
    {
      value: "15,000+",
      label: "Enterprise Leads Generated",
      icon: "Users",
      bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]",
    },
    {
      value: "10+",
      label: "Years of Experience",
      icon: "TrendingUp",
      bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]",
    },
    {
      value: "40+",
      label: "Countries Served",
      icon: "Globe2",
      bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]",
    },
    {
      value: "98%",
      label: "Client Retention",
      icon: "Target",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const SQL_WHY = {
  eyebrow: "SALES ALIGNMENT",
  heading: (
    <>
      The $1.2B Reason B2B Enterprises <span className="text-brand-cyan">Prioritize Lead Gen</span>
    </>
  ),
  reasons: [
    {
      id: "quality",
      title: "Quality Over Quantity",
      description:
        "We deliver 20 SQLs that your sales team can close — not 200 cold contacts that waste everyone's time. Every lead passes our 12-point qualification checklist.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "speed",
      title: "First Leads Within 48 Hours",
      description:
        "Our pre-built prospect databases and proven outreach sequences mean your pipeline starts filling from day two of engagement.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "compliance",
      title: "GDPR & CAN-SPAM Compliant",
      description:
        "Every contact in our database is consent-verified and compliance-cleared. Your brand reputation is protected at every step.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "crm-native",
      title: "CRM-Native Delivery",
      description:
        "Leads don't land in a spreadsheet — they land in your pipeline, already scored, segmented, and assigned to the right rep.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const SQL_CASE_STUDIES = {
  eyebrow: "LEAD GEN RESULTS",
  heading: (
    <>
      Real Events. <span className="text-brand-blue">Real Results.</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Lead Gen Work",
  items: [
    {
      id: "cloudcore",
      client: "CloudCore Systems",
      title: "180 Enterprise SQLs in 90 Days for Cloud Platform",
      challenge: "Enterprise sales team spending 60% of time on unqualified prospects.",
      solution:
        "ICP-targeted outbound + LinkedIn sequence + CRM integration with qualification scoring.",
      metric: "180",
      metricLabel: "SQLs in 90 Days",
      icon: "Target",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "elevate",
      client: "Elevate Logistics",
      title: "62% Reduction in Cost-Per-SQL for Logistics SaaS",
      challenge: "Expensive inbound leads and a stalled outbound programme with 3% response rates.",
      solution:
        "Rebuilt ICP, personalised multi-touch outreach sequences, and A/B tested messaging.",
      metric: "62%",
      metricLabel: "Lower Cost-per-SQL",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const SQL_TESTIMONIALS = {
  eyebrow: "CLIENT SUCCESS",
  heading: (
    <>
      Real Events. <span className="text-[#1E6091]">Real Results.</span>
    </>
  ),
  autoplayInterval: 3500,
  initialIndex: 1,
  testimonials: [
    {
      id: 1,
      name: "Sophia Martinez",
      designation: "VP Marketing",
      company: "Elevate Logistics",
      rating: 5,
      quote:
        "A flawless execution from strategy to deployment. The ROI on the lead generation programme they built for us broke all our previous quarter records.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "James Okafor",
      designation: "Head of Partnerships",
      company: "CloudCore Systems",
      rating: 5,
      quote:
        "Within 6 weeks they had completely transformed our outbound engine. Our sales team went from cold calling to having warm conversations with pre-qualified prospects daily.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "David Alaba",
      designation: "Head of Growth",
      company: "Synapse Networks",
      rating: 5,
      quote:
        "The quality of SQLs they deliver is genuinely different. These are prospects who have already been educated on our value prop before our reps even pick up the phone.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const SQL_BLOGS = {
  eyebrow: "LEAD GEN INSIGHTS",
  heading: (
    <>
      Lead Generation <span className="text-brand-primary">Insights</span>
    </>
  ),
  ctaLabel: "View All Lead Gen Articles",
  blogs: [
    {
      id: 1,
      title: "The ICP Framework That Doubled Our Clients' SQL Rate",
      category: "Lead Generation",
      date: "Oct 8, 2025",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Why Cold Email Still Outperforms LinkedIn for B2B Enterprise",
      category: "Strategy",
      date: "Sep 22, 2025",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Building a Lead Scoring Model That Sales Teams Actually Trust",
      category: "Operations",
      date: "Sep 5, 2025",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
  ],
};

export const SQL_FAQ = {
  eyebrow: "LEAD GENERATION FAQ",
  heading: (
    <>
      Frequently Asked{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our SQL generation service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "definition",
      question: "How do you define a Sales Qualified Lead?",
      answer:
        "An SQL in our programme meets: correct ICP firmographic fit, verified contact details, demonstrated intent signal (content download, event attendance, or direct engagement), and passed our 12-point qualification checklist.",
    },
    {
      id: "volume",
      question: "How many SQLs can you deliver per month?",
      answer:
        "Depending on your ICP, market size, and budget, we typically deliver 30–200 SQLs per month. We set realistic forecasts and hit them — we don't over-promise.",
    },
    {
      id: "timeline",
      question: "How quickly does the programme start delivering?",
      answer:
        "Onboarding takes 5 business days. First SQLs typically arrive within 48 hours of campaign launch. Full pipeline volume is achieved by week 3–4.",
    },
    {
      id: "replacement",
      question: "What happens if an SQL doesn't meet the criteria?",
      answer:
        "We have a no-questions-asked replacement policy. If a lead doesn't meet the agreed qualification criteria, we replace it at no cost within 5 business days.",
    },
    {
      id: "crm",
      question: "Which CRMs do you integrate with?",
      answer:
        "We have native integrations with Salesforce, HubSpot, Pipedrive, Zoho, and Microsoft Dynamics. For other CRMs we use Zapier or custom API connections.",
    },
  ],
};

export const SQL_CONTACT = {
  eyebrow: "START GENERATING PIPELINE",
  heading: (
    <>
      Plan Your Next{" "}
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Lead Gen Program
      </span>
    </>
  ),
  description:
    "Tell us about your ICP and revenue targets — we'll design an SQL programme that delivers.",
  illustration: {
    src: "/undraw_contact-us_s4jn.svg",
    alt: "Contact Us",
  },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Monthly SQL Target",
    servicePlaceholder: "How many SQLs per month?",
    serviceOptions: [
      { value: "10-30", label: "10–30 SQLs/month" },
      { value: "30-60", label: "30–60 SQLs/month" },
      { value: "60-100", label: "60–100 SQLs/month" },
      { value: "100+", label: "100+ SQLs/month" },
    ],
    messageLabel: "Describe Your Ideal Customer",
    messagePlaceholder: "Industry, company size, title, geography...",
    ctaLabel: "Get SQL Programme Proposal",
  },
};
