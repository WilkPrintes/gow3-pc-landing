import { cn } from "@/lib/utils";

/**
 * The page's own mark: a "3" over a prompt underscore, after the repo name gow3_pc.
 * Deliberately not the Ω or any franchise symbol. Same drawing as app/[lang]/icon.svg.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-9", className)} aria-hidden="true">
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="7" fill="#161b20" stroke="#4a5562" strokeWidth="1.5" />
      <path d="M11 7.5h10l-5.2 6.2c3.6 0 5.7 1.9 5.7 4.8 0 3.1-2.4 5-5.9 5-2 0-3.7-.6-4.8-1.6" fill="none" stroke="#e8eaec" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 27h13" stroke="#b3141b" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
