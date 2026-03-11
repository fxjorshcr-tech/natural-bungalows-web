'use client';

import { useState, useRef, useEffect } from 'react';

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const WEEKDAYS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

export default function DatePicker({ value, onChange, label, minDate }) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => {
    if (value) {
      const [y, m] = value.split('-');
      return { year: parseInt(y), month: parseInt(m) - 1 };
    }
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const min = minDate ? new Date(minDate + 'T00:00:00') : today;

  const daysInMonth = new Date(viewDate.year, viewDate.month + 1, 0).getDate();
  const firstDay = new Date(viewDate.year, viewDate.month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const prevMonth = () => {
    setViewDate((prev) => {
      if (prev.month === 0) return { year: prev.year - 1, month: 11 };
      return { ...prev, month: prev.month - 1 };
    });
  };

  const nextMonth = () => {
    setViewDate((prev) => {
      if (prev.month === 11) return { year: prev.year + 1, month: 0 };
      return { ...prev, month: prev.month + 1 };
    });
  };

  const selectDay = (day) => {
    const m = String(viewDate.month + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    const dateStr = `${viewDate.year}-${m}-${d}`;
    onChange(dateStr);
    setOpen(false);
  };

  const formatDisplay = (val) => {
    if (!val) return '';
    const [y, m, d] = val.split('-');
    return `${d}/${m}/${y}`;
  };

  const isDisabled = (day) => {
    const date = new Date(viewDate.year, viewDate.month, day);
    return date < min;
  };

  const isToday = (day) => {
    return viewDate.year === today.getFullYear() &&
           viewDate.month === today.getMonth() &&
           day === today.getDate();
  };

  const isSelected = (day) => {
    if (!value) return false;
    const [y, m, d] = value.split('-').map(Number);
    return viewDate.year === y && viewDate.month === m - 1 && day === d;
  };

  return (
    <div className="form-group" ref={ref}>
      <label>{label}</label>
      <div className="date-input-wrapper">
        <input
          type="text"
          value={formatDisplay(value)}
          onClick={() => setOpen(!open)}
          readOnly
          placeholder="dd/mm/aaaa"
          style={{ cursor: 'pointer' }}
        />
        {open && (
          <div className="date-picker-dropdown">
            <div className="date-picker-header">
              <button type="button" onClick={prevMonth}>&#8249;</button>
              <span>{MONTHS[viewDate.month]} {viewDate.year}</span>
              <button type="button" onClick={nextMonth}>&#8250;</button>
            </div>
            <div className="date-picker-weekdays">
              {WEEKDAYS.map((d) => <span key={d}>{d}</span>)}
            </div>
            <div className="date-picker-days">
              {Array.from({ length: startOffset }).map((_, i) => (
                <button key={`empty-${i}`} className="date-picker-day empty" type="button" disabled />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const disabled = isDisabled(day);
                const selected = isSelected(day);
                const todayClass = isToday(day);
                return (
                  <button
                    key={day}
                    type="button"
                    className={`date-picker-day${selected ? ' selected' : ''}${todayClass ? ' today' : ''}${disabled ? ' disabled' : ''}`}
                    onClick={() => !disabled && selectDay(day)}
                    disabled={disabled}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
