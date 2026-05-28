import React, { useEffect, useState, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

// CONFIGURATION DES IMAGES : Modifiez les URL et descriptions ici
const ABOUT_CAROUSEL_IMAGES = [
  { src: "/images/1.png", alt: "Intérieur connecté Marsal Technologies" },
  { src: "/images/2.png", alt: "Système de sécurité intelligent" },
  { src: "/images/logo.jpeg", alt: "Innovation et Expertise" },
];

export function AboutSection() {
  // État pour l'API Embla afin de piloter l'autoplay
  const [api, setApi] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Gestion interne du Reveal pour éviter le conflit avec main.js
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // On garde l'état à true, React s'occupera de maintenir la classe
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Gestion de l'Autoplay automatique et fluide
  useEffect(() => {
    if (!api) return;
    
    // Défilement automatique toutes les 3.5 secondes
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="grid-2 align-center">
          
          {/* Bloc de texte conservant la structure originale */}
          <div className={`reveal ${isVisible ? 'visible' : ''}`}>
            <div className={`hero-actions reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <a href="/solutions.html" className="btn btn-primary">
                Découvrir nos solutions
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="/catalogue.html" className="btn btn-ghost">Voir le catalogue</a>
            </div>
            <h2 className="display-md" style={{ margin: '1.5rem 0' }}>Innovation, Sécurité & Expertise</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Marsal Technologies se spécialise dans les solutions modernes de sécurité et d'automatisation intelligentes pour les maisons, les bureaux et les entreprises. Nous proposons des technologies innovantes, notamment des serrures intelligentes, des systèmes de surveillance, des systèmes de contrôle d'accès, des solutions réseau, des interrupteurs intelligents et d'autres dispositifs de sécurité intelligents qui améliorent la sécurité, le confort et l'efficacité.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              Notre objectif est de fournir des solutions fiables, modernes et conviviales qui répondent aux besoins évolutifs de nos clients grâce à une installation professionnelle, une expertise technique et un service de qualité.
            </p>
          </div>

          {/* Bloc Carrousel Automatique */}
          <div className={`reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            <Carousel 
              setApi={setApi} 
              opts={{ 
                loop: true,
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {ABOUT_CAROUSEL_IMAGES.map((item, index) => (
                  <CarouselItem key={index}>
                    {/* Structure flexible demandée */}
                    <div className="flex-none w-full">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-[400px] object-cover rounded-2xl shadow-xl border border-[#C2C8D4]" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  );
}