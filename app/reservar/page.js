'use client';

import { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to email service later
    setSent(true);
  };

  return (
    <>
      <div className="page-hero">
        <h1>Reservar</h1>
        <p>Selecciona tu bungalow y fechas de estadia</p>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="reservation-wrapper">
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                color: 'var(--color-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Elige tu bungalow
            </h2>

            <div
              className={`bungalow-option${selectedBungalow === 'deluxe' ? ' selected' : ''}`}
              onClick={() => setSelectedBungalow('deluxe')}
            >
              <div className="bungalow-thumb">
                <img
                  src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/interior.webp"
                  alt="Bungalow Deluxe"
                />
              </div>
              <div className={`bungalow-radio${selectedBungalow === 'deluxe' ? ' checked' : ''}`}></div>
              <div className="bungalow-info">
                <h3>Bungalow Deluxe</h3>
                <p>
                  36 m&sup2; &middot; 1 cama doble extragrande &middot; Cocina
                  privada &middot; Terraza con vistas
                </p>
              </div>
            </div>

            <div
              className={`bungalow-option${selectedBungalow === 'deluxe-jardin' ? ' selected' : ''}`}
              onClick={() => setSelectedBungalow('deluxe-jardin')}
            >
              <div className="bungalow-thumb">
                <img
                  src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/exterior2.webp"
                  alt="Bungalow Deluxe con Vistas al Jardin"
                />
              </div>
              <div className={`bungalow-radio${selectedBungalow === 'deluxe-jardin' ? ' checked' : ''}`}></div>
              <div className="bungalow-info">
                <h3>Bungalow Deluxe con Vistas al Jardin</h3>
                <p>
                  36 m&sup2; &middot; 1 cama doble extragrande &middot; Vistas
                  al jardin y volcan
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Fecha de entrada</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Fecha de salida</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Numero de huespedes</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="">Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Telefono</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Mensaje o solicitudes especiales</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Confirmar reserva
              </button>
            </form>

            {sent && (
              <div className="form-success">
                <h3>Solicitud enviada</h3>
                <p>
                  Hemos recibido tu solicitud de reserva. Te contactaremos
                  pronto para confirmar disponibilidad y detalles.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
