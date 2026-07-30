import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from './Heading'

const meta = {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'veidjz',
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Medium: Story = {}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Display: Story = {
  args: {
    as: 'h1',
    size: 'xl',
  },
}
