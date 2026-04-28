"use client";

import { motion } from "framer-motion";
import { ArrowRight, Presentation, MonitorPlay, Rocket, Users, Lightbulb } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  {
    id: "booth-design",
    title: "Event Booth Design",
    description: "Architectural, immersive exhibition spaces engineered to dominate trade show floors.",
    icon: Presentation,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600",
    color: "bg-brand-blue",
  },
  {
    id: "media",
    title: "Media Production",
    description: "Cinematic brand storytelling and high-fidelity corporate content that builds authority.",
    icon: MonitorPlay,
    image: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=1600",
    color: "bg-brand-cyan",
  },
  {
    id: "digital",
    title: "Digital Marketing",
    description: "Data-driven growth architectures designed to scale enterprise pipeline.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    color: "bg-brand-red",
  },
  {
    id: "lead-gen",
    title: "Lead Generation",
    description: "Precision-targeted acquisition strategies for high-value B2B accounts.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    color: "bg-brand-blue",
  },
  {
    id: "brand",
    title: "Brand Activation",
    description: "Strategic positioning and identity frameworks that outmaneuver competitors.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
    color: "bg-brand-cyan",
  },
];

export function OurServices() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-[#212529]">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-start text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-blue dark:text-brand-cyan text-sm font-semibold tracking-wide"
          >
            OUR CAPABILITIES
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-charcoal dark:text-white leading-tight">
            Strategic Disciplines for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Enterprise Dominance
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 relative">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="sticky"
              style={{
                top: `calc(150px + ${index * 40}px)`,
                zIndex: index,
              }}
            >
              <div className="bg-brand-gray dark:bg-[#1a1c1e] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[400px] relative group/card">
                
                {/* Content Area */}
                <div className="w-full md:w-2/5 p-8 lg:p-12 flex flex-col justify-between relative z-10 pointer-events-none transition-all duration-700">
                  <div className={`absolute left-0 top-0 bottom-0 w-2 ${service.color}`} />
                  
                  <div className="pointer-events-auto">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="px-3 py-1 bg-white dark:bg-[#212529] border border-gray-100 dark:border-gray-800 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm flex items-center gap-2 transition-colors duration-700 md:group-has-[.image-pane:hover]/card:bg-white/20 md:group-has-[.image-pane:hover]/card:text-white md:group-has-[.image-pane:hover]/card:border-transparent md:group-has-[.image-pane:hover]/card:backdrop-blur-md">
                        <service.icon className="w-3 h-3 text-brand-blue md:group-has-[.image-pane:hover]/card:text-white transition-colors duration-700" />
                        Service
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-brand-charcoal dark:text-white mb-6 leading-tight transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-white drop-shadow-md">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-gray-200 drop-shadow-md">
                      {service.description}
                    </p>
                  </div>

                  <button className="mt-10 md:mt-0 px-6 py-3 rounded-lg bg-brand-charcoal text-white hover:bg-brand-blue transition-all duration-700 flex items-center justify-between group pointer-events-auto w-max md:group-has-[.image-pane:hover]/card:bg-brand-blue md:group-has-[.image-pane:hover]/card:shadow-xl shadow-md">
                    <span className="mr-4">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Image Area */}
                <div className="w-full h-64 md:absolute md:right-0 md:top-0 md:bottom-0 md:w-3/5 md:h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hover:w-full z-0 group/image cursor-pointer image-pane">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 md:group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-brand-gray/80 dark:to-[#1a1c1e]/80 md:group-hover/image:opacity-0 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 md:group-hover/image:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
