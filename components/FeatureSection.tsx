"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800",
  "https://images.unsplash.com/photo-1622322046484-88484a923576?q=80&w=800",
  "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
];

export default function FeatureSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // Auto-scroll every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-black py-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="text-cyan-500 dark:text-cyan-400 font-mono tracking-wider text-xs mb-4 block">
            // INTELLIGENCE INVISIBLE
          </span>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            Redéfinissez l'immersion technologique au quotidien.
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
            Nos solutions domotiques et de sécurité s'intègrent de manière monolithique à vos espaces. Une gestion centralisée, intelligente et fluide pour un confort sans compromis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#catalogue" className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-cyan-500/10 flex items-center justify-center gap-2">
              Découvrir nos solutions
              <ArrowRight size={18} />
            </a>
            <a href="#avantages" className="border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 px-6 py-3 rounded-xl font-medium transition-all">
              En savoir plus
            </a>
          </div>
        </motion.div>

        {/* Right Column - Premium Frame with Auto Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Premium Frame */}
          <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800/60 bg-neutral-50 dark:bg-neutral-900/30 h-[400px] md:h-[500px] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Feature ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-magenta-500/10 rounded-full blur-2xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
