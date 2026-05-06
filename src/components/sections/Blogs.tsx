"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { MotionValue } from "framer-motion";
import {
  HOME_BLOGS_CONTENT,
  type BlogItem,
  type BlogsContent,
} from "@/content/home";

export interface BlogsProps {
  content?: BlogsContent;
  eyebrow?: BlogsContent["eyebrow"];
  heading?: BlogsContent["heading"];
  ctaLabel?: BlogsContent["ctaLabel"];
  blogs?: BlogsContent["blogs"];
}

export function Blogs({
  content = HOME_BLOGS_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  ctaLabel = content.ctaLabel,
  blogs = content.blogs,
}: BlogsProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Calculate fan out based on scroll when NOT hovered
  const spread = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="blogs" className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-start text-left mb-4 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-semibold tracking-wide"
          >
            {eyebrow}
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight">
            {heading}
          </h2>
          <button className="mt-8 flex items-center gap-2 text-brand-charcoal font-semibold hover:text-brand-red:text-brand-red transition-all duration-300 group">
            {ctaLabel} <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div 
          className="relative h-[800px] lg:h-[450px] w-full max-w-3xl mx-auto flex items-center justify-center cursor-pointer perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              total={blogs.length}
              isHovered={isHovered}
              spread={spread}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function BlogCard({
  blog,
  index,
  total,
  isHovered,
  spread,
}: {
  blog: BlogItem;
  index: number;
  total: number;
  isHovered: boolean;
  spread: MotionValue<number>;
}) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const relativeIndex = index - (total - 1) / 2;
  const rotationOffset = relativeIndex * 8; // -8, 0, 8
  const xOffset = relativeIndex * 40; // -40, 0, 40
  const yOffset = relativeIndex * -20; // 20, 0, -20

  const rotate = useTransform(spread, (s) => s * rotationOffset);
  const x = useTransform(spread, (s) => s * xOffset);
  const y = useTransform(spread, (s) => s * yOffset);

  // Side-by-side spread distance when hovered
  const hoverX = relativeIndex * 410;
  // Vertical spread distance for mobile
  const hoverY = relativeIndex * 300;

  return (
    <motion.div
      style={{
        rotate: isHovered ? 0 : rotate,
        x: isHovered ? (isMobile ? 0 : hoverX) : x,
        y: isHovered ? (isMobile ? hoverY : 0) : y,
        zIndex: index,
      }}
      animate={{
        scale: isHovered ? 0.9 : 1, // Shrink slightly on hover to fit perfectly
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform-gpu"
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
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-brand-charcoal shadow-sm">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-8">
        <span className="text-sm text-gray-500 font-medium mb-3 block">{blog.date}</span>
        <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-6 leading-tight">
          {blog.title}
        </h3>
        <div className="flex items-center text-brand-blue font-semibold text-sm uppercase tracking-widest gap-2">
          Read Article <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
