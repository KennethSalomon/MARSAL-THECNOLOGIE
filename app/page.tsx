"use client";

import React, { useEffect, useState } from 'react';
import FlipGallery from '../components/ui/flip-gallery';
import { CurtainThemeToggle } from '../components/ui/curtain-theme-toggle';
import GalleryAnimation from '../components/ui/gallery-animation';
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
 * MARSAL TECHNOLOGIES - Main Landing Page
 * La directive "use client" est placée en ligne 1 pour autoriser useState et useEffect.
 */
export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white dark:bg-obsidian min-h-screen text-obsidian dark:text-white font-exo overflow-x-hidden selection:bg-cyan-marsal selection:text-obsidian scroll-smooth transition-colors duration-500">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-obsidian/80 backdrop-blur-md border-b border-cyan-marsal/20 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-cyan-marsal/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <span className="text-cyan-marsal font-bold text-xl">M</span>
            </div>
            <div>
              <div className="font-exo font-bold text-lg tracking-wider uppercase">MARSAL <span className="text-cyan-marsal">TECH</span></div>
              <div className="font-mono-tech text-[9px] text-silver-marsal/60 dark:text-silver-marsal/40 tracking-wider uppercase">Intelligence Invisible</div>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8">
            {['Accueil', 'Services', 'Galerie', 'Avantages', 'Produits', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-mono-tech text-xs text-silver-marsal/70 dark:text-silver-marsal/50 hover:text-cyan-marsal dark:hover:text-cyan-marsal transition-colors uppercase tracking-widest">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Sélecteur de langue FR/EN */}
            <div className="hidden sm:flex gap-2">
              <button className="font-mono-tech text-[10px] px-2 py-1 rounded border border-cyan-marsal/30 text-cyan-marsal hover:bg-cyan-marsal/10 transition">FR</button>
              <button className="font-mono-tech text-[10px] px-2 py-1 rounded border border-silver-marsal/20 text-silver-marsal/60 hover:border-cyan-marsal/30 transition">EN</button>
            </div>
            {/* Curtain Theme Toggle */}
            {mounted && <CurtainThemeToggle />}
          </div>
        </div>
      </header>
      
      {/* --- HERO SECTION --- */}
      <section id="accueil" className="min-h-screen flex items-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 items-center w-full relative z-10">
          <div className="animate-on-scroll">
            <span className="font-mono-tech text-cyan-marsal text-sm tracking-[2px] mb-4 block">SYSTÈME D'EXCELLENCE</span>
            <h1 className="text-5xl md:text-8xl font-light leading-tight">
              L' <span className="text-cyan-marsal font-bold">intelligence</span><br />
              à l'état <span className="text-magenta-marsal dark:text-magenta-marsal font-bold">pur</span>
            </h1>
            <p className="text-silver-marsal/80 dark:text-silver-marsal/60 text-lg mt-8 max-w-lg">
              Domotique de prestige · Sécurité absolue · Économies intelligentes. <br /> Basé à Cotonou, Bénin.
            </p>
            <div className="flex gap-5 mt-10">
              <button className="px-8 py-4 border border-cyan-marsal/40 rounded-full text-cyan-marsal hover:bg-cyan-marsal/5 dark:hover:bg-cyan-marsal/10 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] font-mono-tech text-xs tracking-widest uppercase">
                Découvrir la collection
              </button>
            </div>
          </div>
          
          <div className="h-[450px] lg:h-[750px] relative">
             <div className="w-full h-full bg-gradient-to-b from-cyan-marsal/10 to-transparent rounded-full blur-[120px] absolute inset-0 -z-10"></div>
             <iframe src='https://my.spline.design/kZDDjO5HuC9GJUM2/' width='100%' height='100%' className="pointer-events-auto border-0 z-10 relative opacity-90 dark:opacity-100"></iframe>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-mono-tech text-cyan-marsal text-sm tracking-widest uppercase">Expertise Domotique</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">Une intelligence <span className="text-magenta-marsal font-bold">invisible</span></h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-marsal to-transparent mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard icon={<Shield className="text-cyan-marsal" />} title="Sécurité absolue" desc="Systèmes de surveillance 4K, détection faciale IA et accès biométrique." />
          <ServiceCard icon={<Zap className="text-magenta-marsal" />} title="Énergie intelligente" desc="Réduction jusqu'à 32% de consommation via notre IA." />
          <ServiceCard icon={<Monitor className="text-cyan-marsal" />} title="Confort total" desc="Éclairage d'ambiance et scénarios personnalisés." />
        </div>
      </section>

      {/* --- WHY US (FlipGallery) --- */}
      <section id="avantages" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <span className="font-mono-tech text-cyan-marsal text-sm tracking-[2px] uppercase">Pourquoi Marsal ?</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
              La technologie au service de l' <span className="text-magenta-marsal dark:text-magenta-marsal font-bold">excellence</span>
            </h2>
            <div className="space-y-10 mt-12">
              <StatItem value="+500" label="installations" />
              <StatItem value="24/7" label="support premium" />
              <StatItem value="10 ans" label="garantie" />
            </div>
          </div>
          <div className="w-full flex items-center justify-center animate-on-scroll delay-200">
   <FlipGallery />
</div>
        </div>
      </section>

      {/* --- GALLERY ANIMATION (Section 5) --- */}
      <section id="produits">
        <GalleryAnimation />
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-obsidian/5 dark:border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
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

      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
        }
        .animate-on-scroll.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .selection\:text-obsidian ::selection { color: #0a0a0a; }
      `}</style>
    </main>
  );
}

/** --- SOUS-COMPOSANTS --- */
function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 bg-obsidian/[0.02] dark:bg-white/[0.03] border border-obsidian/5 dark:border-white/10 rounded-[32px] hover:border-cyan-marsal/30 transition-all group animate-on-scroll">
      <div className="w-14 h-14 rounded-full bg-obsidian/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-silver-marsal/80 dark:text-silver-marsal/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex gap-5">
      <div className="w-1 bg-gradient-to-b from-cyan-marsal to-magenta-marsal rounded-full"></div>
      <div>
        <h3 className="text-4xl font-black tracking-tighter">
          <span className="text-cyan-marsal">{value}</span> <span className="font-light text-obsidian/60 dark:text-silver-marsal/80 uppercase text-xs tracking-widest ml-2">{label}</span>
        </h3>
      </div>
    </div>
  );
}