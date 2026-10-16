import type { ReactNode } from "react";

/**
 * Hero with the 120 FPS gameplay loop behind it.
 *
 *   <Hero.Root videoLabel="…">
 *     <Hero.Copy>
 *       <Hero.Eyebrow>…</Hero.Eyebrow>
 *       <Hero.Title subtitle="…">God of War III</Hero.Title>
 *       <Hero.Lede>…</Hero.Lede>
 *       <Hero.Actions>…</Hero.Actions>
 *       <Hero.Meta>…</Hero.Meta>
 *       <Hero.Note>…</Hero.Note>
 *     </Hero.Copy>
 *     <Hero.Aside>…</Hero.Aside>
 *   </Hero.Root>
 */

function Root({ videoLabel, children }: { videoLabel: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden border-b bg-black">
      {/* 18 s loop, 1080p60, recorded on an RTX 3060 and cut only from stretches where the port's overlay read 120 FPS */}
      <video
        className="absolute inset-0 size-full object-cover"
        poster="/media/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={videoLabel}
        data-gsap="hero-video"
      >
        <source src="/media/hero.webm" type="video/webm" />
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(14_17_20/0.96)_0%,rgb(14_17_20/0.8)_55%,rgb(14_17_20/0.35)_100%)] lg:bg-[linear-gradient(90deg,rgb(14_17_20/0.94)_0%,rgb(14_17_20/0.78)_32%,rgb(14_17_20/0.15)_62%,transparent_100%),linear-gradient(0deg,rgb(14_17_20/0.85)_0%,transparent_26%)]" />
      <div className="relative mx-auto grid w-full max-w-[1360px] grid-cols-[minmax(0,1fr)] items-end gap-8 px-4 pt-[100px] pb-8 sm:px-8 sm:pt-[120px] sm:pb-10 lg:min-h-[820px] lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:px-14 lg:pt-[136px] lg:pb-14">
        {children}
      </div>
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
    <h1 className="display-x text-[clamp(32px,3.6vw,54px)]" data-gsap="split">
      {/* The game's name in Trajan-style capitals; the subtitle stays in Archivo Expanded */}
      <span className="block display-epic text-[1.08em]">{children}</span>
      {subtitle && <span className="mt-2.5 block text-[0.62em] font-bold tracking-[0.04em] text-steel">{subtitle}</span>}
    </h1>
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
  return <p className="max-w-[470px] text-[13px] text-steel">{children}</p>;
}

function Aside({ children }: { children: ReactNode }) {
  return <div className="lg:justify-self-end">{children}</div>;
}

export const Hero = { Root, Copy, Eyebrow, Title, Lede, Actions, Meta, Note, Aside };
