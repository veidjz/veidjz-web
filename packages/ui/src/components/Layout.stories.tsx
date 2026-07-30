import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from './Heading'
import { Layout } from './Layout'
import { Text } from './Text'

const meta = {
  title: 'Layout',
  component: Layout,
} satisfies Meta<typeof Layout>

export default meta

type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    as: 'main',
    children: (
      <>
        <Heading as="h1" size="xl">
          veidjz
        </Heading>
        <Text tone="muted">Software Engineer em São Paulo.</Text>
      </>
    ),
  },
}

export const Section: Story = {
  args: {
    as: 'section',
    children: (
      <>
        <Heading as="h2" size="md">
          Experiencia
        </Heading>
        <Text>Produto e engenharia em produção.</Text>
      </>
    ),
  },
}
