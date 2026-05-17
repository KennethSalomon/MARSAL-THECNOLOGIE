"use client";

import React, { useEffect, useState } from 'react';
import {
  Shield,
  Zap,
  Monitor,
  MessageCircle,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import StoreSection from '../components/StoreSection';
import ShaderCards from '../components/ShaderCards';
import PreFooterSection from '../components/PreFooterSection';

import TestimonialsSection from '../components/TestimonialsSection';
import PartnersMarquee from '../components/PartnersMarquee';
import FeatureSection from '../components/FeatureSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import LimelightNav from '../components/LimelightNav';
import { BackgroundPaths } from '../components/background-paths';

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  const carouselSlides = [
    { bg: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1), #0a0a0a)', text: 'Living Room Connecté', label: 'AMBIANCE 1' },
    { bg: 'linear-gradient(135deg, rgba(212, 0, 255, 0.1), #0a0a0a)', text: 'Sécurité 4K IA', label: 'AMBIANCE 2' },
    { bg: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(212, 0, 255, 0.1))', text: 'Énergie Prédictive', label: 'AMBIANCE 3' },
  ];



  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observerOptions = { threshold: 0.05, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Add a slight delay to ensure DOM is fully ready
    const timeout = setTimeout(() => {
      document.querySelectorAll('.section-fade').forEach(el => observer.observe(el));
    }, 100);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // carouselSlides.length
    }, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [mounted]);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(isLight ? 'dark' : 'light');
  };

  const handleWhatsApp = (productName?: string) => {
    const text = productName
      ? `Bonjour, je suis intéressé par le produit ${productName} de MARSAL TECHNOLOGIES.`
      : "Bonjour, j'aimerais en savoir plus sur vos services.";
    window.open(`https://wa.me/2290154036641?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className={`min-h-screen font-exo transition-colors duration-500 ${isLight ? 'bg-[#f5f5f5] text-[#0a0a0a]' : 'bg-obsidian text-white'} scroll-smooth`}>
      {/* --- HEADER --- */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? `${isLight ? 'bg-white/70 backdrop-blur-md border-b border-neutral-200/60' : 'bg-black/70 backdrop-blur-md border-b border-neutral-900/80'}`
          : `${isLight ? 'bg-white/80' : 'bg-obsidian/80'} backdrop-blur-md border-b border-cyan-marsal/20`
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-cyan-marsal/40 flex items-center justify-center hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
              <span className="text-cyan-marsal font-bold text-xl">M</span>
            </div>
            <div>
              <div className="font-exo font-bold text-lg tracking-wider uppercase">MARSAL <span className="text-cyan-marsal">TECH</span></div>
              <div className="font-mono-tech text-[9px] text-silver-marsal/60 tracking-wider uppercase">Intelligence Invisible</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            {[
              { label: 'Accueil', href: '#accueil' },
              { label: 'Solutions', href: '#solutions' },
              { label: 'Avantages', href: '#avantages' },
              { label: 'Catalogue', href: '#catalogue' },
              { label: 'Témoignages', href: '#temoignages' },
              { label: 'Contact', href: '#contact' }
            ].map((item) => (
              <a key={item.href} href={item.href} className="font-mono-tech text-xs text-silver-marsal/70 hover:text-cyan-marsal transition-colors uppercase tracking-widest">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="font-mono-tech text-[10px] px-2 py-1 rounded border border-cyan-marsal/30 text-cyan-marsal hover:bg-cyan-marsal/10 transition">FR</button>
              <button className="font-mono-tech text-[10px] px-2 py-1 rounded border border-silver-marsal/20 text-silver-marsal/60 hover:border-cyan-marsal/30 transition">EN</button>
            </div>
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isLight ? 'border-obsidian/20 text-obsidian' : 'border-white/20 text-white/70 hover:border-cyan-marsal/40'}`}
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <div id="accueil">
        <BackgroundPaths />
      </div>

      {/* --- FEATURE SECTION --- */}
      <div id="solutions">
        <FeatureSection />
      </div>

      <div id="avantages">
        <ShaderCards />
      </div>




      {/* --- STORE SECTION --- */}
      <div id="catalogue">
        <StoreSection />
      </div>

      {/* --- TESTIMONIALS --- */}
      <div id="temoignages">
        <TestimonialsSection />
      </div>


      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="w-full min-h-[80vh] bg-white dark:bg-black text-neutral-900 dark:text-white py-24 px-6 md:px-12 overflow-hidden relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
          {/* Left Side: Institutional Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-cyan-marsal font-mono-tech text-xs tracking-[0.3em] uppercase mb-8 block">
              // CONTACTEZ-NOUS
            </span>
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-10 tracking-tighter text-neutral-900 dark:text-white">
              Prêt à basculer dans<br />
              <span className="text-neutral-400 dark:text-neutral-500 font-light italic">l'intelligence invisible ?</span>
            </h2>

            <div className="space-y-8 mt-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-cyan-marsal/50 transition-all duration-500 bg-neutral-50 dark:bg-neutral-900/30">
                  <Mail size={22} className="text-cyan-marsal" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] mb-1 font-mono-tech">Email Direct</p>
                  <a href="mailto:marsaltechnologie@gmail.com" className="text-xl font-light text-neutral-700 dark:text-neutral-300 hover:text-cyan-marsal dark:hover:text-cyan-marsal transition-colors">marsaltechnologie@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-cyan-marsal/50 transition-all duration-500 bg-neutral-50 dark:bg-neutral-900/30">
                  <MapPin size={22} className="text-cyan-marsal" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] mb-1 font-mono-tech">Localisation</p>
                  <p className="text-xl font-light text-neutral-700 dark:text-neutral-300">Cotonou, Bénin.</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-6 border-l border-cyan-marsal/20 bg-cyan-marsal/5 max-w-sm">
              <p className="text-neutral-600 dark:text-neutral-400 text-xs font-light leading-relaxed uppercase tracking-wider">
                Un expert MARSAL TECH analyse votre demande et vous répondra sous 24h ouvrées.
              </p>
            </div>
          </motion.div>

          {/* Right Side: High-End Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-neutral-50 dark:bg-neutral-900/40 backdrop-blur-xl border border-neutral-200 dark:border-neutral-900 p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-300">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <input type="text" placeholder="Nom & Prénom" required className="bg-transparent border-b border-neutral-300 dark:border-neutral-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none py-4 transition-all w-full placeholder-neutral-400 dark:placeholder-neutral-600 text-sm font-light text-neutral-900 dark:text-white" />
                  <input type="email" placeholder="Adresse Email" required className="bg-transparent border-b border-neutral-300 dark:border-neutral-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none py-4 transition-all w-full placeholder-neutral-400 dark:placeholder-neutral-600 text-sm font-light text-neutral-900 dark:text-white" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <input type="tel" placeholder="Numéro de Téléphone" className="bg-transparent border-b border-neutral-300 dark:border-neutral-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none py-4 transition-all w-full placeholder-neutral-400 dark:placeholder-neutral-600 text-sm font-light text-neutral-900 dark:text-white" />
                  <div className="relative">
                    <select className="bg-transparent border-b border-neutral-300 dark:border-neutral-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none py-4 transition-all w-full text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 text-sm font-light appearance-none cursor-pointer" defaultValue="" required>
                      <option value="" disabled className="text-neutral-400 dark:text-neutral-600 bg-white dark:bg-black">Nature du Projet</option>
                      <option value="lux-res" className="bg-white dark:bg-black text-neutral-900 dark:text-white">Résidentiel de luxe</option>
                      <option value="pro" className="bg-white dark:bg-black text-neutral-900 dark:text-white">Professionnel / Tertiaire</option>
                    </select>
                    <ChevronRight size={14} className="absolute right-0 top-5 rotate-90 text-neutral-500 dark:text-neutral-400 pointer-events-none" />
                  </div>
                </div>

                <textarea placeholder="Décrivez vos besoins ou votre projet..." rows={4} className="bg-transparent border-b border-neutral-300 dark:border-neutral-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none py-4 transition-all w-full placeholder-neutral-400 dark:placeholder-neutral-600 text-sm font-light resize-none text-neutral-900 dark:text-white"></textarea>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => window.open('https://wa.me/2290154036641?text=Bonjour,%20je%20souhaite%20discuter%20d\'un%20projet%20avec%20Marsal%20Technologies.', '_blank')}
                  className="w-full bg-cyan-marsal text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 group relative overflow-hidden transition-all shadow-[0_10px_30px_rgba(0,229,255,0.2)]"
                >
                  <span className="text-sm tracking-widest uppercase">Envoyer le projet</span>
                  <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnersMarquee />

      {/* --- NEWSLETTER PRE-FOOTER --- */}
      <PreFooterSection />

      {/* --- FOOTER --- */}
      <footer className="relative w-full pt-20 pb-10 bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-neutral-900 text-neutral-900 dark:text-white overflow-hidden transition-colors duration-300">
        {/* Background Gradients */}
        <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full">
          <div className="bg-cyan-marsal/5 absolute top-1/3 left-1/4 h-64 w-64 rounded-full blur-3xl" />
          <div className="bg-magenta-marsal/5 absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-3">
            <div className="col-span-1 text-left">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-cyan-marsal/40 flex items-center justify-center">
                  <span className="text-cyan-marsal font-bold text-xl">M</span>
                </div>
                <div>
                  <div className="font-exo font-bold text-lg tracking-wider uppercase">MARSAL <span className="text-cyan-marsal">TECH</span></div>
                  <div className="font-mono-tech text-[9px] text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">Intelligence Invisible</div>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-sm text-sm leading-relaxed font-light">
                Solutions domotiques sur mesure pour résidences de luxe et locaux professionnels. Basé à Cotonou, Bénin.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: 'https://bj.linkedin.com/in/marsal-smarttech-b9119b274?trk=public_post_comment_actor-image3' },
                  { icon: Instagram, href: 'https://www.instagram.com/marsal_technologies_benin/reels/' }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center hover:border-cyan-marsal/30 hover:text-cyan-marsal transition-all text-neutral-400 dark:text-neutral-600 hover:text-cyan-marsal dark:hover:text-cyan-marsal"
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-left">
              <h4 className="mb-6 font-mono-tech text-[10px] font-bold tracking-[3px] uppercase text-cyan-marsal opacity-80">Liens Rapides</h4>
              <ul className="space-y-4 text-left">
                {[
                  { t: 'Accueil', h: '#accueil' },
                  { t: 'Solutions', h: '#solutions' },
                  { t: 'Avantages', h: '#avantages' },
                  { t: 'Catalogue', h: '#catalogue' },
                  { t: 'Témoignages', h: '#temoignages' },
                  { t: 'Contact', h: '#contact' }
                ].map((item) => (
                  <li key={item.t}>
                    <a href={item.h} className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-light">
                      {item.t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h4 className="mb-6 font-mono-tech text-[10px] font-bold tracking-[3px] uppercase text-cyan-marsal opacity-80">Localisation</h4>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Marsal+Technologies+Cotonou+Bénin"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800/60 transition-all duration-300 hover:border-cyan-marsal/50"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                src="/images/map1.png"
                    alt="Marsal Technologies - Light Mode"
                    className="dark:hidden block w-full h-full object-cover"
                  />
                  <img
                src="/images/map2.png"
                    alt="Marsal Technologies - Dark Mode"
                    className="dark:block hidden w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="px-4 py-2 bg-cyan-marsal text-black text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg">
                      Voir l'itinéraire
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 dark:bg-neutral-900/40">
                  <p className="text-neutral-700 dark:text-neutral-300 text-xs font-light leading-relaxed">
                    Marsal Technologies — Derrière la SOBEBRA, 4006 Quartier Jak, Cotonou
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 dark:text-neutral-600 text-[10px] font-mono-tech tracking-wider uppercase">
              © 2026 Marsal Technologies. Tous droits réservés.
            </p>
            <div className="font-mono-tech text-[9px] text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
              Design by KEDYS AGENCY
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Fluid Menu for Mobile/Tablet */}
      <FluidMenu />

      <style jsx global>{`
        .section-fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.6s ease;
        }
        .section-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}
