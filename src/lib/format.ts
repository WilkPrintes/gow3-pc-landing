const nf = new Intl.NumberFormat("pt-BR");
const nf1 = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export const formatInt = (n: number) => nf.format(n);

/** Binary megabytes, as the release page sizes are measured: 74184767 → "70,7 MiB" */
export const formatMiB = (bytes: number) => `${nf1.format(bytes / 1024 / 1024)} MiB`;

/** 2246 → "2,2 mil" */
export const formatStars = (n: number) => (n >= 1000 ? `${nf1.format(n / 1000)} mil` : nf.format(n));

const dayMonth = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", timeZone: "UTC" });
const fullDate = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });

export const formatDay = (iso: string) => dayMonth.format(new Date(iso)).replace(".", "");
export const formatDate = (iso: string) => fullDate.format(new Date(iso)).replace(".", "");
