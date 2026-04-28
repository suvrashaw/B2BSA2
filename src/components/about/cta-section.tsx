"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { WhisperText } from "./whisper-text";
import { ButtonColorful } from "@/components/ui/button-colorful";

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-brand-cyan/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-8 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center mb-10">
            <WhisperText 
              text="Ready to Accelerate Your Enterprise Growth?"
              highlights={["Enterprise", "Growth?"]}
              highlightColor="blue"
              className="text-center text-4xl md:text-6xl lg:text-8xl font-heading font-bold leading-[1.05] text-brand-charcoal transition-colors duration-500"
            />
          </div>
          
          <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed mb-12 max-w-2xl mx-auto transition-colors duration-500">
            Book an appointment with our experts to discover how our premium event solutions and human-powered market intelligence can transform your business pipeline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <ButtonColorful 
              icon={<Calendar className="w-5 h-5" />}
              label="Book an Appointment"
              className="w-full sm:w-auto"
            />
            
            <ButtonColorful 
              variant="secondary"
              icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              label="Explore Services"
              className="w-full sm:w-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
