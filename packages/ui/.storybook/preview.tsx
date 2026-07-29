import type { Preview } from '@storybook/react-vite'
import '../src/tokens.css'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
  },
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme)

      return (
        <div
          style={{
            background: 'var(--bg)',
            color: 'var(--ink)',
            fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
            minHeight: '100vh',
            padding: '1.5rem',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
