"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { MotionValue } from "framer-motion";

const BLOGS = [
  {
    id: 1,
    title: "The Future of Experiential B2B Marketing",
    category: "Strategy",
    date: "Oct 12, 2025",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Why Standard Trade Show Booths Are Failing",
    category: "Design",
    date: "Sep 28, 2025",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Architecting a High-Converting Media Strategy",
    category: "Media",
    date: "Sep 15, 2025",
    image: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800",
  },
];

export function Blogs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Calculate fan out based on scroll when NOT hovered
  const spread = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="blogs" className="relative py-20 bg-white dark:bg-[#212529] overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-start text-left mb-4 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-semibold tracking-wide"
          >
            INSIGHTS & INTELLIGENCE
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-charcoal dark:text-white leading-tight">
            Thought Leadership for <br />
            <span className="text-brand-red">Modern Growth</span>
          </h2>
          <button className="mt-8 flex items-center gap-2 text-brand-charcoal dark:text-white font-semibold hover:text-brand-red dark:hover:text-brand-red transition-all duration-300 group">
            Explore Intelligence <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div 
          className="relative h-[800px] lg:h-[450px] w-full max-w-3xl mx-auto flex items-center justify-center cursor-pointer perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {BLOGS.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              total={BLOGS.length}
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
  blog: any;
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

  const isFront = index === total - 1;
  const rotationOffset = (index - 1) * 8; // -8, 0, 8
  const xOffset = (index - 1) * 40; // -40, 0, 40
  const yOffset = (index - 1) * -20; // 20, 0, -20

  const rotate = useTransform(spread, (s) => s * rotationOffset);
  const x = useTransform(spread, (s) => s * xOffset);
  const y = useTransform(spread, (s) => s * yOffset);

  // Side-by-side spread distance when hovered
  const hoverX = (index - 1) * 410;
  // Vertical spread distance for mobile
  const hoverY = (index - 1) * 300;

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
      className="absolute w-full max-w-md bg-white dark:bg-[#1a1c1e] rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden transform-gpu"
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
          <span className="px-3 py-1 bg-white/90 dark:bg-[#212529]/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-brand-charcoal dark:text-white shadow-sm">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-8">
        <span className="text-sm text-gray-500 font-medium mb-3 block">{blog.date}</span>
        <h3 className="font-heading text-2xl font-bold text-brand-charcoal dark:text-white mb-6 leading-tight">
          {blog.title}
        </h3>
        <div className="flex items-center text-brand-blue dark:text-brand-cyan font-semibold text-sm uppercase tracking-widest gap-2">
          Read Article <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
