import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Providers from './components/Providers'

const BASE_URL = process.env.SITE_URL || 'https://natural-bungalows-web.vercel.app'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Natura Bungalows | La Fortuna, Costa Rica',
    template: '%s | Natura Bungalows',
  },
  description: 'Bungalows de lujo con vistas al Volcán Arenal en La Fortuna de San Carlos, Costa Rica. Solo 3 bungalows, privacidad total. 9.7/10 en Booking.com.',
  keywords: ['bungalows', 'La Fortuna', 'Costa Rica', 'Volcán Arenal', 'alojamiento', 'hospedaje', 'turismo', 'naturaleza', 'hotel boutique'],
  authors: [{ name: 'Natura Bungalows' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Natura Bungalows | La Fortuna, Costa Rica',
    description: 'Bungalows de lujo con vistas al Volcán Arenal. Solo 3 bungalows, privacidad total. 9.7/10 en Booking.com.',
    url: BASE_URL,
    siteName: 'Natura Bungalows',
    locale: 'es_CR',
    type: 'website',
    images: [
      {
        url: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior11.webp',
        width: 1200,
        height: 630,
        alt: 'Natura Bungalows - Vista exterior con Volcán Arenal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natura Bungalows | La Fortuna, Costa Rica',
    description: 'Bungalows de lujo con vistas al Volcán Arenal. Solo 3 bungalows, privacidad total.',
    images: ['https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior11.webp'],
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}
