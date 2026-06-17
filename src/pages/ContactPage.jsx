/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'
import { contactInfo } from '../data/contactData'

function ContactPage() {
  return (
    <>
      <SEOComponent
        title="Contact Astra Dental Clinic | Book Consultation"
        description="Contact Astra Dental Clinic for appointments, emergency consultations, treatment guidance and location details."
        path="/contact"
      />
      <section className="container inner-page">
        <SectionTitle eyebrow="Contact" title="Get In Touch" />
        <div className="grid grid-2">
          <article className="card simple-card">
            <p><strong>Address:</strong> {contactInfo.address}</p>
            <p><strong>Phone:</strong> {contactInfo.phone}</p>
            <p><strong>WhatsApp:</strong> {contactInfo.whatsapp}</p>
            <p><strong>Email:</strong> {contactInfo.email}</p>
            <p><strong>Working Hours:</strong> {contactInfo.workingHours.join(' | ')}</p>
            <div className="inline-actions">
              <Button href={`tel:${contactInfo.phone}`}>Call Now</Button>
              <Button href={`mailto:${contactInfo.email}`} variant="ghost">
                Email Clinic
              </Button>
            </div>
          </article>
          <ContactForm />
        </div>
      </section>
      <section className="container inner-page">
        <iframe
          title="Astra Dental Clinic Location"
          className="map-frame"
          src={contactInfo.mapEmbed}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}

export default ContactPage
