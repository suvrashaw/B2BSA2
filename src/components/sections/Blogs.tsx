"use client";

import { useRef, useState } from "react";

import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { BlogCard, BlogCardGrid } from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/Button";
import { HOME_BLOGS_CONTENT, type BlogsContent } from "@/content/home";

export interface BlogsProps {
  content?: BlogsContent;
  eyebrow?: BlogsContent["eyebrow"];
  heading?: BlogsContent["heading"];
  ctaLabel?: BlogsContent["ctaLabel"];
  blogs?: BlogsContent["blogs"];
  layout?: "deck" | "grid";
}

export function Blogs({
  content = HOME_BLOGS_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  ctaLabel = content.ctaLabel,
  blogs = content.blogs,
  layout = "deck",
}: BlogsProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

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

        {layout === "grid" ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`}>
                <BlogCardGrid blog={blog} />
              </Link>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
