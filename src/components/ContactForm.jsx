/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useRef, useState } from 'react'
import Button from './Button'
import { siteConfig } from '../constants/siteConfig'
import { trackEvent } from '../analytics/gtm'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const formStartTracked = useRef(false)

  const handleFormStart = () => {
    if (formStartTracked.current) return
    formStartTracked.current = true
    trackEvent('form_start', { form_name: 'contact' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const getText = (name) => {
      const value = formData.get(name)
      return typeof value === 'string' ? value : ''
    }
    const subject = encodeURIComponent('Website inquiry for Astra Dental Clinic')
    const body = encodeURIComponent([
      `Name: ${getText('name')}`,
      `Phone: ${getText('phone')}`,
      `Email: ${getText('email')}`,
      '',
      `Message: ${getText('message')}`,
    ].join('\n'))

    trackEvent('contact_form_submit', { form_name: 'contact' })
    setSubmitted(true)
    globalThis.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <form
      className="form-grid contact-form"
      aria-label="Contact form"
      onFocusCapture={handleFormStart}
      onSubmit={handleSubmit}
    >
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
      {submitted && (
        <output className="full">
          Your email app should open with the inquiry prepared. Send the email to reach our team.
        </output>
      )}
    </form>
  )
}

export default ContactForm
