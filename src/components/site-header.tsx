import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { DownloadIcon, GithubIcon } from "@/components/icons";
import { Header, type HeaderLink } from "@/components/header";
import { MobileMenu } from "@/components/mobile-menu";
import { LanguageSwitcher } from "@/components/language-switcher";
import { PAGE_REPO_URL, PORT_REPO_URL } from "@/content/site";
import { fill } from "@/i18n/config";
import { getI18n } from "@/i18n/get-dictionary";
import { formatStars } from "@/lib/format";
import type { ReleaseData } from "@/lib/release";
import { cn } from "@/lib/utils";

/** The site header for every page, composed from Header and MobileMenu. */
export async function SiteHeader({ release, page }: { release: ReleaseData; page: "home" | "tutorials" }) {
  const { locale, tag, t } = await getI18n();
  const home = `/${locale}`;
  const stars = formatStars(tag, release.stars);

  // The guides page is linked from the footer, not from the header
  const links: HeaderLink[] = [
    { href: `${home}#download`, label: t.header.nav.download },
    { href: `${home}#performance`, label: t.header.nav.performance },
    { href: `${home}#features`, label: t.header.nav.features },
    { href: `${home}#compatibility`, label: t.header.nav.compatibility },
  ];

  return (
    <Header.Root solid={page !== "home"}>
      <Header.Brand href={home} label={t.header.homeAria} tagline={t.header.tagline} />
      <Header.Nav label={t.header.sectionsAria} links={links} />
      <Header.Actions>
        <LanguageSwitcher current={locale} label={t.header.language} className="hidden sm:flex" />
        <Header.Chip href={release.notesUrl} title={t.header.notesTitle} className="hidden xl:flex">
          v{release.version}
        </Header.Chip>
        <Header.Chip href={PORT_REPO_URL} label={fill(t.header.repoAria, { stars })} className="hidden md:flex">
          <GithubIcon className="size-4" />★ {stars}
        </Header.Chip>
        <Link href={`${home}#download`} className={cn(buttonVariants({ size: "cta-sm" }), "max-sm:w-10 max-sm:px-0")} aria-label={t.common.download}>
          <DownloadIcon className="size-4" />
          <span className="hidden sm:inline">{t.common.download}</span>
        </Link>

        <MobileMenu.Root openLabel={t.header.openMenu} title="God of War III · PC" subtitle={t.header.menuSubtitle}>
          <MobileMenu.Links label={t.header.sectionsAria} links={links} />
          <MobileMenu.Footer>
            <LanguageSwitcher current={locale} label={t.header.language} className="self-start" />
            <a href={release.notesUrl} className="flex items-center gap-2 font-mono text-xs text-soft">
              {fill(t.header.menuVersion, { version: release.version })}
            </a>
            <a href={PORT_REPO_URL} className="flex items-center gap-2 font-mono text-xs text-soft">
              <GithubIcon className="size-4" />
              FelipePrado0/gow3_pc · ★ {stars}
            </a>
            <a href={PAGE_REPO_URL} className="flex items-center gap-2 font-mono text-xs text-soft">
              <GithubIcon className="size-4" />
              {t.footer.links.pageRepo}
            </a>
            <MobileMenu.Close render={<Link href={`${home}#download`} className={cn(buttonVariants({ size: "cta" }), "mt-2 w-full")} />}>
              <DownloadIcon />
              {fill(t.common.downloadVersion, { version: release.version })}
            </MobileMenu.Close>
          </MobileMenu.Footer>
        </MobileMenu.Root>
      </Header.Actions>
    </Header.Root>
  );
}
