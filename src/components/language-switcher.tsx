"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/** Same page in another language: /pt/tutorials → /en/tutorials */
function swap(pathname: string, next: Locale) {
  const parts = pathname.split("/");
  parts[1] = next;
  return parts.join("/") || `/${next}`;
}

function remember(locale: Locale) {
  // Read by proxy.ts so "/" sends the visitor back to the language they picked
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageSwitcher({ current, label, className }: { current: Locale; label: string; className?: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className={cn("flex h-9 items-center rounded-full border border-white/12 bg-black/25 p-0.5", className)}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={swap(pathname, locale)}
          hrefLang={locale}
          lang={locale}
          onClick={() => remember(locale)}
          aria-current={locale === current ? "true" : undefined}
          title={localeNames[locale].long}
          className="flex h-full min-w-9 items-center justify-center rounded-full px-2 font-mono text-[11px] font-medium text-steel transition-colors hover:text-foreground aria-[current=true]:bg-foreground aria-[current=true]:text-background"
        >
          <span aria-hidden="true">{localeNames[locale].short}</span>
          <span className="sr-only">{localeNames[locale].long}</span>
        </Link>
      ))}
    </nav>
  );
}
