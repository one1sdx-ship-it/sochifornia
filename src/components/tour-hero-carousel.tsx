"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GradientImage } from "@/components/gradient-image";
import { cn } from "@/lib/utils";

// Временно: 7 одинаковых фото (1 оригинал + 6 копий), пронумерованы 1..7
const SLIDES = 7;

export function TourHeroCarousel({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children: React.ReactNode;
}) {
  const images = Array.from({ length: SLIDES }, () => image);
  const [index, setIndex] = useState(0);
  const activeThumb = useRef<HTMLButtonElement | null>(null);

  const startX = useRef(0);
  const startY = useRef(0);

  const go = (i: number) => setIndex(((i % SLIDES) + SLIDES) % SLIDES);

  useEffect(() => {
    activeThumb.current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  return (
    <>
      <section
        className="group/car relative overflow-hidden"
        onTouchStart={(e) => {
          startX.current = e.touches[0].clientX;
          startY.current = e.touches[0].clientY;
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - startX.current;
          const dy = e.changedTouches[0].clientY - startY.current;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
            go(index + (dx < 0 ? 1 : -1));
          }
        }}
      >
        <GradientImage
          id={images[index]}
          className="absolute inset-0 h-full w-full"
          label={`${title} — фото ${index + 1}`}
        />

        {/* Стрелки */}
        <button
          type="button"
          aria-label="Предыдущее фото"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black opacity-0 shadow transition hover:bg-white group-hover/car:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Следующее фото"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black opacity-0 shadow transition hover:bg-white group-hover/car:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Контент поверх фото (хлебные крошки, заголовок) */}
        <div className="relative z-10">{children}</div>
      </section>

      {/* Лента-превью под фото-блоком — во всю ширину (как фото сверху); внутренние отступы скроллятся вместе с превью, чтобы крайние фото не перекрывались белым контейнером */}
      <div className="border-b border-hairline bg-bg">
        <div className="flex gap-2 overflow-x-auto px-5 py-3 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map((img, i) => (
              <button
                key={i}
                ref={i === index ? activeThumb : null}
                type="button"
                aria-label={`Фото ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={cn(
                  "relative h-16 w-[86px] shrink-0 overflow-hidden rounded-md transition sm:h-20 sm:w-[101px]",
                  i === index
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-bg"
                    : "opacity-55 hover:opacity-100"
                )}
              >
                <GradientImage id={img} className="h-full w-full" />
              </button>
            ))}
        </div>
      </div>
    </>
  );
}
