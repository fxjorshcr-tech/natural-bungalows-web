export const metadata = {
  title: 'Natural Bungalows',
  description: 'Bungalows en contacto con la naturaleza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
