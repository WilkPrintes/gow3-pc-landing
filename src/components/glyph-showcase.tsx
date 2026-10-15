import { GlyphShowcaseProvider, GlyphShowcasePad, GlyphShowcaseShot, GlyphShowcaseTabs } from "@/components/glyph-showcase.client";

/**
 * In-game button icons, one selected style shared by three separate parts:
 *
 *   <GlyphShowcase.Provider>
 *     <FeatureBlock.Root>
 *       <FeatureBlock.Media><GlyphShowcase.Shot copy={…} /></FeatureBlock.Media>
 *       <FeatureBlock.Content>
 *         <GlyphShowcase.Tabs label="…" styles={…} />
 *         <GlyphShowcase.Pad styles={…} />
 *       </FeatureBlock.Content>
 *     </FeatureBlock.Root>
 *   </GlyphShowcase.Provider>
 *
 * The parts are client components that share state through context. The
 * namespace lives in this server file on purpose: a Server Component only
 * receives a "use client" module's direct exports, so reading a property of an
 * object exported from that module (GlyphShowcase.Provider) would be undefined.
 */
export const GlyphShowcase = {
  Provider: GlyphShowcaseProvider,
  Tabs: GlyphShowcaseTabs,
  Pad: GlyphShowcasePad,
  Shot: GlyphShowcaseShot,
};
