"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "/about-us",
    subLinks: [
      { name: "Our Story", href: "/about-us" },
      { name: "Vision & Mission", href: "/vision-mission" },
      { name: "Why Choose Us", href: "/why-choose-us" },
    ]
  },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

// Remove ThemeToggle import


export function Header({ forceLightMode = false }: { forceLightMode?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="relative h-10 w-40 block transition-all duration-300 hover:opacity-80">
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

      <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {NAV_LINKS.map((link) => (
          <div key={link.name} className="relative group/nav-item py-4">
            <Link
              href={link.href}
              className={cn(
                "group relative text-sm font-medium transition-colors flex items-center gap-1.5 py-4",
                "text-brand-charcoal hover:text-brand-blue"
              )}
            >
              {link.name}
              {link.subLinks && (
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/nav-item:rotate-180 opacity-70" />
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover/nav-item:w-full" />
            </Link>

            {link.subLinks && (
              <div className="absolute top-[80%] left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:translate-y-0 group-hover/nav-item:pointer-events-auto transition-all duration-300 z-[100]">
                <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-xl p-2 min-w-[220px]">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="flex items-center justify-between px-4 py-3 text-sm font-medium text-brand-charcoal hover:bg-brand-blue/5 hover:text-brand-blue rounded-lg transition-all duration-200 group/sub"
                    >
                      {sub.name}
                      <span className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-200 text-brand-blue">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <button className={cn(
          "flex items-center gap-2 text-sm font-medium transition-colors",
          "text-brand-charcoal/70 hover:text-brand-blue"
        )}>
          <span suppressHydrationWarning className="flex items-center">
            <Globe className="w-4 h-4" />
          </span>
          <span>EN</span>
          <span suppressHydrationWarning className="flex items-center">
            <ChevronDown className="w-3 h-3" />
          </span>
        </button>

        <Link href="/contact-us">
          <button className="px-6 py-2.5 rounded text-sm font-medium bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-[0_0_15px_rgba(75,192,217,0.4)] transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </Link>
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-charcoal hover:bg-brand-gray/5 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl p-8 lg:hidden flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="space-y-4">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold font-heading text-brand-charcoal hover:text-brand-blue transition-colors block"
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-4 space-y-4 border-l-2 border-brand-blue/10">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-500 hover:text-brand-blue transition-colors block"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl mt-4">
                Let's Talk
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
