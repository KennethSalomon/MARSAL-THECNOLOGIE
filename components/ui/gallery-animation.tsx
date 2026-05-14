"use client";

import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: "Serrure Biométrique NEXUS",
    price: "285 000 FCFA",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    emoji: "🔐"
  },
  {
    id: 2,
    name: "Caméra IA SENTINEL",
    price: "189 000 FCFA",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
    emoji: "📹"
  },
  {
    id: 3,
    name: "Thermostat Smart KRYPTON",
    price: "145 000 FCFA",
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=800",
    emoji: "🌡️"
  },
  {
    id: 4,
    name: "Éclairage Ambiant LUMIÈRE",
    price: "95 000 FCFA",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    emoji: "💡"
  }
];

export default function GalleryAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <div className="w-full py-24 px-6 bg-obsidian relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono-tech text-cyan-marsal text-sm tracking-widest uppercase mb-4 block animate-fade-in">
            Collection Signature
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Les <span className="text-magenta-marsal font-bold">incontournables</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Main Image Container */}
          <div className="relative aspect-video bg-gradient-to-br from-cyan-marsal/5 to-magenta-marsal/5 rounded-[32px] border border-white/10 overflow-hidden">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${product.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/50 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center px-12 py-16">
                  <div className="max-w-lg">
                    <div className="text-6xl mb-4 animate-bounce">{product.emoji}</div>
                    <h3 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-cyan-marsal font-mono-tech text-lg tracking-widest mb-8">
                      {product.price}
                    </p>
                    <button className="px-8 py-3 border border-cyan-marsal/40 rounded-full text-cyan-marsal hover:bg-cyan-marsal/10 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] font-mono-tech text-xs tracking-widest uppercase">
                      Découvrir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-20 w-12 h-12 rounded-full border border-cyan-marsal/30 bg-obsidian/50 backdrop-blur-sm flex items-center justify-center text-cyan-marsal hover:border-cyan-marsal hover:bg-cyan-marsal/10 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-20 w-12 h-12 rounded-full border border-cyan-marsal/30 bg-obsidian/50 backdrop-blur-sm flex items-center justify-center text-cyan-marsal hover:border-cyan-marsal hover:bg-cyan-marsal/10 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-cyan-marsal w-8"
                  : "bg-white/20 hover:bg-white/40 w-2"
              }`}
              aria-label={`Aller à la diapo ${idx + 1}`}
            />
          ))}
        </div>

        {/* Info Text */}
        <div className="text-center mt-12">
          <p className="text-silver-marsal/60 font-mono-tech text-xs tracking-widest uppercase">
            {currentIndex + 1} / {products.length}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
