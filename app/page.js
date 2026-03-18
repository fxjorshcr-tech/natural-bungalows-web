'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ContactForm from './components/ContactForm';
import { useLanguage } from './i18n/LanguageContext';

const galleryImages = [
  { src: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior.webp', alt: 'Interior del bungalow' },
  { src: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior2.webp', alt: 'Exterior del bungalow' },
  { src: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior4.webp', alt: 'Interior detalle' },
  { src: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior5.webp', alt: 'Vista exterior' },
  { src: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior5.webp', alt: 'Habitacion' },
  { src: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior7.webp', alt: 'Jardin' },
  { src: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior6.webp', alt: 'Sala del bungalow' },
  { src: 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior9.webp', alt: 'Vista panoramica' },
];

const activityIcons = ['👨‍🍳', '🌋', '♨️', '🌿', '🚡', '🚣', '🦜', '🐴', '🍫'];
const amenityIcons = ['📶', '🅿️', '❄️', '🍳', '🌋', '📺', '☀️', '🛁'];

const reviews = [
  { name: 'Alex', country: 'España', text: 'Bungalows fantasticos y muy bien equipados. Mini cocina completa, parking privado y los anfitriones son increibles. Si vuelvo a La Fortuna, repito sin dudarlo.' },
  { name: 'Daniela', country: 'Chile', text: 'Amamos este lugar. Hermoso, bien ubicado, limpisimo y todo como nuevo. El bungalow tiene todo lo necesario y la decoracion es preciosa.' },
  { name: 'Sjoerd', country: 'Paises Bajos', text: 'Nuestro hospedaje favorito en todo Centroamerica. Impoluto, cuidado al detalle. Jose y Yancy super amables y serviciales.' },
  { name: 'Mariana', country: 'España', text: 'La cama es super comoda y tienes una plancha para cocinar en la terraza viendo el volcan. Repetiria sin dudarlo.' },
  { name: 'Martha', country: 'España', text: 'Se ve el Volcan Arenal desde la terraza del bungalow. El bano es inmenso y el jardin esta cuidado al minimo detalle.' },
  { name: 'Maria', country: 'Colombia', text: 'Jose y Yancy te hacen sentir comodos desde el primer momento. Un proyecto familiar hermoso que te hace sentir en casa.' },
  { name: 'Alexander', country: 'Colombia', text: 'Sitio muy lindo con paisajes hermosos. Ideal para descansar. La atencion es excelente y la comodidad inmejorable.' },
  { name: 'Lourdes', country: 'Estados Unidos', text: 'Supera los hoteles de 5 estrellas. La vista al Volcan Arenal es impresionante. El bungalow es bellisimo y muy comodo.' },
  { name: 'Rosa', country: 'España', text: 'El bungalow es una maravilla. La zona es muy tranquila, solo hay 3 bungalows. La habitacion es preciosa con todo nuevo.' },
];

const aboutCarouselImgs = [
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior5.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior4.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior7.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior5.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior9.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior6.webp',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior10.webp',
];

export default function HomePage() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [aboutSlide, setAboutSlide] = useState(0);
  const { lang, t } = useLanguage();

  const heroT = t.hero[lang];
  const aboutT = t.about[lang];
  const galleryT = t.gallery[lang];
  const amenitiesT = t.amenities[lang];
  const fortunaT = t.fortuna[lang];
  const activitiesT = t.activities[lang];
  const reviewsT = t.reviews[lang];
  const contactT = t.contact[lang];

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsPerView);

  const nextReview = useCallback(() => {
    setCurrentReview((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevReview = useCallback(() => {
    setCurrentReview((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextReview]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAboutSlide((prev) => (prev + 1) % aboutCarouselImgs.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior11.webp"
            alt="Natura Bungalows - Vista exterior"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <img
            src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/Gemini_Generated_Image_xi7racxi7racxi7r%20(1).png"
            alt="Natura Bungalows"
            className="hero-logo"
          />
          <p>{heroT.subtitle}</p>
          <div className="hero-rating">
            ★★★★★ {heroT.rating}
          </div>
          <Link href="/reservar" className="btn-primary">
            {heroT.cta}
          </Link>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section about-section-enhanced">
        <div className="section-inner">
          <div className="section-header">
            <h2>{aboutT.title}</h2>
            <p>{aboutT.subtitle}</p>
          </div>

          <div className="about-carousel about-carousel-hero">
            <div className="about-carousel-track" style={{ transform: `translateX(-${aboutSlide * 100}%)` }}>
              {aboutCarouselImgs.map((src, i) => (
                <div key={i} className="about-carousel-slide">
                  <img src={src} alt={`Natura Bungalows ${i + 1}`} />
                </div>
              ))}
            </div>
            <button className="reservar-nav prev" onClick={() => setAboutSlide((prev) => (prev - 1 + aboutCarouselImgs.length) % aboutCarouselImgs.length)}>&#8249;</button>
            <button className="reservar-nav next" onClick={() => setAboutSlide((prev) => (prev + 1) % aboutCarouselImgs.length)}>&#8250;</button>
            <div className="reservar-dots" style={{ bottom: '1.2rem' }}>
              {aboutCarouselImgs.map((_, i) => (
                <button key={i} className={`reservar-dot${i === aboutSlide ? ' active' : ''}`} onClick={() => setAboutSlide(i)} />
              ))}
            </div>
          </div>

          <div className="about-features-row">
            <div className="about-feature-card">
              <span className="about-feature-icon">🏡</span>
              <div>
                <h4>{aboutT.feat1Title}</h4>
                <p>{aboutT.feat1Desc}</p>
              </div>
            </div>
            <div className="about-feature-card">
              <span className="about-feature-icon">⭐</span>
              <div>
                <h4>{aboutT.feat2Title}</h4>
                <p>{aboutT.feat2Desc}</p>
              </div>
            </div>
            <div className="about-feature-card">
              <span className="about-feature-icon">🌋</span>
              <div>
                <h4>{aboutT.feat3Title}</h4>
                <p>{aboutT.feat3Desc}</p>
              </div>
            </div>
            <div className="about-feature-card">
              <span className="about-feature-icon">🇨🇷</span>
              <div>
                <h4>{aboutT.feat4Title}</h4>
                <p>{aboutT.feat4Desc}</p>
              </div>
            </div>
          </div>

          <div className="about-text-block">
            <h3>{aboutT.foundersName}</h3>
            <p className="about-enhanced-subtitle">{aboutT.foundersRole}</p>
            <p>{aboutT.foundersP1}</p>
            <p>{aboutT.foundersP2}</p>
          </div>

          <div className="about-enhanced-cta">
            <Link href="/nosotros" className="btn-secondary">
              {aboutT.ctaHistory}
            </Link>
            <Link href="/reservar" className="btn-primary" style={{ border: 'none' }}>
              {aboutT.ctaBook}
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>{galleryT.title}</h2>
          <p>{galleryT.subtitle}</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setLightboxImage(image.src)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        {lightboxImage && (
          <div className="lightbox" onClick={() => setLightboxImage(null)}>
            <button
              className="lightbox-close"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(null);
              }}
            >
              ✕
            </button>
            <img
              src={lightboxImage}
              alt="Galeria ampliada"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className="gallery-cta">
          <Link href="/reservar" className="btn-primary">
            {galleryT.cta}
          </Link>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section">
        <div className="section-header">
          <h2>{amenitiesT.title}</h2>
          <p>{amenitiesT.subtitle}</p>
        </div>
        <div className="amenities-grid">
          {amenitiesT.items.map((name, index) => (
            <div key={index} className="amenity-card">
              <span className="amenity-icon">{amenityIcons[index]}</span>
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* LA FORTUNA */}
      <section className="section fortuna-section">
        <div className="fortuna-grid">
          <div className="fortuna-img">
            <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-tour-visit.webp" alt="Volcan Arenal, La Fortuna" />
          </div>
          <div className="fortuna-text">
            <h2>{fortunaT.title}</h2>
            <p className="subtitle">{fortunaT.subtitle}</p>
            <p>{fortunaT.p1}</p>
            <p>{fortunaT.p2}</p>
            <div className="fortuna-highlights">
              <div className="fortuna-highlight"><span>🌋</span> {fortunaT.h1}</div>
              <div className="fortuna-highlight"><span>♨️</span> {fortunaT.h2}</div>
              <div className="fortuna-highlight"><span>🌊</span> {fortunaT.h3}</div>
              <div className="fortuna-highlight"><span>🌿</span> {fortunaT.h4}</div>
              <div className="fortuna-highlight"><span>🦜</span> {fortunaT.h5}</div>
              <div className="fortuna-highlight"><span>🌄</span> {fortunaT.h6}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section section-dark">
        <div className="section-header">
          <h2>{activitiesT.title}</h2>
        </div>
        <p className="activities-intro">
          {activitiesT.intro}
        </p>
        <div className="activities-grid">
          {activitiesT.items.map((activity, index) => (
            <div key={index} className="activity-card">
              <span className="activity-icon">{activityIcons[index]}</span>
              <div>
                <h3>{activity.title}</h3>
                <p>{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-cta">
          <Link href="/reservar" className="btn-primary" style={{ color: 'white', borderColor: 'white' }}>
            {activitiesT.cta}
          </Link>
        </div>
      </section>

      {/* REVIEWS CAROUSEL */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>{reviewsT.title}</h2>
          <p>{reviewsT.subtitle}</p>
        </div>
        <div className="reviews-wrapper">
          <div
            className="reviews-track"
            style={{
              transform: `translateX(-${currentReview * 100}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-card-inner">
                  <div className="review-stars">★★★★★</div>
                  <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                  <div className="review-author">
                    <div className="review-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="review-author-info">
                      <h4>{review.name}</h4>
                      <span>{review.country}</span>
                    </div>
                  </div>
                  <span className="review-google">Google Reviews</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prevReview}>
            ←
          </button>
          <div className="carousel-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot${index === currentReview ? ' active' : ''}`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={nextReview}>
            →
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="section-header">
          <h2>{contactT.title}</h2>
          <p>{contactT.subtitle}</p>
        </div>
        <div className="contact-section">
          <div className="contact-info">
            <h3>{contactT.infoTitle}</h3>
            <div className="contact-info-item">
              <span>📍</span>
              <div>
                <strong>{contactT.locationLabel}</strong>
                <p>{contactT.locationValue}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span>🕐</span>
              <div>
                <strong>{contactT.checkLabel}</strong>
                <p>{contactT.checkValue}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span>💬</span>
              <div>
                <strong>{contactT.langLabel}</strong>
                <p>{contactT.langValue}</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div style={{ marginTop: '3rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d-84.6!3d10.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3726cd7a835%3A0x2b0e4a7d3f8b1c5a!2sNatura%20Bungalows!5e0!3m2!1ses!2scr!4v1710000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Natura Bungalows - Ubicacion"
          ></iframe>
        </div>
      </section>
    </>
  );
}
