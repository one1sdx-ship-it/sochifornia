import { faqs } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";

export function FaqSection() {
  return (
    <section className="container-wide py-section-sm sm:py-section">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Частые вопросы"
          title="Отвечаем на главное"
          subtitle="Не нашли ответ? Позвоните нам — менеджер с радостью поможет."
          align="center"
        />
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
