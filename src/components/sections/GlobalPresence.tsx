"use client";

import { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";

import { motion, useInView } from "framer-motion";

import { WhisperText } from "@/components/ui/WhisperText";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export type LocationItem = {
  lat: number;
  lng: number;
  name: string;
  size: number;
  color: string;
};

export interface GlobalPresenceData {
  title: string;
  description: string;
  cities: LocationItem[];
}

export const GlobalPresence = ({ data }: { data: GlobalPresenceData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [globeReady, setGlobeReady] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null);

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
      className="relative overflow-hidden  bg-brand-white py-12 transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(75,192,217,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 container mx-auto grid grid-cols-1 gap-16 px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex max-w-2xl flex-col items-start text-left"
        >
          <div className="mb-6 inline-block rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-cyan uppercase">
            Global Presence
          </div>

          <WhisperText
            text={data.title}
            highlights={[data.title.split(" ")[0] || ""]}
            highlightColor="blue"
            className="mb-8 font-heading text-4xl leading-[1.1] font-bold transition-colors duration-500  md:text-5xl lg:text-7xl"
          />

          <p className="/70 mb-10 text-lg leading-relaxed font-bold tracking-widest uppercase transition-colors duration-500 md:text-xl">
            {data.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex h-[500px] w-full cursor-move items-center justify-center lg:h-[850px] lg:-translate-x-48"
        >
          <div className="absolute inset-0 h-full w-full">
            <Globe
              ref={globeRef}
              onGlobeReady={() => setGlobeReady(true)}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundColor="rgba(0,0,0,0)"
              pointsData={data.cities}
              pointLat="lat"
              pointLng="lng"
              pointColor="color"
              pointAltitude="size"
              pointRadius={0.5}
              pointsMerge={true}
              htmlElementsData={data.cities}
              htmlElement={(d: object) => {
                const item = d as LocationItem;
                const el = document.createElement("div");
                el.innerHTML = `
                  <div class="flex items-center gap-2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div class="w-2 h-2 rounded-full bg-[${item.color}] shadow-[0_0_10px_${item.color}] animate-pulse"></div>
                    <span class="text-xs font-bold text-white whitespace-nowrap bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">${item.name}</span>
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
