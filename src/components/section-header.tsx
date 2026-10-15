import type { ReactNode } from "react";

/**
 * Section opener in the style of the RE Requiem site: a word over a hairline,
 * an index on the right, a "tape" subtitle and an optional paragraph, on a faint grid.
 */
export function SectionHeader({
  word,
  index,
  total,
  tape,
  children,
}: {
  word: string;
  index: number;
  total: number;
  tape: string;
  children?: ReactNode;
}) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="relative grid-backdrop" data-gsap="section">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative mx-auto flex w-full max-w-[1360px] flex-col gap-4 px-4 pb-10 pt-20 sm:px-8 lg:px-14">
        <div className="relative flex items-end justify-between gap-4 pb-4">
          <h2 className="display-x text-[clamp(26px,3.2vw,48px)]" data-gsap="section-word">
            {word}
          </h2>
          <span className="pb-2 font-mono text-[13px] whitespace-nowrap text-steel">
            {pad(index)} / {pad(total)}
          </span>
          <span className="absolute inset-x-0 bottom-0 h-px origin-left bg-line-strong" data-gsap="hairline" />
        </div>
        <span
          className="self-start bg-foreground px-3 pt-1.5 pb-[7px] text-[clamp(15px,1.5vw,20px)] leading-tight font-bold text-background"
          data-gsap="tape"
        >
          {tape}
        </span>
        {children && <div className="max-w-[640px] text-[17px] text-soft">{children}</div>}
      </div>
    </div>
  );
}
