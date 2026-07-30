import { Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'

export const metadata: Metadata = {
  title: 'Sobre',
}

export default function SobrePage() {
  return (
    <PageFrame title="Sobre">
      <Text>
        João Victor Veidz é engenheiro de software full stack e mobile, com
        experiência profissional desde agosto de 2022.
      </Text>
    </PageFrame>
  )
}
