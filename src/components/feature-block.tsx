import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Alternating media + text block (Forza style).
 *
 *   <FeatureBlock.Root flip>
 *     <FeatureBlock.Media>…</FeatureBlock.Media>
 *     <FeatureBlock.Content>
 *       <FeatureBlock.Eyebrow>…</FeatureBlock.Eyebrow>
 *       <FeatureBlock.Title>…</FeatureBlock.Title>
 *       <FeatureBlock.Text>…</FeatureBlock.Text>
 *     </FeatureBlock.Content>
 *   </FeatureBlock.Root>
 */

function Root({ flip, children }: { flip?: boolean; children: ReactNode }) {
  return (
    <div
      data-flip={flip ? "" : undefined}
      className="group/feature grid grid-cols-[minmax(0,1fr)] items-center gap-10 border-t py-14 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14"
      data-gsap="reveal"
    >
      {children}
    </div>
  );
}

function Media({ children }: { children: ReactNode }) {
  return <div className="lg:group-data-flip/feature:order-2">{children}</div>;
}

function Content({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-5">{children}</div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="caption">{children}</span>;
}

function Title({ children }: { children: ReactNode }) {
  return <h3 className="display-x text-[clamp(20px,1.8vw,27px)] leading-[1.1]">{children}</h3>;
}

function Text({ muted, children }: { muted?: boolean; children: ReactNode }) {
  return <p className={cn(muted ? "text-sm text-steel" : "text-[16.5px] text-soft")}>{children}</p>;
}

export const FeatureBlock = { Root, Media, Content, Eyebrow, Title, Text };
