export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** BCP 47 tag for <html lang>, Intl formatting and hreflang */
export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

/** Names shown in the language switcher, each in its own language */
export const localeNames: Record<Locale, { short: string; long: string }> = {
  pt: { short: "PT", long: "Português" },
  en: { short: "EN", long: "English" },
  es: { short: "ES", long: "Español" },
};

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Replace {name} placeholders: fill("v{version}", { version: "2.3.0" }) → "v2.3.0" */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`));
}
