# Japa Garage Suspensões

Site institucional da Japa Garage Suspensões — suspensão a ar, rosca e fixa, revendedor RCS Air Components.

Feito com [Astro](https://astro.build) + TypeScript, gerado como site estático e hospedado no Cloudflare Pages.

## Desenvolvimento

```bash
npm install
npm run dev       # servidor local em http://localhost:4321
npm run build     # checa tipos (astro check) e gera a pasta dist/
npm run preview   # serve o build localmente
```

## Estrutura

```
src/
├── assets/logo.png        # logo (otimizada no build via astro:assets)
├── components/            # uma seção da página por componente
├── data/site.ts           # telefone, WhatsApp, redes sociais e links do menu
├── layouts/Layout.astro   # <head>, metatags e estilos globais
├── pages/index.astro      # página inicial
└── styles/global.css      # cores, fontes (Barlow via @fontsource) e utilitários
public/
├── _headers               # headers de cache/segurança do Cloudflare Pages
└── favicon.png, apple-touch-icon.png
```

Para trocar telefone, WhatsApp ou redes sociais, edite apenas `src/data/site.ts`.

### Pendências de conteúdo

- Fotos de produtos RCS (`src/components/Rcs.astro`)
- Fotos dos projetos (`src/components/Projects.astro`)
- Domínio final em `astro.config.mjs` (`site`)

## Deploy no Cloudflare Pages

Conecte o repositório no painel do Cloudflare Pages com:

| Configuração       | Valor           |
| ------------------ | --------------- |
| Framework preset   | Astro           |
| Build command      | `npm run build` |
| Build output       | `dist`          |
| Node.js            | 22 (via `.nvmrc`) |
