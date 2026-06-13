import Link from "next/link";
import { Languages } from "lucide-react";
import type { Guide } from "@/data/content";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides#${guide.slug}`}
      className="group flex flex-col items-center rounded-lg border border-hairline bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-primary-fg">
        {guide.initials}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{guide.name}</h3>
      <p className="mt-1 text-sm text-primary">{guide.role}</p>
      <p className="mt-3 line-clamp-3 text-sm text-body">{guide.bio}</p>
      <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
        <Languages className="h-3.5 w-3.5" />
        {guide.languages.join(" · ")} · опыт {guide.experience}
      </div>
    </Link>
  );
}
