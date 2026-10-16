import NextImage, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A real capture from the port.
 *
 *   <Shot.Root>
 *     <Shot.Image src={…} alt="…" />
 *     <Shot.Hud>120 FPS · 8,3 ms</Shot.Hud>
 *     <Shot.Caption meta="Caverna do Tártaro">Captura do port em funcionamento</Shot.Caption>
 *   </Shot.Root>
 */

function Root({ className, children }: { className?: string; children: ReactNode }) {
  return <figure className={cn("relative m-0 overflow-hidden rounded-md border bg-black", className)}>{children}</figure>;
}

function Image({
  src,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  contain,
}: {
  src: StaticImageData;
  alt: string;
  sizes?: string;
  contain?: boolean;
}) {
  return (
    <NextImage
      src={src}
      alt={alt}
      sizes={sizes}
      placeholder="blur"
      className={cn("block w-full", contain ? "h-auto bg-[#0d0b0b] object-contain" : "aspect-video object-cover")}
    />
  );
}

/** Same shape as the port's performance overlay */
function Hud({ children }: { children: ReactNode }) {
  return (
    <span className="absolute top-3 right-3 inline-flex h-7 items-center rounded-md border border-white/14 bg-black/60 px-2.5 font-mono text-xs whitespace-nowrap text-[#f1f1ee]">
      {children}
    </span>
  );
}

function Caption({ meta, children }: { meta?: ReactNode; children: ReactNode }) {
  return (
    <figcaption className="flex justify-between gap-3 bg-card px-4 py-3 text-sm">
      <span>{children}</span>
      {meta && <span className="font-mono text-xs leading-relaxed text-steel">{meta}</span>}
    </figcaption>
  );
}

export const Shot = { Root, Image, Hud, Caption };
