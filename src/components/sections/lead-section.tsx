import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";

export function LeadSection() {
  return (
    <section id="lead" className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-violet py-section-sm text-white sm:py-section">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Оставьте заявку — соберём для вас идеальный маршрут
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/90">
            Менеджер перезвонит, ответит на вопросы и подберёт экскурсию под ваши даты и компанию.
            Это бесплатно и ни к чему не обязывает.
          </p>
          <div className="mt-8 space-y-4">
            <a href={site.phoneHref} className="flex items-center gap-3 text-lg font-semibold">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <Phone className="h-5 w-5" />
              </span>
              {site.phone}
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-semibold">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="h-5 w-5" />
              </span>
              Написать в WhatsApp
            </a>
            <p className="text-sm text-white/80">{site.workingHours}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="text-ink">
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
