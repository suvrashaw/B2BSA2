"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WhisperText } from "@/components/about/whisper-text";

const TEAM_MEMBERS = [
  {
    name: "L N Mittal",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Global Events",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Director of Market Intelligence",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Digital Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  }
];

export const TeamGrid = () => {
  return (
    <section className="py-12 bg-brand-white relative transition-colors duration-500">
      <div className="container mx-auto px-8 w-full max-w-7xl">
        
        {/* CEO Vision / Intro */}
        <div className="mb-32 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-12 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold tracking-wide uppercase"
          >
            Team
          </motion.div>
          
          <WhisperText 
            text="In 2004, inspired by L N Mittal's philanthropy, I embarked on a journey kindled by compassion. Witnessing his remarkable contribution of INR 400 crores to build a freshwater canal in arid Rajasthan for his village, shaped the foundation of our core values and dedication to excellence."
            highlights={["compassion", "excellence", "values", "philanthropy", "remarkable"]}
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight text-brand-charcoal"
            delay={20}
            duration={1.2}
            y={50}
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-6 bg-gray-200 dark:bg-gray-800">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  suppressHydrationWarning
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal font-heading">{member.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
