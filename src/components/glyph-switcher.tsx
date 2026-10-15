"use client";

import { useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { glyphStyleIds, type GlyphStyle } from "@/content/site";

gsap.registerPlugin(useGSAP);

type Position = "top" | "right" | "bottom" | "left";
type Glyph = { node: ReactNode; color: string };

// PlayStation shapes drawn as SVG: text symbols (△ ○ ✕ □) render at different
// sizes and weights in every font, so the four buttons never matched.
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const shapes: Record<Position, ReactNode> = {
  top: (
    <svg viewBox="0 0 24 24" className="size-[44%]" aria-hidden="true">
      <path d="M12 4.5 20.5 19h-17z" {...stroke} />
    </svg>
  ),
  right: (
    <svg viewBox="0 0 24 24" className="size-[44%]" aria-hidden="true">
      <circle cx="12" cy="12" r="8" {...stroke} />
    </svg>
  ),
  bottom: (
    <svg viewBox="0 0 24 24" className="size-[44%]" aria-hidden="true">
      <path d="m5 5 14 14M19 5 5 19" {...stroke} />
    </svg>
  ),
  left: (
    <svg viewBox="0 0 24 24" className="size-[44%]" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="1" {...stroke} />
    </svg>
  ),
};

const letter = (l: string) => <span className="text-[0.95em] leading-none font-black [font-stretch:100%]">{l}</span>;

const glyphs: Record<GlyphStyle, Record<Position, Glyph>> = {
  original: {
    top: { node: shapes.top, color: "#3fcfa5" },
    right: { node: shapes.right, color: "#ff6464" },
    bottom: { node: shapes.bottom, color: "#7da6ff" },
    left: { node: shapes.left, color: "#ef8fd6" },
  },
  xbox: {
    top: { node: letter("Y"), color: "#f5c33b" },
    right: { node: letter("B"), color: "#f0554a" },
    bottom: { node: letter("A"), color: "#6cc24a" },
    left: { node: letter("X"), color: "#4a9cf0" },
  },
  nintendo: {
    top: { node: letter("X"), color: "var(--foreground)" },
    right: { node: letter("A"), color: "var(--foreground)" },
    bottom: { node: letter("B"), color: "var(--foreground)" },
    left: { node: letter("Y"), color: "var(--foreground)" },
  },
};

const cells: Record<Position, string> = {
  top: "col-start-2 row-start-1",
  left: "col-start-1 row-start-2",
  right: "col-start-3 row-start-2",
  bottom: "col-start-2 row-start-3",
};

type Labels = { switcher: string; styles: Record<GlyphStyle, { label: string; aria: string }> };

export function GlyphSwitcher({ labels }: { labels: Labels }) {
  const [style, setStyle] = useState<GlyphStyle>("nintendo");
  const pad = useRef<HTMLDivElement>(null);

  // Flip the face buttons whenever the style changes
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".glyph", { rotateY: 90, autoAlpha: 0 }, { rotateY: 0, autoAlpha: 1, duration: 0.45, stagger: 0.06, ease: "back.out(1.6)" });
      });
    },
    { scope: pad, dependencies: [style] },
  );

  return (
    <div className="flex flex-col gap-5">
      <Tabs value={style} onValueChange={(v) => setStyle(v as GlyphStyle)}>
        <TabsList aria-label={labels.switcher} className="h-11! rounded-md border border-line-strong bg-transparent p-0">
          {glyphStyleIds.map((k) => (
            <TabsTrigger
              key={k}
              value={k}
              className="h-full! rounded-none px-[18px] text-xs font-extrabold tracking-[0.06em] uppercase [font-stretch:125%] data-active:bg-foreground! data-active:text-background!"
            >
              {labels.styles[k].label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div
        ref={pad}
        role="img"
        aria-label={labels.styles[style].aria}
        className="grid w-fit grid-cols-[repeat(3,66px)] grid-rows-[repeat(3,66px)] gap-1.5 [perspective:600px] sm:grid-cols-[repeat(3,88px)] sm:grid-rows-[repeat(3,88px)]"
      >
        {(Object.keys(cells) as Position[]).map((p) => (
          <span
            key={p}
            style={{ color: glyphs[style][p].color }}
            className={`glyph flex size-[66px] items-center justify-center rounded-full border border-[#3a444f] bg-[radial-gradient(circle_at_35%_30%,#2c343d,#13171b_72%)] text-[26px] shadow-[inset_0_-5px_0_rgb(0_0_0/0.4),0_12px_28px_rgb(0_0_0/0.45)] sm:size-[88px] sm:text-[34px] ${cells[p]}`}
          >
            {glyphs[style][p].node}
          </span>
        ))}
      </div>
    </div>
  );
}
