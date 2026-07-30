/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Button from './Button'
import { siteConfig } from '../constants/siteConfig'

const SLOT_GROUPS = [
  {
    label: 'Morning',
    slots: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
  },
  {
    label: 'Afternoon',
    slots: ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30'],
  },
  {
    label: 'Evening',
    slots: ['16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'],
  },
]

function fmt12(t) {
  const [h, m] = t.split(':').map(Number)
  const ampm = h >= 12 ? 'PM' : 'AM'
  const hr = h % 12 || 12
  return `${hr}:${m.toString().padStart(2, '0')} ${ampm}`
}

function isSunday(dateStr) {
  if (!dateStr) return false
  return new Date(dateStr + 'T00:00:00').getDay() === 0
}

const initialForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  slot: '',
  treatment: '',
  message: '',
}

function AppointmentForm({ onSuccess }) {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'date' ? { slot: '' } : {}),
    }))
  }

  const selectSlot = (slot) => {
    setForm((prev) => ({ ...prev, slot }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [
      "Hello Astra Dental Clinic! I'd like to book an appointment.",
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Treatment: ${form.treatment}`,
      form.date
        ? `Preferred Date: ${new Date(form.date + 'T00:00:00').toLocaleDateString('en-IN', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}`
        : null,
      form.slot ? `Preferred Time: ${fmt12(form.slot)}` : null,
      form.message ? `Notes: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines)}`, '_blank')
    setSubmitted(true)
    if (onSuccess) onSuccess()
  }

  const dateSelected = Boolean(form.date)
  const sunday = isSunday(form.date)

  if (submitted) {
    return (
      <div className="appt-success">
        <FaWhatsapp className="appt-success-icon" />
        <h3>Opening WhatsApp…</h3>
        <p>
          Your appointment details are pre-filled. Just hit <strong>Send</strong> and our team will confirm
          your slot within 2 hours.
        </p>
        <Button variant="ghost" onClick={() => setSubmitted(false)}>
          Book Another
        </Button>
      </div>
    )
  }

  return (
    <form className="form-grid" aria-label="Book appointment" onSubmit={handleSubmit}>
      <label>
        {'Full Name *'}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
        />
      </label>

      <label>
        {'Phone Number *'}
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="+91 98xxx xxxxx"
        />
      </label>

      <label>
        {'Email'}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </label>

      <label>
        {'Treatment Required *'}
        <select name="treatment" value={form.treatment} onChange={handleChange} required>
          <option value="">Select treatment…</option>
          <option>Dental Implants</option>
          <option>Root Canal Treatment</option>
          <option>Braces &amp; Aligners</option>
          <option>Teeth Whitening</option>
          <option>Smile Makeover</option>
          <option>Cosmetic Dentistry</option>
          <option>Pediatric Dentistry</option>
          <option>General Check-up</option>
          <option>Other / Not Sure</option>
        </select>
      </label>

      {/* Date picker */}
      <label className="full">
        {'Preferred Date'}
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
        />
      </label>

      {/* Slot picker — always visible, disabled until date chosen */}
      <div className="slot-picker full">
        <p className="slot-picker-label">
          {dateSelected ? (
            <>
              Pick a Time Slot
              {sunday && (
                <span className="slot-sunday-note"> · Sunday — select any slot and we'll confirm</span>
              )}
            </>
          ) : (
            <span className="slot-picker-hint">Select a date above to choose your time slot</span>
          )}
        </p>
        {SLOT_GROUPS.map((group) => (
          <div key={group.label} className={`slot-group${dateSelected ? '' : ' slot-group-disabled'}`}>
            <span className="slot-group-label">{group.label}</span>
            <div className="slot-grid">
              {group.slots.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`slot-btn${form.slot === s ? ' selected' : ''}${!dateSelected ? ' disabled' : ''}`}
                  onClick={() => dateSelected && selectSlot(s)}
                  aria-pressed={form.slot === s}
                  disabled={!dateSelected}
                >
                  {fmt12(s)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <label className="full">
        {'Additional Notes'}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="3"
          placeholder="Any specific concern, existing medical conditions or special request…"
        />
      </label>

      <button type="submit" className="btn btn-whatsapp full">
        <FaWhatsapp />
        Send via WhatsApp
      </button>
    </form>
  )
}

export default AppointmentForm
