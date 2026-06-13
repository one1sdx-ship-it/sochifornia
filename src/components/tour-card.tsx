import Link from "next/link";
import { Clock, Star, Users } from "lucide-react";
import type { Tour } from "@/data/types";
import { GradientImage } from "@/components/gradient-image";
import { formatPrice } from "@/lib/utils";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-[4/3] w-full">
        <GradientImage id={tour.image} className="h-full w-full transition-transform duration-500 group-hover:scale-105" label={tour.title} />
        <div className="absolute left-3 top-3 flex gap-2">
          {tour.vip && (
            <span className="rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-black/80">VIP</span>
          )}
          <span className="rounded-full bg-black/35 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {tour.format === "group" ? "Групповая" : "Индивидуальная"}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-black backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          {tour.rating}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">{tour.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-body">{tour.excerpt}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {tour.durationHours} ч
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> {tour.reviewsCount} отзывов
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-hairline pt-4">
          <div>
            <span className="text-xs text-muted">от</span>
            <p className="font-display text-xl font-bold text-ink">{formatPrice(tour.price)}</p>
            <span className="text-xs text-muted">за человека</span>
          </div>
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-primary-fg">
            Подробнее
          </span>
        </div>
      </div>
    </Link>
  );
}
