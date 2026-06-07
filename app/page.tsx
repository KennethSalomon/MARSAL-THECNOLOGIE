"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FlipGallery from '../components/ui/flip-gallery';
import { CurtainThemeToggle } from '../components/ui/curtain-theme-toggle';
import {
  Shield,
  Zap,
  Monitor,
  MessageCircle,
  Mail,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';

/**
 * Animation Wrapper pour simplifier le code
 */
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay }}
  >
    {children}
  </motion.div>
);

/**
 * MARSAL TECHNOLOGIES - Main Landing Page
 * La directive "use client" est placée en ligne 1 pour autoriser useState et useEffect.
 */
export default function Page() {
  return (
    <main className="bg-white dark:bg-obsidian min-h-screen text-obsidian dark:text-white font-exo overflow-x-hidden selection:bg-cyan-marsal selection:text-obsidian scroll-smooth transition-colors duration-500">

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-white/95 dark:bg-obsidian/95 backdrop-blur-md border-b border-cyan-marsal/20 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="index.html" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/images/logo.png" alt="Marsal Logo" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <div className="font-exo font-bold text-lg tracking-wider uppercase">MARSAL <span className="text-cyan-marsal">TECH</span></div>
              <div className="font-mono-tech text-[9px] text-silver-marsal/60 dark:text-silver-marsal/40 tracking-wider uppercase">Intelligence Invisible</div>
            </div>
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#accueil" className="font-mono-tech text-xs hover:text-cyan-marsal transition-colors uppercase tracking-widest">Accueil</a>
            <a href="solutions.html" className="font-mono-tech text-xs hover:text-cyan-marsal transition-colors uppercase tracking-widest">Solutions</a>
            <a href="catalogue.html" className="font-mono-tech text-xs hover:text-cyan-marsal transition-colors uppercase tracking-widest">Catalogue</a>
            <a href="temoignages.html" className="font-mono-tech text-xs hover:text-cyan-marsal transition-colors uppercase tracking-widest">Témoignages</a>
            <a href="#contact" className="font-mono-tech text-xs hover:text-cyan-marsal transition-colors uppercase tracking-widest">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <CurtainThemeToggle />
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="accueil" className="min-h-screen flex items-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center w-full relative z-10 py-12 lg:py-0">
          <Reveal>
            <span className="font-mono-tech text-cyan-marsal text-sm tracking-[2px] mb-4 block">SYSTÈME D'EXCELLENCE</span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light leading-tight">
              L' <span className="text-cyan-marsal font-bold">intelligence</span><br />
              à l'état <span className="text-magenta-marsal dark:text-magenta-marsal font-bold">pur</span>
            </h1>
            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 border border-cyan-marsal/40 rounded-full text-cyan-marsal hover:bg-cyan-marsal/5 dark:hover:bg-cyan-marsal/10 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] font-mono-tech text-xs tracking-widest uppercase">
                Découvrir la collection
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="h-[300px] sm:h-[400px] lg:h-[650px] relative mt-8 lg:mt-0">
            <div className="w-full h-full bg-gradient-to-b from-cyan-marsal/10 to-transparent rounded-full blur-[120px] absolute inset-0 -z-10"></div>
            <iframe src='https://my.spline.design/kZDDjO5HuC9GJUM2/' width='100%' height='100%' className="pointer-events-auto border-0 z-10 relative opacity-90 dark:opacity-100 rounded-3xl shadow-2xl"></iframe>
          </Reveal>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="bg-obsidian/[0.02] dark:bg-white/[0.02] py-12 lg:py-16 border-y border-obsidian/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatItem value="320+" label="Installations" />
          <StatItem value="8 ans" label="Expertise" />
          <StatItem value="98.5%" label="Satisfaits" />
          <StatItem value="24/7" label="Support" />
        </div>
      </section>

      {/* --- WHY US (FlipGallery) --- */}
      <section id="avantages" className="py-20 lg:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="font-mono-tech text-cyan-marsal text-sm tracking-[2px] uppercase">Pourquoi Marsal ?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4 leading-tight">
              La technologie au service de l' <span className="text-magenta-marsal dark:text-magenta-marsal font-bold">excellence</span>
            </h2>
            <div className="space-y-10 mt-12">
              <StatItem value="+500" label="installations" />
              <StatItem value="24/7" label="support premium" />
              <StatItem value="10 ans" label="garantie" />
            </div>
          </Reveal>
          <Reveal delay={0.3} className="w-full flex items-center justify-center">
            <FlipGallery />
          </Reveal>
        </div>
      </section>

      {/* --- CTA --- */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto text-center">
        <Reveal><CTABanner /></Reveal>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-obsidian/5 dark:border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 text-center sm:text-left">
          <div>
            <div className="font-exo text-2xl font-bold tracking-widest uppercase">MARSAL <span className="text-cyan-marsal">TECH</span></div>
            <p className="text-silver-marsal/60 dark:text-silver-marsal/40 text-[10px] mt-2 font-mono-tech tracking-widest uppercase">Intelligence Invisible · Domotique Prestige · Cotonou</p>
          </div>
          <div className="flex gap-6">
            {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-silver-marsal/50 hover:text-cyan-marsal transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex gap-5">
      <div className="w-1 bg-gradient-to-b from-cyan-marsal to-magenta-marsal rounded-full"></div>
      <div>
        <h3 className="text-3xl sm:text-4xl font-black tracking-tighter">
          <span className="text-cyan-marsal">{value}</span> <span className="font-light text-obsidian/60 dark:text-silver-marsal/80 uppercase text-xs tracking-widest ml-2">{label}</span>
        </h3>
      </div>
    </div>
  );
}

function CTABanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-marsal to-magenta-marsal p-12 rounded-[40px] text-white">
      <h2 className="text-4xl font-bold mb-4">Prêt à transformer votre habitat ?</h2>
      <p className="mb-8 opacity-90">Obtenez votre devis personnalisé gratuitement — réponse sous 24h.</p>
      <a href="https://wa.me/22954036641" className="bg-white text-obsidian px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform inline-block">Devis WhatsApp</a>
    </div>
  );
}