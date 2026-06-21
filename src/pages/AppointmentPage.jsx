/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import AppointmentForm from '../components/AppointmentForm'

const bannerImg = 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1920&q=80'

function AppointmentPage() {
  return (
    <>
      <SEOComponent
        title="Book Dental Appointment in Chembur | Astra Dental Clinic | Dr. Amit Pawar"
        description="Book a dental appointment with Dr. Amit Pawar at Astra Dental Clinic, Chembur Mumbai. Call +91 98605 32742 or fill the form for implants, root canal, braces, whitening and more."
        keywords="book dentist appointment Chembur, dental appointment Mumbai, Dr Amit Pawar appointment, Astra Dental Clinic booking, dental consultation Chembur"
        path="/book-appointment"
      />

      <PageBanner
        eyebrow="Book Appointment"
        title="Schedule Your"
        accentTitle="Consultation"
        description="Choose your preferred date, time and treatment concern — we'll confirm within 2 hours."
        bgImage={bannerImg}
      />

      <section className="container inner-page">
        <SectionTitle eyebrow="Appointment" title="Book Your" accentTitle="Visit" />
        <div className="grid grid-2">
          <AppointmentForm />
          <article className="card simple-card">
            <p className="eyebrow">What Happens Next</p>
            <h3>Your Appointment Journey</h3>
            <ul>
              <li>Fill the form and submit your preferred date and concern</li>
              <li>Our team confirms your slot within 2 hours via call or WhatsApp</li>
              <li>Arrive 10 minutes early for your first consultation</li>
              <li>Leave with a clear treatment plan and transparent pricing</li>
            </ul>
            <p className="muted-text" style={{ marginTop: 16 }}>
              For same-day or emergency appointments, call us directly at +91 99999 00111.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default AppointmentPage
