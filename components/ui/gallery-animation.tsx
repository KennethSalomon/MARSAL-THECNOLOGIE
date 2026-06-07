"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Images de tes produits (remplace par les tiennes si besoin)
const productsData = [
  {
    src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    name: "Serrure Biométrique NEXUS",
    price: "285 000 FCFA",
  },
  { src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800", name: "Caméra IA SENTINEL", price: "189 000 FCFA" },
  {
    src: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800",
    name: "Thermostat Smart KRYPTON",
    price: "145 000 FCFA",
  },
  { src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800", name: "Éclairage Ambiant LUMIÈRE", price: "95 000 FCFA" },
];

export default function GalleryAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setHeight(entry.contentRect.height);
        }
      });
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]); // Désactivé
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // Désactivé (toujours 1)

  return (
    <div
      id="gallery"
      className="relative py-24 bg-obsidian w-screen left-1/2 -translate-x-1/2 overflow-hidden"
    >
      {/* Titre de la section */}
      <div className="text-center mb-16 px-6">
        <span className="font-mono-tech text-cyan-marsal text-sm tracking-widest uppercase mb-4 block">
          Collection Signature
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-white">
          Les <span className="text-magenta-marsal font-bold">incontournables</span>
        </h2>
      </div>

      {/* Conteneur de la galerie 3D */}
      <div
        ref={containerRef}
        className="relative h-[60vh] md:h-[80vh] w-full m-0 p-0 flex items-center overflow-visible"
      >
        <div
          className="absolute inset-0 bg-obsidian/20"
          style={{ height: `${height}px` }}
        />

        {/* Images animées */}
        <div className="absolute inset-0 flex gap-4 md:gap-8 items-center justify-start px-0">
          {productsData.map((product, i) => {
            const yPos = useTransform(
              scrollYProgress,
              [0, 1],
              [0, height * 0.5 * (i % 2 === 0 ? 1 : -1)]
            );
            const scale = useTransform(
              scrollYProgress,
              [0, 1],
              [1, i % 2 === 0 ? 0.7 : 1.2]
            );
            const rotate = useTransform(
              scrollYProgress,
              [0, 1],
              [0, i % 2 === 0 ? -10 : 10]
            );

            return (
              <motion.div
                key={i}
                style={{ y: yPos, scale: 1, rotate, zIndex: i + 1, opacity: 1.0 }}
                className="relative w-1/3 md:w-1/4 h-48 md:h-64 rounded-3xl overflow-hidden shadow-2xl"
              > 
                <img
                  src={product.src}
                  alt={`Product ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-mono-tech text-xs tracking-widest text-cyan-marsal">
                    {product.name}
                  </p>
                  <p className="font-exo text-sm">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}