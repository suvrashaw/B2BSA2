
export const TSBD_HERO = {
  showPreloader: false,
  eyebrow: "TRADE SHOW BOOTH DESIGN",
  title: (
    <>
      Booths That Stop <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Traffic and Capture Leads
      </span>
    </>
  ),
  description:
    "We design architectural, immersive exhibition environments that are engineered to dominate trade show floors and convert footfall into qualified pipeline.",
  image: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    alt: "Trade show booth design",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Our Designs",
  stat: { value: "500+", label: "Booth Designs Delivered", icon: "Presentation" },
};

export const TSBD_WHY = {
  eyebrow: "THE DESIGN DIFFERENCE",
  heading: (<>Why Our Booths <br /><span className="text-brand-cyan">Outperform</span></>),
  reasons: [
    { id: "architecture", title: "Spatial Architecture", description: "We design traffic flow, dwell zones, and engagement sequences — not just walls and graphics.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
    { id: "branding", title: "Brand-Immersive Environments", description: "Every surface, lighting element, and interaction point reinforces your brand positioning.", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200" },
    { id: "tech", title: "Technology Integration", description: "AR demos, touchscreens, NFC lead capture, and digital signage built into the booth structure.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" },
    { id: "global", title: "Global Fabrication Network", description: "We fabricate and install at any venue globally — no compromises on quality, no matter the location.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" },
  ],
};

export const TSBD_DELIVERABLES = {
  eyebrow: "WHAT'S INCLUDED",
  heading: (<>Everything in Your <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Booth Package</span></>),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    { id: "concept", title: "Concept & 3D Visualisation", description: "Photorealistic 3D renders of your booth before a single piece is fabricated.", icon: "Palette", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-blue" },
    { id: "fabrication", title: "Custom Fabrication", description: "High-quality materials, precision CNC cutting, and expert finishing at our production facility.", icon: "Layers", image: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-cyan" },
    { id: "graphics", title: "Graphics & Branding", description: "Large-format print, LED displays, and digital content production for every surface.", icon: "Ruler", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-red" },
    { id: "install", title: "On-Site Installation", description: "Our crew installs, tests, and hands over your booth ready to exhibit — then dismantles and ships it back.", icon: "Zap", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-blue" },
  ],
};

export const TSBD_STATS = {
  heading: (<>Design Results <br /><span className="text-brand-blue">by the Numbers</span></>),
  quote: '"A great booth doesn\'t just look good. It\'s a conversion machine designed to move enterprise buyers from curious to committed."',
  attribution: "— Booth Design Team, B2B Sales Arrow",
  stats: [
    { value: "500+", label: "Booth Designs Delivered", icon: "Presentation", bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]" },
    { value: "+340%", label: "Avg Lead Capture Lift", icon: "TrendingUp", bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]" },
    { value: "40+", label: "Countries Deployed", icon: "Globe2", bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]" },
    { value: "98%", label: "On-Time Delivery", icon: "Target", bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]" },
  ],
};

export const TSBD_CASE_STUDIES = {
  eyebrow: "BOOTH DESIGN RESULTS",
  heading: (<>Floors We&apos;ve <br /><span className="text-brand-blue">Dominated</span></>),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Booth Work",
  caseStudies: [
    { id: "gitex", client: "Global Tech Summit", title: "340% Lead Surge at GITEX 2025", challenge: "Generic presence among 6,000 exhibitors.", solution: "2-storey immersive booth with AR product demos and NFC lead capture.", metric: "+340%", metricLabel: "Lead Capture Rate", icon: "BarChart3", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200" },
    { id: "pharma", client: "PharmaConnect Expo", title: "Premium Booth Presence at CPhI Worldwide", challenge: "Brand lost among 2,500+ exhibitors.", solution: "360° immersive booth environment with live demo theatre.", metric: "220+", metricLabel: "Enterprise SQLs", icon: "Users", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
  ],
};

export const TSBD_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (<>Exhibitors Who <br /><span className="text-[#1E6091]">Stood Out</span></>),
  autoplayInterval: 3500, initialIndex: 1,
  testimonials: [
    { id: 1, name: "Sarah Jenkins", designation: "Chief Marketing Officer", company: "Nexus Technologies", rating: 5, quote: "B2B Sales Arrow transformed our exhibition presence. Their architectural approach to booth design increased our qualified pipeline by 340% at GITEX.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "James Okafor", designation: "Head of Partnerships", company: "CloudCore Systems", rating: 5, quote: "The booth they designed for us wasn't just beautiful — it was a strategic asset. Traffic flow, demo zones, and lead capture all worked as one system.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Priya Nair", designation: "VP Events", company: "TechBridge Global", rating: 5, quote: "We've worked with many booth builders. B2BSA is the only one that starts with strategy, not just aesthetics.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
  ],
};

export const TSBD_FAQ = {
  eyebrow: "BOOTH DESIGN FAQ",
  heading: (<>Frequently Asked <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Questions</span></>),
  description: "Everything you need to know about our trade show booth design service.",
  scrollAmount: 340,
  faqs: [
    { id: "timeline", question: "How long does the design process take?", answer: "Concept to 3D render: 2 weeks. Full fabrication and delivery: 8–12 weeks from approved design. We recommend engaging us at least 12 weeks before your show." },
    { id: "sizes", question: "What booth sizes do you design for?", answer: "We design for everything from 9 sqm inline booths to 500+ sqm island booths. We've built structures as large as 2-storey exhibition pavilions for major global shows." },
    { id: "rental-vs-build", question: "Should I rent or build a custom booth?", answer: "Custom builds offer more brand control and better ROI over 3+ events. Rentals are better for one-off shows or first-time exhibitors. We'll advise based on your event schedule." },
    { id: "global", question: "Can you build for international events?", answer: "Yes. We have production and logistics partners at all major event venues globally. We manage export, customs, freight, and on-site installation for any country." },
    { id: "storage", question: "Do you offer booth storage between events?", answer: "Yes. We offer storage and maintenance services so your booth is ready to ship to the next event in perfect condition. Monthly storage rates available." },
  ],
};

export const TSBD_CONTACT = {
  eyebrow: "START YOUR BOOTH PROJECT",
  heading: (<>Design Your <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Winning Booth</span></>),
  description: "Tell us about your next event and booth requirements — we'll design something that dominates.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name", firstNamePlaceholder: "John",
    lastNameLabel: "Last Name", lastNamePlaceholder: "Doe",
    emailLabel: "Work Email", emailPlaceholder: "john@company.com",
    serviceLabel: "Booth Size", servicePlaceholder: "Select size range...",
    serviceOptions: [
      { value: "small", label: "Small (9–36 sqm)" },
      { value: "medium", label: "Medium (36–100 sqm)" },
      { value: "large", label: "Large (100–300 sqm)" },
      { value: "enterprise", label: "Enterprise (300+ sqm)" },
    ],
    messageLabel: "Tell Us About Your Event", messagePlaceholder: "Event name, date, location, and your goals...",
    ctaLabel: "Get Booth Design Quote",
  },
};
