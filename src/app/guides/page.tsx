import type { Metadata } from "next";
import { Languages, Award } from "lucide-react";
import { guides } from "@/data/content";
import { PageHeader } from "@/components/page-header";
import { LeadSection } from "@/components/sections/lead-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Наши гиды",
  description: "Профессиональные гиды Sochifornia Travel: влюблённые в Сочи эксперты с многолетним опытом. Внимательные, эрудированные, без навязчивости.",
};

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Команда"
        title="Гиды, которым доверяют тысячи туристов"
        subtitle="Люди, которые превращают экскурсию в живую историю. Каждый — профессионал и просто хороший человек."
      />

      <section className="container-wide py-section-sm sm:py-section">
        <div className="space-y-6">
          {guides.map((g, i) => (
            <Reveal key={g.slug} delay={i * 60}>
              <article
                id={g.slug}
                className="grid scroll-mt-24 gap-6 rounded-2xl border border-hairline bg-surface p-6 sm:grid-cols-[160px_1fr] sm:p-8"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-4xl font-bold text-primary-fg">
                  {g.initials}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">{g.name}</h2>
                  <p className="mt-1 text-primary">{g.role}</p>
                  <p className="mt-4 text-body">{g.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Award className="h-4 w-4 text-primary" /> Опыт: {g.experience}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Languages className="h-4 w-4 text-primary" /> {g.languages.join(", ")}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <LeadSection />
    </>
  );
}
