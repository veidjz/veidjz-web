import { Link, Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'

export const metadata: Metadata = {
  title: 'Experiência',
}

export default function ExperienciaPage() {
  return (
    <PageFrame title="Experiência">
      <Text>
        Linha do tempo com BlisAI, Shipeezi, WeFit/Porto e Luz Soluções
        Financeiras. Resumo atual na <Link href="/">home</Link>.
      </Text>
    </PageFrame>
  )
}
