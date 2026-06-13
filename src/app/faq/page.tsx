import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { faqs } from "@/data/content";
import { site } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { FaqAccordion } from "@/components/faq-accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Вопросы и ответы",
  description: "Ответы на частые вопросы об экскурсиях в Сочи: бронирование, оплата, отмена, маршруты. Не нашли ответ — звоните нам.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Частые вопросы"
        subtitle="Собрали всё, что чаще всего спрашивают туристы. Если остались вопросы — мы на связи."
      />

      <section className="container-wide py-section-sm sm:py-section">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>

          <Reveal className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 text-center text-white sm:p-10">
            <h2 className="font-display text-2xl font-bold">Не нашли ответ на свой вопрос?</h2>
            <p className="max-w-md text-white/90">
              Позвоните нам — менеджер с радостью проконсультирует и поможет выбрать экскурсию.
            </p>
            <Button href={site.phoneHref} size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              <Phone className="h-5 w-5" /> {site.phone}
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
