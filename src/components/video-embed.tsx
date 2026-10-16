import { cn } from "@/lib/utils";

/**
 * A YouTube video from the privacy-enhanced youtube-nocookie.com domain. The file
 * stays on YouTube, so a claim against it reaches the video and not this site.
 * Without an id it renders a placeholder frame of the same size.
 */
export function VideoEmbed({ id, title, pending, className }: { id: string | null; title: string; pending: string; className?: string }) {
  return (
    <div className={cn("relative aspect-video w-full bg-black", className)}>
      {id ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <div className="grid-backdrop absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <span className="flex size-14 items-center justify-center rounded-full border border-line-strong text-steel" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor">
              <path d="M8 5.5v13l10.5-6.5z" />
            </svg>
          </span>
          <span className="caption">{pending}</span>
        </div>
      )}
    </div>
  );
}
