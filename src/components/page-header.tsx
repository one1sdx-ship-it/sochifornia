import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-surface">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="container-wide relative py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <span className="h-px w-6 bg-primary" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-body">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
