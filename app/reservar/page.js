'use client';

import { useState, useEffect, useCallback } from 'react';
import DatePicker from '../components/DatePicker';
import { useLanguage } from '../i18n/LanguageContext';

const carouselImageSrcs = [
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior11.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior3.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior4.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior5.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior5.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior7.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior6.webp',
];

export default function Reservar() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { lang, t } = useLanguage();
  const r = t.reservarPage[lang];
  const captions = t.carouselCaptions[lang];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImageSrcs.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselImageSrcs.length) % carouselImageSrcs.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'Nueva solicitud de reserva - Natura Bungalows',
          name,
          email,
          phone,
          message,
          checkin: checkIn,
          checkout: checkOut,
          guests,
        }),
      });
      if (res.ok) {
        setSent(true);
        setShowModal(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setSending(false);
  };

  const closeModal = () => setShowModal(false);

  const scrollToForm = () => {
    document.getElementById('reservation-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <div className="page-hero" style={{ minHeight: '50vh' }}>
        <div className="page-hero-bg">
          <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior11.webp" alt="Natura Bungalows" />
        </div>
        <div className="page-hero-overlay" />
        <img
          src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/Gemini_Generated_Image_xi7racxi7racxi7r%20(1).png"
          alt="Natura Bungalows"
          style={{ height: '80px', width: 'auto', marginBottom: '1rem', filter: 'brightness(0) invert(1)', position: 'relative', zIndex: 2 }}
        />
        <p style={{ position: 'relative', zIndex: 2, color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>La Fortuna, Costa Rica</p>
        <h1 style={{ position: 'relative', zIndex: 2 }}>{r.title}</h1>
        <button
          type="button"
          onClick={scrollToForm}
          style={{ position: 'relative', zIndex: 2, marginTop: '1.5rem', background: 'transparent', border: '2px solid rgba(255,255,255,0.6)', color: 'white', padding: '0.8rem 2rem', borderRadius: '50px', cursor: 'pointer', fontSize: '0.95rem', letterSpacing: '0.05em', transition: 'all 0.3s ease', fontFamily: 'var(--font-body)' }}
        >
          {r.submit}
        </button>
      </div>

      {/* BUNGALOW INFO WITH CAROUSEL */}
      <section className="section">
        <div className="section-inner" style={{ maxWidth: '1100px' }}>
          <h2 className="avail-title">{r.availTitle}</h2>

          {/* BIG CAROUSEL */}
          <div className="reservar-carousel" style={{ marginTop: 0, height: '500px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '2rem' }}>
            <div className="reservar-carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {carouselImageSrcs.map((src, i) => (
                <div key={i} className="reservar-carousel-slide">
                  <img src={src} alt={captions[i]} />
                  <div className="reservar-carousel-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)' }}>
                    <div style={{ width: '100%' }}>
                      <p style={{ fontSize: '1.1rem' }}>{captions[i]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="reservar-nav prev" aria-label="Anterior" onClick={prevSlide} style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}>&#8249;</button>
            <button className="reservar-nav next" aria-label="Siguiente" onClick={nextSlide} style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}>&#8250;</button>
            <div className="reservar-dots">
              {carouselImageSrcs.map((_, i) => (
                <button key={i} className={`reservar-dot${i === currentSlide ? ' active' : ''}`} aria-label={`Imagen ${i + 1}`} onClick={() => setCurrentSlide(i)} />
              ))}
            </div>
          </div>

          {/* BUNGALOW DETAILS */}
          <div style={{ background: 'var(--color-white)', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            {/* Header */}
            <div style={{ padding: '2rem 2rem 1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '0.3rem' }}>{r.bungalowName}</h3>
              <p style={{ color: 'var(--color-text-light)', margin: 0 }}>{r.bungalowDesc}</p>
            </div>

            {/* Amenities Grid */}
            <div style={{ padding: '0 2rem 1.5rem' }}>
              <div className="amenities-grid">
                {r.tags.map((tag, i) => {
                  const icons = ['🏡', '📐', '🍳', '🚿', '🌅', '🌿', '⛰️', '❄️', '🪴', '📺', '☀️', '☕', '📶'];
                  return (
                    <div key={i} className="amenity-chip">
                      <span className="amenity-chip-icon">{icons[i] || '✦'}</span>
                      <span>{tag}</span>
                    </div>
                  );
                })}
                {r.extras.map((ex, i) => {
                  const extraIcons = ['🧴', '🔪', '🎬', '🛁', '🛏️', '🧊', '♨️', '🍴', '🍞', '💨'];
                  return (
                    <div key={`ex-${i}`} className="amenity-chip">
                      <span className="amenity-chip-icon">{extraIcons[i] || '✦'}</span>
                      <span>{ex}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price & Benefits Bar */}
            <div className="price-benefits-bar">
              <div className="price-block">
                <div className="price-amount">₡50,000</div>
                <div className="price-per">{r.pricePerNight}</div>
              </div>

              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-check">✔</span>
                  <span>{r.benefit1}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check">✔</span>
                  <span><strong>{r.benefit2}</strong> {r.benefit2sub}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check">✔</span>
                  <span><strong>{r.benefit3}</strong> — {r.benefit3sub}</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-check gold">✔</span>
                  <span>{r.benefit4}</span>
                </div>
              </div>

              <div className="price-cta">
                <button
                  className="btn-primary"
                  type="button"
                  onClick={scrollToForm}
                  style={{ border: 'none', fontSize: '1.1rem', padding: '1rem 2.5rem', whiteSpace: 'nowrap' }}
                >
                  {r.submit}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION FORM */}
      <section id="reservation-form" className="section section-alt">
        <div className="section-inner">
          <div className="reservation-wrapper">
            <div className="reservation-form-section">
              <h3>{r.formTitle}</h3>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <DatePicker
                  label={r.checkIn}
                  value={checkIn}
                  onChange={(val) => {
                    setCheckIn(val);
                    if (checkOut && val >= checkOut) setCheckOut('');
                  }}
                  rangeStart={checkIn}
                  rangeEnd={checkOut}
                />
                <DatePicker
                  label={r.checkOut}
                  value={checkOut}
                  onChange={(val) => setCheckOut(val)}
                  minDate={checkIn}
                  rangeStart={checkIn}
                  rangeEnd={checkOut}
                />
              </div>

              {checkIn && checkOut && (
                <div style={{ background: 'var(--color-white)', borderRadius: '0.75rem', padding: '1rem 1.5rem', marginBottom: '1rem', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>📅</span>
                  <span>
                    <strong>{Math.round((new Date(checkOut + 'T00:00:00') - new Date(checkIn + 'T00:00:00')) / (1000 * 60 * 60 * 24))}</strong>
                    {' '}{lang === 'es' ? 'noches' : lang === 'en' ? 'nights' : lang === 'fr' ? 'nuits' : 'Nachte'}
                  </span>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>{r.guests}</label>
                  <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                    <option value="">{r.guestsSelect}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{r.fullName}</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{r.email}</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>{r.phone}</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
              </div>

              <div className="form-group">
                <label>{r.message}</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              {error && <p style={{ color: '#c0392b', marginBottom: '0.5rem' }}>Error al enviar. Intenta de nuevo.</p>}
              <button type="submit" className="btn-primary" style={{ opacity: sending ? 0.6 : 1 }} disabled={sending}>{sending ? '...' : r.submit}</button>
            </form>

          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">✓</div>
            <h3 className="modal-title">{r.sentTitle}</h3>
            <p className="modal-message">{r.sentMsg}</p>
            <button className="btn-primary modal-close-btn" onClick={closeModal}>
              {lang === 'es' ? 'Cerrar' : lang === 'en' ? 'Close' : lang === 'fr' ? 'Fermer' : 'Schließen'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
