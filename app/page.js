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

export default function HomePage() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

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

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior.webp"
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
      <section className="section">
        <div className="section-inner">
          <div className="about-preview">
            <div className="about-preview-img">
              <img
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior3.webp"
                alt="Natura Bungalows exterior"
              />
            </div>
            <div className="about-preview-text">
              <h2>Un refugio entre la naturaleza</h2>
              <p>
                Natura Bungalows es un proyecto familiar creado con amor por Jose y Yancy, dos costarricenses apasionados por ofrecer un servicio de calidad. Nuestro objetivo es que cada huesped viva una experiencia unica en La Fortuna, rodeado de la belleza natural del Volcan Arenal. Desde el primer momento nos dedicamos a cuidar cada detalle para que te sientas como en casa, mientras disfrutas de una estadia inolvidable en el corazon de Costa Rica.
              </p>
              <Link href="/nosotros" className="btn-secondary">
                Conoce nuestra historia
              </Link>
            </div>
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

      {/* ACTIVITIES */}
      <section className="section section-dark">
        <div className="section-header">
          <h2>Actividades en La Fortuna</h2>
          <p>Te ayudamos a coordinar tu aventura perfecta</p>
        </div>
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
