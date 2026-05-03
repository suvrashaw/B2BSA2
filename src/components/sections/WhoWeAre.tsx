"use client";

import { Target, TrendingUp, Users, Globe2 } from "lucide-react";


const STATS = [
  { value: "250+", label: "Global Events Executed", icon: Globe2, bg: "bg-gradient-to-br from-[#1E6091] to-[#184E77]" },
  { value: "$1.2B", label: "Pipeline Generated", icon: TrendingUp, bg: "bg-gradient-to-br from-[#2A9D8F] to-[#21867A]" },
  { value: "40+", label: "Countries Served", icon: Target, bg: "bg-gradient-to-br from-[#023E8A] to-[#03045E]" },
  { value: "15k+", label: "Enterprise Leads", icon: Users, bg: "bg-gradient-to-br from-[#1b5e82] to-[#164e6b]" },
  { value: "98%", label: "Client Retention", icon: Target, bg: "bg-gradient-to-br from-[#306f75] to-[#255c61]" },
  { value: "500+", label: "Booth Designs", icon: Globe2, bg: "bg-gradient-to-br from-[#0077B6] to-[#0096C7]" },
];

function HoverCard({ stat }: { stat: typeof STATS[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative p-8 rounded-[4px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden group/card ${stat.bg} text-white hover:bg-white hover:bg-none dark:hover:bg-[#1a1c1e] border border-transparent hover:border-red-500`}
    >
      {/* Dynamic Red Radial Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(239, 68, 68, 0.25),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-sm font-bold opacity-90 mb-4 group-hover/card:text-red-600 transition-colors">{stat.label}</div>
        <div className="flex items-center justify-between">
          <div className="text-4xl font-heading font-bold group-hover/card:text-red-600 transition-colors">{stat.value}</div>
          <stat.icon className="w-6 h-6 opacity-50 group-hover/card:opacity-100 group-hover/card:text-red-600 transition-colors" />
        </div>
      </div>
    </div>
  );
}

export function WhoWeAre() {
  const col1Stats = [...STATS, ...STATS];
  const offsetStats = [...STATS.slice(3), ...STATS.slice(0, 3)];
  const col2Stats = [...offsetStats, ...offsetStats];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#212529] overflow-hidden">
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-12 flex flex-col items-start text-left">
          <div className="w-full text-left">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-charcoal dark:text-white mb-6">
              Engineering Growth for <br />
              <span className="text-brand-blue dark:text-brand-cyan">Global Innovators</span>
            </h2>
          </div>

          <div className="w-full">
            <div className="p-8 lg:p-12 rounded-3xl bg-brand-gray/50 dark:bg-[#1a1c1e] hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-brand-blue/20 hover:bg-brand-blue/5 cursor-default">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-xl md:text-3xl font-serif italic text-black dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors duration-500 leading-relaxed">
                  &quot;Our mission is to transform how B2B brands connect with their audiences through innovative, immersive experiences that drive measurable business results.&quot;
                </p>
                <div className="mt-8 text-sm font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-blue/70 transition-colors">
                  — Leadership Team, B2B Sales Arrow
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Insights */}
        <div className="relative h-[600px] overflow-hidden p-4 group/scroller">
          {/* Top/Bottom Fade Masks */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-[#212529] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#212529] to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-2 gap-6 h-full relative">
            {/* Column 1 - Scroll Up */}
            <div className="flex flex-col gap-6 pb-6 animate-scroll-up group-hover/scroller:[animation-play-state:paused]">
              {col1Stats.map((stat, i) => (
                <HoverCard key={i} stat={stat} />
              ))}
            </div>

            {/* Column 2 - Scroll Down */}
            <div className="flex flex-col gap-6 pb-6 animate-scroll-down group-hover/scroller:[animation-play-state:paused]">
              {col2Stats.map((stat, i) => (
                <HoverCard key={i} stat={stat} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
