"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BackgroundRippleEffect } from "@/components/about/background-ripple-effect";

export const EditorialHero = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main ref={container} className="relative h-[100vh] bg-background overflow-hidden flex flex-col justify-end pb-20 transition-colors duration-500">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-[100vh] z-0 overflow-hidden"
      >
        {/* Background Ripple Effect */}
        <BackgroundRippleEffect className="opacity-100" />
        
        {/* Subtle editorial background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] pointer-events-none transition-colors duration-500 opacity-60" />
        
        {/* Bottom blend gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </motion.div>

      <div className="relative z-10 px-8 md:px-24 w-full max-w-[1600px] mx-auto pointer-events-none">
        <motion.div 
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="overflow-hidden mb-6 flex flex-col items-start gap-4"
        >
          <h1 className="text-[8vw] md:text-[5vw] lg:text-[5.5vw] font-heading font-bold leading-[1.1] tracking-tight text-foreground m-0 transition-colors duration-500 max-w-5xl">
            We Are the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan text-balance">Growth Partner</span> Your Enterprise Deserves
          </h1>
          <p className="text-foreground/70 max-w-2xl text-lg md:text-xl leading-relaxed mt-6 font-medium transition-colors duration-500">
            B2B Sales Arrow is built for enterprise teams that need more than a vendor. We bring event strategy, video production, and market research together with accountability to results.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          style={{ transformOrigin: "left" }}
          className="w-full h-[1px] bg-gradient-to-r from-brand-blue via-brand-cyan to-transparent mt-16"
        />
        
        <div className="flex justify-between items-center mt-8 text-xs uppercase tracking-widest text-foreground/40 transition-colors duration-500">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>New York</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>Bangalore</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>Global</motion.span>
        </div>
      </div>
    </main>
  );
};
