/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jcbricklaying.com.au',
  generateRobotsTxt: true,
  exclude: ['/thank-you', '/api/*', '/icon.png', '/apple-icon.png'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/thank-you'] }],
    additionalSitemaps: [],
  },
}
