import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  bgImage,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Необязательное фоновое фото за текстом шапки. */
  bgImage?: string;
}) {
  // Если задано фоновое фото — текст делаем светлым, иначе оставляем тёмную тему.
  const hasBg = Boolean(bgImage);
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-surface">
      {hasBg && (
        <>
          {/* Фоновое фото раздела */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${bgImage}")` }}
          />
          {/* Затемнение для читабельности текста поверх фото */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/45" />
        </>
      )}
      {!hasBg && (
        <>
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        </>
      )}
      <div className="container-wide relative py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p
              className={`mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide ${
                hasBg ? "text-white" : "text-primary"
              }`}
            >
              <span className={`h-px w-6 ${hasBg ? "bg-white" : "bg-primary"}`} />
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-display text-4xl font-bold leading-tight sm:text-5xl ${
              hasBg ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-4 text-lg ${hasBg ? "text-white/90" : "text-body"}`}>{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
