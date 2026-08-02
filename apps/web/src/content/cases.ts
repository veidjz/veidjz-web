export interface CaseLink {
  label: string
  href: string
}

export interface CaseStudy {
  slug: 'autopilot' | 'ota-mobile' | 'bffs-porto'
  title: string
  company: string
  summary: string
  competencies: string
  context: string
  responsibility: string
  sections: readonly {
    heading: string
    paragraphs?: readonly string[]
    bullets?: readonly string[]
  }[]
  result: string
  techs: readonly string[]
  links?: readonly CaseLink[]
}

export const cases: readonly CaseStudy[] = [
  {
    slug: 'autopilot',
    title: 'Autopilot',
    company: 'BlisAI',
    summary:
      'Automação de emissão e cancelamento de reservas (aéreo, hotel e carro) via TechTravel, com ownership do discovery à produção.',
    competencies:
      'Ownership, discovery, integração, full stack, produto e observabilidade.',
    context:
      'A Blis depende de um OBT externo (TechTravel) para reservas, emissões e cancelamentos. O Autopilot automatiza a finalização de reservas de aéreo, hotel e carro.',
    responsibility:
      'Ciclo completo conduzido individualmente: planejamento, discovery, spike técnico, frontend React, APIs .NET, integração com o OBT, validações e testes com produto.',
    sections: [
      {
        heading: 'Fluxo',
        bullets: [
          'O usuário realiza a reserva pelo chat.',
          'Alguns casos exigem aprovação humana; outros não.',
          'Após a aprovação, quando necessária, o Autopilot conclui automaticamente.',
          'O usuário recebe sucesso ou erro.',
        ],
      },
      {
        heading: 'Confiabilidade e operação',
        bullets: [
          'Proteção contra duplicidade no OBT externo.',
          'Retries automáticos; erro registrado após o esgotamento das tentativas.',
          'Logs e observabilidade no Grafana, com auditoria no banco.',
          'Página de histórico e notificações por toast.',
          'Agência ou empresa pode ativar ou desativar o Autopilot.',
        ],
      },
    ],
    result: 'Funcionalidade em produção.',
    techs: ['React', 'C#/.NET', 'TechTravel', 'Grafana'],
  },
  {
    slug: 'ota-mobile',
    title: 'OTA e ecossistema mobile',
    company: 'Shipeezi',
    summary:
      'Solução própria de atualização OTA em JavaScript, com rastreamento de versão, toast e automação no CI.',
    competencies:
      'React Native, CI/CD, OTA, legado, automação e publicação mobile.',
    context:
      'Havia aproximadamente cinco aplicativos React Native separados, sem Expo. Apenas um possuía OTA, acionado por um gesto oculto na logo, pouco eficiente e sem rastreamento claro de versão.',
    responsibility:
      'Melhoria do mecanismo existente e criação do fluxo para os demais aplicativos.',
    sections: [
      {
        heading: 'O que foi feito',
        bullets: [
          'Solução OTA própria em JavaScript.',
          'Atualização automática ao reiniciar o aplicativo.',
          'Rastreamento da versão OTA e notificação por toast.',
          'Pipelines mobile no GitHub Actions.',
          'Extensão da solução aos aplicativos que ainda não possuíam OTA.',
        ],
      },
    ],
    result:
      'Processo de atualização mais simples, rastreável e automatizado em vários aplicativos.',
    techs: ['React Native', 'JavaScript', 'GitHub Actions'],
    links: [
      {
        label: 'Shipeezi no Google Play',
        href: 'https://play.google.com/store/apps/developer?id=Shipeezi+Pty+Ltd&hl=pt_BR',
      },
    ],
  },
  {
    slug: 'bffs-porto',
    title: 'Arquitetura dos BFFs',
    company: 'Porto',
    summary:
      'Construção e testes de carga dos BFFs do Portal do Cliente, em NestJS e React/Next.js.',
    competencies:
      'Arquitetura, testes de carga, Node.js, NestJS, decisão técnica e escala organizacional.',
    context:
      'Portal do Cliente com aproximadamente 1 milhão de usuários ativos mensais e cerca de 40 BFFs independentes.',
    responsibility:
      'Participação na avaliação de alternativas, testes de carga, construção de BFFs e refatoração do scaffold.',
    sections: [
      {
        heading: 'O que foi feito',
        bullets: [
          'Comparação de implementações em Java, .NET e Node.js/NestJS.',
          'Testes com k6 e JMeter.',
          'Análise de throughput, percentis de latência, timeouts e recursos.',
          'Reestruturação de uma implementação que degradava e encerrava sob o cenário testado.',
          'Simplificação de camadas e abstrações do scaffold.',
        ],
      },
    ],
    result:
      'A arquitetura reestruturada sustentou os cenários testados e melhorou estabilidade, throughput e latência nos extremos. O scaffold ficou mais direto, reduzindo carga cognitiva e facilitando manutenção e onboarding.',
    techs: ['NestJS', 'Node.js', 'React', 'Next.js', 'k6', 'JMeter'],
    links: [
      {
        label: 'Portal do Cliente da Porto',
        href: 'https://cliente.portoseguro.com.br/auth/login',
      },
    ],
  },
]

export type CaseSlug = CaseStudy['slug']

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug)
}
