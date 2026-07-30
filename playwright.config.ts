import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://127.0.0.1:6006',
    trace: 'on-first-retry',
    viewport: { width: 800, height: 600 },
    deviceScaleFactor: 1,
  },
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',
      scale: 'css',
      maxDiffPixelRatio: 0.01,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], deviceScaleFactor: 1 },
    },
  ],
  webServer: {
    command:
      'python3 -m http.server 6006 --directory packages/ui/storybook-static',
    url: 'http://127.0.0.1:6006/iframe.html',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
