'use client';

import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageContext';

const HERO_IMG = 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior3.webp';

const PHOTOS = {
  aves: [
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves1.jpg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves2.jpg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves3.jpg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves4.jpg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves5.jpg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves6.jpg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves7.jpg',
  ],
  nocturna: [
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/caminata-nocturna-1.jpg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/caminata-nocturna-2.jpg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/caminata-nocturna-3.jpg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/caminata-nocturna-4.jpg',
  ],
  otros: [
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.35%20PM%20(1)%20-%20copia.jpeg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.35%20PM%20(2)%20-%20copia.jpeg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.35%20PM%20(3)%20-%20copia.jpeg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(1).jpeg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(2).jpeg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(3).jpeg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(4).jpeg',
    'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(5).jpeg',
  ],
};

export default function VidaSilvestre() {
  const { lang, t } = useLanguage();
  const p = t.wildlife[lang];

  return (
    <>
      {/* Hero */}
      <div className="page-hero wildlife-hero">
        <div className="page-hero-bg">
          <img src={HERO_IMG} alt="Vida Silvestre - Natura Bungalows" />
        </div>
        <div className="page-hero-overlay" />
        <h1>{p.heroTitle}</h1>
        <p>{p.heroSub}</p>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="section-inner">
          <div className="wildlife-intro">
            <div className="wildlife-intro-text">
              <h2>{p.introTitle}</h2>
              <p>{p.introP1}</p>
              <p>{p.introP2}</p>
            </div>
            <div className="wildlife-intro-mosaic">
              <img src={PHOTOS.aves[1]} alt={p.birdAlt} className="mosaic-main" />
              <img src={PHOTOS.aves[2]} alt={p.birdAlt} className="mosaic-secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Birds - Costa Rica Biodiversity */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.birdsTitle}</h2>
            <p>{p.birdsSub}</p>
          </div>
          <div className="wildlife-text-block">
            <p>{p.birdsP1}</p>
          </div>
          <div className="wildlife-birds-grid">
            <div className="wildlife-birds-item">
              <img src={PHOTOS.aves[0]} alt={p.birdAlt} />
            </div>
            <div className="wildlife-birds-item">
              <img src={PHOTOS.aves[3]} alt={p.birdAlt} />
            </div>
            <div className="wildlife-birds-item">
              <img src={PHOTOS.aves[4]} alt={p.birdAlt} />
            </div>
            <div className="wildlife-birds-item">
              <img src={PHOTOS.aves[5]} alt={p.birdAlt} />
            </div>
            <div className="wildlife-birds-item">
              <img src={PHOTOS.aves[6]} alt={p.birdAlt} />
            </div>
          </div>
          <div className="wildlife-text-block">
            <p>{p.birdsP2}</p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section section-dark wildlife-stats-section">
        <div className="section-inner">
          <div className="wildlife-stats">
            <div className="wildlife-stat">
              <span className="wildlife-stat-number">920+</span>
              <span className="wildlife-stat-label">{p.statBirds}</span>
            </div>
            <div className="wildlife-stat">
              <span className="wildlife-stat-number">250+</span>
              <span className="wildlife-stat-label">{p.statMammals}</span>
            </div>
            <div className="wildlife-stat">
              <span className="wildlife-stat-number">230+</span>
              <span className="wildlife-stat-label">{p.statReptiles}</span>
            </div>
            <div className="wildlife-stat">
              <span className="wildlife-stat-number">5%</span>
              <span className="wildlife-stat-label">{p.statBiodiversity}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Night Walk */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.nightTitle}</h2>
            <p>{p.nightSub}</p>
          </div>
          <div className="wildlife-text-block">
            <p>{p.nightP1}</p>
          </div>
          <div className="wildlife-grid-4">
            {PHOTOS.nocturna.map((src, i) => (
              <div key={i} className="wildlife-grid-item">
                <img src={src} alt={p.nightAlt} />
              </div>
            ))}
          </div>
          <div className="wildlife-text-block">
            <p>{p.nightP2}</p>
          </div>
        </div>
      </section>

      {/* More Wildlife */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.moreTitle}</h2>
            <p>{p.moreSub}</p>
          </div>
          <div className="wildlife-text-block">
            <p>{p.moreP1}</p>
          </div>
          <div className="wildlife-masonry">
            {PHOTOS.otros.map((src, i) => (
              <div key={i} className="wildlife-masonry-item">
                <img src={src} alt={p.wildlifeAlt} />
              </div>
            ))}
          </div>
          <div className="wildlife-text-block">
            <p>{p.moreP2}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.ctaTitle}</h2>
            <p>{p.ctaSub}</p>
          </div>
          <Link href="/reservar" className="btn-primary" style={{ border: 'none', fontFamily: 'var(--font-body)' }}>
            {p.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  );
}
