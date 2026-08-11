# Nocturne — Preparação Automotiva de Performance

Site institucional da Nocturne, oficina de preparação automotiva de alta
performance. Construído com foco em identidade visual forte (tema
"cockpit escuro"), animações cinematográficas e performance técnica.

<img width="500"  src="https://github.com/user-attachments/assets/38340465-b901-4db9-9936-7c596b04d096" />

## Live demo
- https://nocturne-tuning.vercel.app/

##  Visão geral

- **Stack**: Next.js 19 (App Router) + TypeScript + Tailwind CSS v4
- **Animação**: Framer Motion (reveals, parallax, contadores) + Lenis (smooth scroll)
- **Tema**: dark cockpit — fundo quase preto, acentos vermelho/âmbar,
  tipografia editorial (Fraunces) + técnica (JetBrains Mono)
- **Assets visuais**: gerados via IA (imagens no Nano Banana, vídeos no Veo 3)

##  Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # build de produção
npm run start    # roda o build de produção localmente
npm run lint      # checagem de lint
```

##  Design system

Definido em `src/app/globals.css` via `@theme` (Tailwind v4 é CSS-first,
não usa mais `tailwind.config.ts` para tema):

| Token | Valor | Uso |
|---|---|---|
| `background` | `#0A0A0B` | fundo base |
| `surface` / `surface-2` | `#131315` / `#1C1C1F` | cards, seções alternadas |
| `accent` | `#FF3B30` | destaque vermelho de corrida |
| `accent-amber` | `#FF8A00` | destaque âmbar de painel |
| `font-display` | Fraunces | títulos editoriais |
| `font-body` | Inter | texto corrido |
| `font-mono` | JetBrains Mono | specs, labels tipo HUD |

## Assets necessários

O projeto espera os seguintes arquivos em `public/` (gerados via Nano Banana / Veo 3 — ver prompts no histórico do projeto):
> As imagens de Hero/Specs/Galeria são exemplos de um projeto de
> preparação já entregue pela Nocturne — não são um "modelo à venda".

##  SEO

- Metadata completa (title template, OG) em `layout.tsx`
- Dados estruturados `AutomotiveBusiness` (Schema.org) via `StructuredData.tsx`
- `robots.ts` e `sitemap.ts` geram `/robots.txt` e `/sitemap.xml` automaticamente
- **Antes de publicar**: atualizar `metadataBase` e as URLs em `layout.tsx`,
  `StructuredData.tsx`, `robots.ts` e `sitemap.ts` para o domínio real

##  Acessibilidade

- Todas as animações de scroll respeitam `prefers-reduced-motion` (via `useReducedMotion`)
- Foco visível customizado (`focus-visible`) em links e botões
- `alt` descritivo em todas as imagens

##  Performance

- Vídeo do Hero carrega com leve atraso (`requestIdleCallback`) para não competir com o LCP
- Imagens otimizadas via `next/image` (AVIF/WebP automático)
- Fontes carregadas via `next/font` (zero layout shift)

## Pendências / próximos passos

<!--- [ ] Substituir domínio de exemplo (`nocturnemotors.com.br`) pelo domínio real -->
- [ ] Gerar assets finais (imagens/vídeos) e revisar nomes de arquivo
- [ ] Preencher endereço real em `StructuredData.tsx`
- [ ] Revisar textos de "Serviços" no footer conforme portfólio real da oficina

---

Feito com Next.js, Tailwind CSS e Framer Motion.
