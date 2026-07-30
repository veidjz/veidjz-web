export const cases = [
  {
    slug: 'autopilot',
    title: 'Autopilot',
    company: 'BlisAI',
    summary:
      'Automação de emissão e cancelamento de reservas (aéreo, hotel e carro) via TechTravel, com ownership do discovery à produção.',
  },
  {
    slug: 'ota-mobile',
    title: 'OTA e ecossistema mobile',
    company: 'Shipeezi',
    summary:
      'Solução própria de atualização OTA em JavaScript, com rastreamento de versão, toast e automação no CI.',
  },
  {
    slug: 'bffs-porto',
    title: 'Arquitetura dos BFFs',
    company: 'Porto',
    summary:
      'Construção e testes de carga dos BFFs do Portal do Cliente, em NestJS e React/Next.js.',
  },
] as const

export type CaseSlug = (typeof cases)[number]['slug']

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug)
}
