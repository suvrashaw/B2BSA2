"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { GlobalPresence } from "@/components/ui/GlobeVisualization";
import { Globe } from "@/components/ui/Globe";
import { footerNavigation, serviceNavigationGroups } from "@/content/navigation";

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Globe Animation: Start large in the center, shrink down and move up slightly
  const globeScale = useTransform(scrollYProgress, [0, 1], [1.3, 0.7]);
  const globeY = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  // Footer Content Animation: Slide up from the bottom as you scroll
  const contentY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  // Optional opacity fade for the content wrapper background so it feels like a soft overlay
  const contentBgOpacity = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);

  return (
    <footer ref={containerRef} className="bg-white h-[200vh] relative z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* 1. Global Presence Slider Section (Fixed at top) */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-12 pb-24 pointer-events-none bg-gradient-to-b from-white via-white/80 to-transparent">
          {/* We wrap it in a pointer-events-auto div to ensure it's still clickable/selectable if needed */}
          <div className="pointer-events-auto">
            <GlobalPresence />
          </div>
        </div>

        {/* 2. Interactive 3D Globe Centerpiece (Background layer) */}
        <motion.div
          style={{ scale: globeScale, y: globeY }}
          className="absolute inset-0 z-0 flex items-center justify-center origin-center"
        >
          {/* We ensure it's fully interactive when dragged */}
          <div className="w-[800px] h-[800px] flex items-center justify-center">
            <Globe />
          </div>
        </motion.div>

        {/* 3. Main Footer Links Area (Slides up from bottom) */}
        <motion.div
          style={{ y: contentY }}
          className="absolute bottom-0 left-0 right-0 z-10 w-full"
        >
          <motion.div
            style={{ opacity: contentBgOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/40 backdrop-blur-sm -z-10"
          />
          <div className="container mx-auto px-8 pt-32 pb-8 relative">
            <div className="grid lg:grid-cols-12 gap-16 mb-16">
              <div className="lg:col-span-5">
                <Link
                  href="/"
                  className="relative h-12 w-48 block mb-8 transition-opacity hover:opacity-90"
                >
                  <Image
                    src="/logo.png"
                    alt="B2B Sales Arrow"
                    fill
                    sizes="192px"
                    className="object-contain bg-white/95 px-2 py-1 rounded-md"
                  />
                </Link>
                <p className="text-gray-600 leading-relaxed mb-8 max-w-sm">
                  The premier growth partner for ambitious B2B enterprises. We design, execute, and
                  scale high-conversion physical and digital experiences globally.
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-brand-gray border border-gray-200 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-brand-gray border border-gray-200 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-brand-gray border border-gray-200 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2">
                <span className="block font-heading font-bold text-lg text-brand-charcoal mb-6">
                  Navigation
                </span>
                <ul className="space-y-4">
                  {footerNavigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-500 hover:text-brand-blue transition-colors text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <span className="block font-heading font-bold text-lg text-brand-charcoal mb-6">
                  Services
                </span>
                <div className="grid gap-4">
                  {serviceNavigationGroups.map((group) => (
                    <div key={group.name}>
                      <Link
                        href={group.href}
                        className="text-sm font-bold text-gray-600 hover:text-brand-blue transition-colors"
                      >
                        {group.name}
                      </Link>
                      {group.links.length > 0 && (
                        <ul className="mt-2 space-y-2 pl-3 border-l border-gray-200">
                          {group.links.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-xs leading-5 text-gray-400 hover:text-brand-blue transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <span className="block font-heading font-bold text-lg text-brand-charcoal mb-6">
                  Stay Ahead
                </span>
                <p className="text-sm text-gray-500 mb-4">
                  Subscribe to our enterprise growth newsletter.
                </p>
                <div className="relative pointer-events-auto">
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full bg-brand-gray border border-gray-200 rounded-lg px-4 py-3 text-brand-charcoal placeholder:text-gray-400 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-brand-blue flex items-center justify-center hover:bg-brand-cyan transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} B2B Sales Arrow. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-gray-500">
                <Link href="/privacy-policy" className="hover:text-brand-blue transition-colors">
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-brand-blue transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
                <Link href="#" className="hover:text-brand-blue transition-colors">
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
