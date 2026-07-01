import type { Metadata } from "next";
import { Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { site } from "@/data/site";
import { PageHeader } from "@/components/page-header";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Свяжитесь с Sochifornia Travel: ${site.phone}, ежедневно с 9:00 до 21:00. Оставьте заявку — менеджер перезвонит.`,
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Контакты"
        title="Свяжитесь с нами"
        subtitle="Позвоните, напишите в мессенджер или оставьте заявку — ответим быстро и по делу."
      />

      <section className="container-wide grid gap-12 pb-section-sm pt-6 lg:grid-cols-2 sm:pb-section sm:pt-8">
        <Reveal>
          <div className="space-y-[0.45rem]">
            <ContactItem icon={Phone} title="Телефон" value={site.phone} href={site.phoneHref} />
            <ContactItem icon={MessageCircle} title="WhatsApp" value="Написать в WhatsApp" href={site.whatsapp} />
            <ContactItem icon={Send} title="Telegram" value="@sochiforniatravel" href={site.telegram} />
            <ContactItem icon={Mail} title="Email" value={site.email} href={`mailto:${site.email}`} />
            <ContactItem icon={Clock} title="Режим работы" value={site.workingHours} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="mb-5 font-display text-2xl font-bold text-ink">Оставьте заявку</h2>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
}) {
  const body = (
    <div className="flex items-center gap-4 rounded-lg border border-hairline bg-surface px-5 py-4 transition-colors hover:border-primary/40">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="text-sm text-muted">{title}</p>
        <p className="font-semibold text-ink">{value}</p>
      </div>
    </div>
  );
  if (href) {
    const external = href.startsWith("http");
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="block">
        {body}
      </a>
    );
  }
  return body;
}
