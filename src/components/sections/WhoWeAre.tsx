"use client";

import Icon from "@/components/ui/Icon";
import { HOME_WHO_WE_ARE_CONTENT, type WhoWeAreContent, type WhoWeAreStat } from "@/content/home";

function StatCard({ stat }: { stat: WhoWeAreStat }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[4px] p-8 shadow-lg ${stat.bg} border border-transparent text-white`}
    >
      <div className="relative z-10">
        <div className="mb-4 text-sm font-bold opacity-90">{stat.label}</div>
        <div className="flex items-center justify-between">
          <div className="font-heading text-4xl font-bold">{stat.value}</div>
          <Icon name={stat.icon} className="h-6 w-6 opacity-50" />
        </div>
      </div>
    </div>
  );
}

export interface WhoWeAreProps {
  content?: WhoWeAreContent;
  heading?: WhoWeAreContent["heading"];
  quote?: WhoWeAreContent["quote"];
  attribution?: WhoWeAreContent["attribution"];
  stats?: WhoWeAreStat[];
}

export function WhoWeAre({
  content = HOME_WHO_WE_ARE_CONTENT,
  heading = content.heading,
  quote = content.quote,
  attribution = content.attribution,
  stats = content.stats,
}: WhoWeAreProps = {}) {
  const col1Stats = [...stats, ...stats];
  const offsetStats = [...stats.slice(3), ...stats.slice(0, 3)];
  const col2Stats = [...offsetStats, ...offsetStats];

  return (
    <section id="about" className="overflow-hidden bg-white py-20">
      <div className="container mx-auto grid items-center gap-16 px-8 lg:grid-cols-2">
        {/* Left Side: Content */}
        <div className="flex flex-col items-start space-y-12 text-left">
          <div className="w-full text-left">
            <h2 className="font-heading mb-6 text-4xl font-bold  lg:text-5xl">{heading}</h2>
          </div>

          <div className="w-full">
            <div className="bg-brand-gray/50 group hover:border-brand-blue/20 hover:bg-brand-blue/5 cursor-default rounded-3xl border border-transparent p-8 transition-all duration-500 hover:shadow-2xl lg:p-12">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="group-hover:text-brand-blue:text-brand-cyan font-serif text-xl leading-relaxed text-black italic transition-colors duration-500 md:text-3xl">
                  {quote}
                </p>
                <div className="group-hover:text-brand-blue/70 mt-8 text-sm font-bold tracking-widest text-gray-500 uppercase transition-colors">
                  {attribution}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Insights */}
        <div className="group/scroller relative h-[600px] overflow-hidden p-4">
          {/* Top/Bottom Fade Masks */}
          <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-16 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-16 bg-gradient-to-t from-white to-transparent" />

          <div className="relative grid h-full grid-cols-2 gap-6">
            {/* Column 1 - Scroll Up */}
            <div className="animate-scroll-up flex flex-col gap-6 pb-6 group-hover/scroller:[animation-play-state:paused]">
              {col1Stats.map((stat, i) => (
                <StatCard key={i} stat={stat} />
              ))}
            </div>

            {/* Column 2 - Scroll Down */}
            <div className="animate-scroll-down flex flex-col gap-6 pb-6 group-hover/scroller:[animation-play-state:paused]">
              {col2Stats.map((stat, i) => (
                <StatCard key={i} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
