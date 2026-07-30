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

Build estático:

```bash
pnpm build-storybook
```

Saída em `packages/ui/storybook-static`. Domínio público planejado: [ui.veidjz.com](https://ui.veidjz.com).

### Deploy no Railway (serviço separado)

Não use o serviço do site (`apps/web`). Crie outro serviço no mesmo projeto Railway, apontando para este repo.

1. New Service → GitHub → `veidjz/veidjz-web` (mesmo repo do site).
2. Em Variables do serviço Storybook, defina `RAILWAY_DOCKERFILE_PATH=Dockerfile.storybook` (não crie um `Dockerfile` na raiz; o site continua no Nixpacks/Next).
3. Deploy. Confirme a URL `*.up.railway.app` do serviço Storybook.
4. Settings → Networking → Custom Domain → `ui.veidjz.com` (domínio já está no Railway Domains; o CNAME é gerado pelo painel).
5. Abra `https://ui.veidjz.com` e confira o manager do Storybook.

Comandos equivalentes (se preferir Nixpacks em vez do Dockerfile): build `pnpm install --frozen-lockfile && pnpm build-storybook`, start `npx --yes http-server@14.1.1 packages/ui/storybook-static -p $PORT -a 0.0.0.0`.

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
