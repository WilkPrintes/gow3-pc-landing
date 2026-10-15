import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale, htmlLang, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/pt";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pt: () => import("@/i18n/dictionaries/pt").then((m) => m.default),
  en: () => import("@/i18n/dictionaries/en").then((m) => m.default),
  es: () => import("@/i18n/dictionaries/es").then((m) => m.default),
};

/** Current locale from the [lang] root segment; 404 for anything unsupported. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!hasLocale(value)) notFound();
  return value;
}

/**
 * Dictionary for the current route. Server Components call this directly
 * instead of receiving the locale as a prop.
 */
export async function getI18n() {
  const locale = await getLocale();
  return { locale, tag: htmlLang[locale], t: await dictionaries[locale]() };
}

export type { Dictionary };
