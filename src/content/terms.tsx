export const TERMS_HERO = {
  showPreloader: false,
  eyebrow: "LEGAL",
  title: (
    <>
      Terms &amp; <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Conditions
      </span>
    </>
  ),
  description:
    "Please read these terms carefully before using our services. Last updated: January 2025.",
  image: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
    alt: "Legal documentation",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: null,
  secondaryCtaLabel: null,
  stat: null,
};

export const TERMS_FAQ = {
  eyebrow: "TERMS OF SERVICE",
  heading: (
    <>
      Our Terms, <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Clearly Stated
      </span>
    </>
  ),
  description: "Hover any card to read the full detail. Questions? Contact us below.",
  scrollAmount: 340,
  faqs: [
    {
      id: "acceptance",
      question: "Acceptance of Terms",
      answer:
        "By accessing or using B2B Sales Arrow services, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our services immediately.",
    },
    {
      id: "services",
      question: "Description of Services",
      answer:
        "B2B Sales Arrow provides B2B marketing, event management, media production, lead generation, and market research services. Specific deliverables are defined in individual service agreements.",
    },
    {
      id: "payment",
      question: "Payment & Billing",
      answer:
        "Payment terms are outlined in your service agreement. Invoices are due within 30 days of issuance unless otherwise agreed. Late payments may incur interest at 1.5% per month.",
    },
    {
      id: "ip",
      question: "Intellectual Property",
      answer:
        "All deliverables produced by B2B Sales Arrow become client property upon full payment. Our proprietary methodologies, frameworks, and tools remain the exclusive property of B2B Sales Arrow.",
    },
    {
      id: "confidentiality",
      question: "Confidentiality",
      answer:
        "Both parties agree to maintain strict confidentiality of all proprietary information shared during the engagement. This obligation survives termination of the agreement for 3 years.",
    },
    {
      id: "liability",
      question: "Limitation of Liability",
      answer:
        "Our total liability shall not exceed the fees paid for the relevant service in the 3 months preceding the claim. We are not liable for indirect, consequential, or punitive damages.",
    },
    {
      id: "termination",
      question: "Termination",
      answer:
        "Either party may terminate an engagement with 30 days written notice. Client is liable for all work completed up to the termination date. Prepaid fees for undelivered work will be refunded pro-rata.",
    },
    {
      id: "governing-law",
      question: "Governing Law",
      answer:
        "These Terms are governed by the laws of the jurisdiction in which B2B Sales Arrow is incorporated. Disputes shall be resolved through binding arbitration before resorting to litigation.",
    },
    {
      id: "changes",
      question: "Changes to Terms",
      answer:
        "We reserve the right to update these terms at any time. Material changes will be communicated via email 30 days in advance. Continued use of services constitutes acceptance of revised terms.",
    },
  ],
};

export const TERMS_CONTACT = {
  eyebrow: "QUESTIONS ABOUT OUR TERMS?",
  heading: (
    <>
      Speak to Our <br />
      <span className="from-brand-blue to-brand-cyan bg-linear-to-r bg-clip-text text-transparent">
        Legal Team
      </span>
    </>
  ),
  description:
    "If you have questions about our terms or need clarification on any clause, our team is happy to assist.",
  illustration: null,
  form: {
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    serviceLabel: "Subject",
    servicePlaceholder: "Select a topic...",
    serviceOptions: [
      { value: "terms-clarification", label: "Terms Clarification" },
      { value: "contract-query", label: "Contract Query" },
      { value: "data-privacy", label: "Data & Privacy" },
      { value: "other", label: "Other Legal Matter" },
    ],
    messageLabel: "Your Question",
    messagePlaceholder: "Which clause would you like clarified?",
    ctaLabel: "Send Query",
  },
};
