
export const PAID_HERO = {
  showPreloader: false,
  eyebrow: "PAID ADVERTISING",
  title: (
    <>
      Precision-Targeted Ads <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        That Reach B2B Decision-Makers
      </span>
    </>
  ),
  description:
    "We design, run, and optimise paid media campaigns across Google, LinkedIn, and display networks — engineered to reach senior B2B buyers at the exact moment they're evaluating solutions.",
  image: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    alt: "Paid advertising analytics dashboard",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Get a Free Audit",
  secondaryCtaLabel: "View Paid Ad Results",
  stat: { value: "4.2×", label: "Avg ROAS Achieved", icon: "TrendingUp" },
};

export const PAID_WHY = {
  eyebrow: "THE PAID DIFFERENCE",
  heading: (<>Why B2B Paid Ads <br /><span className="text-brand-cyan">Need a Specialist</span></>),
  reasons: [
    { id: "targeting", title: "Decision-Maker Targeting", description: "We use job title, seniority, company size, and intent signals to reach CFOs and VPs — not interns.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" },
    { id: "creative", title: "B2B-Native Creative", description: "Enterprise buyers respond to different creative than B2C. Our copy and visuals are built for long-cycle decision-making.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
    { id: "attribution", title: "Full Funnel Attribution", description: "We track every ad impression to closed revenue — giving you exact ROAS figures, not just click metrics.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" },
    { id: "optimisation", title: "Continuous Optimisation", description: "Weekly bid management, A/B testing, and audience refinement to improve performance every single week.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" },
  ],
};

export const PAID_DELIVERABLES = {
  eyebrow: "WHAT'S INCLUDED",
  heading: (<>Full Paid Media <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Management Package</span></>),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    { id: "google", title: "Google Ads Management", description: "Search, Display, and YouTube campaigns targeting high-intent B2B keywords and in-market audiences.", icon: "MousePointerClick", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-blue" },
    { id: "linkedin", title: "LinkedIn Paid Campaigns", description: "Sponsored content, InMail, and dynamic ads targeted by job title, company, and industry.", icon: "Users", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-cyan" },
    { id: "retargeting", title: "Retargeting Campaigns", description: "Pixel-based retargeting to re-engage website visitors, content downloaders, and video viewers.", icon: "Target", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-red" },
    { id: "reporting", title: "Weekly Performance Reporting", description: "Full transparency on spend, impressions, clicks, leads, and pipeline generated from every campaign.", icon: "BarChart3", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-blue" },
  ],
};

export const PAID_STATS = {
  heading: (<>Paid Media <br /><span className="text-brand-blue">Performance Numbers</span></>),
  quote: '"B2B paid media done right doesn\'t burn budget — it multiplies it. Our campaigns are engineered to find the exact buyer at the exact moment they\'re ready to evaluate."',
  attribution: "— Paid Media Team, B2B Sales Arrow",
  stats: [
    { value: "4.2×", label: "Avg ROAS Achieved", icon: "TrendingUp", bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]" },
    { value: "−42%", label: "Avg CPL Reduction vs Baseline", icon: "Zap", bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]" },
    { value: "40+", label: "Countries, Ad Markets Run", icon: "Globe2", bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]" },
    { value: "98%", label: "Client Retention on Retainer", icon: "Target", bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]" },
  ],
};

export const PAID_CASE_STUDIES = {
  eyebrow: "PAID MEDIA RESULTS",
  heading: (<>Campaigns That <br /><span className="text-brand-blue">Moved the Needle</span></>),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Work",
  caseStudies: [
    { id: "finserve-paid", client: "FinServe SaaS", title: "Google Ads Campaign Generates 4.2× ROAS", challenge: "High CPL from generic broad-match keyword strategy.", solution: "Restructured account with intent-based keywords and decision-maker retargeting.", metric: "4.2×", metricLabel: "Return on Ad Spend", icon: "BarChart3", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" },
    { id: "nexus-paid", client: "Nexus Technologies", title: "LinkedIn Ads Cut CPL by 42% in 60 Days", challenge: "LinkedIn CPL was 3× the target — campaigns not profitable.", solution: "Audience restructure, creative refresh, and bid strategy overhaul.", metric: "−42%", metricLabel: "Cost Per Lead Reduction", icon: "Users", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
  ],
};

export const PAID_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (<>Brands That Turned <br /><span className="text-[#1E6091]">Ad Spend into Pipeline</span></>),
  autoplayInterval: 3500, initialIndex: 1,
  testimonials: [
    { id: 1, name: "Sophia Martinez", designation: "VP Marketing", company: "Elevate Logistics", rating: 5, quote: "Our previous paid media agency was burning budget on vanity clicks. B2B Sales Arrow restructured everything and hit 4.2× ROAS within the first quarter.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Sarah Jenkins", designation: "Chief Marketing Officer", company: "Nexus Technologies", rating: 5, quote: "LinkedIn CPL dropped 42% in 60 days. The targeting expertise they bring to B2B paid media is genuinely in a different league from general digital agencies.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "David Alaba", designation: "Head of Growth", company: "Synapse Networks", rating: 5, quote: "The weekly reporting cadence keeps us completely aligned. We always know where our money is going and what results it's driving. Completely transparent operation.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  ],
};

export const PAID_FAQ = {
  eyebrow: "PAID ADVERTISING FAQ",
  heading: (<>Frequently Asked <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Questions</span></>),
  description: "Everything you need to know about our paid advertising management service.",
  scrollAmount: 340,
  faqs: [
    { id: "budget", question: "What's the minimum ad budget you recommend?", answer: "For B2B Google Ads: £3,000/month minimum ad spend. For LinkedIn: £5,000/month minimum. Below these thresholds, the data volume is insufficient to optimise effectively." },
    { id: "management-fee", question: "What is your management fee?", answer: "Our management fee is 15% of monthly ad spend (minimum £1,500/month). This covers strategy, campaign management, creative production, and weekly reporting." },
    { id: "results-timeline", question: "How quickly can we expect results?", answer: "With an existing account, optimisations show measurable improvement within 4 weeks. New accounts take 6–8 weeks for the learning phase to stabilise before we scale." },
    { id: "creative", question: "Do you produce the ad creatives?", answer: "Yes. Our package includes creative production — copy, design, and video ad edits. We run systematic A/B tests to identify the highest-performing creative variants." },
    { id: "access", question: "Do we retain access to our ad accounts?", answer: "Always. We work inside your ad accounts — we never hold your data hostage. You have full admin access and full ownership of all campaigns and data at all times." },
  ],
};

export const PAID_CONTACT = {
  eyebrow: "START YOUR PAID CAMPAIGN",
  heading: (<>Launch Ads That <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Find Decision-Makers</span></>),
  description: "Get a free paid media audit and competitive analysis for your industry — no obligation.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name", firstNamePlaceholder: "John",
    lastNameLabel: "Last Name", lastNamePlaceholder: "Doe",
    emailLabel: "Work Email", emailPlaceholder: "john@company.com",
    serviceLabel: "Monthly Ad Budget", servicePlaceholder: "Select budget range...",
    serviceOptions: [
      { value: "starter", label: "£3,000–£7,500 / month" },
      { value: "growth", label: "£7,500–£20,000 / month" },
      { value: "enterprise", label: "£20,000+ / month" },
      { value: "unsure", label: "Not sure yet" },
    ],
    messageLabel: "Tell Us About Your Campaign Goals", messagePlaceholder: "Target audience, current channels, key objectives, and timeline...",
    ctaLabel: "Get Free Paid Media Audit",
  },
};
