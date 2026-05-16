"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "SÈMÈ CITY", tagline: "Innovation Hub" },
  { name: "ISOCEL FIBRE", tagline: "Telecom" },
  { name: "CELTIIS", tagline: "Connectivité" },
  { name: "OPEN SI", tagline: "Solutions IT" },
  { name: "EPITECH BÉNIN", tagline: "Éducation Tech" },
  { name: "BÉNIN CONTROL", tagline: "Sécurité" },
];

// Duplicate array for seamless infinite loop
const allPartners = [...partners, ...partners, ...partners];

const PartnerChip = ({ name, tagline }: { name: string; tagline: string }) => (
  <div className="group flex items-center gap-3 mx-8 flex-shrink-0 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default">
    {/* Decorative accent dot */}
    <span className="w-1.5 h-1.5 rounded-full bg-cyan-marsal/60 group-hover:bg-cyan-marsal transition-colors duration-300 flex-shrink-0" />
    <div className="flex flex-col">
      <span className="font-sans font-semibold tracking-wider text-lg text-white leading-none whitespace-nowrap">
        {name}
      </span>
      <span className="font-mono-tech text-[9px] text-silver-marsal/50 tracking-[2px] uppercase mt-0.5 group-hover:text-cyan-marsal/70 transition-colors duration-300">
        {tagline}
      </span>
    </div>
    {/* Separator */}
    <span className="ml-8 w-px h-8 bg-white/10 group-hover:bg-cyan-marsal/20 transition-colors duration-300 flex-shrink-0" />
  </div>
);

export default function PartnersMarquee() {
  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden border-t border-white/5" id="partenaires">
      {/* Background ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-cyan-marsal/3 blur-[100px]" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center mb-14 px-6"
      >
        <span className="font-mono-tech text-cyan-marsal text-xs tracking-[4px] uppercase mb-3 block">
          Écosystème & Partenaires
        </span>
        <p className="text-silver-marsal/50 text-base font-light tracking-wide">
          Ils soutiennent l'innovation
        </p>
      </motion.div>

      {/* Marquee wrapper with edge fade masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling row */}
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex items-center w-max"
        >
          {allPartners.map((p, idx) => (
            <PartnerChip key={idx} name={p.name} tagline={p.tagline} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
