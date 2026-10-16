# God of War III para PC · landing page

Página de download do [gow3_pc](https://github.com/FelipePrado0/gow3_pc), o port para PC de God of War III Remastered (PS4), para Windows e Linux.

O objetivo da página é um só: o jogador baixar a versão mais recente com o menor esforço. Abaixo do download ficam desempenho, recursos, compatibilidade de GPU e créditos, e uma página de tutoriais para os problemas mais comuns.

> Projeto de fãs, sem afiliação com a Sony Interactive Entertainment ou a Santa Monica Studio. God of War é marca registrada da Sony Interactive Entertainment. Nenhum arquivo do jogo é distribuído por esta página nem pelo port.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components, Turbopack)
- [Tailwind CSS 4](https://tailwindcss.com) e componentes [shadcn/ui](https://ui.shadcn.com) sobre Base UI
- [GSAP](https://gsap.com) com ScrollTrigger e SplitText para as animações
- Fontes Archivo (eixo de largura, para os títulos expandidos) e JetBrains Mono, via `next/font`

## Dados sempre atualizados

`src/lib/release.ts` busca na API do GitHub a release mais recente do port: versão, data, links do `.zip` e da AppImage, tamanho, número de downloads, SHA-256 (lido dos arquivos `.sha256` da release), estrelas do repositório e as últimas releases para a linha do tempo.

A função usa `"use cache"` com `cacheLife("hours")`, então a página é pré-renderizada e se atualiza sozinha a cada hora. Se a API não responder, a página mostra um retrato da 2.2.0 em vez de quebrar.

Sem token a API do GitHub permite 60 requisições por hora por IP. Para ter folga em produção, defina um token só de leitura:

```bash
GITHUB_TOKEN=github_pat_...
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Outros comandos: `npm run build`, `npm run start` e `npm run lint`.

## Idiomas

O site existe em português, inglês e espanhol, em `/pt`, `/en` e `/es`. As seis páginas (landing e guias em cada idioma) são pré-renderizadas no build.

- `src/proxy.ts` manda quem acessa `/` para o idioma salvo pelo seletor (cookie `NEXT_LOCALE`) ou, sem ele, para o idioma do navegador (`Accept-Language`). Qualquer outro idioma cai em português.
- `src/i18n/dictionaries/pt.ts` é a fonte; `en.ts` e `es.ts` são tipados com o mesmo formato, então uma chave faltando quebra o `tsc`.
- Os componentes de servidor chamam `getI18n()`, que lê o idioma com `next/root-params`. Não é preciso passar `lang` como prop.
- Números, datas e tamanhos são formatados por idioma em `src/lib/format.ts`.

Para adicionar um idioma: inclua o código em `src/i18n/config.ts`, crie o dicionário tipado com `Dictionary` e registre-o em `src/i18n/get-dictionary.ts`.

## Composição

A página é montada com componentes compostos, cada um exportado como objeto com suas partes:

| Componente | Partes |
| --- | --- |
| `Section` | `Root`, `Header`, `Tape`, `Lead`, `Body` |
| `Hero` | `Root`, `Copy`, `Eyebrow`, `Title`, `Lede`, `Actions`, `Meta`, `Note`, `Aside` |
| `Header` | `Root`, `Brand`, `Nav`, `Actions`, `Chip` |
| `MobileMenu` | `Root`, `Links`, `Footer`, `Close` |
| `PlatformCard` | `Root`, `Flag`, `Title`, `Specs`, `Actions`, `Checksum` |
| `FeatureBlock` | `Root`, `Media`, `Content`, `Eyebrow`, `Title`, `Text` |
| `Shot` | `Root`, `Image`, `Hud`, `Caption` |
| `Tutorial` | `Root`, `Header`, `Note`, `Log`, `Table`, `Steps`, `Checklist` |
| `GlyphShowcase` | `Provider`, `Tabs`, `Pad`, `Shot` (partes cliente que compartilham o estilo escolhido por contexto) |

Os logos de Windows, Linux e dos fabricantes de GPU ficam em `src/components/brand-icons.tsx`: os de NVIDIA, AMD, Intel, Linux e Steam Deck vêm do pacote [simple-icons](https://simpleicons.org) (CC0); o do Windows, que não existe no pacote, é desenhado no próprio arquivo.

```tsx
<Section.Root id="download">
  <Section.Header word={t.downloads.word} index={1} total={5}>
    <Section.Tape>{t.downloads.tape}</Section.Tape>
    <Section.Lead>{t.downloads.lead}</Section.Lead>
  </Section.Header>
  <Section.Body>…</Section.Body>
</Section.Root>
```

As seções da landing ficam em `src/components/sections/` e só combinam essas partes com os textos do dicionário.

## Estrutura

```
src/
  app/[lang]/
    layout.tsx            <html lang>, fontes, metadados e hreflang por idioma
    page.tsx              landing: hero, download, desempenho, recursos, compatibilidade, créditos
    tutorials/page.tsx    guias a partir das linhas do last_run.log
  components/             componentes compostos e partes interativas (cliente)
  components/sections/    seções da landing montadas com os componentes compostos
  content/site.ts         dados que não mudam com o idioma (links, amostras de FPS, ícones)
  i18n/                   idiomas, dicionários e getI18n()
  lib/release.ts          dados da release mais recente, com cache de 1 hora
  proxy.ts                redireciona / para o idioma certo
public/media/             vídeo do topo (WebM AV1 e MP4 H.264) e imagem de capa
src/assets/shots/         capturas do port
```

## Animações

Os componentes de servidor só marcam elementos com `data-gsap="…"`. A página fica dentro de `<Motion>`, um componente cliente que procura essas marcas apenas na própria árvore e as anima. A busca é limitada de propósito: ao trocar de idioma, o Next 16 mantém a página anterior montada e oculta. Com `prefers-reduced-motion`, nenhuma animação roda e a página fica exatamente como foi renderizada.

| Marca | O que faz |
| --- | --- |
| `split` | as linhas do título do topo sobem de uma máscara |
| `tele`, `draw`, `fps` | o card de telemetria entra, a linha de FPS se desenha e o número conta até 120 |
| `counter` | contadores numéricos |
| `marquee` | faixa de novidades em loop |
| `section`, `hairline`, `section-word`, `tape` | abertura das seções: linha, palavra e faixa |
| `reveal` | blocos de conteúdo surgem ao entrar na tela |
| `tick`, `bar` | linha do tempo de releases e barras do benchmark |
| `float` | botão fixo de download aparece depois do topo |
| `magnetic` | o botão principal acompanha o ponteiro |

## Vídeo do topo

Loop de 18 s em 1080p a 60 FPS, montado só com trechos em que o overlay do port marcava 120 FPS, a partir de gravações do NVIDIA App numa GeForce RTX 3060. Dois arquivos: `hero.webm` (AV1, 5,8 MB) e `hero.mp4` (H.264, 7,9 MB) como alternativa.

## Mídia

As capturas e o vídeo foram gravados por jogadores rodando o port com o próprio dump do jogo. As imagens do jogo pertencem aos seus detentores e estão aqui apenas para mostrar o port funcionando.
