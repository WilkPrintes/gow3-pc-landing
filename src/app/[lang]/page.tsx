import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { DownloadsSection } from "@/components/sections/downloads-section";
import { PerformanceSection } from "@/components/sections/performance-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CompatibilitySection } from "@/components/sections/compatibility-section";
import { CreditsSection } from "@/components/sections/credits-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingDownload } from "@/components/floating-download";
import { Motion } from "@/components/motion";
import { getRelease } from "@/lib/release";

const SECTIONS = 5;

export default async function Home() {
  // Cached for an hour (see lib/release.ts), so the page stays in the static shell
  const release = await getRelease();

  return (
    <Motion>
      <SiteHeader release={release} page="home" />
      <main>
        <HeroSection release={release} />
        <DownloadsSection release={release} index={1} total={SECTIONS} />
        <PerformanceSection index={2} total={SECTIONS} />
        <FeaturesSection index={3} total={SECTIONS} />
        <CompatibilitySection index={4} total={SECTIONS} />
        <CreditsSection index={5} total={SECTIONS} />
      </main>
      <SiteFooter />
      <FloatingDownload version={release.version} />
    </Motion>
  );
}
