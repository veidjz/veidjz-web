import { expect, test } from '@playwright/test'
import { siteRoutes } from '../apps/web/src/content/site'

async function openRoute(
  page: import('@playwright/test').Page,
  path: string,
  theme: 'light' | 'dark',
) {
  await page.addInitScript((nextTheme) => {
    localStorage.setItem('veidjz-theme', nextTheme)
  }, theme)

  const response = await page.goto(path)
  expect(response?.ok()).toBeTruthy()
  await expect(page.locator('html')).toHaveAttribute('data-theme', theme)
  await expect(page.locator('h1')).toBeVisible()

  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.images]
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), { once: true })
              img.addEventListener('error', () => resolve(), { once: true })
            }),
        ),
    )
  })
}

function routeName(path: (typeof siteRoutes)[number]) {
  return path === '/' ? 'home' : path.slice(1)
}

for (const path of siteRoutes) {
  const name = routeName(path)

  test(`${name} light`, async ({ page }) => {
    await openRoute(page, path, 'light')
    await expect(page).toHaveScreenshot(`${name}-light.png`, {
      mask: [page.locator('main img')],
    })
  })
}

test('home dark', async ({ page }) => {
  await openRoute(page, '/', 'dark')
  await expect(page).toHaveScreenshot('home-dark.png', {
    mask: [page.locator('main img')],
  })
})
