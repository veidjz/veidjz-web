# veidjz-web

Site profissional de João Victor Veidz em [veidjz.com](https://veidjz.com) e design system compartilhado (`packages/ui`).

## Qualidade

```bash
pnpm install
pnpm quality
```

`pnpm quality` roda check de disables, Biome, ESLint, typecheck e testes.

## Storybook

```bash
pnpm storybook
```

Abre o Storybook do `@veidjz/ui` em [http://localhost:6006](http://localhost:6006).

## Testes visuais

Baselines Playwright (Chromium) contra o Storybook estático. Gere o build antes de rodar.

```bash
pnpm exec playwright install chromium
pnpm build-storybook
pnpm test:visual
```

Atualizar snapshots (use o mesmo SO do CI, Linux):

```bash
pnpm test:visual:update
```

No macOS, preferir Docker alinhado ao CI:

```bash
docker run --rm \
  -v "$PWD":/work \
  -v veidjz-web-pw-nm:/work/node_modules \
  -w /work -e CI=1 -e HOME=/tmp \
  mcr.microsoft.com/playwright:v1.62.0-jammy \
  /bin/bash -lc 'corepack enable && pnpm install --frozen-lockfile && pnpm build-storybook && pnpm test:visual:update'
```
