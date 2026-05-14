"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    title: "Contrôle d'accès Intelligent",
    url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: "Gestion Énergétique Optimisée",
    url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: "Sécurité Périmétrique 24/7",
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: "Confort Thermique Automatisé",
    url: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=800',
  },
];

const FLIP_SPEED = 750;
const flipTiming = { duration: FLIP_SPEED, iterations: 1 };

// Animations de flip (bascule)
const flipAnimationTop = [{ transform: 'rotateX(0)' }, { transform: 'rotateX(-90deg)' }, { transform: 'rotateX(-90deg)' }];
const flipAnimationBottom = [{ transform: 'rotateX(90deg)' }, { transform: 'rotateX(90deg)' }, { transform: 'rotateX(0)' }];
const flipAnimationTopReverse = [{ transform: 'rotateX(-90deg)' }, { transform: 'rotateX(-90deg)' }, { transform: 'rotateX(0)' }];
const flipAnimationBottomReverse = [{ transform: 'rotateX(0)' }, { transform: 'rotateX(90deg)' }, { transform: 'rotateX(90deg)' }];

export default function FlipGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniteRef = useRef<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlayDelay, setAutoPlayDelay] = useState(5000); // 5s par défaut

  // Initialisation des images
  useEffect(() => {
    if (!containerRef.current) return;
    uniteRef.current = Array.from(containerRef.current.querySelectorAll('.unite'));
    defineFirstImg();
  }, []);

  // Logique d'Auto-play avec délai variable (pour l'interruption)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleUpdateIndex(1, false);
      setAutoPlayDelay(5000); // On repasse à 5s après un défilement auto
    }, autoPlayDelay);

    return () => clearTimeout(timer);
  }, [currentIndex, autoPlayDelay]);

  const defineFirstImg = () => {
    uniteRef.current.forEach((el) => setActiveImage(el as HTMLElement, currentIndex));
    setImageTitle();
  };

  const setActiveImage = (el: HTMLElement, index: number) => {
    el.style.backgroundImage = `url('${images[index].url}')`;
  };

  const setImageTitle = () => {
    const gallery = containerRef.current;
    if (!gallery) return;
    gallery.setAttribute('data-title', images[currentIndex].title);
    gallery.style.setProperty('--title-opacity', "1");
    gallery.style.setProperty('--title-y', "0");
  };

  const updateGallery = (nextIndex: number, isReverse = false) => {
    const gallery = containerRef.current;
    if (!gallery || !gallery.querySelector('.overlay-top')) return;

    const topAnim = isReverse ? flipAnimationTopReverse : flipAnimationTop;
    const bottomAnim = isReverse ? flipAnimationBottomReverse : flipAnimationBottom;

    gallery.querySelector('.overlay-top')?.animate(topAnim, flipTiming);
    gallery.querySelector('.overlay-bottom')?.animate(bottomAnim, flipTiming);

    gallery.style.setProperty('--title-opacity', "0");
    gallery.style.setProperty('--title-y', "-1rem");

    uniteRef.current.forEach((el, idx) => {
      const delay = (isReverse && (idx !== 1 && idx !== 2)) || (!isReverse && (idx === 1 || idx === 2)) ? FLIP_SPEED - 200 : 0;
      setTimeout(() => setActiveImage(el as HTMLElement, nextIndex), delay);
    });

    setTimeout(setImageTitle, FLIP_SPEED * 0.5);
  };

  const handleUpdateIndex = (increment: number, isManual = true) => {
    if (isManual) {
      setAutoPlayDelay(10000); // Interruption : on attend 10s avant le prochain auto-flip
    }
    const newIndex = (currentIndex + increment + images.length) % images.length;
    setCurrentIndex(newIndex);
    updateGallery(newIndex, increment < 0);
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center bg-transparent font-exo'>
      <div
        className='relative bg-obsidian dark:bg-obsidian border-[0.5px] border-cyan-marsal/30 p-2 rounded-[24px] shadow-[0_0_40px_rgba(0,0,0,0.3)]'
      >
        {/* Flip Gallery Mechanical Structure */}
        <div
          id='flip-gallery'
          ref={containerRef}
          className='relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] text-center select-none'
          style={{ perspective: '1200px' }}
        >
          <div className='top unite bg-cover bg-no-repeat absolute inset-0 h-1/2 bottom-auto origin-bottom z-0'></div>
          <div className='bottom unite bg-cover bg-no-repeat absolute inset-0 h-1/2 top-auto origin-top z-0'></div>
          <div className='overlay-top unite bg-cover bg-no-repeat absolute inset-0 h-1/2 bottom-auto origin-bottom z-10'></div>
          <div className='overlay-bottom unite bg-cover bg-no-repeat absolute inset-0 h-1/2 top-auto origin-top z-10'></div>
        </div>

        {/* Manual Navigation */}
        <div className='absolute top-full right-2 mt-4 flex gap-4'>
          <button
            onClick={() => handleUpdateIndex(-1)}
            className='w-10 h-10 rounded-full border border-white/10 dark:border-white/10 flex items-center justify-center text-cyan-marsal/60 hover:text-cyan-marsal hover:border-cyan-marsal/40 transition-all active:scale-90'
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleUpdateIndex(1)}
            className='w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cyan-marsal/60 hover:text-cyan-marsal hover:border-cyan-marsal/40 transition-all active:scale-90'
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style jsx>{`
        #flip-gallery::after {
          content: '';
          position: absolute;
          background-color: #00e5ff;
          box-shadow: 0 0 10px #00e5ff, 0 0 20px rgba(0, 229, 255, 0.4);
          width: 100%;
          height: 1px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 20;
        }

        #flip-gallery::before {
          content: attr(data-title);
          color: #00e5ff;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.85rem;
          letter-spacing: 2px;
          position: absolute;
          top: calc(100% + 1.2rem);
          left: 0;
          opacity: var(--title-opacity, 0);
          transform: translateY(var(--title-y, 0));
          transition: all 500ms ease-in-out;
          text-transform: uppercase;
        }

        .unite {
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 50%;
        }

        @media (max-width: 768px) {
          .unite { background-size: 280px 350px; }
        }

        .top, .overlay-top { background-position: top; top: 0; }
        .bottom, .overlay-bottom { background-position: bottom; bottom: 0; }
      `}</style>
    </div>
  );
}
