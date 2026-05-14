"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { serviceNavigationGroups, topNavigation, tradeShowLinks } from "@/content/navigation";
import { cn } from "@/lib";

// Remove ThemeToggle import

export function Header({
  forceLightMode = false,
  darkBackground = false,
}: { forceLightMode?: boolean; darkBackground?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const solidHeader = forceLightMode || scrolled;
  const lightText = darkBackground && !solidHeader;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
                lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue"
              )}
            >
              {link.name}
              {(link.name === "Services" || link.name === "Trade Shows") && (
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

            {link.name === "Trade Shows" && (
              <div className="pointer-events-none absolute top-[80%] left-1/2 z-[100] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover/nav-item:pointer-events-auto group-hover/nav-item:translate-y-0 group-hover/nav-item:opacity-100">
                <div className="w-64 rounded-lg border border-gray-100 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-md">
                  <div className="flex flex-col gap-3">
                    {tradeShowLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="hover:text-brand-blue block text-sm font-semibold transition-colors"
                      >
                        {item.name}
                      </Link>
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
            lightText ? "text-white hover:text-white/80" : "hover:text-brand-blue"
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
          <Button variant="primary" size="sm">
            Let&apos;s Talk
          </Button>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "rounded-full p-2 transition-colors hover:bg-brand-gray/5",
              lightText ? "text-white" : ""
            )}
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
                  onClick={closeMobileMenu}
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
                          onClick={closeMobileMenu}
                          className="hover:text-brand-blue block  text-lg font-bold transition-colors"
                        >
                          {group.name}
                        </Link>
                        {group.links.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={closeMobileMenu}
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
            <Link href="/contact-us" onClick={closeMobileMenu}>
              <Button variant="primary" className="mt-4 w-full">
                Let&apos;s Talk
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
