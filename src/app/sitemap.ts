import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://devfinder.ome9a.com',
      lastModified: new Date(),
    },
  ]
}