/**
 * Language-independent data. Translated copy lives in src/i18n/dictionaries.
 * Sources: the gow3_pc README, the 2.2.0 and 2.3.0 release notes and the
 * port's own overlay in the recordings used for the hero video.
 */

export const PORT_REPO_URL = "https://github.com/FelipePrado0/gow3_pc";
export const PAGE_REPO_URL = "https://github.com/WilkPrintes/gow3-pc-landing";
export const AUTHOR_URL = "https://github.com/WilkPrintes";
export const PORT_AUTHOR_URL = "https://github.com/FelipePrado0";

/** Release the compatibility list and the guides were checked against */
export const NOTES_VERSION = "2.3.0";

/**
 * FPS read from the port's overlay, one sample per second.
 * NVIDIA App recording on an RTX 3060, 2026-10-15 12:11:36, Caverna do Tártaro, 1080p native.
 */
export const fpsSamples = [
  120, 120, 120, 120, 120, 120, 118, 120, 120, 119, 120, 120, 120, 117, 120, 120, 120, 120, 109, 120,
  120, 120, 113, 120, 120, 120, 120, 78, 85, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120,
  85, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 77, 119, 120, 120, 120, 120,
  120, 89, 110, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 73, 118, 120, 120, 120, 120, 120,
  120, 120,
];

/** Icon styles the port can draw for QTEs and prompts (the glyphs themselves live in glyph-switcher.tsx) */
export const glyphStyleIds = ["original", "xbox", "nintendo"] as const;
export type GlyphStyle = (typeof glyphStyleIds)[number];

/** Credit links; the descriptions come from the dictionary under the same keys */
export const creditLinks = [
  { key: "felipe", name: "Felipe Prado", href: PORT_REPO_URL },
  { key: "cuesta4", name: "cuesta4", href: "https://github.com/cuesta4/shadPS4/tree/eltutz" },
  { key: "shadps4", name: "shadPS4", href: "https://github.com/shadps4-emu/shadPS4" },
  { key: "deadinside28", name: "deadinside28", href: "https://github.com/deadinside28/bloodborne_pc" },
  { key: "supermedo", name: "Supermedo", href: "https://github.com/Supermedo/bloodborne_pc" },
  { key: "kvicken", name: "kvicken", href: "https://github.com/shadps4-emu/ps4_cheats/pull/145" },
] as const;

export const benchmark = { min: 55, avg: 144, max: 240 };
