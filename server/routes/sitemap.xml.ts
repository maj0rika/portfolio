import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import { parseStringPromise } from 'xml2js'

export default defineEventHandler(async event => {
  const sitemap = new SitemapStream({
    hostname: 'https://maj0rika.com',
  })

  const docs = await serverQueryContent(event).find()

  // Assuming that the sitemap xml content is in the 'body' of the first document
  const xml = docs[0].body
  const result = await parseStringPromise(xml)
  const urls = result.urlset.url

  for (const url of urls) {
    sitemap.write({
      url: url.loc[0],
      lastmod: new Date(url.lastmod[0]).toISOString(),
      priority: parseFloat(url.priority[0]),
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})
