"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/spotlight-card';
import { 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Headphones, 
  Sliders, 
  MapPin 
} from 'lucide-react';

export default function AvantagesGaranties() {
  const features = [
    {
      icon: <Zap size={32} className="text-cyan-marsal" />,
      title: "Solutions connectées",
      desc: "Des équipements intelligents pour simplifier votre quotidien et améliorer votre confort.",
      color: "cyan" as const
    },
    {
      icon: <ShieldCheck size={32} className="text-magenta-marsal" />,
      title: "Sécurité avancée",
      desc: "Caméras, contrôle d’accès et serrures intelligentes pour protéger vos biens efficacement.",
      color: "magenta" as const
    },
    {
      icon: <Wrench size={32} className="text-cyan-marsal" />,
      title: "Installation professionnelle",
      desc: "Une mise en place propre, rapide et adaptée à votre espace pour garantir un bon fonctionnement.",
      color: "cyan" as const
    },
    {
      icon: <Headphones size={32} className="text-magenta-marsal" />,
      title: "Service après-vente",
      desc: "Un accompagnement réactif pour répondre à vos questions et assurer votre tranquillité.",
      color: "magenta" as const
    },
    {
      icon: <Sliders size={32} className="text-cyan-marsal" />,
      title: "Solutions sur mesure",
      desc: "Des offres adaptées aux maisons, bureaux, boutiques, hôtels, écoles et fermes.",
      color: "cyan" as const
    },
    {
      icon: <MapPin size={32} className="text-magenta-marsal" />,
      title: "Confiance locale",
      desc: "Un showroom à Cotonou et un contact direct pour vous conseiller avant tout choix.",
      color: "magenta" as const
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="avantages-garanties">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono-tech text-cyan-marsal text-sm tracking-[4px] uppercase mb-4 block"
          >
            Pourquoi Nous Choisir ?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
          >
            Puissance. Sécurité. <span className="text-magenta-marsal font-bold">Contrôle.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-silver-marsal/70 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Tout ce qu’il faut pour sécuriser, moderniser et connecter vos espaces avec des solutions fiables et professionnelles.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="h-full cursor-none"
            >
              <GlowCard customSize={true} className="h-full min-h-[280px]" glowColor={feature.color}>
                <div className="mb-6 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-silver-marsal/60 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
        
      </div>
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-marsal/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-magenta-marsal/5 blur-[150px] pointer-events-none rounded-full" />
    </section>
  );
}
