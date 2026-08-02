export const engineeringCopy = {
  intro:
    'Este site é também um meta-portfólio: as mesmas decisões de engenharia que uso em produto aparecem aqui, em escala menor e pública.',
  sections: [
    {
      id: 'stack',
      heading: 'Stack',
      body: 'Monorepo com pnpm: Next.js (App Router) em apps/web e design system em packages/ui. TypeScript em todo o workspace. CSS com tokens (variáveis) e CSS Modules, com tema light e dark via data-theme.',
    },
    {
      id: 'design-system',
      heading: 'Design system',
      body: 'Componentes nomeados em @veidjz/ui (Heading, Text, Link, Layout, Button e tema). Stories do Storybook ficam ao lado do componente. O catálogo público está em ui.veidjz.com.',
    },
    {
      id: 'quality',
      heading: 'Qualidade',
      body: 'Biome e ESLint (jsx-a11y) no lint. Typecheck com tsc. Testes unitários com Vitest. Screenshots visuais com Playwright no Storybook. Lefthook cobre pre-commit, commit-msg e pre-push.',
    },
    {
      id: 'content',
      heading: 'Conteúdo e limites',
      body: 'Copy alinhada ao perfil profissional aprovado. Só fatos e histórias publicáveis: sem métricas privadas, sem telas internas e sem inventar projetos.',
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
  ],
} as const
