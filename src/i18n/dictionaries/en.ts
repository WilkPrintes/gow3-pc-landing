import type { Dictionary } from "./pt";

const en: Dictionary = {
  meta: {
    title: "God of War III Remastered for PC",
    titleTemplate: "%s · God of War III for PC",
    description:
      "Native port of God of War III Remastered (PS4) for Windows and Linux. Get the latest release, running at 120 FPS by default and up to 240.",
    tutorialsTitle: "Guides",
    tutorialsDescription: "Fixes for the most common problems with the God of War III PC port, starting from the line in last_run.log.",
  },

  common: {
    download: "Download",
    downloadWindows: "Download for Windows",
    downloadVersion: "Download v{version}",
    downloadNow: "Download now",
    floatingMeta: "v{version} · Windows · Linux",
    copy: "Copy",
    copied: "Copied",
    copyFailed: "Select and copy",
    releaseNotes: "Release notes",
  },

  header: {
    homeAria: "God of War III for PC, home",
    tagline: "Native port · PC",
    sectionsAria: "Sections",
    openMenu: "Open menu",
    menuSubtitle: "Native port · gow3_pc",
    notesTitle: "Notes for the latest release",
    menuVersion: "Version {version} · release notes",
    repoAria: "Port repository on GitHub, {stars} stars",
    language: "Language",
    nav: {
      download: "Download",
      performance: "Performance",
      features: "Features",
      compatibility: "Compatibility",
      tutorials: "Guides",
    },
  },

  hero: {
    eyebrow: "Native PS4 port · Windows and Linux",
    title: "God of War III",
    subtitle: "Remastered on PC",
    lede: "The game's original code running straight on your processor, at 120 FPS by default and up to 240.",
    requires: "Requires a dump of your own PS4 copy (CUSA01623 or CUSA01715), a Vulkan 1.3 GPU and an AVX CPU.",
    downloads: "downloads",
    videoAria:
      "God of War III gameplay on the port at 120 FPS, recorded on an RTX 3060: Tartarus, the rotating chamber of Daedalus, the Blades in combat and a QTE with a Nintendo button icon",
    newsLabel: "What's new",
    newsAria: "What's new in the latest releases",
    news: [
      { version: "2.3.0", text: "Yellow and white textures fixed" },
      { version: "2.3.0", text: "Steam Deck block corruption gone" },
      { version: "2.3.0", text: "Anisotropic filtering up to 16x" },
      { version: "2.3.0", text: "Adjustable vibration and F12 screenshots" },
      { version: "2.2.0", text: "Xbox and Nintendo QTE icons" },
      { version: "2.2.0", text: "Black screen at the opening fixed" },
    ],
  },

  telemetry: {
    label: "Port overlay",
    rig: "RTX 3060 · 1080p",
    frame: "FPS · 8.3 ms",
    place: "Tartarus · {seconds} s",
    share: "{share}% of the time at 120",
    aria: "FPS per second over {seconds} seconds of gameplay in Tartarus, recorded on an RTX 3060: {share}% of the time at 120, minimum {min}",
  },

  downloads: {
    word: "Download",
    tape: "Always the latest release, straight from GitHub",
    lead: "Pick your platform. The launcher also updates itself under Advanced → Check for updates, keeping your saves and settings.",
    recommended: "Recommended",
    experimental: "Experimental",
    labels: { file: "File", system: "System", gpu: "GPU", cpu: "CPU", tested: "Tested on", note: "Heads up" },
    windows: {
      system: "Windows 10 (1903+) or 11, 64-bit",
      gpu: "Vulkan 1.3 with an up-to-date driver",
      cpu: "x86-64 with AVX: Intel Sandy Bridge or AMD FX and newer",
    },
    linux: {
      system: "x86-64 with glibc 2.39 or newer",
      tested: "Ubuntu 24.04, Debian 13, Fedora 42, Arch, openSUSE, Bazzite",
      note: "Anisotropic filtering, vibration and F12 have not been tested on Linux yet",
    },
    zip: "Download .zip",
    appimage: "Download AppImage",
    cadence: {
      label: "Release pace",
      summary: "{count} releases in {hours} hours",
      aria: "Latest {count} releases of the port",
      stable: "stable",
      tests: "{count} test builds",
    },
  },

  performance: {
    word: "Performance",
    tape: "120 FPS by default. 240 if you want it.",
    lead: "The game's code runs straight on the CPU, with no emulation. The numbers below come from the port's own overlay, at native resolution.",
    recordedOn: "Recorded on",
    rig: "native 1080p · 120 FPS engine · NVIDIA App",
    stats: ["FPS engine rate, on by default", "FPS with the optional patch", "frame time at 240 FPS", "maximum render resolution, from 480p up"],
    frametime: "4.2",
    bench: {
      label: "Reference · 1080p · 240 FPS engine",
      min: "minimum",
      avg: "average",
      max: "maximum",
      note: "RX 6700 XT, Ryzen 5 5600X and 32 GB. A reference result, not a guarantee for other machines. On NVIDIA laptops, putting Stream buffer memory in System RAM can give more FPS.",
    },
    shots: {
      tartarus: { alt: "Kratos arriving in Tartarus", caption: "Tartarus", meta: "port overlay" },
      titan: { alt: "Kratos on a platform in front of a titan, with lava below", caption: "Gameplay", meta: "Native" },
      cestus: { alt: "Kratos with the Nemean Cestus between ice pillars", caption: "Gameplay", meta: "Native" },
    },
  },

  features: {
    word: "Features",
    tape: "What the port does today",
    controller: {
      eyebrow: "Controller",
      title: "Your controller's buttons in the game",
      text: "QTEs, tutorials and the move list show Xbox or Nintendo icons, in every language. DualSense, Xbox controllers and keyboard work together, with remapping.",
      note: "Launcher → Game → Controls → In-game button icons. The icons are drawn on copies of two game files, about 70 MB, outside the game folder.",
      shot: {
        alt: "Upgrade menu for the Blades of Exile with the B, X, Y and A prompts in Nintendo style",
        caption: "Upgrade menu with Nintendo icons",
        meta: "B · X · Y · A",
      },
      switcherAria: "Icon style",
      styles: {
        original: { label: "Original", aria: "Original PlayStation icons" },
        xbox: { label: "Xbox", aria: "Xbox-style icons" },
        nintendo: { label: "Nintendo", aria: "Nintendo-style icons" },
      },
    },
    menu: {
      eyebrow: "Port menu",
      title: "Cheats and settings without leaving the game",
      open: "Open it with",
      or: "or",
      saved: "Everything is saved in",
      shotAlt: "The port menu open during play, Game tab, with cheats and multipliers",
      items: [
        ["Infinite health, magic, item meter and Rage of Sparta", "cheats"],
        ["Very Hard unlocked and infinite double jumps", "cheats"],
        ["Orbs and damage dealt or taken", "0.1x to 100x"],
        ["Enemy health bar", "HUD"],
        ["FPS, frame time, CPU, RAM and VRAM", "overlay"],
      ],
    },
    cutscenes: {
      eyebrow: "Cutscenes and audio",
      title: "Videos, voices and subtitles working",
      text: "H.264 cutscenes, music, voices and effects in ATRAC9 and MP3. Subtitles and menus follow the language of your dump.",
      shotAlt: "Cutscene with Kratos and Portuguese subtitles",
    },
    more: [
      { title: "Launcher", text: "Five pages: Home, Graphics, Performance, Game and Advanced." },
      { title: "Saves", text: "A save list like on PS4, autosave, a backup before every session and shadPS4 import." },
      { title: "Image", text: "Anisotropic filtering up to 16x, RCAS sharpening and PNG screenshots with F12." },
      { title: "Steam", text: "Add it as a non-Steam game, with capsules and logo built from your dump." },
    ],
    launcher: {
      alt: "The launcher's Home page, with quick settings for display mode, resolution, frame rate limit and engine frame rate, and the Play button",
      caption: "Launcher · Home page",
      meta: "Native (1080p) · 120 FPS engine · 2 patches",
    },
  },

  compatibility: {
    word: "Compatible?",
    tape: "Check your GPU before downloading",
    lead: "Taken from the {version} release notes. If your GPU has a known issue, follow that issue instead of opening a new one.",
    vendorsAria: "GPU vendor",
    summary: "{ok} without issues · {bad} with known issues",
    gpus: [
      { vendor: "nvidia", name: "GeForce RTX 3060", status: "ok", label: "Tested", detail: "The recordings on this page: native 1080p, 120 FPS engine" },
      { vendor: "nvidia", name: "GeForce RTX 5070", status: "ok", label: "Tested", detail: "2.3.0 texture fix tested, same FPS as before" },
      {
        vendor: "nvidia",
        name: "Laptop with AMD iGPU + NVIDIA",
        status: "ok",
        label: "Fixed in 2.3.0",
        detail: "Black screen: AMD's Vulkan layer hid the NVIDIA GPU, and the launcher now turns that layer off",
        issues: "#263",
      },
      { vendor: "nvidia", name: "GeForce GTX 750 Ti", status: "bad", label: "Known issue", detail: "ErrorOutOfDeviceMemory during play", issues: "#259" },
      { vendor: "amd", name: "Radeon RX 6700 XT", status: "ok", label: "Tested", detail: "Playable start to finish at 1080p, 240 FPS engine" },
      { vendor: "amd", name: "Radeon RX 7800 XT · Linux RADV", status: "ok", label: "Tested", detail: "Arch Linux, Wayland session" },
      { vendor: "amd", name: "Radeon RX 6600 and Ryzen APUs", status: "bad", label: "Known issue", detail: "Picture drawn small in a corner", issues: "#121 #142" },
      { vendor: "amd", name: "Radeon RX 550 · RX 580", status: "bad", label: "Known issue", detail: "Crash with Unknown data_format=15 or Format10_11_11", issues: "#196 #287" },
      { vendor: "amd", name: "Radeon RX 5500M", status: "bad", label: "Known issue", detail: "ErrorOutOfDeviceMemory after 15 to 20 minutes", issues: "#181" },
      { vendor: "intel", name: "Iris Xe", status: "bad", label: "Under investigation", detail: "Crash on the first level load", issues: "#188" },
      { vendor: "intel", name: "UHD Graphics", status: "bad", label: "Under investigation", detail: "Device lost in the cutscene where Athena gives Kratos the blades, and wrong lighting", issues: "#216 #206" },
      { vendor: "intel", name: "HD Graphics 630", status: "bad", label: "Under investigation", detail: "3D renders black or blue only", issues: "#35" },
      {
        vendor: "steamdeck",
        name: "Steam Deck and other RADV",
        status: "ok",
        label: "Fixed in 2.3.0",
        detail: "Block corruption on Kratos and the logo is gone: sparse binds now go to a queue that supports them",
        issues: "#143 #204",
      },
      { vendor: "steamdeck", name: "New 2.3.0 options", status: "warn", label: "Not tested", detail: "Anisotropic filtering, vibration and F12 have not been tested on Linux yet" },
    ],
  },

  credits: {
    word: "Credits",
    tape: "Made by the community, open source under GPL-2.0",
    items: {
      felipe: "Maintains gow3_pc and adapted the 240 FPS patch",
      cuesta4: "God of War III rendering fixes in shadPS4",
      shadps4: "The video core that translates the GPU and shaders to Vulkan",
      deadinside28: "bloodborne_pc, the original native port",
      supermedo: "The Windows fork this project comes from",
      kvicken: "Resolution, texture and 120 FPS patches",
    },
  },

  footer: {
    portTitle: "The port",
    portBefore: "gow3_pc is a project by",
    portMiddle: ", who creates and maintains the port. Downloads, issues and code live in the",
    portLink: "official repository",
    pageTitle: "This page",
    pageBefore: "Page made by",
    pageMiddle: ". The code is open at",
    disclaimer:
      "Fan project, not affiliated with Sony Interactive Entertainment or Santa Monica Studio. God of War is a trademark of Sony Interactive Entertainment. No game files are distributed.",
    linksAria: "Project links",
    links: { repo: "Repository", issues: "Issues", kofi: "Ko-fi", pageRepo: "This page's code" },
  },

  tutorials: {
    eyebrow: "Guides",
    title: "Fix it from the log",
    introBefore: "The port writes everything to",
    introAfter: ", next to God of War III.exe. In the launcher, open it under Advanced → Log. Each guide starts from the line at the end of that file.",
    guides: "Guides",
    table: ["Line in the log", "Likely cause", "What to do"],
    checklistTitle: "Nothing matched? Check the basics",
    openIssue: "Open an issue on GitHub",
    items: [
      {
        id: "crash-on-start",
        title: "The game opens and closes right away",
        hint: "Fault: · STOP:",
        tone: "bad",
        badge: "Most reported",
        intro:
          "The window shows up, sometimes reaches the Santa Monica logo, and closes on its own. Each cause leaves a different line at the end of user\\last_run.log.",
        log: {
          label: "user\\last_run.log · real example from an issue",
          lines: [
            "Runtime: guest thread 'WorkerThread3' created (stack=262144, prio=700)",
            "Runtime: guest thread 'WorkerThread4' created (stack=262144, prio=700)",
            "!Fault: read access to 00000000000002c0 at igvk64.dll+0xa06f12 (thread 14664)",
            "rax=0000000000000000 rbx=00000000796e1978 rcx=00000000796e1978",
            "The game closed (code 3).",
          ],
        },
        table: [
          { line: "STOP: this CPU lacks …", cause: "CPU without AVX, older than Sandy Bridge or AMD FX", fix: "There is no workaround. The port needs AVX." },
          { line: "Runtime: cannot create 8128 MiB of guest memory (error 1450)", cause: "Not enough virtual memory in Windows", fix: "Raise the page file. See the Error 1450 guide." },
          { line: "… ow-graphics-hook64.dll", cause: "Overwolf overlay injected into the game", fix: "Close Overwolf before playing (#199)." },
          { line: "Fault: … at igvk64.dll", cause: "Intel Vulkan driver (Iris Xe, UHD)", fix: "Install the latest driver from Intel's website. Iris Xe is tracked in #188." },
          {
            line: "STOP: guest raised debug exception code=0xa0020014",
            cause: "Full 1.02 update (eboot.bin sha256 6e72330e…)",
            fix: "Under investigation (#175, #213). Try a 01.00 dump if you have one.",
          },
          { line: "0xC0000005 in ucrtbase!strlen", cause: "Crash right after the audio threads start", fix: "Under investigation (#46). Attach the log to the issue." },
          { line: "code=0xa0020001", cause: "The game dump is probably incomplete", fix: "Dump the game from your PS4 again. The launcher warns about this since 2.3.0." },
        ],
        steps: [
          { title: "Open the log and go to the end", text: "Look for the first line starting with Fault:, STOP: or Runtime: cannot. Whatever follows it is a consequence." },
          { title: "Compare it with the table", text: "The DLL name or the STOP text almost always points to the cause." },
          {
            title: "Open an issue if nothing matched",
            text: "Include your GPU and driver version, CPU, port version, game version (01.00 or 01.02) and attach the full last_run.log.",
          },
        ],
        checklist: [
          "The zip was extracted to a folder, and the game is not running from inside the zip.",
          "Windows 10 version 1903 or newer, 64-bit.",
          "A Vulkan 1.3 video driver, downloaded from AMD, NVIDIA or Intel.",
          "The game folder has eboot.bin, sce_module and sce_sys.",
          "You are on the latest port release.",
        ],
      },
      {
        id: "black-screen",
        title: "Black screen after the logo",
        hint: "WAIT_REG_MEM deadlock",
        tone: "ok",
        badge: "Fixed in 2.2.0",
        intro: "The window opens and the FPS counter runs, but the picture never shows up.",
        note: {
          label: "Cause",
          text: "A deadlock between the emulated GPU and the game's EOP thread on the first flips: the GPU waited on a WAIT_REG_MEM for a signal the flip thread only writes after the next EOP. Found by @brunoweierich-ctrl.",
        },
        steps: [
          { title: "Update to 2.2.0 or newer", text: "The Bug Fix - Startup Black Screen patch (#119) is always applied, even with an older saved patch selection." },
          { title: "Check the log", text: "The list of applied patches in the log should include Bug Fix - Startup Black Screen." },
          {
            title: "Laptop with an AMD iGPU and NVIDIA?",
            text: "Update to 2.3.0. AMD's switchable graphics Vulkan layer hid the NVIDIA GPU, and the launcher now turns that layer off (#263).",
          },
          { title: "Still black? Report it", text: "Include GPU, driver, game version and the output of Advanced → Log. Clearing the shader cache does not fix this." },
        ],
      },
      {
        id: "error-1450",
        title: "Error 1450 at start",
        hint: "cannot create guest memory",
        tone: "warn",
        badge: "Windows setting",
        intro:
          "The port reserves about 8 GB of memory for the game. Without a big enough page file, Windows refuses. Since 2.3.0 the launcher itself shows these steps when the error happens.",
        log: { label: "user\\last_run.log", lines: ["!Runtime: cannot create 8128 MiB of guest memory (error 1450)"] },
        steps: [
          { title: "Open the advanced system settings", text: "Press Win + R, type SystemPropertiesAdvanced and confirm." },
          { title: "Go to virtual memory", text: "Performance → Settings → Advanced → Virtual memory → Change. Uncheck automatic management." },
          { title: "Set a custom size on C:", text: "For example 16384 MB initial and 24576 MB maximum. Click Set, then OK." },
          { title: "Restart the PC", text: "The change only applies after a restart." },
        ],
      },
      {
        id: "textures",
        title: "Yellow or white textures",
        hint: "fixed in 2.3.0",
        tone: "ok",
        badge: "Fixed in 2.3.0",
        intro: "The ground changed color after some time of play, often after Poseidon or in the Heart of Gaia.",
        note: {
          label: "Cause",
          text: "GPU readbacks wrote the game's memory without telling the texture cache, so the textures over that memory were never reloaded. Found and fixed by @hmathsan (#331).",
        },
        steps: [
          { title: "Update to 2.3.0 or newer", text: "The fix works with any readback setting." },
          {
            title: "Turn deferred readbacks back on",
            text: "If you turned Performance → GPU data → Deferred GPU readbacks off as a workaround, turn it back on. With it on the game runs about twice as fast in heavy scenes.",
          },
          {
            title: "Outside 1080p it can still happen",
            text: "The fix was tested at 1080p. At other render resolutions there are still reports of broken textures and areas that are too bright (#294, #260). If it happens, report it with the resolution you used.",
          },
        ],
      },
      {
        id: "stuck-at-high-fps",
        title: "I can't get past a spot",
        hint: "120 or 240 FPS",
        tone: "warn",
        badge: "Known issue",
        intro:
          "At 120 or 240 FPS some spots block progress: Kratos cannot pass a path or climb a ledge, and button-mashing prompts may not advance (#114, #313, #56, #110, #312).",
        steps: [
          { title: "Set the engine frame rate to 60", text: "In the launcher, set Engine frame rate to 60. You can also change it in the port menu (Insert), Performance tab." },
          { title: "Get through that spot", text: "With the engine at 60 FPS the game behaves like on the console there." },
          { title: "Go back to 120 or 240", text: "After that spot, restore the rate you were using." },
        ],
      },
      {
        id: "shadps4-saves",
        title: "Import shadPS4 saves",
        hint: "savedata\\1\\CUSA01623",
        tone: "ok",
        badge: "Works",
        intro:
          "Only shadPS4 saves for God of War III Remastered. RPCS3 saves are from the PS3 game and will not work. Use the same title ID on both sides.",
        log: {
          label: "source → destination · example with CUSA01623",
          lines: [
            "shadPS4 (older)   user\\savedata\\1\\CUSA01623\\",
            "shadPS4 (newer)   home\\<user-id>\\savedata\\CUSA01623\\",
            "!port              C:\\Games\\gow3-windows\\user\\savedata\\1\\CUSA01623\\",
          ],
        },
        steps: [
          { title: "Close both and back up", text: "Copy both save folders somewhere else before touching anything." },
          {
            title: "Copy each slot folder",
            text: "Keep the slot's name and files. Do not nest another CUSA01623 folder. Leave out the slot's internal sce_sys folder.",
          },
          {
            title: "Create the metadata folder",
            text: "Next to each slot, create <slot name>.sce_sys. Do not rename param.sfo to param.bin: the formats differ.",
          },
          { title: "Start the port and pick Load Game", text: "The list shows up to 32 saves. Saving again in the port writes the slot's metadata." },
        ],
      },
      {
        id: "overlays",
        title: "Overlays do not show up",
        hint: "bin\\gow3-probe.exe",
        tone: "warn",
        badge: "Setting",
        intro: "The game process is not the executable you open.",
        log: {
          label: "processes",
          lines: ["God of War III.exe      launcher", "!bin\\gow3-probe.exe      game (Vulkan)", "out\\gow3-probe.exe      game, in source builds"],
        },
        steps: [
          { title: "Point the overlay at gow3-probe.exe", text: "In RTSS, add bin\\gow3-probe.exe and turn on Afterburner's on-screen display." },
          { title: "In ReShade, pick Vulkan", text: "In the installer, select that same executable and the Vulkan API." },
          { title: "Close Overwolf", text: "ow-graphics-hook64.dll crashes the game at start (#199)." },
        ],
      },
    ],
  },
};

export default en;
