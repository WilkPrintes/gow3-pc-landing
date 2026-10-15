# God of War III para PC · landing page

Página de download do [gow3_pc](https://github.com/FelipePrado0/gow3_pc), o port nativo de God of War III Remastered (PS4) para Windows e Linux.

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

## Estrutura

```
src/
  app/
    page.tsx              landing: hero, download, desempenho, recursos, compatibilidade, créditos
    tutoriais/page.tsx    guias a partir das linhas do last_run.log
  components/             seções da página; motion.tsx concentra todas as animações GSAP
  content/                textos e dados estáticos (GPUs, recursos, tutoriais, amostras de FPS)
  lib/release.ts          dados da release mais recente, com cache de 1 hora
public/media/             vídeo do topo (WebM AV1 e MP4 H.264) e imagem de capa
src/assets/shots/         capturas do port
```

## Animações

Os componentes de servidor só marcam elementos com `data-gsap="…"`. O componente cliente `Motion` encontra essas marcas e anima. Com `prefers-reduced-motion`, nenhuma animação roda e a página fica exatamente como foi renderizada.

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

Loop de 18 s em 1080p a 60 FPS, montado só com trechos em que o overlay do port marcava 120 FPS, a partir de gravações do NVIDIA App. Dois arquivos: `hero.webm` (AV1, 5,8 MB) e `hero.mp4` (H.264, 7,9 MB) como alternativa.

## Mídia

As capturas e o vídeo foram gravados por jogadores rodando o port com o próprio dump do jogo. As imagens do jogo pertencem aos seus detentores e estão aqui apenas para mostrar o port funcionando.
