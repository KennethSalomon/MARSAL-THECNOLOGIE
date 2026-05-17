'use client';

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import { ZoomParallax } from '@/components/zoom-parallax';

export default function Hero() {
    // Initialisation de Lenis pour un scroll "Smooth & Elastic"
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    const images = [
        {
            src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
            alt: 'Salon moderne domotisé',
        },
        {
            src: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
            alt: 'Interface tablette smart home',
        },
        {
            src: 'https://images.unsplash.com/photo-1513506494265-99b1579463c7?q=80&w=2070&auto=format&fit=crop',
            alt: 'Interrupteur tactile design',
        },
        {
            src: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2070&auto=format&fit=crop',
            alt: 'Caméra de sécurité élégante',
        },
        {
            src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
            alt: 'Éclairage intelligent bureau',
        },
        {
            src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            alt: 'Architecture moderne nuit',
        },
        {
            src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
            alt: 'Villa de prestige connectée',
        },
    ];

    return (
        <section className="relative w-full bg-black min-h-screen">
            <ZoomParallax images={images}>
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6"
                    >
                        Intelligence <br /> <span className="text-cyan-400">à l'état pur</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Domotique de prestige · Sécurité absolue · Économies intelligentes. <br />
                        <span className="font-normal text-white/90">Basé à Cotonou, Bénin.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-bold rounded-full transition-all hover:bg-cyan-300 hover:scale-105 active:scale-95">
                            Découvrir la collection
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 border border-cyan-400 text-white font-bold rounded-full transition-all hover:bg-cyan-400/10 active:scale-95">
                            Demander un devis
                        </button>
                    </motion.div>
                </div>
            </ZoomParallax>
        </section>
    );
}