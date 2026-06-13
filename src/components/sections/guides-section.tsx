import { guides } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { GuideCard } from "@/components/guide-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function GuidesSection() {
  return (
    <section className="container-wide py-section-sm sm:py-section">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Наша команда"
          title="Гиды, которым доверяют"
          subtitle="Люди, которые превращают обычную поездку в историю, что хочется пересказывать."
        />
        <Button href="/guides" variant="outline" className="hidden sm:inline-flex">
          Все гиды
        </Button>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((g, i) => (
          <Reveal key={g.slug} delay={(i % 4) * 70}>
            <GuideCard guide={g} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
