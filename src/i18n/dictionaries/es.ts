import type { Dictionary } from "./pt";

const es: Dictionary = {
  meta: {
    title: "God of War III Remastered para PC",
    titleTemplate: "%s · God of War III para PC",
    description:
      "Port nativo de God of War III Remastered (PS4) para Windows y Linux. Descarga la versión más reciente, a 120 FPS por defecto y hasta 240.",
    tutorialsTitle: "Guías",
    tutorialsDescription:
      "Soluciones para los problemas más comunes del port de God of War III para PC, a partir de la línea que aparece en last_run.log.",
  },

  common: {
    download: "Descargar",
    downloadWindows: "Descargar para Windows",
    downloadVersion: "Descargar v{version}",
    downloadNow: "Descargar ahora",
    floatingMeta: "v{version} · Windows · Linux",
    copy: "Copiar",
    copied: "Copiado",
    copyFailed: "Selecciona y copia",
    releaseNotes: "Notas de la versión",
  },

  header: {
    homeAria: "God of War III para PC, inicio",
    tagline: "Port nativo · PC",
    sectionsAria: "Secciones",
    openMenu: "Abrir menú",
    menuSubtitle: "Port nativo · gow3_pc",
    notesTitle: "Notas de la versión más reciente",
    menuVersion: "Versión {version} · notas de la versión",
    repoAria: "Repositorio del port en GitHub, {stars} estrellas",
    language: "Idioma",
    nav: {
      download: "Descarga",
      performance: "Rendimiento",
      features: "Funciones",
      compatibility: "Compatibilidad",
      tutorials: "Guías",
    },
  },

  hero: {
    eyebrow: "Port nativo de PS4 · Windows y Linux",
    title: "God of War III",
    subtitle: "Remastered en PC",
    lede: "El código original del juego ejecutándose directamente en tu procesador, a 120 FPS por defecto y hasta 240.",
    requires: "Requiere el dump de tu propia copia de PS4 (CUSA01623 o CUSA01715), una GPU con Vulkan 1.3 y una CPU con AVX.",
    downloads: "descargas",
    videoAria:
      "Gameplay de God of War III en el port a 120 FPS, grabado en una RTX 3060: el Tártaro, la cámara giratoria de Dédalo, las Espadas en combate y un QTE con icono de Nintendo",
    newsLabel: "Novedades",
    newsAria: "Novedades de las últimas versiones",
    news: [
      { version: "2.3.0", text: "Texturas amarillas y blancas corregidas" },
      { version: "2.3.0", text: "Steam Deck sin corrupción de bloques" },
      { version: "2.3.0", text: "Filtrado anisotrópico hasta 16x" },
      { version: "2.3.0", text: "Vibración ajustable y capturas con F12" },
      { version: "2.2.0", text: "Iconos de QTE al estilo Xbox y Nintendo" },
      { version: "2.2.0", text: "Pantalla negra al inicio corregida" },
    ],
  },

  telemetry: {
    label: "Overlay del port",
    rig: "RTX 3060 · 1080p",
    frame: "FPS · 8,3 ms",
    place: "Tártaro · {seconds} s",
    share: "{share}% del tiempo a 120",
    aria: "FPS por segundo en {seconds} segundos de gameplay en el Tártaro, grabado en una RTX 3060: {share}% del tiempo a 120, mínimo de {min}",
  },

  downloads: {
    word: "Descarga",
    tape: "Siempre la versión más reciente, directo de GitHub",
    lead: "Elige tu plataforma. El launcher también se actualiza solo en Avanzado → Buscar actualizaciones, conservando partidas y ajustes.",
    recommended: "Recomendado",
    experimental: "Experimental",
    labels: { file: "Archivo", system: "Sistema", gpu: "GPU", cpu: "Procesador", tested: "Probado en", note: "Atención" },
    windows: {
      system: "Windows 10 (1903+) u 11, 64 bits",
      gpu: "Vulkan 1.3 con el driver actualizado",
      cpu: "x86-64 con AVX: Intel Sandy Bridge o AMD FX en adelante",
    },
    linux: {
      system: "x86-64 con glibc 2.39 o más reciente",
      tested: "Ubuntu 24.04, Debian 13, Fedora 42, Arch, openSUSE, Bazzite",
      note: "El filtrado anisotrópico, la vibración y F12 aún no se probaron en Linux",
    },
    zip: "Descargar .zip",
    appimage: "Descargar AppImage",
    cadence: {
      label: "Ritmo de actualización",
      summary: "{count} versiones en {hours} horas",
      aria: "Últimas {count} versiones del port",
    },
  },

  performance: {
    word: "Rendimiento",
    tape: "120 FPS por defecto. 240 si quieres.",
    lead: "El código del juego se ejecuta directamente en la CPU, sin emulación. Los números de abajo vienen del overlay del propio port, en resolución nativa.",
    recordedOn: "Grabado en",
    rig: "1080p nativo · motor a 120 FPS · NVIDIA App",
    stats: [
      "FPS en el motor, activado por defecto",
      "FPS con el parche opcional",
      "tiempo de fotograma a 240 FPS",
      "resolución máxima de render, desde 480p",
    ],
    frametime: "4,2",
    bench: {
      label: "Referencia · 1080p · motor a 240",
      min: "mínimo",
      avg: "media",
      max: "máximo",
      note: "RX 6700 XT, Ryzen 5 5600X y 32 GB. Es un resultado de referencia, no una garantía para otras máquinas. En portátiles con NVIDIA, poner Stream buffer memory en System RAM puede dar más FPS.",
    },
    shots: {
      tartarus: { alt: "Kratos llegando al Tártaro", caption: "Tártaro", meta: "overlay del port" },
      titan: { alt: "Kratos sobre una plataforma frente a un titán, con lava debajo", caption: "Gameplay", meta: "Native" },
      cestus: { alt: "Kratos con el Cesto de Nemea entre pilares de hielo", caption: "Gameplay", meta: "Native" },
    },
  },

  features: {
    word: "Funciones",
    tape: "Lo que el port ya hace hoy",
    controller: {
      eyebrow: "Mando",
      title: "Los botones de tu mando en el juego",
      text: "Los QTE, los tutoriales y la lista de movimientos muestran iconos de Xbox o Nintendo, en cualquier idioma. DualSense, mandos de Xbox y teclado funcionan a la vez, con reasignación.",
      note: "Launcher → Juego → Controles → Iconos en el juego. Los iconos se generan en copias de dos archivos del juego, unos 70 MB, fuera de la carpeta del juego.",
      shot: {
        alt: "Menú de mejora de las Espadas del Exilio con los botones B, X, Y y A al estilo Nintendo",
        caption: "Menú de mejora con iconos de Nintendo",
        meta: "B · X · Y · A",
      },
      switcherAria: "Estilo de los iconos",
      styles: {
        original: { label: "Original", aria: "Iconos originales de PlayStation" },
        xbox: { label: "Xbox", aria: "Iconos al estilo Xbox" },
        nintendo: { label: "Nintendo", aria: "Iconos al estilo Nintendo" },
      },
    },
    menu: {
      eyebrow: "Menú del port",
      title: "Trucos y ajustes sin salir del juego",
      open: "Ábrelo con",
      or: "o",
      saved: "Todo se guarda en",
      shotAlt: "El menú del port abierto durante el juego, pestaña Game, con trucos y multiplicadores",
      items: [
        ["Vida, magia, objetos e Ira de Esparta infinitos", "trucos"],
        ["Very Hard desbloqueado y doble salto infinito", "trucos"],
        ["Orbes y daño causado o recibido", "0,1x a 100x"],
        ["Barra de vida de los enemigos", "HUD"],
        ["FPS, tiempo de fotograma, CPU, RAM y VRAM", "overlay"],
      ],
    },
    cutscenes: {
      eyebrow: "Cinemáticas y audio",
      title: "Vídeos, voces y subtítulos funcionando",
      text: "Cinemáticas en H.264, música, voces y efectos en ATRAC9 y MP3. Los subtítulos y menús siguen el idioma de tu dump.",
      shotAlt: "Cinemática con Kratos y subtítulos en portugués",
    },
    more: [
      { title: "Launcher", text: "Cinco páginas: Inicio, Gráficos, Rendimiento, Juego y Avanzado." },
      { title: "Partidas", text: "Lista como en PS4, autoguardado, copia de seguridad antes de cada sesión e importación de shadPS4." },
      { title: "Imagen", text: "Filtrado anisotrópico hasta 16x, nitidez RCAS y capturas en PNG con F12." },
      { title: "Steam", text: "Añádelo como juego externo, con portadas y logo generados a partir de tu dump." },
    ],
    launcher: {
      alt: "Página Inicio del launcher, con ajustes rápidos de modo de pantalla, resolución, límite de fotogramas y fotogramas del motor, y el botón Jugar",
      caption: "Launcher · página Inicio",
      meta: "Nativa (1080p) · motor a 120 FPS · 2 parches",
    },
  },

  compatibility: {
    word: "¿Compatible?",
    tape: "Revisa tu GPU antes de descargar",
    lead: "Sacado de las notas de la {version}. Si tu GPU tiene un problema conocido, sigue esa issue en lugar de abrir otra.",
    gpus: [
      { name: "AMD Radeon RX 6700 XT", status: "ok", label: "Probado", detail: "Jugable de principio a fin a 1080p, motor a 240 FPS" },
      { name: "NVIDIA RTX 5070", status: "ok", label: "Probado", detail: "Corrección de texturas de la 2.3.0 probada, mismos FPS que antes" },
      { name: "RX 7800 XT · Linux RADV", status: "ok", label: "Probado", detail: "Arch Linux, sesión Wayland" },
      {
        name: "Steam Deck y otros RADV",
        status: "ok",
        label: "Corregido en la 2.3.0",
        detail: "La corrupción de bloques en Kratos y en el logo desapareció: los sparse binds ahora van a una cola que los admite",
        issues: "#143 #204",
      },
      {
        name: "Portátil con AMD integrada + NVIDIA",
        status: "ok",
        label: "Corregido en la 2.3.0",
        detail: "Pantalla negra: la capa Vulkan de AMD ocultaba la NVIDIA, y el launcher ahora desactiva esa capa",
        issues: "#263",
      },
      { name: "AMD RX 6600 y APUs Ryzen", status: "bad", label: "Problema conocido", detail: "La imagen se dibuja pequeña en una esquina", issues: "#121 #142" },
      { name: "RX 550 · RX 580", status: "bad", label: "Problema conocido", detail: "Cierre con Unknown data_format=15 o Format10_11_11", issues: "#196 #287" },
      { name: "RX 5500M · GTX 750 Ti", status: "bad", label: "Problema conocido", detail: "ErrorOutOfDeviceMemory durante el juego", issues: "#181 #259" },
      { name: "Intel Iris Xe", status: "bad", label: "En investigación", detail: "Cierre en la primera carga de nivel", issues: "#188" },
      { name: "Intel UHD", status: "bad", label: "En investigación", detail: "Device lost en la cinemática en la que Atenea entrega las espadas, e iluminación incorrecta", issues: "#216 #206" },
      { name: "Intel HD 630", status: "bad", label: "En investigación", detail: "El 3D se ve solo negro o azul", issues: "#35" },
    ],
  },

  credits: {
    word: "Créditos",
    tape: "Hecho por la comunidad, código abierto bajo GPL-2.0",
    items: {
      felipe: "Mantiene gow3_pc y adaptó el parche de 240 FPS",
      cuesta4: "Correcciones de renderizado de God of War III en shadPS4",
      shadps4: "El núcleo de vídeo que traduce la GPU y los shaders a Vulkan",
      deadinside28: "bloodborne_pc, el port nativo original",
      supermedo: "El fork para Windows del que viene el proyecto",
      kvicken: "Parches de resolución, texturas y 120 FPS",
    },
  },

  footer: {
    portTitle: "El port",
    portBefore: "gow3_pc es un proyecto de",
    portMiddle: ", que crea y mantiene el port. Descargas, issues y código están en el",
    portLink: "repositorio oficial",
    pageTitle: "Esta página",
    pageBefore: "Página hecha por",
    pageMiddle: ". El código está abierto en",
    disclaimer:
      "Proyecto de fans, sin afiliación con Sony Interactive Entertainment ni Santa Monica Studio. God of War es una marca registrada de Sony Interactive Entertainment. No se distribuye ningún archivo del juego.",
    linksAria: "Enlaces del proyecto",
    links: { repo: "Repositorio", issues: "Issues", kofi: "Ko-fi" },
  },

  tutorials: {
    eyebrow: "Guías",
    title: "Resuélvelo desde el log",
    introBefore: "El port escribe todo en",
    introAfter: ", junto a God of War III.exe. En el launcher, ábrelo en Avanzado → Log. Cada guía parte de la línea que aparece al final de ese archivo.",
    guides: "Guías",
    table: ["Línea en el log", "Causa probable", "Qué hacer"],
    checklistTitle: "¿Nada coincide? Revisa lo básico",
    openIssue: "Abrir una issue en GitHub",
    items: [
      {
        id: "crash-on-start",
        title: "El juego se abre y se cierra enseguida",
        hint: "Fault: · STOP:",
        tone: "bad",
        badge: "El más reportado",
        intro:
          "La ventana aparece, a veces llega al logo de Santa Monica, y se cierra sola. Cada causa deja una línea distinta al final de user\\last_run.log.",
        log: {
          label: "user\\last_run.log · ejemplo real de una issue",
          lines: [
            "Runtime: guest thread 'WorkerThread3' created (stack=262144, prio=700)",
            "Runtime: guest thread 'WorkerThread4' created (stack=262144, prio=700)",
            "!Fault: read access to 00000000000002c0 at igvk64.dll+0xa06f12 (thread 14664)",
            "rax=0000000000000000 rbx=00000000796e1978 rcx=00000000796e1978",
            "El juego se cerró (código 3).",
          ],
        },
        table: [
          { line: "STOP: this CPU lacks …", cause: "CPU sin AVX, anterior a Sandy Bridge o AMD FX", fix: "No hay forma de evitarlo. El port necesita AVX." },
          { line: "Runtime: cannot create 8128 MiB of guest memory (error 1450)", cause: "Poca memoria virtual en Windows", fix: "Aumenta el archivo de paginación. Mira la guía Error 1450." },
          { line: "… ow-graphics-hook64.dll", cause: "Overlay de Overwolf inyectado en el juego", fix: "Cierra Overwolf antes de jugar (#199)." },
          { line: "Fault: … at igvk64.dll", cause: "Driver Vulkan de Intel (Iris Xe, UHD)", fix: "Instala el driver más reciente desde la web de Intel. Iris Xe se sigue en #188." },
          {
            line: "STOP: guest raised debug exception code=0xa0020014",
            cause: "Actualización 1.02 completa (eboot.bin sha256 6e72330e…)",
            fix: "En investigación (#175, #213). Prueba con un dump 01.00 si lo tienes.",
          },
          { line: "0xC0000005 in ucrtbase!strlen", cause: "Cierre justo después de que arrancan los hilos de audio", fix: "En investigación (#46). Adjunta el log a la issue." },
          { line: "code=0xa0020001", cause: "El dump del juego probablemente está incompleto", fix: "Vuelve a hacer el dump desde tu PS4. El launcher avisa de esto desde la 2.3.0." },
        ],
        steps: [
          { title: "Abre el log y ve al final", text: "Busca la primera línea que empieza con Fault:, STOP: o Runtime: cannot. Lo que viene después es consecuencia." },
          { title: "Compárala con la tabla", text: "El nombre de la DLL o el texto del STOP casi siempre indican la causa." },
          {
            title: "Abre una issue si nada coincide",
            text: "Indica GPU y versión del driver, CPU, versión del port, versión del juego (01.00 o 01.02) y adjunta el last_run.log completo.",
          },
        ],
        checklist: [
          "El zip se extrajo a una carpeta, y el juego no se ejecuta desde dentro del zip.",
          "Windows 10 versión 1903 o más reciente, 64 bits.",
          "Driver de vídeo con Vulkan 1.3, descargado de AMD, NVIDIA o Intel.",
          "La carpeta del juego tiene eboot.bin, sce_module y sce_sys.",
          "Tienes la versión más reciente del port.",
        ],
      },
      {
        id: "black-screen",
        title: "Pantalla negra después del logo",
        hint: "WAIT_REG_MEM deadlock",
        tone: "ok",
        badge: "Corregido en la 2.2.0",
        intro: "La ventana se abre y el contador de FPS funciona, pero la imagen nunca aparece.",
        note: {
          label: "Causa",
          text: "Un bloqueo entre la GPU emulada y el hilo EOP del juego en los primeros flips: la GPU esperaba en un WAIT_REG_MEM una señal que el hilo de flip solo escribe después del siguiente EOP. Lo encontró @brunoweierich-ctrl.",
        },
        steps: [
          { title: "Actualiza a la 2.2.0 o más reciente", text: "El parche Bug Fix - Startup Black Screen (#119) se aplica siempre, incluso con una selección de parches antigua guardada." },
          { title: "Compruébalo en el log", text: "La lista de parches aplicados en el log debe incluir Bug Fix - Startup Black Screen." },
          {
            title: "¿Portátil con AMD integrada y NVIDIA?",
            text: "Actualiza a la 2.3.0. La capa Vulkan de gráficos conmutables de AMD ocultaba la GPU NVIDIA, y el launcher ahora desactiva esa capa (#263).",
          },
          { title: "¿Sigue en negro? Repórtalo", text: "Indica GPU, driver, versión del juego y la salida de Avanzado → Log. Borrar la caché de shaders no lo soluciona." },
        ],
      },
      {
        id: "error-1450",
        title: "Error 1450 al iniciar",
        hint: "cannot create guest memory",
        tone: "warn",
        badge: "Ajuste de Windows",
        intro:
          "El port reserva unos 8 GB de memoria para el juego. Sin un archivo de paginación suficiente, Windows lo rechaza. Desde la 2.3.0 el propio launcher muestra estos pasos cuando ocurre el error.",
        log: { label: "user\\last_run.log", lines: ["!Runtime: cannot create 8128 MiB of guest memory (error 1450)"] },
        steps: [
          { title: "Abre la configuración avanzada del sistema", text: "Pulsa Win + R, escribe SystemPropertiesAdvanced y confirma." },
          { title: "Ve a la memoria virtual", text: "Rendimiento → Configuración → Opciones avanzadas → Memoria virtual → Cambiar. Desmarca la administración automática." },
          { title: "Define un tamaño personalizado en C:", text: "Por ejemplo 16384 MB inicial y 24576 MB máximo. Pulsa Establecer y luego Aceptar." },
          { title: "Reinicia el PC", text: "El cambio solo se aplica después de reiniciar." },
        ],
      },
      {
        id: "textures",
        title: "Texturas amarillas o blancas",
        hint: "corregido en la 2.3.0",
        tone: "ok",
        badge: "Corregido en la 2.3.0",
        intro: "El suelo cambiaba de color tras un rato de juego, muchas veces después de Poseidón o en el Corazón de Gaia.",
        note: {
          label: "Causa",
          text: "Las lecturas de la GPU escribían en la memoria del juego sin avisar a la caché de texturas, así que las texturas de esa memoria nunca se recargaban. Lo encontró y corrigió @hmathsan (#331).",
        },
        steps: [
          { title: "Actualiza a la 2.3.0 o más reciente", text: "La corrección funciona con cualquier ajuste de lecturas." },
          {
            title: "Vuelve a activar las lecturas diferidas",
            text: "Si desactivaste Rendimiento → Datos de GPU → Deferred GPU readbacks como solución temporal, actívalo de nuevo. Con él activado el juego va casi el doble de rápido en las escenas pesadas.",
          },
          {
            title: "Fuera de 1080p aún puede pasar",
            text: "La corrección se probó a 1080p. En otras resoluciones de render todavía hay reportes de texturas rotas y zonas demasiado claras (#294, #260). Si te pasa, repórtalo con la resolución usada.",
          },
        ],
      },
      {
        id: "stuck-at-high-fps",
        title: "No puedo pasar de un punto",
        hint: "120 o 240 FPS",
        tone: "warn",
        badge: "Problema conocido",
        intro:
          "A 120 o 240 FPS algunos puntos bloquean el avance: Kratos no puede pasar por un camino o subir a un borde, y los avisos de pulsar el botón repetidamente pueden no avanzar (#114, #313, #56, #110, #312).",
        steps: [
          { title: "Baja los FPS del motor a 60", text: "En el launcher, pon los fotogramas del motor en 60. También puedes cambiarlo en el menú del port (Insert), pestaña Rendimiento." },
          { title: "Supera ese punto", text: "Con el motor a 60 FPS el juego se comporta como en la consola en esos puntos." },
          { title: "Vuelve a 120 o 240", text: "Después de ese punto, restaura la tasa que usabas." },
        ],
      },
      {
        id: "shadps4-saves",
        title: "Importar partidas de shadPS4",
        hint: "savedata\\1\\CUSA01623",
        tone: "ok",
        badge: "Funciona",
        intro:
          "Solo partidas de shadPS4 para God of War III Remastered. Las de RPCS3 son del juego de PS3 y no funcionan. Usa el mismo title ID en ambos lados.",
        log: {
          label: "origen → destino · ejemplo con CUSA01623",
          lines: [
            "shadPS4 (antiguo) user\\savedata\\1\\CUSA01623\\",
            "shadPS4 (nuevo)   home\\<user-id>\\savedata\\CUSA01623\\",
            "!port              C:\\Games\\gow3-windows\\user\\savedata\\1\\CUSA01623\\",
          ],
        },
        steps: [
          { title: "Cierra ambos y haz una copia", text: "Copia las dos carpetas de partidas a otro sitio antes de tocar nada." },
          {
            title: "Copia cada carpeta de ranura",
            text: "Conserva el nombre y los archivos de la ranura. No crees otra carpeta CUSA01623 dentro. Deja fuera la carpeta sce_sys interna de la ranura.",
          },
          {
            title: "Crea la carpeta de metadatos",
            text: "Junto a cada ranura, crea <nombre de la ranura>.sce_sys. No renombres param.sfo a param.bin: los formatos son distintos.",
          },
          { title: "Abre el port y elige Cargar", text: "La lista muestra hasta 32 partidas. Guardar de nuevo en el port escribe los metadatos de la ranura." },
        ],
      },
      {
        id: "overlays",
        title: "Los overlays no aparecen",
        hint: "bin\\gow3-probe.exe",
        tone: "warn",
        badge: "Ajuste",
        intro: "El proceso del juego no es el ejecutable que abres.",
        log: {
          label: "procesos",
          lines: ["God of War III.exe      launcher", "!bin\\gow3-probe.exe      juego (Vulkan)", "out\\gow3-probe.exe      juego, en builds del código fuente"],
        },
        steps: [
          { title: "Apunta el overlay a gow3-probe.exe", text: "En RTSS, añade bin\\gow3-probe.exe y activa el on-screen display de Afterburner." },
          { title: "En ReShade, elige Vulkan", text: "En el instalador, selecciona ese mismo ejecutable y la API Vulkan." },
          { title: "Cierra Overwolf", text: "ow-graphics-hook64.dll cierra el juego al iniciar (#199)." },
        ],
      },
    ],
  },
};

export default es;
