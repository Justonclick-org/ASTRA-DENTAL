/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import SEOComponent from '../components/SEOComponent'
import AppointmentForm from '../components/AppointmentForm'
import { siteConfig } from '../constants/siteConfig'

function AppointmentPage() {
  return (
    <>
      <SEOComponent
        title="Book Dental Appointment in Chembur | Astra Dental Clinic | Dr. Amit Pawar"
        description="Book a dental appointment with Dr. Amit Pawar at Astra Dental Clinic, Chembur Mumbai. Call +91 98605 32742 or WhatsApp for implants, root canal, braces, whitening and more."
        keywords="book dentist appointment Chembur, dental appointment Mumbai, Dr Amit Pawar appointment, Astra Dental Clinic booking, dental consultation Chembur"
        path="/book-appointment"
      />

      {/* ── Page hero — slim gradient, no image ── */}
      <section className="appt-hero">
        <div className="container appt-hero-inner">
          <p className="eyebrow">Astra Dental Clinic · Chembur, Mumbai</p>
          <h1>Book Your Appointment</h1>
          <p className="appt-hero-sub">
            Fill the form below — WhatsApp opens with your details pre-filled.<br />
            Our team confirms your slot within 2 hours.
          </p>
          <div className="appt-hero-contacts">
            <a
              href={siteConfig.whatsappBookingUrl}
              target="_blank"
              rel="noreferrer"
              className="appt-hero-contact-link appt-hero-wa"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Form + Journey ── */}
      <section className="container inner-page">
        <div className="grid grid-2 appt-main-grid">
          <AppointmentForm />

          <article className="card simple-card appt-journey-card">
            <p className="eyebrow">What Happens Next</p>
            <h3>Your Appointment Journey</h3>
            <ul className="appt-steps">
              {[
                'Fill the form — takes under 60 seconds',
                'WhatsApp opens with your details pre-filled — just hit Send',
                'Our team confirms your slot within 2 hours',
                'Arrive 10 minutes early for your first consultation',
                'Leave with a clear treatment plan and transparent pricing',
              ].map((step) => (
                <li key={step} className="appt-step">
                  <FaCheckCircle className="appt-step-icon" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="appt-hours-box">
              <strong>Clinic Hours</strong>
              {siteConfig.operatingHours.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>

            <div className="appt-emergency">
              <FaWhatsapp />
              <div>
                <strong>Emergency / Same-day</strong>
                <a
                  href={siteConfig.whatsappBookingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

    </>
  )
}

export default AppointmentPage
