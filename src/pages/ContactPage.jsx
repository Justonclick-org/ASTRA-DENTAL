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
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'
import { contactInfo } from '../data/contactData'

const bannerImg = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80'

function ContactPage() {
  return (
    <>
      <SEOComponent
        title="Contact Astra Dental Clinic Chembur | Call +91 98605 32742 | Dr. Amit Pawar"
        description="Contact Astra Dental Clinic in Chembur, Mumbai. Call or WhatsApp Dr. Amit Pawar on +91 98605 32742. Located at Chembur Mayur CHSL, Tilak Nagar, Kurla. Emergency dental care available."
        keywords="contact dentist Chembur, dental clinic contact Mumbai, Astra Dental Clinic phone, Dr Amit Pawar appointment, dentist near Tilak Nagar, dentist near Kurla Mumbai, emergency dentist Chembur"
        path="/contact"
      />

      <PageBanner
        eyebrow="Contact Us"
        title="Get In"
        accentTitle="Touch"
        description="We'd love to hear from you. Reach out for appointments, questions or consultations."
        bgImage={bannerImg}
      />

      <section className="container inner-page">
        <SectionTitle eyebrow="Details" title="Clinic" accentTitle="Information" />
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
