"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp, Compass, Images, MessageCircle, Phone, Star } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const items = [
  { label: "Каталог", href: "/tours", Icon: Compass },
  { label: "Отзывы", href: "/reviews", Icon: Star },
  { label: "Галерея", href: "/#gallery", Icon: Images },
  { label: "Контакты", href: "/contacts", Icon: Phone },
];

export function MobileNav() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Плавающие кнопки над нижней навигацией */}
      <div className="fixed bottom-[84px] left-4 z-40 lg:hidden">
        <button
          type="button"
          aria-label="Наверх"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface text-ink shadow-card transition-all duration-300",
            showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          )}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="fixed bottom-[84px] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-success text-white shadow-float lg:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Нижняя навигация (только мобильные) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-hairline bg-bg/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg shadow-nav lg:hidden">
        <div className="grid grid-cols-4">
          {items.map(({ label, href, Icon }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors",
                  active ? "text-primary" : "text-muted"
                )}
              >
                <Icon className={cn("h-[22px] w-[22px]", active && "scale-110")} />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
