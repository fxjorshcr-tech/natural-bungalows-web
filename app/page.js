'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ContactForm from './components/ContactForm';

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

const amenities = [
  { icon: '📶', name: 'WiFi gratis' },
  { icon: '🅿️', name: 'Parking privado' },
  { icon: '❄️', name: 'Aire acondicionado' },
  { icon: '🍳', name: 'Cocina equipada' },
  { icon: '🌋', name: 'Vistas al volcan' },
  { icon: '📺', name: 'Netflix / Streaming' },
  { icon: '☀️', name: 'Terraza privada' },
  { icon: '🛁', name: 'Bano privado' },
];

const activities = [
  { icon: '🌊', title: 'Catarata La Fortuna', desc: 'A 5 km del bungalow' },
  { icon: '🌋', title: 'Volcan Arenal', desc: 'Parque Nacional Volcan Arenal' },
  { icon: '♨️', title: 'Aguas termales', desc: 'Kalambu, Ecotermales y mas' },
  { icon: '🌿', title: 'Puentes colgantes', desc: 'Mistico Arenal Hanging Bridges' },
  { icon: '🚡', title: 'Canopy y aventura', desc: 'Ecoglide Arenal Park' },
  { icon: '🚣', title: 'Rafting y kayak', desc: 'Rio Balsa y Lago Arenal' },
  { icon: '🦜', title: 'Caminatas nocturnas', desc: 'Descubre la fauna tropical' },
  { icon: '🐴', title: 'Cabalgatas', desc: 'Rutas con vistas al volcan' },
  { icon: '🎯', title: 'Bungee jumping', desc: 'Arenal Bungee' },
];

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
          <h1>Natura Bungalows</h1>
          <p>LA FORTUNA, COSTA RICA</p>
          <div className="hero-rating">
            ★★★★★ 9.7 Excepcional - 169 reseñas
          </div>
          <Link href="/reservar" className="btn-primary">
            Reservar ahora
          </Link>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section about-section-enhanced">
        <div className="section-inner">
          <div className="section-header">
            <h2>Un refugio entre la naturaleza</h2>
            <p>Donde la hospitalidad costarricense se encuentra con el lujo natural</p>
          </div>

          <div className="about-enhanced-grid">
            <div className="about-enhanced-main">
              <div className="about-enhanced-img-main">
                <img
                  src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior3.webp"
                  alt="Natura Bungalows exterior"
                />
              </div>
              <div className="about-enhanced-content">
                <h3>Jose & Yancy</h3>
                <p className="about-enhanced-subtitle">Fundadores de Natura Bungalows</p>
                <p>
                  Somos Jose y Yancy, una familia costarricense dedicada al turismo con una pasion
                  genuina por la hospitalidad. Creamos Natura Bungalows con un sueno claro: ofrecer
                  a cada visitante una experiencia autentica, rodeada de la naturaleza exuberante
                  de La Fortuna y con vistas privilegiadas al majestuoso Volcan Arenal.
                </p>
                <p>
                  Cada detalle ha sido pensado con amor: desde los jardines tropicales que rodean
                  los bungalows, hasta la cocina completamente equipada y la terraza privada donde
                  podras contemplar el volcan con un cafe en la mano. Personalmente damos la bienvenida
                  a cada huesped y nos aseguramos de que tu estadia sea perfecta.
                </p>
              </div>
            </div>

            <div className="about-enhanced-features">
              <div className="about-feature-card">
                <span className="about-feature-icon">🏡</span>
                <div>
                  <h4>Solo 3 bungalows</h4>
                  <p>Privacidad total y atencion personalizada para cada huesped</p>
                </div>
              </div>
              <div className="about-feature-card">
                <span className="about-feature-icon">⭐</span>
                <div>
                  <h4>9.7 en Booking.com</h4>
                  <p>169 resenas excepcionales de huespedes de todo el mundo</p>
                </div>
              </div>
              <div className="about-feature-card">
                <span className="about-feature-icon">🌋</span>
                <div>
                  <h4>Vistas al Volcan Arenal</h4>
                  <p>Contempla el volcan desde tu terraza privada cada manana</p>
                </div>
              </div>
              <div className="about-feature-card">
                <span className="about-feature-icon">🇨🇷</span>
                <div>
                  <h4>Anfitriones locales</h4>
                  <p>Te ayudamos a coordinar tours, restaurantes y experiencias unicas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-carousel">
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

          <div className="about-enhanced-cta">
            <Link href="/nosotros" className="btn-secondary">
              Conoce nuestra historia completa
            </Link>
            <Link href="/reservar" className="btn-primary" style={{ border: 'none' }}>
              Reservar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Nuestros Bungalows</h2>
          <p>Espacios diseñados para tu descanso</p>
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
            Reservar tu estadia
          </Link>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section">
        <div className="section-header">
          <h2>Comodidades</h2>
          <p>Todo lo que necesitas para una estadia perfecta</p>
        </div>
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <span className="amenity-icon">{amenity.icon}</span>
              <h3>{amenity.name}</h3>
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
            <h2>Descubre La Fortuna</h2>
            <p className="subtitle">El destino mas visitado de Costa Rica</p>
            <p>La Fortuna de San Carlos es un paraiso tropical al pie del majestuoso Volcan Arenal, uno de los volcanes mas activos y emblematicos de Costa Rica. Esta pequena ciudad se ha convertido en el epicentro del turismo de aventura y naturaleza del pais.</p>
            <p>Rodeada de selva tropical, rios cristalinos y una biodiversidad asombrosa, La Fortuna ofrece una combinacion unica de aventura, relajacion y cultura costarricense. Desde aguas termales naturales calentadas por el volcan hasta cascadas espectaculares, cada rincon esconde una experiencia inolvidable.</p>
            <div className="fortuna-highlights">
              <div className="fortuna-highlight">
                <span>🌋</span> Volcan Arenal activo
              </div>
              <div className="fortuna-highlight">
                <span>♨️</span> Aguas termales naturales
              </div>
              <div className="fortuna-highlight">
                <span>🌊</span> Cascadas y rios
              </div>
              <div className="fortuna-highlight">
                <span>🌿</span> Selva tropical virgen
              </div>
              <div className="fortuna-highlight">
                <span>🦜</span> Biodiversidad unica
              </div>
              <div className="fortuna-highlight">
                <span>🌄</span> Vistas espectaculares
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section section-dark">
        <div className="section-header">
          <h2>Actividades en La Fortuna</h2>
        </div>
        <p className="activities-intro">
          La Fortuna es mucho mas que un destino: es una experiencia. Con decenas de actividades para todos los gustos, desde aventuras extremas hasta paseos tranquilos por la naturaleza, aqui siempre hay algo nuevo por descubrir. Nosotros te ayudamos a coordinar cada detalle para que disfrutes al maximo.
        </p>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <span className="activity-icon">{activity.icon}</span>
              <div>
                <h3>{activity.title}</h3>
                <p>{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-cta">
          <Link href="/reservar" className="btn-primary" style={{ color: 'white', borderColor: 'white' }}>
            Planifica tu aventura
          </Link>
        </div>
      </section>

      {/* REVIEWS CAROUSEL */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Lo que dicen nuestros huespedes</h2>
          <p>Puntuacion 9.7/10 en Booking.com</p>
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
          <h2>Contactanos</h2>
          <p>Estamos aqui para ayudarte</p>
        </div>
        <div className="contact-section">
          <div className="contact-info">
            <h3>Informacion de contacto</h3>
            <div className="contact-info-item">
              <span>📍</span>
              <div>
                <strong>Ubicacion</strong>
                <p>La Fortuna, San Carlos, Alajuela, Costa Rica</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span>🕐</span>
              <div>
                <strong>Check-in / Check-out</strong>
                <p>Entrada: 14:00 - 18:00 | Salida: Disponible 24h</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span>💬</span>
              <div>
                <strong>Idiomas</strong>
                <p>Español e Ingles</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
