import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Compound section, RE Requiem style:
 *
 *   <Section.Root id="download">
 *     <Section.Header word="Download" index={1} total={5}>
 *       <Section.Tape>…</Section.Tape>
 *       <Section.Lead>…</Section.Lead>
 *     </Section.Header>
 *     <Section.Body>…</Section.Body>
 *   </Section.Root>
 */

function Root({ id, className, children }: { id: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      {children}
    </section>
  );
}

function Header({ word, index, total, children }: { word: string; index: number; total: number; children?: ReactNode }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="relative grid-backdrop" data-gsap="section">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative mx-auto flex w-full max-w-[1360px] flex-col gap-4 px-4 pt-14 pb-8 sm:px-8 sm:pt-20 sm:pb-10 lg:px-14">
        <div className="relative flex items-end justify-between gap-4 pb-4">
          <h2 className="display-epic text-[clamp(26px,3.2vw,48px)]" data-gsap="section-word">
            {word}
          </h2>
          <span className="pb-2 font-mono text-[13px] whitespace-nowrap text-steel">
            {pad(index)} / {pad(total)}
          </span>
          <span className="absolute inset-x-0 bottom-0 h-px origin-left bg-line-strong" data-gsap="hairline" />
        </div>
        {children}
      </div>
    </div>
  );
}

function Tape({ children }: { children: ReactNode }) {
  return (
    <span
      className="self-start bg-foreground px-3 pt-1.5 pb-[7px] font-display text-[clamp(15px,1.5vw,20px)] leading-tight font-bold text-background"
      data-gsap="tape"
    >
      {children}
    </span>
  );
}

function Lead({ children }: { children: ReactNode }) {
  return <div className="max-w-[640px] text-base text-pretty text-soft sm:text-[17px]">{children}</div>;
}

function Body({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-14", className)}>{children}</div>;
}

export const Section = { Root, Header, Tape, Lead, Body };
