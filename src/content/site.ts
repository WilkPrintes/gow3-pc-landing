/**
 * Static copy and data for the landing page.
 * Everything here comes from the gow3_pc README, the 2.2.0 and 2.3.0 release notes
 * or the port's own overlay in the recordings used for the hero video.
 */

export const PORT_REPO_URL = "https://github.com/FelipePrado0/gow3_pc";

/**
 * FPS read from the port's overlay, one sample per second.
 * NVIDIA App recording, 2026-10-15 12:11:36, Caverna do Tártaro, 1080p native.
 */
export const fpsSamples = [
  120, 120, 120, 120, 120, 120, 118, 120, 120, 119, 120, 120, 120, 117, 120, 120, 120, 120, 109, 120,
  120, 120, 113, 120, 120, 120, 120, 78, 85, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120,
  85, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 77, 119, 120, 120, 120, 120,
  120, 89, 110, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 73, 118, 120, 120, 120, 120, 120,
  120, 120,
];

/** Highlights from the release notes, each tagged with the version it shipped in */
export const news = [
  { version: "2.3.0", text: "Texturas amarelas e brancas corrigidas" },
  { version: "2.3.0", text: "Steam Deck sem corrupção de blocos" },
  { version: "2.3.0", text: "Filtro anisotrópico até 16x" },
  { version: "2.3.0", text: "Vibração ajustável e capturas com F12" },
  { version: "2.2.0", text: "Ícones de QTE no estilo Xbox e Nintendo" },
  { version: "2.2.0", text: "Correção da tela preta na abertura" },
];

/** Release the compatibility list and the tutorials were checked against */
export const NOTES_VERSION = "2.3.0";

export type GpuStatus = "ok" | "warn" | "bad";

export const gpus: { name: string; status: GpuStatus; label: string; detail: string; issues?: string }[] = [
  { name: "AMD Radeon RX 6700 XT", status: "ok", label: "Testado", detail: "Jogável do início ao fim a 1080p, motor a 240 FPS" },
  { name: "NVIDIA RTX 5070", status: "ok", label: "Testado", detail: "Correção de texturas da 2.3.0 testada, FPS igual ao anterior" },
  { name: "RX 7800 XT · Linux RADV", status: "ok", label: "Testado", detail: "Arch Linux, sessão Wayland" },
  {
    name: "Steam Deck e outros RADV",
    status: "ok",
    label: "Corrigido na 2.3.0",
    detail: "Os blocos corrompidos no Kratos e no logo sumiram: os sparse binds agora vão para uma fila que os suporta",
    issues: "#143 #204",
  },
  {
    name: "Notebook com AMD integrada + NVIDIA",
    status: "ok",
    label: "Corrigido na 2.3.0",
    detail: "Tela preta: a camada Vulkan da AMD escondia a NVIDIA, e o launcher agora desliga essa camada",
    issues: "#263",
  },
  { name: "AMD RX 6600 e APUs Ryzen", status: "bad", label: "Problema conhecido", detail: "Imagem desenhada pequena num canto", issues: "#121 #142" },
  { name: "RX 550 · RX 580", status: "bad", label: "Problema conhecido", detail: "Crash com Unknown data_format=15 ou Format10_11_11", issues: "#196 #287" },
  { name: "RX 5500M · GTX 750 Ti", status: "bad", label: "Problema conhecido", detail: "ErrorOutOfDeviceMemory durante o jogo", issues: "#181 #259" },
  { name: "Intel Iris Xe", status: "bad", label: "Em investigação", detail: "Crash no primeiro carregamento de fase", issues: "#188" },
  { name: "Intel UHD", status: "bad", label: "Em investigação", detail: "Device lost na cutscene em que Atena entrega as lâminas e iluminação errada", issues: "#216 #206" },
  { name: "Intel HD 630", status: "bad", label: "Em investigação", detail: "O 3D aparece só preto ou azul", issues: "#35" },
];

export const portMenu = [
  ["Vida, magia, itens e Fúria de Esparta infinitos", "cheats"],
  ["Very Hard liberado e pulo duplo infinito", "cheats"],
  ["Orbes e dano causado ou recebido", "0,1x a 100x"],
  ["Barra de vida dos inimigos", "HUD"],
  ["FPS, frametime, CPU, RAM e VRAM", "overlay"],
] as const;

export const moreFeatures = [
  { title: "Launcher", text: "Cinco páginas: Início, Gráficos, Desempenho, Jogo e Avançado." },
  { title: "Saves", text: "Lista como no PS4, autosave, backup antes de cada partida e importação do shadPS4." },
  { title: "Imagem", text: "Filtro anisotrópico até 16x, nitidez RCAS e capturas em PNG com F12." },
  { title: "Steam", text: "Adicione como jogo externo, com capas e logo gerados do seu dump." },
];

export const glyphStyles = {
  original: { label: "Original", top: "△", right: "○", bottom: "✕", left: "□", aria: "Ícones originais do PlayStation" },
  xbox: { label: "Xbox", top: "Y", right: "B", bottom: "A", left: "X", aria: "Ícones no estilo Xbox" },
  nintendo: { label: "Nintendo", top: "X", right: "A", bottom: "B", left: "Y", aria: "Ícones no estilo Nintendo" },
} as const;

export type GlyphStyle = keyof typeof glyphStyles;

export const credits = [
  { name: "Felipe Prado", text: "Mantém o gow3_pc e adaptou o patch de 240 FPS", href: PORT_REPO_URL },
  { name: "cuesta4", text: "Correções de renderização de God of War III no shadPS4", href: "https://github.com/cuesta4/shadPS4/tree/eltutz" },
  { name: "shadPS4", text: "Núcleo de vídeo que traduz GPU e shaders para Vulkan", href: "https://github.com/shadps4-emu/shadPS4" },
  { name: "deadinside28", text: "bloodborne_pc, o port nativo original", href: "https://github.com/deadinside28/bloodborne_pc" },
  { name: "Supermedo", text: "O fork para Windows de onde o projeto vem", href: "https://github.com/Supermedo/bloodborne_pc" },
  { name: "kvicken", text: "Patches de resolução, texturas e 120 FPS", href: "https://github.com/shadps4-emu/ps4_cheats/pull/145" },
];
