import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Natura Bungalows | La Fortuna, Costa Rica',
  description: 'Bungalows de lujo con vistas al Volcan Arenal en La Fortuna de San Carlos, Costa Rica. Rodeados de naturaleza, confort y tranquilidad.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
