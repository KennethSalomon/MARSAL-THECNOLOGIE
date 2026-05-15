"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type GalleryProduct = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  accent?: string;
};

export default function GalleryAnimation({ products = [] }: { products?: GalleryProduct[] }) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} style={{ perspective: 1200 }} className="w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => {
          const rotateY = useTransform(scrollYProgress, [0, 1], [20 - i * 6, -20 + i * 6]);
          const rotateX = useTransform(scrollYProgress, [0, 1], [8 - i * 1.5, -8 + i * 1.5]);
          const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
          const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

          return (
            <motion.div
              key={i}
              style={{ rotateY, rotateX, opacity, y, transformStyle: "preserve-3d" }}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-obsidian/90 border border-obsidian/5 dark:border-white/10"
            >
              <div className="w-full h-56 bg-gray-100 dark:bg-black/20">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
                ) : (
                  <div className="w-full h-56 flex items-center justify-center text-silver-marsal/60">No image</div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                {p.subtitle && <div className="text-sm text-silver-marsal/70 mb-3">{p.subtitle}</div>}
                <p className="text-sm text-silver-marsal/80 dark:text-silver-marsal/60 mb-4">{p.description}</p>
                {p.accent && <div className="inline-block px-3 py-1 text-xs rounded-full bg-cyan-marsal/10 text-cyan-marsal">{p.accent}</div>}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
