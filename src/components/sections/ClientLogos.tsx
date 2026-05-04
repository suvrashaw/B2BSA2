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

const SingleStoreLogo = () => (
  <div className="flex items-center gap-1.5 transition-all duration-300 hover:scale-125 cursor-pointer">
    <div className="w-4 h-4 bg-[#8C1AF6] rounded-full flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-white rounded-full" />
    </div>
    <span className="text-[#1A1A1A] font-sans text-xl tracking-tight">
      Single<span className="font-bold">Store</span>
    </span>
  </div>
);

const TemenosLogo = () => (
  <span className="font-sans font-extrabold text-[22px] tracking-tighter text-[#004b87] lowercase transition-all duration-300 hover:scale-125 cursor-pointer">
    temenos
  </span>
);

const WorldpayLogo = () => (
  <span className="font-sans font-bold text-[22px] tracking-tight text-[#E31837] lowercase transition-all duration-300 hover:scale-125 cursor-pointer">
    worldpay
  </span>
);

const SyngeneLogo = () => (
  <span className="font-serif font-bold italic text-[22px] tracking-tight text-[#008272] transition-all duration-300 hover:scale-125 cursor-pointer">
    Syngene
  </span>
);

const AirtelLogo = () => (
  <div className="flex items-center gap-1.5 transition-all duration-300 hover:scale-125 cursor-pointer">
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#ff0000]">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
        opacity="0.8"
      />
    </svg>
    <span className="font-sans font-bold text-[24px] tracking-tighter text-[#ff0000] lowercase">
      airtel
    </span>
  </div>
);

const InfosysLogo = () => (
  <span className="font-sans font-light text-[22px] tracking-widest text-[#007CC3] transition-all duration-300 hover:scale-125 cursor-pointer">
    Infosys
  </span>
);

const StrategyLabel = () => (
  <span className="font-sans font-bold text-[18px] tracking-wide text-[#1E6091] uppercase transition-all duration-300 hover:scale-125 cursor-pointer">
    Strategy
  </span>
);

const EventsLabel = () => (
  <span className="font-sans font-bold text-[18px] tracking-wide text-[#2A9D8F] uppercase transition-all duration-300 hover:scale-125 cursor-pointer">
    Events
  </span>
);

const MediaLabel = () => (
  <span className="font-sans font-bold text-[18px] tracking-wide text-[#E63946] uppercase transition-all duration-300 hover:scale-125 cursor-pointer">
    Media
  </span>
);

const LeadGenLabel = () => (
  <span className="font-sans font-bold text-[18px] tracking-wide text-[#023E8A] uppercase transition-all duration-300 hover:scale-125 cursor-pointer">
    Lead Generation
  </span>
);

const SEOLabel = () => (
  <span className="font-sans font-bold text-[18px] tracking-wide text-[#0077B6] uppercase transition-all duration-300 hover:scale-125 cursor-pointer">
    SEO
  </span>
);

const ResearchLabel = () => (
  <span className="font-sans font-bold text-[18px] tracking-wide text-[#457B9D] uppercase transition-all duration-300 hover:scale-125 cursor-pointer">
    Research
  </span>
);

const DataLabel = () => (
  <span className="font-sans font-bold text-[18px] tracking-wide text-[#2A9D8F] uppercase transition-all duration-300 hover:scale-125 cursor-pointer">
    Data
  </span>
);

const LOGO_COMPONENTS: Record<string, React.FC> = {
  singlestore: SingleStoreLogo,
  temenos: TemenosLogo,
  worldpay: WorldpayLogo,
  syngene: SyngeneLogo,
  airtel: AirtelLogo,
  infosys: InfosysLogo,
  strategy: StrategyLabel,
  events: EventsLabel,
  media: MediaLabel,
  "lead-gen": LeadGenLabel,
  seo: SEOLabel,
  research: ResearchLabel,
  data: DataLabel,
};

const LogosRow = ({ logos }: { logos: ClientLogoItem[] }) => (
  <>
    {logos.map((logo) => {
      const LogoComp = LOGO_COMPONENTS[logo.id];
      return (
        <Fragment key={logo.id}>
          {LogoComp ? <LogoComp /> : <span className="text-gray-400 font-bold">{logo.id}</span>}
        </Fragment>
      );
    })}
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
        className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)](0,0,0,0.5)] py-6 border border-gray-100 pointer-events-auto overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onWheel={handleWheel}
      >
        {/* Gradient Masks to make the edges fade smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
