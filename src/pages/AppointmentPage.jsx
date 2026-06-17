/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import AppointmentForm from '../components/AppointmentForm'

function AppointmentPage() {
  return (
    <>
      <SEOComponent
        title="Book Appointment | Astra Dental Clinic"
        description="Schedule your dental consultation with Astra Dental Clinic. Choose preferred date, time and treatment concern."
        path="/book-appointment"
      />
      <section className="container inner-page">
        <SectionTitle eyebrow="Book Appointment" title="Book Your Consultation" />
        <div className="grid grid-2">
          <AppointmentForm />
          <article className="card simple-card">
            <p className="eyebrow">Appointment Management</p>
            <h3>Static-only appointment options</h3>
            <p>
              Since you want a static deployment with no server, the form should connect to an
              external form processor instead of a custom backend.
            </p>
            <ul>
              <li>
                <strong>Fastest option:</strong> Netlify Forms or Formspree for email notification
                on every submission.
              </li>
              <li>
                <strong>Best record-keeping:</strong> send entries to Google Sheets, Airtable, or
                Supabase using an automation layer like Zapier or Make.
              </li>
              <li>
                <strong>Best clinic workflow:</strong> trigger email plus WhatsApp alerts to the
                receptionist and store the lead in a shared dashboard.
              </li>
            </ul>
            <p>
              I can wire this project to Netlify Forms or Formspree next, which keeps the site
              static while still capturing records and sending notifications.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default AppointmentPage
