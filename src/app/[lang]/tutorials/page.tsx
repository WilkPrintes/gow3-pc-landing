import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingDownload } from "@/components/floating-download";
import { Tutorial } from "@/components/tutorial";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import { PORT_REPO_URL } from "@/content/site";
import { htmlLang, locales } from "@/i18n/config";
import { getI18n } from "@/i18n/get-dictionary";
import { getRelease } from "@/lib/release";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, tag, t } = await getI18n();
  return {
    title: t.meta.tutorialsTitle,
    description: t.meta.tutorialsDescription,
    openGraph: { title: `${t.meta.tutorialsTitle} · gow3_pc`, description: t.meta.tutorialsDescription, siteName: "gow3_pc", locale: tag.replace("-", "_") },
    alternates: {
      canonical: `/${locale}/tutorials`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}/tutorials`])),
    },
  };
}

export default async function TutorialsPage() {
  const [{ t }, release] = await Promise.all([getI18n(), getRelease()]);
  const g = t.tutorials;

  return (
    <>
      <SiteHeader release={release} page="tutorials" />
      <main className="pt-[73px]">
        <section className="border-b bg-deep">
          <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 px-4 py-12 sm:px-8 lg:px-14">
            <span className="caption text-gold-hi">{g.eyebrow}</span>
            <h1 className="display-x text-[clamp(28px,3vw,40px)]">{g.title}</h1>
            <p className="max-w-[640px] text-base text-steel">
              {g.introBefore} <code className="rounded border bg-muted px-1.5 font-mono text-[0.86em]">user\last_run.log</code>
              {g.introAfter}
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1360px] px-4 pt-12 pb-24 sm:px-8 lg:px-14">
          {/* Tabs are client components; every panel below is rendered on the server */}
          <Tabs defaultValue={g.items[0].id} orientation="vertical" className="flex-col items-start gap-10 lg:flex-row!">
            <TabsList
              aria-label={g.guides}
              className="h-fit! w-full flex-col items-stretch gap-1 rounded-none bg-transparent p-0 lg:sticky lg:top-24 lg:w-[300px] lg:shrink-0"
            >
              <span className="caption px-3.5 pb-2 text-gold-hi">{g.guides}</span>
              {g.items.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="h-auto! flex-col items-start! gap-1 rounded-none border-0 border-l-2 border-l-transparent px-3.5 py-3 text-left text-[15px] font-semibold whitespace-normal text-foreground/80 after:hidden data-active:border-l-primary data-active:bg-card! data-active:text-foreground"
                >
                  {item.title}
                  <small className="font-mono text-[11px] font-normal text-steel">{item.hint}</small>
                </TabsTrigger>
              ))}
            </TabsList>

            {g.items.map((item) => (
              <TabsContent key={item.id} value={item.id} className="min-w-0">
                <Tutorial.Root>
                  <Tutorial.Header tone={item.tone} badge={item.badge} title={item.title}>
                    {item.intro}
                  </Tutorial.Header>
                  {item.note && <Tutorial.Note label={item.note.label}>{item.note.text}</Tutorial.Note>}
                  {item.log && <Tutorial.Log label={item.log.label} lines={item.log.lines} />}
                  {item.table && <Tutorial.Table headers={g.table} rows={item.table} />}
                  <Tutorial.Steps steps={item.steps} />
                  {item.checklist && (
                    <Tutorial.Checklist title={g.checklistTitle} items={item.checklist}>
                      <a href={`${PORT_REPO_URL}/issues/new`} className={cn(buttonVariants({ size: "cta-sm" }), "mt-2 self-start")}>
                        {g.openIssue}
                      </a>
                    </Tutorial.Checklist>
                  )}
                </Tutorial.Root>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <SiteFooter />
      <FloatingDownload version={release.version} />
    </>
  );
}
