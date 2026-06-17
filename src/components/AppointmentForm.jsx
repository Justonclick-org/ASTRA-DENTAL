/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import Button from './Button'

function AppointmentForm() {
  return (
    <form className="form-grid" aria-label="Book appointment form">
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Preferred Date
        <input type="date" name="date" required />
      </label>
      <label>
        Preferred Time
        <input type="time" name="time" required />
      </label>
      <label>
        Treatment Required
        <input type="text" name="treatment" required />
      </label>
      <label className="full">
        Message
        <textarea name="message" rows="4" placeholder="Any additional note" />
      </label>
      <Button type="submit">Submit Appointment Request</Button>
    </form>
  )
}

export default AppointmentForm
