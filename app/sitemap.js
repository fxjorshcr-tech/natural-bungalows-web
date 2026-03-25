const BASE_URL = 'https://naturabungalowscr.com'

export default function sitemap() {
  const lastModified = new Date()

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/reservar`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vida-silvestre`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
