import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function Nosotros() {
  return (
    <>
      <div className="page-hero" style={{ padding: '2rem' }}>
        <h1>Nuestra Historia</h1>
        <p>Conoce a las personas detras de Natura Bungalows</p>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="about-content">
            <div className="about-text">
              <h2>Jose &amp; Yancy</h2>
              <p>
                Somos Jose y Yancy, costarricenses dedicados al turismo con una
                pasion por brindar un servicio de calidad. Nos encanta recomendar
                todo lo que nuestros huespedes necesitan para disfrutar de una
                estadia unica y especial.
              </p>
              <p>
                Natura Bungalows es un proyecto familiar que nacio de nuestro
                amor por la naturaleza y la hospitalidad. Ubicados en La Fortuna
                de San Carlos, ofrecemos vistas privilegiadas del Volcan Arenal
                en un entorno rodeado de exuberante vegetacion tropical.
              </p>
              <p>
                Personalmente damos la bienvenida a cada huesped y les ayudamos
                a coordinar actividades, tours y recomendaciones de restaurantes
                locales para que aprovechen al maximo su visita a esta hermosa
                zona.
              </p>
              <p>
                Nuestros bungalows estan disenados con atencion a cada detalle,
                desde la cocina totalmente equipada hasta la terraza privada con
                vistas al volcan, para que tu experiencia sea inolvidable.
              </p>
              <div className="about-buttons">
                <Link href="/reservar" className="btn-primary" style={{ border: 'none', fontFamily: 'var(--font-body)' }}>
                  Reservar ahora
                </Link>
                <Link href="/contacto" className="btn-secondary">
                  Contactanos
                </Link>
              </div>
            </div>
            <div className="about-img">
              <img
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior4.webp"
                alt="Natura Bungalows"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2>Nuestras Puntuaciones</h2>
            <p>Basadas en 169 resenas verificadas en Booking.com</p>
          </div>
          <div className="scores-grid">
            <div className="score-card">
              <div className="score-number">9.7</div>
              <div className="score-label">Personal</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.7</div>
              <div className="score-label">Instalaciones</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.8</div>
              <div className="score-label">Limpieza</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.8</div>
              <div className="score-label">Confort</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.6</div>
              <div className="score-label">Relacion calidad-precio</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.3</div>
              <div className="score-label">Ubicacion</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.6</div>
              <div className="score-label">WiFi gratis</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.7</div>
              <div className="score-label">Puntuacion general</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Nuestro Espacio</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior6.webp"
                alt="Exterior de Natura Bungalows"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior2.webp"
                alt="Interior de Natura Bungalows"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior8.webp"
                alt="Exterior de Natura Bungalows"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior7.webp"
                alt="Interior de Natura Bungalows"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior10.webp"
                alt="Exterior de Natura Bungalows"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior12.webp"
                alt="Interior de Natura Bungalows"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="section-inner">
          <div className="section-header">
            <h2>Vive la experiencia Natura</h2>
            <p>Reserva tu bungalow y descubre todo lo que La Fortuna tiene para ofrecerte</p>
          </div>
          <Link href="/reservar" className="btn-primary" style={{ border: 'none', fontFamily: 'var(--font-body)' }}>
            Reservar ahora
          </Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2>Escribenos</h2>
            <p>Estamos aqui para responder tus preguntas</p>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
