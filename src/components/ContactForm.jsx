/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import Button from './Button'

function ContactForm() {
  return (
    <form className="form-grid" aria-label="Contact form">
      <label>
        <span>Name</span>
        <input type="text" name="name" placeholder="Your full name" required />
      </label>
      <label>
        <span>Phone</span>
        <input type="tel" name="phone" placeholder="Your phone number" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="Your email address" required />
      </label>
      <label className="full">
        <span>Message</span>
        <textarea name="message" rows="4" placeholder="Tell us your concern" required />
      </label>
      <Button type="submit">Send Inquiry</Button>
    </form>
  )
}

export default ContactForm
