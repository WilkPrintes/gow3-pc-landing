import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LEGAL_EMAIL } from "@/content/site";
import { htmlLang, locales } from "@/i18n/config";
import { getI18n } from "@/i18n/get-dictionary";
import { getRelease } from "@/lib/release";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return {
    title: t.meta.legalTitle,
    description: t.meta.legalDescription,
    alternates: {
      canonical: `/${locale}/legal`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}/legal`])),
    },
  };
}

export default async function LegalPage() {
  const [{ locale, t }, release] = await Promise.all([getI18n(), getRelease()]);
  const l = t.legal;

  return (
    <>
      <SiteHeader release={release} page="legal" />
      <main className="pt-[73px]">
        <article className="mx-auto flex w-full max-w-[820px] flex-col gap-6 px-4 py-16 sm:px-8 lg:py-24">
          <h1 className="display-x text-[clamp(28px,3vw,40px)]">{l.title}</h1>
          {l.paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-soft">
              {p}
            </p>
          ))}
          <p className="text-base leading-relaxed text-soft">
            {l.contactBefore}
            {LEGAL_EMAIL ? (
              <a className="font-semibold text-foreground underline decoration-line-strong underline-offset-4 hover:decoration-gold-hi" href={`mailto:${LEGAL_EMAIL}`}>
                {LEGAL_EMAIL}
              </a>
            ) : (
              <span className="text-steel">[{l.emailPending}]</span>
            )}
            {l.contactAfter}
          </p>
          <Link href={`/${locale}`} className="caption mt-4 self-start py-2 hover:text-foreground">
            ← {l.back}
          </Link>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
