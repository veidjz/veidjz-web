export interface ExperienceLink {
  label: string
  href: string
}

export interface ExperienceRole {
  company: string
  title: string
  period: string
  context: string
  contributions: readonly string[]
  techs: readonly string[]
  links?: readonly ExperienceLink[]
}

export const experienceCopy: {
  intro: string
  roles: readonly ExperienceRole[]
} = {
  intro:
    'Linha do tempo profissional desde agosto de 2022. Títulos oficiais, contexto e contribuições que podem ser divulgadas publicamente.',
  roles: [
    {
      company: 'BlisAI',
      title: 'Engenheiro de Software',
      period: 'Abril de 2026 – atual',
      context:
        'Startup de IA aplicada ao turismo. Entrega full stack em produto novo (React, APIs .NET, banco e integrações), com autonomia alta e ciclos semanais.',
      contributions: [
        'Conduziu o Autopilot de ponta a ponta (discovery, spike, React, APIs .NET, integração com a TechTravel, validação com produto). Em produção: automatiza emissão e cancelamento de reservas de aéreo, hotel e carro.',
        'Projetou e implementou a sincronização com a TechTravel (worker periódico, disparos por evento, sync manual e visibilidade da última sincronização) para reduzir opções inválidas na reserva. Em produção.',
        'Planejou e executou sozinho a iniciativa de acessibilidade no produto (semântica, teclado, leitores de tela, contraste) e prevenção de regressões com Lighthouse CI, axe-core, jest-axe e eslint-plugin-jsx-a11y.',
        'Implementou observabilidade e auditoria de fluxos críticos (Grafana, histórico no produto e registros no banco).',
      ],
      techs: ['React', 'C#/.NET', 'Python', 'PostgreSQL', 'MongoDB', 'Grafana'],
    },
    {
      company: 'Shipeezi',
      title: 'Engenheiro de Software Pleno / Full Stack',
      period: 'Dezembro de 2025 – abril de 2026',
      context:
        'Empresa australiana de logística B2B (mudanças, entregas e cargas). Ecossistema com vários apps React Native, React e APIs NestJS. Comunicação oral em português; código e documentação em inglês.',
      contributions: [
        'Evoluiu o ecossistema mobile e web: novos fluxos, refatorações e correções em apps críticos, frontend e APIs.',
        'Reformulou ponta a ponta o fluxo de criação de Operations com produto e sem designer: interface, erros e próximas ações, APIs, contratos e documentação.',
        'Migrou APIs e frontend do AWS Amplify para Cloudflare Workers, reduzindo significativamente os custos de infraestrutura e simplificando a entrega dos produtos.',
        'Melhorou solução própria de OTA em JavaScript e replicou o fluxo nos demais apps (atualização ao reiniciar, rastreamento de versão, toast e automações no GitHub Actions).',
        'Introduziu Jest e React Native Testing Library em fluxos mobile críticos e em parte das APIs; usou Sentry para investigar e corrigir falhas.',
      ],
      techs: [
        'React Native',
        'React',
        'TypeScript',
        'NestJS',
        'GitHub Actions',
        'Cloudflare Workers',
        'WatermelonDB',
        'AsyncStorage',
        'Jest',
        'React Native Testing Library',
      ],
      links: [
        {
          label: 'Shipeezi no Google Play',
          href: 'https://play.google.com/store/apps/developer?id=Shipeezi+Pty+Ltd&hl=pt_BR',
        },
      ],
    },
    {
      company: 'WeFit — Projeto Porto',
      title: 'Engenheiro de Software Pleno',
      period: 'Abril de 2024 – dezembro de 2025',
      context:
        'Construção do Portal do Cliente da Porto desde o início. Arquitetura de BFFs independentes em NestJS, frontend React/Next.js e time multidisciplinar. Trabalho iniciado no ambiente WeFit e depois migrado para o ambiente Porto.',
      contributions: [
        'Atuou na maior parte dos BFFs e construiu individualmente parte significativa deles; desenvolveu fluxos em React/Next.js e componentes de design system.',
        'Documentou APIs e fez correções pontuais em serviços Java; apoiou onboarding e revisões aprofundadas.',
        'Participou de avaliações arquiteturais e testes de carga (k6 e JMeter), analisando throughput, percentis de latência, timeouts e recursos.',
        'Contribuiu para reestruturar implementação que degradava sob o cenário de carga testado, melhorando estabilidade nos extremos sem atribuir o resultado só ao framework.',
        'Simplificou camadas do scaffold dos BFFs, reduzindo carga cognitiva e facilitando manutenção e onboarding.',
      ],
      techs: [
        'NestJS',
        'Node.js',
        'React',
        'Next.js',
        'Java',
        'AWS',
        'Terraform',
        'Backstage',
        'Playwright',
        'k6',
        'JMeter',
        'Grafana',
        'Swagger',
        'Scalar',
      ],
      links: [
        {
          label: 'Portal do Cliente da Porto',
          href: 'https://cliente.portoseguro.com.br/auth/login',
        },
      ],
    },
    {
      company: 'Luz Soluções Financeiras',
      title: 'Trainee a Desenvolvedor Júnior III',
      period: 'Agosto de 2022 – junho de 2024',
      context:
        'Sistemas financeiros internos e produtos para clientes, com legado crítico (incluindo MITRA em Delphi), migrações graduais para C#/.NET e APIs Python. Progressão formal de Trainee a Júnior III em cerca de 22 meses.',
      contributions: [
        'Atuou na modernização gradual de sistema financeiro crítico com mais de vinte anos (legado Delphi, migrações C#/.NET e estabilização de APIs Python).',
        'Elevou cobertura automatizada de cerca de 9% para 80%, integrou testes ao CI e priorizou comportamentos e riscos reais.',
        'Refatorou e estabilizou APIs legadas, otimizou queries SQL em MySQL e criou builds Docker multi-stage.',
        'Contribuiu para estabilidade e manutenibilidade do ambiente.',
      ],
      techs: [
        'C#/.NET',
        'Python',
        'Django',
        'Flask',
        'Delphi',
        'React',
        'MySQL',
        'MongoDB',
        'Docker',
        'CI e testes',
      ],
    },
  ],
}
