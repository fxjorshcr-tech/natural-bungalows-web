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
  const [showExtras, setShowExtras] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const scrollToForm = () => {
    document.getElementById('reservation-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="reservar-carousel" style={{ marginTop: 0 }}>
        <div className="reservar-carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {carouselImageSrcs.map((src, i) => (
            <div key={i} className="reservar-carousel-slide">
              <img src={src} alt={captions[i]} />
              <div className="reservar-carousel-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 60%)' }}>
                <div style={{ width: '100%' }}>
                  <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: 'white', marginBottom: '0.3rem', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>{r.title}</h1>
                  <p style={{ fontSize: '1.2rem' }}>{captions[i]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="reservar-nav prev" onClick={prevSlide} style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}>&#8249;</button>
        <button className="reservar-nav next" onClick={nextSlide} style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}>&#8250;</button>
        <div className="reservar-dots">
          {carouselImageSrcs.map((_, i) => (
            <button key={i} className={`reservar-dot${i === currentSlide ? ' active' : ''}`} onClick={() => setCurrentSlide(i)} />
          ))}
        </div>
      </div>

      {/* BUNGALOW INFO */}
      <section className="section">
        <div className="section-inner" style={{ maxWidth: '1100px' }}>
          <h2 className="avail-title">{r.availTitle}</h2>

          <div className="bcard">
            <div className="bcard-main">
              <div className="bcard-info">
                <div className="bcard-img">
                  <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior.webp" alt={r.bungalowName} />
                </div>
                <h3 className="bcard-name">{r.bungalowName}</h3>
                <p className="bcard-bed">{r.bungalowDesc}</p>
                <div className="bcard-tags">
                  {r.tags.map((tag, i) => (
                    <span key={i} className="bcard-tag">{tag}</span>
                  ))}
                </div>
                <button className="bcard-more" type="button" onClick={() => setShowExtras(!showExtras)}>
                  {showExtras ? '▲ Menos' : '▼ Mas'}
                </button>
                {showExtras && (
                  <div className="bcard-extras">
                    {r.extras.map((ex, i) => (
                      <div key={i} className="bcard-extra">✓ {ex}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bcard-price">
                <div className="bcard-price-amount">CRC 54,303</div>
                <div className="bcard-price-per">{r.pricePerNight}</div>
                <div className="bcard-price-tax">+ CRC 7,059 {r.taxes}</div>
              </div>

              <div className="bcard-benefits">
                <div className="bcard-benefit">
                  <span className="bcard-check">✔</span>
                  <span>{r.benefit1}</span>
                </div>
                <div className="bcard-benefit">
                  <span className="bcard-check">✔</span>
                  <span><strong>{r.benefit2}</strong> {r.benefit2sub}</span>
                </div>
                <div className="bcard-benefit">
                  <span className="bcard-check">✔</span>
                  <span><strong>{r.benefit3}</strong> - {r.benefit3sub}</span>
                </div>
                <div className="bcard-benefit">
                  <span className="bcard-check-alt">✔</span>
                  <span>{r.benefit4}</span>
                </div>
              </div>

              <div className="bcard-action">
                <button
                  className="bcard-select-btn"
                  type="button"
                  onClick={scrollToForm}
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
                <DatePicker label={r.checkIn} value={checkIn} onChange={(val) => setCheckIn(val)} />
                <DatePicker label={r.checkOut} value={checkOut} onChange={(val) => setCheckOut(val)} minDate={checkIn} />
              </div>

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

              <button type="submit" className="btn-primary">{r.submit}</button>
            </form>

            {sent && (
              <div className="form-success">
                <h3>{r.sentTitle}</h3>
                <p>{r.sentMsg}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
