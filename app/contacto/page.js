'use client';

import ContactForm from '../components/ContactForm';
import { useLanguage } from '../i18n/LanguageContext';

const nearbyIcons = ['🌋', '🌊', '♨️', '🌿', '☕', '🍽️', '🏞️', '✈️'];
const nearbyDistances = ['0 km', '4.3 km', '7.1 km', '23 km', '2.6 km', '3 km', '13 km', '9 km'];

export default function Contacto() {
  const { lang, t } = useLanguage();
  const c = t.contactoPage[lang];
  const nearbyNames = t.nearby[lang];

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior9.webp" alt="Natura Bungalows" />
        </div>
        <div className="page-hero-overlay" />
        <h1>{c.heroTitle}</h1>
        <p>{c.heroSub}</p>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="contact-section">
            <div className="contact-info">
              <h3>{c.infoTitle}</h3>
              <div className="contact-info-item">
                <span>📍</span>
                <div>
                  <strong>{c.ubicacionLabel}</strong>
                  <p>{c.ubicacionValue}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span>🕐</span>
                <div>
                  <strong>{c.horariosLabel}</strong>
                  <p>{c.horariosValue}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span>💬</span>
                <div>
                  <strong>{c.idiomasLabel}</strong>
                  <p>{c.idiomasValue}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span>✈️</span>
                <div>
                  <strong>{c.aeropuertoLabel}</strong>
                  <p>{c.aeropuertoValue}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span>🅿️</span>
                <div>
                  <strong>{c.parkingLabel}</strong>
                  <p>{c.parkingValue}</p>
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
            <h2>{c.nearbyTitle}</h2>
            <p>{c.nearbySub}</p>
          </div>
          <div className="amenities-grid">
            {nearbyNames.map((name, i) => (
              <div key={i} className="amenity-card">
                <span className="amenity-icon">{nearbyIcons[i]}</span>
                <h3>{name}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>{nearbyDistances[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
