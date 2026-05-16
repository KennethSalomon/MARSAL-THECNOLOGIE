"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marc A.",
    role: "Propriétaire de Villa",
    badge: "Projet Résidentiel · Haie Vive",
    text: "Piloter toute ma maison depuis mon smartphone semblait être un gadget, mais le système installé par Marsal a changé notre quotidien. La gestion de la climatisation et des éclairages connectés nous fait faire de vraies économies. Service irréprochable !",
    stars: 5,
    initials: "MA",
    accent: "cyan",
  },
  {
    id: 2,
    name: "Sessi D.",
    role: "Directrice de Boutique",
    badge: "Sécurité Pro · Fidjrossè",
    text: "La sécurité de mon commerce était ma priorité. Grâce aux serrures intelligentes et aux caméras installées, je garde un œil sur ma boutique et je gère les accès de mes employés à distance, en toute sérénité.",
    stars: 5,
    initials: "SD",
    accent: "magenta",
  },
  {
    id: 3,
    name: "Cabinet d'Architecture K.",
    role: "Partenaire Professionnel",
    badge: "Partenaire Pro · Cotonou",
    text: "Nous intégrons désormais Marsal Technologie dès la phase de plan de nos villas de luxe. Leur expertise technique et la discrétion de leurs équipements intelligents apportent une valeur ajoutée immense à nos projets.",
    stars: 5,
    initials: "CK",
    accent: "cyan",
  },
  {
    id: 4,
    name: "Éric T.",
    role: "Gérant d'Hôtel Boutique",
    badge: "Gestion Pro · Ouidah",
    text: "L'automatisation des accès par carte et la gestion centralisée des lumières dans nos suites ont bluffé nos clients. Marsal a compris les exigences du secteur hôtelier de luxe.",
    stars: 5,
    initials: "ÉT",
    accent: "magenta",
  },
  {
    id: 5,
    name: "Amandine K.",
    role: "Propriétaire",
    badge: "Villa Connectée · Cadjehoun",
    text: "Quel bonheur de rentrer chez soi et que la maison soit déjà à la bonne température, avec l'ambiance lumineuse parfaite. Une équipe à l'écoute et très pro !",
    stars: 5,
    initials: "AK",
    accent: "cyan",
  },
  {
    id: 6,
    name: "Innov'Space Benin",
    role: "Espace Coworking",
    badge: "Coworking · Calavi",
    text: "Nous avons confié l'installation de nos salles de réunion connectées et du réseau intelligent à Marsal. Le résultat dépasse nos attentes, nos membres adorent la fluidité des équipements.",
    stars: 5,
    initials: "IS",
    accent: "magenta",
  },
];

// Duplicate for infinite scroll effect
const col1 = [...testimonials.slice(0, 2), ...testimonials.slice(0, 2)];
const col2 = [...testimonials.slice(2, 4), ...testimonials.slice(2, 4)];
const col3 = [...testimonials.slice(4, 6), ...testimonials.slice(4, 6)];

const accentStyles = {
  cyan: {
    badge: "bg-cyan-marsal/10 text-cyan-marsal border-cyan-marsal/20",
    avatar: "bg-cyan-marsal/10 text-cyan-marsal border-cyan-marsal/25",
    glow: "hover:border-cyan-marsal/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]",
  },
  magenta: {
    badge: "bg-magenta-marsal/10 text-magenta-marsal border-magenta-marsal/20",
    avatar: "bg-magenta-marsal/10 text-magenta-marsal border-magenta-marsal/25",
    glow: "hover:border-magenta-marsal/30 hover:shadow-[0_0_30px_rgba(212,0,255,0.08)]",
  },
};

/** Single testimonial card */
const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => {
  const a = accentStyles[t.accent as keyof typeof accentStyles];
  return (
    <div
      className={[
        "group rounded-2xl border border-neutral-800 bg-[#0a0a0a]/80 backdrop-blur-md",
        "p-6 flex flex-col gap-4 transition-all duration-500",
        "hover:-translate-y-0.5",
        a.glow,
      ].join(" ")}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-silver-marsal/75 text-sm leading-relaxed font-light flex-1">
        "{t.text}"
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
        <div
          className={`w-9 h-9 rounded-full border flex items-center justify-center text-xs font-bold flex-shrink-0 ${a.avatar}`}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <div className="text-white text-xs font-semibold truncate">{t.name}</div>
          <div className="text-silver-marsal/40 text-[10px] font-mono-tech truncate">
            {t.role}
          </div>
        </div>
        <span
          className={`ml-auto flex-shrink-0 text-[9px] font-mono-tech px-2 py-0.5 rounded-full border ${a.badge} hidden sm:inline-block`}
        >
          {t.badge.split("·")[0].trim()}
        </span>
      </div>
    </div>
  );
};

/** Infinite-scroll column */
const ScrollingColumn = ({
  items,
  duration,
  reverse = false,
}: {
  items: (typeof testimonials)[0][];
  duration: number;
  reverse?: boolean;
}) => {
  return (
    <div className="relative overflow-hidden" style={{ height: "600px" }}>
      {/* Top / bottom fade masks */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ y: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex flex-col gap-4"
      >
        {items.map((t, idx) => (
          <TestimonialCard key={`${t.id}-${idx}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section
      className="py-28 bg-[#050505] relative overflow-hidden"
      id="temoignages"
    >
      {/* Background ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-marsal/4 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta-marsal/4 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono-tech text-cyan-marsal text-xs tracking-[4px] uppercase mb-4 block">
            Témoignages Clients
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            Ils nous font{" "}
            <span className="text-magenta-marsal font-bold">confiance</span>
          </h2>
          <p className="mt-6 text-silver-marsal/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Découvrez les retours de ceux qui ont transformé leur quotidien avec
            nos installations domotiques.
          </p>
        </motion.div>

        {/* Columns — hidden on mobile, 3 cols on lg */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          <ScrollingColumn items={col1} duration={18} />
          <ScrollingColumn items={col2} duration={24} reverse />
          <ScrollingColumn items={col3} duration={20} />
        </div>

        {/* Mobile fallback: static stacked cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
