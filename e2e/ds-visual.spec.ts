import { expect, test } from '@playwright/test'

const stories = [
  'button--primary',
  'heading--display',
  'text--default',
  'link--default',
  'layout--page',
] as const

async function openStory(
  page: import('@playwright/test').Page,
  id: string,
  theme: 'light' | 'dark',
) {
  await page.goto(`/iframe.html?id=${id}&viewMode=story&globals=theme:${theme}`)
  await page.waitForSelector('#storybook-root')
  await page.evaluate(async () => {
    await document.fonts.ready
  })
}

for (const id of stories) {
  test(`${id} light`, async ({ page }) => {
    await openStory(page, id, 'light')
    await expect(page.locator('#storybook-root')).toHaveScreenshot(
      `${id}-light.png`,
    )
  })
}

test('layout--page dark', async ({ page }) => {
  await openStory(page, 'layout--page', 'dark')
  await expect(page.locator('#storybook-root')).toHaveScreenshot(
    'layout--page-dark.png',
  )
})
