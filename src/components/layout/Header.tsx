"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

import { serviceNavigationGroups, topNavigation } from "@/content/navigation";
import { cn } from "@/lib";

// Remove ThemeToggle import

export function Header({ forceLightMode = false }: { forceLightMode?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const solidHeader = forceLightMode || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300",
        solidHeader
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="relative block h-10 w-40 transition-all duration-300 hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="B2B Sales Arrow"
            fill
            sizes="160px"
            priority
            className="object-contain"
          />
        </Link>
      </div>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
        {topNavigation.map((link) => (
          <div key={link.name} className="group/nav-item relative flex items-center py-4">
            <Link
              href={link.href}
              className={cn(
                "group relative text-sm font-medium transition-colors flex items-center gap-1.5",
                " hover:text-brand-blue"
              )}
            >
              {link.name}
              {link.name === "Services" && (
                <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover/nav-item:rotate-180" />
              )}
              <span className="bg-brand-blue absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover/nav-item:w-full" />
            </Link>

            {link.name === "Services" && (
              <div className="pointer-events-none absolute top-[80%] left-1/2 z-[100] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover/nav-item:pointer-events-auto group-hover/nav-item:translate-y-0 group-hover/nav-item:opacity-100">
                <div className="w-[880px] max-w-[calc(100vw-4rem)] rounded-lg border border-gray-100 bg-white/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-md">
                  <div className="grid grid-cols-3 gap-4">
                    {serviceNavigationGroups.map((group) => (
                      <div
                        key={group.name}
                        className="border-brand-charcoal/5 bg-brand-gray/5 rounded-lg border p-4"
                      >
                        <Link
                          href={group.href}
                          className="hover:text-brand-blue mb-3 block text-sm  font-black transition-colors"
                        >
                          {group.name}
                        </Link>
                        <div className="space-y-2">
                          {group.links.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="/60 hover:text-brand-blue block text-xs leading-5 font-semibold transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <button
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors",
            "/70 hover:text-brand-blue"
          )}
        >
          <span suppressHydrationWarning className="flex items-center">
            <Globe className="h-4 w-4" />
          </span>
          <span>EN</span>
          <span suppressHydrationWarning className="flex items-center">
            <ChevronDown className="h-3 w-3" />
          </span>
        </button>

        <Link href="/contact-us">
          <button className="bg-brand-blue hover:bg-brand-blue/90 group relative overflow-hidden rounded px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(75,192,217,0.4)]">
            <span className="relative z-10">Let&apos;s Talk</span>
            <div className="from-brand-blue to-brand-cyan absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hover:bg-brand-gray/5  rounded-full p-2 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-0 left-0 flex flex-col gap-6 border-b border-gray-100 bg-white p-8 shadow-2xl lg:hidden"
          >
            {topNavigation.map((link) => (
              <div key={link.name} className="space-y-4">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading hover:text-brand-blue block  text-2xl font-bold transition-colors"
                >
                  {link.name}
                </Link>
                {link.name === "Services" && (
                  <div className="border-brand-blue/10 space-y-4 border-l-2 pl-4">
                    {serviceNavigationGroups.map((group) => (
                      <div key={group.name} className="space-y-2">
                        <Link
                          href={group.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="hover:text-brand-blue block  text-lg font-bold transition-colors"
                        >
                          {group.name}
                        </Link>
                        {group.links.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-brand-blue block pl-4 text-base font-medium text-gray-500 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-brand-blue mt-4 w-full rounded-xl py-4 font-bold text-white">
                Let&apos;s Talk
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
