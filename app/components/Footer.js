import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Natura Bungalows</h3>
          <p>
            Bungalows de lujo rodeados de naturaleza con vistas al Volcan Arenal.
            La Fortuna, San Carlos, Costa Rica.
          </p>
        </div>
        <div>
          <h4>Navegacion</h4>
          <ul className="footer-links">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
            <li><Link href="/reservar">Reservar</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul className="footer-links">
            <li>La Fortuna, San Carlos</li>
            <li>Costa Rica</li>
            <li>Check-in: 14:00 - 18:00</li>
            <li>Check-out: 24 horas</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Natura Bungalows. Todos los derechos reservados.
      </div>
    </footer>
  )
}
