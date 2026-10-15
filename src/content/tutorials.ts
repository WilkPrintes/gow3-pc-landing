export type Tone = "ok" | "warn" | "bad";

export type Tutorial = {
  id: string;
  title: string;
  hint: string;
  tone: Tone;
  badge: string;
  intro: string;
  /** Terminal block: lines starting with "!" are highlighted */
  log?: { label: string; lines: string[] };
  note?: { label: string; text: string };
  table?: { line: string; cause: string; fix: string }[];
  steps: { title: string; text: string }[];
  checklist?: string[];
};

export const tutorials: Tutorial[] = [
  {
    id: "abre-e-fecha",
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
      { line: "code=0xa0020001", cause: "Dump do jogo provavelmente incompleto", fix: "Refaça o dump do seu PS4. O launcher avisa isso desde a 2.3.0." },
    ],
    steps: [
      { title: "Abra o log e vá até o fim", text: "Procure a primeira linha que começa com Fault:, STOP: ou Runtime: cannot. O que vem depois dela é consequência." },
      { title: "Compare com a tabela", text: "O nome da DLL ou o texto do STOP quase sempre indica a causa." },
      { title: "Abra uma issue se nada bateu", text: "Informe GPU e versão do driver, CPU, versão do port, versão do jogo (01.00 ou 01.02) e anexe o last_run.log completo." },
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
    id: "tela-preta",
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
    id: "erro-1450",
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
    id: "texturas",
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
    id: "travado-120fps",
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
    id: "saves-shadps4",
    title: "Importar saves do shadPS4",
    hint: "savedata\\1\\CUSA01623",
    tone: "ok",
    badge: "Funciona",
    intro: "Só saves do shadPS4 para God of War III Remastered. Saves do RPCS3 são do jogo de PS3 e não funcionam. Use o mesmo title ID nos dois lados.",
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
      { title: "Copie cada pasta de slot", text: "Mantenha o nome e os arquivos do slot. Não crie outra pasta CUSA01623 dentro. Deixe de fora a pasta sce_sys interna do slot." },
      { title: "Crie a pasta de metadados", text: "Ao lado de cada slot, crie <nome do slot>.sce_sys. Não renomeie param.sfo para param.bin: os formatos são diferentes." },
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
];
