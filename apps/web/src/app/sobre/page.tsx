import { Heading, Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'
import { aboutCopy } from '../../content/about'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Biografia, trajetória e forma de trabalhar de João Victor Veidz, Software Engineer Full Stack e Mobile.',
}

export default function SobrePage() {
  return (
    <PageFrame title="Sobre">
      <section className={styles.section} aria-labelledby="about-bio">
        <Heading as="h2" size="md" id="about-bio">
          Quem sou
        </Heading>
        <Text>{aboutCopy.bio}</Text>
      </section>
      <section className={styles.section} aria-labelledby="about-trajectory">
        <Heading as="h2" size="md" id="about-trajectory">
          Trajetória
        </Heading>
        <Text>{aboutCopy.trajectory}</Text>
      </section>
      <section className={styles.section} aria-labelledby="about-work">
        <Heading as="h2" size="md" id="about-work">
          Forma de trabalhar
        </Heading>
        <Text>{aboutCopy.workingStyle}</Text>
      </section>
      <section className={styles.section} aria-labelledby="about-goal">
        <Heading as="h2" size="md" id="about-goal">
          Objetivo
        </Heading>
        <Text>{aboutCopy.careerGoal}</Text>
      </section>
    </PageFrame>
  )
}
