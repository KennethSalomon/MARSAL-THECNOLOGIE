"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export default function DashboardShowcase() {
  return (
    <section className="relative bg-[#050505] overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4 leading-tight">
              Prenez le contrôle de votre <br />
              <span className="text-cyan-marsal font-bold mt-2 leading-none">environnement</span>
            </h1>
            <p className="text-silver-marsal/70 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
              Une tech invisible, un confort absolu.
            </p>
          </>
        }
      >
        <img
          src="/images/dashboard-ui.jpg"
          alt="Marsal Tech Dashboard"
          className="w-full h-full object-cover object-center opacity-80"
          onError={(e) => {
            // Fallback if image is missing
            e.currentTarget.src = 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2000&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
      </ContainerScroll>
    </section>
  );
}
