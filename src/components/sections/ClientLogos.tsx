"use client";

import { Fragment, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";
import {
  HOME_CLIENT_LOGOS,
  type ClientLogoItem,
} from "./home-section-content";

export interface ClientLogosProps {
  logos?: ClientLogoItem[];
  speed?: number;
  wheelSpeed?: number;
}

function useLogoMarquee(speed: number, wheelSpeed: number) {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      // Move 4% every second
      const moveBy = speed * (delta / 1000);
      baseX.set(baseX.get() - moveBy);
    }
  });

  // Smoothly wrap the percentage between -50% and 0%
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const handleWheel = (e: React.WheelEvent) => {
    // Determine scroll direction/amount
    const scrollAmount = e.deltaX !== 0 ? e.deltaX : e.deltaY;
    // Map pixels to a rough percentage for smoothness
    baseX.set(baseX.get() - scrollAmount * wheelSpeed);
  };

  return { handleWheel, setIsHovered, x };
}

const LogosRow = ({ logos }: { logos: ClientLogoItem[] }) => (
  <>
    {logos.map((logo) => (
      <Fragment key={logo.id}>{logo.render()}</Fragment>
    ))}
  </>
);

export function ClientLogos({
  logos = HOME_CLIENT_LOGOS,
  speed = 4,
  wheelSpeed = 0.05,
}: ClientLogosProps = {}) {
  const { handleWheel, setIsHovered, x } = useLogoMarquee(speed, wheelSpeed);

  return (
    <div className="relative z-30 -mt-16 mx-auto container max-w-6xl px-4 md:px-8 pointer-events-none">
      <div 
        className="bg-white dark:bg-[#1a1c1e] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] py-6 border border-gray-100 dark:border-gray-800 pointer-events-auto overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onWheel={handleWheel}
      >
        {/* Gradient Masks to make the edges fade smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-[#1a1c1e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-[#1a1c1e] to-transparent z-10 pointer-events-none" />

        <motion.div style={{ x }} className="flex w-max cursor-grab active:cursor-grabbing">
          {/* We render the row twice so it seamlessly loops when it translates -50% */}
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            <LogosRow logos={logos} />
          </div>
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            <LogosRow logos={logos} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
