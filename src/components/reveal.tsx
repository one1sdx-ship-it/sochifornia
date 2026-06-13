"use client";

import { useEffect, useRef, type ReactNode, type JSX } from "react";
import { cn } from "@/lib/utils";

// Лёгкий reveal без тяжёлых зависимостей: IntersectionObserver + CSS.
// Уважает prefers-reduced-motion (CSS отключает анимацию).
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`;
            el.dataset.shown = "true";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      data-reveal
      className={cn(
        "opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] data-[shown=true]:opacity-100 data-[shown=true]:translate-y-0 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className
      )}
    >
      {children}
    </Comp>
  );
}
