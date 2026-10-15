// Locale-aware formatting. `tag` is the BCP 47 tag from i18n/config (pt-BR, en, es).

const one = { minimumFractionDigits: 1, maximumFractionDigits: 1 } as const;

export const formatInt = (tag: string, n: number) => new Intl.NumberFormat(tag).format(n);

/** Binary megabytes, as the release page sizes are measured: 74184767 → "70,7 MiB" / "70.7 MiB" */
export const formatMiB = (tag: string, bytes: number) => `${new Intl.NumberFormat(tag, one).format(bytes / 1024 / 1024)} MiB`;

/** 2246 → "2,2 mil" (pt), "2.2K" (en), "2,2 mil" (es) */
export const formatStars = (tag: string, n: number) => new Intl.NumberFormat(tag, { notation: "compact", ...one }).format(n);

export const formatDate = (tag: string, iso: string) =>
  new Intl.DateTimeFormat(tag, { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(iso)).replace(".", "");

export const formatDay = (tag: string, time: number | string) =>
  new Intl.DateTimeFormat(tag, { day: "2-digit", month: "short", timeZone: "UTC" }).format(new Date(time)).replace(".", "");
