const BASE_URL = process.env.SITE_URL || 'https://natural-bungalows-web.vercel.app'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
