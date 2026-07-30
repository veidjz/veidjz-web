import { Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'

export const metadata: Metadata = {
  title: 'Engenharia',
}

export default function EngenhariaPage() {
  return (
    <PageFrame title="Engenharia">
      <Text>
        Meta-portfólio deste site: decisões de stack, design system e qualidade.
      </Text>
    </PageFrame>
  )
}
