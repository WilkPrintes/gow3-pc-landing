import NextImage, { type StaticImageData } from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Hero over a slideshow of captures of the port running.
 *
 *   <Hero.Root slides={[{ src, position }]} caption="…">
 *     <Hero.Copy>
 *       <Hero.Eyebrow>…</Hero.Eyebrow>
 *       <Hero.Title subtitle="…">gow3_pc</Hero.Title>
 *       <Hero.Lede>…</Hero.Lede>
 *       <Hero.Actions>…</Hero.Actions>
 *       <Hero.Meta>…</Hero.Meta>
 *       <Hero.Note>…</Hero.Note>   short legal notice, right under the buttons
 *     </Hero.Copy>
 *     <Hero.Aside>…</Hero.Aside>
 *   </Hero.Root>
 */

export type HeroSlide = { src: StaticImageData; position?: string };

/** Seconds each capture stays on screen; the hero-slide keyframes in globals.css assume five slides */
const SLIDE_SECONDS = 6;

function Root({ slides, caption, children }: { slides: HeroSlide[]; caption: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden border-b bg-black">
      {/* Still captures crossfading in CSS: video lives on YouTube (see VideoEmbed), never on this host */}
      <div className="absolute inset-0" data-gsap="hero-media">
        {slides.map((slide, i) => (
          <NextImage
            key={slide.src.src}
            src={slide.src}
            alt=""
            fill
            priority={i === 0}
            // Load the rest up front but behind the first, so no transition fades into an empty frame
            loading={i === 0 ? undefined : "eager"}
            fetchPriority={i === 0 ? undefined : "low"}
            sizes="100vw"
            placeholder={i === 0 ? "blur" : "empty"}
            className={cn("hero-slide object-cover", i > 0 && "opacity-0")}
            style={
              {
                objectPosition: slide.position ?? "62% center",
                animationDuration: `${slides.length * SLIDE_SECONDS}s`,
                // Start a little into the cycle so the first capture is already showing
                animationDelay: `${i * SLIDE_SECONDS - 1.2}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(14_17_20/0.96)_0%,rgb(14_17_20/0.8)_55%,rgb(14_17_20/0.35)_100%)] lg:bg-[linear-gradient(90deg,rgb(14_17_20/0.94)_0%,rgb(14_17_20/0.78)_32%,rgb(14_17_20/0.15)_62%,transparent_100%),linear-gradient(0deg,rgb(14_17_20/0.85)_0%,transparent_26%)]" />
      <div className="relative mx-auto grid w-full max-w-[1360px] grid-cols-[minmax(0,1fr)] items-end gap-8 px-4 pt-[100px] pb-8 sm:px-8 sm:pt-[120px] sm:pb-10 lg:min-h-[820px] lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:px-14 lg:pt-[136px] lg:pb-14">
        {children}
      </div>
      <p className="absolute right-4 bottom-2 font-mono text-[10.5px] text-steel/80 sm:right-8 lg:right-14">{caption}</p>
    </div>
  );
}

function Copy({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[22px] self-center" data-gsap="hero-copy">
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="caption text-gold-hi">{children}</span>;
}

function Title({ subtitle, children }: { subtitle?: ReactNode; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="display-epic text-[clamp(40px,4.6vw,68px)] uppercase" data-gsap="split">
        {children}
      </h1>
      {subtitle && <p className="max-w-[500px] text-[17px] leading-snug font-semibold text-pretty text-foreground/90 sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function Lede({ children }: { children: ReactNode }) {
  return <p className="max-w-[470px] text-base leading-relaxed text-pretty text-soft sm:text-lg">{children}</p>;
}

function Actions({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-2.5">{children}</div>;
}

function Meta({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-x-[18px] gap-y-1.5 font-mono text-[12.5px] text-soft">{children}</div>;
}

function Note({ children }: { children: ReactNode }) {
  return <p className="max-w-[470px] border-l-2 border-line-strong pl-3 text-[13px] leading-relaxed text-soft">{children}</p>;
}

function Aside({ children }: { children: ReactNode }) {
  return <div className="lg:justify-self-end">{children}</div>;
}

export const Hero = { Root, Copy, Eyebrow, Title, Lede, Actions, Meta, Note, Aside };
