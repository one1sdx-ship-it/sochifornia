"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { GradientImage } from "@/components/gradient-image";

export function TourGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img + i}
            onClick={() => setActive(img)}
            className="overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Открыть фото ${i + 1}`}
          >
            <GradientImage
              id={img}
              label={`${title} — фото ${i + 1}`}
              className="aspect-[4/3] w-full transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Закрыть"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white"
            onClick={() => setActive(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <GradientImage
            id={active}
            label={title}
            className="aspect-video w-full max-w-4xl rounded-xl"
          />
        </div>
      )}
    </>
  );
}
