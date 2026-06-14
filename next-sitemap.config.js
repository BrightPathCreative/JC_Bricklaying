/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://jcbricklaying.com.au',
  generateRobotsTxt: true,
  // /thank-you and API are not indexed.
  exclude: ['/thank-you', '/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    additionalSitemaps: [],
  },
}
