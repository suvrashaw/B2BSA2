"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { WhisperText } from "./whisper-text";
import { MapPin } from "lucide-react";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const LOCATIONS = [
  { lat: 40.7128, lng: -74.006, name: "New York", size: 0.1, color: "#1E6091" },
  { lat: 12.9716, lng: 77.5946, name: "Bangalore", size: 0.1, color: "#4BC0D9" },
  { lat: 51.5074, lng: -0.1278, name: "London", size: 0.05, color: "#B23A48" },
  { lat: 1.3521, lng: 103.8198, name: "Singapore", size: 0.05, color: "#1E6091" },
  { lat: 25.2048, lng: 55.2708, name: "Dubai", size: 0.05, color: "#4BC0D9" },
];

export const GlobalPresence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [globeReady, setGlobeReady] = useState(false);
  const globeRef = useRef<any>();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.5;
      globeRef.current.controls().enableZoom = false;
    }
  }, [globeReady]);

  return (
    <section 
      ref={containerRef}
      className="py-12 bg-brand-white text-brand-charcoal relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,192,217,0.1)_0%,transparent_70%)]" />

      <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-semibold tracking-wide uppercase">
            Global Presence
          </div>
          
          <WhisperText 
            text="Global Capability. \n Local Expertise."
            highlights={["Expertise"]}
            highlightColor="blue"
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-brand-charcoal transition-colors duration-500"
          />
          
          <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed mb-10 transition-colors duration-500">
            Based in New York and Bangalore, we are a globally trusted Marketing Technology company serving top-tier enterprises across 40+ countries. Our footprint allows us to deliver human-powered market intelligence worldwide.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-brand-charcoal transition-colors duration-500">New York, USA</h3>
                <p className="text-sm text-brand-charcoal/70 transition-colors duration-500">Global Headquarters</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-brand-charcoal transition-colors duration-500">Bangalore, IND</h3>
                <p className="text-sm text-brand-charcoal/70 transition-colors duration-500">Asia Pacific Hub & Delivery Center</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] lg:h-[850px] w-full flex items-center justify-center cursor-move lg:-translate-x-12"
        >
          <div className="absolute inset-0 w-full h-full">
            <Globe
              ref={globeRef}
              onGlobeReady={() => setGlobeReady(true)}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundColor="rgba(0,0,0,0)"
              pointsData={LOCATIONS}
              pointLat="lat"
              pointLng="lng"
              pointColor="color"
              pointAltitude="size"
              pointRadius={0.5}
              pointsMerge={true}
              htmlElementsData={LOCATIONS}
              htmlElement={(d: any) => {
                const el = document.createElement('div');
                el.innerHTML = `
                  <div class="flex items-center gap-2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div class="w-2 h-2 rounded-full bg-[${d.color}] shadow-[0_0_10px_${d.color}] animate-pulse"></div>
                    <span class="text-xs font-bold text-white whitespace-nowrap bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">${d.name}</span>
                  </div>
                `;
                return el;
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
