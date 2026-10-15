import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingDownload } from "@/components/floating-download";
import { TutorialsView } from "@/components/tutorials-view";
import { getRelease } from "@/lib/release";

export const metadata: Metadata = {
  title: "Tutoriais",
  description: "Soluções para os problemas mais comuns do port de God of War III para PC, a partir da linha que aparece no last_run.log.",
};

export default async function TutorialsPage() {
  const release = await getRelease();

  return (
    <>
      <SiteHeader release={release} current="/tutoriais" />
      <main className="pt-[73px]">
        <section className="border-b bg-deep">
          <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 px-4 py-12 sm:px-8 lg:px-14">
            <span className="caption text-gold-hi">Tutoriais</span>
            <h1 className="display-x text-[clamp(28px,3vw,40px)]">Resolva pelo log</h1>
            <p className="max-w-[640px] text-base text-steel">
              O port escreve tudo em <code className="rounded border bg-muted px-1.5 font-mono text-[0.86em]">user\last_run.log</code>, ao lado do God of War
              III.exe. No launcher, abra em Avançado → Log. Os guias partem da linha que aparece no fim desse arquivo.
            </p>
          </div>
        </section>
        <div className="mx-auto w-full max-w-[1360px] px-4 pt-12 pb-24 sm:px-8 lg:px-14">
          <TutorialsView />
        </div>
      </main>
      <SiteFooter />
      <FloatingDownload version={release.version} />
    </>
  );
}
