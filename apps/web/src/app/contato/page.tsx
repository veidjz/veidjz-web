import { Link, Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'
import { contactLinks } from '../../content/nav'

export const metadata: Metadata = {
  title: 'Contato',
}

export default function ContatoPage() {
  return (
    <PageFrame title="Contato">
      <Text>{contactLinks.location}</Text>
      <Text>
        <Link href={`mailto:${contactLinks.email}`}>{contactLinks.email}</Link>
      </Text>
      <Text>
        <Link
          href={contactLinks.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>
        {' · '}
        <Link
          href={contactLinks.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </Link>
        {' · '}
        <Link
          href={contactLinks.whatsapp}
          rel="noopener noreferrer"
          target="_blank"
        >
          WhatsApp
        </Link>
      </Text>
    </PageFrame>
  )
}
