"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import { motion, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { BlogItem } from "@/content/home";

import type { MotionValue } from "framer-motion";

export function BlogCardGrid({ blog }: { blog: BlogItem }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-sm backdrop-blur-md">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <span className="mb-2 block text-sm font-medium text-gray-500">{blog.date}</span>
        <h3 className="font-heading mb-4 text-lg leading-snug font-bold">{blog.title}</h3>
        <div className="text-brand-blue flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
          Read Article{" "}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}

export interface BlogCardProps {
  blog: BlogItem;
  index: number;
  total: number;
  isHovered: boolean;
  spread: MotionValue<number>;
}

export function BlogCard({ blog, index, total, isHovered, spread }: BlogCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const relativeIndex = index - (total - 1) / 2;
  const rotationOffset = relativeIndex * 8;
  const xOffset = relativeIndex * 40;
  const yOffset = relativeIndex * -20;

  const rotate = useTransform(spread, (s) => s * rotationOffset);
  const x = useTransform(spread, (s) => s * xOffset);
  const y = useTransform(spread, (s) => s * yOffset);

  const hoverX = relativeIndex * 410;
  const hoverY = relativeIndex * 300;

  const activeX = isMobile ? 0 : hoverX;
  const activeY = isMobile ? hoverY : 0;

  return (
    <motion.div
      style={{
        rotate: isHovered ? 0 : rotate,
        x: isHovered ? activeX : x,
        y: isHovered ? activeY : y,
        zIndex: index,
      }}
      animate={{
        scale: isHovered ? 0.9 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute w-full max-w-md transform-gpu overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl"
    >
      <div className="relative h-56 w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-sm backdrop-blur-md">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-8">
        <span className="mb-3 block text-sm font-medium text-gray-500">{blog.date}</span>
        <h3 className="font-heading mb-6 text-2xl leading-tight font-bold">{blog.title}</h3>
        <div className="text-brand-blue flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
          Read Article <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
}
