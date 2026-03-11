import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/Gemini_Generated_Image_xi7racxi7racxi7r%20(1).png"
              alt="Natura Bungalows"
              style={{ height: '60px', width: 'auto', marginBottom: '0.75rem', filter: 'brightness(0) invert(1)' }}
            />
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
