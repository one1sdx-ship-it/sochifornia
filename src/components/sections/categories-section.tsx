import Link from "next/link";
import { ArrowRight, Mountain, Sailboat, Building2, Trees, Baby, Crown } from "lucide-react";
import { categories } from "@/data/types";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const icons = { Mountain, Sailboat, Building2, Trees, Baby, Crown } as const;

export function CategoriesSection() {
  return (
    <section className="container-wide py-section-sm sm:py-section">
      <SectionHeading
        eyebrow="Категории"
        title="Выберите формат впечатлений"
        subtitle="От адреналина в горах до закатов на яхте — у нас есть маршрут под каждое настроение."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {categories.map((cat, i) => {
          const Icon = icons[cat.icon as keyof typeof icons];
          return (
            <Reveal key={cat.id} delay={i * 60}>
              <Link
                href={`/tours?category=${cat.id}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-hairline bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-fg">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{cat.label}</h3>
                  <p className="mt-1 text-sm text-muted">{cat.blurb}</p>
                </div>
                <ArrowRight className="mt-4 h-5 w-5 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
