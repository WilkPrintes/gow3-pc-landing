import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

/** A real capture from the port, with its overlay reading and an optional caption bar. */
export function Shot({
  src,
  alt,
  hud,
  caption,
  meta,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  contain,
}: {
  src: StaticImageData;
  alt: string;
  hud?: string;
  caption?: string;
  meta?: string;
  className?: string;
  sizes?: string;
  contain?: boolean;
}) {
  return (
    <figure className={cn("relative m-0 overflow-hidden rounded-md border bg-black", className)}>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        className={cn("block w-full", contain ? "h-auto bg-[#0d0b0b] object-contain" : "aspect-video object-cover")}
      />
      {hud && (
        <span className="absolute top-3 right-3 inline-flex h-7 items-center rounded-md border border-white/14 bg-black/60 px-2.5 font-mono text-xs whitespace-nowrap text-[#f1f1ee]">
          {hud}
        </span>
      )}
      {caption && (
        <figcaption className="flex justify-between gap-3 bg-card px-4 py-3 text-sm">
          <span>{caption}</span>
          {meta && <span className="font-mono text-xs leading-relaxed text-steel">{meta}</span>}
        </figcaption>
      )}
    </figure>
  );
}
