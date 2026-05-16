"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const items = [
  {
    id: "01",
    title: "Marsal Technologies",
    description: "L'expertise domotique au service de votre confort et de votre sécurité.",
  },
  {
    id: "02",
    title: "Innovation Utile",
    description: "Des technologies intelligentes pensées pour simplifier votre quotidien.",
  },
  {
    id: "03",
    title: "Sécurité Renforcée",
    description: "Surveillance et contrôle d'accès de pointe pour une sérénité totale.",
  },
  {
    id: "04",
    title: "Qualité Pro",
    description: "Une installation soignée et des équipements haute performance garantis.",
  },
  {
    id: "05",
    title: "Accompagnement",
    description: "Un suivi personnalisé de la conception à la maintenance de vos systèmes.",
  },
  {
    id: "06",
    title: "Solutions Sur Mesure",
    description: "Des solutions adaptées aux besoins uniques de chaque résidence ou bureau.",
  },
  {
    id: "07",
    title: "Confiance Totale",
    description: "Une relation transparente et durable avec nos clients et partenaires.",
  },
  {
    id: "08",
    title: "Présence Locale",
    description: "Un acteur engagé au cœur du Bénin pour l'innovation technologique.",
  },
];

export default function EditorialScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    
    if (!section || !track) return;

    // Use a context for easy cleanup
    const ctx = gsap.context(() => {
      // Calculate horizontal distance
      const scrollWidth = track.scrollWidth;
      const windowWidth = window.innerWidth;
      const totalScroll = scrollWidth - windowWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2, // Smooth follow-through
          start: "top top",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center"
      id="editorial-scroll"
    >
      {/* Editorial Header */}
      <div className="absolute top-12 left-10 md:top-24 md:left-24 z-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-cyan-marsal/40" />
          <span className="font-mono-tech text-[10px] text-cyan-marsal tracking-[5px] uppercase opacity-60">
            Brand Philosophy
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
          L'excellence en <span className="text-magenta-marsal font-bold italic">mouvement</span>
        </h2>
      </div>

      {/* Horizontal Cards Track */}
      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div 
          ref={trackRef} 
          className="flex gap-10 md:gap-16 px-[20vw] items-center"
          style={{ width: "fit-content", height: "100%" }}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              className="group relative min-w-[300px] md:min-w-[420px] h-[380px] md:h-[480px] rounded-[48px] bg-[#0a0a0a] border border-white/5 flex flex-col justify-end p-12 md:p-16 transition-all duration-700 hover:border-cyan-marsal/20 hover:bg-[#0d0d0d] shadow-2xl"
            >
              {/* Card Label */}
              <div className="absolute top-12 right-12 font-mono-tech text-[10px] text-white/10 group-hover:text-cyan-marsal/30 tracking-widest transition-colors">
                CS // {item.id}
              </div>

              {/* Title & Desc */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6 group-hover:text-cyan-marsal transition-colors duration-500 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-silver-marsal/40 text-sm md:text-base font-light leading-relaxed max-w-[90%]">
                  {item.description}
                </p>
                
                {/* Visual Accent */}
                <div className="w-8 h-[1px] bg-white/10 mt-8 group-hover:w-20 group-hover:bg-cyan-marsal/40 transition-all duration-1000 ease-out" />
              </div>

              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
          
          {/* Buffer spacer */}
          <div className="min-w-[15vw] h-full flex-shrink-0" />
        </div>
      </div>

      {/* Immersive Scroll Guide */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="font-mono-tech text-[8px] text-white/20 tracking-[6px] uppercase animate-pulse">
          Continuous Scroll
        </span>
      </div>
    </section>
  );
}
