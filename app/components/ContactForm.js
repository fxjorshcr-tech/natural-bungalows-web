'use client'

import { useState } from 'react'

export default function ContactForm({ compact = false }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: conectar con servicio de correo
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success">
        <h3>Mensaje enviado</h3>
        <p>Gracias por contactarnos. Te responderemos pronto.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={`name-${compact ? 'c' : 'f'}`}>Nombre</label>
          <input
            id={`name-${compact ? 'c' : 'f'}`}
            type="text"
            required
            placeholder="Tu nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor={`email-${compact ? 'c' : 'f'}`}>Email</label>
          <input
            id={`email-${compact ? 'c' : 'f'}`}
            type="email"
            required
            placeholder="tu@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor={`msg-${compact ? 'c' : 'f'}`}>Mensaje</label>
        <textarea
          id={`msg-${compact ? 'c' : 'f'}`}
          required
          placeholder="Escribe tu mensaje..."
          rows={compact ? 3 : 5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <button type="submit" className="btn-primary" style={{ border: 'none', fontFamily: 'var(--font-body)' }}>
        Enviar mensaje
      </button>
    </form>
  )
}
