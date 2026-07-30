import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link } from './Link'

const meta = {
  title: 'Link',
  component: Link,
  args: {
    href: 'https://veidjz.com',
    children: 'veidjz.com',
  },
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Inline: Story = {
  args: {
    href: 'https://linkedin.com/in/veidz',
    children: 'LinkedIn',
  },
}
