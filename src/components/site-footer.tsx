import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";
import { GithubIcon } from "@/components/icons";
import { AUTHOR_URL, PAGE_REPO_URL, PORT_AUTHOR_URL, PORT_REPO_URL } from "@/content/site";
import { getI18n } from "@/i18n/get-dictionary";

const nameLink = "font-semibold text-foreground underline decoration-line-strong underline-offset-4 hover:decoration-gold-hi";

function Credit({ title, children }: { title: string; children: ReactNode }) {
  return (
    <p className="text-sm text-soft">
      <span className="caption mb-2 block text-gold-hi">{title}</span>
      {children}
    </p>
  );
}

export async function SiteFooter() {
  const { locale, t } = await getI18n();
  const f = t.footer;

  return (
    <footer className="border-t bg-deep pt-9 pb-28">
      <div className="mx-auto mb-8 grid w-full max-w-[1360px] grid-cols-[minmax(0,1fr)] gap-4 border-b px-4 pb-8 sm:grid-cols-2 sm:px-8 lg:px-14">
        <Credit title={f.portTitle}>
          {f.portBefore}{" "}
          <a className={nameLink} href={PORT_AUTHOR_URL}>
            Felipe Prado
          </a>
          {f.portMiddle}{" "}
          <a className={nameLink} href={PORT_REPO_URL}>
            {f.portLink}
          </a>
          .
        </Credit>
        <Credit title={f.pageTitle}>
          {f.pageBefore}{" "}
          <a className={nameLink} href={AUTHOR_URL}>
            Wilk Printes
          </a>
          {f.pageMiddle}{" "}
          <a className={nameLink} href={PAGE_REPO_URL}>
            WilkPrintes/gow3-pc-landing
          </a>
          .
        </Credit>
      </div>
      <div className="mx-auto flex w-full max-w-[1360px] flex-wrap items-center justify-between gap-6 px-4 sm:px-8 lg:px-14">
        <div className="flex items-center gap-3.5">
          <Image src={logo} alt="" width={28} height={28} className="rounded-md" />
          <p className="max-w-[640px] text-[12.5px] text-steel">{f.disclaimer}</p>
        </div>
        <nav className="grid w-full grid-cols-2 gap-x-5 sm:flex sm:w-auto sm:flex-wrap" aria-label={f.linksAria}>
          <Link className="caption py-3 hover:text-foreground sm:py-1" href={`/${locale}/tutorials`}>
            {t.header.nav.tutorials}
          </Link>
          <a className="caption py-3 hover:text-foreground sm:py-1" href={PORT_REPO_URL}>
            {f.links.repo}
          </a>
          <a className="caption py-3 hover:text-foreground sm:py-1" href={`${PORT_REPO_URL}/issues`}>
            {f.links.issues}
          </a>
          <a className="caption col-span-2 inline-flex items-center gap-1.5 py-3 hover:text-foreground sm:col-span-1 sm:py-1" href={PAGE_REPO_URL}>
            <GithubIcon className="size-3.5" />
            {f.links.pageRepo}
          </a>
        </nav>
      </div>
    </footer>
  );
}
