'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface Image {
    src: string;
    alt?: string;
}

interface ZoomParallaxProps {
    images: Image[];
    children: React.ReactNode;
}

export function ZoomParallax({ images, children }: ZoomParallaxProps) {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        // L'animation s'exécute sur toute la hauteur du conteneur (300vh)
        offset: ['start start', 'end end'],
    });

    // Configuration des échelles rigoureusement identique à la source .design
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]); // L'image centrale remplit l'écran
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]); // Les suivantes sortent du champ plus vite
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

    return (
        <div ref={container} className="relative h-[300vh] w-full">
            <div className="sticky top-0 h-screen overflow-hidden bg-white dark:bg-neutral-950">
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length];

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={cn(
                                "absolute top-0 flex h-full w-full items-center justify-center",
                                // Mapping rigoureux des positions du fichier .design
                                index === 0 && "z-0 [&>div]:w-[25vw] [&>div]:h-[25vh]", // Centre
                                index === 1 && "z-[1] [&>div]:-top-[30vh] [&>div]:left-[5vw] [&>div]:w-[35vw] [&>div]:h-[30vh]",
                                index === 2 && "z-[2] [&>div]:-top-[10vh] [&>div]:-left-[25vw] [&>div]:w-[20vw] [&>div]:h-[45vh]",
                                index === 3 && "z-[3] [&>div]:left-[27.5vw] [&>div]:w-[25vw] [&>div]:h-[25vh]",
                                index === 4 && "z-[4] [&>div]:top-[27.5vh] [&>div]:left-[5vw] [&>div]:w-[20vw] [&>div]:h-[25vh]",
                                index === 5 && "z-[5] [&>div]:top-[27.5vh] [&>div]:-left-[22.5vw] [&>div]:w-[30vw] [&>div]:h-[25vh]",
                                index === 6 && "z-[6] [&>div]:top-[22.5vh] [&>div]:left-[25vw] [&>div]:w-[15vw] [&>div]:h-[15vh]"
                            )}
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                <img
                                    src={src}
                                    alt={alt || `Domotique ${index + 1}`}
                                    className="h-full w-full object-cover brightness-[0.6]"
                                />
                                {/* Overlay sombre (50%) pour la lisibilité du texte blanc */}
                                <div className="absolute inset-0 bg-neutral-100/50 dark:bg-black/50 ring-1 ring-white/10" />
                            </div>
                        </motion.div>
                    );
                })}

                {/* Contenu Central Fixe */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="pointer-events-auto w-full px-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}