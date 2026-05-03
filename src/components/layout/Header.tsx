"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Global Event Solutions", href: "/services/global-event-solutions" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

import { ThemeToggle } from "./ThemeToggle";

export function Header({ forceLightMode = false }: { forceLightMode?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-brand-white/95 backdrop-blur-md shadow-md border-b border-brand-charcoal/10"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="relative h-12 w-48 block transition-all duration-300 hover:opacity-80">
          <Image
            src="/logo.png"
            alt="B2B Sales Arrow"
            fill
            sizes="192px"
            priority
            suppressHydrationWarning
            className={cn(
              "object-contain transition-all duration-500",
              "dark:invert dark:brightness-200"
            )}
          />
        </Link>
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "group relative text-sm font-medium transition-colors flex items-center gap-1",
              "text-brand-charcoal hover:text-brand-blue"
            )}
          >
            {link.name}
            {link.hasDropdown && (
              <span suppressHydrationWarning className="flex items-center">
                <ChevronDown className="w-4 h-4 opacity-70" />
              </span>
            )}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-cyan transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <ThemeToggle />

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

        <button className="px-6 py-2.5 rounded text-sm font-medium bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-[0_0_15px_rgba(75,192,217,0.4)] transition-all duration-300 relative overflow-hidden group">
          <span className="relative z-10">Let's Talk</span>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </motion.header>
  );
}
