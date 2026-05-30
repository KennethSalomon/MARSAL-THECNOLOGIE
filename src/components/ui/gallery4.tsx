"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
  className?: string;
}

// 1. On définit de superbes données par défaut directement ici pour éviter les crashs
const defaultSlides: Gallery4Item[] = [
  {
    id: "slide-1",
    title: "Maison Intelligente & Connectée",
    description: "Pilotez votre éclairage, vos volets et vos équipements multimédias en un seul geste.",
    href: "#",
    image: "/images/cam1.png"
  },
  {
    id: "slide-2",
    title: "Sécurité Haute Performance",
    description: "Caméras de vidéosurveillance et capteurs connectés pour une protection intégrale 24/7.",
    href: "#",
    image: "/images/panneau.png"
  },
  {
    id: "slide-3",
    title: "Contrôle d'Accès Premium",
    description: "Serrures biométriques et gestion des accès à distance pour votre totale sérénité.",
    href: "#",
    image: "/images/serrure.png"
  },
  {
    id: "slide-4",
    title: "Énergie Solaire & Autonomie",
    description: "Optimisez votre consommation avec nos solutions solaires hybrides et stockage intelligent.",
    href: "#",
    image: "/images/panneau.png"
  },
  {
    id: "slide-5",
    title: "Vidéosurveillance Intelligente",
    description: "Gardez un œil sur votre propriété avec des caméras 4K et détection d'intrusion par IA.",
    href: "#",
    image: "/images/camera.png"
  },
  {
    id: "slide-6",
    title: "Audio & Cinéma Maison",
    description: "Vivez une immersion sonore totale avec nos systèmes audio multi-pièces et home cinéma.",
    href: "#",
    image: "/images/cam2.png"
  },
  {
    id: "slide-7",
    title: "Réseaux & Connectivité",
    description: "Un Wi-Fi ultra-rapide et stable partout, pour supporter tous vos objets connectés.",
    href: "#",
    image: "/images/domotique.png"
  }
];

const Gallery4 = ({
  title = "Solutions Domotiques",
  description = "Découvrez nos dernières réalisations en matière d'automatisation résidentielle et de sécurité de luxe.",
  items = defaultSlides, // 2. On utilise nos slides sécurisées ici
  className,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Gestion interne du Reveal pour le contenu React
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi?.canScrollPrev() ?? false);
      setCanScrollNext(carouselApi?.canScrollNext() ?? false);
      setCurrentSlide(carouselApi?.selectedScrollSnap() ?? 0);
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => { carouselApi.off("select", updateSelection); };
  }, [carouselApi]);

  return (
    <section
      ref={sectionRef}
      id="solutions-gallery"
      className={cn(
        "pt-16 pb-20 bg-[#f8fafc] text-slate-900 catalog-section reveal flex flex-col",
        isVisible ? "visible" : "",
        className
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="container mx-auto px-6">
        {/* Étape 1 : Header Restructuré */}
        <div className="flex justify-between items-end mb-12 w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-[#386FA8] leading-tight">
              {title}
            </h2>
            <p className="max-w-lg text-slate-600 font-medium text-lg">{description}</p>
          </div>
        </div>
      </div>

      {/* Étape 2 : Carrousel Pleine Largeur */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
          className="w-full"
        >
          {/* Correction du Track : On laisse le Carousel gérer l'overflow pour éviter le blocage des cartes */}
          <CarouselContent className="ml-0 flex gap-8 p-4 pb-8">
            {(items ?? []).map((item) => (
              <CarouselItem
                key={item.id}
                className="flex-none basis-auto w-[280px] md:w-[350px] pl-0"
              >
                <a href={item.href} className="group rounded-3xl block h-full">
                  <div className="group relative flex flex-col h-full min-h-[28rem] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                    <div className="relative h-60 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/logo.png';
                        }}
                      />
                    </div>
                    <div className="flex flex-col items-start p-6 text-slate-900 md:p-8">
                      <div className="mb-2 text-xl font-bold">
                        {item.title}
                      </div>
                      <div className="mb-6 line-clamp-2 text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </div>
                      <div className="mt-auto flex items-center text-sm font-bold text-[#386FA8]">
                        En savoir plus{" "}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Étape 3 : Carousel Footer (Contrôles massifs + CTA restylé) */}
      <div className="container mx-auto px-6 mt-8">
        <div className="carousel-footer flex flex-col items-center md:items-start gap-8">
          
          {/* Carousel Controls */}
          <div className="carousel-controls flex gap-4">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-white shadow-xl text-[#386FA8] hover:bg-[#386FA8] hover:text-white transition-all flex items-center justify-center border-none cursor-pointer disabled:opacity-30 group"
              aria-label="Précédent"
            >
              <ArrowLeft className="size-6 transition-transform group-active:scale-90" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-white shadow-xl text-[#386FA8] hover:bg-[#386FA8] hover:text-white transition-all flex items-center justify-center border-none cursor-pointer disabled:opacity-30 group"
              aria-label="Suivant"
            >
              <ArrowRight className="size-6 transition-transform group-active:scale-90" />
            </button>
          </div>

          {/* CTA Button Restylé */}
          <a 
            href="/catalogue.html" 
            className="btn-all-solutions group flex items-center gap-3 bg-white text-[#386FA8] border-2 border-[#386FA8] px-8 py-4 font-bold rounded-full transition-all duration-300 hover:bg-[#386FA8] hover:text-white no-underline shadow-sm"
          >
            Tout le catalogue
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };