/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import Button from './Button'

function CTASection({ title = 'Book Your Consultation Today', description = 'Connect with our specialists for a personalized treatment plan.' }) {
  return (
    <section className="cta-section container">
      <div>
        <p className="eyebrow">Quick Appointment</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-actions">
        <Button to="/book-appointment">Book Appointment</Button>
        <Button to="/contact" variant="ghost">
          Contact Clinic
        </Button>
      </div>
    </section>
  )
}

export default CTASection
