export const DV_HERO = {
  showPreloader: false,
  eyebrow: "B2B DATA VALIDATION",
  title: (
    <>
      Data Validation — Clean Data That Your <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Sales Team Can Actually Trust
      </span>
    </>
  ),
  description:
    "Invalid emails, duplicate records, and stale contacts cost enterprise sales teams thousands of hours. We validate, clean, and certify your data so every outreach lands with precision.",
  image: {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    alt: "Data validation and verification process",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Request a Data Health Check",
  secondaryCtaLabel: "Start Your Validation Project",
  stat: { value: "98%", label: "Data Accuracy Rate", icon: "CheckCircle2" },
};

export const DV_WHY = {
  eyebrow: "REVENUE PROTECTION",
  heading: (
    <>
      The Hidden Cost of <br />
      <span className="text-brand-cyan">Bad Data in B2B Sales</span>
    </>
  ),
  reasons: [
    {
      id: "deliverability",
      title: "Protect Sender Reputation",
      description:
        "High bounce rates destroy your email domain's deliverability. Validation ensures every address is live before you send.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "efficiency",
      title: "Eliminate Sales Time Waste",
      description:
        "Every hour your sales team spends on invalid contacts is pipeline not being built. Clean data means focused outreach.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "compliance",
      title: "GDPR & CAN-SPAM Compliance",
      description:
        "Invalid or outdated contact data creates regulatory exposure. Validation keeps your database compliant and audit-ready.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "roi",
      title: "Maximise Outreach ROI",
      description:
        "Campaigns sent to validated data achieve 3× higher open rates and 5× lower bounce rates than unvalidated databases.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const DV_DELIVERABLES = {
  eyebrow: "OUR CAPABILITIES",
  heading: (
    <>
      What Our Data <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Validation Covers
      </span>
    </>
  ),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    {
      id: "email-validation",
      title: "Email Address Validation",
      description:
        "Real-time verification of every email address — syntax, domain, and mailbox-level checks to eliminate bounces.",
      icon: "CheckCircle2",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
    {
      id: "phone-validation",
      title: "Phone Number Verification",
      description:
        "Carrier-level validation of direct dials and mobile numbers — flagging disconnected, invalid, and reassigned numbers.",
      icon: "Shield",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-cyan",
    },
    {
      id: "dedup",
      title: "Deduplication & Merging",
      description:
        "Identify and resolve duplicate records across your database — preserving the richest version of each contact.",
      icon: "Database",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-primary",
    },
    {
      id: "health-report",
      title: "Data Health Report",
      description:
        "Full audit report detailing validation results, error categories, and data quality score — before and after.",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
      color: "bg-brand-blue",
    },
  ],
};

export const DV_STATS = {
  heading: (
    <>
      Global Reach <br />
      <span className="text-brand-blue">Local Execution</span>
    </>
  ),
  quote:
    '"We provide clean, verified B2B contact and account data, delivering email validation, deduplication, and CRM hygiene that improves deliverability across 40+ markets."',
  attribution: "— Data Quality Team, B2B Sales Arrow",
  stats: [
    {
      value: "98%",
      label: "Data Accuracy Rate",
      icon: "CheckCircle2",
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
      value: "100%",
      label: "Validation Accuracy",
      icon: "Target",
      bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]",
    },
  ],
};

export const DV_CASE_STUDIES = {
  eyebrow: "DATA VALIDATION RESULTS",
  heading: (
    <>
      Databases We&apos;ve Made <br />
      <span className="text-brand-blue">Campaign-Ready</span>
    </>
  ),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Work",
  caseStudies: [
    {
      id: "elevate-dv",
      client: "Elevate Logistics",
      title: "Email Validation Restores Domain Health in 30 Days",
      challenge: "Email sender score dropping due to 28% bounce rate on outbound campaigns.",
      solution: "Full database validation removing 6,200 invalid emails before campaign relaunch.",
      metric: "98%",
      metricLabel: "Email Deliverability Rate",
      icon: "BarChart3",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "aura-dv",
      client: "Aura Systems",
      title: "Deduplication Uncovers 3,400 Hidden Duplicates",
      challenge:
        "CRM had grown to 45,000 records with no deduplication process — significant data waste.",
      solution: "Full deduplication and merge audit across entire Salesforce instance.",
      metric: "3,400",
      metricLabel: "Duplicate Records Resolved",
      icon: "Users",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};

export const DV_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (
    <>
      Teams That Rebuilt <br />
      <span className="text-[#1E6091]">Trust in Their Data</span>
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
        "Our email domain was being blacklisted because of bad data. B2B Sales Arrow validated the entire database and our deliverability went from 62% to 98% in 30 days.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "VP of Global Sales",
      company: "Aura Systems",
      rating: 5,
      quote:
        "The deduplication project uncovered 3,400 duplicate records we didn't know existed. Our CRM is now genuinely reliable as a source of truth for the first time.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "David Alaba",
      designation: "Head of Growth",
      company: "Synapse Networks",
      rating: 5,
      quote:
        "The data health report they delivered was eye-opening — 34% of our database had at least one data quality issue. The post-validation campaign performance was exceptional.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
  ],
};

export const DV_FAQ = {
  eyebrow: "DATA VALIDATION FAQ",
  heading: (
    <>
      Frequently Asked <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Questions
      </span>
    </>
  ),
  description: "Everything you need to know about our data validation service.",
  scrollAmount: 340,
  faqs: [
    {
      id: "process",
      question: "How does the validation process work?",
      answer:
        "We apply a multi-layer validation pipeline: syntax checks, domain verification, MX record lookup, and SMTP-level mailbox verification. Phone numbers go through carrier-level validation.",
    },
    {
      id: "risk",
      question: "Is validation safe for our domain reputation?",
      answer:
        "Yes. Our validation process never actually sends emails — it uses SMTP handshake verification to confirm mailbox existence without any deliverable email being sent.",
    },
    {
      id: "output",
      question: "What does the output look like?",
      answer:
        "You receive your original file with additional columns flagging each record as Valid, Invalid, Catch-All, or Unknown — plus a summary health report and recommended action for each category.",
    },
    {
      id: "ongoing",
      question: "Can you run validation on an ongoing basis?",
      answer:
        "Yes. We offer monthly or quarterly validation runs for growing databases. We also offer CRM integration so new records are automatically validated on entry.",
    },
    {
      id: "size",
      question: "What's the largest database you've validated?",
      answer:
        "We've successfully validated databases of over 500,000 records. There's no practical upper limit — large projects are simply quoted and delivered in batches with progress updates.",
    },
  ],
};

export const DV_CONTACT = {
  eyebrow: "VALIDATE YOUR DATABASE",
  heading: (
    <>
      Clean Data is the <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Foundation of Revenue
      </span>
    </>
  ),
  description:
    "Get a free data health check on a sample of your database — no commitment required.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Database Size",
    servicePlaceholder: "Select record volume...",
    serviceOptions: [
      { value: "small", label: "Under 5,000 records" },
      { value: "medium", label: "5,000–25,000 records" },
      { value: "large", label: "25,000–100,000 records" },
      { value: "enterprise", label: "100,000+ records" },
    ],
    messageLabel: "Tell Us About Your Data",
    messagePlaceholder: "Current CRM, main data quality issues, and your use case...",
    ctaLabel: "Get Free Data Health Check",
  },
};
