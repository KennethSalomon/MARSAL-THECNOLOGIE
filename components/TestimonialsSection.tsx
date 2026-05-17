"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marc A.",
    role: "Propriétaire de Villa",
    text: "Piloter toute ma maison depuis mon smartphone semblait être un gadget, mais le système installé par Marsal a changé notre quotidien. La gestion de la climatisation et des éclairages connectés nous fait faire de vraies économies. Service irréprochable !",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    accent: "cyan",
  },
  {
    id: 2,
    name: "Sessi D.",
    role: "Directrice de Boutique",
    text: "La sécurité de mon commerce était ma priorité. Grâce aux serrures intelligentes et aux caméras installées, je garde un œil sur ma boutique et je gère les accès de mes employés à distance, en toute sérénité.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    accent: "magenta",
  },
  {
    id: 3,
    name: "Cabinet Architecture K.",
    role: "Partenaire Pro",
    text: "Nous intégrons désormais Marsal Technologie dès la phase de plan de nos villas de luxe. Leur expertise technique et la discrétion de leurs équipements intelligents apportent une valeur ajoutée immense à nos projets.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    accent: "cyan",
  },
  {
    id: 4,
    name: "Elena V.",
    role: "Directrice Hôtelière",
    text: "Le contrôle d'accès par reconnaissance faciale installé dans nos suites VIP a transformé l'expérience de nos clients. Un luxe invisible, rapide et d'une sécurité infaillible.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    accent: "magenta",
  },
  {
    id: 5,
    name: "Arnaud K.",
    role: "Ingénieur Énergétique",
    text: "Grâce aux algorithmes de gestion thermique de Marsal, la villa témoin a réduit sa consommation de climatisation de 35% sans aucun compromis sur le confort.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    accent: "cyan",
  },
  {
    id: 6,
    name: "Marie-José Z.",
    role: "Propriétaire Résidence de Luxe",
    text: "Piloter l'intégralité des lumières, des stores et du système audio de la maison d'un simple geste ou à la voix est devenu un automatisme dont je ne peux plus me passer.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop",
    accent: "cyan",
  },
  {
    id: 7,
    name: "Éric T.",
    role: "Gérant d'Hôtel",
    text: "L'automatisation des accès par carte et la gestion centralisée des lumières dans nos suites ont bluffé nos clients. Marsal a compris les exigences du secteur hôtelier de luxe.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    accent: "cyan",
  },
  {
    id: 8,
    name: "Amandine K.",
    role: "Propriétaire",
    text: "Quel bonheur de rentrer chez soi et que la maison soit déjà à la bonne température, avec l'ambiance lumineuse parfaite. Une équipe à l'écoute et très pro !",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    accent: "magenta",
  },
  {
    id: 9,
    name: "Innov'Space",
    role: "Directeur Technique",
    text: "Nous avons confié l'installation de nos salles de réunion connectées et du réseau intelligent à Marsal. Le résultat dépasse nos attentes, nos membres adorent la fluidité des équipements.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    accent: "cyan",
  },
];

// Doubler les témoignages pour un défilement infini sans coupure
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

const accentStyles = {
  cyan: {
    avatar: "border-cyan-marsal/30",
    glow: "hover:border-cyan-marsal/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]",
  },
  magenta: {
    avatar: "border-magenta-marsal/30",
    glow: "hover:border-magenta-marsal/30 hover:shadow-[0_0_30px_rgba(212,0,255,0.08)]",
  },
};

/** Single testimonial card */
const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => {
  const a = accentStyles[t.accent as keyof typeof accentStyles];
  return (
    <div
      className={`flex-shrink-0 w-[420px] group rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 backdrop-blur-md p-8 flex flex-col gap-6 transition-all duration-500 ${a.glow}`}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-sans italic font-light text-lg md:text-xl text-neutral-800 dark:text-neutral-200 tracking-wide flex-1 leading-relaxed">
        "{t.text}"
      </p>

      {/* Footer */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        <div className={`w-12 h-12 rounded-full border overflow-hidden flex-shrink-0 bg-neutral-900 p-0.5 ${a.avatar}`}>
          <img
            src={t.avatar}
            alt={t.name}
            className="w-full h-full rounded-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
          />
        </div>
        <div>
          <div className="font-display font-bold text-sm tracking-wider uppercase text-neutral-900 dark:text-white">{t.name}</div>
          <div className="font-mono text-[10px] text-cyan-500 tracking-widest uppercase">
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fonction de navigation manuelle
  const scrollManual = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -444 : 444; // Card width + gap
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-white dark:bg-obsidian relative overflow-hidden" id="temoignages">
      {/* Background ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-marsal/5 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-magenta-marsal/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-mono-tech text-cyan-marsal text-xs tracking-[5px] uppercase mb-4 block">
            Retours d'Expérience
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-neutral-900 dark:text-white leading-tight">
            La voix de nos <span className="text-magenta-marsal font-bold">utilisateurs</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite Marquee LTR */}
      <div
        className="relative flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        ref={scrollContainerRef}
      >
        <div className="flex gap-6 py-4 animate-marquee-ltr hover:[animation-play-state:paused] pointer-events-auto flex-nowrap">
          {infiniteTestimonials.map((t, idx) => (
            <div key={`${t.id}-${idx}`} className="snap-center">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Fade Masks edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Bloc des boutons fléchés (repositionnés à droite sous la bande) */}
      <div className="w-full flex justify-end px-6 md:px-12 mt-8 relative z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollManual('left')}
            className="border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-full p-4 hover:border-cyan-500 transition-colors group"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollManual('right')}
            className="border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-full p-4 hover:border-cyan-500 transition-colors group"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
