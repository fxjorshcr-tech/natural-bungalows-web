'use client';

import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../i18n/LanguageContext';

export default function Nosotros() {
  const { lang, t } = useLanguage();
  const p = t.nosotrosPage[lang];
  const nav = t.nav[lang];

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior3.webp" alt="Natura Bungalows" />
        </div>
        <div className="page-hero-overlay" />
        <h1>{p.heroTitle}</h1>
        <p>{p.heroSub}</p>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="about-content">
            <div className="about-text">
              <h2>{p.name}</h2>
              <p>{p.p1}</p>
              <p>{p.p2}</p>
              <p>{p.p3}</p>
              <p>{p.p4}</p>
              <div className="about-buttons">
                <Link href="/reservar" className="btn-primary" style={{ border: 'none', fontFamily: 'var(--font-body)' }}>
                  {p.ctaBook}
                </Link>
                <Link href="/contacto" className="btn-secondary">
                  {p.ctaContact}
                </Link>
              </div>
            </div>
            <div className="about-img">
              <img
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/joseyyansy_natural.jpg"
                alt="Jose y Yancy - Natura Bungalows"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.scoresTitle}</h2>
            <p>{p.scoresSub}</p>
          </div>
          <div className="scores-grid">
            <div className="score-card">
              <div className="score-number">9.7</div>
              <div className="score-label">{p.personal}</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.7</div>
              <div className="score-label">{p.instalaciones}</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.8</div>
              <div className="score-label">{p.limpieza}</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.8</div>
              <div className="score-label">{p.confort}</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.6</div>
              <div className="score-label">{p.calidad}</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.3</div>
              <div className="score-label">{p.ubicacion}</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.6</div>
              <div className="score-label">{p.wifi}</div>
            </div>
            <div className="score-card">
              <div className="score-number">9.7</div>
              <div className="score-label">{p.general}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.spaceTitle}</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior6.webp" alt="Exterior de Natura Bungalows" />
            </div>
            <div className="gallery-item">
              <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior2.webp" alt="Interior de Natura Bungalows" />
            </div>
            <div className="gallery-item">
              <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior8.webp" alt="Exterior de Natura Bungalows" />
            </div>
            <div className="gallery-item">
              <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior7.webp" alt="Interior de Natura Bungalows" />
            </div>
            <div className="gallery-item">
              <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior10.webp" alt="Exterior de Natura Bungalows" />
            </div>
            <div className="gallery-item">
              <img src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior12.webp" alt="Interior de Natura Bungalows" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.ctaTitle}</h2>
            <p>{p.ctaSub}</p>
          </div>
          <Link href="/reservar" className="btn-primary" style={{ border: 'none', fontFamily: 'var(--font-body)' }}>
            {p.ctaBook}
          </Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.writeTitle}</h2>
            <p>{p.writeSub}</p>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
