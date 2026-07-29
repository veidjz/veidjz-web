import type { Meta, StoryObj } from '@storybook/react-vite'
import { Hello } from './Hello'

const meta = {
  title: 'Hello',
  component: Hello,
} satisfies Meta<typeof Hello>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomLabel: Story = {
  args: {
    children: 'Hello veidjz',
  },
}
