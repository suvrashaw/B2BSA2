import { BarChart3, Globe2, Radio, Target, TrendingUp, Users, Video, Wifi, Zap } from "lucide-react";

export const LSS_HERO = {
  showPreloader: false,
  eyebrow: "LIVE STREAMING SERVICES",
  title: (
    <>
      Stream Your Events to a <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">
        Global B2B Audience
      </span>
    </>
  ),
  description:
    "We produce and broadcast professional live streams of your corporate events, product launches, and conferences — reaching thousands of qualified prospects who couldn't attend in person.",
  image: {
    src: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=2000",
    alt: "Live streaming production setup",
    loaderAlt: "Loading",
  },
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Past Streams",
  stat: { value: "120+", label: "Live Events Broadcast", icon: Radio },
};

export const LSS_WHY = {
  eyebrow: "THE STREAMING DIFFERENCE",
  heading: (<>Why Live Streaming <br /><span className="text-brand-cyan">Multiplies Reach</span></>),
  reasons: [
    { id: "reach", title: "10× Your Event Audience", description: "A live stream transforms a 500-person room into a global audience of thousands — all qualified B2B prospects.", image: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=1200" },
    { id: "pipeline", title: "Live Lead Generation", description: "Gated registration for your live stream builds your prospect database before the event even starts.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200" },
    { id: "reliability", title: "Broadcast-Grade Reliability", description: "Redundant internet connections, backup encoders, and a dedicated stream engineer ensure zero downtime.", image: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1200" },
    { id: "replay", title: "On-Demand Replay Asset", description: "Every live stream is simultaneously recorded in 4K and delivered as an on-demand asset for post-event nurture.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
  ],
};

export const LSS_DELIVERABLES = {
  eyebrow: "WHAT'S INCLUDED",
  heading: (<>Full Live Streaming <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Production Package</span></>),
  serviceLabel: "Deliverable",
  ctaLabel: "Learn More",
  services: [
    { id: "multiplatform", title: "Multi-Platform Broadcast", description: "Simultaneous streaming to LinkedIn Live, YouTube, and your branded landing page.", icon: Radio, image: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-blue" },
    { id: "production", title: "Live Production Switching", description: "Multi-camera live switching with branded overlays, lower thirds, and transitions.", icon: Video, image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-cyan" },
    { id: "interactive", title: "Interactive Q&A & Polling", description: "Live audience engagement tools including Q&A moderation, live polls, and CTA overlays.", icon: Wifi, image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-red" },
    { id: "replay", title: "4K Replay Delivery", description: "Full 4K recording of the stream delivered within 24 hours as a gated on-demand asset.", icon: Zap, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600", color: "bg-brand-blue" },
  ],
};

export const LSS_STATS = {
  heading: (<>Live Streaming <br /><span className="text-brand-blue">Reach Numbers</span></>),
  quote: '"A professionally produced live stream is one of the most cost-effective ways to generate qualified pipeline at scale. One event. Global reach. Instant credibility."',
  attribution: "— Broadcast Production Team, B2B Sales Arrow",
  stats: [
    { value: "120+", label: "Live Events Broadcast", icon: Radio, bg: "bg-linear-to-br from-[#1E6091] to-[#184E77]" },
    { value: "10×", label: "Avg Audience Multiplier", icon: TrendingUp, bg: "bg-linear-to-br from-[#2A9D8F] to-[#21867A]" },
    { value: "40+", label: "Countries Reached Live", icon: Globe2, bg: "bg-linear-to-br from-[#023E8A] to-[#03045E]" },
    { value: "99.9%", label: "Stream Uptime Rate", icon: Target, bg: "bg-linear-to-br from-[#0077B6] to-[#0096C7]" },
  ],
};

export const LSS_CASE_STUDIES = {
  eyebrow: "LIVE STREAMING RESULTS",
  heading: (<>Events We Took <br /><span className="text-brand-blue">Global in Real Time</span></>),
  ctaLabel: "Full Study",
  viewAllLabel: "View All Work",
  caseStudies: [
    { id: "finserve-live", client: "FinServe SaaS", title: "Product Launch Stream Reaches 12,000 Viewers", challenge: "Physical venue capped at 200 people — global audience locked out.", solution: "Broadcast-grade LinkedIn Live stream with interactive Q&A and gated replay.", metric: "12,000", metricLabel: "Live Viewers", icon: BarChart3, image: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80&w=1200" },
    { id: "gitex-live", client: "Tech Summit Partners", title: "Conference Live Stream Generates 800 Registrations", challenge: "International prospects couldn't travel to the event.", solution: "Gated stream registration page deployed 3 weeks ahead of the event.", metric: "800+", metricLabel: "Registrations Pre-Event", icon: Users, image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200" },
  ],
};

export const LSS_TESTIMONIALS = {
  eyebrow: "CLIENT RESULTS",
  heading: (<>Events That Went <br /><span className="text-[#1E6091]">Beyond the Room</span></>),
  autoplayInterval: 3500, initialIndex: 1,
  testimonials: [
    { id: 1, name: "Elena Rodriguez", designation: "Director of Brand Activation", company: "Vortex Labs", rating: 5, quote: "Our launch event had 200 people in the room and 12,000 people watching live. B2B Sales Arrow turned a local event into a global brand moment.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Sarah Jenkins", designation: "Chief Marketing Officer", company: "Nexus Technologies", rating: 5, quote: "The technical reliability is exceptional. We've run 6 live streams with B2B Sales Arrow and never had a single dropout. That peace of mind is priceless.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Sophia Martinez", designation: "VP Marketing", company: "Elevate Logistics", rating: 5, quote: "The gated replay we launched after the live stream generated more inbound leads in the following 2 weeks than the live stream itself. Incredible asset.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" },
  ],
};

export const LSS_FAQ = {
  eyebrow: "LIVE STREAMING FAQ",
  heading: (<>Frequently Asked <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Questions</span></>),
  description: "Everything you need to know about our live streaming service.",
  scrollAmount: 340,
  faqs: [
    { id: "platforms", question: "Which platforms can you stream to?", answer: "We stream to LinkedIn Live, YouTube Live, Facebook Live, Vimeo, and custom RTMP endpoints including branded landing pages and virtual event platforms." },
    { id: "reliability", question: "How do you handle internet failure during a live stream?", answer: "We use dual bonded 4G/5G connections as primary and venue ethernet as backup. A dedicated broadcast engineer monitors signal throughout and can switch sources in under 30 seconds." },
    { id: "recording", question: "Is the stream also recorded for replay?", answer: "Yes. Every stream is simultaneously recorded in 4K locally. This master file is independent of the internet connection, ensuring you always have a perfect replay copy." },
    { id: "setup", question: "How much lead time do you need for setup?", answer: "We recommend a minimum of 2 hours for setup and testing before any live event. For large multi-camera productions, we prefer a full day of setup and rehearsal." },
    { id: "interactive", question: "Can the audience ask questions during the live stream?", answer: "Yes. We provide moderated Q&A tools, live polling, and CTA overlays. A dedicated moderator can manage audience questions and surface the best ones for on-stage response." },
  ],
};

export const LSS_CONTACT = {
  eyebrow: "STREAM YOUR NEXT EVENT",
  heading: (<>Take Your Event <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-cyan">Global</span></>),
  description: "Tell us about your event and we'll design a live streaming package that maximises your audience and pipeline.",
  illustration: { src: "/undraw_contact-us_s4jn.svg", alt: "Contact Us" },
  form: {
    firstNameLabel: "First Name", firstNamePlaceholder: "John",
    lastNameLabel: "Last Name", lastNamePlaceholder: "Doe",
    emailLabel: "Work Email", emailPlaceholder: "john@company.com",
    serviceLabel: "Event Type", servicePlaceholder: "Select event type...",
    serviceOptions: [
      { value: "conference", label: "Conference / Summit" },
      { value: "product-launch", label: "Product Launch" },
      { value: "webinar", label: "Webinar" },
      { value: "awards", label: "Awards / Gala" },
      { value: "other", label: "Other" },
    ],
    messageLabel: "Tell Us About Your Event", messagePlaceholder: "Event name, date, expected viewers, preferred platforms...",
    ctaLabel: "Get Live Streaming Quote",
  },
};
