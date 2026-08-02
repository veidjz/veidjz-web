import type { MetadataRoute } from 'next'
import { cases } from '../content/cases'
import { siteRoutes, siteUrl } from '../content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = siteRoutes.map((path) => ({
    url: path === '/' ? siteUrl : `${siteUrl}${path}`,
    lastModified: new Date(),
  }))

  const caseEntries = cases.map((item) => ({
    url: `${siteUrl}/casos/${item.slug}`,
    lastModified: new Date(),
  }))

  return [...staticEntries, ...caseEntries]
}
