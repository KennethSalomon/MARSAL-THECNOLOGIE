"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: "01",
    title: "Marsal Technologies",
    description: "L'expertise domotique au service de votre confort et de votre sécurité.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "02",
    title: "Innovation Utile",
    description: "Des technologies intelligentes pensées pour simplifier votre quotidien.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "03",
    title: "Sécurité Renforcée",
    description: "Surveillance et contrôle d'accès de pointe pour une sérénité totale.",
    image: "https://images.unsplash.com/photo-1622322046484-88484a923576?q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "04",
    title: "Qualité Pro",
    description: "Une installation soignée et des équipements haute performance garantis.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "05",
    title: "Accompagnement",
    description: "Un suivi personnalisé de la conception à la maintenance de vos systèmes.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "06",
    title: "Solutions Sur Mesure",
    description: "Des solutions adaptées aux besoins uniques de chaque résidence ou bureau.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "07",
    title: "Confiance Totale",
    description: "Une relation transparente et durable avec nos clients et partenaires.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "08",
    title: "Présence Locale",
    description: "Un acteur engagé au cœur du Bénin pour l'innovation technologique.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function EditorialScrollSection() {
  return (
    <section className="bg-white dark:bg-obsidian py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px] md:auto-rows-[300px]">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 backdrop-blur-md ${item.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ borderColor: "#00e5ff" }}
            >
              {/* Background Image */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover brightness-[0.7]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="relative h-full w-full p-8 flex flex-col justify-end">
                <div className="absolute top-8 right-8 font-mono text-[10px] text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
                  {item.id} // {item.title}
                </div>
                <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-cyan-marsal transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 font-light leading-snug max-w-[90%]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
