import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Downloads } from "@/components/downloads";
import { Performance } from "@/components/performance";
import { Features } from "@/components/features";
import { Compatibility } from "@/components/compatibility";
import { Credits } from "@/components/credits";
import { SiteFooter } from "@/components/site-footer";
import { FloatingDownload } from "@/components/floating-download";
import { Motion } from "@/components/motion";
import { getRelease } from "@/lib/release";

const SECTIONS = 5;

export default async function Home() {
  // Cached for an hour (see lib/release.ts), so the page stays in the static shell
  const release = await getRelease();

  return (
    <>
      <SiteHeader stars={release.stars} />
      <main>
        <Hero release={release} />
        <Downloads release={release} index={1} total={SECTIONS} />
        <Performance index={2} total={SECTIONS} />
        <Features index={3} total={SECTIONS} />
        <Compatibility index={4} total={SECTIONS} />
        <Credits index={5} total={SECTIONS} />
      </main>
      <SiteFooter />
      <FloatingDownload version={release.version} />
      <Motion />
    </>
  );
}
