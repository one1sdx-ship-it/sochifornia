import { cn } from "@/lib/utils";

// Детерминированные градиентные заглушки вместо фото (позже заменим на <Image>)
const gradients: Record<string, string> = {
  "grad-mountains-1": "linear-gradient(135deg,#0d946e 0%,#0e74b2 100%)",
  "grad-mountains-2": "linear-gradient(135deg,#14b8a6 0%,#0d946e 60%,#0a5c66 100%)",
  "grad-mountains-3": "linear-gradient(160deg,#0e74b2 0%,#0d946e 100%)",
  "grad-sea-1": "linear-gradient(135deg,#0e74b2 0%,#14b8a6 100%)",
  "grad-sea-2": "linear-gradient(160deg,#0a5c8c 0%,#14b8a6 70%,#7c5cf6 130%)",
  "grad-sea-3": "linear-gradient(135deg,#0891b2 0%,#0e74b2 100%)",
  "grad-city-1": "linear-gradient(135deg,#7c5cf6 0%,#0e74b2 100%)",
  "grad-city-2": "linear-gradient(160deg,#0e74b2 0%,#7c5cf6 120%)",
  "grad-city-3": "linear-gradient(135deg,#0d946e 0%,#7c5cf6 130%)",
  "grad-nature-1": "linear-gradient(135deg,#16a34a 0%,#0d946e 100%)",
  "grad-nature-2": "linear-gradient(160deg,#0d946e 0%,#84cc16 130%)",
  "grad-nature-3": "linear-gradient(135deg,#0a5c66 0%,#16a34a 100%)",
  hero: "linear-gradient(135deg,#0a5c66 0%,#0e74b2 45%,#7c5cf6 110%)",
};

export function GradientImage({
  id,
  className,
  children,
  label,
}: {
  id: string;
  className?: string;
  children?: React.ReactNode;
  label?: string;
}) {
  // Реальное фото: id — это путь к файлу (например, "/tours/dendrarium.jpg")
  const isPhoto = id.startsWith("/") || id.startsWith("http");
  const bg = isPhoto ? `url("${id}")` : gradients[id] ?? gradients["grad-sea-1"];
  return (
    <div
      className={cn("relative overflow-hidden bg-cover bg-center", className)}
      style={{ backgroundImage: bg }}
      role="img"
      aria-label={label ?? (isPhoto ? "Изображение экскурсии" : "Изображение экскурсии (заглушка)")}
    >
      {/* мягкое затемнение для читабельности текста поверх */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      {/* декоративный блик */}
      <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-2/3 w-2/3 rounded-full bg-white/10 blur-3xl" />
      {children}
    </div>
  );
}
