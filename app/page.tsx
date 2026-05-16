"use client";

import React, { useEffect, useState, useRef } from 'react';
import { 
  Shield, 
  Zap, 
  Monitor, 
  MessageCircle, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from 'next-themes';
import PreFooterSection from '../components/PreFooterSection';
import StoreSection from '../components/StoreSection';
import AvantagesGaranties from '../components/AvantagesGaranties';
import DashboardShowcase from '../components/DashboardShowcase';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';
  
  const carouselSlides = [
    { bg: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1), #0a0a0a)', text: 'Living Room Connecté', label: 'AMBIANCE 1' },
    { bg: 'linear-gradient(135deg, rgba(212, 0, 255, 0.1), #0a0a0a)', text: 'Sécurité 4K IA', label: 'AMBIANCE 2' },
    { bg: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(212, 0, 255, 0.1))', text: 'Énergie Prédictive', label: 'AMBIANCE 3' },
  ];



  useEffect(() => {
    setMounted(true);
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
    window.open(`https://wa.me/22990000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className={`min-h-screen font-exo transition-colors duration-500 ${isLight ? 'bg-[#f5f5f5] text-[#0a0a0a]' : 'bg-obsidian text-white'}`}>
      
      {/* --- HEADER --- */}
      <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-cyan-marsal/20 transition-all duration-300 ${isLight ? 'bg-white/80' : 'bg-obsidian/80'}`}>
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
            {['Accueil', 'Services', 'Galerie', 'Avantages', 'Produits', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-mono-tech text-xs text-silver-marsal/70 hover:text-cyan-marsal transition-colors uppercase tracking-widest">
                {item}
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
      <section id="accueil" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 items-center w-full relative z-10">
          <div className="section-fade">
            <span className="font-mono-tech text-cyan-marsal text-sm tracking-[2px] mb-4 block uppercase">SYSTÈME D'EXCELLENCE</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1]">
              L' <span className="text-cyan-marsal font-bold">intelligence</span><br />
              à l'état <span className="text-magenta-marsal font-bold">pur</span>
            </h1>
            <p className="text-silver-marsal/60 text-lg md:text-xl mt-8 max-w-lg font-light leading-relaxed">
              Domotique de prestige · Sécurité absolue · Économies intelligentes. <br /> Basé à Cotonou, Bénin.
            </p>
            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 border border-cyan-marsal/40 rounded-full text-cyan-marsal hover:bg-cyan-marsal/10 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] font-exo tracking-widest uppercase text-xs">
                Découvrir la collection
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full text-white/80 hover:border-magenta-marsal/40 transition-all hover:shadow-[0_0_25px_rgba(212,0,255,0.3)] font-exo tracking-widest uppercase text-xs">
                Demander un devis
              </button>
            </div>
          </div>
          
          <div className="h-[500px] lg:h-[800px] w-full relative flex items-center justify-center section-fade delay-300">
            <spline-viewer 
              url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
              class="w-full h-full"
              loading-anim-type="spinner">
            </spline-viewer>
          </div>
        </div>
      </section>



      <AvantagesGaranties />

      {/* --- GALLERY CAROUSEL --- */}
      <section id="galerie" className="py-16 relative overflow-hidden">
        <div className="text-center mb-12 section-fade">
          <span className="font-mono-tech text-cyan-marsal text-sm tracking-widest uppercase">Galerie Immersive</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 italic">L'esthétique de <span className="text-magenta-marsal">l'innovation</span></h2>
        </div>
        
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselSlides.map((slide, idx) => (
              <div 
                key={idx} 
                className="min-w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-6"
                style={{ background: slide.bg }}
              >
                <div>
                  <span className="font-mono-tech text-cyan-marsal text-xs tracking-widest">{slide.label}</span>
                  <h3 className="text-3xl md:text-5xl font-light mt-4">{slide.text}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-cyan-marsal/30 flex items-center justify-center hover:bg-cyan-marsal/20 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-cyan-marsal/30 flex items-center justify-center hover:bg-cyan-marsal/20 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      <DashboardShowcase />



      {/* --- STORE SECTION --- */}
      <StoreSection />


      
      <PreFooterSection />

      {/* --- CONTACT CTA --- */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 text-center section-fade">
          <span className="font-mono-tech text-cyan-marsal text-sm tracking-wider uppercase">Prêt à transformer votre espace ?</span>
          <h2 className="text-3xl md:text-4xl font-light mt-4">Contactez notre équipe</h2>
          <p className="text-silver-marsal/60 mt-4 max-w-md mx-auto">Échangeons sur votre projet. Réponse sous 24h.</p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button 
              onClick={() => handleWhatsApp()}
              className="px-6 py-3 bg-white/5 border border-cyan-marsal/30 rounded-full flex items-center gap-2 hover:bg-cyan-marsal/10 transition group"
            >
              <MessageCircle size={18} className="text-cyan-marsal" />
              <span className="text-sm font-mono-tech">WhatsApp</span>
            </button>
            <a href="mailto:contact@marsaltech.com" className="px-6 py-3 bg-white/5 border border-white/20 rounded-full flex items-center gap-2 hover:border-magenta-marsal/40 transition">
              <Mail size={18} />
              <span className="text-sm font-mono-tech">Email</span>
            </a>
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'X' },
              { icon: Linkedin, label: 'LinkedIn' }
            ].map((social, idx) => (
              <a key={idx} href="#" className="px-6 py-3 bg-white/5 border border-white/20 rounded-full flex items-center gap-2 hover:border-cyan-marsal/30 transition">
                <social.icon size={18} />
                <span className="text-sm font-mono-tech">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-cyan-marsal/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="font-exo text-xl tracking-widest mb-4 uppercase">MARSAL <span className="text-cyan-marsal">TECHNOLOGIES</span></div>
              <div className="font-mono-tech text-xs text-silver-marsal/50 mb-4">Intelligence Invisible · Cotonou, Bénin</div>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="text-silver-marsal/50 hover:text-cyan-marsal transition">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono-tech text-xs text-silver-marsal/70 mb-4 tracking-wider">LIENS RAPIDES</div>
              <div className="grid grid-cols-2 gap-4">
                {['Mentions légales', 'Politique de confidentialité', 'CGV', 'Plan du site'].map((link) => (
                  <a key={link} href="#" className="font-mono-tech text-[10px] text-silver-marsal/50 hover:text-cyan-marsal transition uppercase tracking-widest">{link}</a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-white/5">
            <div className="font-mono-tech text-[10px] text-silver-marsal/30 tracking-wider">
              © 2026 MARSAL TECHNOLOGIES — Intelligence Invisible · Domotique Prestige · Cotonou, Bénin
            </div>
            <div className="font-mono-tech text-[9px] text-silver-marsal/20 mt-2">Design by KEDYS AGENCY</div>
          </div>
        </div>
      </footer>

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
