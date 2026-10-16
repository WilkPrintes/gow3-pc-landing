import type { Metadata, Viewport } from "next";
import { Archivo, Cinzel, JetBrains_Mono } from "next/font/google";
import { htmlLang, locales } from "@/i18n/config";
import { getI18n } from "@/i18n/get-dictionary";
import "../globals.css";

// Body copy, like Segoe UI in the port launcher
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

// Titles and main buttons: Cinzel (SIL OFL), Roman inscription capitals at 700 to 900.
// No franchise font, and no Ω next to it: the page keeps its own mark (components/brand-mark.tsx).
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

/** Prerender every supported language */
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, tag, t } = await getI18n();
  return {
    title: { default: t.meta.title, template: t.meta.titleTemplate },
    description: t.meta.description,
    openGraph: { locale: tag.replace("-", "_") },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0e1114",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { tag } = await getI18n();
  return (
    <html lang={tag} className={`${archivo.variable} ${jetbrains.variable} ${cinzel.variable} dark`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
