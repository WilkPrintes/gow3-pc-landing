import type { GpuRow, ShotCopy, Tone, TutorialContent } from "@/i18n/types";

// Source language. en.ts and es.ts are typed against this shape.
const pt = {
  meta: {
    title: "gow3_pc: port nativo não oficial para PC",
    titleTemplate: "%s · gow3_pc",
    description: "Port nativo e não oficial de um jogo de PS4 para Windows e Linux. Roda a partir do dump da sua própria cópia (CUSA01623 ou CUSA01715). Código aberto, GPL-2.0.",
    tutorialsTitle: "Tutoriais",
    tutorialsDescription: "Soluções para os problemas mais comuns do gow3_pc, a partir da linha que aparece no last_run.log.",
    legalTitle: "Aviso legal",
    legalDescription: "Aviso legal do gow3_pc: projeto não oficial, sem arquivos do jogo, com um canal para pedidos de remoção.",
  },

  common: {
    download: "Baixar",
    downloadWindows: "Baixar para Windows",
    downloadVersion: "Baixar v{version}",
    downloadNow: "Baixar agora",
    floatingMeta: "v{version} · Windows · Linux",
    copy: "Copiar",
    copied: "Copiado",
    copyFailed: "Selecione e copie",
    releaseNotes: "Notas da versão",
    capture: "Captura do port em funcionamento",
  },

  header: {
    homeAria: "gow3_pc, início",
    tagline: "Port não oficial",
    sectionsAria: "Seções",
    openMenu: "Abrir menu",
    menuSubtitle: "Port nativo não oficial para PC",
    notesTitle: "Notas da versão mais recente",
    menuVersion: "Versão {version} · notas da versão",
    repoAria: "Repositório do port no GitHub, {stars} estrelas",
    language: "Idioma",
    nav: {
      download: "Download",
      performance: "Desempenho",
      features: "Recursos",
      compatibility: "Compatibilidade",
      tutorials: "Tutoriais",
    },
  },

  hero: {
    eyebrow: "Port nativo não oficial · Windows e Linux",
    title: "gow3_pc",
    subtitle: "Port nativo e não oficial para PC de um clássico de ação do PS4. Você traz sua cópia, nós fornecemos o executável e o launcher.",
    lede: "Executa o jogo a partir do dump da sua própria cópia, direto na CPU e sem emulação. 120 FPS por padrão, até 240.",
    notice: "Projeto não oficial, feito por fãs. Não contém arquivos do jogo. Você precisa ter a sua própria cópia.",
    downloads: "downloads",
    newsLabel: "Novidades",
    newsAria: "Novidades da versão",
    news: [
      { version: "2.3.0", text: "Texturas amarelas e brancas corrigidas" },
      { version: "2.3.0", text: "Steam Deck sem corrupção de blocos" },
      { version: "2.3.0", text: "Filtro anisotrópico até 16x" },
      { version: "2.3.0", text: "Vibração ajustável e capturas com F12" },
      { version: "2.2.0", text: "Ícones de QTE no estilo Xbox e Nintendo" },
      { version: "2.2.0", text: "Correção da tela preta na abertura" },
    ],
  },

  telemetry: {
    label: "Overlay do port",
    rig: "RTX 3060 · 1080p",
    frame: "FPS · 8,3 ms",
    place: "Caverna do Tártaro · {seconds} s",
    share: "{share}% do tempo a 120",
    aria: "FPS por segundo em {seconds} segundos de gameplay na Caverna do Tártaro, gravado numa RTX 3060: {share}% do tempo a 120, mínimo de {min}",
  },

  downloads: {
    word: "Download",
    tape: "Sempre a versão mais recente, direto do GitHub",
    lead: "Escolha a plataforma. O launcher também se atualiza sozinho em Avançado → Verificar atualizações, mantendo saves e ajustes.",
    recommended: "Recomendado",
    experimental: "Experimental",
    requires: "Requer um dump da sua cópia legítima, feito no seu próprio console (CUSA01623 ou CUSA01715, versão 01.00 ou 01.02). Também requer GPU com Vulkan 1.3 e CPU com AVX.",
    labels: { file: "Arquivo", system: "Sistema", gpu: "Placa", cpu: "Processador", tested: "Testado", note: "Atenção" },
    windows: {
      system: "Windows 10 (1903+) ou 11, 64 bits",
      gpu: "Vulkan 1.3 com driver atualizado",
      cpu: "x86-64 com AVX: Intel Sandy Bridge ou AMD FX em diante",
    },
    linux: {
      system: "x86-64 com glibc 2.39 ou mais nova",
      tested: "Ubuntu 24.04, Debian 13, Fedora 42, Arch, openSUSE, Bazzite",
      note: "Filtro anisotrópico, vibração e F12 ainda não foram testados no Linux",
    },
    zip: "Baixar .zip",
    appimage: "Baixar AppImage",
    cadence: {
      label: "Ritmo de atualização",
      summary: "{count} versões em {hours} horas",
      aria: "Últimas {count} releases do port",
      stable: "estável",
      tests: "{count} builds de teste",
    },
  },

  performance: {
    word: "Desempenho",
    tape: "120 FPS por padrão. 240 se você quiser.",
    lead: "O jogo roda direto na CPU, a partir do seu dump, sem emulação. Os números abaixo são do overlay do próprio port, em resolução nativa.",
    recordedOn: "Gravado em",
    rig: "1080p nativo · motor a 120 FPS · NVIDIA App",
    video: { title: "Vídeo do port em funcionamento", pending: "O vídeo novo entra aqui em breve." },
    stats: [
      "FPS no motor, ligado por padrão",
      "FPS com o patch opcional",
      "tempo de quadro a 240 FPS",
      "resolução máxima de render, a partir de 480p",
    ],
    frametime: "4,2",
    bench: {
      label: "Referência · 1080p · motor a 240",
      min: "mínimo",
      avg: "média",
      max: "máximo",
      note: "RX 6700 XT, Ryzen 5 5600X e 32 GB. É um resultado de referência, não garantia para outras máquinas. Em notebooks com NVIDIA, Stream buffer memory em System RAM pode render mais FPS.",
    },
    shots: {
      chamber: { alt: "Salão circular com uma escultura de metal iluminada em azul e um vitral ao fundo", caption: "Gameplay" },
      cestus: { alt: "Kratos com o Cestus de Nemeia entre pilares de gelo", caption: "Gameplay" },
    } satisfies Record<string, ShotCopy>,
  },

  features: {
    word: "Recursos",
    tape: "O que o port já faz hoje",
    controller: {
      eyebrow: "Controle",
      title: "Os botões do seu controle no jogo",
      text: "QTEs, tutoriais e a lista de golpes mostram ícones de Xbox ou Nintendo, em qualquer idioma. DualSense, Xbox e teclado funcionam juntos, com remapeamento.",
      note: "Launcher → Jogo → Controles → Ícones no jogo. Os ícones são gerados em cópias de dois arquivos, cerca de 70 MB, fora da pasta do jogo.",
      shots: {
        original: {
          alt: "Menu Fortalecer das Lâminas do Exílio com os comandos triângulo, quadrado e círculo do PlayStation",
          caption: "Menu Fortalecer · ícones originais",
        },
        xbox: {
          alt: "Menu Fortalecer das Lâminas do Exílio com os comandos Y, X e B no estilo Xbox",
          caption: "Menu Fortalecer · estilo Xbox",
        },
        nintendo: {
          alt: "Menu Fortalecer da Lâmina de Atena com os comandos X, Y e A no estilo Nintendo",
          caption: "Menu Fortalecer · estilo Nintendo",
        },
      } satisfies Record<"original" | "xbox" | "nintendo", ShotCopy>,
      switcherAria: "Estilo dos ícones",
      styles: {
        original: { label: "Original", aria: "Ícones originais do PlayStation" },
        xbox: { label: "Xbox", aria: "Ícones no estilo Xbox" },
        nintendo: { label: "Nintendo", aria: "Ícones no estilo Nintendo" },
      },
    },
    menu: {
      eyebrow: "Menu do port",
      title: "Cheats e ajustes sem sair do jogo",
      open: "Abra com",
      or: "ou",
      saved: "Tudo fica salvo em",
      shotAlt: "Menu do port aberto durante o jogo, aba Game, com cheats e multiplicadores",
      items: [
        ["Vida, magia, itens e Fúria de Esparta infinitos", "cheats"],
        ["Very Hard liberado e pulo duplo infinito", "cheats"],
        ["Orbes e dano causado ou recebido", "0,1x a 100x"],
        ["Barra de vida dos inimigos", "HUD"],
        ["FPS, frametime, CPU, RAM e VRAM", "overlay"],
      ] as [string, string][],
    },
    more: [
      { title: "Launcher", text: "Cinco páginas: Início, Gráficos, Desempenho, Jogo e Avançado." },
      { title: "Saves", text: "Lista como no PS4, autosave, backup antes de cada partida e importação do shadPS4." },
      { title: "Imagem", text: "Filtro anisotrópico até 16x, nitidez RCAS e capturas em PNG com F12." },
      { title: "Steam", text: "Adicione como jogo externo, com capas e logo gerados do seu dump." },
    ],
    launcher: {
      alt: "Página Início do launcher do port, com ajustes rápidos de modo de exibição, resolução, limite de quadros e taxa do motor, e o botão Jogar",
      caption: "Launcher · página Início",
    } satisfies ShotCopy,
  },

  compatibility: {
    word: "Compatível?",
    tape: "Veja sua placa antes de baixar",
    lead: "Tirado das notas da {version}. Se a sua placa tem um problema conhecido, acompanhe a issue em vez de abrir outra.",
    vendorsAria: "Fabricante da placa",
    summary: "{ok} sem problemas · {bad} com problemas conhecidos",
    gpus: [
      { vendor: "nvidia", name: "GeForce RTX 3060", status: "ok", label: "Testado", detail: "As gravações desta página: 1080p nativo, motor a 120 FPS" },
      { vendor: "nvidia", name: "GeForce RTX 5070", status: "ok", label: "Testado", detail: "Correção de texturas da 2.3.0 testada, FPS igual ao anterior" },
      {
        vendor: "nvidia",
        name: "Notebook com AMD integrada + NVIDIA",
        status: "ok",
        label: "Corrigido na 2.3.0",
        detail: "Tela preta: a camada Vulkan da AMD escondia a NVIDIA, e o launcher agora desliga essa camada",
        issues: "#263",
      },
      { vendor: "nvidia", name: "GeForce GTX 750 Ti", status: "bad", label: "Problema conhecido", detail: "ErrorOutOfDeviceMemory durante o jogo", issues: "#259" },
      { vendor: "amd", name: "Radeon RX 6700 XT", status: "ok", label: "Testado", detail: "Jogável do início ao fim a 1080p, motor a 240 FPS" },
      { vendor: "amd", name: "Radeon RX 7800 XT · Linux RADV", status: "ok", label: "Testado", detail: "Arch Linux, sessão Wayland" },
      { vendor: "amd", name: "Radeon RX 6600 e APUs Ryzen", status: "bad", label: "Problema conhecido", detail: "Imagem desenhada pequena num canto", issues: "#121 #142" },
      { vendor: "amd", name: "Radeon RX 550 · RX 580", status: "bad", label: "Problema conhecido", detail: "Crash com Unknown data_format=15 ou Format10_11_11", issues: "#196 #287" },
      { vendor: "amd", name: "Radeon RX 5500M", status: "bad", label: "Problema conhecido", detail: "ErrorOutOfDeviceMemory depois de 15 a 20 minutos", issues: "#181" },
      { vendor: "intel", name: "Iris Xe", status: "bad", label: "Em investigação", detail: "Crash no primeiro carregamento de fase", issues: "#188" },
      { vendor: "intel", name: "UHD Graphics", status: "bad", label: "Em investigação", detail: "Device lost na cutscene em que Atena entrega as lâminas e iluminação errada", issues: "#216 #206" },
      { vendor: "intel", name: "HD Graphics 630", status: "bad", label: "Em investigação", detail: "O 3D aparece só preto ou azul", issues: "#35" },
      {
        vendor: "steamdeck",
        name: "Steam Deck e outros RADV",
        status: "ok",
        label: "Corrigido na 2.3.0",
        detail: "Os blocos corrompidos no Kratos e no logo sumiram: os sparse binds agora vão para uma fila que os suporta",
        issues: "#143 #204",
      },
      { vendor: "steamdeck", name: "Opções novas da 2.3.0", status: "warn", label: "Não testado", detail: "Filtro anisotrópico, vibração e F12 ainda não foram testados no Linux" },
    ] as GpuRow[],
  },

  credits: {
    word: "Créditos",
    tape: "Feito pela comunidade, código aberto sob GPL-2.0",
    items: {
      felipe: "Mantém o gow3_pc e adaptou o patch de 240 FPS",
      cuesta4: "Correções de renderização do jogo no shadPS4",
      shadps4: "Núcleo de vídeo que traduz GPU e shaders para Vulkan",
      deadinside28: "bloodborne_pc, o port original",
      supermedo: "O fork para Windows de onde o projeto vem",
      kvicken: "Patches de resolução, texturas e 120 FPS",
    },
  },

  footer: {
    portTitle: "O port",
    portBefore: "O gow3_pc é um projeto de",
    portMiddle: ", que cria e mantém o port. Downloads, issues e código ficam no",
    portLink: "repositório oficial",
    pageTitle: "Esta página",
    pageBefore: "Página feita por",
    pageMiddle: ". O código está aberto em",
    notice: "gow3_pc é um projeto independente, não oficial e sem fins lucrativos.",
    legal: "Aviso legal",
    linksAria: "Links do projeto",
    links: { repo: "Repositório", issues: "Issues", pageRepo: "Código desta página" },
  },

  legal: {
    title: "Aviso legal",
    paragraphs: [
      "gow3_pc é um projeto independente, não oficial e sem fins lucrativos. Não tem afiliação, patrocínio ou endosso da Sony Interactive Entertainment, do Santa Monica Studio ou de qualquer empresa ligada a eles. Todas as marcas citadas pertencem aos seus donos.",
      "Este projeto não distribui código, arquivos, assets, chaves nem firmware do jogo ou do console. Para usar, você precisa de um dump da sua própria cópia, obtido legalmente no seu próprio console. Não damos suporte a pirataria e não ajudamos a obter cópias do jogo.",
      "As imagens e vídeos desta página são capturas de tela do port em funcionamento, usadas só para demonstração.",
    ],
    contactBefore: "Pedidos de remoção ou contato de detentores de direitos: ",
    contactAfter: ". Respondemos e removemos o conteúdo prontamente.",
    emailPending: "e-mail em breve",
    back: "Voltar para o início",
  },

  tutorials: {
    eyebrow: "Tutoriais",
    title: "Resolva pelo log",
    introBefore: "O port escreve tudo em",
    introAfter: ", ao lado do God of War III.exe. No launcher, abra em Avançado → Log. Os guias partem da linha que aparece no fim desse arquivo.",
    guides: "Guias",
    table: ["Linha no log", "Causa provável", "O que fazer"] as [string, string, string],
    checklistTitle: "Nada bateu? Confira o básico",
    openIssue: "Abrir issue no GitHub",
    items: [
      {
        id: "crash-on-start",
        title: "O jogo abre e fecha na hora",
        hint: "Fault: · STOP:",
        tone: "bad",
        badge: "Mais reportado",
        intro:
          "A janela aparece, às vezes chega na logo da Santa Monica, e fecha sozinha. Cada causa deixa uma linha diferente no fim de user\\last_run.log.",
        log: {
          label: "user\\last_run.log · exemplo real de issue",
          lines: [
            "Runtime: guest thread 'WorkerThread3' created (stack=262144, prio=700)",
            "Runtime: guest thread 'WorkerThread4' created (stack=262144, prio=700)",
            "!Fault: read access to 00000000000002c0 at igvk64.dll+0xa06f12 (thread 14664)",
            "rax=0000000000000000 rbx=00000000796e1978 rcx=00000000796e1978",
            "O jogo foi fechado (código 3).",
          ],
        },
        table: [
          { line: "STOP: this CPU lacks …", cause: "CPU sem AVX, anterior a Sandy Bridge ou AMD FX", fix: "Não há como contornar. O port precisa de AVX." },
          { line: "Runtime: cannot create 8128 MiB of guest memory (error 1450)", cause: "Pouca memória virtual no Windows", fix: "Aumente o arquivo de paginação. Veja o guia Erro 1450." },
          { line: "… ow-graphics-hook64.dll", cause: "Overlay do Overwolf injetado no jogo", fix: "Feche o Overwolf antes de jogar (#199)." },
          { line: "Fault: … at igvk64.dll", cause: "Driver Vulkan da Intel (Iris Xe, UHD)", fix: "Instale o driver mais recente direto do site da Intel. Iris Xe está em #188." },
          {
            line: "STOP: guest raised debug exception code=0xa0020014",
            cause: "Update 1.02 completo (eboot.bin sha256 6e72330e…)",
            fix: "Em investigação (#175, #213). Teste com o dump 01.00 se tiver.",
          },
          { line: "0xC0000005 in ucrtbase!strlen", cause: "Crash logo após as threads de áudio", fix: "Em investigação (#46). Anexe o log na issue." },
          { line: "code=0xa0020001", cause: "Dump do jogo provavelmente incompleto", fix: "Refaça o dump da sua própria cópia, no seu console. O launcher avisa isso desde a 2.3.0." },
        ],
        steps: [
          { title: "Abra o log e vá até o fim", text: "Procure a primeira linha que começa com Fault:, STOP: ou Runtime: cannot. O que vem depois dela é consequência." },
          { title: "Compare com a tabela", text: "O nome da DLL ou o texto do STOP quase sempre indica a causa." },
          {
            title: "Abra uma issue se nada bateu",
            text: "Informe GPU e versão do driver, CPU, versão do port, versão do jogo (01.00 ou 01.02) e anexe o last_run.log completo.",
          },
        ],
        checklist: [
          "O zip foi extraído para uma pasta, e o jogo não está rodando de dentro do zip.",
          "Windows 10 versão 1903 ou mais nova, 64 bits.",
          "Driver de vídeo com Vulkan 1.3, baixado do site da AMD, NVIDIA ou Intel.",
          "A pasta do jogo tem eboot.bin, sce_module e sce_sys.",
          "Você está na versão mais recente do port.",
        ],
      },
      {
        id: "black-screen",
        title: "Tela preta depois da logo",
        hint: "WAIT_REG_MEM deadlock",
        tone: "ok",
        badge: "Corrigido na 2.2.0",
        intro: "A janela abre e o contador de FPS roda, mas a imagem nunca aparece.",
        note: {
          label: "Causa",
          text: "Um deadlock entre a GPU emulada e a thread EOP do jogo nos primeiros flips: a GPU esperava num WAIT_REG_MEM um sinal que a thread de flip só escreve depois do próximo EOP. Encontrado por @brunoweierich-ctrl.",
        },
        steps: [
          { title: "Atualize para a 2.2.0 ou mais nova", text: "O patch Bug Fix - Startup Black Screen (#119) é aplicado sempre, mesmo com uma seleção de patches antiga salva." },
          { title: "Confirme no log", text: "A lista de patches aplicados no log deve incluir Bug Fix - Startup Black Screen." },
          {
            title: "Notebook com AMD integrada e NVIDIA?",
            text: "Atualize para a 2.3.0. A camada Vulkan de gráficos alternáveis da AMD escondia a placa NVIDIA, e o launcher agora desliga essa camada (#263).",
          },
          { title: "Continua preto? Reporte", text: "Informe GPU, driver, versão do jogo e a saída de Avançado → Log. Limpar o cache de shaders não resolve isso." },
        ],
      },
      {
        id: "error-1450",
        title: "Erro 1450 ao iniciar",
        hint: "cannot create guest memory",
        tone: "warn",
        badge: "Configuração do Windows",
        intro:
          "O port reserva cerca de 8 GB de memória para o jogo. Sem arquivo de paginação suficiente, o Windows recusa. Desde a 2.3.0 o próprio launcher mostra estes passos quando o erro acontece.",
        log: { label: "user\\last_run.log", lines: ["!Runtime: cannot create 8128 MiB of guest memory (error 1450)"] },
        steps: [
          { title: "Abra as configurações avançadas", text: "Pressione Win + R, digite SystemPropertiesAdvanced e confirme." },
          { title: "Vá até a memória virtual", text: "Desempenho → Configurações → Avançado → Memória virtual → Alterar. Desmarque o gerenciamento automático." },
          { title: "Defina um tamanho personalizado no C:", text: "Por exemplo 16384 MB inicial e 24576 MB máximo. Clique em Definir e depois em OK." },
          { title: "Reinicie o PC", text: "A mudança só vale depois de reiniciar." },
        ],
      },
      {
        id: "textures",
        title: "Texturas amarelas ou brancas",
        hint: "corrigido na 2.3.0",
        tone: "ok",
        badge: "Corrigido na 2.3.0",
        intro: "O chão mudava de cor depois de um tempo de jogo, muitas vezes depois de Poseidon ou no Coração de Gaia.",
        note: {
          label: "Causa",
          text: "Os readbacks da GPU escreviam na memória do jogo sem avisar o cache de texturas, então as texturas daquela memória nunca eram recarregadas. Encontrado e corrigido por @hmathsan (#331).",
        },
        steps: [
          { title: "Atualize para a 2.3.0 ou mais nova", text: "A correção vale com qualquer configuração de readbacks." },
          {
            title: "Religue os readbacks adiados",
            text: "Se você desligou Desempenho → Dados da GPU → Deferred GPU readbacks como paliativo, ligue de novo. Com eles ligados o jogo roda cerca de duas vezes mais rápido nas cenas pesadas.",
          },
          {
            title: "Fora de 1080p ainda pode acontecer",
            text: "A correção foi testada em 1080p. Em outras resoluções de render ainda há relatos de texturas quebradas e áreas claras demais (#294, #260). Se acontecer, reporte com a resolução usada.",
          },
        ],
      },
      {
        id: "stuck-at-high-fps",
        title: "Não consigo passar de um trecho",
        hint: "120 ou 240 FPS",
        tone: "warn",
        badge: "Problema conhecido",
        intro:
          "A 120 ou 240 FPS, alguns pontos travam o progresso: Kratos não passa por um caminho ou não sobe numa borda, e prompts de apertar o botão repetidamente podem não avançar (#114, #313, #56, #110, #312).",
        steps: [
          { title: "Baixe o FPS do motor para 60", text: "No launcher, em Taxa de quadros do motor, escolha 60. Também dá para mudar no menu do port (Insert), aba Desempenho." },
          { title: "Passe pelo trecho", text: "Com o motor a 60 FPS o jogo se comporta como no console nesses pontos." },
          { title: "Volte para 120 ou 240", text: "Depois do trecho, restaure a taxa que você usava." },
        ],
      },
      {
        id: "shadps4-saves",
        title: "Importar saves do shadPS4",
        hint: "savedata\\1\\CUSA01623",
        tone: "ok",
        badge: "Funciona",
        intro:
          "Só saves do shadPS4 deste jogo (CUSA01623 ou CUSA01715). Saves do RPCS3 são do jogo de PS3 e não funcionam. Use o mesmo title ID nos dois lados.",
        log: {
          label: "origem → destino · exemplo com CUSA01623",
          lines: [
            "shadPS4 (antigo)  user\\savedata\\1\\CUSA01623\\",
            "shadPS4 (novo)    home\\<user-id>\\savedata\\CUSA01623\\",
            "!port              C:\\Games\\gow3-windows\\user\\savedata\\1\\CUSA01623\\",
          ],
        },
        steps: [
          { title: "Feche os dois e faça backup", text: "Copie as duas pastas de save para outro lugar antes de mexer." },
          {
            title: "Copie cada pasta de slot",
            text: "Mantenha o nome e os arquivos do slot. Não crie outra pasta CUSA01623 dentro. Deixe de fora a pasta sce_sys interna do slot.",
          },
          {
            title: "Crie a pasta de metadados",
            text: "Ao lado de cada slot, crie <nome do slot>.sce_sys. Não renomeie param.sfo para param.bin: os formatos são diferentes.",
          },
          { title: "Abra o port e escolha Carregar", text: "A lista mostra até 32 saves. Salvar de novo no port grava os metadados do slot." },
        ],
      },
      {
        id: "overlays",
        title: "Overlays não aparecem",
        hint: "bin\\gow3-probe.exe",
        tone: "warn",
        badge: "Configuração",
        intro: "O processo do jogo não é o executável que você abre.",
        log: {
          label: "processos",
          lines: ["God of War III.exe      launcher", "!bin\\gow3-probe.exe      jogo (Vulkan)", "out\\gow3-probe.exe      jogo, em builds do código-fonte"],
        },
        steps: [
          { title: "Aponte o overlay para gow3-probe.exe", text: "No RTSS, adicione bin\\gow3-probe.exe e ligue o on-screen display do Afterburner." },
          { title: "No ReShade, escolha Vulkan", text: "No instalador, selecione o mesmo executável e a API Vulkan." },
          { title: "Feche o Overwolf", text: "O ow-graphics-hook64.dll derruba o jogo ao iniciar (#199)." },
        ],
      },
    ] as TutorialContent[],
  },
};

export type Dictionary = typeof pt;
export type { Tone };
export default pt;
