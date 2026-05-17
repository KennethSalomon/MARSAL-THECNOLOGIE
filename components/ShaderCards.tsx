"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Wrench,
  Headphones,
  Sliders,
  MapPin
} from 'lucide-react';
import { useTheme } from 'next-themes';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: 'cyan' | 'magenta';
}

const FeatureCard = ({ icon, title, desc, color }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const glowColor = isDark 
    ? color === 'cyan' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(212, 0, 255, 0.3)'
    : 'rgba(6, 182, 212, 0.15)';

  const borderColor = isDark
    ? color === 'cyan' ? 'rgba(6, 182, 212, 0.5)' : 'rgba(212, 0, 255, 0.5)'
    : 'rgba(6, 182, 212, 0.3)';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group h-full min-h-[280px] rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: isDark 
          ? 'rgba(24, 24, 27, 0.4)' 
          : 'rgba(249, 250, 251, 0.8)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
      }}
      whileHover={{
        borderColor: borderColor,
        boxShadow: isDark
          ? `0 0 30px ${glowColor}`
          : `0 0 20px ${glowColor}`,
      }}
    >
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6 w-14 h-14 rounded-full bg-neutral-200 dark:bg-white/5 border border-neutral-300 dark:border-white/10 flex items-center justify-center">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm flex-1">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function ShaderCards() {
  const features = [
    {
      icon: <Zap size={32} className="text-cyan-500 dark:text-cyan-400" />,
      title: "Solutions connectées",
      desc: "Des équipements intelligents pour simplifier votre quotidien et améliorer votre confort.",
      color: "cyan" as const
    },
    {
      icon: <ShieldCheck size={32} className="text-purple-500 dark:text-purple-400" />,
      title: "Sécurité avancée",
      desc: "Caméras, contrôle d'accès et serrures intelligentes pour protéger vos biens efficacement.",
      color: "magenta" as const
    },
    {
      icon: <Wrench size={32} className="text-cyan-500 dark:text-cyan-400" />,
      title: "Installation professionnelle",
      desc: "Une mise en place propre, rapide et adaptée à votre espace pour garantir un bon fonctionnement.",
      color: "cyan" as const
    },
    {
      icon: <Headphones size={32} className="text-purple-500 dark:text-purple-400" />,
      title: "Service après-vente",
      desc: "Un accompagnement réactif pour répondre à vos questions et assurer votre tranquillité.",
      color: "magenta" as const
    },
    {
      icon: <Sliders size={32} className="text-cyan-500 dark:text-cyan-400" />,
      title: "Solutions sur mesure",
      desc: "Des offres adaptées aux maisons, bureaux, boutiques, hôtels, écoles et fermes.",
      color: "cyan" as const
    },
    {
      icon: <MapPin size={32} className="text-purple-500 dark:text-purple-400" />,
      title: "Confiance locale",
      desc: "Un showroom à Cotonou et un contact direct pour vous conseiller avant tout choix.",
      color: "magenta" as const
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300" id="avantages-garanties">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono-tech text-cyan-500 dark:text-cyan-400 text-xs tracking-[4px] uppercase mb-4 block"
          >
            Pourquoi Nous Choisir ?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 dark:text-white leading-tight"
          >
            Puissance. Sécurité. <span className="text-purple-500 dark:text-purple-400 font-bold">Contrôle.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Tout ce qu'il faut pour sécuriser, moderniser et connecter vos espaces avec des solutions fiables et professionnelles.
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
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                color={feature.color}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] pointer-events-none rounded-full dark:bg-cyan-500/10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] pointer-events-none rounded-full dark:bg-purple-500/10" />
    </section>
  );
}
