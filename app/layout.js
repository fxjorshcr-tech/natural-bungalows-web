import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Providers from './components/Providers'

export const metadata = {
  title: 'Natura Bungalows | La Fortuna, Costa Rica',
  description: 'Bungalows de lujo con vistas al Volcan Arenal en La Fortuna de San Carlos, Costa Rica. Rodeados de naturaleza, confort y tranquilidad.',
  icons: {
    icon: '/favicon.svg',
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
