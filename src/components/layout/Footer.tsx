"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import { Button } from "@/components/ui/Button";
import { Globe } from "@/components/ui/Globe";
import { GlobalPresence } from "@/components/ui/GlobeVisualization";
import { footerNavigation, footerServiceGroups } from "@/content/navigation";

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
    <footer ref={containerRef} className="bg-brand-blue relative z-0 h-[200vh]">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden">
        {/* 1. Global Presence Slider Section (Fixed at top) */}
        <div className="from-brand-blue via-brand-blue/80 pointer-events-none absolute top-0 right-0 left-0 z-20 bg-linear-to-b to-transparent pt-12 pb-24">
          {/* We wrap it in a pointer-events-auto div to ensure it's still clickable/selectable if needed */}
          <div className="pointer-events-auto">
            <GlobalPresence />
          </div>
        </div>

        {/* 2. Interactive 3D Globe Centerpiece (Background layer) */}
        <motion.div
          style={{ scale: globeScale, y: globeY }}
          className="absolute inset-0 z-0 flex origin-center items-center justify-center"
        >
          {/* We ensure it's fully interactive when dragged */}
          <div className="flex h-[800px] w-[800px] items-center justify-center">
            <Globe />
          </div>
        </motion.div>

        {/* 3. Main Footer Links Area (Slides up from bottom) */}
        <motion.div
          style={{ y: contentY }}
          className="absolute right-0 bottom-0 left-0 z-10 w-full"
        >
          <motion.div
            style={{ opacity: contentBgOpacity }}
            className="from-brand-blue via-brand-blue/95 to-brand-blue/40 absolute inset-0 -z-10 bg-linear-to-t backdrop-blur-sm"
          />
          <div className="relative container mx-auto px-8 pt-32 pb-8">
            {/* Row 1: Brand + Navigation + Stay Ahead */}
            <div className="mb-12 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Link
                  href="/"
                  className="relative mb-8 block h-12 w-48 transition-opacity hover:opacity-90"
                >
                  <Image
                    src="/logo.png"
                    alt="B2B Sales Arrow"
                    fill
                    sizes="192px"
                    className="rounded-md bg-transparent object-contain object-left brightness-0 invert"
                  />
                </Link>
                <p className="mb-8 max-w-sm text-sm leading-relaxed text-gray-400">
                  Turn your next trade show into a revenue engine. We design immersive exhibition
                  booths and execute data-driven event marketing strategies that deliver measurable
                  enterprise pipeline.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="bg-brand-gray text-brand-blue hover:bg-brand-blue hover:border-brand-blue flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:text-white"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="bg-brand-gray text-brand-blue hover:bg-brand-blue hover:border-brand-blue flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:text-white"
                  >
                    <FaTwitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="bg-brand-gray text-brand-blue hover:bg-brand-blue hover:border-brand-blue flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:text-white"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2">
                <span className="mb-4 block text-xs font-semibold tracking-widest text-gray-500 uppercase">
                  Navigation
                </span>
                <ul className="space-y-3">
                  {footerNavigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4">
                <span className="mb-4 block text-xs font-semibold tracking-widest text-gray-500 uppercase">
                  Stay Ahead
                </span>
                <p className="mb-4 text-sm text-gray-500">
                  Subscribe to our enterprise growth newsletter.
                </p>
                <div className="pointer-events-auto relative">
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="focus:border-brand-primary w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors placeholder:text-gray-500 focus:outline-none"
                  />
                  <Button
                    variant="primary"
                    size="icon"
                    className="absolute top-1/2 right-2 h-8 w-8 -translate-y-1/2"
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Row 2: Services — 4 equal columns */}
            <div className="mb-12 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-4">
              {footerServiceGroups.map((group) => (
                <div key={group.name}>
                  <Link
                    href={group.href}
                    className="hover:text-brand-blue mb-3 block text-sm font-semibold text-white transition-colors"
                  >
                    {group.name}
                  </Link>
                  <ul className="space-y-1.5 border-l border-white/10 pl-3">
                    {group.links.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="hover:text-brand-primary text-xs leading-5 text-gray-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pointer-events-auto flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} B2B Sales Arrow. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-gray-500">
                <Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-brand-primary transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
                <Link href="#" className="hover:text-brand-primary transition-colors">
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
