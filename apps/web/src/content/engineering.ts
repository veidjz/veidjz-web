export const engineeringCopy = {
  intro:
    'Este site é um meta-portfólio: as mesmas decisões de engenharia que uso em produto aparecem aqui, em escala menor e pública. O objetivo é mostrar stack, qualidade e limites, não inventar projetos.',
  sections: [
    {
      id: 'stack',
      heading: 'Stack',
      body: 'Monorepo com pnpm: Next.js (App Router) em apps/web e design system em packages/ui. TypeScript em todo o workspace. CSS com tokens e CSS Modules; tema light e dark via data-theme, com preferência do sistema e toggle.',
      bullets: [
        'React e TypeScript no site e no design system',
        'Sem Turborepo no MVP: workspaces pnpm bastam nesta escala',
        'Deploy do site e do Storybook em serviços Railway separados',
      ],
    },
    {
      id: 'design-system',
      heading: 'Design system',
      body: 'Componentes nomeados em @veidjz/ui (Heading, Text, Link, Layout, Button e tema). Stories ficam ao lado do componente. O catálogo público está em ui.veidjz.com.',
      bullets: [
        'Tokens alinhados à identidade visual (vinho, light suave e dark)',
        'Testes de componente com Vitest e Testing Library',
        'Baseline visual Playwright contra o Storybook estático no CI',
      ],
    },
    {
      id: 'quality',
      heading: 'Qualidade',
      body: 'A qualidade entra no caminho do merge, não só no discurso. O comando pnpm quality cobre lint, typecheck e testes unitários; Playwright cobre smoke do site e snapshots do DS.',
      bullets: [
        'Biome (format + lint) e ESLint com jsx-a11y',
        'Typecheck com tsc em cada pacote',
        'E2E de rotas MVP com Playwright e axe (WCAG 2 A/AA) no CI',
        'Lefthook em pre-commit, commit-msg e pre-push',
      ],
    },
    {
      id: 'accessibility',
      heading: 'Acessibilidade',
      body: 'Semântica primeiro; ARIA só quando necessário. Light e dark precisam permanecer legíveis. O CI bloqueia violações axe nas páginas do site.',
      bullets: [
        'Lint de a11y no código (Biome + eslint-plugin-jsx-a11y)',
        'Smoke axe nas rotas MVP e nos casos',
        'Toggle de tema com persistência e respeito a prefers-color-scheme',
      ],
    },
    {
      id: 'delivery',
      heading: 'Entrega',
      body: 'GitHub Actions roda qualidade, E2E/axe e testes visuais. O Railway publica veidjz.com (site) e ui.veidjz.com (Storybook) a partir do mesmo repositório.',
      bullets: [
        'Uma PR aberta por vez; commits atômicos',
        'SEO com metadataBase, Open Graph, Twitter, robots e sitemap',
        'OG image e ícone dedicados (sem retrato nas shares)',
      ],
    },
    {
      id: 'content',
      heading: 'Conteúdo e limites',
      body: 'Copy alinhada ao perfil profissional aprovado. Só fatos e histórias publicáveis.',
      bullets: [
        'Sem métricas privadas nem telas internas',
        'Sem inventar projetos ou repositórios',
        'Experiência com IA como contexto de produto, não como AI Engineer',
      ],
    },
  ],
  links: [
    {
      label: 'Storybook (ui.veidjz.com)',
      href: 'https://ui.veidjz.com',
    },
    {
      label: 'Código no GitHub',
      href: 'https://github.com/veidjz/veidjz-web',
    },
    {
      label: 'Site em produção',
      href: 'https://veidjz.com',
    },
  ],
} as const
