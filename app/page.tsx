"use client";

import React, { useEffect } from 'react';
import FlipGallery from '../components/ui/flip-gallery';
import GalleryAnimation, { GalleryProduct } from '../components/ui/gallery-animation';
import { CurtainThemeToggle } from '../components/ui/curtain-theme-toggle';
import {
  Shield,
  Zap,
  Monitor,
  Facebook,
  Twitter,
  Linkedin,
  Moon,
  Sun,
} from 'lucide-react';

const productCards: GalleryProduct[] = [
  {
    title: 'Smart Lock Elite',
    subtitle: 'Access Control',
    description: 'Secure smart lock with biometric recognition and remote access management.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    accent: 'Effortless Entry',
  },
  {
    title: 'Smart Thermostat',
    subtitle: 'Climate Comfort',
    description: 'Adaptive climate control and remote management for efficient comfort.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    accent: 'Smart Savings',
  },
  {
    title: 'Ultra HD Camera',
    subtitle: 'Surveillance',
    description: 'Night vision and real-time alerts for complete perimeter security.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80',
    accent: '24/7 Vision',
  },
  {
    title: 'Control Panel',
    subtitle: 'Central Control',
    description: 'Elegant touch interface to manage all systems from one location.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80',
    accent: 'Instant Control',
  },
];

export default function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

    return (
    <main className={`bg-white dark:bg-obsidian text-obsidian dark:text-white min-h-screen font-exo overflow-x-hidden selection:bg-cyan-marsal selection:text-obsidian scroll-smooth transition-colors duration-500`}>
      <header className={`fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-obsidian/80 backdrop-blur-md border-b border-cyan-marsal/20 transition-colors`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-cyan-marsal/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <span className="text-cyan-marsal font-bold text-xl">M</span>
            </div>
            <div>
              <div className="font-exo font-bold text-lg tracking-wider uppercase">MARSAL <span className="text-cyan-marsal">TECH</span></div>
              <div className="font-mono-tech text-[9px] text-silver-marsal/60 tracking-wider uppercase">Invisible Intelligence</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            {['Home', 'Services', 'Gallery', 'Benefits', 'Products', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-mono-tech text-xs text-silver-marsal/70 hover:text-cyan-marsal transition-colors uppercase tracking-widest">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-2">
              <button className="font-mono-tech text-[10px] px-2 py-1 rounded border border-cyan-marsal/30 text-cyan-marsal hover:bg-cyan-marsal/10 transition">FR</button>
              <button className="font-mono-tech text-[10px] px-2 py-1 rounded border border-silver-marsal/20 text-silver-marsal/60 hover:border-cyan-marsal/30 transition">EN</button>
            </div>
            <CurtainThemeToggle />
          </div>
        </div>
      </header>

      <section id="home" className="min-h-screen flex items-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 items-center w-full relative z-10">
          <div className="animate-on-scroll">
            <span className="font-mono-tech text-cyan-marsal text-sm tracking-[2px] mb-4 block">SYSTEM EXCELLENCE</span>
            <h1 className="text-5xl md:text-8xl font-light leading-tight">
              The <span className="text-cyan-marsal font-bold">intelligence</span><br />
              in its <span className="text-magenta-marsal font-bold">pure</span> form
            </h1>
            <p className="text-silver-marsal/60 text-lg mt-8 max-w-lg">
              Premium home automation · absolute security · smart efficiency. Based in Cotonou, Benin.
            </p>
            <div className="flex gap-5 mt-10">
              <button className="px-8 py-4 border border-cyan-marsal/40 rounded-full text-cyan-marsal hover:bg-cyan-marsal/10 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] font-mono-tech text-xs tracking-widest uppercase">
                Explore the collection
              </button>
            </div>
          </div>

          <div className="h-[450px] lg:h-[750px] relative">
            <div className="w-full h-full bg-gradient-to-b from-cyan-marsal/10 to-transparent rounded-full blur-[120px] absolute inset-0 -z-10"></div>
            <iframe src="https://my.spline.design/kZDDjO5HuC9GJUM2/" width="100%" height="100%" className="pointer-events-auto border-0 z-10 relative" />
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-mono-tech text-cyan-marsal text-sm tracking-widest uppercase">Home Automation Expertise</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">Invisible <span className="text-magenta-marsal font-bold">intelligence</span></h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-marsal to-transparent mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard icon={<Shield className="text-cyan-marsal" />} title="Absolute security" desc="4K surveillance, facial detection AI, and biometric access." />
          <ServiceCard icon={<Zap className="text-magenta-marsal" />} title="Smart energy" desc="Cut energy use by up to 32% with AI-driven control." />
          <ServiceCard icon={<Monitor className="text-cyan-marsal" />} title="Total comfort" desc="Ambient lighting and personalized home scenes." />
        </div>
      </section>

      <section id="benefits" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <span className="font-mono-tech text-cyan-marsal text-sm tracking-[2px] uppercase">Why Marsal?</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 leading-tight">
              Technology made for <span className="text-magenta-marsal font-bold">excellence</span>
            </h2>
            <div className="space-y-10 mt-12">
              <StatItem value="+500" label="installations" />
              <StatItem value="24/7" label="premium support" />
              <StatItem value="10 yrs" label="warranty" />
            </div>
          </div>
          <div className="w-full flex items-center justify-center animate-on-scroll delay-200">
            <FlipGallery />
          </div>
        </div>
      </section>

      <section id="products" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="font-mono-tech text-cyan-marsal text-sm tracking-widest uppercase">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">Connected solutions for prestige homes</h2>
          <p className="text-silver-marsal/60 text-base max-w-2xl mx-auto mt-6">
            A premium smart home lineup designed to elevate security, comfort and energy efficiency.
          </p>
        </div>
        <div className="animate-on-scroll">
          <GalleryAnimation products={productCards} />
        </div>
      </section>

      <footer className="border-t border-obsidian/5 dark:border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-exo text-2xl font-bold tracking-widest uppercase">MARSAL <span className="text-cyan-marsal">TECH</span></div>
            <p className="text-silver-marsal/60 dark:text-silver-marsal/40 text-[10px] mt-2 font-mono-tech tracking-widest uppercase">Invisible intelligence · premium home automation · Cotonou</p>
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
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </main>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
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

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex gap-5">
      <div className="w-1 bg-gradient-to-b from-cyan-marsal to-magenta-marsal rounded-full"></div>
      <div>
        <h3 className="text-4xl font-black tracking-tighter">
          <span className="text-cyan-marsal">{value}</span>{' '}
          <span className="font-light text-obsidian/60 dark:text-silver-marsal/80 uppercase text-xs tracking-widest ml-2">{label}</span>
        </h3>
      </div>
    </div>
  );
}
