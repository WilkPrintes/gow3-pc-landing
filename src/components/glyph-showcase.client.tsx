"use client";

import NextImage from "next/image";
import { createContext, use, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Tabs as TabsRoot, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shot } from "@/components/shot";
import { glyphStyleIds, type GlyphStyle } from "@/content/site";
import type { ShotCopy } from "@/i18n/types";
import { cn } from "@/lib/utils";
import shotOriginal from "@/assets/shots/glyphs-original.webp";
import shotXbox from "@/assets/shots/glyphs-xbox.webp";
import shotNintendo from "@/assets/shots/glyphs-nintendo.webp";

gsap.registerPlugin(useGSAP);

// Parts of GlyphShowcase (see glyph-showcase.tsx); they share the selected style through this context
const StyleContext = createContext<{ style: GlyphStyle; setStyle: (s: GlyphStyle) => void } | null>(null);

function useStyle() {
  const ctx = use(StyleContext);
  if (!ctx) throw new Error("GlyphShowcase parts must be inside GlyphShowcase.Provider");
  return ctx;
}

export function GlyphShowcaseProvider({ initial = "nintendo", children }: { initial?: GlyphStyle; children: ReactNode }) {
  const [style, setStyle] = useState<GlyphStyle>(initial);
  return <StyleContext value={{ style, setStyle }}>{children}</StyleContext>;
}

type StyleLabels = Record<GlyphStyle, { label: string; aria: string }>;

export function GlyphShowcaseTabs({ label, styles }: { label: string; styles: StyleLabels }) {
  const { style, setStyle } = useStyle();
  return (
    <TabsRoot value={style} onValueChange={(v) => setStyle(v as GlyphStyle)}>
      <TabsList aria-label={label} className="h-11! rounded-md border border-line-strong bg-transparent p-0">
        {glyphStyleIds.map((k) => (
          <TabsTrigger
            key={k}
            value={k}
            className="h-full! rounded-none px-4 text-xs font-extrabold tracking-[0.06em] uppercase [font-stretch:125%] data-active:bg-foreground! data-active:text-background! sm:px-[18px]"
          >
            {styles[k].label}
          </TabsTrigger>
        ))}
      </TabsList>
    </TabsRoot>
  );
}

// ---- Face buttons ----------------------------------------------------------

type Position = "top" | "right" | "bottom" | "left";
type Glyph = { node: ReactNode; color: string };

// PlayStation shapes drawn as SVG: text symbols (△ ○ ✕ □) render at different
// sizes and weights in every font, so the four buttons never matched.
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const shape = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" className="size-[44%]" aria-hidden="true">
    {d}
  </svg>
);
const shapes: Record<Position, ReactNode> = {
  top: shape(<path d="M12 4.5 20.5 19h-17z" {...stroke} />),
  right: shape(<circle cx="12" cy="12" r="8" {...stroke} />),
  bottom: shape(<path d="m5 5 14 14M19 5 5 19" {...stroke} />),
  left: shape(<rect x="4.5" y="4.5" width="15" height="15" rx="1" {...stroke} />),
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

export function GlyphShowcasePad({ styles }: { styles: StyleLabels }) {
  const { style } = useStyle();
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
    <div
      ref={pad}
      role="img"
      aria-label={styles[style].aria}
      className="grid w-fit grid-cols-[repeat(3,66px)] grid-rows-[repeat(3,66px)] gap-1.5 [perspective:600px] sm:grid-cols-[repeat(3,88px)] sm:grid-rows-[repeat(3,88px)]"
    >
      {(Object.keys(cells) as Position[]).map((p) => (
        <span
          key={p}
          style={{ color: glyphs[style][p].color }}
          className={cn(
            "glyph flex size-[66px] items-center justify-center rounded-full border border-[#3a444f] bg-[radial-gradient(circle_at_35%_30%,#2c343d,#13171b_72%)] text-[26px] shadow-[inset_0_-5px_0_rgb(0_0_0/0.4),0_12px_28px_rgb(0_0_0/0.45)] sm:size-[88px] sm:text-[34px]",
            cells[p],
          )}
        >
          {glyphs[style][p].node}
        </span>
      ))}
    </div>
  );
}

// ---- Screenshot --------------------------------------------------------------

const shots = { original: shotOriginal, xbox: shotXbox, nintendo: shotNintendo };

// Where the button prompts sit in the 1920×1080 captures (x 1220–1760, y 956–1024).
// The zoom strip shows just that box, so the icons stay readable on small screens.
const PROMPTS = { x: 1220, y: 956, w: 540, h: 68 };
const zoomImage = {
  width: `${(1920 / PROMPTS.w) * 100}%`,
  left: `${(-PROMPTS.x / PROMPTS.w) * 100}%`,
  top: `${(-PROMPTS.y / PROMPTS.h) * 100}%`,
};

/** The same in-game menu captured with each icon style; all three stay mounted so switching is instant. */
export function GlyphShowcaseShot({ copy }: { copy: Record<GlyphStyle, ShotCopy> }) {
  const { style } = useStyle();
  return (
    <Shot.Root>
      <div className="grid">
        {glyphStyleIds.map((k) => (
          <NextImage
            key={k}
            src={shots[k]}
            alt={copy[k].alt}
            aria-hidden={k !== style}
            sizes="(min-width: 1024px) 50vw, 100vw"
            placeholder="blur"
            className={cn(
              "col-start-1 row-start-1 block aspect-video w-full object-cover transition-opacity duration-300",
              k === style ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      <div className="relative overflow-hidden border-t bg-black" style={{ aspectRatio: `${PROMPTS.w} / ${PROMPTS.h}` }} aria-hidden="true">
        {glyphStyleIds.map((k) => (
          <NextImage
            key={k}
            src={shots[k]}
            alt=""
            sizes="(min-width: 1024px) 185vw, 370vw"
            style={zoomImage}
            className={cn("absolute h-auto max-w-none transition-opacity duration-300", k === style ? "opacity-100" : "opacity-0")}
          />
        ))}
      </div>
      <Shot.Hud>120 FPS · 8,3 ms · Native</Shot.Hud>
      <Shot.Caption meta={copy[style].meta}>{copy[style].caption}</Shot.Caption>
    </Shot.Root>
  );
}

