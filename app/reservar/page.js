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
  const [selectedBungalow, setSelectedBungalow] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
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

      <section className="section">
        <div className="section-inner">
          <div className="reservation-wrapper">
            <h2>{r.chooseBungalow}</h2>

            <div
              className={`bungalow-option${selectedBungalow === 'deluxe' ? ' selected' : ''}`}
              onClick={() => setSelectedBungalow('deluxe')}
            >
              <div className="bungalow-thumb">
                <img
                  src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior.webp"
                  alt={r.bungalow1}
                />
              </div>
              <div className="bungalow-info">
                <div className="bungalow-info-top">
                  <div className={`bungalow-radio${selectedBungalow === 'deluxe' ? ' checked' : ''}`}></div>
                  <h3>{r.bungalow1}</h3>
                </div>
                <p>{r.bungalow1Desc}</p>
              </div>
            </div>

            <div
              className={`bungalow-option${selectedBungalow === 'deluxe-jardin' ? ' selected' : ''}`}
              onClick={() => setSelectedBungalow('deluxe-jardin')}
            >
              <div className="bungalow-thumb">
                <img
                  src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior2.webp"
                  alt={r.bungalow2}
                />
              </div>
              <div className="bungalow-info">
                <div className="bungalow-info-top">
                  <div className={`bungalow-radio${selectedBungalow === 'deluxe-jardin' ? ' checked' : ''}`}></div>
                  <h3>{r.bungalow2}</h3>
                </div>
                <p>{r.bungalow2Desc}</p>
              </div>
            </div>

            <div className="reservation-form-section">
              <h3>{r.formTitle}</h3>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <DatePicker
                  label={r.checkIn}
                  value={checkIn}
                  onChange={(val) => setCheckIn(val)}
                />
                <DatePicker
                  label={r.checkOut}
                  value={checkOut}
                  onChange={(val) => setCheckOut(val)}
                  minDate={checkIn}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{r.guests}</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="">{r.guestsSelect}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{r.fullName}</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{r.email}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>{r.phone}</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>{r.message}</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                {r.submit}
              </button>
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
