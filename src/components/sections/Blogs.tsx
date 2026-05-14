"use client";

import { useRef, useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { HOME_BLOGS_CONTENT, type BlogItem, type BlogsContent } from "@/content/home";

import type { MotionValue } from "framer-motion";

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
    <section ref={containerRef} id="blogs" className="relative overflow-hidden bg-white py-20">
      <div className="container mx-auto px-8">
        <div className="mb-4 flex flex-col items-start text-left lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary/10 border-brand-primary/20 text-brand-primary mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold tracking-wide"
          >
            {eyebrow}
          </motion.div>
          <h2 className="font-heading text-4xl leading-tight font-bold  lg:text-5xl">{heading}</h2>
          <Link href="/blog">
            <Button variant="tertiary" className="mt-8">
              {ctaLabel}{" "}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>

        <div
          className="perspective-1000 relative mx-auto flex h-[800px] w-full max-w-3xl cursor-pointer items-center justify-center lg:h-[450px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {blogs.map((blog, index) => (
            <Link key={blog.id} href={`/blog/${blog.id}`} className="contents">
              <BlogCard
                blog={blog}
                index={index}
                total={blogs.length}
                isHovered={isHovered}
                spread={spread}
              />
            </Link>
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
        scale: isHovered ? 0.9 : 1, // Shrink slightly on hover to fit perfectly
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
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-sm  backdrop-blur-md">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-8">
        <span className="mb-3 block text-sm font-medium text-gray-500">{blog.date}</span>
        <h3 className="font-heading mb-6 text-2xl  leading-tight font-bold">{blog.title}</h3>
        <div className="text-brand-blue flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
          Read Article <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
}
