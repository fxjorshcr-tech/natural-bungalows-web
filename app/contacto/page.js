import ContactForm from '../components/ContactForm';

export default function Contacto() {
  return (
    <>
      <div className="page-hero">
        <h1>Contacto</h1>
        <p>Estamos aqui para ayudarte a planificar tu estadia</p>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="contact-section">
            <div className="contact-info">
              <h3>Informacion de contacto</h3>
              <div className="contact-info-item">
                <span>📍</span>
                <div>
                  <strong>Ubicacion</strong>
                  <p>
                    Alajuela, San Carlos, La Fortuna, Jauri, primer entrada, 500
                    metros sur, porton negro mano izquierda, 21007 Fortuna,
                    Costa Rica
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <span>🕐</span>
                <div>
                  <strong>Horarios</strong>
                  <p>
                    Check-in: 14:00 - 18:00 | Check-out: Disponible 24 horas.
                    Debes informar al alojamiento con antelacion tu hora de
                    llegada.
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <span>💬</span>
                <div>
                  <strong>Idiomas</strong>
                  <p>Español e Ingles</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span>✈️</span>
                <div>
                  <strong>Aeropuerto</strong>
                  <p>
                    Aeropuerto de Fortuna a 9 km. Servicio de traslado
                    disponible.
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <span>🅿️</span>
                <div>
                  <strong>Parking</strong>
                  <p>Parking privado gratuito en el alojamiento</p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2>Que hay cerca</h2>
            <p>Distancias desde Natura Bungalows</p>
          </div>
          <div className="amenities-grid">
            <div className="amenity-card">
              <span className="amenity-icon">🌋</span>
              <h3>Parque Nacional Volcan Arenal</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>0 km</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon">🌊</span>
              <h3>Catarata La Fortuna</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>4.3 km</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon">♨️</span>
              <h3>Aguas termales Kalambu</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>7.1 km</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon">🌿</span>
              <h3>Mistico Hanging Bridges</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>23 km</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon">☕</span>
              <h3>Coffee House</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>2.6 km</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon">🍽️</span>
              <h3>Restaurante Duran</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>3 km</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon">🏞️</span>
              <h3>Lago Arenal</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>13 km</p>
            </div>
            <div className="amenity-card">
              <span className="amenity-icon">✈️</span>
              <h3>Aeropuerto Fortuna</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>9 km</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
