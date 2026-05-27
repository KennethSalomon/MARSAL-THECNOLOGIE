"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
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
  items: Gallery4Item[];
  className?: string;
}

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover our latest achievements in smart home automation and luxury security solutions.",
  items = [],
  className,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => { carouselApi.off("select", updateSelection); };
  }, [carouselApi]);

  return (
    <section className={cn("py-12", className)}>
      <div className="container mx-auto px-0">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-[#444A52]">
              {title}
            </h2>
            <p className="max-w-lg text-[#7A8290]">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:opacity-30 border border-[#C2C8D4]"
            >
              <ArrowLeft className="size-5 text-[#386FA8]" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:opacity-30 border border-[#C2C8D4]"
            >
              <ArrowRight className="size-5 text-[#386FA8]" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-0">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[400px]"
              >
                <a href={item.href} className="group rounded-xl block h-full">
                  <div className="group relative h-full min-h-[24rem] overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#444A52]/90 via-[#444A52]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 text-xl font-bold">
                        {item.title}
                      </div>
                      <div className="mb-6 line-clamp-2 text-sm text-white/80">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm font-semibold text-[#E8F0F9]">
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
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 transition-all rounded-full ${
                currentSlide === index ? "w-8 bg-[#386FA8]" : "w-2 bg-[#386FA8]/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export { Gallery4 };