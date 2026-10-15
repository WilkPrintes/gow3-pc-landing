"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Fixed header shell. Over the hero video it is a soft fade; once the page
 * scrolls (or on pages without a hero) it turns into a solid blurred bar.
 */
export function HeaderFrame({ children, solid = false }: { children: ReactNode; solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (solid) return;
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [solid]);

  const filled = solid || scrolled;

  return (
    <header
      data-filled={filled ? "" : undefined}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        filled
          ? "border-border bg-background/88 backdrop-blur-md"
          : "border-transparent bg-[linear-gradient(180deg,rgb(10_12_14/0.75),rgb(10_12_14/0))]",
      )}
    >
      {children}
    </header>
  );
}
