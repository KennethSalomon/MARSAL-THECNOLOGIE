"use client";

import React, { useEffect, useState } from 'react';
import FlipGallery from '@/components/ui/flip-gallery';
import { Shield, Zap, Monitor, ChevronLeft, ChevronRight, MessageCircle, Mail, Facebook, Twitter, Linkedin, Moon, Sun } from 'lucide-react';

export default function MarsalTechPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Gestion simple de l'Intersection Observer pour les animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-obsidian min-h-screen text-white font-exo overflow-x-hidden selection:bg-cyan-marsal selection:text-obsidian">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-obsidian/80 backdrop-blur-md border-b border-cyan-marsal/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-cyan-marsal/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
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
            <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-marsal/40 transition-all">
              <Sun size={16} className="text-silver-marsal/70" />
            </button>
          </div>
        </div>
      </header>
      
      {/* --- HERO SECTION --- */}
      <section id="accueil" className="min-h-screen flex items-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 items-center w-full relative z-10">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <span className="font-mono-tech text-cyan-marsal text-sm tracking-[2px] mb-4 block">SYSTÈME D'EXCELLENCE</span>
            <h1 className="text-5xl md:text-8xl font-light leading-tight">
              L' <span className="text-cyan-marsal font-bold">intelligence</span><br />
              à l'état <span className="text-magenta-marsal font-bold">pur</span>
            </h1>
            <p className="text-silver-marsal/60 text-lg mt-8 max-w-lg">
              Domotique de prestige · Sécurité absolue · Économies intelligentes. <br /> Basé à Cotonou, Bénin.
            </p>
            <div className="flex gap-5 mt-10">
              <button className="px-8 py-4 border border-cyan-marsal/40 rounded-full text-cyan-marsal hover:bg-cyan-marsal/10 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] font-mono-tech text-xs tracking-widest uppercase">
                Découvrir la collection
              </button>
            </div>
          </div>
          
          <div className="h-[450px] lg:h-[750px] relative">
             <div className="w-full h-full bg-gradient-to-b from-cyan-marsal/10 to-transparent rounded-full blur-[120px] absolute inset-0 -z-10"></div>
             <iframe src='https://my.spline.design/kZDDjO5HuC9GJUM2/' width='100%' height='100%' className="pointer-events-auto"></iframe>
          </div>
        </div>
      </section>

      {/* --- SERVICES (Section 2) --- */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <span className="font-mono-tech text-cyan-marsal text-sm tracking-widest uppercase">Expertise Domotique</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">Une intelligence <span className="text-magenta-marsal">invisible</span></h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-marsal to-transparent mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Shield className="text-cyan-marsal" />} 
            title="Sécurité absolue" 
            desc="Systèmes de surveillance 4K, détection faciale IA et accès biométrique." 
          />
          <ServiceCard
            icon={<Zap className="text-magenta-marsal" />} 
            title="Énergie intelligente" 
            desc="Réduction jusqu'à 32% de consommation via notre IA." 
          />
          <ServiceCard
            icon={<Monitor className="text-cyan-marsal" />} 
            title="Confort total" 
            desc="Éclairage d'ambiance et scénarios personnalisés." 
          />
        </div>
      </section>

      {/* --- GALLERY CAROUSEL (Section 3) --- */}
      <section id="galerie" className="py-24 bg-obsidian/50 relative overflow-hidden">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all">
          <span className="font-mono-tech text-cyan-marsal text-sm tracking-widest uppercase">Galerie Immersive</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 italic">L'esthétique de <span className="text-magenta-marsal">l'innovation</span></h2>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="aspect-video bg-gradient-to-br from-white/5 to-transparent rounded-[32px] border border-white/10 flex items-center justify-center overflow-hidden group">
            <div className="text-center p-12 transition-all group-hover:scale-105 duration-700">
              <span className="font-mono-tech text-cyan-marsal text-xs mb-4 block uppercase tracking-[0.3em]">Ambiance 0{currentSlide + 1}</span>
              <h3 className="text-4xl md:text-6xl font-light">Living Room Connecté</h3>
            </div>
          </div>
          
          <button onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 2))} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-white/10 bg-obsidian flex items-center justify-center hover:border-cyan-marsal transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 0))} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full border border-white/10 bg-obsidian flex items-center justify-center hover:border-cyan-marsal transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* --- WHY US (Section 4) --- */}
      <section id="avantages" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <span className="font-mono-tech text-cyan-marsal text-sm tracking-[2px] uppercase">Pourquoi Marsal ?</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
              La technologie au service de l' <span className="text-magenta-marsal font-bold">excellence</span>
            </h2>
            
            <div className="space-y-10 mt-12">
              <StatItem value="+500" label="installations" />
              <StatItem value="24/7" label="support premium" />
              <StatItem value="10 ans" label="garantie" />
            </div>
          </div>

          <div className="w-full flex justify-center animate-on-scroll opacity-0 scale-95 transition-all duration-1000 delay-200">
            <FlipGallery />
          </div>
        </div>
      </section>

      {/* --- MARQUEE PRODUCTS (Section 5) --- */}
      <section id="produits" className="py-32 border-y border-white/5 bg-white/[0.02]">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="font-mono-tech text-cyan-marsal text-sm tracking-widest uppercase">Collection Signature</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">Les <span className="text-magenta-marsal font-bold">incontournables</span></h2>
        </div>
        <div className="flex animate-marquee whitespace-nowrap gap-20">
           {[1,2,3,4].map((i) => (
             <div key={i} className="flex gap-10 items-center">
                <ProductCard name="NEXUS MX-8" price="285 000 FCFA" />
                <ProductCard name="KRYPTON SL-7" price="189 000 FCFA" />
                <ProductCard name="SENTINEL AI" price="145 000 FCFA" />
             </div>
           ))}
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[40px] p-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <span className="font-mono-tech text-cyan-marsal text-xs tracking-[0.4em] uppercase">Projet Sur-Mesure</span>
          <h2 className="text-3xl md:text-5xl font-light mt-6">Prêt à transformer <br />votre espace ?</h2>
          <p className="text-silver-marsal/60 mt-6 max-w-md mx-auto">Échangeons sur vos besoins. Notre équipe vous recontacte sous 24h.</p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <button className="px-8 py-4 bg-white/5 border border-cyan-marsal/30 rounded-full flex items-center gap-3 hover:bg-cyan-marsal/10 transition-all group">
              <MessageCircle size={18} className="text-cyan-marsal" />
              <span className="text-sm font-mono-tech">WhatsApp</span>
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 hover:border-magenta-marsal/50 transition-all">
              <Mail size={18} />
              <span className="text-sm font-mono-tech">Email</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-exo text-2xl font-bold tracking-widest uppercase">MARSAL <span className="text-cyan-marsal">TECH</span></div>
            <p className="text-silver-marsal/40 text-[10px] mt-2 font-mono-tech tracking-widest uppercase">Intelligence Invisible · Domotique Prestige · Cotonou</p>
          </div>
          
          <div className="flex gap-6">
            {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-silver-marsal/50 hover:text-cyan-marsal hover:border-cyan-marsal/30 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-12 text-[9px] font-mono-tech text-silver-marsal/20 tracking-[0.3em] uppercase">
          © 2026 MARSAL TECHNOLOGIES — DESIGNED BY KEDYS AGENCY
        </div>
      </footer>

    </main>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 bg-white/[0.03] border border-white/10 rounded-[32px] hover:border-cyan-marsal/30 transition-all group animate-on-scroll opacity-0 translate-y-10">
      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-silver-marsal/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ProductCard({ name, price }: { name: string, price: string }) {
  return (
    <div className="inline-flex flex-col p-8 bg-white/[0.03] border border-white/10 rounded-[24px] min-w-[300px] text-center">
      <div className="text-4xl mb-4">🧠</div>
      <div className="font-exo text-lg font-semibold tracking-wide uppercase">{name}</div>
      <div className="text-cyan-marsal font-mono-tech text-xs mt-2 tracking-widest">{price}</div>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex gap-5">
      <div className="w-1 bg-gradient-to-b from-cyan-marsal to-magenta-marsal rounded-full"></div>
      <div>
        <h3 className="text-4xl font-black tracking-tighter">
          <span className="text-cyan-marsal">{value}</span> <span className="font-light text-silver-marsal/80">{label}</span>
        </h3>
      </div>
    </div>
  );
}