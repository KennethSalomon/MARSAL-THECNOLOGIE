import React from 'react';
import { Gallery4 } from './ui/gallery4';
import { SERVICES_GALLERY } from '@/data/services';

export function ServicesSection() {
  return (
    <section className="py-20 bg-white" style={{ background: 'var(--bg-white)' }}>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Header - Preserve existing structure */}
        <div className="section-header reveal mb-12">
          <div className="pill inline-block mb-4 px-3 py-1 bg-blue-50 rounded-full text-sm font-semibold text-[#386FA8]">
            Ce que nous faisons
          </div>
          <h2 className="display-lg text-4xl md:text-5xl font-bold text-[#444A52] mb-4 leading-tight">
            Des solutions pensées<br />pour votre confort
          </h2>
          <p className="text-lg text-[#7A8290] max-w-2xl">
            Chaque système est conçu sur mesure, installé par nos experts certifiés, et piloté via une application intuitive.
          </p>
        </div>

        {/* Gallery4 Component */}
        <Gallery4
          items={SERVICES_GALLERY?.items ?? []}
          className="my-12"
        />

        {/* CTA Button - Preserve existing structure */}
        <div className="flex justify-center mt-12 reveal">
          <a
            href="/solutions.html"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#386FA8] text-[#386FA8] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
          >
            Toutes nos solutions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
