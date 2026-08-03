import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { cases } from '../apps/web/src/content/cases'
import { siteRoutes } from '../apps/web/src/content/site'

const routes = [
  ...siteRoutes,
  ...cases.map((item) => `/casos/${item.slug}` as const),
]

for (const path of routes) {
  test(`smoke ${path}`, async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('veidjz-theme', 'light')
    })

    const response = await page.goto(path)
    expect(response?.ok()).toBeTruthy()
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()

    expect(results.violations).toEqual([])
  })
}
