import React, { useEffect, useState, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

// CONFIGURATION DES IMAGES : Modifiez les URL et descriptions ici
const ABOUT_CAROUSEL_IMAGES = [
  { src: "/images/lampe2.jpeg", alt: "Innovation et Expertise" },
  { src: "/images/lampe6.jpeg", alt: "Innovation et Expertise" },
  { src: "/images/ser16.jpeg", alt: "Innovation et Expertise" },
  { src: "/images/ser2.png", alt: "Innovation et Expertise" },

  { src: "/images/table1.png", alt: "Innovation et Expertise" },
  { src: "/images/ecran.png", alt: "Innovation et Expertise" },
  { src: "/images/echo3.jpeg", alt: "Innovation et Expertise" },
  { src: "/images/cam2.png", alt: "Intérieur connecté Marsal Technologies" },
  { src: "/images/cam3.png", alt: "Système de sécurité intelligent" },
  
];

export function AboutSection() {
  // État pour l'API Embla afin de piloter l'autoplay
  const [api, setApi] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Gestion interne du Reveal pour éviter le conflit avec main.js
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
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
    <section 
      ref={sectionRef} 
      className={`section-sm ${isVisible ? 'visible' : ''}`} 
      style={{ 
        background: 'var(--bg-white)', 
        borderBottom: '1px solid var(--border)', 
        paddingBlock: 'clamp(2rem, 5vw, 5rem)',
        opacity: isVisible ? 1 : 0, 
        transition: 'opacity 0.8s ease-out' 
      }}
    >
      <div className="container">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease-out 0.2s' }}>
            <div className="hero-actions" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <a href="/solutions.html" className="btn btn-primary">
                Découvrir nos solutions
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="/catalogue.html" className="btn btn-ghost">Voir le catalogue</a>
            </div>
            <h2 className="display-md" style={{ margin: '1.5rem 0', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontFamily: 'var(--font-heading)' }}>Innovation, Sécurité & Expertise</h2>
            <div style={{ fontSize: 'clamp(1rem, 1.2vw, 1.1rem)', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '2rem' }}>
              <p>Marsal Technologies se spécialise dans <strong>les solutions modernes de sécurité et d'automatisation électronique</strong> pour les maisons, les bureaux et les entreprises.</p>
              <p>Nous proposons des <strong>technologies innovantes</strong>, notamment des serrures intelligentes, des systèmes de surveillance et de contrôle d'accès qui améliorent <strong>la sécurité, le confort et l'efficacité.</strong></p>
            </div>
            <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.1rem)', color: 'var(--text-main)', lineHeight: '1.8' }}>
              Notre objectif est de fournir des solutions fiables, modernes et conviviales qui répondent aux besoins évolutifs de nos clients grâce à une installation professionnelle, une expertise technique et un service de qualité.
            </p>
          </div>

          <div className={`order-1 lg:order-2 w-full reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
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
                        loading="lazy"
                        className="w-full aspect-[4/3] lg:aspect-auto lg:h-[450px] object-cover rounded-3xl shadow-2xl border border-[#C2C8D4]" 
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