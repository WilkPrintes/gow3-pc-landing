"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { glyphStyles, type GlyphStyle } from "@/content/site";

gsap.registerPlugin(useGSAP);

const order: GlyphStyle[] = ["original", "xbox", "nintendo"];

type Labels = { switcher: string; styles: Record<GlyphStyle, { label: string; aria: string }> };

export function GlyphSwitcher({ labels }: { labels: Labels }) {
  const [style, setStyle] = useState<GlyphStyle>("nintendo");
  const pad = useRef<HTMLDivElement>(null);
  const g = glyphStyles[style];

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

  const button = (label: string, pos: string) => (
    <span
      className={`glyph flex size-[66px] items-center justify-center rounded-full border border-[#3a444f] bg-[radial-gradient(circle_at_35%_30%,#2c343d,#13171b_72%)] text-[26px] font-black shadow-[inset_0_-5px_0_rgb(0_0_0/0.4),0_12px_28px_rgb(0_0_0/0.45)] sm:size-[88px] sm:text-[34px] ${pos}`}
    >
      {label}
    </span>
  );

  return (
    <div className="flex flex-col gap-5">
      <Tabs value={style} onValueChange={(v) => setStyle(v as GlyphStyle)}>
        <TabsList aria-label={labels.switcher} className="h-11! rounded-md border border-line-strong bg-transparent p-0">
          {order.map((k) => (
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
        {button(g.top, "col-start-2 row-start-1")}
        {button(g.left, "col-start-1 row-start-2")}
        {button(g.right, "col-start-3 row-start-2")}
        {button(g.bottom, "col-start-2 row-start-3")}
      </div>
    </div>
  );
}
