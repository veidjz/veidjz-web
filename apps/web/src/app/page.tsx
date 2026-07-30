import { Heading, Layout, Link, Text } from '@veidjz/ui'
import Image from 'next/image'
import { cases } from '../content/cases'
import { homeCopy } from '../content/home'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <Layout as="main" className={styles.main}>
      <section className={styles.hero} aria-labelledby="home-name">
        <div className={styles.heroCopy}>
          <Heading as="h1" size="xl" className={styles.name} id="home-name">
            {homeCopy.name}
          </Heading>
          <p className={styles.headline}>{homeCopy.headline}</p>
          <Text className={styles.value}>{homeCopy.valueProp}</Text>
          <div className={styles.ctaRow}>
            <a href="/contato" className={styles.cta}>
              Entrar em contato
            </a>
            <Link href="/casos">Ver casos</Link>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image
            src="/profile.jpg"
            alt="Retrato de João Victor Veidz"
            width={675}
            height={900}
            className={styles.portraitImage}
            priority
          />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="techs-heading">
        <Heading as="h2" size="md" id="techs-heading">
          Tecnologias
        </Heading>
        <ul className={styles.techList}>
          {homeCopy.techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="cases-heading">
        <Heading as="h2" size="md" id="cases-heading">
          Casos em destaque
        </Heading>
        <ul className={styles.caseList}>
          {cases.map((item) => (
            <li key={item.slug} className={styles.caseItem}>
              <Link href={`/casos/${item.slug}`} className={styles.caseTitle}>
                {item.title}
              </Link>
              <Text tone="muted" size="sm" as="span">
                {item.company}
              </Text>
              <Text>{item.summary}</Text>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="xp-heading">
        <Heading as="h2" size="md" id="xp-heading">
          Experiência
        </Heading>
        <ul className={styles.xpList}>
          {homeCopy.experience.map((item) => (
            <li key={item.company} className={styles.xpItem}>
              <div className={styles.xpHead}>
                <span className={styles.xpCompany}>{item.company}</span>
                <span className={styles.xpPeriod}>{item.period}</span>
              </div>
              <Text tone="muted" size="sm">
                {item.title}
              </Text>
            </li>
          ))}
        </ul>
        <Link href="/experiencia">Ver experiência completa</Link>
      </section>

      <section className={styles.section} aria-labelledby="contact-heading">
        <Heading as="h2" size="md" id="contact-heading">
          Contato
        </Heading>
        <Text>
          Aberto a conversas sobre vagas Full Stack, frontend, backend ou React
          Native, com stack aderente.
        </Text>
        <a href="/contato" className={styles.cta}>
          Falar comigo
        </a>
      </section>
    </Layout>
  )
}
